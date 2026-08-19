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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenFOOM.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenFOOM
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-ssr] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: 'red',
                d: 'M5.813 3.563H21v15.186H5.813z'
            }
        ],
        [
            'path',
            {
                fill: '#00F8FF',
                d: 'M3 5.813h15.749v14.624H3z'
            }
        ],
        [
            'path',
            {
                fill: '#000',
                d: 'M4.126 4.69h15.749v14.624H4.126z'
            }
        ],
        [
            'path',
            {
                fill: '#00F8FF',
                d: 'M8.063 9.75h6.75l-.619.844H9.751V12h4.865l-.742.844H9.75v2.531H8.063z'
            }
        ],
        [
            'path',
            {
                fill: 'red',
                d: 'M9.188 8.628h6.75l-.619.843h-4.443v1.406h4.865l-.742.844h-4.123v2.531H9.188z'
            }
        ],
        [
            'path',
            {
                fill: '#fff',
                d: 'M8.625 9.188h6.75l-.62.844h-4.443v1.406h4.866l-.743.844h-4.123v2.53H8.625z'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#FOOM__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: 'red',
                        d: 'M6.5 4.5H20V18H6.5z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#00F8FF',
                        d: 'M4 6.5h14v13H4z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#000',
                        d: 'M5 5.502h14v13H5z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#00F8FF',
                        d: 'M8.5 10h6l-.55.75H10V12h4.326l-.66.75H10V15H8.5z'
                    }
                ],
                [
                    'path',
                    {
                        fill: 'red',
                        d: 'M9.5 9.002h6l-.55.75H11v1.25h4.326l-.66.75H11v2.25H9.5z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M9 9.5h6l-.55.75H10.5v1.25h4.325l-.66.75H10.5v2.25H9z'
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
                        id: 'FOOM__a'
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
 * @component @name TokenFOOM
 * @description Web3Icon for TokenFOOM
 *
 * @preview (branded, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9InJlZCIgZD0iTTUuODEzIDMuNTYzSDIxdjE1LjE4Nkg1LjgxM3oiLz4KICAgIDxwYXRoIGZpbGw9IiMwMEY4RkYiIGQ9Ik0zIDUuODEzaDE1Ljc0OXYxNC42MjRIM3oiLz4KICAgIDxwYXRoIGZpbGw9IiMwMDAiIGQ9Ik00LjEyNiA0LjY5aDE1Ljc0OXYxNC42MjRINC4xMjZ6Ii8+CiAgICA8cGF0aCBmaWxsPSIjMDBGOEZGIiBkPSJNOC4wNjMgOS43NWg2Ljc1bC0uNjE5Ljg0NEg5Ljc1MVYxMmg0Ljg2NWwtLjc0Mi44NDRIOS43NXYyLjUzMUg4LjA2M3oiLz4KICAgIDxwYXRoIGZpbGw9InJlZCIgZD0iTTkuMTg4IDguNjI4aDYuNzVsLS42MTkuODQzaC00LjQ0M3YxLjQwNmg0Ljg2NWwtLjc0Mi44NDRoLTQuMTIzdjIuNTMxSDkuMTg4eiIvPgogICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTguNjI1IDkuMTg4aDYuNzVsLS42Mi44NDRoLTQuNDQzdjEuNDA2aDQuODY2bC0uNzQzLjg0NGgtNC4xMjN2Mi41M0g4LjYyNXoiLz4KPC9zdmc+Cg==) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNGT09NX19hKSI+CiAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTI0IDBIMHYyNGgyNHoiLz4KICAgICAgICA8cGF0aCBmaWxsPSJyZWQiIGQ9Ik02LjUgNC41SDIwVjE4SDYuNXoiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjMDBGOEZGIiBkPSJNNCA2LjVoMTR2MTNINHoiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjMDAwIiBkPSJNNSA1LjUwMmgxNHYxM0g1eiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiMwMEY4RkYiIGQ9Ik04LjUgMTBoNmwtLjU1Ljc1SDEwVjEyaDQuMzI2bC0uNjYuNzVIMTBWMTVIOC41eiIvPgogICAgICAgIDxwYXRoIGZpbGw9InJlZCIgZD0iTTkuNSA5LjAwMmg2bC0uNTUuNzVIMTF2MS4yNWg0LjMyNmwtLjY2Ljc1SDExdjIuMjVIOS41eiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik05IDkuNWg2bC0uNTUuNzVIMTAuNXYxLjI1aDQuMzI1bC0uNjYuNzVIMTAuNXYyLjI1SDl6Ii8+CiAgICA8L2c+CiAgICA8ZGVmcz4KICAgICAgICA8Y2xpcFBhdGggaWQ9IkZPT01fX2EiPgogICAgICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMCAwaDI0djI0SDB6Ii8+CiAgICAgICAgPC9jbGlwUGF0aD4KICAgIDwvZGVmcz4KPC9zdmc+Cg==)
 * @see https://web3icons.io/tokens/FOOM
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenFOOM = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenFOOM', __iconNode);
;
}),
];

//# sourceMappingURL=1qqr_%40web3icons_react_dist_0fy-e1g._.js.map