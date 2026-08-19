export const UNIX_EPOCH_SECONDS = 1_000;
export function unixSeconds(date: Date | number = Date.now()): number { const ms = date instanceof Date ? date.getTime() : date; return Math.floor(ms / 1_000); }
export function fromUnixSeconds(seconds: number): Date { if (!Number.isFinite(seconds)) throw new Error("Invalid epoch seconds."); return new Date(Math.trunc(seconds) * 1_000); }
export function expiresInSeconds(seconds: number, now = Date.now()): Date { return new Date(now + seconds * 1_000); }
