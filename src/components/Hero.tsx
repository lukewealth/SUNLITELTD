import React from 'react';
import { COMPANY_INFO } from '../data/companyData';
import { APP_IMAGES } from '../data/assets';
import {
  ArrowRightIcon,
  PhoneIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

interface HeroProps {
  onRequestSupplyClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onRequestSupplyClick }) => {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-slate-950"
    >
      <div className="absolute inset-0 z-0">
        <img
          src={APP_IMAGES.heroRefinery}
          alt="Modern Petroleum Refinery Terminal at Dusk"
          className="w-full h-full object-cover object-center scale-[1.02] transform transition-transform duration-1000 ease-out"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/80 to-slate-950/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-slate-950/60" />
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          <div className="lg:col-span-7 space-y-7">
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-slate-900/85 border border-amber-400/40 backdrop-blur-md shadow-sm">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              <span className="text-xs font-bold tracking-widest uppercase text-amber-400">
                SUN LITE LTD · LAGOS, NIGERIA
              </span>
            </div>

            <div className="space-y-3">
              <h1 className="font-display text-3xl sm:text-4xl xl:text-5xl font-black text-white tracking-tight leading-[1.1]">
                Meeting Energy Demand In A Dependable Way.
              </h1>
              <p className="text-lg sm:text-xl font-medium text-amber-400">
                Delivering Energy. Building Trust.
              </p>
            </div>

            <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal max-w-2xl">
              Specialized petroleum distribution across Lagos State. Premium <strong className="text-white font-semibold">Diesel (AGO)</strong> supply for industrial power generation, commercial complexes, and 24/7 marine vessel bunkering across Apapa port waters.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onRequestSupplyClick}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-base tracking-wide shadow-lg hover:shadow-amber-400/20 hover:scale-[1.02] active:scale-[0.99] transition-all duration-200 cursor-pointer"
              >
                <span>DISCOVER MORE</span>
                <ArrowRightIcon className="w-5 h-5 stroke-[2.5]" />
              </button>

              <a
                href="#products"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full border border-white/30 hover:border-white/70 bg-white/10 hover:bg-white/15 text-white font-semibold text-base backdrop-blur-md transition-all duration-200"
              >
                <span>Product Specifications</span>
              </a>

              <a
                href={`tel:${COMPANY_INFO.primaryPhone}`}
                className="inline-flex items-center gap-2 text-sm text-slate-300 hover:text-amber-400 transition-colors py-2 px-1"
              >
                <PhoneIcon className="w-4 h-4 text-amber-400" />
                <span>Call Dispatch: <strong className="text-white font-mono-code">{COMPANY_INFO.primaryPhone}</strong></span>
              </a>
            </div>

            <div className="pt-6 border-t border-white/15 flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-200">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15">
                <span className="w-2 h-2 rounded-full bg-amber-400" />
                <span>Automotive Gas Oil (AGO)</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15">
                <span className="w-2 h-2 rounded-full bg-amber-400" />
                <span>24/7 Marine Bunkering</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15">
                <span className="w-2 h-2 rounded-full bg-amber-400" />
                <span>Lagos 3-Hub Network</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative rounded-3xl bg-white/10 backdrop-blur-xl p-3 border border-white/20 shadow-2xl overflow-hidden group">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
                <img
                  src={APP_IMAGES.tankerTruck}
                  alt="SUN LITE LTD Branded Petroleum Tanker Truck"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-400 text-slate-950 font-bold text-xs mb-1.5">
                    <SparklesIcon className="w-3.5 h-3.5" />
                    <span>SUN LITE Dedicated Fleet</span>
                  </div>
                  <h3 className="text-white font-bold text-lg leading-snug">
                    Calibrated Volumetric Delivery
                  </h3>
                  <p className="text-xs text-slate-300">
                    High-capacity metered tanker trucks serving Apapa, VI, Lekki & industrial corridors.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 mt-3 p-2 bg-slate-900/60 rounded-xl border border-white/10 text-xs">
                <div className="p-2">
                  <span className="text-slate-400 block text-[11px]">Primary Supply</span>
                  <strong className="text-white font-semibold">Diesel (AGO) 0.82-0.85g/cm³</strong>
                </div>
                <div className="p-2">
                  <span className="text-slate-400 block text-[11px]">Marine Dispatch</span>
                  <strong className="text-amber-400 font-semibold">Berth & Anchorage 24/7</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
