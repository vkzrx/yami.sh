import { defineConfig } from "astro/config";
import prefetch from "@astrojs/prefetch";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import svelte from "@astrojs/svelte";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://yami.sh",
  integrations: [prefetch(), sitemap(), mdx(), react(), svelte(), tailwind()],
  markdown: {
    shikiConfig: {
      theme: "github-dark-dimmed",
    },
  },
});
