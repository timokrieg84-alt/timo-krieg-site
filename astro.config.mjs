import { defineConfig } from 'astro/config';
export default defineConfig({
  output: 'static',
  prefetch: true,
  integrations: [],
  site: 'https://online-marketing-office.de' // bei Go-Live anpassen
});
