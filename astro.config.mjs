import { defineConfig } from 'astro/config'
import { fileURLToPath } from 'url'
import { dirname } from 'path'
import sitemap from '@astrojs/sitemap';

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// https://astro.build/config
export default defineConfig({
  site: process.env.NODE_ENV === 'production'
    ? 'https://kiwisbybeat.net'
    : 'http://localhost:4321',

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "${__dirname}/src/styles/variables"; @import "${__dirname}/src/styles/mixins";`
        }
      }
    }
  },
  integrations: [sitemap()],
})