import { success } from "@powerchain/api-core";
export async function GET(){ return Response.json(success([])); }
export async function POST(){ return Response.json({error:{code:"PRIVATE_STORAGE_REQUIRED",message:"Deal-room attachments require authenticated participant membership, private object storage, size/type validation and a SHA-256 commitment.",requestId:crypto.randomUUID()}},{status:501}); }
