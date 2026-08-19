export type EscrowStatus="OPEN"|"SUCCESS"|"FAILED"|"REFUNDING"|"WITHDRAWN"|"CLOSED";
export interface CampaignEscrow { id:string; campaignId:string; vault:string; asset:string; goalBaseUnits:string; fundedBaseUnits:string; deadline:string; feeSnapshotId?:string; status:EscrowStatus; }
export interface MilestoneClaim { id:string; campaignId:string; milestoneId:string; proofUri:string; proofHash:string; amountBaseUnits:string; owner:string; status:"PREPARED"|"PROOF_SUBMITTED"|"APPROVED"|"CLAIMED"|"REJECTED"; signature?:string; }
