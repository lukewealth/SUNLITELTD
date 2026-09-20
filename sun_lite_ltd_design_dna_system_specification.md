# SUN LITE LTD — Design DNA & UI/UX System Specification

---

## 1. Brand Identity & Visual Philosophy

**Brand Positioning**: Global Energy & Infrastructure Leader  
**Design Persona**: Authoritative, visionary, high-precision, ESG-forward, industrial luxury  
**Aesthetic Core**: Contrast between deep obsidian/slate industrial backdrops and crisp gallery-white card architectures, illuminated by warm amber/solar-gold energy accents.

---

## 2. Color Palette & Token System

### Primary & Accent Colors
- **Solar Gold / Flame Core**: `#E5A93C` (`amber-500` / `#F59E0B`)
  - *Usage*: Active badges, hover accents, primary CTA buttons, highlighted key terms in headlines (e.g., "ENERGY FUTURE.").
- **Deep Amber / Warm Ochre**: `#C68A24` (`amber-600` / `#D97706`)
  - *Usage*: Button active states, icon borders, secondary warm highlights.
- **Pale Sunbeam (Tints)**: `#FEF9C3` (10% `#FEF3C7`)
  - *Usage*: Subtle badge backgrounds, verified status badges, warm glows.

### Dark & Obsidian Neutrals (Atmospheric Sections)
- **Deep Industrial Navy / Obsidian**: `#0B1118` / `#0D1520`
  - *Usage*: Global dark bands, project gallery backdrop, high-impact CTA section, footer container.
- **Charcoal Card Surface**: `#151F2E` / `#1A2433`
  - *Usage*: Elevated cards on dark backgrounds, dark modal states, project cards.
- **Dark Border Stroke**: `rgba(255, 255, 255, 0.08)` to `rgba(255, 255, 255, 0.14)`
  - *Usage*: Subtle glass borders, divider lines in dark sections.

### Light & Editorial Neutrals (Clarity Sections)
- **Pure Canvas / White**: `#FFFFFF`
  - *Usage*: Main capabilities section, sustainability narrative, card surfaces.
- **Off-White / Cool Gray Surface**: `#F8FAFC` (`slate-50`)
  - *Usage*: Page root background, secondary content panels, light metric tiles.
- **Border / Divider Slate**: `#E2E8F0` (`slate-200`)
  - *Usage*: Light card outlines, table borders, metric separator rules.

### Typography Neutral Scale
- **Headline Primary (Dark on Light)**: `#0F172A` (`slate-900`)
- **Headline Light (Light on Dark)**: `#F8FAFC` (`slate-50`)
- **Body Text**: `#475569` (`slate-600`) on light, `#94A3B8` (`slate-400`) on dark
- **Sub-caption / Eyebrow Text**: `#64748B` (`slate-500`) with uppercase letter-spacing

---

## 3. Typography Hierarchy & Font Rules

### Type Families
1. **Primary Editorial Headline**: *Playfair Display* / *Cinzel* / *Cormorant Garamond* (Serif)
   - *Role*: Headlines, section titles, impact statements.
   - *Character*: Confident, timeless, prestigious corporate energy aesthetic.
2. **Body & Utility**: *Inter* / *Plus Jakarta Sans* / *Outfit* (Modern Grotesque Sans-Serif)
   - *Role*: Navigation, subtext, metrics, captions, buttons, metadata.
   - *Character*: Neutral, ultra-legible at small sizes, engineered precision.

### Type Scale & Specs
| Element | Font Family | Size (Desktop) | Weight | Line Height | Tracking / Transform |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Hero H1** | Serif | 56px – 64px | Bold (700) | 1.08 | -0.02em, Title Case / All Caps periods |
| **Section H2** | Serif | 38px – 44px | SemiBold (600) | 1.15 | -0.015em, Tight |
| **Card H3** | Serif | 20px – 24px | SemiBold (600) | 1.25 | Normal |
| **Eyebrow / Badge** | Sans-Serif | 11px – 12px | Bold (700) | 1.0 | +0.12em, UPPERCASE |
| **Body Large** | Sans-Serif | 16px – 18px | Regular (400) | 1.6 | Normal |
| **Body Standard** | Sans-Serif | 14px – 15px | Regular / Med (400/500) | 1.55 | Normal |
| **Meta / Ticker** | Sans-Serif | 11px – 12px | Medium (500) | 1.2 | +0.05em, Monospaced numbers |
| **Stats Numbers** | Serif / Sans | 40px – 48px | Bold (700) | 1.0 | Tight |

