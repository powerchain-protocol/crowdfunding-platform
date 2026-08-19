# pnpm / Corepack

PowerChain pins **pnpm 11.22.0** through the root `packageManager` field and requires **Node.js 24.19.0**.

## Activate

```bash
nvm use 24.19.0
corepack enable
corepack prepare pnpm@11.22.0 --activate
node --version   # v24.19.0
pnpm --version   # 11.22.0
```

Corepack may select the repository's `packageManager` version even if another pnpm version exists globally. Run version checks from the repository root.

## Workspace settings

pnpm 11 project settings such as dependency overrides and build permissions live in `pnpm-workspace.yaml`; do not add a legacy root `package.json#pnpm` configuration block.

The repository uses `allowBuilds` for approved native/build-script dependencies and centralized overrides for toolchain packages.

## Install contract

```bash
pnpm install
```

Preinstall validates the Prisma schema and workspace `workspace:*` references. Postinstall generates Prisma Client using already-declared dependencies and must not recursively invoke `pnpm add`.

## Diagnostics

`pnpm doctor` is pnpm's own command. PowerChain project diagnostics are:

```bash
pnpm run doctor:project
pnpm workspace:check
pnpm config:check
pnpm routes:check
pnpm skills:check
pnpm readmes:check
```

A Corepack warning about `pnpm self-update` or a missing global pnpm bin directory is not, by itself, a workspace install failure.
