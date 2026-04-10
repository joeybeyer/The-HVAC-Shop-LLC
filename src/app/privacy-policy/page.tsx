import type { Metadata } from 'next';
import { generateTitle, generateCanonical } from '@/lib/seo';
import { BUSINESS } from '@/lib/constants';
import BreadcrumbNav from '@/components/BreadcrumbNav';

export const metadata: Metadata = {
  title: generateTitle('Privacy Policy', 'static'),
  description: 'Privacy policy for The HVAC Shop LLC (thehvacshopllc.com).',
  alternates: { canonical: generateCanonical('/privacy-policy') },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <BreadcrumbNav items={[{ name: 'Privacy Policy', path: '/privacy-policy' }]} />
      <h1 className="text-3xl font-bold text-gray-900 mt-6 mb-3">Privacy Policy</h1>
      <p className="text-sm text-gray-500 mb-6">Last updated: January 1, 2025</p>

      <div className="prose prose-gray max-w-none space-y-6 text-gray-700">
        <section>
          <h2 className="text-xl font-bold text-gray-800 mb-2">Information We Collect</h2>
          <p>When you contact us through our website form, we collect the information you provide: name, phone number, email address, service requested, city/zip, and any message content. This information is used solely to respond to your inquiry and schedule service.</p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-gray-800 mb-2">How We Use Your Information</h2>
          <p>We use the information you provide to: respond to your service inquiry, schedule appointments, send appointment confirmation and follow-up, and contact you about service history if you are an existing customer. We do not sell, rent, or share your personal information with third parties for marketing purposes.</p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-gray-800 mb-2">Analytics</h2>
          <p>This website may use Google Analytics to understand how visitors use our site. Google Analytics collects anonymized data about site usage. You can opt out of Google Analytics tracking using the Google Analytics Opt-out Browser Add-on.</p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-gray-800 mb-2">Cookies</h2>
          <p>Our website may use cookies for site functionality and analytics. You can disable cookies in your browser settings; however, some site features may not function properly without them.</p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-gray-800 mb-2">Data Retention</h2>
          <p>Customer contact information is retained in our business records for the duration of our business relationship and for a reasonable period afterward for service history purposes.</p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-gray-800 mb-2">Your Rights</h2>
          <p>You may request access to, correction of, or deletion of your personal information by contacting us at{' '}
            <a href={`mailto:${BUSINESS.email}`} className="text-blue-700 underline">{BUSINESS.email}</a>.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-gray-800 mb-2">Contact</h2>
          <p>For privacy-related questions: {BUSINESS.address.full} — {BUSINESS.phone} — {BUSINESS.email}</p>
        </section>
      </div>
    </div>
  );
}
