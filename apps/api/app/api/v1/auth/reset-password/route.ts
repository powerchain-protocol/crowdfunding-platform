import { NextResponse } from "next/server";
export async function POST(){return NextResponse.json({error:{code:"AUTH_PROVIDER_NOT_CONFIGURED",message:"Password reset is unavailable until the server-side authentication and email provider are configured. No reset email has been sent.",requestId:crypto.randomUUID()}},{status:501})}
