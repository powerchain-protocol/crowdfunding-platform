import { createHash, createHmac, randomBytes, scrypt as scryptCallback, timingSafeEqual } from "node:crypto";
import { promisify } from "node:util";
import { prisma } from "@powerchain/database";
import type { Prisma } from "@prisma/client";
import { normalizeEmail, validatePassword, type PlatformRole } from "./index";

const scrypt = promisify(scryptCallback);
const KEY_BYTES = 64;
const SHORT_SESSION_SECONDS = 60 * 60 * 12;

export async function hashPassword(password: string): Promise<string> {
  const errors = validatePassword(password);
  if (errors.length) throw new Error(errors.join(" "));
  const salt = randomBytes(16);
  const key = await scrypt(password, salt, KEY_BYTES) as Buffer;
  return `scrypt$${salt.toString("base64url")}$${key.toString("base64url")}`;
}

export async function verifyPassword(password: string, encoded: string): Promise<boolean> {
  const [kind, saltB64, keyB64] = encoded.split("$");
  if (kind !== "scrypt" || !saltB64 || !keyB64) return false;
  const expected = Buffer.from(keyB64, "base64url");
  const actual = await scrypt(password, Buffer.from(saltB64, "base64url"), expected.length) as Buffer;
  return actual.length === expected.length && timingSafeEqual(actual, expected);
}

export function hashSessionToken(token: string): string {
  return createHash("sha256").update(token).digest("hex");
}

function privacyHash(value: string | undefined): string | undefined {
  const secret = process.env.AUTH_FINGERPRINT_SECRET?.trim();
  if (!value || !secret) return undefined;
  return createHmac("sha256", secret).update(value).digest("hex");
}

export async function createSession(
  userId: string,
  options: number | { ttlSeconds?: number; remembered?: boolean; ip?: string; userAgent?: string } = SHORT_SESSION_SECONDS,
) {
  const normalized = typeof options === "number" ? { ttlSeconds: options } : options;
  const remembered = normalized.remembered === true;
  const rememberDays = Math.max(1, Math.min(60, Number(process.env.AUTH_REMEMBER_DAYS || 27)));
  const ttlSeconds = normalized.ttlSeconds ?? (remembered ? rememberDays * 24 * 60 * 60 : SHORT_SESSION_SECONDS);
  const token = randomBytes(32).toString("base64url");
  const expiresAt = new Date(Date.now() + ttlSeconds * 1000);
  const ipHash = remembered ? privacyHash(normalized.ip) : undefined;
  const userAgentHash = remembered ? privacyHash(normalized.userAgent) : undefined;
  await prisma.session.create({
    data: {
      userId,
      tokenHash: hashSessionToken(token),
      expiresAt,
      remembered,
      ...(ipHash ? { ipHash } : {}),
      ...(userAgentHash ? { userAgentHash } : {}),
    },
  });
  return { token, expiresAt, remembered };
}

export async function getSessionByToken(token: string) {
  const now = new Date();
  const session = await prisma.session.findUnique({
    where: { tokenHash: hashSessionToken(token) },
    include: { user: { include: { memberships: { where: { status: "ACTIVE" }, include: { organization: true } } } } },
  });
  if (!session || session.revokedAt || session.expiresAt <= now || session.user.deletedAt) return null;
  void prisma.session.update({ where: { id: session.id }, data: { lastSeenAt: now } }).catch(() => undefined);
  return session;
}

export async function revokeSessionToken(token: string) {
  await prisma.session.updateMany({ where: { tokenHash: hashSessionToken(token), revokedAt: null }, data: { revokedAt: new Date() } });
}

async function createWorkspaceForUser(tx: Prisma.TransactionClient, userId: string, name: string, role = "OWNER") {
  const slugBase = name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") || "workspace";
  const organization = await tx.organization.create({ data: { name, slug: `${slugBase}-${randomBytes(3).toString("hex")}` } });
  await tx.organizationMembership.create({ data: { userId, organizationId: organization.id, role } });
  const days = Number(process.env.SAAS_TRIAL_DAYS || 14);
  const start = new Date();
  const end = new Date(start.getTime() + days * 86_400_000);
  await tx.saaSSubscription.create({ data: { organizationId: organization.id, planCode: process.env.SAAS_DEFAULT_PLAN || "STARTER", status: "TRIALING", currentPeriodStart: start, currentPeriodEnd: end } });
  await tx.userPreference.create({ data: { userId, defaultCurrency: "USD", solanaNetwork: "devnet" } });
  return organization;
}

