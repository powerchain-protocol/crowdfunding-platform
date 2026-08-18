import { NextResponse } from "next/server";
export async function POST(){return NextResponse.json({error:{code:"AUTH_PROVIDER_NOT_CONFIGURED",message:"Authentication provider is not configured in this scaffold.",requestId:crypto.randomUUID()}},{status:501})}
