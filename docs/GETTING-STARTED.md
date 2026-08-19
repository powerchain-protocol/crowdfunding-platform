# Getting Started

This is the canonical local-development sequence for PowerChain Crowdfunding v1.0.0.

## Requirements

- Node.js `24.19.0`
- Corepack enabled
- pnpm `11.22.0`
- Optional: Docker Desktop/Engine or Podman for PostgreSQL + Redis

## Clean first run

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

`setup:repair` restores safe generated/root configuration from tracked templates and creates `.env.local`. It will not fabricate missing application source.

## UI-only development

The default environment uses mock data and simulated writes. No database or container runtime is required to render applications and work on UI flows.

```bash
pnpm env:init
pnpm dev
```

## Database-backed development

With Docker or Podman:

```bash
pnpm docker:check
pnpm stack:pull
pnpm stack:up
pnpm stack:wait
pnpm db:push
pnpm db:seed
pnpm dev
```

With native or managed PostgreSQL/Redis, configure `DATABASE_URL` and `REDIS_URL` in `.env.local`, then run:

```bash
pnpm infra:check
pnpm stack:wait
pnpm db:validate
pnpm db:generate
pnpm db:push
pnpm db:seed
pnpm dev
```

## Before a production build

Stop every dev process first.

```bash
pnpm setup:check
pnpm build:check
pnpm typecheck
pnpm build:verified
```

## If installation is blocked by dependency maturity policy

Do not relax the policy. If the lockfile was generated with a newly published package that the policy rejects, repair the stale lockfile and install again:

```bash
node scripts/repair-supply-chain.mjs
pnpm install
pnpm supply-chain:check
```

## If dotfiles are missing

```bash
pnpm repair:repository
pnpm config:check
```

The repair script restores only safe canonical files from `config/repository/templates/`.

## If app configuration is missing

```bash
pnpm repair:workspace
pnpm source:check
pnpm next:check
```

If an actual `apps/<name>/app` directory is missing, restore the source tree from Git or the canonical archive. The repair command intentionally refuses to create fake application source.
