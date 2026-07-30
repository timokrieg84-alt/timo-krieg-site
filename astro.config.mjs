import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://timo-krieg-site.vercel.app',
  output: 'static',
  integrations: [
    tailwind({ applyBaseStyles: false }),
    sitemap()
  ]
});
