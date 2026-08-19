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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenROUTE.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenROUTE
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-ssr] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: 'url(#ROUTE__a)',
                d: 'M8.528 4.3a.29.29 0 0 1-.01-.393 2.624 2.624 0 0 1 3.852-.127l1.99 1.975a4.164 4.164 0 0 1 .047 5.789l-2.539 2.638 2.643 2.733a2.91 2.91 0 0 1 .01 4.003.26.26 0 0 1-.293.06.3.3 0 0 1-.086-.06l-3.785-3.827a4.164 4.164 0 0 1 .01-5.808l2.52-2.534-4.359-4.453z'
            }
        ],
        [
            'path',
            {
                fill: 'url(#ROUTE__b)',
                d: 'm11.196 10.444 1.686-1.696a3.08 3.08 0 0 1 .422 3.941l-1.436 1.488c-.54-.545-1.535-1.848-.7-3.667z'
            }
        ],
        [
            'defs',
            {},
            [
                [
                    'linearGradient',
                    {
                        id: 'ROUTE__a',
                        x1: '15.961',
                        x2: '10.527',
                        y1: '10.284',
                        y2: '10.284',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#FE8664'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#FF3B56'
                            }
                        ]
                    ]
                ],
                [
                    'linearGradient',
                    {
                        id: 'ROUTE__b',
                        x1: '13.625',
                        x2: '11.171',
                        y1: '9.89',
                        y2: '13.447',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#AB3E55'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '.51',
                                stopColor: '#BD4551'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#AB3E55'
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
                d: 'M8.528 4.3a.29.29 0 0 1-.01-.393 2.624 2.624 0 0 1 3.852-.127l1.99 1.975a4.164 4.164 0 0 1 .047 5.789l-2.539 2.638 2.643 2.733a2.91 2.91 0 0 1 .01 4.003.26.26 0 0 1-.293.06.3.3 0 0 1-.086-.06l-3.785-3.827a4.164 4.164 0 0 1 .01-5.808l2.52-2.534-4.359-4.453z'
            }
        ],
        [
            'path',
            {
                fill: 'currentColor',
                d: 'm11.196 10.444 1.686-1.696a3.08 3.08 0 0 1 .422 3.941l-1.436 1.488c-.54-.545-1.535-1.848-.7-3.667z'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#ROUTE__a)'
            },
            [
                [
                    'path',
                    {
                        fill: 'url(#ROUTE__b)',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M8.914 5.156a.257.257 0 0 1-.008-.35 2.33 2.33 0 0 1 3.423-.113l1.768 1.756a3.7 3.7 0 0 1 .043 5.145l-2.257 2.346 2.35 2.43a2.585 2.585 0 0 1 .008 3.557.23.23 0 0 1-.337 0l-3.365-3.402a3.7 3.7 0 0 1 .009-5.162l2.24-2.253-3.874-3.958z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'm11.285 10.617 1.499-1.508a2.74 2.74 0 0 1 .374 3.504l-1.275 1.322c-.48-.484-1.365-1.642-.623-3.26z'
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
                        id: 'ROUTE__b',
                        x1: '15.52',
                        x2: '10.691',
                        y1: '10.474',
                        y2: '10.474',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#FE8664'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#FF3B56'
                            }
                        ]
                    ]
                ],
                [
                    'clipPath',
                    {
                        id: 'ROUTE__a'
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
 * @component @name TokenROUTE
 * @description Web3Icon for TokenROUTE
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9InVybCgjUk9VVEVfX2EpIiBkPSJNOC41MjggNC4zYS4yOS4yOSAwIDAgMS0uMDEtLjM5MyAyLjYyNCAyLjYyNCAwIDAgMSAzLjg1Mi0uMTI3bDEuOTkgMS45NzVhNC4xNjQgNC4xNjQgMCAwIDEgLjA0NyA1Ljc4OWwtMi41MzkgMi42MzggMi42NDMgMi43MzNhMi45MSAyLjkxIDAgMCAxIC4wMSA0LjAwMy4yNi4yNiAwIDAgMS0uMjkzLjA2LjMuMyAwIDAgMS0uMDg2LS4wNmwtMy43ODUtMy44MjdhNC4xNjQgNC4xNjQgMCAwIDEgLjAxLTUuODA4bDIuNTItMi41MzQtNC4zNTktNC40NTN6Ii8+CiAgICA8cGF0aCBmaWxsPSJ1cmwoI1JPVVRFX19iKSIgZD0ibTExLjE5NiAxMC40NDQgMS42ODYtMS42OTZhMy4wOCAzLjA4IDAgMCAxIC40MjIgMy45NDFsLTEuNDM2IDEuNDg4Yy0uNTQtLjU0NS0xLjUzNS0xLjg0OC0uNy0zLjY2N3oiLz4KICAgIDxkZWZzPgogICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iUk9VVEVfX2EiIHgxPSIxNS45NjEiIHgyPSIxMC41MjciIHkxPSIxMC4yODQiIHkyPSIxMC4yODQiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iI0ZFODY2NCIvPgogICAgICAgICAgICA8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNGRjNCNTYiLz4KICAgICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iUk9VVEVfX2IiIHgxPSIxMy42MjUiIHgyPSIxMS4xNzEiIHkxPSI5Ljg5IiB5Mj0iMTMuNDQ3IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiNBQjNFNTUiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIuNTEiIHN0b3AtY29sb3I9IiNCRDQ1NTEiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjQUIzRTU1Ii8+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgIDwvZGVmcz4KPC9zdmc+Cg==) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik04LjUyOCA0LjNhLjI5LjI5IDAgMCAxLS4wMS0uMzkzIDIuNjI0IDIuNjI0IDAgMCAxIDMuODUyLS4xMjdsMS45OSAxLjk3NWE0LjE2NCA0LjE2NCAwIDAgMSAuMDQ3IDUuNzg5bC0yLjUzOSAyLjYzOCAyLjY0MyAyLjczM2EyLjkxIDIuOTEgMCAwIDEgLjAxIDQuMDAzLjI2LjI2IDAgMCAxLS4yOTMuMDYuMy4zIDAgMCAxLS4wODYtLjA2bC0zLjc4NS0zLjgyN2E0LjE2NCA0LjE2NCAwIDAgMSAuMDEtNS44MDhsMi41Mi0yLjUzNC00LjM1OS00LjQ1M3oiLz4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Im0xMS4xOTYgMTAuNDQ0IDEuNjg2LTEuNjk2YTMuMDggMy4wOCAwIDAgMSAuNDIyIDMuOTQxbC0xLjQzNiAxLjQ4OGMtLjU0LS41NDUtMS41MzUtMS44NDgtLjctMy42Njd6Ii8+Cjwvc3ZnPgo=) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNST1VURV9fYSkiPgogICAgICAgIDxwYXRoIGZpbGw9InVybCgjUk9VVEVfX2IpIiBkPSJNMjQgMEgwdjI0aDI0eiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik04LjkxNCA1LjE1NmEuMjU3LjI1NyAwIDAgMS0uMDA4LS4zNSAyLjMzIDIuMzMgMCAwIDEgMy40MjMtLjExM2wxLjc2OCAxLjc1NmEzLjcgMy43IDAgMCAxIC4wNDMgNS4xNDVsLTIuMjU3IDIuMzQ2IDIuMzUgMi40M2EyLjU4NSAyLjU4NSAwIDAgMSAuMDA4IDMuNTU3LjIzLjIzIDAgMCAxLS4zMzcgMGwtMy4zNjUtMy40MDJhMy43IDMuNyAwIDAgMSAuMDA5LTUuMTYybDIuMjQtMi4yNTMtMy44NzQtMy45NTh6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0ibTExLjI4NSAxMC42MTcgMS40OTktMS41MDhhMi43NCAyLjc0IDAgMCAxIC4zNzQgMy41MDRsLTEuMjc1IDEuMzIyYy0uNDgtLjQ4NC0xLjM2NS0xLjY0Mi0uNjIzLTMuMjZ6Ii8+CiAgICA8L2c+CiAgICA8ZGVmcz4KICAgICAgICA8bGluZWFyR3JhZGllbnQgaWQ9IlJPVVRFX19iIiB4MT0iMTUuNTIiIHgyPSIxMC42OTEiIHkxPSIxMC40NzQiIHkyPSIxMC40NzQiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iI0ZFODY2NCIvPgogICAgICAgICAgICA8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNGRjNCNTYiLz4KICAgICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgICAgIDxjbGlwUGF0aCBpZD0iUk9VVEVfX2EiPgogICAgICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMCAwaDI0djI0SDB6Ii8+CiAgICAgICAgPC9jbGlwUGF0aD4KICAgIDwvZGVmcz4KPC9zdmc+Cg==)
 * @see https://web3icons.io/tokens/ROUTE
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenROUTE = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenROUTE', __iconNode);
;
}),
];

//# sourceMappingURL=1qqr_%40web3icons_react_dist_0pvnbtu._.js.map