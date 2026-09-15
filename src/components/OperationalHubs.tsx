import React from 'react';
import { OPERATIONAL_HUBS, COMPANY_INFO } from '../data/companyData';
import {
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
  ClockIcon,
  BuildingOffice2Icon,
  ShieldCheckIcon,
} from '@heroicons/react/24/outline';

export const OperationalHubs: React.FC = () => {
  return (
    <section id="hubs" className="py-24 sm:py-32 bg-slate-50 border-y border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4 mb-16">
          <div className="inline-flex items-center gap-2">
            <span className="w-6 h-1 bg-amber-400 rounded-full" />
            <span className="text-xs font-bold tracking-[0.2em] text-slate-500 uppercase">
              PHYSICAL PRESENCE
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-[1.15]">
            Strategically positioned across Lagos energy corridors.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Direct depot operations at Coconut, Apapa, commercial headquarters in Victoria Island, and rapid dispatch fleet coordination in Lekki Phase 1.
          </p>
        </div>

        {/* 3 Physical Hubs Grid (Apple-Style White Cards) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {OPERATIONAL_HUBS.map((hub) => (
            <div
              key={hub.id}
              className="p-8 rounded-3xl bg-white border border-slate-200 hover:border-amber-400 hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-6 relative overflow-hidden group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-amber-100 text-amber-900 border border-amber-200 font-mono-code">
                    {hub.badge}
                  </span>
                  <div className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center text-amber-600">
                    <MapPinIcon className="w-5 h-5 stroke-[2]" />
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-slate-900 tracking-tight">
                    {hub.name}
                  </h3>
                  <p className="text-xs font-semibold text-amber-700 mt-1">
                    {hub.role}
                  </p>
                </div>

                {/* Address Box */}
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-1.5">
                  <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                    Physical Facility
                  </div>
                  <p className="text-sm font-bold text-slate-900 leading-snug">
                    {hub.address}
                  </p>
                  <p className="text-xs text-slate-500 font-mono-code">
                    {hub.area}
                  </p>
                </div>

                {/* Hours & Strategic Advantage */}
                <div className="space-y-2 text-xs text-slate-600">
                  <div className="flex items-start gap-2">
                    <ClockIcon className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <span>{hub.hours}</span>
                  </div>
                  <p className="text-slate-500 text-xs leading-relaxed pt-1">
                    <strong className="text-slate-700">Corridor Coverage:</strong> {hub.strategicAdvantage}
                  </p>
                </div>
              </div>

              {/* Direct Hub Communication Line */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                <a
                  href={`tel:${hub.phone}`}
                  className="inline-flex items-center gap-1.5 font-bold text-slate-900 hover:text-amber-600 transition-colors"
                >
                  <PhoneIcon className="w-4 h-4 text-amber-600" />
                  <span className="font-mono-code">{hub.phone}</span>
                </a>

                <a
                  href={`mailto:${hub.email}?subject=Inquiry for ${hub.name}`}
                  className="text-slate-500 hover:text-slate-900 font-medium transition-colors"
                >
                  Dispatch Desk
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
