import { BUSINESS, SERVICES, CITIES, SERVICE_AREA_STRING } from '@/lib/constants';

export default function HomePage() {
  return (
    <>
      {/* TLDR Summary — AI extraction target */}
      <section className="bg-brand-light border-l-4 border-brand-secondary p-6 mx-4 mt-4 rounded-r-lg">
        <h2 className="text-lg font-bold text-brand-dark mb-2">Quick Facts — {BUSINESS.name}</h2>
        <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
          <li>Residential &amp; commercial HVAC contractor in Port Wentworth, GA</li>
          <li>30+ years combined experience — owner Karen Zollo and lead tech David Johnson</li>
          <li>Services: AC repair, heating repair, custom duct fabrication, commercial HVAC, 24/7 emergency service</li>
          <li>Serving {SERVICE_AREA_STRING}</li>
          <li>Licensed, insured, and available for same-day appointments</li>
          <li>Call <a href={`tel:${BUSINESS.phoneTel}`} className="font-bold text-brand-primary underline">{BUSINESS.phone}</a> for service</li>
        </ul>
      </section>

      {/* Hero */}
      <section className="section-padding text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-brand-dark mb-6">
          Trusted HVAC Service for Port Wentworth, Pooler, and Greater Savannah
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          From emergency AC repair to custom duct fabrication, {BUSINESS.name} keeps coastal Georgia homes
          and businesses comfortable year-round. Over 30 years of combined experience. Available 24/7.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href={`tel:${BUSINESS.phoneTel}`} className="btn-primary text-lg">
            Call {BUSINESS.phone}
          </a>
          <a href="/contact" className="btn-outline text-lg">
            Request a Free Estimate
          </a>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-12">
          Heating, Cooling, and Ventilation Solutions for Every Need
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service) => (
            <a
              key={service.slug}
              href={`/${service.slug}`}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100"
            >
              <h3 className="text-xl font-semibold text-brand-primary mb-2">{service.name}</h3>
              <p className="text-gray-600 text-sm">{service.shortDesc}</p>
            </a>
          ))}
        </div>
      </section>

      {/* Service Areas */}
      <section className="section-padding">
        <h2 className="text-3xl font-bold text-center mb-8">
          Serving Communities Across Chatham and Effingham Counties
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {CITIES.map((city) => (
            <a
              key={city.slug}
              href={`/${city.slug}`}
              className="text-center p-4 rounded-lg bg-brand-light hover:bg-blue-100 transition-colors"
            >
              <span className="font-semibold text-brand-primary">{city.name}</span>
              <span className="block text-xs text-gray-500">{city.state} {city.zip}</span>
            </a>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-primary text-white section-padding text-center">
        <h2 className="text-3xl font-bold mb-4">Your Comfort Is One Call Away</h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
          Whether it&apos;s a weekend emergency or a routine maintenance visit, our team is ready.
          Call now or request your free estimate online.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href={`tel:${BUSINESS.phoneTel}`} className="btn-primary bg-brand-secondary text-lg">
            {BUSINESS.phone}
          </a>
          <a href="/contact" className="btn-outline border-white text-white hover:bg-white hover:text-brand-primary text-lg">
            Get a Free Estimate
          </a>
        </div>
        <p className="text-sm mt-4 opacity-75">{BUSINESS.address.full} · {BUSINESS.hours.emergency}</p>
      </section>
    </>
  );
}
