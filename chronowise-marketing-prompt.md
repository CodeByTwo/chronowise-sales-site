# ChronoWise Marketing Website - Claude Code Prompt

## Project Overview

Build a premium sales and marketing website for **ChronoWise** - a SaaS wishlist management platform designed specifically for luxury watch jewellers selling high-demand timepieces (Rolex, Patek Philippe, Audemars Piguet, etc.).

### The Problem We Solve

High-end watch brands like Rolex and Patek Philippe are in short supply, requiring customers to register interest on waiting lists. Jewellers currently struggle with:
- Managing waitlists in spreadsheets or generic CRMs
- No purpose-built solution exists for this niche
- Complex CRMs like Salesforce/HubSpot require technical expertise and expensive customisation
- GDPR compliance for customer consent tracking
- Secure storage of sensitive customer and watch data

### Target Audience

- Independent luxury watch jewellers and boutiques
- Authorised dealers for premium watch brands
- Multi-location watch retail chains
- Decision makers: Store owners, managers, sales directors

---

## Design Direction

### Design Philosophy
Think Patek Philippe's website meets a modern SaaS aesthetic. The design should feel like walking into a high-end watch boutique - refined, confident, and understated elegance. Every element should whisper luxury, not shout it.

### Visual Identity

**Colour Palette**
- **Primary Background**: Deep, rich blacks (#0A0A0B, #111113) - not flat black, but with depth
- **Secondary Background**: Dark charcoal/slate (#18181B, #1C1C1F) for cards and sections
- **Accent**: Refined gold/champagne (#C6A962, #D4AF37) - used sparingly for CTAs, highlights, borders
- **Text**: Pure white (#FFFFFF) for headlines, muted grey (#A1A1AA, #71717A) for body
- **Subtle accents**: Very subtle warm tones in gradients

**Typography**
- **Headlines**: Premium serif font for luxury feel - consider:
  - Playfair Display (elegant, classic)
  - Cormorant Garamond (refined, sophisticated)
  - Or a refined sans like "Plus Jakarta Sans" with wide letter-spacing for modern luxury
- **Body**: Clean, highly readable sans-serif (Inter, Geist)
- **Letter-spacing**: Generous on headlines and navigation
- **Font weights**: Light to Medium for elegance, avoid heavy/bold except for emphasis

**Imagery & Graphics**
- Abstract luxury textures: brushed gold metal, sapphire crystal light refractions, watch movement macro details (gears, springs - without showing specific brands)
- Subtle grain/noise texture overlay for depth and premium print feel
- Product UI screenshots in elegant, minimal device mockups (dark browser frames)
- Avoid generic stock photos - use sophisticated abstract imagery
- Consider subtle halftone patterns or fine line art as decorative elements

**UI Elements**
- **Cards**: Subtle borders (1px gold or white at 10% opacity), very subtle shadows, slight glass-morphism
- **Buttons**: 
  - Primary: Gold/champagne with dark text, subtle glow on hover
  - Secondary: Ghost/outline with white or gold border
  - Smooth hover transitions (scale, glow, gradient shifts)
- **Borders**: Fine lines (1px), low opacity whites or subtle gold accents
- **Spacing**: Extremely generous whitespace - let elements breathe
- **Corners**: Slightly rounded (8-12px) - not too sharp, not too soft

**Animation & Motion**
- Smooth, slow, elegant animations (ease-out, 600-800ms durations)
- Subtle parallax scrolling on hero backgrounds
- Fade-up on scroll for content sections (staggered children)
- Refined hover states: subtle scale (1.02), gentle glows, smooth colour transitions
- Text reveal animations on headlines
- Counter animations for statistics
- NO flashy, fast, or aggressive animations - everything should feel considered

**Specific Luxury Details**
- Thin gold accent lines as section dividers
- Subtle gradient overlays (black to transparent) on images
- Fine decorative borders around key sections
- "Frosted glass" effect on cards over gradient backgrounds
- Subtle dot grid or fine line patterns as background textures
- Gold gradient text for key headlines or accents
- Monogram/logo watermarks as subtle background elements

### Tone of Voice

- Confident and authoritative, never salesy or desperate
- Understated elegance - let the product speak for itself
- Use precise, refined language
- Short, impactful sentences
- Industry terminology used naturally (waitlist, allocation, reference, complication)
- Avoid exclamation marks, hype words ("amazing", "incredible", "revolutionary")
- Think how a Rolex AD would describe their service - professional, knowledgeable, assured

---

## Site Structure & Pages

### 1. Homepage (/)

**Hero Section**
- Full viewport height, immersive experience
- Headline: Elegant, impactful, refined (see examples below)
- Subheadline: One sentence explaining the value proposition
- Primary CTA: "Request a Demo" (gold button)
- Secondary CTA: "Explore Features" (ghost/outline button)
- Background: Dark gradient with subtle animated grain texture, possibly layered with abstract geometric shapes or light refractions
- Optional: Subtle floating watch movement illustration or abstract time motif

**Social Proof Bar** (immediately below hero)
- "Trusted by discerning jewellers worldwide"
- Placeholder for 4-6 monochrome client logos
- Subtle divider line above and below

**Problem Statement Section**
- Dark background section
- Headline: "Managing waitlists shouldn't feel like guesswork"
- Address pain points elegantly (not bullet points - use refined card layout):
  - Spreadsheets lose customers
  - Generic CRMs require costly customisation  
  - Compliance creates complexity
  - Opportunities slip through the cracks

**Solution Introduction**
- Transition section with gold accent line
- "ChronoWise was built for exactly this moment"
- Brief, confident product positioning

**Key Benefits Strip**
- 4-6 cards with icons highlighting main value props:
  - Purpose-built for watch waitlists
  - GDPR compliant out of the box
  - Bank-grade security
  - Up and running in minutes
  - No technical skills required
  - Beautiful analytics & insights

**Feature Showcase**
- Interactive tabs or scrolling sections showing:
  - Dashboard preview
  - Customer management
  - Wishlist pipeline
  - Analytics
- Use actual product screenshots in device mockups

**Social Proof Section**
- Placeholder for testimonials (design with 3 testimonial cards)
- "Trusted by X jewellers across Y countries" type stat
- Logo strip placeholder for client logos

**How It Works**
- 3-4 step visual process:
  1. Import your customers (or start fresh)
  2. Add watches to your catalogue
  3. Manage your waitlist pipeline
  4. Track, communicate, convert

**CTA Section**
- Strong conversion-focused section
- "Ready to transform your waitlist management?"
- Demo booking or trial signup

**Footer**
- Navigation links
- Contact info
- Social links
- Legal links (Privacy, Terms)
- "Made for jewellers, by people who understand luxury retail"

---

### 2. Features Page (/features)

Comprehensive breakdown of all features, organised by category with elegant section design.

**Hero**
- "Every detail, considered."
- Subheadline: "Explore the complete ChronoWise platform"
- Dark, refined hero with subtle background texture

**Feature Categories** (each as a detailed section with screenshots):

#### Customer Management
- Full customer profiles with contact details, addresses, notes
- Google Maps address autocomplete
- Search & filter by name, email, phone
- Bulk CSV import for easy migration
- Customer blacklist for flagging problematic clients
- Track customer-owned watches with encrypted serial numbers

#### Wishlist Pipeline
- Visual pipeline with 6 status stages: Waiting → Prioritised → Followed Up → Offered → Accepted → Rejected
- Preowned preference tracking
- Notes and comments on each entry
- Time-on-wishlist calculation for prioritisation
- Duplicate prevention (one watch per customer)
- Quick-add from dashboard

#### Watch Catalogue
- Complete watch database: brand, model, reference, collection, metal, bracelet, bezel, dial
- Service interval & warranty tracking
- Manufacturer reference links
- Toggle wishlist availability
- CPO price label PDF generator for retail display

#### Marketing & GDPR Compliance
- Marketing consent tracking with dates
- Digital signature capture
- Privacy acceptance tracking
- Full audit trail for compliance

#### Communication Tools
- Customisable email templates
- Dynamic placeholders (customer, watch, staff data)
- Email logs with sent history
- Template version control

#### Analytics & Reporting
- Dashboard with key metrics
- Wishlist status distribution charts
- Conversion rate tracking
- Top wishlisted watches ranking
- Brand & collection popularity grid
- CSV export
- Preowned vs new breakdown

#### Security & Access Control
- Two-Factor Authentication (MFA/TOTP)
- Row-level security policies
- Complete audit logging
- Encrypted serial number storage
- Password policy enforcement
- Session management
- Role-based access (Admin & Staff)

#### User Experience
- Light & Dark mode
- Fully responsive design
- Modern, intuitive interface
- Loading states & skeleton loaders
- Accessibility compliant

---

### 3. Pricing Page (/pricing)

**Hero**
- "Transparent pricing. No surprises."
- Subheadline: "Choose the plan that fits your boutique"

**Structure**
- Clean, elegant pricing presentation
- Design 2-3 tier cards (placeholder pricing):
  - **Essentials**: For independent jewellers
  - **Professional**: For established boutiques (highlighted as recommended)
  - **Enterprise**: For multi-location operations or custom requirements
- Feature comparison table below cards (refined, minimal design)
- FAQ accordion at bottom

**Pricing Card Design**
- Dark cards with subtle gold border on featured tier
- Tier name in refined typography
- Price (monthly/annually toggle - gold highlight on selected)
- Brief one-line description
- Feature list (checkmarks, not bullets)
- CTA button (gold for featured, outline for others)
- "Recommended" badge on Professional tier (elegant, not garish)

**Trust Elements** (subtle, not desperate)
- "14-day trial included"
- "No credit card required"
- "Cancel anytime"

**Enterprise Section**
- Separate section below pricing cards
- "Need something bespoke?"
- Brief text + "Contact Us" CTA

---

### 4. About Page (/about)

- Refined hero: "Built by those who understand the craft"
- Origin story - why ChronoWise exists (placeholder content, aspirational tone)
- Mission statement: brief, confident, not corporate-speak
- Values section (3-4 values with elegant iconography)
- Optional: Team section (if desired - minimal, professional)
- Closing CTA section

**Tone**: Authentic but polished. The story of understanding a niche problem and solving it with care.

---

### 5. Contact Page (/contact)

- Clean, minimal design
- Headline: "Let's discuss your requirements"
- Two-column layout:
  - Left: Contact form (name, email, company, phone optional, message)
  - Right: Direct contact info + optional Calendly embed placeholder
- Use Formspree, Netlify Forms, or similar for static form handling
- Brief FAQ section below (optional)

**Form Design**: Dark inputs, subtle gold focus states, elegant validation messages

---

### 6. Legal Pages

- Privacy Policy (/privacy)
- Terms of Service (/terms)
- Cookie Policy (/cookies)

Use placeholder legal text with proper formatting.

---

## Technical Requirements

### Stack
- **Framework**: Next.js 15 (App Router) with React 19 - **Static Export**
- **Styling**: Tailwind CSS v4
- **Components**: shadcn/ui (latest)
- **Animations**: Framer Motion for scroll animations and micro-interactions
- **Icons**: Lucide React
- **Fonts**: Use Next.js font optimisation with `next/font`
- **Package Manager**: pnpm (preferred) or npm

### Static Site Configuration
This must be a fully static site for deployment to any static host (Vercel, Netlify, Cloudflare Pages, etc.).

```js
// next.config.js
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // Required for static export
  },
}
```

- No Server Components that require runtime
- No Server Actions
- No dynamic routes without `generateStaticParams`
- Use client-side form handling (Formspree, Netlify Forms, or similar)
- All data is static/hardcoded (no database calls)

### Performance
- Optimised images (Next.js Image component)
- Lazy loading for below-fold content
- Core Web Vitals optimised
- SEO-ready with proper meta tags, Open Graph

### Responsive Design
- Mobile-first approach
- Breakpoints: mobile, tablet, desktop, large desktop
- Mobile navigation (hamburger menu)
- Touch-friendly interactions

### Accessibility
- Semantic HTML
- ARIA labels where needed
- Keyboard navigation
- Sufficient colour contrast
- Focus states

---

## Components to Build

### Global
- [ ] Navbar (sticky with backdrop blur, gold accent on scroll, minimal links, refined CTA)
- [ ] Footer (elegant, multi-column, subtle gold accents, fine divider lines)
- [ ] CTA Section (reusable, dark/gold theme, compelling but understated)
- [ ] Button variants (primary gold, secondary outline, ghost)
- [ ] Section divider (thin gold line or subtle gradient)

### Homepage
- [ ] Hero section (full viewport, layered gradients, subtle particle/texture animation, large elegant typography)
- [ ] Benefits grid (dark cards with subtle borders, gold icons, hover glow effects)
- [ ] Feature tabs/showcase (elegant tab design, smooth transitions, device mockups)
- [ ] Testimonial section (refined quote marks, subtle card design, optional carousel)
- [ ] How it works (numbered steps with gold accents, connecting lines, staggered animation)
- [ ] Stats counter section (large numbers with gold highlights, count-up animation)
- [ ] Logo cloud/trust strip (subtle, monochrome client logos on dark background)

### Features Page
- [ ] Feature section component (alternating layout with image/text, generous spacing)
- [ ] Feature card grid (icon + title + description, subtle hover effects)
- [ ] Screenshot showcase with elegant device mockup (dark browser chrome)
- [ ] Feature category navigation (sticky sidebar or tabs)

### Pricing Page
- [ ] Pricing toggle (monthly/annual with gold highlight on selected)
- [ ] Pricing card component (featured card with gold border, subtle glow)
- [ ] Feature comparison table (elegant, minimal, striped rows)
- [ ] FAQ accordion (refined expand animation, gold accent on open)

### Shared
- [ ] Section wrapper with consistent padding and max-width
- [ ] Animated heading component (fade-up, optional gold gradient text)
- [ ] Badge/pill component (outlined, small caps, letter-spaced)
- [ ] Icon container (subtle background, gold icon, rounded)
- [ ] Background texture component (grain overlay, gradient mesh)
- [ ] Device mockup frame (dark theme browser/phone)

---

## Content Guidelines

### Headlines (Examples)
**Hero Headlines** (choose one style):
- "Waitlist management, refined." (minimal)
- "Where precision meets clientele." (luxury)
- "The art of allocation." (sophisticated)
- "Every timepiece finds its owner." (poetic)
- "Crafted for those who craft desire." (premium)

**Section Headlines**:
- "Purpose-built for the world of fine horology"
- "From enquiry to allocation. Seamless."
- "Intelligence that informs every decision"
- "Security your clients expect. Compliance you require."
- "Begin in minutes. Master in days."

### Key Messages to Convey
1. **Precision-built**: Designed exclusively for luxury watch waitlist management - not adapted, but created for this purpose
2. **Effortless**: Sophisticated technology that requires no technical expertise to implement
3. **Compliant**: GDPR-ready architecture with digital signatures and complete audit trails
4. **Secure**: Enterprise-grade security befitting the value of your clientele
5. **Intelligent**: Analytics and insights that sharpen your allocation decisions
6. **Professional**: Refined tools that match the calibre of your boutique

### Call-to-Action Copy
- "Request a Demo" (primary - confident, not pushy)
- "Explore the Platform"
- "See ChronoWise"
- "Begin Your Trial"
- "Speak with Our Team"

Avoid: "Start FREE trial!", "Sign up NOW!", "Don't miss out!" - nothing desperate or salesy.

### Writing Style
- Short paragraphs (2-3 sentences max)
- Active voice
- Present tense
- No jargon unless industry-specific
- Numbers and specifics over vague claims
- Let features speak through benefits

---

## Placeholder Assets Needed

Since we don't have actual product screenshots, create:
1. **Dashboard mockup**: Show a clean analytics dashboard with charts
2. **Customer list view**: Table with customer data
3. **Wishlist pipeline**: Kanban-style or table view showing stages
4. **Watch catalogue**: Grid or list of watches

Use realistic but fictional data (don't use real brand names like "Rolex" in mockups - use generic "Premium Brand" or similar).

---

## File Structure

```
/app
  /page.tsx (homepage)
  /features/page.tsx
  /pricing/page.tsx
  /about/page.tsx
  /contact/page.tsx
  /privacy/page.tsx
  /terms/page.tsx
  /layout.tsx
  /globals.css

/components
  /ui (shadcn components)
  /marketing
    /navbar.tsx
    /footer.tsx
    /hero.tsx
    /features-section.tsx
    /pricing-card.tsx
    /testimonials.tsx
    /cta-section.tsx
    /faq.tsx
    ...

/lib
  /utils.ts

/public
  /images
  /icons
```

---

## Launch Checklist

- [ ] Static export builds successfully (`next build`)
- [ ] All pages responsive and tested across devices
- [ ] Forms functional via external service (Formspree/Netlify Forms)
- [ ] SEO meta tags on all pages
- [ ] Open Graph images (dark, elegant, branded)
- [ ] Favicon and app icons (gold/dark theme)
- [ ] Custom 404 page (on-brand design)
- [ ] All animations smooth at 60fps
- [ ] Accessibility audit passed (WCAG 2.1 AA)
- [ ] Cross-browser tested (Chrome, Safari, Firefox, Edge)
- [ ] Performance audit (Lighthouse 90+ on all metrics)
- [ ] Images optimised (WebP where possible)
- [ ] Fonts properly loaded (no FOUT/FOIT)
- [ ] Dark mode is the default (this is a dark-themed site)
- [ ] All links working, no dead ends
- [ ] Legal pages complete with placeholder content

---

## Summary

Build a premium, conversion-focused marketing website for ChronoWise that:

1. **Commands presence** - The design should feel like the digital equivalent of a high-end watch boutique
2. **Communicates exclusivity** - We're THE solution for discerning jewellers managing coveted timepieces
3. **Demonstrates sophistication** - Every interaction, animation, and detail reflects the calibre of our customers
4. **Builds trust** - Professional, secure, compliant - without needing to oversell these qualities
5. **Converts elegantly** - CTAs that invite rather than push; demos are requested, not demanded

**Design Reference Points**:
- Patek Philippe's website (refined luxury)
- Linear.app (modern SaaS elegance)  
- Stripe (sophisticated tech)
- Vercel (dark, premium, minimal)

**The Feeling We Want**:
When a luxury watch jeweller lands on this site, they should immediately sense: "These people understand our world." The site should feel like it belongs alongside the brands our customers represent - Rolex, Patek Philippe, Audemars Piguet - without ever being derivative or presumptuous.

The site should make jewellers think: "This is exactly what we've been looking for."
