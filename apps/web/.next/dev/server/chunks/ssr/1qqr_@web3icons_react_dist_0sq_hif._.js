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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenCAST.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenCAST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-ssr] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: 'url(#CAST__a)',
                d: 'M13.969 12a3.376 3.376 0 1 0 6.75 0 3.376 3.376 0 0 0-6.75 0'
            }
        ],
        [
            'path',
            {
                fill: 'url(#CAST__b)',
                d: 'M19.481 6.443A9.3 9.3 0 0 0 12.35 3a9.04 9.04 0 0 0-9.068 9c0 4.973 4.067 9 9.068 9 2.807 0 5.332-1.322 7.132-3.442l-2.087-2.07a6.18 6.18 0 0 1-10.099.195A6.18 6.18 0 0 1 6.094 12a6.188 6.188 0 0 1 11.3-3.487z'
            }
        ],
        [
            'defs',
            {},
            [
                [
                    'linearGradient',
                    {
                        id: 'CAST__a',
                        x1: '3.281',
                        x2: '20.719',
                        y1: '12',
                        y2: '12',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                offset: '.01',
                                stopColor: '#CBBBA0'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#7A6037'
                            }
                        ]
                    ]
                ],
                [
                    'linearGradient',
                    {
                        id: 'CAST__b',
                        x1: '3.281',
                        x2: '19.481',
                        y1: '12',
                        y2: '12',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                offset: '.01',
                                stopColor: '#CBBBA0'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#7A6037'
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
                d: 'M13.969 12a3.375 3.375 0 1 0 6.75 0 3.375 3.375 0 0 0-6.75 0'
            }
        ],
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M19.481 6.443A9.3 9.3 0 0 0 12.35 3a9.04 9.04 0 0 0-9.068 9c0 4.973 4.067 9 9.068 9 2.807 0 5.332-1.322 7.132-3.442l-2.087-2.07a6.18 6.18 0 0 1-10.099.195A6.2 6.2 0 0 1 6.094 12a6.188 6.188 0 0 1 11.3-3.487z'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#CAST__a)'
            },
            [
                [
                    'path',
                    {
                        fill: 'url(#CAST__b)',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M13.75 12a3 3 0 1 0 6.001 0 3 3 0 0 0-6.001 0'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M18.65 7.06A8.27 8.27 0 0 0 12.31 4a8.035 8.035 0 0 0-8.06 8c0 4.42 3.615 8 8.06 8 2.495 0 4.74-1.175 6.34-3.06l-1.855-1.84A5.495 5.495 0 0 1 6.75 12a5.5 5.5 0 0 1 10.045-3.1z'
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
                        id: 'CAST__b',
                        x1: '4.25',
                        x2: '19.75',
                        y1: '12',
                        y2: '12',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                offset: '.01',
                                stopColor: '#CBBBA0'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#7A6037'
                            }
                        ]
                    ]
                ],
                [
                    'clipPath',
                    {
                        id: 'CAST__a'
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
 * @component @name TokenCAST
 * @description Web3Icon for TokenCAST
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9InVybCgjQ0FTVF9fYSkiIGQ9Ik0xMy45NjkgMTJhMy4zNzYgMy4zNzYgMCAxIDAgNi43NSAwIDMuMzc2IDMuMzc2IDAgMCAwLTYuNzUgMCIvPgogICAgPHBhdGggZmlsbD0idXJsKCNDQVNUX19iKSIgZD0iTTE5LjQ4MSA2LjQ0M0E5LjMgOS4zIDAgMCAwIDEyLjM1IDNhOS4wNCA5LjA0IDAgMCAwLTkuMDY4IDljMCA0Ljk3MyA0LjA2NyA5IDkuMDY4IDkgMi44MDcgMCA1LjMzMi0xLjMyMiA3LjEzMi0zLjQ0MmwtMi4wODctMi4wN2E2LjE4IDYuMTggMCAwIDEtMTAuMDk5LjE5NUE2LjE4IDYuMTggMCAwIDEgNi4wOTQgMTJhNi4xODggNi4xODggMCAwIDEgMTEuMy0zLjQ4N3oiLz4KICAgIDxkZWZzPgogICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iQ0FTVF9fYSIgeDE9IjMuMjgxIiB4Mj0iMjAuNzE5IiB5MT0iMTIiIHkyPSIxMiIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgICAgICAgICA8c3RvcCBvZmZzZXQ9Ii4wMSIgc3RvcC1jb2xvcj0iI0NCQkJBMCIvPgogICAgICAgICAgICA8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiM3QTYwMzciLz4KICAgICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iQ0FTVF9fYiIgeDE9IjMuMjgxIiB4Mj0iMTkuNDgxIiB5MT0iMTIiIHkyPSIxMiIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgICAgICAgICA8c3RvcCBvZmZzZXQ9Ii4wMSIgc3RvcC1jb2xvcj0iI0NCQkJBMCIvPgogICAgICAgICAgICA8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiM3QTYwMzciLz4KICAgICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgPC9kZWZzPgo8L3N2Zz4K) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xMy45NjkgMTJhMy4zNzUgMy4zNzUgMCAxIDAgNi43NSAwIDMuMzc1IDMuMzc1IDAgMCAwLTYuNzUgMCIvPgogICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTE5LjQ4MSA2LjQ0M0E5LjMgOS4zIDAgMCAwIDEyLjM1IDNhOS4wNCA5LjA0IDAgMCAwLTkuMDY4IDljMCA0Ljk3MyA0LjA2NyA5IDkuMDY4IDkgMi44MDcgMCA1LjMzMi0xLjMyMiA3LjEzMi0zLjQ0MmwtMi4wODctMi4wN2E2LjE4IDYuMTggMCAwIDEtMTAuMDk5LjE5NUE2LjIgNi4yIDAgMCAxIDYuMDk0IDEyYTYuMTg4IDYuMTg4IDAgMCAxIDExLjMtMy40ODd6Ii8+Cjwvc3ZnPgo=) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNDQVNUX19hKSI+CiAgICAgICAgPHBhdGggZmlsbD0idXJsKCNDQVNUX19iKSIgZD0iTTI0IDBIMHYyNGgyNHoiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTMuNzUgMTJhMyAzIDAgMSAwIDYuMDAxIDAgMyAzIDAgMCAwLTYuMDAxIDAiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTguNjUgNy4wNkE4LjI3IDguMjcgMCAwIDAgMTIuMzEgNGE4LjAzNSA4LjAzNSAwIDAgMC04LjA2IDhjMCA0LjQyIDMuNjE1IDggOC4wNiA4IDIuNDk1IDAgNC43NC0xLjE3NSA2LjM0LTMuMDZsLTEuODU1LTEuODRBNS40OTUgNS40OTUgMCAwIDEgNi43NSAxMmE1LjUgNS41IDAgMCAxIDEwLjA0NS0zLjF6Ii8+CiAgICA8L2c+CiAgICA8ZGVmcz4KICAgICAgICA8bGluZWFyR3JhZGllbnQgaWQ9IkNBU1RfX2IiIHgxPSI0LjI1IiB4Mj0iMTkuNzUiIHkxPSIxMiIgeTI9IjEyIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iLjAxIiBzdG9wLWNvbG9yPSIjQ0JCQkEwIi8+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzdBNjAzNyIvPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICAgICAgPGNsaXBQYXRoIGlkPSJDQVNUX19hIj4KICAgICAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTAgMGgyNHYyNEgweiIvPgogICAgICAgIDwvY2xpcFBhdGg+CiAgICA8L2RlZnM+Cjwvc3ZnPgo=)
 * @see https://web3icons.io/tokens/CAST
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenCAST = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenCAST', __iconNode);
;
}),
];

//# sourceMappingURL=1qqr_%40web3icons_react_dist_0sq_hif._.js.map