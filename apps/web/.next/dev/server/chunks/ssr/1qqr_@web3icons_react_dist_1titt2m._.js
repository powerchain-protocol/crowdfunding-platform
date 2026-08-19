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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenMANA.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenMANA
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-ssr] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: 'url(#MANA__a)',
                d: 'M9.206 6.863v7.706h6.637z'
            }
        ],
        [
            'path',
            {
                fill: '#fff',
                d: 'M3 14.569h6.206V6.863z'
            }
        ],
        [
            'path',
            {
                fill: '#FF2D55',
                d: 'M6.251 19.064a10.7 10.7 0 0 0 6.165 1.926c2.312 0 4.449-.717 6.165-1.926z'
            }
        ],
        [
            'path',
            {
                fill: '#FFBC5B',
                d: 'M3 14.57c.32.687.722 1.334 1.197 1.926H15.93v-1.927z'
            }
        ],
        [
            'path',
            {
                fill: 'url(#MANA__b)',
                d: 'M16.29 12v5.78H21z'
            }
        ],
        [
            'path',
            {
                fill: '#fff',
                d: 'M11.584 17.78h4.706V12z'
            }
        ],
        [
            'path',
            {
                fill: '#FFC95B',
                d: 'M16.29 9.688a2.568 2.568 0 1 0 0-5.137 2.568 2.568 0 0 0 0 5.137m-7.084-4.11a1.284 1.284 0 1 0 0-2.568 1.284 1.284 0 0 0 0 2.568'
            }
        ],
        [
            'defs',
            {},
            [
                [
                    'linearGradient',
                    {
                        id: 'MANA__a',
                        x1: '12.287',
                        x2: '12.287',
                        y1: '3.01',
                        y2: '20.991',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#A524B3'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#FF2D55'
                            }
                        ]
                    ]
                ],
                [
                    'linearGradient',
                    {
                        id: 'MANA__b',
                        x1: '11.995',
                        x2: '11.995',
                        y1: '3.01',
                        y2: '20.99',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#A524B3'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#FF2D55'
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
                d: 'M9.205 6.863v7.706h6.637z'
            }
        ],
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M3 14.569h6.206V6.863zm3.252 4.495a10.7 10.7 0 0 0 6.164 1.926c2.312 0 4.45-.717 6.165-1.926zM3 14.57c.32.687.722 1.334 1.197 1.926H15.93v-1.927zM16.29 12v5.78H21z'
            }
        ],
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M11.584 17.78h4.705V12zm4.706-8.092a2.568 2.568 0 1 0 0-5.137 2.568 2.568 0 0 0 0 5.137m-7.084-4.11a1.284 1.284 0 1 0 0-2.567 1.284 1.284 0 0 0 0 2.567'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#MANA__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#FFC95B',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M9.516 7.435v6.85h5.9zM4 14.284h5.516v-6.85zm2.89 3.994a9.5 9.5 0 0 0 5.48 1.713 9.5 9.5 0 0 0 5.48-1.713z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M4 14.284a8.4 8.4 0 0 0 1.064 1.713h10.43v-1.713zM15.813 12v5.137H20z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M11.63 17.137h4.182V12zm4.183-7.192a2.283 2.283 0 1 0 0-4.566 2.283 2.283 0 0 0 0 4.566M9.516 6.292a1.141 1.141 0 1 0 0-2.283 1.141 1.141 0 0 0 0 2.283'
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
                        id: 'MANA__a'
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
 * @component @name TokenMANA
 * @description Web3Icon for TokenMANA
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9InVybCgjTUFOQV9fYSkiIGQ9Ik05LjIwNiA2Ljg2M3Y3LjcwNmg2LjYzN3oiLz4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0zIDE0LjU2OWg2LjIwNlY2Ljg2M3oiLz4KICAgIDxwYXRoIGZpbGw9IiNGRjJENTUiIGQ9Ik02LjI1MSAxOS4wNjRhMTAuNyAxMC43IDAgMCAwIDYuMTY1IDEuOTI2YzIuMzEyIDAgNC40NDktLjcxNyA2LjE2NS0xLjkyNnoiLz4KICAgIDxwYXRoIGZpbGw9IiNGRkJDNUIiIGQ9Ik0zIDE0LjU3Yy4zMi42ODcuNzIyIDEuMzM0IDEuMTk3IDEuOTI2SDE1Ljkzdi0xLjkyN3oiLz4KICAgIDxwYXRoIGZpbGw9InVybCgjTUFOQV9fYikiIGQ9Ik0xNi4yOSAxMnY1Ljc4SDIxeiIvPgogICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTExLjU4NCAxNy43OGg0LjcwNlYxMnoiLz4KICAgIDxwYXRoIGZpbGw9IiNGRkM5NUIiIGQ9Ik0xNi4yOSA5LjY4OGEyLjU2OCAyLjU2OCAwIDEgMCAwLTUuMTM3IDIuNTY4IDIuNTY4IDAgMCAwIDAgNS4xMzdtLTcuMDg0LTQuMTFhMS4yODQgMS4yODQgMCAxIDAgMC0yLjU2OCAxLjI4NCAxLjI4NCAwIDAgMCAwIDIuNTY4Ii8+CiAgICA8ZGVmcz4KICAgICAgICA8bGluZWFyR3JhZGllbnQgaWQ9Ik1BTkFfX2EiIHgxPSIxMi4yODciIHgyPSIxMi4yODciIHkxPSIzLjAxIiB5Mj0iMjAuOTkxIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiNBNTI0QjMiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjRkYyRDU1Ii8+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgICAgICA8bGluZWFyR3JhZGllbnQgaWQ9Ik1BTkFfX2IiIHgxPSIxMS45OTUiIHgyPSIxMS45OTUiIHkxPSIzLjAxIiB5Mj0iMjAuOTkiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iI0E1MjRCMyIvPgogICAgICAgICAgICA8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNGRjJENTUiLz4KICAgICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgPC9kZWZzPgo8L3N2Zz4K) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik05LjIwNSA2Ljg2M3Y3LjcwNmg2LjYzN3oiLz4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0zIDE0LjU2OWg2LjIwNlY2Ljg2M3ptMy4yNTIgNC40OTVhMTAuNyAxMC43IDAgMCAwIDYuMTY0IDEuOTI2YzIuMzEyIDAgNC40NS0uNzE3IDYuMTY1LTEuOTI2ek0zIDE0LjU3Yy4zMi42ODcuNzIyIDEuMzM0IDEuMTk3IDEuOTI2SDE1Ljkzdi0xLjkyN3pNMTYuMjkgMTJ2NS43OEgyMXoiLz4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xMS41ODQgMTcuNzhoNC43MDVWMTJ6bTQuNzA2LTguMDkyYTIuNTY4IDIuNTY4IDAgMSAwIDAtNS4xMzcgMi41NjggMi41NjggMCAwIDAgMCA1LjEzN20tNy4wODQtNC4xMWExLjI4NCAxLjI4NCAwIDEgMCAwLTIuNTY3IDEuMjg0IDEuMjg0IDAgMCAwIDAgMi41NjciLz4KPC9zdmc+Cg==) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNNQU5BX19hKSI+CiAgICAgICAgPHBhdGggZmlsbD0iI0ZGQzk1QiIgZD0iTTI0IDBIMHYyNGgyNHoiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNOS41MTYgNy40MzV2Ni44NWg1Ljl6TTQgMTQuMjg0aDUuNTE2di02Ljg1em0yLjg5IDMuOTk0YTkuNSA5LjUgMCAwIDAgNS40OCAxLjcxMyA5LjUgOS41IDAgMCAwIDUuNDgtMS43MTN6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTQgMTQuMjg0YTguNCA4LjQgMCAwIDAgMS4wNjQgMS43MTNoMTAuNDN2LTEuNzEzek0xNS44MTMgMTJ2NS4xMzdIMjB6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTExLjYzIDE3LjEzN2g0LjE4MlYxMnptNC4xODMtNy4xOTJhMi4yODMgMi4yODMgMCAxIDAgMC00LjU2NiAyLjI4MyAyLjI4MyAwIDAgMCAwIDQuNTY2TTkuNTE2IDYuMjkyYTEuMTQxIDEuMTQxIDAgMSAwIDAtMi4yODMgMS4xNDEgMS4xNDEgMCAwIDAgMCAyLjI4MyIvPgogICAgPC9nPgogICAgPGRlZnM+CiAgICAgICAgPGNsaXBQYXRoIGlkPSJNQU5BX19hIj4KICAgICAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTAgMGgyNHYyNEgweiIvPgogICAgICAgIDwvY2xpcFBhdGg+CiAgICA8L2RlZnM+Cjwvc3ZnPgo=)
 * @see https://web3icons.io/tokens/MANA
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenMANA = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenMANA', __iconNode);
;
}),
];

//# sourceMappingURL=1qqr_%40web3icons_react_dist_1titt2m._.js.map