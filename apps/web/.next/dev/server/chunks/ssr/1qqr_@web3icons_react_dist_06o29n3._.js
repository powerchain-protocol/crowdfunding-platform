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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenABT.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenABT
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-ssr] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: 'url(#ABT__a)',
                d: 'm12 3 8 4.5v9L12 21l-8-4.5v-9zm7.25 4.64-7-3.936v7.874zm.25.423L12.5 12l7 3.937zm-.25 8.296-7-3.937v7.875zm-7.5 3.938-7-3.938 7-3.937zm0-8.72-7-3.936 7-3.937zM4.5 8.064l7 3.937-7 3.937z',
                fillRule: 'evenodd',
                clipRule: 'evenodd'
            }
        ],
        [
            'path',
            {
                fill: 'url(#ABT__b)',
                d: 'm12 7.152 4.216 7.115L12 16.639l-4.216-2.371zm0 .975-3.533 5.962L12 16.077l3.533-1.988z'
            }
        ],
        [
            'defs',
            {},
            [
                [
                    'linearGradient',
                    {
                        id: 'ABT__a',
                        x1: '4.001',
                        x2: '19.999',
                        y1: '12',
                        y2: '12',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#06EFA0'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#01FAFC'
                            }
                        ]
                    ]
                ],
                [
                    'linearGradient',
                    {
                        id: 'ABT__b',
                        x1: '4',
                        x2: '19.999',
                        y1: '11.999',
                        y2: '11.999',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#06EFA0'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#01FAFC'
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
                d: 'm12 3 8 4.5v9L12 21l-8-4.5v-9zm7.25 4.64-7-3.936v7.874zm.25.423L12.5 12l7 3.937zm-.25 8.296-7-3.937v7.875zm-7.5 3.938-7-3.938 7-3.937zm0-8.72-7-3.936 7-3.937zM4.5 8.064l7 3.937-7 3.937z',
                fillRule: 'evenodd',
                clipRule: 'evenodd'
            }
        ],
        [
            'path',
            {
                fill: 'currentColor',
                d: 'm12.002 7.152 4.216 7.115L12 16.64l-4.215-2.371zm0 .975-3.533 5.962L12 16.077l3.534-1.988z'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#ABT__a)'
            },
            [
                [
                    'path',
                    {
                        fill: 'url(#ABT__b)',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#000',
                        d: 'm12 4 7.11 4v8L12 20l-7.11-4V8zm6.444 4.125-6.222-3.5v7zm.222.375L12.444 12l6.222 3.5zm-.222 7.375-6.222-3.5v7zm-6.666 3.5-6.222-3.5 6.222-3.5zm0-7.75-6.222-3.5 6.222-3.5zM5.334 8.5l6.222 3.5-6.222 3.5z',
                        fillRule: 'evenodd',
                        clipRule: 'evenodd'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#000',
                        d: 'm12.002 7.69 3.747 6.325-3.748 2.109-3.747-2.108zm0 .867-3.141 5.3 3.14 1.767 3.141-1.767z'
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
                        id: 'ABT__b',
                        x1: '4.89',
                        x2: '19.11',
                        y1: '12',
                        y2: '12',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#06EFA0'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#01FAFC'
                            }
                        ]
                    ]
                ],
                [
                    'clipPath',
                    {
                        id: 'ABT__a'
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
 * @component @name TokenABT
 * @description Web3Icon for TokenABT
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9InVybCgjQUJUX19hKSIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJtMTIgMyA4IDQuNXY5TDEyIDIxbC04LTQuNXYtOXptNy4yNSA0LjY0LTctMy45MzZ2Ny44NzR6bS4yNS40MjNMMTIuNSAxMmw3IDMuOTM3em0tLjI1IDguMjk2LTctMy45Mzd2Ny44NzV6bS03LjUgMy45MzgtNy0zLjkzOCA3LTMuOTM3em0wLTguNzItNy0zLjkzNiA3LTMuOTM3ek00LjUgOC4wNjRsNyAzLjkzNy03IDMuOTM3eiIgY2xpcC1ydWxlPSJldmVub2RkIi8+CiAgICA8cGF0aCBmaWxsPSJ1cmwoI0FCVF9fYikiIGQ9Im0xMiA3LjE1MiA0LjIxNiA3LjExNUwxMiAxNi42MzlsLTQuMjE2LTIuMzcxem0wIC45NzUtMy41MzMgNS45NjJMMTIgMTYuMDc3bDMuNTMzLTEuOTg4eiIvPgogICAgPGRlZnM+CiAgICAgICAgPGxpbmVhckdyYWRpZW50IGlkPSJBQlRfX2EiIHgxPSI0LjAwMSIgeDI9IjE5Ljk5OSIgeTE9IjEyIiB5Mj0iMTIiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iIzA2RUZBMCIvPgogICAgICAgICAgICA8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMwMUZBRkMiLz4KICAgICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iQUJUX19iIiB4MT0iNCIgeDI9IjE5Ljk5OSIgeTE9IjExLjk5OSIgeTI9IjExLjk5OSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjMDZFRkEwIi8+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzAxRkFGQyIvPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICA8L2RlZnM+Cjwvc3ZnPgo=) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0ibTEyIDMgOCA0LjV2OUwxMiAyMWwtOC00LjV2LTl6bTcuMjUgNC42NC03LTMuOTM2djcuODc0em0uMjUuNDIzTDEyLjUgMTJsNyAzLjkzN3ptLS4yNSA4LjI5Ni03LTMuOTM3djcuODc1em0tNy41IDMuOTM4LTctMy45MzggNy0zLjkzN3ptMC04LjcyLTctMy45MzYgNy0zLjkzN3pNNC41IDguMDY0bDcgMy45MzctNyAzLjkzN3oiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgogICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0ibTEyLjAwMiA3LjE1MiA0LjIxNiA3LjExNUwxMiAxNi42NGwtNC4yMTUtMi4zNzF6bTAgLjk3NS0zLjUzMyA1Ljk2MkwxMiAxNi4wNzdsMy41MzQtMS45ODh6Ii8+Cjwvc3ZnPgo=) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNBQlRfX2EpIj4KICAgICAgICA8cGF0aCBmaWxsPSJ1cmwoI0FCVF9fYikiIGQ9Ik0yNCAwSDB2MjRoMjR6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJtMTIgNCA3LjExIDR2OEwxMiAyMGwtNy4xMS00Vjh6bTYuNDQ0IDQuMTI1LTYuMjIyLTMuNXY3em0uMjIyLjM3NUwxMi40NDQgMTJsNi4yMjIgMy41em0tLjIyMiA3LjM3NS02LjIyMi0zLjV2N3ptLTYuNjY2IDMuNS02LjIyMi0zLjUgNi4yMjItMy41em0wLTcuNzUtNi4yMjItMy41IDYuMjIyLTMuNXpNNS4zMzQgOC41bDYuMjIyIDMuNS02LjIyMiAzLjV6IiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjMDAwIiBkPSJtMTIuMDAyIDcuNjkgMy43NDcgNi4zMjUtMy43NDggMi4xMDktMy43NDctMi4xMDh6bTAgLjg2Ny0zLjE0MSA1LjMgMy4xNCAxLjc2NyAzLjE0MS0xLjc2N3oiLz4KICAgIDwvZz4KICAgIDxkZWZzPgogICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iQUJUX19iIiB4MT0iNC44OSIgeDI9IjE5LjExIiB5MT0iMTIiIHkyPSIxMiIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjMDZFRkEwIi8+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzAxRkFGQyIvPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICAgICAgPGNsaXBQYXRoIGlkPSJBQlRfX2EiPgogICAgICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMCAwaDI0djI0SDB6Ii8+CiAgICAgICAgPC9jbGlwUGF0aD4KICAgIDwvZGVmcz4KPC9zdmc+Cg==)
 * @see https://web3icons.io/tokens/ABT
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenABT = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenABT', __iconNode);
;
}),
];

//# sourceMappingURL=1qqr_%40web3icons_react_dist_06o29n3._.js.map