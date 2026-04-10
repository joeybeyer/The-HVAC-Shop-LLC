import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import { BLOG_POSTS } from '@/data/blog-posts';
import { SERVICES_DATA } from '@/data/services';
import { CITIES_DATA } from '@/data/cities';
import { generateTitle, generateCanonical, buildArticleSchema } from '@/lib/seo';
import TLDRSummary from '@/components/TLDRSummary';
import CTABlock from '@/components/CTABlock';
import BreadcrumbNav from '@/components/BreadcrumbNav';

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = BLOG_POSTS.find((p) => p.slug === params.slug);
  if (!post) return {};
  return {
    title: generateTitle(post.title, 'blog'),
    description: post.metaDescription,
    alternates: { canonical: generateCanonical(`/blog/${post.slug}`) },
  };
}

export default function BlogPostPage({ params }: Props) {
  const post = BLOG_POSTS.find((p) => p.slug === params.slug);
  if (!post) notFound();

  const articleSchema = buildArticleSchema(post.title, post.metaDescription, post.slug, post.datePublished);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <div className="max-w-3xl mx-auto px-4 py-8">
        <BreadcrumbNav
          items={[
            { name: 'Blog', path: '/blog' },
            { name: post.title, path: `/blog/${post.slug}` },
          ]}
        />
        <time className="text-sm text-gray-400 block mt-4">
          {new Date(post.datePublished).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </time>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6">{post.title}</h1>

        <TLDRSummary bullets={post.tldrBullets} />

        {post.sections.map((section, i) => (
          <section key={i} className="my-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">{section.heading}</h2>
            <div className="prose prose-gray max-w-none">
              {section.content.split('\n\n').map((para, j) => (
                <p
                  key={j}
                  className="mb-4 text-gray-700 leading-relaxed"
                  dangerouslySetInnerHTML={{
                    __html: para
                      .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-blue-700 underline hover:text-blue-900">$1</a>')
                      .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>'),
                  }}
                />
              ))}
            </div>
          </section>
        ))}

        <CTABlock />

        <div className="mt-8 p-4 bg-gray-50 rounded-lg">
          <h3 className="font-semibold text-gray-800 mb-3">Related Resources</h3>
          <div className="flex flex-wrap gap-3">
            {post.internalLinks.across.map((path) => {
              const svc = SERVICES_DATA.find((s) => `/${s.slug}` === path);
              const city = CITIES_DATA.find((c) => `/${c.slug}` === path);
              const label = svc ? svc.name : city ? `${city.name} HVAC Service` : path;
              return (
                <Link key={path} href={path} className="text-blue-700 underline text-sm">
                  {label}
                </Link>
              );
            })}
          </div>
        </div>

        <div className="mt-6 text-center">
          <Link href="/blog" className="text-blue-700 underline text-sm">
            ← Back to all blog posts
          </Link>
        </div>
      </div>
    </>
  );
}
