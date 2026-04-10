import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import { SERVICES_DATA } from '@/data/services';
import { CITIES_DATA } from '@/data/cities';
import { generateTitle, generateCanonical, buildServiceSchema } from '@/lib/seo';
import TLDRSummary from '@/components/TLDRSummary';
import BERTTable from '@/components/BERTTable';
import FAQSection from '@/components/FAQSection';
import CTABlock from '@/components/CTABlock';
import BreadcrumbNav from '@/components/BreadcrumbNav';
import { CITIES } from '@/lib/constants';

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  const serviceParams = SERVICES_DATA.map((s) => ({ slug: s.slug }));
  const cityParams = CITIES_DATA.map((c) => ({ slug: c.slug }));
  return [...serviceParams, ...cityParams];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = SERVICES_DATA.find((s) => s.slug === params.slug);
  if (service) {
    return {
      title: generateTitle(service.name, 'service'),
      description: service.metaDescription,
      alternates: { canonical: generateCanonical(`/${service.slug}`) },
    };
  }
  const city = CITIES_DATA.find((c) => c.slug === params.slug);
  if (city) {
    return {
      title: generateTitle(city.name, 'city'),
      description: city.metaDescription,
      alternates: { canonical: generateCanonical(`/${city.slug}`) },
    };
  }
  return {};
}

export default function SlugPage({ params }: Props) {
  const service = SERVICES_DATA.find((s) => s.slug === params.slug);
  if (service) return <ServicePage service={service} />;

  const city = CITIES_DATA.find((c) => c.slug === params.slug);
  if (city) return <CityPage city={city} />;

  notFound();
}

function ServicePage({ service }: { service: (typeof SERVICES_DATA)[number] }) {
  const serviceSchema = buildServiceSchema(service.name, service.metaDescription, service.slug);
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <div className="max-w-4xl mx-auto px-4 py-8">
        <BreadcrumbNav items={[{ name: service.name, path: `/${service.slug}` }]} />
        <TLDRSummary bullets={service.tldrBullets} />
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mt-6 mb-4">{service.heroHeading}</h1>

        {service.sections.map((section, i) => (
          <section key={i} className="my-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">{section.heading}</h2>
            <div className="prose prose-gray max-w-none">
              {section.content.split('\n\n').map((para, j) => (
                <p key={j} className="mb-4 text-gray-700 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: para.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-blue-700 underline hover:text-blue-900">$1</a>') }}
                />
              ))}
            </div>
          </section>
        ))}

        <h2 className="text-2xl font-bold text-gray-800 mb-4">Pricing Reference</h2>
        <BERTTable headers={service.bertTable.headers} rows={service.bertTable.rows} />

        <FAQSection faqs={service.faqs} />
        <CTABlock />

        <div className="mt-8 p-4 bg-gray-50 rounded-lg">
          <h3 className="font-semibold text-gray-800 mb-2">Related Services</h3>
          <div className="flex flex-wrap gap-3">
            {service.internalLinks.across.map((path) => {
              const related = SERVICES_DATA.find((s) => `/${s.slug}` === path);
              return related ? (
                <Link key={path} href={path} className="text-blue-700 underline text-sm">
                  {related.name}
                </Link>
              ) : null;
            })}
          </div>
        </div>
      </div>
    </>
  );
}

function CityPage({ city }: { city: (typeof CITIES_DATA)[number] }) {
  const cityData = CITIES.find((c) => c.slug === city.slug);
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <BreadcrumbNav items={[{ name: city.name, path: `/${city.slug}` }]} />
      <TLDRSummary bullets={city.tldrBullets} />
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mt-6 mb-4">{city.heroHeading}</h1>
      <p className="text-gray-700 leading-relaxed mb-6">{city.intro}</p>

      {city.sections.map((section, i) => (
        <section key={i} className="my-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">{section.heading}</h2>
          <div className="prose prose-gray max-w-none">
            {section.content.split('\n\n').map((para, j) => (
              <p key={j} className="mb-4 text-gray-700 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: para.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-blue-700 underline hover:text-blue-900">$1</a>').replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>') }}
              />
            ))}
          </div>
        </section>
      ))}

      {cityData && cityData.neighborhoods.length > 0 && (
        <section className="my-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Neighborhoods We Serve in {city.name}</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {cityData.neighborhoods.map((n) => (
              <Link
                key={n.slug}
                href={`/${city.slug}/${n.slug}`}
                className="bg-blue-50 hover:bg-blue-100 text-blue-700 font-medium px-4 py-3 rounded-lg text-sm transition-colors"
              >
                {n.name}
              </Link>
            ))}
          </div>
        </section>
      )}

      <h2 className="text-2xl font-bold text-gray-800 mb-4">HVAC Services Available in {city.name}</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-8">
        {SERVICES_DATA.map((s) => (
          <Link
            key={s.slug}
            href={`/${s.slug}`}
            className="bg-white border border-gray-200 hover:border-blue-400 text-gray-700 hover:text-blue-700 px-4 py-2 rounded-lg text-sm transition-colors"
          >
            {s.name}
          </Link>
        ))}
      </div>

      <h2 className="text-2xl font-bold text-gray-800 mb-4">Local Service Reference</h2>
      <BERTTable headers={city.bertTable.headers} rows={city.bertTable.rows} />

      <FAQSection faqs={city.faqs} />
      <CTABlock />
    </div>
  );
}
