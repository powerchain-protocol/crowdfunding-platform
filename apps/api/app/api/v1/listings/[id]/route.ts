import { isMockDataMode, providerRequired } from "../../../../../lib/runtime";
import { success } from "@powerchain/api-core";
import { mockListings } from "../../../../../lib/mock-capital";
export async function GET(_request:Request,context:{params:Promise<{id:string}>}){if(!isMockDataMode()) return providerRequired("LISTINGS_PERSISTENCE_REQUIRED","Production listing reads require the database repository.");const {id}=await context.params;const listing=mockListings.find((item)=>item.id===id||item.slug===id);if(!listing)return Response.json({error:{code:"LISTING_NOT_FOUND",message:"Listing not found.",requestId:crypto.randomUUID()}},{status:404});return Response.json(success(listing));}
