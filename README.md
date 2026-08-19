# PowerChain Crowdfunding Platform

**Version:** `1.0.0`
**Runtime:** `Node.js 24.19.0 LTS`  
**API:** `/api/v1`  
**Product:** goal-based crowdfunding for humanitarian aid, disaster relief, renewable-energy projects, public goods, community programs and ticketed utility campaigns.

PowerChain separates campaign purpose, supporter participation, payment, settlement, treasury control, accounting/reconciliation and evidence/impact into authoritative layers.

```text
Campaign
  -> Participation
  -> PaymentIntent
  -> Settlement
  -> Treasury
  -> Ledger / Reconciliation
  -> Milestone Evidence / Impact
```

## Canonical v1.0.0 application improvements

- Dashboard treasury-vs-milestone funding chart for every active campaign.
- Milestone evidence submission and reviewer verification flow.
- Fund-release gate remains closed until required evidence and milestone approval are satisfied.
- Dark-green design system replaces legacy blue branding.
- Light / dark / system theme control across every app.
- Shared footer and global loading states.
- Web marketing surface expanded for humanitarian, disaster and renewable-energy campaigns.
- `/auth/` routes for login/sign-in, signup/sign-up and password reset.
- Crowdfunding `/explore`, `/projects`, campaign details and upgraded 11-step Create Campaign wizard.
- `Renewables` added as a first-class campaign purpose/category.
- New `@powerchain/evidence` and `@powerchain/auth` packages.


## Canonical version policy

PowerChain Crowdfunding stays on **v1.0.0** while v1 is expanded and hardened. Package versions, UI version labels and API health metadata are locked to `1.0.0`; the HTTP API remains `/api/v1`. Run `pnpm version:check` to detect drift. See `docs/VERSIONING.md`.

## Apps

| App | Package | Default port | Responsibility |
|---|---|---:|---|
| Website | `@powerchain/web` | 3000 | Marketing, auth entry and product navigation |
| Crowdfunding | `@powerchain/crowdfunding` | 3001 | Explore projects, campaign pages and 11-step campaign creation |
| Donate | `@powerchain/donate` | 3002 | Supporter contribution experience |
| Checkout | `@powerchain/checkout` | 3003 | PaymentIntent review/sign/settlement UI |
| Dashboard | `@powerchain/dashboard` | 3004 | Organizer funding, milestones and evidence workflow |
| Treasury | `@powerchain/treasury-app` | 3005 | Safe, evidence gates, approvals and disbursements |
| Admin | `@powerchain/admin` | 3006 | Verification, policy and operations |
| Explorer | `@powerchain/explorer` | 3007 | Public campaign/payment/transaction lookup |
| Docs | `@powerchain/docs-app` | 3008 | Product and developer documentation surface |
| Field PWA | `@powerchain/pwa` | 3009 | Offline field evidence and milestone work |
| API | `@powerchain/api` | 3010 | Canonical `/api/v1` HTTP boundary |

## Shared packages

- `@powerchain/ui` — dark-green design system, theme switching, branding, footer and controls.
- `@powerchain/auth` — session/role contracts and password validation helpers.
- `@powerchain/evidence` — evidence records, statuses and milestone fund-release gate logic.
- `@powerchain/campaign` — campaign lifecycle and funding policy contracts.
- `@powerchain/payment-intent` — payment state machine and transition guards.
- `@powerchain/treasury` — treasury/disbursement policy contracts.
- `@powerchain/ledger` — double-entry validation primitives.
- `@powerchain/reconciliation` — matching and exception contracts.
- `@powerchain/config`, `@powerchain/types`, `@powerchain/events`, `@powerchain/providers`, `@powerchain/sdk`, `@powerchain/api-core`, `@powerchain/common`.

## Evidence-gated release invariant

```text
Funding threshold reached
        !=
Funds releasable

Required proof attached
  -> reviewer verification
  -> milestone approval
  -> treasury policy
  -> multisig proposal
  -> signatures
  -> execution
  -> reconciliation
```

The browser evidence demo hashes selected files with SHA-256 before submission. Production deployments must upload originals through signed server-authorized object-storage requests, scan/validate them server-side, retain sensitive documents off-chain, and publish only appropriate commitments/references.

## Payment rails

```text
Bank EUR -> SEPA / SEPA Instant -> Monerium -> EURe -> campaign Safe
USDC     -> wallet / Solana Pay / Action / Blink -> Solana / Sui / EVM
USDC     -> supported cross-chain route -> CCTP -> destination treasury
```

A QR scan, bank initiation, provider order or unfinalized blockchain observation is never treated as a completed contribution. Campaign totals move only after authoritative settlement verification and reconciliation.

## Development

```bash
corepack enable
corepack prepare pnpm@11.21.0 --activate
pnpm env:init
pnpm install
pnpm run doctor:project
pnpm dev
```

Docker is optional for the normal `pnpm dev` path. Use `pnpm stack:up` only when you want the bundled PostgreSQL + Redis containers. Native or managed PostgreSQL/Redis endpoints can be configured in `.env.local` instead. Node 24.19.0 LTS is the pinned production and development runtime.

## Company profiles & invoicing

Organizations can now configure legal/company/foundation details, branding, registered address, billing contacts and public social links. The dashboard includes a reusable PowerChain invoice renderer, invoice preview tool, invoice list hook and `/api/v1/invoices` boundary. Issued invoices are designed around immutable party snapshots and reconciliation-driven payment state.

## Documentation

