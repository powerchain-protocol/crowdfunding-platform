# pnpm v11 workspace configuration

PowerChain uses pnpm 11.21.0. pnpm v11 no longer reads project settings from `package.json#pnpm`; dependency overrides and build-script permissions live in the root `pnpm-workspace.yaml`.

## Required local runtime

```bash
node --version   # v24.19.0
corepack enable
corepack prepare pnpm@11.21.0 --activate
pnpm --version   # 11.21.0
```

## Clean reinstall after workspace metadata changes

```bash
rm -rf node_modules
find apps packages services skills -name node_modules -type d -prune -exec rm -rf '{}' +
rm -f pnpm-lock.yaml
pnpm install
pnpm workspace:check
pnpm dev
```

Deleting the lockfile is appropriate here because the previous install failed while the workspace graph itself was invalid. Once a clean lockfile is generated, commit it and use frozen lockfiles in CI.

## Build scripts

`allowBuilds` is intentionally allow-listed in `pnpm-workspace.yaml` for Prisma, esbuild, and sharp. Review new dependency install scripts before expanding this map.
