// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://matthewreyes.dev', // Reemplazar con tu dominio real cuando despliegues
  integrations: [sitemap()]
});