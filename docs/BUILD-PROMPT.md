You are building the complete website for The HVAC Shop LLC (thehvacshopllc.com) in a SINGLE session. Read CLAUDE.md first — it contains all SEO rules, business data, and file structure. Every rule in CLAUDE.md is NON-NEGOTIABLE.

## PHASE 1: SETUP
1. Run `npm install`
2. Read CLAUDE.md completely before writing any code
3. Read docs/BUILD-SPEC.md for full context

## PHASE 2: CORE INFRASTRUCTURE
Build these foundational files first:

### src/lib/constants.ts — ALREADY EXISTS. Read it. Use it everywhere.

### src/lib/seo.ts
Create helper functions:
- `generateTitle(pageName, type)` — generates Sterling Sky long-title pattern titles. Append 8-12 neighborhoods/areas after primary keyword. Different patterns for homepage, service, city hub, neighborhood, blog.
- `generateCanonical(path)` — always self-referencing: `https://thehvacshopllc.com${path}`
- `buildLocalBusinessSchema()` — full HVACBusiness schema from constants
- `buildServiceSchema(service, description)` — Service schema with provider ref
- `buildFAQSchema(faqs)` — FAQPage schema, ONLY called when FAQ content exists
- `buildBreadcrumbSchema(items)` — BreadcrumbList
- `buildArticleSchema(title, description, slug, datePublished)` — for blog posts

### src/components/ — Build ALL of these:
- **Header.tsx**: Sticky header. Logo left, nav center (Services dropdown, Areas We Serve dropdown, About, Contact, Blog), phone CTA button right. Mobile hamburger. Phone number ALWAYS visible.
- **Footer.tsx**: 3 columns — (1) NAP block with full address, phone, email, hours (2) Services links (all 15) (3) Service Areas links (all 8 cities). Bottom row: copyright, privacy policy, terms links. Trust badges placeholder row.
- **LeadForm.tsx**: Web3Forms integration. Fields: Name, Phone, Email, Service Needed (dropdown of all services), City/Zip, Message. On submit: POST to Web3Forms access key. Show success state.
- **BreadcrumbNav.tsx**: Visual breadcrumb + injects BreadcrumbList schema. Home > [City] > [Neighborhood] or Home > [Service] or Home > Blog > [Post].
- **TLDRSummary.tsx**: Takes array of bullet strings. Renders styled summary box at top of page. Light background, left border accent, "Quick Facts" heading.
- **BERTTable.tsx**: Takes headers[] and rows[][] arrays. Renders clean HTML table with proper `<table>`, `<thead>`, `<tbody>`, `<th>`, `<td>` elements (BERT reads these at EXTREME confidence). Responsive.
- **FAQSection.tsx**: Takes array of {question, answer}. Renders accordion. Injects FAQPage schema inline via script tag. Only renders schema when questions exist.
- **CTABlock.tsx**: Full-width CTA section with phone link, "Request Estimate" button linking to /contact, address, emergency availability note.
- **ServiceCard.tsx**: Card component for service grid (icon placeholder, name, short description, link).

## PHASE 3: ALL 15 SERVICE PAGES
Create `src/app/[service]/page.tsx` as a dynamic route.

Create `src/data/services.ts` with COMPLETE content for ALL 15 services. Each service object must contain:
- slug, name, metaDescription (150-160 chars)
- tldrBullets: string[] (5-6 bullets for AI extraction)
- heroHeading: string (H1 — entity-language, NO EMQ like "AC Repair in Port Wentworth")
- sections: array of {heading: string (H2 — entity-language, NO EMQ), content: string (200-400 words each, with local signals: coastal humidity, salt air, hurricane season, Chatham County references)}
- bertTable: {headers: string[], rows: string[][]} (pricing ranges, response times, or comparison data)
- faqs: array of {question: string (geo-targeted), answer: string} (5-8 per page)
- internalLinks: {up: string (path to homepage or parent), across: string[] (2-3 related service page paths)}

