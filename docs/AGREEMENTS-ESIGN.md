# Agreements & In-App Electronic Signatures

**Canonical product version:** `1.0.0`

PowerChain supports a native agreement workflow built around **counsel-approved versioned templates**. The platform may auto-fill deal terms, but it does not generate legal advice or determine whether a template is suitable for a jurisdiction.

## Template lifecycle

```text
Legal/counsel authors template
  -> template version approved
  -> required fields declared
  -> campaign/deal terms loaded from authoritative records
  -> document rendered
  -> rendered content hashed
  -> human review
  -> signature request
```

Signature collection is disabled for templates that do not carry a counsel approval reference/date in the template registry.

## Auto-filled terms

Examples:

```text
CAMPAIGN_TITLE
ORGANIZATION_NAME
TARGET_AMOUNT
SETTLEMENT_ASSET
TREASURY_ADDRESS
APPROVAL_THRESHOLD
MILESTONE_SCHEDULE
TRANCHE_SCHEDULE
PLATFORM_FEE_POLICY
```

The final rendered document—not the template or form fields—is the signing artifact.

## Native e-signature

A signature record binds:

```text
agreement ID
signer user ID
signer legal name
signer role
exact rendered content hash
consent text/version
timestamp
request ID
optional privacy-preserving device/network hashes
```

If signed content changes, create a new agreement version/signature request. Do not silently update a signed artifact.

## Tamper-evident audit trail

Agreement creation, rendering, review, signature requests, signatures, voiding and supersession append audit events to a sequence-ordered hash chain:

```text
previousEventHash
  + payloadHash
  + canonical event metadata
  -> eventHash
```

A hash chain is tamper-evident, not magically tamper-proof. Production deployments should combine it with immutable/WORM retention controls and database permissions that prevent normal application roles from updating/deleting audit history.
