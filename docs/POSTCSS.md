# PostCSS policy

PowerChain Crowdfunding v1.0.0 pins **PostCSS `8.5.23`** exactly.

The root `package.json` declares `postcss: "8.5.23"` and `pnpm-workspace.yaml` enforces the same version through workspace overrides. Tailwind CSS v4 and shadcn therefore resolve one PostCSS runtime across the monorepo.

## Validate

```bash
pnpm postcss:check
```

The validator scans workspace manifests, rejects conflicting direct PostCSS versions, and verifies the workspace override.

## Rebuild a stale dependency graph

If installation is blocked by the separate dependency maturity policy, repair the lockfile rather than changing the PostCSS pin or disabling supply-chain checks:

```bash
node scripts/repair-supply-chain.mjs
pnpm install
pnpm postcss:check
pnpm supply-chain:check
```
