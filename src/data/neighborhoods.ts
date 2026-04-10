export interface NeighborhoodPage {
  citySlug: string;
  cityName: string;
  slug: string;
  name: string;
  metaDescription: string;
  heroHeading: string;
  tldrBullets: string[];
  intro: string;
  sections: { heading: string; content: string }[];
  faqs: { question: string; answer: string }[];
  internalLinks: { up: string; across: string[] };
}

export const NEIGHBORHOODS_DATA: NeighborhoodPage[] = [
  {
    citySlug: 'port-wentworth',
    cityName: 'Port Wentworth',
    slug: 'godley-station',
    name: 'Godley Station',
    metaDescription:
      'HVAC service in Godley Station, Port Wentworth, GA. AC repair, maintenance & installation for Godley Station homes. Call (912) 416-3449.',
    heroHeading: 'HVAC Service for Godley Station\'s Modern Homes',
    tldrBullets: [
      'Godley Station is Port Wentworth\'s primary residential growth area — modern homes built 2005 to present',
      'The HVAC Shop LLC is minutes away at 101 S Coastal Hwy, Port Wentworth',
      'Heat pump systems dominate the neighborhood — we specialize in heat pump service and repair',
      'Two-story homes with upper-floor comfort issues are a common service call in Godley Station',
      'Many original systems approaching the 15–18 year service life threshold',
      'Call (912) 416-3449 for same-day service in Godley Station',
    ],
    intro: `Godley Station transformed a large section of northern Port Wentworth from undeveloped land into one of Chatham County's most sought-after residential addresses. The neighborhood's master-planned character, proximity to I-16, and consistent construction quality attracted a demographic of young families, professionals, and military families who wanted new construction without driving to Pooler. The HVAC Shop LLC is literally minutes away from Godley Station — your truly local HVAC service provider for this neighborhood.`,
    sections: [
      {
        heading: 'The Heat Pump Systems Common in Godley Station and What Goes Wrong First',
        content: `The vast majority of Godley Station homes were built with central heat pump systems — 2 to 3.5-ton split systems with electric backup heat strips and variable-speed or two-speed blowers. These are reliable systems that work well in coastal Georgia's climate, but they don't run forever without attention. The homes built from 2005 through 2010 are now at or near the 15-year threshold where the original equipment starts presenting the first major decisions.

Capacitors are typically the first major component to fail in these aging Godley Station systems — the run capacitors on both the compressor and the outdoor fan motor degrade with the heat cycles of coastal Georgia summers and become the first call symptom. A heat pump that runs momentarily and then shuts down, or an outdoor fan that isn't starting properly, is usually a capacitor replacement — a straightforward, affordable fix if caught at this stage.

The second common issue in the neighborhood's 2005–2012 vintage homes is beginning refrigerant loss from micro-leaks. Salt air from the Savannah River and coastal exposure affects copper refrigerant components over many years. A heat pump that takes longer to cool than it used to, or doesn't maintain temperature on the hottest July days, often has a modest refrigerant deficit that a proper [AC repair](/ac-repair) visit will identify and correct.

For Godley Station homes built from 2015 forward, the systems are generally too new for major component failures but benefit from first-time professional service to verify that the original installation was correct — refrigerant charge, airflow settings, thermostat configuration. Builders' HVAC contractors aren't always as precise as they should be, and we find setup issues on first-service new construction visits more often than you might expect.`,
      },
      {
        heading: 'Second-Floor Comfort in Godley Station\'s Two-Story Homes',
        content: `Godley Station has a high proportion of two-story homes, and the most common comfort complaint we address in this neighborhood is exactly what you'd expect: the second floor is significantly warmer than the first floor during summer, and occupants run the thermostat lower than they'd like just to get the upstairs bedrooms comfortable.

This is usually a supply air distribution problem rather than an equipment deficiency. Single-zone systems that try to condition a two-story home with one thermostat inevitably compromise somewhere — the thermostat is usually downstairs, the system satisfies at that location and cycles off, while the bedrooms upstairs never quite reach setpoint. Solutions range from simple duct modifications and register adjustments to add a dedicated return air pathway for the second floor, to the installation of a two-zone system with dampers and separate thermostats.

The most cost-effective first step is usually a static pressure test and airflow measurement to identify whether the second-floor supply registers are actually receiving their designed CFM. Often the problem is identifiable as a specific duct restriction or an undersized return air pathway, which can be corrected at much lower cost than a zoning system. Our [duct fabrication](/duct-fabrication) team handles these modifications regularly in Godley Station.`,
      },
    ],
    faqs: [
      {
        question: 'My Godley Station home was built in 2007 — is the original HVAC system still worth repairing?',
        answer: 'A 2007 system is about 18 years old — past the average heat pump service life of 15 years, though many systems of that vintage in coastal Georgia are still functional. The right answer depends on the current condition: a system with a good compressor, clean coils, and solid ductwork may have 3–5 more years; one with a deteriorating compressor, corroded coil, and leaky ducts is probably better replaced. A system assessment gives you the specific information.',
      },
      {
        question: 'How quickly can The HVAC Shop LLC respond to a call in Godley Station?',
        answer: 'Our shop is at 101 S Coastal Hwy — typically 10–15 minutes from most Godley Station addresses. For standard service calls during business hours, same-day service is usually available. For emergencies, we can often arrive within 30 minutes.',
      },
      {
        question: 'What is the best way to improve second-floor comfort in my Godley Station home without replacing the system?',
        answer: 'Start with a static pressure and airflow measurement to identify the restriction. Also check that second-floor supply registers aren\'t partially closed, that return air paths are adequate, and that attic insulation is covering the second-floor ceiling properly. Often a combination of duct modification and attic insulation improvement addresses the problem.',
      },
    ],
    internalLinks: {
      up: '/port-wentworth',
      across: ['/port-wentworth/rice-hope', '/port-wentworth/cross-creek', '/ac-repair', '/duct-fabrication'],
    },
  },

  {
    citySlug: 'port-wentworth',
    cityName: 'Port Wentworth',
    slug: 'rice-hope',
    name: 'Rice Hope',
    metaDescription:
      'HVAC service in Rice Hope, Port Wentworth, GA. AC repair, maintenance & installation for Rice Hope homes. Call (912) 416-3449.',
    heroHeading: 'HVAC Service for Rice Hope\'s Established Port Wentworth Neighborhood',
    tldrBullets: [
      'Rice Hope is an established Port Wentworth neighborhood with 1990s–2000s housing stock',
      'Many Rice Hope homes have original HVAC systems approaching or past end of life',
      'Quick response from The HVAC Shop at 101 S Coastal Hwy — minutes from Rice Hope',
      'Salt air and humidity from proximity to the Savannah River affects outdoor equipment',
      'Full service: AC repair, maintenance, replacement, and ductwork',
      'Call (912) 416-3449 for Rice Hope service',
    ],
    intro: `Rice Hope is one of Port Wentworth's established neighborhoods, predating the Godley Station development surge. The homes here — built primarily through the 1990s and early 2000s — have a different HVAC profile than the newer construction to the north. Equipment at or near end-of-life is common, and the neighborhood's proximity to the Savannah River corridor means salt air exposure has been accumulating on outdoor equipment for 20+ years.`,
    sections: [
      {
        heading: 'What 20+ Years of Coastal Georgia Humidity Does to HVAC Equipment',
        content: `A Rice Hope home with a heat pump or split system from the early-to-mid 1990s has seen 20+ summers of coastal Georgia heat and humidity, dozens of freeze-thaw cycles, and decades of salt air exposure from the nearby Savannah River corridor. The accumulated effect on HVAC equipment is substantial: condenser coil fins that have thinned from corrosion, copper refrigerant lines with micro-leaks from formicary corrosion, capacitors that have cycled thousands of times, and control boards that have absorbed humidity for two decades.

At [The HVAC Shop LLC in Port Wentworth](/port-wentworth), we assess this accumulated wear honestly. Many of the older Rice Hope systems we evaluate are genuinely at end of life — not because anything specific has broken, but because the cumulative degradation has reached the point where the next repair is likely to be expensive and the following one will arrive quickly. A $600 repair on a 22-year-old system with a corroded coil and low compressor efficiency often represents poor value compared to a properly sized replacement.

That said, we don't condemn systems that still have viable life. A 2002 system with a solid compressor, good refrigerant charge, and clean coils might have 3–5 more years of service with proper maintenance. We'll tell you which situation you're in, with the specific measurements to back up the assessment.`,
      },
      {
        heading: 'Ductwork Condition in Rice Hope\'s Older Homes',
        content: `Ductwork in homes from the 1990s deserves attention during any system assessment. Flex duct connections from that era were often made with duct tape (the cloth or foil type that fails over time) rather than with proper mastic sealant and draw bands. After two decades in a hot attic that cycles between 140°F summers and cold winters, many of these connections have separated or degraded significantly.

A visual attic inspection during any service call in Rice Hope often reveals supply duct connections that have pulled apart, flex duct that has kinked over time as attic insulation settled, and return air chases that were never properly sealed. These ductwork deficiencies make any system — old or new — perform worse than it should. If you're investing in a new system, correcting the ductwork at the same time is usually worth the incremental cost.`,
      },
    ],
    faqs: [
      {
        question: 'My Rice Hope home\'s AC is from around 2000. Should I repair or replace?',
        answer: 'A 25-year-old system is almost certainly near end of life, but the right call depends on what specific repairs are needed and the overall system condition. A simple capacitor at this age is probably still worth fixing; a compressor or coil replacement typically is not. We give you an honest assessment with specific measurements to support the recommendation.',
      },
      {
        question: 'Is there a local HVAC contractor who knows Rice Hope specifically?',
        answer: 'The HVAC Shop LLC is at 101 S Coastal Hwy in Port Wentworth — minutes from Rice Hope. We\'ve serviced homes throughout the neighborhood and know the typical equipment vintage and conditions.',
      },
    ],
    internalLinks: {
      up: '/port-wentworth',
      across: ['/port-wentworth/godley-station', '/port-wentworth/cross-creek', '/ac-repair'],
    },
  },

  {
    citySlug: 'port-wentworth',
    cityName: 'Port Wentworth',
    slug: 'cross-creek',
    name: 'Cross Creek',
    metaDescription:
      'HVAC service in Cross Creek, Port Wentworth, GA. AC repair, installation & maintenance for Cross Creek homeowners. Call (912) 416-3449.',
    heroHeading: 'Local HVAC Service for Cross Creek Homeowners',
    tldrBullets: [
      'Cross Creek is a compact Port Wentworth neighborhood near the city center',
      'Mix of older and mid-era construction requires broad HVAC service experience',
      'The HVAC Shop LLC provides fast local service from 101 S Coastal Hwy',
      'Affordable repair options and honest replacement advice for Cross Creek homeowners',
      'Full residential HVAC services: AC repair, installation, maintenance, ductwork',
      'Call (912) 416-3449 for Cross Creek service',
    ],
    intro: `Cross Creek is a compact, established Port Wentworth neighborhood with a mixed housing stock that reflects the city's older residential character. Homes here range from mid-century construction to developments from the 1980s and 1990s, creating a service environment where equipment age varies widely between addresses.`,
    sections: [
      {
        heading: 'First-Time Homebuyer HVAC Assessments in Cross Creek',
        content: `Cross Creek has attracted its share of first-time homebuyers drawn to Port Wentworth's affordability and proximity to employment centers. These new homeowners often purchase a home without a detailed HVAC inspection beyond what the general home inspector noted — and then discover within the first summer that the system has issues. At [The HVAC Shop LLC](/), we offer first-time homeowner HVAC assessments that give you a complete picture of your system's condition, age, and likely service needs over the next few years.

The assessment includes equipment age verification (from the manufacturer's date code on the serial number), refrigerant charge measurement, capacitor testing, condenser coil condition assessment, filter and duct inspection, and a written report with findings and recommendations. For Cross Creek homes where the system age is unknown or where deferred maintenance is evident, this assessment is the starting point for making informed decisions about repair versus investment in preventive maintenance.`,
      },
      {
        heading: 'Affordable HVAC Solutions Without Compromising Quality',
        content: `Cross Creek's working-class character means our customers here are often budget-conscious, and we meet them where they are. Not every service call needs to become a full system replacement recommendation — when a repair makes sense, we repair. When a replacement is clearly the better long-term value, we explain why with the data to support it, present financing options, and work within the homeowner's timeline.

Simple repairs — capacitors, contactors, thermostat replacements, drain line clearing — are the bread and butter of residential HVAC service, and we price these straightforwardly without padding for upsells. Complex repairs and replacements are quoted clearly and completely before any work begins. No hidden fees, no surprise add-ons.`,
      },
    ],
    faqs: [
      {
        question: 'I just bought a home in Cross Creek and don\'t know anything about the HVAC system. Where do I start?',
        answer: 'Call us for a first-time homeowner HVAC assessment. We\'ll check the system age, verify refrigerant charge, test the key electrical components, and give you a written summary of what you have and what to watch for. It\'s one of the best investments a new homeowner can make.',
      },
      {
        question: 'How much does a typical AC repair cost for a Cross Creek home?',
        answer: 'Common repairs range from $150–$350 for capacitors and contactors, $200–$450 for refrigerant service, to $350–$650 for fan motor replacements. We quote all repairs upfront after diagnosis so there are no surprises.',
      },
    ],
    internalLinks: {
      up: '/port-wentworth',
      across: ['/port-wentworth/godley-station', '/port-wentworth/rice-hope', '/hvac-inspection'],
    },
  },

  {
    citySlug: 'port-wentworth',
    cityName: 'Port Wentworth',
    slug: 'towne-park',
    name: 'Towne Park',
    metaDescription:
      'HVAC service in Towne Park, Port Wentworth, GA. AC repair and maintenance for Towne Park\'s newer homes. Call (912) 416-3449.',
    heroHeading: 'HVAC Service for Towne Park\'s Growing Residential Community',
    tldrBullets: [
      'Towne Park is a newer Port Wentworth neighborhood — primarily 2010–present construction',
      'Modern heat pump systems with high efficiency and smart thermostat compatibility',
      'The HVAC Shop LLC serves Towne Park from our nearby Port Wentworth location',
      'New construction warranty coordination and first professional service available',
      'Airflow balancing and thermostat optimization are common calls in newer Towne Park homes',
      'Call (912) 416-3449 for Towne Park service',
    ],
    intro: `Towne Park represents the continued residential expansion of northern Port Wentworth, with construction dating primarily from 2010 onward. Homes here benefit from improved energy codes compared to earlier construction eras — better insulation, tighter building envelopes, and modern HVAC systems designed for efficiency. The HVAC Shop LLC handles service for this newer housing stock with specific expertise in the equipment brands and configurations common in Towne Park's construction vintage.`,
    sections: [
      {
        heading: 'Modern HVAC in Towne Park\'s Energy-Code Compliant Homes',
        content: `Homes built in Towne Park from 2010 forward comply with Georgia's increasingly stringent energy codes, which have required higher-efficiency HVAC equipment and tighter building envelopes at each update cycle. These homes typically have 16–18 SEER heat pump systems with variable-speed blowers, MERV 8 or better filtration, and smart thermostat pre-wiring. When these systems are running correctly, they're efficient and comfortable — when they need service, they require a technician who understands the communicating thermostat systems and variable-speed equipment.

A variable-speed heat pump is more complex to diagnose than a single-speed system. The inverter drive and communicating control system generate fault codes that a diagnostic tool can read — but only if the technician knows how to use that tool with each manufacturer's system. Our technicians are trained on the major systems common in Towne Park including Carrier, Lennox, and Trane communicating equipment.

First-time professional service on these newer systems also includes verification that the original installation was completed correctly. Builder HVAC contractors are under cost and schedule pressure; we find refrigerant charge issues, thermostat misconfiguration, and duct deficiencies on new construction first-service calls more than homeowners typically expect.`,
      },
    ],
    faqs: [
      {
        question: 'My Towne Park home is 8 years old — is it time for an HVAC tune-up?',
        answer: 'Yes, absolutely. If the system hasn\'t had professional service since the builder\'s installation, 8 years in coastal Georgia means it\'s overdue. Capacitor wear, refrigerant charge drift, and condenser coil accumulation are all things a tune-up addresses at this age.',
      },
      {
        question: 'My Towne Park builder-installed thermostat is giving fault codes. Can you help?',
        answer: 'Yes. We\'re familiar with the communicating thermostat systems used by major builders in the Port Wentworth area and can diagnose fault codes on Carrier, Trane, Lennox, and Honeywell communicating systems.',
      },
    ],
    internalLinks: {
      up: '/port-wentworth',
      across: ['/port-wentworth/godley-station', '/port-wentworth/spring-lakes', '/thermostat-installation'],
    },
  },

  {
    citySlug: 'port-wentworth',
    cityName: 'Port Wentworth',
    slug: 'spring-lakes',
    name: 'Spring Lakes',
    metaDescription:
      'HVAC service in Spring Lakes, Port Wentworth, GA. Modern home HVAC repair and maintenance. Call (912) 416-3449.',
    heroHeading: 'HVAC Service for Spring Lakes Homeowners',
    tldrBullets: [
      'Spring Lakes is among Port Wentworth\'s newest residential developments — 2015 to present construction',
      'High-efficiency heat pumps and modern ductwork are the norm',
      'The HVAC Shop LLC is minutes from Spring Lakes at 101 S Coastal Hwy',
      'Builder warranty coordination and first professional service available',
      'Smart thermostat integration and IAQ upgrades popular in this neighborhood',
      'Call (912) 416-3449 for Spring Lakes service',
    ],
    intro: `Spring Lakes represents the newest tier of Port Wentworth residential development. Homes here are young — many still under original builder warranty — and homeowners are dealing with the HVAC experience that comes with brand-new systems: occasional installation defects, thermostat learning curves, and the first summer of operation revealing whether the builder's equipment choices were well-suited to the home.`,
    sections: [
      {
        heading: 'First-Season Service Needs for Spring Lakes\' Newest Homes',
        content: `Brand-new homes have HVAC issues that are distinct from older homes but no less real. Builder HVAC contractors work quickly and may leave systems with refrigerant charges that are slightly off specification, thermostat configurations that don't match the homeowner's comfort preferences, and airflow settings that haven't been optimized for actual occupancy patterns.

In Spring Lakes, we frequently respond to first-season calls where the system is technically operational but the comfort results disappoint. Common findings: the system is running correctly but the home's thermal performance in coastal Georgia's summer heat reveals that the builder's Manual J calculation was optimistic, the thermostat is configured for a pre-set schedule that doesn't match the family's actual schedule, or the fresh air ventilation is contributing humidity load that the system wasn't sized to handle.

These are solvable problems — often through thermostat optimization, fresh air damper adjustment, and airflow balancing — without equipment replacement. We approach first-season calls in Spring Lakes with the goal of making the existing system work as well as possible before recommending any hardware changes.`,
      },
    ],
    faqs: [
      {
        question: 'My Spring Lakes home is brand new but the AC struggles to keep up in July. Is something wrong?',
        answer: 'Not necessarily — new homes in coastal Georgia often surprise owners with how hard the AC has to work in July and August. First, verify that the builder\'s equipment is properly sized with a Manual J calculation. Then check refrigerant charge, thermostat settings, and fresh air ventilation settings. Call us for a first-season assessment if you\'re uncertain.',
      },
    ],
    internalLinks: {
      up: '/port-wentworth',
      across: ['/port-wentworth/towne-park', '/port-wentworth/godley-station', '/ac-installation'],
    },
  },

  {
    citySlug: 'pooler',
    cityName: 'Pooler',
    slug: 'pooler-parkway',
    name: 'Pooler Parkway',
    metaDescription:
      'HVAC service in Pooler Parkway area, Pooler, GA. Residential and commercial HVAC for the Pooler Parkway corridor. Call (912) 416-3449.',
    heroHeading: 'HVAC Service for the Pooler Parkway Residential and Commercial Corridor',
    tldrBullets: [
      'The Pooler Parkway corridor includes both residential neighborhoods and major commercial development',
      'Modern construction — primarily 2000s to present — with heat pump systems and new HVAC',
      'Commercial HVAC for the retail, restaurant, and office properties along the corridor',
      'The HVAC Shop LLC serves Pooler Parkway from our Port Wentworth location',
      'First-time professional service and warranty coordination for newer homes',
      'Call (912) 416-3449 for Pooler Parkway service',
    ],
    intro: `The Pooler Parkway corridor is one of the most active commercial and residential zones in the Savannah metropolitan area. The residential neighborhoods off Pooler Parkway feature new construction homes built during Pooler's rapid growth, while the commercial strip itself hosts retail anchors, restaurants, hotels, and office development that makes up a significant portion of Chatham County's commercial HVAC service demand.`,
    sections: [
      {
        heading: 'Residential HVAC in Pooler Parkway\'s New Construction Neighborhoods',
        content: `The residential developments accessible from Pooler Parkway — subdivisions built during Pooler's 2000s through present growth surge — share the characteristics of new construction HVAC throughout our service area. Heat pump systems in the 2.5–3 ton range, variable-speed blowers, and sealed construction that can accumulate humidity if the HVAC system isn't running long enough cycles to extract latent load.

Pooler Parkway residential neighborhoods tend to attract families with children, which means occupancy patterns that put premium on second-floor bedroom comfort. The two-story floor plan is prevalent here, and the upper-floor comfort issue we address throughout Godley Station and Towne Park is equally relevant in Pooler Parkway residential communities. The [Port Wentworth city hub page](/port-wentworth) describes our general approach; the specific Pooler Parkway context is the additional drive time from our location and the commercial density that means we're often in this area for commercial calls and can schedule residential visits efficiently.`,
      },
      {
        heading: 'Commercial HVAC for the Pooler Parkway Commercial Strip',
        content: `The commercial development along Pooler Parkway includes national retail chains, restaurants, hotels, and professional offices that depend on functioning HVAC as a basic operational requirement. A rooftop unit failure on a Pooler Parkway restaurant during the lunch rush is a business emergency, not a maintenance call. Our commercial service agreement clients receive priority dispatch that fits this reality.

We service the full range of commercial equipment along this corridor: rooftop package units serving big-box retail and restaurants, split systems for professional offices, and the specialized HVAC requirements of hotel properties (PTACs, corridor systems, fitness center equipment). Preventive maintenance agreements are the best way to minimize unplanned downtime.`,
      },
    ],
    faqs: [
      {
        question: 'Can The HVAC Shop LLC service commercial rooftop units along Pooler Parkway?',
        answer: 'Yes. Rooftop package unit service and maintenance is a core commercial capability. We service RTUs up to 20 tons and offer commercial service agreements for Pooler Parkway businesses.',
      },
      {
        question: 'How far is the drive from The HVAC Shop to Pooler Parkway?',
        answer: 'Approximately 15–20 minutes via I-16 from our Port Wentworth location. We typically achieve 30–45 minute response times for Pooler Parkway service calls.',
      },
    ],
    internalLinks: {
      up: '/pooler',
      across: ['/pooler/west-chatham', '/port-wentworth/godley-station', '/commercial-hvac'],
    },
  },

  {
    citySlug: 'pooler',
    cityName: 'Pooler',
    slug: 'west-chatham',
    name: 'West Chatham',
    metaDescription:
      'HVAC service in West Chatham, Pooler, GA. AC repair and maintenance for West Chatham residential neighborhoods. Call (912) 416-3449.',
    heroHeading: 'HVAC Service for West Chatham\'s Established and Growing Neighborhoods',
    tldrBullets: [
      'West Chatham covers a broad area of western Pooler with mixed construction eras',
      'Established neighborhoods with 1990s–2000s equipment alongside newer development',
      'The HVAC Shop LLC serves West Chatham with fast response from Port Wentworth',
      'Mixed service needs: repair and maintenance for aging systems, new construction service',
      'Full residential HVAC including AC repair, installation, and ductwork',
      'Call (912) 416-3449 for West Chatham service',
    ],
    intro: `West Chatham encompasses a broad section of western Pooler that includes both established residential areas from the 1990s and early 2000s and newer development extending into the county. The area's mix of construction eras means The HVAC Shop LLC encounters the full range of residential HVAC scenarios — from systems approaching end of life to first-time service on relatively new equipment.`,
    sections: [
      {
        heading: 'Service Considerations Across West Chatham\'s Mixed Housing Stock',
        content: `The 1990s and early 2000s homes in West Chatham represent the same equipment vintage as Rice Hope in Port Wentworth and established Savannah neighborhoods — original systems that have been running for 20+ years in coastal Georgia's harsh conditions. These systems have accumulated the salt air, humidity, and operating hours that determine remaining useful life, and the honest assessment of where each system stands is the foundation of the service we provide.

Newer West Chatham development follows the patterns of the broader Pooler growth market: modern heat pump systems, improved insulation, tighter building envelopes, and the comfort challenges that come with tight construction. High indoor humidity despite functioning AC, upper-floor comfort inequity, and first-season equipment setup questions are the dominant call types in this construction era.

The [Pooler city hub page](/pooler) describes our overall approach to the Pooler market. West Chatham specifically benefits from our knowledge of which neighborhoods have which construction eras and the ability to arrive prepared for the likely service scenario.`,
      },
    ],
    faqs: [
      {
        question: 'Does The HVAC Shop LLC know the West Chatham area of Pooler well?',
        answer: 'Yes. We\'ve serviced homes throughout West Chatham and understand the mix of construction eras in the area. Response time from our Port Wentworth location is typically 30–45 minutes.',
      },
    ],
    internalLinks: {
      up: '/pooler',
      across: ['/pooler/pooler-parkway', '/port-wentworth/godley-station', '/hvac-maintenance'],
    },
  },

  {
    citySlug: 'savannah',
    cityName: 'Savannah',
    slug: 'west-savannah',
    name: 'West Savannah',
    metaDescription:
      'HVAC service in West Savannah, GA. AC repair, installation & maintenance for West Savannah homes. Affordable, honest service. Call (912) 416-3449.',
    heroHeading: 'Honest HVAC Service for West Savannah Homeowners',
    tldrBullets: [
      'West Savannah is a well-established residential community with mid-20th century housing',
      'HVAC systems here often span from fully functional older equipment to units needing replacement',
      'The HVAC Shop LLC serves West Savannah with fair pricing and honest recommendations',
      'Common calls: system assessment for home buyers, repair vs. replace evaluations, full replacements',
      'Affordable financing available for systems that need replacement',
      'Call (912) 416-3449 for West Savannah service',
    ],
    intro: `West Savannah is a well-established neighborhood west of downtown with a working-class residential character. Homes here are primarily from the mid-20th century, and the HVAC equipment reflects that legacy — a mix of systems from the 1990s to more recent replacements, in varying states of maintenance and repair. The HVAC Shop LLC serves West Savannah with the honest, practical approach that community deserves.`,
    sections: [
      {
        heading: 'HVAC in West Savannah\'s Older Residential Homes',
        content: `West Savannah homes built from the 1940s through the 1980s have a common set of HVAC characteristics. Original ductwork from the 1970s and 1980s — often fiberglass duct board that has degraded over decades in humid attic conditions — is a common finding. Equipment that has been replaced at least once since the home was built, with variable maintenance quality between installations, is the norm rather than the exception.

Our service visits to West Savannah often begin with a systematic assessment: what is the equipment age and condition, what is the ductwork condition, and what is the most cost-effective path to reliable, comfortable operation? Sometimes that's a straightforward repair; sometimes it's a replacement that finally addresses the full system rather than just the equipment.

We understand that West Savannah homeowners are often working within tight budgets. We don't manufacture urgency around repairs that can wait, and we provide realistic repair cost estimates that let homeowners make informed decisions about whether to repair or plan for replacement. Financing is available for qualified customers when replacement is the right call.`,
      },
      {
        heading: 'What Salt Air and Humidity Do to Savannah Residential HVAC',
        content: `West Savannah's location puts it squarely in coastal Georgia's salt air zone. Properties in the neighborhood — particularly those within a mile or two of the river and the marsh — show the effects of long-term salt air exposure on outdoor HVAC equipment. Condenser coils with significantly degraded fin material, copper refrigerant lines with corrosion, and contactors with accelerated pitting are common findings in older West Savannah equipment.

The practical implication: when a West Savannah homeowner is considering whether to repair an older system, the salt air damage to the condenser coil is a factor that affects the repair-versus-replace calculation. A system with a functional compressor but a 50%-degraded condenser coil is operating at significantly reduced efficiency and will only continue to degrade. We factor this into our assessment transparently so homeowners can make informed decisions.`,
      },
    ],
    faqs: [
      {
        question: 'My West Savannah home has the original HVAC ductwork from the 1970s. Is it safe to use?',
        answer: 'If the original ductwork is fiberglass duct board, it likely has significant degradation after 50 years in a humid attic environment — delamination, mold growth, and air leakage are common issues. If it\'s original sheet metal, it may be more viable depending on the insulation and seal condition. We assess ductwork condition on every service call in homes of this age.',
      },
      {
        question: 'What does it cost to replace an HVAC system in a West Savannah home?',
        answer: 'A standard residential heat pump system replacement (2.5–3 ton) in West Savannah runs $5,500–$9,000 depending on system size and efficiency level. If ductwork needs modification, add $500–$2,500. Financing is available for qualified customers.',
      },
    ],
    internalLinks: {
      up: '/savannah',
      across: ['/savannah/henderson', '/savannah/woodville-bartow', '/ac-repair'],
    },
  },

  {
    citySlug: 'savannah',
    cityName: 'Savannah',
    slug: 'henderson',
    name: 'Henderson',
    metaDescription:
      'HVAC service in Henderson, Savannah, GA. AC repair and maintenance for Henderson neighborhood homes. Call (912) 416-3449.',
    heroHeading: 'HVAC Service for Henderson Neighborhood Homeowners',
    tldrBullets: [
      'Henderson is a Savannah residential neighborhood with 1960s–1980s housing stock',
      'HVAC systems in Henderson range from functioning older equipment to units needing replacement',
      'The HVAC Shop LLC serves Henderson with responsive, honest HVAC service',
      'System assessment, repair, and replacement with financing available',
      'Common ductwork issues in Henderson\'s older construction',
      'Call (912) 416-3449 for Henderson service',
    ],
    intro: `Henderson is a Savannah neighborhood with a residential character shaped by mid-20th century development. Homes here represent the Savannah housing stock of the 1960s–1980s — brick ranch homes, wood-frame houses, and modest but solid construction that has housed multiple generations of Savannah families.`,
    sections: [
      {
        heading: 'Serving Henderson\'s Mid-Century Residential HVAC Needs',
        content: `Henderson homes built from the 1960s through the 1980s typically have had at least one HVAC system replacement since original construction. The question for current homeowners is whether the most recent replacement was quality work with quality equipment, and whether it's been maintained properly since installation.

In this neighborhood, we encounter everything from well-maintained 2010s systems that have several years of life remaining to neglected systems that have been limping along on deferred maintenance. Our assessment process is designed to give you an honest picture of where your system stands — no scare tactics, no manufactured urgency — so you can make decisions based on actual information rather than a contractor's revenue motivation.

The [West Savannah neighborhood](/savannah/west-savannah) shares similar housing characteristics and HVAC service needs. For Henderson homeowners exploring full system replacement, our [AC installation](/ac-installation) page details the process and costs.`,
      },
    ],
    faqs: [
      {
        question: 'Does The HVAC Shop LLC serve the Henderson neighborhood in Savannah?',
        answer: 'Yes. Henderson is within our Savannah service area. Response time from Port Wentworth is approximately 20–30 minutes for most Henderson addresses.',
      },
    ],
    internalLinks: {
      up: '/savannah',
      across: ['/savannah/west-savannah', '/savannah/woodville-bartow', '/hvac-inspection'],
    },
  },

  {
    citySlug: 'savannah',
    cityName: 'Savannah',
    slug: 'woodville-bartow',
    name: 'Woodville-Bartow',
    metaDescription:
      'HVAC service in Woodville-Bartow, Savannah, GA. AC repair, maintenance & installation for Woodville-Bartow homes. Call (912) 416-3449.',
    heroHeading: 'HVAC Service for Woodville-Bartow Homeowners',
    tldrBullets: [
      'Woodville-Bartow is an established Savannah neighborhood with diverse housing stock',
      'The HVAC Shop LLC provides responsive, fairly priced HVAC service here',
      'Older homes in Woodville-Bartow often need duct assessment alongside equipment service',
      'System assessment and honest repair vs. replace guidance',
      'Affordable repair options and financing for replacements',
      'Call (912) 416-3449',
    ],
    intro: `Woodville-Bartow encompasses an established area of Savannah with housing spanning multiple development eras. The community has a distinct character from the historic district or the newer suburban developments — it's a working Savannah neighborhood with real homeowners who need real HVAC service at fair prices.`,
    sections: [
      {
        heading: 'HVAC Service for Woodville-Bartow\'s Diverse Housing',
        content: `Homes in Woodville-Bartow range from pre-WWII construction to mid-century development to more recent infill and renovation projects. This diversity means no two service calls are quite the same — we encounter original ductwork from the 1950s alongside modern high-efficiency systems in renovated homes, and everything in between.

For the older end of Woodville-Bartow's housing stock, the first priority is always an honest assessment of the complete system — not just the unit that's malfunctioning. A functioning compressor in a system with a corroded coil, degraded ductwork, and a 25-year-old air handler isn't necessarily worth major investment. We give you the full picture and let you decide. For homes that have been recently renovated or that have newer system installations, our service approach is the same standard quality tune-up and repair work we perform throughout the Savannah area.

The [Savannah city hub page](/savannah) covers the broader context of HVAC service in Savannah's established neighborhoods.`,
      },
    ],
    faqs: [
      {
        question: 'How long does it take The HVAC Shop LLC to reach Woodville-Bartow from Port Wentworth?',
        answer: 'Approximately 20–35 minutes depending on traffic and the specific location within the neighborhood. We provide an accurate arrival window when you call.',
      },
    ],
    internalLinks: {
      up: '/savannah',
      across: ['/savannah/west-savannah', '/savannah/henderson', '/ac-repair'],
    },
  },
];
