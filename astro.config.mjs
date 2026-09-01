import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://example.com", // TODO: replace with live domain before go-live
  scopedStyleStrategy: "where",
  vite: {
    resolve: {
      alias: {
        "@": new URL("./src", import.meta.url).pathname,
      },
    },
  },
});
