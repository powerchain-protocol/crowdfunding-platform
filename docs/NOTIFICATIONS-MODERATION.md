# Notifications, Reporting & Moderation

**Canonical product version:** `1.0.0`

## Notifications

PowerChain supports:

```text
In-app notification center + bell
Email delivery
```

High-value events include identity updates, signature requests, evidence-review requests, tranche readiness/releases, reports and suspensions.

Notification persistence is user-scoped. Email delivery is server-side and idempotent. Provider message IDs, send status and failures are recorded for operations.

Users can configure non-critical delivery preferences; security/financial alerts may remain mandatory by policy.

## Reports

Public campaign/report flows create a `ModerationReport` with:

```text
resource
reason
severity
details
reporter (when authenticated)
createdAt
```

Report submission must be rate-limited and abuse-resistant. Do not treat report count alone as proof of wrongdoing.

## Auto-suspension

PowerChain supports deterministic, configurable auto-suspension. It may trigger from:

- configured critical reason + highest severity, or
- minimum distinct reporters + weighted severity threshold.

Auto-suspension is **reversible** and routes the resource to human moderation review. It does not automatically delete content or seize/release treasury funds.

## Append-only moderation audit

Every report transition and moderation action appends an audit event. Moderators cannot edit historical decisions in place; corrections create new events referencing the prior action.
