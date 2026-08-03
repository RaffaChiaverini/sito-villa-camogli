# Detailed blueprint review and implementation delta

Reviewed against `deep-research-report (1).md` supplied on 3 August 2026.

## What the earlier prototype already handled well

- Strong editorial visual direction with restrained Ligurian palette and typography.
- Bilingual English and Italian home pages.
- Clear 12-guest main-villa versus 16-guest estate configuration.
- Responsive AVIF/WebP/JPEG images with fixed dimensions.
- Accessible gallery filtering and lightbox, mobile menu, booking sheet, focus return and reduced-motion support.
- Honest access, safety, platform-booking, tax and service-model copy.
- Prototype-media provenance and a hard publication gate.

## Delta implemented from the detailed blueprint

- Added dedicated bilingual routes for Villa, Gallery, Rooms & Floorplans, Amenities, Rates, Availability, Location, Experiences, Reviews, Policies, Contact, Privacy, Cookies, Accessibility and Legal.
- Added shared canonical property facts, registration identifiers, booking-platform URLs, amenity status records, rate policy and an explicit owner-approval queue under `src/data/`.
- Reused the canonical fact rail on both home-page locales.
- Added a public `/property-facts.json` endpoint generated from the canonical property record.
- Added CIN and CITRA to the footer, structured data and legal pages.
- Added linked `WebSite`, `VacationRental` and `WebPage` JSON-LD with separate platform URLs in `sameAs`; no merged rating or unapproved offer data is emitted.
- Added unique page metadata, reciprocal `hreflang`, `x-default`, self-canonical URLs, expanded Open Graph/Twitter metadata, and a noindex 404 page.
- Added XML sitemap, crawler-friendly robots policy including OAI-SearchBot, web manifest and `.nojekyll`.
- Added dedicated rate/availability pages without a date picker, form, checkout, payment or fabricated total.
- Added bilingual privacy, cookie, accessibility and legal prototype statements.
- Added GitHub Actions quality checks and a manual deployment workflow that cannot pass until prototype images are owner-cleared.
- Added browser coverage for the new bilingual routes, discovery endpoints, identifiers and no-direct-booking boundaries.

## Deliberately not implemented without approval or source assets

- Seasonal prices, fees or price schema: the two listings conflict and owner approval is missing.
- Universal check-in time, changeover rule, current tourist-tax amount, and precise pool dates.
- Professional floorplan drawings or downloadable accessible PDF.
- Direct contact form or public email address: no approved business mailbox, processor, retention policy or privacy owner exists.
- Analytics, consent manager or experiments: no measurement ID, approved CMP or privacy configuration exists.
- Exact map coordinates or street address.
- Concierge, chef, boat, transport or grocery claims: no vetted operating arrangements were supplied.
- Journal articles, press kit, social accounts or RSS: no original maintained editorial source was supplied.
- Production deployment: all current photographs remain explicitly prototype-only and publication-blocked.

## Release blockers

1. Replace or explicitly clear every prototype image and update provenance.
2. Approve the canonical owner-fact queue in `src/data/property-facts.ts`.
3. Supply verified floorplans or approve the HTML-only room inventory.
4. Complete Italian legal/privacy review and provide operator/contact details.
5. Decide the final domain and update `site`/`base` configuration.
6. Run the publication guard, full browser suite and production-path build before enabling the Pages workflow.
