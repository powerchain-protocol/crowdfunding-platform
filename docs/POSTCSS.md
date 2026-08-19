# PostCSS policy

PowerChain Crowdfunding v1.0.0 pins **PostCSS 8.5.23** exactly.

The root `package.json` declares `postcss: "8.5.23"` and `pnpm-workspace.yaml` has a workspace-level override so transitive PostCSS requests also resolve to 8.5.23. This keeps all Tailwind CSS v4 / shadcn workspaces on one PostCSS runtime.

## Validation

```bash
pnpm postcss:check
```

The check scans every workspace `package.json`, rejects any direct PostCSS declaration that is not exactly `8.5.23`, and verifies the root workspace override.

## Stale lockfile recovery

If an older `pnpm-lock.yaml` still contains Turborepo `2.10.11`, the 24-hour `minimumReleaseAge` policy can reject installation even though the manifests pin `turbo` to `2.10.10`.

Run:

```bash
node scripts/repair-supply-chain.mjs
pnpm install
```

Do not disable the supply-chain age policy just to accept the stale lockfile.
