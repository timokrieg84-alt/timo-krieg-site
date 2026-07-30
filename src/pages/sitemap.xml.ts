export const prerender = true;
import type { APIRoute } from 'astro';

const routes = [
  '/', '/impressum', '/datenschutz',
  '/leistungen/seo','/leistungen/seo-regio','/leistungen/google-ads','/leistungen/geo',
  '/leistungen/webdesign','/leistungen/terminbuchung','/leistungen/marketing','/leistungen/ai-automation',
  '/leistungen/branding','/leistungen/social-media','/leistungen/reputation','/leistungen/praxis-tv',
  '/leistungen/programmierung','/leistungen/factoring'
];

export const GET: APIRoute = ({ site }) => {
  const base = site?.toString() ?? '';
  const lastmod = new Date().toISOString();
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${routes.map(p => `<url><loc>${base}${p}</loc><lastmod>${lastmod}</lastmod><changefreq>weekly</changefreq><priority>${p==='/'?'1.0':'0.8'}</priority></url>`).join('')}
  </urlset>`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml' } });
};
