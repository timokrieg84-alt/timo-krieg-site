export async function get() {
  const base = "https://timo-krieg-site.vercel.app";
  const pages = [
    "",
    "/leistungen",
    "/case-studies",
    "/wir",
    "/kontakt",
    "/impressum",
    "/datenschutz",
  ];
  const urls = pages
    .map((p) => `<url><loc>${base}${p}</loc><changefreq>weekly</changefreq><priority>0.8</priority></url>`) 
    .join("");
  return {
    body: `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`,
    headers: { "Content-Type": "application/xml" },
  };
}
