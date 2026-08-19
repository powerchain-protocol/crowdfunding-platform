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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenBEAM.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenBEAM
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-ssr] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#0B76FF',
                d: 'M12 16.05h3.735L12 9.75V5.7l7.65 12.6H12z'
            }
        ],
        [
            'path',
            {
                fill: '#24C1FF',
                d: 'M12 16.05H8.247L12 9.75V5.7L4.35 18.3H12z'
            }
        ],
        [
            'path',
            {
                fill: '#39FFF2',
                d: 'M12 11.55v3.6H9.75z'
            }
        ],
        [
            'path',
            {
                fill: '#00E2C2',
                d: 'M12 11.55v3.6h2.25z'
            }
        ],
        [
            'path',
            {
                fill: 'url(#BEAM__a)',
                d: 'm3 9.643 8.99 4.158v.436L3 12.271z'
            }
        ],
        [
            'path',
            {
                fill: 'url(#BEAM__b)',
                d: 'm21 8.432-9.009 5.373v.148l9.01-3.784z'
            }
        ],
        [
            'path',
            {
                fill: 'url(#BEAM__c)',
                d: 'm21 13.639-9.009.603v-.144l9.01-2.196z'
            }
        ],
        [
            'path',
            {
                fill: 'url(#BEAM__d)',
                d: 'm21 10.168-9.009 3.78v.149l9.01-2.196z'
            }
        ],
        [
            'defs',
            {},
            [
                [
                    'linearGradient',
                    {
                        id: 'BEAM__a',
                        x1: '3.009',
                        x2: '12.865',
                        y1: '12.032',
                        y2: '12.032',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#fff',
                                stopOpacity: '0'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#fff'
                            }
                        ]
                    ]
                ],
                [
                    'linearGradient',
                    {
                        id: 'BEAM__b',
                        x1: '20.892',
                        x2: '9.447',
                        y1: '11.974',
                        y2: '11.974',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#FD76FD',
                                stopOpacity: '0'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#FF51FF'
                            }
                        ]
                    ]
                ],
                [
                    'linearGradient',
                    {
                        id: 'BEAM__c',
                        x1: '21.081',
                        x2: '11.811',
                        y1: '12.025',
                        y2: '12.025',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#9D6EFF',
                                stopOpacity: '0'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#A18CFF'
                            }
                        ]
                    ]
                ],
                [
                    'linearGradient',
                    {
                        id: 'BEAM__d',
                        x1: '20.991',
                        x2: '15.69',
                        y1: '12.139',
                        y2: '12.139',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#AE60D6',
                                stopOpacity: '0'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#AB38E6'
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
                d: 'M12 16.05h3.735L12 9.75V5.7l7.65 12.6H12zm0 0H8.247L12 9.75V5.7L4.35 18.3H12z'
            }
        ],
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M12 11.55v3.6H9.75zm0 0v3.6h2.25z'
            }
        ],
        [
            'path',
            {
                fill: 'currentColor',
                d: 'm3 9.643 8.99 4.158v.436L3 12.271zm18-1.211-9.009 5.373v.148L21 10.17zm0 5.207-9.009.603v-.144L21 11.902z'
            }
        ],
        [
            'path',
            {
                fill: 'currentColor',
                d: 'm21 10.169-9.009 3.78v.148L21 11.9z'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#BEAM__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#0B76FF',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M12 15.6h3.32L12 10V6.4l6.8 11.2H12zm0 0H8.664L12 10V6.4L5.2 17.6H12z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M12 11.6v3.2h-2zm0 0v3.2h2z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'm4 9.905 7.992 3.696v.388L4 12.24zm16-1.077-8.008 4.776v.132L20 10.372z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'm20 13.457-8.008.535v-.128L20 11.912zm0-3.085-8.008 3.36v.132L20 11.912z'
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
                        id: 'BEAM__a'
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
 * @component @name TokenBEAM
 * @description Web3Icon for TokenBEAM
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiMwQjc2RkYiIGQ9Ik0xMiAxNi4wNWgzLjczNUwxMiA5Ljc1VjUuN2w3LjY1IDEyLjZIMTJ6Ii8+CiAgICA8cGF0aCBmaWxsPSIjMjRDMUZGIiBkPSJNMTIgMTYuMDVIOC4yNDdMMTIgOS43NVY1LjdMNC4zNSAxOC4zSDEyeiIvPgogICAgPHBhdGggZmlsbD0iIzM5RkZGMiIgZD0iTTEyIDExLjU1djMuNkg5Ljc1eiIvPgogICAgPHBhdGggZmlsbD0iIzAwRTJDMiIgZD0iTTEyIDExLjU1djMuNmgyLjI1eiIvPgogICAgPHBhdGggZmlsbD0idXJsKCNCRUFNX19hKSIgZD0ibTMgOS42NDMgOC45OSA0LjE1OHYuNDM2TDMgMTIuMjcxeiIvPgogICAgPHBhdGggZmlsbD0idXJsKCNCRUFNX19iKSIgZD0ibTIxIDguNDMyLTkuMDA5IDUuMzczdi4xNDhsOS4wMS0zLjc4NHoiLz4KICAgIDxwYXRoIGZpbGw9InVybCgjQkVBTV9fYykiIGQ9Im0yMSAxMy42MzktOS4wMDkuNjAzdi0uMTQ0bDkuMDEtMi4xOTZ6Ii8+CiAgICA8cGF0aCBmaWxsPSJ1cmwoI0JFQU1fX2QpIiBkPSJtMjEgMTAuMTY4LTkuMDA5IDMuNzh2LjE0OWw5LjAxLTIuMTk2eiIvPgogICAgPGRlZnM+CiAgICAgICAgPGxpbmVhckdyYWRpZW50IGlkPSJCRUFNX19hIiB4MT0iMy4wMDkiIHgyPSIxMi44NjUiIHkxPSIxMi4wMzIiIHkyPSIxMi4wMzIiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iI2ZmZiIgc3RvcC1vcGFjaXR5PSIwIi8+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI2ZmZiIvPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICAgICAgPGxpbmVhckdyYWRpZW50IGlkPSJCRUFNX19iIiB4MT0iMjAuODkyIiB4Mj0iOS40NDciIHkxPSIxMS45NzQiIHkyPSIxMS45NzQiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iI0ZENzZGRCIgc3RvcC1vcGFjaXR5PSIwIi8+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI0ZGNTFGRiIvPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICAgICAgPGxpbmVhckdyYWRpZW50IGlkPSJCRUFNX19jIiB4MT0iMjEuMDgxIiB4Mj0iMTEuODExIiB5MT0iMTIuMDI1IiB5Mj0iMTIuMDI1IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiM5RDZFRkYiIHN0b3Atb3BhY2l0eT0iMCIvPgogICAgICAgICAgICA8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNBMThDRkYiLz4KICAgICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iQkVBTV9fZCIgeDE9IjIwLjk5MSIgeDI9IjE1LjY5IiB5MT0iMTIuMTM5IiB5Mj0iMTIuMTM5IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiNBRTYwRDYiIHN0b3Atb3BhY2l0eT0iMCIvPgogICAgICAgICAgICA8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNBQjM4RTYiLz4KICAgICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgPC9kZWZzPgo8L3N2Zz4K) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xMiAxNi4wNWgzLjczNUwxMiA5Ljc1VjUuN2w3LjY1IDEyLjZIMTJ6bTAgMEg4LjI0N0wxMiA5Ljc1VjUuN0w0LjM1IDE4LjNIMTJ6Ii8+CiAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTIgMTEuNTV2My42SDkuNzV6bTAgMHYzLjZoMi4yNXoiLz4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Im0zIDkuNjQzIDguOTkgNC4xNTh2LjQzNkwzIDEyLjI3MXptMTgtMS4yMTEtOS4wMDkgNS4zNzN2LjE0OEwyMSAxMC4xN3ptMCA1LjIwNy05LjAwOS42MDN2LS4xNDRMMjEgMTEuOTAyeiIvPgogICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0ibTIxIDEwLjE2OS05LjAwOSAzLjc4di4xNDhMMjEgMTEuOXoiLz4KPC9zdmc+Cg==) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNCRUFNX19hKSI+CiAgICAgICAgPHBhdGggZmlsbD0iIzBCNzZGRiIgZD0iTTI0IDBIMHYyNGgyNHoiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTIgMTUuNmgzLjMyTDEyIDEwVjYuNGw2LjggMTEuMkgxMnptMCAwSDguNjY0TDEyIDEwVjYuNEw1LjIgMTcuNkgxMnoiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTIgMTEuNnYzLjJoLTJ6bTAgMHYzLjJoMnoiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJtNCA5LjkwNSA3Ljk5MiAzLjY5NnYuMzg4TDQgMTIuMjR6bTE2LTEuMDc3LTguMDA4IDQuNzc2di4xMzJMMjAgMTAuMzcyeiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Im0yMCAxMy40NTctOC4wMDguNTM1di0uMTI4TDIwIDExLjkxMnptMC0zLjA4NS04LjAwOCAzLjM2di4xMzJMMjAgMTEuOTEyeiIvPgogICAgPC9nPgogICAgPGRlZnM+CiAgICAgICAgPGNsaXBQYXRoIGlkPSJCRUFNX19hIj4KICAgICAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTAgMGgyNHYyNEgweiIvPgogICAgICAgIDwvY2xpcFBhdGg+CiAgICA8L2RlZnM+Cjwvc3ZnPgo=)
 * @see https://web3icons.io/tokens/BEAM
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenBEAM = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenBEAM', __iconNode);
;
}),
];

//# sourceMappingURL=1qqr_%40web3icons_react_dist_0x8daf2._.js.map