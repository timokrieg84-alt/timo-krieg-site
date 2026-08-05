import { defineConfig } from 'astro/config';

export default defineConfig({
  server: { host: true },
  build: { format: 'directory' },
  vite: {
    css: { preprocessorOptions: {} },
  },
});
