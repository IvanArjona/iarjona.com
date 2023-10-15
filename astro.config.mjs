import { defineConfig } from 'astro/config';
import astroI18next from 'astro-i18next';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import path from 'path';
import { fileURLToPath } from 'url';
import config from './src/config';
import partytown from '@astrojs/partytown';
import compress from 'astro-compress';
import robotsTxt from 'astro-robots-txt';
import icon from 'astro-icon';

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
    tailwind({
      config: {
        applyBaseStyles: false,
      },
    }),
    partytown({
      config: { forward: ['dataLayer.push'] },
    }),
    compress({
      css: true,
      html: {
        removeAttributeQuotes: false,
      },
      img: true,
      js: true,
      svg: true,
    }),
    robotsTxt(),
    icon({
      include: {
        tabler: ['*'],
        logos: ['*'],
        'vscode-icons': ['*'],
        'simple-icons': ['*'],
        'skill-icons': ['*'],
      },
    }),
  ],

  vite: {
    alias: {
      '~': path.resolve(__dirname, './src'),
    },
  },
});
