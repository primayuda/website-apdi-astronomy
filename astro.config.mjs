import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import vercel from '@astrojs/vercel/serverless';

import alpinejs from "@astrojs/alpinejs";

// https://astro.build/config
export default defineConfig({
  output: "server",
  site: "https://www.pemimpindigital.id",
  trailingSlash: "never",
  integrations: [mdx({
    syntaxHighlight: 'shiki',
    shikiConfig: {
      theme: 'github-dark-dimmed'
    },
    gfm: true
  }), sitemap(), react(), alpinejs({ entrypoint: '/src/entrypoint' })],
  vite: { plugins: [tailwindcss()] },
  adapter: vercel({
    analytics: true
  })
});
