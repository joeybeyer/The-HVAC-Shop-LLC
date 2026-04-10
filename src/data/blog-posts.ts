export interface BlogPost {
  slug: string;
  title: string;
  metaDescription: string;
  datePublished: string;
  tldrBullets: string[];
  sections: { heading: string; content: string }[];
  internalLinks: { up: string; across: string[] };
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'how-often-should-you-service-your-ac-in-savannah-ga',
    title: 'How Often Should You Service Your AC in Savannah, GA?',
    metaDescription:
      'How often to service your AC in Savannah\'s coastal climate. Annual maintenance recommendations, what\'s included, and why coastal Georgia requires more attention than inland areas.',
    datePublished: '2025-03-15',
    tldrBullets: [
      'Service your AC at least once per year — twice is better in coastal Georgia\'s salt air environment',
      'Spring tune-ups (March–April) are most impactful before the heavy cooling season begins',
      'Skipping annual service is the leading cause of preventable AC failures in the Savannah area',
      'David Johnson (30 years of local HVAC experience) recommends pre-season service every year without exception',
    ],
    sections: [
      {
        heading: 'Why Annual Service Matters More in Savannah Than Inland Georgia',
        content: `The frequency question for AC maintenance is often answered with a generic "once a year" recommendation that applies equally everywhere. But if you live in Savannah, Port Wentworth, or anywhere in coastal Georgia's Chatham County, the honest answer is: at least once per year, and ideally twice — once in spring before heavy cooling season and once in fall before heating season. The reason isn't a service company's desire for more business; it's the specific environmental conditions that accelerate HVAC wear in this region.

The combination of salt air (carried inland from the Atlantic and the Savannah River), 75%+ average summer humidity, and annual operating hours that far exceed national averages creates wear rates on HVAC components that are genuinely higher than in inland Georgia cities like Atlanta or Macon. Condenser coil fins exposed to salt air and humidity develop a corrosive coating within a single season that measurably reduces heat transfer efficiency. Capacitors cycle through more charge-discharge cycles per year because the system runs more hours. Fan motors run hotter because the outdoor ambient temperature is higher for more of the year.

David Johnson, our lead technician with 30 years of HVAC experience in this specific region, puts it plainly: "In Atlanta, skipping one year of maintenance is a minor issue. In Savannah, it's the beginning of a failure chain." The salt air doesn't pause because you delayed your tune-up.

At [The HVAC Shop LLC](/), our [HVAC maintenance](/hvac-maintenance) service is specifically designed for coastal Georgia's demands — not a generic checklist, but targeted inspection of the components most at risk in this environment.`,
      },
      {
        heading: 'What Should Be Included in an Annual AC Service Visit',
        content: `Annual service visits vary enormously in what's actually included — and in whether the contractor has the equipment and expertise to do the job properly. A complete spring AC tune-up in the coastal Georgia context should cover all of the following.

**Condenser coil cleaning**: With a no-rinse chemical cleaner and water rinse, not just compressed air blowing debris off the outside surface. This is the highest-impact item in coastal Georgia.

**Capacitor testing**: With a capacitor meter that measures actual microfarad rating against specification. Visual inspection of capacitors is meaningless — a capacitor can look perfect and measure 20% below spec, which means it's approaching failure. Replace proactively if it's below 10% of spec.

**Refrigerant pressure check**: Static pressure measurement tells you almost nothing; superheat and subcooling measurements tell you whether the system is properly charged for current operating conditions.

**Contactor inspection**: Check for pitting and burning of contact surfaces, which indicates arcing from the high-voltage switching cycles and is more common in salt air environments.

**Evaporator drain line clearing**: Flush with water or compressed air, add a treatment tablet. A clogged drain causes water damage and can trigger the system safety shutoff.

**Blower motor amperage check**: High amperage draw indicates a bearing wearing out — catch it in service, not in an after-hours failure.

**Filter status**: Check and advise on filter condition and replacement schedule based on the actual filter in use.

If your service provider doesn't cover all of these items, ask why not. A 20-minute "inspection" that doesn't include refrigerant measurement and capacitor testing isn't worth the service call fee.`,
      },
      {
        heading: 'Signs You\'ve Waited Too Long Between Service Visits',
        content: `If your Savannah-area AC hasn't been serviced in 2+ years, there are likely detectable signs already. The system may take longer to cool the house than it used to — a sign of reduced efficiency from dirty coils or low refrigerant. Your electricity bills may have crept up over the same period without a corresponding increase in usage patterns — a 15% efficiency decline from a dirty condenser adds $150–$300 per year at coastal Georgia operating volumes. You may notice a musty smell when the system first starts — a sign of mold growth on the evaporator coil that annual cleaning prevents.

The worst outcome is an emergency failure in July or August. Capacitors that were measured at 85% of spec in the spring of one year and not checked again reach failure by the following summer. Contactors that showed early pitting become a no-start situation when the contacts finally burn through. These components have predictable end-of-life indicators that routine maintenance catches; without maintenance, they fail at random and usually at the worst time.

Schedule your service now at (912) 416-3449. Spring appointments fill quickly in the Savannah area — call early for the best scheduling flexibility.`,
      },
    ],
    internalLinks: { up: '/blog', across: ['/hvac-maintenance', '/savannah', '/ac-repair'] },
  },

  {
    slug: 'signs-your-hvac-system-needs-replacement-coastal-georgia',
    title: 'Signs Your HVAC System Needs Replacement in Coastal Georgia',
    metaDescription:
      'How to tell when your HVAC system needs replacement in coastal Georgia. Age, salt air damage, R-22 refrigerant, and efficiency indicators explained.',
    datePublished: '2025-04-10',
    tldrBullets: [
      'HVAC systems in coastal Georgia often fail earlier than inland counterparts due to salt air and operating hours',
      'Age over 15 years, R-22 refrigerant, and rising repair costs are the strongest replacement indicators',
      'A cracked heat exchanger is an immediate replacement trigger — safety issue, not optional',
      'Modern 16–20 SEER2 systems typically save $300–$600/year in electricity over aging 10-SEER equipment',
    ],
    sections: [
      {
        heading: 'The Coastal Georgia Aging Curve for HVAC Equipment',
        content: `The rule of thumb for HVAC system life — 15 to 20 years — was developed for average national climate conditions. In coastal Georgia, the actual service life frequently falls shorter, particularly for systems that haven't received consistent annual maintenance. The combination of high operating hours (2,000+ per year versus 500–1,000 in colder northern climates), salt air corrosion on outdoor components, and the thermal cycling stress of extreme summer temperatures compresses the aging curve.

Port Wentworth and Savannah homeowners with systems installed in the late 1990s through the early 2000s should be thinking carefully about the end-of-life window. A well-maintained 2003 system in good condition might have 3–5 more years. A poorly maintained 2003 system with visible coil corrosion, high compressor amperage draw, and a history of refrigerant additions is on borrowed time.

The [HVAC inspection](/hvac-inspection) service from The HVAC Shop LLC provides the specific measurements — compressor amperage, refrigerant charge, capacitor health, coil condition — that tell you objectively where your system stands rather than relying on guesswork or contractor opinions unbackd by data.`,
      },
      {
        heading: 'R-22 Refrigerant: Why It Changes the Repair-vs-Replace Math',
        content: `If your air conditioner was installed before 2010, there's a significant probability it uses R-22 refrigerant (Freon), which was phased out of production under EPA regulations and is no longer manufactured as of 2020. The existing supply of R-22 is depleted and prices reflect that scarcity: $80–$140 per pound versus $20–$50 per pound for R-410A used in modern systems.

This price difference fundamentally changes the economics of a refrigerant leak repair on an older system. A system that needs 3–4 pounds of R-22 to correct a leak costs $240–$560 just for the refrigerant, before labor and leak repair. If the leak recurs — which it often does once corrosion has started — the cost repeats. The total spend on refrigerant over 2–3 leak events on an R-22 system often exceeds what a down payment on a new R-410A system would cost.

There's also an environmental consideration: R-22 is a powerful greenhouse gas. EPA rules require licensed technicians to recover refrigerants properly, but the shrinking supply of R-22 and the systemic nature of old-system leaks make the whole situation progressively less tenable. If your system is R-22 and it has a leak, the honest recommendation is almost always [AC installation](/ac-installation) of a new system rather than continued refrigerant additions.`,
      },
      {
        heading: 'When Rising Energy Bills Tell the Story Before the System Fails',
        content: `Air conditioning systems don't fail abruptly in most cases — they degrade gradually, and one of the early indicators is electricity consumption. A system that's operating with a dirty condenser coil, slightly low refrigerant charge, and a capacitor measuring below spec uses 15–25% more electricity producing the same cooling output as a well-maintained unit.

For a coastal Georgia homeowner running a 3-ton system 2,000+ hours per year, a 20% efficiency decline translates to $300–$500 in additional annual electricity cost. Over 5 years, that's $1,500–$2,500 in extra electricity payments before the system fails entirely. Compare that against the total cost of a new 16–18 SEER2 system, add in the efficiency gain (roughly 40–50% less electricity than a 10-SEER system), and the replacement math often looks better than the "keep repairing" approach.

If you've noticed your summer electricity bills creeping up year over year without a clear cause, schedule a system assessment. We can measure the system's actual operating efficiency and compare it to specification, giving you real data on whether the system's degradation is affecting your bills.

For new system options and pricing, see our [AC installation](/ac-installation) and [furnace installation](/furnace-installation) pages.`,
      },
    ],
    internalLinks: { up: '/blog', across: ['/ac-installation', '/furnace-installation', '/hvac-inspection'] },
  },

  {
    slug: 'best-hvac-system-for-humidity-port-wentworth',
    title: 'The Best HVAC System for Humidity in Port Wentworth, GA',
    metaDescription:
      'Which HVAC system best handles Port Wentworth\'s high humidity? Two-stage vs. variable-speed, whole-home dehumidifiers, and equipment that handles coastal Georgia\'s moisture load.',
    datePublished: '2025-05-01',
    tldrBullets: [
      'Standard single-stage AC systems often fail to adequately dehumidify coastal Georgia homes',
      'Variable-speed and two-stage systems run longer, lower-intensity cycles that remove more moisture',
      'Whole-home dehumidifiers are the most direct solution when the AC alone can\'t control humidity',
      'Port Wentworth\'s average summer humidity exceeds 75% — proper equipment selection is critical',
    ],
    sections: [
      {
        heading: 'Why Standard AC Systems Struggle with Port Wentworth\'s Humidity',
        content: `When most people think about air conditioning, they think about cooling — lowering the temperature in their home. But in Port Wentworth and coastal Georgia, the discomfort is often more about humidity than temperature. A home at 75°F and 70% relative humidity feels more uncomfortable than a home at 78°F and 50% relative humidity. The perceived temperature — the apparent temperature accounting for humidity — is what your body actually feels, and that number tracks humidity as much as it tracks the dry-bulb reading on your thermostat.

Standard single-stage air conditioners remove moisture as a byproduct of cooling — as refrigerant absorbs heat through the evaporator coil, water vapor condenses on the cold coil surface and drains away. The problem is that a single-stage system only removes moisture while it's actively running at full capacity, and in a well-insulated modern home, it often reaches the thermostat setpoint quickly and shuts off before completing a meaningful dehumidification cycle.

This "short-cycling" behavior is common in homes with newer, tighter construction — exactly the type prevalent in Godley Station, Pooler, and new Rincon subdivisions. The system cools the air fast, cycles off, and the humidity stays elevated. The homeowner turns the thermostat down trying to make it run longer (and feel cooler), which overcools the space and still doesn't solve the humidity problem. Proper equipment selection — as described in our [AC installation](/ac-installation) guide — prevents this scenario from the start.`,
      },
      {
        heading: 'Two-Stage and Variable-Speed Systems for Better Humidity Control',
        content: `The solution to the short-cycling humidity problem is equipment that can run at reduced capacity for longer periods. Two-stage compressors operate at full capacity when needed and at 60–70% capacity during mild weather — the lower stage runs longer cycles that have more time to extract moisture from the air. Variable-speed (inverter-driven) compressors modulate continuously from 30% to 100% capacity, providing even finer control.

In Port Wentworth's climate, where June-September weather is characterized by high ambient temperatures and extreme humidity, a variable-speed system running at 60% capacity continuously provides substantially better dehumidification than a single-stage system cycling on and off at 100%. The difference is measurable: a two-stage or variable-speed system in a comparable Port Wentworth home typically maintains indoor relative humidity 8–12 percentage points lower than a single-stage system at the same setpoint temperature.

The premium for two-stage or variable-speed equipment ranges from $1,500 to $3,500 above comparable single-stage systems. In coastal Georgia, where humidity discomfort is a genuine quality-of-life issue for most of the year, most homeowners who've made this upgrade don't regret it. Our [indoor air quality](/indoor-air-quality) team can also assess whether a supplemental whole-home dehumidifier makes sense alongside any system type.`,
      },
      {
        heading: 'When a Whole-Home Dehumidifier Is the Right Complement',
        content: `Even the best variable-speed air conditioner has limitations when the coastal Georgia humidity peaks in July and August. For homes where indoor humidity control is a priority — whether for comfort, for allergy management, or to protect wood floors and musical instruments from humidity damage — a dedicated whole-home dehumidifier is the most direct solution.

Unlike portable room dehumidifiers that address only a single space and require emptying regularly, a whole-home unit installed in the air handler dehumidifies the entire conditioned space and drains automatically. Systems sized for 70–90 pints per day of moisture removal (appropriate for most 1,500–3,000 sq ft coastal Georgia homes) maintain indoor RH at 50–55% even during peak summer conditions without requiring the AC to over-cool.

The energy trade-off is favorable: maintaining 53% RH allows you to set the thermostat at 76°F and feel as comfortable as you would at 72°F at 65% RH — meaning the AC runs fewer hours, the dehumidifier handles the moisture, and total energy use is often lower. For a Port Wentworth or Pooler family spending $250–$300/month on cooling in peak summer, the combined AC and dehumidifier system costs less to operate than the AC alone fighting the humidity battle.`,
      },
    ],
    internalLinks: { up: '/blog', across: ['/ac-installation', '/port-wentworth', '/indoor-air-quality'] },
  },

  {
    slug: 'how-much-does-ac-repair-cost-chatham-county',
    title: 'How Much Does AC Repair Cost in Chatham County, GA?',
    metaDescription:
      'AC repair cost guide for Chatham County, GA. Capacitor, refrigerant, compressor, and emergency repair prices. What to expect in Port Wentworth, Pooler, and Savannah.',
    datePublished: '2025-06-05',
    tldrBullets: [
      'Most common AC repairs in Chatham County range from $150 to $500',
      'Capacitor replacement is the most frequent repair — typically $150–$300',
      'Refrigerant service ranges $200–$450 and always includes a leak check',
      'Compressor replacement ($1,200–$2,200) often triggers a replacement discussion instead',
      'Emergency/after-hours service adds $75–$200 above standard rates',
    ],
    sections: [
      {
        heading: 'The Most Common AC Repairs in Chatham County and What They Cost',
        content: `Chatham County homeowners call for AC repairs across a wide range of issues, but the most common — and the ones that dominate summer emergency call lists — follow a predictable pattern. Here's what the most frequent repairs typically cost in the Port Wentworth, Pooler, and Savannah market as of 2025.

**Capacitor replacement** is by far the most common repair call, particularly during peak summer heat. Capacitors degrade with heat cycles and are specifically vulnerable in coastal Georgia's outdoor conditions. A failed run capacitor — the component that starts the compressor and keeps it running efficiently — typically costs $150–$300 to replace, including parts and labor. The relatively low cost is offset by the high frequency; we replace dozens of capacitors every July.

**Contactor replacement** is the other common electrical failure. The contactor is the high-voltage relay that closes when the thermostat calls for cooling. Salt air accelerates contact pitting, leading to arcing and eventual failure. Replacement runs $175–$325.

**Refrigerant service** — recharge plus leak detection — is $200–$450 for most residential systems using R-410A. This price includes the labor to locate and repair the leak, not just adding refrigerant (adding without fixing the leak just delays the return call). R-22 systems cost more: $80–$140 per pound versus $20–$50 for R-410A.

**Fan motor replacement** covers both the outdoor condenser fan motor and the indoor blower motor. Condenser fan motor replacement runs $300–$550 for most residential equipment; blower motor replacement is $350–$650.

For detailed pricing by repair type, see our [AC repair](/ac-repair) page pricing table.`,
      },
      {
        heading: 'What Affects AC Repair Pricing in the Savannah Area',
        content: `Several factors move repair costs above or below the ranges listed. Equipment brand and model affects parts cost — proprietary components for communicating systems (Carrier Infinity, Trane ComfortLink) cost more than standard parts for basic single-stage equipment. Age-related parts availability affects pricing on systems using discontinued components. And of course, labor complexity factors in: a straightforward capacitor replacement takes 45 minutes; a compressor replacement that requires full refrigerant recovery, component replacement, evacuation, and recharge takes 4–6 hours.

Geographic factors also apply within Chatham County. Homes near the Savannah River and coastal areas experience faster salt air-related component wear, which makes certain repairs (contactor replacement, refrigerant service for salt-corroded copper lines) more frequent than in inland Rincon or Bloomingdale. The statistical frequency of specific repairs in the coastal zone is noticeably higher than for comparable-age equipment in the Pooler/I-16 corridor or Effingham County.

Emergency and after-hours pricing adds $75–$200 to the base repair cost. We disclose emergency fees upfront before dispatching — see our [emergency HVAC service](/emergency-hvac-service) page for the current rate structure.`,
      },
      {
        heading: 'When Repair Cost Means It\'s Time to Consider Replacement',
        content: `The repair-versus-replace decision comes up most often when the repair estimate is significant. A rule of thumb: if the repair cost exceeds 30% of the replacement cost of the system (new system installed runs $5,500–$9,500 for most residential applications in Chatham County), and the system is more than 10 years old, replacement deserves serious consideration.

The math is straightforward: a $2,000 compressor replacement on a 14-year-old system leaves you with a 14-year-old system that still has an aging condenser coil, aging capacitors, aging contactor, and $2,000 less in your bank account. A new system has a full warranty, lower operating costs, and starts its clock over.

[HVAC financing](/hvac-financing) makes the replacement math more accessible — monthly payments on a new system often compare favorably with the unpredictability of continuing to repair an aging one.`,
      },
    ],
    internalLinks: { up: '/blog', across: ['/ac-repair', '/hvac-financing', '/hvac-inspection'] },
  },

  {
    slug: 'emergency-hvac-what-to-do-when-ac-fails-at-night',
    title: 'Emergency HVAC: What to Do When Your AC Fails at Night in Savannah',
    metaDescription:
      'AC failed at night in Savannah or Port Wentworth? Step-by-step guide for what to do while waiting for emergency HVAC service. Call (912) 416-3449.',
    datePublished: '2025-07-01',
    tldrBullets: [
      'An AC failure on a hot Savannah night can become dangerous — know what to do immediately',
      'Check breakers and thermostat settings before calling for emergency service',
      'Heat index above 100°F is dangerous for elderly, infants, and pets within a few hours',
      'The HVAC Shop LLC emergency line is (912) 416-3449 — live answer for after-hours calls',
    ],
    sections: [
      {
        heading: 'First Steps When Your AC Stops Working After Hours',
        content: `It's 11 PM in late July. The heat index today hit 108°F. Your air conditioner just stopped running, and the house is already climbing past 82°F. Before calling for emergency service, there are a few quick checks that resolve a meaningful percentage of after-hours calls without a technician visit — and if they don't fix the problem, they'll help the dispatcher prepare the right equipment for your situation.

**Check the circuit breakers first.** Go to your electrical panel and look for the breaker labeled "AC," "Air Handler," or "Condenser." If it's tripped (halfway between on and off), reset it by switching it fully off and then back on. If the system restarts and the breaker holds, you may be fine — monitor it for the next 30 minutes to confirm. If it trips again immediately, don't reset it again. A breaker that trips immediately on reset has a short or overcurrent condition that requires professional diagnosis.

**Check the thermostat.** Verify it's in "cool" mode (not "fan only" or "heat"), that the setpoint is below the current room temperature, and that the batteries aren't dead (a blank thermostat screen is often just dead batteries). If your smart thermostat shows fault codes, note them for the dispatcher.

**Check the air handler for a tripped overflow switch.** If the condensate drain is clogged, a safety float switch may have cut power to the system to prevent water damage. Look at the base of the air handler for water or a visible float switch. If the drain pan is full of water, the drain is clogged and the system is protecting itself — this is a fixable situation but requires clearing the drain and resetting the switch.

If none of these checks resolves the issue, call our [emergency HVAC service](/emergency-hvac-service) line at (912) 416-3449.`,
      },
      {
        heading: 'Managing Heat While Waiting for Emergency Service in Coastal Georgia',
        content: `Savannah's nighttime temperatures in July and August rarely drop below 75°F — there's no cool night air to let in. If you're waiting for an emergency HVAC technician on a hot coastal Georgia night, here's how to minimize heat-related risks.

**Close all blinds and curtains** on south and west windows. Even at night, insulating window coverings help retain whatever cooler air remains in the space.

**Shut interior doors to reduce the space being heated.** If you have one room with a working window unit, concentrate everyone there. If not, identify the coolest room (often a bathroom with small windows on the north side) and keep the family there.

**Use ceiling fans on the correct setting.** In summer mode, ceiling fan blades should push air downward — this creates a wind-chill effect that makes the same temperature feel 4–5°F cooler. This doesn't lower the room temperature but it can mean the difference between tolerable and dangerous conditions.

**Identify a cooling resource.** Know where your nearest 24-hour grocery store or gas station is — a short drive to an air-conditioned space can provide relief while you wait. Hotels in the area provide emergency overnight accommodation.

**Call 911 if anyone shows signs of heat illness.** Heat exhaustion symptoms (heavy sweating, pale skin, nausea, weakness) require medical attention. Heat stroke (stopped sweating, confusion, very high body temperature) is life-threatening — call 911 immediately and move the person to the coolest available space.

The elderly, infants, and pets are at highest risk and reach dangerous heat stress levels fastest. If vulnerable individuals are present, don't wait to seek relief — a cooling center, family member's home, or hotel is the right call.`,
      },
    ],
    internalLinks: { up: '/blog', across: ['/emergency-hvac-service', '/ac-repair'] },
  },

  {
    slug: 'duct-cleaning-vs-duct-replacement-pooler-ga',
    title: 'Duct Cleaning vs. Duct Replacement in Pooler, GA: How to Decide',
    metaDescription:
      'Duct cleaning vs. duct replacement in Pooler, GA. How to decide which your home needs, what each costs, and when a hybrid approach makes sense.',
    datePublished: '2025-05-20',
    tldrBullets: [
      'Duct cleaning is appropriate when the duct structure is sound but contaminated with dust, mold, or debris',
      'Duct replacement is needed when ductwork is structurally degraded, undersized, or leaking significantly',
      'Most Pooler new construction homes have sound ductwork that benefits from cleaning but doesn\'t need replacement',
      'Post-renovation or post-flood ductwork almost always needs cleaning — often replacement of affected sections',
    ],
    sections: [
      {
        heading: 'When Duct Cleaning Is the Right Answer for Pooler Homes',
        content: `Duct cleaning addresses contamination inside structurally sound ductwork. If your Pooler home has a post-construction dust layer from a recent renovation, visible mold on duct surfaces after a flooding event, a persistent musty odor from the supply registers, or if the home has never been cleaned since original construction and significant time has passed — these are the scenarios where [duct cleaning](/duct-cleaning) provides genuine value.

Pooler's new construction boom is particularly relevant here. Homes built from 2000 through the present often haven't had professional duct cleaning since they were built. Construction dust — drywall particles, insulation fibers, sawdust — settles throughout the duct system during the construction process. While this contamination may not cause immediate health effects in most occupants, it contributes to filter loading, can harbor moisture-related mold growth in humid coastal Georgia conditions, and eventually shows up as dust at supply registers. Post-construction cleaning of a structurally sound new home's ductwork is the appropriate intervention.

The key qualifier is "structurally sound." If your ductwork has disconnected flex duct connections, significant leakage, sections that have collapsed or kinked, or an undersized return air pathway, cleaning that ductwork doesn't address the underlying performance problem — it just makes a deficient system somewhat cleaner. Our [duct fabrication](/duct-fabrication) team evaluates structural condition as part of every duct assessment.`,
      },
      {
        heading: 'When Duct Replacement Is Necessary',
        content: `Duct replacement is the right answer when the ductwork structure itself is the problem, not just the contents. Several conditions clearly warrant replacement rather than cleaning.

Flex duct that has been in service for 20+ years in a coastal Georgia attic often shows terminal degradation: the outer jacket becomes brittle and tears, the inner wire helix corrodes and can puncture the liner, and sections that were marginal at installation have progressively worsened. Trying to clean ductwork in this condition risks further damage and doesn't address the fundamental airflow deficiency.

Significant leakage (greater than 15% of supply air to the outside) is another clear indication that replacement or extensive sealing is warranted. A duct leakage test quantifies the actual leakage rate. If the result is high, we identify the worst-offending sections through a targeted inspection and replace those sections rather than necessarily the entire system.

Undersized ductwork — a common finding in older Savannah homes where HVAC systems were retrofitted into spaces not designed for them, and in some Pooler homes where the original HVAC contractor cut corners — must be modified or replaced to achieve the correct airflow. Cleaning undersized duct doesn't make it bigger.

See the [Pooler city hub page](/pooler) for additional context on the Pooler HVAC market.`,
      },
    ],
    internalLinks: { up: '/blog', across: ['/duct-cleaning', '/duct-fabrication', '/pooler'] },
  },

  {
    slug: 'how-salt-air-affects-hvac-systems-coastal-georgia',
    title: 'How Salt Air Affects HVAC Systems in Coastal Georgia',
    metaDescription:
      'How salt air damages HVAC systems in Savannah, Port Wentworth, and coastal Georgia. What breaks down, how fast, and what you can do about it.',
    datePublished: '2025-04-25',
    tldrBullets: [
      'Salt air from the Atlantic and Savannah River deposits on condenser coils and causes measurable corrosion within one season',
      'Formicary corrosion creates pinhole leaks in copper refrigerant lines — most common within 2 miles of the coast',
      'Annual coil cleaning and protective coating can significantly extend equipment life in coastal Georgia',
      'R-22 systems are particularly vulnerable because copper components are more exposed than newer hermetically sealed designs',
    ],
    sections: [
      {
        heading: 'What Salt Air Actually Does to Your Outdoor HVAC Equipment',
        content: `The salt air narrative around coastal HVAC equipment is real — not a marketing invention. The chemistry is straightforward: airborne salt particles (primarily sodium chloride, with some calcium chloride and magnesium salts from sea spray and the river environment) deposit on outdoor equipment surfaces. When combined with moisture — and coastal Georgia has plenty — the salt forms a mildly corrosive electrolytic solution on metal surfaces.

For aluminum condenser coil fins, this manifests as progressive fin degradation. Fins oxidize, thin, and eventually crumble away from the copper tubing they contact. Each fin represents a small amount of heat transfer surface area, and as fins degrade, the condenser's ability to reject heat to the outside air decreases. A condenser operating with 30% fin degradation has noticeably higher refrigerant head pressure and forces the compressor to work harder — measurable in increased compressor amperage draw and higher electricity consumption.

For copper refrigerant lines, formicary corrosion is the primary concern. This specific corrosion mechanism — driven by the combination of formic acid (from organic compounds in the air, more prevalent near marshes and wetlands common in the Port Wentworth and Savannah coastal environment) and the electrochemical action of salt — creates tiny pinhole leaks in copper tubing walls. The leaks are too small to detect visually; they show up as gradual refrigerant loss over weeks to months. Properties within 2–3 miles of the Savannah River, the marsh, and the coast show this corrosion pattern most frequently.

Our [AC repair](/ac-repair) team identifies formicary corrosion during service calls and addresses it with copper repair or section replacement, depending on the extent.`,
      },
      {
        heading: 'Protective Measures That Actually Work',
        content: `Two measures have clear evidence for extending condenser life in coastal environments: regular cleaning and protective coil coating.

Annual or semi-annual condenser coil cleaning removes the accumulated salt film before it has time to do significant damage. Chemical coil cleaners that neutralize the salt residue, followed by a water rinse, reset the corrosion clock. Coils that are cleaned annually show dramatically less degradation over a 10-year period than equivalent units that are cleaned only when problems are apparent. This is the most impactful item on the [HVAC maintenance](/hvac-maintenance) visit for coastal Georgia properties.

Protective coil coatings — thin polymer coatings applied to clean coil surfaces — act as a physical barrier between the metal fins and the salt air environment. These coatings (brands include Blygold, Nu-Brane, and others) are commonly used in marine and industrial applications and have been adapted for residential HVAC. Applied after a thorough cleaning, a quality coil coating on a Savannah-area condenser can extend fin life by 40–60% compared to an uncoated coil in the same environment. The coating requires reapplication every 2–3 years as it gradually deteriorates from UV and weather exposure, but the cost is modest relative to the equipment life extension.

Properties in the highest-risk zone — within 1–2 miles of the river and marsh, along Highway 17 and River Street — benefit most from both measures combined.`,
      },
    ],
    internalLinks: { up: '/blog', across: ['/hvac-maintenance', '/ac-repair', '/savannah'] },
  },

  {
    slug: 'heat-pump-vs-central-ac-georgia-homeowners',
    title: 'Heat Pump vs. Central AC: What Georgia Homeowners Need to Know',
    metaDescription:
      'Heat pump vs. central AC comparison for Georgia homeowners. Efficiency, costs, and which system is right for coastal Georgia\'s climate.',
    datePublished: '2025-03-01',
    tldrBullets: [
      'Heat pumps provide both heating and cooling — more efficient than separate AC + furnace in Georgia\'s mild climate',
      'Modern heat pumps outperform electric resistance heat at every outdoor temperature above -10°F',
      'Central AC-only systems paired with a gas furnace can be a cost-effective choice where natural gas is cheap',
      'Coastal Georgia\'s limited heating season makes heat pumps an excellent value in most residential applications',
    ],
    sections: [
      {
        heading: 'Understanding the Fundamental Difference in How These Systems Work',
        content: `The confusion between heat pumps and central air conditioners is understandable because they look nearly identical: both have an indoor air handler and an outdoor unit connected by refrigerant lines. The difference is operational: a central AC system moves heat in only one direction — out of your home. A heat pump can reverse its refrigerant flow to move heat either direction — out of your home in summer, into your home in winter.

This reversibility is what makes a heat pump a complete heating-and-cooling system. In cooling mode, a heat pump operates identically to a central AC. In heating mode, it extracts heat from outdoor air (even cold air at 20°F contains significant heat energy) and delivers it inside. The efficiency advantage over electric resistance heating (baseboard heaters, electric furnaces with strip heat) is substantial: a heat pump delivering 3 BTUs of heat for every 1 BTU of electrical energy consumed has a coefficient of performance (COP) of 3.0 — versus 1.0 for electric resistance heat.

For a coastal Georgia homeowner choosing between these systems, the question becomes: what does the heating system look like alongside the cooling system? Our [heat pump service](/heat-pump-service) page covers heat pump maintenance and repair in detail.`,
      },
      {
        heading: 'The Coastal Georgia Climate Argument for Heat Pumps',
        content: `Georgia's Climate Zone 2 (the coastal region including Chatham County) is arguably the ideal climate for heat pump technology. Winter temperatures rarely drop below 20°F, which keeps the heat pump operating efficiently without relying heavily on backup electric strip heat. The heating season is relatively short — 60–90 days of meaningful heating demand — which limits annual heating costs regardless of the system type. And the long cooling season (8–9 months per year) means the AC efficiency of the system matters enormously.

A heat pump and a central AC system produce identical cooling efficiency if they have the same SEER2 rating — they're operating identically in cooling mode. The difference is entirely on the heating side, where the heat pump's COP advantage over electric resistance heat saves money on the 60–90 annual heating days.

The competing option — a central AC paired with a natural gas furnace — is cost-effective when natural gas prices are low relative to electricity. The gas furnace provides superior performance on the coldest winter days (a gas furnace blows high-temperature air; a heat pump blows lower-temperature air that some occupants find less satisfying). If natural gas is available at your Port Wentworth or Pooler address and current gas prices are favorable, the split system option deserves comparison. Our [AC installation](/ac-installation) team runs the numbers for your specific situation.`,
      },
    ],
    internalLinks: { up: '/blog', across: ['/heat-pump-service', '/ac-installation', '/furnace-installation'] },
  },

  {
    slug: 'hvac-maintenance-checklist-port-wentworth-homeowners',
    title: 'HVAC Maintenance Checklist for Port Wentworth Homeowners',
    metaDescription:
      'Complete HVAC maintenance checklist for Port Wentworth, GA homeowners. Monthly, seasonal, and annual tasks to keep your system running in coastal Georgia.',
    datePublished: '2025-02-15',
    tldrBullets: [
      'Monthly: check and replace air filter (MERV 8–11 minimum for coastal Georgia homes)',
      'Quarterly: inspect outdoor condenser unit, clear debris, check drain line',
      'Annual: professional tune-up including coil cleaning, capacitor test, and refrigerant check',
      'Pre-hurricane season (May/June): inspect and protect outdoor equipment',
    ],
    sections: [
      {
        heading: 'Monthly HVAC Maintenance Tasks for Port Wentworth Homeowners',
        content: `The single highest-impact monthly maintenance task is checking and replacing the air filter. This sounds too simple to matter, but a clogged filter is one of the most common causes of HVAC problems — it restricts airflow, causes the evaporator coil to freeze, and makes the blower motor work harder against increased static pressure. In coastal Georgia, where the system runs 8–9 months per year and the environment is heavy with pollen and particulates, filters load faster than in less demanding climates.

A MERV 8 fiberglass filter should be replaced every 30–45 days in peak season for a Port Wentworth home. MERV 11–13 filters (recommended for allergy sufferers and homes with pets) may load faster and should be checked every 20–30 days in summer. The general rule: when the filter looks gray and the fibers aren't clearly visible through it, replace it. A $5 filter replacement prevents a $300+ service call.

Also monthly: glance at the outdoor condenser unit to confirm it hasn't been covered with vegetation, debris has blown against it, or anything is resting on top. Condensers need free airflow on all four sides and the top. Keep grass and shrubs trimmed to at least 18 inches of clearance.

The [HVAC maintenance](/hvac-maintenance) page covers what a professional tune-up includes beyond the homeowner checklist items.`,
      },
      {
        heading: 'Seasonal HVAC Tasks for Each Time of Year',
        content: `**Spring (March–April)**: Schedule professional AC tune-up before cooling season. This is the highest-priority seasonal task. Also: change the filter with a fresh one, check that the condensate drain line is flowing freely (pour a cup of water into the drain pan and verify it drains quickly), and clear any winter debris from around the outdoor unit.

**Pre-Hurricane Season (May–June)**: Coastal Georgia's hurricane season runs June through November, with peak activity in August–September. Before storm season, check that the outdoor unit is secured to its pad (concrete pads can shift; units should be fastened with hurricane straps if you're in a wind zone). Know how to shut off the system at the breaker before a major storm. After any significant storm, inspect for debris inside or around the unit before restarting.

**Fall (September–October)**: Schedule professional heating system check — gas furnace igniter and flame sensor cleaning, heat exchanger inspection (carbon monoxide safety), or heat pump heating mode verification. Change filter again with fresh start for heating season.

**Winter**: In the rare Port Wentworth winter when temperatures approach freezing, verify your heat pump is operating correctly in heating mode. A heat pump that's icing over and not defrosting properly needs professional attention before the next cold event.`,
      },
      {
        heading: 'The Annual Professional Tune-Up: What\'s Not on the Homeowner Checklist',
        content: `Homeowner maintenance items are important, but they don't replace annual professional service because there are several key items that require equipment and expertise that homeowners shouldn't try to handle themselves.

Refrigerant pressure measurement: superheat and subcooling readings require a manifold gauge set and knowledge of how to interpret the readings for your specific system type and outdoor conditions. These measurements catch gradual refrigerant loss months before the system loses enough charge to cause a symptom.

Capacitor testing: requires a meter capable of measuring microfarad ratings. Replacing a capacitor that measures 85% of specification — still "working" but degraded — on a scheduled maintenance visit at $150–$200 prevents the emergency replacement of the same capacitor at $250–$350 when it fails at 11 PM on a July night.

Contactor inspection and electrical measurement: checking the contactor for salt-air pitting, measuring voltage and amperage at key points to identify developing problems before they become failures.

Coil cleaning: the professional equipment and chemicals used for condenser coil cleaning are not practical for homeowners to operate safely, and the technique matters for not damaging the coil.

Our [HVAC inspection](/hvac-inspection) and maintenance services cover all of these items. Call (912) 416-3449 to schedule for Port Wentworth and surrounding areas.`,
      },
    ],
    internalLinks: { up: '/blog', across: ['/hvac-maintenance', '/hvac-inspection', '/port-wentworth'] },
  },

  {
    slug: 'why-ac-running-but-not-cooling-savannah-ga',
    title: 'Why Your AC Is Running But Not Cooling in Savannah, GA',
    metaDescription:
      'AC running but not cooling in Savannah? The most common causes: low refrigerant, dirty condenser, frozen coil, and oversized equipment. Diagnosis and fixes explained.',
    datePublished: '2025-07-15',
    tldrBullets: [
      'AC running but not cooling is one of the most common summer service calls in Savannah',
      'Most common causes: low refrigerant, dirty condenser coil, frozen evaporator coil, or duct leakage',
      'A frozen coil requires the system to be shut off for 2–4 hours before diagnosis can proceed',
      'Don\'t just add refrigerant — the underlying leak must be found and repaired or the problem recurs',
    ],
    sections: [
      {
        heading: 'The Four Most Common Reasons Your AC Runs Without Cooling',
        content: `An air conditioner that's running — you hear the outdoor unit, the air handler is blowing — but the house won't cool down is one of the most frequent service calls we receive from Savannah and Port Wentworth homeowners. The good news: most causes are diagnosable within the first 30 minutes of a service call. Here are the four most common, in order of frequency in the Savannah market.

**Low refrigerant**: The most common cause. The system runs, the compressor operates, but without a full refrigerant charge the refrigerant circuit can't absorb enough heat from your home. Low refrigerant causes the evaporator coil to run colder than designed, which leads to frost formation (see below), and the discharge air from the supply registers to feel slightly cool but not cold. The fix requires finding and repairing the leak, then recharging to specification. Adding refrigerant without fixing the leak just delays the return call. Our [AC repair](/ac-repair) process always includes leak detection before recharge.

**Dirty condenser coil**: A condenser coil blocked by salt-air deposits, cottonwood fluff, grass clippings, or dryer lint can't reject heat efficiently. The refrigerant circuit backs up with heat it can't release, head pressure climbs, the compressor works harder, and the cooling output drops. Sometimes this is visible — the outdoor unit is visibly dirty; sometimes it's subtle. A coil cleaning can restore significant capacity in a system that's been degrading gradually over one or two seasons.

**Frozen evaporator coil**: A frozen coil looks like a giant ice ball on the indoor air handler. Causes include restricted airflow from a dirty filter (most common), low refrigerant charge (second most common), or a blower motor running too slowly. A frozen coil can't absorb heat from your home's air — it's insulated by ice. The system must be shut off and allowed to thaw (2–4 hours) before proper diagnosis and repair can proceed. If you suspect a frozen coil, turn off the cooling at the thermostat but leave the fan set to "on" to help thaw faster.

**Significant duct leakage**: Supply air leaking into the attic before it reaches living spaces is a less obvious but real cause of "AC running, house not cooling" complaints. A system losing 20–30% of its supply air to the attic can't maintain setpoint temperature even when operating correctly. Duct leakage testing quantifies this; targeted sealing or [duct fabrication](/duct-fabrication) correction addresses it.`,
      },
      {
        heading: 'What You Can Check Before Calling for Service',
        content: `Before scheduling a service call, a few quick homeowner checks can either resolve the problem or help the technician diagnose it faster when they arrive.

**Filter first**: Pull the filter and look at it. If it's heavily loaded (gray, fibers not visible), replace it immediately. A fresh filter sometimes resolves a minor cooling issue and almost always improves the situation while waiting for a service visit.

**Confirm thermostat is in "cool" mode**: Set to at least 3°F below current room temperature, fan set to "auto" rather than "on" (continuous fan recirculates air but doesn't improve cooling).

**Check the outdoor unit**: Is the condenser fan running? You should be able to hear it and see the fan blade turning through the top grill. If the fan isn't running but the system appears to be on, you likely have a fan motor or capacitor issue. Is the unit visibly covered in debris, grass, or ice? Clear debris if present.

**Check the air handler for ice**: Carefully feel around the refrigerant lines at the air handler. If they're heavily frosted or frozen solid, you have an iced-over evaporator coil — turn off cooling, leave fan on, and wait 2–4 hours before calling.

If none of these resolve the situation, call us at (912) 416-3449 for a service visit.`,
      },
    ],
    internalLinks: { up: '/blog', across: ['/ac-repair', '/savannah', '/hvac-maintenance'] },
  },
];
