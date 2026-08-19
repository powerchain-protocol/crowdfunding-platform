import { cookies } from "next/headers";
import { SESSION_COOKIE_NAME } from "@powerchain/auth";
import { getSessionByToken } from "@powerchain/auth/server";
export async function currentSession(){const jar=await cookies();const token=jar.get(SESSION_COOKIE_NAME)?.value;if(!token)return null;return getSessionByToken(token)}
export async function requireSession(){const session=await currentSession();if(!session)throw new Error("UNAUTHENTICATED");return session}
