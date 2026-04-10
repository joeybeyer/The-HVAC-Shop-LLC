import Link from 'next/link';
import { BUSINESS, SERVICES, CITIES } from '@/lib/constants';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-gray-900 text-gray-300 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Column 1: NAP */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">{BUSINESS.name}</h3>
            <address className="not-italic space-y-1 text-sm">
              <p>{BUSINESS.address.full}</p>
              <p>
                <a href={`tel:${BUSINESS.phoneTel}`} className="hover:text-white transition-colors">
                  {BUSINESS.phone}
                </a>
              </p>
              <p>
                <a href={`mailto:${BUSINESS.email}`} className="hover:text-white transition-colors">
                  {BUSINESS.email}
                </a>
              </p>
            </address>
            <div className="mt-4 text-sm space-y-0.5">
              <p className="text-gray-400">{BUSINESS.hours.weekday}</p>
              <p className="text-gray-400">{BUSINESS.hours.weekend}</p>
              <p className="text-blue-400 font-semibold">{BUSINESS.hours.emergency}</p>
            </div>
            {/* Trust badges placeholder */}
            <div className="mt-5 flex gap-2 flex-wrap">
              <span className="bg-gray-800 text-xs px-2 py-1 rounded text-gray-400">Licensed & Insured</span>
              <span className="bg-gray-800 text-xs px-2 py-1 rounded text-gray-400">30+ Yrs Experience</span>
              <span className="bg-gray-800 text-xs px-2 py-1 rounded text-gray-400">Chatham County, GA</span>
            </div>
          </div>

          {/* Column 2: Services */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Our Services</h3>
            <ul className="space-y-1.5 text-sm">
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link href={`/${s.slug}`} className="hover:text-white transition-colors">
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Service Areas */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Service Areas</h3>
            <ul className="space-y-1.5 text-sm">
              {CITIES.map((c) => (
                <li key={c.slug}>
                  <Link href={`/${c.slug}`} className="hover:text-white transition-colors">
                    {c.name}, {c.state}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <h4 className="text-white font-semibold mb-2 text-sm">Quick Links</h4>
              <ul className="space-y-1 text-sm">
                <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
                <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
                <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                <li><Link href="/financing" className="hover:text-white transition-colors">Financing</Link></li>
                <li><Link href="/sitemap" className="hover:text-white transition-colors">Sitemap</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-gray-500">
          <p>&copy; {year} {BUSINESS.name}. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy-policy" className="hover:text-gray-300 transition-colors">Privacy Policy</Link>
            <Link href="/terms-of-service" className="hover:text-gray-300 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
