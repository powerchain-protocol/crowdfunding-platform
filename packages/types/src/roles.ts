export const ROLES=["USER","CAMPAIGN_OWNER","CONTRIBUTOR","REVIEWER","FINANCE","TREASURY_APPROVER","AUDITOR","MODERATOR","ADMIN","SUPER_ADMIN"] as const;
export type CrowdfundingRole=(typeof ROLES)[number];
