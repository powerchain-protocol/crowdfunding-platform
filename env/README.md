# Environment configuration

PowerChain keeps safe templates in source control and real runtime values in ignored files or deployment secret stores.

## Canonical files

```text
.env.example
env/development.env.example
env/test.env.example
env/production.env.example
env/docker.env.example
env/solana.env.example
env/supabase.env.example
.env.local
```

`.env.local` is ignored and is the normal Next.js development file.

## Initialize

```bash
pnpm env:init
```

The command creates `.env.local` without overwriting an existing file. `pnpm env:reset` recreates it deliberately.

If root dotfiles were omitted by an archive/copy operation, PowerChain can restore `.env.example` from a tracked non-hidden template:

```bash
pnpm repair:repository
pnpm env:init
```

## Default development posture

```text
POWERCHAIN_DATA_MODE=mock
POWERCHAIN_WRITE_MODE=simulated
POWERCHAIN_INFRA_REQUIRED=false
PAYMENTS_MODE=demo
```

This keeps financial/provider writes simulated or fail-closed until infrastructure is explicitly configured.

## Browser-safe vs server-only values

Only `NEXT_PUBLIC_*` values are intended for browser bundles. Never expose database passwords, Supabase service-role keys, Helius API keys, KYC secrets, session secrets, wallet private keys, signer JSON, treasury authority material, or provider server keys through public variables.

## Solana and Helius

The templates separate cluster choice from RPC provider choice. Development can fall back to public Solana endpoints; production should use a dedicated provider configuration and fail closed when the selected provider is unavailable.

Public identifiers such as standard Solana program IDs and configured token mints may be tracked. Private signing material may not.

See `env/solana.env.example` and [`../docs/SOLANA-SUPABASE-ENV.md`](../docs/SOLANA-SUPABASE-ENV.md).

## Supabase and Prisma

Browser configuration uses only the Supabase URL and publishable key. `SUPABASE_SERVICE_ROLE_KEY` is server-only because it bypasses RLS.

Prisma uses `DATABASE_URL` for application traffic. `DIRECT_URL` and `SHADOW_DATABASE_URL` are optional migration/deployment values and should never be pointed at production casually.

See `env/supabase.env.example` and [`../docs/PRISMA.md`](../docs/PRISMA.md).

## Infrastructure

Docker is optional. Use Docker/Podman, native PostgreSQL/Redis, or managed endpoints. Validate configured endpoints with:

```bash
pnpm infra:check
pnpm stack:wait
```

Those commands verify reachability; they do not install or create infrastructure.

## Wallet and network preferences

`NEXT_PUBLIC_DEFAULT_CURRENCY=USD` is the UI default. Solana UI mode supports `devnet` and `mainnet-beta`. Embedded wallets are disabled by default and require both the public feature flag and server provider configuration. Never put wallet private keys, mnemonics or signer JSON into any `.env*` file.
