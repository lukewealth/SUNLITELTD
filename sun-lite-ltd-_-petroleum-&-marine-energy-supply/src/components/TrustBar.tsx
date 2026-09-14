import React from 'react';
import { COMPANY_INFO } from '../data/companyData';
import {
  ShieldCheckIcon,
  DocumentCheckIcon,
  MapPinIcon,
  BeakerIcon,
  CheckBadgeIcon,
} from '@heroicons/react/24/outline';

export const TrustBar: React.FC = () => {
  return (
    <section className="relative z-20 bg-white border-b border-slate-200 py-8 lg:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-slate-100">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
              <h2 className="text-sm font-bold tracking-wider uppercase text-slate-500">
                Official Certification & Regulatory Accreditation
              </h2>
            </div>
            <p className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mt-1">
              Trusted Across Lagos Port Terminals & Commercial Corridors
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-amber-50 text-amber-800 border border-amber-200/80 text-xs font-bold font-mono-code">
              <CheckBadgeIcon className="w-4 h-4 text-amber-600" />
              <span>ASTM D975 DIESEL STANDARD</span>
            </span>
          </div>
        </div>

        {/* 4 Apple-Style Trust Credential Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 pt-6">
          {/* Card 1: CAC Registration */}
          <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200/70 hover:border-amber-400/60 transition-all group">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-amber-600 shadow-sm group-hover:scale-105 transition-transform">
                <ShieldCheckIcon className="w-5 h-5 stroke-[2]" />
              </div>
              <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                CAC Registered
              </span>
            </div>
            <div className="text-base sm:text-lg font-black text-slate-900 font-mono-code">
              RC {COMPANY_INFO.rcNumber}
            </div>
            <div className="text-xs text-slate-500 mt-1">
              Federal Republic of Nigeria Corporate Affairs
            </div>
          </div>

          {/* Card 2: Federal Tax ID */}
          <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200/70 hover:border-amber-400/60 transition-all group">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-amber-600 shadow-sm group-hover:scale-105 transition-transform">
                <DocumentCheckIcon className="w-5 h-5 stroke-[2]" />
              </div>
              <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                Federal Tax ID
              </span>
            </div>
            <div className="text-base sm:text-lg font-black text-slate-900 font-mono-code">
              {COMPANY_INFO.tinNumber}
            </div>
            <div className="text-xs text-slate-500 mt-1">
              Federal Inland Revenue Service (FIRS)
            </div>
          </div>

          {/* Card 3: 3 Lagos Operational Bases */}
          <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200/70 hover:border-amber-400/60 transition-all group">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-amber-600 shadow-sm group-hover:scale-105 transition-transform">
                <MapPinIcon className="w-5 h-5 stroke-[2]" />
              </div>
              <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                Lagos Presence
              </span>
            </div>
            <div className="text-base sm:text-lg font-black text-slate-900">
              Apapa · VI · Lekki
            </div>
            <div className="text-xs text-slate-500 mt-1">
              Marine Depot & Commercial Offices
            </div>
          </div>

          {/* Card 4: Quality & Density Assured */}
          <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200/70 hover:border-amber-400/60 transition-all group">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-amber-600 shadow-sm group-hover:scale-105 transition-transform">
                <BeakerIcon className="w-5 h-5 stroke-[2]" />
              </div>
              <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                Quality Assurance
              </span>
            </div>
            <div className="text-base sm:text-lg font-black text-slate-900">
              0.820–0.855 g/cm³
            </div>
            <div className="text-xs text-slate-500 mt-1">
              Sealed Manifolds & Hydrometer Verification
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
