# Canonical v1.0.0 Improvement Log

PowerChain Crowdfunding remains on **v1.0.0**. The entries below describe improvements inside the canonical v1 release contract and do not represent product-version bumps.

## Current v1 improvements

- Multi-app pnpm/Turborepo platform architecture.
- Public website, crowdfunding, donate, checkout, dashboard, treasury, admin, explorer, docs, PWA and API apps.
- Dark-green institutional visual system with light/dark/system themes.
- Marketing and authentication surfaces.
- Explore Projects, renewables category and 11-step Create Campaign flow.
- Treasury funding/milestone progress chart for active campaigns.
- Milestone evidence upload, SHA-256 commitments, review state and release gating.
- Role-separated treasury, reviewer and platform permissions.
- PaymentIntent, campaign lifecycle, ledger and reconciliation packages.
- SEPA/Monerium/EURe/Safe bank-settlement architecture.
- Solana, Sui, EVM, USDC and CCTP infrastructure boundaries.
- Fail-closed API/provider scaffolds instead of simulated production writes.
- Canonical version lock and centralized `PLATFORM_VERSION`/`API_VERSION` constants.

## Version policy

See [`VERSIONING.md`](VERSIONING.md). The canonical platform version remains `1.0.0` until an explicit release decision changes it.

### Identity, agreements, escrow and safety upgrade

- Added per-check identity/business verification model and public verified badges.
- Added sensitive KYC/business document upload boundary with local hashing and secure-storage requirements.
- Added counsel-approved agreement template registry, deal-term autofill contracts and native e-signature workflow.
- Added hash-bound signatures and append-only/tamper-evident audit model.
- Added campaign escrow tranche schedule with proof/identity/agreement/treasury release gates.
- Added transparent platform-fee calculation contract.
- Added in-app notification bell/center plus server-side email-provider boundary.
- Added public reporting, moderation queue, deterministic reversible auto-suspension and privileged audit UI.
