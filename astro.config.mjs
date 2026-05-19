import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  site: 'https://DaisyC-YT.github.io',
  base: '/autoseo',
  output: 'static',
});
