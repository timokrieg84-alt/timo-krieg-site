export const prerender = true;
import type { APIRoute } from 'astro';

export const GET: APIRoute = ({ site }) =>
  new Response(
`# ai.txt – AI Crawler Instructions
User-agent: *
Allow: /
Policy: public-content
Sitemap: ${site ? site.toString() : ''}sitemap.xml
`,
 { headers: { 'Content-Type': 'text/plain; charset=utf-8' } }
);
