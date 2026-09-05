import { defineConfig } from "astro/config";

const isPages = process.env.GITHUB_ACTIONS === "true";

export default defineConfig({
  site: "https://raffachiaverini.github.io",
  base: isPages ? "/camogli" : "/",
  integrations: [],
  output: "static",
  trailingSlash: "always",
  compressHTML: true,
  devToolbar: {
    enabled: false,
  },
  build: {
    assets: "assets",
    format: "directory",
    inlineStylesheets: "auto",
  },
  vite: {
    build: {
      cssMinify: "lightningcss",
    },
  },
});
