# Escrow & Tranche Releases

**Canonical product version:** `1.0.0`

PowerChain uses a campaign escrow/release-vault abstraction to reserve campaign funds and release them tranche-by-tranche. Whether a deployment constitutes legal “escrow” is jurisdiction/provider dependent; the technical model does not make that legal determination.

## Tranche lifecycle

```text
PLANNED
  -> FUNDED
  -> EVIDENCE_REQUIRED
  -> READY_FOR_APPROVAL
  -> APPROVED
  -> RELEASED
```

A funded tranche is not automatically releasable.

## Required release gates

A release may require all of:

```text
funding allocation exists
milestone evidence verified
milestone approved
identity/business checks verified
required agreement fully signed
active fee policy resolved
beneficiary/destination validated
treasury policy approved
multisig threshold met
transaction decoded/simulated
```

Only then can execution be prepared.

## Transparent fee model

The platform fee is stored as policy, not hidden as a balance adjustment.

```text
Gross tranche
- platform fee (basis points)
- estimated network/provider cost
= net beneficiary amount
```

The final review must show the exact configured platform fee before approval/signing. Ledger entries record fees separately from campaign liabilities.

## No UI shortcut

“Approve proof” must never directly move money. Evidence verification, milestone approval, treasury approval and transaction execution remain independent state transitions with separate audit events.
