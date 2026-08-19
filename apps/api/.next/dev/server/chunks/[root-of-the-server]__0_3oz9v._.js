module.exports = [
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[externals]/next/dist/build/adapter/setup-node-env.external.js [external] (next/dist/build/adapter/setup-node-env.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/build/adapter/setup-node-env.external.js", () => require("next/dist/build/adapter/setup-node-env.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

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
"[externals]/next/dist/server/lib/incremental-cache/memory-cache.external.js [external] (next/dist/server/lib/incremental-cache/memory-cache.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/lib/incremental-cache/memory-cache.external.js", () => require("next/dist/server/lib/incremental-cache/memory-cache.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/lib/incremental-cache/shared-cache-controls.external.js [external] (next/dist/server/lib/incremental-cache/shared-cache-controls.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/lib/incremental-cache/shared-cache-controls.external.js", () => require("next/dist/server/lib/incremental-cache/shared-cache-controls.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/lib/incremental-cache/tags-manifest.external.js [external] (next/dist/server/lib/incremental-cache/tags-manifest.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/lib/incremental-cache/tags-manifest.external.js", () => require("next/dist/server/lib/incremental-cache/tags-manifest.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/lib/router-utils/instrumentation-globals.external.js [external] (next/dist/server/lib/router-utils/instrumentation-globals.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/lib/router-utils/instrumentation-globals.external.js", () => require("next/dist/server/lib/router-utils/instrumentation-globals.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/runtime-reacts.external.js [external] (next/dist/server/runtime-reacts.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/runtime-reacts.external.js", () => require("next/dist/server/runtime-reacts.external.js"));

module.exports = mod;
}),
"[externals]/node:async_hooks [external] (node:async_hooks, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("node:async_hooks", () => require("node:async_hooks"));

module.exports = mod;
}),
"[externals]/node:path [external] (node:path, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("node:path", () => require("node:path"));

module.exports = mod;
}),
"[externals]/node:stream [external] (node:stream, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("node:stream", () => require("node:stream"));

