# PowerChain Crowdfunding Documentation

> Platform monorepo revision: `1.0.0`


**Docs revision:** `1.0.0`

This documentation set defines the PowerChain v1 production contract for goal-based crowdfunding, disaster/humanitarian campaigns, bank and crypto payments, campaign treasuries, optional utility tickets, non-financial attestations, reconciliation, evidence, impact and public transparency.

## Reading order

1. [Product](PRODUCT.md)
2. [Architecture](ARCHITECTURE.md)
3. [Campaigns](CAMPAIGNS.md)
4. [Payments](PAYMENTS.md)
5. [SEPA + Monerium](SEPA-MONERIUM.md)
6. [Treasury + Safe](TREASURY-SAFE.md)
7. [Tokenization, tickets and attestations](TOKENIZATION.md)
8. [Ledger + reconciliation](LEDGER-RECONCILIATION.md)
9. [Blockchain infrastructure](BLOCKCHAIN.md)
10. [API v1](API-V1.md)
11. [Data model](DATA-MODEL.md)
12. [Events](EVENTS.md)
13. [Security](SECURITY.md)
14. [Compliance + privacy](COMPLIANCE-PRIVACY.md)
15. [AI agents + skills](AI-AGENTS.md)
16. [PWA + offline](PWA-OFFLINE.md)
17. [Observability + reliability](OBSERVABILITY-RELIABILITY.md)
18. [Testing](TESTING.md)
19. [Configuration](CONFIGURATION.md)
20. [Deployment](DEPLOYMENT.md)
21. [Operations](OPERATIONS.md)
22. [Error model](ERRORS.md)
23. [Production conformance](CONFORMANCE.md)
24. [Roadmap](ROADMAP.md)
25. [Changelog](CHANGELOG.md)
26. [Primary references](REFERENCES.md)
27. [Milestone evidence](MILESTONE-EVIDENCE.md)
28. [Authentication](AUTH.md)
29. [Design system](DESIGN-SYSTEM.md)


## Repository operator indexes

- [`../apps/README.md`](../apps/README.md) — deployable application ownership and ports.
- [`../packages/README.md`](../packages/README.md) — shared package boundaries and dependency rules.
- [`../services/README.md`](../services/README.md) — provider/background service contracts.
- [`../env/README.md`](../env/README.md) — environment files, secrets and local modes.
- [`../infra/README.md`](../infra/README.md) — optional PostgreSQL/Redis infrastructure.
- [`PNPM.md`](PNPM.md) — Node 24.19.0 + pnpm 11.22.0/Corepack contract.
- [`PRISMA.md`](PRISMA.md) — schema/client generation and database workflow.
- [`INFRA-SERVICES-ENDPOINTS.md`](INFRA-SERVICES-ENDPOINTS.md) — readiness and service discovery.

## Non-negotiable invariants

1. A QR scan is not a payment.
2. A provider order is not authoritative settlement by itself.
3. Campaign totals change only from reconciled financial events.
4. Tickets and supporter attestations are issued only after authoritative contribution confirmation.
5. Treasury disbursements require policy evaluation and configured approvals.
6. AI may prepare and recommend; it does not receive treasury signing authority.
7. Provider secrets and signing keys never ship to the browser.
8. Sensitive beneficiary or donor information is not written to public chains by default.
9. Every material financial state transition is auditable and idempotent.
10. Blockchain state, internal ledger state and campaign-facing totals are reconciled rather than assumed identical.


## Platform monorepo

- [`PLATFORM-APPS.md`](PLATFORM-APPS.md) — deployable applications, trust boundaries and cross-app responsibilities.

- [`UI-UX.md`](UI-UX.md) — canonical v1.0.0 visual system and interaction rules.

## Trust, agreements and safety

- [`IDENTITY-TRUST.md`](IDENTITY-TRUST.md) — KYC/business checks, sensitive document handling and per-check trust badges.
- [`AGREEMENTS-ESIGN.md`](AGREEMENTS-ESIGN.md) — counsel-approved templates, term autofill, native e-signature and document-hash binding.
- [`ESCROW-TRANCHES.md`](ESCROW-TRANCHES.md) — tranche release gates and transparent fee handling.
- [`NOTIFICATIONS-MODERATION.md`](NOTIFICATIONS-MODERATION.md) — in-app/email notifications, report queue, auto-suspension and moderation audit.

## Founder / investor capital module

- [`CAPITAL-MARKETPLACE.md`](CAPITAL-MARKETPLACE.md) — founder listings, tranche-derived raises, investor marketplace and diligence.
- [`DEAL-ROOM.md`](DEAL-ROOM.md) — participant-only chat, files and call-provider boundary.
- [`MILESTONE-INVESTOR-ESCROW.md`](MILESTONE-INVESTOR-ESCROW.md) — proof approval, fee snapshot and `claim_milestone`.
- [`DATA-SECURITY-RLS.md`](DATA-SECURITY-RLS.md) — Postgres RLS, column guards and real-user verification harness.
- [`SOLANA-CAPITAL-PROGRAMS.md`](SOLANA-CAPITAL-PROGRAMS.md) — contributors leaderboard and milestone-escrow program interfaces.
- [`I18N-RTL.md`](I18N-RTL.md) — English/Spanish locale infrastructure and RTL acceptance criteria.

## Crowdfunding engine additions

- [`CROWDFUNDING-ENGINE.md`](CROWDFUNDING-ENGINE.md) — goal-based escrow, pull refunds, milestone claims, registry, leaderboard and realtime indexing.
- [`RUNTIME-NEXTJS.md`](RUNTIME-NEXTJS.md) — Node 24.19.0 LTS, Next.js 16.3 and TypeScript runtime contract.
- [`PAYMENTS-MIDTRANS.md`](PAYMENTS-MIDTRANS.md) — hosted checkout, webhook verification and demo fallback.

- [`COMPANY-INVOICES.md`](COMPANY-INVOICES.md) — organization profiles, foundation fields, branding and invoice architecture.

- [`WEB3-ICONS.md`](WEB3-ICONS.md) — token, network and wallet icon integration.
- [`DEV-STABILITY.md`](DEV-STABILITY.md) — safe Next.js/pnpm development and live-workspace mutation recovery.
- [`CONSTANTS-CONTRACTS-COMMON.md`](CONSTANTS-CONTRACTS-COMMON.md) — canonical shared code boundaries and deployment metadata.
- [`STABILITY-UPGRADE.md`](STABILITY-UPGRADE.md) — fixes and shared-boundary upgrade notes for canonical v1.0.0.
