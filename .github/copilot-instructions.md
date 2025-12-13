# Copilot Instructions for dominuskelvin.dev

## Project Overview

Personal website for Kelvin Omereshone built with Astro v3, featuring blog posts, external articles, books, and TKYT (Things Kelvin Yakked To) sessions. Lead maintainer of Sails.js, teaching fullstack JavaScript.

## Architecture & Content Model

### Dual Content Systems

1. **Blog Posts** (`src/pages/blog/*.{md,mdx}`) - Self-hosted content using frontmatter with layout reference

   - Uses `Astro.glob('./blog/*.{md,mdx}')` for discovery
   - Layout: `src/layouts/BlogPost.astro`
   - Frontmatter: `layout`, `title`, `description`, `pubDate`, `heroImage`, optional `draft` flag
   - Example: `ai-will-take-your-job.md`

2. **Content Collections** (`src/content/*/*.json`) - Structured data using Zod schemas
   - Uses `getCollection()` API with type-safe schemas in `src/content/config.ts`
   - Collections: `articles` (external publications), `socials`, `tkyt` (sessions), `books`
   - Articles link to external publications (Smashing Magazine, FreeCodeCamp, LogRocket)
   - TKYT sessions differentiated by presence of `url` field (upcoming vs. recorded)

### Key Pages

- `/blog` - Self-hosted blog using `Astro.glob()` with draft filtering
- `/articles` - External publications using `getCollection('articles')`
- `/tkyt` - Teaching sessions split into upcoming and recorded
- `/books` - Reading list with covers stored in `public/books/`

## Development Workflow

### Git Workflow

Uses Gitflow - **always PR to `develop` branch**, not `main`. Main branch is for production releases only.

### Commands

- `npm run dev` - Start dev server (port 3000 by default)
- `npm run build` - Production build
- `npm run preview` - Preview production build
- `npm run lint` - Check formatting with Prettier
- `npm run lint:fix` - Auto-format all files
- `node scripts/update-tkyt-titles.js` - Batch update TKYT session titles

### Code Quality

- Prettier enforces formatting (runs on save and via Husky pre-commit)
- GitHub Actions runs Prettier checks on PRs
- Tailwind with custom green (`#4D946E`) and purple (`#302B3D`) theme colors

## Component Patterns

### Layout Components

- `BaseHead.astro` - SEO meta tags, social cards
- `Header.astro` - Site navigation
- `Footer.astro` - Site footer
- `BlogPost.astro` - Blog post layout with Twitter share and X search integration

### Vue Integration

- Single Vue component: `NewsletterSignup.vue` (Substack embed)
- Astro+Vue configured via `@astrojs/vue` integration

## Styling Conventions

- TailwindCSS with typography plugin for prose content
- Responsive breakpoints: sm:, md:, lg:, xl:
- Consistent layout: `lg:mx-auto lg:w-8/12 xl:w-1/2` for centered content
- Hover states: `hover:bg-green/10` on interactive elements
- Date formatting: `en-us` locale with short month format

## URL Redirects

Short links defined in `astro.config.mjs`:

- `/yt` → YouTube
- `/x` → Twitter/X
- `/gh` → GitHub
- `/in` → LinkedIn
- `/nl` → Newsletter
- `/ghs` → GitHub Sponsors
- `/tkyts`, `/deals` → Notion pages

## Content Guidelines

### Adding Blog Posts

Create `.md` or `.mdx` in `src/pages/blog/` with frontmatter:

```yaml
---
layout: '../../layouts/BlogPost.astro'
title: 'Post Title'
description: 'SEO description'
pubDate: 'Month DD, YYYY'
heroImage: /covers/image.png
draft: false # Optional, hides from listing if true
---
```

### Adding External Articles

Create JSON in `src/content/articles/`:

```json
{
  "title": "Article Title",
  "url": "https://publication.com/article",
  "excerpt": "Brief description",
  "publication": "Publication Name",
  "date": "Month DD, YYYY"
}
```

### Adding TKYT Sessions

Create JSON in `src/content/tkyt/`:

- Omit `url` field for upcoming sessions
- Include `url` field for recorded sessions (marks as past)
- Use `update-tkyt-titles.js` script to auto-number sessions

## Testing

- Playwright e2e tests in `e2e/` directory
- Config: `playwright.config.ts` with multiple browser targets
- Run locally without CI retries; CI runs with 2 retries

## Public Assets

- Hero images: `public/covers/`
- Book covers: `public/books/`
- TKYT posters: `public/tkyt/`
- `public/funding.json` - GitHub sponsors data

## Performance Notes

- Static site generation (SSG) by default
- RSS feed: `src/pages/rss.xml.js` uses `@astrojs/rss`
- Sitemap auto-generated via `@astrojs/sitemap`