---

## 4. Layout Architecture & Section DNA

### 1. Top Utility Header & Navigation
- **Height**: 40px (Top utility bar) + 80px (Main nav bar)
- **Top Utility Bar**:
  - Background: Deep Obsidian (`#0B1118`)
  - Content: Phone contact, investor email (`investors@sunliteltd.com`), live market ticker indicator (`NYSE: SNLT $64.82 (+1.4%)`), social icons.
- **Main Nav Bar**:
  - Background: Pure White (`#FFFFFF`) with subtle sticky shadow or bottom border `rgba(0,0,0,0.05)`.
  - Brand Logo: Gold flame icon + "SUN LITE LTD / OIL & ENERGY" dual-tier lockup.
  - Links: Medium sans-serif uppercase tracking (`ABOUT`, `SERVICES`, `PROJECTS`, `SUSTAINABILITY`, `CAREERS`, `NEWS`, `CONTACT`).
  - CTA Button: Pill-shaped dark button with arrow symbol (`LET'S CONNECT ↗`).

### 2. Split Hero Section
- **Background**: Soft clean background (`#FFFFFF` to `#F8FAFC`).
- **Layout**: 50/50 Asymmetrical Desktop Split.
- **Left Column**:
  - Eyebrow pill: Gold dot + uppercase track `RELIABLE ENERGY. SUSTAINABLE FUTURE.`
  - Hero Display H1: Multi-line serif with period breaks (`POWERING POSSIBILITIES. / FUELING PROGRESS.`).
  - Supporting Copy: 2-3 lines of refined high-level positioning.
  - Action Link: Text link with animated right arrow (`DISCOVER OUR APPROACH →`).
- **Right Column (Hero Visual)**:
  - Masked large hero container: 16:10 or 4:3 rounded viewport (`rounded-3xl` / `24px`).
  - Floating Benchmark Overlay (Bottom): Frosted white card (`rgba(255, 255, 255, 0.95)`, backdrop-blur) showing verified uptime metric `99.98% uninterrupted operational uptime` with green/gold check badge and classification tag `GLOBAL CLASS 1`.

### 3. Core Values Strip
- **Background**: Solid Obsidian Navy (`#0C131D`).
- **Grid**: 4-column horizontal distribution with vertical thin rule dividers.
- **Card Content**:
  - Icon: Refined 20px golden hairline vector icons (Shield, Gear, Sprout, Network).
  - Title: Uppercase sans-serif bold (`SAFETY FIRST`, `OPERATIONAL EXCELLENCE`, `SUSTAINABLE GROWTH`, `PEOPLE & PARTNERSHIP`).
  - Micro-copy: 2 lines concise principle descriptions (`slate-400`).

### 4. Capabilities (5-Pillar Column Showcase)
- **Background**: Pure White (`#FFFFFF`).
- **Header**: Left-aligned eyebrow + bold serif headline (`END-TO-END ENERGY SOLUTIONS.`), right-aligned global link (`VIEW ALL SERVICES →`).
- **Cards (5-Column Flex Grid)**:
  - Outline: 1px light gray border (`#E2E8F0`), `rounded-2xl` padding 24px.
  - Index: Monospaced gold counter (`01`, `02`, `03`, `04`, `05`).
  - Icon: Minimalist gold line icon in matching container.
  - Title: Serif font with bold presence.
  - Body: Compact capability description.
  - Bottom Asset: Embedded high-res photo thumbnail (`rounded-xl`, 16:10 ratio) showing offshore rig, distillation towers, tanks, cargo shipping, solar panels.

### 5. Featured Projects Gallery (Dark Mode Contrast)
- **Background**: Deep Obsidian Slate (`#0B1118`).
- **Headline**: High-contrast white serif (`DELIVERING IMPACT. / DRIVING PROGRESS.`).
- **Controls**: Carousel navigation arrows (left/right circles) + active pagination numbers (`01 / 02 03 04`).
- **Project Cards (3-Column Layout)**:
  - Image Container: 4:3 rounded cards (`rounded-2xl`) with subtle inner shadow.
  - Photography: Dramatic sunset/dusk industrial infrastructure.
  - Title: Crisp white serif (`OFFSHORE DEVELOPMENT PROJECT`, `REFINERY UPGRADE PROJECT`, `STORAGE TERMINAL EXPANSION`).
  - Meta: Region label (`Arabian Gulf`, `Middle East Complex`, `South Asia Hub`) + accent navigation indicator arrow.

