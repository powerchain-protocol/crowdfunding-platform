# PowerChain Crowdfunding Platform

**Canonical release:** `1.0.0`  
**Node.js:** `24.19.0`  
**pnpm:** `11.22.0` via Corepack  
**API:** `/api/v1`  
**Architecture:** Next.js monorepo + PostgreSQL + Redis + Prisma + Solana/EVM/Sui integration boundaries

PowerChain is a goal-based crowdfunding and capital coordination platform for humanitarian aid, disaster relief, renewable-energy projects, public goods, communities, verified founder listings, milestone escrow, investor collaboration, and transparent treasury operations.

The platform treats financial state as authoritative only after verification and reconciliation:

```text
Campaign / Listing
        ↓
Participation / Offer
        ↓
Payment Intent / Wallet Signature
        ↓
Settlement / On-chain Escrow
        ↓
Ledger + Reconciliation
        ↓
Milestone Evidence + Approval
        ↓
Treasury / Tranche Release
        ↓
Audit + Public Transparency
```

## Quick start

PowerChain supports three local-development modes. Choose **one**; Docker is not required for the UI/mock path.

### 1. UI + mock/simulated mode — no Docker required

Use this when working on pages, components, themes, campaign UX, docs, or non-persistent flows.

```bash
nvm use 24.19.0
corepack enable
corepack prepare pnpm@11.22.0 --activate

pnpm env:init
pnpm install
pnpm setup:check
pnpm dev
```

The checked-in environment template defaults to:

```text
POWERCHAIN_DATA_MODE=mock
POWERCHAIN_WRITE_MODE=simulated
POWERCHAIN_INFRA_REQUIRED=false
```

Database-backed API operations will still require a reachable PostgreSQL instance.

### 2. Full local stack — Docker Compose or Podman Compose

```bash
nvm use 24.19.0
corepack enable
corepack prepare pnpm@11.22.0 --activate

pnpm env:init
pnpm install
pnpm stack:up
pnpm stack:wait
pnpm db:push
pnpm db:seed
pnpm dev
```

`stack:up` is intentionally optional. If neither Docker Compose nor Podman Compose is installed, use mode 1 or mode 3 instead of repeatedly running `stack:up`.

### 3. Native or managed PostgreSQL / Redis

Set real reachable endpoints in `.env.local`:

```env
DATABASE_URL=postgresql://USER:PASSWORD@HOST:5432/DATABASE?schema=public
REDIS_URL=redis://HOST:6379
```

Then:

```bash
pnpm infra:check
pnpm stack:wait
pnpm db:validate
pnpm db:generate
pnpm db:push
pnpm db:seed
pnpm dev
```

## First-run verification

Before diagnosing application code, verify the toolchain and repository shape:

```bash
node --version        # v24.19.0
pnpm --version        # 11.22.0
pnpm run doctor:project
pnpm prisma:schema:check
pnpm workspace:check
pnpm config:check
pnpm routes:check
pnpm skills:check
pnpm readmes:check
```

Corepack honors the root `packageManager` field, which is pinned to `pnpm@11.22.0`. If `pnpm --version` reports another version, verify you are running commands from this repository root and rerun the Corepack commands above.

## Environment files

The repository includes both:

```text
.env.example
env/development.env.example
env/test.env.example
env/production.env.example
```

Initialize local configuration with:

```bash
pnpm env:init
```

`env:init` writes `.env.local` without overwriting an existing file. If a checkout accidentally omits the root dotfile, the script falls back to `env/development.env.example` and tells you that the checkout should be repaired.

Never commit `.env.local`, service-role credentials, wallet private keys, KYC secrets, signing keys, or provider server keys.

See [`env/README.md`](env/README.md).

## Applications

| App | Package | Port | Responsibility |
|---|---|---:|---|
| Website | `@powerchain/web` | 3000 | Marketing, product navigation and authentication entry |
| Crowdfunding | `@powerchain/crowdfunding` | 3001 | Discover, campaign detail and campaign creation |
| Donate | `@powerchain/donate` | 3002 | Supporter contribution experience |
| Checkout | `@powerchain/checkout` | 3003 | Payment review, wallet/provider handoff and settlement status |
| Dashboard | `@powerchain/dashboard` | 3004 | Founder/organizer workspace, company profile, invoices, milestones and evidence |
| Treasury | `@powerchain/treasury-app` | 3005 | Escrow, Safe, tranche approvals and disbursements |
| Admin | `@powerchain/admin` | 3006 | Identity, moderation, policy and platform operations |
| Explorer | `@powerchain/explorer` | 3007 | Public transaction/campaign transparency views |
| Docs | `@powerchain/docs-app` | 3008 | Product and developer documentation |
| Field PWA | `@powerchain/pwa` | 3009 | Offline field evidence and milestone workflows |
| API | `@powerchain/api` | 3010 | Canonical `/api/v1` backend boundary |

See [`apps/README.md`](apps/README.md) and [`apps/api/README.md`](apps/api/README.md).

## Workspace architecture

