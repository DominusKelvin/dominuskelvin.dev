import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import tailwindcss from '@tailwindcss/vite'
import vue from '@astrojs/vue'

// https://astro.build/config
export default defineConfig({
  site: 'https://dominuskelvin.dev',
  integrations: [mdx(), sitemap(), vue()],
  vite: {
    plugins: [tailwindcss()],
  },
  redirects: {
    '/yt': 'https://youtube.com/@dominuskelvin',
    '/x': 'https://x.com/Dominus_Kelvin',
    '/nl': 'https://newsletter.dominuskelvin.dev',
    '/gh': 'https://github.com/DominusKelvin',
    '/in': 'https://linkedin.com/in/kelvinomereshone',
    '/ghs': 'https://github.com/sponsors/DominusKelvin',
    '/tkyts':
      'https://dominuskelvin.notion.site/TKYT-sponsorship-94484c548041489eb7b181beaa287016?pvs=4',
    '/deals':
      'https://dominuskelvin.notion.site/Sponsorships-deals-e3270054affa4f31aa76f3de73d138ae?pvs=4',
  },
})
