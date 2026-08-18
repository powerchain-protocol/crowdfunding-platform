# SEPA + Monerium + EURe

## 1. Purpose

PowerChain uses the bank rail to hide blockchain complexity from ordinary EUR supporters while preserving on-chain treasury transparency after settlement.

```text
Supporter
  -> banking app
  -> SEPA / SEPA Instant
  -> campaign-linked IBAN
  -> Monerium issue flow
  -> EURe
  -> campaign EVM treasury / Safe
  -> reconciliation
```

## 2. Asset boundary

- `EURe` is the EUR e-money token used for the Monerium rail.
- `USDC` is a separate Circle-issued asset and is not described as Monerium-issued.
- CCTP belongs to native USDC routing, not EURe routing.

## 3. Supporter UX

Primary UI:

```text
Give €50
[ Scan with banking app ]
```

Secondary technical disclosure:

```text
Settlement: EURe on supported EVM network
Campaign treasury: Safe
```

Do not force the supporter to acquire EURe manually before paying.

## 4. Banking intent

```ts
interface BankingPaymentIntent extends PaymentIntentBase {
  kind: "BANKING";
  rail: "SEPA" | "SEPA_INSTANT";
  beneficiary: {
    ibanId: string;
    displayName: string;
  };
  paymentReference: string;
  qrPayload: string;
  settlement: {
    asset: "EURe";
    chainId: number;
    treasuryAddress: string;
  };
}
```

## 5. QR standard

The QR generator must use a standards-compatible SEPA data-capture format applicable to the selected banking flow. PowerChain must not invent an opaque proprietary QR payload when an interoperable banking QR format is available.

The QR payload must be generated from server-validated payment intent data. The browser may render the QR but must not become authoritative for beneficiary, amount or reference.

## 6. Instant-payment wording

Do not promise universal instant settlement. Use UX such as:

```text
SEPA Instant when supported by the sending bank.
Standard SEPA processing may apply otherwise.
```

## 7. Monerium provider boundary

```ts
interface BankSettlementProvider {
  provisionAccount(input: ProvisionBankAccountInput): Promise<ProvisionedBankAccount>;
  getAccount(id: string): Promise<ProvisionedBankAccount>;
  getOrder(id: string): Promise<ProviderOrder>;
  verifyWebhook(request: RawWebhookRequest): Promise<VerifiedProviderEvent>;
  normalize(event: VerifiedProviderEvent): Promise<BankSettlementObservation[]>;
}
```

Domain code must not persist raw provider statuses as PowerChain financial truth without normalization and reconciliation.

## 8. Webhooks

```text
Monerium
  -> Webhook Gateway
  -> authentication / verification
  -> schema validation
  -> RawProviderEvent
  -> idempotency
  -> queue
  -> normalizer
  -> bank.settlement.observed
  -> reconciliation
```

Complex financial work must not run inline in the webhook HTTP handler.

## 9. Sandbox

Test environments may simulate incoming bank transfers. Production code must keep sandbox and production identities, IBANs, credentials, network IDs and treasuries strictly separated.
