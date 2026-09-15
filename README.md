# SUN LITE LTD — Complete Project Structure

> **Energy Supply, Built Around Reliability**

This directory represents the **reorganized SUN LITE LTD digital platform** with a clean, production-ready architecture that follows modern frontend development best practices.

## 📁 Project Structure Overview

```
SUN LITE LTD Digital Platform
├── docs/                          # Documentation & Architecture
│   ├── architecture.md           # Technical architecture decisions
│   ├── design-tokens.md          # Design system documentation
│   └── deployment.md             # Production deployment guides
│
├── scripts/                       # Build & Automation tools
│   ├── build-optimized.js        # Production build script
│   ├── validate-tokens.js        # Design token validation
│   └── image-optimizer.js        # Image optimization pipeline
│
├── public/                        # Static assets
│   ├── index.html                # Root HTML template
│   └── assets/                   # Fallback images, icons, etc.
│
├── src/                           # Application source code
│   ├── components/               # All UI components (17 total)
│   │   ├── 01-header.tsx         # Fixed navigation bar
│   │   ├── 02-hero.tsx           # Editorial hero section
│   │   ├── 03-about-section.tsx  # Company narrative
│   │   ├── 04-trust-bar.tsx       # Credibility strip
│   │   ├── 05-network-stats.tsx   # Map visualization
│   │   ├── 06-products-section.tsx # Product showcase
│   │   ├── 07-marine-section.tsx # Marine division
│   │   ├── 08-services-section.tsx # Service capabilities
│   │   ├── 09-coverage-matrix.tsx # Client sectors
│   │   ├── 10-operational-hubs.tsx # Lagos locations
│   │   ├── 11-compliance-section.tsx # 4 verification modules
│   │   ├── 12-leadership-csr.tsx # Executive message
│   │   ├── 13-faq-section.tsx     # Searchable questions
│   │   ├── 14-request-supply.tsx # Step-by-step flow
│   │   ├── 15-supply-modal.tsx    # Quick requisition modal
│   │   ├── 16-footer.tsx          # Corporate footer
│   │   └── 17-sunlite-logo.tsx    # Branded identity
│   │
│   ├── data/                     # Application data & configuration
│   │   ├── company-data.ts        # Business info, compliance
│   │   ├── assets.ts             # Image references
│   │   └── contact-info.ts        # Communication channels
│   │
│   ├── design-system.css         # Complete design tokens + utilities
│   ├── main.tsx                  # React entry point
│   ├── app.tsx                   # Main application component
│   └── types.ts                   # TypeScript definitions
│
├── assets/                        # Generated photography (source of truth)
│   ├── images/                   # High-resolution photography
│   │   ├── refinery-hero-dusk-1789390838980.jpg
│   │   ├── sunlite-tanker-truck-1789390856974.jpg
│   │   ├── white-storage-tanks-1789390894565.jpg
│   │   ├── pipeline-manifold-depot-1789390911610.jpg
│   │   └── marine-bunkering-port-1789390928303.jpg
│   └── svgs/                     # Icon library
│       └── heroicons/            # All Heroicons variants
│
├── package.json                  # Project dependencies & scripts
├── vite.config.ts                 # Vite build configuration
├── tsconfig.json                  # TypeScript configuration
├── .env.example                   # Environment variables template
├── .gitignore                     # Git ignore patterns
├── README.md                      # Project documentation
├── technical.md                   # Technical architecture
└── design-upgrade.md             # Design specifications
```

## 🏗️ Architecture Philosophy

### 1. Component-First Design
- **Sequential numbering** for predictable import order
- **Single responsibility** principle for each component
- **Consistent prop patterns** across all components
- **TypeScript-first** development

### 2. Design System Integration
- **CSS Custom Properties** for all design tokens
- **Utility-first** styling with Tailwind
- **Component variants** and state management
- **Theme support** (light/dark modes ready)

### 3. Performance Optimization
- **Code splitting** with dynamic imports
- **Image optimization** (WebP/AVIF)
- **Tree shaking** for bundle reduction
- **Lazy loading** for non-critical components

### 4. Accessibility Compliance
- **WCAG 2.2 AA** full compliance
- **ARIA labels** for all interactive elements
- **Keyboard navigation** support
- **Screen reader** compatibility

## 📂 Directory Contents

### `docs/` — Architecture & Documentation

**Purpose:** Maintain comprehensive technical documentation for developers, stakeholders, and future maintenance.

**Files:**
- `architecture.md` - Technical architecture decisions and patterns
- `design-tokens.md` - Complete design system documentation
- `deployment.md` - Production deployment procedures

**Why here:** Documentation belongs in a dedicated `docs/` directory for easy access and version control.

### `scripts/` — Build & Automation

**Purpose:** Automated build processes, validation, and optimization tools.

**Files:**
- `build-optimized.js` - Production build with optimizations
- `validate-tokens.js` - Design token compliance validation
- `image-optimizer.js` - Image processing pipeline

**Why here:** Build tools live in a dedicated `scripts/` directory for easy automation and CI/CD integration.

### `public/` — Static Assets

**Purpose:** Fallback assets, HTML templates, and static files.

