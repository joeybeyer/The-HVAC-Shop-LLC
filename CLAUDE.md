# CLAUDE.md — The HVAC Shop LLC (thehvacshopllc.com)

## Project
Next.js 14+ website for The HVAC Shop LLC, a residential & commercial HVAC contractor in Port Wentworth, GA. Hub-and-spoke local SEO architecture optimized for AI Overviews, Google Maps, and LLM citations.

## Stack
- **Framework**: Next.js 14 (App Router), TypeScript, Tailwind CSS
- **Hosting**: Vercel
- **Database**: Turso (libSQL) via Drizzle ORM
- **Forms**: Web3Forms (primary) + n8n webhook (backup)
- **Email**: Resend (transactional notifications)
- **DNS/CDN**: Cloudflare (origin cert → Vercel)
- **Analytics**: GTM + GA4
- **Images**: WebP, KIE.ai branded images

## Business Data (NAP — use EXACTLY as written)
- **Name**: The HVAC Shop LLC
- **Address**: 101 S Coastal Hwy, Port Wentworth, GA 31407
- **Phone**: (912) 416-3449
- **Owner**: Karen Zollo
- **Lead Tech**: David Johnson (30 years combined HVAC experience)
- **Hours**: Mon–Fri 8am–5pm | Sat–Sun by appointment | 24/7 Emergency
- **Email**: davidj@thehvacshop.net / karenz@thehvacshop.net
- **Website**: https://thehvacshopllc.com

## SEO Rules — NON-NEGOTIABLE

### Architecture
1. **NEVER create city+service combo pages** — ❌ `/savannah-ac-repair/` ✅ `/savannah/` (city hub) + `/ac-repair/` (service page)
2. **Hub-and-spoke hierarchy**: City Hubs (Tier 1) → Neighborhood Spokes (Tier 2) → Blog/PAA (Tier 3)
3. **Non-geo service pages** are Tier 1 siblings of city hubs, NOT children

### Internal Linking
4. **1 UP + 2-3 ACROSS** on every page
5. **Contextual link within first 80-100 words** (not buttons, not footer)
6. **Descriptive anchor text** — never "click here" or "learn more"
7. Neighborhood spokes link: 1 UP to city hub + 2-3 ACROSS to neighboring neighborhoods + 2-3 ACROSS to relevant service pages

### Headings
8. **No EMQs in H2s** — use entity-language headings
   - ❌ "AC Repair in Port Wentworth, GA"
   - ✅ "Why Coastal Humidity Accelerates AC Wear in Port Wentworth"
9. **No "near me" in headings** — okay in body copy sparingly

### Title Tags (Sterling Sky Long-Title Pattern)
10. Append 8-12 neighborhoods/areas after primary keyword:
    ```
    AC Repair – Residential & Commercial | The HVAC Shop LLC – Serving Port Wentworth, Pooler, Savannah, Garden City, Rincon & Greater Chatham County
    ```

### Schema (Page-Specific — NOT Sitewide)
11. **Homepage**: `HVACBusiness` (LocalBusiness subtype) with full NAP, geo, areaServed, founder, employee
12. **Service pages**: `Service` schema with provider ref to business
13. **FAQ sections**: `FAQPage` schema ONLY where FAQ content actually exists
14. **All inner pages**: `BreadcrumbList` schema
15. **Self-referencing canonical** on every page

