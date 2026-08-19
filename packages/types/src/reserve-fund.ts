export type ReserveFundStatus = "UNFUNDED" | "FUNDED" | "LOCKED" | "DISBURSING" | "CLOSED";
export interface ReserveFund { id:string; campaignId:string; mint:string; vault:string; balanceBaseUnits:string; reservedBaseUnits:string; status:ReserveFundStatus; }
export interface ReserveGrant { id:string; reserveFundId:string; recipient:string; amountBaseUnits:string; milestoneId?:string; status:"PLANNED"|"APPROVED"|"DISBURSED"|"CANCELLED"; }