```text
apps/          deployable Next.js applications
packages/      shared UI, domain, data, auth, SDK and infrastructure libraries
services/      background/provider service boundaries
programs/      Solana/Sui program source and deployment contracts
contracts/     EVM/Safe integration surfaces
skills/        policy-constrained agent/assistant skills
config/        canonical TypeScript, Next.js, security and runtime config
env/           environment templates and guidance
infra/         optional local PostgreSQL/Redis stack
prisma/        canonical Prisma schema + seed
migrations/    reviewed database migrations
supabase/      RLS/security migrations and verification helpers
docs/          architecture, product and operational documentation
```

Detailed indexes: [`packages/README.md`](packages/README.md), [`services/README.md`](services/README.md), [`skills/README.md`](skills/README.md), [`programs/README.md`](programs/README.md).

### Canonical shared boundaries

- `@powerchain/constants` — campaign, money, realtime, security, route and blockchain constants.
- `@powerchain/contracts` — fail-closed Solana/EVM/Safe deployment metadata and verification helpers.
- `@powerchain/common` — browser/server-neutral IDs, money, dates, URLs, result and error utilities.

Root `constants/`, `contracts/`, and `common/` are compatibility/documentation surfaces; new runtime code should use the workspace packages. See [`docs/CONSTANTS-CONTRACTS-COMMON.md`](docs/CONSTANTS-CONTRACTS-COMMON.md).

## Core product capabilities

PowerChain v1.0.0 includes founder/company profiles, company logos and social links, verified identity/business checks, campaign discovery, tranche-derived funding goals, investor interest/offers, deal rooms, milestone proof, e-signature boundaries, escrow/tranche release policy, transparent fees, invoices, watchlists, realtime activity, notifications, moderation, append-only audit, bilingual/RTL infrastructure, and Web3 token/network/wallet icon primitives.

The crowdfunding engine exposes goal-based contribution, success withdrawal, pull refund and proof-gated milestone concepts. On-chain implementations remain deployment- and audit-gated; the repository must never infer a successful blockchain write from a UI click or unsigned request.

## Financial invariants

```text
QR scan                 != settled payment
Provider order          != reconciled contribution
Funding threshold       != releasable funds
Evidence upload         != approved milestone
Approval                != executed transfer
Wallet submission       != finalized transaction
Company profile edit    != historical invoice edit
```

Campaign totals change from verified, reconciled events. Evidence gates, treasury policy, signer thresholds, execution, and reconciliation remain separate states.

## Payment and settlement rails

```text
Bank EUR → SEPA / SEPA Instant → Monerium → EURe → EVM campaign Safe
USDC     → Wallet / Solana flow → Solana / Sui / EVM → optional CCTP routing
```

USDC and EURe are modeled as separate issuer/settlement rails. Safe is an EVM smart-account treasury primitive. Sensitive user/KYC data is not written to public chains by default.

## Database and Prisma

Prisma CLI and Client are pinned together at `6.19.3`. Installation validates the schema before generation and disables Prisma dependency auto-install during postinstall.

```bash
pnpm prisma:schema:check
pnpm db:validate
pnpm db:generate
```

Only run `db:push`, migrations, or seeds against a database you intend to modify. Production should use reviewed migrations and deployment workflows rather than destructive development commands.

See [`docs/PRISMA.md`](docs/PRISMA.md).

## Infrastructure and health

Optional local infrastructure is defined in `infra/docker-compose.yml` with PostgreSQL and Redis.

Operational endpoints include:

```text
GET /api/v1/health
GET /api/v1/health/live
GET /api/v1/health/ready
GET /api/v1/system
GET /api/v1/system/services
GET /api/v1/system/endpoints
GET /api/v1/system/contracts
```

`live` answers whether the API process is running. `ready` may depend on PostgreSQL/Redis and should not be treated as equivalent to liveness.

See [`infra/README.md`](infra/README.md) and [`docs/INFRA-SERVICES-ENDPOINTS.md`](docs/INFRA-SERVICES-ENDPOINTS.md).

## UI and design system

The shared UI uses white, light gray, black, and dark green with light/dark/system themes and no blue application chrome. Shared primitives include typography, buttons, forms, cards, progress/countdown/counter components, icons, Web3 icons, modals, transaction review, notifications, campaign cards, invoice surfaces, and treasury states.

See [`docs/UI-UX.md`](docs/UI-UX.md), [`docs/COLOR-ICONS.md`](docs/COLOR-ICONS.md), and [`docs/WEB3-ICONS.md`](docs/WEB3-ICONS.md).

## Security model

Security is enforced at multiple boundaries:

- httpOnly server sessions and organization membership checks
- PostgreSQL/Supabase RLS for browser-accessible tables
- protected-column guards for authority/verification/escrow fields
- append-only/hash-linked audit contracts
- idempotency for financial writes and webhooks
- server-only provider secrets
- wallet-signature boundaries for blockchain writes
- evidence/KYC originals kept in private storage with public commitments where appropriate
- moderation and verification state controlled by authorized server workflows

A schema or migration being present is not proof that a production deployment has passed security verification. Use the production verification harness against the target environment.

