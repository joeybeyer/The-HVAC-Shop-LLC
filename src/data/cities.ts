export interface CityPage {
  slug: string;
  name: string;
  state: string;
  zip: string;
  metaDescription: string;
  heroHeading: string;
  tldrBullets: string[];
  intro: string;
  sections: { heading: string; content: string }[];
  bertTable: { headers: string[]; rows: string[][] };
  faqs: { question: string; answer: string }[];
  internalLinks: { up: string; across: string[] };
}

export const CITIES_DATA: CityPage[] = [
  {
    slug: 'port-wentworth',
    name: 'Port Wentworth',
    state: 'GA',
    zip: '31407',
    metaDescription:
      'HVAC service in Port Wentworth, GA. AC repair, installation, and maintenance for homes in Godley Station, Rice Hope, Cross Creek & all Port Wentworth neighborhoods. Call (912) 416-3449.',
    heroHeading: 'Reliable HVAC Service for Port Wentworth Homes and Businesses',
    tldrBullets: [
      'The HVAC Shop LLC is based in Port Wentworth at 101 S Coastal Hwy — your local HVAC contractor',
      'Serving all Port Wentworth neighborhoods: Godley Station, Rice Hope, Cross Creek, Towne Park, Spring Lakes',
      'ZIP code 31407 — same-day service available for most calls',
      'Industrial corridor expertise: commercial HVAC for businesses along Highway 21 and the port logistics area',
      'Salt air from the Savannah River requires annual condenser coil maintenance',
      'Call (912) 416-3449 for service or free estimates',
    ],
    intro: `Port Wentworth is home — literally. The HVAC Shop LLC operates out of 101 S Coastal Hwy, putting us minutes from every neighborhood in the city. When your air conditioner fails in the July heat or your furnace won't start on a January morning, you're not waiting for a contractor to drive in from Savannah. We're your neighbors, and we bring the same urgency to your call that we'd want if it were our own homes.`,
    sections: [
      {
        heading: 'HVAC in Port Wentworth\'s Rapidly Growing Residential Corridors',
        content: `Port Wentworth has transformed over the past decade from a small industrial city into one of Chatham County's most sought-after residential locations. The Godley Station subdivision and its surrounding development brought thousands of new homes — mostly built from the mid-2000s through the present — that feature modern HVAC systems in sealed, well-insulated construction. These newer homes often use 2-ton to 3-ton heat pump systems that are highly efficient but require specific diagnostic knowledge when they malfunction.

Rice Hope, Cross Creek, Towne Park, and Spring Lakes represent the residential diversity of Port Wentworth — a mix of 1990s and early 2000s construction alongside newer development, with varying insulation standards and ductwork quality. In these neighborhoods we see the full range of HVAC scenarios: equipment approaching the 15-20 year replacement window, ductwork that was adequate when installed but has developed leakage, and systems that have been serviced inconsistently.

The rapid growth has also attracted military families from Hunter Army Airfield and surrounding bases. We understand the needs of transient military households — full system assessments for newcomers who want to understand what they're moving into, and documentation packages that help sellers demonstrate the condition of their HVAC equipment when the time comes to PCS.`,
      },
      {
        heading: 'Commercial HVAC Demands of the Port Wentworth Industrial Corridor',
        content: `Port Wentworth's identity as a logistics and industrial hub — anchored by the Port of Savannah and the warehouses and distribution facilities that line Highway 21 and the Industrial District roads — creates a commercial HVAC demand that's unlike anything in purely residential communities. The industrial sector employs thousands of workers who depend on functional climate control for safety and productivity. OSHA heat stress standards are a real compliance consideration for warehouse and processing facility operators.

Our commercial HVAC team has experience with rooftop package units serving the retail and office buildings along Coastal Highway, split systems for the smaller commercial facilities throughout the city, and the industrial ventilation needs of light manufacturing operations. We understand that a business can't operate without cooling in July, which is why commercial service agreement clients receive priority dispatch and after-hours response.

The proximity to the Savannah River and tidal wetlands means that outdoor HVAC equipment in the lower-elevation parts of Port Wentworth faces accelerated salt corrosion. Annual condenser coil cleaning and protective coil coating are maintenance investments that pay back in extended equipment life — a business reality we discuss with every commercial maintenance client.`,
      },
      {
        heading: 'Neighborhoods and Areas We Serve in Port Wentworth',
        content: `Our Port Wentworth service area covers every neighborhood and zone in the city. We know the specific housing stock and equipment age distribution in each area, which helps us arrive with the right parts and the right diagnostic approach.

**Godley Station**: Primarily 2005–present construction with heat pump systems and sealed construction. High proportion of two-story homes where upper-floor comfort is a common concern. New construction warranty-related diagnostics are a common call type.

**Rice Hope**: Established residential neighborhood with a mix of 1990s and 2000s homes. Many original heat pump systems approaching end of life. Duct inspection is often a priority here.

**Cross Creek**: Compact, established neighborhood. Older homes in parts of the subdivision may have original equipment from the 1990s. First-time homebuyers in Cross Creek often need a full system assessment.

**Towne Park and Spring Lakes**: Newer construction in the active growth corridor north of I-16. Modern construction with good insulation but new enough that warranty issues and setup questions are common. We're familiar with the builders active in these subdivisions and the HVAC brands they typically specify.`,
      },
    ],
    bertTable: {
      headers: ['Neighborhood', 'Typical Home Age', 'Common Equipment', 'Avg Response Time'],
      rows: [
        ['Godley Station', '2005–present', 'Heat pump, 2–3 ton', '< 30 min'],
        ['Rice Hope', '1990s–2005', 'Heat pump or split system', '< 30 min'],
        ['Cross Creek', '1990s–2000s', 'Split system, some heat pump', '< 30 min'],
        ['Towne Park', '2010–present', 'Heat pump, high efficiency', '< 30 min'],
        ['Spring Lakes', '2015–present', 'Heat pump, inverter models', '< 30 min'],
        ['Industrial Corridor', 'Varied', 'RTU, split system commercial', '< 45 min'],
      ],
    },
    faqs: [
      {
        question: 'Does The HVAC Shop LLC serve all of Port Wentworth, including the industrial areas?',
        answer: 'Yes. We serve all residential neighborhoods and commercial/industrial properties throughout Port Wentworth. Our commercial team handles rooftop units and industrial HVAC for businesses in the Highway 21 corridor and the logistics facilities near the port.',
      },
      {
        question: 'How close is The HVAC Shop to my home in Godley Station?',
        answer: 'Our shop is at 101 S Coastal Hwy in Port Wentworth, putting us within 5–10 minutes of most Godley Station addresses. For urgent service calls, we typically arrive within 30 minutes during business hours.',
      },
      {
        question: 'My home in Port Wentworth was built in 2008 — when should I expect to replace the HVAC system?',
        answer: 'Systems installed in 2008 are approaching or at the typical 15-year service life threshold. If it\'s running well and has been maintained, it may have 3–5 more years of reliable service. A system assessment will tell you the condition of the major components and help you plan accordingly.',
      },
      {
        question: 'Do you service the military families in Port Wentworth near Hunter Army Airfield?',
        answer: 'Yes, and we understand the specific needs of military households — quick turnaround, honest assessments, and documentation that supports both PCS moves and home inspections. We work with several property managers who handle military family rentals in the Port Wentworth area.',
      },
      {
        question: 'Is salt air from the Savannah River really damaging my AC condenser?',
        answer: 'It\'s a real factor, particularly for properties within a couple of miles of the river and tidal areas. We see measurably faster condenser coil fin degradation in these locations compared to homes further inland. Annual coil cleaning and protective coil coating are the recommended preventive measures.',
      },
    ],
    internalLinks: { up: '/', across: ['/pooler', '/savannah', '/ac-repair'] },
  },

  {
    slug: 'pooler',
    name: 'Pooler',
    state: 'GA',
    zip: '31322',
    metaDescription:
      'HVAC service in Pooler, GA. AC repair, installation & maintenance for Pooler\'s fast-growing residential and commercial areas. Serving all Pooler neighborhoods. Call (912) 416-3449.',
    heroHeading: 'HVAC Service for Pooler\'s Booming Residential and Commercial Growth',
    tldrBullets: [
      'Pooler is Chatham County\'s fastest-growing city — thousands of new homes need qualified HVAC service',
      'The HVAC Shop LLC serves all Pooler neighborhoods including Pooler Parkway, West Chatham, and new construction',
      'New construction HVAC warranty issues and first-time system service are common in Pooler',
      'Commercial HVAC for the Tanger Outlets area, Pooler Parkway retail corridor, and office development',
      'ZIP code 31322 — typically 30–45 minute response from our Port Wentworth location',
      'Call (912) 416-3449 for service estimates and emergency calls',
    ],
    intro: `Pooler's growth has been remarkable — from a small railroad town to one of Georgia's fastest-growing cities, Pooler's residential and commercial development has created a large population of homeowners with relatively new HVAC equipment who are encountering their first service needs. The HVAC Shop LLC knows Pooler's housing stock, the builders who've been active here, and the specific equipment configurations common in each neighborhood corridor.`,
    sections: [
      {
        heading: 'New Construction HVAC in Pooler\'s Expanding Neighborhoods',
        content: `The majority of Pooler's residential growth has occurred through new construction developments along the major corridors — Pooler Parkway, Pooler Industries Boulevard, and the West Chatham area. Homes built in these developments typically feature modern heat pump systems with variable-speed blowers and programmable or smart thermostats. The construction quality is generally good by current standards, but even well-built new homes develop HVAC issues as they age and as occupancy patterns differ from builder assumptions.

Common new construction HVAC issues in Pooler: refrigerant charge verification after the first summer season (builder installations sometimes leave systems slightly over or undercharged), thermostat calibration and setup, airflow balancing for two-story homes where the second floor runs significantly warmer than the first, and duct leakage testing that often reveals better-than-expected results on new construction but occasionally finds installation deficiencies that the builder should address under warranty.

We work with several Pooler homebuilders and can coordinate with construction schedules for new installations. We also respond to homeowner calls when builder warranty HVAC service has been slow or unhelpful — we're honest about whether an issue is a warranty claim the builder should address or a homeowner service item.`,
      },
      {
        heading: 'Commercial HVAC in the Pooler Retail and Development Corridor',
        content: `The Pooler commercial corridor along I-16 and Pooler Parkway has become one of the most active commercial zones in the Savannah metropolitan area. The Tanger Outlets, surrounding retail development, hotels, and the growing medical and professional office sector along the Pooler Parkway corridor represent significant commercial HVAC demand. Retail environments have specific HVAC requirements: high occupancy loads that increase the cooling demand, frequent door openings that affect humidity control, and continuous operation schedules that require planned maintenance to avoid disruptions.

We offer commercial service agreements for Pooler retail and office clients that include scheduled maintenance during low-traffic hours, priority emergency dispatch, and documented service history for lease compliance documentation. Restaurant and food service operations along the Pooler commercial corridor benefit from our understanding of kitchen exhaust and makeup air requirements — a dimension of commercial HVAC that general contractors sometimes overlook.

The proximity of Savannah/Hilton Head International Airport has also brought aviation-related light industrial development to the I-95/I-16 interchange area near Pooler. Light manufacturing and aviation services facilities have specific HVAC needs that our commercial team addresses.`,
      },
      {
        heading: 'Pooler\'s Climate Context and What It Means for Your HVAC Equipment',
        content: `Pooler sits slightly further from the coast than Port Wentworth and Savannah, which means marginally reduced salt air exposure — but still very much within the coastal Georgia climate zone where humidity, pollen, and extreme summer heat drive HVAC operating hours well above national averages. A Pooler home runs the air conditioning 8–9 months per year, accumulating 2,000–2,500 cooling hours annually. For a system rated for 15 years at 500 hours/year, the math suggests significantly shorter actual service life.

Pooler's newer construction also brings specific considerations: tightly constructed homes with minimal natural infiltration tend to have higher indoor humidity than comparable older homes unless the HVAC system is sized and configured to handle the latent load. We frequently see Pooler homeowners complaining that their new home "always feels humid" when the AC is running fine by cooling metrics — the issue is insufficient dehumidification in a tight envelope, a situation our indoor air quality team addresses with whole-home dehumidification solutions.`,
      },
    ],
    bertTable: {
      headers: ['Pooler Zone', 'Development Era', 'Typical System', 'Common Service Calls'],
      rows: [
        ['Pooler Parkway corridor', '2000s–present', 'Heat pump 2.5–3 ton', 'First service, airflow balance'],
        ['West Chatham residential', '1990s–2010s', 'Heat pump or split', 'Aging equipment, AC repair'],
        ['Tanger Outlets commercial', '2001–present', 'RTU, split system', 'Commercial PM, emergency'],
        ['I-16 corridor new development', '2010–present', 'High-efficiency heat pump', 'Setup, thermostat, warranty'],
        ['Airport area light industrial', '2000s–present', 'Commercial split/RTU', 'Commercial service agreements'],
      ],
    },
    faqs: [
      {
        question: 'My new Pooler home is only 3 years old but the upstairs is always 5 degrees warmer. Why?',
        answer: 'This is one of the most common complaints in Pooler\'s new construction. Causes include undersized return air for the second floor, inadequate supply CFM to upper bedrooms, or poor zoning design. We diagnose this with an airflow measurement and duct assessment and recommend either ductwork modification or a zoning system addition.',
      },
      {
        question: 'Does The HVAC Shop LLC serve the Pooler Parkway commercial area?',
        answer: 'Yes. We service retail, restaurant, and office HVAC throughout the Pooler commercial corridor. Commercial service agreements with priority scheduling are available for businesses that need reliable HVAC support.',
      },
      {
        question: 'How far is The HVAC Shop LLC from Pooler?',
        answer: 'Our location at 101 S Coastal Hwy in Port Wentworth is approximately 8–12 minutes from most Pooler neighborhoods via I-16 or Highway 21. We typically achieve 30–45 minute response times for standard service calls in Pooler.',
      },
    ],
    internalLinks: { up: '/', across: ['/port-wentworth', '/savannah', '/ac-installation'] },
  },

  {
    slug: 'savannah',
    name: 'Savannah',
    state: 'GA',
    zip: '31401',
    metaDescription:
      'HVAC service in Savannah, GA. AC repair and maintenance for historic homes, modern construction, and Savannah businesses. Serving all Savannah neighborhoods. Call (912) 416-3449.',
    heroHeading: 'HVAC Solutions for Savannah\'s Historic Homes, Modern Buildings, and Coastal Climate',
    tldrBullets: [
      'Savannah\'s historic homes present unique HVAC challenges — retrofit solutions for buildings not designed for modern HVAC',
      'The HVAC Shop LLC serves all Savannah neighborhoods including West Savannah, Henderson, and Woodville-Bartow',
      'Coastal exposure means faster equipment degradation — annual maintenance is essential near the waterfront',
      'Tourist economy businesses and downtown commercial properties require responsive HVAC service',
      'Victorian-era homes often need ductwork designed specifically for their architectural constraints',
      'Call (912) 416-3449 for Savannah service',
    ],
    intro: `Savannah is one of the most architecturally distinctive cities in the United States, and that architectural character creates HVAC challenges that don't exist anywhere else in our service area. Installing or servicing HVAC equipment in an 1890s Victorian on Jones Street requires a completely different approach than a 2020 build in Godley Station. The HVAC Shop LLC has the experience working in Savannah's historic and established neighborhoods to deliver solutions that work within the building's constraints.`,
    sections: [
      {
        heading: 'HVAC Retrofits in Savannah\'s Historic District and Older Neighborhoods',
        content: `Savannah's historic district and the established residential neighborhoods that surround it contain a significant stock of homes built before modern HVAC systems existed. These homes — constructed with plaster walls, original wood floors, single-pane windows, and high ceilings — present challenges for HVAC installation and efficiency that require creative engineering rather than a standard approach.

Duct routing in historic homes is the primary challenge. In a home with no attic clearance for horizontal duct runs, no interior wall cavities accessible for vertical drops, and floor systems that can't be disturbed, getting supply air from a central air handler to every room requires solutions like mini split systems for individual rooms, high-velocity mini duct systems (using smaller, more flexible tubing), or careful integration with existing chimney chases and mechanical spaces.

Efficiency is inherently limited in older construction without significant investment in the building envelope. A historic Savannah home with original single-pane windows loses heat and gains solar heat at rates that make the AC system's efficiency rating almost irrelevant — the building is the limiting factor, not the equipment. We help homeowners understand this relationship and set realistic expectations rather than overselling high-efficiency equipment that can't deliver its rated performance in a leaky 1920s building.`,
      },
      {
        heading: 'Serving Savannah\'s Tourist Economy and Commercial District',
        content: `Savannah's downtown historic district is one of the most visited urban destinations in the Southeast, and the tourism and hospitality sector that serves those visitors — hotels, restaurants, tour operators, retail shops — has HVAC needs that reflect their 7-day, extended-hours operations. A downtown restaurant can't afford to have the dining room air conditioning fail on a Saturday in August, and the service response expectations are different from a residential call.

We maintain commercial service agreements with downtown Savannah businesses that include after-hours emergency response, scheduled preventive maintenance during off-hours, and rapid response during peak tourism periods. River Street restaurants and bars, Broughton Street retail, and the growing hotel inventory around the historic squares all represent commercial accounts where relationship and reliability matter as much as technical competency.

The building stock in the commercial historic district — repurposed warehouses, converted row houses, and original commercial buildings — requires the same creative HVAC approach as residential historic work. We've installed through-wall systems, mini splits, and high-velocity duct systems in historic commercial buildings where a standard central system installation would require unacceptable damage to historic fabric.`,
      },
      {
        heading: 'West Savannah, Henderson, and Woodville-Bartow: Established Residential Neighborhoods',
        content: `Savannah's established residential neighborhoods west and south of the historic district — West Savannah, Henderson, Woodville-Bartow, and adjacent areas — contain primarily mid-20th century construction: brick ranch homes, wood-frame houses from the 1950s through the 1970s, and some older construction. The HVAC equipment in these neighborhoods spans a wide range of age and condition, from well-maintained systems with decades of documented service to neglected equipment that's survived on luck alone.

In these neighborhoods, we encounter housing stock where the original HVAC installation was done decades ago with equipment and ductwork that may have been adequate then but has degraded significantly. We find asbestos-insulated duct wrap (which we don't disturb — an abatement contractor handles that before we do duct work), deteriorated fiberglass duct board, and flex duct connections that separated years ago and have been "fixed" with tape that failed. Comprehensive assessment before any repair or replacement is essential in these neighborhoods.

The economic diversity of these neighborhoods means our customer interactions range from straightforward budget-conscious repairs to complete system replacements in homes that are being improved for resale or for generational occupants who've finally decided to upgrade. We approach every call with the same respect and honesty regardless of the property value.`,
      },
    ],
    bertTable: {
      headers: ['Savannah Area', 'Housing Type', 'Common HVAC Need', 'Specialty Required'],
      rows: [
        ['Historic district', 'Pre-1940, plaster walls', 'Mini split, high-velocity', 'Historic retrofit'],
        ['Victorian homes (various)', 'Late 1800s–1920s', 'Duct design, mini split', 'Creative routing'],
        ['West Savannah residential', '1950s–1970s ranch', 'System replacement, duct repair', 'Older equipment experience'],
        ['Henderson neighborhood', '1960s–1980s', 'Repair, retrofit, upgrade', 'Mixed equipment age'],
        ['Woodville-Bartow', '1950s–1980s', 'Service, assessment, replacement', 'Cost-effective solutions'],
        ['Downtown commercial', 'Historic commercial buildings', 'Mini split, through-wall', 'Commercial historic retrofit'],
      ],
    },
    faqs: [
      {
        question: 'Can you install central air in a Savannah historic home that currently has no ductwork?',
        answer: 'It depends on the specific home. Some historic homes have enough attic or basement clearance for a limited central system; others are better served by a multi-zone mini split system or a high-velocity mini duct system. We assess each home individually and present the options honestly, including the invasiveness and cost of each approach.',
      },
      {
        question: 'My Savannah downtown restaurant has a failed rooftop unit. How quickly can you respond?',
        answer: 'Commercial service agreement customers receive priority dispatch, including after-hours response. For new commercial calls, we target same-day response for businesses during operating hours. Call (912) 416-3449 directly for emergency commercial service.',
      },
      {
        question: 'Is the salt air from the Savannah waterfront damaging my AC condenser faster than it should?',
        answer: 'Properties within a mile or two of the river, Forsyth Park area, and coastal Savannah neighborhoods see measurably faster condenser coil degradation from salt air. Annual coil cleaning and protective coatings significantly extend equipment life. If you haven\'t had maintenance in 2+ years and are near the waterfront, a service visit is highly recommended.',
      },
      {
        question: 'Do you provide HVAC service for vacation rental properties in Savannah\'s historic district?',
        answer: 'Yes. We work with several property managers and individual vacation rental owners to provide priority response, documentation for rental records, and maintenance scheduling that fits around booking calendars.',
      },
    ],
    internalLinks: { up: '/', across: ['/port-wentworth', '/garden-city', '/ac-repair'] },
  },

  {
    slug: 'garden-city',
    name: 'Garden City',
    state: 'GA',
    zip: '31408',
    metaDescription:
      'HVAC service in Garden City, GA. AC repair, maintenance, and installation for Garden City homes and industrial businesses. Call (912) 416-3449.',
    heroHeading: 'Dependable HVAC Service for Garden City Homes and Industrial Facilities',
    tldrBullets: [
      'The HVAC Shop LLC serves all of Garden City, GA with residential and commercial HVAC',
      'Garden City\'s proximity to the Port of Savannah creates significant industrial HVAC demand',
      'Older working-class residential neighborhoods with equipment needing updates or replacement',
      'ZIP code 31408 — responsive service from our Port Wentworth location',
      'Honest assessments and fair pricing for every Garden City customer',
      'Call (912) 416-3449 for service',
    ],
    intro: `Garden City sits between Port Wentworth and Savannah in the port logistics corridor — a working community with a mix of established residential neighborhoods and industrial facilities that serve the Port of Savannah complex. The HVAC Shop LLC knows Garden City well and provides the same quality service here as anywhere else in our territory.`,
    sections: [
      {
        heading: 'Residential HVAC in Garden City\'s Established Neighborhoods',
        content: `Garden City's residential neighborhoods — primarily developed from the 1940s through the 1980s — contain working-class housing stock that often has deferred HVAC maintenance or aging equipment operating past its intended service life. We approach Garden City residential calls with the understanding that homeowners here are looking for honest, cost-effective solutions, not upsells. A 15-year-old system that needs a capacitor gets a capacitor; we don't manufacture urgency around a replacement that isn't yet necessary.

That said, we do encounter systems in Garden City that have genuinely reached end of life — equipment from the early 2000s running on R-22 refrigerant, with corroded heat exchangers or compressors drawing high amps. For these situations, we provide a clear comparison of repair cost versus replacement cost versus projected operating cost differences, and let the homeowner make an informed decision. We offer financing for qualifying customers for whom a system replacement is the right call but the upfront cost is a barrier.

The industrial corridor character of Garden City means some residential properties are adjacent to manufacturing and logistics facilities, which affects indoor air quality from external sources. These homes sometimes benefit from enhanced filtration and air sealing along with HVAC service.`,
      },
      {
        heading: 'Commercial and Industrial HVAC Near the Port of Savannah',
        content: `The logistics infrastructure that supports the Port of Savannah runs through Garden City, and the warehouse, distribution, and industrial facilities in this corridor have commercial HVAC needs that we serve regularly. Rooftop units on logistics warehouses, split systems for office spaces within industrial facilities, and process cooling for light manufacturing operations all fall within our commercial scope.

Port logistics operations run around the clock, which means HVAC failures can't always wait until business hours to be addressed. Our commercial service agreement program is particularly valuable for Garden City industrial clients who need the confidence of a documented after-hours response capability. We're familiar with the operational constraints of port-adjacent facilities and coordinate service to minimize disruption to loading and logistics operations.`,
      },
    ],
    bertTable: {
      headers: ['Garden City Zone', 'Primary Need', 'Typical Equipment', 'Response Time'],
      rows: [
        ['Residential neighborhoods', 'Service, repair, replacement', 'Older split systems', '< 45 min'],
        ['Industrial/port logistics', 'Commercial service, RTU', 'Rooftop units, split commercial', '< 45 min'],
        ['Commercial/retail strip', 'Commercial PM, emergency', 'Split system, mini split', '< 45 min'],
      ],
    },
    faqs: [
      {
        question: 'Does The HVAC Shop LLC offer affordable repair options for Garden City homeowners?',
        answer: 'Yes. We provide straightforward pricing for repairs, give honest assessments of whether repair or replacement is the better value, and offer financing for qualified customers who need a full system replacement.',
      },
      {
        question: 'Can you service industrial HVAC in the port logistics corridor near Garden City?',
        answer: 'Yes. Commercial and industrial HVAC service is a core part of our business. Contact us for commercial service agreements covering rooftop units and industrial climate control in the Garden City/Port Wentworth industrial zone.',
      },
    ],
    internalLinks: { up: '/', across: ['/port-wentworth', '/savannah', '/commercial-hvac'] },
  },

  {
    slug: 'rincon',
    name: 'Rincon',
    state: 'GA',
    zip: '31326',
    metaDescription:
      'HVAC service in Rincon, GA (Effingham County). AC repair, installation & maintenance for Rincon\'s growing residential neighborhoods. Call (912) 416-3449.',
    heroHeading: 'Quality HVAC Service for Rincon\'s Growing Effingham County Community',
    tldrBullets: [
      'Rincon is one of Georgia\'s fastest-growing communities — The HVAC Shop LLC serves this Effingham County suburb',
      'New construction homes dominate much of Rincon\'s housing stock — modern systems with specific service needs',
      'Slightly inland location means less salt air exposure but still full coastal Georgia heat and humidity',
      'ZIP code 31326 — typically 30–40 minute response from Port Wentworth',
      'Family-oriented residential community with growing commercial presence',
      'Call (912) 416-3449 for Rincon HVAC service',
    ],
    intro: `Rincon has grown from a small Effingham County community into a substantial suburban city, attracting families who want the Savannah metro lifestyle with more land and a quieter community character. The newer construction that dominates much of Rincon's housing stock means homeowners are working with modern heat pump systems that are efficient but require knowledgeable service when issues arise.`,
    sections: [
      {
        heading: 'HVAC Service for Rincon\'s New Construction Subdivisions',
        content: `Rincon's growth has been driven primarily by single-family residential development — subdivisions with 200-500 homes that attract young families and commuters who work in Savannah or at the port. These homes, built largely from 2000 through the present, typically feature 2 to 3-ton heat pump systems with variable-speed blowers, modern ductwork, and programmable thermostats.

In newer Rincon homes, the most common service calls involve thermostat issues, refrigerant charge verification after the first few seasons, airflow balancing in two-story floor plans, and the first time the system has needed maintenance since original installation. We find that Rincon homeowners are often first-time homeowners from a homebuying perspective and appreciate the educational aspect of our service calls — explaining what we found, what it means, and what to watch for in the future.

The slightly inland location compared to coastal communities like Port Wentworth means Rincon homes experience less salt air exposure, which translates to slower condenser coil degradation. However, the coastal Georgia humidity is still very much present, and the July-August heat still drives the same AC operating hours. Annual maintenance is still essential.`,
      },
      {
        heading: 'Rincon\'s Commercial Growth and HVAC Needs',
        content: `Rincon's Highway 21 corridor and Rincon Industrial Boulevard have attracted retail, restaurant, and light commercial development that serves the growing residential population. The commercial HVAC needs here are primarily standard retail and small-office systems — split systems and smaller rooftop units serving 2,000–10,000 sq ft commercial spaces.

Our response time to Rincon runs 30–40 minutes from our Port Wentworth location, which makes us practical for both residential and commercial service in this area. Commercial clients appreciate having a contractor who can respond consistently rather than relying on companies that may deprioritize Effingham County calls when Chatham County business is busy.`,
      },
    ],
    bertTable: {
      headers: ['Rincon Area', 'Housing Type', 'Equipment Era', 'Common Calls'],
      rows: [
        ['New subdivisions (2000–present)', 'Single-family new construction', '2000–present heat pump', 'First service, airflow, thermostat'],
        ['Older residential', '1980s–1990s homes', 'Aging split systems', 'Repair, assessment, replacement'],
        ['Highway 21 commercial', 'Strip retail, office', 'Smaller commercial systems', 'Commercial PM, repair'],
        ['Industrial Boulevard', 'Light industrial/warehouse', 'Commercial split, RTU', 'Commercial service agreements'],
      ],
    },
    faqs: [
      {
        question: 'Does The HVAC Shop LLC serve Rincon, GA?',
        answer: 'Yes. Rincon is within our regular service area. We typically achieve 30–40 minute response times for standard calls, with after-hours emergency service available via (912) 416-3449.',
      },
      {
        question: 'My Rincon home was built in 2010. Should I be thinking about HVAC replacement soon?',
        answer: 'A 2010 installation is about 15 years old — at the early end of the replacement consideration window. Whether replacement is warranted depends on the system\'s condition, maintenance history, and whether any major components need replacing. A system assessment gives you a clear picture.',
      },
    ],
    internalLinks: { up: '/', across: ['/port-wentworth', '/effingham-county', '/hvac-maintenance'] },
  },

  {
    slug: 'bloomingdale',
    name: 'Bloomingdale',
    state: 'GA',
    zip: '31302',
    metaDescription:
      'HVAC service in Bloomingdale, GA. AC repair, installation & maintenance for Bloomingdale homes and properties. Call (912) 416-3449.',
    heroHeading: 'Trusted HVAC Service for Bloomingdale\'s Homes and Agricultural Properties',
    tldrBullets: [
      'The HVAC Shop LLC serves Bloomingdale, GA with residential and agricultural HVAC solutions',
      'Rural-suburban transition area with larger lots and diverse building types',
      'Less salt air than coastal communities — but Georgia heat and humidity still demand strong AC',
      'We service agricultural buildings, pole barns, and rural properties needing climate control',
      'ZIP code 31302 — response from Port Wentworth is approximately 20–30 minutes',
      'Call (912) 416-3449 for Bloomingdale service',
    ],
    intro: `Bloomingdale represents the rural-suburban transition zone in western Chatham County — larger lots, quieter streets, and a community character distinct from the faster-growing areas closer to I-16. The housing stock here is more varied, with older homes that have seen gradual improvement over the decades alongside newer construction on rural parcels.`,
    sections: [
      {
        heading: 'HVAC for Bloomingdale\'s Diverse Housing Stock',
        content: `Bloomingdale homes range from older farmhouses and early subdivisions to newer construction on rural parcels. This diversity means we encounter a wider range of equipment age and condition than in newer suburban communities. A Bloomingdale service call might involve a 1978 split system that's been repaired repeatedly and deserves an honest end-of-life assessment, or a 2015 heat pump that needs its first tune-up.

Larger homes on larger lots — characteristic of Bloomingdale's rural character — sometimes have complex multi-zone needs that smaller suburban homes don't. A 3,000 sq ft home on 2 acres with a separate workshop building might need an entirely separate HVAC system for the workspace alongside the residential system. We approach these situations with complete solutions rather than piecemeal fixes.

Agricultural buildings and pole barns also appear in our Bloomingdale calls. Climate control for equipment storage, workshops, and agricultural processing spaces requires different solutions than residential HVAC — often commercial mini splits or dedicated building systems that handle the larger unconditioned volumes and wider temperature swings.`,
      },
    ],
    bertTable: {
      headers: ['Bloomingdale Property Type', 'HVAC Need', 'Typical Solution', 'Response Time'],
      rows: [
        ['Established residential (pre-2000)', 'Service, repair, replacement', 'Split system or heat pump', '20–30 min'],
        ['Newer residential (2000+)', 'Service, first tune-up', 'Heat pump', '20–30 min'],
        ['Agricultural/workshop', 'Climate control', 'Mini split, dedicated system', '20–30 min'],
        ['Commercial/rural business', 'Commercial HVAC', 'Commercial split or RTU', '20–30 min'],
      ],
    },
    faqs: [
      {
        question: 'Does The HVAC Shop LLC service agricultural or rural properties in Bloomingdale?',
        answer: 'Yes. We install and service climate control systems for agricultural buildings, workshops, and rural properties throughout western Chatham County including Bloomingdale.',
      },
    ],
    internalLinks: { up: '/', across: ['/port-wentworth', '/rincon', '/mini-split-installation'] },
  },

  {
    slug: 'richmond-hill',
    name: 'Richmond Hill',
    state: 'GA',
    zip: '31324',
    metaDescription:
      'HVAC service in Richmond Hill, GA (Bryan County). AC repair, installation & maintenance for Richmond Hill homes from Fort Stewart area to Ford Plantation. Call (912) 416-3449.',
    heroHeading: 'Professional HVAC Service for Richmond Hill and Bryan County',
    tldrBullets: [
      'The HVAC Shop LLC serves Richmond Hill and Bryan County with full residential and commercial HVAC',
      'Military families from Fort Stewart\'s proximity make up a significant part of Richmond Hill\'s population',
      'Richmond Hill spans from luxury Ford Plantation estates to standard residential — we serve both',
      'Coastal proximity means salt air considerations apply here as in the Savannah area',
      'ZIP code 31324 — 30–45 minute response from Port Wentworth via I-95',
      'Call (912) 416-3449 for Richmond Hill service',
    ],
    intro: `Richmond Hill has grown from a small Bryan County community into a desirable residential destination — close enough to Fort Stewart to attract military families, beautiful enough with its coastal scenery and historic character to attract civilian families seeking a quieter alternative to Savannah's urban environment. The HVAC Shop LLC serves the full spectrum of Richmond Hill housing, from the standard residential neighborhoods off Highway 17 to the premium estates of Ford Plantation.`,
    sections: [
      {
        heading: 'HVAC Service for Richmond Hill\'s Military and Civilian Residential Communities',
        content: `Fort Stewart's proximity brings a consistent stream of military families to Richmond Hill, creating a rental and owner-occupied housing market with specific characteristics. Military families often need quick turnaround on HVAC service, clear documentation of what was done, and honest assessments that help them understand the property they're occupying or considering purchasing. We respond to these needs with the same efficiency we'd want if we were PCSing to an unfamiliar community.

Richmond Hill's civilian residential growth has brought several substantial subdivisions along Highway 17, the 144 Corridor, and the Ford Avenue area. These homes represent a mix of 2000s through current construction, with modern heat pump systems that share characteristics with the Pooler new construction market. First-time service needs, thermostat optimization, and annual maintenance are the dominant service call types in newer Richmond Hill neighborhoods.

The coastal location — Richmond Hill sits on the Ogeechee River near the coast — means salt air exposure is a real factor for outdoor HVAC equipment. Annual maintenance including condenser coil cleaning and protective coating is the recommended practice for homes near the water.`,
      },
      {
        heading: 'Premium HVAC Service for Ford Plantation and High-Value Richmond Hill Estates',
        content: `Ford Plantation and other premium estate properties in Bryan County have HVAC needs that reflect the scale and quality standards of the properties themselves. Multi-zone systems, high-efficiency variable-speed equipment, whole-home dehumidification, and IAQ systems are standard expectations rather than optional upgrades. Equipment failure response for high-value properties requires the same urgency as any other emergency — the stakes are simply higher given the property values and occupant expectations.

We service multi-zone systems, VRF (Variable Refrigerant Flow) systems, and the complete range of residential and light-commercial HVAC equipment that premium estates employ. We approach these calls with discretion, professionalism, and the technical depth that complex systems require.`,
      },
    ],
    bertTable: {
      headers: ['Richmond Hill Area', 'Housing Type', 'HVAC Profile', 'Response Time'],
      rows: [
        ['Military rental housing', 'Standard residential', 'Heat pump 2–3 ton', '30–45 min'],
        ['Civilian residential subdivisions', '2000–present', 'Heat pump, high efficiency', '30–45 min'],
        ['Ford Plantation estates', 'Luxury residential', 'Multi-zone, premium systems', '30–45 min'],
        ['Highway 17 commercial', 'Retail/commercial', 'Commercial split, RTU', '30–45 min'],
      ],
    },
    faqs: [
      {
        question: 'Does The HVAC Shop LLC serve Fort Stewart-area military housing in Richmond Hill?',
        answer: 'Yes. We understand the specific needs of military families — fast response, clear documentation, and honest assessments. We work with both on-post and off-post housing in the Fort Stewart / Richmond Hill corridor.',
      },
      {
        question: 'Can you service luxury estate HVAC systems in the Ford Plantation area?',
        answer: 'Yes. We service multi-zone, VRF, and premium residential HVAC systems with the technical expertise and professionalism that high-value properties require.',
      },
    ],
    internalLinks: { up: '/', across: ['/savannah', '/port-wentworth', '/heat-pump-service'] },
  },

  {
    slug: 'effingham-county',
    name: 'Effingham County',
    state: 'GA',
    zip: '31329',
    metaDescription:
      'HVAC service throughout Effingham County, GA — Springfield, Guyton, and all unincorporated areas. AC repair, installation & maintenance. Call (912) 416-3449.',
    heroHeading: 'County-Wide HVAC Service for Effingham County Homes and Businesses',
    tldrBullets: [
      'The HVAC Shop LLC serves all of Effingham County including Springfield, Guyton, and unincorporated areas',
      'Effingham County is one of Georgia\'s fastest-growing counties — rapid new construction creates HVAC demand',
      'Inland location reduces salt air impact but Georgia heat and humidity are fully present',
      'County-wide coverage from Port Wentworth — serving both growing suburbs and established rural communities',
      'New construction HVAC installations and residential service across the county',
      'Call (912) 416-3449 for Effingham County service',
    ],
    intro: `Effingham County's rapid growth has been remarkable — from a primarily agricultural county to one of Georgia's fastest-growing, driven by families seeking suburban space within commuting distance of the Savannah metro. Springfield, Guyton, and the unincorporated subdivisions represent a county in transition, and the HVAC needs reflect both the new construction boom and the established rural communities that have existed here for generations.`,
    sections: [
      {
        heading: 'New Construction HVAC Across Effingham County\'s Growth Corridors',
        content: `The major growth corridors in Effingham County — Highway 21 between Rincon and Springfield, the I-95 corridor, and the developing areas around Guyton — have seen significant residential subdivision development over the past decade. These new homes feature modern HVAC systems similar to what we install throughout Chatham County, though the inland location provides slightly more forgiving conditions for outdoor equipment than our coastal communities.

First-time homeowners in new Effingham County subdivisions often haven't owned a home before and benefit from the educational component of our service calls. We explain filter maintenance, thermostat programming, what the maintenance schedule should look like, and what warning signs to watch for — information that reduces emergency calls and extends equipment life.

Agricultural and rural properties throughout Effingham County also call on us for climate control solutions for farm buildings, equipment storage facilities, and the homes on larger rural parcels. These applications often involve larger spaces, less controlled environments, and budget considerations that differ from standard suburban residential work.`,
      },
      {
        heading: 'Springfield and Guyton: Established Communities with Diverse HVAC Needs',
        content: `Springfield (county seat) and Guyton represent Effingham County's established communities, with housing stocks that span from decades-old brick homes to new construction in expanding residential areas. In Springfield and Guyton, we see the full service spectrum — straightforward repairs on reliable equipment, systems at end of life that need honest assessment, and upgrade opportunities for homeowners ready to improve their comfort and reduce their energy costs.

The county government facilities and commercial businesses in Springfield, along with the agricultural sector throughout the county, also contribute to our commercial HVAC activity in this area. We understand the budget constraints and practical requirements of county government facilities and serve these clients with the same straightforward approach as our residential customers.`,
      },
    ],
    bertTable: {
      headers: ['Effingham County Area', 'Primary Housing', 'HVAC Focus', 'Response Time'],
      rows: [
        ['Springfield', 'Established residential/commercial', 'Service, repair, commercial', '35–50 min'],
        ['Guyton', 'Residential mixed age', 'Service, maintenance', '40–55 min'],
        ['Rincon adjacent subdivisions', 'New construction', 'First service, install', '30–40 min'],
        ['Rural unincorporated areas', 'Rural homes, agricultural', 'Diverse solutions', '40–60 min'],
        ['I-95 commercial corridor', 'Commercial/light industrial', 'Commercial HVAC', '35–50 min'],
      ],
    },
    faqs: [
      {
        question: 'Does The HVAC Shop LLC cover all of Effingham County, including rural areas?',
        answer: 'Yes. We serve Springfield, Guyton, Rincon, and unincorporated Effingham County. Response times to more distant rural areas may extend to 40–60 minutes, which we communicate upfront.',
      },
      {
        question: 'Can you install HVAC in a new home being built in an Effingham County subdivision?',
        answer: 'Yes. We work with builders and homeowners on new construction HVAC installations throughout Effingham County, coordinating with the construction schedule for rough-in and final installation.',
      },
    ],
    internalLinks: { up: '/', across: ['/rincon', '/port-wentworth', '/ac-installation'] },
  },
];
