# Deal Room

## Purpose

A deal room is a private collaboration space between authenticated participants associated with a founder listing and optionally a specific offer.

## Capabilities

```text
Chat
Document sharing
Photo sharing
Video sharing
Video-call scheduling/joining
Offer negotiation
Agreement review
Signature status
Milestone proof review
Audit history
```

## Access model

`deal_rooms`, participants, messages and attachments are participant-only resources. Postgres RLS verifies membership for reads and writes. A guessed room UUID is not authorization.

```text
FOUNDER
INVESTOR
ADVISOR
PLATFORM_REVIEWER
```

Messages must bind `sender_user_id` to `auth.uid()` and the sender must be an active room participant.

## Realtime model

The UI currently defines a realtime-provider boundary and a 5–15 second safe polling fallback. Production may replace polling with an authenticated realtime subscription without changing domain contracts.

Chat writes intentionally fail closed in the scaffold until authenticated persistence is configured.

## Attachments

Before upload:

```text
validate type / size
compute SHA-256
request authorized upload target
store encrypted/private object
persist storage key + hash
append audit event
```

Deal-room attachments are not public campaign evidence by default. Promotion of a private attachment into a public milestone proof requires an explicit workflow and privacy review.

## Video calls

`MeetingProvider` creates short-lived meeting references for authenticated participants. The database stores provider references and audit metadata, not arbitrary permanent public meeting links.
