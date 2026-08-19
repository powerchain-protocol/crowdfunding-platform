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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenKZEN.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenKZEN
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-ssr] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: 'url(#KZEN__a)',
                d: 'M12 20.47a8.47 8.47 0 1 0 0-16.94 8.47 8.47 0 0 0 0 16.94'
            }
        ],
        [
            'path',
            {
                fill: 'url(#KZEN__b)',
                d: 'M20.47 12a8.47 8.47 0 1 0-16.94 0 8.47 8.47 0 0 0 16.94 0'
            }
        ],
        [
            'path',
            {
                fill: '#181B1E',
                d: 'M10.411 6.706H12v10.059h-1.588zm6.771-2.647-.937-.985L16.187 3a14.54 14.54 0 0 0-3.129 8.958c0 3.43 1.191 6.58 3.177 9.042l1.058-1.048a13.04 13.04 0 0 1-2.694-7.994c0-2.954.958-5.729 2.583-7.9'
            }
        ],
        [
            'defs',
            {},
            [
                [
                    'linearGradient',
                    {
                        id: 'KZEN__a',
                        x1: '16.939',
                        x2: '6.927',
                        y1: '4.125',
                        y2: '19.714',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                offset: '.16',
                                stopColor: '#FFA3A3'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '.59',
                                stopColor: '#C50000'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#C50101'
                            }
                        ]
                    ]
                ],
                [
                    'linearGradient',
                    {
                        id: 'KZEN__b',
                        x1: '14.647',
                        x2: '12.33',
                        y1: '3.562',
                        y2: '7.379',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                offset: '.07',
                                stopColor: '#FF5353'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#C50101',
                                stopOpacity: '0'
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
                clipPath: 'url(#KZEN__a)'
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
                        fill: 'url(#KZEN__b)',
                        d: 'M12 19.53a7.53 7.53 0 1 0 0-15.06 7.53 7.53 0 0 0 0 15.06'
                    }
                ],
                [
                    'path',
                    {
                        fill: 'url(#KZEN__c)',
                        d: 'M19.53 12a7.53 7.53 0 1 0-15.06 0 7.53 7.53 0 0 0 15.06 0'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#181B1E',
                        d: 'M10.588 7.294H12v8.941h-1.412zm6.019-2.353-.833-.875L15.722 4a12.93 12.93 0 0 0-2.781 7.962c0 3.05 1.059 5.85 2.823 8.038l.942-.932a11.6 11.6 0 0 1-2.396-7.106c0-2.626.852-5.091 2.297-7.02'
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
                        id: 'KZEN__b',
                        x1: '16.391',
                        x2: '7.491',
                        y1: '5',
                        y2: '18.857',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                offset: '.16',
                                stopColor: '#FFA3A3'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '.59',
                                stopColor: '#C50000'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#C50101'
                            }
                        ]
                    ]
                ],
                [
                    'linearGradient',
                    {
                        id: 'KZEN__c',
                        x1: '14.353',
                        x2: '12.293',
                        y1: '4.5',
                        y2: '7.892',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                offset: '.07',
                                stopColor: '#FF5353'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#C50101',
                                stopOpacity: '0'
                            }
                        ]
                    ]
                ],
                [
                    'clipPath',
                    {
                        id: 'KZEN__a'
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
 * @component @name TokenKZEN
 * @description Web3Icon for TokenKZEN
 *
 * @preview (branded, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9InVybCgjS1pFTl9fYSkiIGQ9Ik0xMiAyMC40N2E4LjQ3IDguNDcgMCAxIDAgMC0xNi45NCA4LjQ3IDguNDcgMCAwIDAgMCAxNi45NCIvPgogICAgPHBhdGggZmlsbD0idXJsKCNLWkVOX19iKSIgZD0iTTIwLjQ3IDEyYTguNDcgOC40NyAwIDEgMC0xNi45NCAwIDguNDcgOC40NyAwIDAgMCAxNi45NCAwIi8+CiAgICA8cGF0aCBmaWxsPSIjMTgxQjFFIiBkPSJNMTAuNDExIDYuNzA2SDEydjEwLjA1OWgtMS41ODh6bTYuNzcxLTIuNjQ3LS45MzctLjk4NUwxNi4xODcgM2ExNC41NCAxNC41NCAwIDAgMC0zLjEyOSA4Ljk1OGMwIDMuNDMgMS4xOTEgNi41OCAzLjE3NyA5LjA0MmwxLjA1OC0xLjA0OGExMy4wNCAxMy4wNCAwIDAgMS0yLjY5NC03Ljk5NGMwLTIuOTU0Ljk1OC01LjcyOSAyLjU4My03LjkiLz4KICAgIDxkZWZzPgogICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iS1pFTl9fYSIgeDE9IjE2LjkzOSIgeDI9IjYuOTI3IiB5MT0iNC4xMjUiIHkyPSIxOS43MTQiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIuMTYiIHN0b3AtY29sb3I9IiNGRkEzQTMiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIuNTkiIHN0b3AtY29sb3I9IiNDNTAwMDAiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjQzUwMTAxIi8+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgICAgICA8bGluZWFyR3JhZGllbnQgaWQ9IktaRU5fX2IiIHgxPSIxNC42NDciIHgyPSIxMi4zMyIgeTE9IjMuNTYyIiB5Mj0iNy4zNzkiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIuMDciIHN0b3AtY29sb3I9IiNGRjUzNTMiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjQzUwMTAxIiBzdG9wLW9wYWNpdHk9IjAiLz4KICAgICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgPC9kZWZzPgo8L3N2Zz4K) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNLWkVOX19hKSI+CiAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTI0IDBIMHYyNGgyNHoiLz4KICAgICAgICA8cGF0aCBmaWxsPSJ1cmwoI0taRU5fX2IpIiBkPSJNMTIgMTkuNTNhNy41MyA3LjUzIDAgMSAwIDAtMTUuMDYgNy41MyA3LjUzIDAgMCAwIDAgMTUuMDYiLz4KICAgICAgICA8cGF0aCBmaWxsPSJ1cmwoI0taRU5fX2MpIiBkPSJNMTkuNTMgMTJhNy41MyA3LjUzIDAgMSAwLTE1LjA2IDAgNy41MyA3LjUzIDAgMCAwIDE1LjA2IDAiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjMTgxQjFFIiBkPSJNMTAuNTg4IDcuMjk0SDEydjguOTQxaC0xLjQxMnptNi4wMTktMi4zNTMtLjgzMy0uODc1TDE1LjcyMiA0YTEyLjkzIDEyLjkzIDAgMCAwLTIuNzgxIDcuOTYyYzAgMy4wNSAxLjA1OSA1Ljg1IDIuODIzIDguMDM4bC45NDItLjkzMmExMS42IDExLjYgMCAwIDEtMi4zOTYtNy4xMDZjMC0yLjYyNi44NTItNS4wOTEgMi4yOTctNy4wMiIvPgogICAgPC9nPgogICAgPGRlZnM+CiAgICAgICAgPGxpbmVhckdyYWRpZW50IGlkPSJLWkVOX19iIiB4MT0iMTYuMzkxIiB4Mj0iNy40OTEiIHkxPSI1IiB5Mj0iMTguODU3IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iLjE2IiBzdG9wLWNvbG9yPSIjRkZBM0EzIi8+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iLjU5IiBzdG9wLWNvbG9yPSIjQzUwMDAwIi8+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI0M1MDEwMSIvPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICAgICAgPGxpbmVhckdyYWRpZW50IGlkPSJLWkVOX19jIiB4MT0iMTQuMzUzIiB4Mj0iMTIuMjkzIiB5MT0iNC41IiB5Mj0iNy44OTIiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIuMDciIHN0b3AtY29sb3I9IiNGRjUzNTMiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjQzUwMTAxIiBzdG9wLW9wYWNpdHk9IjAiLz4KICAgICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgICAgIDxjbGlwUGF0aCBpZD0iS1pFTl9fYSI+CiAgICAgICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0wIDBoMjR2MjRIMHoiLz4KICAgICAgICA8L2NsaXBQYXRoPgogICAgPC9kZWZzPgo8L3N2Zz4K)
 * @see https://web3icons.io/tokens/KZEN
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenKZEN = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenKZEN', __iconNode);
;
}),
];

//# sourceMappingURL=1qqr_%40web3icons_react_dist_1kbk310._.js.map