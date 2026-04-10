import { BUSINESS, SERVICE_AREA_STRING } from './constants';

type PageType = 'homepage' | 'service' | 'city' | 'neighborhood' | 'blog' | 'static';

export function generateTitle(pageName: string, type: PageType): string {
  const areas = 'Port Wentworth, Pooler, Savannah, Garden City, Rincon, Bloomingdale, Richmond Hill & Greater Chatham County';
  switch (type) {
    case 'homepage':
      return `The HVAC Shop LLC – AC Repair & HVAC Service | Serving ${areas}`;
    case 'service':
      return `${pageName} – Residential & Commercial | The HVAC Shop LLC – Serving ${areas}`;
    case 'city':
      return `HVAC Service in ${pageName}, GA | The HVAC Shop LLC – Serving Port Wentworth, Pooler, Savannah, Rincon, Garden City & Chatham County`;
    case 'neighborhood':
      return `HVAC Service in ${pageName} | The HVAC Shop LLC – Port Wentworth, Pooler, Savannah & Chatham County`;
    case 'blog':
      return `${pageName} | The HVAC Shop LLC – HVAC Experts in Port Wentworth & Chatham County, GA`;
    case 'static':
      return `${pageName} | The HVAC Shop LLC – Port Wentworth, GA`;
    default:
      return `${pageName} | The HVAC Shop LLC`;
  }
}

export function generateCanonical(path: string): string {
  return `${BUSINESS.url}${path}`;
}

export function buildLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'HVACBusiness',
    '@id': `${BUSINESS.url}/#business`,
    name: BUSINESS.name,
    url: BUSINESS.url,
    telephone: BUSINESS.phoneTel,
    email: BUSINESS.email,
    image: `${BUSINESS.url}/images/the-hvac-shop-llc-logo.webp`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: BUSINESS.address.street,
      addressLocality: BUSINESS.address.city,
      addressRegion: BUSINESS.address.state,
      postalCode: BUSINESS.address.zip,
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: BUSINESS.geo.lat,
      longitude: BUSINESS.geo.lng,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '17:00',
      },
    ],
    areaServed: SERVICE_AREA_STRING,
    founder: { '@type': 'Person', name: BUSINESS.owner.name, jobTitle: BUSINESS.owner.title },
    employee: { '@type': 'Person', name: BUSINESS.leadTech.name, jobTitle: BUSINESS.leadTech.title },
    foundingDate: BUSINESS.founded,
    description: BUSINESS.description,
    priceRange: '$$',
  };
}

export function buildServiceSchema(serviceName: string, description: string, slug: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: serviceName,
    description,
    url: generateCanonical(`/${slug}`),
    provider: {
      '@type': 'HVACBusiness',
      '@id': `${BUSINESS.url}/#business`,
      name: BUSINESS.name,
      telephone: BUSINESS.phoneTel,
      address: {
        '@type': 'PostalAddress',
        streetAddress: BUSINESS.address.street,
        addressLocality: BUSINESS.address.city,
        addressRegion: BUSINESS.address.state,
        postalCode: BUSINESS.address.zip,
        addressCountry: 'US',
      },
    },
    areaServed: SERVICE_AREA_STRING,
    serviceType: serviceName,
  };
}

export function buildFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  };
}

export function buildBreadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: generateCanonical(item.path),
    })),
  };
}

export function buildArticleSchema(
  title: string,
  description: string,
  slug: string,
  datePublished: string,
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    url: generateCanonical(`/blog/${slug}`),
    datePublished,
    dateModified: datePublished,
    author: {
      '@type': 'Person',
      name: BUSINESS.leadTech.name,
      jobTitle: BUSINESS.leadTech.title,
    },
    publisher: {
      '@type': 'Organization',
      name: BUSINESS.name,
      url: BUSINESS.url,
    },
    mainEntityOfPage: generateCanonical(`/blog/${slug}`),
  };
}
