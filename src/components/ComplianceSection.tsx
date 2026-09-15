import React from 'react';
import { COMPLIANCE_ITEMS, COMPANY_INFO } from '../data/companyData';
import {
  ShieldCheckIcon,
  DocumentCheckIcon,
  CheckCircleIcon,
  LockClosedIcon,
} from '@heroicons/react/24/outline';

export const ComplianceSection: React.FC = () => {
  return (
    <section id="compliance" className="py-24 sm:py-32 bg-white border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl space-y-4 mb-16">
          <div className="inline-flex items-center gap-2">
            <span className="w-6 h-1 bg-amber-400 rounded-full" />
            <span className="text-xs font-bold tracking-[0.2em] text-slate-500 uppercase">
              VERIFIED COMPLIANCE & CREDENTIALS
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-[1.15]">
            Rigorous compliance. Verifiable standards. Zero shortcuts.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Unlike informal fuel brokers, SUN LITE LTD operates as a registered corporate entity under Nigerian law with strict adherence to petroleum quality standards and statutory obligations.
          </p>
        </div>

        {/* 4 Compliance Modules (Apple-style white cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {COMPLIANCE_ITEMS.map((item) => (
            <div
              key={item.id}
              className="p-6 rounded-3xl bg-slate-50 border border-slate-200 hover:border-amber-400 hover:bg-white hover:shadow-lg transition-all flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-2xl bg-white border border-slate-200 text-amber-600 flex items-center justify-center shadow-xs">
                    <ShieldCheckIcon className="w-5 h-5 stroke-[2]" />
                  </div>
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-bold font-mono-code bg-amber-100 text-amber-900 border border-amber-200">
                    {item.highlight}
                  </span>
                </div>

                <div>
                  <h3 className="text-base font-bold text-slate-900 tracking-tight">
                    {item.title}
                  </h3>
                  <div className="text-xs font-mono-code text-amber-700 font-semibold mt-0.5">
                    {item.code}
                  </div>
                  <div className="text-[11px] text-slate-500 mt-0.5">
                    {item.authority}
                  </div>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-200/70 flex items-center gap-1.5 text-[11px] text-slate-600 font-medium">
                <CheckCircleIcon className="w-4 h-4 text-amber-600 shrink-0" />
                <span>Statutorily Authenticated</span>
              </div>
            </div>
          ))}
        </div>

        {/* Corporate Trust Banner with Incorporation Citation */}
        <div className="mt-12 p-8 sm:p-10 rounded-3xl bg-slate-50 border border-slate-200 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-xs">
          <div className="space-y-2 max-w-2xl text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-2 text-xs font-mono-code text-amber-700 font-bold uppercase tracking-wider">
              <LockClosedIcon className="w-4 h-4 text-amber-600" />
              <span>Incorporation Citation · Federal Republic of Nigeria</span>
            </div>
            <h4 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              SUN LITE LTD (RC 9561194)
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Certificate of Incorporation granted under the Companies and Allied Matters Act 2020. Tax Identification Number (TIN): 2622496356436.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
            <div className="px-5 py-3 rounded-2xl bg-white border border-slate-200 text-center shadow-xs">
              <div className="text-[10px] text-slate-500 uppercase font-mono-code">Registered Head Base</div>
              <div className="text-xs font-bold text-slate-900">Coconut, Apapa, Lagos</div>
            </div>
            <div className="px-5 py-3 rounded-2xl bg-white border border-slate-200 text-center shadow-xs">
              <div className="text-[10px] text-slate-500 uppercase font-mono-code">Commercial Hub</div>
              <div className="text-xs font-bold text-slate-900">Victoria Island, Lagos</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
