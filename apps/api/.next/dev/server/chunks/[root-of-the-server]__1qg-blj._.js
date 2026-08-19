module.exports = [
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/runtime-reacts.external.js [external] (next/dist/server/runtime-reacts.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/runtime-reacts.external.js", () => require("next/dist/server/runtime-reacts.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/node:crypto [external] (node:crypto, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("node:crypto", () => require("node:crypto"));

module.exports = mod;
}),
"[externals]/node:stream [external] (node:stream, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("node:stream", () => require("node:stream"));

module.exports = mod;
}),
"[externals]/node:util [external] (node:util, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("node:util", () => require("node:util"));

module.exports = mod;
}),
"[project]/apps/api/app/api/v1/saas/subscription/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET,
    "dynamic",
    ()=>dynamic
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$database$2f$src$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/packages/database/src/index.ts [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$database$2f$src$2f$client$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/database/src/client.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$saas$2f$src$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/saas/src/index.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$api$2f$lib$2f$current$2d$session$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/api/lib/current-session.ts [app-route] (ecmascript)");
;
;
;
const dynamic = "force-dynamic";
async function GET() {
    try {
        const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$api$2f$lib$2f$current$2d$session$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["requireSession"])();
        const membership = session.user.memberships[0];
        if (!membership) return Response.json({
            error: {
                code: "NO_ORGANIZATION",
                message: "No active organization membership.",
                requestId: crypto.randomUUID()
            }
        }, {
            status: 403
        });
        const subscription = await __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$database$2f$src$2f$client$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].saaSSubscription.findFirst({
            where: {
                organizationId: membership.organizationId
            },
            orderBy: {
                createdAt: "desc"
            }
        });
        return Response.json({
            data: subscription ? {
                ...subscription,
                plan: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$saas$2f$src$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getPlan"])(subscription.planCode)
            } : null,
            meta: {
                requestId: crypto.randomUUID()
            }
        }, {
            headers: {
                "cache-control": "no-store"
            }
        });
    } catch  {
        return Response.json({
            error: {
                code: "UNAUTHENTICATED",
                message: "Sign in required.",
                requestId: crypto.randomUUID()
            }
        }, {
            status: 401
        });
    }
}
}),
"[project]/apps/api/lib/current-session.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "currentSession",
    ()=>currentSession,
    "requireSession",
    ()=>requireSession
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$types$2b$node$40$24$2e$13$2e$3_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.1_@types+node@24.13.3_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/headers.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$auth$2f$src$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/packages/auth/src/index.ts [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$auth$2f$src$2f$session$2d$cookie$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/auth/src/session-cookie.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$auth$2f$src$2f$server$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/auth/src/server.ts [app-route] (ecmascript)");
;
;
;
async function currentSession() {
    const jar = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$types$2b$node$40$24$2e$13$2e$3_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cookies"])();
    const token = jar.get(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$auth$2f$src$2f$session$2d$cookie$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SESSION_COOKIE_NAME"])?.value;
    if (!token) return null;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$auth$2f$src$2f$server$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getSessionByToken"])(token);
}
async function requireSession() {
    const session = await currentSession();
    if (!session) throw new Error("UNAUTHENTICATED");
    return session;
}
}),
"[project]/packages/auth/src/index.ts [app-route] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "normalizeEmail",
    ()=>normalizeEmail,
    "validatePassword",
    ()=>validatePassword
]);
function normalizeEmail(value) {
    return value.trim().toLowerCase();
}
function validatePassword(value) {
    const errors = [];
    if (value.length < 12) errors.push("Password must contain at least 12 characters.");
    if (!/[A-Z]/.test(value)) errors.push("Password must include an uppercase letter.");
    if (!/[a-z]/.test(value)) errors.push("Password must include a lowercase letter.");
    if (!/[0-9]/.test(value)) errors.push("Password must include a number.");
    return errors;
}
;
}),
"[project]/packages/auth/src/server.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "authenticateUser",
    ()=>authenticateUser,
    "consumePasswordReset",
    ()=>consumePasswordReset,
    "createPasswordReset",
    ()=>createPasswordReset,
    "createSession",
    ()=>createSession,
    "getSessionByToken",
    ()=>getSessionByToken,
    "hashPassword",
    ()=>hashPassword,
    "hashSessionToken",
    ()=>hashSessionToken,
    "membershipRoles",
    ()=>membershipRoles,
    "registerUser",
    ()=>registerUser,
    "revokeSessionToken",
    ()=>revokeSessionToken,
    "verifyPassword",
    ()=>verifyPassword
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:crypto [external] (node:crypto, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$util__$5b$external$5d$__$28$node$3a$util$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:util [external] (node:util, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$database$2f$src$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/packages/database/src/index.ts [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$database$2f$src$2f$client$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/database/src/client.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$auth$2f$src$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/packages/auth/src/index.ts [app-route] (ecmascript) <locals>");
;
;
;
;
const scrypt = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$util__$5b$external$5d$__$28$node$3a$util$2c$__cjs$29$__["promisify"])(__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__["scrypt"]);
const KEY_BYTES = 64;
async function hashPassword(password) {
    const errors = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$auth$2f$src$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["validatePassword"])(password);
    if (errors.length) throw new Error(errors.join(" "));
    const salt = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__["randomBytes"])(16);
    const key = await scrypt(password, salt, KEY_BYTES);
    return `scrypt$${salt.toString("base64url")}$${key.toString("base64url")}`;
}
async function verifyPassword(password, encoded) {
    const [kind, saltB64, keyB64] = encoded.split("$");
    if (kind !== "scrypt" || !saltB64 || !keyB64) return false;
    const expected = Buffer.from(keyB64, "base64url");
    const actual = await scrypt(password, Buffer.from(saltB64, "base64url"), expected.length);
    return actual.length === expected.length && (0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__["timingSafeEqual"])(actual, expected);
}
function hashSessionToken(token) {
    return (0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__["createHash"])("sha256").update(token).digest("hex");
}
async function createSession(userId, ttlSeconds = 43200) {
    const token = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__["randomBytes"])(32).toString("base64url");
    const expiresAt = new Date(Date.now() + ttlSeconds * 1000);
    await __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$database$2f$src$2f$client$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].session.create({
        data: {
            userId,
            tokenHash: hashSessionToken(token),
            expiresAt
        }
    });
    return {
        token,
        expiresAt
    };
}
async function getSessionByToken(token) {
    const now = new Date();
    const session = await __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$database$2f$src$2f$client$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].session.findUnique({
        where: {
            tokenHash: hashSessionToken(token)
        },
        include: {
            user: {
                include: {
                    memberships: {
                        where: {
                            status: "ACTIVE"
                        },
                        include: {
                            organization: true
                        }
                    }
                }
            }
        }
    });
    if (!session || session.revokedAt || session.expiresAt <= now) return null;
    return session;
}
async function revokeSessionToken(token) {
    await __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$database$2f$src$2f$client$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].session.updateMany({
        where: {
            tokenHash: hashSessionToken(token),
            revokedAt: null
        },
        data: {
            revokedAt: new Date()
        }
    });
}
async function registerUser(input) {
    const email = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$auth$2f$src$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["normalizeEmail"])(input.email);
    const passwordHash = await hashPassword(input.password);
    const slugBase = (input.organizationName || input.displayName || email.split("@")[0] || "workspace").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") || "workspace";
    return __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$database$2f$src$2f$client$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].$transaction(async (tx)=>{
        const user = await tx.user.create({
            data: {
                email,
                passwordHash,
                ...input.displayName !== undefined ? {
                    displayName: input.displayName
                } : {}
            }
        });
        const org = await tx.organization.create({
            data: {
                name: input.organizationName || `${input.displayName || "My"} Workspace`,
                slug: `${slugBase}-${(0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__["randomBytes"])(3).toString("hex")}`
            }
        });
        await tx.organizationMembership.create({
            data: {
                userId: user.id,
                organizationId: org.id,
                role: "OWNER"
            }
        });
        const days = Number(process.env.SAAS_TRIAL_DAYS || 14);
        const start = new Date();
        const end = new Date(start.getTime() + days * 86400000);
        await tx.saaSSubscription.create({
            data: {
                organizationId: org.id,
                planCode: process.env.SAAS_DEFAULT_PLAN || "STARTER",
                status: "TRIALING",
                currentPeriodStart: start,
                currentPeriodEnd: end
            }
        });
        return {
            user,
            organization: org
        };
    });
}
async function authenticateUser(email, password) {
    const user = await __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$database$2f$src$2f$client$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].user.findUnique({
        where: {
            email: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$auth$2f$src$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["normalizeEmail"])(email)
        }
    });
    if (!user || user.status !== "ACTIVE" || !await verifyPassword(password, user.passwordHash)) return null;
    return user;
}
function membershipRoles(session) {
    if (!session) return [];
    return session.user.memberships.map((m)=>m.role);
}
async function createPasswordReset(email) {
    const user = await __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$database$2f$src$2f$client$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].user.findUnique({
        where: {
            email: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$auth$2f$src$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["normalizeEmail"])(email)
        }
    });
    if (!user) return null;
    const token = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__["randomBytes"])(32).toString("base64url");
    const expiresAt = new Date(Date.now() + 30 * 60 * 1000);
    await __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$database$2f$src$2f$client$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].passwordResetToken.create({
        data: {
            userId: user.id,
            tokenHash: hashSessionToken(token),
            expiresAt
        }
    });
    return {
        token,
        expiresAt,
        userId: user.id
    };
}
async function consumePasswordReset(token, newPassword) {
    const tokenHash = hashSessionToken(token);
    const row = await __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$database$2f$src$2f$client$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].passwordResetToken.findUnique({
        where: {
            tokenHash
        }
    });
    if (!row || row.usedAt || row.expiresAt <= new Date()) return false;
    const passwordHash = await hashPassword(newPassword);
    await __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$database$2f$src$2f$client$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].$transaction([
        __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$database$2f$src$2f$client$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].user.update({
            where: {
                id: row.userId
            },
            data: {
                passwordHash
            }
        }),
        __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$database$2f$src$2f$client$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].passwordResetToken.update({
            where: {
                id: row.id
            },
            data: {
                usedAt: new Date()
            }
        }),
        __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$database$2f$src$2f$client$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].session.updateMany({
            where: {
                userId: row.userId,
                revokedAt: null
            },
            data: {
                revokedAt: new Date()
            }
        })
    ]);
    return true;
}
}),
"[project]/packages/auth/src/session-cookie.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SESSION_COOKIE_NAME",
    ()=>SESSION_COOKIE_NAME,
    "SESSION_COOKIE_OPTIONS",
    ()=>SESSION_COOKIE_OPTIONS,
    "assertSessionId",
    ()=>assertSessionId
]);
const SESSION_COOKIE_NAME = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : "powerchain_session";
const SESSION_COOKIE_OPTIONS = {
    httpOnly: true,
    secure: ("TURBOPACK compile-time value", "development") === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 12
};
function assertSessionId(value) {
    if (!/^[A-Za-z0-9_-]{32,}$/.test(value)) throw new Error("Invalid session token");
    return value;
}
}),
"[project]/packages/database/src/client.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "prisma",
    ()=>prisma
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$client$40$6$2e$19$2e$3_prisma$40$6$2e$19$2e$3_typescript$40$6$2e$0$2e$3_$5f$typescript$40$6$2e$0$2e$3$2f$node_modules$2f40$prisma$2f$client$29$__ = __turbopack_context__.i("[externals]/@prisma/client [external] (@prisma/client, cjs, [project]/node_modules/.pnpm/@prisma+client@6.19.3_prisma@6.19.3_typescript@6.0.3__typescript@6.0.3/node_modules/@prisma/client)");
;
const globalForPrisma = globalThis;
const prisma = globalForPrisma.powerchainPrisma ?? new __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$client$40$6$2e$19$2e$3_prisma$40$6$2e$19$2e$3_typescript$40$6$2e$0$2e$3_$5f$typescript$40$6$2e$0$2e$3$2f$node_modules$2f40$prisma$2f$client$29$__["PrismaClient"]({
    log: process.env.POWERCHAIN_ENV === "development" ? [
        "warn",
        "error"
    ] : [
        "error"
    ]
});
if ("TURBOPACK compile-time truthy", 1) globalForPrisma.powerchainPrisma = prisma;
}),
"[project]/packages/database/src/index.ts [app-route] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$database$2f$src$2f$client$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/database/src/client.ts [app-route] (ecmascript)");
;
}),
"[project]/packages/saas/src/index.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SAAS_PLANS",
    ()=>SAAS_PLANS,
    "getPlan",
    ()=>getPlan,
    "hasEntitlement",
    ()=>hasEntitlement
]);
const SAAS_PLANS = [
    {
        code: "STARTER",
        name: "Starter",
        monthlyPriceMinor: 0,
        currency: "EUR",
        includedSeats: 2,
        includedCampaigns: 2,
        entitlements: [
            "campaigns.create",
            "team.invite"
        ]
    },
    {
        code: "GROWTH",
        name: "Growth",
        monthlyPriceMinor: 4900,
        currency: "EUR",
        includedSeats: 10,
        includedCampaigns: 20,
        entitlements: [
            "campaigns.create",
            "team.invite",
            "identity.business_verification",
            "agreements.esign",
            "escrow.milestones",
            "analytics.advanced"
        ]
    },
    {
        code: "SCALE",
        name: "Scale",
        monthlyPriceMinor: 14900,
        currency: "EUR",
        includedSeats: 30,
        includedCampaigns: null,
        entitlements: [
            "campaigns.create",
            "campaigns.unlimited",
            "team.invite",
            "team.advanced_roles",
            "identity.business_verification",
            "agreements.esign",
            "escrow.milestones",
            "analytics.advanced",
            "api.access",
            "webhooks.access",
            "audit.export"
        ]
    },
    {
        code: "ENTERPRISE",
        name: "Enterprise",
        monthlyPriceMinor: null,
        currency: "EUR",
        includedSeats: 100,
        includedCampaigns: null,
        entitlements: [
            "campaigns.create",
            "campaigns.unlimited",
            "team.invite",
            "team.advanced_roles",
            "identity.business_verification",
            "agreements.esign",
            "escrow.milestones",
            "analytics.advanced",
            "api.access",
            "webhooks.access",
            "audit.export"
        ]
    }
];
function getPlan(code) {
    return SAAS_PLANS.find((p)=>p.code === code);
}
function hasEntitlement(planCode, entitlement) {
    return Boolean(getPlan(planCode)?.entitlements.includes(entitlement));
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__1qg-blj._.js.map