export const prerender = true;
import type { APIRoute } from 'astro';

export const GET: APIRoute = ({ site }) =>
  new Response(
`# llms.txt – LLM Crawling Guidance
User-agent: *
Allow: /
Crawl-delay: 1
Contact: mailto:gjanuzikrieg@gmail.com
Sitemap: ${site ? site.toString() : ''}sitemap.xml
`,
 { headers: { 'Content-Type': 'text/plain; charset=utf-8' } }
);
