# Changelog

## 1.2.0 — Platform/apps upgrade

- Converted the single UI scaffold into a deployable pnpm/Turborepo monorepo.
- Added web, crowdfunding, donate, checkout, dashboard, treasury, admin, explorer, docs, field PWA and API applications.
- Added shared UI, configuration, domain types, payment state machine, ledger validation, reconciliation, events, provider interfaces and SDK packages.
- Added explicit app trust boundaries and server-only provider integration boundary.
- Added `/api/v1/health`, `/api/v1/system`, `/api/v1/campaigns`, and `/api/v1/payment-intents` route examples using the standard API envelope.
- Added structure validation, runtime doctor and security-conformance scripts.
- Preserved SEPA/Monerium/EURe/Safe and USDC/Solana/Sui/CCTP as separate settlement rails.
- Preserved the rule that settlement and reconciliation, not UI interaction, update campaign financial state.

# Documentation Changelog

## 1.1.0 — 2026-08-18

Major architecture documentation upgrade.

### Added

- campaign purpose vs participation-mode separation
- explicit flexible/all-or-nothing funding policy
- EUR-first supporter UX
- SEPA/SEPA Instant banking payment state machine
- Monerium provider boundary and EURe settlement model
- correction separating Monerium EURe from Circle USDC
- per-campaign Safe treasury architecture on EVM
- treasury policy and emergency-policy model
- unique bank payment references
- strict reconciliation before campaign totals/ticket/attestation issuance
- donation/contribution/ticket purchase semantic separation
- soft-tokenized attestation model
- ticket entitlement lifecycle
- refunds
- provider/network/asset registry boundaries
- expanded API v1 resource map
- provider webhook normalization pipeline
- reconciliation exception catalog
- production conformance checklist
- operational runbook

### Strengthened

- AI authorization boundaries
- transaction review/signature binding
- privacy rules for public attestations/evidence
- PWA offline financial safety
- provider outage behavior
- observability/readiness gates

### Preserved

- Solana + Sui integration strategy
- USDC-first crypto settlement path
- CCTP for supported native USDC transfers
- Helius data/indexing isolation
- policy/risk/approval architecture
- double-entry ledger + CMR
- evidence/impact/public transparency lifecycle

## 1.3.0 — Platform UX, evidence gates and renewables

- Added dashboard funding-vs-milestone chart for active campaigns.
- Added milestone proof attachment, hashing, submission and reviewer-verification UI.
- Added `@powerchain/evidence` release-gate contracts.
- Added dark-green design system and light/dark/system theme support.
- Added shared footer and loading states across apps.
- Expanded public web marketing and authentication routes.
- Added Explore Projects, Projects and campaign detail routes.
- Rebuilt Create Campaign as an 11-step progressive wizard.
- Added Renewables campaign category/purpose.
- Added `@powerchain/auth` role/session contracts and fail-closed auth API boundaries.
