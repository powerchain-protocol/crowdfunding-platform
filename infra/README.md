# Local infrastructure

PowerChain's optional bundled development infrastructure contains PostgreSQL 17 and Redis 7. The Compose file provides health checks, persistent volumes, restart behavior, and an isolated development network.

## Docker/Podman path

```bash
pnpm env:init
pnpm stack:up
pnpm stack:wait
pnpm db:push
pnpm db:seed
pnpm dev
```

`stack:up` detects Docker Compose first and Podman Compose second. If neither is installed it exits with an actionable message; this is not a pnpm or application failure.

## No container runtime

You can still run the UI/mock development stack:

```bash
pnpm env:init
pnpm dev
```

For database-backed routes, run native PostgreSQL/Redis or configure managed services in `.env.local`, then:

```bash
pnpm infra:check
pnpm stack:wait
pnpm db:validate
pnpm db:generate
```

## Readiness semantics

`pnpm stack:wait` checks that configured PostgreSQL/Redis TCP endpoints are reachable. It does not install Docker, start native services, create databases, or validate application-level credentials.

The API exposes separate operational signals:

```text
GET /api/v1/health/live   process liveness
GET /api/v1/health/ready  dependency readiness
```

A service can be live while not ready.

## Database changes

`pnpm db:push` is a development convenience. Production database changes should use reviewed migrations and deployment-specific controls. Never run destructive development schema operations against production.

## Corepack and `pnpm doctor`

The repository pins Node.js `24.19.0` and pnpm `11.22.0`. Corepack owns pnpm selection. `pnpm doctor` is pnpm's own diagnostic command; use `pnpm run doctor:project` for PowerChain-specific runtime/workspace checks.

A warning that the global pnpm bin directory is not in `PATH` does not prevent workspace-local scripts from running through Corepack.
