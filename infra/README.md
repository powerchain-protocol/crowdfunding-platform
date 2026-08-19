# Local infrastructure

PowerChain includes Docker/Podman definitions for PostgreSQL 17, Redis 7, and an optional development workspace container. The repository cannot install a container runtime on the host.

## Check the runtime

```bash
pnpm docker:check
```

If no container runtime exists, `pnpm dev` can still run in mock/simulated mode.

## Start PostgreSQL and Redis

```bash
pnpm env:init
pnpm stack:pull
pnpm stack:up
pnpm stack:wait
```

After the database is reachable:

```bash
pnpm db:push
pnpm db:seed
pnpm dev
```

## Native or managed infrastructure

Configure reachable `DATABASE_URL` and `REDIS_URL` values in `.env.local`, then run:

```bash
pnpm infra:check
pnpm stack:wait
pnpm db:validate
pnpm db:generate
pnpm dev
```

## Security defaults

The Compose stack uses loopback-only host bindings, PostgreSQL SCRAM authentication, password-protected Redis, `no-new-privileges`, health-gated dependencies, persistent volumes, and ignored runtime secrets. Development placeholder passwords must not be reused on shared or production hosts.

## Fully containerized development

```bash
pnpm env:init
pnpm stack:app
```

The app profile builds `infra/Dockerfile.dev`, waits for healthy dependencies, and runs the PowerChain app supervisor.

## Production image

The root `Dockerfile` builds one selected Next.js app. Production should inject secrets at runtime, terminate TLS at an appropriate boundary, and use reviewed migrations rather than development `db:push` workflows.

See [`../docs/DOCKER-SECURITY.md`](../docs/DOCKER-SECURITY.md) and [`../docs/GETTING-STARTED.md`](../docs/GETTING-STARTED.md).
