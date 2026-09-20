# SUN LITE LTD Logo Update Instructions

## Overview
Replace the current inline SVG logo in `src/components/SunliteLogo.tsx` with the new official logo from `sun-lite-logo-exact.svg`. The new logo is a base64-encoded PNG embedded in an SVG wrapper (not a true vector SVG).

---

## Current Logo Usage
The `SunliteLogo` component is used in **2 locations**:

| File | Variant | Size | Text Color |
|------|---------|------|------------|
| `src/components/Header.tsx:89` | `full` | `md` | Dark (`lightText={false}`) |
| `src/components/Footer.tsx:24` | `full` | `lg` | Dark (`lightText={false}`) |

---

## New Logo Analysis
**File:** `sun-lite-logo-exact.svg`
- Format: SVG wrapper containing base64-encoded PNG (`data:image/png;base64,...`)
- Dimensions: 1254×1254px
- Not a true vector SVG — it's a raster image embedded in SVG
- Contains the official "SUN LITE LTD" wordmark + icon

---

## Implementation Options

### Option A: Use as `<img>` tag (Recommended)
Replace the inline SVG in `SunliteLogo.tsx` with an `<img>` tag pointing to the SVG file (or convert to a proper vector SVG first).

```tsx
// In SunliteLogo.tsx - replace the inline SVG with:
<img
  src="/sun-lite-logo-exact.svg"
  alt="SUN LITE LTD"
  className={`w-full h-full ${iconSizes[size]}`}
  style={{ maxWidth: '100%', maxHeight: '100%' }}
/>
```

**Steps:**
1. Copy `sun-lite-logo-exact.svg` to `public/sun-lite-logo-exact.svg`
2. Update `SunliteLogo.tsx` to use `<img>` tag
3. Remove the inline SVG code (lines 31-78)

### Option B: Convert to True Vector SVG (Best Quality)
The current file is a raster PNG in SVG wrapper. For crisp scaling at all sizes:

1. **Trace the logo** using a vectorization tool (Figma, Illustrator, Inkscape, or online tracer)
2. Save as true vector `.svg` with paths/shapes
3. Replace inline SVG in `SunliteLogo.tsx` with the new vector SVG code
4. Update gradients/colors to match design system tokens (`--color-gold`, `--color-navy`)

### Option C: Use as Background Image
If keeping the current component structure with the decorative container:

```tsx
<div
  className={`relative ${iconSizes[size]} shrink-0 rounded-xl bg-gradient-to-br from-[#0D2430] to-[#07141D] p-2 border border-[#F3B51B]/40 shadow-lg flex items-center justify-center group-hover:border-[#F3B51B] transition-all`}
  style={{
    backgroundImage: 'url("/sun-lite-logo-exact.svg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  }}
/>
```

---

## Required Changes

### 1. Update `src/components/SunliteLogo.tsx`
- **Replace** the inline SVG (lines 31-78) with chosen implementation
- **Preserve** the existing props interface: `variant`, `size`, `lightText`
- **Keep** the text lockup (SUN LITE LTD + tagline) for `variant !== 'icon'`
- **Maintain** size classes: `sm` (w-8 h-8), `md` (w-11 h-11), `lg` (w-14 h-14)

### 2. Add Logo to Public Assets
```bash
cp sun-lite-logo-exact.svg public/sun-lite-logo-exact.svg
```

### 3. Verify in Both Contexts
- **Header** (white frosted glass bg): `lightText={false}` → dark text, logo should work on light bg
- **Footer** (slate-50 bg): `lightText={false}` → dark text, logo should work on light bg
- Check both `size="md"` and `size="lg"`

---

## Design System Color Tokens (for reference)
If vectorizing, use these CSS variables from `design-system.css`:

```css
--color-navy: #07141d;
--color-navy-2: #0d2430;
--color-gold: #f3b51b;
--color-gold-2: #ffd76a;
--color-primary: var(--color-gold);
--color-primary-dark: #d97706;
--color-primary-darker: #b45309;
```

---

## Testing Checklist
- [ ] Logo renders correctly in Header (md size, dark text on white)
- [ ] Logo renders correctly in Footer (lg size, dark text on slate-50)
- [ ] Logo scales properly at all three sizes (sm, md, lg)
- [ ] Logo works in `icon` variant (no text)
- [ ] No TypeScript errors
- [ ] No console errors in browser
- [ ] Responsive: works on mobile and desktop

---

## Notes
- The current inline SVG is a custom-designed icon (gold circle with droplet/fuel shapes)
- The new logo appears to be the official brand wordmark + symbol
- If the new logo includes "SUN LITE LTD" text, consider removing the duplicate text lockup in the component when `variant='full'`
- For true vector quality at all sizes, **Option B (vectorize)** is strongly recommended