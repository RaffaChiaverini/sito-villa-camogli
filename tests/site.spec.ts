import { expect, test, type Locator, type Page } from '@playwright/test';

const AIRBNB_LISTING = 'https://www.airbnb.it/rooms/23678485';
const VRBO_LISTING = 'https://www.vrbo.com/it-it/affitto-vacanze/p8718530';
const SITE_BASE_URL = process.env.PLAYWRIGHT_BASE_URL ?? 'http://127.0.0.1:4321/';

const locales = [
  {
    path: '/',
    lang: /^en(?:-|$)/i,
    heading: /(?:private|ligurian).*(?:villa|house)|(?:villa|house).*camogli/i,
    content: /Camogli/i,
  },
  {
    path: '/it/',
    lang: /^it(?:-|$)/i,
    heading: /(?:villa|dimora).*(?:ligure|Camogli)|Camogli.*(?:villa|dimora)/i,
    content: /Camogli/i,
  },
] as const;

async function goto(page: Page, path: string) {
  const base = SITE_BASE_URL.endsWith('/') ? SITE_BASE_URL : `${SITE_BASE_URL}/`;
  const url = new URL(path.replace(/^\//, ''), base).toString();
  const response = await page.goto(url, { waitUntil: 'networkidle' });
  expect(response, `Expected ${path} to return a document`).not.toBeNull();
  expect(response!.status(), `Expected ${path} not to be an error page`).toBeLessThan(400);
}

async function assertExternalPlatformLink(page: Page, platform: 'Airbnb' | 'Vrbo', expected: string) {
  const links = page.getByRole('link', { name: new RegExp(platform, 'i') });
  expect(await links.count(), `Expected at least one visible ${platform} booking link`).toBeGreaterThan(0);

  for (const link of await links.all()) {
    const href = await link.getAttribute('href');
    expect(href, `${platform} links must point to the approved listing`).toBeTruthy();

    const url = new URL(href!, page.url());
    const approved = new URL(expected);
    expect(url.origin).toBe(approved.origin);
    expect(url.pathname.replace(/\/$/, '')).toBe(approved.pathname.replace(/\/$/, ''));
    expect(await link.getAttribute('target'), `${platform} should open without replacing the villa site`).toBe('_blank');
    expect((await link.getAttribute('rel')) ?? '', `${platform} links need reverse-tabnabbing protection`).toMatch(/\bnoopener\b/);
  }
}

async function optionalControl(page: Page, selector: string): Promise<Locator | null> {
  const control = page.locator(selector).first();
  return (await control.count()) > 0 ? control : null;
}

function byId(page: Page, id: string): Locator {
  return page.locator(`[id=${JSON.stringify(id)}]`);
}

test.describe('localized homepage', () => {
  for (const locale of locales) {
    test(`${locale.path} renders the complete editorial shell`, async ({ page }) => {
      await goto(page, locale.path);

      await expect(page.locator('html')).toHaveAttribute('lang', locale.lang);
      await expect(page.locator('main')).toHaveCount(1);
      await expect(page.getByRole('heading', { level: 1 })).toHaveCount(1);
      await expect(page.getByRole('heading', { level: 1 })).toContainText(locale.heading);
      await expect(page.locator('body')).toContainText(locale.content);

      await assertExternalPlatformLink(page, 'Airbnb', AIRBNB_LISTING);
      await assertExternalPlatformLink(page, 'Vrbo', VRBO_LISTING);
    });
  }

  test('language alternatives are discoverable and reciprocal', async ({ page }) => {
    await goto(page, '/');
    const italian = page.locator('a[hreflang="it"], link[rel="alternate"][hreflang="it"]');
    expect(await italian.count(), 'English page should expose an Italian alternate').toBeGreaterThan(0);

    await goto(page, '/it/');
    const english = page.locator('a[hreflang="en"], link[rel="alternate"][hreflang="en"]');
    expect(await english.count(), 'Italian page should expose an English alternate').toBeGreaterThan(0);
  });

  test('in-page navigation anchors resolve to unique targets', async ({ page }) => {
    await goto(page, '/');
    const anchors = await page.locator('nav a[href*="#"]').evaluateAll((links) =>
      links.map((link) => (link as HTMLAnchorElement).hash).filter(Boolean),
    );

    expect(anchors.length, 'Expected the long-form page navigation to expose section anchors').toBeGreaterThan(0);
    for (const hash of new Set(anchors)) {
      const target = byId(page, hash.slice(1));
      await expect(target, `Navigation target ${hash} should exist exactly once`).toHaveCount(1);
    }
  });

  test('unverified narrative claims are not published in either language', async ({ page }) => {
    for (const path of ['/', '/it/']) {
      await goto(page, path);
      const visibleCopy = await page.locator('body').innerText();
      expect(visibleCopy).not.toMatch(
        /olive mill|1940|frantoio|anni quaranta|hydromassage|idromassaggio|birdsong|canto degli uccelli|boat connections|collegamenti in battello/i,
      );
    }
  });

  test('villa facts are written directly rather than as platform narration', async ({ page }) => {
    for (const path of ['/', '/it/']) {
      await goto(page, path);
      const visibleCopy = await page.locator('body').innerText();
      expect(visibleCopy).not.toMatch(
        /Airbnb (?:states|describes|indicates|currently shows|indica|descrive|specifica|mostra)|Vrbo (?:states|identifies|permits|indica|segnala|consente)/i,
      );
    }
  });
});

test.describe('accessibility fundamentals', () => {
  test.beforeEach(async ({ page }) => goto(page, '/'));

  test('document has essential semantics and labelled media', async ({ page }) => {
    await expect(page).toHaveTitle(/Villa|Camogli/i);
    await expect(page.locator('html')).toHaveAttribute('lang', /\S+/);
    await expect(page.locator('main')).toHaveCount(1);
    await expect(page.locator('img:not([alt])')).toHaveCount(0);

    const unlabelledButtons = await page.locator('button').evaluateAll((buttons) =>
      buttons
        .filter(
          (button) =>
            !button.getAttribute('aria-label') &&
            !button.getAttribute('aria-labelledby') &&
            !button.getAttribute('title') &&
            !button.textContent?.trim(),
        )
        .map((button) => button.outerHTML.slice(0, 160)),
    );
    expect(unlabelledButtons, `Buttons need an accessible name: ${unlabelledButtons.join(', ')}`).toEqual([]);

    const duplicateIds = await page.locator('[id]').evaluateAll((nodes) => {
      const ids = nodes.map((node) => node.id).filter(Boolean);
      return ids.filter((id, index) => ids.indexOf(id) !== index);
    });
    expect(duplicateIds, 'IDs must remain unique for labels and fragment navigation').toEqual([]);
  });

  test('keyboard focus is visible and does not get stranded', async ({ page }) => {
    await page.keyboard.press('Tab');
    const focused = page.locator(':focus-visible');
    await expect(focused, 'First keyboard interaction should expose a visible focus target').toHaveCount(1);

    const styles = await focused.evaluate((element) => {
      const style = getComputedStyle(element);
      return {
        outlineStyle: style.outlineStyle,
        outlineWidth: Number.parseFloat(style.outlineWidth),
        boxShadow: style.boxShadow,
      };
    });
    expect(
      (styles.outlineStyle !== 'none' && styles.outlineWidth > 0) || styles.boxShadow !== 'none',
      'Focused controls need a visible outline or focus ring',
    ).toBe(true);
  });

  test('interactive targets meet the 44px mobile minimum', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.reload({ waitUntil: 'networkidle' });

    const undersized = await page.locator('a:visible, button:visible, summary:visible, input:visible, select:visible').evaluateAll(
      (nodes) =>
        nodes
          .map((node) => {
            const rect = node.getBoundingClientRect();
            const label = node.getAttribute('aria-label') || node.textContent?.trim() || node.tagName;
            return { label: label.slice(0, 80), width: rect.width, height: rect.height };
          })
          .filter(({ width, height }) => width < 44 || height < 44),
    );

    expect(undersized, `Undersized mobile targets: ${JSON.stringify(undersized)}`).toEqual([]);
  });

  test('loads without browser console errors', async ({ browser }) => {
    const page = await browser.newPage();
    const errors: string[] = [];
    page.on('console', (message) => {
      if (message.type() === 'error') errors.push(message.text());
    });
    page.on('pageerror', (error) => errors.push(error.message));
    await goto(page, '/');
    await page.waitForTimeout(250);
    expect(errors, `Unexpected browser errors: ${errors.join(' | ')}`).toEqual([]);
    await page.close();
  });
});

test.describe('optional interaction contracts', () => {
  test.beforeEach(async ({ page }) => goto(page, '/'));

  test('mobile menu opens, closes with Escape, and exposes state', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    const toggle = await optionalControl(page, '[data-menu-toggle]');
    test.skip(!toggle, 'No [data-menu-toggle] contract is present');

    await expect(toggle!).toHaveAttribute('aria-expanded', 'false');
    await expect(page.locator('[data-menu-panel]')).toHaveAttribute('inert', '');
    await toggle!.click();
    await expect(toggle!).toHaveAttribute('aria-expanded', 'true');
    await expect(page.locator('[data-menu-panel]')).toBeVisible();
    await expect(page.locator('[data-menu-panel]')).not.toHaveAttribute('inert', '');
    const lastMenuLink = page.locator('[data-menu-panel] a').last();
    await lastMenuLink.focus();
    await page.keyboard.press('Tab');
    await expect(toggle!).toBeFocused();
    await page.keyboard.press('Escape');
    await expect(toggle!).toHaveAttribute('aria-expanded', 'false');
    await expect(toggle!).toBeFocused();
  });

  test('gallery lightbox is labelled, traps focus, and restores focus', async ({ page }) => {
    const trigger = await optionalControl(page, '[data-lightbox-trigger]');
    test.skip(!trigger, 'No [data-lightbox-trigger] contract is present');

    await trigger!.focus();
    await trigger!.click();
    const dialog = page.locator('[data-lightbox][role="dialog"]');
    await expect(dialog).toBeVisible();
    await expect(dialog).toHaveAttribute('aria-modal', 'true');
    expect(
      (await dialog.getAttribute('aria-label')) || (await dialog.getAttribute('aria-labelledby')),
      'Lightbox dialog needs an accessible name',
    ).toBeTruthy();

    for (let index = 0; index < 8; index += 1) await page.keyboard.press('Tab');
    await expect(dialog.locator(':focus')).toHaveCount(1);

    await page.keyboard.press('Escape');
    await expect(dialog).toBeHidden();
    await expect(trigger!).toBeFocused();
  });

  test('gallery lightbox navigation stays within the active filter', async ({ page }) => {
    const filter = page.locator('[data-gallery-filter="views"]');
    await filter.click();
    const visible = page.locator('[data-lightbox-trigger]:visible');
    const visibleCount = await visible.count();
    expect(visibleCount).toBeGreaterThan(1);
    await visible.first().click();
    const counter = page.locator('[data-lightbox-counter]');
    await expect(counter).toContainText(`1 / ${visibleCount}`);
    await page.keyboard.press('ArrowRight');
    await expect(counter).toContainText(`2 / ${visibleCount}`);
    await page.keyboard.press('Escape');
  });

  test('mobile booking sheet is contained and traps focus', async ({ page }) => {
    await page.setViewportSize({ width: 320, height: 568 });
    const toggle = page.locator('[data-booking-toggle]');
    await toggle.click();
    const sheet = page.locator('[data-booking-sheet]');
    await expect(sheet).toBeVisible();
    await expect(sheet).not.toHaveAttribute('inert', '');
    const bounds = await sheet.boundingBox();
    expect(bounds).not.toBeNull();
    expect(bounds!.x).toBeGreaterThanOrEqual(0);
    expect(bounds!.x + bounds!.width).toBeLessThanOrEqual(320);
    expect(bounds!.y).toBeGreaterThanOrEqual(0);
    const lastLink = sheet.getByRole('link').last();
    await lastLink.focus();
    await page.keyboard.press('Tab');
    await expect(page.locator('[data-booking-close]')).toBeFocused();
    await page.keyboard.press('Escape');
    await expect(sheet).toBeHidden();
    await expect(toggle).toBeFocused();
  });

  test('FAQ controls report expanded state and reveal associated answers', async ({ page }) => {
    const trigger = await optionalControl(page, '[data-faq-trigger]');
    test.skip(!trigger, 'No [data-faq-trigger] contract is present');

    const controls = await trigger!.getAttribute('aria-controls');
    expect(controls, 'FAQ trigger should identify its answer').toBeTruthy();
    await trigger!.click();
    await expect(trigger!).toHaveAttribute('aria-expanded', 'true');
    await expect(byId(page, controls!)).toBeVisible();
  });
});

