export const ACTIVITY_POLLING = {
  minimumMs: 5_000,
  defaultMs: 10_000,
  maximumMs: 15_000,
} as const;

export const REALTIME_TRANSPORTS = ["websocket", "sse", "polling"] as const;
export type RealtimeTransport = (typeof REALTIME_TRANSPORTS)[number];

export function clampActivityPollingInterval(value: number): number {
  if (!Number.isFinite(value)) return ACTIVITY_POLLING.defaultMs;
  return Math.min(ACTIVITY_POLLING.maximumMs, Math.max(ACTIVITY_POLLING.minimumMs, Math.trunc(value)));
}
