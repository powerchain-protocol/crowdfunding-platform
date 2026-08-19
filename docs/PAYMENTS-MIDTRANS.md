# Midtrans Funding Adapter — Canonical v1.0.0

PowerChain supports an optional Midtrans Snap hosted-checkout rail. The merchant backend creates the checkout; provider credentials remain server-side.

```text
Donate -> POST /api/v1/funding/checkout -> Midtrans Snap redirect -> hosted payment page
      -> HTTP notification/webhook -> signature verification -> idempotent processing -> reconciliation
```

The return/finish redirect is not authoritative payment confirmation. PowerChain waits for verified provider notification/status and reconciliation. In `PAYMENTS_MODE=demo`, the API returns `CONTACT_SUPPORT`; it does not return a fabricated success state.

Environment variables:

```text
PAYMENTS_MODE=demo|midtrans
MIDTRANS_SERVER_KEY=
MIDTRANS_SNAP_URL=
MIDTRANS_FINISH_URL=
```
