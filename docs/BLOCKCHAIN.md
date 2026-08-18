# Blockchain Infrastructure

## 1. Solana

Use Solana for wallet/USDC donations, Solana Pay, Actions/Blinks, optional campaign assets and high-throughput transaction monitoring.

Provider-specific Helius access belongs behind `SolanaDataService`.

```ts
interface SolanaDataService {
  getAccount(address: string): Promise<unknown>;
  getBalances(address: string): Promise<unknown>;
  getTransaction(signature: string): Promise<unknown>;
  getTransactionsForAddress(address: string, cursor?: string): Promise<unknown>;
  getTransfersByAddress(address: string, cursor?: string): Promise<unknown>;
  subscribe(filter: SolanaSubscriptionFilter): AsyncIterable<SolanaObservation>;
}
```

Recommended division:

```text
getTransactionsForAddress -> history/backfill/detailed audit
getTransfersByAddress     -> transfer-focused reconciliation views
LaserStream / streams     -> low-latency real-time observations
Webhooks                  -> event-driven workflows
```

## 2. Solana Pay

Transfer and transaction requests map into `PaymentIntent`. Include an order/reference identifier that allows deterministic matching of on-chain payment back to the intent.

QR generation is a presentation of the canonical payment request; QR rendering is not settlement.

## 3. Actions and Blinks

```text
Blink
  -> Action
  -> PaymentIntent
  -> policy/risk
  -> transaction payload
  -> wallet preview/sign
  -> submit
  -> reconcile
```

Blinks are a distribution surface, not a second payment backend.

## 4. Sui

Sui integration may use:

- Move packages
- objects
- programmable transaction blocks (PTBs)
- supported payment assets
- zkLogin for low-friction onboarding

Organizational treasury security must remain independent from consumer zkLogin convenience.

## 5. EVM

EVM is a first-class infrastructure domain when using:

- Safe Smart Accounts
- EURe settlement
- EVM attestation protocols
- EVM USDC / CCTP routes

## 6. CCTP

CCTP is modeled as native USDC cross-chain infrastructure.

```text
USDC source
  -> burn
  -> message
  -> attestation/message service
  -> mint on destination
  -> campaign treasury
  -> reconciliation
```

Never hard-code ordinary chain IDs as CCTP domain IDs. Use a versioned `CctpDomainRegistry`.
