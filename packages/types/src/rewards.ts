export type RewardKind="CERTIFICATE"|"BADGE"|"TOKEN"|"TICKET";
export interface RewardPolicy { id:string; campaignId:string; kind:RewardKind; mint?:string; minimumContributionBaseUnits?:string; transferable:boolean; financialRights:false; }
export interface RewardReceipt { id:string; campaignId:string; contributor:string; policyId:string; assetId?:string; signature?:string; issuedAt:string; }
