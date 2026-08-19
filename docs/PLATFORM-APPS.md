# Platform & Apps Architecture

**Revision:** `1.0.0`

PowerChain uses separate deployable apps so public browsing, payment execution, organizational operations and privileged administration do not share an unnecessarily broad runtime boundary.

## App trust boundaries

```text
Public
├── web
├── crowdfunding
├── donate
├── explorer
└── docs

Transaction UX
└── checkout

Authenticated organization
├── dashboard
└── treasury

Privileged operations
└── admin

Field / offline
└── pwa

Server only
└── api
```

### `apps/web`
Public marketing, product explanation, renewables/humanitarian positioning, theme-aware navigation and `/auth/` entry points. Routes include `/auth/login`, `/auth/sign-in`, `/auth/sign-up`, aliases for `signin`/`signup`, and `/auth/reset-password`.

### `apps/crowdfunding`
Campaign discovery and authoring. `/explore` lists active projects, `/projects` is the organizer project surface, `/campaigns/[slug]` renders campaign details and `/create` implements the 11-step campaign wizard.

### `apps/dashboard`
Organization-facing campaign operations. The dashboard includes a reconciled-funding chart with cumulative milestone thresholds and links directly into evidence-gated milestone review.

### `apps/treasury`
High-trust financial workspace. Milestone funding thresholds do not create execution authority. Evidence and milestone approval gates must be satisfied before a disbursement proposal can advance to multisig approval.

### Remaining apps
`donate`, `checkout`, `admin`, `explorer`, `docs`, `pwa` and `api` retain the canonical v1.0.0 trust boundaries. PWA offline work may capture proof but never auto-executes treasury transactions.

## Design system

All apps share `@powerchain/ui`, dark-green primary branding, shared footer, loading states and light/dark/system theme behavior. Domain apps may compose local components but should not fork base branding or financial-state semantics.
