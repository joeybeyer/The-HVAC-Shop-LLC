import type { Metadata } from 'next';
import { generateTitle, generateCanonical } from '@/lib/seo';
import { BUSINESS } from '@/lib/constants';
import BreadcrumbNav from '@/components/BreadcrumbNav';

export const metadata: Metadata = {
  title: generateTitle('Terms of Service', 'static'),
  description: 'Terms of service for The HVAC Shop LLC.',
  alternates: { canonical: generateCanonical('/terms-of-service') },
};

export default function TermsPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <BreadcrumbNav items={[{ name: 'Terms of Service', path: '/terms-of-service' }]} />
      <h1 className="text-3xl font-bold text-gray-900 mt-6 mb-3">Terms of Service</h1>
      <p className="text-sm text-gray-500 mb-6">Last updated: January 1, 2025</p>

      <div className="prose prose-gray max-w-none space-y-6 text-gray-700">
        <section>
          <h2 className="text-xl font-bold text-gray-800 mb-2">Services</h2>
          <p>The HVAC Shop LLC provides HVAC installation, repair, maintenance, and related services in Port Wentworth, GA and the surrounding Chatham and Effingham County areas. Service is subject to technician availability, geographic coverage, and applicable licensing requirements.</p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-gray-800 mb-2">Estimates and Pricing</h2>
          <p>Estimates provided by phone or online are preliminary and subject to change upon on-site inspection. Final pricing is quoted before any work begins. Emergency service calls include a disclosed after-hours service fee in addition to parts and labor.</p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-gray-800 mb-2">Warranties</h2>
          <p>Labor on repairs is warranted for 30 days from date of service under normal operating conditions. Equipment and parts warranties are governed by the manufacturer&apos;s terms. New system installations include the manufacturer&apos;s equipment warranty; labor warranty terms are provided at time of installation.</p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-gray-800 mb-2">Payment</h2>
          <p>Payment is due upon completion of service. We accept cash, check, and major credit cards. Financing is available for qualifying customers and qualifying project sizes through our financing partners. Returned checks are subject to a $35 returned check fee.</p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-gray-800 mb-2">Limitation of Liability</h2>
          <p>The HVAC Shop LLC&apos;s liability for any service or product is limited to the cost of the service or product provided. We are not liable for consequential damages, including but not limited to property damage from equipment failure, loss of use, or lost business revenue.</p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-gray-800 mb-2">Governing Law</h2>
          <p>These terms are governed by the laws of the State of Georgia. Any disputes shall be resolved in Chatham County, Georgia courts.</p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-gray-800 mb-2">Contact</h2>
          <p>{BUSINESS.address.full} — {BUSINESS.phone} — {BUSINESS.email}</p>
        </section>
      </div>
    </div>
  );
}