Start with [`docs/README.md`](docs/README.md), [`docs/PLATFORM-APPS.md`](docs/PLATFORM-APPS.md), [`docs/MILESTONE-EVIDENCE.md`](docs/MILESTONE-EVIDENCE.md), [`docs/AUTH.md`](docs/AUTH.md) and [`docs/DESIGN-SYSTEM.md`](docs/DESIGN-SYSTEM.md).

## Professional UI/UX layer

Canonical v1.0.0 now uses a unified dark-green institutional design system across marketing, discovery, campaign creation, contribution, checkout, dashboards, treasury, admin and explorer surfaces. See [`docs/UI-UX.md`](docs/UI-UX.md).


## Trust, agreements, escrow and safety packages

- `@powerchain/identity` — individual verification checks, business verification and trust badges.
- `@powerchain/agreements` — versioned counsel-approved templates, deal-term rendering and signature records.
- `@powerchain/audit` — append-only hash-chain audit contracts.
- `@powerchain/escrow` — tranche states, fee calculation and release-gate enforcement.
- `@powerchain/notifications` — in-app/email notification contracts and preferences.
- `@powerchain/moderation` — reports, severity policy and reversible auto-suspension decisions.

The platform remains canonical `1.0.0`; these additions are improvements within the v1 contract.

## Founder / Investor Capital Module

PowerChain v1.0.0 now also contains a structured founder/investor marketplace domain:

```text
Founder listing
  -> 3–5 milestone tranches
  -> derived raise goal
  -> investor marketplace / watchlist
  -> due diligence
  -> interest / offer
  -> participant-only deal room
  -> counsel-approved agreement + e-signature
  -> funded escrow with fee snapshot
  -> IPFS/content proof
  -> investor approval
  -> claim_milestone
```

Security additions include Supabase/Postgres RLS policies, protected-column triggers, append-only audit protection and a real authenticated-user verification harness. These files establish the security contract; they are **not** evidence that a production database has already passed the harness unless `pnpm security:verify:production` is actually run against the target deployment.

See [`docs/CAPITAL-MARKETPLACE.md`](docs/CAPITAL-MARKETPLACE.md) and [`docs/DATA-SECURITY-RLS.md`](docs/DATA-SECURITY-RLS.md).


## Crowdfunding engine

Canonical v1.0.0 now includes goal-based escrowed campaigns, `contribute()`, success withdrawals, pull-based `refund_single()`, proof-gated `claim_milestone()`, discovery registry scaffolding, contributor leaderboard projections, realtime fallbacks, Midtrans hosted-checkout adapter, settings, countdown/progress components and my-donations history. See `docs/CROWDFUNDING-ENGINE.md`.

## Runtime

Repository runtime is Node 24.19.0 LTS is the pinned production and development runtime.

## Full-stack SaaS runtime

The monorepo now contains a real PostgreSQL persistence layer (`@powerchain/database`), first-party session authentication, organization workspaces, SaaS plans/subscriptions/usage, and local Postgres + Redis orchestration.

```bash
corepack enable
corepack prepare pnpm@11.22.0 --activate
pnpm env:init
pnpm install

# Optional bundled infrastructure (requires Docker Compose or Podman Compose)
pnpm stack:up
pnpm stack:wait

pnpm db:push
pnpm db:seed
pnpm dev
```

Without Docker/Podman, edit `DATABASE_URL` and `REDIS_URL` in `.env.local` to point at native or managed services, then run `pnpm infra:check` and `pnpm dev`.

Provider-specific financial rails still require their real credentials and deployment manifests; the platform does not fabricate blockchain, banking, KYC, e-signature or payment-provider confirmations when those integrations are absent.

## TypeScript / VS Code monorepo setup

The workspace uses explicit ambient type profiles under `config/typescript/`. This prevents pnpm's isolated dependency layout from causing editor-only `Cannot find type definition file for 'node'` / `'react'` errors.

After extracting or pulling a dependency/config fix, run:

```bash
corepack enable
corepack prepare pnpm@11.21.0 --activate
pnpm install
pnpm config:check
pnpm workspace:check
```

Then in VS Code run **TypeScript: Select TypeScript Version → Use Workspace Version**, followed by **TypeScript: Restart TS Server**. `.vscode/settings.json` is included so the workspace TypeScript SDK is preferred.

Every Next app now extends `config/typescript/nextjs.json`, uses a small `next.config.mjs` backed by `config/next/shared.mjs`, and the API uses the Next.js 16 `proxy.ts` convention for CORS/security headers.

## Prisma / PostgreSQL

The root Prisma schema is validated before client generation. Prisma 6.19.3 and `@prisma/client` 6.19.3 are pinned together. See [`docs/PRISMA.md`](docs/PRISMA.md).


## Web3 icon system

Token, network and wallet identities are centralized through `@powerchain/ui/web3-icons` using `@web3icons/react`. See [`docs/WEB3-ICONS.md`](docs/WEB3-ICONS.md).


## Development reliability

The workspace uses Node 24.19.0 and pnpm 11.21.0. Prisma CLI and Client are pinned together at 6.19.3; client generation is deterministic and explicitly disables Prisma dependency auto-install.

```bash
corepack enable
pnpm install
pnpm routes:check
pnpm skills:check
pnpm stack:up
pnpm stack:wait
pnpm dev
```

Operational endpoints include `/api/v1/health/live`, `/api/v1/health/ready`, `/api/v1/system/services`, and `/api/v1/system/endpoints`. See [`docs/INFRA-SERVICES-ENDPOINTS.md`](docs/INFRA-SERVICES-ENDPOINTS.md).
