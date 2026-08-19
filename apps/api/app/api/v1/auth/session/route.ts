import { cookies } from "next/headers"; import { SESSION_COOKIE_NAME } from "@powerchain/auth";
export async function GET(){const jar=await cookies();const id=jar.get(SESSION_COOKIE_NAME)?.value;return Response.json({data:{authenticated:Boolean(id),sessionId:id?"present":null},meta:{requestId:crypto.randomUUID()}},{headers:{"cache-control":"no-store"}})}
