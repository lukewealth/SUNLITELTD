export type InquiryType = 'contact' | 'supply';

export interface InquiryPayload {
  type: InquiryType;
  name: string;
  email: string;
  phone: string;
  company?: string;
  product?: string;
  quantity?: number;
  destination?: string;
  facilityType?: string;
  deliveryDate?: string;
  vesselName?: string;
  berthLocation?: string;
  notes?: string;
  message?: string;
}

export interface SubmitResult {
  ok: boolean;
  message: string;
  id?: string;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^[\d\s+\-().]{7,20}$/;

export function validateInquiryClient(p: InquiryPayload): string | null {
  if (!p.name?.trim() || p.name.trim().length < 2) return 'Please enter your full name.';
  if (!p.email?.trim() || !EMAIL_RE.test(p.email.trim())) return 'Please enter a valid email address.';
  if (!p.phone?.trim() || !PHONE_RE.test(p.phone.trim())) return 'Please enter a valid phone number.';
  if (p.type === 'supply') {
    if (!p.product) return 'Please select a product.';
    if (p.quantity == null || Number(p.quantity) < 200) return 'Minimum volume is 200 litres.';
  }
  return null;
}

export async function submitInquiry(payload: InquiryPayload): Promise<SubmitResult> {
  const clientError = validateInquiryClient(payload);
  if (clientError) {
    return { ok: false, message: clientError };
  }

  try {
    const res = await fetch('/api/send-inquiry', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...payload,
        name: payload.name.trim(),
        email: payload.email.trim(),
        phone: payload.phone.trim(),
      }),
    });

    const data = await res.json().catch(() => ({}));
    if (!res.ok) {
      return {
        ok: false,
        message: data.error || 'Submission failed. Please try again or call 09134449634.',
      };
    }

    return {
      ok: true,
      message: data.message || 'Submitted successfully.',
      id: data.id,
    };
  } catch {
    return {
      ok: false,
      message: 'Network error. Please check your connection or call 09134449634.',
    };
  }
}
