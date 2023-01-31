import { defineConfig } from 'astro/config';
import astroI18next from 'astro-i18next';
import sitemap from '@astrojs/sitemap';
import image from '@astrojs/image';
import tailwind from '@astrojs/tailwind';
import path from 'path';
import { fileURLToPath } from 'url';
import config from './src/config';
import partytown from '@astrojs/partytown';
import compress from 'astro-compress';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  site: config.origin,

  integrations: [
    astroI18next(),
    sitemap({
      i18n: {
        defaultLocale: 'es',
        locales: {
          es: 'es',
          en: 'en',
        },
      },
    }),
    image({
      serviceEntryPoint: '@astrojs/image/sharp',
    }),
    tailwind(),
    partytown({
      config: { forward: ['dataLayer.push'] },
    }),
    compress(),
  ],

  vite: {
    alias: {
      '~': path.resolve(__dirname, './src'),
    },
    ssr: {
      external: ['svgo'],
    },
  },
});
