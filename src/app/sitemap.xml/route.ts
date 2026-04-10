import { BUSINESS } from '@/lib/constants';
import { SERVICES_DATA } from '@/data/services';
import { CITIES_DATA } from '@/data/cities';
import { NEIGHBORHOODS_DATA } from '@/data/neighborhoods';
import { BLOG_POSTS } from '@/data/blog-posts';

function url(path: string): string {
  return `${BUSINESS.url}${path}`;
}

function entry(loc: string, changefreq: string, priority: string, lastmod?: string) {
  return `  <url>
    <loc>${loc}</loc>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
    ${lastmod ? `<lastmod>${lastmod}</lastmod>` : ''}
  </url>`;
}

export async function GET() {
  const today = new Date().toISOString().split('T')[0];

  const entries = [
    entry(url('/'), 'weekly', '1.0', today),
    entry(url('/about'), 'monthly', '0.7'),
    entry(url('/contact'), 'monthly', '0.8'),
    entry(url('/financing'), 'monthly', '0.7'),
    entry(url('/blog'), 'weekly', '0.8', today),
    entry(url('/sitemap'), 'monthly', '0.5'),
    entry(url('/privacy-policy'), 'yearly', '0.3'),
    entry(url('/terms-of-service'), 'yearly', '0.3'),
    ...SERVICES_DATA.map((s) => entry(url(`/${s.slug}`), 'monthly', '0.9')),
    ...CITIES_DATA.map((c) => entry(url(`/${c.slug}`), 'monthly', '0.9')),
    ...NEIGHBORHOODS_DATA.map((n) => entry(url(`/${n.citySlug}/${n.slug}`), 'monthly', '0.7')),
    ...BLOG_POSTS.map((p) => entry(url(`/blog/${p.slug}`), 'monthly', '0.6', p.datePublished)),
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries.join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}