### KEYWORD CANNIBALIZATION PREVENTION
Each service page targets ONE distinct intent. Here is the keyword-to-page mapping. NO page may target another page's primary keyword:

| Page | Primary Target | Secondary Keywords | DO NOT USE |
|------|---------------|-------------------|------------|
| ac-repair | air conditioning repair, AC not cooling, AC fix | broken AC, AC troubleshooting, air conditioner not working | AC installation, AC replacement, new AC |
| ac-installation | new air conditioner installation, AC replacement, new AC system | central air installation, AC upgrade, replace old AC | AC repair, AC fix, AC not cooling |
| heating-repair | heater repair, furnace not working, heating system fix | heater troubleshooting, no heat, furnace breakdown | furnace installation, new furnace, heating installation |
| furnace-installation | new furnace installation, furnace replacement, heating system install | gas furnace install, electric furnace, heating upgrade | heating repair, furnace fix, heater not working |
| hvac-maintenance | HVAC tune-up, AC maintenance plan, preventive HVAC service | seasonal tune-up, maintenance agreement, annual service | HVAC repair, HVAC installation |
| duct-fabrication | custom ductwork, sheet metal duct fabrication, HVAC duct install | custom ducts, duct design, metal ductwork | duct cleaning, duct repair |
| duct-cleaning | air duct cleaning, vent cleaning, ductwork cleaning | dryer vent cleaning, dust in ducts, dirty ductwork | duct fabrication, duct installation |
| commercial-hvac | commercial HVAC service, business AC service, commercial heating | office HVAC, retail HVAC, warehouse cooling, rooftop units | residential AC, home HVAC |
| emergency-hvac-service | 24/7 HVAC emergency, emergency AC repair, after hours HVAC | weekend HVAC, night AC repair, urgent HVAC | routine repair, maintenance, tune-up |
| hvac-inspection | HVAC inspection, home AC inspection, heating system evaluation | pre-purchase HVAC inspection, system assessment | HVAC repair, HVAC maintenance |
| thermostat-installation | thermostat install, smart thermostat setup, programmable thermostat | Nest install, Ecobee setup, thermostat upgrade, WiFi thermostat | AC repair, heating repair |
| indoor-air-quality | indoor air quality, air purifier installation, IAQ testing | air filtration, humidity control, UV light installation, allergens | duct cleaning, AC repair |
| heat-pump-service | heat pump repair, heat pump installation, heat pump maintenance | heat pump not heating, heat pump frozen, heat pump efficiency | AC repair, furnace repair |
| mini-split-installation | mini split installation, ductless AC install, ductless mini split | wall-mounted AC, zone cooling, ductless heating | central AC installation, AC repair |
| hvac-financing | HVAC financing, AC payment plans, furnace financing options | 0% HVAC financing, monthly payments, HVAC credit | pricing, cost (those go in BERT tables on other pages) |

### H2 HEADING RULES (apply to ALL pages)
- ❌ NEVER: "AC Repair in Port Wentworth, GA" (this is an EMQ)
- ❌ NEVER: "[Service] Near Me" 
- ✅ USE: Entity-language that describes WHAT/WHY/HOW
- Examples: "Why Coastal Humidity Puts Extra Strain on Air Conditioners", "What Happens During a Professional AC Diagnosis", "Common Signs a Compressor Is Failing in Savannah's Heat"
- Every H2 must be UNIQUE across the entire site — no two pages share the same H2

### INTERNAL LINKING RULES (apply to ALL pages)
- First paragraph (within 80-100 words): contextual link UP to homepage
- Body content: 2-3 contextual links ACROSS to related service pages (use the internalLinks.across paths)
- Use descriptive anchor text — NEVER "click here" or "learn more"
- Example: "Our [duct fabrication](/duct-fabrication) team custom-builds sheet metal systems..." 

