
import { getCard } from "./helpers/util"
export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'universal',
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'static',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    title: 'Kelvin Omereshone',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
      {
        hid: 'description', name: 'description', content: "Kelvin Omereshone is a Nigerian 🇳🇬 software engineer that loves working with JavaScript on mostly everything.I am also interested in systems architecture and design"
      },
      // Open Graph
      { hid: 'og:title', property: 'og:title', content: 'Kelvin Omereshone' },
      {
        hid: 'og:description',
        property: 'og:description',
        content: "Kelvin Omereshone is a Nigerian 🇳🇬 software engineer that loves working with JavaScript on mostly everything.I am also interested in systems architecture and design",
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: getCard(),
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content: `https://dominuskelvin.dev`,
      },
      // Twitter Card
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: 'Kelvin Omereshone',
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content: "Kelvin Omereshone is a Nigerian 🇳🇬 software engineer that loves working with JavaScript on mostly everything.I am also interested in systems architecture and design",
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: getCard(),
      },
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto+Mono|Lato' }
    ],
    script: [
      { src: 'https://f.convertkit.com/ckjs/ck.5.js' }
    ]
  },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt/content
    '@nuxt/content',
  ],
  /*
  ** Content module configuration
  ** See https://content.nuxtjs.org/configuration
  */
  content: {},
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
    // Run ESLint on save
    extend(config, ctx) {
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
          options: {
            fix: true
          }
        })
      }
    }
  }
}
