import React, { useState, useEffect } from 'react';
import { SunliteLogo } from './SunliteLogo';
import { COMPANY_INFO } from '../data/companyData';
import {
  PhoneIcon,
  EnvelopeIcon,
  Bars3Icon,
  XMarkIcon,
  ArrowRightIcon,
  ShieldCheckIcon,
  MapPinIcon,
} from '@heroicons/react/24/outline';

interface HeaderProps {
  onRequestSupplyClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onRequestSupplyClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Industries', href: '/industries' },
    { name: 'Contact', href: '/contact' },
    { name: 'Diesel & Products', href: '#products' },
    { name: 'Marine Bunkering', href: '#marine' },
    { name: 'Lagos Hubs', href: '#hubs' },
    { name: 'Compliance', href: '#compliance' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Utility Bar (Apple-style subtle micro-bar) */}
      <div className="bg-slate-900 text-slate-300 text-xs py-2 px-4 sm:px-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5 font-mono-code text-[11px] text-amber-400">
              <ShieldCheckIcon className="w-3.5 h-3.5" />
              <span>CAC: {COMPANY_INFO.rcNumber}</span>
              <span className="text-slate-600">·</span>
              <span className="text-slate-300">TIN: {COMPANY_INFO.tinNumber}</span>
            </div>
            <div className="hidden md:flex items-center gap-1 text-[11px] text-slate-400">
              <MapPinIcon className="w-3.5 h-3.5 text-amber-400" />
              <span>Lagos Operations: Coconut Apapa · VI · Lekki</span>
            </div>
          </div>

          <div className="flex items-center gap-5 text-[11px]">
            <a
              href={`tel:${COMPANY_INFO.primaryPhone}`}
              className="flex items-center gap-1.5 font-medium text-slate-200 hover:text-amber-400 transition-colors"
            >
              <PhoneIcon className="w-3 h-3 text-amber-400" />
              <span>{COMPANY_INFO.primaryPhone}</span>
            </a>
            <a
              href={`mailto:${COMPANY_INFO.email}`}
              className="hidden sm:flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors"
            >
              <EnvelopeIcon className="w-3 h-3 text-amber-400" />
              <span>{COMPANY_INFO.email}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Apple-Style White Frosted Glass Header */}
      <div
        className={`bg-white/95 backdrop-blur-xl border-b transition-all duration-300 ${
          isScrolled
            ? 'border-slate-200 shadow-md py-3'
            : 'border-slate-200/80 shadow-sm py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo with dark text for white background */}
            <a href="#home" className="group focus:outline-none" aria-label="SUN LITE LTD Home">
              <SunliteLogo size="md" lightText={false} />
            </a>

            {/* Desktop Navigation Links (Apple Typography & Spacing) */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-semibold text-slate-600 hover:text-amber-600 transition-colors relative py-1"
                  onClick={(e) => {
                    // Handle hash links and route links
                    if (link.href.startsWith('/')) {
                      e.preventDefault();
                      window.location.href = link.href;
                    }
                  }}
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Header Action Items */}
            <div className="hidden sm:flex items-center gap-3.5">
              {/* Direct Call Button */}
              <a
                href={`tel:${COMPANY_INFO.primaryPhone}`}
                className="flex items-center gap-2 px-3.5 py-2 rounded-full text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors"
                title="Call Lagos Dispatch Desk"
              >
                <PhoneIcon className="w-3.5 h-3.5 text-amber-600" />
                <span className="font-mono-code">{COMPANY_INFO.primaryPhone}</span>
              </a>

              {/* Primary Request Supply CTA (Apple rounded pill) */}
              <button
                onClick={onRequestSupplyClick}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-sm tracking-wide transition-all duration-200 shadow-sm hover:shadow-md hover:scale-[1.02] cursor-pointer"
              >
                <span>Request Supply</span>
                <ArrowRightIcon className="w-4 h-4 stroke-[2.5]" />
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="flex sm:hidden items-center gap-2">
              <button
                onClick={onRequestSupplyClick}
                className="px-3.5 py-1.5 rounded-full bg-amber-400 text-slate-950 font-bold text-xs"
              >
                Request
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl text-slate-700 hover:bg-slate-100"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? (
                  <XMarkIcon className="w-6 h-6" />
                ) : (
                  <Bars3Icon className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

            {/* Mobile Navigation (Route Links) */}
            {mobileMenuOpen && (
              <nav className="sm:hidden bg-white border-t border-slate-200 px-4 pt-4 pb-6 space-y-4 shadow-xl animate-in fade-in duration-200">
                <div className="flex flex-col space-y-1 pb-3 border-b border-slate-100">
                  {navLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={
                        link.href.startsWith('/')
                          ? "block px-3 py-2.5 text-base font-semibold text-slate-800 hover:text-amber-600 hover:bg-slate-50 rounded-lg transition-colors cursor-pointer"
                          : "block px-3 py-2.5 text-base font-semibold text-slate-800 hover:text-amber-600 hover:bg-slate-50 rounded-lg transition-colors"
                      }
                    >
                      {link.name}
                    </a>
                  ))}
                </div>

                <div className="pt-1 space-y-3">
                  <div className="flex items-center gap-2 text-xs text-slate-500 px-3">
                    <ShieldCheckIcon className="w-4 h-4 text-amber-500" />
                    <span>Federal CAC: {COMPANY_INFO.rcNumber} · TIN: {COMPANY_INFO.tinNumber}</span>
                  </div>

                  <a
                    href={`tel:${COMPANY_INFO.primaryPhone}`}
                    className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl border border-slate-200 text-slate-800 text-sm font-semibold bg-slate-50"
                  >
                    <PhoneIcon className="w-4 h-4 text-amber-600" />
                    <span>Call Dispatch: {COMPANY_INFO.primaryPhone}</span>
                  </a>

                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onRequestSupplyClick();
                    }}
                    className="w-full py-3 rounded-full bg-amber-400 text-slate-950 font-black text-sm flex items-center justify-center gap-2 shadow-sm"
                  >
                    <span>Request Petroleum Supply</span>
                    <ArrowRightIcon className="w-4 h-4 stroke-[2.5]" />
                  </button>
                </div>
              </nav>
            )}
    </header>
  );
};
