import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
  loader: glob({ base: './src/content/projects', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    stack: z.array(z.string()),
    repo: z.url(),
    demo: z.url().optional(),
    featured: z.boolean().default(false),
    order: z.number().default(99),
    tag: z.string().optional(),
    highlights: z.array(z.string()).default([]),
    // Optional social-sharing image. When omitted, the site-wide /og.png is used.
    ogImage: z.string().optional(),
  }),
});

const blog = defineCollection({
  loader: glob({ base: './src/content/blog', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    // Optional social-sharing image. When omitted, the site-wide /og.png is used.
    ogImage: z.string().optional(),
  }),
});

export const collections = { projects, blog };
