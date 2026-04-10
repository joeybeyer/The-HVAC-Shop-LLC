import type { Metadata } from 'next';
import Link from 'next/link';
import { BLOG_POSTS } from '@/data/blog-posts';
import { generateTitle, generateCanonical } from '@/lib/seo';
import BreadcrumbNav from '@/components/BreadcrumbNav';

export const metadata: Metadata = {
  title: generateTitle('HVAC Tips & Resources for Coastal Georgia Homeowners', 'static'),
  description:
    'HVAC tips, cost guides, and expert advice for Port Wentworth, Pooler, Savannah, and Chatham County homeowners from The HVAC Shop LLC.',
  alternates: { canonical: generateCanonical('/blog') },
};

export default function BlogIndexPage() {
  const sorted = [...BLOG_POSTS].sort(
    (a, b) => new Date(b.datePublished).getTime() - new Date(a.datePublished).getTime()
  );
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <BreadcrumbNav items={[{ name: 'Blog', path: '/blog' }]} />
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mt-6 mb-3">
        HVAC Tips and Resources for Coastal Georgia
      </h1>
      <p className="text-gray-600 mb-10">
        Expert advice on AC repair, maintenance, energy savings, and choosing the right HVAC system
        for Port Wentworth, Pooler, Savannah, and Chatham County&apos;s unique coastal climate.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {sorted.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="bg-white border border-gray-200 rounded-xl p-5 hover:shadow-md transition-shadow flex flex-col"
          >
            <time className="text-xs text-gray-400 mb-2">
              {new Date(post.datePublished).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
            <h2 className="text-lg font-semibold text-gray-900 mb-2 leading-snug">{post.title}</h2>
            <p className="text-gray-600 text-sm flex-grow">{post.metaDescription}</p>
            <span className="text-blue-700 text-sm font-medium mt-3">Read more →</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
