import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',
  site: 'https://timo-krieg-site.vercel.app',
  build: { format: 'directory' },
});
