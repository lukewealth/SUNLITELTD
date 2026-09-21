import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ProductsSection } from './components/ProductsSection';
import { MarineSection } from './components/MarineSection';
import { ServicesSection } from './components/ServicesSection';
import { FAQSection } from './components/FAQSection';
import { RequestSupplySection } from './components/RequestSupplySection';
import { Footer } from './components/Footer';
import { SupplyModal } from './components/SupplyModal';
import { ProductCategory } from './types';
import { PhoneIcon } from '@heroicons/react/24/outline';
import { COMPANY_INFO } from './data/companyData';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { IndustriesPage } from './pages/IndustriesPage';
import { ContactPage } from './pages/ContactPage';

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
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Router>
      <div className="min-h-screen bg-white text-slate-900 selection:bg-amber-400 selection:text-slate-950 font-sans antialiased">
        <Header onRequestSupplyClick={() => handleOpenSupplyModal()} />

        <main>
          <Routes>
            <Route path="/" element={(
              <>
                <Hero onRequestSupplyClick={() => handleOpenSupplyModal()} />
                <AboutSection onRequestSupplyClick={() => handleOpenSupplyModal()} />
                <ProductsSection onSelectProductForSupply={handleSelectProduct} />
                <MarineSection
                  onDiscussMarineClick={() => handleOpenSupplyModal('Marine Diesel (Bunkering)')}
                />
                <ServicesSection onRequestSupplyClick={() => handleOpenSupplyModal()} />
                <FAQSection onRequestSupplyClick={() => handleOpenSupplyModal()} />
                <RequestSupplySection initialProduct={selectedProduct} />
              </>
            )} />

            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/industries" element={<IndustriesPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>

        <Footer />

        <SupplyModal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          preselectedProduct={selectedProduct}
        />

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
