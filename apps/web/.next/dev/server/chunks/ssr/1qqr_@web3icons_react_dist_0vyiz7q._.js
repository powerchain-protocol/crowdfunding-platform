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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenBOND.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenBOND
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-ssr] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#FF4339',
                d: 'm8.5 17.476-3.015 2.15A8.97 8.97 0 0 1 3 13.481v-.11a9 9 0 0 1 18 .005v.1a8.97 8.97 0 0 1-2.46 6.135l-3.04-2.155v-4.555l1.11-.82-4.58-3.465-4.58 3.465 1.05.82zm3.5-5.555h.075c1.36 0 2.5 1.005 2.42 2.28v2.55l-2.5-1.75L9.5 16.776v-2.575c0-1.28 1.135-2.28 2.5-2.28'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'm8.5 17.476-3.015 2.15A8.97 8.97 0 0 1 3 13.481v-.11a9 9 0 0 1 18 .005v.1a8.97 8.97 0 0 1-2.46 6.135l-3.04-2.155v-4.555l1.11-.82-4.58-3.465-4.58 3.465 1.05.82zm3.5-5.555h.075c1.36 0 2.5 1.005 2.42 2.28v2.55l-2.5-1.75L9.5 16.776v-2.575c0-1.28 1.135-2.28 2.5-2.28'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#BOND__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#FF4339',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'm8.889 16.868-2.68 1.911A7.97 7.97 0 0 1 4 13.317v-.098a8 8 0 0 1 16 .004v.09a7.97 7.97 0 0 1-2.187 5.453l-2.702-1.916v-4.049l.987-.729-4.071-3.08-4.071 3.08.933.73zM12 11.93h.067c1.208 0 2.222.893 2.15 2.027v2.266l-2.222-1.555-2.217 1.578v-2.29c0-1.137 1.009-2.026 2.222-2.026'
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
                        id: 'BOND__a'
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
 * @component @name TokenBOND
 * @description Web3Icon for TokenBOND
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNGRjQzMzkiIGQ9Im04LjUgMTcuNDc2LTMuMDE1IDIuMTVBOC45NyA4Ljk3IDAgMCAxIDMgMTMuNDgxdi0uMTFhOSA5IDAgMCAxIDE4IC4wMDV2LjFhOC45NyA4Ljk3IDAgMCAxLTIuNDYgNi4xMzVsLTMuMDQtMi4xNTV2LTQuNTU1bDEuMTEtLjgyLTQuNTgtMy40NjUtNC41OCAzLjQ2NSAxLjA1Ljgyem0zLjUtNS41NTVoLjA3NWMxLjM2IDAgMi41IDEuMDA1IDIuNDIgMi4yOHYyLjU1bC0yLjUtMS43NUw5LjUgMTYuNzc2di0yLjU3NWMwLTEuMjggMS4xMzUtMi4yOCAyLjUtMi4yOCIvPgo8L3N2Zz4K) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Im04LjUgMTcuNDc2LTMuMDE1IDIuMTVBOC45NyA4Ljk3IDAgMCAxIDMgMTMuNDgxdi0uMTFhOSA5IDAgMCAxIDE4IC4wMDV2LjFhOC45NyA4Ljk3IDAgMCAxLTIuNDYgNi4xMzVsLTMuMDQtMi4xNTV2LTQuNTU1bDEuMTEtLjgyLTQuNTgtMy40NjUtNC41OCAzLjQ2NSAxLjA1Ljgyem0zLjUtNS41NTVoLjA3NWMxLjM2IDAgMi41IDEuMDA1IDIuNDIgMi4yOHYyLjU1bC0yLjUtMS43NUw5LjUgMTYuNzc2di0yLjU3NWMwLTEuMjggMS4xMzUtMi4yOCAyLjUtMi4yOCIvPgo8L3N2Zz4K) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNCT05EX19hKSI+CiAgICAgICAgPHBhdGggZmlsbD0iI0ZGNDMzOSIgZD0iTTI0IDBIMHYyNGgyNHoiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJtOC44ODkgMTYuODY4LTIuNjggMS45MTFBNy45NyA3Ljk3IDAgMCAxIDQgMTMuMzE3di0uMDk4YTggOCAwIDAgMSAxNiAuMDA0di4wOWE3Ljk3IDcuOTcgMCAwIDEtMi4xODcgNS40NTNsLTIuNzAyLTEuOTE2di00LjA0OWwuOTg3LS43MjktNC4wNzEtMy4wOC00LjA3MSAzLjA4LjkzMy43M3pNMTIgMTEuOTNoLjA2N2MxLjIwOCAwIDIuMjIyLjg5MyAyLjE1IDIuMDI3djIuMjY2bC0yLjIyMi0xLjU1NS0yLjIxNyAxLjU3OHYtMi4yOWMwLTEuMTM3IDEuMDA5LTIuMDI2IDIuMjIyLTIuMDI2Ii8+CiAgICA8L2c+CiAgICA8ZGVmcz4KICAgICAgICA8Y2xpcFBhdGggaWQ9IkJPTkRfX2EiPgogICAgICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMCAwaDI0djI0SDB6Ii8+CiAgICAgICAgPC9jbGlwUGF0aD4KICAgIDwvZGVmcz4KPC9zdmc+Cg==)
 * @see https://web3icons.io/tokens/BOND
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenBOND = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenBOND', __iconNode);
;
}),
];

//# sourceMappingURL=1qqr_%40web3icons_react_dist_0vyiz7q._.js.map