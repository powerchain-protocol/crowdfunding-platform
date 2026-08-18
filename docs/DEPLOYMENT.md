# Deployment

## Production shape

```text
CDN / WAF
  -> Next.js web apps
  -> API gateway
  -> domain services
  -> Postgres
  -> Redis / queue
  -> object storage
  -> provider adapters
       -> Monerium
       -> Safe
       -> Helius / Solana
       -> Sui RPC
       -> EVM RPC
       -> CCTP
```

## Release gates

Before production:

- migrations reviewed and reversible where practical
- no test credentials in production
- provider sandbox flags disabled
- treasury destinations verified
- asset/network registries reviewed
- contract/program identifiers live-verified
- webhook verification enabled
- idempotency storage operational
- queue/DLQ operational
- backups and restore test complete
- monitoring/alerts enabled
- incident runbook assigned
- security review complete

## Mainnet write gate

Mainnet write capability is enabled only when:

```text
network configuration verified
+ provider credentials verified
+ treasury addresses verified
+ policy engine available
+ risk engine available where required
+ signing path verified
+ reconciliation workers healthy
+ audit sink healthy
```

Fail closed rather than silently falling back to mock/synthetic write paths.
