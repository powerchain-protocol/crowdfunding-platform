import { NextResponse } from "next/server";
export const dynamic = "force-dynamic";
export function GET(request: Request) {
  const api = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3010";
  const source = new URL(request.url);
  const target = new URL(`/api/v1/auth/oauth/x/callback`, api);
  source.searchParams.forEach((value, key) => target.searchParams.set(key, value));
  return NextResponse.redirect(target);
}
