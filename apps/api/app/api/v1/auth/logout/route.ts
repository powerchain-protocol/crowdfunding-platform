import { cookies } from "next/headers"; import { SESSION_COOKIE_NAME } from "@powerchain/auth";
export async function POST(){const jar=await cookies();jar.set(SESSION_COOKIE_NAME,"",{httpOnly:true,secure:true,sameSite:"lax",path:"/",maxAge:0});return Response.json({data:{loggedOut:true},meta:{requestId:crypto.randomUUID()}})}