**Subdirectories:**
- `assets/` - Fallback images, icons, and other static assets
- `index.html` - Root HTML template (extends base for components)

**Why here:** Static web assets belong in `public/` for optimal Vite handling and build optimization.

### `src/components/` — UI Components

**Purpose:** Complete component library with predictable naming and organization.

**Component Naming Convention:**
- **Numbered prefixes** (01-17) for import order
- **Descriptive names** for maintainability
- **Clear purpose** indicators

**Example:** `02-hero.tsx` is imported before `03-about-section.tsx`

**Why this structure:** Predictable ordering prevents circular dependencies and improves maintainability.

### `src/data/` — Application Data

**Purpose:** Centralized data management for the entire application.

**Files:**
- `company-data.ts` - Business information, compliance, certifications
- `assets.ts` - All image references and asset mapping
- `contact-info.ts` - Communication channels and contact methods

**Why here:** Data belongs near components that consume it for better code organization.

### `src/design-system.css` — Design System

**Purpose:** Complete design token system, component styles, and utility classes.

**Includes:**
- **CSS Custom Properties** for all design tokens
- **Component base styles** with variants
- **Utility classes** for layout and spacing
- **Animation definitions** and keyframe animations

**Why here:** Design system is a core foundation that all components depend on.

### `src/assets/images/` — Generated Photography

**Purpose:** High-quality photography that serves as the visual foundation.

**Image Files (Source of Truth):**
- `refinery-hero-dusk-1789390838980.jpg` - Hero background
- `sunlite-tanker-truck-1789390856974.jpg` - Product showcase
- `white-storage-tanks-1789390894565.jpg` - Storage facilities
- `pipeline-manifold-depot-1789390911610.jpg` - Infrastructure
- `marine-bunkering-port-1789390928303.jpg` - Marine operations

**Why here:** Photography sources belong near where they're used (components) and in a dedicated assets directory for version control.

## 🔧 Development Workflow

### Local Development
```bash
# Install dependencies
npm install  # or pnpm install

# Start development server with HMR
npm run dev
# Opens http://localhost:3000

# Build for production
npm run build

# Preview production build
npm run preview

# Type checking
npm run lint
```

### Build Process
1. **TypeScript compilation** with strict mode
2. **Vite bundling** with optimized dependencies
3. **Tailwind CSS** generation
4. **Design token validation**
5. **Image optimization**
6. **Bundle analysis**
7. **Lighthouse CI integration**

### Testing Strategy
- **Unit Tests** (future): Component testing with Vitest
- **Visual Tests**: Storybook for component variants
- **Accessibility Tests**: Automated WCAG validation
- **Performance Tests**: Lighthouse CI pipeline
- **E2E Tests**: Cypress for user flows

## 🚀 Deployment Strategy

### Vercel (Recommended)
```bash
# Deploy from GitHub Actions
vercel --prod

# Environment variables
VITE_API_URL=https://api.sunlite-energy.com
VITE_EMAIL_SERVICE=resend
VITE_ANALYTICS_ID=G-A123456789
```

### Docker Deployment
```bash
# Build Docker image
docker build -t sunlite-energy .

# Run container
docker run -p 3000:3000 sunlite-energy
```

### GitHub Actions CI/CD
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

## 📊 Performance Targets

### Core Web Vitals
- **LCP:** <2.5s (Largest Contentful Paint)
- **FID:** <100ms (First Input Delay)
- **CLS:** <0.1 (Cumulative Layout Shift)
- **FCP:** <1.8s (First Contentful Paint)
- **TTFB:** <0.8s (Time to First Byte)

### Lighthouse Scores (Target)
- Performance: 90+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 95+
- PWA: 80+

### Mobile Performance
- **3G Loading:** <5s
- **Touch Targets:** 44×44pt minimum
- **No Horizontal Scroll:** Mobile optimized
- **Layout Stability:** <0.1 CLS

## ♿ Accessibility Implementation

### WCAG 2.2 AA Compliance Checklist
- [ ] **Keyboard Navigation** - Full keyboard access
- [ ] **Screen Readers** - Semantic HTML + ARIA labels
- [ ] **Color Contrast** - 4.5:1 for normal text
- [ ] **Focus Management** - Visible focus indicators
- [ ] **Touch Targets** - Minimum 44×44pt
- [ ] **Reduced Motion** - Respects user preferences
- [ ] **Screen Reader Support** - Semantic structure

### Component Accessibility Standards
```typescript
// Component accessibility interface
interface AccessibleComponent {
  // ARIA labels for screen readers
  'aria-label'?: string;
  'aria-describedby'?: string;
  'role'?: string;
  
  // Keyboard navigation support
  tabIndex?: number;
  onKeyDown?: (event: KeyboardEvent) => void;
  
  // Focus management
  focusRef?: React.RefObject<HTMLElement>;
  
  // Screen reader announcements
  'aria-live'?: 'polite' | 'assertive';
}
```

## 🔐 Security Implementation

### Client-Side Security
- **Input Validation** - Real-time validation with Zod
- **CSRF Protection** - Form submission security
- **Content Security Policy** - XSS prevention
- **HTTPS Enforcement** - Secure connections only

