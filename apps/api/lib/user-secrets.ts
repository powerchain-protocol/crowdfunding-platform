import { createCipheriv, createDecipheriv, randomBytes } from "node:crypto";
function key(): Buffer {
  const value = process.env.USER_SECRET_ENCRYPTION_KEY?.trim();
  if (!value) throw new Error("USER_SECRET_ENCRYPTION_KEY is required before storing private user provider credentials.");
  const decoded = /^[0-9a-f]{64}$/i.test(value) ? Buffer.from(value, "hex") : Buffer.from(value, "base64");
  if (decoded.length !== 32) throw new Error("USER_SECRET_ENCRYPTION_KEY must decode to exactly 32 bytes.");
  return decoded;
}
export function encryptUserSecret(plain: string) { const iv = randomBytes(12); const cipher = createCipheriv("aes-256-gcm", key(), iv); const ciphertext = Buffer.concat([cipher.update(plain, "utf8"), cipher.final()]); return { ciphertext: ciphertext.toString("base64"), iv: iv.toString("base64"), tag: cipher.getAuthTag().toString("base64") }; }
export function decryptUserSecret(input: { ciphertext: string; iv: string; tag: string }) { const decipher = createDecipheriv("aes-256-gcm", key(), Buffer.from(input.iv, "base64")); decipher.setAuthTag(Buffer.from(input.tag, "base64")); return Buffer.concat([decipher.update(Buffer.from(input.ciphertext, "base64")), decipher.final()]).toString("utf8"); }
