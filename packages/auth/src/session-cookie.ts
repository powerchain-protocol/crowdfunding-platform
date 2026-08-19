export const SESSION_COOKIE_NAME=process.env.NODE_ENV==="production"?"__Host-powerchain_session":"powerchain_session";
export const SESSION_COOKIE_OPTIONS={httpOnly:true,secure:process.env.NODE_ENV==="production",sameSite:"lax" as const,path:"/",maxAge:60*60*12};
export function assertSessionId(value:string):string{if(!/^[A-Za-z0-9_-]{32,}$/.test(value))throw new Error("Invalid session token");return value}
