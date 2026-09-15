export type ProductCategory = 'Diesel (AGO)' | 'Fuel (PMS)' | 'Kerosene (DPK)' | 'Marine Diesel (Bunkering)';

export interface SupplyRequestPayload {
  id?: string;
  timestamp?: string;
  name: string;
  company: string;
  phone: string;
  email: string;
  product: ProductCategory;
  quantity: number; // in Litres
  destination: string;
  facilityType: string;
  deliveryDate?: string;
  vesselName?: string;
  berthLocation?: string;
  notes?: string;
  status?: 'Received' | 'Reviewing' | 'Quoted' | 'Scheduled' | 'Dispatched';
}

export interface ProductInfo {
  id: string;
  name: string;
  shortCode: string;
  classification: string;
  tagline: string;
  description: string;
  primaryApplication: string;
  targetClients: string[];
  specs: { label: string; value: string }[];
  accentColor: string;
  image: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  keyFeatures: string[];
  sectorTag: string;
}

export interface LocationHub {
  id: string;
  name: string;
  role: string;
  address: string;
  area: string;
  city: string;
  phone: string;
  email: string;
  hours: string;
  strategicAdvantage: string;
  badge: string;
}

export interface ComplianceItem {
  id: string;
  title: string;
  code: string;
  authority: string;
  description: string;
  highlight: string;
}

export interface FAQItem {
  question: string;
  category: 'Products' | 'Logistics' | 'Marine' | 'Commercial';
  answer: string;
}
