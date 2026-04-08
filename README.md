# Hugo's musing

Personal blog built with Astro, Markdown, and Cloudflare Pages.

## Local development

```bash
npm install
npm run dev
```

## Content model

Posts live in `src/content/posts` and use this frontmatter:

```md
---
title: "Post title"
slug: "post-title"
publishedAt: 2026-04-04
summary: "Short description for cards, SEO, and RSS."
tags:
  - notes
  - writing
coverImage: "/optional-image.jpg"
updatedAt: 2026-04-05
draft: false
---
```

Required fields: `title`, `slug`, `publishedAt`, `summary`, `tags`

Optional fields: `coverImage`, `updatedAt`, `draft`

## Cloudflare Pages

Use these settings in Cloudflare Pages:

- Build command: `npm run build`
- Build output directory: `dist`

Set these environment variables:

- `SITE_URL`: your final site URL, for example `https://yourdomain.com`
- `PUBLIC_CF_WEB_ANALYTICS_TOKEN`: optional Cloudflare Web Analytics token

## SEO and feeds

- Sitemap is generated automatically at `/sitemap-index.xml`
- RSS feed is available at `/rss.xml`

Last deploy trigger: 2026-04-04

Analytics redeploy trigger: 2026-04-05

Cloudflare Workers deploy uses `wrangler.jsonc` to publish the built `dist` directory as static assets.
