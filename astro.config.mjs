import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  base: '/P3611',
  trailingSlash: 'never',
  integrations: [],
  vite: {
    plugins: [tailwindcss()],
  },
});
