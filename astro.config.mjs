import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://timo-krieg-site.vercel.app',
  integrations: [tailwind({ applyBaseStyles: true })],
});
