import { BUSINESS } from '@/lib/constants';

interface CTABlockProps {
  heading?: string;
  subtext?: string;
}

export default function CTABlock({
  heading = 'Ready to Schedule Service?',
  subtext = 'Call now or request your free estimate online. We serve Port Wentworth, Pooler, Savannah, and all of Chatham County.',
}: CTABlockProps) {
  return (
    <section className="bg-blue-700 text-white py-12 px-6 text-center rounded-xl my-8">
      <h2 className="text-2xl md:text-3xl font-bold mb-3">{heading}</h2>
      <p className="text-blue-100 mb-6 max-w-2xl mx-auto">{subtext}</p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center mb-4">
        <a
          href={`tel:${BUSINESS.phoneTel}`}
          className="bg-white text-blue-700 font-bold px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors text-lg"
        >
          Call {BUSINESS.phone}
        </a>
        <a
          href="/contact"
          className="border-2 border-white text-white font-bold px-8 py-3 rounded-lg hover:bg-white hover:text-blue-700 transition-colors text-lg"
        >
          Request Free Estimate
        </a>
      </div>
      <p className="text-sm text-blue-200">
        {BUSINESS.address.full} &middot; {BUSINESS.hours.emergency}
      </p>
    </section>
  );
}
