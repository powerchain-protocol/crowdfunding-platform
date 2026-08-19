export const SESSION_COOKIE_NAME="__Host-powerchain_session";
export const SESSION_COOKIE_OPTIONS={httpOnly:true,secure:true,sameSite:"lax" as const,path:"/",maxAge:60*60*8};
export function assertSessionId(value:string):string{if(!/^ses_[A-Za-z0-9_-]{20,}$/.test(value))throw new Error("Invalid session id");return value}
