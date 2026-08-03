# Villa dei Limoni

A bilingual editorial showcase for Villa dei Limoni in Camogli. The site is intentionally static and routes all availability, reservations, and payments to the villa's official Airbnb and Vrbo listings. The detailed blueprint review and implemented scope are recorded in [`IMPLEMENTATION_DELTA.md`](./IMPLEMENTATION_DELTA.md).

## Local preview

```sh
bun install
bun run dev
```

Open [http://127.0.0.1:4321](http://127.0.0.1:4321). English is served at `/` and Italian at `/it/`; every launch page has a reciprocal localized route.

## Quality checks

```sh
bun run check
bun run build
bun run test:e2e
```

The Playwright suite expects the local server at `http://127.0.0.1:4321/`. Set `PLAYWRIGHT_BASE_URL` to test another preview URL.

## Content source of truth

Property facts in both languages are traced to the current official Airbnb and Vrbo listings in [`CONTENT_PROVENANCE.md`](./CONTENT_PROVENANCE.md). Claims that are inconsistent, outdated, or still awaiting owner confirmation are deliberately excluded from the public copy.

## Media publication gate

The current photography was sourced from the official Airbnb listing for this private local prototype. Every record in `src/content/media.ts` is marked `prototypeOnly: true`, includes provenance, and has JPEG plus width-responsive WebP and AVIF renditions.

A publication build is deliberately blocked while these markers remain:

```sh
PUBLICATION_BUILD=true bun run guard:media
```

Before enabling GitHub Pages, replace the prototype media with owner-controlled originals or record explicit publication clearance and remove the prototype-only markers.

## Architecture

- Astro static output with TypeScript
- Native client-side gallery filtering and accessible lightbox
- Shared typed content with English and Italian variants
- Self-hosted Newsreader and Manrope variable fonts
- Native scrolling, restrained reveal motion, and reduced-motion support
- Dedicated bilingual editorial, practical, booking-information and legal routes
- Canonical property data plus a machine-readable `/property-facts.json` endpoint
- Sitemap, robots policy, linked vacation-rental structured data and custom 404
- No on-site booking, availability calendar, inquiry form, analytics, or exact property map
- Manual GitHub Pages deployment that remains blocked until the media publication gate passes
