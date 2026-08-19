export type SaaSPlanCode = "STARTER" | "GROWTH" | "SCALE" | "ENTERPRISE";
export type SubscriptionStatus = "TRIALING" | "ACTIVE" | "PAST_DUE" | "CANCELLED" | "EXPIRED";

export type SaaSEntitlement =
  | "campaigns.create" | "campaigns.unlimited" | "team.invite" | "team.advanced_roles"
  | "identity.business_verification" | "agreements.esign" | "escrow.milestones"
  | "analytics.advanced" | "api.access" | "webhooks.access" | "audit.export";

export interface SaaSPlan { code:SaaSPlanCode; name:string; monthlyPriceMinor:number|null; currency:"EUR"; includedSeats:number; includedCampaigns:number|null; entitlements:readonly SaaSEntitlement[]; }

export const SAAS_PLANS: readonly SaaSPlan[] = [
 {code:"STARTER",name:"Starter",monthlyPriceMinor:0,currency:"EUR",includedSeats:2,includedCampaigns:2,entitlements:["campaigns.create","team.invite"]},
 {code:"GROWTH",name:"Growth",monthlyPriceMinor:4900,currency:"EUR",includedSeats:10,includedCampaigns:20,entitlements:["campaigns.create","team.invite","identity.business_verification","agreements.esign","escrow.milestones","analytics.advanced"]},
 {code:"SCALE",name:"Scale",monthlyPriceMinor:14900,currency:"EUR",includedSeats:30,includedCampaigns:null,entitlements:["campaigns.create","campaigns.unlimited","team.invite","team.advanced_roles","identity.business_verification","agreements.esign","escrow.milestones","analytics.advanced","api.access","webhooks.access","audit.export"]},
 {code:"ENTERPRISE",name:"Enterprise",monthlyPriceMinor:null,currency:"EUR",includedSeats:100,includedCampaigns:null,entitlements:["campaigns.create","campaigns.unlimited","team.invite","team.advanced_roles","identity.business_verification","agreements.esign","escrow.milestones","analytics.advanced","api.access","webhooks.access","audit.export"]}
] as const;

export function getPlan(code:string):SaaSPlan|undefined { return SAAS_PLANS.find(p=>p.code===code); }
export function hasEntitlement(planCode:string, entitlement:SaaSEntitlement):boolean { return Boolean(getPlan(planCode)?.entitlements.includes(entitlement)); }
