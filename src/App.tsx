import React, { useState } from 'react';
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { AboutSection } from '../components/AboutSection';
import { ProductsSection } from '../components/ProductsSection';
import { MarineSection } from '../components/MarineSection';
import { ServicesSection } from '../components/ServicesSection';
import { FAQSection } from '../components/FAQSection';
import { RequestSupplySection } from '../components/RequestSupplySection';
import { Footer } from '../components/Footer';
import { SupplyModal } from '../components/SupplyModal';
import { ProductCategory } from '../types';
import { PhoneIcon } from '@heroicons/react/24/outline';
import { COMPANY_INFO } from '../data/companyData';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import new page components
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { IndustriesPage } from './pages/IndustriesPage';

export default function App() {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [selectedProduct, setSelectedProduct] = useState<ProductCategory>('Diesel (AGO)');

  const handleOpenSupplyModal = (product?: ProductCategory) => {
    if (product) {
      setSelectedProduct(product);
    }
    setModalOpen(true);
  };

  const handleSelectProduct = (product: ProductCategory) => {
    setSelectedProduct(product);
    // Smooth scroll to the in-page interactive calculator
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Router>
      <div className="min-h-screen bg-white text-slate-900 selection:bg-amber-400 selection:text-slate-950 font-sans antialiased">
        {/* Primary Fixed Navigation Bar */}
        <Header onRequestSupplyClick={() => handleOpenSupplyModal()} />

        {/* Main Corporate Presentation Content */}
        <main>
          <Routes>
            {/* Home Page Route */}
            <Route path="/" element={(
              <>
                {/* 01. Full-Screen Editorial Hero with Apple White & Industrial Atmosphere */}
                <Hero onRequestSupplyClick={() => handleOpenSupplyModal()} />

                {/* 03. About SUN LITE LTD Narrative & Proof Points */}
                <AboutSection onRequestSupplyClick={() => handleOpenSupplyModal()} />

                {/* 05. Core Product Portfolio (Diesel Focus + Fuel + Kerosene) */}
                <ProductsSection onSelectProductForSupply={handleSelectProduct} />

                {/* 06. Signature Marine Diesel & Vessel Bunkering Division */}
                <MarineSection
                  onDiscussMarineClick={() => handleOpenSupplyModal('Marine Diesel (Bunkering)')}
                />

                {/* 07. Operational Services (Clean Heroicons Grid) */}
                <ServicesSection onRequestSupplyClick={() => handleOpenSupplyModal()} />

                {/* 12. Frequently Asked Questions with Search */}
                <FAQSection onRequestSupplyClick={() => handleOpenSupplyModal()} />

                {/* 13. Request Supply Requisition & Conversion Journey */}
                <RequestSupplySection initialProduct={selectedProduct} />
              </>
            )} />

            {/* About Page Route */}
            <Route path="/about" element={<AboutPage />} />

            {/* Services Page Route */}
            <Route path="/services" element={<ServicesPage />} />

            {/* Industries Page Route */}
            <Route path="/industries" element={<IndustriesPage />} />

            {/* Contact Page Route */}
            <Route path="/contact" element={
              <div className="min-h-screen bg-slate-50 py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="max-w-3xl mx-auto">
                    <div className="bg-white rounded-3xl shadow-xl border border-slate-200 p-8 md:p-12">
                      <h1 className="font-display text-4xl font-black text-slate-900 mb-4">Contact SUN LITE LTD</h1>
                      <p className="text-slate-600 mb-8">We're here to help with your petroleum supply needs. Get in touch with our Lagos operations team.</p>
                      
                      <div className="grid md:grid-cols-2 gap-6 mb-8">
                        <div className="space-y-2">
                          <label className="text-sm font-semibold text-slate-900">Full Name</label>
                          <input type="text" className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent" placeholder="Your full name" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-semibold text-slate-900">Email Address</label>
                          <input type="email" className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent" placeholder="your@email.com" />
                        </div>
                      </div>
                      
                      <div className="space-y-2 mb-6">
                        <label className="text-sm font-semibold text-slate-900">Phone Number</label>
                        <input type="tel" className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent" placeholder="+234 9134449634" />
                      </div>
                      
                      <div className="space-y-2 mb-6">
                        <label className="text-sm font-semibold text-slate-900">Company/Organization</label>
                        <input type="text" className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent" placeholder="Company name" />
                      </div>
                      
                      <div className="space-y-2 mb-6">
                        <label className="text-sm font-semibold text-slate-900">Product of Interest</label>
                        <select className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent">
                          <option>Select a product</option>
                          <option>Diesel (AGO)</option>
                          <option>Fuel (PMS)</option>
                          <option>Kerosene (DPK)</option>
                          <option>Marine Bunkering</option>
                          <option>General Inquiry</option>
                        </select>
                      </div>
                      
                      <div className="space-y-2 mb-8">
                        <label className="text-sm font-semibold text-slate-900">Message</label>
                        <textarea className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent h-32" placeholder="Tell us about your requirements..."></textarea>
                      </div>
                      
                      <button className="w-full px-8 py-4 bg-amber-400 hover:bg-amber-300 text-slate-950 font-black rounded-full shadow-lg transition-all">
                        Send Message
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            } />
          </Routes>
        </main>

        {/* Corporate Footer with Full Details */}
        <Footer />

        {/* Interactive Floating Quick Supply Modal */}
        <SupplyModal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          preselectedProduct={selectedProduct}
        />

        {/* Floating Action Button for Quick Phone Access */}
        <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
          <a
            href={`tel:${COMPANY_INFO.primaryPhone}`}
            className="p-3.5 rounded-full bg-amber-400 hover:bg-amber-300 text-slate-950 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all flex items-center justify-center group border border-amber-300"
            title={`Call Lagos Dispatch: ${COMPANY_INFO.primaryPhone}`}
            aria-label="Call Lagos Dispatch"
          >
            <PhoneIcon className="w-5 h-5 stroke-[2.5]" />
            <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 ease-out pl-0 group-hover:pl-2 text-xs font-black font-mono-code">
              {COMPANY_INFO.primaryPhone}
            </span>
          </a>
        </div>
      </div>
    </Router>
  );
}