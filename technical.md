# SUN LITE LTD — Agent & Technical Architecture

> **Energy Supply, Built Around Reliability**

This document provides the complete architecture, design DNA, and technical specifications for the SUN LITE LTD digital platform. It serves as the single source of truth for developers, designers, and stakeholders implementing the premium petroleum supply company website.

## 🎯 Executive Summary

The SUN LITE LTD digital platform transforms a conventional petroleum products supply company into a premium, globally credible corporate website that emphasizes reliability, operational confidence, and customer trust through Apple-standard design and modern web technology.

**Core Business Value Proposition:**
- **Reliable petroleum products supply** for businesses, institutions, fuel stations, and marine operations across Lagos, Nigeria
- **Premium digital experience** that positions the company as a global-ready energy supply partner
- **Conversion-focused platform** that generates qualified supply inquiries
- **Industrial authenticity** through curated photography and technical specifications

## 🏗️ Agent Overview (Website Design DNA)

### Agent Purpose & Philosophy

The SUN LITE LTD Agent is a comprehensive design and development system that creates a premium digital experience for the petroleum products supply industry. It combines industrial visual authority with Apple-level simplicity to deliver a platform that communicates reliability, professionalism, and operational excellence.

### Design Philosophy

**Three Core Pillars:**

1. **Clarity & Simplicity** - Every element serves a purpose; no decorative excess
2. **Visual Hierarchy** - Strong information architecture with clear content flow
3. **Premium Fidelity** - High-quality design, photography, and technical implementation

### Visual Identity System

#### Brand Positioning
- **Target:** Global-ready energy supply company
- **Heritage:** Lagos, Nigeria-based operations
- **Differentiator:** Diesel + Delivery + Marine Supply + Customer Trust
- **Voice:** Calm confidence, professional precision, operational excellence

#### Color System (Design Tokens)
```css
--color-navy: #07141d;        /* Headers, dark sections, footer */
--color-navy-2: #0d2430;      /* Secondary dark surfaces, cards */
--color-gold: #f3b51b;        /* CTAs, highlights, emphasis */
--color-gold-2: #ffd76a;      /* Hover states, accents */
--color-white: #ffffff;       /* Primary content surface */
--color-muted: #b8c7ce;       /* Secondary body text */
--color-line: rgba(255,255,255,.12); /* borders, dividers */
--color-card: rgba(255,255,255,.065); /* card backgrounds */
```

#### Typography System
- **Primary Font:** Inter, SF Pro Display, Apple SD Gothic Neo
- **Monospace:** SF Mono, Monaco, Cascadia Code
- **Hierarchy:** 6-level scale with semantic meaning
- **Web Fonts:** System font fallbacks for performance

#### Icon System
- **Primary:** Heroicons (outline, accessible SVG)
- **Size Scale:** 16px navigation, 24px buttons, 32-48px features
- **Style:** Single icon family, consistent stroke weight

### Component Architecture

#### 17 Core Components

| Component | Purpose | Design Pattern |
|-----------|---------|----------------|
| **Hero** | Editorial hero with industrial photography | Full-screen cinematic |
| **TrustBar** | Credibility strip with certifications | Apple-style cards |
| **AboutSection** | Company narrative & proof points | Split layout |
| **NetworkStatsSection** | Lagos operational grid | Map visualization |
| **ProductsSection** | 3-product showcase | Tab-based selection |
| **MarineSection** | Specialized marine division | Visual card system |
| **ServicesSection** | 6 operational capabilities | Bento grid layout |
| **CoverageMatrix** | Client sector visualization | Grid with icons |
| **OperationalHubs** | 3 Lagos locations | Apple-style white cards |
| **ComplianceSection** | 4 verification modules | Grid layout |
| **LeadershipAndCSR** | Executive message | Split narrative |
| **FAQSection** | Searchable questions | Accordion style |
| **RequestSupplySection** | Step-by-step form | Progressive disclosure |
| **SupplyModal** | Quick requisition modal | Floating action |
| **Footer** | Corporate details | Apple-style footer |
| **Header** | Navigation | Adaptive behavior |
| **SunliteLogo** | Branded identity | SVG emblem |

