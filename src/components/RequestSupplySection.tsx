import React, { useState } from 'react';
import { COMPANY_INFO } from '../data/companyData';
import { ProductCategory, SupplyRequestPayload } from '../types';
import {
  CheckCircleIcon,
  PaperAirplaneIcon,
  PhoneIcon,
  EnvelopeIcon,
  BuildingOfficeIcon,
  GlobeAltIcon,
  TruckIcon,
  DocumentDuplicateIcon,
  CheckIcon,
} from '@heroicons/react/24/outline';

interface RequestSupplyProps {
  initialProduct?: ProductCategory;
}

export const RequestSupplySection: React.FC<RequestSupplyProps> = ({
  initialProduct = 'Diesel (AGO)',
}) => {
  const [product, setProduct] = useState<ProductCategory>(initialProduct);
  const [quantity, setQuantity] = useState<number>(10000);
  const [facilityType, setFacilityType] = useState<string>('Commercial Generator');
  const [destination, setDestination] = useState<string>('Victoria Island, Lagos');
  const [customDestination, setCustomDestination] = useState<string>('');
  const [deliveryDate, setDeliveryDate] = useState<string>('');
  const [vesselName, setVesselName] = useState<string>('');
  const [berthLocation, setBerthLocation] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [company, setCompany] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [notes, setNotes] = useState<string>('');

  const [submittedRequest, setSubmittedRequest] = useState<SupplyRequestPayload | null>(null);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [copiedId, setCopiedId] = useState<boolean>(false);

  const isMarine = product === 'Marine Diesel (Bunkering)';

  const destinationsList = [
    'Victoria Island, Lagos',
    'Lekki Phase 1 / Peninsula, Lagos',
    'Apapa Port & Depot Corridor, Lagos',
    'Ikoyi & Banana Island, Lagos',
    'Ikeja Industrial Zone, Lagos',
    'Ilupeju / Oshodi Industrial, Lagos',
    'Ibeju-Lekki / Free Trade Zone, Lagos',
    'Lagos Coastal Berth / Anchorage (Marine)',
    'Other Lagos Location',
  ];

  const facilityOptions = isMarine
    ? ['Cargo / Container Vessel', 'Offshore Supply Vessel (OSV)', 'Port Tugboat / Pilot Boat', 'Barge / Dredger', 'Private Vessel']
    : [
        'Commercial Generator (Office / Bank / Data Center)',
        'Industrial Manufacturing Facility',
        'Licensed Retail Fuel Station',
        'Residential Estate Central Generator',
        'Telecommunications / Base Transceiver Station',
        'Certified Bulk Storage Tank',
      ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const generatedId = `SL-${new Date().getFullYear()}-${Math.floor(100000 + Math.random() * 900000)}`;
    const finalDest = destination === 'Other Lagos Location' ? customDestination : destination;

    const payload: SupplyRequestPayload = {
      id: generatedId,
      timestamp: new Date().toISOString(),
      name,
      company,
      phone,
      email,
      product,
      quantity,
      destination: finalDest,
      facilityType,
      deliveryDate,
      vesselName: isMarine ? vesselName : undefined,
      berthLocation: isMarine ? berthLocation : undefined,
      notes,
      status: 'Received',
    };

    setTimeout(() => {
      setSubmittedRequest(payload);
      setIsSubmitting(false);
    }, 500);
  };

  const constructWhatsAppUrl = (req: SupplyRequestPayload) => {
    const text = `*SUN LITE LTD SUPPLY REQUISITION*\nRef: ${req.id}\nCompany: ${req.company || 'N/A'}\nContact: ${req.name}\nPhone: ${req.phone}\nProduct: ${req.product}\nQuantity: ${req.quantity.toLocaleString()} Litres\nFacility: ${req.facilityType}\nDestination: ${req.destination}\n${req.vesselName ? `Vessel: ${req.vesselName}\nBerth: ${req.berthLocation}\n` : ''}${req.deliveryDate ? `Required Date: ${req.deliveryDate}\n` : ''}Notes: ${req.notes || 'None'}`;
    return `https://wa.me/2349134449634?text=${encodeURIComponent(text)}`;
  };

  const constructMailtoUrl = (req: SupplyRequestPayload) => {
    const subject = encodeURIComponent(`SUN LITE LTD Supply Requisition — ${req.id} (${req.product})`);
    const body = encodeURIComponent(`SUN LITE LTD SUPPLY REQUISITION\n\nReference: ${req.id}\nName: ${req.name}\nCompany: ${req.company}\nPhone: ${req.phone}\nEmail: ${req.email}\n\nProduct: ${req.product}\nQuantity: ${req.quantity.toLocaleString()} Litres\nFacility Type: ${req.facilityType}\nDestination: ${req.destination}\n${req.vesselName ? `Vessel: ${req.vesselName}\nBerth/Anchor: ${req.berthLocation}\n` : ''}${req.deliveryDate ? `Delivery Date: ${req.deliveryDate}\n` : ''}\nRequirement Details:\n${req.notes || 'None'}\n\nPlease confirm availability and discharge quotation.`);
    return `mailto:Sunlight19126@gmail.com?subject=${subject}&body=${body}`;
  };

  const copyRefToClipboard = (id: string) => {
    navigator.clipboard.writeText(id);
    setCopiedId(true);
    setTimeout(() => setCopiedId(false), 2000);
  };

  return (
    <section id="contact" className="py-24 sm:py-32 bg-white border-t border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4 mb-16">
          <div className="inline-flex items-center gap-2">
            <span className="w-6 h-1 bg-amber-400 rounded-full" />
            <span className="text-xs font-bold tracking-[0.2em] text-slate-500 uppercase">
              REQUEST SUPPLY & QUOTATION
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-[1.15]">
            Configure your petroleum or marine requisition.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Our logistics dispatch centers in Coconut, Apapa and Victoria Island respond promptly with calibrated meter schedules and batch quality certificates.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Interactive Form or Submitted Confirmation */}
          <div className="lg:col-span-8">
            {submittedRequest ? (
              /* Success Confirmation Card (Apple Style) */
              <div className="p-8 sm:p-10 rounded-3xl bg-slate-50 border border-slate-200 shadow-sm space-y-8 animate-in fade-in duration-300">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-amber-400 text-slate-950 flex items-center justify-center shadow-xs">
                    <CheckCircleIcon className="w-7 h-7 stroke-[2.5]" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-amber-700 font-mono-code">
                      REQUISITION LOGGED SUCCESSFULLY
                    </div>
                    <h3 className="text-2xl font-black text-slate-900">
                      Thank You, {submittedRequest.name}
                    </h3>
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-4 shadow-xs">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                    <span className="text-xs text-slate-500 font-mono-code">Tracking Reference</span>
                    <div className="flex items-center gap-2">
                      <span className="text-base font-black text-slate-900 font-mono-code">
                        {submittedRequest.id}
                      </span>
                      <button
                        onClick={() => copyRefToClipboard(submittedRequest.id || '')}
                        className="p-1 rounded-lg hover:bg-slate-100 text-slate-500 transition-colors"
                        title="Copy Reference"
                      >
                        {copiedId ? (
                          <CheckIcon className="w-4 h-4 text-emerald-600" />
                        ) : (
                          <DocumentDuplicateIcon className="w-4 h-4" />
                        )}
                      </button>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs">
                    <div>
                      <span className="text-slate-500">Product:</span>
                      <p className="font-bold text-slate-900 mt-0.5">{submittedRequest.product}</p>
                    </div>
                    <div>
                      <span className="text-slate-500">Volume:</span>
                      <p className="font-bold text-slate-900 mt-0.5">{submittedRequest.quantity.toLocaleString()} Litres</p>
                    </div>
                    <div>
                      <span className="text-slate-500">Destination:</span>
                      <p className="font-bold text-slate-900 mt-0.5">{submittedRequest.destination}</p>
                    </div>
                    <div>
                      <span className="text-slate-500">Facility:</span>
                      <p className="font-bold text-slate-900 mt-0.5">{submittedRequest.facilityType}</p>
                    </div>
                    <div>
                      <span className="text-slate-500">Company:</span>
                      <p className="font-bold text-slate-900 mt-0.5">{submittedRequest.company || 'Private Account'}</p>
                    </div>
                    <div>
                      <span className="text-slate-500">Phone:</span>
                      <p className="font-bold text-slate-900 mt-0.5">{submittedRequest.phone}</p>
                    </div>
                  </div>
                </div>

                {/* Direct Instant Action Channels */}
                <div className="space-y-3">
                  <div className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                    Instant Dispatch Accelerators:
                  </div>
                  <div className="flex flex-wrap items-center gap-3">
                    <a
                      href={constructWhatsAppUrl(submittedRequest)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-xs transition-all"
                    >
                      <PaperAirplaneIcon className="w-4 h-4" />
                      <span>Instant WhatsApp Dispatch (09134449634)</span>
                    </a>

                    <a
                      href={constructMailtoUrl(submittedRequest)}
                      className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white hover:bg-slate-100 text-slate-800 font-semibold text-sm border border-slate-300 transition-all shadow-xs"
                    >
                      <EnvelopeIcon className="w-4 h-4 text-slate-600" />
                      <span>Email Requisition</span>
                    </a>

                    <button
                      onClick={() => setSubmittedRequest(null)}
                      className="px-4 py-3.5 text-xs text-slate-500 hover:text-slate-900 cursor-pointer font-medium"
                    >
                      Submit Another Requisition
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              /* Request Form (Apple Style) */
              <form
                onSubmit={handleSubmit}
                className="p-6 sm:p-10 rounded-3xl bg-slate-50 border border-slate-200 shadow-xs space-y-8"
              >
                {/* Step 1: Select Product Category */}
                <div className="space-y-3">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center justify-between">
                    <span>1. Select Petroleum Product</span>
                    <span className="text-slate-400 font-normal lowercase font-mono-code">*required</span>
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                    {(['Diesel (AGO)', 'Marine Diesel (Bunkering)', 'Fuel (PMS)', 'Kerosene (DPK)'] as ProductCategory[]).map(
                      (p) => {
                        const isSelected = product === p;
                        return (
                          <button
                            key={p}
                            type="button"
                            onClick={() => setProduct(p)}
                            className={`p-3.5 rounded-2xl border text-left transition-all cursor-pointer ${
                              isSelected
                                ? 'bg-amber-400 text-slate-950 border-amber-400 font-bold shadow-xs'
                                : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300 hover:bg-slate-100/50'
                            }`}
                          >
                            <div className="text-xs font-bold leading-snug">{p}</div>
                          </button>
                        );
                      }
                    )}
                  </div>
                </div>

                {/* Step 2: Volume / Quantity Slider & Direct Input */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                      2. Requisition Volume (Litres)
                    </label>
                    <span className="text-lg font-black font-mono-code text-slate-900">
                      {quantity.toLocaleString()} <span className="text-xs font-normal text-slate-500">Litres</span>
                    </span>
                  </div>

                  <input
                    type="range"
                    min="200"
                    max="100000"
                    step="1000"
                    value={quantity}
                    onChange={(e) => setQuantity(Number(e.target.value))}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-amber-500"
                  />

                   {/* Volume Presets */}
                   <div className="flex items-center gap-2 flex-wrap pt-1">
                     {[200, 5000, 10000, 22000, 33000, 45000, 60000].map((v) => (
                       <button
                         key={v}
                         type="button"
                         onClick={() => setQuantity(v)}
                         className={`px-3 py-1 rounded-full text-xs font-mono-code transition-colors cursor-pointer ${
                           quantity === v
                             ? 'bg-amber-400 text-slate-950 font-bold shadow-xs'
                             : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
                         }`}
                       >
                         {v.toLocaleString()}L
                       </button>
                     ))}
                   </div>
                </div>

                {/* Step 3: Destination & Facility Type */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                      3. Destination in Lagos
                    </label>
                    <select
                      value={destination}
                      onChange={(e) => setDestination(e.target.value)}
                      className="w-full px-4 py-3 rounded-2xl bg-white border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-100"
                      required
                    >
                      {destinationsList.map((d) => (
                        <option key={d} value={d} className="bg-white text-slate-900">
                          {d}
                        </option>
                      ))}
                    </select>
                    {destination === 'Other Lagos Location' && (
                      <input
                        type="text"
                        placeholder="Enter specific address or area in Lagos"
                        value={customDestination}
                        onChange={(e) => setCustomDestination(e.target.value)}
                        className="w-full mt-2 px-4 py-2.5 rounded-2xl bg-white border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-100"
                        required
                      />
                    )}
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                      Facility or Vessel Type
                    </label>
                    <select
                      value={facilityType}
                      onChange={(e) => setFacilityType(e.target.value)}
                      className="w-full px-4 py-3 rounded-2xl bg-white border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-100"
                      required
                    >
                      {facilityOptions.map((f) => (
                        <option key={f} value={f} className="bg-white text-slate-900">
                          {f}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Marine Specific Extra Fields */}
                {isMarine && (
                  <div className="p-4 rounded-2xl bg-sky-50/80 border border-sky-200 space-y-3">
                    <div className="text-xs font-bold text-sky-800 uppercase tracking-wider">
                      Marine Vessel Information
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <input
                        type="text"
                        placeholder="Vessel Name / IMO (Optional)"
                        value={vesselName}
                        onChange={(e) => setVesselName(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-sky-200 text-slate-900 text-sm focus:outline-none focus:border-sky-400"
                      />
                      <input
                        type="text"
                        placeholder="Berth / Jetty / Anchorage Location"
                        value={berthLocation}
                        onChange={(e) => setBerthLocation(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-sky-200 text-slate-900 text-sm focus:outline-none focus:border-sky-400"
                      />
                    </div>
                  </div>
                )}

                {/* Step 4: Customer Credentials & Contact */}
                <div className="space-y-4 pt-2">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-700">
                    4. Contact & Procurement Information
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <input
                        type="text"
                        placeholder="Full Name / Officer in Charge *"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-4 py-3 rounded-2xl bg-white border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-100"
                        required
                      />
                    </div>

                    <div>
                      <input
                        type="text"
                        placeholder="Company / Institution Name"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        className="w-full px-4 py-3 rounded-2xl bg-white border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-100"
                      />
                    </div>

                    <div>
                      <input
                        type="tel"
                        placeholder="Direct Phone Number (e.g. 080... or 091...) *"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full px-4 py-3 rounded-2xl bg-white border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-100"
                        required
                      />
                    </div>

                    <div>
                      <input
                        type="email"
                        placeholder="Business Email Address *"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-3 rounded-2xl bg-white border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-100"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[11px] text-slate-500 mb-1 block">Preferred Delivery Date</label>
                      <input
                        type="date"
                        value={deliveryDate}
                        onChange={(e) => setDeliveryDate(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-2xl bg-white border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-amber-400"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] text-slate-500 mb-1 block">Discharge Notes / Hose Length / Restrictions</label>
                      <input
                        type="text"
                        placeholder="e.g., requires 50m discharge hose, gate access"
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-2xl bg-white border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-amber-400"
                      />
                    </div>
                  </div>
                </div>

                {/* Submit Action */}
                <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-xs text-slate-500">
                    Hydrometer density and volumetric calibration guaranteed.
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-sm tracking-wide transition-all shadow-xs hover:shadow-md cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Processing Requisition...</span>
                    ) : (
                      <>
                        <span>Submit Supply Requisition</span>
                        <PaperAirplaneIcon className="w-4 h-4 stroke-[2.5]" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Right Column: Direct Contact & Office Information (Apple Style White Card) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 space-y-6 shadow-xs">
              <div className="space-y-1">
                <span className="text-[10px] font-mono-code uppercase tracking-wider text-amber-700 font-bold">
                  DIRECT COMMERCIAL LINE
                </span>
                <h3 className="text-xl font-bold text-slate-900 tracking-tight">
                  SUN LITE LTD Operations
                </h3>
              </div>

              {/* Direct Phone Dial */}
              <div className="p-4 rounded-2xl bg-white border border-slate-200 space-y-1 shadow-xs">
                <div className="text-[11px] text-slate-500 uppercase font-mono-code">
                  Lagos Supply Phone Desk
                </div>
                <a
                  href={`tel:${COMPANY_INFO.primaryPhone}`}
                  className="text-xl sm:text-2xl font-black text-slate-900 hover:text-amber-600 transition-colors font-mono-code block"
                >
                  {COMPANY_INFO.primaryPhone}
                </a>
                <div className="text-[11px] text-emerald-600 font-medium flex items-center gap-1.5 pt-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Lines active 07:00 - 20:00 (24/7 Marine)</span>
                </div>
              </div>

              {/* Email Box */}
              <div className="p-4 rounded-2xl bg-white border border-slate-200 space-y-1 shadow-xs">
                <div className="text-[11px] text-slate-500 uppercase font-mono-code">
                  Official Procurement Email
                </div>
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="text-sm font-bold text-slate-900 hover:text-amber-600 transition-colors font-mono-code block break-all"
                >
                  {COMPANY_INFO.email}
                </a>
              </div>

              {/* Physical Bases */}
              <div className="space-y-3 pt-1">
                <div className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                  Physical Operational Bases
                </div>
                <div className="space-y-2 text-xs">
                  <div className="p-3 rounded-xl bg-white border border-slate-200">
                    <strong className="text-slate-900 block font-bold">Head Office:</strong>
                    <span className="text-slate-600">Coconut, Apapa, Lagos</span>
                  </div>
                  <div className="p-3 rounded-xl bg-white border border-slate-200">
                    <strong className="text-slate-900 block font-bold">Commercial Branch:</strong>
                    <span className="text-slate-600">7, Jolayemi, off Karimu Ikotun, Victoria Island, Lagos</span>
                  </div>
                  <div className="p-3 rounded-xl bg-white border border-slate-200">
                    <strong className="text-slate-900 block font-bold">Logistics Hub:</strong>
                    <span className="text-slate-600">C & I Off Bisola Durosinmi Etti Drive, Lekki Phase 1, Lagos</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quality Standard Guarantee Note */}
            <div className="p-6 rounded-3xl bg-white border border-slate-200 space-y-2 text-xs text-slate-600 shadow-xs">
              <div className="font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
                <CheckCircleIcon className="w-5 h-5 text-amber-600" />
                <span>Volumetric Accuracy & Sealed Fleet</span>
              </div>
              <p className="leading-relaxed text-slate-500">
                Every delivery is sealed at depot loading and accompanied by calibrated meter readings and hydrometer density test paste checks prior to facility tank discharge.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
