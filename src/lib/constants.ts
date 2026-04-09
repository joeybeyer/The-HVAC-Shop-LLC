// Business NAP — Single source of truth. Use EXACTLY as written everywhere.
export const BUSINESS = {
  name: 'The HVAC Shop LLC',
  phone: '(912) 416-3449',
  phoneTel: '+19124163449',
  email: 'davidj@thehvacshop.net',
  emailSecondary: 'karenz@thehvacshop.net',
  address: {
    street: '101 S Coastal Hwy',
    city: 'Port Wentworth',
    state: 'GA',
    zip: '31407',
    full: '101 S Coastal Hwy, Port Wentworth, GA 31407',
  },
  geo: { lat: 32.1496, lng: -81.1632 },
  url: 'https://thehvacshopllc.com',
  hours: {
    weekday: 'Mon–Fri 8:00 AM – 5:00 PM',
    weekend: 'Sat–Sun: By appointment only',
    emergency: '24/7 Emergency Service Available',
  },
  owner: { name: 'Karen Zollo', title: 'Owner' },
  leadTech: { name: 'David Johnson', title: 'Lead HVAC Technician', experience: '30 years' },
  founded: '2018',
  description:
    'The HVAC Shop LLC provides residential and commercial heating, cooling, and ventilation services in Port Wentworth, Pooler, Savannah, and greater Chatham County, GA. With over 30 years of combined experience in HVAC installation, repair, maintenance, and custom duct fabrication, our licensed team delivers reliable solutions for homes and businesses across coastal Georgia.',
} as const;

// Services — slug must match route /[service]/
export const SERVICES = [
  { slug: 'ac-repair', name: 'AC Repair', shortDesc: 'Fast, reliable air conditioning repair for homes and businesses.' },
  { slug: 'ac-installation', name: 'AC Installation', shortDesc: 'New central air and AC system installation with top brands.' },
  { slug: 'heating-repair', name: 'Heating Repair', shortDesc: 'Furnace, heat pump, and heating system diagnosis and repair.' },
  { slug: 'furnace-installation', name: 'Furnace Installation', shortDesc: 'Gas and electric furnace installation and replacement.' },
  { slug: 'hvac-maintenance', name: 'HVAC Maintenance', shortDesc: 'Preventive maintenance plans to extend system life.' },
  { slug: 'duct-fabrication', name: 'Duct Fabrication', shortDesc: 'Custom sheet metal ductwork fabrication and installation.' },
  { slug: 'duct-cleaning', name: 'Duct Cleaning', shortDesc: 'Professional air duct cleaning for improved indoor air quality.' },
  { slug: 'commercial-hvac', name: 'Commercial HVAC', shortDesc: 'Full commercial HVAC service, installation, and maintenance.' },
  { slug: 'emergency-hvac-service', name: 'Emergency HVAC Service', shortDesc: '24/7 emergency heating and cooling repair.' },
  { slug: 'hvac-inspection', name: 'HVAC Inspection', shortDesc: 'Comprehensive system inspections and performance reports.' },
  { slug: 'thermostat-installation', name: 'Thermostat Installation', shortDesc: 'Smart and programmable thermostat setup.' },
  { slug: 'indoor-air-quality', name: 'Indoor Air Quality', shortDesc: 'Air purification, filtration, and humidity control solutions.' },
  { slug: 'heat-pump-service', name: 'Heat Pump Service', shortDesc: 'Heat pump repair, maintenance, and installation.' },
  { slug: 'mini-split-installation', name: 'Mini Split Installation', shortDesc: 'Ductless mini split AC and heating installation.' },
  { slug: 'hvac-financing', name: 'HVAC Financing', shortDesc: 'Flexible financing options for new systems and major repairs.' },
] as const;

// City hubs — slug must match route /[city]/
export const CITIES = [
  {
    slug: 'port-wentworth',
    name: 'Port Wentworth',
    state: 'GA',
    zip: '31407',
    isPrimary: true,
    neighborhoods: [
      { slug: 'godley-station', name: 'Godley Station' },
      { slug: 'rice-hope', name: 'Rice Hope' },
      { slug: 'cross-creek', name: 'Cross Creek' },
      { slug: 'towne-park', name: 'Towne Park' },
      { slug: 'spring-lakes', name: 'Spring Lakes' },
    ],
  },
  {
    slug: 'pooler',
    name: 'Pooler',
    state: 'GA',
    zip: '31322',
    isPrimary: false,
    neighborhoods: [
      { slug: 'pooler-parkway', name: 'Pooler Parkway' },
      { slug: 'west-chatham', name: 'West Chatham' },
    ],
  },
  {
    slug: 'savannah',
    name: 'Savannah',
    state: 'GA',
    zip: '31401',
    isPrimary: false,
    neighborhoods: [
      { slug: 'west-savannah', name: 'West Savannah' },
      { slug: 'henderson', name: 'Henderson' },
      { slug: 'woodville-bartow', name: 'Woodville-Bartow' },
    ],
  },
  { slug: 'garden-city', name: 'Garden City', state: 'GA', zip: '31408', isPrimary: false, neighborhoods: [] },
  { slug: 'rincon', name: 'Rincon', state: 'GA', zip: '31326', isPrimary: false, neighborhoods: [] },
  { slug: 'bloomingdale', name: 'Bloomingdale', state: 'GA', zip: '31302', isPrimary: false, neighborhoods: [] },
  { slug: 'richmond-hill', name: 'Richmond Hill', state: 'GA', zip: '31324', isPrimary: false, neighborhoods: [] },
  { slug: 'effingham-county', name: 'Effingham County', state: 'GA', zip: '31329', isPrimary: false, neighborhoods: [] },
] as const;

// All areas for Sterling Sky long-title pattern
export const SERVICE_AREA_STRING =
  'Port Wentworth, Pooler, Savannah, Garden City, Rincon, Bloomingdale, Godley Station & All of Chatham County';
