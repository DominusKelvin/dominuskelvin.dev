import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import tailwind from '@astrojs/tailwind'
import image from '@astrojs/image'

import vue from '@astrojs/vue'

// https://astro.build/config
export default defineConfig({
  site: 'https://dominuskelvin.dev',
  integrations: [mdx(), sitemap(), tailwind(), image(), vue()],
})
