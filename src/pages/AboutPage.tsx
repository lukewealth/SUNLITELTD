import React from 'react';
import { SunliteLogo } from '../components/SunliteLogo';
import { COMPANY_INFO, OPERATIONAL_HUBS, COMPLIANCE_ITEMS } from '../data/companyData';
import {
  BuildingOffice2Icon,
  ShieldCheckIcon,
  PhoneIcon,
  EnvelopeIcon,
  ClockIcon,
  CheckCircleIcon,
} from '@heroicons/react/24/outline';

export const AboutPage: React.FC = () => {
  const ceo = {
    name: 'Odoawujo Onyewuchi Sixtus',
    title: 'Chief Executive Officer',
    experience: '15+ years in Global Trade Distribution & Heavy Industrial Equipment Procurement',
    background: 'Senior Engineering Background with extensive expertise in Global Trade Distribution for Procurement of Heavy Industrial Equipment',
    achievements: [
      'Led procurement operations for major industrial projects across Nigeria and West Africa',
      'Established strategic partnerships with global equipment manufacturers and suppliers',
      'Managed multi-million dollar procurement budgets for heavy industrial equipment',
      'Pioneered efficient supply chain solutions for oil & gas sector equipment',
      'Built SUN LITE LTD from ground up into a leading petroleum distribution company',
    ],
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-slate-50 to-white py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-100/30 via-transparent to-transparent" />
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23F3B51B\" fill-opacity=\"0.1\"%3E%3Cpath d=\"M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 36v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 6V0H4v4H0v2h4v4h2V6h4V4H6z\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E') " }} />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-50 border border-amber-200 text-amber-700 text-sm font-semibold uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-amber-500" />
                <span>About SUN LITE LTD</span>
              </div>
              
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 leading-tight tracking-tight">
                Delivering Energy.<br />
                <span className="text-amber-500">Building Trust.</span>
              </h1>
              
              <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl">
                {COMPANY_INFO.tagline}
              </p>
              
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <div className="flex items-center gap-3 px-4 py-3 bg-white border border-slate-200 rounded-xl shadow-sm">
                  <ShieldCheckIcon className="w-5 h-5 text-amber-500" />
                  <div>
                    <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold">CAC Registered</p>
                    <p className="font-mono text-sm font-bold text-slate-900">{COMPANY_INFO.rcNumber}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 px-4 py-3 bg-white border border-slate-200 rounded-xl shadow-sm">
                  <CheckCircleIcon className="w-5 h-5 text-green-500" />
                  <div>
                    <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Tax Compliant</p>
                    <p className="font-mono text-sm font-bold text-slate-900">TIN Verified</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right - CEO Image */}
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-slate-900">
                <img
                  src="/ceo-ondoawujo.png"
                  alt="Odoawujo Onyewuchi Sixtus - CEO, SUN LITE LTD"
                  className="w-full h-auto object-cover opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-amber-400 text-sm font-semibold uppercase tracking-wider">Leadership</p>
                  <h3 className="text-white text-2xl font-bold mt-1">{ceo.name}</h3>
                  <p className="text-amber-300 text-lg font-medium mt-1">{ceo.title}</p>
                </div>
              </div>
              {/* Experience Badge */}
              <div className="absolute -bottom-6 -left-6 lg:-left-12 bg-white rounded-2xl p-6 shadow-xl border border-slate-100 max-w-xs">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center">
                    <BuildingOffice2Icon className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Experience</p>
                    <p className="text-slate-900 font-bold">15+ Years</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CEO Profile Section */}
      <section className="py-20 lg:py-28 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {/* CEO Bio */}
            <div className="lg:col-span-2 space-y-8">
              <div className="border-l-4 border-amber-500 pl-6">
                <p className="text-amber-400 text-sm font-semibold uppercase tracking-wider">Chief Executive Officer</p>
                <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mt-2">
                  {ceo.name}
                </h2>
                <p className="text-amber-300 text-lg font-medium mt-2">{ceo.title}</p>
              </div>
              
              <div className="prose prose-slate max-w-none">
                <p className="text-slate-300 text-lg leading-relaxed mb-6">
                  {ceo.background} With over 15 years of hands-on experience in global trade distribution and procurement of heavy industrial equipment, he has established SUN LITE LTD as a trusted name in petroleum products supply across Lagos State and Nigeria.
                </p>
                
                <p className="text-slate-400 leading-relaxed mb-6">
                  His career spans senior engineering roles in multinational industrial firms where he managed complex procurement operations for heavy industrial equipment, power generation systems, and oil & gas infrastructure projects. This deep technical expertise combined with extensive global trade networks enables SUN LITE LTD to deliver reliable, high-quality petroleum products with precision logistics.
                </p>
                
                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                  {ceo.achievements.map((achievement, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 bg-slate-900/50 rounded-xl border border-slate-800">
                      <CheckCircleIcon className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
                      <p className="text-slate-300 text-sm leading-relaxed">{achievement}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Key Stats */}
            <div className="space-y-4">
              <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6">
                <p className="text-amber-400 text-sm font-semibold uppercase tracking-wider mb-4">Company Metrics</p>
                <div className="space-y-6">
                  <div>
                    <p className="text-4xl font-black text-white">3</p>
                    <p className="text-slate-400 text-sm">Lagos Operational Hubs</p>
                  </div>
                  <div className="border-t border-slate-800 pt-6">
                    <p className="text-4xl font-black text-white">15+</p>
                    <p className="text-slate-400 text-sm">Years Industry Experience</p>
                  </div>
                  <div className="border-t border-slate-800 pt-6">
                    <p className="text-4xl font-black text-white">24/7</p>
                    <p className="text-slate-400 text-sm">Marine Operations</p>
                  </div>
                  <div className="border-t border-slate-800 pt-6">
                    <p className="text-4xl font-black text-amber-400">100%</p>
                    <p className="text-slate-400 text-sm">Compliance Certified</p>
                  </div>
                </div>
              </div>
              
              {/* Compliance Badges */}
              <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6">
                <p className="text-amber-400 text-sm font-semibold uppercase tracking-wider mb-4">Compliance & Standards</p>
                <div className="space-y-3">
                  {COMPLIANCE_ITEMS.map((item) => (
                    <div key={item.id} className="flex items-center gap-3 p-3 bg-slate-900 rounded-xl border border-slate-800">
                      <ShieldCheckIcon className="w-5 h-5 text-amber-500 flex-shrink-0" />
                      <div>
                        <p className="text-white font-semibold text-sm">{item.title}</p>
                        <p className="text-amber-400 text-xs font-mono">{item.code}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-amber-500 text-sm font-semibold uppercase tracking-wider mb-3">Our Core Values</p>
            <h2 className="font-display text-3xl sm:text-4xl font-black text-slate-900">
              Principles That Drive Every Delivery
            </h2>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:border-amber-200 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center mb-4">
                <ShieldCheckIcon className="w-6 h-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Safety First</h3>
              <p className="text-slate-600 leading-relaxed">Zero-spill protocols, HSE compliance, and certified safety standards at every operation</p>
            </div>
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:border-amber-200 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center mb-4">
                <CheckCircleIcon className="w-6 h-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Reliability</h3>
              <p className="text-slate-600 leading-relaxed">Calibrated meters, GPS-tracked fleet, and on-time delivery guarantees for every order</p>
            </div>
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:border-amber-200 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center mb-4">
                <BuildingOffice2Icon className="w-6 h-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Integrity</h3>
              <p className="text-slate-600 leading-relaxed">Transparent pricing, verified batch certificates, and honest commercial dealings</p>
            </div>
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:border-amber-200 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center mb-4">
                <PhoneIcon className="w-6 h-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Partnership</h3>
              <p className="text-slate-600 leading-relaxed">Long-term relationships with clients, suppliers, and regulatory authorities</p>
            </div>
          </div>
        </div>
      </section>

      {/* Lagos Hubs */}
      <section className="py-20 lg:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-amber-500 text-sm font-semibold uppercase tracking-wider mb-3">Our Presence</p>
            <h2 className="font-display text-3xl sm:text-4xl font-black text-slate-900">
              Three Strategic Hubs Across Lagos
            </h2>
            <p className="text-slate-600 mt-4">Strategically positioned for rapid response across Lagos metropolitan corridor</p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-6">
            {OPERATIONAL_HUBS.map((hub) => (
              <div key={hub.id} className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center gap-2 mb-4">
                  <ShieldCheckIcon className="w-5 h-5 text-amber-500" />
                  <span className="text-xs font-bold text-amber-600 uppercase tracking-wider bg-amber-50 px-2 py-1 rounded-full">{hub.badge}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{hub.name}</h3>
                <p className="text-slate-600 text-sm mb-4">{hub.role}</p>
                <p className="text-slate-500 text-sm mb-4">{hub.address}</p>
                <div className="space-y-3 text-sm text-slate-600">
                  <div className="flex items-center gap-2">
                    <PhoneIcon className="w-4 h-4 text-amber-500" />
                    <span>{hub.phone}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <EnvelopeIcon className="w-4 h-4 text-amber-500" />
                    <span>{hub.email}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ClockIcon className="w-4 h-4 text-amber-500" />
                    <span>{hub.hours}</span>
                  </div>
                </div>
                <p className="text-xs text-slate-500 mt-4 pt-4 border-t border-slate-100">{hub.strategicAdvantage}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lagos State Oil & Gas Supplier Section */}
      <section className="py-20 lg:py-28 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-6">
              <p className="text-amber-400 text-sm font-semibold uppercase tracking-wider">Market Leadership</p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-white">
                Lagos State's Trusted Oil & Gas Supplier
              </h2>
              <p className="text-slate-300 text-lg leading-relaxed">
                SUN LITE LTD is a fully licensed and compliant petroleum products supplier serving both <strong className="text-white">home/residential clients</strong> and <strong className="text-white">corporate businesses</strong> across Lagos State. Our three strategic hubs in Apapa, Victoria Island, and Lekki enable rapid, reliable delivery of premium petroleum products.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="p-4 bg-slate-900/50 rounded-xl border border-slate-800">
                  <div className="flex items-center gap-3 mb-3">
                    <BuildingOffice2Icon className="w-6 h-6 text-amber-500" />
                    <h3 className="text-white font-bold">Residential & Home Supply</h3>
                  </div>
                  <ul className="text-slate-400 text-sm space-y-2">
                    <li className="flex items-center gap-2"><CheckCircleIcon className="w-4 h-4 text-green-500" /> Estate generator diesel supply</li>
                    <li className="flex items-center gap-2"><CheckCircleIcon className="w-4 h-4 text-green-500" /> Community power grid fueling</li>
                    <li className="flex items-center gap-2"><CheckCircleIcon className="w-4 h-4 text-green-500" /> Private property storage refills</li>
                    <li className="flex items-center gap-2"><CheckCircleIcon className="w-4 h-4 text-green-500" /> Weekend/holiday delivery available</li>
                  </ul>
                </div>
                
                <div className="p-4 bg-slate-900/50 rounded-xl border border-slate-800">
                  <div className="flex items-center gap-3 mb-3">
                    <TruckIcon className="w-6 h-6 text-amber-500" />
                    <h3 className="text-white font-bold">Corporate & Business Supply</h3>
                  </div>
                  <ul className="text-slate-400 text-sm space-y-2">
                    <li className="flex items-center gap-2"><CheckCircleIcon className="w-4 h-4 text-green-500" /> Commercial complexes & offices</li>
                    <li className="flex items-center gap-2"><CheckCircleIcon className="w-4 h-4 text-green-500" /> Banks & data centers (high-spec AGO)</li>
                    <li className="flex items-center gap-2"><CheckCircleIcon className="w-4 h-4 text-green-500" /> Manufacturing & industrial plants</li>
                    <li className="flex items-center gap-2"><CheckCircleIcon className="w-4 h-4 text-green-500" /> Hospitals & institutions</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="relative rounded-3xl overflow-hidden bg-slate-900">
              <div className="aspect-[4/3] bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
                <div className="text-center p-8">
                  <TruckIcon className="w-24 h-24 text-amber-500/30 mx-auto mb-4" />
                  <p className="text-amber-400 text-lg font-semibold">Lagos Distribution Network</p>
                  <p className="text-slate-500 mt-2">Apapa • VI • Lekki Hubs</p>
                  <div className="mt-6 grid grid-cols-3 gap-4 text-center">
                    <div className="p-3 bg-slate-800 rounded-xl">
                      <p className="text-2xl font-black text-amber-400">33K+</p>
                      <p className="text-xs text-slate-500">Litres Per Tanker</p>
                    </div>
                    <div className="p-3 bg-slate-800 rounded-xl">
                      <p className="text-2xl font-black text-amber-400">24/7</p>
                      <p className="text-xs text-slate-500">Dispatch Operations</p>
                    </div>
                    <div className="p-3 bg-slate-800 rounded-xl">
                      <p className="text-2xl font-black text-amber-400">3</p>
                      <p className="text-xs text-slate-500">Strategic Hubs</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-amber-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 mb-6">
            Partner with Lagos' Most Reliable Energy Supplier
          </h2>
          <p className="text-slate-900/80 text-lg max-w-2xl mx-auto mb-8">
            Join hundreds of satisfied residential estates, corporate offices, and industrial facilities who trust SUN LITE LTD for their energy needs.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-slate-950 hover:bg-slate-900 text-amber-500 font-black text-base tracking-wide shadow-lg transition-all">
              Get in Touch
            </a>
            <a href="/request-supply" className="inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-slate-950 hover:bg-slate-950 hover:text-amber-500 text-slate-950 font-bold text-base tracking-wide transition-all">
              Request Supply
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};