### Animation & Interaction Patterns

#### Micro-interactions
- **Duration:** 150-300ms (buttons, cards)
- **Easing:** cubic-bezier(0.22, 1, 0.36, 1)
- **Spring Physics:** Natural feel for list items
- **Exit Animation:** Faster than entrance (60-70% duration)

#### Scroll Effects
- **IntersectionObserver:** Section reveals
- **Parallax:** Limited, performance-optimized
- **Staggered Animations:** 30-50ms intervals
- **Reduced Motion:** Respects user preferences

### Accessibility Compliance (WCAG 2.2 AA)

- **Keyboard Navigation:** Full keyboard access
- **Screen Readers:** Semantic HTML + ARIA labels
- **Color Contrast:** 4.5:1 for normal text
- **Touch Targets:** Minimum 44×44pt
- **Focus Management:** Visible focus indicators
- **Reduced Motion:** respects preferences
- **Screen Reader Support:** semantic structure
- **Text Scaling:** System text scaling supported

### Performance Targets

#### Core Web Vitals
- **LCP:** <2.5s (Largest Contentful Paint)
- **FID:** <100ms (First Input Delay)
- **CLS:** <0.1 (Cumulative Layout Shift)
- **FCP:** <1.8s (First Contentful Paint)
- **TTFB:** <0.8s (Time to First Byte)

#### Lighthouse Scores (Target)
- Performance: 90+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 95+
- PWA: 80+

#### Mobile Performance
- **3G Loading:** <5s
- **Touch Targets:** 44×44pt minimum
- **No Horizontal Scroll:** Mobile optimized
- **Layout Stability:** <0.1 CLS

### Mobile-First Responsive Strategy

#### Breakpoint Architecture
```css
- mobile: < 375px (iPhone SE, small phones)
- tablet: 376-768px (iPad mini, tablets)
- laptop: 769-1024 px (small laptops)
- desktop: 1025-1440 px (standard monitors)
- wide: 1441+ px (large displays)
```

#### Component Behavior
- **Hero:** Large typography, full-width content
- **Cards:** Single column stacking
- **Grid Systems:** Flexible 1-4 column layouts
- **Navigation:** Adaptive menu behavior

### Content Strategy

#### Editorial Approach
- **Hero:** Premium photography with dark overlays
- **About:** Technical specs with visual hierarchy
- **Products:** Technical laboratory specifications
- **Marine:** Specialized division with protocols
- **Services:** Clean icon-based grid
- **Compliance:** Verified evidence and credentials

#### Conversion Optimization
- **Primary CTA:** "Request Supply"
- **Secondary CTA:** "Explore Products"
- **Marine CTA:** "Discuss Marine Supply"
- **Form Flow:** 4-step progressive disclosure
- **Instant Actions:** WhatsApp, phone, email

### Data Architecture

#### Company Data (`src/data/companyData.ts`)
```typescript
export const COMPANY_INFO = {
  name: 'SUN LITE LTD',
  legalName: 'SUN LITE LTD',
  slogan: 'Delivering Energy. Building Trust.',
  tagline: 'Reliable petroleum products supply for commercial, institutional, retail, and marine operations across Lagos, Nigeria.',
  rcNumber: 'RC 9561194',
  tinNumber: '2622496356436',
  // ... more fields
}
```

#### Product Specifications
- **Diesel (AGO):** ASTM D975, 0.820-0.855 g/cm³, Min 60°C flash point
- **Fuel (PMS):** ASTM D4814, Min 90 RON, 0.720-0.775 g/cm³
- **Kerosene (DPK):** ASTM D3699, 0.780-0.820 g/cm³, Min 38°C flash point

#### Asset Management (`src/data/assets.ts`)
- **Hero Background:** Refinery photography
- **Product Images:** Storage tanks, tanker trucks, marine vessels
- **Icons:** Heroicons (outline style)
- **Fallback Images:** Unsplash stock photos

## 🏗️ Technical Architecture (Full-Stack)

### Technology Stack

