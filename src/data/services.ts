export interface ServicePage {
  slug: string;
  name: string;
  metaDescription: string;
  tldrBullets: string[];
  heroHeading: string;
  sections: { heading: string; content: string }[];
  bertTable: { headers: string[]; rows: string[][] };
  faqs: { question: string; answer: string }[];
  internalLinks: { up: string; across: string[] };
}

export const SERVICES_DATA: ServicePage[] = [
  {
    slug: 'ac-repair',
    name: 'AC Repair',
    metaDescription:
      'Expert AC repair in Port Wentworth, Pooler, and Savannah, GA. Same-day diagnosis, refrigerant recharge, compressor issues, and more. Call (912) 416-3449.',
    tldrBullets: [
      'The HVAC Shop LLC provides same-day AC repair in Port Wentworth, GA and surrounding Chatham County',
      'Common repairs include refrigerant leaks, capacitor failure, frozen evaporator coils, and faulty compressors',
      `Coastal Georgia's 75%+ average summer humidity accelerates wear on air conditioning components`,
      'Salt air near the I-95 corridor causes corrosion on outdoor condenser coils — a common cause of reduced efficiency',
      'Lead technician David Johnson has 30 years diagnosing HVAC systems in the Savannah metro area',
      'Call (912) 416-3449 for urgent AC repair — 24/7 emergency service available',
    ],
    heroHeading: 'When Your Air Conditioner Stops Cooling, You Need a Fast Answer',
    sections: [
      {
        heading: 'Why Coastal Humidity Puts Extra Strain on Air Conditioners',
        content: `Port Wentworth and the surrounding Chatham County area sit squarely in one of the most demanding climates for air conditioning equipment in the continental United States. Average summer relative humidity runs above 75%, heat index values routinely climb past 105°F, and the salt air carried inland from the Atlantic and the Savannah River puts a constant chemical burden on outdoor condenser coils and electrical components. At [The HVAC Shop LLC](/) — your local HVAC service provider at 101 S Coastal Hwy — we've spent years watching what coastal Georgia does to equipment that might last 20 years in a drier inland climate but starts showing problems at 10 in this environment.

The refrigerant circuit bears the brunt of this stress. When ambient temperatures sit above 90°F for weeks at a time and humidity prevents the heat from escaping the condenser efficiently, the system runs longer cycles, the compressor works harder, and failure points accelerate. Capacitors overheat. Fan motors wear. Refrigerant lines develop micro-leaks at fittings that expand and contract with the extreme temperature swings between a cool interior and a blistering exterior. Understanding these failure modes is what lets our technicians diagnose problems accurately on the first visit instead of guessing.

If your AC is blowing warm air, short-cycling, producing ice on the refrigerant lines, or making grinding or squealing sounds, don't wait. A system that's struggling is using significantly more electricity than a healthy one — we've seen homeowners in Godley Station and Pooler Parkway running units that consumed 40% more power than necessary before finally calling for service. The sooner we diagnose the issue, the lower the repair cost and the faster you're back to a comfortable home.`,
      },
      {
        heading: 'What Happens During a Professional AC Diagnosis at Your Home',
        content: `When David Johnson or one of our certified technicians arrives, we follow a structured diagnostic sequence rather than just checking the obvious. We start at the thermostat — verifying calibration and confirming the system is receiving the correct call signal — then move to the air handler to check for airflow restriction, dirty evaporator coils, and correct refrigerant temperature at the metering device. From there we move outside to the condenser.

Outdoors is where coastal Georgia does the most damage. We look for corrosion on the condenser coil fins, check the capacitor voltage with a meter (a failing capacitor is one of the most common causes of AC not starting), verify that the contactor is making clean contact, and measure the refrigerant pressures on both the high and low side to determine if the system is properly charged. We also check the compressor amperage draw — a compressor pulling high amps on startup is often weeks away from complete failure.

We use our [HVAC maintenance](/hvac-maintenance) knowledge to identify not just what's broken today but what's likely to fail next. That way you can make an informed decision about whether to repair, repair-and-maintain, or consider whether [AC installation](/ac-installation) of a newer, more efficient system makes more financial sense given the age and condition of your current equipment. We'll give you an honest answer — we're not here to sell you a new system if a $200 capacitor fixes your problem.`,
      },
      {
        heading: 'Common Signs a Compressor Is Failing in Savannah\'s Heat',
        content: `The compressor is the heart of your air conditioning system, and it's also the most expensive component to replace — typically $1,200–$2,200 for the part alone in the Savannah, GA market. Knowing the early warning signs can save you from a complete system replacement.

Hard starting is often the first sign. If you hear your outdoor unit struggling to start — a clicking or humming followed by the fan running but the compressor not — that's usually a failed run or start capacitor, which is a $150–$300 repair. Left unaddressed, the repeated hard-start stress damages the compressor windings. Refrigerant overheating is another early indicator. When the high-side pressure climbs above normal operating range (typically above 400 PSI for R-410A systems on a 95°F day), the compressor is running hot, often due to dirty condenser coils or a refrigerant overcharge.

For homes and businesses near the Savannah River and along the I-95 corridor, formicary corrosion (from salt air and formic acid reacting with copper refrigerant lines) creates pinhole leaks that cause gradual refrigerant loss. A system operating with a 10% refrigerant undercharge is 20% less efficient and stresses the compressor continuously. Our [duct fabrication](/duct-fabrication) and repair team often identifies these issues during full-system assessments for commercial properties in the Port Wentworth industrial corridor.`,
      },
    ],
    bertTable: {
      headers: ['Repair Type', 'Typical Cost Range', 'Avg Repair Time', 'Notes'],
      rows: [
        ['Capacitor replacement', '$150–$300', '1 hour', 'Most common repair in coastal GA heat'],
        ['Refrigerant recharge (R-410A)', '$200–$450', '1–2 hours', 'Includes leak check'],
        ['Contactor replacement', '$175–$325', '1 hour', 'Pitted contacts from salt air'],
        ['Evaporator coil cleaning', '$150–$250', '1.5 hours', 'Restores airflow and efficiency'],
        ['Fan motor replacement', '$300–$550', '1.5–2 hours', 'Condenser or air handler'],
        ['Compressor replacement', '$1,200–$2,200+', '4–6 hours', 'Often warrants system eval'],
      ],
    },
    faqs: [
      {
        question: 'How quickly can The HVAC Shop LLC respond to an AC repair call in Port Wentworth?',
        answer: 'For standard service calls in Port Wentworth, Pooler, and Garden City, we typically offer same-day or next-morning appointments. For after-hours emergencies — a failed AC during a Savannah heat wave — our 24/7 emergency line is (912) 416-3449.',
      },
      {
        question: 'Why is my AC running but not cooling the house below 80°F?',
        answer: 'This is almost always one of three things in coastal Georgia: low refrigerant (often from a leak at a corroded fitting), a dirty condenser coil restricting heat rejection, or a failing compressor. Our technician will measure system pressures and perform a full inspection to identify the exact cause on the first visit.',
      },
      {
        question: 'Is it worth repairing an AC unit that is more than 12 years old in Savannah\'s climate?',
        answer: 'The 5,000 rule applies: multiply the age of the system by the repair cost. If the result exceeds $5,000, replacement is usually the better investment. In coastal Georgia, systems often age faster due to salt air and humidity. A 14-year-old unit facing a $600 compressor capacitor repair is usually worth fixing; a 14-year-old unit facing a $1,800 compressor swap probably warrants a conversation about a new system.',
      },
      {
        question: 'What refrigerant does my AC system use, and does it affect repair costs?',
        answer: 'Most systems installed before 2010 use R-22 (Freon), which is no longer produced and now costs $80–$140/lb. Systems installed after 2010 typically use R-410A ($20–$50/lb). If you have an older R-22 system, a refrigerant leak repair becomes more expensive due to refrigerant cost, which factors into the repair-versus-replace calculation.',
      },
      {
        question: 'Can salt air from the Savannah waterfront damage my AC condenser?',
        answer: 'Absolutely. Properties within a few miles of the river and coast see accelerated corrosion on condenser coil fins and copper refrigerant lines. We recommend annual cleaning and applying protective coil coating to extend equipment life. The effect is most noticeable along the I-95 corridor, Highway 17, and in waterfront Savannah neighborhoods.',
      },
      {
        question: 'Does The HVAC Shop LLC service commercial AC units in the Port Wentworth area?',
        answer: 'Yes. We service commercial HVAC equipment for businesses along Highway 21, the Port Wentworth industrial corridor, and commercial properties throughout Chatham County. For rooftop units and larger commercial systems, see our dedicated commercial HVAC service page.',
      },
    ],
    internalLinks: { up: '/', across: ['/ac-installation', '/hvac-maintenance', '/emergency-hvac-service'] },
  },

  {
    slug: 'ac-installation',
    name: 'AC Installation',
    metaDescription:
      'New central air conditioner installation and AC replacement in Port Wentworth, Pooler & Savannah, GA. Proper sizing, top brands, licensed install. Call (912) 416-3449.',
    tldrBullets: [
      'The HVAC Shop LLC installs new central AC systems and replaces aging equipment in Port Wentworth and Chatham County',
      'Proper load calculation (Manual J) ensures your new system is correctly sized for coastal Georgia\'s humidity',
      'We install top-brand systems including Carrier, Trane, Lennox, and Rheem with manufacturer warranties',
      'Oversized AC units short-cycle and fail to dehumidify — a major comfort issue in Savannah summers',
      'Most residential installations completed in one day with minimal disruption',
      'Financing available — call (912) 416-3449 for a free in-home estimate',
    ],
    heroHeading: 'Replacing Your Air Conditioning System Is One of the Biggest Home Investments You\'ll Make',
    sections: [
      {
        heading: 'How Coastal Georgia\'s Climate Changes What AC System You Need',
        content: `Installing an air conditioner in Port Wentworth, GA isn't the same as installing one in Phoenix or Chicago. The coastal Georgia climate — high humidity from June through September, salt air exposure, and temperatures that stay above 90°F for weeks at a time — places specific demands on equipment selection that a contractor unfamiliar with this region might miss. At [The HVAC Shop LLC](/), we've been installing systems in Chatham County for years, and we've seen what happens when the wrong equipment goes in the wrong house.

The most critical factor is dehumidification capacity. A standard SEER2-efficiency central AC sized purely on BTU output will often fail to keep humidity below 60% in a Savannah-area home during July and August. We look for systems with variable-speed or two-stage compressors that run longer, lower cycles to pull moisture out of the air effectively. Single-stage systems that cycle on and off quickly cool the air but leave it feeling clammy — a common complaint we hear when diagnosing what seems like a cooling problem but is actually a humidity problem.

We also evaluate the existing [duct fabrication](/duct-fabrication) and ductwork condition before recommending a new system. Installing a high-efficiency system on a leaky or undersized duct system is money wasted. Our installation process includes a duct assessment and, if needed, duct sealing or modification to ensure the new system performs to its rated efficiency in your specific home.`,
      },
      {
        heading: 'What a Properly Sized AC System Looks Like for a Chatham County Home',
        content: `Every legitimate AC installation begins with a Manual J load calculation — a room-by-room analysis that accounts for your home's square footage, ceiling height, insulation R-values, window count and orientation, local design temperatures, and occupancy. In Chatham County, the ACCA design summer temperature is 95°F dry-bulb with a coincident wet-bulb of about 78°F, which translates to a latent load (dehumidification requirement) that exceeds what you'd see in Atlanta or Macon.

For a typical 2,000 sq ft single-story home in Godley Station or Pooler, the cooling load generally falls in the 2.5–3.5 ton range depending on insulation levels, window area, and attic conditions. Older homes in Savannah's historic district, which often have high ceilings, original single-pane windows, and limited attic insulation, can run closer to 3.5–4 tons for the same square footage. New construction in Rincon and Bloomingdale with modern spray foam insulation might cool comfortably with 2 tons per 1,000 sq ft or less.

We don't just go with the next size up. An oversized system short-cycles — runs for 8–10 minutes, cools the thermostat, shuts off — without completing a full dehumidification cycle. In Port Wentworth's summer climate, that means a 75°F house that feels like 78°F because the relative humidity inside is at 65%. You can also explore our [HVAC maintenance](/hvac-maintenance) plan to protect your new system's warranty and efficiency from day one.`,
      },
      {
        heading: 'Understanding SEER2 Ratings and Long-Term Operating Costs in the Savannah Market',
        content: `Georgia sits in HVAC Climate Zone 2, one of the most cooling-intensive zones in the country, which means the efficiency rating on your new air conditioner has a bigger financial impact here than almost anywhere else. The federal minimum SEER2 rating for new systems installed in the Southeast is 15.2 SEER2. Upgrading from a 10-SEER unit (common in systems installed before 2006) to a 16-SEER2 system typically reduces cooling energy consumption by 37–40%.

For a Port Wentworth homeowner running a 3-ton system 2,000+ hours per year at Georgia Power's residential rate, that efficiency improvement translates to $400–$700 in annual electricity savings. A premium 18-SEER2 or 20-SEER2 variable-speed system costs $1,500–$2,500 more upfront but pays back the premium in 4–6 years in this climate. We'll walk you through the math with your actual electric bills before you commit to any system.

Systems with communicating variable-speed technology also integrate well with smart thermostats, allowing you to optimize runtimes for Georgia Power's time-of-use rates. Pair that with our [thermostat installation](/thermostat-installation) service and you're looking at maximum comfort with minimum operating cost.`,
      },
    ],
    bertTable: {
      headers: ['System Type', 'Installed Cost Range', 'SEER2 Rating', 'Best For'],
      rows: [
        ['Standard single-stage (2.5–3 ton)', '$4,500–$7,000', '15.2–16 SEER2', 'Budget-conscious replacements'],
        ['Two-stage (3–4 ton)', '$6,500–$9,500', '17–19 SEER2', 'Better humidity control'],
        ['Variable-speed inverter', '$8,000–$13,000', '20–26 SEER2', 'Maximum comfort + efficiency'],
        ['Mini split (ductless, per zone)', '$3,000–$5,500', '20+ SEER2', 'Additions, sunrooms, no ductwork'],
        ['Heat pump system replacement', '$5,500–$11,000', '16–22 SEER2', 'Year-round heating + cooling'],
      ],
    },
    faqs: [
      {
        question: 'How long does a new central AC installation take in Port Wentworth?',
        answer: 'Most standard residential replacements (swapping the air handler, condenser, and refrigerant lines on an existing system) take 4–8 hours in a single day. New construction installations or jobs requiring significant ductwork modification may take 1–2 days.',
      },
      {
        question: 'What size AC unit do I need for a 1,800 sq ft home in Pooler, GA?',
        answer: 'Typical range is 2.5–3.5 tons depending on insulation, windows, and sun exposure. We never quote a size without a Manual J load calculation — oversizing is one of the most common installation mistakes that leads to humidity complaints in the Savannah area.',
      },
      {
        question: 'What brands does The HVAC Shop LLC install?',
        answer: 'We work with major manufacturers including Carrier, Trane, Lennox, Rheem, and Goodman. Brand selection depends on your budget, efficiency goals, and whether you prefer a full communicating system. We\'ll recommend what we\'d put in our own homes.',
      },
      {
        question: 'Is a permit required for AC installation in Chatham County?',
        answer: 'Yes. Chatham County requires a mechanical permit for new AC installations and full system replacements. We pull all required permits and schedule the inspection. This is non-negotiable — unpermitted HVAC work can affect your homeowners insurance and home resale value.',
      },
      {
        question: 'Does The HVAC Shop LLC offer financing for new AC systems?',
        answer: 'Yes. We work with financing partners to offer 0% interest promotional periods and extended payment plans. A new system installation doesn\'t have to be a single large expense. See our financing page for current offers or ask when you call.',
      },
    ],
    internalLinks: { up: '/', across: ['/hvac-maintenance', '/duct-fabrication', '/hvac-financing'] },
  },

  {
    slug: 'heating-repair',
    name: 'Heating Repair',
    metaDescription:
      'Heating repair in Port Wentworth, Pooler & Savannah, GA. Furnace, heat pump, and heating system diagnosis and repair. Fast response. Call (912) 416-3449.',
    tldrBullets: [
      'The HVAC Shop LLC repairs furnaces, heat pumps, and all heating systems in Chatham County',
      'Coastal Georgia winters are mild but can drop to freezing — a heating failure in January still requires fast service',
      'Common repairs: igniter failure, heat exchanger cracks, blower motor issues, and reversing valve problems on heat pumps',
      'David Johnson brings 30 years of HVAC experience to every heating diagnosis',
      'We service natural gas, propane, electric, and heat pump heating systems',
      'Call (912) 416-3449 — 24/7 emergency heating service available',
    ],
    heroHeading: 'Heating Failures in Coastal Georgia Don\'t Announce Themselves in Advance',
    sections: [
      {
        heading: 'How Chatham County\'s Mild Winters Create Specific Heating System Challenges',
        content: `Port Wentworth and Chatham County don't get Minneapolis winters, but the heating season here — roughly November through March — brings its own set of challenges that make proper heating system maintenance and fast repair service important. Coastal Georgia average winter lows run 35–45°F, with occasional freezes that can drop temperatures into the mid-20s. At [The HVAC Shop LLC](/), we see heating systems that failed not because they were run hard all winter, but because they sat mostly idle and developed problems that weren't caught before a cold snap.

Heat pumps are particularly common in our service area because they're efficient in mild climates — a heat pump works effectively as a heating system down to about 35–40°F outdoor temperature, which covers most Chatham County winter days. Below that threshold, electric resistance backup heating kicks in. The problem we see is heat pumps that go into defrost cycle too frequently, reversing valves that stick in cooling mode, and refrigerant issues that reduce heating capacity exactly when you need it most.

Gas furnace failures are often ignition-related in this climate. Since furnaces may only run 60–90 days per year in coastal Georgia, components like hot surface igniters and flame sensors accumulate moisture during the off-season and can fail on the first cold start of November. Our [HVAC maintenance](/hvac-maintenance) plan includes a pre-season heating check specifically to catch these issues before the first freeze.`,
      },
      {
        heading: 'Diagnosing No-Heat Calls: What Our Technicians Check First',
        content: `When a Port Wentworth or Savannah homeowner calls with no heat, our systematic diagnostic process starts at the control side and works toward the heat source. First check: thermostat. A simple dead battery, incorrect mode setting, or a tripped circuit breaker at the panel accounts for 15–20% of no-heat calls and can often be resolved over the phone. We always check before rolling a truck.

For furnaces, we move to the ignition sequence. On a modern 90% AFUE condensing furnace, the ignition sequence involves the draft inducer starting, a pressure switch confirming draft, then the hot surface igniter glowing, followed by gas valve opening and flame sensor confirming ignition. A fault at any step generates a lockout code. We read those codes with our diagnostic tool and proceed accordingly. A cracked heat exchanger — a serious safety issue that can allow combustion gases including carbon monoxide to enter the living space — gets flagged immediately and the system is locked out until repair is complete.

For [heat pump service](/heat-pump-service) no-heat calls, we check the reversing valve operation, outdoor coil condition, defrost board, and refrigerant charge. A heat pump short on refrigerant loses heating capacity before it loses cooling capacity — a nuance that less experienced technicians sometimes miss. We also provide [furnace installation](/furnace-installation) consultations for homeowners who have exhausted reasonable repair options on older equipment.`,
      },
      {
        heading: 'Safety Concerns Unique to Heating Systems in Older Savannah Homes',
        content: `Savannah's stock of historic and older homes — many built in the mid-20th century or earlier — presents heating safety considerations that newer construction doesn't. We regularly service homes in West Savannah, Henderson, and Woodville-Bartow that have original ductwork from the 1970s or earlier, gas furnaces approaching 20+ years of age, and venting arrangements that don't meet current code.

Heat exchanger integrity is the biggest safety concern. A cracked or corroded heat exchanger allows combustion gases (including carbon monoxide) to mix with the air distributed through your ductwork. In older homes with tight weather-stripping and modern insulation retrofits, there's less natural ventilation to dilute a slow CO leak. Our heating inspections include a combustion analyzer check and visual heat exchanger inspection on every gas furnace service call. If we find a crack, we won't restore the heat until the exchanger is replaced or a new furnace is installed — there are no acceptable compromises on a CO safety issue.

Venting is another concern. B-vent natural draft furnaces require properly sized, unobstructed flue pipes. We've seen bird nests, rust blockages, and improperly rerouted vents in service calls across Garden City and Bloomingdale. Improper venting doesn't always cause an obvious fault code — it can cause intermittent heating issues that look like ignition problems. Our technicians check vent termination as a standard part of every heating diagnosis.`,
      },
    ],
    bertTable: {
      headers: ['Heating Repair Type', 'Cost Range', 'Time', 'System Type'],
      rows: [
        ['Igniter replacement', '$150–$280', '1 hr', 'Gas furnace'],
        ['Flame sensor cleaning/replace', '$100–$200', '45 min', 'Gas furnace'],
        ['Reversing valve replacement', '$400–$800', '2–3 hrs', 'Heat pump'],
        ['Blower motor replacement', '$350–$650', '1.5–2 hrs', 'All forced air'],
        ['Heat exchanger replacement', '$800–$1,500', '3–5 hrs', 'Gas furnace'],
        ['Control board replacement', '$300–$700', '1.5 hrs', 'All systems'],
        ['Gas valve replacement', '$300–$550', '1.5 hrs', 'Gas furnace'],
      ],
    },
    faqs: [
      {
        question: 'My heat pump is blowing cool air in heating mode — what is causing this?',
        answer: 'Three common causes: the system is stuck in cooling mode due to a reversing valve or thermostat issue, the refrigerant charge is low reducing heating capacity, or the outdoor temperature is below the heat pump\'s effective range and backup heat isn\'t engaging. Our technician can diagnose which issue applies within the first 30 minutes of the service call.',
      },
      {
        question: 'How do I know if my furnace heat exchanger is cracked?',
        answer: 'Symptoms include visible rust or soot around the furnace, a burning smell when the heat runs, or occupants experiencing headache and nausea (potential CO exposure — leave immediately and call 911 if severe). A definitive diagnosis requires inspection with a mirror or camera and combustion gas analysis — this is part of every heating tune-up we perform.',
      },
      {
        question: 'Is it safe to run a space heater while waiting for heating repair in Port Wentworth?',
        answer: 'A single quality electric space heater used safely (away from drapes and furniture, plugged directly into a wall outlet, never left unattended) is a reasonable temporary measure. Do not use propane or unvented combustion heaters indoors. If your gas furnace is locked out due to a fault, do not attempt to override the safety lockout.',
      },
      {
        question: 'Why does my furnace turn on and off repeatedly without fully heating the house?',
        answer: 'This is called short-cycling and typically results from a dirty air filter restricting airflow and causing the heat exchanger to overheat and trigger the high-limit switch, an oversized furnace, a failing blower motor, or a refrigerant issue on a heat pump. We diagnose the root cause rather than just clearing the fault.',
      },
      {
        question: 'How often should heating systems be serviced in the Port Wentworth, GA area?',
        answer: 'Annual pre-season service — ideally in October before the first cold snap — is the standard recommendation. Coastal Georgia\'s humidity affects heating equipment during the off-season even when it\'s not running. Moisture in the flue, corrosion on gas valves, and mold growth in ductwork are all off-season issues our annual check catches early.',
      },
    ],
    internalLinks: { up: '/', across: ['/furnace-installation', '/heat-pump-service', '/hvac-maintenance'] },
  },

  {
    slug: 'furnace-installation',
    name: 'Furnace Installation',
    metaDescription:
      'New furnace installation and replacement in Port Wentworth, Pooler & Savannah, GA. Gas and electric systems sized for coastal Georgia. Call (912) 416-3449.',
    tldrBullets: [
      'The HVAC Shop LLC installs gas and electric furnaces in Port Wentworth and Chatham County, GA',
      'Most coastal Georgia homes use heat pumps with gas backup or gas furnaces — we handle both',
      'Proper furnace sizing accounts for Chatham County\'s mild winters and high latent load',
      '80% AFUE and 96%+ AFUE condensing furnaces available depending on your home and budget',
      'All installations are permitted and inspected per Chatham County building codes',
      'Call (912) 416-3449 for a free in-home furnace estimate',
    ],
    heroHeading: 'Choosing the Right Furnace for a Coastal Georgia Home Means Understanding the Climate First',
    sections: [
      {
        heading: 'Gas Furnace vs. Heat Pump: What Makes Sense for Port Wentworth Homeowners',
        content: `The decision between a gas furnace and a heat pump system for a Chatham County home isn't as straightforward as it is in colder northern climates. Here, the mild winter temperatures mean a heat pump can handle 80–90% of your winter heating load efficiently — a 3-ton heat pump in Pooler might run for years without the backup heating strips engaging more than a handful of times per winter. At [The HVAC Shop LLC](/), we evaluate your home's specific conditions, your existing equipment, and your utility setup before recommending a replacement system.

Natural gas is available throughout most of Port Wentworth, Pooler, and Savannah through Atlanta Gas Light. In these areas, a 96% AFUE two-stage gas furnace paired with a matching AC system (a split system) is often the most cost-effective all-around solution — the furnace handles the rare hard freezes while the air conditioner covers eight months of cooling season. Gas furnaces in the 60,000–80,000 BTU range typically suit 1,500–2,500 sq ft coastal Georgia homes.

In Rincon, Bloomingdale, and more rural parts of Effingham County where natural gas isn't available, propane furnaces or all-electric heat pump systems are the practical alternatives. Propane costs more per BTU than natural gas but more than electric resistance heat. We also install [heating repair](/heating-repair) services for existing systems when replacement isn't justified.`,
      },
      {
        heading: 'What 80% AFUE vs. 96% AFUE Means for Your Energy Bills in Savannah',
        content: `AFUE — Annual Fuel Utilization Efficiency — is the percentage of fuel that becomes usable heat. An 80% AFUE furnace sends 20 cents of every dollar in gas up the flue as exhaust. A 96% AFUE condensing furnace extracts so much heat from the combustion process that the exhaust is cool enough to vent through PVC pipe rather than a metal flue.

In coastal Georgia's mild heating climate, the payback period on the efficiency premium for a 96% furnace is longer than in Chicago — you simply don't run the furnace enough hours per year to recoup the price difference as quickly. For a typical Pooler or Port Wentworth home that runs the furnace 500–800 hours per year, the annual fuel savings between 80% and 96% AFUE might be $80–$150. If the price premium for the condensing system is $1,200, that's an 8–15 year payback on fuel savings alone, though comfort benefits from the variable-speed blower often justify the upgrade.

One important note for coastal Georgia: 96% condensing furnaces produce acidic condensate that must drain properly. In homes with poor drainage or where the furnace is in a tight mechanical room, condensate management requires attention during installation. Our team sizes the drain properly and installs condensate neutralizers where code requires.`,
      },
      {
        heading: 'The Installation Process: From Permit to First Heat',
        content: `A professional furnace installation in Chatham County follows a defined sequence. First, we pull the mechanical permit through the county — a requirement for any furnace replacement that many homeowners don't realize their contractor is skipping when they get the suspiciously low bid.

Before the install day, we size the new furnace using Manual J calculations, order the equipment, and confirm the gas line capacity can support the new BTU input. On install day: disconnect and remove the old furnace, modify the supply and return air plenums to match the new equipment footprint, connect the gas line (pressure tested before use), connect the flue venting, wire the thermostat and control circuits, and test the complete system through all operating sequences.

The inspection follow-up varies by county — Chatham County inspectors typically schedule within 3–5 business days. We coordinate the inspection schedule and are present for the inspection. Once the inspector signs off, the permit is closed and you have documentation that the installation meets current code — important for insurance purposes and if you ever sell the home. Pair the new furnace with our [HVAC maintenance](/hvac-maintenance) plan for annual tune-ups that keep the manufacturer's warranty valid.`,
      },
    ],
    bertTable: {
      headers: ['Furnace Type', 'Installed Cost Range', 'AFUE', 'Best Application'],
      rows: [
        ['Gas furnace 80% AFUE (60K BTU)', '$2,800–$4,500', '80%', 'Budget replacement, mild climate'],
        ['Gas furnace 96% AFUE (80K BTU)', '$4,000–$6,500', '96%', 'Long-term efficiency, upgrade'],
        ['Electric furnace/air handler', '$1,800–$3,500', '100%', 'No gas line, paired with heat pump'],
        ['Propane furnace 96% AFUE', '$4,500–$7,000', '96%', 'Rural areas without natural gas'],
        ['Gas package unit (roof/ground)', '$4,000–$7,500', '80%+', 'Commercial, no attic space'],
      ],
    },
    faqs: [
      {
        question: 'How long does a furnace last in Port Wentworth\'s humid climate?',
        answer: 'Gas furnaces in coastal Georgia typically last 15–20 years. The mild winters reduce operating hours, which extends mechanical life, but the off-season humidity causes corrosion on heat exchangers and control boards. Annual pre-season maintenance significantly extends service life.',
      },
      {
        question: 'Do I need a permit to replace my furnace in Chatham County?',
        answer: 'Yes — Chatham County requires a mechanical permit for furnace replacement. The permit and inspection verify that the installation meets current gas code, venting requirements, and clearance specifications. We handle the permit process as part of every installation.',
      },
      {
        question: 'Can I get a tax credit for installing a high-efficiency furnace in Georgia?',
        answer: 'The federal Inflation Reduction Act provides a 30% tax credit (up to $600) for qualifying high-efficiency gas furnaces (95%+ AFUE) and $2,000 for qualifying heat pump systems. Georgia doesn\'t have a separate state credit. We\'ll provide documentation of equipment efficiency ratings for your tax filing.',
      },
      {
        question: 'How long does a furnace installation take?',
        answer: 'Most residential furnace swaps — same location, similar equipment footprint — take 4–6 hours in one day. Jobs requiring gas line modifications, significant duct changes, or new venting runs may take a full day or require a follow-up visit.',
      },
    ],
    internalLinks: { up: '/', across: ['/heating-repair', '/hvac-maintenance', '/hvac-financing'] },
  },

  {
    slug: 'hvac-maintenance',
    name: 'HVAC Maintenance',
    metaDescription:
      'HVAC maintenance plans in Port Wentworth, Pooler & Savannah, GA. Spring AC tune-ups and fall heating checks. Extend equipment life in coastal Georgia. Call (912) 416-3449.',
    tldrBullets: [
      'Annual HVAC maintenance prevents the most common equipment failures in coastal Georgia\'s harsh climate',
      'Spring AC tune-up and fall heating check covers all major system components',
      'Salt air corrosion on condenser coils is a leading cause of premature AC failure — annual cleaning prevents it',
      'Preventive maintenance keeps manufacturer warranties valid on new equipment',
      'David Johnson\'s 30-year experience means our technicians know what to look for in this specific climate',
      'Call (912) 416-3449 to schedule or enroll in our maintenance plan',
    ],
    heroHeading: 'Annual HVAC Maintenance Is the Single Highest-Return Investment You Can Make in Your Equipment',
    sections: [
      {
        heading: 'What a Spring AC Tune-Up Includes in Chatham County\'s Coastal Climate',
        content: `At [The HVAC Shop LLC](/), our spring AC maintenance visit is designed around the specific failure modes we see in coastal Georgia — not a generic checklist that ignores the realities of salt air, 75%+ humidity, and equipment that runs 2,000+ hours per year. When our technician arrives in March or April, before the first serious heat of the season, here's what gets checked.

Condenser coil cleaning is the highest-impact item on coastal Georgia maintenance. Salt particles carried inland from the ocean and the Savannah River deposit on condenser fins, mix with humidity, and form a mildly corrosive film that degrades heat transfer efficiency measurably within a single season. We use a no-rinse coil cleaner followed by a gentle pressure rinse to restore the coil surface. A clean condenser can reduce operating head pressure by 10–15 PSI and reduce compressor amperage draw noticeably.

We check refrigerant pressures (superheat and subcooling measurements, not just static pressure), test capacitor microfarad ratings with a meter (not visual inspection), inspect the contactor for pitting, measure the blower motor amperage, clean the evaporator drain line with compressed air and a treatment tablet, and verify thermostat calibration. On systems with variable-speed blowers, we check the board for fault codes. For customers also interested in air quality improvements, our [indoor air quality](/indoor-air-quality) service can be scheduled the same day.`,
      },
      {
        heading: 'Fall Heating Maintenance: Preparing Your System for Georgia\'s Mild But Real Winters',
        content: `Port Wentworth and Pooler don't get months of sub-freezing temperatures, but when a cold front drops temperatures into the 20s in January, a heating system that hasn't been serviced is your problem — not a hypothetical one. Our fall heating tune-up, typically scheduled September through November, prepares your system for the season.

For gas furnaces, we test igniter resistance (hot surface igniters have a finite life cycle and often fail after sitting dormant through the summer), clean the flame sensor, verify gas pressure at the manifold, inspect the heat exchanger for cracks using a mirror and combustion analyzer, and run the system through a full heating cycle while monitoring temperature rise, flue gas CO levels, and supply/return temperature differential.

For heat pumps, fall service focuses on refrigerant charge verification (a heat pump running slightly undercharged has noticeably reduced heating capacity), defrost board operation test, and reversing valve function check. We also clear any debris from the outdoor unit and verify the defrost cycle engages properly — a heat pump that won't defrost will ice up and lose heating capacity during cold weather. Our [heating repair](/heating-repair) team handles any issues found during the inspection.`,
      },
      {
        heading: 'How Preventive Maintenance Affects Equipment Life and Operating Costs',
        content: `The data on HVAC maintenance payback is straightforward: a system that receives annual service lasts 30–40% longer than one that doesn't. For a $7,000 AC installation, that's the difference between 12 years and 17 years of service — effectively $2,000–$3,000 in deferred replacement cost from consistent maintenance over the equipment's life.

Efficiency is the other major factor. An air conditioner running with a dirty condenser coil, slightly low refrigerant, and a weak capacitor uses 15–25% more electricity than a well-maintained unit producing the same cooling output. For a Port Wentworth home running the AC 2,000 hours per year at Georgia Power's residential rate, that inefficiency costs $200–$400 per year. Annual maintenance pays for itself in electricity savings alone without factoring in extended equipment life or avoided emergency repairs.

We also maintain new system warranties. Most major HVAC manufacturers — Carrier, Trane, Lennox — require documented annual maintenance for the extended parts warranty to remain valid. Without it, a compressor failure 8 years into a 10-year warranty period could fall outside coverage. Our maintenance visits are documented and available to you if you ever need to file a warranty claim. For new system installations, see our [AC installation](/ac-installation) page for details on available equipment warranties.`,
      },
    ],
    bertTable: {
      headers: ['Maintenance Item', 'Frequency', 'If Skipped', 'Impact Level'],
      rows: [
        ['Condenser coil cleaning', 'Annual (spring)', 'Salt corrosion, 10–15% efficiency loss', 'High'],
        ['Capacitor test', 'Annual', 'Undetected failure, no-start call in summer', 'High'],
        ['Refrigerant pressure check', 'Annual', 'Gradual efficiency loss, compressor stress', 'High'],
        ['Drain line flush', 'Annual (spring)', 'Water leak, mold growth in air handler', 'Medium'],
        ['Filter check', 'Monthly/quarterly', 'Frozen coil, reduced airflow, high bills', 'High'],
        ['Heat exchanger inspection', 'Annual (fall)', 'CO risk, undetected crack', 'Critical'],
        ['Blower motor check', 'Annual', 'Overheating, motor failure mid-season', 'Medium'],
      ],
    },
    faqs: [
      {
        question: 'How often should I have my HVAC system serviced in Port Wentworth?',
        answer: 'Twice per year is the standard recommendation: a spring AC tune-up before cooling season and a fall heating check before the first cold snap. In coastal Georgia, the spring tune-up is particularly important due to salt air and humidity damage to outdoor condenser components.',
      },
      {
        question: 'Does The HVAC Shop LLC offer a maintenance plan or service agreement?',
        answer: 'Yes. Our maintenance plan covers two visits per year (spring and fall), priority scheduling, and discounts on any repairs identified during service. Call (912) 416-3449 for current plan pricing.',
      },
      {
        question: 'Can I do any HVAC maintenance myself?',
        answer: 'Filter replacement is the highest-impact DIY maintenance task — a clean filter every 1–3 months (monthly if you have pets or allergies) does more for system performance than almost anything else. Clearing debris from around the outdoor condenser and keeping the area mowed are also simple homeowner tasks. Refrigerant, electrical, and coil work require a licensed technician.',
      },
      {
        question: 'Will maintenance void my new equipment warranty if I don\'t use the installing contractor?',
        answer: 'No — federal law (the Magnuson-Moss Warranty Act) prohibits manufacturers from requiring you to use a specific contractor for maintenance. However, you must use a licensed HVAC technician, and the maintenance must be documented. We document every visit and can service equipment we didn\'t install.',
      },
    ],
    internalLinks: { up: '/', across: ['/ac-repair', '/heating-repair', '/hvac-inspection'] },
  },

  {
    slug: 'duct-fabrication',
    name: 'Duct Fabrication',
    metaDescription:
      'Custom sheet metal duct fabrication and installation in Port Wentworth, Pooler & Savannah, GA. New construction and retrofit ductwork for homes and businesses. Call (912) 416-3449.',
    tldrBullets: [
      'The HVAC Shop LLC fabricates and installs custom sheet metal ductwork for residential and commercial projects',
      'Custom duct fabrication is a specialty skill — David Johnson brings 30 years of sheet metal experience',
      'Properly designed ductwork is as important as equipment selection for system performance and efficiency',
      'We serve new construction projects in Godley Station, Pooler, and Rincon growth corridors',
      'Duct leakage in coastal Georgia homes wastes 20–30% of conditioned air before it reaches living spaces',
      'Call (912) 416-3449 for commercial and residential duct fabrication quotes',
    ],
    heroHeading: 'Custom Ductwork Is Where System Performance Is Won or Lost',
    sections: [
      {
        heading: 'Why Sheet Metal Duct Fabrication Requires Real Expertise in Coastal Georgia',
        content: `Most HVAC contractors buy pre-formed flex duct from a supply house and call it a day. At [The HVAC Shop LLC](/), custom sheet metal duct fabrication is a core skill — one that David Johnson developed over 30 years in the trade and that sets us apart from contractors who only work with pre-manufactured components. The distinction matters because coastal Georgia's building stock, from the brick Savannah historic district homes to the new construction subdivisions in Godley Station and Rincon, requires ductwork solutions that can't always be pulled off a shelf.

Sheet metal (galvanized steel, typically 26–24 gauge for residential supply runs) offers superior airflow characteristics compared to flex duct. A straight 10-inch round sheet metal duct has roughly half the friction loss of the equivalent flex duct run, which translates directly to better airflow at the registers and a system that doesn't have to work as hard. For the Port Wentworth industrial corridor and commercial clients along Highway 21, sheet metal construction is often a code requirement and the right choice regardless.

We also fabricate custom plenums, transitions, and fittings that connect your new or existing equipment to the distribution system. A mismatched plenum — wrong size, wrong angle, abrupt transitions — creates turbulence that reduces system efficiency and generates noise. Our fabrication shop produces properly sized components that match the equipment manufacturer's engineering specifications. Pair proper ductwork with our [duct cleaning](/duct-cleaning) service for a complete system performance overhaul.`,
      },
      {
        heading: 'Common Ductwork Problems We Find in Chatham County Homes and Businesses',
        content: `Duct inspection on existing homes in Port Wentworth, Garden City, and Savannah regularly reveals problems that explain why homeowners have hot and cold spots, high electric bills, or poor humidity control despite a functioning air conditioner. Leakage is the most pervasive issue — flex duct connections that weren't properly secured, sheet metal joints without mastic sealant, and supply boots that weren't sealed to the drywall allow conditioned air to escape into unconditioned attic space.

In coastal Georgia, where attic temperatures can exceed 140°F in July, a leaky supply duct dumps cold air directly into that attic heat before it reaches your bedroom. A typical Chatham County home with 20–30% duct leakage wastes hundreds of dollars per year in conditioning costs. Our duct leakage test — a blower door test focused on the duct system — quantifies the actual leakage rate and lets us prioritize the highest-impact repair locations.

Undersized ductwork is another common finding, particularly in older Savannah homes that had HVAC systems retrofitted into spaces not designed for ductwork. A return air path that's too restrictive creates high static pressure, which reduces airflow, makes the blower motor work harder, and eventually causes the evaporator coil to freeze. We redesign and refabricate the affected sections rather than just adding band-aids. For very old or deteriorated duct systems, see our [duct cleaning](/duct-cleaning) service for the complementary assessment.`,
      },
      {
        heading: 'New Construction Ductwork for Pooler, Rincon, and Effingham County Projects',
        content: `Chatham County's rapid population growth — Pooler is one of Georgia's fastest-growing cities — means new residential and commercial construction projects are constant in our service area. The HVAC Shop LLC works with builders and general contractors on new construction HVAC installations, designing and fabricating the complete duct distribution system from scratch.

New construction ductwork design starts with Manual D — the ACCA duct sizing standard that ensures each supply register receives the correct airflow based on the room's calculated load. Every junction box, every take-off, every register boot is sized to deliver the target CFM. We use duct design software to model the system before we fabricate a single piece of metal, ensuring the installed system will perform as engineered.

For builders working in Godley Station, Towne Park, and the West Chatham new construction corridors, we offer pre-scheduled rough-in visits that work around the building schedule. We coordinate with the insulation contractor to ensure duct insulation meets Georgia Energy Code requirements — R-8 minimum for supply ducts in unconditioned attic spaces. Our commercial HVAC team handles larger commercial projects; see our [commercial HVAC](/commercial-hvac) page for light commercial and industrial ductwork capabilities.`,
      },
    ],
    bertTable: {
      headers: ['Duct Work Type', 'Cost Range', 'Timeline', 'Application'],
      rows: [
        ['Single trunk/branch replacement', '$400–$1,200', '1 day', 'Targeted repair'],
        ['Residential full duct system (new)', '$3,500–$8,000', '2–4 days', 'New construction'],
        ['Retrofit replacement (existing home)', '$5,000–$12,000', '3–5 days', 'Full system upgrade'],
        ['Custom plenum fabrication', '$300–$800', '4–8 hrs', 'Equipment replacement'],
        ['Commercial light industrial', '$8,000–$30,000+', '1–2 weeks', 'Per project scope'],
        ['Duct sealing (mastic/Aeroseal)', '$800–$2,500', '1 day', 'Leakage reduction'],
      ],
    },
    faqs: [
      {
        question: 'What gauge sheet metal does The HVAC Shop LLC use for residential ductwork?',
        answer: 'We typically use 26-gauge galvanized steel for residential trunk lines and 28-gauge for branches, consistent with SMACNA standards. Commercial applications often require 24-gauge or heavier depending on static pressure requirements.',
      },
      {
        question: 'Should I use flex duct or sheet metal for my home in Port Wentworth?',
        answer: 'Sheet metal for trunk lines and major branches, properly-installed flex duct for final connections to register boots. Flex duct used exclusively for long runs has higher friction loss and sags over time, reducing airflow. The hybrid approach gives the best balance of cost and performance.',
      },
      {
        question: 'How do I know if my existing ductwork needs to be replaced?',
        answer: 'Signs include rooms that won\'t reach thermostat temperature, high utility bills despite a functioning system, visible tears or disconnections in attic ductwork, and a blower door or duct leakage test showing more than 6% leakage to the outside. We assess existing ductwork as part of any system replacement consultation.',
      },
    ],
    internalLinks: { up: '/', across: ['/duct-cleaning', '/ac-installation', '/commercial-hvac'] },
  },

  {
    slug: 'duct-cleaning',
    name: 'Duct Cleaning',
    metaDescription:
      'Professional air duct cleaning in Port Wentworth, Pooler & Savannah, GA. Remove dust, mold, and allergens from your HVAC system. Call (912) 416-3449.',
    tldrBullets: [
      'Professional duct cleaning removes accumulated dust, mold spores, and allergens from your air distribution system',
      'Coastal Georgia\'s humidity creates conditions for mold growth inside ductwork — a real concern, not a sales tactic',
      'NADCA-standard cleaning uses negative pressure and contact vacuum to clean every accessible surface',
      'Duct cleaning is most valuable after water intrusion, new construction, or if visible mold is present',
      'Dryer vent cleaning is included or available as an add-on — clogged dryer vents are a leading house fire cause',
      'Call (912) 416-3449 to schedule or ask about duct cleaning during your next service call',
    ],
    heroHeading: 'What\'s Inside Your Ductwork May Be Affecting Your Air Quality Right Now',
    sections: [
      {
        heading: 'When Duct Cleaning Is Genuinely Necessary in the Savannah Area',
        content: `We'll be honest with you: not every home needs duct cleaning every year, and we won't try to sell it to you if you don't need it. But coastal Georgia's climate creates genuine conditions where duct cleaning provides real value, and it's important to distinguish those from the fear-based marketing that gives the industry a bad name. At [The HVAC Shop LLC](/), our [duct fabrication](/duct-fabrication) expertise means we understand duct systems thoroughly enough to tell you when cleaning is warranted.

Mold is the primary concern in this climate. When a condensate drain clogs (a common occurrence in summer when the AC runs continuously), moisture backs up into the air handler and can wick into the supply ductwork. The combination of moisture and the organic material (dust, pollen, insulation fibers) already inside the duct creates conditions favorable to mold growth. Once mold is established in ductwork, every time the air handler runs, it distributes spores throughout the living space. If you've had a water intrusion event, a clogged drain you caught late, or if you notice a musty smell when the AC kicks on, duct cleaning with antimicrobial treatment is appropriate.

Post-construction cleaning is another clear-cut case. New construction in Godley Station, Pooler Parkway, and the Rincon growth corridor generates significant construction dust — drywall particles, sawdust, insulation fibers — that settles throughout the duct system before the home is occupied. HVAC manufacturers recommend duct cleaning after construction completion and before occupancy for warranty purposes on new equipment.`,
      },
      {
        heading: 'How NADCA-Standard Duct Cleaning Works',
        content: `The HVAC industry's legitimate standard for duct cleaning is set by the National Air Duct Cleaners Association (NADCA). The key distinction from low-quality "blow and go" services is the use of negative pressure combined with contact cleaning — not just blowing compressed air through the ducts and hoping debris exits at the other end.

Our process: we connect a high-powered truck-mounted or portable vacuum unit to the supply air system, creating negative pressure (suction) throughout the duct network. With the negative pressure pulling toward the collection point, we work section by section from the registers inward, using contact cleaning tools (rotating brushes, air whips) to agitate and dislodge debris from duct walls. The displaced debris is captured in the vacuum rather than redistributed into the home.

After mechanical cleaning, we treat accessible surfaces with an EPA-registered antimicrobial agent when mold or moisture conditions warrant it. We clean the air handler cabinet, evaporator coil, drain pan, and blower wheel as part of a comprehensive system cleaning — not just the ducts. These components are where mold most commonly establishes in the humid Savannah climate, and cleaning the ducts without addressing the air handler is like washing your car without cleaning the engine bay.`,
      },
      {
        heading: 'Indoor Air Quality Improvements That Work Alongside Duct Cleaning',
        content: `Duct cleaning addresses what's already in your system. To prevent rapid recontamination, the underlying cause of the contamination should be addressed. For most Chatham County homes, that means upgrading filtration and addressing humidity control. A MERV 11–13 filter traps finer particulate than the standard MERV 8 fiberglass filter, slowing dust accumulation in the ductwork significantly. Our [indoor air quality](/indoor-air-quality) service can add UV-C germicidal lights inside the air handler to prevent mold regrowth on the evaporator coil between service visits.

Dryer vent cleaning is an important add-on service we offer. The Consumer Product Safety Commission estimates that clogged dryer vents cause approximately 15,000 house fires per year. In Port Wentworth and Pooler homes where the dryer vent runs a long distance to an exterior wall, or in townhomes and condos where shared vent stacks were never properly cleaned, lint accumulation is a real fire risk. We clean dryer vents with the same negative-pressure equipment used for duct cleaning, and we can inspect the vent path for proper slope and termination.

Schedule duct cleaning in conjunction with a system tune-up to maximize value from the service call — our technicians are already at your home and we can combine the two services at a reduced total cost compared to separate visits.`,
      },
    ],
    bertTable: {
      headers: ['Service', 'Cost Range', 'Duration', 'When Needed'],
      rows: [
        ['Residential duct cleaning (1,500–2,500 sqft)', '$350–$600', '3–4 hrs', 'Post-construction, mold, musty odor'],
        ['Air handler/coil cleaning', '$150–$250', '1 hr', 'Add-on to duct cleaning'],
        ['Antimicrobial treatment', '$100–$200', '30 min', 'After mold or moisture events'],
        ['Dryer vent cleaning', '$100–$175', '45 min', 'Annual, if lint visible at exterior'],
        ['Commercial duct cleaning (per sq ft)', '$0.25–$0.45/sqft', 'Varies', 'Post-reno, IAQ complaints'],
      ],
    },
    faqs: [
      {
        question: 'How do I know if my ducts actually need cleaning in Port Wentworth?',
        answer: 'Clear indicators: visible mold in the air handler or on duct surfaces, a musty smell when the AC runs, construction dust throughout the home after a recent renovation, or a history of indoor flooding/water intrusion that affected the HVAC system. Routine cleaning "just because" without these indicators may not be necessary for a well-maintained system.',
      },
      {
        question: 'Can duct cleaning help with allergies in the Savannah area?',
        answer: 'It can reduce allergen concentration inside the duct system, but duct cleaning alone doesn\'t make an HVAC system an air purifier. For allergy sufferers, upgrading to MERV 11–13 filtration and adding a UV germicidal light to the air handler will provide more consistent relief than periodic duct cleaning.',
      },
      {
        question: 'How often should ducts be cleaned?',
        answer: 'The EPA recommends cleaning when there is visible mold, pest infestation, or excessive dust discharge from registers — not on a fixed schedule. Every 3–5 years is a reasonable interval for homes without specific contamination events. Post-construction, after flooding, or after a mold remediation project, cleaning is warranted regardless of the time since the last service.',
      },
    ],
    internalLinks: { up: '/', across: ['/indoor-air-quality', '/duct-fabrication', '/hvac-maintenance'] },
  },

  {
    slug: 'commercial-hvac',
    name: 'Commercial HVAC',
    metaDescription:
      'Commercial HVAC service, installation & maintenance in Port Wentworth, Pooler & Savannah, GA. Rooftop units, office, retail & industrial. Call (912) 416-3449.',
    tldrBullets: [
      'The HVAC Shop LLC provides commercial HVAC service for offices, retail, warehouses, and industrial facilities',
      'Port Wentworth\'s industrial corridor and Pooler\'s commercial growth create high demand for commercial HVAC expertise',
      'We service rooftop package units (RTUs), split systems, VRF systems, and commercial heat pumps',
      'Coastal Georgia\'s industrial sector places extreme demands on commercial HVAC equipment',
      'David Johnson\'s 30 years includes extensive commercial and industrial HVAC experience',
      'Call (912) 416-3449 for commercial service agreements and emergency service',
    ],
    heroHeading: 'Commercial HVAC in Port Wentworth\'s Industrial Corridor Demands a Different Level of Expertise',
    sections: [
      {
        heading: 'What Makes Commercial HVAC Different from Residential Service',
        content: `The commercial HVAC market in Port Wentworth and along the Chatham County industrial corridor is distinct from residential service in ways that matter for equipment selection, service response, and code compliance. A business that can't cool its server room, a food service operation that loses refrigeration and HVAC simultaneously during a summer heat event, or a warehouse near the Port of Savannah where heat stress becomes an OSHA concern — these situations require a contractor who understands the commercial context, not just the mechanical systems. At [The HVAC Shop LLC](/), we serve the full range of commercial customers from small professional offices to large industrial facilities.

Commercial HVAC equipment operates on different fundamentals than residential. Rooftop package units (RTUs) combine heating and cooling in a single cabinet mounted on the roof, connecting to the building through a single penetration. They're the dominant commercial cooling equipment across the Pooler commercial corridor, Tanger Outlets area, and the retail development along Highway 21. RTUs require attention to the roof curb condition, the economizer (free cooling) operation, and the refrigerant circuit. In coastal Georgia, the rooftop environment is particularly harsh — salt air, UV exposure, and bird activity all affect RTU longevity.

For commercial [duct fabrication](/duct-fabrication) projects, the design standards shift to SMACNA specifications, which govern gauge selection, joint types, and pressure class ratings based on system static pressure. Commercial duct systems also have code requirements for fire and smoke dampers at certain locations. We pull all required permits and coordinate inspections with Chatham County for every commercial mechanical project.`,
      },
      {
        heading: 'Serving the Port Wentworth Industrial and Logistics Sector',
        content: `The Port of Savannah, one of the busiest ports in the United States, anchors an industrial and logistics complex that extends through Port Wentworth and Garden City. Warehouses, distribution centers, freight handling facilities, and related businesses line Highway 21 and the Industrial District roads. These facilities have HVAC needs that differ substantially from office or retail environments: large unconditioned or partially conditioned spaces, high internal heat loads from machinery and equipment, and worker comfort requirements that factor into productivity and OSHA compliance.

For large warehouse and industrial spaces, we evaluate evaporative cooling options (highly effective in spaces where 100% humidity control isn't required), dedicated outdoor air systems (DOAS) that handle ventilation separately from cooling, and high-volume low-speed (HVLS) fan integration that can dramatically reduce the apparent temperature at worker level. The coastal Georgia climate allows evaporative cooling effectiveness for warehouse applications several months per year when humidity isn't at peak summer levels.

Commercial service agreements are the best way to ensure your business is covered. We schedule maintenance during your low-traffic hours, maintain equipment documentation, and provide priority emergency response to commercial accounts. A business can't wait three days for an AC repair in July — our commercial service agreement customers go to the front of the line.`,
      },
      {
        heading: 'Commercial Refrigeration and Specialized Equipment',
        content: `The Savannah area's restaurant and hospitality sector — concentrated in downtown Savannah, the tourist district, and the growing Pooler and West Chatham commercial areas — relies on HVAC contractors who can also address the interface between HVAC and commercial refrigeration. We service commercial cooling equipment including walk-in cooler condensing units, reach-in refrigerator repair, and the HVAC components of commercial kitchens where ventilation design affects both comfort and code compliance.

Restaurant HVAC design is governed by ASHRAE 154 and local code requirements that specify makeup air for kitchen exhaust hoods. Undersized makeup air systems create negative pressure in the kitchen that pulls conditioned air from the dining room, spikes the cooling load, and causes hood performance issues. We've corrected improperly sized makeup air systems in several Savannah and Pooler restaurants and can work with mechanical engineers on new restaurant installations.

Our [emergency HVAC service](/emergency-hvac-service) is available 24/7 for commercial clients, because business equipment failures don't respect business hours. Whether it's a failed RTU on a July Monday morning or a refrigeration issue over a holiday weekend, we can respond. Call (912) 416-3449 for commercial emergency service.`,
      },
    ],
    bertTable: {
      headers: ['Commercial Equipment Type', 'Service Scope', 'Typical Cost/Visit', 'Service Frequency'],
      rows: [
        ['RTU (rooftop package unit) 3–20 ton', 'Full PM + diagnostics', '$250–$600', 'Twice annually'],
        ['Split system commercial 3–10 ton', 'Full PM + coil cleaning', '$200–$450', 'Twice annually'],
        ['VRF multi-zone system', 'PM + refrigerant check', '$400–$1,200', 'Annually'],
        ['Commercial heat pump', 'Full PM + refrigerant', '$250–$550', 'Twice annually'],
        ['Makeup air unit', 'Filter + belt + bearing', '$200–$500', 'Twice annually'],
        ['Industrial spot cooler', 'Filter + refrigerant', '$150–$350', 'Annually'],
      ],
    },
    faqs: [
      {
        question: 'Does The HVAC Shop LLC offer commercial service agreements for businesses in Port Wentworth?',
        answer: 'Yes. Commercial service agreements include scheduled maintenance visits, priority emergency response, documented service history, and discounts on repairs. Contact us to discuss an agreement tailored to your facility size and equipment inventory.',
      },
      {
        question: 'How quickly can you respond to a commercial HVAC emergency in Chatham County?',
        answer: 'Commercial service agreement customers receive priority dispatch. For emergency calls during business hours, we target a same-day response for Port Wentworth, Pooler, and Garden City commercial clients. After-hours emergency response is available via our 24/7 line at (912) 416-3449.',
      },
      {
        question: 'Can you service rooftop HVAC units on commercial buildings?',
        answer: 'Yes. We have experience with RTUs up to 20 tons from major manufacturers including Carrier, Trane, Lennox, York, and Daikin. Larger commercial systems (chillers, cooling towers) are evaluated on a project basis.',
      },
    ],
    internalLinks: { up: '/', across: ['/duct-fabrication', '/emergency-hvac-service', '/hvac-maintenance'] },
  },

  {
    slug: 'emergency-hvac-service',
    name: 'Emergency HVAC Service',
    metaDescription:
      '24/7 emergency HVAC repair in Port Wentworth, Pooler & Savannah, GA. After-hours AC and heating failures. Call (912) 416-3449 any time.',
    tldrBullets: [
      'The HVAC Shop LLC provides 24/7 emergency HVAC service in Port Wentworth and Chatham County',
      'Same-day and after-hours response for AC failures during Savannah\'s dangerous summer heat',
      'Emergency heating service available during coastal Georgia cold snaps',
      'We stock common repair parts on our service vehicles to maximize same-visit resolution rates',
      'No upselling or scare tactics — emergency calls get honest diagnostics and upfront pricing',
      'Call now: (912) 416-3449 — live answer for emergency calls',
    ],
    heroHeading: 'A Failed AC in Savannah\'s July Heat Is a Medical Emergency for the Elderly and Young',
    sections: [
      {
        heading: 'When an HVAC Failure Becomes a Health Emergency in Coastal Georgia\'s Heat',
        content: `Port Wentworth and the greater Savannah area experience some of the most dangerous summer heat in the Eastern United States. The combination of 95°F+ temperatures and humidity above 75% produces heat index values exceeding 110°F on the worst days of July and August. For healthy adults, an AC failure in these conditions is uncomfortable. For the elderly, infants, pets, and those with cardiovascular or respiratory conditions, it can become life-threatening within hours. At [The HVAC Shop LLC](/), our 24/7 emergency line exists because we understand the stakes.

When you call for an emergency service call, you reach a live person — not a voicemail, not an answering service that will call you back during business hours. We dispatch based on urgency, with priority given to situations involving vulnerable occupants and extreme temperature conditions. Our service vehicles are stocked with the most common failure components — capacitors, contactors, hard-start kits, drain pan tablets, and basic refrigerant supplies — to maximize the probability of a same-visit resolution rather than a "we have to order the part" outcome.

If you're waiting for our technician, reduce the heat load: close blinds and curtains on sun-facing windows, limit appliance use (ovens, dryers), run ceiling fans (a fan doesn't cool the air but the wind-chill effect makes the same temperature feel 4–5 degrees cooler), and identify a neighborhood cooling center if the situation is becoming critical. The [AC repair](/ac-repair) team is on the way.`,
      },
      {
        heading: 'After-Hours HVAC Failures: What to Expect from Our Emergency Response',
        content: `An after-hours emergency service call from The HVAC Shop LLC includes a diagnostics call, because good emergency response isn't just about showing up — it's about showing up prepared. When you call at 10 PM and describe what's happening (AC running but not cooling, unit not starting at all, strange noise and then shutdown), our dispatcher asks targeted questions to help pre-identify the probable cause and confirm we have the likely repair part on the vehicle before we head out.

Emergency service includes an after-hours service fee, which we disclose upfront before you commit. We won't surprise you with a $400 fee when you're already stressed about your broken AC. The fee covers the technician's time and availability; the repair cost is quoted separately after diagnosis. For customers on our [HVAC maintenance](/hvac-maintenance) plan, emergency service fees are reduced as a plan benefit.

We prioritize emergency calls in this order: occupied residences with vulnerable individuals, occupied residences in extreme heat, commercial clients with service agreements, other emergency calls. We're honest about this triage — if there's a queue on a heat wave day, we'll tell you your estimated arrival window rather than give you an unreliable "within 2 hours" promise.`,
      },
      {
        heading: 'Preventing the Next Emergency: What Most After-Hours Calls Have in Common',
        content: `After fifteen years of emergency calls across Port Wentworth, Pooler, and the Savannah area, we've noticed that the majority share a common thread: they were preventable. Not because the homeowner did anything wrong, but because the failure component showed warning signs weeks or months before the breakdown that annual maintenance would have caught.

Failed capacitors — the single most common cause of after-hours AC calls in our service area — show measurable deterioration on a capacitor tester months before they fail completely. A capacitor rated at 45 microfarads that tests at 38 microfarads during a spring tune-up is telling you it has maybe one more season left. Replace it proactively for $150–$250 during a maintenance visit, or replace it reactively for $250–$350 on an emergency call at 11 PM in August, plus the after-hours fee. The difference in experience is considerable.

Similarly, dirty condenser coils that cause high discharge pressure and compressor overheating, low refrigerant that causes the evaporator to ice over and the system to shut down, and weak contactors that fail to make proper electrical contact — all of these are detectable during a spring [HVAC maintenance](/hvac-maintenance) visit. Enroll in our maintenance plan and reduce your odds of joining the emergency call queue.`,
      },
    ],
    bertTable: {
      headers: ['Time of Call', 'Emergency Fee', 'Response Target', 'Notes'],
      rows: [
        ['Business hours (8am–5pm)', 'Standard rate', '2–4 hrs', 'Same-day appointment'],
        ['After hours (5pm–10pm)', '+$75–$125', '2–3 hrs', 'Based on technician availability'],
        ['Night / weekend (10pm–7am)', '+$150–$200', '2–4 hrs', 'Priority for vulnerable occupants'],
        ['Holiday weekend', '+$175–$225', '3–5 hrs', 'On-call rotation'],
        ['Maintenance plan customers', 'Reduced fees', 'Priority dispatch', 'Benefit of plan enrollment'],
      ],
    },
    faqs: [
      {
        question: 'Is there a live person available when I call (912) 416-3449 after hours?',
        answer: 'Yes. Our emergency line is answered by a live person or an on-call dispatcher who can assess your situation and dispatch a technician. You will not reach a general voicemail during a declared emergency call.',
      },
      {
        question: 'What\'s the fastest temporary fix if my AC fails on a hot Savannah night?',
        answer: 'Close all blinds on south and west windows, run ceiling fans counterclockwise, place ice in a bowl in front of a regular fan, limit any heat-generating appliances, and check that the circuit breaker hasn\'t tripped (reset it once if it has — if it trips again immediately, don\'t reset). Call us at (912) 416-3449 for emergency service.',
      },
      {
        question: 'My AC stopped working at 9 PM on a weekend. How much extra will I pay?',
        answer: 'Weekend after-hours calls typically incur an emergency service fee of $75–$125 in addition to the standard diagnostic fee and parts/labor for the repair. We quote the emergency fee over the phone before dispatching so there are no surprises.',
      },
      {
        question: 'Can you fix my AC the same night, or will you tell me to wait until morning?',
        answer: 'We stock the most common repair parts (capacitors, contactors, blower motor run capacitors, basic refrigerant supplies) on our emergency vehicles. Most common failure modes — capacitor failure, contactor failure, refrigerant recharge — can be resolved in the same visit. Complex failures requiring specialty parts may require a temporary measure and a follow-up visit.',
      },
    ],
    internalLinks: { up: '/', across: ['/ac-repair', '/heating-repair', '/hvac-maintenance'] },
  },

  {
    slug: 'hvac-inspection',
    name: 'HVAC Inspection',
    metaDescription:
      'HVAC inspection services in Port Wentworth, Pooler & Savannah, GA. Pre-purchase home inspections, system assessments, and performance evaluations. Call (912) 416-3449.',
    tldrBullets: [
      'The HVAC Shop LLC provides thorough HVAC inspections for home buyers, sellers, and performance assessments',
      'A pre-purchase HVAC inspection in coastal Georgia often reveals salt air damage that general home inspectors miss',
      'Inspection includes equipment age, condition, refrigerant charge, airflow, and estimated remaining life',
      'Written inspection report with findings and recommendations provided same day',
      'David Johnson\'s 30 years of local experience adds context to every inspection',
      'Call (912) 416-3449 to schedule your HVAC inspection',
    ],
    heroHeading: 'Before You Buy a Home in Chatham County, Know the True Condition of the HVAC System',
    sections: [
      {
        heading: 'What a Specialized HVAC Inspection Covers That a General Home Inspector Misses',
        content: `General home inspectors perform a visual survey of your HVAC system — they note the equipment age, check for obvious physical damage, verify that the system starts, and confirm that it blows air. What they typically don't do: measure refrigerant pressures, test capacitor health with a meter, assess heat exchanger integrity, evaluate duct leakage, or identify the specific coastal Georgia failure modes that determine whether you're buying a system with 10 years of life left or 2 years. At [The HVAC Shop LLC](/), a dedicated HVAC inspection by David Johnson or our senior technicians gives you the information you need to negotiate, budget for repairs, or walk away.

For home buyers in Port Wentworth, Pooler, and Savannah's competitive real estate market, an HVAC inspection often uncovers issues that change the transaction. A Savannah historic district home with a 14-year-old AC unit that a general inspector flags as "operational" may actually have a compressor showing high amperage draw, a condenser coil with moderate salt corrosion, and a blower motor with worn bearings — a system that's 12–18 months from a $6,000–$8,000 replacement. That's negotiating leverage worth far more than the $200 inspection fee.

We provide a written inspection report on-site, documenting equipment make, model, serial number (from which we can determine manufacture date and estimated remaining refrigerant compatibility), measured operating parameters, identified deficiencies, and recommended actions with rough cost estimates. The report is suitable for real estate transactions, insurance documentation, or personal records.`,
      },
      {
        heading: 'Identifying Salt Air and Humidity Damage During a Coastal Georgia Inspection',
        content: `The inspection findings in a Port Wentworth or Savannah-area home differ from what you'd see in a landlocked Georgia city, because coastal exposure affects HVAC equipment in specific, detectable ways. Formicary corrosion on copper refrigerant lines and evaporator coil hairpins is a particular concern — it creates pinhole leaks that cause slow refrigerant loss and eventual system failure. This corrosion appears as small blue-green pitting on copper surfaces and is more common in homes within 2–5 miles of salt water.

Condenser coil deterioration from salt air is highly localized — homes near Highway 17, the Savannah River waterfront, and coastal Savannah neighborhoods see significantly faster condenser coil degradation than homes further inland like Rincon or Bloomingdale. A visual inspection of the condenser coil with a mirror and flashlight reveals whether the fin material has thinned from corrosion, whether the tube-to-fin bonding has degraded, or whether coil cleanings have been performed. A coil with 40% fin loss is a system near the end of its efficient life.

Duct condition assessment is another inspection component that's particularly relevant in Savannah's older housing stock. Fiberglass duct board from the 1980s and 1990s delaminates in high-humidity attic environments, creating internal contamination of the air stream. Flex duct connections that were never properly secured become airflow restrictions over time. Our [duct fabrication](/duct-fabrication) team can assess the duct system and provide an estimate for correction that becomes part of your inspection documentation.`,
      },
      {
        heading: 'Pre-Sale HVAC Inspection: Get Ahead of Buyer Objections',
        content: `Sellers who commission a pre-listing HVAC inspection are in a stronger negotiating position than those who wait for the buyer's inspector to find problems. Knowing what's wrong — and addressing it before listing — removes a common source of buyer objections and price renegotiations. In the current Savannah and Port Wentworth real estate market, where buyers often waive inspection contingencies in competitive situations, a seller-provided HVAC inspection report is a meaningful disclosure that demonstrates good faith and reduces post-closing disputes.

Pre-sale inspections often reveal deferred maintenance items that are inexpensive to address: a dirty condenser coil that reduces efficiency and looks neglected ($150), a slightly undercharged refrigerant circuit ($200–$300), or a filter that hasn't been changed in months. Addressing these before the listing shows a well-maintained property. We can also coordinate with our [HVAC maintenance](/hvac-maintenance) service to perform a tune-up concurrent with the inspection.

For sellers with older equipment (12+ years), the inspection report provides documentation of the current condition that helps buyers understand what they're purchasing and price it into their offer rather than requesting a full replacement credit. Transparent disclosure with documented condition is almost always preferable to discovering problems mid-transaction.`,
      },
    ],
    bertTable: {
      headers: ['Inspection Type', 'Cost', 'Deliverable', 'Timeline'],
      rows: [
        ['Pre-purchase buyer inspection', '$175–$275', 'Written report same day', '90–120 min on site'],
        ['Pre-sale seller inspection', '$150–$250', 'Written report same day', '90 min on site'],
        ['Performance/efficiency assessment', '$175–$300', 'Detailed report + recommendations', '2–3 hrs'],
        ['Commercial system inspection (per unit)', '$200–$400', 'Written report per unit', '1–2 hrs/unit'],
        ['Post-installation verification', '$150', 'Performance confirmation', '45–60 min'],
      ],
    },
    faqs: [
      {
        question: 'Should I get a separate HVAC inspection in addition to a general home inspection?',
        answer: 'Yes, particularly for coastal Georgia homes where salt air damage is not something most general home inspectors are trained to assess. A specialized HVAC inspection typically costs $175–$275 and can identify $5,000–$15,000 in repair or replacement needs that a general inspection misses.',
      },
      {
        question: 'How long does an HVAC inspection take?',
        answer: 'A standard residential inspection takes 90–120 minutes. We need the system accessible, the thermostat operable, and ideally both heating and cooling modes testable (outside temperature permitting). We provide the written report before leaving the property.',
      },
      {
        question: 'What is the most common finding in HVAC inspections in the Savannah area?',
        answer: 'Deferred maintenance: dirty condenser coils, weak capacitors, low refrigerant due to slow leaks, and dirty air filters are the most common findings. Less frequently but more significantly: heat exchanger corrosion in gas furnaces, formicary corrosion on copper refrigerant components, and significant duct leakage.',
      },
    ],
    internalLinks: { up: '/', across: ['/hvac-maintenance', '/ac-repair', '/duct-fabrication'] },
  },

  {
    slug: 'thermostat-installation',
    name: 'Thermostat Installation',
    metaDescription:
      'Smart and programmable thermostat installation in Port Wentworth, Pooler & Savannah, GA. Nest, Ecobee, and standard thermostat setup. Call (912) 416-3449.',
    tldrBullets: [
      'Professional thermostat installation ensures proper wiring and compatibility with your HVAC system',
      'Smart thermostats (Nest, Ecobee, Honeywell) can save 10–15% on cooling costs in coastal Georgia',
      'Improper thermostat wiring is a leading cause of HVAC problems we diagnose each year',
      'We verify communicating thermostat compatibility with variable-speed and multi-stage systems',
      'Smart thermostats work with Georgia Power time-of-use rate programs to further reduce bills',
      'Call (912) 416-3449 to schedule thermostat installation or replacement',
    ],
    heroHeading: 'The Right Thermostat — Properly Installed — Is the Control Center for Your Entire HVAC System',
    sections: [
      {
        heading: 'Why Professional Thermostat Installation Matters More Than Most Homeowners Realize',
        content: `Thermostat installation looks deceptively simple — it's a small box on a wall with a handful of wires. But thermostat wiring errors cause a significant portion of HVAC service calls: short circuits that blow control board fuses, mismatched C-wire configurations that cause smart thermostats to malfunction, and compatibility issues between communicating thermostats and variable-speed equipment. At [The HVAC Shop LLC](/), every thermostat installation includes a full system compatibility check and post-installation function test through all operating modes.

The C-wire situation affects a large percentage of older Chatham County homes. Smart thermostats (Nest, Ecobee, Honeywell T-Series) require a common wire for continuous low-voltage power. Many older systems — including a large percentage of the homes we service in established neighborhoods of Savannah, Garden City, and Port Wentworth — only have a 4-wire thermostat cable with no C-wire. We solve this through several approaches: adding a C-wire adapter at the air handler board, running a new 5-wire cable if the thermostat location allows it, or selecting a smart thermostat with a built-in power harvesting module.

Compatibility between smart thermostats and multi-stage or variable-speed systems requires specific knowledge. An Ecobee or Nest thermostat paired with a two-stage heat pump needs to be configured correctly to leverage the system's efficiency features. Install it with default settings and you may be running a variable-speed system in single-stage mode, wasting the premium you paid for the equipment. We configure the thermostat during installation to match your specific system's capabilities.`,
      },
      {
        heading: 'Smart Thermostat Options That Perform Well in Georgia\'s Cooling-Dominated Climate',
        content: `The coastal Georgia climate is unusual in that cooling dominates the energy profile for most of the year — 8 to 9 months of air conditioning use compared to 2 to 3 months of meaningful heating. Smart thermostat selection should account for this balance, prioritizing features that optimize cooling performance and scheduling.

Ecobee thermostats include remote sensors — small wireless sensors you place in bedrooms or other rooms — that average temperatures across the home rather than just reading conditions at the thermostat location. This feature is particularly valuable in coastal Georgia ranch homes and two-story homes where the second floor temperature runs 5–10°F higher than the thermostat in a first-floor hallway. The Ecobee uses remote sensor data during "follow me" mode to prioritize comfort where people are.

Nest thermostats feature Auto-Schedule, which learns your preferred temperatures and programs itself over the first week of use. The Nest Sense features include Sunblock (which adjusts for direct sunlight on the thermostat), Home/Away Assist (which uses your phone's location to automatically adjust when you leave), and Seasonal Savings, which can marginally adjust setpoints to reduce energy consumption during periods when outdoor conditions are favorable. For homes with new high-efficiency systems, our [AC installation](/ac-installation) team configures the thermostat during equipment installation to ensure optimal operation from day one.`,
      },
    ],
    bertTable: {
      headers: ['Thermostat Type', 'Installed Cost', 'Best For', 'Smart Features'],
      rows: [
        ['Standard programmable', '$100–$175', 'Simple setpoint control', 'Schedule only'],
        ['Nest Learning (4th gen)', '$250–$375', 'Most residential systems', 'Auto-learn, geofencing'],
        ['Ecobee SmartThermostat', '$275–$400', 'Multi-room comfort', 'Remote sensors, Alexa built-in'],
        ['Honeywell T10 Pro', '$200–$350', 'Multi-stage compatibility', 'Flex reminders, RedLINK'],
        ['Carrier/Trane Communicating', '$400–$700', 'Matching brand systems', 'Full modulation control'],
      ],
    },
    faqs: [
      {
        question: 'Will a smart thermostat work with my older AC system in Port Wentworth?',
        answer: 'Most smart thermostats are compatible with standard single-stage and two-stage systems. The primary compatibility question is the C-wire. We assess your existing wiring before recommending a specific thermostat and handle any C-wire solutions during installation.',
      },
      {
        question: 'How much can a smart thermostat save on my Georgia Power bill?',
        answer: 'Studies suggest 10–15% cooling cost reduction compared to manual thermostats. In a coastal Georgia home spending $200/month on cooling in peak summer, that\'s $20–$30/month in savings during cooling season. The smart features (geofencing, learning schedules) provide the biggest benefit when the home is unoccupied during the workday.',
      },
      {
        question: 'Can I install my own smart thermostat?',
        answer: 'Technically yes for simple single-stage systems with a C-wire. If your system is multi-stage, variable-speed, communicating, or if you don\'t have a C-wire, professional installation is strongly recommended. Wiring errors can damage your HVAC control board — a $300–$700 repair.',
      },
    ],
    internalLinks: { up: '/', across: ['/ac-installation', '/hvac-maintenance', '/ac-repair'] },
  },

  {
    slug: 'indoor-air-quality',
    name: 'Indoor Air Quality',
    metaDescription:
      'Indoor air quality solutions in Port Wentworth, Pooler & Savannah, GA. Air purifiers, UV lights, HEPA filtration, and humidity control. Call (912) 416-3449.',
    tldrBullets: [
      'Coastal Georgia\'s humidity, pollen, and mold load make indoor air quality a serious health concern',
      'We install UV-C germicidal lights, high-MERV filtration, whole-home dehumidifiers, and air purifiers',
      'Savannah ranks among the highest pollen count cities in the US — proper filtration makes a measurable difference',
      'Whole-home dehumidifiers are highly effective in Port Wentworth\'s humid climate',
      'HEPA filtration and UV treatment reduce bacteria, viruses, mold spores, and VOCs',
      'Call (912) 416-3449 for an indoor air quality consultation',
    ],
    heroHeading: 'Indoor Air Quality in Coastal Georgia Is About More Than Just Dust',
    sections: [
      {
        heading: 'Why Savannah\'s Climate Makes Indoor Air Quality a Year-Round Concern',
        content: `Port Wentworth and the greater Savannah area face a combination of indoor air quality challenges that coastal residents deal with year-round, not just during seasonal peaks. Savannah consistently appears in national rankings of highest pollen-producing cities, with oak, pine, and grass pollen creating significant allergen loads from late winter through early summer. The high summer humidity — routinely above 75% relative humidity outdoors, and often 60-65% indoors without active humidity control — creates ideal conditions for dust mite proliferation and mold growth on surfaces and within HVAC components. At [The HVAC Shop LLC](/), addressing these conditions requires a layered approach rather than a single product.

The HVAC system is both the primary distribution pathway for air quality problems and the primary solution point. Every cubic foot of air in your home passes through the HVAC system multiple times per day when the system is running. A properly equipped air handler with high-efficiency filtration and germicidal treatment addresses particles, biological contaminants, and some chemical pollutants at the source before they reach living spaces.

Coastal Georgia also brings VOC exposure concerns that aren't as prominent in other regions. The salt air, combined with off-gassing from marine-grade building materials common in coastal construction, can introduce chemical compounds that standard HVAC filtration doesn't address. Active carbon filtration and whole-home air purification systems handle VOCs where particle filtration can't. Pair IAQ improvements with our [duct cleaning](/duct-cleaning) service if you haven't had the ductwork cleaned recently.`,
      },
      {
        heading: 'UV-C Germicidal Lights: What They Do and Where They Work',
        content: `Ultraviolet germicidal irradiation (UVGI) using UV-C wavelength light (254nm) is a proven technology for killing bacteria, viruses, mold, and yeast on surfaces and in the air stream. In a coastal Georgia HVAC context, the most impactful application is UV-C lights installed in the air handler coil cavity — specifically aimed at the evaporator coil and drain pan, where mold growth is most common.

The evaporator coil in a Port Wentworth or Savannah home accumulates mold and biofilm continuously during cooling season. The combination of cold metal surfaces, organic material from the airstream, and moisture creates an ideal mold habitat. A single 24-watt UV-C bulb positioned to irradiate the coil surface continuously kills this mold growth and prevents its reestablishment, eliminating the musty odor that many homeowners attribute to dirty ductwork when it's actually coil contamination.

Air-treatment UV systems (as opposed to surface-treatment systems) expose the air stream to UV-C as it passes through the air handler. These systems have a shorter contact time with the air, which limits their effectiveness against the most resistant organisms, but they provide meaningful reduction of airborne bacteria and virus concentrations. They work best as part of a layered IAQ strategy that also includes high-MERV filtration. Installation typically takes 1–2 hours and requires no ductwork modification.`,
      },
      {
        heading: 'Whole-Home Dehumidification for Port Wentworth\'s Summer Humidity',
        content: `Your air conditioner dehumidifies as a byproduct of cooling — as the refrigerant circuit removes heat, moisture condenses on the evaporator coil and drains out. But in coastal Georgia's peak summer conditions, the standard AC system often can't maintain indoor humidity below 55–60% relative humidity without also overcooling the space. The result is occupants who set the thermostat to 70°F trying to control humidity when the actual problem is latent capacity, not sensible cooling.

A dedicated whole-home dehumidifier installed in the HVAC system handles the moisture load independently of the cooling demand. Unlike portable dehumidifiers that address a single room, a whole-home unit installed in the air handler treats the entire conditioned space and drains automatically — no emptying buckets. For a 2,000 sq ft Port Wentworth home, a 70–90 pint/day whole-home dehumidifier typically maintains indoor relative humidity at 50–55% even during July and August peak conditions.

The energy trade-off is favorable: running a dedicated dehumidifier allows you to set the cooling thermostat 2–3°F higher (75°F instead of 72°F) while maintaining the same comfort level, since perceived comfort correlates with the humidity-corrected apparent temperature rather than just the dry-bulb temperature. The AC runs fewer hours, and total energy cost including the dehumidifier is often lower than running the AC at a lower setpoint. Explore our [AC installation](/ac-installation) options for new systems that incorporate variable-speed technology with enhanced dehumidification modes.`,
      },
    ],
    bertTable: {
      headers: ['IAQ Product', 'Installed Cost', 'What It Addresses', 'Maintenance'],
      rows: [
        ['UV-C coil treatment light', '$350–$600', 'Mold on evaporator coil, musty odor', 'Annual bulb replacement'],
        ['UV-C air treatment system', '$500–$900', 'Airborne bacteria, viruses, mold', 'Annual bulb replacement'],
        ['Whole-home HEPA filter housing', '$400–$800', 'Particles 0.3+ microns, allergens', 'Filter q4–6 months'],
        ['MERV 13 media filter upgrade', '$200–$400', 'Dust, pollen, smoke, fine particles', 'Filter q3 months'],
        ['Whole-home dehumidifier', '$1,200–$2,200', 'Humidity control, mold prevention', 'Annual service'],
        ['Electronic air cleaner', '$600–$1,200', 'Sub-micron particles, VOCs', 'Monthly cell cleaning'],
      ],
    },
    faqs: [
      {
        question: 'My home in Port Wentworth always feels humid even with the AC running. What can I do?',
        answer: 'This is very common in coastal Georgia. First check: is your thermostat set to "auto" fan mode (not "on")? Continuous fan recirculates moisture back into the space. Second: what is your actual indoor RH? If it\'s above 60% at a comfortable temperature, your system has insufficient latent capacity and a whole-home dehumidifier is the correct solution.',
      },
      {
        question: 'What MERV rating filter should I use in Savannah, GA?',
        answer: 'MERV 11–13 provides the best balance of particle capture and airflow for most coastal Georgia homes. Standard MERV 8 fiberglass filters let pollen and fine particles pass. MERV 14+ filters can restrict airflow enough to stress your blower motor if your system wasn\'t designed for that resistance — we verify your system\'s capability before recommending filter upgrades.',
      },
      {
        question: 'Do UV lights in HVAC systems actually work, or is that a gimmick?',
        answer: 'UV-C lights for coil sterilization (surface treatment) are well-supported by scientific literature and have been used in hospitals and commercial buildings for decades. The specific application to residential HVAC coil surfaces is effective for mold prevention and odor control. Air-stream UV systems (passing air exposure) are less conclusive in terms of residential efficacy but provide some benefit as part of a layered IAQ approach.',
      },
    ],
    internalLinks: { up: '/', across: ['/duct-cleaning', '/hvac-maintenance', '/ac-installation'] },
  },

  {
    slug: 'heat-pump-service',
    name: 'Heat Pump Service',
    metaDescription:
      'Heat pump repair, maintenance & installation in Port Wentworth, Pooler & Savannah, GA. All brands and types. Call (912) 416-3449.',
    tldrBullets: [
      'Heat pumps are the most common HVAC system type in coastal Georgia due to mild winters',
      'The HVAC Shop LLC repairs, maintains, and installs heat pump systems of all types and brands',
      'Heat pump-specific issues include reversing valve sticking, defrost problems, and refrigerant charge',
      'Modern inverter heat pumps maintain heating capacity down to 5°F — well below coastal Georgia\'s coldest days',
      'Heat pump efficiency (COP) far exceeds electric resistance heat — the right choice for this climate',
      'Call (912) 416-3449 for heat pump service in Chatham and Effingham counties',
    ],
    heroHeading: 'Heat Pumps Dominate Coastal Georgia\'s HVAC Market for Good Reason',
    sections: [
      {
        heading: 'How Heat Pumps Work — and Why They\'re Ideal for Port Wentworth\'s Climate',
        content: `A heat pump is an air conditioner that can run backwards. In cooling mode, it operates identically to a standard AC system — extracting heat from indoor air and rejecting it outside. In heating mode, it reverses the refrigerant flow, extracting heat from outdoor air (even cold outdoor air contains useful heat energy) and delivering it inside. The efficiency advantage over electric resistance heating is substantial: a heat pump can deliver 2–3 BTUs of heat for every 1 BTU of electricity consumed, compared to exactly 1 BTU of heat per BTU of electricity from a strip heater. At [The HVAC Shop LLC](/), heat pump service is one of our most common specialties given how prevalent these systems are across Chatham County.

Port Wentworth and the coastal Georgia area are climatically ideal for heat pump operation. Winter temperatures rarely fall below 20°F, and the few times they do, it's for short periods — ideal for standard heat pumps with electric backup strips that engage at outdoor temperatures below 35–40°F. Newer cold-climate heat pumps with inverter-driven compressors maintain their efficiency advantage down to 5°F, virtually eliminating the need for backup heat in our region.

The primary maintenance distinctions for heat pumps compared to straight-cool systems involve the refrigerant reversing valve (a heat pump-specific component that enables mode switching), the defrost system (which periodically reverses the cycle briefly to melt ice off the outdoor coil during cold weather), and the need to service both the cooling and heating operation annually. Our spring and fall [HVAC maintenance](/hvac-maintenance) service covers both modes.`,
      },
      {
        heading: 'Common Heat Pump Problems We Diagnose in Savannah\'s Climate',
        content: `Heat pump diagnostic calls in coastal Georgia follow some specific patterns based on the local climate. Reversing valve failures — where the valve sticks in cooling mode or fails to fully transition — are relatively common in older systems, particularly units that have seen corrosion on the valve's coil or solenoid. A heat pump stuck in cooling mode runs the compressor trying to cool the space while the outdoor coil ices over in cold weather — a confusing symptom that sometimes gets misdiagnosed as a refrigerant issue.

Defrost system issues are more frequent than in colder climates, counterintuitively. In coastal Georgia's high-humidity winter conditions, outdoor coil frost forms even at temperatures above 32°F because the coil surface temperature is well below dewpoint. Systems that frost heavily and have a defrost board or sensor issue run with a frosted coil, reducing heating efficiency significantly. We carry common defrost board replacements for major manufacturers.

Refrigerant charge issues affect heat pumps more noticeably on the heating side than on the cooling side. A heat pump running 10% undercharged may cool adequately but will lose significant heating capacity at outdoor temperatures below 45°F — the very conditions when you need maximum heating output. Spring service typically focuses on cooling performance; fall service should verify refrigerant charge specifically for heating operation. See also our [heating repair](/heating-repair) page for gas furnace and other heating system issues.`,
      },
    ],
    bertTable: {
      headers: ['Heat Pump Service', 'Cost Range', 'System Age Applicability', 'Notes'],
      rows: [
        ['Reversing valve replacement', '$400–$900', 'All ages', 'Heat pump specific repair'],
        ['Defrost board replacement', '$250–$500', 'All ages', 'Prevents ice buildup'],
        ['Refrigerant charge (R-410A)', '$200–$450', 'Post-2010 systems', 'Includes leak check'],
        ['Annual heat pump tune-up', '$120–$200', 'All', 'Both heating and cooling modes'],
        ['Full heat pump system replacement', '$5,500–$11,000', '15+ yr old systems', 'Includes air handler'],
        ['Cold climate heat pump upgrade', '$7,000–$13,000', 'Any system', 'Efficiency upgrade'],
      ],
    },
    faqs: [
      {
        question: 'Why is my heat pump blowing cool air when it\'s in heating mode?',
        answer: 'First check: is it in defrost cycle? During defrost (typically 2–10 minutes), the system temporarily runs in cooling mode to melt the outdoor coil ice — this is normal and the airflow will feel cool briefly. If the system is stuck in cooling mode outside of defrost, the reversing valve may be faulty. If the air is warm but not warm enough, check refrigerant charge and outdoor temperature against the system\'s rated heating capacity.',
      },
      {
        question: 'How cold does it need to get before my heat pump stops working in Port Wentworth?',
        answer: 'Standard heat pumps lose efficiency significantly below 35°F and typically have backup electric strips for temperatures below that threshold. Modern inverter-driven cold climate heat pumps maintain efficiency down to 5°F. In coastal Georgia, where temperatures below 30°F are rare, a standard heat pump with electric backup provides reliable heating.',
      },
      {
        question: 'Should I replace my heat pump with a gas furnace system?',
        answer: 'In most of coastal Georgia, the answer is no. Heat pumps are more energy-efficient than gas heat for most of the heating season here, and provide both heating and cooling in one system. If your gas rates are very low and electricity rates are high, or if you prefer the feel of high-temperature furnace heat, a gas furnace paired with a cooling-only AC could be a reasonable choice — but we\'d recommend running the math on your specific utility rates.',
      },
    ],
    internalLinks: { up: '/', across: ['/heating-repair', '/ac-installation', '/hvac-maintenance'] },
  },

  {
    slug: 'mini-split-installation',
    name: 'Mini Split Installation',
    metaDescription:
      'Ductless mini split installation in Port Wentworth, Pooler & Savannah, GA. Zone cooling, sunrooms, additions, and homes without ductwork. Call (912) 416-3449.',
    tldrBullets: [
      'Mini split (ductless) systems are ideal for sunrooms, additions, garages, and homes without ductwork',
      'Modern inverter mini splits achieve 25+ SEER2 — significantly more efficient than central AC',
      'The HVAC Shop LLC installs single-zone and multi-zone mini split systems from Mitsubishi, Daikin, LG, and others',
      'Mini splits avoid duct losses — 20–30% efficiency improvement over ducted systems in leaky homes',
      'Port Wentworth\'s older homes and commercial buildings are excellent candidates for ductless retrofits',
      'Call (912) 416-3449 for a free mini split estimate',
    ],
    heroHeading: 'Ductless Mini Splits Solve HVAC Problems That Central Systems Can\'t',
    sections: [
      {
        heading: 'When Ductless Makes More Sense Than Extending the Central System',
        content: `Central air conditioning is the right solution for most new construction and full-home replacement projects in Port Wentworth and Chatham County. But there are numerous situations where extending a central system is impractical or expensive, and a ductless mini split system is clearly the better solution. At [The HVAC Shop LLC](/), we install mini splits for sunrooms, garage conversions, home additions, older homes without existing ductwork, and second-floor spaces that the central system can't adequately cool. Our [AC installation](/ac-installation) team can advise on which approach fits your situation.

Sunrooms and screen enclosures are among the most common mini split applications we encounter in coastal Georgia. A three-season room that becomes unusable in July because it's not connected to the central HVAC system can be transformed into comfortable year-round living space with a single-zone ductless system. The installation footprint is minimal — one indoor head unit mounted high on a wall, a small refrigerant line set routed through the wall to a compact outdoor unit, and a 240V circuit. Most single-zone sunroom installations take 4–6 hours.

For older Savannah homes — particularly those in the historic district and established neighborhoods like West Savannah and Henderson — that lack ductwork or have duct systems that can't practically be extended, multi-zone mini splits provide whole-house cooling without the disruption of major ductwork installation. A four-zone mini split system can condition four rooms or zones independently from a single outdoor unit.`,
      },
      {
        heading: 'Mini Split Efficiency and Why It Outperforms Central AC in Specific Applications',
        content: `The efficiency numbers for inverter-driven mini split systems are genuinely impressive. Premium systems from Mitsubishi, Daikin, and LG achieve SEER2 ratings of 20–28+, compared to 15–20 SEER2 for high-end central systems. The reason is the variable-speed inverter compressor — rather than cycling on and off at full capacity, the mini split compressor modulates speed continuously to match the exact cooling or heating demand, eliminating the energy waste of the on/off cycle.

For applications where a mini split is replacing a window unit or supplementing an inadequate central system, the operational cost difference is measurable. A 12,000 BTU (1-ton) window AC unit typically operates at 9–10 EER. A comparable 12,000 BTU mini split with a SEER2 rating of 24 uses roughly 40% less electricity for the same cooling output. In a Port Wentworth sunroom that runs 6–8 months per year, that efficiency difference translates to $150–$300 in annual electricity savings.

The duct-loss comparison is the other efficiency advantage for applications where the alternative is extending ductwork into an unconditioned attic. Supply duct runs through an attic that reaches 140°F in July lose 10–15% of their cooling capacity to heat gain through the duct walls, even with R-8 insulation. A mini split delivers conditioned air directly into the space at 100% efficiency from the indoor head unit — no duct losses. For existing homes with leaky ductwork, see our [duct fabrication](/duct-fabrication) page for a comparison of repairing vs. going ductless.`,
      },
    ],
    bertTable: {
      headers: ['System Type', 'Installed Cost', 'SEER2 Range', 'Best Application'],
      rows: [
        ['Single-zone 9,000 BTU', '$2,200–$3,500', '20–25 SEER2', 'Sunroom, bedroom, office'],
        ['Single-zone 12,000 BTU', '$2,500–$4,000', '20–28 SEER2', 'Medium room, small apartment'],
        ['Single-zone 18,000 BTU', '$3,000–$5,000', '18–24 SEER2', 'Garage, large room'],
        ['Multi-zone 2-room', '$4,500–$7,500', '18–22 SEER2', 'Small addition, two rooms'],
        ['Multi-zone 4-room', '$7,000–$13,000', '18–22 SEER2', 'Whole-home ductless'],
        ['Cassette style (ceiling mount)', '$3,500–$6,000', '18–22 SEER2', 'Commercial, open floor plan'],
      ],
    },
    faqs: [
      {
        question: 'Can a mini split heat my home in Port Wentworth during winter?',
        answer: 'Yes. All mini split systems are heat pumps — they provide both cooling and heating. Modern cold-climate mini splits (Mitsubishi Hyper-Heat, Daikin Aurora) maintain heating output down to -13°F, far below anything Port Wentworth will experience. In coastal Georgia\'s mild winters, a mini split is an excellent sole heating and cooling source for a single zone.',
      },
      {
        question: 'How much does it cost to run a mini split in the Savannah area?',
        answer: 'A 12,000 BTU mini split at 24 SEER2 uses approximately 500 watts during cooling operation. At Georgia Power\'s residential rate, running 8 hours daily costs about $1.40/day or $42/month during peak cooling season — significantly less than a window unit of similar capacity.',
      },
      {
        question: 'Can one outdoor mini split unit run multiple rooms?',
        answer: 'Yes — multi-zone systems connect one outdoor unit to 2–5 indoor head units in different rooms. Each indoor unit operates independently with its own remote or smart thermostat. The outdoor unit modulates total capacity based on combined zone demand.',
      },
    ],
    internalLinks: { up: '/', across: ['/ac-installation', '/duct-fabrication', '/heat-pump-service'] },
  },

  {
    slug: 'hvac-financing',
    name: 'HVAC Financing',
    metaDescription:
      'HVAC financing options in Port Wentworth, Pooler & Savannah, GA. 0% interest plans and monthly payment options for new systems and major repairs. Call (912) 416-3449.',
    tldrBullets: [
      'The HVAC Shop LLC offers financing for new system installations and major repairs in Chatham County',
      '0% interest promotional periods and extended payment plans available through financing partners',
      'Don\'t let a failed AC system go unrepaired in Savannah\'s heat due to upfront cost concerns',
      'Financing approvals often same-day — we can schedule installation or repair promptly after approval',
      'Ask about federal tax credits for qualifying high-efficiency systems that offset financing costs',
      'Call (912) 416-3449 to discuss financing options before your scheduled estimate',
    ],
    heroHeading: 'A Failed HVAC System Shouldn\'t Become a Financial Crisis',
    sections: [
      {
        heading: 'HVAC Financing Options Available to Port Wentworth and Chatham County Homeowners',
        content: `A new central air conditioning system in Port Wentworth costs $5,000–$13,000 installed, depending on system size, efficiency level, and whether ductwork modifications are needed. An emergency compressor replacement might run $1,500–$2,500. For most families, these aren't expenses that can be absorbed from a checking account without planning. At [The HVAC Shop LLC](/), we believe that access to quality HVAC service shouldn't be limited by the timing of when your system decides to fail, which is why we work with financing partners to offer payment options for qualifying customers.

Our financing partners offer several structures depending on your needs and creditworthiness. Promotional 0% interest periods — typically 6, 12, or 18 months — allow you to pay off the installation cost without interest if the balance is cleared within the promotional window. This works well for planned replacements where you have time to budget and pay down the balance before interest accrues. Extended repayment plans with fixed monthly payments spread the cost over 24–60 months for customers who need lower monthly payments, though interest rates apply on these extended-term products.

The application process typically takes 5–10 minutes and decisions are often same-day. We can proceed with scheduling your [AC installation](/ac-installation) or major repair as soon as financing is approved. There's no obligation to proceed with financing — we'll present the options and you decide what works for your situation.`,
      },
      {
        heading: 'Federal Tax Credits That Reduce the Net Cost of a New HVAC System',
        content: `The Inflation Reduction Act of 2022 extended and expanded federal tax credits for qualifying energy-efficient HVAC equipment. As of 2024–2025, these credits represent real money that reduces the net cost of an efficiency upgrade and should be factored into your financing calculations.

The Energy Efficient Home Improvement Credit (25C) provides 30% of equipment and installation costs (up to $600 for central AC and furnaces, up to $2,000 for qualifying heat pump systems). For a $7,000 heat pump installation, the $2,000 credit reduces your net cost to $5,000 — a meaningful reduction that affects which financing option makes the most financial sense.

Equipment must meet minimum efficiency thresholds to qualify: for heat pumps, the system must be ENERGY STAR Most Efficient certified; for central AC, it must meet specific SEER2/EER2 thresholds by climate zone. We can confirm which systems we install qualify for the credits and provide the documentation you need for your tax filing. This credit is not available for rental properties and requires you to have a tax liability to apply it against. Consult your tax advisor for specifics applicable to your situation.`,
      },
      {
        heading: 'Making the Repair vs. Replace Decision When Financing Is Part of the Equation',
        content: `When a system fails and financing is under consideration, the repair-versus-replace calculation takes on additional complexity. A $1,200 compressor repair on a 13-year-old system might seem financially attractive compared to financing $8,000 for a replacement — until you factor in that the repaired system is still 13 years old, still running on R-22 refrigerant, still operating at 10 SEER, and potentially facing another $1,000+ repair in 18 months.

Our [AC repair](/ac-repair) and [HVAC inspection](/hvac-inspection) teams can help you make this analysis with specific data about your system's current condition. We'll give you an honest assessment of the remaining system components' expected life, a realistic repair cost estimate, and the projected operating cost savings of a more efficient replacement. Sometimes the right answer is a targeted repair; sometimes the total cost of ownership analysis clearly points to replacement.

For situations where the replacement cost is substantial but the system is clearly at end of life, financing makes the math straightforward: the monthly financing payment is often offset partially by reduced electricity costs from the new system's higher efficiency. A household replacing a 10-SEER system with a 17-SEER system might save $50–$80/month on electricity, which offsets a portion of the financing payment.`,
      },
    ],
    bertTable: {
      headers: ['Financing Option', 'Term', 'APR', 'Best For'],
      rows: [
        ['0% promotional (6-month)', '6 months', '0% if paid in full', 'Minor repairs, planned installs'],
        ['0% promotional (12-month)', '12 months', '0% if paid in full', 'Most system replacements'],
        ['0% promotional (18-month)', '18 months', '0% if paid in full', 'Higher-cost installations'],
        ['Extended term (60-month)', '60 months', 'Competitive fixed rate', 'Maximum cash flow relief'],
        ['Federal tax credit 25C', 'One-time', 'N/A', '30% up to $600–$2,000'],
      ],
    },
    faqs: [
      {
        question: 'What credit score do I need to qualify for HVAC financing?',
        answer: 'Our financing partners offer products across a range of credit profiles. Generally, 640+ scores qualify for promotional rate products. Below 640, standard-rate extended term products may still be available. We don\'t know your specific situation until you apply — the application is quick and doesn\'t affect your credit score initially.',
      },
      {
        question: 'Can I finance an emergency repair, not just a new system installation?',
        answer: 'Yes. Financing minimums vary by product but typically start at $500–$1,000. Emergency repairs meeting that threshold — compressor replacement, major refrigerant system repairs, blower motor replacement — can often be financed.',
      },
      {
        question: 'Is there a prepayment penalty if I pay off my HVAC financing early?',
        answer: 'Our financing partner products do not carry prepayment penalties. You can pay off the balance early on any plan without additional fees, which is particularly valuable on promotional rate products where you want to avoid any accrued interest.',
      },
    ],
    internalLinks: { up: '/', across: ['/ac-installation', '/furnace-installation', '/heat-pump-service'] },
  },
];
