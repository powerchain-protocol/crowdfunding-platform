# Troubleshooting

## Wrong pnpm version

PowerChain requires pnpm `11.22.0`.

```bash
corepack enable
corepack prepare pnpm@11.22.0 --activate
pnpm --version
```

Do not use `11.21.0` for this repository.

## `ERR_PNPM_MINIMUM_RELEASE_AGE_VIOLATION`

The repository intentionally enforces a strict 24-hour dependency maturity window. Do not disable it just to install a newly published package.

When a stale lockfile contains a blocked version:

```bash
node scripts/repair-supply-chain.mjs
pnpm install
pnpm supply-chain:check
```

Turborepo is intentionally pinned to `2.10.10` while the policy applies.

## Missing `.env.example`, `.dockerignore`, or `.npmignore`

Some copy/extraction workflows omit dotfiles. Restore them from tracked non-hidden templates:

```bash
pnpm repair:repository
pnpm config:check
```

## `docker: command not found`

Docker is optional. Install and start Docker Desktop/Engine or Podman before using `stack:*` commands, or use native/managed PostgreSQL and Redis.

```bash
pnpm docker:check
```

## PostgreSQL `ECONNREFUSED`

`db:push`, migrations, and seed commands require a reachable database.

```bash
pnpm infra:check
pnpm stack:wait
```

If those checks fail, start PostgreSQL or update `DATABASE_URL`.

## Next.js reports missing `app`, `.next/dev`, or `next/package.json`

Stop dev immediately and verify the source tree:

```bash
pnpm source:check
pnpm next:check
pnpm workspace:inventory
```

If `apps/<name>/app` is missing, restore the real source. Do not create an empty folder as a workaround.

Do not run `pnpm install`, `pnpm clean`, or `pnpm build` while `pnpm dev` is active. Those operations can invalidate Next.js/Turbopack working directories.

## shadcn alias errors

Validate the shared UI setup:

```bash
pnpm shadcn:check
pnpm ui:check
pnpm dlx shadcn@latest info -c packages/ui
```

The canonical stylesheet is `packages/ui/src/styles/globals.css`.

## VS Code cannot find Node/React types

Install dependencies, select the workspace TypeScript version, and restart the TypeScript server.

```bash
pnpm install
pnpm typecheck
```

## `zsh: command not found: #`

Avoid pasting prose or commented example output into the interactive shell. PowerChain's copy/paste command blocks intentionally omit comment-only lines.

## Clean recovery

Stop dev first, then:

```bash
pnpm clean:deps
pnpm setup:repair
pnpm install
pnpm setup:check
pnpm dev
```

Use `clean:lockfile` only when deliberately rebuilding dependency resolution.
