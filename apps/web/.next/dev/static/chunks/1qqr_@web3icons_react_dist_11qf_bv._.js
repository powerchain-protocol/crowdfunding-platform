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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenKOGE.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenKOGE
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-client] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#FFC800',
                d: 'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18m0-1.059a7.942 7.942 0 1 0 0-15.883 7.942 7.942 0 0 0 0 15.883',
                fillRule: 'evenodd',
                clipRule: 'evenodd'
            }
        ],
        [
            'path',
            {
                fill: '#2C2E35',
                d: 'M8.824 8.184v8.56l1.588-.846v-6.83zm2.647 5.284 1.197.91-1.197.794z'
            }
        ],
        [
            'path',
            {
                fill: '#FFC700',
                d: 'm12.673 10.95 1.313.953-1.07.689 1.345 1.064 2.504-1.467-6.57-4.844-1.37.81 2.646 1.922v1.615z'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M12 21a9 9 0 1 0 0-17.999A9 9 0 0 0 12 21m0-1.059a7.942 7.942 0 1 0 0-15.883 7.942 7.942 0 0 0 0 15.883',
                fillRule: 'evenodd',
                clipRule: 'evenodd'
            }
        ],
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M8.822 8.184v8.56l1.589-.846v-6.83zm2.647 5.284 1.197.91-1.197.794z'
            }
        ],
        [
            'path',
            {
                fill: 'currentColor',
                d: 'm12.671 10.95 1.313.953-1.07.689 1.345 1.064 2.504-1.467-6.57-4.844-1.37.81 2.646 1.922v1.615z'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#KOGE__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#FFC800',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16m0-.941a7.06 7.06 0 1 0 0-14.12 7.06 7.06 0 0 0 0 14.12',
                        fillRule: 'evenodd',
                        clipRule: 'evenodd'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M9.175 8.608v7.61l1.412-.754v-6.07zm2.353 4.696 1.064.81-1.064.706z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'm12.597 11.067 1.167.847-.951.612 1.195.946 2.226-1.304-5.84-4.306-1.219.72 2.353 1.709v1.435z'
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
                        id: 'KOGE__a'
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
 * @component @name TokenKOGE
 * @description Web3Icon for TokenKOGE
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNGRkM4MDAiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTEyIDIxYTkgOSAwIDEgMCAwLTE4IDkgOSAwIDAgMCAwIDE4bTAtMS4wNTlhNy45NDIgNy45NDIgMCAxIDAgMC0xNS44ODMgNy45NDIgNy45NDIgMCAwIDAgMCAxNS44ODMiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgogICAgPHBhdGggZmlsbD0iIzJDMkUzNSIgZD0iTTguODI0IDguMTg0djguNTZsMS41ODgtLjg0NnYtNi44M3ptMi42NDcgNS4yODQgMS4xOTcuOTEtMS4xOTcuNzk0eiIvPgogICAgPHBhdGggZmlsbD0iI0ZGQzcwMCIgZD0ibTEyLjY3MyAxMC45NSAxLjMxMy45NTMtMS4wNy42ODkgMS4zNDUgMS4wNjQgMi41MDQtMS40NjctNi41Ny00Ljg0NC0xLjM3LjgxIDIuNjQ2IDEuOTIydjEuNjE1eiIvPgo8L3N2Zz4K) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTEyIDIxYTkgOSAwIDEgMCAwLTE3Ljk5OUE5IDkgMCAwIDAgMTIgMjFtMC0xLjA1OWE3Ljk0MiA3Ljk0MiAwIDEgMCAwLTE1Ljg4MyA3Ljk0MiA3Ljk0MiAwIDAgMCAwIDE1Ljg4MyIgY2xpcC1ydWxlPSJldmVub2RkIi8+CiAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNOC44MjIgOC4xODR2OC41NmwxLjU4OS0uODQ2di02Ljgzem0yLjY0NyA1LjI4NCAxLjE5Ny45MS0xLjE5Ny43OTR6Ii8+CiAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJtMTIuNjcxIDEwLjk1IDEuMzEzLjk1My0xLjA3LjY4OSAxLjM0NSAxLjA2NCAyLjUwNC0xLjQ2Ny02LjU3LTQuODQ0LTEuMzcuODEgMi42NDYgMS45MjJ2MS42MTV6Ii8+Cjwvc3ZnPgo=) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNLT0dFX19hKSI+CiAgICAgICAgPHBhdGggZmlsbD0iI0ZGQzgwMCIgZD0iTTI0IDBIMHYyNGgyNHoiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMiAyMGE4IDggMCAxIDAgMC0xNiA4IDggMCAwIDAgMCAxNm0wLS45NDFhNy4wNiA3LjA2IDAgMSAwIDAtMTQuMTIgNy4wNiA3LjA2IDAgMCAwIDAgMTQuMTIiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik05LjE3NSA4LjYwOHY3LjYxbDEuNDEyLS43NTR2LTYuMDd6bTIuMzUzIDQuNjk2IDEuMDY0LjgxLTEuMDY0LjcwNnoiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJtMTIuNTk3IDExLjA2NyAxLjE2Ny44NDctLjk1MS42MTIgMS4xOTUuOTQ2IDIuMjI2LTEuMzA0LTUuODQtNC4zMDYtMS4yMTkuNzIgMi4zNTMgMS43MDl2MS40MzV6Ii8+CiAgICA8L2c+CiAgICA8ZGVmcz4KICAgICAgICA8Y2xpcFBhdGggaWQ9IktPR0VfX2EiPgogICAgICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMCAwaDI0djI0SDB6Ii8+CiAgICAgICAgPC9jbGlwUGF0aD4KICAgIDwvZGVmcz4KPC9zdmc+Cg==)
 * @see https://web3icons.io/tokens/KOGE
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenKOGE = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenKOGE', __iconNode);
;
}),
]);

//# sourceMappingURL=1qqr_%40web3icons_react_dist_11qf_bv._.js.map