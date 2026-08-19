# Environment configuration

PowerChain uses checked-in templates and ignored runtime values. The templates are safe defaults for development; real credentials must remain in `.env.local`, deployment secret stores, or provider-managed secrets.

## Files

```text
.env.example                    canonical local template
env/development.env.example    development fallback/template
env/test.env.example           test template
env/production.env.example     production variable inventory only
.env.local                      local runtime values; ignored by git
```

## Initialize

From the repository root:

```bash
pnpm env:init
```

The command creates `.env.local` without overwriting an existing file. `pnpm env:reset` deliberately recreates it.

If `.env.example` is absent, `env:init` falls back to `env/development.env.example` and warns that the checkout should be repaired. If both templates are missing, initialization fails because guessing credentials or infrastructure settings is unsafe.

## Environment selection

PowerChain Node scripts load `.env.local` first, then `.env`. A custom file can be selected with:

```bash
POWERCHAIN_ENV_FILE=/absolute/or/repo-relative/path.env pnpm infra:check
```

Next.js reads `.env.local` automatically. Prisma wrappers and infrastructure scripts load the same local configuration so command-line behavior matches the applications.

## Default development posture

```env
POWERCHAIN_DATA_MODE=mock
POWERCHAIN_WRITE_MODE=simulated
POWERCHAIN_INFRA_REQUIRED=false
PAYMENTS_MODE=demo
```

This keeps provider and financial writes fail-closed/simulated until real infrastructure is configured.

## Public vs server-only values

Only variables prefixed with `NEXT_PUBLIC_` are intended for browser bundles. Never expose database credentials, service-role keys, provider server keys, KYC secrets, session secrets, wallet private keys, signing keys, or treasury authority material through public variables.

## Database/Redis modes

Docker is optional. Choose one source for PostgreSQL/Redis:

1. Docker Compose or Podman Compose via `pnpm stack:up`.
2. Native local PostgreSQL/Redis.
3. Managed endpoints configured in `.env.local`.

Validate configuration with:

```bash
pnpm infra:check
pnpm stack:wait
```

`stack:wait` checks reachability. It does not create services.
