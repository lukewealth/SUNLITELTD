import React, { useState } from 'react';
import { COMPANY_INFO } from '../data/companyData';
import { submitInquiry } from '../lib/submitInquiry';
import { CheckCircleIcon, PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/outline';

export const ContactPage: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [product, setProduct] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    const result = await submitInquiry({
      type: 'contact',
      name,
      email,
      phone,
      company: company || undefined,
      product: product || undefined,
      message: message || undefined,
    });

    setIsSubmitting(false);
    if (!result.ok) {
      setError(result.message);
      return;
    }
    setSuccess(true);
  };

  if (success) {
    return (
      <div className="min-h-screen bg-slate-50 py-20">
        <div className="max-w-xl mx-auto px-4">
          <div className="bg-white rounded-3xl shadow-xl border border-slate-200 p-8 md:p-12 text-center space-y-4">
            <div className="w-14 h-14 rounded-2xl bg-amber-400 text-slate-950 flex items-center justify-center mx-auto">
              <CheckCircleIcon className="w-8 h-8 stroke-[2.5]" />
            </div>
            <h1 className="font-display text-3xl font-black text-slate-900">Message Sent</h1>
            <p className="text-slate-600">
              Thank you. Our Lagos team will respond shortly. For urgent supply, call{' '}
              <a href={`tel:${COMPANY_INFO.primaryPhone}`} className="font-bold text-amber-600">
                {COMPANY_INFO.primaryPhone}
              </a>
              .
            </p>
            <button
              onClick={() => {
                setSuccess(false);
                setName('');
                setEmail('');
                setPhone('');
                setCompany('');
                setProduct('');
                setMessage('');
              }}
              className="text-sm font-semibold text-slate-500 hover:text-slate-900"
            >
              Send another message
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-3xl shadow-xl border border-slate-200 p-8 md:p-12">
            <h1 className="font-display text-4xl font-black text-slate-900 mb-4">Contact SUN LITE LTD</h1>
            <p className="text-slate-600 mb-8">
              We&apos;re here to help with your petroleum supply needs. Get in touch with our Lagos operations team.
            </p>

            <div className="flex flex-wrap gap-4 mb-8 text-sm">
              <a href={`tel:${COMPANY_INFO.primaryPhone}`} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 text-slate-800 font-semibold">
                <PhoneIcon className="w-4 h-4 text-amber-600" />
                {COMPANY_INFO.primaryPhone}
              </a>
              <a href={`mailto:${COMPANY_INFO.email}`} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 text-slate-800 font-semibold">
                <EnvelopeIcon className="w-4 h-4 text-amber-600" />
                {COMPANY_INFO.email}
              </a>
            </div>

            {error && (
              <div className="mb-6 p-4 rounded-2xl bg-red-50 border border-red-200 text-red-700 text-sm font-medium">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-900">Full Name *</label>
                  <input type="text" required value={name} onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent" placeholder="Your full name" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-900">Email Address *</label>
                  <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent" placeholder="your@email.com" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-900">Phone Number *</label>
                <input type="tel" required value={phone} onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent" placeholder="+234 9134449634" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-900">Company / Organization</label>
                <input type="text" value={company} onChange={(e) => setCompany(e.target.value)}
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent" placeholder="Company name" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-900">Product of Interest</label>
                <select value={product} onChange={(e) => setProduct(e.target.value)}
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent">
                  <option value="">Select a product</option>
                  <option>Diesel (AGO)</option>
                  <option>Fuel (PMS)</option>
                  <option>Kerosene (DPK)</option>
                  <option>Marine Bunkering</option>
                  <option>General Inquiry</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-900">Message</label>
                <textarea value={message} onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent h-32"
                  placeholder="Tell us about your requirements..." />
              </div>

              <button type="submit" disabled={isSubmitting}
                className="w-full px-8 py-4 bg-amber-400 hover:bg-amber-300 disabled:opacity-60 text-slate-950 font-black rounded-full shadow-lg transition-all">
                {isSubmitting ? 'Sending…' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
