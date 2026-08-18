import { NextResponse } from "next/server";
export async function POST(){return NextResponse.json({error:{code:"AUTH_PROVIDER_NOT_CONFIGURED",message:"Registration is unavailable until the server-side authentication provider and database session store are configured.",requestId:crypto.randomUUID()}},{status:501})}
