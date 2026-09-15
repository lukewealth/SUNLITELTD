import React from 'react';
import { MARINE_SPECS, COMPANY_INFO } from '../data/companyData';
import { APP_IMAGES } from '../data/assets';
import {
  GlobeAltIcon,
  ShieldCheckIcon,
  ClockIcon,
  DocumentCheckIcon,
  ArrowRightIcon,
  PhoneIcon,
  CheckCircleIcon,
} from '@heroicons/react/24/outline';

interface MarineSectionProps {
  onDiscussMarineClick: () => void;
}

export const MarineSection: React.FC<MarineSectionProps> = ({ onDiscussMarineClick }) => {
  return (
    <section id="marine" className="py-24 sm:py-32 bg-slate-50 border-t border-slate-200/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Maritime Narrative & Protocols */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-100 text-sky-900 border border-sky-200 text-xs font-bold font-mono-code uppercase">
                <GlobeAltIcon className="w-4 h-4 text-sky-600" />
                <span>SPECIALIST DIVISION · MARINE DIESEL</span>
              </div>

              <h2 className="font-display text-4xl sm:text-6xl font-black text-slate-900 tracking-tight leading-[1.08]">
                Marine diesel bunkering, delivered with precision.
              </h2>

              <p className="text-lg sm:text-xl text-slate-600 leading-relaxed font-normal">
                SUN LITE LTD provides round-the-clock supply of high-cetane Automotive Gas Oil (AGO) to ocean vessels, cargo ships, offshore crew boats, tugs, and barges across Lagos ports and anchorages.
              </p>
            </div>

            {/* Maritime Capabilities Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {MARINE_SPECS.capabilities.map((cap, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-2 hover:border-sky-300 transition-colors"
                >
                  <div className="flex items-center gap-2 text-sm font-bold text-slate-900">
                    <CheckCircleIcon className="w-5 h-5 text-sky-600 shrink-0 stroke-[2.5]" />
                    <span>{cap.title}</span>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed pl-7">
                    {cap.detail}
                  </p>
                </div>
              ))}
            </div>

            {/* Action CTA & Direct Maritime Line */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onDiscussMarineClick}
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-sky-600 hover:bg-sky-500 text-white font-bold text-sm tracking-wide transition-all shadow-sm hover:shadow-md cursor-pointer"
              >
                <span>Discuss Marine Bunkering</span>
                <ArrowRightIcon className="w-4 h-4 stroke-[2.5]" />
              </button>

              <a
                href={`tel:${COMPANY_INFO.primaryPhone}`}
                className="inline-flex items-center gap-2 px-6 py-4 rounded-full border border-slate-300 bg-white hover:bg-slate-100 text-slate-800 text-sm font-semibold transition-colors shadow-xs"
              >
                <PhoneIcon className="w-4 h-4 text-sky-600" />
                <span>24/7 Berth Desk: {COMPANY_INFO.primaryPhone}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Visual Card with Real Generated Marine Bunkering Photography */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-slate-200 group">
              <img
                src={APP_IMAGES.marineBunkering}
                alt="Marine Bunkering Vessel fueling cargo ship in Lagos Port"
                className="w-full h-[360px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="inline-block px-2.5 py-1 rounded-full text-[10px] font-bold bg-sky-500 text-white uppercase font-mono-code mb-1">
                  Lagos Harbor Operations
                </span>
                <h3 className="font-bold text-base">Berth-Side & Offshore Anchorage Supply</h3>
                <p className="text-xs text-slate-200">Continuous bunker barge and hose transfer protocol.</p>
              </div>
            </div>

            {/* Floating Vessel Manifest & Compliance Panel */}
            <div className="rounded-2xl bg-white border border-slate-200 p-6 shadow-sm space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-sky-500 animate-ping" />
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-600 font-mono-code">
                    Marine QA & Protocol Desk
                  </span>
                </div>
                <span className="text-xs font-bold text-sky-700 font-mono-code">
                  MARPOL ANNEX VI
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="text-[10px] text-slate-500 uppercase font-mono-code">Flash Point</div>
                  <div className="font-bold text-slate-900 mt-0.5">&gt; 60°C (SOLAS Safe)</div>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="text-[10px] text-slate-500 uppercase font-mono-code">Bunker Note</div>
                  <div className="font-bold text-slate-900 mt-0.5">Sealed BDN & Drip Sample</div>
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs text-slate-500 pt-1">
                <ShieldCheckIcon className="w-4 h-4 text-sky-600 shrink-0" />
                <span>Certified delivery to Apapa Quays, Tin Can & Lagos Roads</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
