export interface LeaderboardEntry { rank:1|2|3|number; wallet:string; campaignId:string; contributedBaseUnits:string; contributionCount:number; lastContributionAt:string; publicAlias?:string; }
export interface LeaderboardSnapshot { campaignId:string; programId:string; entries:readonly LeaderboardEntry[]; slot?:number; updatedAt:string; source:"ON_CHAIN"|"INDEXER"|"DEMO"; }
