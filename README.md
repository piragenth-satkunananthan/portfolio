# Piragenth Satkunananthan — Portfolio

Personal portfolio and blog built with [Astro](https://astro.build) and Tailwind CSS.

## Develop

Requires Node.js 22+ (see `.nvmrc`).

```sh
npm install
npm run dev       # http://localhost:4321
npm run build     # static output in dist/
npm run check     # Astro + TypeScript diagnostics
npm run preview
```

## Editing content

| What | Where |
| --- | --- |
| Name, bio, skills, education, certifications, social links | `src/consts.ts` |
| Projects (`featured: true` shows on the home page) | `src/content/projects/*.md` |
| Blog posts | `src/content/blog/*.md` |
| Profile photo | `public/avatar.jpg` (210×210) |
| Default social-share image | `public/og.png` (1200×630) |
| Site URL (sitemap, RSS, canonical links, robots.txt) | `site` in `astro.config.mjs` |

### Frontmatter

- **Projects:** `title`, `summary`, `stack`, `repo`, and optional `demo`, `featured`,
  `order`, `tag`, `highlights`, `languages`, `ogImage`.
  `languages` holds actual programming languages for structured data; `stack`
  may also contain hardware, platforms and tools.
- **Blog:** `title`, `description`, `pubDate`, and optional `updatedDate`, `tags`, `ogImage`.

`ogImage` is a site-rooted path (e.g. `/og/my-post.png`); when omitted, the
site-wide `/og.png` is used. Custom images should be 1200×630.

### Routes

- `/` — home
- `/about` — profile
- `/projects` and `/projects/<slug>` — project list and detail pages
- `/blog` and `/blog/<slug>` — blog list and posts
- `/tags/<tag>` — posts by tag
- `/rss.xml`, `/sitemap-index.xml`, `/robots.txt`

## Deploy

The site is fully static — no adapter needed. **Always run `npm run build`
before deploying**; the deploy tooling publishes `dist/` as-is.

- **Cloudflare Workers:** deploy with Wrangler using `wrangler.jsonc`. Its
  `404-page` asset setting serves `dist/404.html` for unknown URLs. Keep the
  Worker name in that file aligned with the existing Cloudflare Worker.
- **Vercel:** import the GitHub repo; the Astro preset is detected automatically.
- **Netlify:** build command `npm run build`, publish directory `dist`.

Live at https://www.piragenth.dev — if the domain changes, update `site` in
`astro.config.mjs`; the sitemap, canonical links and `/robots.txt` are all
generated from it.
