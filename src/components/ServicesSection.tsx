import React from 'react';
import { SERVICES } from '../data/companyData';
import {
  BuildingOffice2Icon,
  GlobeAltIcon,
  TruckIcon,
  ShieldCheckIcon,
  BoltIcon,
  HomeModernIcon,
  ArrowRightIcon,
} from '@heroicons/react/24/outline';

interface ServicesSectionProps {
  onRequestSupplyClick: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onRequestSupplyClick }) => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'BuildingOffice2Icon':
        return <BuildingOffice2Icon className="w-6 h-6 stroke-[1.8]" />;
      case 'GlobeAltIcon':
        return <GlobeAltIcon className="w-6 h-6 stroke-[1.8]" />;
      case 'TruckIcon':
        return <TruckIcon className="w-6 h-6 stroke-[1.8]" />;
      case 'ShieldCheckIcon':
        return <ShieldCheckIcon className="w-6 h-6 stroke-[1.8]" />;
      case 'BoltIcon':
        return <BoltIcon className="w-6 h-6 stroke-[1.8]" />;
      case 'HomeModernIcon':
        return <HomeModernIcon className="w-6 h-6 stroke-[1.8]" />;
      default:
        return <BoltIcon className="w-6 h-6 stroke-[1.8]" />;
    }
  };

  return (
    <section id="services" className="py-24 sm:py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl space-y-4 mb-16">
          <div className="inline-flex items-center gap-2">
            <span className="w-6 h-1 bg-amber-400 rounded-full" />
            <span className="text-xs font-bold tracking-[0.2em] text-slate-500 uppercase">
              OPERATIONAL CAPABILITIES
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-[1.15]">
            Supply built around operational continuity.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Every service is engineered to ensure frictionless petroleum supply, from industrial generation fuel to round-the-clock port bunkering.
          </p>
        </div>

        {/* 6 Clean Apple-Style Bento Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((srv) => (
            <div
              key={srv.id}
              className="group p-8 rounded-3xl bg-slate-50 border border-slate-200/80 hover:border-amber-400/80 hover:bg-white hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                {/* Heroicon Icon Badge */}
                <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 text-amber-600 flex items-center justify-center group-hover:bg-amber-400 group-hover:text-slate-950 group-hover:border-amber-400 shadow-xs transition-colors">
                  {getIcon(srv.iconName)}
                </div>

                <div>
                  <span className="text-[11px] font-mono-code font-semibold uppercase tracking-wider text-slate-500">
                    {srv.sectorTag}
                  </span>
                  <h3 className="font-display text-xl font-bold text-slate-900 mt-1">
                    {srv.title}
                  </h3>
                </div>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {srv.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200/60 flex items-center justify-between">
                <span className="text-xs font-mono-code font-bold text-slate-500">
                  {srv.subtitle}
                </span>
                <button
                  onClick={onRequestSupplyClick}
                  className="text-amber-600 font-bold text-xs flex items-center gap-1 group-hover:text-slate-950 transition-colors cursor-pointer"
                >
                  <span>Requisition</span>
                  <ArrowRightIcon className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
