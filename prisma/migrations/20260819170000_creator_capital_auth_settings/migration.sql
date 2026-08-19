ALTER TABLE "users" ADD COLUMN IF NOT EXISTS "primaryRole" TEXT NOT NULL DEFAULT 'CREATOR';
-- PowerChain v1.0.0: creator capital, social identities, RPC settings, ledger and prompts.
ALTER TABLE "Campaign" ADD COLUMN IF NOT EXISTS "logoUrl" TEXT;
ALTER TABLE "Campaign" ADD COLUMN IF NOT EXISTS "coverImageUrl" TEXT;
ALTER TABLE "Campaign" ADD COLUMN IF NOT EXISTS "ownerAvatarUrl" TEXT;
ALTER TABLE "users" ADD COLUMN IF NOT EXISTS "avatarUrl" TEXT;
ALTER TABLE "users" ADD COLUMN IF NOT EXISTS "deletionRequestedAt" TIMESTAMP(3);
ALTER TABLE "users" ADD COLUMN IF NOT EXISTS "deletedAt" TIMESTAMP(3);
ALTER TABLE "sessions" ADD COLUMN IF NOT EXISTS "remembered" BOOLEAN NOT NULL DEFAULT false;
ALTER TABLE "sessions" ADD COLUMN IF NOT EXISTS "ipHash" TEXT;
ALTER TABLE "sessions" ADD COLUMN IF NOT EXISTS "userAgentHash" TEXT;
ALTER TABLE "sessions" ADD COLUMN IF NOT EXISTS "lastSeenAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;
ALTER TABLE "user_preferences" ADD COLUMN IF NOT EXISTS "theme" TEXT NOT NULL DEFAULT 'system';
ALTER TABLE "user_preferences" ADD COLUMN IF NOT EXISTS "locale" TEXT NOT NULL DEFAULT 'en';

CREATE TABLE IF NOT EXISTS "auth_identities" (
  "id" UUID PRIMARY KEY,
  "userId" UUID NOT NULL REFERENCES "users"("id") ON DELETE CASCADE,
  "provider" TEXT NOT NULL,
  "providerSubject" TEXT NOT NULL,
  "handle" TEXT,
  "email" TEXT,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  UNIQUE ("provider", "providerSubject")
);
CREATE INDEX IF NOT EXISTS "auth_identities_user_provider_idx" ON "auth_identities"("userId", "provider");

CREATE TABLE IF NOT EXISTS "user_rpc_settings" (
  "userId" UUID PRIMARY KEY REFERENCES "users"("id") ON DELETE CASCADE,
  "customSolanaRpcUrl" TEXT,
  "customSolanaWsUrl" TEXT,
  "heliusApiKeyCiphertext" TEXT,
  "heliusApiKeyIv" TEXT,
  "heliusApiKeyTag" TEXT,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS "capital_pots" (
  "id" UUID PRIMARY KEY,
  "projectId" TEXT NOT NULL,
  "organizationId" UUID,
  "title" TEXT NOT NULL,
  "currency" TEXT NOT NULL DEFAULT 'USD',
  "targetMinor" NUMERIC(40,0) NOT NULL,
  "raisedMinor" NUMERIC(40,0) NOT NULL DEFAULT 0,
  "platformFeeBps" INTEGER NOT NULL DEFAULT 250,
  "status" TEXT NOT NULL DEFAULT 'OPEN',
  "stripePriceLabel" TEXT,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
);
CREATE INDEX IF NOT EXISTS "capital_pots_project_status_idx" ON "capital_pots"("projectId", "status");

CREATE TABLE IF NOT EXISTS "capital_contributions" (
  "id" UUID PRIMARY KEY,
  "potId" UUID NOT NULL REFERENCES "capital_pots"("id") ON DELETE RESTRICT,
  "userId" UUID,
  "amountMinor" NUMERIC(40,0) NOT NULL,
  "currency" TEXT NOT NULL,
  "provider" TEXT NOT NULL,
  "providerSessionId" TEXT UNIQUE,
  "providerPaymentId" TEXT UNIQUE,
  "status" TEXT NOT NULL DEFAULT 'PREPARED',
  "platformFeeMinor" NUMERIC(40,0),
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "confirmedAt" TIMESTAMP(3)
);
CREATE INDEX IF NOT EXISTS "capital_contributions_pot_status_idx" ON "capital_contributions"("potId", "status", "createdAt");

CREATE TABLE IF NOT EXISTS "ledger_journals" (
  "id" UUID PRIMARY KEY,
  "reference" TEXT UNIQUE NOT NULL,
  "type" TEXT NOT NULL,
  "status" TEXT NOT NULL DEFAULT 'POSTED',
  "source" TEXT NOT NULL,
  "sourceId" TEXT,
  "userId" UUID,
  "metadata" JSONB,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
);
CREATE TABLE IF NOT EXISTS "ledger_postings" (
  "id" UUID PRIMARY KEY,
  "journalId" UUID NOT NULL REFERENCES "ledger_journals"("id") ON DELETE CASCADE,
  "account" TEXT NOT NULL,
  "direction" TEXT NOT NULL,
  "amountMinor" NUMERIC(40,0) NOT NULL,
  "asset" TEXT NOT NULL,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
);
CREATE INDEX IF NOT EXISTS "ledger_postings_account_asset_idx" ON "ledger_postings"("account", "asset", "createdAt");

CREATE TABLE IF NOT EXISTS "x_tip_records" (
  "id" UUID PRIMARY KEY,
  "recipientUserId" UUID,
  "senderUserId" UUID,
  "xHandle" TEXT NOT NULL,
  "amountMinor" NUMERIC(40,0) NOT NULL,
  "currency" TEXT NOT NULL DEFAULT 'USD',
  "status" TEXT NOT NULL DEFAULT 'SELF_REPORTED',
  "externalUrl" TEXT NOT NULL,
  "evidenceNote" TEXT,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
);
CREATE INDEX IF NOT EXISTS "x_tip_records_handle_idx" ON "x_tip_records"("xHandle", "createdAt");

CREATE TABLE IF NOT EXISTS "saved_prompts" (
  "id" UUID PRIMARY KEY,
  "userId" UUID NOT NULL REFERENCES "users"("id") ON DELETE CASCADE,
  "title" TEXT NOT NULL,
  "prompt" TEXT NOT NULL,
  "category" TEXT,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
);
CREATE INDEX IF NOT EXISTS "saved_prompts_user_idx" ON "saved_prompts"("userId", "updatedAt");
