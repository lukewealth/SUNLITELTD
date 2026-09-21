import React from 'react';
import { SunliteLogo } from '../components/SunliteLogo';
import { SECTORS_COVERED, PRODUCTS, COMPANY_INFO, OPERATIONAL_HUBS, COMPLIANCE_ITEMS } from '../data/companyData';
import {
  BuildingOfficeIcon,
  GlobeAltIcon,
  TruckIcon,
  ShieldCheckIcon,
  BuildingLibraryIcon,
  Cog6ToothIcon,
  AcademicCapIcon,
  HomeModernIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  BoltIcon,
  BeakerIcon,
  MapPinIcon,
  FireIcon,
} from '@heroicons/react/24/outline';

const sectorIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  BuildingOfficeIcon,
  GlobeAltIcon,
  TruckIcon,
  ShieldCheckIcon,
  BuildingLibraryIcon,
  Cog6ToothIcon,
  AcademicCapIcon,
  HomeModernIcon,
};

const productIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  'Diesel (AGO)': FireIcon,
  'Fuel (PMS)': BoltIcon,
  'Kerosene (DPK)': BeakerIcon,
  'Marine Diesel (Bunkering)': GlobeAltIcon,
};

export const IndustriesPage: React.FC = () => {
  const industries = [
    {
      id: 'commercial',
      name: 'Commercial Businesses',
      icon: BuildingOfficeIcon,
      description: 'Office complexes, retail centers, and commercial properties requiring reliable backup power and daily operations fuel.',
      products: ['Diesel (AGO)'],
      applications: ['Standby Generators', 'HVAC Systems', 'Elevators & Escalators', 'Common Area Lighting'],
      volume: '500L - 50,000L/month',
      color: 'bg-blue-500',
    },
    {
      id: 'marine',
      name: 'Marine Ships & Vessels',
      icon: GlobeAltIcon,
      description: 'Ocean-going vessels, offshore supply boats, tugs, and barges calling at Lagos ports and anchorages.',
      products: ['Marine Diesel (Bunkering)'],
      applications: ['Main Propulsion', 'Auxiliary Engines', 'Deck Machinery', 'Cargo Operations'],
      volume: '10,000L - 500,000L/call',
      color: 'bg-cyan-500',
    },
    {
      id: 'fuel-stations',
      name: 'Fuel Service Stations',
      icon: TruckIcon,
      description: 'Independent and major retail fuel stations requiring consistent PMS, AGO, and DPK replenishment.',
      products: ['Diesel (AGO)', 'Fuel (PMS)', 'Kerosene (DPK)'],
      applications: ['Retail Dispensing', 'Commercial Fleet Cards', 'Bulk Storage Reserves', 'Lubricant Top-ups'],
      volume: '33,000L - 100,000L/week',
      color: 'bg-orange-500',
    },
    {
      id: 'banks-data',
      name: 'Commercial Banks & Data Centers',
      icon: ShieldCheckIcon,
      description: 'Mission-critical facilities requiring ultra-low sulfur, high-cetane diesel for continuous uptime.',
      products: ['High-Spec Diesel (AGO)'],
      applications: ['UPS Backup Systems', 'Server Room Cooling', 'Emergency Generators', 'Fire Suppression Pumps'],
      volume: '1,000L - 20,000L/month',
      color: 'bg-indigo-500',
    },
    {
      id: 'institutions',
      name: 'Churches & Large Institutions',
      icon: BuildingLibraryIcon,
      description: 'Religious centers, educational campuses, and large gathering facilities with standby power needs.',
      products: ['Diesel (AGO)'],
      applications: ['Auditorium Power', 'Climate Control', 'Kitchen & Catering', 'Security Systems'],
      volume: '200L - 10,000L/month',
      color: 'bg-purple-500',
    },
    {
      id: 'industrial',
      name: 'Industrial & Manufacturing Plants',
      icon: Cog6ToothIcon,
      description: 'Heavy manufacturing, processing plants, and production facilities with continuous high-volume demand.',
      products: ['Bulk Diesel (AGO)'],
      applications: ['Process Heating', 'Production Machinery', 'Boiler Systems', 'Material Handling'],
      volume: '50,000L - 1,000,000L/month',
      color: 'bg-red-500',
    },
    {
      id: 'government',
      name: 'State Facilities & Infrastructure',
      icon: AcademicCapIcon,
      description: 'Government buildings, public utilities, water treatment plants, and critical infrastructure.',
      products: ['Diesel (AGO)'],
      applications: ['Water Pumping Stations', 'Street Lighting', 'Emergency Services', 'Administrative Buildings'],
      volume: '10,000L - 200,000L/month',
      color: 'bg-green-500',
    },
    {
      id: 'residential',
      name: 'Residential Estates & Communities',
      icon: HomeModernIcon,
      description: 'Gated communities, housing estates, and residential complexes with shared backup power systems.',
      products: ['Diesel (AGO)'],
      applications: ['Estate Generators', 'Water Supply Pumps', 'Perimeter Lighting', 'Clubhouse Facilities'],
      volume: '1,000L - 30,000L/month',
      color: 'bg-amber-500',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-slate-50 to-white py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-100/30 via-transparent to-transparent" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-amber-500 text-sm font-semibold uppercase tracking-wider mb-4">Industries We Serve</p>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 leading-tight tracking-tight mb-6">
            Powering Every Sector<br />
            <span className="text-amber-500">Across Lagos & Nigeria</span>
          </h1>
          <p className="text-slate-600 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
            From residential estates to ocean-going vessels, SUN LITE LTD delivers tailored petroleum solutions 
            with precision logistics, verified quality, and 24/7 reliability.
          </p>
        </div>
      </section>

      {/* Industry Cards */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-6">
            {industries.map((industry, index) => (
              <article key={industry.id} className="group relative p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:border-amber-200 hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative flex gap-4">
                  <div className={`w-14 h-14 rounded-xl ${industry.color} flex items-center justify-center flex-shrink-0`}>
                    <industry.icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-bold text-amber-600 uppercase tracking-wider bg-amber-50 px-2 py-1 rounded-full">Sector</span>
                      <span className="text-xs font-mono text-slate-500">0{index + 1}</span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-1">{industry.name}</h3>
                    <p className="text-slate-600 leading-relaxed mb-4">{industry.description}</p>
                    
                    <div className="grid sm:grid-cols-2 gap-4 mb-4">
                      <div>
                        <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold mb-2">Key Applications</p>
                        <div className="flex flex-wrap gap-1.5">
                          {industry.applications.slice(0, 4).map((app, i) => (
                            <span key={i} className="px-2.5 py-1 bg-white text-slate-600 text-xs rounded-full border border-slate-200">{app}</span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold mb-2">Typical Volume Range</p>
                        <p className="font-mono text-sm font-bold text-slate-900">{industry.volume}</p>
                      </div>
                    </div>
                    
                    <div className="pt-4 border-t border-slate-200">
                      <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold mb-2">Products Supplied</p>
                      <div className="flex flex-wrap gap-2">
                        {industry.products.map((prod, i) => {
                          const ProdIcon = productIcons[prod] || FireIcon;
                          return (
                            <span key={i} className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-50 border border-amber-200 rounded-full text-xs text-amber-700">
                              <ProdIcon className="w-3.5 h-3.5" />
                              {prod}
                            </span>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Product Deep Dive */}
      <section className="py-20 lg:py-28 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-amber-400 text-sm font-semibold uppercase tracking-wider mb-3">Product Specifications</p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white">
              Premium Products for Every Application
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-6">
            {PRODUCTS.map((product) => (
              <div key={product.id} className="bg-slate-900/50 rounded-2xl border border-slate-800 overflow-hidden hover:border-amber-500/50 transition-colors">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="px-3 py-1 rounded-full text-xs font-bold text-white" style={{ backgroundColor: product.accentColor }}>
                        {product.shortCode}
                      </span>
                      <span className="text-xs font-mono text-amber-400">{product.classification}</span>
                    </div>
                    <h3 className="text-white text-2xl font-bold">{product.name}</h3>
                  </div>
                </div>
                <div className="p-6 space-y-5">
                  <p className="text-slate-300 leading-relaxed">{product.tagline}</p>
                  
                  <div className="border-t border-slate-800 pt-5">
                    <p className="text-amber-400 text-xs font-semibold uppercase tracking-wider mb-4">Primary Applications</p>
                    <p className="text-slate-400 text-sm">{product.primaryApplication}</p>
                  </div>
                  
                  <div className="border-t border-slate-800 pt-5">
                    <p className="text-amber-400 text-xs font-semibold uppercase tracking-wider mb-4">Technical Specifications</p>
                    <dl className="space-y-3 text-sm">
                      {product.specs.map((spec, i) => (
                        <div key={i} className="flex justify-between">
                          <dt className="text-slate-500">{spec.label}</dt>
                          <dd className="text-white font-medium font-mono">{spec.value}</dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                  
                  <div className="border-t border-slate-800 pt-5">
                    <p className="text-amber-400 text-xs font-semibold uppercase tracking-wider mb-4">Ideal For</p>
                    <div className="flex flex-wrap gap-2">
                      {product.targetClients.map((client, i) => (
                        <span key={i} className="px-2.5 py-1 bg-slate-800 border border-slate-700 rounded-full text-xs text-slate-300">{client}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lagos Coverage Map */}
      <section className="py-20 lg:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-amber-500 text-sm font-semibold uppercase tracking-wider mb-3">Coverage Area</p>
            <h2 className="font-display text-3xl sm:text-4xl font-black text-slate-900">
              Comprehensive Lagos State Coverage
            </h2>
            <p className="text-slate-600 mt-4">Three strategic hubs ensuring rapid response across all Lagos corridors</p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-6">
            {[
              { area: 'Apapa & Port Corridor', hub: 'Head Office & Marine Terminal', coverage: ['Apapa Port', 'Tin Can Island', 'Kirikiri', 'Ijora', 'Marine Beach', 'Offshore Anchorages'], industries: ['Marine Vessels', 'Port Operations', 'Tank Farms', 'Shipping Agencies'] },
              { area: 'Victoria Island & CBD', hub: 'Commercial Branch Office', coverage: ['Victoria Island', 'Ikoyi', 'Lagos Island', 'Onikan', 'Obalende', 'CMS'], industries: ['Banks & HQ', 'Data Centers', 'Hotels', 'Multinationals', 'Embassies'] },
              { area: 'Lekki Peninsula & Epe', hub: 'Lekki Logistics Hub', coverage: ['Lekki Phase 1', 'Victoria Garden City', 'Ajah', 'Sangotedo', 'Epe', 'Ibeju-Lekki'], industries: ['Residential Estates', 'Industrial Hubs', 'Free Trade Zone', 'Refineries'] },
            ].map((zone, index) => (
              <div key={index} className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center flex-shrink-0">
                    <MapPinIcon className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Zone {index + 1}</p>
                    <h3 className="text-xl font-bold text-slate-900">{zone.area}</h3>
                  </div>
                </div>
                
                <div className="mb-4 p-4 bg-amber-50 rounded-xl">
                  <p className="text-sm font-semibold text-amber-700 mb-1">{zone.hub}</p>
                  <p className="text-sm text-amber-600">Central dispatch for this corridor</p>
                </div>
                
                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold mb-2">Coverage Areas</p>
                    <ul className="space-y-1 text-sm text-slate-600">
                      {zone.coverage.map((area, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <CheckCircleIcon className="w-3.5 h-3.5 text-amber-500" />
                          {area}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold mb-2">Key Industries</p>
                    <ul className="space-y-1 text-sm text-slate-600">
                      {zone.industries.map((ind, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <CheckCircleIcon className="w-3.5 h-3.5 text-green-500" />
                          {ind}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="pt-4 border-t border-slate-100">
                  <a href="/contact" className="inline-flex items-center gap-2 text-sm font-semibold text-amber-600 hover:text-amber-700">
                    Serve This Area
                    <ArrowRightIcon className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Residential & Corporate Focus */}
      <section className="py-20 lg:py-28 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-6">
              <p className="text-amber-600 text-sm font-semibold uppercase tracking-wider">Specialized Segments</p>
              <h2 className="font-display text-3xl sm:text-4xl font-black text-slate-900">
                Dedicated Solutions for Home & Corporate Clients
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                SUN LITE LTD operates specialized supply programs for both residential communities and corporate enterprises across Lagos State. Our three-hub network ensures delivery within hours, not days.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="p-4 bg-white rounded-xl border border-slate-200">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center">
                      <HomeModernIcon className="w-5 h-5 text-amber-600" />
                    </div>
                    <h3 className="text-slate-900 font-bold">Residential Estates</h3>
                  </div>
                  <ul className="text-sm text-slate-600 space-y-2">
                    <li className="flex items-center gap-2"><CheckCircleIcon className="w-4 h-4 text-green-500" /> Weekend & holiday delivery</li>
                    <li className="flex items-center gap-2"><CheckCircleIcon className="w-4 h-4 text-green-500" /> Quiet discharge operations</li>
                    <li className="flex items-center gap-2"><CheckCircleIcon className="w-4 h-4 text-green-500" /> Estate management friendly</li>
                    <li className="flex items-center gap-2"><CheckCircleIcon className="w-4 h-4 text-green-500" /> Flexible volume scheduling</li>
                  </ul>
                </div>
                <div className="p-4 bg-white rounded-xl border border-slate-200">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center">
                      <BuildingOfficeIcon className="w-5 h-5 text-amber-600" />
                    </div>
                    <h3 className="text-slate-900 font-bold">Corporate Accounts</h3>
                  </div>
                  <ul className="text-sm text-slate-600 space-y-2">
                    <li className="flex items-center gap-2"><CheckCircleIcon className="w-4 h-4 text-green-500" /> Priority dispatch windows</li>
                    <li className="flex items-center gap-2"><CheckCircleIcon className="w-4 h-4 text-green-500" /> Batch quality certificates</li>
                    <li className="flex items-center gap-2"><CheckCircleIcon className="w-4 h-4 text-green-500" /> Dedicated account managers</li>
                    <li className="flex items-center gap-2"><CheckCircleIcon className="w-4 h-4 text-green-500" /> Emergency backup reserves</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="relative rounded-3xl overflow-hidden bg-slate-900 p-8 text-center">
              <p className="text-amber-400 text-lg font-semibold">Ready to Get Started?</p>
              <p className="text-slate-400 mt-2 mb-6">Contact our Lagos dispatch desk for a custom supply program tailored to your sector.</p>
              <a href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-base tracking-wide shadow-lg transition-all">
                Request a Quote
                <ArrowRightIcon className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Powering Lagos Industries with Reliability
          </h2>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto mb-8">
            From banks and data centers to marine vessels and residential estates — SUN LITE LTD delivers the energy your operations depend on.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-base tracking-wide shadow-lg transition-all">
              Contact Dispatch
            </a>
            <a href="/services" className="inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-amber-400 hover:bg-amber-400 hover:text-slate-950 text-amber-400 font-bold text-base tracking-wide transition-all">
              View All Services
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
