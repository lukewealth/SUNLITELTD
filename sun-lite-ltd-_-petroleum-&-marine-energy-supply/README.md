# SUN LITE LTD — Petroleum Products Supply Company

> **Energy Supply, Built Around Reliability**

SUN LITE LTD is a Nigerian petroleum products supply company headquartered in Lagos. We specialize in delivering premium Diesel (AGO), Fuel (PMS), and Kerosene (DPK) with a focus on dependable service, coordinated delivery, and marine diesel supply.

## Project Overview

This is a premium, Apple-standard corporate website designed to transform SUN LITE LTD from a conventional information site into a globally credible, professional energy supply platform that emphasizes reliability, operational confidence, and customer trust.

The website serves as both a commercial showcase for international B2B clients and a conversion-focused digital experience that generates qualified supply inquiries.

## 🌐 Live Demo

https://sunlite-energy.com

## 🎯 Core Business Mission

**Reliable petroleum products supply for businesses, institutions, fuel stations, and marine operations across Lagos State and Nigeria.**

The digital experience must:

- Establish corporate credibility through verified compliance and certifications
- Clearly communicate what SUN LITE LTD supplies and their differentiators
- Make Diesel the dominant product proposition
- Present Marine Diesel Supply as a specialist capability
- Generate qualified supply enquiries
- Make contacting the company effortless
- Create a premium visual identity suitable for B2B customers
- Build trust without unsupported marketing claims

## 🏗️ Architecture

### Tech Stack

**Frontend:**
- React 19 with TypeScript
- Vite (bundle analyzer, HMR)
- Tailwind CSS 4 (utility-first, design tokens)
- Heroicons (outline, accessible SVG icons)
- Framer Motion (smooth micro-interactions)
- React Hook Form + Zod (form validation)
- Intersection Observer API (scroll reveals)

**Backend (Future):**
- Node.js/Express (form processing, email services)
- PostgreSQL (enquiry database)
- Redis (caching, session management)
- AWS/Supabase (hosted services)
- Resend (email delivery)

**DevOps:**
- GitHub Actions (CI/CD)
- Vercel (deployment, edge functions)
- Turbopack (optimized bundling)
- Lighthouse CI (performance monitoring)

### Component Architecture

**Core Components (17+):**
- Hero (full-screen editorial)
- Trust Bar (certifications, credibility)
- About Section (company narrative)
- Network Stats (map visualization)
- Products Section (3-module showcase)
- Marine Section (specialized division)
- Services Section (6 capability cards)
- Coverage Matrix (client sectors)
- Operational Hubs (3 Lagos locations)
- Compliance Section (4 verification modules)
- Leadership & CSR (executive message)
- FAQ Section (searchable questions)
- Request Supply (step-by-step flow)
- Supply Modal (quick requisition)
- Footer (corporate details)
- Header (adaptive navigation)
- SunliteLogo (branded identity)

**Design System:**
- CSS Custom Properties (design tokens)
- Tailwind CSS utilities (layout, spacing, typography)
- Component variants and states
- Responsive design patterns
- Animation and micro-interaction library

### Data Architecture

**Company Data:**
- `src/data/companyData.ts` - Business info, compliance, certifications
- `src/data/assets.ts` - Generated photography (source of truth)
- `src/data/contactInfo.ts` - Communication channels

**Product Specifications:**
- ASTM/NIS standard compliance
- Density specifications (0.820–0.855 g/cm³)
- Cetane index requirements
- Storage and handling protocols

**Marine Operations:**
- Bunkering procedures and certifications
- Port berth coordinates and schedules
- Vessel types and capacities
- Environmental compliance

## 🎨 Design DNA

### Visual Philosophy

**Industrial Strength with Apple-Level Simplicity**
- Combine oil & gas visual authority with minimalist design
- Swiss-style typography with clear hierarchy
- Premium photography with cinematic quality
- Editorial layout with purposeful white space
- Smooth motion that conveys meaning
- Consistent branding across all touchpoints

### Color System

