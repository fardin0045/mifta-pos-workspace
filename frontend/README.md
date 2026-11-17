# Mifta POS — Frontend Architecture Starter

**Derived from the existing team Vite/React/TypeScript/TanStack Router project.** This is a scaffold, not a finished POS. It does **not** include a backend.

## Requirements
Node version supported by your existing Vite 8 setup; run `node --version`. Install dependencies with `npm ci`.

## Local run

```bash
cp .env.example .env.local   # Windows PowerShell: Copy-Item .env.example .env.local
npm ci
npm run dev
```

Open `http://localhost:3000/login`; with local mock mode enabled, demo credentials are `admin@mifta.example` and `demo12345`. Mock mode is automatically disabled when built for production. Do not use demo credentials on a live system.

## Build / checks

```bash
npm run build
npm run typecheck
npm run test:unit
npm run lint
```

Route files generate with `vite` / `npm run generate-routes`; never hand-edit `src/routeTree.gen.ts`.

See `../docs/WORKSPACE_GUIDE.md` for folder structure, `../docs/API_CONTRACT.md` for coordination with the backend teammate, and `../docs/SRS_IMPLEMENTATION_PLAN.md` for current coverage and remaining milestones.

## Current implemented demos
- Separate login route, auth context, route guard, mock-only user session, logout.
- Responsive admin sidebar with Super Admin branch switcher.
- Dashboard and searchable read-only branch, employee, menu, type, price, order, customer and audit pages.
- POS four-zone layout with category buttons, keypad, sample cart, change of order channel with chain-level repricing, and customer lookup demo.
- Report/settings demo views; isolated bridge and offline interface boundaries.

## NOT a production-complete delivery
No backend is connected. Buttons requiring persistence, payment, hardware, printer, or offline sync are not live. Branch switching is presentation-only until backend scoping is implemented. Never claim SRS acceptance from this starter alone.
