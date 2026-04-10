import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import { NEIGHBORHOODS_DATA } from '@/data/neighborhoods';
import { generateTitle, generateCanonical } from '@/lib/seo';
import TLDRSummary from '@/components/TLDRSummary';
import FAQSection from '@/components/FAQSection';
import CTABlock from '@/components/CTABlock';
import BreadcrumbNav from '@/components/BreadcrumbNav';
import { CITIES_DATA } from '@/data/cities';
import { SERVICES_DATA } from '@/data/services';

interface Props {
  params: { slug: string; neighborhood: string };
}

export async function generateStaticParams() {
  return NEIGHBORHOODS_DATA.map((n) => ({
    slug: n.citySlug,
    neighborhood: n.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const hood = NEIGHBORHOODS_DATA.find(
    (n) => n.citySlug === params.slug && n.slug === params.neighborhood
  );
  if (!hood) return {};
  return {
    title: generateTitle(`${hood.name}, ${hood.cityName}`, 'neighborhood'),
    description: hood.metaDescription,
    alternates: { canonical: generateCanonical(`/${hood.citySlug}/${hood.slug}`) },
  };
}

export default function NeighborhoodPage({ params }: Props) {
  const hood = NEIGHBORHOODS_DATA.find(
    (n) => n.citySlug === params.slug && n.slug === params.neighborhood
  );
  if (!hood) notFound();

  const city = CITIES_DATA.find((c) => c.slug === hood.citySlug);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <BreadcrumbNav
        items={[
          { name: hood.cityName, path: `/${hood.citySlug}` },
          { name: hood.name, path: `/${hood.citySlug}/${hood.slug}` },
        ]}
      />
      <TLDRSummary bullets={hood.tldrBullets} />
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mt-6 mb-4">{hood.heroHeading}</h1>
      <p className="text-gray-700 leading-relaxed mb-6">{hood.intro}</p>

      {hood.sections.map((section, i) => (
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

      {city && (
        <div className="my-6 p-4 bg-blue-50 rounded-lg">
          <p className="text-sm text-blue-800">
            <strong>{hood.name}</strong> is served as part of our{' '}
            <Link href={`/${hood.citySlug}`} className="underline font-semibold">
              {hood.cityName}
            </Link>{' '}
            service area.{' '}
            <Link href="/" className="underline">
              The HVAC Shop LLC
            </Link>{' '}
            serves all {hood.cityName} neighborhoods from our Port Wentworth location.
          </p>
        </div>
      )}

      <FAQSection faqs={hood.faqs} />
      <CTABlock />

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4 bg-gray-50 rounded-lg">
          <h3 className="font-semibold text-gray-800 mb-2">Related Neighborhoods</h3>
          <div className="flex flex-col gap-1">
            {hood.internalLinks.across
              .filter((p) => !p.startsWith('/ac') && !p.startsWith('/hvac') && !p.startsWith('/heating') && !p.startsWith('/duct') && !p.startsWith('/furnace') && !p.startsWith('/thermostat') && !p.startsWith('/indoor') && !p.startsWith('/heat') && !p.startsWith('/mini') && !p.startsWith('/commercial') && !p.startsWith('/emergency'))
              .map((path) => {
                const parts = path.split('/').filter(Boolean);
                const nData = NEIGHBORHOODS_DATA.find((n) => n.citySlug === parts[0] && n.slug === parts[1]);
                const cData = CITIES_DATA.find((c) => c.slug === parts[0]);
                const label = nData ? nData.name : cData ? cData.name : path;
                return (
                  <Link key={path} href={path} className="text-blue-700 underline text-sm">
                    {label}
                  </Link>
                );
              })}
          </div>
        </div>
        <div className="p-4 bg-gray-50 rounded-lg">
          <h3 className="font-semibold text-gray-800 mb-2">Services in {hood.name}</h3>
          <div className="flex flex-col gap-1">
            {hood.internalLinks.across
              .filter((p) => SERVICES_DATA.some((s) => `/${s.slug}` === p))
              .map((path) => {
                const s = SERVICES_DATA.find((s) => `/${s.slug}` === path);
                return s ? (
                  <Link key={path} href={path} className="text-blue-700 underline text-sm">
                    {s.name}
                  </Link>
                ) : null;
              })}
          </div>
        </div>
      </div>
    </div>
  );
}
