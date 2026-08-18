# PWA + Offline Operations

## 1. Offline-safe operations

Campaign operators may do these offline:

```text
draft campaign content
capture evidence
create field notes
record beneficiary data locally under policy
prepare milestone report
queue reversible metadata changes
```

## 2. Never auto-execute offline treasury actions

An irreversible transaction prepared while offline must obtain renewed authorization when connectivity returns.

```text
Offline draft
  -> sync
  -> server validation
  -> conflict detection
  -> fresh policy/risk evaluation
  -> fresh approval/signature
```

## 3. Offline queue

Every queued item stores:

```text
operationId
entityType
entityId
baseRevision
payload
createdAt
deviceId
syncStatus
```

Server rejects stale updates that would overwrite a newer authoritative revision without explicit conflict resolution.

## 4. Contribution UX

Do not imply a contribution succeeded solely because a locally displayed QR was scanned while the device is offline. Payment status requires server/provider/blockchain confirmation.
