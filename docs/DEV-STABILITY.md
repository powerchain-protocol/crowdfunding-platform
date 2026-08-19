# Development Stability

## Supported toolchain

- Node.js `24.19.0`
- pnpm `11.22.0` via Corepack
- Next.js `16.3.1`
- React `19.2.8`
- TypeScript `6.0.3`
- Prisma / `@prisma/client` `6.19.3`
- Turborepo `2.10.10`

## Safe startup

```bash
nvm use 24.19.0
corepack enable
corepack prepare pnpm@11.22.0 --activate
pnpm env:init
pnpm install
pnpm setup:check
pnpm next:check
pnpm dev
```

`pnpm dev` does not install dependencies, delete output, run database migrations, or modify source directories. Do not run archive replacement, branch/worktree destructive operations, `pnpm clean:deps`, or a second dependency installation in the same checkout while the dev supervisor is active.

## Why `ENOENT ... apps/<app>/app` and `uv_cwd` happen

Those errors mean the running process lost files/directories that existed when it started. The upgraded supervisor detects this class of mutation and stops all app processes with a targeted message. It cannot safely reconstruct a directory that another process deleted while Node is using it.

## Why `Could not find next/package.json` can appear after startup

Each Next application declares `next` directly. `pnpm next:check` validates that every app resolves the pinned Next.js package before development starts. If a dependency tree is replaced while servers are active, the dev supervisor stops instead of waiting for Turbopack to encounter broken symlinks.

## Infrastructure is separate

UI/mock development does not require PostgreSQL or Redis. Database commands do require a reachable PostgreSQL endpoint. Docker/Podman is optional; use a native or managed database if preferred.
