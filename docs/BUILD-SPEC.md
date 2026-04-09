# The HVAC Shop LLC — Complete Build Specification
## Domain: thehvacshopllc.com | Next.js + Vercel + Turso

---

## BUSINESS INTELLIGENCE

### Entity Profile
| Field | Value |
|-------|-------|
| Legal Name | The HVAC Shop LLC |
| Address | 101 S Coastal Hwy, Port Wentworth, GA 31407 |
| Primary Phone | (912) 416-3449 |
| Secondary Phone | (912) 777-3900 / (912) 346-0106 |
| Email | davidj@thehvacshop.net / karenz@thehvacshop.net |
| Owner | Karen Zollo (10 yrs field + shop + maintenance tech experience) |
| Lead Tech | David Johnson (30 yrs combined: field, duct fabrication, VP of HVAC company) |
| Founded | 2018 |
| Service Type | Residential & Commercial HVAC |
| GBP CID | 0xe3e18d404dd59412 |
| GBP Place ID | 0x88fba330a83f98c7 (from Maps embed) |
| Hours | Mon–Fri 8am–5pm, Sat–Sun by appointment |
| Emergency | 24/7 emergency service available |
| Existing Site | thehvacshop.net (GoDaddy website builder — single page, no SEO) |
| New Domain | thehvacshopllc.com |
| Yelp | UNCLAIMED — 0 reviews |

### Current State Assessment
- **Website**: GoDaddy site builder single-page site. Zero SEO structure, no schema, no service pages, no location pages, no blog. Generic copy. Copyright 2018.
- **GBP**: Exists but likely underoptimized. No Products tab, minimal services, likely thin description.
- **Reviews**: Near zero on Yelp/BBB. Unknown Google review count.
- **Citations**: Minimal — Nextdoor (5 faves), YellowPages (unclaimed), Procore, Cortera.
- **Competitors**: Gordons Heating and Air (strong, multi-location pages, NATE certified), Byrd Heating and Air (dedicated Port Wentworth page), Coastal Comfort Systems (full service pages, 40 yrs experience claim).

### Service Area (Primary → Expansion)
**Tier 1 (Primary):** Port Wentworth, Pooler, Garden City, Savannah (West)
**Tier 2 (Secondary):** Bloomingdale, Rincon, Springfield, Guyton, Richmond Hill
**Tier 3 (Expansion):** Effingham County, Bryan County, full Chatham County

### Neighborhoods to Target (Port Wentworth / Greater Savannah)
Port Wentworth: Godley Station, Rice Hope, Cross Creek, Towne Park, Spring Lakes, Dean Forest/Hwy 80
Pooler: Pooler Parkway corridor, Godley Station (overlap), Hunter Army Airfield adjacent
Savannah West: West Chatham, Henderson, Woodville-Bartow, Garden City
Rincon: Downtown Rincon, Biltmore, Ashley Plantation

---

## TECH STACK