#### Frontend
```javascript
{
  "dependencies": {
    "@heroicons/react": "^2.2.0",
    "@tailwindcss/vite": "^4.1.14",
    "@vitejs/plugin-react": "^5.0.4",
    "framer-motion": "^12.23.24",
    "react": "^19.0.1",
    "react-dom": "^19.0.1",
    "vite": "^6.2.3"
  },
  "devDependencies": {
    "autoprefixer": "^10.4.21",
    "tailwindcss": "^4.1.14",
    "typescript": "~5.8.2",
    "tsx": "^4.21.0",
    "vite": "^6.2.3"
  }
}
```

#### Backend (Future Implementation)
```javascript
{
  "scripts": {
    "server": "node server.js",
    "api": "json-server db.json"
  },
  "dependencies": {
    "express": "^4.21.2",
    "cors": "^2.8.5",
    "helmet": "^7.0.0",
    "rate-limit": "^5.7.0"
  }
}
```

#### DevOps
- **Build Tool:** Vite with Turbopack
- **Package Manager:** npm (or pnpm)
- **CI/CD:** GitHub Actions
- **Deployment:** Vercel (edge functions)
- **Monitoring:** Lighthouse CI, Google Analytics

### Project Structure

```
/
├── src/
│   ├── assets/                    # Generated photography (source of truth)
│   │   ├── images/               # Refinery, tanker, marine
│   │   └── svgs/                 # Icon library
│   ├── components/               # 17 UI components
│   │   ├── Header.tsx           # Navigation
│   │   ├── Hero.tsx             # Editorial hero
│   │   ├── AboutSection.tsx      # Company narrative
│   │   ├── ... (14 more)         # Full component list
│   │
│   ├── data/                     # Application data
│   │   ├── companyData.ts        # Business info
│   │   ├── assets.ts             # Image references
│   │   └── contactInfo.ts        # Contact channels
│   │
│   ├── design-system.css        # Design tokens + utilities
│   ├── main.tsx                 # Root entry point
│   └── App.tsx                   # Main application
│
├── scripts/                      # Build tools
│   ├── build-optimized.js       # Production build
│   ├── validate-tokens.js        # Token validation
│   └── image-optimizer.js        # Image processing
│
├── public/                       # Static assets
│   ├── index.html
│   └── assets/                  # Fallback images
│
├── package.json
├── vite.config.ts
├── tsconfig.json
└── README.md
```

### Build Pipeline

#### Development Environment
```bash
# Install dependencies
npm install  # or pnpm install

# Start development server
npm run dev  # http://localhost:3000

# Features:
- Hot Module Replacement (HMR)
- Tailwind CSS generation
- TypeScript checking
- ESLint integration
```

#### Production Build
```bash
# Build for production
npm run build

# Optimize for production
npx vite build --mode production

# Validation
npm run lint
npm run type-check
```

#### Deployment
```bash
# Vercel deployment
vercel --prod

# Docker deployment
docker build -t sunlite-energy .
docker run -p 3000:3000 sunlite-energy
```

### Component Implementation Standards

#### TypeScript Integration
```typescript
// Component interface pattern
interface ComponentProps {
  // Required properties
  // Optional properties with defaults
  // Event handlers
}

// Type definitions
export type ProductCategory = 'Diesel (AGO)' | 'Fuel (PMS)' | 'Kerosene (DPK)' | 'Marine Diesel (Bunkering)'
```

#### Design System Integration
```css
/* Use design tokens */
.btn {
  background: var(--color-primary);
  color: var(--color-navy);
  border-radius: var(--radius-full);
  padding: var(--space-3) var(--space-5);
  transition: all var(--duration-fast) var(--easing-default);
}

.btn:hover {
  transform: translateY(-1px);
  box-shadow: var(--shadow-lg);
}
```

### Performance Optimization

#### Image Strategy
- **Format:** WebP/AVIF
- **Loading:** Lazy loading below the fold
- **Sizing:** Responsive srcset sets
- **Optimization:** Image compression

#### Bundle Optimization
- **Code Splitting:** Route-based loading
- **Tree Shaking:** Unused imports removed
- **Bundle Analyzer:** Size monitoring
- **Cache Strategy:** HTTP caching headers

