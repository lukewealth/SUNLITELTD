import type { VercelRequest, VercelResponse } from '@vercel/node';

type InquiryType = 'contact' | 'supply';

interface InquiryPayload {
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

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^[\d\s+\-().]{7,20}$/;

function validate(body: InquiryPayload): string | null {
  if (!body || typeof body !== 'object') return 'Invalid request body';
  if (!body.type || !['contact', 'supply'].includes(body.type)) return 'Invalid inquiry type';
  if (!body.name || typeof body.name !== 'string' || body.name.trim().length < 2)
    return 'Name is required (min 2 characters)';
  if (!body.email || !EMAIL_RE.test(body.email.trim())) return 'Valid email is required';
  if (!body.phone || !PHONE_RE.test(body.phone.trim())) return 'Valid phone number is required';
  if (body.type === 'supply') {
    if (!body.product) return 'Product is required for supply requests';
    if (body.quantity == null || Number(body.quantity) < 200)
      return 'Quantity must be at least 200 litres';
  }
  if (body.type === 'contact' && body.message && body.message.length > 5000)
    return 'Message is too long';
  return null;
}

function buildEmailHtml(p: InquiryPayload): string {
  const rows: [string, string][] = [
    ['Type', p.type === 'supply' ? 'Supply Requisition' : 'Contact Inquiry'],
    ['Name', p.name],
    ['Email', p.email],
    ['Phone', p.phone],
  ];
  if (p.company) rows.push(['Company', p.company]);
  if (p.product) rows.push(['Product', p.product]);
  if (p.quantity != null) rows.push(['Quantity (L)', String(p.quantity)]);
  if (p.destination) rows.push(['Destination', p.destination]);
  if (p.facilityType) rows.push(['Facility / Vessel', p.facilityType]);
  if (p.deliveryDate) rows.push(['Delivery Date', p.deliveryDate]);
  if (p.vesselName) rows.push(['Vessel', p.vesselName]);
  if (p.berthLocation) rows.push(['Berth / Anchorage', p.berthLocation]);
  if (p.message) rows.push(['Message', p.message]);
  if (p.notes) rows.push(['Notes', p.notes]);

  const trs = rows
    .map(
      ([k, v]) =>
        `<tr><td style="padding:8px 12px;border-bottom:1px solid #e2e8f0;font-weight:600;color:#0f172a;width:160px">${k}</td><td style="padding:8px 12px;border-bottom:1px solid #e2e8f0;color:#334155">${String(v).replace(/</g, '&lt;')}</td></tr>`
    )
    .join('');

  return `
  <div style="font-family:system-ui,sans-serif;max-width:600px;margin:0 auto">
    <div style="background:#0f172a;color:#f3b51b;padding:20px 24px;border-radius:12px 12px 0 0">
      <h1 style="margin:0;font-size:18px">SUN LITE LTD — New ${p.type === 'supply' ? 'Supply Request' : 'Contact Message'}</h1>
    </div>
    <table style="width:100%;border-collapse:collapse;background:#fff;border:1px solid #e2e8f0;border-top:0;border-radius:0 0 12px 12px">${trs}</table>
    <p style="color:#64748b;font-size:12px;margin-top:16px">Submitted via sunliteltd website · ${new Date().toISOString()}</p>
  </div>`;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method === 'OPTIONS') {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const body = req.body as InquiryPayload;
  const error = validate(body);
  if (error) {
    return res.status(400).json({ error });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error('RESEND_API_KEY is not configured');
    return res.status(500).json({ error: 'Email service is not configured. Please call or WhatsApp us directly.' });
  }

  const toEmail = process.env.INQUIRY_TO_EMAIL || 'Sunlight19126@gmail.com';
  const fromEmail = process.env.INQUIRY_FROM_EMAIL || 'SUN LITE LTD <onboarding@resend.dev>';

  const subject =
    body.type === 'supply'
      ? `Supply Request — ${body.product} · ${body.name}`
      : `Contact Inquiry — ${body.name}`;

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [toEmail],
        reply_to: body.email,
        subject,
        html: buildEmailHtml(body),
      }),
    });

    const data = await response.json();
    if (!response.ok) {
      console.error('Resend error:', data);
      return res.status(502).json({ error: 'Failed to send email. Please try again or call dispatch.' });
    }

    return res.status(200).json({
      success: true,
      id: data.id,
      message: 'Inquiry submitted successfully. Our Lagos team will respond shortly.',
    });
  } catch (err) {
    console.error('Send inquiry error:', err);
    return res.status(500).json({ error: 'Unexpected server error. Please try again later.' });
  }
}