## Common troubleshooting

### `pnpm env:init` says `.env.example` is missing

The upgraded script also checks `env/development.env.example`. If both are missing, the repository extraction/checkout is incomplete. From the repository root:

```bash
pwd
ls -la .env.example env/development.env.example
```

Re-extract the complete archive or restore those files; do not invent production secrets from memory.

### `docker: command not found` or no Compose runtime

Docker is optional. Do **not** run `stack:up` unless Docker Compose or Podman Compose is installed. Use mock/simulated mode, native PostgreSQL/Redis, or managed endpoints instead.

```bash
pnpm infra:check
pnpm dev
```

### Next.js starts and then reports missing `app`, `.next/dev`, or `next/package.json`

Stop all running development processes first. These messages indicate that the live checkout or dependency tree changed after Next.js started. The current `pnpm dev` supervisor checks the source tree and app-local Next.js links before launch and watches them while the apps are running.

```bash
pnpm source:check
pnpm next:check
pnpm clean
pnpm dev
```

Do not extract a replacement archive, delete workspace folders, run `pnpm clean:deps`, or reinstall dependencies in the same checkout while `pnpm dev` is active. See [`docs/DEV-STABILITY.md`](docs/DEV-STABILITY.md).

### `stack:wait` is waiting for `127.0.0.1:5432`

That means `.env.local` points to local PostgreSQL but nothing is listening yet. Start PostgreSQL (and Redis if required), install a container runtime and run `stack:up`, or change the URLs to reachable managed services.

Do not proceed to `db:push`/`db:seed` until the intended database is reachable.

### Prisma generation fails during `pnpm install`

Run:

```bash
pnpm prisma:schema:check
```

The repository expects Prisma CLI and `@prisma/client` `6.19.3` to stay aligned. Postinstall must generate the client; it must not recursively install dependencies.

### VS Code cannot find `node` or `react` types

```bash
pnpm install
pnpm config:check
pnpm workspace:check
```

Then select **TypeScript: Use Workspace Version** and restart the TypeScript server. Canonical profiles live under `config/typescript/`.

## Validation

Use the full repository contract before merging or deploying:

```bash
pnpm validate
pnpm typecheck
pnpm lint
pnpm build
```

`pnpm validate` covers version lock, runtime, workspace dependency integrity, TypeScript/Next configuration, route collisions, skills, README coverage, structure, crowdfunding engine, SaaS wiring, Web3 icon policy, and conformance checks.

## Documentation

Start with [`docs/README.md`](docs/README.md). Important operational documents include:

- [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md)
- [`docs/API-V1.md`](docs/API-V1.md)
- [`docs/CROWDFUNDING-ENGINE.md`](docs/CROWDFUNDING-ENGINE.md)
- [`docs/DATA-SECURITY-RLS.md`](docs/DATA-SECURITY-RLS.md)
- [`docs/ESCROW-TRANCHES.md`](docs/ESCROW-TRANCHES.md)
- [`docs/IDENTITY-TRUST.md`](docs/IDENTITY-TRUST.md)
- [`docs/AGREEMENTS-ESIGN.md`](docs/AGREEMENTS-ESIGN.md)
- [`docs/COMPANY-INVOICES.md`](docs/COMPANY-INVOICES.md)
- [`docs/INFRA-SERVICES-ENDPOINTS.md`](docs/INFRA-SERVICES-ENDPOINTS.md)
- [`docs/PNPM.md`](docs/PNPM.md)
- [`docs/PRISMA.md`](docs/PRISMA.md)
- [`docs/DEV-STABILITY.md`](docs/DEV-STABILITY.md)
- [`docs/CONSTANTS-CONTRACTS-COMMON.md`](docs/CONSTANTS-CONTRACTS-COMMON.md)

## Version policy

PowerChain remains **v1.0.0** while the v1 architecture is hardened. Workspace package versions, UI version labels and API health metadata remain `1.0.0`, and the HTTP API remains `/api/v1`. Improvements inside this release do not imply a v2 API or product version.

Run:

```bash
pnpm version:check
```

See [`docs/VERSIONING.md`](docs/VERSIONING.md).

## Workspace recovery and integrity

The repository treats the 11 Next.js application source trees as immutable inputs while development servers are running. If a checkout is incomplete, do not start `pnpm dev` and do not create empty `app/` directories to silence Next.js.

```bash
corepack enable
corepack prepare pnpm@11.22.0 --activate
pnpm install
pnpm workspace:inventory
pnpm repair:workspace
pnpm setup:check
pnpm dev
```

`pnpm repair:workspace` can safely recreate generated app configuration (`next.config.mjs`, `tsconfig.json`, `next-env.d.ts`, PostCSS config) and restore `.env.example` from the tracked development template. It deliberately refuses to fabricate missing application source. If an `apps/<name>/app` tree is missing, restore it from Git or the canonical archive.

The canonical toolchain is Node `24.19.0`, pnpm `11.22.0`, Next.js `16.3.1`, and Turborepo `2.10.11`.
