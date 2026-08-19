export type DealRoomParticipantRole = "FOUNDER" | "INVESTOR" | "ADVISOR" | "PLATFORM_REVIEWER";
export type DealRoomMessageKind = "TEXT" | "DOCUMENT" | "IMAGE" | "VIDEO" | "SYSTEM";

export interface DealRoomParticipant {
  userId: string;
  role: DealRoomParticipantRole;
  displayName: string;
  joinedAt: string;
}

export interface DealRoomMessage {
  id: string;
  roomId: string;
  senderUserId: string;
  kind: DealRoomMessageKind;
  body?: string;
  attachmentId?: string;
  createdAt: string;
  editedAt?: string;
}

export interface DealRoomAttachment {
  id: string;
  roomId: string;
  uploaderUserId: string;
  fileName: string;
  mediaType: "DOCUMENT" | "IMAGE" | "VIDEO";
  contentType: string;
  sizeBytes: number;
  sha256: string;
  storageKey: string;
  createdAt: string;
}

export interface DealRoomCall {
  id: string;
  roomId: string;
  provider: string;
  meetingReference: string;
  startsAt: string;
  createdByUserId: string;
}

export function clampRealtimePollInterval(value: number): number {
  if (!Number.isFinite(value)) return 5_000;
  return Math.min(15_000, Math.max(5_000, Math.trunc(value)));
}
