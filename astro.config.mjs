// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Replace with your real domain once deployed (used for sitemap, RSS and canonical URLs).
  site: 'https://piragenth.vercel.app',
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [sitemap()],
});
