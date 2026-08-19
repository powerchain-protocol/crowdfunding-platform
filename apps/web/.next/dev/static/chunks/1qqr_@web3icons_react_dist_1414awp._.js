(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createWeb3Icon",
    ()=>createWeb3Icon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$types$2b$node$40$24$2e$13$2e$3_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.1_@types+node@24.13.3_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$BaseIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/BaseIcon.js [app-client] (ecmascript)");
;
;
/**
 * factory function to create icon components from data structures.
 *
 * @param name - component display name
 * @param variants - icon data for each variant (branded/mono/background)
 * @returns react component with forwardRef support
 */ const createWeb3Icon = (name, variants)=>{
    const availableVariants = Object.keys(variants);
    const defaultVariant = availableVariants[0];
    if (!defaultVariant) {
        throw new Error(`Icon "${name}" must have at least one variant`);
    }
    const Component = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$types$2b$node$40$24$2e$13$2e$3_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(({ variant = defaultVariant, fallback, ...props }, ref)=>{
        const iconData = variants[variant];
        if (!iconData) {
            console.warn(`Icon "${name}" does not have variant "${variant}". ` + `Available variants: ${availableVariants.join(', ')}`);
            return null;
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$types$2b$node$40$24$2e$13$2e$3_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$BaseIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseIcon"], {
            fallback,
            ...props,
            ref
        }, renderIconNode(iconData));
    });
    Component.displayName = name;
    return Component;
};
/**
 * recursively render IconNode data structure to react elements.
 *
 * @param nodes array of IconNode elements to render
 * @returns array of react elements
 */ function renderIconNode(nodes) {
    return nodes.map((node, index)=>{
        const [element, attrs, children] = node;
        const { style, ...restAttrs } = attrs || {};
        const elementProps = {
            key: index,
            ...restAttrs,
            ...style && {
                style
            }
        };
        // check if this is a 3-element tuple with children (element, attributes, children)
        const childElements = children ? renderIconNode(children) : undefined;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$types$2b$node$40$24$2e$13$2e$3_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(element, elementProps, childElements);
    });
}
;
}),
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenFSN.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenFSN
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-client] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#203259',
                d: 'M11.499 8.85C8.76 13.093 7.089 18.994 6.433 21c-.366-3.78 1.581-8.93 3.002-11.97-.662.026-3.857.354-5.792 2.372 0 0 .765-3.317 6.788-4.307l.02-.038c4.718-6.994 8.267-2.822 8.267-2.822-2.154-.36-4.031.733-5.632 2.507.778-.039 5.818-.097 7.27 3.94 0 0-2.918-2.121-8.857-1.832m3.406 4.86a2.13 2.13 0 0 0-1.542.643 2.23 2.23 0 0 0-.637 1.575 2.2 2.2 0 0 0 3.022 2.057 2.17 2.17 0 0 0 1.182-1.202 2.205 2.205 0 0 0-2.018-3.073z'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M11.499 8.85C8.76 13.093 7.089 18.994 6.433 21c-.366-3.78 1.581-8.93 3.002-11.97-.662.026-3.857.354-5.792 2.372 0 0 .765-3.317 6.788-4.307l.02-.038c4.718-6.994 8.267-2.822 8.267-2.822-2.154-.36-4.031.733-5.632 2.507.778-.039 5.818-.097 7.27 3.94 0 0-2.918-2.121-8.858-1.832m3.407 4.86a2.13 2.13 0 0 0-1.543.643 2.23 2.23 0 0 0-.637 1.575 2.2 2.2 0 0 0 3.022 2.057 2.17 2.17 0 0 0 1.182-1.202 2.204 2.204 0 0 0-2.018-3.073z'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#FSN__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#203259',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M11.554 9.2C9.12 12.972 7.634 18.217 7.052 20c-.326-3.36 1.405-7.937 2.668-10.64-.588.023-3.428.315-5.148 2.109 0 0 .68-2.949 6.034-3.829l.017-.034c4.194-6.217 7.348-2.508 7.348-2.508-1.914-.32-3.582.65-5.005 2.228.691-.034 5.171-.086 6.463 3.503 0 0-2.595-1.886-7.875-1.629m3.029 4.32a1.9 1.9 0 0 0-1.371.572c-.366.373-.57.877-.566 1.4a1.957 1.957 0 0 0 1.745 1.959c.32.034.643-.01.94-.13a1.93 1.93 0 0 0 1.052-1.07 1.958 1.958 0 0 0-1.794-2.73z'
                    }
                ]
            ]
        ],
        [
            'defs',
            {},
            [
                [
                    'clipPath',
                    {
                        id: 'FSN__a'
                    },
                    [
                        [
                            'path',
                            {
                                fill: '#fff',
                                d: 'M0 0h24v24H0z'
                            }
                        ]
                    ]
                ]
            ]
        ]
    ]
};
/**
 * @component @name TokenFSN
 * @description Web3Icon for TokenFSN
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiMyMDMyNTkiIGQ9Ik0xMS40OTkgOC44NUM4Ljc2IDEzLjA5MyA3LjA4OSAxOC45OTQgNi40MzMgMjFjLS4zNjYtMy43OCAxLjU4MS04LjkzIDMuMDAyLTExLjk3LS42NjIuMDI2LTMuODU3LjM1NC01Ljc5MiAyLjM3MiAwIDAgLjc2NS0zLjMxNyA2Ljc4OC00LjMwN2wuMDItLjAzOGM0LjcxOC02Ljk5NCA4LjI2Ny0yLjgyMiA4LjI2Ny0yLjgyMi0yLjE1NC0uMzYtNC4wMzEuNzMzLTUuNjMyIDIuNTA3Ljc3OC0uMDM5IDUuODE4LS4wOTcgNy4yNyAzLjk0IDAgMC0yLjkxOC0yLjEyMS04Ljg1Ny0xLjgzMm0zLjQwNiA0Ljg2YTIuMTMgMi4xMyAwIDAgMC0xLjU0Mi42NDMgMi4yMyAyLjIzIDAgMCAwLS42MzcgMS41NzUgMi4yIDIuMiAwIDAgMCAzLjAyMiAyLjA1NyAyLjE3IDIuMTcgMCAwIDAgMS4xODItMS4yMDIgMi4yMDUgMi4yMDUgMCAwIDAtMi4wMTgtMy4wNzN6Ii8+Cjwvc3ZnPgo=) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xMS40OTkgOC44NUM4Ljc2IDEzLjA5MyA3LjA4OSAxOC45OTQgNi40MzMgMjFjLS4zNjYtMy43OCAxLjU4MS04LjkzIDMuMDAyLTExLjk3LS42NjIuMDI2LTMuODU3LjM1NC01Ljc5MiAyLjM3MiAwIDAgLjc2NS0zLjMxNyA2Ljc4OC00LjMwN2wuMDItLjAzOGM0LjcxOC02Ljk5NCA4LjI2Ny0yLjgyMiA4LjI2Ny0yLjgyMi0yLjE1NC0uMzYtNC4wMzEuNzMzLTUuNjMyIDIuNTA3Ljc3OC0uMDM5IDUuODE4LS4wOTcgNy4yNyAzLjk0IDAgMC0yLjkxOC0yLjEyMS04Ljg1OC0xLjgzMm0zLjQwNyA0Ljg2YTIuMTMgMi4xMyAwIDAgMC0xLjU0My42NDMgMi4yMyAyLjIzIDAgMCAwLS42MzcgMS41NzUgMi4yIDIuMiAwIDAgMCAzLjAyMiAyLjA1NyAyLjE3IDIuMTcgMCAwIDAgMS4xODItMS4yMDIgMi4yMDQgMi4yMDQgMCAwIDAtMi4wMTgtMy4wNzN6Ii8+Cjwvc3ZnPgo=) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNGU05fX2EpIj4KICAgICAgICA8cGF0aCBmaWxsPSIjMjAzMjU5IiBkPSJNMjQgMEgwdjI0aDI0eiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xMS41NTQgOS4yQzkuMTIgMTIuOTcyIDcuNjM0IDE4LjIxNyA3LjA1MiAyMGMtLjMyNi0zLjM2IDEuNDA1LTcuOTM3IDIuNjY4LTEwLjY0LS41ODguMDIzLTMuNDI4LjMxNS01LjE0OCAyLjEwOSAwIDAgLjY4LTIuOTQ5IDYuMDM0LTMuODI5bC4wMTctLjAzNGM0LjE5NC02LjIxNyA3LjM0OC0yLjUwOCA3LjM0OC0yLjUwOC0xLjkxNC0uMzItMy41ODIuNjUtNS4wMDUgMi4yMjguNjkxLS4wMzQgNS4xNzEtLjA4NiA2LjQ2MyAzLjUwMyAwIDAtMi41OTUtMS44ODYtNy44NzUtMS42MjltMy4wMjkgNC4zMmExLjkgMS45IDAgMCAwLTEuMzcxLjU3MmMtLjM2Ni4zNzMtLjU3Ljg3Ny0uNTY2IDEuNGExLjk1NyAxLjk1NyAwIDAgMCAxLjc0NSAxLjk1OWMuMzIuMDM0LjY0My0uMDEuOTQtLjEzYTEuOTMgMS45MyAwIDAgMCAxLjA1Mi0xLjA3IDEuOTU4IDEuOTU4IDAgMCAwLTEuNzk0LTIuNzN6Ii8+CiAgICA8L2c+CiAgICA8ZGVmcz4KICAgICAgICA8Y2xpcFBhdGggaWQ9IkZTTl9fYSI+CiAgICAgICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0wIDBoMjR2MjRIMHoiLz4KICAgICAgICA8L2NsaXBQYXRoPgogICAgPC9kZWZzPgo8L3N2Zz4K)
 * @see https://web3icons.io/tokens/FSN
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenFSN = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenFSN', __iconNode);
;
}),
]);

//# sourceMappingURL=1qqr_%40web3icons_react_dist_1414awp._.js.map