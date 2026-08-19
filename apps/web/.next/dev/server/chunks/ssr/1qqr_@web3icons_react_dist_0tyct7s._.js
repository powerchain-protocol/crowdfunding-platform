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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenGG.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenGG
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-ssr] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#5F2596',
                d: 'M3 16.875V10.6l3 1.56v6.325z'
            }
        ],
        [
            'path',
            {
                fill: 'url(#GG__a)',
                d: 'M21 16.875V10.6l-3 1.56v6.325z'
            }
        ],
        [
            'path',
            {
                fill: 'url(#GG__b)',
                d: 'M12 15.06 6 18.5v-6.3l6-3.38z'
            }
        ],
        [
            'path',
            {
                fill: '#5E2693',
                d: 'm12 15.06 6 3.44v-6.3l-6-3.38z'
            }
        ],
        [
            'path',
            {
                fill: 'url(#GG__c)',
                d: 'm6 12.2-3-1.61 8.98-5.09L21 10.59l-3 1.61-6.005-3.35z'
            }
        ],
        [
            'defs',
            {},
            [
                [
                    'linearGradient',
                    {
                        id: 'GG__a',
                        x1: '12',
                        x2: '12',
                        y1: '5.5',
                        y2: '18.5',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#F17750'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '.36',
                                stopColor: '#E26891'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '.65',
                                stopColor: '#D45AC7'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#B071D9'
                            }
                        ]
                    ]
                ],
                [
                    'linearGradient',
                    {
                        id: 'GG__b',
                        x1: '12',
                        x2: '12',
                        y1: '5.5',
                        y2: '18.5',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                offset: '.06',
                                stopColor: '#EF7C3B'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '.39',
                                stopColor: '#EA6D75'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#B961DC'
                            }
                        ]
                    ]
                ],
                [
                    'linearGradient',
                    {
                        id: 'GG__c',
                        x1: '12',
                        x2: '12',
                        y1: '5.5',
                        y2: '12.2',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#EEC985'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '.38',
                                stopColor: '#FDBD4D'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '.93',
                                stopColor: '#FCA143'
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
                clipPath: 'url(#GG__a)'
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
                        fill: '#5F2596',
                        d: 'M4 16.333v-5.578l2.667 1.387v5.622z'
                    }
                ],
                [
                    'path',
                    {
                        fill: 'url(#GG__b)',
                        d: 'M20 16.333v-5.578l-2.667 1.387v5.622z'
                    }
                ],
                [
                    'path',
                    {
                        fill: 'url(#GG__c)',
                        d: 'm12 14.72-5.333 3.058v-5.6L12 9.174z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#5E2693',
                        d: 'm12 14.72 5.333 3.058v-5.6L12 9.174z'
                    }
                ],
                [
                    'path',
                    {
                        fill: 'url(#GG__d)',
                        d: 'M6.667 12.177 4 10.747l7.982-4.525L20 10.746l-2.667 1.431L11.995 9.2z'
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
                        id: 'GG__b',
                        x1: '12',
                        x2: '12',
                        y1: '6.222',
                        y2: '17.777',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#F17750'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '.36',
                                stopColor: '#E26891'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '.65',
                                stopColor: '#D45AC7'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#B071D9'
                            }
                        ]
                    ]
                ],
                [
                    'linearGradient',
                    {
                        id: 'GG__c',
                        x1: '12',
                        x2: '12',
                        y1: '6.223',
                        y2: '17.778',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                offset: '.06',
                                stopColor: '#EF7C3B'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '.39',
                                stopColor: '#EA6D75'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#B961DC'
                            }
                        ]
                    ]
                ],
                [
                    'linearGradient',
                    {
                        id: 'GG__d',
                        x1: '12',
                        x2: '12',
                        y1: '6.222',
                        y2: '12.177',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#EEC985'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '.38',
                                stopColor: '#FDBD4D'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '.93',
                                stopColor: '#FCA143'
                            }
                        ]
                    ]
                ],
                [
                    'clipPath',
                    {
                        id: 'GG__a'
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
 * @component @name TokenGG
 * @description Web3Icon for TokenGG
 *
 * @preview (branded, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiM1RjI1OTYiIGQ9Ik0zIDE2Ljg3NVYxMC42bDMgMS41NnY2LjMyNXoiLz4KICAgIDxwYXRoIGZpbGw9InVybCgjR0dfX2EpIiBkPSJNMjEgMTYuODc1VjEwLjZsLTMgMS41NnY2LjMyNXoiLz4KICAgIDxwYXRoIGZpbGw9InVybCgjR0dfX2IpIiBkPSJNMTIgMTUuMDYgNiAxOC41di02LjNsNi0zLjM4eiIvPgogICAgPHBhdGggZmlsbD0iIzVFMjY5MyIgZD0ibTEyIDE1LjA2IDYgMy40NHYtNi4zbC02LTMuMzh6Ii8+CiAgICA8cGF0aCBmaWxsPSJ1cmwoI0dHX19jKSIgZD0ibTYgMTIuMi0zLTEuNjEgOC45OC01LjA5TDIxIDEwLjU5bC0zIDEuNjEtNi4wMDUtMy4zNXoiLz4KICAgIDxkZWZzPgogICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iR0dfX2EiIHgxPSIxMiIgeDI9IjEyIiB5MT0iNS41IiB5Mj0iMTguNSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjRjE3NzUwIi8+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iLjM2IiBzdG9wLWNvbG9yPSIjRTI2ODkxIi8+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iLjY1IiBzdG9wLWNvbG9yPSIjRDQ1QUM3Ii8+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI0IwNzFEOSIvPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICAgICAgPGxpbmVhckdyYWRpZW50IGlkPSJHR19fYiIgeDE9IjEyIiB4Mj0iMTIiIHkxPSI1LjUiIHkyPSIxOC41IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iLjA2IiBzdG9wLWNvbG9yPSIjRUY3QzNCIi8+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iLjM5IiBzdG9wLWNvbG9yPSIjRUE2RDc1Ii8+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI0I5NjFEQyIvPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICAgICAgPGxpbmVhckdyYWRpZW50IGlkPSJHR19fYyIgeDE9IjEyIiB4Mj0iMTIiIHkxPSI1LjUiIHkyPSIxMi4yIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiNFRUM5ODUiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIuMzgiIHN0b3AtY29sb3I9IiNGREJENEQiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIuOTMiIHN0b3AtY29sb3I9IiNGQ0ExNDMiLz4KICAgICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgPC9kZWZzPgo8L3N2Zz4K) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNHR19fYSkiPgogICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0yNCAwSDB2MjRoMjR6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0iIzVGMjU5NiIgZD0iTTQgMTYuMzMzdi01LjU3OGwyLjY2NyAxLjM4N3Y1LjYyMnoiLz4KICAgICAgICA8cGF0aCBmaWxsPSJ1cmwoI0dHX19iKSIgZD0iTTIwIDE2LjMzM3YtNS41NzhsLTIuNjY3IDEuMzg3djUuNjIyeiIvPgogICAgICAgIDxwYXRoIGZpbGw9InVybCgjR0dfX2MpIiBkPSJtMTIgMTQuNzItNS4zMzMgMy4wNTh2LTUuNkwxMiA5LjE3NHoiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjNUUyNjkzIiBkPSJtMTIgMTQuNzIgNS4zMzMgMy4wNTh2LTUuNkwxMiA5LjE3NHoiLz4KICAgICAgICA8cGF0aCBmaWxsPSJ1cmwoI0dHX19kKSIgZD0iTTYuNjY3IDEyLjE3NyA0IDEwLjc0N2w3Ljk4Mi00LjUyNUwyMCAxMC43NDZsLTIuNjY3IDEuNDMxTDExLjk5NSA5LjJ6Ii8+CiAgICA8L2c+CiAgICA8ZGVmcz4KICAgICAgICA8bGluZWFyR3JhZGllbnQgaWQ9IkdHX19iIiB4MT0iMTIiIHgyPSIxMiIgeTE9IjYuMjIyIiB5Mj0iMTcuNzc3IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiNGMTc3NTAiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIuMzYiIHN0b3AtY29sb3I9IiNFMjY4OTEiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIuNjUiIHN0b3AtY29sb3I9IiNENDVBQzciLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjQjA3MUQ5Ii8+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgICAgICA8bGluZWFyR3JhZGllbnQgaWQ9IkdHX19jIiB4MT0iMTIiIHgyPSIxMiIgeTE9IjYuMjIzIiB5Mj0iMTcuNzc4IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iLjA2IiBzdG9wLWNvbG9yPSIjRUY3QzNCIi8+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iLjM5IiBzdG9wLWNvbG9yPSIjRUE2RDc1Ii8+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI0I5NjFEQyIvPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICAgICAgPGxpbmVhckdyYWRpZW50IGlkPSJHR19fZCIgeDE9IjEyIiB4Mj0iMTIiIHkxPSI2LjIyMiIgeTI9IjEyLjE3NyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjRUVDOTg1Ii8+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iLjM4IiBzdG9wLWNvbG9yPSIjRkRCRDREIi8+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iLjkzIiBzdG9wLWNvbG9yPSIjRkNBMTQzIi8+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgICAgICA8Y2xpcFBhdGggaWQ9IkdHX19hIj4KICAgICAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTAgMGgyNHYyNEgweiIvPgogICAgICAgIDwvY2xpcFBhdGg+CiAgICA8L2RlZnM+Cjwvc3ZnPgo=)
 * @see https://web3icons.io/tokens/GG
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenGG = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenGG', __iconNode);
;
}),
];

//# sourceMappingURL=1qqr_%40web3icons_react_dist_0tyct7s._.js.map