import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { SITE_TITLE, SITE_DESCRIPTION } from '../consts';
import { getPosts } from '../lib';

export async function GET(context: APIContext) {
  const posts = await getPosts();
  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: context.site!,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      link: `/blog/${post.id}/`,
      // `content` must be HTML. Only include it when a rendered body exists;
      // never fall back to `post.body`, which is raw Markdown.
      ...(post.rendered?.html ? { content: post.rendered.html } : {}),
    })),
  });
}
