# Versioning Policy

**Canonical product version:** `1.0.0`  
**API version:** `v1`  
**API base path:** `/api/v1`

PowerChain Crowdfunding remains on **v1.0.0** while the v1 architecture, applications, UI, documentation and implementation are hardened.

## Rule

Do not bump the product/package version for ordinary v1 improvements such as:

- new v1 screens and components
- bug fixes
- accessibility and UI/UX improvements
- additional campaign categories such as renewables
- dashboard visualizations
- evidence workflow hardening
- authentication screens and provider wiring
- API v1 endpoint additions that remain backward compatible
- security, observability and reconciliation improvements
- documentation expansion

A future product version change requires an explicit release decision rather than being inferred from implementation progress.

## Repository enforcement

Every workspace `package.json` must remain:

```json
{ "version": "1.0.0" }
```

Run:

```bash
pnpm version:check
```

The shared `@powerchain/config` package exports:

```ts
PLATFORM_VERSION = "1.0.0"
API_VERSION = "v1"
API_BASE_PATH = "/api/v1"
```

UI and API surfaces should consume those constants instead of duplicating version strings.
