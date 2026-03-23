import { defineCollection } from 'astro:content'
import { glob } from 'astro/loaders'
import { z } from 'astro/zod'

const articles = defineCollection({
  loader: glob({ base: './src/content/articles', pattern: '**/*.json' }),
  schema: z.object({
    title: z.string(),
    url: z.string(),
    excerpt: z.string(),
    publication: z.string(),
    date: z.string(),
  }),
})

const socials = defineCollection({
  loader: glob({ base: './src/content/socials', pattern: '**/*.json' }),
  schema: z.object({
    link: z.string(),
    icon: z.string(),
    title: z.string(),
  }),
})

const tkyt = defineCollection({
  loader: glob({ base: './src/content/tkyt', pattern: '**/*.json' }),
  schema: z.object({
    title: z.string(),
    teacher: z.string(),
    teacherUrl: z.string().url(),
    date: z.string(),
    poster: z.string(),
    url: z.string().url().optional(),
  }),
})

const books = defineCollection({
  loader: glob({ base: './src/content/books', pattern: '**/*.json' }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    author: z.string(),
    cover: z.string(),
    readCount: z.number(),
    url: z.string().url(),
    tags: z.array(z.string()),
  }),
})

export const collections = {
  articles,
  socials,
  tkyt,
  books,
}
