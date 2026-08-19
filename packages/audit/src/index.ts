export interface AuditEventRecord {
  id: string;
  sequence: bigint;
  type: string;
  resourceType: string;
  resourceId: string;
  actorId?: string;
  organizationId?: string;
  requestId?: string;
  correlationId?: string;
  payloadHash: string;
  previousEventHash?: string;
  eventHash: string;
  createdAt: string;
}

/** Append-only by contract: mutation/delete methods are intentionally absent. */
export interface AuditEventStore {
  append(event: AuditEventRecord): Promise<void>;
  list(input: { resourceType?: string; resourceId?: string; afterSequence?: bigint; limit?: number }): Promise<readonly AuditEventRecord[]>;
}

export function canonicalAuditMaterial(event: Omit<AuditEventRecord, "eventHash">): string {
  return [event.sequence.toString(), event.type, event.resourceType, event.resourceId, event.actorId ?? "", event.organizationId ?? "", event.requestId ?? "", event.correlationId ?? "", event.payloadHash, event.previousEventHash ?? "", event.createdAt].join("|");
}
