# Infrastructure, services, skills, modals and API boundaries

PowerChain v1.0.0 keeps infrastructure and privileged provider integrations server-side while exposing deterministic UI/API contracts.

## Installation invariant

The root workspace declares both `prisma@6.19.3` and `@prisma/client@6.19.3`. Prisma generation runs with `PRISMA_GENERATE_SKIP_AUTOINSTALL=1`; postinstall is not allowed to mutate dependencies or recursively invoke `pnpm add`. `@powerchain/database` also declares the same client version for runtime imports.

## Infrastructure

`infra/docker-compose.yml` provides PostgreSQL and Redis with health checks, named volumes and an isolated local network. `pnpm stack:wait` blocks until both sockets are reachable. API liveness and readiness are separate so an orchestrator can distinguish a running process from a process that cannot reach critical dependencies.

## Services

`@powerchain/service-registry` is the canonical inventory for agreements, audit, banking, capital, deal room, identity, indexer, moderation, notifications, realtime, reconciliation, security, webhooks and workers. Runtime service implementations remain server-only.

## Skills

`skills/registry.json` and each `SKILL.md` define allowed scopes, required inputs, output contracts and forbidden actions. Skills cannot sign, forge verification, fabricate settlement, bypass RLS/policies, release escrow, or rewrite audit history.

## Modals

`@powerchain/ui/modals` contains the shared modal, confirmation modal and transaction-review modal. The modal layer supports Escape/backdrop dismissal, scroll locking, responsive sizing, dark/light themes and accessible dialog semantics. Transaction review is explicitly pre-signing; wallet authorization remains external.

## API

All campaign dynamic routes use `:campaignId`; mixed `[id]` / `[campaignId]` aliases were removed. `pnpm routes:check` detects route-shape conflicts. Additional operational endpoints:

- `GET /api/v1/health/live`
- `GET /api/v1/health/ready`
- `GET /api/v1/system/services`
- `GET /api/v1/system/endpoints`

Readiness may return HTTP 503 when PostgreSQL/Redis dependencies are unavailable. It must never report a financial provider or settlement as healthy merely because the API process is alive.

## Environment bootstrap and Docker-optional development

The repository now includes a root `.env.example` and environment-specific templates under `env/`. Run `pnpm env:init` once to create `.env.local`; existing local values are never overwritten unless `pnpm env:reset` is used deliberately.

Docker is **not** required for `pnpm dev`. PostgreSQL and Redis may come from Docker/Podman, native local services, or managed endpoints. `pnpm stack:up` detects Docker Compose first and Podman Compose second. When neither exists it exits with a targeted explanation rather than a shell-level `docker: command not found` error.

`pnpm stack:wait` loads `.env.local`, derives host/port from `DATABASE_URL` and `REDIS_URL`, and gives an actionable timeout instead of silently waiting on hard-coded localhost services.

Recommended paths:

```bash
# UI/API development in mock/simulated mode; no container runtime required
pnpm env:init
pnpm dev

# Full local infrastructure when Docker/Podman is available
pnpm env:init
pnpm stack:up
pnpm stack:wait
pnpm db:generate
pnpm dev

# Managed/native PostgreSQL + Redis
pnpm env:init
# edit DATABASE_URL and REDIS_URL in .env.local
pnpm infra:check
pnpm stack:wait
pnpm dev
```
