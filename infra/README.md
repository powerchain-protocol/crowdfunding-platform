# Local infrastructure

PowerChain includes Docker/Podman definitions for PostgreSQL 17, Redis 7, and an optional containerized development workspace. **The repository can provide Docker configuration, but it cannot install the Docker daemon on the host.** On macOS, install and start Docker Desktop (or Podman Desktop) before using `stack:*` commands.

## Check the host runtime

```bash
pnpm docker:check
```

If this reports no container runtime, `pnpm dev` can still run in mock/simulated mode. Database-backed routes need reachable PostgreSQL/Redis services.

## Infrastructure only

```bash
pnpm env:init
pnpm stack:pull
pnpm stack:up
pnpm stack:wait
pnpm db:push
pnpm db:seed
pnpm dev
```

`stack:up` starts only PostgreSQL and Redis. Their host ports are bound to `127.0.0.1` by default, so they are not exposed to the LAN.

## Fully containerized development

```bash
pnpm env:init
pnpm stack:app
```

The `app` Compose profile builds `infra/Dockerfile.dev`, waits for healthy PostgreSQL/Redis, bind-mounts the repository, installs with pnpm `11.22.0`, and starts the PowerChain application supervisor. Ports `3000`–`3010` remain loopback-only.

## Security defaults

The development Compose stack uses:

- loopback-only host bindings (`127.0.0.1`);
- PostgreSQL SCRAM password authentication;
- password-protected Redis;
- `no-new-privileges` container security option;
- health-gated service dependencies;
- persistent named volumes rather than repository-local data directories;
- no provider/API secrets baked into images;
- `.dockerignore` rules for environment files, wallet signer material, keys, build output, and local databases.

The committed passwords are development placeholders only. Change them before sharing a development host. Production uses managed secrets and reviewed deployment configuration; do not reuse the local Compose credentials.

## No container runtime

Use native or managed PostgreSQL/Redis:

```bash
pnpm env:init
# edit .env.local and set reachable DATABASE_URL + REDIS_URL
pnpm infra:check
pnpm stack:wait
pnpm db:validate
pnpm db:generate
pnpm dev
```

## Readiness semantics

`pnpm stack:wait` checks configured PostgreSQL/Redis TCP reachability. It does not install Docker, create a managed database, or validate external provider credentials.

The API exposes separate operational signals:

```text
GET /api/v1/health/live
GET /api/v1/health/ready
```

A process can be live while not ready.

## Production image

The root `Dockerfile` builds one selected Next.js application:

```bash
docker build \
  --build-arg POWERCHAIN_APP=@powerchain/web \
  --build-arg PORT=3000 \
  -t powerchain-web:1.0.0 .

docker run --rm -p 127.0.0.1:3000:3000 powerchain-web:1.0.0
```

Production deployments should inject secrets at runtime, run behind TLS/reverse proxying, and use reviewed migrations (`pnpm db:migrate:deploy`) rather than `db:push`.
