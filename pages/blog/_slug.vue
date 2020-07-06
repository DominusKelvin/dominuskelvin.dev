<template>
  <section class="article-container">
    <article>
      <h1 class="article__title">{{ article.title }}</h1>
      <nuxt-content :document="article" />
    </article>
    <footer>
      <div class="pagination">
        <NuxtLink
          v-if="prev"
          class="pagination-link"
          :to="{ name: 'blog-slug', params: { slug: prev.slug } }"
        >
          &larr; {{ prev.title }}
        </NuxtLink>

        <NuxtLink
          v-if="next"
          class="pagination-link"
          :to="{ name: 'blog-slug', params: { slug: next.slug } }"
        >
          {{ next.title }} &rarr;
        </NuxtLink>
      </div>
    </footer>
  </section>
</template>
<script>
export default {
  name: 'BlogSlug',
  async asyncData({ $content, params }) {
    const [prev, next] = await $content('articles')
      .only(['title', 'slug'])
      .sortBy('createdAt', 'asc')
      .surround(params.slug)
      .fetch()

    const article = await $content('articles', params.slug).fetch()

    return {
      article,
      prev,
      next,
    }
  },
  head() {
    return {
      title: `${this.article.title} | Dominus Kelvin`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.article.description,
        },
        // Open Graph
        { hid: 'og:title', property: 'og:title', content: this.article.title },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.article.description,
        },
        // Twitter Card
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: this.article.title,
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: this.article.description,
        },
      ],
    }
  },
}
</script>

<style>
.article-container {
  padding: 5rem 2rem;
}

h1.article__title {
  font-size: 1.5rem;
}
.pagination {
  display: flex;
  justify-content: space-between;
}
.pagination-link {
  border: 1px solid #7e8d85;
  padding: 0.5rem 1rem;
  border-radius: 4px;
}
.pagination-link:hover,
.pagination-link:focus {
  color: #191710;
  background-color: #7e8d85;
}

.nuxt-content h2 {
  font-size: 1.2rem;
}

.nuxt-content p {
  margin-bottom: 2rem;
  letter-spacing: 0.125;
  line-height: 1.7;
}
footer {
  margin-top: 5rem;
}
</style>
