import { NextResponse, type NextRequest } from "next/server";
import { allowedOrigins } from "./lib/request-security";
export function proxy(request:NextRequest){
  const origin=request.headers.get("origin"); const allowed=origin&&allowedOrigins().includes(origin);
  if(request.method==="OPTIONS") return new NextResponse(null,{status:204,headers:{...(allowed?{"access-control-allow-origin":origin,"access-control-allow-credentials":"true"}:{}),"access-control-allow-methods":"GET,POST,PUT,PATCH,DELETE,OPTIONS","access-control-allow-headers":"content-type,idempotency-key,x-request-id","access-control-max-age":"600","vary":"Origin"}});
  const response=NextResponse.next(); if(allowed&&origin){response.headers.set("access-control-allow-origin",origin);response.headers.set("access-control-allow-credentials","true");response.headers.set("vary","Origin")} response.headers.set("x-content-type-options","nosniff");response.headers.set("referrer-policy","strict-origin-when-cross-origin"); return response;
}
export const config={matcher:["/api/:path*"]};