### LOCAL SIGNALS (weave into every service page naturally)
- Coastal Georgia humidity (avg 75%+ in summer)
- Salt air corrosion on outdoor condensers near I-95 corridor
- Hurricane season HVAC prep (June-November)
- Savannah/Hilton Head International Airport proximity
- Port Wentworth industrial corridor
- Chatham County building codes
- Georgia summers hitting 95°F+ with heat index above 105°F
- Older homes in Savannah vs new construction in Godley Station/Pooler
- Sandy soil affecting outdoor unit stability

## PHASE 4: ALL 8 CITY HUB PAGES
Create `src/app/[city]/page.tsx` as a dynamic route.

Create `src/data/cities.ts` with COMPLETE content for ALL 8 city hubs. Each must contain:
- 800-1500 words of UNIQUE content (80% unique between city pages)
- H1: Entity-language (e.g., "Reliable HVAC Service for Port Wentworth Homes and Businesses")
- TLDR bullets specific to that city
- Local content: neighborhoods served, zip codes, landmarks, housing stock, climate specifics
- Services available section linking to all 15 service pages
- Neighborhoods served section (linking to spoke pages where they exist)
- City-specific FAQ (5-6 questions, different from service page FAQs)
- BERT table: response times to neighborhoods, or local service pricing context
- Internal links: 1 UP to homepage, 2-3 ACROSS to other city hubs + service pages

### CITY-SPECIFIC CONTENT (must be genuinely unique per city):
- **Port Wentworth**: Industrial corridor, Coastal Hwy, proximity to Savannah port, Godley Station growth, military families from nearby bases, older commercial properties along Hwy 21
- **Pooler**: Fastest-growing city in Chatham County, new construction boom, Tanger Outlets area, Pooler Parkway commercial development, family neighborhoods
- **Savannah**: Historic district homes (older HVAC systems), tourist economy businesses, coastal weather direct exposure, Victorian-era buildings with retrofit challenges
- **Garden City**: Working-class residential, industrial facilities, proximity to port logistics, affordable housing stock needing HVAC updates
- **Rincon**: Effingham County suburban growth, newer subdivisions, family-oriented community, slightly inland (less salt air)
- **Bloomingdale**: Small town, rural-suburban transition, larger lot homes, agricultural buildings needing climate control
- **Richmond Hill**: Bryan County, coastal proximity, Ford Plantation luxury homes vs standard residential, military connection (Fort Stewart)
- **Effingham County**: Springfield, Guyton, rapid suburban growth, new construction, county-wide service coverage

## PHASE 5: NEIGHBORHOOD SPOKE PAGES
Create `src/app/[city]/[neighborhood]/page.tsx` as a dynamic route.

Create `src/data/neighborhoods.ts` with content for the initial 10 neighborhood spokes:
1. port-wentworth/godley-station
2. port-wentworth/rice-hope
3. port-wentworth/cross-creek
4. port-wentworth/towne-park
5. port-wentworth/spring-lakes
6. pooler/pooler-parkway
7. pooler/west-chatham
8. savannah/west-savannah
9. savannah/henderson
10. savannah/woodville-bartow

Each neighborhood page needs:
- 600-1000 words, 80% unique content
- Microclimate/local factors specific to that neighborhood
- Housing stock description (age, type, common HVAC issues)
- 3-4 unique FAQ questions
- Links: 1 UP to city hub, 2-3 ACROSS to neighboring neighborhoods + 1-2 service pages

## PHASE 6: BLOG / PAA POSTS
Create `src/app/blog/page.tsx` (index) and `src/app/blog/[slug]/page.tsx` (individual posts).

Create `src/data/blog-posts.ts` with 10 complete blog posts (800-1200 words each):

