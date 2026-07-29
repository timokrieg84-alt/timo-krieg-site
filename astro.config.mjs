import { defineConfig } from "astro/config";
export default defineConfig({
  site: "https://novoreinigungen.ch",
  trailingSlash: "always",
  integrations: [],
  server: { port: 4321 }
});
