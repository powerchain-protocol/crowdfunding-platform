# pnpm / Corepack

PowerChain requires **Node.js `24.19.0`** and **pnpm `11.22.0`**. The root `packageManager` field is authoritative.

## Activate the toolchain

```bash
nvm use 24.19.0
corepack enable
corepack prepare pnpm@11.22.0 --activate
node --version
pnpm --version
```

Expected output contains `v24.19.0` and `11.22.0`.

## Install

```bash
pnpm setup:repair
pnpm install
```

Preinstall repairs safe omitted dotfiles, verifies the exact toolchain, validates Prisma schema structure, and validates all `workspace:*` references. Postinstall generates Prisma Client without recursively running `pnpm add`.

## Supply-chain policy

The workspace keeps a strict 24-hour package maturity window, verifies lockfiles, blocks exotic transitive sources, and centralizes reviewed overrides in `pnpm-workspace.yaml`.

If a stale lockfile contains a rejected package version:

```bash
node scripts/repair-supply-chain.mjs
pnpm install
pnpm supply-chain:check
```

Do not disable the maturity policy to bypass a new-package warning.

## Project diagnostics

`pnpm doctor` is pnpm's own command. PowerChain diagnostics are:

```bash
pnpm run doctor:project
pnpm setup:check
pnpm workspace:check
pnpm config:check
pnpm build:check
```

## Workspace settings

pnpm 11 project settings live in `pnpm-workspace.yaml`, not a legacy `package.json#pnpm` object. The workspace uses `allowBuilds` for reviewed install scripts and exact overrides for the runtime/build toolchain.

## Safe cleanup

Stop `pnpm dev` before cleanup.

```bash
pnpm clean
pnpm clean:deps
```

Use lockfile cleanup only when intentionally rebuilding dependency resolution:

```bash
pnpm clean:lockfile
pnpm install
```
