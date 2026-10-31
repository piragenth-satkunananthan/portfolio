import { getCollection } from 'astro:content';

export async function getProjects() {
  const projects = await getCollection('projects');
  // Stable ordering: explicit `order`, then id for deterministic ties.
  return projects.sort((a, b) => a.data.order - b.data.order || a.id.localeCompare(b.id));
}

export async function getPosts() {
  const posts = await getCollection('blog');
  return posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

/** URL-safe slug for a tag, so spaces/uppercase can't break `/tags/[tag]` routes. */
export function tagSlug(tag: string): string {
  const slug = tag
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
  return slug || 'tag';
}

export interface TagCount {
  tag: string;
  slug: string;
  count: number;
}

export async function getTags(): Promise<TagCount[]> {
  const posts = await getPosts();
  // Group case-insensitively by slug, keeping the first spelling seen as the label.
  const bySlug = new Map<string, { tag: string; count: number }>();
  for (const post of posts) {
    for (const tag of post.data.tags) {
      const slug = tagSlug(tag);
      const entry = bySlug.get(slug);
      if (entry) entry.count += 1;
      else bySlug.set(slug, { tag, count: 1 });
    }
  }
  return [...bySlug.entries()]
    .map(([slug, { tag, count }]) => ({ tag, slug, count }))
    .sort((a, b) => b.count - a.count || a.tag.localeCompare(b.tag));
}
