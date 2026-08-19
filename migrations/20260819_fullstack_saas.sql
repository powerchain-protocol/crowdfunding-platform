-- PowerChain v1.0.0 first-party SaaS/auth migration reference.
-- Apply through reviewed migration tooling in production.
CREATE TABLE IF NOT EXISTS users (
  id uuid PRIMARY KEY, email text UNIQUE NOT NULL, "passwordHash" text NOT NULL, "displayName" text, status text NOT NULL DEFAULT 'ACTIVE', "createdAt" timestamptz NOT NULL DEFAULT now(), "updatedAt" timestamptz NOT NULL DEFAULT now()
);
CREATE TABLE IF NOT EXISTS organizations (
  id uuid PRIMARY KEY, slug text UNIQUE NOT NULL, name text NOT NULL, status text NOT NULL DEFAULT 'ACTIVE', "createdAt" timestamptz NOT NULL DEFAULT now(), "updatedAt" timestamptz NOT NULL DEFAULT now()
);
CREATE TABLE IF NOT EXISTS organization_memberships (
  id uuid PRIMARY KEY, "userId" uuid NOT NULL REFERENCES users(id) ON DELETE CASCADE, "organizationId" uuid NOT NULL REFERENCES organizations(id) ON DELETE CASCADE, role text NOT NULL DEFAULT 'OWNER', status text NOT NULL DEFAULT 'ACTIVE', "createdAt" timestamptz NOT NULL DEFAULT now(), "updatedAt" timestamptz NOT NULL DEFAULT now(), UNIQUE("userId","organizationId")
);
CREATE TABLE IF NOT EXISTS sessions (
  id uuid PRIMARY KEY, "userId" uuid NOT NULL REFERENCES users(id) ON DELETE CASCADE, "tokenHash" text UNIQUE NOT NULL, "expiresAt" timestamptz NOT NULL, "revokedAt" timestamptz, "createdAt" timestamptz NOT NULL DEFAULT now()
);
CREATE TABLE IF NOT EXISTS saas_subscriptions (
  id uuid PRIMARY KEY, "organizationId" uuid NOT NULL REFERENCES organizations(id) ON DELETE CASCADE, "planCode" text NOT NULL, status text NOT NULL DEFAULT 'TRIALING', provider text, "providerCustomerId" text, "providerSubscriptionId" text, "currentPeriodStart" timestamptz NOT NULL, "currentPeriodEnd" timestamptz NOT NULL, "cancelAtPeriodEnd" boolean NOT NULL DEFAULT false, "createdAt" timestamptz NOT NULL DEFAULT now(), "updatedAt" timestamptz NOT NULL DEFAULT now()
);
CREATE TABLE IF NOT EXISTS usage_events (
  id uuid PRIMARY KEY, "organizationId" uuid NOT NULL REFERENCES organizations(id) ON DELETE CASCADE, "userId" uuid REFERENCES users(id) ON DELETE SET NULL, metric text NOT NULL, quantity integer NOT NULL DEFAULT 1, "idempotencyKey" text UNIQUE NOT NULL, metadata jsonb, "occurredAt" timestamptz NOT NULL DEFAULT now()
);
CREATE TABLE IF NOT EXISTS password_reset_tokens (
  id uuid PRIMARY KEY, "userId" uuid NOT NULL REFERENCES users(id) ON DELETE CASCADE, "tokenHash" text UNIQUE NOT NULL, "expiresAt" timestamptz NOT NULL, "usedAt" timestamptz, "createdAt" timestamptz NOT NULL DEFAULT now()
);
