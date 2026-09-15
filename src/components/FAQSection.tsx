import React, { useState } from 'react';
import { FAQ_ITEMS } from '../data/companyData';
import {
  ChevronDownIcon,
  MagnifyingGlassIcon,
  ArrowRightIcon,
} from '@heroicons/react/24/outline';

interface FAQProps {
  onRequestSupplyClick: () => void;
}

export const FAQSection: React.FC<FAQProps> = ({ onRequestSupplyClick }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Products', 'Marine', 'Logistics', 'Commercial'];

  const filteredFaqs = FAQ_ITEMS.filter((item) => {
    const matchesCategory =
      selectedCategory === 'All' || item.category === selectedCategory;
    const matchesSearch =
      item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="faq" className="py-24 sm:py-32 bg-slate-50 border-t border-slate-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2">
            <span className="w-6 h-1 bg-amber-400 rounded-full" />
            <span className="text-xs font-bold tracking-[0.2em] text-slate-500 uppercase">
              CLARITY & TRANSPARENCY
            </span>
            <span className="w-6 h-1 bg-amber-400 rounded-full" />
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Frequently asked questions.
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto">
            Clear, honest information regarding our petroleum products, marine bunkering protocols, delivery logistics, and ordering procedures.
          </p>
        </div>

        {/* Search & Category Filter Controls */}
        <div className="space-y-4 mb-8">
          <div className="relative">
            <MagnifyingGlassIcon className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search diesel specs, marine bunkering, delivery corridors..."
              className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-white border border-slate-200 text-slate-900 placeholder-slate-400 text-sm shadow-xs focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-100 transition-all"
            />
          </div>

          <div className="flex items-center justify-center gap-2 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-amber-400 text-slate-950 font-bold shadow-xs'
                    : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, idx) => {
              const isOpen = openIndex === idx;

              return (
                <div
                  key={idx}
                  className="rounded-2xl bg-white border border-slate-200/80 shadow-xs overflow-hidden transition-all duration-200"
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                  >
                    <span className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                      {faq.question}
                    </span>
                    <div
                      className={`w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180 bg-amber-100 text-amber-800' : ''
                      }`}
                    >
                      <ChevronDownIcon className="w-4 h-4 stroke-[2.5]" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 pt-1 text-slate-600 text-sm leading-relaxed border-t border-slate-100">
                      <p>{faq.answer}</p>
                      <div className="mt-3 inline-block px-2.5 py-0.5 rounded text-[11px] font-mono-code font-bold bg-amber-50 text-amber-800 border border-amber-200/60">
                        Category: {faq.category}
                      </div>
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <div className="p-8 text-center bg-white rounded-2xl border border-slate-200 text-slate-500">
              No matching questions found for "{searchTerm}".
            </div>
          )}
        </div>

        {/* Bottom Contact Help Card */}
        <div className="mt-12 p-6 rounded-3xl bg-white border border-slate-200 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="text-base font-bold text-slate-900">
              Have a specific technical or delivery inquiry?
            </h4>
            <p className="text-xs text-slate-500 mt-0.5">
              Our dispatch desk can clarify tank sizes, pump discharge rates, or bunkering schedules.
            </p>
          </div>
          <button
            onClick={onRequestSupplyClick}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs tracking-wide shadow-xs shrink-0 cursor-pointer"
          >
            <span>Speak With Dispatch</span>
            <ArrowRightIcon className="w-3.5 h-3.5 stroke-[2.5]" />
          </button>
        </div>
      </div>
    </section>
  );
};
