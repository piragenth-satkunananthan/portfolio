import type { APIContext } from 'astro';

// Generated from `site` in astro.config.mjs so the sitemap URL can never drift.
export function GET({ site }: APIContext) {
  const base = site!.href.replace(/\/$/, '');
  const body = ['User-agent: *', 'Allow: /', '', `Sitemap: ${base}/sitemap-index.xml`, ''].join('\n');
  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
