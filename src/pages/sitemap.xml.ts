import type { APIRoute } from "astro";
import { pageSlugs } from "../content/detail-pages";
import { localeHref, locales } from "../content";

const escapeXml = (value: string) =>
  value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;");

export const GET: APIRoute = ({ site }) => {
  const base = import.meta.env.BASE_URL;
  const origin = site ?? new URL("https://chiaverini-raffaele_bcgprod.github.io");
  const paths = [
    ...locales.map((locale) => localeHref(locale, base)),
    ...pageSlugs.flatMap((slug) => locales.map((locale) => localeHref(locale, base, `${slug}/`))),
    `${base}property-facts.json`,
  ];
  const urls = paths.map((path) => new URL(path.replace(/^\//, ""), origin).href);
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map((url) => `  <url><loc>${escapeXml(url)}</loc></url>`).join("\n")}\n</urlset>\n`;
  return new Response(body, { headers: { "Content-Type": "application/xml; charset=utf-8" } });
};
