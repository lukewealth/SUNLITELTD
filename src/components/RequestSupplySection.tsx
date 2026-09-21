import React, { useState } from 'react';
import { COMPANY_INFO } from '../data/companyData';
import { ProductCategory, SupplyRequestPayload } from '../types';
import { submitInquiry } from '../lib/submitInquiry';
import { CheckCircleIcon, PaperAirplaneIcon, EnvelopeIcon, DocumentDuplicateIcon, CheckIcon } from '@heroicons/react/24/outline';

interface RequestSupplyProps { initialProduct?: ProductCategory; }

export const RequestSupplySection: React.FC<RequestSupplyProps> = ({ initialProduct = 'Diesel (AGO)' }) => {
  const [product, setProduct] = useState<ProductCategory>(initialProduct);
  const [quantity, setQuantity] = useState(10000);
  const [facilityType, setFacilityType] = useState('Commercial Generator');
  const [destination, setDestination] = useState('Victoria Island, Lagos');
  const [customDestination, setCustomDestination] = useState('');
  const [deliveryDate, setDeliveryDate] = useState('');
  const [vesselName, setVesselName] = useState('');
  const [berthLocation, setBerthLocation] = useState('');
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [notes, setNotes] = useState('');
  const [submittedRequest, setSubmittedRequest] = useState<SupplyRequestPayload | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copiedId, setCopiedId] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const isMarine = product === 'Marine Diesel (Bunkering)';
  const destinationsList = ['Victoria Island, Lagos','Lekki Phase 1 / Peninsula, Lagos','Apapa Port & Depot Corridor, Lagos','Ikoyi & Banana Island, Lagos','Ikeja Industrial Zone, Lagos','Ilupeju / Oshodi Industrial, Lagos','Ibeju-Lekki / Free Trade Zone, Lagos','Lagos Coastal Berth / Anchorage (Marine)','Other Lagos Location'];
  const facilityOptions = isMarine
    ? ['Cargo / Container Vessel','Offshore Supply Vessel (OSV)','Port Tugboat / Pilot Boat','Barge / Dredger','Private Vessel']
    : ['Commercial Generator (Office / Bank / Data Center)','Industrial Manufacturing Facility','Licensed Retail Fuel Station','Residential Estate Central Generator','Telecommunications / Base Transceiver Station','Certified Bulk Storage Tank'];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');
    const generatedId = `SL-${new Date().getFullYear()}-${Math.floor(100000 + Math.random() * 900000)}`;
    const finalDest = destination === 'Other Lagos Location' ? customDestination : destination;
    const payload: SupplyRequestPayload = { id: generatedId, timestamp: new Date().toISOString(), name, company, phone, email, product, quantity, destination: finalDest, facilityType, deliveryDate, vesselName: isMarine ? vesselName : undefined, berthLocation: isMarine ? berthLocation : undefined, notes, status: 'Received' };
    const result = await submitInquiry({ type: 'supply', name, email, phone, company, product, quantity, destination: finalDest, facilityType, deliveryDate: deliveryDate || undefined, vesselName: isMarine ? vesselName || undefined : undefined, berthLocation: isMarine ? berthLocation || undefined : undefined, notes: notes || undefined });
    if (!result.ok) { setSubmitError(result.message); setIsSubmitting(false); return; }
    setSubmittedRequest(payload);
    setIsSubmitting(false);
  };

  const constructWhatsAppUrl = (req: SupplyRequestPayload) => {
    const text = `*SUN LITE LTD SUPPLY REQUISITION*\nRef: ${req.id}\nCompany: ${req.company || 'N/A'}\nContact: ${req.name}\nPhone: ${req.phone}\nProduct: ${req.product}\nQuantity: ${req.quantity.toLocaleString()} Litres\nFacility: ${req.facilityType}\nDestination: ${req.destination}`;
    return `https://wa.me/2349134449634?text=${encodeURIComponent(text)}`;
  };
  const constructMailtoUrl = (req: SupplyRequestPayload) => {
    const subject = encodeURIComponent(`SUN LITE LTD Supply — ${req.id}`);
    const body = encodeURIComponent(`Ref: ${req.id}\nName: ${req.name}\nPhone: ${req.phone}\nProduct: ${req.product}\nQty: ${req.quantity}L\nDestination: ${req.destination}`);
    return `mailto:Sunlight19126@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-24 sm:py-32 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-4 mb-16">
          <div className="inline-flex items-center gap-2"><span className="w-6 h-1 bg-amber-400 rounded-full" /><span className="text-xs font-bold tracking-[0.2em] text-slate-500 uppercase">REQUEST SUPPLY</span></div>
          <h2 className="font-display text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">Configure your petroleum or marine requisition.</h2>
          <p className="text-base sm:text-lg text-slate-600">Lagos dispatch responds with calibrated meter schedules and batch certificates.</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-8">
            {submittedRequest ? (
              <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-amber-400 flex items-center justify-center"><CheckCircleIcon className="w-7 h-7" /></div>
                  <div><div className="text-xs font-bold text-amber-700 uppercase">Requisition Logged</div><h3 className="text-2xl font-black">Thank You, {submittedRequest.name}</h3></div>
                </div>
                <div className="p-4 bg-white rounded-2xl border border-slate-200 text-sm space-y-2">
                  <div className="flex justify-between"><span className="text-slate-500">Ref</span><span className="font-mono font-bold">{submittedRequest.id}</span></div>
                  <div className="flex justify-between"><span className="text-slate-500">Product</span><span className="font-bold">{submittedRequest.product}</span></div>
                  <div className="flex justify-between"><span className="text-slate-500">Volume</span><span className="font-bold">{submittedRequest.quantity.toLocaleString()} L</span></div>
                </div>
                <div className="flex flex-wrap gap-3">
                  <a href={constructWhatsAppUrl(submittedRequest)} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-emerald-600 text-white font-bold text-sm"><PaperAirplaneIcon className="w-4 h-4" /> WhatsApp</a>
                  <a href={constructMailtoUrl(submittedRequest)} className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-slate-300 font-semibold text-sm"><EnvelopeIcon className="w-4 h-4" /> Email</a>
                  <button type="button" onClick={() => setSubmittedRequest(null)} className="text-xs text-slate-500">Submit Another</button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="p-6 sm:p-10 rounded-3xl bg-slate-50 border border-slate-200 space-y-6">
                {submitError && <div className="p-4 rounded-2xl bg-red-50 border border-red-200 text-red-700 text-sm">{submitError}</div>}
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase text-slate-700">Product *</label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {(['Diesel (AGO)', 'Marine Diesel (Bunkering)', 'Fuel (PMS)', 'Kerosene (DPK)'] as ProductCategory[]).map((p) => (
                      <button key={p} type="button" onClick={() => setProduct(p)} className={`p-3 rounded-2xl border text-xs font-bold ${product === p ? 'bg-amber-400 border-amber-400' : 'bg-white border-slate-200'}`}>{p}</button>
                    ))}
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between"><label className="text-xs font-bold uppercase text-slate-700">Volume (L)</label><span className="font-mono font-black">{quantity.toLocaleString()}</span></div>
                  <input type="range" min={200} max={100000} step={1000} value={quantity} onChange={(e) => setQuantity(Number(e.target.value))} className="w-full accent-amber-500" />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1"><label className="text-xs font-bold uppercase text-slate-700">Destination</label>
                    <select value={destination} onChange={(e) => setDestination(e.target.value)} className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-sm" required>
                      {destinationsList.map((d) => <option key={d} value={d}>{d}</option>)}
                    </select>
                    {destination === 'Other Lagos Location' && <input className="w-full mt-1 px-3 py-2 rounded-xl border text-sm" value={customDestination} onChange={(e) => setCustomDestination(e.target.value)} required placeholder="Address" />}
                  </div>
                  <div className="space-y-1"><label className="text-xs font-bold uppercase text-slate-700">Facility / Vessel</label>
                    <select value={facilityType} onChange={(e) => setFacilityType(e.target.value)} className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-sm" required>
                      {facilityOptions.map((f) => <option key={f} value={f}>{f}</option>)}
                    </select>
                  </div>
                </div>
                {isMarine && (
                  <div className="grid sm:grid-cols-2 gap-3 p-3 bg-sky-50 rounded-xl border border-sky-200">
                    <input placeholder="Vessel name" value={vesselName} onChange={(e) => setVesselName(e.target.value)} className="px-3 py-2 rounded-lg border border-sky-200 text-sm" />
                    <input placeholder="Berth / anchorage" value={berthLocation} onChange={(e) => setBerthLocation(e.target.value)} className="px-3 py-2 rounded-lg border border-sky-200 text-sm" />
                  </div>
                )}
                <div className="grid sm:grid-cols-2 gap-4">
                  <input required placeholder="Full name *" value={name} onChange={(e) => setName(e.target.value)} className="px-3 py-2.5 rounded-xl border border-slate-200 text-sm" />
                  <input placeholder="Company" value={company} onChange={(e) => setCompany(e.target.value)} className="px-3 py-2.5 rounded-xl border border-slate-200 text-sm" />
                  <input required type="tel" placeholder="Phone *" value={phone} onChange={(e) => setPhone(e.target.value)} className="px-3 py-2.5 rounded-xl border border-slate-200 text-sm" />
                  <input required type="email" placeholder="Email *" value={email} onChange={(e) => setEmail(e.target.value)} className="px-3 py-2.5 rounded-xl border border-slate-200 text-sm" />
                  <input type="date" value={deliveryDate} onChange={(e) => setDeliveryDate(e.target.value)} className="px-3 py-2.5 rounded-xl border border-slate-200 text-sm" />
                  <input placeholder="Notes" value={notes} onChange={(e) => setNotes(e.target.value)} className="px-3 py-2.5 rounded-xl border border-slate-200 text-sm" />
                </div>
                <button type="submit" disabled={isSubmitting} className="w-full py-4 rounded-full bg-amber-400 hover:bg-amber-300 disabled:opacity-60 font-black text-slate-950">{isSubmitting ? 'Submitting…' : 'Submit Supply Request'}</button>
              </form>
            )}
          </div>
          <div className="lg:col-span-4">
            <div className="p-6 rounded-3xl bg-slate-950 text-white space-y-4">
              <h3 className="font-display text-xl font-bold">Need it faster?</h3>
              <p className="text-sm text-slate-300">Call Lagos dispatch for same-day quotation.</p>
              <a href={`tel:${COMPANY_INFO.primaryPhone}`} className="inline-flex px-5 py-3 rounded-full bg-amber-400 text-slate-950 font-bold text-sm">Call {COMPANY_INFO.primaryPhone}</a>
              <p className="text-xs text-slate-400 pt-2 border-t border-slate-800">Minimum 200 litres. Metered delivery with density checks.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
