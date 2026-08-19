# Blockchain, Wallet & Runtime Modes

PowerChain v1.0.0 exposes two Solana application modes: `devnet` and `mainnet-beta`.

The selected network is a user/runtime preference. It never changes a transaction silently: transaction review objects must include the network, wallet address, program IDs, instructions, recipients, and fees before wallet approval.

## Shared data boundaries

- `packages/data/src/blockchain.ts` — chain metadata and explorer helpers.
- `packages/data/src/networks.ts` — supported Solana modes.
- `packages/data/src/wallets.ts` — wallet connector catalog.
- `packages/data/src/fetch-wallet-data.ts` — typed API client for public wallet reads.
- `packages/providers/src/embedded-wallets.ts` — provider-neutral embedded-wallet boundary.
- `packages/ui/src/shared/components/provider/wallet-provider.tsx` — currency/network preferences.

## Defaults

- Display currency: `USD`.
- Solana mode: `devnet`.
- Production selection: `mainnet-beta` must use reviewed provider/program configuration.

## Security

Wallet connection is not authorization. Trusted-wallet records are user-scoped; public clients cannot set verification timestamps or operator verification fields. Operator profiles are server-managed and are not writable through browser database roles.