1. **how-often-should-you-service-your-ac-in-savannah-ga** — Target: "how often service AC Savannah" — Links to: /hvac-maintenance, /savannah
2. **signs-your-hvac-system-needs-replacement-coastal-georgia** — Target: "signs HVAC needs replacement" — Links to: /ac-installation, /furnace-installation
3. **best-hvac-system-for-humidity-port-wentworth** — Target: "best HVAC for humidity" — Links to: /ac-installation, /port-wentworth, /indoor-air-quality
4. **how-much-does-ac-repair-cost-chatham-county** — Target: "AC repair cost Chatham County" — Links to: /ac-repair, /hvac-financing
5. **emergency-hvac-what-to-do-when-ac-fails-at-night** — Target: "emergency AC fails at night" — Links to: /emergency-hvac-service
6. **duct-cleaning-vs-duct-replacement-pooler-ga** — Target: "duct cleaning vs replacement" — Links to: /duct-cleaning, /duct-fabrication, /pooler
7. **how-salt-air-affects-hvac-systems-coastal-georgia** — Target: "salt air HVAC damage" — Links to: /hvac-maintenance, /ac-repair
8. **heat-pump-vs-central-ac-georgia-homeowners** — Target: "heat pump vs central AC Georgia" — Links to: /heat-pump-service, /ac-installation
9. **hvac-maintenance-checklist-port-wentworth-homeowners** — Target: "HVAC maintenance checklist" — Links to: /hvac-maintenance, /hvac-inspection, /port-wentworth
10. **why-ac-running-but-not-cooling-savannah-ga** — Target: "AC running not cooling" — Links to: /ac-repair, /savannah

Each blog post: Article schema, TLDR bullets, H2s with entity-language (no EMQs), 1 UP link to /blog or homepage, 2-3 ACROSS links to service/city pages. Every post must target a DIFFERENT search intent than every other post and every service page.

## PHASE 7: TRUST & LEGAL PAGES
- `/about` — E-E-A-T page: Karen Zollo bio, David Johnson bio (30 yrs), company story, values, licensing, service area. Include team schema.
- `/contact` — Full lead form, map embed, NAP, hours, emergency note. Include LocalBusiness schema ref.
- `/financing` — Financing options overview, CTA to call for details.
- `/privacy-policy` — Standard privacy policy.
- `/terms-of-service` — Standard terms.
- `/sitemap` — HTML sitemap with all pages organized by category.

## PHASE 8: PUBLIC FILES
- `public/robots.txt` — ALREADY EXISTS
- `public/llms.txt` — Short version: business name, what we do, where, phone, URL, top services
- `public/llms-full.txt` — Comprehensive: full service list, all areas served, team bios, hours, everything an LLM needs to recommend us
- `src/app/sitemap.xml/route.ts` — Dynamic XML sitemap generator that includes ALL pages (homepage, services, cities, neighborhoods, blog posts, about, contact)

## PHASE 9: FINAL CHECKS
After building everything:
1. Run `npm run build` — fix any TypeScript/build errors
2. Verify NO two pages share the same H1 or title tag
3. Verify NO two pages target the same primary keyword
4. Verify every page has: self-referencing canonical, breadcrumb schema, TLDR summary
5. Verify every service page has: Service schema, BERT table, FAQ with schema, internal links (1 UP + 2-3 ACROSS)
6. Verify every city page has: 80%+ unique content, local landmarks, neighborhood links
7. Verify every neighborhood page has: 80%+ unique content, microclimate data, links UP to city hub

## CONTENT QUALITY RULES
- Write like an experienced HVAC contractor, not a marketing agency
- Mention specific technical details (refrigerant types, SEER ratings, BTU calculations, duct gauge)
- Reference real coastal Georgia conditions (not generic "your area" copy)
- Conversational but professional tone
- Every page must provide genuine value — no thin filler content
- Use David Johnson's 30 years of experience as an authority signal throughout
- Pricing ranges should be realistic for the Savannah, GA market

## TOTAL DELIVERABLE
- 15 service pages
- 8 city hub pages
- 10 neighborhood spoke pages
- 10 blog posts
- 6 trust/legal pages (about, contact, financing, privacy, terms, sitemap)
- Homepage
- = ~50 pages, all with unique content, proper schema, internal linking, and zero keyword cannibalization

Build it all. Do not stop until `npm run build` succeeds.
