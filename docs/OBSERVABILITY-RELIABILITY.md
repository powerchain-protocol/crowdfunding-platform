# Observability + Reliability

## 1. Telemetry

Use structured logs, distributed tracing and metrics with:

```text
requestId
correlationId
paymentIntentId
campaignId
treasuryId
provider
network
```

Do not log secrets, private keys, full bank details or unnecessary PII.

## 2. Metrics

```text
payment_success_rate
payment_confirmation_seconds
bank_settlement_seconds
bank_reconciliation_exceptions
cctp_settlement_seconds
campaign_funding_rate
treasury_reconciliation_errors
webhook_ingest_latency
webhook_verification_failures
provider_api_errors
agent_tool_failures
```

## 3. Reliability primitives

```text
idempotency
bounded retries
exponential backoff
dead-letter queues
circuit breakers
timeouts
rate limits
replay protection
reconciliation
```

## 4. Provider fallback

For read-only/realtime blockchain status, a fallback ladder may use:

```text
WebSocket / stream
  -> SSE (application stream)
  -> polling
```

Do not synthesize blockchain events during provider outages. Expose degraded/unknown state instead.

## 5. Health

```text
/api/v1/health       process/basic liveness
/api/v1/readiness    dependencies required for traffic
/api/v1/system       authenticated operational detail
```

Readiness must fail closed for dependencies required to perform financial writes safely.
