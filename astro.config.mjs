import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://example.com', // TODO: set to real domain before going live
  output: 'static',
  integrations: [tailwind(), sitemap()],
});
