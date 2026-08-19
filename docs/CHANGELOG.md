# Canonical v1.0.0 Improvement Log

### Founder / investor capital workflows

- Added structured founder listings with product profile, pitch deck/demo links, team bios and deal terms.
- Added mandatory 3–5 milestone tranches with a derived raise goal rather than an independently typed target.
- Added investor marketplace filtering, verified-only mode, preference matching and watchlists.
- Added diligence pages, investor interests/offers and participant-only deal rooms with chat/media/call provider boundaries.
- Added proof-gated investor approval before milestone escrow claim preparation.
- Added fee snapshots at funded-tranche time.
- Added Solana contributors and milestone-escrow program interfaces without fabricating deployment IDs.
- Added live activity polling and top-3 contributor leaderboard provider/API surfaces.
- Added Supabase RLS/storage policies, protected-column triggers, least-privilege hardening and a real-user verification harness.
- Expanded English/Spanish coverage and shared RTL regression infrastructure.

## 2026-08-19 — Founder / investor marketplace + security data layer

- Added founder listing builder with pitch deck, demo video, team bios and deal terms.
- Enforced 3–5 tranche plans with raise goal derived from tranche amounts.
- Added investor marketplace search, category/verified/preference filters, sorting and watchlist surfaces.
- Added structured due-diligence listing pages.
- Added private deal-room chat/media/call provider boundaries and polling fallback.
- Added investor interest/offer pipeline surfaces.
- Added funded-escrow platform-fee snapshot semantics.
- Added IPFS proof model, investor approval gate and `claim_milestone` preparation boundary.
- Added Postgres/Supabase RLS migration with column-guard triggers preventing client self-promotion, forged verification state and funded-escrow rewrites.
- Added append-only audit-log trigger.
- Added production RLS end-user verification harness.
- Added contributors leaderboard and milestone-escrow Solana program interfaces without fabricating deployment IDs.
- Added live activity feed polling contract (5–15 seconds) and top-3 public contributor leaderboard UI.
- Added English/Spanish locale provider for new capital workflows plus platform RTL testing foundation.
- Added selective ZK proof descriptor boundary; ZK does not replace RLS/policy authorization.

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
### Company profile & invoicing improvements

- Added legal company/foundation profile fields, logo, billing identity, registered address and social links.
- Added `PowerChainInvoice`, live invoice preview tool and invoice listing hook.
- Added invoice/company API boundaries and Prisma records for organization profiles and immutable invoice snapshots.
- Added explicit invoice settlement/reference/audit fields and fail-closed invoice issuing until authenticated persistence is configured.

### Repository recovery and documentation cleanup

- Added tracked non-hidden recovery templates for root dotfiles that are commonly omitted by archive/copy workflows.
- Added `repair:repository`, `setup:repair`, and `bootstrap:local` commands.
- Preinstall now restores safe root configuration before validating the toolchain/workspace.
- Cleaned the root, apps, packages, services, config, env, infra, skills, modals and docs READMEs around one canonical setup flow.
- Added dedicated getting-started and troubleshooting guides with copy/paste-safe shell blocks.
- Standardized all setup documentation on Node `24.19.0` and pnpm `11.22.0`.
- Preserved strict dependency maturity policy and Turborepo `2.10.10` pin rather than weakening supply-chain checks.
