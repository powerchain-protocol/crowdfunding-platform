# Applications

`apps/` contains the deployable Next.js surfaces. Shared domain logic belongs in `packages/`; provider/background processing belongs in `services/`. Apps should compose those layers instead of duplicating business rules.

| App | Port | Primary users | Responsibility |
|---|---:|---|---|
| `web` | 3000 | public | Marketing, product navigation and authentication entry |
| `crowdfunding` | 3001 | supporters/investors | Discovery, filtering, campaign/listing detail and campaign creation |
| `donate` | 3002 | contributors | Donation/contribution entry and payment handoff |
| `checkout` | 3003 | contributors/investors | Exact review, provider/wallet approval and settlement status |
| `dashboard` | 3004 | founders/organizers | Company profile, campaigns, invoices, evidence, agreements and notifications |
| `treasury` | 3005 | treasury approvers | Escrow, tranche release gates, Safe/multisig proposals and reconciliation |
| `admin` | 3006 | platform operators | Identity verification, moderation, policy, audit and operations |
| `explorer` | 3007 | public/auditors | Public campaign, transaction and on-chain transparency views |
| `docs` | 3008 | developers/operators | Product/developer documentation surface |
| `pwa` | 3009 | field teams | Offline evidence, milestone and field workflows |
| `api` | 3010 | all apps/services | Canonical `/api/v1` HTTP boundary |

## App rules

- Every app extends the canonical Next.js/TypeScript configuration under `config/`.
- Shared UI comes from `@powerchain/ui`; do not fork app-local copies of common components.
- Financial state is read from authoritative API/domain projections, not inferred from button clicks.
- Secrets remain server-side. Browser-safe environment variables must use the `NEXT_PUBLIC_` prefix.
- Loading, empty, error, unauthorized and offline states are first-class UI states.
- Light/dark themes use white, neutral gray, black and dark green application chrome.

Run an individual app with `pnpm dev:<name>` from the repository root.
