import React from 'react';
import { SunliteLogo } from '../components/SunliteLogo';
import { SERVICES, PRODUCTS, MARINE_SPECS } from '../data/companyData';
import {
  BuildingOffice2Icon,
  GlobeAltIcon,
  TruckIcon,
  ShieldCheckIcon,
  BoltIcon,
  HomeModernIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  FireIcon,
  AnchorIcon,
  ScaleIcon,
  ChartBarIcon,
} from '@heroicons/react/24/outline';

const serviceIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  BuildingOffice2Icon,
  GlobeAltIcon,
  TruckIcon,
  ShieldCheckIcon,
  BoltIcon,
  HomeModernIcon,
};

export const ServicesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-slate-950 to-slate-900 py-20 lg:py-32 overflow-hidden text-white">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent" />
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23F3B51B" fill-opacity="0.1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 36v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 6V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E") }} />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-amber-400 text-sm font-semibold uppercase tracking-wider mb-4">Our Services</p>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-tight mb-6">
            End-to-End Petroleum<br />
            <span className="text-amber-400">Solutions</span>
          </h1>
          <p className="text-slate-300 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
            Comprehensive petroleum supply and logistics services tailored for residential, commercial, institutional, and marine operations across Lagos State and Nigeria.
          </p>
        </div>
      </section>

      {/* Core Services Grid */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-amber-500 text-sm font-semibold uppercase tracking-wider mb-3">Core Services</p>
            <h2 className="font-display text-3xl sm:text-4xl font-black text-slate-900">
              Specialized Supply & Logistics Capabilities
            </h2>
            <p className="text-slate-600 mt-4">Each service is backed by certified quality assurance, GPS-tracked logistics, and 24/7 dispatch coordination</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-6">
            {SERVICES.map((service, index) => {
              const IconComponent = serviceIcons[service.iconName] || BuildingOffice2Icon;
              return (
                <article key={service.id} className="group relative p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:border-amber-200 hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative flex gap-4">
                    <div className="w-14 h-14 rounded-xl bg-amber-50 flex items-center justify-center flex-shrink-0 group-hover:bg-amber-100 transition-colors">
                      <IconComponent className="w-7 h-7 text-amber-600" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs font-bold text-amber-600 uppercase tracking-wider bg-amber-50 px-2 py-1 rounded-full">{service.sectorTag}</span>
                        <span className="text-xs font-mono text-slate-500">0{index + 1}</span>
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 mb-1">{service.title}</h3>
                      <p className="text-amber-600 font-semibold text-sm mb-3">{service.subtitle}</p>
                      <p className="text-slate-600 leading-relaxed mb-4">{service.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {service.keyFeatures.map((feature, i) => (
                          <span key={i} className="inline-flex items-center gap-1.5 text-xs text-slate-600 bg-white px-2.5 py-1 rounded-full border border-slate-200">
                            <CheckCircleIcon className="w-3.5 h-3.5 text-amber-500" />
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Marine Bunkering Special Section */}
      <section className="py-20 lg:py-28 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div className="space-y-6">
              <p className="text-amber-400 text-sm font-semibold uppercase tracking-wider">Specialist Division</p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-white">
                {MARINE_SPECS.title}
              </h2>
              <p className="text-slate-300 text-lg leading-relaxed">{MARINE_SPECS.description}</p>
              
              <div className="space-y-4">
                {MARINE_SPECS.capabilities.map((cap, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 bg-slate-900/50 rounded-xl border border-slate-800">
                    <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center flex-shrink-0">
                      <AnchorIcon className="w-5 h-5 text-amber-400" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">{cap.title}</h3>
                      <p className="text-slate-400 text-sm mt-1">{cap.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="pt-4 border-t border-slate-800">
                <p className="text-slate-400 text-sm font-semibold uppercase tracking-wider mb-3">Vessel Types Serviced</p>
                <div className="flex flex-wrap gap-2">
                  {MARINE_SPECS.vesselTypes.map((vessel, i) => (
                    <span key={i} className="px-3 py-1.5 bg-slate-900 border border-slate-800 rounded-full text-sm text-slate-300">{vessel}</span>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="relative rounded-3xl overflow-hidden bg-slate-900">
              <div className="aspect-[4/3] bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center relative">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-500/5 via-transparent to-transparent" />
                <div className="relative z-10 text-center p-8">
                  <GlobeAltIcon className="w-24 h-24 text-amber-500/30 mx-auto mb-4" />
                  <p className="text-amber-400 text-lg font-semibold">Marine Bunkering Operations</p>
                  <p className="text-slate-500 mt-2">Apapa Port • Tin Can Island • Offshore Anchorages</p>
                  <div className="mt-8 grid grid-cols-2 gap-4 text-center">
                    <div className="p-4 bg-slate-800/50 rounded-xl border border-slate-700">
                      <p className="text-3xl font-black text-amber-400">BDN</p>
                      <p className="text-xs text-slate-500">Bunker Delivery Notes</p>
                    </div>
                    <div className="p-4 bg-slate-800/50 rounded-xl border border-slate-700">
                      <p className="text-3xl font-black text-amber-400">QA/QC</p>
                      <p className="text-xs text-slate-500">Drip Sampling & Certs</p>
                    </div>
                    <div className="p-4 bg-slate-800/50 rounded-xl border border-slate-700">
                      <p className="text-3xl font-black text-amber-400">24/7</p>
                      <p className="text-xs text-slate-500">Maritime Dispatch</p>
                    </div>
                    <div className="p-4 bg-slate-800/50 rounded-xl border border-slate-700">
                      <p className="text-3xl font-black text-amber-400">MARPOL</p>
                      <p className="text-xs text-slate-500">Compliant Operations</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Portfolio */}
      <section className="py-20 lg:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-amber-500 text-sm font-semibold uppercase tracking-wider mb-3">Product Portfolio</p>
            <h2 className="font-display text-3xl sm:text-4xl font-black text-slate-900">
              Premium Petroleum Products
            </h2>
            <p className="text-slate-600 mt-4">Each product meets stringent NIS/ASTM standards with verified batch certificates</p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-6">
            {PRODUCTS.map((product) => (
              <article key={product.id} className="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500 text-slate-950 font-bold text-xs mb-2">
                      {product.shortCode}
                    </span>
                    <h3 className="text-white text-xl font-bold">{product.name}</h3>
                    <p className="text-amber-300 text-sm">{product.classification}</p>
                  </div>
                </div>
                <div className="p-6 space-y-4">
                  <p className="text-slate-600 leading-relaxed">{product.tagline}</p>
                  <div className="border-t border-slate-100 pt-4">
                    <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold mb-3">Key Specifications</p>
                    <div className="space-y-2">
                      {product.specs.slice(0, 4).map((spec, i) => (
                        <div key={i} className="flex justify-between text-sm">
                          <span className="text-slate-500">{spec.label}</span>
                          <span className="text-slate-900 font-medium font-mono">{spec.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="pt-4 border-t border-slate-100">
                    <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold mb-2">Target Clients</p>
                    <div className="flex flex-wrap gap-1.5">
                      {product.targetClients.slice(0, 3).map((client, i) => (
                        <span key={i} className="px-2.5 py-1 bg-slate-100 text-slate-600 text-xs rounded-full">{client}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-amber-500 text-sm font-semibold uppercase tracking-wider mb-3">Our Process</p>
            <h2 className="font-display text-3xl sm:text-4xl font-black text-slate-900">
              From Request to Delivery — Seamless Execution
            </h2>
          </div>
          
          const steps = [
            { number: '01', title: 'Request & Quote', desc: 'Submit requirements via portal, phone, or email. Receive detailed quote with specs & timeline.', icon: ChartBarIcon },
            { number: '02', title: 'Order Confirmation', desc: 'Confirm volume, grade, delivery window, and discharge location. Schedule tanker dispatch.', icon: CheckCircleIcon },
            { number: '03', title: 'Pre-Dispatch QA', desc: 'Hydrometer density test, water-paste dip, seal verification. Batch certificate issued.', icon: ScaleIcon },
            { number: '04', title: 'Secure Transit', desc: 'GPS-tracked tanker with anti-spill kits, grounding cables, and HSE-trained driver.', icon: TruckIcon },
            { number: '05', title: 'Metered Discharge', desc: 'Calibrated meter discharge at your facility. Volumetric invoice generated on-site.', icon: FireIcon },
            { number: '06', title: 'Post-Delivery', desc: 'Digital delivery receipt, batch certificate copy, and scheduled follow-up for reorder.', icon: ArrowRightIcon },
          ];
          
          <div className="grid lg:grid-cols-3 gap-6">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="absolute left-1/2 -translate-x-1/2 top-0 w-0.5 h-full bg-amber-100" style={{ display: index < 5 ? 'block' : 'none' }} />
                <div className="relative flex flex-col items-center text-center p-6">
                  <div className="relative z-10 w-16 h-16 rounded-full bg-amber-50 flex items-center justify-center mb-6 border-4 border-white shadow-lg">
                    <span className="text-2xl font-black text-amber-600">{step.number}</span>
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center mb-4">
                    <step.icon className="w-6 h-6 text-amber-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Secure Your Energy Supply?
          </h2>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto mb-8">
            Contact our dispatch desk for immediate quotation and scheduling. 24/7 availability for marine and emergency requirements.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-base tracking-wide shadow-lg transition-all">
              Contact Us
            </a>
            <a href="/request-supply" className="inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-amber-400 hover:bg-amber-400 hover:text-slate-950 text-amber-400 font-bold text-base tracking-wide transition-all">
              Request Supply
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};