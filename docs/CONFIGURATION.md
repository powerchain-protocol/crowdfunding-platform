# Configuration

## Environment tiers

```text
development
-> test
-> staging
-> production
```

## Network tiers

```text
Solana: devnet / mainnet-beta
Sui: testnet / mainnet
EVM: configured testnets / configured mainnets
Monerium: sandbox / production
CCTP: test / production configuration
```

## Suggested server-side variables

```text
POWERCHAIN_ENV
DATABASE_URL
REDIS_URL
QUEUE_URL
OBJECT_STORAGE_BUCKET
KMS_KEY_ID

SOLANA_NETWORK
SOLANA_RPC_URL
HELIUS_API_KEY

SUI_NETWORK
SUI_RPC_URL

EVM_CHAIN_ID
EVM_RPC_URL

MONERIUM_ENVIRONMENT
MONERIUM_CLIENT_ID
MONERIUM_CLIENT_SECRET
MONERIUM_WEBHOOK_SECRET

SAFE_TRANSACTION_SERVICE_URL
SAFE_API_KEY

CCTP_ENVIRONMENT

EAS_CHAIN_ID
EAS_CONTRACT_ADDRESS
```

Provider-specific values should be loaded through validated typed configuration, not read ad hoc throughout the application.

## Client-exposed configuration

Only expose non-secret public metadata needed by the UI, such as supported networks, asset symbols and public contract addresses. Server endpoints remain authoritative for financial configuration.

## Identity, agreements, notifications and moderation

Server-only configuration may include:

```text
IDENTITY_PROVIDER
IDENTITY_PROVIDER_API_KEY
IDENTITY_DOCUMENT_BUCKET
IDENTITY_RETENTION_POLICY
AGREEMENT_TEMPLATE_STORE
ESIGN_TIMESTAMP_PROVIDER
AUDIT_IMMUTABLE_STORE
EMAIL_PROVIDER
EMAIL_PROVIDER_API_KEY
EMAIL_FROM
MODERATION_AUTO_SUSPEND_ENABLED
MODERATION_DISTINCT_REPORTER_THRESHOLD
MODERATION_WEIGHTED_SEVERITY_THRESHOLD
```

Never expose identity-provider, email-provider, immutable-audit-store or document-storage credentials through `NEXT_PUBLIC_*` variables.
