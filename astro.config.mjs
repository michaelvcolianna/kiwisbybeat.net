import { defineConfig } from 'astro/config'
import { fileURLToPath } from 'url'
import { dirname } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// https://astro.build/config
export default defineConfig({
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "${__dirname}/src/styles/variables"; @import "${__dirname}/src/styles/mixins";`
        }
      }
    }
  }
})
