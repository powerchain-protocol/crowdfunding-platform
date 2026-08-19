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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenZIL.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenZIL
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-ssr] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: 'url(#ZIL__a)',
                d: 'M5.647 4.154 15.7 9.01l2.647-1.165L8.278 3z'
            }
        ],
        [
            'path',
            {
                fill: 'url(#ZIL__b)',
                d: 'M5.647 4.153v2.621l6.999 3.372-7 3.426v2.584L15.707 21v-2.594l-6.814-3.31 6.814-3.494V9.008L5.646 4.164z'
            }
        ],
        [
            'path',
            {
                fill: 'url(#ZIL__c)',
                d: 'm15.706 8.994 2.647-1.15v2.595l-2.647 1.154zm0 11.986 2.647-1.154v-8.074l-2.647 1.165z'
            }
        ],
        [
            'defs',
            {},
            [
                [
                    'linearGradient',
                    {
                        id: 'ZIL__a',
                        x1: '16.24',
                        x2: '3.146',
                        y1: '20.445',
                        y2: '15.548',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#60AAAC'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#347181'
                            }
                        ]
                    ]
                ],
                [
                    'linearGradient',
                    {
                        id: 'ZIL__b',
                        x1: '12',
                        x2: '12',
                        y1: '2.999',
                        y2: '21',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#5AC1C1'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#216B79'
                            }
                        ]
                    ]
                ],
                [
                    'linearGradient',
                    {
                        id: 'ZIL__c',
                        x1: '14.117',
                        x2: '19.941',
                        y1: '18.619',
                        y2: '13.854',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#5AC1C1'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#216B79'
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
                d: 'M5.646 4.154 15.7 9.01l2.648-1.165L8.278 3z'
            }
        ],
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M5.646 4.153v2.621l7 3.372-7 3.426v2.584L15.706 21v-2.594l-6.814-3.31 6.814-3.494V9.008L5.646 4.164zm10.061 4.841 2.647-1.15v2.595l-2.647 1.154zm0 11.986 2.647-1.154v-8.074l-2.647 1.165z'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#ZIL__a)'
            },
            [
                [
                    'path',
                    {
                        fill: 'url(#ZIL__b)',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M6.352 5.026 15.29 9.34l2.353-1.035L8.692 4z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M6.352 5.025v2.33l6.222 2.998-6.222 3.045v2.296L15.294 20v-2.306l-6.057-2.941 6.057-3.106V9.34L6.352 5.035zm8.943 4.303 2.353-1.021v2.306l-2.353 1.026zm0 10.654 2.353-1.026V11.78l-2.353 1.035z'
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
                        id: 'ZIL__b',
                        x1: '15.769',
                        x2: '4.13',
                        y1: '19.507',
                        y2: '15.154',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#60AAAC'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#347181'
                            }
                        ]
                    ]
                ],
                [
                    'clipPath',
                    {
                        id: 'ZIL__a'
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
 * @component @name TokenZIL
 * @description Web3Icon for TokenZIL
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9InVybCgjWklMX19hKSIgZD0iTTUuNjQ3IDQuMTU0IDE1LjcgOS4wMWwyLjY0Ny0xLjE2NUw4LjI3OCAzeiIvPgogICAgPHBhdGggZmlsbD0idXJsKCNaSUxfX2IpIiBkPSJNNS42NDcgNC4xNTN2Mi42MjFsNi45OTkgMy4zNzItNyAzLjQyNnYyLjU4NEwxNS43MDcgMjF2LTIuNTk0bC02LjgxNC0zLjMxIDYuODE0LTMuNDk0VjkuMDA4TDUuNjQ2IDQuMTY0eiIvPgogICAgPHBhdGggZmlsbD0idXJsKCNaSUxfX2MpIiBkPSJtMTUuNzA2IDguOTk0IDIuNjQ3LTEuMTV2Mi41OTVsLTIuNjQ3IDEuMTU0em0wIDExLjk4NiAyLjY0Ny0xLjE1NHYtOC4wNzRsLTIuNjQ3IDEuMTY1eiIvPgogICAgPGRlZnM+CiAgICAgICAgPGxpbmVhckdyYWRpZW50IGlkPSJaSUxfX2EiIHgxPSIxNi4yNCIgeDI9IjMuMTQ2IiB5MT0iMjAuNDQ1IiB5Mj0iMTUuNTQ4IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiM2MEFBQUMiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMzQ3MTgxIi8+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgICAgICA8bGluZWFyR3JhZGllbnQgaWQ9IlpJTF9fYiIgeDE9IjEyIiB4Mj0iMTIiIHkxPSIyLjk5OSIgeTI9IjIxIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiM1QUMxQzEiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMjE2Qjc5Ii8+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgICAgICA8bGluZWFyR3JhZGllbnQgaWQ9IlpJTF9fYyIgeDE9IjE0LjExNyIgeDI9IjE5Ljk0MSIgeTE9IjE4LjYxOSIgeTI9IjEzLjg1NCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjNUFDMUMxIi8+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzIxNkI3OSIvPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICA8L2RlZnM+Cjwvc3ZnPgo=) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik01LjY0NiA0LjE1NCAxNS43IDkuMDFsMi42NDgtMS4xNjVMOC4yNzggM3oiLz4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik01LjY0NiA0LjE1M3YyLjYyMWw3IDMuMzcyLTcgMy40MjZ2Mi41ODRMMTUuNzA2IDIxdi0yLjU5NGwtNi44MTQtMy4zMSA2LjgxNC0zLjQ5NFY5LjAwOEw1LjY0NiA0LjE2NHptMTAuMDYxIDQuODQxIDIuNjQ3LTEuMTV2Mi41OTVsLTIuNjQ3IDEuMTU0em0wIDExLjk4NiAyLjY0Ny0xLjE1NHYtOC4wNzRsLTIuNjQ3IDEuMTY1eiIvPgo8L3N2Zz4K) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNaSUxfX2EpIj4KICAgICAgICA8cGF0aCBmaWxsPSJ1cmwoI1pJTF9fYikiIGQ9Ik0yNCAwSDB2MjRoMjR6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTYuMzUyIDUuMDI2IDE1LjI5IDkuMzRsMi4zNTMtMS4wMzVMOC42OTIgNHoiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNNi4zNTIgNS4wMjV2Mi4zM2w2LjIyMiAyLjk5OC02LjIyMiAzLjA0NXYyLjI5NkwxNS4yOTQgMjB2LTIuMzA2bC02LjA1Ny0yLjk0MSA2LjA1Ny0zLjEwNlY5LjM0TDYuMzUyIDUuMDM1em04Ljk0MyA0LjMwMyAyLjM1My0xLjAyMXYyLjMwNmwtMi4zNTMgMS4wMjZ6bTAgMTAuNjU0IDIuMzUzLTEuMDI2VjExLjc4bC0yLjM1MyAxLjAzNXoiLz4KICAgIDwvZz4KICAgIDxkZWZzPgogICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iWklMX19iIiB4MT0iMTUuNzY5IiB4Mj0iNC4xMyIgeTE9IjE5LjUwNyIgeTI9IjE1LjE1NCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjNjBBQUFDIi8+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzM0NzE4MSIvPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICAgICAgPGNsaXBQYXRoIGlkPSJaSUxfX2EiPgogICAgICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMCAwaDI0djI0SDB6Ii8+CiAgICAgICAgPC9jbGlwUGF0aD4KICAgIDwvZGVmcz4KPC9zdmc+Cg==)
 * @see https://web3icons.io/tokens/ZIL
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenZIL = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenZIL', __iconNode);
;
}),
];

//# sourceMappingURL=1qqr_%40web3icons_react_dist_1h3eh1r._.js.map