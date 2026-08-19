import { success } from "@powerchain/api-core";
const groups = {
  system: ["GET /api/v1/health", "GET /api/v1/health/live", "GET /api/v1/health/ready", "GET /api/v1/system", "GET /api/v1/system/services", "GET /api/v1/system/endpoints"],
  campaigns: ["GET|POST /api/v1/campaigns", "POST /api/v1/campaigns/:campaignId/contribute", "POST /api/v1/campaigns/:campaignId/withdraw", "GET /api/v1/campaigns/:campaignId/progress", "POST /api/v1/campaigns/:campaignId/milestones/:milestoneId/claim"],
  trust: ["POST /api/v1/identity/checks", "POST /api/v1/agreements/render", "GET /api/v1/audit", "GET /api/v1/moderation/reports"],
  capital: ["GET|POST /api/v1/listings", "POST /api/v1/interests", "POST /api/v1/offers", "GET /api/v1/watchlist", "GET /api/v1/deal-rooms/:id/messages"],
  funding: ["POST /api/v1/funding/checkout", "GET /api/v1/funding/campaigns/:campaignId", "GET /api/v1/refunds/:campaignId", "GET /api/v1/leaderboard/:campaignId"],
} as const;
export async function GET() { return Response.json(success(groups)); }