export async function registerUser(input: { email: string; password: string; displayName?: string; organizationName?: string }) {
  const email = normalizeEmail(input.email);
  const passwordHash = await hashPassword(input.password);
  return prisma.$transaction(async (tx: Prisma.TransactionClient) => {
    const user = await tx.user.create({ data: { email, passwordHash, primaryRole: "CREATOR", ...(input.displayName !== undefined ? { displayName: input.displayName } : {}) } });
    const organization = await createWorkspaceForUser(tx, user.id, input.organizationName || `${input.displayName || "My"} Workspace`);
    return { user, organization };
  });
}

export async function authenticateUser(email: string, password: string) {
  const user = await prisma.user.findUnique({ where: { email: normalizeEmail(email) } });
  if (!user || user.status !== "ACTIVE" || user.deletedAt || !(await verifyPassword(password, user.passwordHash))) return null;
  return user;
}

export type OAuthIdentityInput = {
  provider: "GOOGLE" | "X" | "DEMO_X";
  providerSubject: string;
  email?: string;
  displayName?: string;
  avatarUrl?: string;
  handle?: string;
  primaryRole?: "CREATOR" | "DEMO";
};

export async function upsertOAuthUser(input: OAuthIdentityInput) {
  const existingIdentity = await prisma.authIdentity.findUnique({
    where: { provider_providerSubject: { provider: input.provider, providerSubject: input.providerSubject } },
    include: { user: true },
  });
  if (existingIdentity?.user && !existingIdentity.user.deletedAt) return existingIdentity.user;

  const normalizedEmail = input.email ? normalizeEmail(input.email) : `${input.provider.toLowerCase()}+${input.providerSubject}@oauth.powerchain.local`;
  return prisma.$transaction(async (tx: Prisma.TransactionClient) => {
    let user = await tx.user.findUnique({ where: { email: normalizedEmail } });
    if (!user) {
      user = await tx.user.create({
        data: {
          email: normalizedEmail,
          passwordHash: "oauth$disabled",
          displayName: input.displayName || input.handle || "PowerChain Creator",
          ...(input.avatarUrl ? { avatarUrl: input.avatarUrl } : {}),
          primaryRole: input.primaryRole || "CREATOR",
        },
      });
      await createWorkspaceForUser(tx, user.id, `${input.displayName || input.handle || "Creator"} Workspace`);
    }
    await tx.authIdentity.upsert({
      where: { provider_providerSubject: { provider: input.provider, providerSubject: input.providerSubject } },
      update: { userId: user.id, ...(input.handle ? { handle: input.handle } : {}), ...(input.email ? { email: input.email } : {}) },
      create: { userId: user.id, provider: input.provider, providerSubject: input.providerSubject, ...(input.handle ? { handle: input.handle } : {}), ...(input.email ? { email: input.email } : {}) },
    });
    return user;
  });
}

export function membershipRoles(session: Awaited<ReturnType<typeof getSessionByToken>>): PlatformRole[] {
  if (!session) return [];
  const roles = session.user.memberships.map((m: (typeof session.user.memberships)[number]) => m.role as PlatformRole);
  const primary = session.user.primaryRole as PlatformRole;
  return Array.from(new Set([primary, ...roles]));
}

export async function createPasswordReset(email: string) {
  const user = await prisma.user.findUnique({ where: { email: normalizeEmail(email) } });
  if (!user || user.deletedAt) return null;
  const token = randomBytes(32).toString("base64url");
  const expiresAt = new Date(Date.now() + 30 * 60 * 1000);
  await prisma.passwordResetToken.create({ data: { userId: user.id, tokenHash: hashSessionToken(token), expiresAt } });
  return { token, expiresAt, userId: user.id };
}

export async function consumePasswordReset(token: string, newPassword: string) {
  const tokenHash = hashSessionToken(token);
  const row = await prisma.passwordResetToken.findUnique({ where: { tokenHash } });
  if (!row || row.usedAt || row.expiresAt <= new Date()) return false;
  const passwordHash = await hashPassword(newPassword);
  await prisma.$transaction([
    prisma.user.update({ where: { id: row.userId }, data: { passwordHash } }),
    prisma.passwordResetToken.update({ where: { id: row.id }, data: { usedAt: new Date() } }),
    prisma.session.updateMany({ where: { userId: row.userId, revokedAt: null }, data: { revokedAt: new Date() } }),
  ]);
  return true;
}
