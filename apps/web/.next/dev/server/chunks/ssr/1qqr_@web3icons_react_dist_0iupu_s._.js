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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenQUINT.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenQUINT
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-ssr] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#12E3BC',
                d: 'M17.4 18v.6H21l-.528-.6z'
            }
        ],
        [
            'path',
            {
                fill: '#14F4C8',
                d: 'M13.2 17.4V15H5.4V5.4H15V21h6v-2.4h-3.6V3H3v14.4z'
            }
        ],
        [
            'path',
            {
                fill: 'url(#QUINT__a)',
                d: 'm6 14.4-.6.6h7.8l-.6-.6z'
            }
        ],
        [
            'path',
            {
                fill: 'url(#QUINT__b)',
                d: 'm6 6-.6-.6H15l-.6.6z'
            }
        ],
        [
            'path',
            {
                fill: 'url(#QUINT__c)',
                d: 'm15 5.4-.6.6v14.4l.6.6z'
            }
        ],
        [
            'path',
            {
                fill: 'url(#QUINT__d)',
                d: 'M9 8.1 5.4 5.4V15L9 12.3z'
            }
        ],
        [
            'defs',
            {},
            [
                [
                    'linearGradient',
                    {
                        id: 'QUINT__a',
                        x1: '8.497',
                        x2: '6.322',
                        y1: '15.419',
                        y2: '7.557',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#068F82'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#12E3BC'
                            }
                        ]
                    ]
                ],
                [
                    'linearGradient',
                    {
                        id: 'QUINT__b',
                        x1: '8.524',
                        x2: '8.524',
                        y1: '-1.501',
                        y2: '6.959',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#068F82'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#12E3BC'
                            }
                        ]
                    ]
                ],
                [
                    'linearGradient',
                    {
                        id: 'QUINT__c',
                        x1: '23.88',
                        x2: '6.96',
                        y1: '8.669',
                        y2: '8.669',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#068F82'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#12E3BC'
                            }
                        ]
                    ]
                ],
                [
                    'linearGradient',
                    {
                        id: 'QUINT__d',
                        x1: '4.967',
                        x2: '9.185',
                        y1: '9.75',
                        y2: '9.75',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#068F82'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#12E3BC'
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
                d: 'M17.4 17.999v.6H21l-.528-.6z'
            }
        ],
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M13.2 17.4V15H5.4V5.4H15v15.599h6v-2.4h-3.6V3H3v14.4z'
            }
        ],
        [
            'path',
            {
                fill: 'currentColor',
                d: 'm6 14.399-.6.6h7.8l-.6-.6zM6 6l-.6-.6H15l-.6.6z'
            }
        ],
        [
            'path',
            {
                fill: 'currentColor',
                d: 'm15 5.4-.6.6v14.4l.6.6zM9 8.1 5.4 5.4V15L9 12.3z'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#QUINT__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#14F4C8',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#000',
                        d: 'M16.8 17.333v.533H20l-.47-.534z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#000',
                        d: 'M13.067 16.8v-2.134H6.134V6.133h8.532V20H20v-2.133h-3.2V4H4v12.8z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#000',
                        d: 'm6.667 14.132-.533.534h6.933l-.534-.534zm0-7.464-.533-.534h8.533l-.534.534zm8-.534-.534.534v12.799l.534.533z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#000',
                        d: 'm9.334 8.534-3.2-2.4v8.533l3.2-2.4z'
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
                        id: 'QUINT__a'
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
 * @component @name TokenQUINT
 * @description Web3Icon for TokenQUINT
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiMxMkUzQkMiIGQ9Ik0xNy40IDE4di42SDIxbC0uNTI4LS42eiIvPgogICAgPHBhdGggZmlsbD0iIzE0RjRDOCIgZD0iTTEzLjIgMTcuNFYxNUg1LjRWNS40SDE1VjIxaDZ2LTIuNGgtMy42VjNIM3YxNC40eiIvPgogICAgPHBhdGggZmlsbD0idXJsKCNRVUlOVF9fYSkiIGQ9Im02IDE0LjQtLjYuNmg3LjhsLS42LS42eiIvPgogICAgPHBhdGggZmlsbD0idXJsKCNRVUlOVF9fYikiIGQ9Im02IDYtLjYtLjZIMTVsLS42LjZ6Ii8+CiAgICA8cGF0aCBmaWxsPSJ1cmwoI1FVSU5UX19jKSIgZD0ibTE1IDUuNC0uNi42djE0LjRsLjYuNnoiLz4KICAgIDxwYXRoIGZpbGw9InVybCgjUVVJTlRfX2QpIiBkPSJNOSA4LjEgNS40IDUuNFYxNUw5IDEyLjN6Ii8+CiAgICA8ZGVmcz4KICAgICAgICA8bGluZWFyR3JhZGllbnQgaWQ9IlFVSU5UX19hIiB4MT0iOC40OTciIHgyPSI2LjMyMiIgeTE9IjE1LjQxOSIgeTI9IjcuNTU3IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiMwNjhGODIiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMTJFM0JDIi8+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgICAgICA8bGluZWFyR3JhZGllbnQgaWQ9IlFVSU5UX19iIiB4MT0iOC41MjQiIHgyPSI4LjUyNCIgeTE9Ii0xLjUwMSIgeTI9IjYuOTU5IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiMwNjhGODIiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMTJFM0JDIi8+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgICAgICA8bGluZWFyR3JhZGllbnQgaWQ9IlFVSU5UX19jIiB4MT0iMjMuODgiIHgyPSI2Ljk2IiB5MT0iOC42NjkiIHkyPSI4LjY2OSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjMDY4RjgyIi8+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzEyRTNCQyIvPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICAgICAgPGxpbmVhckdyYWRpZW50IGlkPSJRVUlOVF9fZCIgeDE9IjQuOTY3IiB4Mj0iOS4xODUiIHkxPSI5Ljc1IiB5Mj0iOS43NSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjMDY4RjgyIi8+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzEyRTNCQyIvPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICA8L2RlZnM+Cjwvc3ZnPgo=) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xNy40IDE3Ljk5OXYuNkgyMWwtLjUyOC0uNnoiLz4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xMy4yIDE3LjRWMTVINS40VjUuNEgxNXYxNS41OTloNnYtMi40aC0zLjZWM0gzdjE0LjR6Ii8+CiAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJtNiAxNC4zOTktLjYuNmg3LjhsLS42LS42ek02IDZsLS42LS42SDE1bC0uNi42eiIvPgogICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0ibTE1IDUuNC0uNi42djE0LjRsLjYuNnpNOSA4LjEgNS40IDUuNFYxNUw5IDEyLjN6Ii8+Cjwvc3ZnPgo=) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNRVUlOVF9fYSkiPgogICAgICAgIDxwYXRoIGZpbGw9IiMxNEY0QzgiIGQ9Ik0yNCAwSDB2MjRoMjR6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0iIzAwMCIgZD0iTTE2LjggMTcuMzMzdi41MzNIMjBsLS40Ny0uNTM0eiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiMwMDAiIGQ9Ik0xMy4wNjcgMTYuOHYtMi4xMzRINi4xMzRWNi4xMzNoOC41MzJWMjBIMjB2LTIuMTMzaC0zLjJWNEg0djEyLjh6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0iIzAwMCIgZD0ibTYuNjY3IDE0LjEzMi0uNTMzLjUzNGg2LjkzM2wtLjUzNC0uNTM0em0wLTcuNDY0LS41MzMtLjUzNGg4LjUzM2wtLjUzNC41MzR6bTgtLjUzNC0uNTM0LjUzNHYxMi43OTlsLjUzNC41MzN6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0iIzAwMCIgZD0ibTkuMzM0IDguNTM0LTMuMi0yLjR2OC41MzNsMy4yLTIuNHoiLz4KICAgIDwvZz4KICAgIDxkZWZzPgogICAgICAgIDxjbGlwUGF0aCBpZD0iUVVJTlRfX2EiPgogICAgICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMCAwaDI0djI0SDB6Ii8+CiAgICAgICAgPC9jbGlwUGF0aD4KICAgIDwvZGVmcz4KPC9zdmc+Cg==)
 * @see https://web3icons.io/tokens/QUINT
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenQUINT = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenQUINT', __iconNode);
;
}),
];

//# sourceMappingURL=1qqr_%40web3icons_react_dist_0iupu_s._.js.map