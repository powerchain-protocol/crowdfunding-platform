(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createWeb3Icon",
    ()=>createWeb3Icon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$types$2b$node$40$24$2e$13$2e$3_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.1_@types+node@24.13.3_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$BaseIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/BaseIcon.js [app-client] (ecmascript)");
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
    const Component = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$types$2b$node$40$24$2e$13$2e$3_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(({ variant = defaultVariant, fallback, ...props }, ref)=>{
        const iconData = variants[variant];
        if (!iconData) {
            console.warn(`Icon "${name}" does not have variant "${variant}". ` + `Available variants: ${availableVariants.join(', ')}`);
            return null;
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$types$2b$node$40$24$2e$13$2e$3_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$BaseIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseIcon"], {
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
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$types$2b$node$40$24$2e$13$2e$3_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(element, elementProps, childElements);
    });
}
;
}),
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/networks/NetworkTheta.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>NetworkTheta
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-client] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: 'url(#theta__a)',
                d: 'M16.737 3.947H7.262v16.106h9.474zm-10.422 0v16.106l.948.947h9.474l.947-.947V3.947L16.736 3H7.263z',
                fillRule: 'evenodd',
                clipRule: 'evenodd'
            }
        ],
        [
            'path',
            {
                fill: 'url(#theta__b)',
                d: 'M11.527 9.63H9.158v.946h5.684V9.63h-2.368V6.787h-.947zm0 4.736H9.158v-.947h5.684v.947h-2.368v2.842h-.947z'
            }
        ],
        [
            'defs',
            {},
            [
                [
                    'linearGradient',
                    {
                        id: 'theta__a',
                        x1: '4.825',
                        x2: '19.535',
                        y1: '4.355',
                        y2: '19.844',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#2AB8E6'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '.53',
                                stopColor: '#29CAD2'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#2EE4BE'
                            }
                        ]
                    ]
                ],
                [
                    'linearGradient',
                    {
                        id: 'theta__b',
                        x1: '8.413',
                        x2: '16.902',
                        y1: '7.572',
                        y2: '15.291',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#2AB8E6'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '.53',
                                stopColor: '#29CAD2'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#2EE4BE'
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
                d: 'M16.737 3.947H7.262v16.106h9.474zm-10.422 0v16.106l.948.947h9.474l.947-.947V3.947L16.736 3H7.263z',
                fillRule: 'evenodd',
                clipRule: 'evenodd'
            }
        ],
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M11.528 9.63H9.159v.946h5.684V9.63h-2.368V6.787h-.947zm0 4.736H9.159v-.947h5.684v.947h-2.368v2.842h-.947z'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#theta__a)'
            },
            [
                [
                    'path',
                    {
                        fill: 'url(#theta__b)',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M16.21 4.842H7.79v14.316h8.42zm-9.263 0v14.316L7.79 20h8.421l.842-.842V4.842L16.211 4H7.788z',
                        fillRule: 'evenodd',
                        clipRule: 'evenodd'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M11.58 9.893H9.477v.842h5.052v-.842h-2.105V7.366h-.842zm0 4.21H9.477v-.842h5.052v.842h-2.105v2.526h-.842z'
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
                        id: 'theta__b',
                        x1: '5.623',
                        x2: '18.698',
                        y1: '5.205',
                        y2: '18.973',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#2AB8E6'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '.53',
                                stopColor: '#29CAD2'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#2EE4BE'
                            }
                        ]
                    ]
                ],
                [
                    'clipPath',
                    {
                        id: 'theta__a'
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
 * @component @name NetworkTheta
 * @description Web3Icon for NetworkTheta
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9InVybCgjdGhldGFfX2EpIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNi43MzcgMy45NDdINy4yNjJ2MTYuMTA2aDkuNDc0em0tMTAuNDIyIDB2MTYuMTA2bC45NDguOTQ3aDkuNDc0bC45NDctLjk0N1YzLjk0N0wxNi43MzYgM0g3LjI2M3oiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgogICAgPHBhdGggZmlsbD0idXJsKCN0aGV0YV9fYikiIGQ9Ik0xMS41MjcgOS42M0g5LjE1OHYuOTQ2aDUuNjg0VjkuNjNoLTIuMzY4VjYuNzg3aC0uOTQ3em0wIDQuNzM2SDkuMTU4di0uOTQ3aDUuNjg0di45NDdoLTIuMzY4djIuODQyaC0uOTQ3eiIvPgogICAgPGRlZnM+CiAgICAgICAgPGxpbmVhckdyYWRpZW50IGlkPSJ0aGV0YV9fYSIgeDE9IjQuODI1IiB4Mj0iMTkuNTM1IiB5MT0iNC4zNTUiIHkyPSIxOS44NDQiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iIzJBQjhFNiIvPgogICAgICAgICAgICA8c3RvcCBvZmZzZXQ9Ii41MyIgc3RvcC1jb2xvcj0iIzI5Q0FEMiIvPgogICAgICAgICAgICA8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMyRUU0QkUiLz4KICAgICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD0idGhldGFfX2IiIHgxPSI4LjQxMyIgeDI9IjE2LjkwMiIgeTE9IjcuNTcyIiB5Mj0iMTUuMjkxIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiMyQUI4RTYiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIuNTMiIHN0b3AtY29sb3I9IiMyOUNBRDIiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMkVFNEJFIi8+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgIDwvZGVmcz4KPC9zdmc+Cg==) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTE2LjczNyAzLjk0N0g3LjI2MnYxNi4xMDZoOS40NzR6bS0xMC40MjIgMHYxNi4xMDZsLjk0OC45NDdoOS40NzRsLjk0Ny0uOTQ3VjMuOTQ3TDE2LjczNiAzSDcuMjYzeiIgY2xpcC1ydWxlPSJldmVub2RkIi8+CiAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTEuNTI4IDkuNjNIOS4xNTl2Ljk0Nmg1LjY4NFY5LjYzaC0yLjM2OFY2Ljc4N2gtLjk0N3ptMCA0LjczNkg5LjE1OXYtLjk0N2g1LjY4NHYuOTQ3aC0yLjM2OHYyLjg0MmgtLjk0N3oiLz4KPC9zdmc+Cg==) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCN0aGV0YV9fYSkiPgogICAgICAgIDxwYXRoIGZpbGw9InVybCgjdGhldGFfX2IpIiBkPSJNMjQgMEgwdjI0aDI0eiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTE2LjIxIDQuODQySDcuNzl2MTQuMzE2aDguNDJ6bS05LjI2MyAwdjE0LjMxNkw3Ljc5IDIwaDguNDIxbC44NDItLjg0MlY0Ljg0MkwxNi4yMTEgNEg3Ljc4OHoiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xMS41OCA5Ljg5M0g5LjQ3N3YuODQyaDUuMDUydi0uODQyaC0yLjEwNVY3LjM2NmgtLjg0MnptMCA0LjIxSDkuNDc3di0uODQyaDUuMDUydi44NDJoLTIuMTA1djIuNTI2aC0uODQyeiIvPgogICAgPC9nPgogICAgPGRlZnM+CiAgICAgICAgPGxpbmVhckdyYWRpZW50IGlkPSJ0aGV0YV9fYiIgeDE9IjUuNjIzIiB4Mj0iMTguNjk4IiB5MT0iNS4yMDUiIHkyPSIxOC45NzMiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iIzJBQjhFNiIvPgogICAgICAgICAgICA8c3RvcCBvZmZzZXQ9Ii41MyIgc3RvcC1jb2xvcj0iIzI5Q0FEMiIvPgogICAgICAgICAgICA8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMyRUU0QkUiLz4KICAgICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgICAgIDxjbGlwUGF0aCBpZD0idGhldGFfX2EiPgogICAgICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMCAwaDI0djI0SDB6Ii8+CiAgICAgICAgPC9jbGlwUGF0aD4KICAgIDwvZGVmcz4KPC9zdmc+Cg==)
 * @see https://web3icons.io/networks/theta
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const NetworkTheta = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWeb3Icon"])('NetworkTheta', __iconNode);
;
}),
]);

//# sourceMappingURL=1qqr_%40web3icons_react_dist_11kv-wx._.js.map