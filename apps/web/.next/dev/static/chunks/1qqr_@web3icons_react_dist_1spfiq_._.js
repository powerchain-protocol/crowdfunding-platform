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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenPICA.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenPICA
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-client] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#282828',
                d: 'M10.714 3H3v18h7.714v-6.454c.964.43 2.057.668 3.214.668 3.91 0 7.072-2.732 7.072-6.107S17.837 3 13.929 3c-1.158 0-2.25.238-3.215.669zm3.214 11.572a7.2 7.2 0 0 1-3.214-.733V4.376a7.3 7.3 0 0 1 3.214-.733c3.55 0 6.43 2.443 6.43 5.464s-2.88 5.465-6.43 5.465M7.5 9.107c0 1.787 1.01 3.375 2.572 4.372V4.736C8.509 5.732 7.5 7.32 7.5 9.107m-.643 0c0-2.14 1.28-4.03 3.215-5.117v-.347h-6.43v16.714h6.43v-6.133c-1.936-1.092-3.215-2.976-3.215-5.117M21 15.214V21c-1.774 0-3.214-1.292-3.214-2.893s1.44-2.893 3.214-2.893',
                fillRule: 'evenodd',
                clipRule: 'evenodd'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M10.714 3H3v18h7.714v-6.454c.964.43 2.057.668 3.214.668 3.91 0 7.072-2.732 7.072-6.107S17.837 3 13.929 3c-1.158 0-2.25.238-3.215.669zm3.214 11.572a7.2 7.2 0 0 1-3.214-.733V4.376a7.3 7.3 0 0 1 3.214-.733c3.55 0 6.43 2.443 6.43 5.464s-2.88 5.465-6.43 5.465M7.5 9.107c0 1.787 1.01 3.375 2.572 4.372V4.736C8.509 5.732 7.5 7.32 7.5 9.107m-.643 0c0-2.14 1.28-4.03 3.215-5.117v-.347h-6.43v16.714h6.43v-6.133c-1.936-1.092-3.215-2.976-3.215-5.117M21 15.214V21c-1.774 0-3.214-1.292-3.214-2.893s1.44-2.893 3.214-2.893',
                fillRule: 'evenodd',
                clipRule: 'evenodd'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#PICA__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#282828',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M10.857 4H4v16h6.857v-5.737a7 7 0 0 0 2.857.594C17.19 14.857 20 12.43 20 9.43S17.189 4 13.714 4a7 7 0 0 0-2.857.594zm2.857 10.286a6.4 6.4 0 0 1-2.857-.652V5.223a6.5 6.5 0 0 1 2.857-.652c3.155 0 5.715 2.172 5.715 4.858s-2.56 4.857-5.715 4.857M8 9.429c0 1.588.897 3 2.286 3.885V5.543C8.897 6.429 8 7.84 8 9.429m-.571 0c0-1.903 1.137-3.583 2.857-4.549v-.309H4.57V19.43h5.715v-5.452c-1.72-.971-2.857-2.646-2.857-4.548M20 14.857V20c-1.577 0-2.857-1.149-2.857-2.571s1.28-2.572 2.857-2.572',
                        fillRule: 'evenodd',
                        clipRule: 'evenodd'
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
                        id: 'PICA__a'
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
 * @component @name TokenPICA
 * @description Web3Icon for TokenPICA
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiMyODI4MjgiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTEwLjcxNCAzSDN2MThoNy43MTR2LTYuNDU0Yy45NjQuNDMgMi4wNTcuNjY4IDMuMjE0LjY2OCAzLjkxIDAgNy4wNzItMi43MzIgNy4wNzItNi4xMDdTMTcuODM3IDMgMTMuOTI5IDNjLTEuMTU4IDAtMi4yNS4yMzgtMy4yMTUuNjY5em0zLjIxNCAxMS41NzJhNy4yIDcuMiAwIDAgMS0zLjIxNC0uNzMzVjQuMzc2YTcuMyA3LjMgMCAwIDEgMy4yMTQtLjczM2MzLjU1IDAgNi40MyAyLjQ0MyA2LjQzIDUuNDY0cy0yLjg4IDUuNDY1LTYuNDMgNS40NjVNNy41IDkuMTA3YzAgMS43ODcgMS4wMSAzLjM3NSAyLjU3MiA0LjM3MlY0LjczNkM4LjUwOSA1LjczMiA3LjUgNy4zMiA3LjUgOS4xMDdtLS42NDMgMGMwLTIuMTQgMS4yOC00LjAzIDMuMjE1LTUuMTE3di0uMzQ3aC02LjQzdjE2LjcxNGg2LjQzdi02LjEzM2MtMS45MzYtMS4wOTItMy4yMTUtMi45NzYtMy4yMTUtNS4xMTdNMjEgMTUuMjE0VjIxYy0xLjc3NCAwLTMuMjE0LTEuMjkyLTMuMjE0LTIuODkzczEuNDQtMi44OTMgMy4yMTQtMi44OTMiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4K) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTEwLjcxNCAzSDN2MThoNy43MTR2LTYuNDU0Yy45NjQuNDMgMi4wNTcuNjY4IDMuMjE0LjY2OCAzLjkxIDAgNy4wNzItMi43MzIgNy4wNzItNi4xMDdTMTcuODM3IDMgMTMuOTI5IDNjLTEuMTU4IDAtMi4yNS4yMzgtMy4yMTUuNjY5em0zLjIxNCAxMS41NzJhNy4yIDcuMiAwIDAgMS0zLjIxNC0uNzMzVjQuMzc2YTcuMyA3LjMgMCAwIDEgMy4yMTQtLjczM2MzLjU1IDAgNi40MyAyLjQ0MyA2LjQzIDUuNDY0cy0yLjg4IDUuNDY1LTYuNDMgNS40NjVNNy41IDkuMTA3YzAgMS43ODcgMS4wMSAzLjM3NSAyLjU3MiA0LjM3MlY0LjczNkM4LjUwOSA1LjczMiA3LjUgNy4zMiA3LjUgOS4xMDdtLS42NDMgMGMwLTIuMTQgMS4yOC00LjAzIDMuMjE1LTUuMTE3di0uMzQ3aC02LjQzdjE2LjcxNGg2LjQzdi02LjEzM2MtMS45MzYtMS4wOTItMy4yMTUtMi45NzYtMy4yMTUtNS4xMTdNMjEgMTUuMjE0VjIxYy0xLjc3NCAwLTMuMjE0LTEuMjkyLTMuMjE0LTIuODkzczEuNDQtMi44OTMgMy4yMTQtMi44OTMiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4K) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNQSUNBX19hKSI+CiAgICAgICAgPHBhdGggZmlsbD0iIzI4MjgyOCIgZD0iTTI0IDBIMHYyNGgyNHoiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMC44NTcgNEg0djE2aDYuODU3di01LjczN2E3IDcgMCAwIDAgMi44NTcuNTk0QzE3LjE5IDE0Ljg1NyAyMCAxMi40MyAyMCA5LjQzUzE3LjE4OSA0IDEzLjcxNCA0YTcgNyAwIDAgMC0yLjg1Ny41OTR6bTIuODU3IDEwLjI4NmE2LjQgNi40IDAgMCAxLTIuODU3LS42NTJWNS4yMjNhNi41IDYuNSAwIDAgMSAyLjg1Ny0uNjUyYzMuMTU1IDAgNS43MTUgMi4xNzIgNS43MTUgNC44NThzLTIuNTYgNC44NTctNS43MTUgNC44NTdNOCA5LjQyOWMwIDEuNTg4Ljg5NyAzIDIuMjg2IDMuODg1VjUuNTQzQzguODk3IDYuNDI5IDggNy44NCA4IDkuNDI5bS0uNTcxIDBjMC0xLjkwMyAxLjEzNy0zLjU4MyAyLjg1Ny00LjU0OXYtLjMwOUg0LjU3VjE5LjQzaDUuNzE1di01LjQ1MmMtMS43Mi0uOTcxLTIuODU3LTIuNjQ2LTIuODU3LTQuNTQ4TTIwIDE0Ljg1N1YyMGMtMS41NzcgMC0yLjg1Ny0xLjE0OS0yLjg1Ny0yLjU3MXMxLjI4LTIuNTcyIDIuODU3LTIuNTcyIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KICAgIDwvZz4KICAgIDxkZWZzPgogICAgICAgIDxjbGlwUGF0aCBpZD0iUElDQV9fYSI+CiAgICAgICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0wIDBoMjR2MjRIMHoiLz4KICAgICAgICA8L2NsaXBQYXRoPgogICAgPC9kZWZzPgo8L3N2Zz4K)
 * @see https://web3icons.io/tokens/PICA
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenPICA = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenPICA', __iconNode);
;
}),
]);

//# sourceMappingURL=1qqr_%40web3icons_react_dist_1spfiq_._.js.map