import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { BUSINESS, SERVICE_AREA_STRING } from '@/lib/constants';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  metadataBase: new URL(BUSINESS.url),
  title: {
    default: `The HVAC Shop LLC – AC Repair & HVAC Service in Port Wentworth, GA – Serving ${SERVICE_AREA_STRING} – 24/7 Emergency Service`,
    template: '%s | The HVAC Shop LLC',
  },
  description: BUSINESS.description,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: BUSINESS.url,
    siteName: BUSINESS.name,
    title: `${BUSINESS.name} – HVAC Services in Port Wentworth, GA`,
    description: BUSINESS.description,
  },
  alternates: {
    canonical: BUSINESS.url,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

// LocalBusiness schema — homepage only (injected in root layout for homepage,
// individual pages override with their own schema)
const localBusinessSchema = {
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
  areaServed: [
    { '@type': 'City', name: 'Port Wentworth', '@id': 'https://en.wikipedia.org/wiki/Port_Wentworth,_Georgia' },
    { '@type': 'City', name: 'Pooler' },
    { '@type': 'City', name: 'Savannah' },
    { '@type': 'City', name: 'Garden City' },
    { '@type': 'City', name: 'Rincon' },
    { '@type': 'City', name: 'Bloomingdale' },
    { '@type': 'City', name: 'Richmond Hill' },
    { '@type': 'AdministrativeArea', name: 'Chatham County' },
    { '@type': 'AdministrativeArea', name: 'Effingham County' },
  ],
  founder: { '@type': 'Person', name: BUSINESS.owner.name, jobTitle: BUSINESS.owner.title },
  employee: {
    '@type': 'Person',
    name: BUSINESS.leadTech.name,
    jobTitle: BUSINESS.leadTech.title,
  },
  foundingDate: BUSINESS.founded,
  description: BUSINESS.description,
  priceRange: '$$',
  paymentAccepted: 'Cash, Credit Card, Check, Financing Available',
  // sameAs: [] // TODO: Add GBP, Yelp, Facebook, Instagram URLs once created
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        {/* TODO: Add GTM script when NEXT_PUBLIC_GTM_ID is set */}
      </head>
      <body className="font-sans antialiased">
        {/* TODO: <Header /> */}
        <main>{children}</main>
        {/* TODO: <Footer /> */}
      </body>
    </html>
  );
}
