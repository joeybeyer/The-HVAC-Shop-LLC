import type { Metadata } from 'next';
import { generateTitle, generateCanonical } from '@/lib/seo';
import { BUSINESS } from '@/lib/constants';
import BreadcrumbNav from '@/components/BreadcrumbNav';
import LeadForm from '@/components/LeadForm';

export const metadata: Metadata = {
  title: generateTitle('Contact The HVAC Shop LLC — Port Wentworth, GA', 'static'),
  description:
    'Contact The HVAC Shop LLC for HVAC service in Port Wentworth, Pooler, Savannah, and Chatham County, GA. Call (912) 416-3449 or request a free estimate online.',
  alternates: { canonical: generateCanonical('/contact') },
};

export default function ContactPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <BreadcrumbNav items={[{ name: 'Contact', path: '/contact' }]} />
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mt-6 mb-3">
        Contact The HVAC Shop LLC
      </h1>
      <p className="text-gray-600 mb-8">
        Call us, use the form below, or send an email. For emergencies, call{' '}
        <a href={`tel:${BUSINESS.phoneTel}`} className="font-bold text-blue-700">
          {BUSINESS.phone}
        </a>{' '}
        — our emergency line is answered live.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <LeadForm heading="Request a Free Estimate" />
        </div>

        <div className="space-y-6">
          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Our Contact Information</h2>
            <address className="not-italic space-y-3 text-sm text-gray-700">
              <div>
                <p className="font-semibold text-gray-900">Phone</p>
                <a href={`tel:${BUSINESS.phoneTel}`} className="text-blue-700 font-bold text-lg">
                  {BUSINESS.phone}
                </a>
              </div>
              <div>
                <p className="font-semibold text-gray-900">Email</p>
                <a href={`mailto:${BUSINESS.email}`} className="text-blue-700 underline">
                  {BUSINESS.email}
                </a>
              </div>
              <div>
                <p className="font-semibold text-gray-900">Address</p>
                <p>{BUSINESS.address.full}</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900">Hours</p>
                <p>{BUSINESS.hours.weekday}</p>
                <p>{BUSINESS.hours.weekend}</p>
                <p className="text-blue-700 font-semibold">{BUSINESS.hours.emergency}</p>
              </div>
            </address>
          </div>

          <div className="bg-blue-700 text-white rounded-xl p-6">
            <h2 className="text-xl font-bold mb-2">Emergency HVAC Service</h2>
            <p className="text-blue-100 text-sm mb-4">
              AC failed on a hot Savannah night? Furnace not working during a cold snap? Our emergency
              line is answered live — call now.
            </p>
            <a
              href={`tel:${BUSINESS.phoneTel}`}
              className="bg-white text-blue-700 font-bold px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors inline-block"
            >
              Call {BUSINESS.phone}
            </a>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">Service Area</h2>
            <p className="text-sm text-gray-700">
              We serve Port Wentworth, Pooler, Savannah, Garden City, Rincon, Bloomingdale,
              Richmond Hill, and all of Chatham and Effingham Counties.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