| Component | Technology |
|-----------|-----------|
| Framework | Next.js 14+ (App Router) |
| Hosting | Vercel |
| Database | Turso (libSQL) |
| ORM | Drizzle or Prisma |
| Forms | Web3Forms + n8n webhook backup |
| Email | Resend (transactional) |
| DNS/CDN | Cloudflare (origin cert → Vercel) |
| Analytics | GTM + GA4 |
| Search Console | Google Search Console |
| Call Tracking | Retreaver/Ringba (Joey's stack) |
| Images | KIE.ai branded images (nano-banana-pro) |
| Grounding Box | Cloudflare Workers |

---

## SITE ARCHITECTURE (Hub & Spoke)

### CRITICAL RULES (from SKILL-EXPANDED.md + SOPs)
1. **NEVER create City + Service combo pages** — ❌ `/savannah-ac-repair/` ✅ `/savannah/` + `/ac-repair/`
2. **1 UP + 2-3 ACROSS linking** on every page
3. **No EMQs in H2s** — use entity-language headings
4. **No "near me" language** in headings (use in body copy sparingly per Sterling Sky override)
5. **Sterling Sky long-title pattern**: Append 8-12 neighborhoods after primary keyword in title tags
6. **80% unique content per neighborhood page** (Google Patent #11,366,956 Information Gain)
7. **Page-specific schema** — not sitewide
8. **FAQ schema only where FAQ content exists**
9. **Bullet TLDR summaries at TOP of every page** for AI extraction
10. **BERT tables/lists** for confidence signals (pricing, comparisons)
11. **Self-referencing canonicals** on every page
12. **Contextual links within first 80-100 words**

### Page Hierarchy

```
HOMEPAGE (/)
├── CITY HUBS (Tier 1)
│   ├── /port-wentworth/
│   ├── /pooler/
│   ├── /savannah/
│   ├── /garden-city/
│   ├── /rincon/
│   ├── /bloomingdale/
│   ├── /richmond-hill/
│   └── /effingham-county/
│
├── SERVICE PAGES (Tier 1 — Non-Geo)
│   ├── /ac-repair/
│   ├── /ac-installation/
│   ├── /heating-repair/
│   ├── /furnace-installation/
│   ├── /hvac-maintenance/
│   ├── /duct-fabrication/
│   ├── /duct-cleaning/
│   ├── /commercial-hvac/
│   ├── /emergency-hvac-service/
│   ├── /hvac-inspection/
│   ├── /thermostat-installation/
│   ├── /indoor-air-quality/
│   ├── /heat-pump-service/
│   ├── /mini-split-installation/
│   └── /hvac-financing/
│
├── NEIGHBORHOOD SPOKES (Tier 2 — under city hubs)
│   ├── /port-wentworth/godley-station/
│   ├── /port-wentworth/rice-hope/
│   ├── /pooler/pooler-parkway/
│   ├── /savannah/west-chatham/
│   └── ... (build out as content sprints)
│
├── BLOG / PAA CONTENT (Tier 3)
│   ├── /blog/how-often-should-you-service-your-ac-in-savannah/
│   ├── /blog/signs-your-ac-needs-repair-port-wentworth/
│   ├── /blog/best-hvac-system-for-coastal-georgia-humidity/
│   └── ... (PAA-driven, geo-targeted)
│
├── TRUST / LEGAL PAGES
│   ├── /about/
│   ├── /contact/
│   ├── /privacy-policy/
│   ├── /terms-of-service/
│   └── /financing/
│
└── SPECIAL FILES
    ├── /sitemap.xml
    ├── /robots.txt
    ├── /llms.txt
    └── /llms-full.txt
```

### Page Count Targets
| Phase | Pages | Timeline |
|-------|-------|----------|
| Launch (MVP) | ~25–30 | Week 1-3 |
| Sprint 2 | +15–20 (neighborhoods + blog) | Week 4-6 |
| Sprint 3 | +15–20 (expansion cities + more PAA) | Week 7-10 |
| Ongoing | 2-4/month (PAA blog + new neighborhoods) | Month 3+ |

---

## TITLE TAG FORMULA (Sterling Sky Long-Title Pattern)

### Homepage
```
The HVAC Shop LLC – AC Repair & HVAC Service in Port Wentworth, GA – Serving Pooler, Savannah, Garden City, Rincon, Bloomingdale, Godley Station & All of Chatham County – 24/7 Emergency Service
```

### Service Pages
```
AC Repair – Residential & Commercial Air Conditioning Repair | The HVAC Shop LLC – Serving Port Wentworth, Pooler, Savannah, Garden City, Rincon & Greater Chatham County
```

### City Hub Pages
```
HVAC Services in Pooler, GA – AC Repair, Heating Installation & 24/7 Emergency Service | The HVAC Shop LLC – Serving Godley Station, Pooler Parkway, West Chatham & Surrounding Areas
```

### Neighborhood Spokes
```
HVAC Services in Godley Station, Port Wentworth – AC Repair & Heating Service | The HVAC Shop LLC
```

---

## SCHEMA STRATEGY (Page-Specific)

### Homepage: LocalBusiness + HVAC Contractor
```json
{
  "@context": "https://schema.org",
  "@type": "HVACBusiness",
  "name": "The HVAC Shop LLC",
  "url": "https://thehvacshopllc.com",
  "telephone": "+19124163449",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "101 S Coastal Hwy",
    "addressLocality": "Port Wentworth",
    "addressRegion": "GA",
    "postalCode": "31407",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 32.1496,
    "longitude": -81.1632
  },
  "openingHoursSpecification": [...],
  "areaServed": [...],
  "founder": { "@type": "Person", "name": "Karen Zollo" },
  "employee": { "@type": "Person", "name": "David Johnson", "jobTitle": "Lead HVAC Technician" },
  "sameAs": [GBP URL, Yelp, Nextdoor, Facebook, etc.]
}
```

### Service Pages: Service schema
```json
{
  "@type": "Service",
  "name": "AC Repair",
  "provider": { "@id": "#business" },
  "areaServed": [...],
  "description": "..."
}
```

### Pages with FAQs: FAQPage schema (only where FAQ content exists)
### Blog Posts: Article schema with author
### All Inner Pages: BreadcrumbList schema

---

## GBP OPTIMIZATION PLAN (AI Overview Domination — Module 1)

### Services Tab (add gradually, 3-4 at a time)
Using formula: `[Primary Keyword] + [Geo] + [User Intent Satisfier/CTA]`

1. "24 Hour Emergency AC Repair Service in Port Wentworth GA – Same Day Service Guaranteed"
2. "Central Air Conditioning Installation in Port Wentworth & Pooler – Free Consultation & Financing Available"
3. "Residential Furnace Repair & Heating System Diagnosis in Savannah GA – Licensed Technicians"
4. "Commercial HVAC Maintenance & Service Contracts in Chatham County GA – Preventive Plans Available"
5. "Custom Duct Fabrication & HVAC Ductwork Installation – 30 Years Combined Experience"
6. "AC Not Cooling Diagnosis & Repair in Port Wentworth – Free Service Call with Repair"
7. "Heat Pump Installation & Repair Service in Pooler GA – Energy Efficient Solutions"
8. "Mini Split Ductless AC Installation in Savannah & Port Wentworth – Residential & Commercial"
9. "HVAC System Replacement & New Unit Installation – Carrier, Trane & Rheem Authorized"
10. "Indoor Air Quality Testing & Air Purification Systems in Port Wentworth GA"

### Business Description (Local Hub Gambit — 750 chars max)
Include 3+ authoritative entity co-citations:
- **Suppliers**: Carrier, Trane, Rheem, Lennox
- **Associations**: Georgia HVAC Contractors Association, EPA Section 608 Certified
- **Local landmarks**: Port Wentworth, Savannah/Hilton Head International Airport, I-95 corridor, Chatham County

### Q&A Preemption Protocol
Pre-seed 10-15 Q&As using the Broken Competitor Gambit + Google Docs Answer Funnel:
1. "What certifications should an HVAC company in Port Wentworth have?"
2. "How do I know if my AC needs repair or replacement in Savannah's humidity?"
3. "Do you offer 24/7 emergency HVAC service near Pooler GA?"
4. "What's the average cost of AC repair in Chatham County?"
5. "How often should I have my HVAC system serviced in coastal Georgia?"

### Products Tab (rich snippets > plain text services)
Create products for each high-value service with images, 1000-char descriptions, and **deep links to service pages** (not homepage).

### Posts Strategy
- 2-4 posts/week during launch phase
- Use preemptive framing (define quality criteria, then show you meet them)
- Offer posts with long-tail coupon codes: "NEED-EMERGENCY-AC-REPAIR-PORT-WENTWORTH"
- Event posts (micro-events): "Live Q&A: How to Handle HVAC Emergencies in Coastal Georgia"
- Entity Property Forcing in post copy (serviceArea, serviceType, etc.)

---

## CONTENT PRODUCTION SYSTEM

### Per-Page Content Structure
Every service page and city hub page follows this template:

1. **TLDR Bullet Summary** (top of page, for AI extraction)
2. **H1**: Entity-language heading (no EMQs) — e.g., "Trusted AC Repair for Port Wentworth Homes and Businesses"
3. **Intro paragraph** (80-100 words, contextual link to city hub within first sentence)
4. **H2 sections**: Each covers one subtopic from PAA research / keyword cluster
5. **BERT Table**: Pricing ranges, service comparisons, or response time data
6. **Local signals**: Neighborhoods, landmarks, climate/humidity factors, coastal corrosion
7. **FAQ section** (5-8 questions, FAQPage schema)
8. **CTA block**: Phone number, form, trust badges
9. **Internal links**: 1 UP (city hub or homepage) + 2-3 ACROSS (related service pages + neighboring areas)

### H2 Heading Rules
- ❌ "AC Repair in Port Wentworth, GA" (EMQ)
- ✅ "Why Coastal Humidity Accelerates AC Wear in Port Wentworth"
- ✅ "What to Expect During a Residential AC Repair Visit"
- ✅ "Commercial HVAC Systems We Service in Chatham County"

### Information Gain Requirements (Neighborhood Pages)
Each neighborhood spoke page must contain 80% unique content including:
- **Microclimate content**: Coastal humidity, salt air corrosion, summer heat index, hurricane season HVAC prep
- **Local landmarks**: Specific to that neighborhood
- **Community-specific context**: Housing stock (new construction vs. older homes), HOA considerations
- **Zip codes and cross-streets**
- **Neighborhood-specific FAQ** (2-3 unique questions)

### PAA Blog Topics (Initial 10)
1. How Often Should You Service Your AC in Savannah GA
2. Signs Your HVAC System Needs Replacement in Coastal Georgia
3. Best HVAC System for Humidity in Port Wentworth
4. How Much Does AC Repair Cost in Chatham County GA
5. Emergency HVAC Service Port Wentworth — What to Do When Your AC Fails at Night
6. Duct Cleaning vs Duct Replacement — Which Does Your Pooler Home Need
7. How Coastal Salt Air Affects Your HVAC System in Savannah
8. Heat Pump vs Central AC — Best Choice for Georgia Homeowners
9. HVAC Maintenance Checklist for Port Wentworth Homeowners
10. Why Your AC is Running But Not Cooling in Savannah GA

---

## ENTITY & TRUST BUILDING PLAN (Merlino Method + SOPs)

### Brand Foundation (Week 1-2)
| Platform | Action | Priority |
|----------|--------|----------|
| Google Business Profile | Full optimization per Module 1 SOP | CRITICAL |
| Yelp | CLAIM immediately, add photos/description | CRITICAL |
| Crunchbase | Create company profile | HIGH |
| Nextdoor | Optimize existing listing | HIGH |
| BBB | Apply for listing | MEDIUM |
| Patch.com | Create free listing + posts | MEDIUM |
| Apple Maps | Sync from GBP | MEDIUM |
| Bing Maps | Sync from GBP | MEDIUM |
| SoundCloud | Create account (mandatory per Merlino) | MEDIUM |
| Facebook | Create business page | HIGH |
| Instagram | Create business account | HIGH |

### Trust Badge Collection (for website footer)
- Licensed & Insured badge
- EPA Section 608 Certified
- BBB badge (once obtained)
- Major brand logos (Carrier, Trane, Rheem, Lennox — whichever they're authorized for)
- Nextdoor Recommended (if earned)

### MASS Syndication (Phase 2+)
Per Merlino Method: every PAA blog post gets syndicated across all platforms with exact-match PAA titles + geo. One post → syndicated everywhere → compound trust signals.

---

## GROUNDING BOX & TRINITY LOOP

### Grounding Box (Cloudflare Workers)
Deploy lightweight HTML pages (<10KB, <50ms load) targeting high-intent queries:
- "best hvac company port wentworth ga"
- "emergency ac repair port wentworth"
- "hvac repair near pooler ga"
- "24 hour ac repair savannah ga"

Requirements per grounding box:
- Target query as H1
- Direct answer in first 100 characters
- Inline LocalBusiness schema
- Pure HTML only (no external CSS/JS)
- Deploy via Cloudflare Workers on thehvacshopllc.com subdomain or path

### Trinity Loop
```
Website (thehvacshopllc.com)
    → NotebookLM (generate audio podcast from content)
        → YouTube (upload as podcast/explainer)
            → Back to Website (embed + link)
```

---

## TECHNICAL SEO REQUIREMENTS

### Core Web Vitals Targets
| Metric | Target |
|--------|--------|
| LCP | < 2.5s (target < 1s) |
| FID/INP | < 100ms |
| CLS | < 0.1 |
| TTI | < 3s |
| Page size | < 500KB |

### Required Files
- `robots.txt` — proper crawl directives
- `sitemap.xml` — auto-generated, submitted to GSC
- `llms.txt` — AI system instructions (entity, services, areas served)
- `llms-full.txt` — comprehensive version
- HTML sitemap page linked from footer

### Image Strategy
- WebP format, compressed
- Descriptive filenames: `port-wentworth-ac-repair-technician.webp`
- Alt text with service + geo naturally
- KIE.ai branded images (logo, phone number on hero/vehicle shots)
- Real photos from David/Karen/crew preferred for UGC signals

### Redirect Strategy
- 301 redirect thehvacshop.net → thehvacshopllc.com (if/when old site is decommissioned)
- Handle www vs non-www canonicalization
- All HTTP → HTTPS

---

## COMPETITIVE ANALYSIS SUMMARY

### Top Competitors in Port Wentworth/Pooler/Savannah HVAC
| Competitor | Strengths | Weaknesses |
|-----------|-----------|------------|
| Gordons Heating and Air | Multi-location pages, NATE certified, strong review count, dedicated Port Wentworth page | Corporate/franchise feel |
| Byrd Heating and Air | Dedicated Port Wentworth page, strong local content | Generic copy in places |
| Coastal Comfort Systems | Full service coverage, 40 yrs experience, military discount | Broad area, less hyper-local |
| Austin HVAC | Port Wentworth address | BBB complaint, limited web presence |
| Southern Maintenance & Air | Facebook presence, 20+ yrs experience | No website, Facebook-only |

### Opportunity Gaps
1. **No competitor has proper schema markup** — first-mover advantage
2. **No competitor targets AI Overviews** — grounding boxes will dominate
3. **Thin neighborhood pages** across all competitors — information gain opportunity
4. **No competitor has SoundCloud/podcast presence** — Merlino MASS advantage
5. **Duct fabrication is a unique differentiator** — no competitor emphasizes custom ductwork
6. **David Johnson's 30 years experience** — strongest E-E-A-T signal in the market
7. **Salt air / coastal corrosion angle** — unique local content most competitors ignore

---

## IMPLEMENTATION TIMELINE

### Phase 1: Foundation (Days 1-5)
- [ ] Deploy Next.js skeleton to Vercel
- [ ] DNS: Cloudflare → Vercel
- [ ] Turso DB setup (leads, contact forms)
- [ ] Homepage + About + Contact pages
- [ ] LocalBusiness schema on homepage
- [ ] GTM + GA4 installation
- [ ] robots.txt + sitemap.xml + llms.txt
- [ ] Web3Forms + n8n lead pipeline
- [ ] GBP: Services tab optimization (first batch of 3-4)
- [ ] GBP: Rewrite description (Local Hub Gambit)
- [ ] Claim Yelp listing

### Phase 2: Core Service Pages (Days 6-14)
- [ ] Build all 15 service pages (non-geo)
- [ ] Service schema per page
- [ ] FAQPage schema where FAQs exist
- [ ] BERT tables on every service page
- [ ] TLDR bullet summaries at top
- [ ] Internal linking: 1 UP + 2-3 ACROSS
- [ ] KIE.ai branded images (hero, team, vehicles)
- [ ] GBP: Services tab (remaining batches)
- [ ] GBP: Q&A Preemption (first 5)
- [ ] GBP: Products tab setup

### Phase 3: City Hubs + First Neighborhoods (Days 15-21)
- [ ] Build 6-8 city hub pages
- [ ] Build 4-6 neighborhood spoke pages (Port Wentworth + Pooler)
- [ ] BreadcrumbList schema on all inner pages
- [ ] Submit sitemap to GSC
- [ ] Request indexing for all priority pages
- [ ] GBP: Begin weekly posting cadence
- [ ] Crunchbase + Patch.com profiles
- [ ] SoundCloud account creation

### Phase 4: Content Sprint + AI Overview Targeting (Days 22-35)
- [ ] Write first 5 PAA blog posts
- [ ] Deploy grounding boxes (3-4 target queries)
- [ ] Set up Trinity Loop (NotebookLM → YouTube → website)
- [ ] Begin MASS syndication for first blog posts
- [ ] GBP: Q&A Preemption (remaining 5-10)
- [ ] Monitor GSC for indexing status
- [ ] Manual SERP checks (incognito) per Sterling Sky Tactic #3

### Phase 5: Scale & Optimize (Month 2-3)
- [ ] Build remaining neighborhood spokes (+10-15 pages)
- [ ] Expansion city hubs (Rincon, Bloomingdale, Richmond Hill, Springfield)
- [ ] 5 more PAA blog posts
- [ ] Research Company Strategy for "best hvac port wentworth" type queries
- [ ] Press release distribution (ABNewswire, $80)
- [ ] Reddit traffic system setup
- [ ] GBP: Push to 10 reviews (Sterling Sky threshold)
- [ ] Content freshness audit (GSC high-impression pages)
- [ ] Instagram + Facebook posting cadence

### Ongoing (Month 3+)
- [ ] 2-4 new pages/month (neighborhoods + PAA blog)
- [ ] Weekly GBP posts
- [ ] Social syndication per MASS protocol
- [ ] GSC review and content refresh monthly
- [ ] Review acquisition campaign (target 10 reviews fast)
- [ ] Monitor AI Overviews for target queries
- [ ] Grounding box rotation for new queries

---

## CALL TRACKING & LEAD PIPELINE

### Phone Flow
```
Website CTA → (912) 416-3449 (tracking number)
    → Retreaver (publisher-side routing)
        → Ringba (buyer-side / business)
            → The HVAC Shop dispatch
```

### Form Flow
```
Contact Form (Web3Forms) → n8n webhook
    → Turso DB (lead record)
    → Resend (email notification to davidj@ + karenz@)
    → Optional: Telegram notification to Joey
```

### Lead Qualification
Per Herc Magnus SOP diagnostic framework:
- Traffic but no leads → CRO problem (form placement, phone visibility, trust signals)
- No traffic AND no leads → Ranking problem (check GSC, confirm indexing)
- Leads but low quality → Keyword intent mismatch

---

## CLAUDE.md (for Claude Code CLI)

```markdown
# CLAUDE.md — The HVAC Shop LLC (thehvacshopllc.com)

## Project
Next.js 14+ site for The HVAC Shop LLC, a residential & commercial HVAC contractor in Port Wentworth, GA.

## Stack
- Next.js 14 (App Router), TypeScript, Tailwind CSS
- Vercel hosting, Turso DB (Drizzle ORM)
- Web3Forms + n8n for leads, Resend for email
- Cloudflare DNS + origin cert

## SEO Rules (NON-NEGOTIABLE)
1. NEVER create city+service combo pages (e.g., /savannah-ac-repair/)
2. Hub-and-spoke: city hubs + non-geo service pages + neighborhood spokes
3. 1 UP + 2-3 ACROSS internal linking on every page
4. No EMQs in H2 headings — use entity-language
5. Sterling Sky long-title pattern on all title tags (append neighborhoods)
6. Self-referencing canonical on every page
7. Page-specific schema (LocalBusiness on home, Service on service pages, FAQPage only where FAQ exists)
8. BreadcrumbList schema on all inner pages
9. TLDR bullet summary at TOP of every page
10. BERT table (pricing/comparison) on every service page
11. Contextual internal link within first 80-100 words
12. 80% unique content per neighborhood page
13. No "near me" in headings (okay in body copy sparingly)
14. WebP images with descriptive filenames (service-geo.webp)
15. Alt text: natural description with service + geo

## File Structure
/app
  /page.tsx (homepage)
  /[city]/page.tsx (city hub)
  /[city]/[neighborhood]/page.tsx (spoke)
  /[service]/page.tsx (non-geo service)
  /blog/[slug]/page.tsx (PAA blog)
  /about/page.tsx
  /contact/page.tsx
  /privacy-policy/page.tsx
  /financing/page.tsx
/components
  /Header.tsx (phone in header, sticky)
  /Footer.tsx (NAP, trust badges, sitemap links)
  /LeadForm.tsx (Web3Forms)
  /SchemaMarkup.tsx (per-page schema injection)
  /BreadcrumbNav.tsx
  /TLDRSummary.tsx
  /BERTTable.tsx
  /FAQSection.tsx (with FAQPage schema)
  /CTABlock.tsx
/lib
  /db.ts (Turso connection)
  /schema.ts (Drizzle schema)
/public
  /robots.txt
  /sitemap.xml (auto-generated)
  /llms.txt
  /llms-full.txt

## Business Data
- Name: The HVAC Shop LLC
- Address: 101 S Coastal Hwy, Port Wentworth, GA 31407
- Phone: (912) 416-3449
- Owner: Karen Zollo
- Lead Tech: David Johnson (30 yrs experience)
- Hours: Mon-Fri 8am-5pm, Sat-Sun by appointment, 24/7 emergency
- Services: AC repair, AC installation, heating repair, furnace installation, HVAC maintenance, duct fabrication, duct cleaning, commercial HVAC, emergency service, inspection, thermostat install, IAQ, heat pump, mini split, financing

## Deploy
- `vercel` for production
- Never modify DirectAdmin nginx templates
- Cloudflare origin cert for SSL
```

---

## METRICS & KPIs

### 30-Day Targets
- All pages indexed in GSC
- GBP Services tab fully populated
- 10+ GBP Q&As seeded
- GBP posting cadence established (2-4/week)
- 25+ pages live
- Core Web Vitals all green

### 90-Day Targets
- 40-50 pages live
- First PAA blog posts ranking
- 5+ Google reviews (push toward 10 threshold)
- Grounding boxes live for top 3-4 queries
- Trinity Loop active
- 50+ organic clicks/month

### 6-Month Targets
- 60-80 pages live
- 200+ organic clicks/month
- Top 3 Maps for "hvac port wentworth"
- AI Overview appearances for target queries
- 10+ Google reviews (Sterling Sky threshold)
- Lead pipeline generating 10+ calls/month

---

## REFERENCE SOPs INCORPORATED

| Source | Key Tactics Used |
|--------|-----------------|
| SKILL-EXPANDED.md | Hub & spoke, 1 UP + 2-3 ACROSS, BERT tables, grounding boxes, Trinity Loop, GBP optimization, S2 cells, research company strategy |
| Herc Magnus / Zagio SOP | Kill score analysis, EMD strategy, conversion tracking before build, schema generation order, CRO diagnostic framework, Canada proxy early signal |
| Build An SEO-Perfect Website With AI | Entity research, GBP audit, Core 30 structure, 8-pass content humanization, gap analysis, entity overlap analysis |
| Merlino Method (MAD & MASS) | PAA research, content buckets, entity-aligned images, MASS syndication, SoundCloud mandatory, trust & validation hierarchy, ICP/persona content, Crunchbase/Patch/Wikidata |
| Roofing Website SEO SOP | Four pillars framework, topical authority silos, location page template, technical SEO checklist, 6-month acceleration pattern, LLMs.txt |
| GBP Module 1 SOP | Services tab formula, Q&A preemption protocol, Local Hub Gambit description, preemptive framing posts, Products tab kill shot, entity property forcing |
| Sterling Sky / Local U (Addendum) | Long title tags with neighborhoods, near me body copy, actual SERP monitoring, 10th review threshold, multi-GBP scaling |

---

*This document is the single source of truth for building thehvacshopllc.com. Read all SOPs before touching code. Execute in phase order. Measure everything.*
