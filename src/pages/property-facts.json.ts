import type { APIRoute } from "astro";
import { publicPropertyFacts } from "../data/property-facts";

export const GET: APIRoute = () =>
  new Response(JSON.stringify(publicPropertyFacts, null, 2), {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
