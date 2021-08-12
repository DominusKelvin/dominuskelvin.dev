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
          <br />The All-In-One Platform To Master Sails.
        </li>
        <li class="article">
          <a
            href="https://www.npmjs.com/package/machinepack-paystack"
            target="_blank"
            >&#x2023; machinepack-paystack</a
          >
          <br />Communicate with over 113
          <a href="https://paystack.com" target="_blank">Paystack</a>
          API to initialize transaction, create plans, etc.
        </li>
        <li class="article">
          <a href="https://pub.dev/packages/sails_io" target="_blank"
            >&#x2023; sails_io</a
          >
          <br />Dart/Flutter Websocket Client SDK for communication with Sails
          from a mobile application(or any client running Dart or Flutter)
        </li>
        <li class="article">
          <a href="https://pub.dev/packages/sails_io" target="_blank"
            >&#x2023; wistia_player</a
          >
          <br />Flutter package for playing or streaming inline Wistia videos
          using the official iFrame player API. This plugin supports both
          Android and iOS.
        </li>
        <li class="article">
          <a
            href="https://www.npmjs.com/package/sails-hook-paystack"
            target="_blank"
            >&#x2023; sails-hook-paystack</a
          >
          <br />This Sails hook exposes methods for interacting with the
          Paystack API. Internally it uses the machinepack-paystack package
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
