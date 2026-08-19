CREATE TABLE IF NOT EXISTS "user_preferences" (
  "userId" UUID PRIMARY KEY,
  "defaultCurrency" TEXT NOT NULL DEFAULT 'USD',
  "solanaNetwork" TEXT NOT NULL DEFAULT 'devnet',
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT "user_preferences_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT "user_preferences_currency_check" CHECK ("defaultCurrency" IN ('USD','EUR','GBP')),
  CONSTRAINT "user_preferences_network_check" CHECK ("solanaNetwork" IN ('devnet','mainnet-beta'))
);

CREATE TABLE IF NOT EXISTS "trusted_wallets" (
  "id" UUID PRIMARY KEY,
  "userId" UUID NOT NULL,
  "organizationId" UUID,
  "address" TEXT NOT NULL,
  "network" TEXT NOT NULL,
  "kind" TEXT NOT NULL DEFAULT 'PERSONAL',
  "label" TEXT,
  "status" TEXT NOT NULL DEFAULT 'ACTIVE',
  "verifiedAt" TIMESTAMP(3),
  "verificationSource" TEXT,
  "verifiedByOperatorId" UUID,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT "trusted_wallets_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT "trusted_wallets_network_check" CHECK ("network" IN ('devnet','mainnet-beta')),
  CONSTRAINT "trusted_wallets_kind_check" CHECK ("kind" IN ('PERSONAL','ORGANIZATION','TREASURY','BENEFICIARY','OPERATOR')),
  CONSTRAINT "trusted_wallets_status_check" CHECK ("status" IN ('ACTIVE','SUSPENDED','REVOKED')),
  CONSTRAINT "trusted_wallets_user_address_network_key" UNIQUE ("userId","address","network")
);
CREATE INDEX IF NOT EXISTS "trusted_wallets_organizationId_network_idx" ON "trusted_wallets"("organizationId","network");
CREATE INDEX IF NOT EXISTS "trusted_wallets_address_network_idx" ON "trusted_wallets"("address","network");

CREATE TABLE IF NOT EXISTS "operator_profiles" (
  "id" UUID PRIMARY KEY,
  "userId" UUID NOT NULL UNIQUE,
  "operatorType" TEXT NOT NULL,
  "status" TEXT NOT NULL DEFAULT 'ACTIVE',
  "permissions" JSONB NOT NULL,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT "operator_profiles_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT "operator_profiles_type_check" CHECK ("operatorType" IN ('PLATFORM','COMPLIANCE','TREASURY','MODERATION','SUPPORT','INDEXER')),
  CONSTRAINT "operator_profiles_status_check" CHECK ("status" IN ('ACTIVE','SUSPENDED','REVOKED'))
);
CREATE INDEX IF NOT EXISTS "operator_profiles_type_status_idx" ON "operator_profiles"("operatorType","status");
