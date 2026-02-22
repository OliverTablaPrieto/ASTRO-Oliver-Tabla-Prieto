import { defineConfig } from 'astro/config';

const isProd = process.env.NODE_ENV === 'production';

export default defineConfig({
  site: 'https://olivertablaprieto.github.io',
  base: '/',
  // Solo forzamos barras finales en producción (GitHub)
  trailingSlash: isProd ? 'always' : 'ignore', 
  build: {
    // Solo generamos estructura de directorios en producción
    format: isProd ? 'directory' : 'file',
  }
});