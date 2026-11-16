import type { APIRoute } from "astro";
import { SITE_URL } from "@/lib/constants";

export const prerender = true;

export const GET: APIRoute = ({ site }) => {
  const origin = site ?? new URL(SITE_URL);
  const body = `User-agent: *\nAllow: /\nSitemap: ${new URL("/sitemap-index.xml", origin).href}\n`;

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
