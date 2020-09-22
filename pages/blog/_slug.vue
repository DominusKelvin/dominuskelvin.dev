<template>
  <section class="article-container">
    <article>
      <h1 class="article__title">{{ article.title }}</h1>
      <p class="published-date">{{ article.publishedAt }}</p>
      <nuxt-content :document="article" />
    </article>
    <newsletter-opt-in />
    <footer>
      <div class="pagination">
        <NuxtLink
          v-if="prev"
          class="pagination-link"
          :to="{ name: 'blog-slug', params: { slug: prev.slug } }"
          >&larr; {{ prev.title }}</NuxtLink
        >

        <NuxtLink
          v-if="next"
          class="pagination-link"
          :to="{ name: 'blog-slug', params: { slug: next.slug } }"
          >{{ next.title }} &rarr;</NuxtLink
        >
      </div>
    </footer>
  </section>
</template>
<script>
import getShareImage from '@jlengstorf/get-share-image'
export default {
  name: 'BlogSlug',
  async asyncData({ $content, params }) {
    const article = await $content('articles', params.slug).fetch()

    const [prev, next] = await $content('articles')
      .only(['title', 'slug', 'id'])
      .sortBy('id', 'asc')
      .surround(params.slug)
      .fetch()

    return {
      article,
      prev,
      next,
    }
  },
  methods: {
    getCard() {
      const socialImage = getShareImage({
        title: this.article.title,
        tagline: this.article.description,
        cloudName: 'dominuskelvin',
        imagePublicID: 'dominuskelvin.dev/card',
        font: 'futura',
        textColor: '7e8d85',
      })
      return socialImage
    },
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
        {
          hid: 'og:image',
          property: 'og:image',
          content: this.getCard(),
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: `/${this.article.slug}`,
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
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: this.getCard(),
        },
        {
          hid: 'twitter:card',
          name: 'twitter:card',
          content: 'summary_large_image',
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

@media only screen and (max-width: 839px) {
  .article-container {
    padding: 1rem 0.5rem;
  }
}
h1.article__title {
  font-size: 1.5rem;
  margin-bottom: 0;
}

.published-date {
  margin-bottom: 2rem;
  font-size: 0.8rem;
  color: rgba(126, 141, 133, 0.6);
  border-left: 2px solid rgba(126, 141, 133, 0.6);
  padding-left: 0.8em;
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

.nuxt-content ul {
  list-style-type: disc;
  padding-left: 1rem;
}

.nuxt-content li {
  margin-bottom: 0.5rem;
}

.nuxt-content p > code,
.nuxt-content pre[class*='language-'] {
  background-color: rgba(126, 141, 133, 0.2);
  border-radius: 4px;
}

.nuxt-content pre[class*='language-'] {
  color: #7e8d85;
  text-shadow: 0 1px rgba(126, 141, 133, 0.1);
  margin-bottom: 2rem;
}
.nuxt-content p > code {
  color: rgba(77, 148, 110);
  padding: 0 0.2rem;
  font-weight: bold;
}

.nuxt-content .token.operator {
  background-color: transparent;
}

.nuxt-content .token.string {
  color: rgba(77, 148, 110);
}

.nuxt-content .token.function {
  color: #c7435e;
}

.nuxt-content .token.keyword {
  color: #9e883b;
}

.nuxt-content .token.comment {
  color: rgba(126, 140, 133, 0.4);
}

.nuxt-content span.filename {
  color: rgba(126, 141, 133, 0.3);
  font-family: monospace;
}
footer {
  margin-top: 5rem;
}
</style>
