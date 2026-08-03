# Villa dei Limoni QA

This project treats visual polish, accessibility, and publishing safety as release gates. The automated suite in `tests/` is Playwright-oriented and expects the Astro development server to be available at `PLAYWRIGHT_BASE_URL` (default: `http://127.0.0.1:4321/`). The URL can include the GitHub Pages base path, for example `http://127.0.0.1:4321/camogli/`.

## Automated coverage

- English `/` and Italian `/it/` routes return successfully, declare the correct language, render one `main` and one `h1`, mention Camogli, and expose approved Airbnb and Vrbo links.
- Booking links point to `airbnb.it/rooms/23678485` and `vrbo.com/it-it/affitto-vacanze/p8718530`, open in a new tab, and use `rel="noopener"`.
- Long-form navigation fragment links resolve to one unique section each.
- Basic accessibility checks cover document landmarks, image alternatives, duplicate IDs, visible keyboard focus, and 44px mobile targets.
- Responsive smoke tests reject document-level horizontal overflow at 390×844, 834×1194, and 1440×900.
- Reduced-motion emulation verifies the preference reaches the page and limits opted-in `[data-motion]` transitions and animations to 100ms.
- Optional interaction checks activate when the app supplies the selector contracts below. They skip cleanly before those components exist.
- The prototype-media publication test activates only when `PUBLICATION_BUILD=true` and rejects literal `prototypeOnly: true` entries under `src/content`, `src/data`, or `src/assets`.

Run the suite through the package script selected by the main implementation. Direct invocation is typically:

```sh
bunx playwright test
PUBLICATION_BUILD=true bunx playwright test tests/prototype-assets.spec.ts
```

The publication gate should also be invoked by the application build itself so GitHub Pages cannot be deployed by bypassing the browser test job.

## Stable selector contracts

The tests prefer roles, labels, URLs, and document semantics. Data attributes are reserved for behavior that has no durable user-facing selector:

| Feature | Contract |
| --- | --- |
| Mobile menu | `[data-menu-toggle]` with `aria-expanded`; `[data-menu-panel]` |
| Gallery | `[data-lightbox-trigger]`; `[data-lightbox][role="dialog"][aria-modal="true"]` |
| FAQ | `[data-faq-trigger][aria-controls][aria-expanded]` and a matching answer `id` |
| Motion | `[data-motion]` on elements whose motion needs reduced-motion verification |

The menu and lightbox should close on `Escape` and restore focus to their trigger. The lightbox must retain Tab focus inside the open dialog. Native `<details>/<summary>` FAQ markup is acceptable; omit `data-faq-trigger` if the custom contract does not apply.

## Manual visual review

Review English and Italian pages at 390×844, 834×1194, 1440×900, and 1728px wide in Chrome and Safari, with a Firefox desktop sanity pass. Capture full-page screenshots and score each review from 1–10 for art direction, typography, imagery/crops, hierarchy, interaction, mobile composition, trust, conversion clarity, accessibility, and performance perception.

Before local approval, confirm:

- Hero media crops preserve the subject and readable text at every target width.
- Navigation, sticky mobile availability action, lightbox, FAQ, and language switcher work by touch and keyboard.
- Focus rings remain visible against photography and dark surfaces; text contrast meets WCAG AA.
- Scroll is native, transitions do not delay navigation, and reduced-motion mode removes parallax and reveal movement.
- Stay modes clearly distinguish the 12-guest villa from the up-to-16-guest villa plus pool cottage.
- Arrival access, terraces, weekly-stay rhythm, platform-specific totals, and non-definitive tourist-tax wording are easy to find.
- No exact map, checkout, calendar, payment flow, fabricated prices, or misleading “Book now” action appears.
- No image is stretched, visibly low-resolution, missing an alternative, or unexpectedly shifts the page while loading.

Local acceptance requires no critical or high-severity defects, no scored category below 8/10, and an overall visual-review score of at least 90/100. Lighthouse targets are 95+ for accessibility, best practices, and SEO; performance is 85+ mobile and 90+ desktop, with LCP under 2.5s, CLS under 0.1, and INP under 200ms.

## Publication checklist

- Replace or explicitly clear every asset marked `prototypeOnly`; run the publication guard with `PUBLICATION_BUILD=true`.
- Recheck all factual content and translations against the approved source of truth.
- Verify both external listings manually and confirm all outbound actions preserve the villa page.
- Run the full browser suite against the production build and the GitHub Pages base path.
- Confirm canonical metadata, `hreflang`, sitemap, robots directives, Open Graph image, `.nojekyll`, custom-domain settings if supplied, and HTTPS.
- Repeat the independent visual reviews after major polish and record the final score, defects, improvements, and suggested removal.
