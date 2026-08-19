import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { SESSION_COOKIE_NAME } from "@powerchain/auth";
import { revokeSessionToken } from "@powerchain/auth/server";
export async function POST(){const jar=await cookies();const token=jar.get(SESSION_COOKIE_NAME)?.value;if(token)await revokeSessionToken(token);const res=NextResponse.json({data:{loggedOut:true},meta:{requestId:crypto.randomUUID()}});res.cookies.set(SESSION_COOKIE_NAME,"",{httpOnly:true,secure:process.env.NODE_ENV==="production",sameSite:"lax",path:"/",maxAge:0});return res}
