import React from 'react';
import { APP_IMAGES } from '../data/assets';
import {
  CheckCircleIcon,
  ShieldCheckIcon,
  ArrowRightIcon,
  SparklesIcon,
  PlayIcon,
} from '@heroicons/react/24/outline';

interface AboutProps {
  onRequestSupplyClick: () => void;
}

export const AboutSection: React.FC<AboutProps> = ({ onRequestSupplyClick }) => {
  return (
    <section id="about" className="py-24 sm:py-32 bg-white relative overflow-hidden">
      {/* Subtle background ambient blur */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Who We Are Narrative (Referencing landing page.png) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2">
                <span className="w-6 h-1 bg-amber-400 rounded-full" />
                <span className="text-xs font-bold tracking-[0.2em] text-slate-500 uppercase">
                  WHO WE ARE
                </span>
              </div>
              <h2 className="font-display text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-[1.15]">
                Providing affordable and reliable energy.
              </h2>
            </div>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              <strong className="text-slate-900 font-semibold">SUN LITE LTD</strong> is a Nigerian petroleum products marketing and maritime supply enterprise headquartered in Lagos. We focus relentlessly on <strong className="text-slate-900 font-semibold">Diesel (Automotive Gas Oil)</strong>, alongside Fuel (PMS), Kerosene (DPK), and specialized 24/7 marine bunkering.
            </p>

            <p className="text-sm sm:text-base text-slate-500 leading-relaxed">
              In an operational environment where energy availability dictates business survival, we eliminate the stockouts, adulteration risks, and volume discrepancies common in petroleum procurement. We operate from three strategic hubs: Coconut, Apapa (Depot Base), Victoria Island (Commercial Office), and Lekki Phase 1 (Logistics Base).
            </p>

            {/* Checklist Feature Points */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center shrink-0">
                  <CheckCircleIcon className="w-4 h-4 stroke-[2.5]" />
                </div>
                <span className="text-sm font-semibold text-slate-700">
                  High-cetane Diesel (AGO) meeting ASTM D975 specifications
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center shrink-0">
                  <CheckCircleIcon className="w-4 h-4 stroke-[2.5]" />
                </div>
                <span className="text-sm font-semibold text-slate-700">
                  Tamper-evident sealed deliveries & calibrated flow meters
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center shrink-0">
                  <CheckCircleIcon className="w-4 h-4 stroke-[2.5]" />
                </div>
                <span className="text-sm font-semibold text-slate-700">
                  Rapid-response dispatch across Apapa, VI, Lekki & Ikeja corridors
                </span>
              </div>
            </div>

            {/* Button (Yellow Action Button from landing page.png) */}
            <div className="pt-3">
              <button
                onClick={onRequestSupplyClick}
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-sm tracking-wide shadow-sm hover:shadow-md transition-all cursor-pointer"
              >
                <span>READ MORE & REQUISITION</span>
                <ArrowRightIcon className="w-4 h-4 stroke-[2.5]" />
              </button>
            </div>
          </div>

          {/* Right Column: High Quality Photographic Card with Industrial White Tanks (Referencing refiary tank.jpeg) */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200/80 group">
              <img
                src={APP_IMAGES.whiteStorageTanks}
                alt="White Industrial Bulk Petroleum Storage Tanks"
                className="w-full h-[460px] sm:h-[520px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

              {/* Yellow Action Pill (Echoing the yellow play button in landing page.png) */}
              <div className="absolute top-6 right-6 w-12 h-12 rounded-2xl bg-amber-400 text-slate-950 flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform cursor-pointer" title="Certified Bulk Depots">
                <PlayIcon className="w-6 h-6 fill-current stroke-[2] ml-0.5" />
              </div>

              {/* Floating Bottom Card */}
              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200 shadow-xl">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-amber-400 text-slate-950 flex items-center justify-center font-black shrink-0">
                      <SparklesIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-black text-slate-900">
                        Certified Bulk Terminal Storage
                      </h3>
                      <p className="text-xs text-slate-500 font-mono-code">
                        Direct Gantry Allocation · Coconut, Apapa Depot
                      </p>
                    </div>
                  </div>
                  <span className="hidden sm:inline-block px-3 py-1 rounded-full text-[11px] font-bold bg-slate-100 text-slate-800">
                    24/7 Operations
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