**Primary Palette:**
- `SUN LITE Midnight` (#07141d) - Headers, dark sections, footer
- `Deep Energy Blue` (#0D2430) - Secondary dark surfaces, cards
- `SUN LITE Energy Gold` (#F3B51B) - CTAs, highlights, emphasis
- `Light Gold` (#FFD76A) - Hover states, accents
- `Cloud` (#F6F8F9) - Light background surface
- `Slate` (#65757D) - Secondary text
- `White` (#FFFFFF) - Primary content surface

### Typography Hierarchy

**Desktop:**
- Hero: 72–96px, weight 600–700, tight tracking (1.02)
- H2: 48–64px
- H3: 28–32px
- Body: 16–19px, line-height 1.55–1.75
- Eyebrow: 11–13px, uppercase, 0.16em tracking

**Mobile:**
- Hero: 44–58px
- H2: 36–44px
- H3: 22–28px
- Body: 16–19px

**Fonts:**
- Primary: Inter, SF Pro Display, Apple SD Gothic Neo
- Fallback: -apple-system, BlinkMacSystemFont, "Helvetica Neue"
- Mono: SF Mono, Monaco, Cascadia Code

### Layout System

**Container:**
- Max-width: 1200–1320px
- Desktop padding: 32–48px
- Tablet padding: 24–32px
- Mobile padding: 20px

**Grid System:**
- 12-column grid for desktop
- Variable gutter spacing
- Component cards: 16–24px radius, 24–32px padding
- Vertical rhythm: 12/24/48/80/120px

### Animation System

**Micro-interactions:**
- Duration: 150–300ms (buttons, cards)
- Easing: cubic-bezier(0.22, 1, 0.36, 1)
- Spring physics for natural feel
- Exit animations faster than entrance (60–70% duration)

**Scroll Effects:**
- IntersectionObserver for section reveals
- Parallax effects with reduced-motion support
- Staggered animations for lists

## 🚀 Features

### Core Features

**1. Premium Visual Identity**
- Apple-standard design system
- Industrial photography and cinematography
- Editorial storytelling approach
- Responsive mobile-first layout

**2. Operational Credibility**
- Verified compliance badges (CAC, TIN, ASTM standards)
- 3 Lagos operational hubs with detailed maps
- Quality assurance and batch certification display
- Marine bunkering with vessel coordination

**3. Conversion Optimization**
- Multi-step request supply flow
- Instant WhatsApp dispatch capability
- Email requisition with template preparation
- Reference tracking and copy-to-clipboard

**4. Advanced UX**
- Smooth scroll navigation with hash links
- Loading states and skeleton screens
- Form validation with real-time feedback
- Mobile-first touch targets (>=44pt)

**5. Performance & Accessibility**
- Core Web Vitals optimized
- WCAG 2.2 AA compliance
- Screen reader support
- Reduced motion preferences
- Lighthouse score targets: 90+

### Marketing Features

**Trust Building:**
- Corporate certifications and regulatory compliance
- Customer case studies (implementation only)
- Industry partnerships and affiliations
- Local and international reach indicators

**Product Education:**
- Technical specifications with lab testing
- Use case examples and applications
- Compliance and safety information
- Supply capability demonstration

**Lead Generation:**
- Multi-channel communication (phone, email, WhatsApp)
- Automated quote generation
- Quote tracking and status updates
- Quick inquiry modals

### Technical Features

**Performance:**
- Code splitting with route-based loading
- Image optimization (WebP/AVIF)
- Preloading critical resources
- Service worker for offline support
- CDN distribution with edge caching

**Security:**
- Form validation and sanitization
- Rate limiting on endpoints
- HTTPS everywhere
- CSRF protection
- Input sanitization

**Analytics:**
- User journey tracking
- Conversion funnel analysis
- Performance monitoring
- A/B testing framework

## 📦 Project Structure

```
/
├── public/
│   ├── index.html
│   └── assets/              # Static images, icons, etc.
│
├── src/
│   ├── assets/             # Generated photography (source of truth)
│   │   ├── images/
│   │   └── svgs/
│   ├── components/         # All UI components (17+)
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── AboutSection.tsx
│   │   ├── ... (14 more)
│   │
│   ├── data/              # Application data
│   │   ├── companyData.ts   # Business info, compliance
│   │   ├── assets.ts       # Image references
│   │   └── contactInfo.ts
│   │
│   ├── types.ts           # Type definitions
│   ├── design-system.css   # Design tokens + utilities
│   ├── main.tsx           # Root entry point
│   └── App.tsx            # Main application
│
├── scripts/                # Build and automation tools
│   ├── build-optimized.js
│   ├── validate-tokens.js
│   └── image-optimizer.js
│
├── package.json
├── vite.config.ts
├── tsconfig.json
└── README.md
```

## 🔧 Development

### Prerequisites

Node.js 18+ (npm or pnpm preferred)

### Installation

```bash
# Clone repository
cd sun-lite-ltd-petroleum-energy-supply

# Install dependencies
npm install  # or pnpm install

# Run development server
npm run dev  # runs on http://localhost:3000
```

### Build for Production

```bash
# Build for development (watch mode)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linting
npm run lint
```

### Available Scripts

- `npm run dev` - Start development server with HMR
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Type checking with TypeScript

## 🚚 Deployment

### Vercel (Recommended)

1. Create `vercel.json` with configuration
2. Set environment variables:
   - `VITE_API_URL` - Backend API endpoint
   - `VITE_EMAIL_SERVICE` - Email service provider
   - `VITE_ANALYTICS_ID` - Analytics tracking ID

3. Deploy:
   ```bash
   vercel --prod
   ```

### Docker Deployment

```bash
# Build Docker image
docker build -t sunlite-energy .

# Run container
docker run -p 3000:3000 sunlite-energy
```

## 📸 Assets & Resources

### Image Sources (The Source of Truth)

**Hero Background:**
- Refinery at dusk (Unsplash: 1789390838980)
- Industrial petroleum terminal
- Modern energy infrastructure

**Product Photography:**
- White storage tanks (Unsplash: 1789390894565)
- Branded tanker truck (Unsplash: 1789390856974)
- Marine bunkering vessel (Unsplash: 1789390928303)
- Pipeline manifold depot (Unsplash: 1789390911610)

**Generated Assets:**
- All images hosted on CDN
- Optimized for WebP/AVIF
- Lazy-loaded below the fold
- Responsive srcset sets

### Brand Assets

**Logo System:**
- Primary SVG emblem (engineered precision)
- Full horizontal logo (SUN LITE LTD)
- Icon-only badge variants

**Color Palette:**
- 7-color system (primary, secondary, accent, semantic)
- Dark mode ready
- WCAG 2.1 AA compliant

## 📊 Performance Targets

### Core Web Vitals
- **LCP (Largest Contentful Paint):** <2.5s
- **FID (First Input Delay):** <100ms
- **CLS (Cumulative Layout Shift):** <0.1
- **FCP (First Contentful Paint):** <1.8s
- **TTFB (Time to First Byte):** <0.8s

### Lighthouse Scores (Target)
- Performance: 90+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 95+
- PWA: 80+

### Mobile Performance
- 3G network loading time: <5s
- Touch target size: 44×44pt minimum
- Vertical scroll without horizontal overflow
- No layout shift during content load

## ♿ Accessibility

### WCAG 2.2 AA Compliance
- **Keyboard Navigation:** Full keyboard access
- **Screen Readers:** Semantic HTML + ARIA labels
- **Color Contrast:** 4.5:1 for normal text
- **Focus Management:** Visible focus indicators
- **Touch Targets:** Minimum 44×44pt
- **Reduced Motion:** prefers-reduced-motion support
- **Text Scaling:** System text scaling supported

### Accessibility Features
- Skip navigation links
- ARIA labels for icons
- Semantic button and link usage
- Form validation announcements
- Keyboard trap prevention for modals
- High contrast mode support

## 🔄 Multi-Platform Support

### Responsive Breakpoints

```css
- mobile: < 375px (iPhone SE, small phones)
- tablet: 376–768px (iPad mini, tablets)
- laptop: 769–1024 px (small laptops)
- desktop: 1025–1440 px (standard monitors)
- wide: 1441+ px (large displays)
```

### Platform-Specific Optimizations

**Mobile:**
- Touch-friendly navigation
- Optimized scrolling
- Reduced animation
- Fast loading

**Tablet:**
- Two-column layouts where appropriate
- Enhanced hover states
- Optimal touch targets

**Desktop:**
- Large hero areas
- 12-column grid
- Advanced hover interactions
- Full feature display

## 📈 Analytics & Monitoring

### User Analytics
- Page views and session duration
- Conversion funnel tracking
- Component interaction patterns
- Device and browser statistics

### Performance Monitoring
- Core Web Vitals tracking
- Bundle size analysis
- Loading performance metrics
- Error tracking and reporting

### A/B Testing Framework
- Hero headline variations
- CTA button text optimization
- Form layout testing
- Color scheme testing

## 🔒 Security

### Implementation
- HTTPS everywhere
- Input validation and sanitization
- Rate limiting on endpoints
- CSP (Content Security Policy)
- XSS prevention

### Best Practices
- Environment variable management
- Secure password handling
- API rate limiting
- Error handling without information leakage

## 🎓 Technical Specifications

### Component Standards
- TypeScript first development
- Component composition over inheritance
- Responsive design patterns
- Accessibility-first approach
- Performance optimization

### Build Pipeline
- Automated linting
- Type checking
- Bundle analysis
- Visual regression testing
- Performance budgets

### Code Quality
- ESLint + Prettier
- TypeScript strict mode
- Component documentation
- Test coverage targets

## 🚀 Future Roadmap

### Phase 1 (Current)
- Premium design system implementation
- Full component modernization
- Performance optimization
- Accessibility compliance

### Phase 2 (Next 6 months)
- Backend API development
- Advanced form workflows
- Real-time chat support
- Customer portal

### Phase 3 (12 months)
- Mobile app development
- Advanced analytics dashboard
- Multi-language support
- AI-powered recommendations

## 📚 Documentation

### API Documentation
- `src/types.ts` - Type definitions
- `src/design-system.css` - Design tokens
- Component docstrings and examples

### Architecture Documents
- `docs/architecture.md` - Technical architecture
- `docs/design-tokens.md` - Design system
- `docs/performance.md` - Optimization strategies

### Operational Documents
- `docs/deployment.md` - Production deployment
- `docs/monitoring.md` - Health checks and monitoring
- `docs/support.md` - Troubleshooting guides

## 🆘 Support

### Documentation
- [README.md](README.md) - Project overview and setup
- [Agent.md](Agent.md) - Technical architecture
- [technical.md](technical.md) - Implementation details

### Getting Help
- GitHub Issues for bug reports
- Support tickets for feature requests
- Documentation for self-service
- Team chat for urgent issues

## 🤝 Contributing

### Development Guidelines
- Follow existing code patterns
- Write TypeScript for all new code
- Include unit tests for components
- Update documentation for changes
- Run linting before commits

### Code Review Standards
- Code style compliance
- Type safety verification
- Performance impact assessment
- Accessibility requirements
- Documentation completeness

## 📜 Legal & Compliance

### Intellectual Property
- Original design system
- Component architecture
- Photography sources properly attributed
- MIT License for code

### Data Privacy
- GDPR compliance for forms
- Contact information handling
- Cookie policy documentation
- Privacy-first approach

## 🌍 Global Ready

The website architecture is designed for future expansion:

```
Nigeria
├── Lagos (core operations)
├── West Africa (regional expansion)
├── Africa (continental reach)
└── International (global operations)
```

All design decisions maintain the option to add:
- New markets and regions
- International compliance certifications
- Multi-language support
- Local payment methods

---

**Built with ❤️ using Apple-standard design principles and React modern stack**
**© 2024 SUN LITE LTD | Energy Supply, Built Around Reliability**

This README provides a comprehensive overview of the SUN LITE LTD digital platform. For more detailed technical information, refer to `Agent.md` and `technical.md`.