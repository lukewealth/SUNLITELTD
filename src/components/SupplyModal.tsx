import React, { useState } from 'react';
import { ProductCategory } from '../types';
import { COMPANY_INFO } from '../data/companyData';
import {
  XMarkIcon,
  PaperAirplaneIcon,
  CheckCircleIcon,
} from '@heroicons/react/24/outline';

interface SupplyModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedProduct?: ProductCategory;
}

export const SupplyModal: React.FC<SupplyModalProps> = ({
  isOpen,
  onClose,
  preselectedProduct = 'Diesel (AGO)',
}) => {
  const [product, setProduct] = useState<ProductCategory>(preselectedProduct);
  const [quantity, setQuantity] = useState<number>(10000);
  const [destination, setDestination] = useState<string>('Victoria Island, Lagos');
  const [name, setName] = useState<string>('');
  const [company, setCompany] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [notes, setNotes] = useState<string>('');
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [generatedRef, setGeneratedRef] = useState<string>('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const id = `SL-${new Date().getFullYear()}-${Math.floor(100000 + Math.random() * 900000)}`;
    setGeneratedRef(id);
    setIsSuccess(true);
  };

  const getWhatsAppUrl = () => {
    const text = `*SUN LITE LTD EXPRESS SUPPLY REQUISITION*\nRef: ${generatedRef}\nName: ${name}\nCompany: ${company || 'N/A'}\nPhone: ${phone}\nProduct: ${product}\nQuantity: ${quantity.toLocaleString()} Litres\nDestination: ${destination}\nNotes: ${notes || 'None'}`;
    return `https://wa.me/2349134449634?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 shadow-2xl text-slate-900">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 transition-colors cursor-pointer"
        >
          <XMarkIcon className="w-5 h-5 stroke-[2]" />
        </button>

        {isSuccess ? (
          <div className="text-center space-y-6 py-6">
            <div className="w-16 h-16 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center mx-auto shadow-xs">
              <CheckCircleIcon className="w-10 h-10 stroke-[2.5]" />
            </div>

            <div className="space-y-2">
              <div className="text-xs font-mono-code font-bold uppercase tracking-widest text-amber-700">
                Requisition Reference: {generatedRef}
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-slate-900">
                Requisition Logged Successfully
              </h3>
              <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                Our Lagos dispatch coordinators in Coconut, Apapa will review your volume requirement ({quantity.toLocaleString()}L of {product}) and contact you promptly.
              </p>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-xs"
              >
                <PaperAirplaneIcon className="w-4 h-4" />
                <span>Send to Dispatch WhatsApp</span>
              </a>

              <button
                onClick={onClose}
                className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-sm cursor-pointer"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-amber-700">
                EXPRESS PETROLEUM REQUISITION
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 mt-0.5">
                Request Fuel or Marine Diesel
              </h3>
            </div>

            {/* Product selection pills */}
            <div className="grid grid-cols-2 gap-2">
              {(['Diesel (AGO)', 'Marine Diesel (Bunkering)', 'Fuel (PMS)', 'Kerosene (DPK)'] as ProductCategory[]).map(
                (p) => (
                  <button
                    key={p}
                    type="button"
                    onClick={() => setProduct(p)}
                    className={`p-2.5 rounded-xl border text-xs font-bold text-left transition-all cursor-pointer ${
                      product === p
                        ? 'bg-amber-400 text-slate-950 border-amber-400 shadow-xs'
                        : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    {p}
                  </button>
                )
              )}
            </div>

            {/* Quantity */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700 uppercase">
                Estimated Volume: {quantity.toLocaleString()} Litres
              </label>
              <input
                type="range"
                min="1000"
                max="60000"
                step="1000"
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-amber-500"
              />
            </div>

            {/* Inputs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <input
                type="text"
                placeholder="Full Name *"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-amber-400 focus:bg-white"
              />
              <input
                type="text"
                placeholder="Company / Vessel Name"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-amber-400 focus:bg-white"
              />
              <input
                type="tel"
                placeholder="Phone Number *"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-amber-400 focus:bg-white"
              />
              <input
                type="email"
                placeholder="Email Address *"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-amber-400 focus:bg-white"
              />
            </div>

            <input
              type="text"
              placeholder="Delivery Destination (e.g., Victoria Island, Apapa Jetty, Lekki)"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              required
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-amber-400 focus:bg-white"
            />

            <textarea
              placeholder="Discharge notes, hose length, or specific delivery date..."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              rows={2}
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-amber-400 focus:bg-white"
            />

            <button
              type="submit"
              className="w-full py-3.5 rounded-full bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-sm tracking-wide transition-all shadow-xs cursor-pointer"
            >
              Submit Requisition to Dispatch
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