### Server-Side Security (Future)
- **Rate Limiting** - Request throttling
- **Input Sanitization** - Data cleaning
- **Authentication** - User verification
- **Authorization** - Access control

## 📈 Analytics & Monitoring

### User Analytics
- **Page Views** - User journey tracking
- **Conversion Funnels** - Lead generation monitoring
- **Component Interactions** - Feature usage analysis
- **Device Statistics** - Platform performance

### Performance Monitoring
- **Core Web Vitals** - Real-time metrics
- **Bundle Size** - Bundle analysis
- **Loading Performance** - Speed monitoring
- **Error Tracking** - Issue reporting

### A/B Testing Framework
- **Hero Testing** - Headline variations
- **CTA Testing** - Button text optimization
- **Layout Testing** - Component variations
- **Color Testing** - Theme comparisons

## 🏗️ Code Quality Standards

### ESLint Configuration
```json
{
  "extends": ["eslint:recommended", "plugin:react/recommended"],
  "plugins": ["react", "react-hooks"],
  "rules": {
    "react-hooks/exhaustive-deps": "error",
    "react-hooks/rules-of-hooks": "error",
    "no-console": ["warn", { "allow": ["error"] }]
  }
}
```

### Prettier Formatting
```json
{
  "semi": true,
  "singleQuote": true,
  "trailingComma": "es5",
  "arrowParens": "avoid"
}
```

### TypeScript Strict Mode
```json
{
  "compilerOptions": {
    "strict": true,
    "noImplicitAny": true,
    "noUncheckedIndexedAccess": true,
    "exactOptionalPropertyTypes": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true
  }
}
```

## 📋 Quality Assurance

### Pre-Commit Hooks
```bash
# Install lint-staged
npm install lint-staged husky

# Configure Husky
npx husky install
npx husky add .husky/pre-commit "npm run lint"

# Install lint-staged
npm install lint-staged
npx husky set .husky/pre-commit "npx lint-staged"

# Configure lint-staged
lint-staged:
  "src/**/*.tsx": ["eslint --fix", "git add"]
  "src/**/*.ts": ["eslint --fix", "git add"]
```

### CI/CD Pipeline
```yaml
# .github/workflows/quality-check.yml
name: Quality Check

on:
  pull_request:
    branches: [main]

jobs:
  quality:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run lint
      - run: npm test
```

## 🔄 Internationalization (Future)

### Language Support Architecture
```typescript
// i18n configuration interface
interface TranslationKey {
  en: string;
  es?: string;
  fr?: string;
  pt?: string;
  // ... other languages
}

export const TRANSLATIONS = {
  'hero.title': {
    en: 'Delivering Energy. Building Trust.',
    es: 'Entregando Energía. Construyendo Confianza.',
    fr: 'Livrant de l\'Énergie. Bâtissant de la Confiance.',
    pt: 'Entregando Energia. Construindo Confiança.'
  },
  // ... more translations
}
```

### Date & Number Localization
- **Dates:** `new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })`
- **Numbers:** `quantity.toLocaleString()` for thousands separators
- **Currency:** Nigerian Naira formatting
- **Time:** Lagos timezone (UTC+1)

## 🚀 Future Roadmap

### Phase 1 (Current)
✅ Premium design system implementation
✅ All 17 components developed
✅ Production architecture established
✅ Documentation complete

### Phase 2 (Next 6 Months)
🔄 Backend API development
🔄 Advanced form workflows
🔄 Real-time chat support
🔄 Customer portal

### Phase 3 (12 Months)
🔄 Mobile app development
🔄 Advanced analytics dashboard
🔄 Multi-language support
🔄 AI-powered recommendations

## 📚 Learning Resources

### Documentation Links
- **Vite Docs:** https://vite.dev/guide/
- **React:** https://react.dev/learn
- **TypeScript:** https://www.typescriptlang.org/docs/
- **Tailwind CSS:** https://tailwindcss.com/docs
- **Heroicons:** https://heroicons.com/
- **Framer Motion:** https://www.framer.com/motion/

### Best Practices Articles
- [Performance Budgeting](https://web.dev/performance-budgets/)
- [Accessibility in React](https://reactjs.org/docs/accessibility.html)
- [SEO Best Practices](https://developers.google.com/search/docs/fundamentals/seo-starter)
- [Mobile-First Design](https://web.dev/responsive-web-design-basics/)

### Community Resources
- **GitHub Discussions:** Share experiences and get help
- **Stack Overflow:** Component questions and solutions
- **Discord Communities:** Real-time development support
- **Dev.to Blog:** Technical articles and tutorials

## 🏆 Success Metrics

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

---

**Built with ❤️ using Apple-standard design principles and React modern stack**
**© 2024 SUN LITE LTD | Energy Supply, Built Around Reliability**

This restructured codebase provides a solid foundation for the SUN LITE LTD digital platform with:
- Clear directory organization
- Production-ready architecture
- Comprehensive documentation
- Future scalability
- Quality assurance standards

The new structure ensures maintainability, performance, and ease of deployment while following modern frontend development best practices.
