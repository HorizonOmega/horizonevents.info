import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import icon from 'astro-icon';
import { fileURLToPath } from 'url';
import path from 'path';

import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  site: 'https://horizonevents.info',
  // base: '/horizonevents.info', // Only needed if using github.io subdirectory
  vite: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
        '@components': path.resolve(__dirname, './src/components'),
        '@layouts': path.resolve(__dirname, './src/layouts'),
        '@data': path.resolve(__dirname, './src/data')
      }
    },

    plugins: [tailwindcss()]
  },
  integrations: [mdx(), icon({
    iconDir: "src/icons"
  }), sitemap()]
});