test.describe('responsive layout', () => {
  for (const viewport of [
    { width: 390, height: 844 },
    { width: 834, height: 1194 },
    { width: 1440, height: 900 },
  ]) {
    test(`has no horizontal overflow at ${viewport.width}x${viewport.height}`, async ({ page }) => {
      await page.setViewportSize(viewport);
      await goto(page, '/');

      const metrics = await page.evaluate(() => ({
        documentWidth: document.documentElement.scrollWidth,
        viewportWidth: document.documentElement.clientWidth,
        overflowing: Array.from(document.querySelectorAll<HTMLElement>('body *'))
          .filter((element) => {
            const rect = element.getBoundingClientRect();
            return rect.left < -1 || rect.right > document.documentElement.clientWidth + 1;
          })
          .slice(0, 10)
          .map((element) => `${element.tagName.toLowerCase()}${element.id ? `#${element.id}` : ''}`),
      }));

      expect(metrics.documentWidth, `Overflowing elements: ${metrics.overflowing.join(', ')}`).toBeLessThanOrEqual(
        metrics.viewportWidth + 1,
      );
    });
  }
});

test.describe('motion preferences', () => {
  test.use({ contextOptions: { reducedMotion: 'reduce' } });

  test('honours reduced motion without hiding content', async ({ page }) => {
    await goto(page, '/');
    expect(await page.evaluate(() => matchMedia('(prefers-reduced-motion: reduce)').matches)).toBe(true);
    await expect(page.locator('main')).toBeVisible();

    const violations = await page.locator('[data-motion]').evaluateAll((nodes) =>
      nodes
        .map((node) => {
          const style = getComputedStyle(node);
          const durations = `${style.animationDuration},${style.transitionDuration}`
            .split(',')
            .map((value) => (value.trim().endsWith('ms') ? Number.parseFloat(value) : Number.parseFloat(value) * 1000));
          return {
            node: `${node.tagName.toLowerCase()}${node.id ? `#${node.id}` : ''}`,
            maxDuration: Math.max(...durations),
          };
        })
        .filter(({ maxDuration }) => maxDuration > 100),
    );
    expect(violations, `Reduced-motion elements still animate: ${JSON.stringify(violations)}`).toEqual([]);
  });
});
