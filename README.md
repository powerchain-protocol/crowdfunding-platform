# PowerChain Crowdfunding Platform

**Canonical release:** `1.0.0`  
**Node.js:** `24.19.0`  
**pnpm:** `11.22.0` via Corepack  
**Next.js:** `16.3.1`  
**PostCSS:** `8.5.23`  
**API:** `/api/v1`

PowerChain is a full-stack crowdfunding and capital-coordination platform for goal-based campaigns, humanitarian/disaster response, renewables, milestone escrow, verified founder listings, investor collaboration, evidence-gated releases, invoicing, treasury operations, and public transparency.

Financial state is fail-closed and reconciliation-first:

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
Audit + Transparency
```

## Start here

Run commands from the repository root. The copy/paste blocks intentionally contain no shell comments.

```bash
nvm use 24.19.0
corepack enable
corepack prepare pnpm@11.22.0 --activate
node --version
pnpm --version
pnpm setup:repair
pnpm install
pnpm setup:check
pnpm dev
```

Expected versions:

```text
Node.js  v24.19.0
pnpm     11.22.0
```

`setup:repair` only restores safe generated/configuration files from tracked templates and creates `.env.local` if needed. It does not invent missing application source.

For the complete first-run guide, see [`docs/GETTING-STARTED.md`](docs/GETTING-STARTED.md).

## Development modes

### UI / mock mode

No Docker, PostgreSQL, or Redis is required for UI work and simulated flows.

```bash
pnpm env:init
pnpm dev
```

The default development posture is:

```text
POWERCHAIN_DATA_MODE=mock
POWERCHAIN_WRITE_MODE=simulated
POWERCHAIN_INFRA_REQUIRED=false
PAYMENTS_MODE=demo
```

### Full local infrastructure

Docker Compose or Podman Compose is optional but supported.

```bash
pnpm docker:check
pnpm stack:pull
pnpm stack:up
pnpm stack:wait
pnpm db:push
pnpm db:seed
pnpm dev
```

If no container runtime exists, use native or managed PostgreSQL/Redis and configure `.env.local` instead. See [`infra/README.md`](infra/README.md).

## Repository recovery

Some archive/copy tools omit root dotfiles. PowerChain keeps non-hidden canonical templates so those files can be restored safely.

```bash
pnpm repair:repository
pnpm repair:workspace
pnpm env:init
```

`repair:repository` can restore `.env.example`, `.dockerignore`, `.npmignore`, `.gitignore`, `.npmrc`, `.nvmrc`, `.node-version`, and `.prettierignore` when they are absent. `repair:workspace` restores generated Next.js/TypeScript config files but deliberately refuses to invent a missing `apps/*/app` source tree.

If a stale lockfile contains a dependency blocked by the strict maturity policy, use:

```bash
node scripts/repair-supply-chain.mjs
pnpm install
```

Do not disable the supply-chain policy merely to install a newly published dependency. See [`docs/SUPPLY-CHAIN-POLICY.md`](docs/SUPPLY-CHAIN-POLICY.md).

## Quality gates

Use these before development or a pull request:

```bash
pnpm setup:check
pnpm build:check
pnpm typecheck
```

Use this for the full production verification path:

```bash
pnpm build:verified
```

Important focused checks:

```bash
pnpm workspace:check
pnpm config:check
pnpm env:check
pnpm source:check
pnpm next:check
pnpm routes:check
pnpm prisma:schema:check
pnpm supply-chain:check
pnpm postcss:check
pnpm shadcn:check
pnpm ui:check
pnpm readmes:check
```

Do not run dependency installation, cleanup, or a production build while `pnpm dev` is active. The repository guards these operations to prevent `node_modules`, `.next`, or live app directories from being reorganized beneath Next.js.

## Applications

| App | Package | Port | Responsibility |
|---|---|---:|---|
| Website | `@powerchain/web` | 3000 | Marketing and authentication entry |
| Crowdfunding | `@powerchain/crowdfunding` | 3001 | Discovery, project detail, campaign creation |
| Donate | `@powerchain/donate` | 3002 | Contribution experience |
| Checkout | `@powerchain/checkout` | 3003 | Payment/wallet review and settlement status |
| Dashboard | `@powerchain/dashboard` | 3004 | Founder/organizer workspace |
| Treasury | `@powerchain/treasury-app` | 3005 | Escrow, tranches, approvals, disbursements |
| Admin | `@powerchain/admin` | 3006 | Identity, moderation, policy, audit |
| Explorer | `@powerchain/explorer` | 3007 | Public transparency views |
| Docs | `@powerchain/docs-app` | 3008 | Product/developer documentation app |
| PWA | `@powerchain/pwa` | 3009 | Offline/field workflows |
| API | `@powerchain/api` | 3010 | Canonical `/api/v1` backend |

See [`apps/README.md`](apps/README.md).

## Workspace layout

```text
apps/          deployable Next.js applications
packages/      shared UI, domain, data, auth, SDK and infrastructure libraries
services/      provider-facing/background service boundaries
programs/      Solana/Sui program source and deployment contracts
contracts/     EVM/Safe integration surfaces
skills/        policy-constrained assistant skills
config/        canonical runtime, TypeScript, Next.js, security and repair templates
env/           environment templates and operator guidance
infra/         optional PostgreSQL/Redis container stack
prisma/        canonical Prisma schema and seed
supabase/      RLS/security migrations and verification helpers
docs/          product, architecture and operational documentation
```

Canonical shared boundaries:

- `@powerchain/common` — runtime-safe utilities and exact domain helpers.
- `@powerchain/constants` — shared campaign, money, route, security and blockchain constants.
- `@powerchain/contracts` — fail-closed deployment references and verification helpers.
- `@powerchain/config` — runtime/environment configuration and Solana RPC resolution.
- `@powerchain/ui` — shared Tailwind v4/shadcn UI, icons, themes, modals and Web3 primitives.

See [`packages/README.md`](packages/README.md), [`services/README.md`](services/README.md), and [`config/README.md`](config/README.md).

## Core invariants

```text
QR scan              != settled payment
Provider order       != reconciled contribution
Funding threshold    != releasable funds
Evidence upload      != approved milestone
Approval             != executed transfer
Wallet submission    != finalized transaction
Profile edit         != historical invoice edit
```

Campaign totals advance from authoritative settlement/reconciliation events. Milestone proof, approval, treasury policy, signer thresholds, execution, and reconciliation remain separate states.

## Environment and secrets

Initialize local configuration with:

```bash
pnpm env:init
```

The repository contains `.env.example` plus focused templates under `env/`. Only `NEXT_PUBLIC_*` values may be bundled into browsers. Database credentials, service-role keys, Helius API keys, wallet private keys, signer files, KYC documents, provider secrets, and treasury authority material remain server-side and untracked.

See [`env/README.md`](env/README.md), [`docs/SOLANA-SUPABASE-ENV.md`](docs/SOLANA-SUPABASE-ENV.md), and [`docs/DOCKER-SECURITY.md`](docs/DOCKER-SECURITY.md).

## Database and Prisma

Prisma CLI and Client are pinned to `6.19.3`.

```bash
pnpm prisma:schema:check
pnpm db:validate
pnpm db:generate
```

`db:push`, migrations, and seed commands require a reachable PostgreSQL database. They fail before mutation when `DATABASE_URL` is missing or unreachable.

See [`docs/PRISMA.md`](docs/PRISMA.md).

## UI system

The shared UI uses Tailwind CSS v4, PostCSS `8.5.23`, shadcn-compatible primitives, Web3 Icons, light/dark/system themes, RTL support, and the PowerChain palette: white, light gray, black, and dark green with no blue application chrome.

Canonical global styles live at:

```text
packages/ui/src/styles/globals.css
```

See [`docs/SHARED-UI.md`](docs/SHARED-UI.md), [`docs/SHADCN.md`](docs/SHADCN.md), and [`docs/UI-UX.md`](docs/UI-UX.md).

## Security and blockchain posture

On-chain IDs in configuration are public deployment references, not signing keys. A configured program ID is not treated as a verified deployment until the corresponding `*_VERIFIED` flag is set after target-network verification. Sensitive provider and wallet secrets never belong in tracked environment templates.

The application must never convert transaction preparation or submission into a success state without authoritative confirmation and reconciliation.

See [`docs/SECURITY.md`](docs/SECURITY.md), [`docs/DATA-SECURITY-RLS.md`](docs/DATA-SECURITY-RLS.md), and [`programs/README.md`](programs/README.md).

## Documentation

Start with [`docs/README.md`](docs/README.md). Operator-focused guides:

- [`docs/GETTING-STARTED.md`](docs/GETTING-STARTED.md)
- [`docs/TROUBLESHOOTING.md`](docs/TROUBLESHOOTING.md)
- [`docs/PNPM.md`](docs/PNPM.md)
- [`docs/BUILD-RELIABILITY.md`](docs/BUILD-RELIABILITY.md)
- [`docs/WORKSPACE-RECOVERY.md`](docs/WORKSPACE-RECOVERY.md)
- [`docs/SUPPLY-CHAIN-POLICY.md`](docs/SUPPLY-CHAIN-POLICY.md)
- [`infra/README.md`](infra/README.md)
- [`env/README.md`](env/README.md)

PowerChain remains on canonical version **`1.0.0`**. Architecture and implementation can improve without changing the product version unless an explicit release decision changes it.
## Website access & wallet UX

The public header separates **Sign in** (authenticated platform session) from **Wallet sign in** (client wallet connection). Wallet connect opens a shared Phantom/Solflare/Backpack modal and redirects to the dashboard after connection. Dashboard headers show `Connected` plus a shortened public wallet address and provide Disconnect, which clears the wallet session and returns to the website home page. Wallet connection never grants server roles or verification status. See `docs/WALLET-ACCESS-UX.md`.


## Wallet, network and display-currency runtime

The shared application header now exposes a persisted **Solana network mode** (`devnet` / `mainnet-beta`) and **display currency** selector with `USD` as the default. These are presentation/runtime preferences only; transaction review still binds the exact network and program before wallet approval.

Read-only wallet data is served through `/api/v1/wallets/:address`, with server-side RPC selection/fallback. Trusted wallets, user preferences and operator profiles are persisted through first-party API boundaries and Prisma models. Embedded wallets use a provider adapter and remain disabled until a hosted provider is configured; PowerChain never receives seed phrases or private keys through that adapter.

See `docs/BLOCKCHAIN-WALLET-RUNTIME.md` and `prisma/migrations/README.md`.


## Creator auth, wallet & capital pots

- Google primary sign-in, X, email/password and separate Solana wallet connection.
- Explicit 27-day remember-me opt-in; raw IP is not retained by that feature.
- `SEED_DEMO_USERS=true` creates local-only fixtures; production seeding is blocked.
- User settings: profile, sessions, connections, custom Solana RPC, encrypted Helius key, privacy and account deletion.
- Stripe Checkout capital pots settle only after signed webhook confirmation and double-entry ledger posting.
- X creator tips are self-reported ledger records plus an external X profile deep-link, never authoritative settlement.
- See `docs/CREATOR-CAPITAL-AUTH-WALLET.md` and Docs → Get Started.
