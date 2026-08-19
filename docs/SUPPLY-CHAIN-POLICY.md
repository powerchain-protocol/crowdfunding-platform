# Dependency supply-chain policy

PowerChain Crowdfunding v1.0.0 uses pnpm 11.22.0 with an explicit 24-hour package maturity window.

## Policy

`pnpm-workspace.yaml` intentionally sets:

```yaml
minimumReleaseAge: 1440
minimumReleaseAgeStrict: true
minimumReleaseAgeIgnoreMissingTime: false
minimumReleaseAgeExcludePrune: true
trustLockfile: false
blockExoticSubdeps: true
```

The repository does not exempt Turborepo from this rule. Turborepo is pinned to `2.10.10` because `2.10.11` was too new for the active 24-hour policy when the workspace was last repaired.

## Recovery from an immature lockfile

If pnpm reports `ERR_PNPM_MINIMUM_RELEASE_AGE_VIOLATION`, do not disable the policy just to make installation pass. First inspect the dependency change. For the known Turborepo case, run the dependency-free repair script:

```bash
node scripts/repair-supply-chain.mjs
corepack prepare pnpm@11.22.0 --activate
pnpm install
```

For a completely clean dependency rebuild:

```bash
node scripts/repair-supply-chain.mjs --deps
pnpm install
```

After installation:

```bash
pnpm supply-chain:check
pnpm setup:check
```

Do not set `trustLockfile: true` in a repository where untrusted contributors can modify the lockfile. Do not add broad `minimumReleaseAgeExclude` patterns for build tooling merely to bypass the maturity window.
