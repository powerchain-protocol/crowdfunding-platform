import { createHash, randomBytes } from "node:crypto";
import { allowedOrigins } from "./request-security";

export type OAuthProvider = "google" | "x";
export type OAuthCookieState = { state: string; verifier: string; returnTo: string; remembered: boolean };

export const OAUTH_COOKIE_MAX_AGE = 10 * 60;
export function oauthCookieName(provider: OAuthProvider) { return `powerchain_oauth_${provider}`; }
export function oauthCookieOptions() { return { httpOnly: true, secure: process.env.NODE_ENV === "production", sameSite: "lax" as const, path: "/", maxAge: OAUTH_COOKIE_MAX_AGE }; }

export function safeReturnTo(value: string | null): string {
  const fallback = process.env.NEXT_PUBLIC_DASHBOARD_URL || "http://localhost:3004";
  if (!value) return fallback;
  try {
    const target = new URL(value);
    const extra = [process.env.AUTH_APP_URL, fallback].filter(Boolean).map((item) => new URL(item!).origin);
    if ([...allowedOrigins(), ...extra].includes(target.origin)) return target.toString();
  } catch { /* rejected */ }
  return fallback;
}

function randomUrlSafe(bytes = 32) { return randomBytes(bytes).toString("base64url"); }
export function createPkce() {
  const verifier = randomUrlSafe(48);
  const challenge = createHash("sha256").update(verifier).digest("base64url");
  return { state: randomUrlSafe(24), verifier, challenge };
}

function required(name: string): string { const value = process.env[name]?.trim(); if (!value) throw new Error(`${name} is not configured.`); return value; }

export function callbackUrl(provider: OAuthProvider): string {
  if (provider === "x") return process.env.AUTH_X_CALLBACK_URL || "http://127.0.0.1:3000/api/auth/callback/x";
  return process.env.AUTH_GOOGLE_CALLBACK_URL || "http://127.0.0.1:3000/api/auth/callback/google";
}

export function buildAuthorizationUrl(provider: OAuthProvider, state: string, challenge: string): string {
  if (provider === "x") {
    const url = new URL("https://x.com/i/oauth2/authorize");
    url.search = new URLSearchParams({ response_type: "code", client_id: required("AUTH_X_ID"), redirect_uri: callbackUrl("x"), scope: "tweet.read users.read offline.access", state, code_challenge: challenge, code_challenge_method: "S256" }).toString();
    return url.toString();
  }
  const url = new URL("https://accounts.google.com/o/oauth2/v2/auth");
  url.search = new URLSearchParams({ response_type: "code", client_id: required("AUTH_GOOGLE_ID"), redirect_uri: callbackUrl("google"), scope: "openid email profile", state, code_challenge: challenge, code_challenge_method: "S256", access_type: "online", prompt: "select_account" }).toString();
  return url.toString();
}

export async function exchangeOAuthCode(provider: OAuthProvider, code: string, verifier: string) {
  if (provider === "x") {
    const body = new URLSearchParams({ code, grant_type: "authorization_code", client_id: required("AUTH_X_ID"), redirect_uri: callbackUrl("x"), code_verifier: verifier });
    const secret = process.env.AUTH_X_SECRET?.trim();
    const headers: Record<string, string> = { "content-type": "application/x-www-form-urlencoded" };
    if (secret) headers.authorization = `Basic ${Buffer.from(`${required("AUTH_X_ID")}:${secret}`).toString("base64")}`;
    const tokenResponse = await fetch("https://api.x.com/2/oauth2/token", { method: "POST", headers, body, cache: "no-store" });
    if (!tokenResponse.ok) throw new Error("X token exchange failed.");
    const token = await tokenResponse.json() as { access_token?: string };
    if (!token.access_token) throw new Error("X did not return an access token.");
    const profileResponse = await fetch("https://api.x.com/2/users/me?user.fields=profile_image_url,name,username", { headers: { authorization: `Bearer ${token.access_token}` }, cache: "no-store" });
    if (!profileResponse.ok) throw new Error("X user profile lookup failed.");
    const profile = await profileResponse.json() as { data?: { id?: string; name?: string; username?: string; profile_image_url?: string } };
    if (!profile.data?.id) throw new Error("X profile did not include a stable user id.");
    return { provider: "X" as const, providerSubject: profile.data.id, ...(profile.data.name ? { displayName: profile.data.name } : {}), ...(profile.data.username ? { handle: profile.data.username } : {}), ...(profile.data.profile_image_url ? { avatarUrl: profile.data.profile_image_url } : {}) };
  }

  const body = new URLSearchParams({ code, client_id: required("AUTH_GOOGLE_ID"), client_secret: required("AUTH_GOOGLE_SECRET"), redirect_uri: callbackUrl("google"), grant_type: "authorization_code", code_verifier: verifier });
  const tokenResponse = await fetch("https://oauth2.googleapis.com/token", { method: "POST", headers: { "content-type": "application/x-www-form-urlencoded" }, body, cache: "no-store" });
  if (!tokenResponse.ok) throw new Error("Google token exchange failed.");
  const token = await tokenResponse.json() as { access_token?: string };
  if (!token.access_token) throw new Error("Google did not return an access token.");
  const profileResponse = await fetch("https://openidconnect.googleapis.com/v1/userinfo", { headers: { authorization: `Bearer ${token.access_token}` }, cache: "no-store" });
  if (!profileResponse.ok) throw new Error("Google profile lookup failed.");
  const profile = await profileResponse.json() as { sub?: string; email?: string; email_verified?: boolean; name?: string; picture?: string };
  if (!profile.sub || !profile.email || profile.email_verified !== true) throw new Error("Google profile is missing a verified email address.");
  return { provider: "GOOGLE" as const, providerSubject: profile.sub, email: profile.email, ...(profile.name ? { displayName: profile.name } : {}), ...(profile.picture ? { avatarUrl: profile.picture } : {}) };
}
