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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenUCJL.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenUCJL
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-ssr] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: 'url(#UCJL__a)',
                d: 'M12 19.875a7.875 7.875 0 1 0 0-15.75 7.875 7.875 0 0 0 0 15.75M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18'
            }
        ],
        [
            'path',
            {
                fill: 'url(#UCJL__b)',
                d: 'M12 19.875a7.875 7.875 0 1 0 0-15.75 7.875 7.875 0 0 0 0 15.75'
            }
        ],
        [
            'path',
            {
                fill: '#D7E6F9',
                d: 'M12.563 9.469V6.094l-3.938 2.25V9.75c.282.281.788.563 1.688.563s1.873-.563 2.25-.844'
            }
        ],
        [
            'path',
            {
                fill: '#D5DBFB',
                d: 'm15.376 7.5-2.813 1.969V16.5l2.813-1.687z'
            }
        ],
        [
            'path',
            {
                fill: '#fff',
                d: 'M10.313 10.313c-.562 0-1.592-.377-1.688-.563v6.75c.096.281.563.844 1.688.844s1.969-.563 2.25-.844V9.47c-.563.281-1.536.844-2.25.844'
            }
        ],
        [
            'defs',
            {},
            [
                [
                    'linearGradient',
                    {
                        id: 'UCJL__a',
                        x1: '20.437',
                        x2: '3.844',
                        y1: '12',
                        y2: '12.281',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#17C8FA'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#975DFE'
                            }
                        ]
                    ]
                ],
                [
                    'linearGradient',
                    {
                        id: 'UCJL__b',
                        x1: '15.938',
                        x2: '7.782',
                        y1: '5.812',
                        y2: '18.188',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#B0AEFF'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#278EDD'
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
                clipPath: 'url(#UCJL__a)'
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
                        fill: 'url(#UCJL__b)',
                        d: 'M12 19a7 7 0 1 0 0-14 7 7 0 0 0 0 14m0 1a8 8 0 1 0 0-16 8 8 0 0 0 0 16'
                    }
                ],
                [
                    'path',
                    {
                        fill: 'url(#UCJL__c)',
                        d: 'M12 19a7 7 0 1 0 0-14 7 7 0 0 0 0 14'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#D7E6F9',
                        d: 'M12.5 9.75v-3l-3.5 2V10c.25.25.7.5 1.5.5s1.665-.5 2-.75'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#D5DBFB',
                        d: 'm15 8-2.5 1.75V16l2.5-1.5z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M10.5 10.5c-.5 0-1.415-.335-1.5-.5v6c.085.25.5.75 1.5.75s1.75-.5 2-.75V9.75c-.5.25-1.365.75-2 .75'
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
                        id: 'UCJL__b',
                        x1: '19.5',
                        x2: '4.75',
                        y1: '12',
                        y2: '12.25',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#17C8FA'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#975DFE'
                            }
                        ]
                    ]
                ],
                [
                    'linearGradient',
                    {
                        id: 'UCJL__c',
                        x1: '15.5',
                        x2: '8.25',
                        y1: '6.5',
                        y2: '17.5',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#B0AEFF'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#278EDD'
                            }
                        ]
                    ]
                ],
                [
                    'clipPath',
                    {
                        id: 'UCJL__a'
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
 * @component @name TokenUCJL
 * @description Web3Icon for TokenUCJL
 *
 * @preview (branded, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9InVybCgjVUNKTF9fYSkiIGQ9Ik0xMiAxOS44NzVhNy44NzUgNy44NzUgMCAxIDAgMC0xNS43NSA3Ljg3NSA3Ljg3NSAwIDAgMCAwIDE1Ljc1TTEyIDIxYTkgOSAwIDEgMCAwLTE4IDkgOSAwIDAgMCAwIDE4Ii8+CiAgICA8cGF0aCBmaWxsPSJ1cmwoI1VDSkxfX2IpIiBkPSJNMTIgMTkuODc1YTcuODc1IDcuODc1IDAgMSAwIDAtMTUuNzUgNy44NzUgNy44NzUgMCAwIDAgMCAxNS43NSIvPgogICAgPHBhdGggZmlsbD0iI0Q3RTZGOSIgZD0iTTEyLjU2MyA5LjQ2OVY2LjA5NGwtMy45MzggMi4yNVY5Ljc1Yy4yODIuMjgxLjc4OC41NjMgMS42ODguNTYzczEuODczLS41NjMgMi4yNS0uODQ0Ii8+CiAgICA8cGF0aCBmaWxsPSIjRDVEQkZCIiBkPSJtMTUuMzc2IDcuNS0yLjgxMyAxLjk2OVYxNi41bDIuODEzLTEuNjg3eiIvPgogICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTEwLjMxMyAxMC4zMTNjLS41NjIgMC0xLjU5Mi0uMzc3LTEuNjg4LS41NjN2Ni43NWMuMDk2LjI4MS41NjMuODQ0IDEuNjg4Ljg0NHMxLjk2OS0uNTYzIDIuMjUtLjg0NFY5LjQ3Yy0uNTYzLjI4MS0xLjUzNi44NDQtMi4yNS44NDQiLz4KICAgIDxkZWZzPgogICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iVUNKTF9fYSIgeDE9IjIwLjQzNyIgeDI9IjMuODQ0IiB5MT0iMTIiIHkyPSIxMi4yODEiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iIzE3QzhGQSIvPgogICAgICAgICAgICA8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiM5NzVERkUiLz4KICAgICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iVUNKTF9fYiIgeDE9IjE1LjkzOCIgeDI9IjcuNzgyIiB5MT0iNS44MTIiIHkyPSIxOC4xODgiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iI0IwQUVGRiIvPgogICAgICAgICAgICA8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMyNzhFREQiLz4KICAgICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgPC9kZWZzPgo8L3N2Zz4K) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNVQ0pMX19hKSI+CiAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTI0IDBIMHYyNGgyNHoiLz4KICAgICAgICA8cGF0aCBmaWxsPSJ1cmwoI1VDSkxfX2IpIiBkPSJNMTIgMTlhNyA3IDAgMSAwIDAtMTQgNyA3IDAgMCAwIDAgMTRtMCAxYTggOCAwIDEgMCAwLTE2IDggOCAwIDAgMCAwIDE2Ii8+CiAgICAgICAgPHBhdGggZmlsbD0idXJsKCNVQ0pMX19jKSIgZD0iTTEyIDE5YTcgNyAwIDEgMCAwLTE0IDcgNyAwIDAgMCAwIDE0Ii8+CiAgICAgICAgPHBhdGggZmlsbD0iI0Q3RTZGOSIgZD0iTTEyLjUgOS43NXYtM2wtMy41IDJWMTBjLjI1LjI1LjcuNSAxLjUuNXMxLjY2NS0uNSAyLS43NSIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNENURCRkIiIGQ9Im0xNSA4LTIuNSAxLjc1VjE2bDIuNS0xLjV6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTEwLjUgMTAuNWMtLjUgMC0xLjQxNS0uMzM1LTEuNS0uNXY2Yy4wODUuMjUuNS43NSAxLjUuNzVzMS43NS0uNSAyLS43NVY5Ljc1Yy0uNS4yNS0xLjM2NS43NS0yIC43NSIvPgogICAgPC9nPgogICAgPGRlZnM+CiAgICAgICAgPGxpbmVhckdyYWRpZW50IGlkPSJVQ0pMX19iIiB4MT0iMTkuNSIgeDI9IjQuNzUiIHkxPSIxMiIgeTI9IjEyLjI1IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiMxN0M4RkEiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjOTc1REZFIi8+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgICAgICA8bGluZWFyR3JhZGllbnQgaWQ9IlVDSkxfX2MiIHgxPSIxNS41IiB4Mj0iOC4yNSIgeTE9IjYuNSIgeTI9IjE3LjUiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iI0IwQUVGRiIvPgogICAgICAgICAgICA8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMyNzhFREQiLz4KICAgICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgICAgIDxjbGlwUGF0aCBpZD0iVUNKTF9fYSI+CiAgICAgICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0wIDBoMjR2MjRIMHoiLz4KICAgICAgICA8L2NsaXBQYXRoPgogICAgPC9kZWZzPgo8L3N2Zz4K)
 * @see https://web3icons.io/tokens/UCJL
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenUCJL = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenUCJL', __iconNode);
;
}),
];

//# sourceMappingURL=1qqr_%40web3icons_react_dist_1olr9jg._.js.map