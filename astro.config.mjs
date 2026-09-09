import { defineConfig } from "astro/config";

// Astro 7 config
export default defineConfig({
  output: 'static',
  prefetch: true,
  experimental: {
    clientPrerender: true
  },
  // site: 'https://www.listingprofis.de', // Optional: nach Domain-Freigabe aktivieren
});
