# shadcn/ui monorepo integration

PowerChain keeps shadcn/ui as a code-generation tool over the shared `@powerchain/ui` package.

## Canonical targets

- Shared registry/UI components: `packages/ui/src/components/`
- Shared UI utilities: `packages/ui/src/lib/`
- Shared presentation hooks: `packages/ui/src/hooks/`
- App-local blocks/components: `apps/<app>/components/`
- App-local hooks/libs: `apps/<app>/hooks/`, `apps/<app>/lib/`

Domain/data hooks remain in the separate `@powerchain/hooks` package and are not used as the shadcn installation target.

## Configuration

Every Next.js app has a local `components.json` and an `@/* -> ./*` TypeScript path alias. Cross-workspace generated imports use the public exports:

- `@powerchain/ui/components`
- `@powerchain/ui/lib/utils`
- `@powerchain/ui/hooks`

`packages/ui/components.json` uses package-local `#components`, `#lib`, and `#hooks` imports backed by `package.json#imports`. This follows current shadcn monorepo/package-import guidance and prevents the CLI from trying to resolve a non-existent `@powerchain/ui/hooks` path.

Tailwind CSS v4 intentionally leaves `tailwind.config` blank in every `components.json`.

## Commands

```bash
pnpm shadcn:check
pnpm shadcn:info
pnpm shadcn:info:ui

# Add a component through the crowdfunding app; shared UI registry items are routed to packages/ui.
pnpm shadcn:add button

# Work directly in the shared UI package.
pnpm shadcn:add:ui button
```

You can also call the CLI directly:

```bash
pnpm dlx shadcn@latest info -c apps/crowdfunding
pnpm dlx shadcn@latest info -c packages/ui
```

Running `shadcn info` from the repository root is supported by the root compatibility `components.json`, but app-scoped `-c` commands are preferred in this monorepo.
