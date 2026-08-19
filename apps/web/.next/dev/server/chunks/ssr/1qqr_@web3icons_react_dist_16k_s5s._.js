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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenQSR.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenQSR
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-ssr] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: 'url(#QSR__a)',
                d: 'm16.477 21-5.04-9.281L3 7.635v-.698A3.937 3.937 0 0 1 6.937 3h.585l5.04 9.281L21 16.236v.826A3.937 3.937 0 0 1 17.063 21z'
            }
        ],
        [
            'defs',
            {},
            [
                [
                    'linearGradient',
                    {
                        id: 'QSR__a',
                        x1: '4.687',
                        x2: '19.312',
                        y1: '5.25',
                        y2: '19.875',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#A745F5'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '.18',
                                stopColor: '#54BCF0'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '.38',
                                stopColor: '#99E5C5'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '.5',
                                stopColor: '#FFFCD8'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '.65',
                                stopColor: '#91E1C8'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '.82',
                                stopColor: '#51BCF4'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#A745F4'
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
                d: 'm16.477 21-5.04-9.281L3 7.635v-.698A3.937 3.937 0 0 1 6.937 3h.585l5.04 9.281L21 16.236v.826A3.937 3.937 0 0 1 17.063 21z'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#QSR__a)'
            },
            [
                [
                    'path',
                    {
                        fill: 'url(#QSR__b)',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'm15.98 20-4.48-8.25L4 8.12V7.5A3.5 3.5 0 0 1 7.5 4h.52l4.48 8.25 7.5 3.515v.735a3.5 3.5 0 0 1-3.5 3.5z'
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
                        id: 'QSR__b',
                        x1: '5.5',
                        x2: '18.5',
                        y1: '6',
                        y2: '19',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#A745F5'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '.18',
                                stopColor: '#54BCF0'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '.38',
                                stopColor: '#99E5C5'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '.5',
                                stopColor: '#FFFCD8'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '.65',
                                stopColor: '#91E1C8'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '.82',
                                stopColor: '#51BCF4'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#A745F4'
                            }
                        ]
                    ]
                ],
                [
                    'clipPath',
                    {
                        id: 'QSR__a'
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
 * @component @name TokenQSR
 * @description Web3Icon for TokenQSR
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9InVybCgjUVNSX19hKSIgZD0ibTE2LjQ3NyAyMS01LjA0LTkuMjgxTDMgNy42MzV2LS42OThBMy45MzcgMy45MzcgMCAwIDEgNi45MzcgM2guNTg1bDUuMDQgOS4yODFMMjEgMTYuMjM2di44MjZBMy45MzcgMy45MzcgMCAwIDEgMTcuMDYzIDIxeiIvPgogICAgPGRlZnM+CiAgICAgICAgPGxpbmVhckdyYWRpZW50IGlkPSJRU1JfX2EiIHgxPSI0LjY4NyIgeDI9IjE5LjMxMiIgeTE9IjUuMjUiIHkyPSIxOS44NzUiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iI0E3NDVGNSIvPgogICAgICAgICAgICA8c3RvcCBvZmZzZXQ9Ii4xOCIgc3RvcC1jb2xvcj0iIzU0QkNGMCIvPgogICAgICAgICAgICA8c3RvcCBvZmZzZXQ9Ii4zOCIgc3RvcC1jb2xvcj0iIzk5RTVDNSIvPgogICAgICAgICAgICA8c3RvcCBvZmZzZXQ9Ii41IiBzdG9wLWNvbG9yPSIjRkZGQ0Q4Ii8+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iLjY1IiBzdG9wLWNvbG9yPSIjOTFFMUM4Ii8+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iLjgyIiBzdG9wLWNvbG9yPSIjNTFCQ0Y0Ii8+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI0E3NDVGNCIvPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICA8L2RlZnM+Cjwvc3ZnPgo=) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Im0xNi40NzcgMjEtNS4wNC05LjI4MUwzIDcuNjM1di0uNjk4QTMuOTM3IDMuOTM3IDAgMCAxIDYuOTM3IDNoLjU4NWw1LjA0IDkuMjgxTDIxIDE2LjIzNnYuODI2QTMuOTM3IDMuOTM3IDAgMCAxIDE3LjA2MyAyMXoiLz4KPC9zdmc+Cg==) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNRU1JfX2EpIj4KICAgICAgICA8cGF0aCBmaWxsPSJ1cmwoI1FTUl9fYikiIGQ9Ik0yNCAwSDB2MjRoMjR6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0ibTE1Ljk4IDIwLTQuNDgtOC4yNUw0IDguMTJWNy41QTMuNSAzLjUgMCAwIDEgNy41IDRoLjUybDQuNDggOC4yNSA3LjUgMy41MTV2LjczNWEzLjUgMy41IDAgMCAxLTMuNSAzLjV6Ii8+CiAgICA8L2c+CiAgICA8ZGVmcz4KICAgICAgICA8bGluZWFyR3JhZGllbnQgaWQ9IlFTUl9fYiIgeDE9IjUuNSIgeDI9IjE4LjUiIHkxPSI2IiB5Mj0iMTkiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iI0E3NDVGNSIvPgogICAgICAgICAgICA8c3RvcCBvZmZzZXQ9Ii4xOCIgc3RvcC1jb2xvcj0iIzU0QkNGMCIvPgogICAgICAgICAgICA8c3RvcCBvZmZzZXQ9Ii4zOCIgc3RvcC1jb2xvcj0iIzk5RTVDNSIvPgogICAgICAgICAgICA8c3RvcCBvZmZzZXQ9Ii41IiBzdG9wLWNvbG9yPSIjRkZGQ0Q4Ii8+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iLjY1IiBzdG9wLWNvbG9yPSIjOTFFMUM4Ii8+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iLjgyIiBzdG9wLWNvbG9yPSIjNTFCQ0Y0Ii8+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI0E3NDVGNCIvPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICAgICAgPGNsaXBQYXRoIGlkPSJRU1JfX2EiPgogICAgICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMCAwaDI0djI0SDB6Ii8+CiAgICAgICAgPC9jbGlwUGF0aD4KICAgIDwvZGVmcz4KPC9zdmc+Cg==)
 * @see https://web3icons.io/tokens/QSR
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenQSR = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenQSR', __iconNode);
;
}),
];

//# sourceMappingURL=1qqr_%40web3icons_react_dist_16k_s5s._.js.map