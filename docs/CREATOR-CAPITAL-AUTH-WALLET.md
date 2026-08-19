# Creator capital, authentication & wallet integration — PowerChain v1.0.0

## Authentication
Google is the primary social sign-in, with X, email/password and Solana wallet connection available as separate paths. Social OAuth uses Authorization Code flows with state validation; X also uses PKCE. The production callback aliases are hosted at `https://studio.powerchain.app/api/auth/callback/{provider}` and immediately relay to the API callback boundary. Local X development should register the exact `http://127.0.0.1:3000/api/auth/callback/x` callback.

`Remember me for 27 days` is explicit opt-in. The default email/password session is short-lived. Raw IP addresses are not stored by remember-me; optional `ipHash`/`userAgentHash` values are keyed one-way hashes only when `AUTH_FINGERPRINT_SECRET` is configured.

Demo identities are never seeded unless `SEED_DEMO_USERS=true`, and the seed refuses to run in production. `ENABLE_DEMO_AUTH=true` enables a separate fake-X local route only outside production.

## Wallets
`@solana-commerce/connector` is the shared Wallet Standard boundary. Installed wallets are discovered through the connector. Missing known wallets show only allowlisted HTTPS install links for Phantom, Solflare and Backpack. PowerChain never handles seed phrases or private keys. Wallet connection is not account authentication, KYC or treasury authority.

## RPC preferences
Users may configure a custom Solana RPC/WSS endpoint and a private Helius API key. Helius keys are encrypted with AES-256-GCM using `USER_SECRET_ENCRYPTION_KEY`; the API never returns the plaintext key. Production RPC URLs must be HTTPS/WSS.

## Project capital pots
Stripe Checkout Sessions are created server-side. The platform fee basis-points snapshot is stored before redirect. A return URL is not authoritative payment evidence; only verified provider webhooks can move a contribution to confirmed state and post the double-entry ledger journal.

## X creator tips
X tips are intentionally modeled as **self-reported ledger records + an HTTPS deep-link to the creator's X profile**. They are never included in authoritative escrow/campaign settlement totals unless a future supported payment provider produces independently verifiable settlement evidence.

## Account deletion
Delete Account revokes active sessions and marks the user `DELETION_REQUESTED`. Required financial, audit, fraud-prevention and compliance records are retained according to policy, while deletable profile data can be anonymized by the account-deletion worker.

## Creator profiles and dashboard ledger
Founder/builder listings with an X handle now link to `/profiles/[handle]`. The profile keeps social identity, business verification, deal-room diligence and payment state separate, and exposes the X tip bridge only as a self-reported entry point.

The organizer dashboard exposes `/ledger`, backed by the authenticated `/api/v1/ledger/journals` projection. Provider-confirmed journals and self-reported journals are visibly differentiated; self-reported entries do not increase authoritative escrow or campaign settlement totals.

## Local demo credentials
Local email fixtures are created only when `SEED_DEMO_USERS=true`. `creator@powerchain.local` and `demo@powerchain.local` use the local-only seed password documented by the seed script. The seed refuses production. Fake X authentication is controlled separately by `ENABLE_DEMO_AUTH=true`; production templates keep both switches disabled.
