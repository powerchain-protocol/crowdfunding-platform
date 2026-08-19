# Dependency supply-chain policy

PowerChain Crowdfunding v1.0.0 uses pnpm `11.22.0` with an explicit strict 24-hour package maturity window.

## Policy

```yaml
minimumReleaseAge: 1440
minimumReleaseAgeStrict: true
minimumReleaseAgeIgnoreMissingTime: false
minimumReleaseAgeExcludePrune: true
trustLockfile: false
blockExoticSubdeps: true
```

Turborepo is pinned to the reviewed baseline `2.10.10`. Toolchain upgrades should be intentional, reviewed, and compatible with the maturity policy rather than automatically following update prompts.

## Rejected lockfile recovery

If pnpm reports `ERR_PNPM_MINIMUM_RELEASE_AGE_VIOLATION`, inspect the dependency change first. When the lockfile was generated with a version that is not allowed by the current manifests/policy, rebuild dependency resolution without weakening the policy:

```bash
node scripts/repair-supply-chain.mjs
corepack prepare pnpm@11.22.0 --activate
pnpm install
pnpm supply-chain:check
```

For an explicit dependency cleanup, stop development first and use:

```bash
node scripts/repair-supply-chain.mjs --deps
pnpm install
```

Do not set `trustLockfile: true` simply to bypass verification. Do not add broad maturity exclusions for build tooling unless they are a reviewed security decision.
