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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenMFT.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenMFT
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-client] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#DA1157',
                d: 'M13.53 12c0 2.982-2.357 5.4-5.265 5.4S3 14.982 3 12s2.357-5.4 5.265-5.4S13.53 9.017 13.53 12m-2.97 0c0 1.3-1.028 2.354-2.295 2.354C6.997 14.354 5.97 13.3 5.97 12s1.027-2.353 2.295-2.353c1.267 0 2.295 1.053 2.295 2.353',
                fillRule: 'evenodd',
                clipRule: 'evenodd'
            }
        ],
        [
            'path',
            {
                fill: '#00A7E7',
                d: 'M21 12c0 2.982-2.357 5.4-5.265 5.4S10.47 14.982 10.47 12s2.357-5.4 5.265-5.4S21 9.017 21 12m-2.97 0c0 1.3-1.028 2.354-2.296 2.354S13.44 13.3 13.44 12s1.028-2.353 2.295-2.353c1.268 0 2.295 1.053 2.295 2.353',
                fillRule: 'evenodd',
                clipRule: 'evenodd'
            }
        ],
        [
            'path',
            {
                fill: '#1F3464',
                d: 'M10.461 11.965c0-1.935 1.013-3.326 1.54-3.78a5.24 5.24 0 0 1 1.556 3.78A5.77 5.77 0 0 1 12 15.817a5.5 5.5 0 0 1-1.539-3.852'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M13.53 12c0 2.982-2.357 5.4-5.265 5.4S3 14.982 3 12s2.357-5.4 5.265-5.4S13.53 9.017 13.53 12m-2.97 0c0 1.3-1.028 2.354-2.295 2.354C6.997 14.354 5.97 13.3 5.97 12s1.027-2.353 2.295-2.353c1.267 0 2.295 1.053 2.295 2.353',
                fillRule: 'evenodd',
                clipRule: 'evenodd'
            }
        ],
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M21 12c0 2.982-2.357 5.4-5.265 5.4S10.47 14.982 10.47 12s2.357-5.4 5.265-5.4S21 9.017 21 12m-2.97 0c0 1.3-1.028 2.354-2.296 2.354S13.44 13.3 13.44 12s1.028-2.353 2.295-2.353c1.268 0 2.295 1.053 2.295 2.353',
                fillRule: 'evenodd',
                clipRule: 'evenodd'
            }
        ],
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M10.461 11.964c0-1.935 1.013-3.326 1.54-3.78a5.24 5.24 0 0 1 1.556 3.78A5.77 5.77 0 0 1 12 15.816a5.5 5.5 0 0 1-1.539-3.852'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#MFT__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#DA1157',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M13.36 12c0 2.651-2.095 4.8-4.68 4.8S4 14.651 4 12s2.095-4.8 4.68-4.8 4.68 2.15 4.68 4.8m-2.64 0c0 1.156-.914 2.093-2.04 2.093-1.127 0-2.04-.937-2.04-2.092s.913-2.092 2.04-2.092c1.126 0 2.04.936 2.04 2.092',
                        fillRule: 'evenodd',
                        clipRule: 'evenodd'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M20 12c0 2.651-2.095 4.8-4.68 4.8s-4.68-2.149-4.68-4.8 2.095-4.8 4.68-4.8S20 9.35 20 12m-2.64 0c0 1.156-.914 2.093-2.04 2.093-1.127 0-2.04-.937-2.04-2.092s.913-2.092 2.04-2.092c1.126 0 2.04.936 2.04 2.092',
                        fillRule: 'evenodd',
                        clipRule: 'evenodd'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M10.632 11.968c0-1.72.9-2.957 1.368-3.36a4.66 4.66 0 0 1 1.384 3.36A5.13 5.13 0 0 1 12 15.391a4.88 4.88 0 0 1-1.368-3.424'
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
                        id: 'MFT__a'
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
 * @component @name TokenMFT
 * @description Web3Icon for TokenMFT
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNEQTExNTciIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTEzLjUzIDEyYzAgMi45ODItMi4zNTcgNS40LTUuMjY1IDUuNFMzIDE0Ljk4MiAzIDEyczIuMzU3LTUuNCA1LjI2NS01LjRTMTMuNTMgOS4wMTcgMTMuNTMgMTJtLTIuOTcgMGMwIDEuMy0xLjAyOCAyLjM1NC0yLjI5NSAyLjM1NEM2Ljk5NyAxNC4zNTQgNS45NyAxMy4zIDUuOTcgMTJzMS4wMjctMi4zNTMgMi4yOTUtMi4zNTNjMS4yNjcgMCAyLjI5NSAxLjA1MyAyLjI5NSAyLjM1MyIgY2xpcC1ydWxlPSJldmVub2RkIi8+CiAgICA8cGF0aCBmaWxsPSIjMDBBN0U3IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yMSAxMmMwIDIuOTgyLTIuMzU3IDUuNC01LjI2NSA1LjRTMTAuNDcgMTQuOTgyIDEwLjQ3IDEyczIuMzU3LTUuNCA1LjI2NS01LjRTMjEgOS4wMTcgMjEgMTJtLTIuOTcgMGMwIDEuMy0xLjAyOCAyLjM1NC0yLjI5NiAyLjM1NFMxMy40NCAxMy4zIDEzLjQ0IDEyczEuMDI4LTIuMzUzIDIuMjk1LTIuMzUzYzEuMjY4IDAgMi4yOTUgMS4wNTMgMi4yOTUgMi4zNTMiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgogICAgPHBhdGggZmlsbD0iIzFGMzQ2NCIgZD0iTTEwLjQ2MSAxMS45NjVjMC0xLjkzNSAxLjAxMy0zLjMyNiAxLjU0LTMuNzhhNS4yNCA1LjI0IDAgMCAxIDEuNTU2IDMuNzhBNS43NyA1Ljc3IDAgMCAxIDEyIDE1LjgxN2E1LjUgNS41IDAgMCAxLTEuNTM5LTMuODUyIi8+Cjwvc3ZnPgo=) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTEzLjUzIDEyYzAgMi45ODItMi4zNTcgNS40LTUuMjY1IDUuNFMzIDE0Ljk4MiAzIDEyczIuMzU3LTUuNCA1LjI2NS01LjRTMTMuNTMgOS4wMTcgMTMuNTMgMTJtLTIuOTcgMGMwIDEuMy0xLjAyOCAyLjM1NC0yLjI5NSAyLjM1NEM2Ljk5NyAxNC4zNTQgNS45NyAxMy4zIDUuOTcgMTJzMS4wMjctMi4zNTMgMi4yOTUtMi4zNTNjMS4yNjcgMCAyLjI5NSAxLjA1MyAyLjI5NSAyLjM1MyIgY2xpcC1ydWxlPSJldmVub2RkIi8+CiAgICA8cGF0aCBmaWxsPSIjZmZmIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yMSAxMmMwIDIuOTgyLTIuMzU3IDUuNC01LjI2NSA1LjRTMTAuNDcgMTQuOTgyIDEwLjQ3IDEyczIuMzU3LTUuNCA1LjI2NS01LjRTMjEgOS4wMTcgMjEgMTJtLTIuOTcgMGMwIDEuMy0xLjAyOCAyLjM1NC0yLjI5NiAyLjM1NFMxMy40NCAxMy4zIDEzLjQ0IDEyczEuMDI4LTIuMzUzIDIuMjk1LTIuMzUzYzEuMjY4IDAgMi4yOTUgMS4wNTMgMi4yOTUgMi4zNTMiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgogICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTEwLjQ2MSAxMS45NjRjMC0xLjkzNSAxLjAxMy0zLjMyNiAxLjU0LTMuNzhhNS4yNCA1LjI0IDAgMCAxIDEuNTU2IDMuNzhBNS43NyA1Ljc3IDAgMCAxIDEyIDE1LjgxNmE1LjUgNS41IDAgMCAxLTEuNTM5LTMuODUyIi8+Cjwvc3ZnPgo=) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNNRlRfX2EpIj4KICAgICAgICA8cGF0aCBmaWxsPSIjREExMTU3IiBkPSJNMjQgMEgwdjI0aDI0eiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTEzLjM2IDEyYzAgMi42NTEtMi4wOTUgNC44LTQuNjggNC44UzQgMTQuNjUxIDQgMTJzMi4wOTUtNC44IDQuNjgtNC44IDQuNjggMi4xNSA0LjY4IDQuOG0tMi42NCAwYzAgMS4xNTYtLjkxNCAyLjA5My0yLjA0IDIuMDkzLTEuMTI3IDAtMi4wNC0uOTM3LTIuMDQtMi4wOTJzLjkxMy0yLjA5MiAyLjA0LTIuMDkyYzEuMTI2IDAgMi4wNC45MzYgMi4wNCAyLjA5MiIgY2xpcC1ydWxlPSJldmVub2RkIi8+CiAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMjAgMTJjMCAyLjY1MS0yLjA5NSA0LjgtNC42OCA0LjhzLTQuNjgtMi4xNDktNC42OC00LjggMi4wOTUtNC44IDQuNjgtNC44UzIwIDkuMzUgMjAgMTJtLTIuNjQgMGMwIDEuMTU2LS45MTQgMi4wOTMtMi4wNCAyLjA5My0xLjEyNyAwLTIuMDQtLjkzNy0yLjA0LTIuMDkycy45MTMtMi4wOTIgMi4wNC0yLjA5MmMxLjEyNiAwIDIuMDQuOTM2IDIuMDQgMi4wOTIiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xMC42MzIgMTEuOTY4YzAtMS43Mi45LTIuOTU3IDEuMzY4LTMuMzZhNC42NiA0LjY2IDAgMCAxIDEuMzg0IDMuMzZBNS4xMyA1LjEzIDAgMCAxIDEyIDE1LjM5MWE0Ljg4IDQuODggMCAwIDEtMS4zNjgtMy40MjQiLz4KICAgIDwvZz4KICAgIDxkZWZzPgogICAgICAgIDxjbGlwUGF0aCBpZD0iTUZUX19hIj4KICAgICAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTAgMGgyNHYyNEgweiIvPgogICAgICAgIDwvY2xpcFBhdGg+CiAgICA8L2RlZnM+Cjwvc3ZnPgo=)
 * @see https://web3icons.io/tokens/MFT
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenMFT = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenMFT', __iconNode);
;
}),
]);

//# sourceMappingURL=1qqr_%40web3icons_react_dist_1g7xs6_._.js.map