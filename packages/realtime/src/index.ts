export type RealtimeTransport="WEBSOCKET"|"SSE"|"POLLING";
export const REALTIME_FALLBACK_ORDER:readonly RealtimeTransport[]=["WEBSOCKET","SSE","POLLING"];
export function clampPollInterval(ms:number):number{return Math.min(15_000,Math.max(5_000,Math.trunc(ms)))}
export interface ActivityEvent { id:string; campaignId:string; kind:"CONTRIBUTION"|"WITHDRAWAL"|"REFUND"|"MILESTONE_CLAIM"|"REWARD"; signature:string; wallet?:string; amountBaseUnits?:string; occurredAt:string; }
export * from "./client";
