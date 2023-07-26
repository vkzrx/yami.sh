import { defineConfig } from "astro/config";
import prefetch from "@astrojs/prefetch";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import svelte from "@astrojs/svelte";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  adapter: vercel({
    analytics: true,
  }),
  output: "server",
  site: "https://yami.sh",
  integrations: [prefetch(), sitemap(), mdx(), react(), svelte(), tailwind()],
  markdown: {
    shikiConfig: {
      theme: "github-dark-dimmed",
    },
  },
});
