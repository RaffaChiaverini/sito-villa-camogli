import { expect, test, type Page } from "@playwright/test";

const SITE_BASE_URL = process.env.PLAYWRIGHT_BASE_URL ?? "http://127.0.0.1:4321/";
const coreSlugs = [
  "villa",
  "gallery",
  "rooms-floorplans",
  "amenities",
  "rates",
  "availability",
  "location",
  "experiences",
  "reviews",
  "policies",
  "contact",
] as const;

async function goto(page: Page, path: string) {
  const base = SITE_BASE_URL.endsWith("/") ? SITE_BASE_URL : `${SITE_BASE_URL}/`;
  const response = await page.goto(new URL(path.replace(/^\//, ""), base).toString(), { waitUntil: "networkidle" });
  expect(response).not.toBeNull();
  expect(response!.status()).toBeLessThan(400);
}

test.describe("blueprint launch delta", () => {
  for (const localePrefix of ["", "it/"] as const) {
    test(`${localePrefix || "en/"} core pages are static, indexable and reciprocal`, async ({ page }) => {
      for (const slug of coreSlugs) {
        await goto(page, `/${localePrefix}${slug}/`);
        await expect(page.locator("main")).toHaveCount(1);
        await expect(page.getByRole("heading", { level: 1 })).toHaveCount(1);
        await expect(page.locator('link[rel="canonical"]')).toHaveCount(1);
        await expect(page.locator('link[rel="alternate"][hreflang="en"]')).toHaveCount(1);
        await expect(page.locator('link[rel="alternate"][hreflang="it"]')).toHaveCount(1);
        await expect(page.locator('link[rel="alternate"][hreflang="x-default"]')).toHaveCount(1);
        await expect(page.locator('script[type="application/ld+json"]')).toHaveCount(1);
      }
    });
  }

  test("rates and availability never imitate a checkout", async ({ page }) => {
    for (const path of ["/rates/", "/availability/", "/it/rates/", "/it/availability/"]) {
      await goto(page, path);
      await expect(page.locator('input[type="date"], input[type="number"], input[type="email"], input[type="password"]')).toHaveCount(0);
      await expect(page.locator("form")).toHaveCount(0);
      await expect(page.locator("body")).toContainText(/Airbnb/);
      await expect(page.locator("body")).toContainText(/Vrbo/);
    }
  });

  test("registration identifiers and legal surfaces are visible", async ({ page }) => {
    await goto(page, "/legal/");
    await expect(page.locator("body")).toContainText("IT010007C2DQK53S7U");
    await expect(page.locator("body")).toContainText("010007-LT-0063");
    for (const slug of ["privacy", "cookies", "accessibility", "legal"]) {
      await goto(page, `/${slug}/`);
      await expect(page.getByRole("heading", { level: 1 })).toHaveCount(1);
      await goto(page, `/it/${slug}/`);
      await expect(page.getByRole("heading", { level: 1 })).toHaveCount(1);
    }
  });

  test("machine-readable discovery endpoints expose canonical facts", async ({ request }) => {
    const facts = await request.get(new URL("property-facts.json", SITE_BASE_URL).toString());
    expect(facts.ok()).toBe(true);
    const data = await facts.json();
    expect(data.identity.cin).toBe("IT010007C2DQK53S7U");
    expect(data.facts.mainVilla.guests).toBe(12);
    expect(data.facts.estate.guests).toBe(16);
    expect(data.bookingPlatforms.airbnb).toContain("airbnb.it/rooms/23678485");

    const sitemap = await request.get(new URL("sitemap.xml", SITE_BASE_URL).toString());
    expect(sitemap.ok()).toBe(true);
    expect(await sitemap.text()).toContain("rooms-floorplans");

    const robots = await request.get(new URL("robots.txt", SITE_BASE_URL).toString());
    expect(robots.ok()).toBe(true);
    expect(await robots.text()).toContain("OAI-SearchBot");
  });
});
