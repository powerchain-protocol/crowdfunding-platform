# PowerChain Documentation

**Canonical product version:** `1.0.0`

The documentation is split between product/domain specifications and operator/developer guides. Start with the operator guides when installing, recovering, validating, or building the monorepo.

## Operator and developer guides

1. [Getting started](GETTING-STARTED.md)
2. [Troubleshooting](TROUBLESHOOTING.md)
3. [pnpm / Corepack](PNPM.md)
4. [Workspace recovery](WORKSPACE-RECOVERY.md)
5. [Build reliability](BUILD-RELIABILITY.md)
6. [Prisma](PRISMA.md)
7. [Supply-chain policy](SUPPLY-CHAIN-POLICY.md)
8. [PostCSS](POSTCSS.md)
9. [shadcn](SHADCN.md)
10. [Shared UI](SHARED-UI.md)
11. [Solana / Helius / Supabase environment](SOLANA-SUPABASE-ENV.md)
12. [Docker security](DOCKER-SECURITY.md)
13. [Infrastructure/services/endpoints](INFRA-SERVICES-ENDPOINTS.md)

Repository indexes:

- [`../apps/README.md`](../apps/README.md)
- [`../packages/README.md`](../packages/README.md)
- [`../services/README.md`](../services/README.md)
- [`../env/README.md`](../env/README.md)
- [`../infra/README.md`](../infra/README.md)
- [`../programs/README.md`](../programs/README.md)
- [`../skills/README.md`](../skills/README.md)

## Product and architecture

- [Product](PRODUCT.md)
- [Architecture](ARCHITECTURE.md)
- [Platform apps](PLATFORM-APPS.md)
- [Campaigns](CAMPAIGNS.md)
- [Crowdfunding engine](CROWDFUNDING-ENGINE.md)
- [Capital marketplace](CAPITAL-MARKETPLACE.md)
- [Deal room](DEAL-ROOM.md)
- [Identity and trust](IDENTITY-TRUST.md)
- [Agreements and e-signature](AGREEMENTS-ESIGN.md)
- [Milestone escrow](ESCROW-TRANCHES.md)
- [Investor milestone escrow](MILESTONE-INVESTOR-ESCROW.md)
- [Company profiles and invoices](COMPANY-INVOICES.md)
- [Payments](PAYMENTS.md)
- [SEPA / Monerium](SEPA-MONERIUM.md)
- [Treasury / Safe](TREASURY-SAFE.md)
- [Ledger / reconciliation](LEDGER-RECONCILIATION.md)
- [Tokenization](TOKENIZATION.md)
- [Blockchain](BLOCKCHAIN.md)
- [Solana capital programs](SOLANA-CAPITAL-PROGRAMS.md)

## Platform engineering

- [API v1](API-V1.md)
- [Data model](DATA-MODEL.md)
- [Events](EVENTS.md)
- [Authentication](AUTH.md)
- [Security](SECURITY.md)
- [Data security / RLS](DATA-SECURITY-RLS.md)
- [Compliance / privacy](COMPLIANCE-PRIVACY.md)
- [Observability / reliability](OBSERVABILITY-RELIABILITY.md)
- [Testing](TESTING.md)
- [Configuration](CONFIGURATION.md)
- [Deployment](DEPLOYMENT.md)
- [Operations](OPERATIONS.md)
- [Error model](ERRORS.md)
- [Conformance](CONFORMANCE.md)
- [AI agents / skills](AI-AGENTS.md)
- [PWA / offline](PWA-OFFLINE.md)
- [I18N / RTL](I18N-RTL.md)

## UI system

- [UI/UX](UI-UX.md)
- [Design system](DESIGN-SYSTEM.md)
- [Color and icons](COLOR-ICONS.md)
- [Web3 icons](WEB3-ICONS.md)

## Invariants

- A QR scan is not a payment.
- A provider order is not authoritative settlement.
- Campaign totals advance from reconciled financial events.
- Evidence upload is not milestone approval.
- Milestone approval is not an executed release.
- Wallet submission is not finality.
- Provider secrets and signing keys never ship to browser bundles.
- AI may prepare and recommend; it does not receive treasury signing authority.
- Sensitive donor/beneficiary data is not written to public chains by default.
- Material financial state transitions are auditable and idempotent.

## Release policy

PowerChain remains on canonical version `1.0.0`. See [Versioning](VERSIONING.md), [Changelog](CHANGELOG.md), and [Roadmap](ROADMAP.md).
