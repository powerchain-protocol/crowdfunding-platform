# Prisma / PostgreSQL

**Platform version:** `1.0.0`  
**Prisma:** `6.19.3`

## Canonical schema

PowerChain uses a single root schema at `prisma/schema.prisma`.

Prisma blocks use multiline syntax:

```prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}
```

Do not compress generator or datasource blocks onto one line. The Prisma 6 schema parser treats the following as malformed:

```prisma
generator client { provider = "prisma-client-js" }
```

## Install behavior

`pnpm install` runs `scripts/prisma-install.mjs` which:

1. performs a dependency-free schema and version preflight;
2. verifies the root `@prisma/client@6.19.3` link exists;
3. runs `prisma generate` using the root schema with `PRISMA_GENERATE_SKIP_AUTOINSTALL=1`;
4. supplies a non-connecting placeholder `DATABASE_URL` only when schema tooling runs without a local `.env`.

The placeholder is **not** available to the application, migrations, `db push`, or runtime database connections.

## Commands

```bash
pnpm prisma:schema:check
pnpm db:validate
pnpm db:format
pnpm db:generate
pnpm prisma:check
```

For database-changing commands configure a real `DATABASE_URL` first:

```bash
cp .env.example .env
pnpm stack:up
pnpm db:migrate
```

## Version alignment

`prisma` and `@prisma/client` are pinned to the exact same `6.19.3` release. The root declares both packages because root postinstall owns client generation; `@powerchain/database` also declares `@prisma/client` for runtime imports. This prevents Prisma from trying to run a nested `pnpm add @prisma/client` during installation. Upgrade CLI and Client together and regenerate after every schema change.
