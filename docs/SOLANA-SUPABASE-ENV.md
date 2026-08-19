# Solana, Helius, Supabase & Prisma Environment Configuration

**Platform:** PowerChain Crowdfunding  
**Version:** 1.0.0

## Solana RPC policy

PowerChain uses `SOLANA_CLUSTER` plus `SOLANA_RPC_PROVIDER` to keep cluster selection explicit and prevent accidental mainnet/devnet mixing.

The server resolver in `@powerchain/config` uses this precedence when provider mode is `auto`:

1. Helius Secure RPC URL for the selected cluster.
2. Explicit Helius RPC URL.
3. Helius standard endpoint derived from `HELIUS_API_KEY`.
4. `SOLANA_RPC_URL` compatibility override.
5. Official public Solana RPC fallback.

Production should normally use Helius or another dedicated/private provider. Public Solana endpoints are rate-limited and are retained for development and recovery only.

## Helius

Server-only configuration:

```env
HELIUS_API_KEY=
HELIUS_DEVNET_RPC_URL=
HELIUS_MAINNET_RPC_URL=
HELIUS_DEVNET_WS_URL=
HELIUS_MAINNET_WS_URL=
HELIUS_DEVNET_SECURE_RPC_URL=
HELIUS_MAINNET_SECURE_RPC_URL=
```

Never prefix the API key with `NEXT_PUBLIC_`. Secure URLs are copied from the Helius dashboard and can be used without embedding the API key in the URL.

## Program IDs

The repository defines public Solana protocol IDs for System, SPL Token, Token-2022, and the Associated Token Program. The canonical PWRC mainnet Token-2022 mint is also represented as a public deployment reference.

PowerChain-owned program IDs remain environment variables. The current crowdfunding, registry, and contributors values are synchronized from their source `declare_id!` values; those values are not proof that a program is deployed. Milestone escrow remains blank until a deployment ID exists:

```env
CROWDFUNDING_PROGRAM_ID=
REGISTRY_PROGRAM_ID=
CONTRIBUTORS_PROGRAM_ID=
SOLANA_MILESTONE_ESCROW_PROGRAM_ID=
```

A program ID being present is not sufficient proof of a trusted deployment. The separate `*_VERIFIED` flags preserve that distinction.

## Supabase

Browser-safe values:

```env
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=
```

Server-only values:

```env
SUPABASE_URL=
SUPABASE_PUBLISHABLE_KEY=
SUPABASE_SERVICE_ROLE_KEY=
SUPABASE_PROJECT_REF=
```

RLS remains the authorization boundary for browser requests. The service-role key bypasses RLS and must only be held by trusted backend services.

## Prisma / PostgreSQL

Local Docker development continues to use the local `DATABASE_URL` from `.env.example`.

For Supabase-backed PostgreSQL, set `DATABASE_URL` to the connection string selected for the application runtime. For long-lived servers, the Supabase Prisma guide supports the Supavisor Session pooler on port 5432. Keep `DIRECT_URL` available for deployment/migration tooling that needs a non-runtime/direct connection.

PowerChain does not silently switch databases based on the presence of Supabase variables. `DATABASE_URL` remains authoritative for Prisma.

## Provider status API

`GET /api/v1/system/providers` reports only safe configuration posture:

- Solana cluster/provider selection
- whether Helius is configured
- whether Supabase public/server credentials are configured
- whether Prisma connection variables are configured

It never returns API keys, database URLs, service-role keys, or RPC URLs.
