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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenUNO.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenUNO
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-ssr] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: 'url(#UNO__a)',
                d: 'M5.182 6H3v7.636a4.363 4.363 0 0 0 4.363 4.363h.546a4.363 4.363 0 0 0 4.363-4.363V6h-2.181v7.363a2.454 2.454 0 0 1-4.91 0zm8.181 3.273h2.182v8.18h-2.182z'
            }
        ],
        [
            'path',
            {
                fill: 'url(#UNO__b)',
                d: 'M18 8.998a3 3 0 0 0-3 3v5.454h.546v-4.909a1.636 1.636 0 1 1 3.272 0v4.91H21v-5.455a3 3 0 0 0-3-3'
            }
        ],
        [
            'defs',
            {},
            [
                [
                    'linearGradient',
                    {
                        id: 'UNO__a',
                        x1: '9.272',
                        x2: '9.272',
                        y1: '6',
                        y2: '17.999',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#5079DD'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#3E3BAC'
                            }
                        ]
                    ]
                ],
                [
                    'linearGradient',
                    {
                        id: 'UNO__b',
                        x1: '18',
                        x2: '18',
                        y1: '8.998',
                        y2: '17.452',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#5079DD'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#3E3BAC'
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
                d: 'M5.182 6H3v7.636a4.364 4.364 0 0 0 4.363 4.363h.546a4.363 4.363 0 0 0 4.363-4.363V6h-2.181v7.363a2.455 2.455 0 0 1-4.91 0zm8.181 3.273h2.182v8.181h-2.182z'
            }
        ],
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M18 9a3 3 0 0 0-3 3v5.454h.546v-4.909a1.637 1.637 0 1 1 3.273 0v4.91H21V12a3 3 0 0 0-3-3'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#UNO__a)'
            },
            [
                [
                    'path',
                    {
                        fill: 'url(#UNO__b)',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M5.94 6.667H4v6.787a3.88 3.88 0 0 0 3.879 3.879h.484a3.88 3.88 0 0 0 3.879-3.879V6.667h-1.94v6.545a2.182 2.182 0 0 1-4.363 0zm7.271 2.909h1.94v7.272h-1.94z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M17.333 9.332a2.666 2.666 0 0 0-2.666 2.666v4.849h.485v-4.364a1.455 1.455 0 0 1 2.909 0v4.364H20v-4.849a2.666 2.666 0 0 0-2.667-2.666'
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
                        id: 'UNO__b',
                        x1: '9.575',
                        x2: '9.575',
                        y1: '6.667',
                        y2: '17.333',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#5079DD'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#3E3BAC'
                            }
                        ]
                    ]
                ],
                [
                    'clipPath',
                    {
                        id: 'UNO__a'
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
 * @component @name TokenUNO
 * @description Web3Icon for TokenUNO
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9InVybCgjVU5PX19hKSIgZD0iTTUuMTgyIDZIM3Y3LjYzNmE0LjM2MyA0LjM2MyAwIDAgMCA0LjM2MyA0LjM2M2guNTQ2YTQuMzYzIDQuMzYzIDAgMCAwIDQuMzYzLTQuMzYzVjZoLTIuMTgxdjcuMzYzYTIuNDU0IDIuNDU0IDAgMCAxLTQuOTEgMHptOC4xODEgMy4yNzNoMi4xODJ2OC4xOGgtMi4xODJ6Ii8+CiAgICA8cGF0aCBmaWxsPSJ1cmwoI1VOT19fYikiIGQ9Ik0xOCA4Ljk5OGEzIDMgMCAwIDAtMyAzdjUuNDU0aC41NDZ2LTQuOTA5YTEuNjM2IDEuNjM2IDAgMSAxIDMuMjcyIDB2NC45MUgyMXYtNS40NTVhMyAzIDAgMCAwLTMtMyIvPgogICAgPGRlZnM+CiAgICAgICAgPGxpbmVhckdyYWRpZW50IGlkPSJVTk9fX2EiIHgxPSI5LjI3MiIgeDI9IjkuMjcyIiB5MT0iNiIgeTI9IjE3Ljk5OSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjNTA3OUREIi8+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzNFM0JBQyIvPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICAgICAgPGxpbmVhckdyYWRpZW50IGlkPSJVTk9fX2IiIHgxPSIxOCIgeDI9IjE4IiB5MT0iOC45OTgiIHkyPSIxNy40NTIiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iIzUwNzlERCIvPgogICAgICAgICAgICA8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMzRTNCQUMiLz4KICAgICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgPC9kZWZzPgo8L3N2Zz4K) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik01LjE4MiA2SDN2Ny42MzZhNC4zNjQgNC4zNjQgMCAwIDAgNC4zNjMgNC4zNjNoLjU0NmE0LjM2MyA0LjM2MyAwIDAgMCA0LjM2My00LjM2M1Y2aC0yLjE4MXY3LjM2M2EyLjQ1NSAyLjQ1NSAwIDAgMS00LjkxIDB6bTguMTgxIDMuMjczaDIuMTgydjguMTgxaC0yLjE4MnoiLz4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xOCA5YTMgMyAwIDAgMC0zIDN2NS40NTRoLjU0NnYtNC45MDlhMS42MzcgMS42MzcgMCAxIDEgMy4yNzMgMHY0LjkxSDIxVjEyYTMgMyAwIDAgMC0zLTMiLz4KPC9zdmc+Cg==) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNVTk9fX2EpIj4KICAgICAgICA8cGF0aCBmaWxsPSJ1cmwoI1VOT19fYikiIGQ9Ik0yNCAwSDB2MjRoMjR6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTUuOTQgNi42NjdINHY2Ljc4N2EzLjg4IDMuODggMCAwIDAgMy44NzkgMy44NzloLjQ4NGEzLjg4IDMuODggMCAwIDAgMy44NzktMy44NzlWNi42NjdoLTEuOTR2Ni41NDVhMi4xODIgMi4xODIgMCAwIDEtNC4zNjMgMHptNy4yNzEgMi45MDloMS45NHY3LjI3MmgtMS45NHoiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTcuMzMzIDkuMzMyYTIuNjY2IDIuNjY2IDAgMCAwLTIuNjY2IDIuNjY2djQuODQ5aC40ODV2LTQuMzY0YTEuNDU1IDEuNDU1IDAgMCAxIDIuOTA5IDB2NC4zNjRIMjB2LTQuODQ5YTIuNjY2IDIuNjY2IDAgMCAwLTIuNjY3LTIuNjY2Ii8+CiAgICA8L2c+CiAgICA8ZGVmcz4KICAgICAgICA8bGluZWFyR3JhZGllbnQgaWQ9IlVOT19fYiIgeDE9IjkuNTc1IiB4Mj0iOS41NzUiIHkxPSI2LjY2NyIgeTI9IjE3LjMzMyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjNTA3OUREIi8+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzNFM0JBQyIvPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICAgICAgPGNsaXBQYXRoIGlkPSJVTk9fX2EiPgogICAgICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMCAwaDI0djI0SDB6Ii8+CiAgICAgICAgPC9jbGlwUGF0aD4KICAgIDwvZGVmcz4KPC9zdmc+Cg==)
 * @see https://web3icons.io/tokens/UNO
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenUNO = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenUNO', __iconNode);
;
}),
];

//# sourceMappingURL=1qqr_%40web3icons_react_dist_1x61vzb._.js.map