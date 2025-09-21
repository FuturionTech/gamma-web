import { defineNuxtModule } from '@nuxt/kit'
import { resolve } from 'path'

export default defineNuxtModule({
  meta: {
    name: 'solutions-module',
    configKey: 'solutions'
  },
  setup(_options, nuxt) {
    // Register pages
    nuxt.hook('pages:extend', (pages) => {
      // Add index page
      pages.push({
        name: 'solutions',
        path: '/solutions',
        file: resolve(__dirname, './pages/solutions.vue')
      })

      // Add dynamic solution pages
      pages.push({
        name: 'solutions-slug',
        path: '/solutions/:slug',
        file: resolve(__dirname, './pages/[slug].vue')
      })
    })

    // Register components
    nuxt.hook('components:dirs', (dirs) => {
      dirs.push({
        path: resolve(__dirname, './components'),
        prefix: 'Solutions'
      })
    })
  }
})