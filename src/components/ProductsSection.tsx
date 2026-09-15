import React, { useState } from 'react';
import { PRODUCTS } from '../data/companyData';
import { ProductCategory } from '../types';
import { APP_IMAGES } from '../data/assets';
import {
  ArrowRightIcon,
  CheckIcon,
  AdjustmentsHorizontalIcon,
  SparklesIcon,
  ShieldCheckIcon,
} from '@heroicons/react/24/outline';

interface ProductsSectionProps {
  onSelectProductForSupply: (product: ProductCategory) => void;
}

export const ProductsSection: React.FC<ProductsSectionProps> = ({
  onSelectProductForSupply,
}) => {
  const [activeTab, setActiveTab] = useState<string>('diesel-ago');
  const [showTechnicalSpecs, setShowTechnicalSpecs] = useState<boolean>(true);

  const selectedProduct = PRODUCTS.find((p) => p.id === activeTab) || PRODUCTS[0];

  const mapProductToCategory = (name: string): ProductCategory => {
    if (name === 'Diesel') return 'Diesel (AGO)';
    if (name === 'Fuel') return 'Fuel (PMS)';
    if (name === 'Kerosene') return 'Kerosene (DPK)';
    return 'Diesel (AGO)';
  };

  const getProductImage = (name: string) => {
    if (name === 'Diesel') return APP_IMAGES.tankerTruck;
    if (name === 'Fuel') return APP_IMAGES.pipelineDepot;
    return APP_IMAGES.whiteStorageTanks;
  };

  return (
    <section id="products" className="py-24 sm:py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2">
              <span className="w-6 h-1 bg-amber-400 rounded-full" />
              <span className="text-xs font-bold tracking-[0.2em] text-slate-500 uppercase">
                PRODUCT PORTFOLIO
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-[1.15]">
              Clean, tested fuels powering Lagos industries.
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              Diesel takes center stage in our operations, complemented by bulk Fuel (PMS) and Kerosene (DPK) supply across commercial and retail networks.
            </p>
          </div>

          {/* Toggle Technical Specs Mode */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setShowTechnicalSpecs(!showTechnicalSpecs)}
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold tracking-wider uppercase border transition-all cursor-pointer ${
                showTechnicalSpecs
                  ? 'bg-amber-400 text-slate-950 border-amber-400 shadow-sm'
                  : 'bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200'
              }`}
            >
              <AdjustmentsHorizontalIcon className="w-4 h-4 stroke-[2]" />
              <span>{showTechnicalSpecs ? 'Hide Laboratory Specs' : 'Show Laboratory Specs'}</span>
            </button>
          </div>
        </div>

        {/* Apple Segmented Tab Selector */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          {PRODUCTS.map((prod) => {
            const isActive = prod.id === activeTab;
            const isDiesel = prod.name === 'Diesel';

            return (
              <button
                key={prod.id}
                onClick={() => setActiveTab(prod.id)}
                className={`text-left p-5 rounded-2xl border transition-all duration-200 cursor-pointer relative overflow-hidden ${
                  isActive
                    ? 'bg-amber-50/80 border-amber-400 shadow-md ring-1 ring-amber-400/50'
                    : 'bg-slate-50 border-slate-200 hover:border-slate-300 hover:bg-slate-100/70'
                }`}
              >
                {isDiesel && (
                  <span className="absolute top-4 right-4 px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-amber-400 text-slate-950 shadow-xs">
                    PRIMARY OFFERING
                  </span>
                )}
                <div className="text-[11px] font-mono-code uppercase tracking-wider text-slate-500">
                  SPEC: {prod.shortCode}
                </div>
                <div className="text-xl sm:text-2xl font-black text-slate-900 mt-1 font-display flex items-center justify-between">
                  <span>{prod.name}</span>
                  {isActive && <div className="w-2.5 h-2.5 rounded-full bg-amber-500" />}
                </div>
                <div className="text-xs text-slate-600 mt-1 line-clamp-1">{prod.classification}</div>
              </button>
            );
          })}
        </div>

        {/* Selected Product Hero Display (Apple Style White Card Showcase) */}
        <div className="rounded-3xl bg-slate-50 border border-slate-200 overflow-hidden shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            {/* Left: Detailed Information & Client Matrix */}
            <div className="lg:col-span-7 p-6 sm:p-10 lg:p-12 flex flex-col justify-between space-y-8 bg-white">
              <div className="space-y-6">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-mono-code font-bold uppercase tracking-wider">
                    {selectedProduct.shortCode} · {selectedProduct.classification}
                  </span>
                  {selectedProduct.name === 'Diesel' && (
                    <span className="flex items-center gap-1.5 text-xs text-amber-700 font-bold">
                      <SparklesIcon className="w-4 h-4" />
                      <span>Primary High-Demand Product</span>
                    </span>
                  )}
                </div>

                <h3 className="font-display text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                  {selectedProduct.name} Supply & Distribution
                </h3>

                <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                  {selectedProduct.description}
                </p>

                {/* Primary Applications & Target Clients */}
                <div className="space-y-3 pt-2">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Primary Applications & Target Sectors
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {selectedProduct.targetClients.map((client, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700 p-2.5 rounded-xl bg-slate-50 border border-slate-200/70"
                      >
                        <CheckIcon className="w-4 h-4 text-amber-600 shrink-0 stroke-[2.5]" />
                        <span>{client}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technical Laboratory Specs Grid */}
                {showTechnicalSpecs && (
                  <div className="pt-5 border-t border-slate-100 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-slate-700 uppercase tracking-wider font-mono-code">
                        Certified QA Specifications
                      </span>
                      <span className="text-[11px] text-amber-700 font-mono-code flex items-center gap-1">
                        <ShieldCheckIcon className="w-4 h-4" />
                        <span>Pre-Discharge Testing Guaranteed</span>
                      </span>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      {selectedProduct.specs.map((sp, idx) => (
                        <div key={idx} className="p-3 rounded-xl bg-slate-50 border border-slate-200/80">
                          <div className="text-[10px] text-slate-500 uppercase font-mono-code">{sp.label}</div>
                          <div className="text-xs font-bold text-slate-900 mt-0.5">{sp.value}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Bottom Direct CTA */}
              <div className="pt-6 border-t border-slate-100 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => onSelectProductForSupply(mapProductToCategory(selectedProduct.name))}
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-sm tracking-wide transition-all shadow-sm hover:shadow-md cursor-pointer"
                >
                  <span>Request {selectedProduct.name} Requisition</span>
                  <ArrowRightIcon className="w-4 h-4 stroke-[2.5]" />
                </button>

                <span className="text-xs text-slate-500 font-mono-code">
                  Batch Certificate of Quality (COQ) Included
                </span>
              </div>
            </div>

            {/* Right: Rich Photographic Showcase Using Real Generated Images */}
            <div className="lg:col-span-5 relative min-h-[360px] lg:min-h-[500px]">
              <img
                src={getProductImage(selectedProduct.name)}
                alt={`${selectedProduct.name} Supply Infrastructure`}
                className="w-full h-full object-cover object-center"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent lg:bg-gradient-to-r lg:from-slate-950/40 lg:to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200 shadow-lg">
                <div className="text-[11px] font-mono-code text-amber-600 font-bold uppercase">
                  Lagos Fast-Track Dispatch
                </div>
                <div className="text-xs font-semibold text-slate-900 mt-0.5">
                  Direct loading from Coconut, Apapa terminal & dedicated calibrated fleet.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
