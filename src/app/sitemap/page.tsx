import type { Metadata } from 'next';
import Link from 'next/link';
import { generateTitle, generateCanonical } from '@/lib/seo';
import { SERVICES_DATA } from '@/data/services';
import { CITIES_DATA } from '@/data/cities';
import { NEIGHBORHOODS_DATA } from '@/data/neighborhoods';
import { BLOG_POSTS } from '@/data/blog-posts';
import BreadcrumbNav from '@/components/BreadcrumbNav';

export const metadata: Metadata = {
  title: generateTitle('Site Map — All Pages', 'static'),
  description: 'Complete site map for The HVAC Shop LLC — all service pages, city pages, neighborhood pages, and blog posts.',
  alternates: { canonical: generateCanonical('/sitemap') },
};

export default function SitemapPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <BreadcrumbNav items={[{ name: 'Sitemap', path: '/sitemap' }]} />
      <h1 className="text-3xl font-bold text-gray-900 mt-6 mb-8">Site Map</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div>
          <h2 className="text-xl font-bold text-gray-800 mb-3 border-b border-gray-200 pb-2">Main Pages</h2>
          <ul className="space-y-1.5 text-sm">
            <li><Link href="/" className="text-blue-700 underline">Home</Link></li>
            <li><Link href="/about" className="text-blue-700 underline">About</Link></li>
            <li><Link href="/contact" className="text-blue-700 underline">Contact</Link></li>
            <li><Link href="/financing" className="text-blue-700 underline">Financing</Link></li>
            <li><Link href="/blog" className="text-blue-700 underline">Blog</Link></li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-bold text-gray-800 mb-3 border-b border-gray-200 pb-2">Services</h2>
          <ul className="space-y-1.5 text-sm">
            {SERVICES_DATA.map((s) => (
              <li key={s.slug}>
                <Link href={`/${s.slug}`} className="text-blue-700 underline">{s.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-bold text-gray-800 mb-3 border-b border-gray-200 pb-2">Service Areas</h2>
          <ul className="space-y-1.5 text-sm">
            {CITIES_DATA.map((c) => (
              <li key={c.slug}>
                <Link href={`/${c.slug}`} className="text-blue-700 underline">{c.name}, {c.state}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-bold text-gray-800 mb-3 border-b border-gray-200 pb-2">Neighborhoods</h2>
          <ul className="space-y-1.5 text-sm">
            {NEIGHBORHOODS_DATA.map((n) => (
              <li key={`${n.citySlug}-${n.slug}`}>
                <Link href={`/${n.citySlug}/${n.slug}`} className="text-blue-700 underline">
                  {n.name} ({n.cityName})
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-2">
          <h2 className="text-xl font-bold text-gray-800 mb-3 border-b border-gray-200 pb-2">Blog Posts</h2>
          <ul className="space-y-1.5 text-sm grid grid-cols-1 md:grid-cols-2 gap-1">
            {BLOG_POSTS.map((p) => (
              <li key={p.slug}>
                <Link href={`/blog/${p.slug}`} className="text-blue-700 underline">{p.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
