export type SystemMode="LIVE"|"DEGRADED"|"MAINTENANCE"|"DEMO";
export interface SystemStatus { mode:SystemMode; api:boolean; database:boolean; solana:boolean; indexer:boolean; realtime:boolean; payments:boolean; updatedAt:string; }
