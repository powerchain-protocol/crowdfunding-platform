# Network, Wallet & API Upgrade — v1.0.0

This upgrade adds an explicit Solana runtime mode, shared display-currency state, wallet data APIs, embedded-wallet boundaries, trusted-wallet persistence and operator security models without changing the canonical product version.

## UI/runtime

- Solana mode selector: `devnet` / `mainnet-beta`.
- Default display currency: `USD`, with `EUR` and `GBP` selectors.
- Centered desktop navbar; compact network/currency controls remain available on smaller viewports.
- Shared `WalletProvider` persists preferences locally and synchronizes authenticated preferences through API v1 when available.
- `card.tsx` includes reusable Radix-icon card affordances.

## Wallet data

- Extension connectors: Phantom, Solflare and Backpack.
- Provider-neutral embedded-wallet adapter, disabled until configured.
- Server-side Solana RPC reads for SOL balance, SPL Token/Token-2022 accounts and recent signatures.
- RPC credentials/Helius URLs are never returned to browser callers.

## API v1

- `GET /api/v1/blockchain/networks`
- `GET /api/v1/blockchain/status`
- `GET /api/v1/wallets`
- `GET /api/v1/wallets/:address`
- `GET|POST /api/v1/wallets/trusted`
- `DELETE /api/v1/wallets/trusted/:id`
- `POST /api/v1/wallets/embedded/session`
- `GET|PATCH /api/v1/users/preferences`
- `GET /api/v1/operators/me`

State-changing wallet/preferences routes require authenticated sessions and same-origin / configured-origin browser requests.

## Database/security

Prisma adds `UserPreference`, `TrustedWallet`, and `OperatorProfile`. The accompanying migration defaults new preferences to `USD` and `devnet`. Browser database roles are not granted operator mutation rights or trusted-wallet verification-field mutation rights.

## Contracts/programs

Deployment manifests now model both `devnet` and `mainnet-beta`. Program IDs remain explicit deployment data and cannot become trusted merely because a user changes the UI network selector. Transaction signing remains wallet-owned.
