import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// Minimal, stable config: Astro + Tailwind only
export default defineConfig({
  site: 'https://example.com', // später auf echte Domain setzen
  output: 'static',
  integrations: [tailwind()],
});