module.exports = mod;
}),
"[externals]/path [external] (path, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}),
"[project]/apps/api/lib/request-security.ts [middleware] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "allowedOrigins",
    ()=>allowedOrigins,
    "assertSameOrigin",
    ()=>assertSameOrigin,
    "isAllowedOrigin",
    ()=>isAllowedOrigin,
    "readJson",
    ()=>readJson
]);
const PUBLIC_ORIGIN_KEYS = [
    "NEXT_PUBLIC_WEB_URL",
    "NEXT_PUBLIC_CROWDFUNDING_URL",
    "NEXT_PUBLIC_DONATE_URL",
    "NEXT_PUBLIC_CHECKOUT_URL",
    "NEXT_PUBLIC_DASHBOARD_URL",
    "NEXT_PUBLIC_TREASURY_URL",
    "NEXT_PUBLIC_ADMIN_URL",
    "NEXT_PUBLIC_EXPLORER_URL",
    "NEXT_PUBLIC_DOCS_URL",
    "NEXT_PUBLIC_PWA_URL"
];
const DEFAULT_MAX_JSON_BYTES = 1024 * 1024;
function toOrigin(value) {
    if (!value) return null;
    try {
        return new URL(value).origin;
    } catch  {
        return null;
    }
}
function allowedOrigins() {
    return [
        ...new Set(PUBLIC_ORIGIN_KEYS.map((key)=>toOrigin(process.env[key])).filter((value)=>value !== null))
    ];
}
function isAllowedOrigin(origin) {
    if (!origin) return false;
    return allowedOrigins().includes(origin);
}
function requestOrigin(request) {
    const forwardedProto = request.headers.get("x-forwarded-proto")?.split(",")[0]?.trim();
    const forwardedHost = request.headers.get("x-forwarded-host")?.split(",")[0]?.trim();
    if (forwardedProto && forwardedHost) return `${forwardedProto}://${forwardedHost}`;
    return new URL(request.url).origin;
}
function assertSameOrigin(request) {
    const origin = request.headers.get("origin");
    const fetchSite = request.headers.get("sec-fetch-site");
    const currentOrigin = requestOrigin(request);
    const configured = allowedOrigins();
    if (origin) {
        if (origin === currentOrigin || configured.includes(origin)) return;
        throw new Error("Request origin is not allowed.");
    }
    if (fetchSite === "cross-site") {
        throw new Error("Cross-site request is not allowed.");
    }
}
async function readJson(request, maxBytes = DEFAULT_MAX_JSON_BYTES) {
    const contentType = request.headers.get("content-type")?.toLowerCase() ?? "";
    if (!contentType.includes("application/json") && !contentType.includes("+json")) {
        throw new Error("Content-Type must be application/json.");
    }
    const declaredLength = Number(request.headers.get("content-length") ?? 0);
    if (Number.isFinite(declaredLength) && declaredLength > maxBytes) {
        throw new Error("JSON request body is too large.");
    }
    const text = await request.text();
    if (new TextEncoder().encode(text).byteLength > maxBytes) {
        throw new Error("JSON request body is too large.");
    }
    if (!text.trim()) throw new Error("JSON request body is required.");
    try {
        return JSON.parse(text);
    } catch  {
        throw new Error("Request body contains invalid JSON.");
    }
}
}),
"[project]/apps/api/proxy.ts [middleware] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "config",
    ()=>config,
    "proxy",
    ()=>proxy
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$types$2b$node$40$24$2e$13$2e$3_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$server$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.1_@types+node@24.13.3_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/server.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$config$2f$security$2f$headers$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/config/security/headers.ts [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$api$2f$lib$2f$request$2d$security$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/api/lib/request-security.ts [middleware] (ecmascript)");
;
;
;
function applySecurityHeaders(headers) {
    for (const [name, value] of __TURBOPACK__imported__module__$5b$project$5d2f$config$2f$security$2f$headers$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__["SECURITY_HEADERS"])headers.set(name, value);
}
function applyCors(headers, origin) {
    headers.set("access-control-allow-origin", origin);
    headers.set("access-control-allow-credentials", "true");
    headers.set("access-control-expose-headers", __TURBOPACK__imported__module__$5b$project$5d2f$config$2f$security$2f$headers$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__["API_EXPOSED_HEADERS"]);
    headers.set("vary", "Origin");
}
function proxy(request) {
    const origin = request.headers.get("origin");
    const allowed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$api$2f$lib$2f$request$2d$security$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__["isAllowedOrigin"])(origin);
    if (request.method === "OPTIONS") {
        if (origin && !allowed) {
            const denied = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$types$2b$node$40$24$2e$13$2e$3_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$server$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: {
                    code: "CORS_ORIGIN_DENIED",
                    message: "Origin is not allowed."
                }
            }, {
                status: 403
            });
            applySecurityHeaders(denied.headers);
            denied.headers.set("vary", "Origin");
            return denied;
        }
        const preflight = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$types$2b$node$40$24$2e$13$2e$3_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$server$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NextResponse"](null, {
            status: 204
        });
        if (allowed) applyCors(preflight.headers, origin);
        preflight.headers.set("access-control-allow-methods", __TURBOPACK__imported__module__$5b$project$5d2f$config$2f$security$2f$headers$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__["API_ALLOWED_METHODS"]);
        preflight.headers.set("access-control-allow-headers", __TURBOPACK__imported__module__$5b$project$5d2f$config$2f$security$2f$headers$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__["API_ALLOWED_HEADERS"]);
        preflight.headers.set("access-control-max-age", "600");
        applySecurityHeaders(preflight.headers);
        return preflight;
    }
    const response = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$types$2b$node$40$24$2e$13$2e$3_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$server$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NextResponse"].next();
    if (allowed) applyCors(response.headers, origin);
    applySecurityHeaders(response.headers);
    return response;
}
const config = {
    matcher: [
        "/api/:path*"
    ]
};
}),
"[project]/config/security/headers.ts [middleware] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "API_ALLOWED_HEADERS",
    ()=>API_ALLOWED_HEADERS,
    "API_ALLOWED_METHODS",
    ()=>API_ALLOWED_METHODS,
    "API_EXPOSED_HEADERS",
    ()=>API_EXPOSED_HEADERS,
    "SECURITY_HEADERS",
    ()=>SECURITY_HEADERS
]);
const API_ALLOWED_METHODS = "GET,POST,PUT,PATCH,DELETE,OPTIONS";
const API_ALLOWED_HEADERS = [
    "authorization",
    "content-type",
    "idempotency-key",
    "x-csrf-token",
    "x-request-id"
].join(",");
const API_EXPOSED_HEADERS = [
    "x-request-id"
].join(",");
const SECURITY_HEADERS = [
    [
        "x-content-type-options",
        "nosniff"
    ],
    [
        "referrer-policy",
        "strict-origin-when-cross-origin"
    ],
    [
        "x-frame-options",
        "DENY"
    ],
    [
        "permissions-policy",
        "camera=(), microphone=(), geolocation=()"
    ]
];
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0_3oz9v._.js.map