# Wallet & Access UX

PowerChain v1.0.0 separates **platform authentication** from **wallet connection**.

## Website header

The public website exposes two explicit account actions:

- **Sign in** — opens `/auth/login` and uses the authenticated server session.
- **Wallet sign in** — opens the wallet-connect modal. A successful wallet connection redirects to the dashboard.

The website hero intentionally has **two CTAs only**: Explore projects and Create campaign. Investor marketplace remains available in navigation and in the lower CTA.

## Wallet connect

The shared `@powerchain/ui/wallet-session` boundary detects injected Phantom, Solflare and Backpack Solana providers. The browser wallet owns approval; PowerChain never receives private keys and does not auto-sign transactions.

Wallet connection is not KYC, business verification, or a replacement for the authenticated PowerChain account. Server-side roles remain authoritative.

For local development, wallet state is shared between ports by a SameSite=Lax cookie. For production subdomains set:

```env
NEXT_PUBLIC_WALLET_COOKIE_DOMAIN=.powerchain.ventures
```

The cookie stores only the public wallet address and provider label. It must never be used as an authorization credential.

## Dashboard header

When a wallet session is present, dashboard headers show:

- green **Connected** state;
- shortened public wallet address;
- **Disconnect** action.

Disconnect clears the client wallet session and routes back to `NEXT_PUBLIC_WEB_URL` (or the website fallback).

When no wallet session is present, the dashboard offers **Connect wallet** and opens the same shared modal.

## Validation

```bash
pnpm wallet:check
```

The validator confirms the two-button hero, shared wallet component/export, auth integration, production cookie-domain environment key, and dashboard account-mode wiring.
