import { z, defineCollection } from 'astro:content'

const articles = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    url: z.string(),
    excerpt: z.string(),
    publication: z.string(),
    date: z.string(),
  }),
})

export const collections = {
  articles,
}
