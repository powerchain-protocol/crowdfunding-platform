export interface FeeSnapshot { id:string; campaignId:string; fundingEventId:string; platformFeeBps:number; treasuryFund:string; snapshottedAt:string; }
export interface FeeBreakdown { grossBaseUnits:string; platformFeeBaseUnits:string; networkFeeBaseUnits?:string; netBaseUnits:string; }
