'use client';

import { useState } from 'react';
import Link from 'next/link';
import { BUSINESS, SERVICES, CITIES } from '@/lib/constants';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [areasOpen, setAreasOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <span className="text-blue-700 font-bold text-xl leading-tight">
              The HVAC Shop<span className="text-gray-500 text-sm font-normal"> LLC</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button className="flex items-center gap-1 text-gray-700 hover:text-blue-700 py-2">
                Services <span className="text-xs">▾</span>
              </button>
              {servicesOpen && (
                <div className="absolute top-full left-0 w-64 bg-white shadow-lg border border-gray-100 rounded-lg py-2 grid grid-cols-1 gap-0">
                  {SERVICES.map((s) => (
                    <Link
                      key={s.slug}
                      href={`/${s.slug}`}
                      className="px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700"
                    >
                      {s.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Areas Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setAreasOpen(true)}
              onMouseLeave={() => setAreasOpen(false)}
            >
              <button className="flex items-center gap-1 text-gray-700 hover:text-blue-700 py-2">
                Areas We Serve <span className="text-xs">▾</span>
              </button>
              {areasOpen && (
                <div className="absolute top-full left-0 w-52 bg-white shadow-lg border border-gray-100 rounded-lg py-2">
                  {CITIES.map((c) => (
                    <Link
                      key={c.slug}
                      href={`/${c.slug}`}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700"
                    >
                      {c.name}, {c.state}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/about" className="text-gray-700 hover:text-blue-700">About</Link>
            <Link href="/blog" className="text-gray-700 hover:text-blue-700">Blog</Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-700">Contact</Link>
          </nav>

          {/* Phone CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={`tel:${BUSINESS.phoneTel}`}
              className="bg-blue-700 text-white font-bold px-4 py-2 rounded-lg hover:bg-blue-800 transition-colors text-sm"
            >
              {BUSINESS.phone}
            </a>
          </div>

          {/* Mobile: phone + hamburger */}
          <div className="flex md:hidden items-center gap-3">
            <a
              href={`tel:${BUSINESS.phoneTel}`}
              className="text-blue-700 font-bold text-sm"
            >
              {BUSINESS.phone}
            </a>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
              className="p-2 text-gray-700"
            >
              <span className="block w-5 h-0.5 bg-gray-700 mb-1"></span>
              <span className="block w-5 h-0.5 bg-gray-700 mb-1"></span>
              <span className="block w-5 h-0.5 bg-gray-700"></span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 pb-4">
          <p className="font-semibold text-gray-900 pt-3 pb-1 text-xs uppercase tracking-wider">Services</p>
          {SERVICES.map((s) => (
            <Link
              key={s.slug}
              href={`/${s.slug}`}
              onClick={() => setMobileOpen(false)}
              className="block py-1.5 text-sm text-gray-700 hover:text-blue-700"
            >
              {s.name}
            </Link>
          ))}
          <p className="font-semibold text-gray-900 pt-3 pb-1 text-xs uppercase tracking-wider">Areas We Serve</p>
          {CITIES.map((c) => (
            <Link
              key={c.slug}
              href={`/${c.slug}`}
              onClick={() => setMobileOpen(false)}
              className="block py-1.5 text-sm text-gray-700 hover:text-blue-700"
            >
              {c.name}
            </Link>
          ))}
          <div className="mt-3 pt-3 border-t border-gray-100 flex flex-col gap-2">
            <Link href="/about" onClick={() => setMobileOpen(false)} className="text-sm text-gray-700">About</Link>
            <Link href="/blog" onClick={() => setMobileOpen(false)} className="text-sm text-gray-700">Blog</Link>
            <Link href="/contact" onClick={() => setMobileOpen(false)} className="text-sm text-gray-700">Contact</Link>
          </div>
        </div>
      )}
    </header>
  );
}