#### Critical Rendering
- **Inline CSS:** Critical path styles
- **Preload:** Hero images, fonts
- **Defer:** Non-critical scripts
- **Async:** External libraries

### Security Implementation

#### Client-Side
- **Input Validation:** Real-time validation
- **CSRF Protection:** Form submission security
- **Content Security Policy:** XSS prevention
- **HTTPS:** Secure connections everywhere

#### Server-Side (Future)
- **Rate Limiting:** Request throttling
- **Input Sanitization:** Data cleaning
- **Authentication:** User verification
- **Authorization:** Access control

### Analytics & Monitoring

#### User Analytics
- **Page Views:** User journey tracking
- **Conversion Funnels:** Lead generation monitoring
- **Component Interactions:** Feature usage analysis
- **Device Statistics:** Platform performance

#### Performance Monitoring
- **Core Web Vitals:** Real-time metrics
- **Bundle Size:** Bundle analysis
- **Loading Performance:** Speed monitoring
- **Error Tracking:** Issue reporting

#### A/B Testing Framework
- **Hero Testing:** Headline variations
- **CTA Testing:** Button text optimization
- **Layout Testing:** Component variations
- **Color Testing:** Theme comparisons

### Accessibility Implementation

#### ARIA Standards
```html
<!-- Skip navigation -->
<a href="#main" class="sr-only">Skip to main content</a>

<!-- Semantic components -->
<section aria-labelledby="company-mission">
<main id="main" role="main">
  <nav aria-label="Primary navigation">
    <ul>
      <li><a href="#about" aria-current="page">About</a></li>
    </ul>
  </nav>
</main>
</section>
```

#### Keyboard Navigation
- **Tab Order:** Logical, sequential order
- **Focus Management:** Visible focus states
- **Escape Routes:** Modal dismissal
- **Screen Reader:** ARIA labels and announcements

### Internationalization (Future)

#### Language Support
```javascript
// Current: English
export const TRANSLATIONS = {
  'en': {
    'hero.title': 'Delivering Energy. Building Trust.',
    'nav.about': 'About',
    // ... more translations
  }
}
```

#### Date & Number Formats
- **Dates:** Locale-aware formatting
- **Numbers:** Comma-separated thousands
- **Currency:** Nigerian Naira formatting
- **Time:** Lagos timezone

### Quality Assurance

#### Testing Strategy
```bash
# Linting
npm run lint
# Type checking
npm run type-check
# Unit tests
npm test
# Visual regression
npm run test:ui
```

#### Code Quality Standards
- **ESLint:** Code style enforcement
- **Prettier:** Code formatting
- **TypeScript:** Strict type checking
- **Component Docs:** Examples and usage

### Deployment Configuration

#### Environment Variables
```bash
# .env.example
VITE_API_URL=https://api.sunlite-energy.com
VITE_EMAIL_SERVICE=resend
VITE_ANALYTICS_ID=G-A123456789
VITE_MAP_API_KEY=your-map-key
```

#### Server Configuration
```javascript
// vite.config.ts
export default {
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'ui-vendor': ['@heroicons/react', 'framer-motion']
        }
      }
    }
  }
}
```

### CI/CD Pipeline

#### GitHub Actions
```yaml
# .github/workflows/deploy.yml
name: Deploy to Production

on:
  push:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm install
      - run: npm run build
      - uses: vercel/action@v1
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
```

## 📊 Success Metrics

### Business Metrics
- **Lead Generation:** Conversion rate >3%
- **Inquiry Quality:** 90% qualified leads
- **Response Time:** <24 hours to response
- **Customer Satisfaction:** Net Promoter Score >45

### Technical Metrics
- **Performance:** 90+ Lighthouse score
- **Accessibility:** 95+ Lighthouse score
- **Security:** Zero high-severity vulnerabilities
- **Uptime:** 99.9% availability target

### User Experience Metrics
- **First Load Time:** <2.5s
- **Interaction Latency:** <100ms
- **Content Engagement:** >60% scroll depth
- **Mobile Usability:** >95% on mobile devices

## 🚀 Deployment Roadmap

