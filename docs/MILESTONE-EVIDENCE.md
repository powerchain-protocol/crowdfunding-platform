# Milestone Evidence & Fund-Release Gates

**Revision:** `1.3.0`

Milestone evidence is a treasury control, not a decorative campaign update.

## State model

```text
DRAFT
  -> SUBMITTED
  -> UNDER_REVIEW
  -> VERIFIED | REJECTED
```

A release gate may require one or more verified evidence records plus milestone approval and treasury-policy approval.

```text
Funding threshold reached
        ↓
Required evidence attached
        ↓
SHA-256 commitment recorded
        ↓
Evidence submitted
        ↓
Independent reviewer verification
        ↓
Milestone approved
        ↓
Treasury policy satisfied
        ↓
Disbursement proposal may be prepared
        ↓
Multisig signatures still required
```

## Storage

Proof originals may include invoices, receipts, photos, documents, beneficiary confirmations and vendor confirmations. Sensitive originals must remain in encrypted object storage with controlled access. Public chains receive only privacy-safe commitments, identifiers or proofs when appropriate.

## UI implementation

The organizer dashboard route `/campaigns/[campaignId]/milestones/[milestoneId]/evidence` demonstrates:

- multiple proof attachments;
- browser SHA-256 calculation;
- evidence type and operator notes;
- explicit submit and reviewer-verify actions;
- visible release blockers;
- a disabled fund-release action until the evidence gate is satisfied.

The browser demo is not a persistence layer. Production wiring requires authenticated upload preparation, object-storage signing, malware/content validation, immutable audit events and role-separated reviewer authorization.
