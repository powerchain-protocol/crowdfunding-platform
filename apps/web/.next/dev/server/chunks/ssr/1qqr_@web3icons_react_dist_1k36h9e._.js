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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenCPOOL.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenCPOOL
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-ssr] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: 'url(#CPOOL__a)',
                d: 'M13.43 3a9 9 0 0 0 0 18z'
            }
        ],
        [
            'path',
            {
                fill: '#fff',
                d: 'M13.687 7.885a4.114 4.114 0 1 0 3.62 6.069l2.263 1.234a6.686 6.686 0 1 1 0-6.377l-2.263 1.234a4.11 4.11 0 0 0-3.62-2.16'
            }
        ],
        [
            'path',
            {
                fill: 'url(#CPOOL__b)',
                d: 'M13.43 3a9 9 0 0 0 0 18z',
                opacity: '.5'
            }
        ],
        [
            'defs',
            {},
            [
                [
                    'linearGradient',
                    {
                        id: 'CPOOL__a',
                        x1: '13.43',
                        x2: '11.63',
                        y1: '3.509',
                        y2: '20.234',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#23B77F'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '.44',
                                stopColor: '#2857B3'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '.65',
                                stopColor: '#396CC6'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '.82',
                                stopColor: '#5AA3EA'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#92F5EA'
                            }
                        ]
                    ]
                ],
                [
                    'linearGradient',
                    {
                        id: 'CPOOL__b',
                        x1: '13.43',
                        x2: '11.63',
                        y1: '3.509',
                        y2: '20.234',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#23B77F'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '.44',
                                stopColor: '#2857B3'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '.65',
                                stopColor: '#396CC6'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '.82',
                                stopColor: '#5AA3EA'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#92F5EA'
                            }
                        ]
                    ]
                ]
            ]
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#CPOOL__a)'
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
                        fill: 'url(#CPOOL__b)',
                        d: 'M13.271 4a8 8 0 0 0 0 16z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M13.5 8.342a3.657 3.657 0 1 0 3.217 5.395l2.012 1.097a5.943 5.943 0 1 1 0-5.669l-2.012 1.097a3.66 3.66 0 0 0-3.218-1.92'
                    }
                ],
                [
                    'path',
                    {
                        fill: 'url(#CPOOL__c)',
                        d: 'M13.271 4a8 8 0 0 0 0 16z',
                        opacity: '.5'
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
                        id: 'CPOOL__b',
                        x1: '13.271',
                        x2: '11.671',
                        y1: '4.453',
                        y2: '19.319',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#23B77F'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '.44',
                                stopColor: '#2857B3'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '.65',
                                stopColor: '#396CC6'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '.82',
                                stopColor: '#5AA3EA'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#92F5EA'
                            }
                        ]
                    ]
                ],
                [
                    'linearGradient',
                    {
                        id: 'CPOOL__c',
                        x1: '13.271',
                        x2: '11.671',
                        y1: '4.453',
                        y2: '19.319',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#23B77F'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '.44',
                                stopColor: '#2857B3'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '.65',
                                stopColor: '#396CC6'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '.82',
                                stopColor: '#5AA3EA'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#92F5EA'
                            }
                        ]
                    ]
                ],
                [
                    'clipPath',
                    {
                        id: 'CPOOL__a'
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
 * @component @name TokenCPOOL
 * @description Web3Icon for TokenCPOOL
 *
 * @preview (branded, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9InVybCgjQ1BPT0xfX2EpIiBkPSJNMTMuNDMgM2E5IDkgMCAwIDAgMCAxOHoiLz4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xMy42ODcgNy44ODVhNC4xMTQgNC4xMTQgMCAxIDAgMy42MiA2LjA2OWwyLjI2MyAxLjIzNGE2LjY4NiA2LjY4NiAwIDEgMSAwLTYuMzc3bC0yLjI2MyAxLjIzNGE0LjExIDQuMTEgMCAwIDAtMy42Mi0yLjE2Ii8+CiAgICA8cGF0aCBmaWxsPSJ1cmwoI0NQT09MX19iKSIgZD0iTTEzLjQzIDNhOSA5IDAgMCAwIDAgMTh6IiBvcGFjaXR5PSIuNSIvPgogICAgPGRlZnM+CiAgICAgICAgPGxpbmVhckdyYWRpZW50IGlkPSJDUE9PTF9fYSIgeDE9IjEzLjQzIiB4Mj0iMTEuNjMiIHkxPSIzLjUwOSIgeTI9IjIwLjIzNCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjMjNCNzdGIi8+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iLjQ0IiBzdG9wLWNvbG9yPSIjMjg1N0IzIi8+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iLjY1IiBzdG9wLWNvbG9yPSIjMzk2Q0M2Ii8+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iLjgyIiBzdG9wLWNvbG9yPSIjNUFBM0VBIi8+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzkyRjVFQSIvPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICAgICAgPGxpbmVhckdyYWRpZW50IGlkPSJDUE9PTF9fYiIgeDE9IjEzLjQzIiB4Mj0iMTEuNjMiIHkxPSIzLjUwOSIgeTI9IjIwLjIzNCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjMjNCNzdGIi8+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iLjQ0IiBzdG9wLWNvbG9yPSIjMjg1N0IzIi8+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iLjY1IiBzdG9wLWNvbG9yPSIjMzk2Q0M2Ii8+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iLjgyIiBzdG9wLWNvbG9yPSIjNUFBM0VBIi8+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzkyRjVFQSIvPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICA8L2RlZnM+Cjwvc3ZnPgo=) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNDUE9PTF9fYSkiPgogICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0yNCAwSDB2MjRoMjR6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0idXJsKCNDUE9PTF9fYikiIGQ9Ik0xMy4yNzEgNGE4IDggMCAwIDAgMCAxNnoiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTMuNSA4LjM0MmEzLjY1NyAzLjY1NyAwIDEgMCAzLjIxNyA1LjM5NWwyLjAxMiAxLjA5N2E1Ljk0MyA1Ljk0MyAwIDEgMSAwLTUuNjY5bC0yLjAxMiAxLjA5N2EzLjY2IDMuNjYgMCAwIDAtMy4yMTgtMS45MiIvPgogICAgICAgIDxwYXRoIGZpbGw9InVybCgjQ1BPT0xfX2MpIiBkPSJNMTMuMjcxIDRhOCA4IDAgMCAwIDAgMTZ6IiBvcGFjaXR5PSIuNSIvPgogICAgPC9nPgogICAgPGRlZnM+CiAgICAgICAgPGxpbmVhckdyYWRpZW50IGlkPSJDUE9PTF9fYiIgeDE9IjEzLjI3MSIgeDI9IjExLjY3MSIgeTE9IjQuNDUzIiB5Mj0iMTkuMzE5IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiMyM0I3N0YiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIuNDQiIHN0b3AtY29sb3I9IiMyODU3QjMiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIuNjUiIHN0b3AtY29sb3I9IiMzOTZDQzYiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIuODIiIHN0b3AtY29sb3I9IiM1QUEzRUEiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjOTJGNUVBIi8+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgICAgICA8bGluZWFyR3JhZGllbnQgaWQ9IkNQT09MX19jIiB4MT0iMTMuMjcxIiB4Mj0iMTEuNjcxIiB5MT0iNC40NTMiIHkyPSIxOS4zMTkiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iIzIzQjc3RiIvPgogICAgICAgICAgICA8c3RvcCBvZmZzZXQ9Ii40NCIgc3RvcC1jb2xvcj0iIzI4NTdCMyIvPgogICAgICAgICAgICA8c3RvcCBvZmZzZXQ9Ii42NSIgc3RvcC1jb2xvcj0iIzM5NkNDNiIvPgogICAgICAgICAgICA8c3RvcCBvZmZzZXQ9Ii44MiIgc3RvcC1jb2xvcj0iIzVBQTNFQSIvPgogICAgICAgICAgICA8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiM5MkY1RUEiLz4KICAgICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgICAgIDxjbGlwUGF0aCBpZD0iQ1BPT0xfX2EiPgogICAgICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMCAwaDI0djI0SDB6Ii8+CiAgICAgICAgPC9jbGlwUGF0aD4KICAgIDwvZGVmcz4KPC9zdmc+Cg==)
 * @see https://web3icons.io/tokens/CPOOL
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenCPOOL = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenCPOOL', __iconNode);
;
}),
];

//# sourceMappingURL=1qqr_%40web3icons_react_dist_1k36h9e._.js.map