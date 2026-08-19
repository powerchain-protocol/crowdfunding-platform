# Workspace recovery

PowerChain Crowdfunding v1.0.0 runs 11 Next.js applications from one pnpm workspace. A valid checkout must contain the complete `apps/<app>/app` tree plus each app's package manifest and canonical configuration.

## Diagnose

```bash
pnpm workspace:inventory
pnpm config:check
pnpm source:check
pnpm next:check
```

## Repair repository and generated configuration

```bash
pnpm repair:repository
pnpm repair:workspace
```

`repair:repository` restores safe root dotfiles from `config/repository/templates/`. `repair:workspace` recreates missing Next.js/TypeScript/PostCSS configuration. Neither command invents missing product source.

If `apps/web/app`, `apps/pwa/app`, or another application source directory is missing, restore the canonical checkout instead of creating an empty directory.

## Development safety

`pnpm dev` uses a supervisor that starts only the 11 application packages. While the servers are active, it watches application roots, `app/`, manifests, Next configs, TypeScript configs, and the root `node_modules`. If those disappear, it stops the process group before Next.js can enter repeated deleted-directory or `uv_cwd` failures.

## Toolchain

- Node 24.19.0
- pnpm 11.22.0
- Next.js 16.3.1
- React 19.2.8
- TypeScript 6.0.3
- Prisma 6.19.3
- Turborepo 2.10.10
