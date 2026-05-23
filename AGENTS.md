# Agent Guide

This is a Hexo 6 static site using the NexT theme. The site is published at `https://liang256.github.io/`.

## Site Identity

The site is currently positioned as a personal creative archive, not a professional portfolio.

- Site title: `/tmp/bucket`
- Focus: experiments, poems, art, thoughts, notes, software experiments
- Keep portfolio and service pages archival unless the user says otherwise.
- Prefer quiet, descriptive metadata over keyword stuffing.

## Important Files

- `_config.yml`: main Hexo config, site identity, URL, sitemap, deployment.
- `_config.next.yml`: NexT theme overrides, comments, Open Graph, custom head injection.
- `source/_data/head.njk`: custom metadata injected into `<head>`.
- `source/_posts/`: posts. Current post filenames are organized by year/month for newer posts.
- `source/about/index.md`: about page.
- `source/portfolio/`: archival portfolio pages.
- `source/service/index.md`: archival service page.
- `source/robots.txt`: crawler entry point and sitemap reference.
- `public/`: generated output. Do not edit manually.

## Commands

Use npm scripts unless there is a reason to call Hexo directly.

```sh
npm run clean
npm run build
npm run server
```

Deployment is configured as:

```sh
npm run deploy
```

`npm run build` may print warnings like `Accessing non-existent property 'lineno' of module exports inside circular dependency`. This is a known Hexo/NexT dependency warning in this repo; it is not a failed build if generation completes.

## SEO Conventions

Every meaningful post should have front matter with a clear title and description:

```yml
---
title: "The Essence of Animation"
date: 2025-09-18 20:50:53
categories: Animation
description: "A compact reflection on animation fundamentals: timing, spacing, camera-facing shapes, and the limits of tools."
tags:
  - animation
  - thoughts
  - tools
---
```

Use these broad categories where possible:

- `Poem`
- `Thoughts`
- `Art`
- `Animation`
- `Log`
- `孤獨側寫`

Use a small, consistent tag vocabulary where possible:

- `poem`
- `prose`
- `thoughts`
- `solitude`
- `relationship`
- `animation`
- `absurdity`
- `notes`
- `weekly`
- `tools`
- `experiments`

Fragmented weekly logs or archive-only pages should stay browsable but not appear as search results:

```yml
robots: "noindex, follow"
sitemap: false
```

Use both fields together. `robots` controls the generated meta tag, and `sitemap: false` keeps the page out of `sitemap.xml`.

## Current Archive Rules

The portfolio and service pages are archival and should stay:

```yml
robots: "noindex, follow"
sitemap: false
```

Do not remove these unless the user wants the site to become professional-facing again.

## Generated Metadata

NexT already emits description, Open Graph, canonical, and Twitter card tags. The custom head partial in `source/_data/head.njk` adds:

- `keywords`
- `author`
- `robots`
- sitemap link

Do not add another custom `<meta name="description">` in `source/_data/head.njk`; that duplicates NexT output.

## Editing Notes

- Do not manually edit files under `public/`; regenerate them.
- Prefer front matter changes for SEO.
- Do not rename post files unless the user explicitly wants URL changes.
- Changing `title:` changes display title without changing the URL.
- New posts can use existing scaffold files in `scaffolds/`.
