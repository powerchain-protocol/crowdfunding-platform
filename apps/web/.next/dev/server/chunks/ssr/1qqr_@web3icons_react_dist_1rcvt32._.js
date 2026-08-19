module.exports = [
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createWeb3Icon",
    ()=>createWeb3Icon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$types$2b$node$40$24$2e$13$2e$3_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.1_@types+node@24.13.3_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$BaseIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/BaseIcon.js [app-ssr] (ecmascript)");
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
    const Component = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$types$2b$node$40$24$2e$13$2e$3_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ variant = defaultVariant, fallback, ...props }, ref)=>{
        const iconData = variants[variant];
        if (!iconData) {
            console.warn(`Icon "${name}" does not have variant "${variant}". ` + `Available variants: ${availableVariants.join(', ')}`);
            return null;
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$types$2b$node$40$24$2e$13$2e$3_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$BaseIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseIcon"], {
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
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$types$2b$node$40$24$2e$13$2e$3_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])(element, elementProps, childElements);
    });
}
;
}),
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenC98.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenC98
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-ssr] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#0A0000',
                d: 'M12 9.469a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0m-1.687 0a2.813 2.813 0 1 1-5.626 0 2.813 2.813 0 0 1 5.626 0M5.25 15.094H3.563a3.937 3.937 0 1 0 7.874 0H9.75a2.25 2.25 0 0 1-4.5 0m3.375-5.625a1.125 1.125 0 1 1-1.406-1.092v-.596h.562v.596a1.125 1.125 0 0 1 .844 1.092m7.875.562a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9m0 1.688a2.812 2.812 0 1 1 0 5.624 2.812 2.812 0 0 1 0-5.624m1.125 2.812a1.124 1.124 0 1 0-1.406 1.092v.596h.562v-.597a1.13 1.13 0 0 0 .844-1.09M16.5 4.97a3.938 3.938 0 0 1 3.56 5.613 5.3 5.3 0 0 0-1.44-.928 2.25 2.25 0 1 0-4.24 0 5.2 5.2 0 0 0-1.44.928A3.937 3.937 0 0 1 16.5 4.97',
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
                d: 'M12 9.469a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0m-1.687 0a2.813 2.813 0 1 1-5.627 0 2.813 2.813 0 0 1 5.627 0M5.25 15.094H3.563a3.937 3.937 0 1 0 7.874 0H9.75a2.25 2.25 0 0 1-4.5 0m3.375-5.625a1.125 1.125 0 1 1-1.406-1.092v-.596h.562v.596a1.125 1.125 0 0 1 .844 1.092m7.875.562a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9m0 1.688a2.812 2.812 0 1 1 0 5.624 2.812 2.812 0 0 1 0-5.624m1.125 2.812a1.125 1.125 0 1 0-1.406 1.091v.597h.562v-.597a1.125 1.125 0 0 0 .844-1.09M16.5 4.97a3.938 3.938 0 0 1 3.56 5.613 5.3 5.3 0 0 0-1.44-.928 2.25 2.25 0 1 0-4.24 0 5.2 5.2 0 0 0-1.44.928A3.937 3.937 0 0 1 16.5 4.97',
                fillRule: 'evenodd',
                clipRule: 'evenodd'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#C98__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#0A0000',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M12 9.75a4 4 0 1 1-8 0 4 4 0 0 1 8 0m-1.5 0a2.5 2.5 0 1 1-5.002 0 2.5 2.5 0 0 1 5.002 0m-4.5 5H4.5a3.5 3.5 0 0 0 7 0H10a2 2 0 0 1-4 0m3-5a1 1 0 1 1-1.25-.97v-.53h.5v.53a1 1 0 0 1 .75.97m7 .5a4 4 0 1 1 0 8 4 4 0 0 1 0-8m0 1.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5m1 2.5a1 1 0 1 0-1.25.97v.53h.5v-.53a1 1 0 0 0 .75-.97m-1-8.5a3.5 3.5 0 0 1 3.165 4.99 4.7 4.7 0 0 0-1.28-.825 2 2 0 1 0-3.77 0 4.6 4.6 0 0 0-1.28.825A3.498 3.498 0 0 1 16 5.75',
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
                        id: 'C98__a'
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
 * @component @name TokenC98
 * @description Web3Icon for TokenC98
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiMwQTAwMDAiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTEyIDkuNDY5YTQuNSA0LjUgMCAxIDEtOSAwIDQuNSA0LjUgMCAwIDEgOSAwbS0xLjY4NyAwYTIuODEzIDIuODEzIDAgMSAxLTUuNjI2IDAgMi44MTMgMi44MTMgMCAwIDEgNS42MjYgME01LjI1IDE1LjA5NEgzLjU2M2EzLjkzNyAzLjkzNyAwIDEgMCA3Ljg3NCAwSDkuNzVhMi4yNSAyLjI1IDAgMCAxLTQuNSAwbTMuMzc1LTUuNjI1YTEuMTI1IDEuMTI1IDAgMSAxLTEuNDA2LTEuMDkydi0uNTk2aC41NjJ2LjU5NmExLjEyNSAxLjEyNSAwIDAgMSAuODQ0IDEuMDkybTcuODc1LjU2MmE0LjUgNC41IDAgMSAxIDAgOSA0LjUgNC41IDAgMCAxIDAtOW0wIDEuNjg4YTIuODEyIDIuODEyIDAgMSAxIDAgNS42MjQgMi44MTIgMi44MTIgMCAwIDEgMC01LjYyNG0xLjEyNSAyLjgxMmExLjEyNCAxLjEyNCAwIDEgMC0xLjQwNiAxLjA5MnYuNTk2aC41NjJ2LS41OTdhMS4xMyAxLjEzIDAgMCAwIC44NDQtMS4wOU0xNi41IDQuOTdhMy45MzggMy45MzggMCAwIDEgMy41NiA1LjYxMyA1LjMgNS4zIDAgMCAwLTEuNDQtLjkyOCAyLjI1IDIuMjUgMCAxIDAtNC4yNCAwIDUuMiA1LjIgMCAwIDAtMS40NC45MjhBMy45MzcgMy45MzcgMCAwIDEgMTYuNSA0Ljk3IiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+Cg==) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTEyIDkuNDY5YTQuNSA0LjUgMCAxIDEtOSAwIDQuNSA0LjUgMCAwIDEgOSAwbS0xLjY4NyAwYTIuODEzIDIuODEzIDAgMSAxLTUuNjI3IDAgMi44MTMgMi44MTMgMCAwIDEgNS42MjcgME01LjI1IDE1LjA5NEgzLjU2M2EzLjkzNyAzLjkzNyAwIDEgMCA3Ljg3NCAwSDkuNzVhMi4yNSAyLjI1IDAgMCAxLTQuNSAwbTMuMzc1LTUuNjI1YTEuMTI1IDEuMTI1IDAgMSAxLTEuNDA2LTEuMDkydi0uNTk2aC41NjJ2LjU5NmExLjEyNSAxLjEyNSAwIDAgMSAuODQ0IDEuMDkybTcuODc1LjU2MmE0LjUgNC41IDAgMSAxIDAgOSA0LjUgNC41IDAgMCAxIDAtOW0wIDEuNjg4YTIuODEyIDIuODEyIDAgMSAxIDAgNS42MjQgMi44MTIgMi44MTIgMCAwIDEgMC01LjYyNG0xLjEyNSAyLjgxMmExLjEyNSAxLjEyNSAwIDEgMC0xLjQwNiAxLjA5MXYuNTk3aC41NjJ2LS41OTdhMS4xMjUgMS4xMjUgMCAwIDAgLjg0NC0xLjA5TTE2LjUgNC45N2EzLjkzOCAzLjkzOCAwIDAgMSAzLjU2IDUuNjEzIDUuMyA1LjMgMCAwIDAtMS40NC0uOTI4IDIuMjUgMi4yNSAwIDEgMC00LjI0IDAgNS4yIDUuMiAwIDAgMC0xLjQ0LjkyOEEzLjkzNyAzLjkzNyAwIDAgMSAxNi41IDQuOTciIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4K) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNDOThfX2EpIj4KICAgICAgICA8cGF0aCBmaWxsPSIjMEEwMDAwIiBkPSJNMjQgMEgwdjI0aDI0eiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTEyIDkuNzVhNCA0IDAgMSAxLTggMCA0IDQgMCAwIDEgOCAwbS0xLjUgMGEyLjUgMi41IDAgMSAxLTUuMDAyIDAgMi41IDIuNSAwIDAgMSA1LjAwMiAwbS00LjUgNUg0LjVhMy41IDMuNSAwIDAgMCA3IDBIMTBhMiAyIDAgMCAxLTQgMG0zLTVhMSAxIDAgMSAxLTEuMjUtLjk3di0uNTNoLjV2LjUzYTEgMSAwIDAgMSAuNzUuOTdtNyAuNWE0IDQgMCAxIDEgMCA4IDQgNCAwIDAgMSAwLThtMCAxLjVhMi41IDIuNSAwIDEgMSAwIDUgMi41IDIuNSAwIDAgMSAwLTVtMSAyLjVhMSAxIDAgMSAwLTEuMjUuOTd2LjUzaC41di0uNTNhMSAxIDAgMCAwIC43NS0uOTdtLTEtOC41YTMuNSAzLjUgMCAwIDEgMy4xNjUgNC45OSA0LjcgNC43IDAgMCAwLTEuMjgtLjgyNSAyIDIgMCAxIDAtMy43NyAwIDQuNiA0LjYgMCAwIDAtMS4yOC44MjVBMy40OTggMy40OTggMCAwIDEgMTYgNS43NSIgY2xpcC1ydWxlPSJldmVub2RkIi8+CiAgICA8L2c+CiAgICA8ZGVmcz4KICAgICAgICA8Y2xpcFBhdGggaWQ9IkM5OF9fYSI+CiAgICAgICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0wIDBoMjR2MjRIMHoiLz4KICAgICAgICA8L2NsaXBQYXRoPgogICAgPC9kZWZzPgo8L3N2Zz4K)
 * @see https://web3icons.io/tokens/C98
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenC98 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenC98', __iconNode);
;
}),
];

//# sourceMappingURL=1qqr_%40web3icons_react_dist_1rcvt32._.js.map