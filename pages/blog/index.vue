<template>
  <section>
    <div class="articles-container">
      <h1>Blog</h1>
      <p class="subtitle">
        I write about JavaScript, Node, Vue and a bunch of other interests of
        mine. I also write tips and tricks aim at simplifying daily development
        with JavaScript.
      </p>
      <form @submit.prevent.enter="$fetch">
        <input
          v-model="query"
          class="search-box"
          type="search"
          autocomplete="off"
          :placeholder="`Search articles...`"
        />
      </form>
      <ul v-if="articles.length" class="articles">
        <li v-for="article of articles" :key="article.slug" class="article">
          <NuxtLink :to="{ name: 'blog-slug', params: { slug: article.slug } }"
            >&#8226; {{ article.title }}</NuxtLink
          >
        </li>
      </ul>
    </div>
    <newsletter-opt-in />
  </section>
</template>

<script>
export default {
  async fetch() {
    const articles = await this.$content('articles')
      .only(['title', 'slug', 'id'])
      .search(this.query)
      .fetch()

    this.articles = articles.sort((a, b) => b.id - a.id)
  },
  data() {
    return {
      query: '',
      articles: [],
      articlesCount: 0,
    }
  },
  head() {
    return {
      title: `Blog | DominusKelvin`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: "Kelvin Omereshone's personal blog",
        },
        // Open Graph
        {
          hid: 'og:title',
          property: 'og:title',
          content: "Kelvin Omereshone's personal blog",
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: "Kelvin Omereshone's personal blog",
        },
        // Twitter Card
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: `Blog | DominusKelvin`,
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: `Blog | DominusKelvin`,
        },
      ],
    }
  },
}
</script>
<style>
.search-box {
  padding: 0.5rem;
  margin-top: 0.2rem;
  margin-bottom: 0.2rem;
  width: 80%;
  border-radius: 4px;
  border: 1px solid #7e8d85;
  font-family: 'Roboto Mono', sans-serif;
  font-size: 1.3rem;
}
</style>
