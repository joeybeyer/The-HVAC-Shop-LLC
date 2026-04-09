# The HVAC Shop LLC — thehvacshopllc.com

Residential & commercial HVAC contractor serving Port Wentworth, Pooler, Savannah, and greater Chatham County, GA.

## Stack
Next.js 14 · TypeScript · Tailwind CSS · Vercel · Turso · Cloudflare

## Quick Start
```bash
git clone https://github.com/joeybeyer/The-HVAC-Shop-LLC.git
cd The-HVAC-Shop-LLC
npm install
cp .env.example .env.local   # Add your keys
npm run dev
```

## Architecture
Hub-and-spoke local SEO site. See [CLAUDE.md](./CLAUDE.md) for full rules and [docs/BUILD-SPEC.md](./docs/BUILD-SPEC.md) for the complete build plan.

```
Homepage
├── City Hubs (/port-wentworth/, /pooler/, /savannah/, ...)
│   └── Neighborhood Spokes (/port-wentworth/godley-station/, ...)
├── Service Pages (/ac-repair/, /duct-fabrication/, ...)
└── Blog / PAA Content (/blog/...)
```

## Environment Variables
```
TURSO_DATABASE_URL=
TURSO_AUTH_TOKEN=
WEB3FORMS_ACCESS_KEY=
RESEND_API_KEY=
N8N_WEBHOOK_URL=
NEXT_PUBLIC_GTM_ID=
NEXT_PUBLIC_GA_ID=
```

## Deploy
Push to `main` → Vercel auto-deploys. DNS via Cloudflare.
