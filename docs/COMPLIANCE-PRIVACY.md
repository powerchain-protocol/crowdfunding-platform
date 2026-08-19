# Compliance + Privacy

## 1. Scope

PowerChain provides product and technical controls; legal obligations vary by entity, campaign, jurisdiction, supporter location, payment provider and economic substance.

## 2. Product-level restrictions for soft tokenization

The non-investment supporter mode should not grant:

- ownership/equity
- debt/repayment
- yield
- revenue share
- profit share
- guaranteed appreciation

Do not market a technical badge as legally exempt from securities or other financial rules merely because it is called an attestation.

## 3. Campaign review

Policy may require:

```text
organization verification
creator verification
beneficiary verification
sanctions/restricted-party controls
geographic restrictions
campaign-purpose review
high-risk destination review
source-of-funds review where required
```

The exact implementation must be determined with qualified compliance/legal review and supported provider capabilities.

## 4. Privacy classification

Classify every field:

```text
PUBLIC
ORGANIZATION_INTERNAL
RESTRICTED
SENSITIVE
SECRET
```

Public chain writes should be limited to data deliberately classified as public.

## 5. Donor privacy

A campaign can expose aggregate and settlement transparency without publishing donor identity.

Prefer:

```text
public transaction reference
amount/asset where appropriate
campaign treasury
receipt hash / attestation UID
```

Avoid public storage of bank account data, email, identity records or beneficiary medical/identity information.

## 6. Evidence

Use:

```text
encrypted object storage
+ immutable content hash
+ controlled metadata
+ optional on-chain commitment
```

## 7. Retention

Define retention periods per data class and provider/legal requirement. Deletion/erasure workflows must distinguish off-chain deletable records from immutable public-chain data.

## Founder / investor listings

Founder investment listings are not treated as donation campaigns. Production enablement requires a jurisdiction-aware policy for offering eligibility, investor eligibility/suitability where applicable, disclosures, counsel-approved agreements, communications retention, escrow terms and any transfer/resale constraints.

Marketplace preference matching and ranking are discovery tools. They must not be represented as personalized investment advice or a guarantee that an opportunity is suitable for an investor.
