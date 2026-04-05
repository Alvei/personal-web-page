import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

import cloudflare from "@astrojs/cloudflare";

const site = process.env.SITE_URL ?? "https://example.com";

export default defineConfig({
  site,
  integrations: [sitemap()],

  markdown: {
    shikiConfig: {
      theme: "github-light"
    }
  },

  adapter: cloudflare()
});