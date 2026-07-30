import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// Update this to your final domain before go-live for perfect canonicals/sitemap
const site = 'https://timo-krieg-site.vercel.app';

export default defineConfig({
  site,
  integrations: [tailwind({ applyBaseStyles: false }), sitemap()],
  output: 'static'
});