### 6. Sustainability & ESG Commitment
- **Background**: Light slate/white canvas with watermark typography ("SUSTAINABILITY" large vertical ghosted background text).
- **Left Column**:
  - Twin metric cards (`15+ COUNTRIES`, `2,500+ EMPLOYEES`) with gold hairline icons and subtle borders.
  - Wide panoramic hybrid energy image (rolling green hills with wind turbines & solar fields) with location tag pill (`SUN LITE Wind & Hydrogen Facility • European Sector`).
- **Right Column**:
  - Eyebrow: `OUR COMMITMENT`
  - Headline: `ENERGY TODAY. / SUSTAINABILITY ALWAYS.`
  - Description: Decarbonization and CCUS narrative.
  - Checklist: Verified gold checkmark list detailing Scope 1 & 2 targets (2040), bio-methane investments, and IPIECA frameworks.
  - CTA: Serif/Sans underline button (`LEARN MORE →`).

### 7. Trusted Industry Partners
- **Background**: Clean Neutral (`#FFFFFF`).
- **Header**: Subtle centered tracker `TRUSTED INDUSTRY PARTNERS & AFFILIATES`.
- **Logos**: Monochromatic slate/charcoal logos with uniform height (28px - 32px) and balanced optical spacing (TotalEnergies, Shell, BP, Eni, Aramco, ExxonMobil).

### 8. Global Conversion Banner & Footer
- **CTA Banner**:
  - Background: Cinematic wide shot of refinery infrastructure at dusk with deep navy gradient overlay.
  - Content: Headline `LET'S BUILD A STRONGER ENERGY FUTURE.` with amber highlight + subcopy.
  - Action: High-visibility amber button (`LET'S CONNECT →`).
- **Footer**:
  - 4-Column navigation tree: Company, Services, Resources, Contact.
  - Brand summary, ISO compliance badges, social channels, live copyright notice.

---

## 5. Background Images & Photography Art Direction

### Photography Rules & Themes
1. **Industrial Precision (Hero & Projects)**:
   - *Lighting*: Golden hour, twilight dusk, or early dawn (warm horizon hues contrasting against industrial steel structures).
   - *Subject Matter*: Deepwater offshore drilling platforms, high-tech cracking units, LNG cryogenic storage spheres, container vessels.
   - *Atmosphere*: Crisp clarity, minimal smog, steam plumes back-illuminated by ambient amber light.
2. **Renewable & Transition Assets (Sustainability)**:
   - *Lighting*: Bright daylight with natural sky tones, lush emerald hills, clear skies.
   - *Subject Matter*: Modern wind turbine arrays integrated into pristine topography, ground-mounted PV solar farms.
   - *Mood*: Hopeful, clean, balanced environmental coexistence.

### Visual Treatments & Overlays
- **Hero Image Corner Radius**: `24px` (`rounded-3xl`), subtle outer drop-shadow `0 20px 40px -15px rgba(0, 0, 0, 0.12)`.
- **Dark Section Image Tint**: Gradient overlay `linear-gradient(180deg, rgba(11,17,24,0) 0%, rgba(11,17,24,0.85) 100%)`.
- **Banner Hero Overlay**: `linear-gradient(90deg, rgba(11,17,24,0.92) 0%, rgba(11,17,24,0.7) 60%, rgba(11,17,24,0.4) 100%)`.

---

## 6. UI Components & Interactive Patterns

- **Primary Amber Button**:
  - Background: `#E5A93C` hover `#D97706`
  - Text: Dark obsidian `#0B1118`, Bold, 14px, tracked
  - Shape: Pill (`rounded-full`) with right arrow circular badge
- **Secondary Dark Button**:
  - Background: `#0B1118` hover `#1E293B`
  - Text: `#FFFFFF`, SemiBold, 14px
  - Shape: Pill (`rounded-full`)
- **Metric Cards**:
  - Background: `#FFFFFF` on light or `#151F2E` on dark
  - Border: 1px solid `#E2E8F0` / `rgba(255, 255, 255, 0.08)`
  - Padding: `24px`
  - Radius: `16px` (`rounded-2xl`)
- **Iconography**:
  - Stroke: 1.75px uniform hairline vector
  - Color: Amber accent `#E5A93C` inside light circular or square tinted badge (`rgba(229, 169, 60, 0.12)`).
