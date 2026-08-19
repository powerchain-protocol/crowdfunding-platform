# Build & Development Reliability

PowerChain Crowdfunding remains on canonical product version `1.0.0`.

## Canonical toolchain

- Node.js `24.19.0`
- pnpm `11.22.0`
- Next.js `16.3.1`
- React / React DOM `19.2.8`
- TypeScript `6.0.3`
- PostCSS `8.5.23`
- Tailwind CSS `4.3.3`
- Prisma `6.19.3`
- Turborepo `2.10.10`

The repository intentionally uses exact runtime/tooling versions to reduce cross-machine drift.

## Safe development workflow

```bash
nvm use 24.19.0
corepack enable
corepack prepare pnpm@11.22.0 --activate

pnpm install
pnpm setup:check
pnpm build:check
pnpm dev
```

Do not run `pnpm install`, `pnpm clean`, dependency upgrades, or file-replacement scripts while `pnpm dev` is active. The dev supervisor writes `.powerchain-dev.pid`; install/build/clean guards use it to stop operations that can invalidate a running Next.js process.

## Build checks

`pnpm build:check` verifies the build surface before invoking Next.js:

- all 11 application source trees and required files exist;
- application scripts, ports, Next.js/React versions and canonical configs are consistent;
- relative imports resolve;
- `@powerchain/*` imports refer to real workspace packages;
- imported workspace subpaths are exported by their package;
- workspace dependencies are declared by the importing package;
- dynamic App Router params use the asynchronous Next.js signature;
- all applications import the shared global stylesheet;
- API dynamic route aliases do not collide;
- shadcn, PostCSS and shared UI configuration are valid.

For CI:

```bash
pnpm ci:check
```

For the strict preflight + production build:

```bash
pnpm build:verified
```

`build:verified` runs validation and typechecking before `turbo build`.

## Database is a separate readiness boundary

A successful application build does not imply that PostgreSQL or Redis is running. Commands that mutate the database remain guarded and require a reachable `DATABASE_URL`.

```bash
pnpm infra:check
pnpm db:validate
pnpm db:push
pnpm db:seed
```

If Docker/Podman is not installed, use native or managed PostgreSQL/Redis and configure `.env.local` accordingly.

## Fail-closed financial integrations

Build success also does not mark blockchain/provider adapters as deployed or verified. Solana program deployment flags, Helius credentials, Supabase server credentials, KYC, e-signature, settlement and treasury integrations remain explicit runtime configuration boundaries.
