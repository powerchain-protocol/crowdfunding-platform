import type {ActivityEvent,RealtimeTransport} from "@powerchain/realtime";
export interface RealtimeGateway { publish(event:ActivityEvent):Promise<void>; health():Promise<{transport:RealtimeTransport;ok:boolean}>; }
export const realtimeDeploymentNote="Deploy a stateful WebSocket gateway where supported; application clients fall back to SSE and 5–15 second polling.";
