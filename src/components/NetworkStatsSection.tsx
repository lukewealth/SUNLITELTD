import React from 'react';
import { COMPANY_INFO } from '../data/companyData';
import {
  MapPinIcon,
  ShieldCheckIcon,
  TruckIcon,
  GlobeAltIcon,
  BuildingOffice2Icon,
  CheckBadgeIcon,
} from '@heroicons/react/24/outline';

export const NetworkStatsSection: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 bg-slate-50 border-y border-slate-200/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Dotted Interactive Map of Lagos & Coastal Waters (Directly referencing landing page.png) */}
          <div className="lg:col-span-6">
            <div className="relative p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Lagos Logistics & Maritime Grid
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold bg-amber-100 text-amber-900 font-mono-code">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-ping" />
                  Active Dispatch
                </span>
              </div>

              {/* Stylized Dotted Vector Map Representation */}
              <div className="relative w-full aspect-[16/10] bg-slate-50 rounded-2xl overflow-hidden border border-slate-100 p-4 flex flex-col justify-between">
                {/* SVG Dotted Map Grid */}
                <svg
                  viewBox="0 0 500 300"
                  className="w-full h-full"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <pattern id="dotPattern" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
                      <circle cx="2" cy="2" r="1.5" fill="#cbd5e1" />
                    </pattern>
                  </defs>
                  {/* Background grid */}
                  <rect width="100%" height="100%" fill="url(#dotPattern)" opacity="0.6" />

                  {/* Waterways / Lagoon & Atlantic Coast subtle curves */}
                  <path
                    d="M 50,180 Q 150,160 250,200 T 450,190"
                    fill="none"
                    stroke="#93c5fd"
                    strokeWidth="3"
                    strokeDasharray="4 4"
                    opacity="0.7"
                  />
                  <path
                    d="M 30,240 Q 200,230 480,245"
                    fill="none"
                    stroke="#38bdf8"
                    strokeWidth="4"
                    opacity="0.5"
                  />

                  {/* Operational Hub Pin 1: Apapa Depot */}
                  <g className="cursor-pointer group">
                    <circle cx="140" cy="170" r="14" fill="#f59e0b" fillOpacity="0.2" className="animate-pulse" />
                    <circle cx="140" cy="170" r="6" fill="#f59e0b" />
                    <text x="140" y="150" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#0f172a" fontFamily="sans-serif">
                      Coconut, Apapa (Depot)
                    </text>
                  </g>

                  {/* Operational Hub Pin 2: Victoria Island Commercial */}
                  <g className="cursor-pointer group">
                    <circle cx="250" cy="185" r="12" fill="#f59e0b" fillOpacity="0.2" />
                    <circle cx="250" cy="185" r="5" fill="#f59e0b" />
                    <text x="250" y="168" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#0f172a" fontFamily="sans-serif">
                      Victoria Island (Office)
                    </text>
                  </g>

                  {/* Operational Hub Pin 3: Lekki Logistics */}
                  <g className="cursor-pointer group">
                    <circle cx="370" cy="195" r="12" fill="#f59e0b" fillOpacity="0.2" />
                    <circle cx="370" cy="195" r="5" fill="#f59e0b" />
                    <text x="370" y="178" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#0f172a" fontFamily="sans-serif">
                      Lekki Phase 1 (Fleet)
                    </text>
                  </g>

                  {/* Maritime Bunkering Water corridor */}
                  <g>
                    <circle cx="90" cy="235" r="7" fill="#0284c7" />
                    <text x="90" y="260" textAnchor="middle" fontSize="10" fill="#0284c7" fontWeight="bold">
                      Lagos Port Anchorage
                    </text>
                  </g>
                  <g>
                    <circle cx="300" cy="250" r="7" fill="#0284c7" />
                    <text x="300" y="272" textAnchor="middle" fontSize="10" fill="#0284c7" fontWeight="bold">
                      Atlantic Fairway Bunkering
                    </text>
                  </g>
                </svg>

                <div className="flex items-center justify-between text-[11px] text-slate-500 pt-2 border-t border-slate-200">
                  <span className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-amber-500" />
                    Depot & Commercial Hubs
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-sky-500" />
                    Marine Bunkering Fairways
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & 3 Big Stat Blocks (Matching landing page.png) */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2">
                <span className="w-6 h-1 bg-amber-400 rounded-full" />
                <span className="text-xs font-bold tracking-[0.2em] text-slate-500 uppercase">
                  OPERATIONAL SPREAD
                </span>
              </div>
              <h2 className="font-display text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-[1.15]">
                We Spread Across Lagos & Offshore Waters.
              </h2>
            </div>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              With dedicated terminals at Coconut, Apapa and rapid mobilization routes through Victoria Island and Lekki Phase 1, SUN LITE LTD delivers precision petroleum volume wherever and whenever industrial operations demand it.
            </p>

            {/* 3 Metric Cards (Directly matching 25+, 77, 38K in landing page.png) */}
            <div className="grid grid-cols-3 gap-4 pt-2">
              <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 shadow-sm text-center sm:text-left">
                <div className="font-display text-3xl sm:text-4xl font-black text-slate-900 font-mono-code">
                  3<span className="text-amber-500">+</span>
                </div>
                <div className="text-xs font-bold text-slate-700 mt-1">
                  Strategic Hubs
                </div>
                <div className="text-[11px] text-slate-500 mt-0.5">
                  Apapa, VI & Lekki
                </div>
              </div>

              <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 shadow-sm text-center sm:text-left">
                <div className="font-display text-3xl sm:text-4xl font-black text-slate-900 font-mono-code">
                  100<span className="text-amber-500">%</span>
                </div>
                <div className="text-xs font-bold text-slate-700 mt-1">
                  QA & Density
                </div>
                <div className="text-[11px] text-slate-500 mt-0.5">
                  ASTM D975 Verified
                </div>
              </div>

              <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 shadow-sm text-center sm:text-left">
                <div className="font-display text-3xl sm:text-4xl font-black text-slate-900 font-mono-code">
                  24<span className="text-amber-500">/7</span>
                </div>
                <div className="text-xs font-bold text-slate-700 mt-1">
                  Marine Dispatch
                </div>
                <div className="text-[11px] text-slate-500 mt-0.5">
                  Berth & Anchorage
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
