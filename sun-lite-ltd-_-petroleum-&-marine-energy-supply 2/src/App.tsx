import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustBar } from './components/TrustBar';
import { NetworkStatsSection } from './components/NetworkStatsSection';
import { AboutSection } from './components/AboutSection';
import { ProductsSection } from './components/ProductsSection';
import { MarineSection } from './components/MarineSection';
import { ServicesSection } from './components/ServicesSection';
import { CoverageMatrix } from './components/CoverageMatrix';
import { OperationalHubs } from './components/OperationalHubs';
import { ComplianceSection } from './components/ComplianceSection';
import { LeadershipAndCSR } from './components/LeadershipAndCSR';
import { FAQSection } from './components/FAQSection';
import { RequestSupplySection } from './components/RequestSupplySection';
import { Footer } from './components/Footer';
import { SupplyModal } from './components/SupplyModal';
import { ProductCategory } from './types';
import { PhoneIcon } from '@heroicons/react/24/outline';
import { COMPANY_INFO } from './data/companyData';

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
    <div className="min-h-screen bg-white text-slate-900 selection:bg-amber-400 selection:text-slate-950 font-sans antialiased">
      {/* Primary Fixed Navigation Bar */}
      <Header onRequestSupplyClick={() => handleOpenSupplyModal()} />

      {/* Main Corporate Presentation Content */}
      <main>
        {/* 01. Full-Screen Editorial Hero with Apple White & Industrial Atmosphere */}
        <Hero onRequestSupplyClick={() => handleOpenSupplyModal()} />

        {/* 02. Verified Evidence & Trust Strip (CAC RC 9561194 • TIN • Hubs) */}
        <TrustBar />

        {/* 03. About SUN LITE LTD Narrative & Proof Points */}
        <AboutSection onRequestSupplyClick={() => handleOpenSupplyModal()} />

        {/* 04. Regional Logistics Grid & Map Representation */}
        <NetworkStatsSection />

        {/* 05. Core Product Portfolio (Diesel Focus + Fuel + Kerosene) */}
        <ProductsSection onSelectProductForSupply={handleSelectProduct} />

        {/* 06. Signature Marine Diesel & Vessel Bunkering Division */}
        <MarineSection
          onDiscussMarineClick={() => handleOpenSupplyModal('Marine Diesel (Bunkering)')}
        />

        {/* 07. Operational Services (Clean Heroicons Grid) */}
        <ServicesSection onRequestSupplyClick={() => handleOpenSupplyModal()} />

        {/* 08. Client Sector Coverage (Commercial, Marine, Retail, Institutions) */}
        <CoverageMatrix onRequestSupplyClick={() => handleOpenSupplyModal()} />

        {/* 09. Lagos Operational Hubs (Apapa, Victoria Island, Lekki) */}
        <OperationalHubs />

        {/* 10. Compliance, Incorporation & QA/QC Protocols */}
        <ComplianceSection />

        {/* 11. Leadership Commitment, Preserve & Conserve (Modelled after reference) */}
        <LeadershipAndCSR onRequestSupplyClick={() => handleOpenSupplyModal()} />

        {/* 12. Frequently Asked Questions with Search */}
        <FAQSection onRequestSupplyClick={() => handleOpenSupplyModal()} />

        {/* 13. Request Supply Requisition & Conversion Journey */}
        <RequestSupplySection initialProduct={selectedProduct} />
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
  );
}
