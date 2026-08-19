export interface RefundEntitlement { campaignId:string; contributor:string; amountBaseUnits:string; deadline:string; status:"NOT_AVAILABLE"|"AVAILABLE"|"CLAIMED"; }
export interface RefundRecord { id:string; campaignId:string; contributor:string; amountBaseUnits:string; signature?:string; createdAt:string; status:"PREPARED"|"SUBMITTED"|"CONFIRMED"|"RECONCILED"|"FAILED"; }
