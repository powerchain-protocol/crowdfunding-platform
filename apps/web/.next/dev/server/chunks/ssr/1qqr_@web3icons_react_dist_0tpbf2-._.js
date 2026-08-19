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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenMKR.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenMKR
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-ssr] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: 'url(#MKR__a)',
                d: 'M3.224 6.66a.45.45 0 0 1 .448-.001l7.199 4.095a.45.45 0 0 1 .228.39v5.806a.45.45 0 1 1-.9 0v-5.544L3.9 7.824v9.126a.45.45 0 0 1-.9 0v-9.9a.45.45 0 0 1 .224-.39m17.552 0a.45.45 0 0 0-.449-.001l-7.198 4.095a.45.45 0 0 0-.228.39v5.806a.45.45 0 0 0 .9 0v-5.544L20.1 7.824v9.126a.45.45 0 0 0 .9 0v-9.9a.45.45 0 0 0-.224-.39'
            }
        ],
        [
            'defs',
            {},
            [
                [
                    'linearGradient',
                    {
                        id: 'MKR__a',
                        x1: '3',
                        x2: '21',
                        y1: '12',
                        y2: '12',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#1BC4A3'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#586979'
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
                d: 'M3.224 6.66a.45.45 0 0 1 .448-.001l7.199 4.095a.45.45 0 0 1 .228.39v5.806a.45.45 0 1 1-.9 0v-5.544L3.9 7.824v9.125a.45.45 0 0 1-.9 0v-9.9a.45.45 0 0 1 .224-.388m17.552 0a.45.45 0 0 0-.449-.001l-7.198 4.095a.45.45 0 0 0-.228.39v5.806a.45.45 0 0 0 .9 0v-5.544L20.1 7.824v9.125a.45.45 0 0 0 .9 0v-9.9a.45.45 0 0 0-.224-.388'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#MKR__a)'
            },
            [
                [
                    'path',
                    {
                        fill: 'url(#MKR__b)',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M4.199 7.255a.4.4 0 0 1 .399-.002l6.398 3.64a.4.4 0 0 1 .203.347v5.16a.4.4 0 1 1-.8 0v-4.927L4.8 8.288V16.4a.4.4 0 0 1-.8 0V7.6a.4.4 0 0 1 .199-.345m15.602 0a.4.4 0 0 0-.399-.002l-6.398 3.64a.4.4 0 0 0-.203.347v5.16a.4.4 0 1 0 .8 0v-4.927L19.2 8.288V16.4a.4.4 0 0 0 .8 0V7.6a.4.4 0 0 0-.199-.345'
                    }
                ]
            ]
        ],
        [
            'defs',
            {},
            [
                [
                    'linearGradient',
                    {
                        id: 'MKR__b',
                        x1: '4',
                        x2: '20',
                        y1: '12',
                        y2: '12',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#1BC4A3'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#586979'
                            }
                        ]
                    ]
                ],
                [
                    'clipPath',
                    {
                        id: 'MKR__a'
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
 * @component @name TokenMKR
 * @description Web3Icon for TokenMKR
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9InVybCgjTUtSX19hKSIgZD0iTTMuMjI0IDYuNjZhLjQ1LjQ1IDAgMCAxIC40NDgtLjAwMWw3LjE5OSA0LjA5NWEuNDUuNDUgMCAwIDEgLjIyOC4zOXY1LjgwNmEuNDUuNDUgMCAxIDEtLjkgMHYtNS41NDRMMy45IDcuODI0djkuMTI2YS40NS40NSAwIDAgMS0uOSAwdi05LjlhLjQ1LjQ1IDAgMCAxIC4yMjQtLjM5bTE3LjU1MiAwYS40NS40NSAwIDAgMC0uNDQ5LS4wMDFsLTcuMTk4IDQuMDk1YS40NS40NSAwIDAgMC0uMjI4LjM5djUuODA2YS40NS40NSAwIDAgMCAuOSAwdi01LjU0NEwyMC4xIDcuODI0djkuMTI2YS40NS40NSAwIDAgMCAuOSAwdi05LjlhLjQ1LjQ1IDAgMCAwLS4yMjQtLjM5Ii8+CiAgICA8ZGVmcz4KICAgICAgICA8bGluZWFyR3JhZGllbnQgaWQ9Ik1LUl9fYSIgeDE9IjMiIHgyPSIyMSIgeTE9IjEyIiB5Mj0iMTIiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iIzFCQzRBMyIvPgogICAgICAgICAgICA8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiM1ODY5NzkiLz4KICAgICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgPC9kZWZzPgo8L3N2Zz4K) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0zLjIyNCA2LjY2YS40NS40NSAwIDAgMSAuNDQ4LS4wMDFsNy4xOTkgNC4wOTVhLjQ1LjQ1IDAgMCAxIC4yMjguMzl2NS44MDZhLjQ1LjQ1IDAgMSAxLS45IDB2LTUuNTQ0TDMuOSA3LjgyNHY5LjEyNWEuNDUuNDUgMCAwIDEtLjkgMHYtOS45YS40NS40NSAwIDAgMSAuMjI0LS4zODhtMTcuNTUyIDBhLjQ1LjQ1IDAgMCAwLS40NDktLjAwMWwtNy4xOTggNC4wOTVhLjQ1LjQ1IDAgMCAwLS4yMjguMzl2NS44MDZhLjQ1LjQ1IDAgMCAwIC45IDB2LTUuNTQ0TDIwLjEgNy44MjR2OS4xMjVhLjQ1LjQ1IDAgMCAwIC45IDB2LTkuOWEuNDUuNDUgMCAwIDAtLjIyNC0uMzg4Ii8+Cjwvc3ZnPgo=) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNNS1JfX2EpIj4KICAgICAgICA8cGF0aCBmaWxsPSJ1cmwoI01LUl9fYikiIGQ9Ik0yNCAwSDB2MjRoMjR6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTQuMTk5IDcuMjU1YS40LjQgMCAwIDEgLjM5OS0uMDAybDYuMzk4IDMuNjRhLjQuNCAwIDAgMSAuMjAzLjM0N3Y1LjE2YS40LjQgMCAxIDEtLjggMHYtNC45MjdMNC44IDguMjg4VjE2LjRhLjQuNCAwIDAgMS0uOCAwVjcuNmEuNC40IDAgMCAxIC4xOTktLjM0NW0xNS42MDIgMGEuNC40IDAgMCAwLS4zOTktLjAwMmwtNi4zOTggMy42NGEuNC40IDAgMCAwLS4yMDMuMzQ3djUuMTZhLjQuNCAwIDEgMCAuOCAwdi00LjkyN0wxOS4yIDguMjg4VjE2LjRhLjQuNCAwIDAgMCAuOCAwVjcuNmEuNC40IDAgMCAwLS4xOTktLjM0NSIvPgogICAgPC9nPgogICAgPGRlZnM+CiAgICAgICAgPGxpbmVhckdyYWRpZW50IGlkPSJNS1JfX2IiIHgxPSI0IiB4Mj0iMjAiIHkxPSIxMiIgeTI9IjEyIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiMxQkM0QTMiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjNTg2OTc5Ii8+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgICAgICA8Y2xpcFBhdGggaWQ9Ik1LUl9fYSI+CiAgICAgICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0wIDBoMjR2MjRIMHoiLz4KICAgICAgICA8L2NsaXBQYXRoPgogICAgPC9kZWZzPgo8L3N2Zz4K)
 * @see https://web3icons.io/tokens/MKR
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenMKR = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenMKR', __iconNode);
;
}),
];

//# sourceMappingURL=1qqr_%40web3icons_react_dist_0tpbf2-._.js.map