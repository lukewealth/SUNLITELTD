import React from 'react';
import { SECTORS_COVERED } from '../data/companyData';
import {
  BuildingOfficeIcon,
  GlobeAltIcon,
  TruckIcon,
  ShieldCheckIcon,
  BuildingLibraryIcon,
  Cog6ToothIcon,
  AcademicCapIcon,
  HomeModernIcon,
  ArrowRightIcon,
} from '@heroicons/react/24/outline';

interface CoverageMatrixProps {
  onRequestSupplyClick: () => void;
}

export const CoverageMatrix: React.FC<CoverageMatrixProps> = ({ onRequestSupplyClick }) => {
  const getSectorIcon = (name: string) => {
    switch (name) {
      case 'BuildingOfficeIcon':
        return <BuildingOfficeIcon className="w-5 h-5" />;
      case 'GlobeAltIcon':
        return <GlobeAltIcon className="w-5 h-5" />;
      case 'TruckIcon':
        return <TruckIcon className="w-5 h-5" />;
      case 'ShieldCheckIcon':
        return <ShieldCheckIcon className="w-5 h-5" />;
      case 'BuildingLibraryIcon':
        return <BuildingLibraryIcon className="w-5 h-5" />;
      case 'Cog6ToothIcon':
        return <Cog6ToothIcon className="w-5 h-5" />;
      case 'AcademicCapIcon':
        return <AcademicCapIcon className="w-5 h-5" />;
      case 'HomeModernIcon':
        return <HomeModernIcon className="w-5 h-5" />;
      default:
        return <BuildingOfficeIcon className="w-5 h-5" />;
    }
  };

  return (
    <section className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-3 mb-12">
          <div className="inline-flex items-center gap-2">
            <span className="w-6 h-1 bg-amber-400 rounded-full" />
            <span className="text-xs font-bold tracking-[0.2em] text-slate-500 uppercase">
              CLIENT SECTOR COVERAGE
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Supply where your operations need it most.
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Every delivery is configured according to customer storage tanks, discharge safety protocols, and operational constraints across Lagos State.
          </p>
        </div>

        {/* 8 Distinct Sectors in Apple-Style Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {SECTORS_COVERED.map((sec, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-amber-400 hover:bg-white hover:shadow-md transition-all duration-200 flex flex-col justify-between space-y-3 group"
            >
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 text-amber-600 flex items-center justify-center group-hover:bg-amber-400 group-hover:text-slate-950 transition-colors shadow-2xs">
                  {getSectorIcon(sec.icon)}
                </div>
                <span className="text-[10px] font-mono-code font-bold text-slate-400">
                  SECTOR 0{idx + 1}
                </span>
              </div>

              <div>
                <h3 className="text-base font-bold text-slate-900 group-hover:text-amber-600 transition-colors">
                  {sec.name}
                </h3>
                <div className="text-xs font-mono-code text-amber-700 font-semibold mt-1">
                  {sec.products}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Compliance Footer Note */}
        <div className="mt-8 p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <span>
            * Product-specific delivery is strictly subject to customer tank capacity, certified discharge meters, and safety clearance.
          </span>
          <button
            onClick={onRequestSupplyClick}
            className="text-amber-700 font-bold hover:text-slate-950 flex items-center gap-1.5 shrink-0 cursor-pointer"
          >
            <span>Configure Sector Delivery</span>
            <ArrowRightIcon className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
};
