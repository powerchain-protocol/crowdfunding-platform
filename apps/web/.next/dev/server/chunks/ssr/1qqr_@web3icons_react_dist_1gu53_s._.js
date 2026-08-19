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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenDAFI.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenDAFI
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-ssr] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#33363C',
                d: 'M16.91 3a1.09 1.09 0 0 0-1.091 1.091v3.84a7.092 7.092 0 1 0 3.273 5.98V4.09A1.09 1.09 0 0 0 18 3zm-1.091 10.91a3.819 3.819 0 1 0-7.638 0 3.819 3.819 0 0 0 7.638 0',
                fillRule: 'evenodd',
                clipRule: 'evenodd'
            }
        ],
        [
            'path',
            {
                fill: 'url(#DAFI__a)',
                d: 'M12 6.818a7.07 7.07 0 0 1 3.819 1.113v5.434h-.039a3.819 3.819 0 0 0-7.56 0H4.93A7.09 7.09 0 0 1 12 6.818'
            }
        ],
        [
            'defs',
            {},
            [
                [
                    'linearGradient',
                    {
                        id: 'DAFI__a',
                        x1: '16.364',
                        x2: '7.908',
                        y1: '9',
                        y2: '9',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#222529'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#131519',
                                stopOpacity: '0'
                            }
                        ]
                    ]
                ]
            ]
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M16.91 3a1.09 1.09 0 0 0-1.091 1.091v3.84a7.092 7.092 0 1 0 3.273 5.98V4.09A1.09 1.09 0 0 0 18 3zm-1.091 10.91a3.819 3.819 0 1 0-7.638 0 3.819 3.819 0 0 0 7.638 0',
                fillRule: 'evenodd',
                clipRule: 'evenodd'
            }
        ],
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M12 6.818a7.07 7.07 0 0 1 3.819 1.113v5.434h-.039a3.818 3.818 0 0 0-7.56 0H4.93A7.09 7.09 0 0 1 12 6.818'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#DAFI__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#33363C',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M16.364 4a.97.97 0 0 0-.97.97v3.414a6.304 6.304 0 1 0 2.91 5.315v-8.73a.97.97 0 0 0-.97-.969zm-.97 9.699a3.394 3.394 0 1 0-6.789 0 3.394 3.394 0 0 0 6.79 0',
                        fillRule: 'evenodd',
                        clipRule: 'evenodd'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M12 7.394c1.251 0 2.415.363 3.395.99v4.829h-.034a3.395 3.395 0 0 0-6.722 0H5.715A6.304 6.304 0 0 1 12 7.393'
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
                        id: 'DAFI__a'
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
 * @component @name TokenDAFI
 * @description Web3Icon for TokenDAFI
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiMzMzM2M0MiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTE2LjkxIDNhMS4wOSAxLjA5IDAgMCAwLTEuMDkxIDEuMDkxdjMuODRhNy4wOTIgNy4wOTIgMCAxIDAgMy4yNzMgNS45OFY0LjA5QTEuMDkgMS4wOSAwIDAgMCAxOCAzem0tMS4wOTEgMTAuOTFhMy44MTkgMy44MTkgMCAxIDAtNy42MzggMCAzLjgxOSAzLjgxOSAwIDAgMCA3LjYzOCAwIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KICAgIDxwYXRoIGZpbGw9InVybCgjREFGSV9fYSkiIGQ9Ik0xMiA2LjgxOGE3LjA3IDcuMDcgMCAwIDEgMy44MTkgMS4xMTN2NS40MzRoLS4wMzlhMy44MTkgMy44MTkgMCAwIDAtNy41NiAwSDQuOTNBNy4wOSA3LjA5IDAgMCAxIDEyIDYuODE4Ii8+CiAgICA8ZGVmcz4KICAgICAgICA8bGluZWFyR3JhZGllbnQgaWQ9IkRBRklfX2EiIHgxPSIxNi4zNjQiIHgyPSI3LjkwOCIgeTE9IjkiIHkyPSI5IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiMyMjI1MjkiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMTMxNTE5IiBzdG9wLW9wYWNpdHk9IjAiLz4KICAgICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgPC9kZWZzPgo8L3N2Zz4K) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTE2LjkxIDNhMS4wOSAxLjA5IDAgMCAwLTEuMDkxIDEuMDkxdjMuODRhNy4wOTIgNy4wOTIgMCAxIDAgMy4yNzMgNS45OFY0LjA5QTEuMDkgMS4wOSAwIDAgMCAxOCAzem0tMS4wOTEgMTAuOTFhMy44MTkgMy44MTkgMCAxIDAtNy42MzggMCAzLjgxOSAzLjgxOSAwIDAgMCA3LjYzOCAwIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xMiA2LjgxOGE3LjA3IDcuMDcgMCAwIDEgMy44MTkgMS4xMTN2NS40MzRoLS4wMzlhMy44MTggMy44MTggMCAwIDAtNy41NiAwSDQuOTNBNy4wOSA3LjA5IDAgMCAxIDEyIDYuODE4Ii8+Cjwvc3ZnPgo=) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNEQUZJX19hKSI+CiAgICAgICAgPHBhdGggZmlsbD0iIzMzMzYzQyIgZD0iTTI0IDBIMHYyNGgyNHoiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNi4zNjQgNGEuOTcuOTcgMCAwIDAtLjk3Ljk3djMuNDE0YTYuMzA0IDYuMzA0IDAgMSAwIDIuOTEgNS4zMTV2LTguNzNhLjk3Ljk3IDAgMCAwLS45Ny0uOTY5em0tLjk3IDkuNjk5YTMuMzk0IDMuMzk0IDAgMSAwLTYuNzg5IDAgMy4zOTQgMy4zOTQgMCAwIDAgNi43OSAwIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTIgNy4zOTRjMS4yNTEgMCAyLjQxNS4zNjMgMy4zOTUuOTl2NC44MjloLS4wMzRhMy4zOTUgMy4zOTUgMCAwIDAtNi43MjIgMEg1LjcxNUE2LjMwNCA2LjMwNCAwIDAgMSAxMiA3LjM5MyIvPgogICAgPC9nPgogICAgPGRlZnM+CiAgICAgICAgPGNsaXBQYXRoIGlkPSJEQUZJX19hIj4KICAgICAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTAgMGgyNHYyNEgweiIvPgogICAgICAgIDwvY2xpcFBhdGg+CiAgICA8L2RlZnM+Cjwvc3ZnPgo=)
 * @see https://web3icons.io/tokens/DAFI
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenDAFI = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenDAFI', __iconNode);
;
}),
];

//# sourceMappingURL=1qqr_%40web3icons_react_dist_1gu53_s._.js.map