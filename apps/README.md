# Applications

`apps/` contains the 11 deployable Next.js surfaces. Shared business/UI logic belongs in `packages/`; provider and background processing belongs in `services/`.

| App | Port | Responsibility |
|---|---:|---|
| `web` | 3000 | Marketing and auth entry |
| `crowdfunding` | 3001 | Discovery, project detail, campaign creation |
| `donate` | 3002 | Contribution flow |
| `checkout` | 3003 | Payment/wallet review and settlement status |
| `dashboard` | 3004 | Founder/organizer workspace |
| `treasury` | 3005 | Escrow, approvals and tranche releases |
| `admin` | 3006 | Identity, moderation, policy and audit |
| `explorer` | 3007 | Public transparency views |
| `docs` | 3008 | Documentation app |
| `pwa` | 3009 | Offline/field workflows |
| `api` | 3010 | Canonical `/api/v1` boundary |

## Rules

- Every app uses the canonical Next.js/TypeScript config under `config/`.
- Shared UI comes from `@powerchain/ui`.
- Apps declare every `@powerchain/*` package they import.
- Secrets stay server-side.
- Financial success is never inferred from a click, redirect, or unconfirmed transaction.
- Loading, empty, unauthorized, offline, pending, confirmed, and failed states are explicit.

Run all apps with `pnpm dev` or one app with the corresponding `pnpm dev:<name>` script.

Validate the application tree with:

```bash
pnpm source:check
pnpm next:check
pnpm build:check
```
