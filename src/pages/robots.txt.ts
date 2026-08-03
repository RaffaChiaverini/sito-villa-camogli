import type { APIRoute } from "astro";

export const GET: APIRoute = ({ site }) => {
  const base = import.meta.env.BASE_URL;
  const origin = site ?? new URL("https://chiaverini-raffaele_bcgprod.github.io");
  const sitemap = new URL(`${base.replace(/^\//, "")}sitemap.xml`, origin).href;
  return new Response(`User-agent: *\nAllow: /\n\nUser-agent: OAI-SearchBot\nAllow: /\n\nSitemap: ${sitemap}\n`, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
