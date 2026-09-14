import React from 'react';
import { COMPANY_INFO, OPERATIONAL_HUBS } from '../data/companyData';
import { SunliteLogo } from './SunliteLogo';
import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  ShieldCheckIcon,
  ArrowUpIcon,
} from '@heroicons/react/24/outline';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-50 text-slate-600 border-t border-slate-200 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Brand & Mission Statement */}
          <div className="lg:col-span-4 space-y-4">
            <SunliteLogo size="lg" lightText={false} />
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-sm pt-2">
              {COMPANY_INFO.tagline}
            </p>
            <div className="text-xs text-amber-700 font-bold font-display tracking-wider uppercase">
              {COMPANY_INFO.slogan}
            </div>

            <div className="pt-2 flex flex-col gap-1 text-xs font-mono-code text-slate-500">
              <span className="flex items-center gap-1.5 text-slate-700 font-semibold">
                <ShieldCheckIcon className="w-4 h-4 text-amber-600" />
                <span>CAC Incorporated: {COMPANY_INFO.rcNumber}</span>
              </span>
              <span>Federal TIN: {COMPANY_INFO.tinNumber}</span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-2 space-y-3">
            <div className="text-xs font-bold text-slate-900 uppercase tracking-wider font-mono-code">
              Navigation
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#about" className="hover:text-amber-600 transition-colors">
                  About SUN LITE
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-amber-600 transition-colors">
                  Petroleum Products
                </a>
              </li>
              <li>
                <a href="#marine" className="hover:text-amber-600 transition-colors">
                  Marine Bunkering
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-amber-600 transition-colors">
                  Supply Capabilities
                </a>
              </li>
              <li>
                <a href="#hubs" className="hover:text-amber-600 transition-colors">
                  3 Lagos Hubs
                </a>
              </li>
              <li>
                <a href="#compliance" className="hover:text-amber-600 transition-colors">
                  Compliance & Standards
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-amber-600 transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Core Products */}
          <div className="lg:col-span-2 space-y-3">
            <div className="text-xs font-bold text-slate-900 uppercase tracking-wider font-mono-code">
              Core Products
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#products" className="hover:text-amber-600 transition-colors">
                  Diesel (AGO) — Primary
                </a>
              </li>
              <li>
                <a href="#marine" className="hover:text-amber-600 transition-colors">
                  Marine Diesel Bunkering
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-amber-600 transition-colors">
                  Fuel (PMS) for Stations
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-amber-600 transition-colors">
                  Kerosene (DPK) Storage
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-amber-600 transition-colors">
                  Request Custom Volume
                </a>
              </li>
            </ul>
          </div>

          {/* Operational Hubs in Lagos */}
          <div className="lg:col-span-4 space-y-3">
            <div className="text-xs font-bold text-slate-900 uppercase tracking-wider font-mono-code">
              Lagos Offices & Direct Dispatch
            </div>
            <div className="space-y-3 text-xs">
              <div>
                <strong className="text-slate-900 block font-bold">Head Office:</strong>
                <span className="text-slate-600">Coconut, Apapa, Lagos, Nigeria</span>
              </div>
              <div>
                <strong className="text-slate-900 block font-bold">Victoria Island Branch:</strong>
                <span className="text-slate-600">7, Jolayemi, off Karimu Ikotun, VI, Lagos</span>
              </div>
              <div>
                <strong className="text-slate-900 block font-bold">Lekki Logistics Hub:</strong>
                <span className="text-slate-600">C & I Off Bisola Durosinmi Etti Drive, Lekki Phase 1, Lagos</span>
              </div>

              <div className="pt-2 flex flex-col gap-1.5 font-mono-code">
                <a
                  href={`tel:${COMPANY_INFO.primaryPhone}`}
                  className="flex items-center gap-2 text-slate-900 hover:text-amber-600 transition-colors font-bold"
                >
                  <PhoneIcon className="w-3.5 h-3.5 text-amber-600" />
                  <span>Phone: {COMPANY_INFO.primaryPhone}</span>
                </a>
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors"
                >
                  <EnvelopeIcon className="w-3.5 h-3.5 text-amber-600" />
                  <span>Email: {COMPANY_INFO.email}</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal, Slogan & Back to Top */}
        <div className="pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div>
            © {new Date().getFullYear()} {COMPANY_INFO.legalName}. All rights reserved.
            <span className="block sm:inline sm:ml-2 text-slate-500">
              Incorporated under Companies and Allied Matters Act 2020 (RC 9561194).
            </span>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-amber-700 font-semibold">{COMPANY_INFO.slogan}</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-white border border-slate-200 hover:bg-slate-100 text-slate-700 transition-colors flex items-center gap-1.5 cursor-pointer shadow-2xs"
              title="Scroll back to top"
            >
              <span>Top</span>
              <ArrowUpIcon className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
