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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenTHETA.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenTHETA
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-ssr] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: 'url(#THETA__a)',
                d: 'M16.737 3.947H7.263v16.106h9.474zm-10.421 0v16.106l.947.947h9.474l.947-.947V3.947L16.737 3H7.263z',
                fillRule: 'evenodd',
                clipRule: 'evenodd'
            }
        ],
        [
            'path',
            {
                fill: 'url(#THETA__b)',
                d: 'M11.527 9.628H9.158v.948h5.684v-.948h-2.368V6.786h-.947zm0 4.737H9.158v-.947h5.684v.947h-2.368v2.842h-.947z'
            }
        ],
        [
            'defs',
            {},
            [
                [
                    'linearGradient',
                    {
                        id: 'THETA__a',
                        x1: '4.825',
                        x2: '19.536',
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
                        id: 'THETA__b',
                        x1: '8.413',
                        x2: '16.902',
                        y1: '7.571',
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
                d: 'M16.737 3.947H7.263v16.106h9.474zm-10.421 0v16.106l.947.947h9.474l.947-.947V3.947L16.737 3H7.263z',
                fillRule: 'evenodd',
                clipRule: 'evenodd'
            }
        ],
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M11.528 9.628H9.159v.948h5.684v-.948h-2.368V6.786h-.947zm0 4.737H9.159v-.947h5.684v.947h-2.368v2.842h-.947z'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#THETA__a)'
            },
            [
                [
                    'path',
                    {
                        fill: 'url(#THETA__b)',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M16.21 4.842H7.79v14.316h8.42zm-9.263 0v14.316L7.79 20h8.421l.842-.842V4.842L16.21 4H7.79z',
                        fillRule: 'evenodd',
                        clipRule: 'evenodd'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M11.58 9.892H9.475v.842h5.052v-.842h-2.105V7.365h-.842zm0 4.21H9.475v-.842h5.052v.842h-2.105v2.526h-.842z'
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
                        id: 'THETA__b',
                        x1: '5.622',
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
                        id: 'THETA__a'
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
 * @component @name TokenTHETA
 * @description Web3Icon for TokenTHETA
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9InVybCgjVEhFVEFfX2EpIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNi43MzcgMy45NDdINy4yNjN2MTYuMTA2aDkuNDc0em0tMTAuNDIxIDB2MTYuMTA2bC45NDcuOTQ3aDkuNDc0bC45NDctLjk0N1YzLjk0N0wxNi43MzcgM0g3LjI2M3oiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgogICAgPHBhdGggZmlsbD0idXJsKCNUSEVUQV9fYikiIGQ9Ik0xMS41MjcgOS42MjhIOS4xNTh2Ljk0OGg1LjY4NHYtLjk0OGgtMi4zNjhWNi43ODZoLS45NDd6bTAgNC43MzdIOS4xNTh2LS45NDdoNS42ODR2Ljk0N2gtMi4zNjh2Mi44NDJoLS45NDd6Ii8+CiAgICA8ZGVmcz4KICAgICAgICA8bGluZWFyR3JhZGllbnQgaWQ9IlRIRVRBX19hIiB4MT0iNC44MjUiIHgyPSIxOS41MzYiIHkxPSI0LjM1NSIgeTI9IjE5Ljg0NCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjMkFCOEU2Ii8+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iLjUzIiBzdG9wLWNvbG9yPSIjMjlDQUQyIi8+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzJFRTRCRSIvPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICAgICAgPGxpbmVhckdyYWRpZW50IGlkPSJUSEVUQV9fYiIgeDE9IjguNDEzIiB4Mj0iMTYuOTAyIiB5MT0iNy41NzEiIHkyPSIxNS4yOTEiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iIzJBQjhFNiIvPgogICAgICAgICAgICA8c3RvcCBvZmZzZXQ9Ii41MyIgc3RvcC1jb2xvcj0iIzI5Q0FEMiIvPgogICAgICAgICAgICA8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMyRUU0QkUiLz4KICAgICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgPC9kZWZzPgo8L3N2Zz4K) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTE2LjczNyAzLjk0N0g3LjI2M3YxNi4xMDZoOS40NzR6bS0xMC40MjEgMHYxNi4xMDZsLjk0Ny45NDdoOS40NzRsLjk0Ny0uOTQ3VjMuOTQ3TDE2LjczNyAzSDcuMjYzeiIgY2xpcC1ydWxlPSJldmVub2RkIi8+CiAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTEuNTI4IDkuNjI4SDkuMTU5di45NDhoNS42ODR2LS45NDhoLTIuMzY4VjYuNzg2aC0uOTQ3em0wIDQuNzM3SDkuMTU5di0uOTQ3aDUuNjg0di45NDdoLTIuMzY4djIuODQyaC0uOTQ3eiIvPgo8L3N2Zz4K) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNUSEVUQV9fYSkiPgogICAgICAgIDxwYXRoIGZpbGw9InVybCgjVEhFVEFfX2IpIiBkPSJNMjQgMEgwdjI0aDI0eiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTE2LjIxIDQuODQySDcuNzl2MTQuMzE2aDguNDJ6bS05LjI2MyAwdjE0LjMxNkw3Ljc5IDIwaDguNDIxbC44NDItLjg0MlY0Ljg0MkwxNi4yMSA0SDcuNzl6IiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTEuNTggOS44OTJIOS40NzV2Ljg0Mmg1LjA1MnYtLjg0MmgtMi4xMDVWNy4zNjVoLS44NDJ6bTAgNC4yMUg5LjQ3NXYtLjg0Mmg1LjA1MnYuODQyaC0yLjEwNXYyLjUyNmgtLjg0MnoiLz4KICAgIDwvZz4KICAgIDxkZWZzPgogICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iVEhFVEFfX2IiIHgxPSI1LjYyMiIgeDI9IjE4LjY5OCIgeTE9IjUuMjA1IiB5Mj0iMTguOTczIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiMyQUI4RTYiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIuNTMiIHN0b3AtY29sb3I9IiMyOUNBRDIiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMkVFNEJFIi8+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgICAgICA8Y2xpcFBhdGggaWQ9IlRIRVRBX19hIj4KICAgICAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTAgMGgyNHYyNEgweiIvPgogICAgICAgIDwvY2xpcFBhdGg+CiAgICA8L2RlZnM+Cjwvc3ZnPgo=)
 * @see https://web3icons.io/tokens/THETA
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenTHETA = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenTHETA', __iconNode);
;
}),
];

//# sourceMappingURL=1qqr_%40web3icons_react_dist_0j6_xog._.js.map