### Phase 1 (Current)
- ✅ Design system implementation
- ✅ All 17 components developed
- ✅ Premium visual identity
- ✅ Performance optimization
- ✅ Accessibility compliance

### Phase 2 (Next 6 Months)
- 🔄 Backend API development
- 🔄 Advanced form workflows
- 🔄 Real-time chat support
- 🔄 Customer portal

### Phase 3 (12 Months)
- 🔄 Mobile app development
- 🔄 Advanced analytics dashboard
- 🔄 Multi-language support
- 🔄 AI-powered recommendations

## 🎓 Documentation

### API Documentation
- **Component Docs:** `src/components/` - Inline documentation
- **Type Definitions:** `src/types.ts` - Full TypeScript types
- **Design Tokens:** `src/design-system.css` - CSS custom properties

### Architecture Documents
- **`Agent.md`** - This document: Design DNA, features, architecture
- **`technical.md`** - Full-stack implementation details
- **`deployment.md`** - Production deployment guides

### Operational Documentation
- **`README.md`** - Project setup and usage
- **`CHANGELOG.md`** - Version history
- **`CONTRIBUTING.md`** - Development guidelines

## 🔧 Technical Support

### Documentation
- **`README.md`** - Quick start guide
- **`Agent.md`** - Design architecture
- **`technical.md`** - Implementation details

### Getting Help
- **GitHub Issues:** Bug reports and feature requests
- **Support Tickets:** Technical assistance
- **Documentation:** Self-service knowledge base
- **Team Chat:** Real-time communication

## 🤝 Contribution Guidelines

### Development Standards
- Follow existing code patterns
- Write TypeScript for all new code
- Include unit tests for components
- Update documentation for changes
- Run linting before commits

### Code Review Process
- **Code Style:** ESLint compliance
- **Type Safety:** TypeScript checking
- **Performance:** Impact assessment
- **Accessibility:** Requirements verification
- **Documentation:** Completeness check

### Branch Strategy
- **Main:** Production ready
- **Develop:** Feature development
- **Feature/**: New features
- **Hotfix/**: Critical bug fixes

## 📜 Legal & Compliance

### Intellectual Property
- Original design system
- Component architecture
- Photography credits properly attributed
- Open source licenses documented

### Data Privacy
- GDPR compliance for forms
- Contact information handling
- Cookie policy transparency
- Privacy-first approach

### Global Compliance
- **Nigeria:** Local business registration
- **International:** Cross-border data handling
- **Industry:** Petroleum regulations
- **Web:** Accessibility standards

## 🌍 Global Ready Architecture

The website is designed for future international expansion:

```
Nigeria
├── Lagos (core operations)
├── West Africa (regional expansion)
├── Africa (continental reach)
└── International (global operations)
```

Design decisions support:
- **New Markets:** Localized content and compliance
- **International Partners:** Multilingual support
- **Global Operations:** Cross-border logistics
- **Diversity:** Inclusive user experience

## ✅ Quality Checklist

### Before Production Deployment
- [ ] All components implemented and tested
- [ ] Design tokens integrated
- [ ] Accessibility compliance verified
- [ ] Performance targets met
- [ ] SEO optimization complete
- [ ] Mobile experience validated
- [ ] Security audit completed
- [ ] Analytics setup verified
- [ ] CI/CD pipeline configured
- [ ] Documentation complete

### Daily Development Practices
- [ ] Code linting before commit
- [ ] Type checking and validation
- [ ] Performance analysis
- [ ] Accessibility testing
- [ ] Responsive design review
- [ ] Documentation updates

---

**Built with ❤️ using Apple-standard design principles and React modern stack**
**© 2024 SUN LITE LTD | Energy Supply, Built Around Reliability**

This documentation provides the complete technical and design specification for the SUN LITE LTD digital platform. For detailed implementation guidance, refer to the individual component files and the design system stylesheet.

For questions about this architecture, please contact the development team through the official support channels.

---

*Document maintained and updated by the SUN LITE LTD Digital Engineering Team*
*Last updated: September 14, 2026*
*Version: 1.0.0 - Technical Architecture*
