export const prerender = true;
import type { APIRoute } from 'astro';

export const GET: APIRoute = ({ site }) =>
  new Response(
    `User-agent: *\nAllow: /\nSitemap: ${site ? site.toString() : ''}sitemap.xml\n`,
    { headers: { 'Content-Type': 'text/plain' } }
  );