### Content
16. **TLDR bullet summary at TOP** of every page (for AI extraction)
17. **BERT table** on every service page (pricing ranges, comparisons, response times)
18. **80% unique content** per neighborhood page (Google Patent #11,366,956 Information Gain)
19. Include microclimate/local signals: coastal humidity, salt air corrosion, hurricane season prep, local landmarks, zip codes, housing stock

### Technical
20. **Images**: WebP format, descriptive filenames (`port-wentworth-ac-repair-technician.webp`), alt text with service+geo naturally
21. **Core Web Vitals**: LCP < 2.5s, INP < 100ms, CLS < 0.1
22. **Required files**: robots.txt, sitemap.xml (auto-generated), llms.txt, llms-full.txt, HTML sitemap page

## File Structure
```
src/
├── app/
│   ├── layout.tsx              # Root layout with GTM, schema injection
│   ├── page.tsx                # Homepage
│   ├── [city]/
│   │   ├── page.tsx            # City hub pages
│   │   └── [neighborhood]/
│   │       └── page.tsx        # Neighborhood spoke pages
│   ├── [service]/
│   │   └── page.tsx            # Non-geo service pages
│   ├── blog/
│   │   ├── page.tsx            # Blog index
│   │   └── [slug]/
│   │       └── page.tsx        # Individual PAA blog posts
│   ├── about/page.tsx
│   ├── contact/page.tsx
│   ├── financing/page.tsx
│   ├── privacy-policy/page.tsx
│   ├── terms-of-service/page.tsx
│   ├── sitemap/page.tsx        # HTML sitemap
│   ├── sitemap.xml/route.ts    # Dynamic XML sitemap
│   └── robots.txt/route.ts     # Dynamic robots.txt
├── components/
│   ├── Header.tsx              # Sticky header with phone CTA
│   ├── Footer.tsx              # NAP, trust badges, sitemap links
│   ├── LeadForm.tsx            # Web3Forms integration
│   ├── SchemaMarkup.tsx        # Per-page JSON-LD injection
│   ├── BreadcrumbNav.tsx       # Visual + schema breadcrumbs
│   ├── TLDRSummary.tsx         # Bullet summary component
│   ├── BERTTable.tsx           # Pricing/comparison table
│   ├── FAQSection.tsx          # Accordion + FAQPage schema
│   ├── CTABlock.tsx            # Phone + form CTA section
│   ├── ServiceCard.tsx         # Service grid cards
│   └── TestimonialCard.tsx     # Review display
├── lib/
│   ├── db.ts                   # Turso connection
│   ├── schema.ts               # Drizzle table schemas
│   ├── constants.ts            # Business data, service lists, city/neighborhood data
│   └── seo.ts                  # Title tag generator, schema builders
└── data/
    ├── services.ts             # All service page data
    ├── cities.ts               # City hub data with neighborhoods
    └── blog-posts.ts           # Blog post metadata
public/
├── robots.txt
├── llms.txt
├── llms-full.txt
├── images/                     # Branded images
└── favicon.ico
docs/
├── BUILD-SPEC.md               # Full build specification
├── GBP-OPTIMIZATION.md         # GBP action plan
└── CONTENT-CALENDAR.md         # Content production schedule
```

## Services (15 pages)
1. ac-repair
2. ac-installation
3. heating-repair
4. furnace-installation
5. hvac-maintenance
6. duct-fabrication
7. duct-cleaning
8. commercial-hvac
9. emergency-hvac-service
10. hvac-inspection
11. thermostat-installation
12. indoor-air-quality
13. heat-pump-service
14. mini-split-installation
15. hvac-financing

## City Hubs (8 pages)
1. port-wentworth (PRIMARY)
2. pooler
3. savannah
4. garden-city
5. rincon
6. bloomingdale
7. richmond-hill
8. effingham-county

## Neighborhoods (build incrementally)
- port-wentworth: godley-station, rice-hope, cross-creek, towne-park, spring-lakes
- pooler: pooler-parkway, godley-station-south, west-chatham
- savannah: west-savannah, henderson, woodville-bartow

## Commands
```bash
npm run dev          # Local development
npm run build        # Production build
npm run lint         # ESLint
npx vercel           # Deploy to Vercel
```

## Deploy Notes
- Upload source files, build on Vercel (never upload .next folder)
- Cloudflare DNS → Vercel (CNAME)
- NEVER modify DirectAdmin global nginx templates
- Test Core Web Vitals after every deploy
