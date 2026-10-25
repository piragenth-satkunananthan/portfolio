# Piragenth Satkunananthan — Portfolio

Personal portfolio and blog built with [Astro](https://astro.build) and Tailwind CSS.

## Develop

Requires Node.js 22+.

```sh
npm install
npm run dev       # http://localhost:4321
npm run build     # static output in dist/
npm run preview
```

## Editing content

| What | Where |
| --- | --- |
| Name, bio, skills, education, certifications, social links | `src/consts.ts` |
| Projects (`featured: true` shows on the home page) | `src/content/projects/*.md` |
| Blog posts | `src/content/blog/*.md` |
| Profile photo | `public/avatar.jpg` |
| Site URL (sitemap, RSS, canonical links) | `site` in `astro.config.mjs` |

## Deploy

The site is fully static — no adapter needed.

- **Vercel:** import the GitHub repo; the Astro preset is detected automatically.
- **Netlify:** build command `npm run build`, publish directory `dist`.

Live at https://www.piragenth.dev — if the domain changes, update `site` in `astro.config.mjs`.
