import type { Metadata } from 'next';
import Link from 'next/link';
import { generateTitle, generateCanonical } from '@/lib/seo';
import { BUSINESS } from '@/lib/constants';
import BreadcrumbNav from '@/components/BreadcrumbNav';
import CTABlock from '@/components/CTABlock';

export const metadata: Metadata = {
  title: generateTitle('HVAC Financing Options — Port Wentworth & Chatham County, GA', 'static'),
  description:
    'HVAC financing in Port Wentworth, Pooler & Savannah, GA. 0% interest plans and monthly payments for new systems and major repairs. Call (912) 416-3449.',
  alternates: { canonical: generateCanonical('/financing') },
};

export default function FinancingPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <BreadcrumbNav items={[{ name: 'Financing', path: '/financing' }]} />

      <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-6 rounded-r-lg">
        <h2 className="text-lg font-bold text-gray-900 mb-3">Quick Facts — HVAC Financing</h2>
        <ul className="list-disc list-inside space-y-1.5 text-sm text-gray-700">
          <li>0% interest promotional periods available (6, 12, and 18 months)</li>
          <li>Extended payment plans up to 60 months for qualifying customers</li>
          <li>Financing available for new installations and major repairs (minimum ~$500)</li>
          <li>Quick application process — decisions often same day</li>
          <li>Federal tax credits up to $2,000 available for qualifying heat pump systems</li>
        </ul>
      </div>

      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mt-6 mb-4">
        HVAC Financing for Port Wentworth and Chatham County Homeowners
      </h1>

      <p className="text-gray-700 leading-relaxed mb-6">
        A new HVAC system is one of the largest home improvement investments you&apos;ll make. The HVAC Shop LLC
        works with financing partners to offer payment options that make quality HVAC equipment accessible
        without requiring a large upfront payment.
      </p>

      <section className="my-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Available Financing Plans</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white border border-gray-200 rounded-xl p-5">
            <h3 className="font-bold text-gray-900 mb-2">0% Promotional Interest</h3>
            <p className="text-sm text-gray-600 mb-2">6, 12, or 18 months — no interest if paid in full within the promotional period.</p>
            <p className="text-xs text-gray-500">Best for: planned replacements and most system installations.</p>
          </div>
          <div className="bg-white border border-gray-200 rounded-xl p-5">
            <h3 className="font-bold text-gray-900 mb-2">Extended Monthly Payments</h3>
            <p className="text-sm text-gray-600 mb-2">24–60 month fixed-payment plans for maximum cash flow flexibility.</p>
            <p className="text-xs text-gray-500">Best for: customers who need lower monthly payments over a longer period.</p>
          </div>
          <div className="bg-white border border-gray-200 rounded-xl p-5">
            <h3 className="font-bold text-gray-900 mb-2">Emergency Repair Financing</h3>
            <p className="text-sm text-gray-600 mb-2">Finance major repairs meeting minimum thresholds — no need to delay critical service.</p>
            <p className="text-xs text-gray-500">Best for: compressor replacements, major refrigerant system repairs.</p>
          </div>
          <div className="bg-white border border-gray-200 rounded-xl p-5">
            <h3 className="font-bold text-gray-900 mb-2">Federal Tax Credits</h3>
            <p className="text-sm text-gray-600 mb-2">30% credit (up to $2,000) for qualifying heat pumps under the Inflation Reduction Act.</p>
            <p className="text-xs text-gray-500">Consult your tax advisor. We provide required equipment documentation.</p>
          </div>
        </div>
      </section>

      <section className="my-8 bg-gray-50 rounded-xl p-6">
        <h2 className="text-xl font-bold text-gray-800 mb-3">How to Apply</h2>
        <ol className="list-decimal list-inside space-y-2 text-gray-700 text-sm">
          <li>Call or request an estimate — we&apos;ll assess your needs and provide an installation quote</li>
          <li>Ask about financing during your estimate — we&apos;ll walk you through the available options</li>
          <li>Complete a brief online application — typically 5–10 minutes, often same-day decision</li>
          <li>Once approved, we schedule your installation at your earliest convenience</li>
        </ol>
      </section>

      <p className="text-gray-700 mb-6">
        For complete financing details and current offers, call{' '}
        <a href={`tel:${BUSINESS.phoneTel}`} className="font-bold text-blue-700">
          {BUSINESS.phone}
        </a>
        . See also our{' '}
        <Link href="/hvac-financing" className="text-blue-700 underline">
          HVAC financing service page
        </Link>{' '}
        for detailed information on repair vs. replace math and tax credits.
      </p>

      <CTABlock heading="Questions About Financing? Call Us." />
    </div>
  );
}
