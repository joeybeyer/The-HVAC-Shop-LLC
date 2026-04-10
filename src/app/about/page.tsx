import type { Metadata } from 'next';
import Link from 'next/link';
import { generateTitle, generateCanonical } from '@/lib/seo';
import { BUSINESS } from '@/lib/constants';
import BreadcrumbNav from '@/components/BreadcrumbNav';
import CTABlock from '@/components/CTABlock';

export const metadata: Metadata = {
  title: generateTitle('About The HVAC Shop LLC — Port Wentworth, GA', 'static'),
  description:
    'Learn about The HVAC Shop LLC — owner Karen Zollo, lead technician David Johnson, 30 years of HVAC experience, and our commitment to honest service in Chatham County, GA.',
  alternates: { canonical: generateCanonical('/about') },
};

const teamSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': `${BUSINESS.url}/#business`,
  name: BUSINESS.name,
  employee: [
    {
      '@type': 'Person',
      name: 'Karen Zollo',
      jobTitle: 'Owner',
      worksFor: { '@type': 'Organization', name: BUSINESS.name },
    },
    {
      '@type': 'Person',
      name: 'David Johnson',
      jobTitle: 'Lead HVAC Technician',
      description: '30 years of HVAC installation, repair, and duct fabrication experience in coastal Georgia',
      worksFor: { '@type': 'Organization', name: BUSINESS.name },
    },
  ],
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(teamSchema) }}
      />
      <div className="max-w-4xl mx-auto px-4 py-8">
        <BreadcrumbNav items={[{ name: 'About', path: '/about' }]} />

        <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-6 rounded-r-lg">
          <h2 className="text-lg font-bold text-gray-900 mb-3">Quick Facts</h2>
          <ul className="list-disc list-inside space-y-1.5 text-sm text-gray-700">
            <li>Licensed, insured HVAC contractor based in Port Wentworth, GA since {BUSINESS.founded}</li>
            <li>30+ years of combined HVAC experience between Karen Zollo and David Johnson</li>
            <li>Specialties: AC repair, installation, custom duct fabrication, commercial HVAC, 24/7 emergency service</li>
            <li>Serving Port Wentworth, Pooler, Savannah, Garden City, Rincon, and all of Chatham County</li>
            <li>Honest pricing, no upsells, transparent diagnostics on every call</li>
          </ul>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mt-6 mb-6">
          About The HVAC Shop LLC — Your Port Wentworth HVAC Contractor
        </h1>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Story and What Drives Us</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            The HVAC Shop LLC was founded in {BUSINESS.founded} with a straightforward mission: provide honest,
            high-quality HVAC service to the homes and businesses of Port Wentworth and Chatham County.
            We started as a small operation based on the belief that this market was underserved by contractors
            who were either too large to provide personal service or too inexperienced to handle the specific
            demands of coastal Georgia&apos;s challenging climate.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Coastal Georgia is one of the most demanding environments for HVAC equipment in the country.
            Average summer humidity above 75%, salt air from the Atlantic and the Savannah River, heat index
            values regularly exceeding 105°F, and a cooling season that runs nine months per year — this
            environment demands contractors who understand the specific failure modes, maintenance requirements,
            and system configurations that work here. Generic national contractors often don&apos;t have this
            knowledge; we&apos;ve built our entire practice around it.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Today, we serve all of{' '}
            <Link href="/port-wentworth" className="text-blue-700 underline">
              Port Wentworth
            </Link>
            ,{' '}
            <Link href="/pooler" className="text-blue-700 underline">
              Pooler
            </Link>
            ,{' '}
            <Link href="/savannah" className="text-blue-700 underline">
              Savannah
            </Link>
            , and the surrounding communities with the same personal approach we started with.
          </p>
        </section>

        <section className="my-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-blue-700">KZ</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">Karen Zollo</h3>
              <p className="text-blue-700 font-medium text-sm mb-3">Owner & Operations Manager</p>
              <p className="text-gray-700 text-sm leading-relaxed">
                Karen founded The HVAC Shop LLC in {BUSINESS.founded} after seeing the need for a locally owned,
                customer-first HVAC contractor in the Port Wentworth market. She manages daily operations,
                customer relationships, and the business development that has grown the company from a startup to
                Chatham County&apos;s trusted local HVAC provider. Karen&apos;s background in business operations
                combined with her deep understanding of what customers need — honest answers, reliable service,
                fair prices — defines the culture of The HVAC Shop LLC.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-blue-700">DJ</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">David Johnson</h3>
              <p className="text-blue-700 font-medium text-sm mb-3">Lead HVAC Technician — 30 Years Experience</p>
              <p className="text-gray-700 text-sm leading-relaxed">
                David brings 30 years of HVAC installation, repair, and custom duct fabrication experience to every
                job. He&apos;s worked on systems ranging from residential heat pumps in Godley Station to large
                commercial rooftop units in the Port Wentworth industrial corridor. His specialty is diagnostics —
                the ability to identify the real cause of a system problem rather than just treating symptoms —
                which saves customers money by getting the repair right the first time. David is EPA 608 certified
                and holds all required Georgia HVAC licensing.
              </p>
            </div>
          </div>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Commitment to Honest Service</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            We&apos;re direct with our customers. If your system needs a $150 capacitor replacement, we tell you
            that — we don&apos;t manufacture urgency around a system replacement that isn&apos;t warranted yet. When
            replacement does make sense, we explain specifically why with the measurements to back it up. We price
            transparently: diagnostic fee, part cost, and labor — no mystery charges. Emergency calls include the
            after-hours fee disclosed before we dispatch.
          </p>
          <p className="text-gray-700 leading-relaxed">
            We also stand behind our work. If a repair we performed fails within 30 days under normal operation,
            we return at no charge to make it right. We stock quality parts — OEM where possible, quality
            aftermarket where the price difference is significant and the performance is equivalent.
          </p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Licensing and Credentials</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Georgia State HVAC Contractor License</li>
            <li>EPA 608 Universal Refrigerant Certification</li>
            <li>Fully insured — general liability and workers&apos; compensation</li>
            <li>ACCA member — Air Conditioning Contractors of America</li>
            <li>Chatham County and Bryan County permitted contractor</li>
          </ul>
        </section>

        <CTABlock heading="Ready to Work With a Contractor You Can Trust?" />
      </div>
    </>
  );
}
