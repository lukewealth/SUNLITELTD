# SUN LITE LTD — Digital Platform

> **Delivering Energy. Building Trust.**

Production website for **SUN LITE LTD**, a Lagos-based petroleum products supplier specialising in Diesel (AGO), Fuel (PMS), Kerosene (DPK), and marine bunkering.

**Stack:** React 19 · TypeScript · Vite 6 · Tailwind CSS 4 · React Router 7 · Resend

---

## Project structure

```
SUNLITELTD/
├── api/
│   └── send-inquiry.ts          # Vercel serverless — form → Resend email
├── public/                      # Static assets (logo, CEO photo)
├── src/
│   ├── App.tsx                  # Router, layout, supply modal
│   ├── main.tsx
│   ├── index.css
│   ├── design-system.css
│   ├── types.ts
│   ├── lib/
│   │   └── submitInquiry.ts     # Client validation + POST /api/send-inquiry
│   ├── data/
│   │   ├── companyData.ts       # Company, products, hubs, FAQs, compliance
│   │   └── assets.ts
│   ├── components/              # Header, Hero, sections, forms, Footer
│   ├── pages/
│   │   ├── AboutPage.tsx        # CAC / TIN / compliance live here
│   │   ├── ServicesPage.tsx
│   │   ├── IndustriesPage.tsx
│   │   └── ContactPage.tsx
│   └── assets/images/
├── package.json
├── vite.config.ts
├── tsconfig.json
└── .env.example
```

## Routes

| Path | Description |
|------|-------------|
| `/` | Homepage |
| `/about` | Company profile, CEO, hubs, **CAC / TIN / compliance** |
| `/services` | Services & marine |
| `/industries` | Sectors & coverage |
| `/contact` | Contact form (email via Resend) |

## Local development

```bash
npm install
cp .env.example .env.local   # add RESEND_API_KEY
npm run dev                  # http://localhost:3000
npm run lint
npm run build
```

## Form submissions (Resend)

Contact and supply forms POST to **`/api/send-inquiry`**.

| Variable | Purpose |
|----------|---------|
| `RESEND_API_KEY` | Resend secret key |
| `INQUIRY_TO_EMAIL` | Inbox (default: Sunlight19126@gmail.com) |
| `INQUIRY_FROM_EMAIL` | Verified sender in Resend |

Set these in the Vercel project settings, then redeploy.

**Validation:** name ≥ 2 chars, valid email & phone; supply quantity ≥ 200 L.

## Design notes

- CAC / TIN appear on the **About** page only (not header/hero/footer).
- Logo wordmark uses a reduced type scale.
- Homepage H1: `text-3xl sm:text-4xl xl:text-5xl`.

## Company

SUN LITE LTD · Lagos, Nigeria · 09134449634 · Sunlight19126@gmail.com
