<template>
  <section>
    <div class="articles-container">
      <h1>Creations</h1>
      <p class="subtitle">
        As an indie maker at heart, I build softwares ranging from developers
        tools to SaaS applications. Here are a few I am proud of:
      </p>
      <ul class="articles">
        <li class="article">
          <a href="https://sailscasts.com" target="_blank"
            >&#x2023; Sailscasts</a
          >
          <br />The definitive source for Sails.js and modern backend JavaScript
          mastery(coming soon).
        </li>
        <li class="article">
          <a
            href="https://www.npmjs.com/package/vue-cli-plugin-chakra-ui"
            target="_blank"
            >&#x2023; vue-cli-plugin-chakra-ui</a
          >
          <br />The official Vue CLI plugin to setup Chakra UI Vue.
        </li>

        <li class="article">
          <a
            href="https://marketplace.visualstudio.com/items?itemName=dominuskelvin.sailboat"
            target="_blank"
            >&#x2023; Sailboat</a
          >
          <br />Sails.js tooling for VS Code to boost productivity with the
          framework.
        </li>
      </ul>
    </div>
    <newsletter-opt-in />
  </section>
</template>
<script>
export default {
  head() {
    return {
      title: `Creations | DominusKelvin`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: "Kelvin Omereshone's creations",
        },
        // Open Graph
        {
          hid: 'og:title',
          property: 'og:title',
          content: "Kelvin Omereshone's creations",
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: "Kelvin Omereshone's creations",
        },
        // Twitter Card
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: `Creations | DominusKelvin`,
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: `Creations | DominusKelvin`,
        },
      ],
    }
  },
}
</script>
