import React from 'react';
import { APP_IMAGES } from '../data/assets';
import {
  SparklesIcon,
  ShieldCheckIcon,
  CheckBadgeIcon,
  ArrowRightIcon,
  ChevronRightIcon,
} from '@heroicons/react/24/outline';

interface LeadershipProps {
  onRequestSupplyClick?: () => void;
}

export const LeadershipAndCSR: React.FC<LeadershipProps> = ({ onRequestSupplyClick }) => {
  return (
    <section className="py-24 sm:py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Preserve & Conserve Section (Directly modeled on landing page.png) */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200">
          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[500px]">
            {/* Left/Background Photographic Image */}
            <div className="lg:col-span-6 relative min-h-[350px] lg:min-h-full">
              <img
                src={APP_IMAGES.pipelineDepot}
                alt="Petroleum Storage Manifolds and Infrastructure"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-slate-950/70" />
              <div className="absolute bottom-6 left-6 right-6 text-white p-4">
                <span className="text-xs font-mono-code text-amber-400 uppercase tracking-wider font-bold">
                  Coconut, Apapa Bulk Manifolds
                </span>
                <h4 className="text-lg font-bold text-white mt-1">
                  Engineered Storage & Volumetric Pipeline Distribution
                </h4>
              </div>
            </div>

            {/* Right Dark High-Contrast Editorial Panel */}
            <div className="lg:col-span-6 bg-slate-950 text-white p-8 sm:p-12 lg:p-16 flex flex-col justify-between space-y-8">
              <div className="space-y-6">
                <div>
                  <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] text-amber-400 uppercase">
                    <span className="w-5 h-0.5 bg-amber-400" />
                    <span>PRESERVE AND CONSERVE</span>
                  </div>
                  <h2 className="font-display text-3xl sm:text-4xl xl:text-5xl font-black text-white tracking-tight mt-2 leading-tight">
                    A Vital Energy Resource For A Better Tomorrow.
                  </h2>
                </div>

                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  SUN LITE LTD couples reliable petroleum energy supply with strict environmental controls, anti-spill loading racks, and certified marine bunkering transfer procedures across Nigerian coastal waters.
                </p>

                {/* Aspiration, Vision, Mission with Yellow Arrows (Directly from landing page.png) */}
                <div className="space-y-4 pt-2">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-amber-400/20 text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
                      <ChevronRightIcon className="w-4 h-4 stroke-[3]" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-amber-400 uppercase tracking-wider">
                        Aspiration
                      </div>
                      <p className="text-xs sm:text-sm text-slate-300 mt-0.5 leading-relaxed">
                        To operate clean, low-emission distribution fleets and champion spill-free bunkering operations across all Lagos waters.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-amber-400/20 text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
                      <ChevronRightIcon className="w-4 h-4 stroke-[3]" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-amber-400 uppercase tracking-wider">
                        Vision
                      </div>
                      <p className="text-xs sm:text-sm text-slate-300 mt-0.5 leading-relaxed">
                        To stand as Nigeria's most trusted energy provider, setting the industry benchmark for volumetric integrity, density verification, and safety.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-amber-400/20 text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
                      <ChevronRightIcon className="w-4 h-4 stroke-[3]" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-amber-400 uppercase tracking-wider">
                        Mission
                      </div>
                      <p className="text-xs sm:text-sm text-slate-300 mt-0.5 leading-relaxed">
                        Delivering high-cetane Diesel (AGO), Fuel, and Kerosene with zero adulteration, calibrated accuracy, and seamless customer care.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              {onRequestSupplyClick && (
                <div className="pt-4 border-t border-slate-800">
                  <button
                    onClick={onRequestSupplyClick}
                    className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-sm tracking-wide shadow-sm hover:shadow-md transition-all cursor-pointer"
                  >
                    <span>DISCOVER MORE</span>
                    <ArrowRightIcon className="w-4 h-4 stroke-[2.5]" />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Executive Commitment Card (Apple Style) */}
        <div className="p-8 sm:p-12 rounded-3xl bg-slate-50 border border-slate-200 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
              <span>Executive Guarantee</span>
            </div>
            <h3 className="font-display text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              “Energy supply is about keeping homes, businesses, corporate complexes, and offshore maritime operations moving without failure.”
            </h3>
            <p className="text-sm text-slate-600">
              We listen to every customer's operational parameters, conduct independent hydrometer density testing prior to discharge, and guarantee calibrated volume.
            </p>
          </div>

          <div className="lg:col-span-4 p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-xl bg-amber-400 text-slate-950 flex items-center justify-center font-black font-display text-lg">
              SL
            </div>
            <div>
              <div className="text-sm font-bold text-slate-900 uppercase tracking-wider">
                SUN LITE LTD Management
              </div>
              <div className="text-xs text-amber-700 font-semibold">
                Coconut, Apapa · Victoria Island · Lekki Phase 1
              </div>
              <div className="text-[11px] text-slate-500 font-mono-code mt-1">
                Incorporated RC 9561194 · TIN 2622496356436
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
