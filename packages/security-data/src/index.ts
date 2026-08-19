export const PROTECTED_PROFILE_COLUMNS = ["app_role", "is_admin", "verification_level"] as const;
export const PROTECTED_VERIFICATION_COLUMNS = ["status", "verified_at", "reviewer_id", "provider_reference"] as const;
export const PROTECTED_ESCROW_COLUMNS = ["amount_minor", "asset", "platform_fee_bps_snapshot", "funded_at", "release_transaction_id"] as const;

export type SecurityInvariant =
  | "CLIENT_CANNOT_SELF_PROMOTE"
  | "CLIENT_CANNOT_FORGE_VERIFICATION"
  | "FUNDED_TRANCHE_AMOUNT_IMMUTABLE"
  | "FEE_SNAPSHOT_IMMUTABLE_AFTER_FUNDING"
  | "DEAL_ROOM_PARTICIPANTS_ONLY"
  | "WATCHLIST_OWNER_ONLY"
  | "AUDIT_APPEND_ONLY";

export const SECURITY_INVARIANTS: readonly SecurityInvariant[] = [
  "CLIENT_CANNOT_SELF_PROMOTE",
  "CLIENT_CANNOT_FORGE_VERIFICATION",
  "FUNDED_TRANCHE_AMOUNT_IMMUTABLE",
  "FEE_SNAPSHOT_IMMUTABLE_AFTER_FUNDING",
  "DEAL_ROOM_PARTICIPANTS_ONLY",
  "WATCHLIST_OWNER_ONLY",
  "AUDIT_APPEND_ONLY",
];
