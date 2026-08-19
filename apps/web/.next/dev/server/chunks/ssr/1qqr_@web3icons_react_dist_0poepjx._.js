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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenLYXE.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenLYXE
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-ssr] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: 'url(#LYXE__a)',
                d: 'm12 3 8 4.438v9.125L12 21l-8-4.438V7.438z'
            }
        ],
        [
            'path',
            {
                fill: '#fff',
                d: 'M14.25 8H9.775L7.5 12h4.576z'
            }
        ],
        [
            'path',
            {
                fill: '#DADBDA',
                d: 'm9.807 16-2.283-4h4.526l2.244 4z'
            }
        ],
        [
            'path',
            {
                fill: '#EFEEEE',
                d: 'm14.292 15.998-2.244-3.992L14.25 8l2.248 4z'
            }
        ],
        [
            'defs',
            {},
            [
                [
                    'linearGradient',
                    {
                        id: 'LYXE__a',
                        x1: '8.498',
                        x2: '16.127',
                        y1: '5.003',
                        y2: '18.841',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#E59F9A'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#6A3FBA'
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
                d: 'm12 3 8 4.438v9.125L12 21l-8-4.438V7.438z'
            }
        ],
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M14.25 8H9.775L7.5 12h4.576zm-4.443 8-2.283-4h4.526l2.244 4z'
            }
        ],
        [
            'path',
            {
                fill: 'currentColor',
                d: 'm14.292 15.998-2.244-3.992L14.25 8l2.248 4z'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#LYXE__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#000',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: 'url(#LYXE__b)',
                        d: 'm12 4 7.11 3.944v8.111L12 20l-7.111-3.945v-8.11z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M14 8.444h-3.978L8 11.999h4.068z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#DADBDA',
                        d: 'M10.05 15.556 8.021 12h4.024l1.994 3.556z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#EFEEEE',
                        d: 'm14.038 15.553-1.995-3.548 1.956-3.561 1.999 3.555z'
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
                        id: 'LYXE__b',
                        x1: '8.886',
                        x2: '15.668',
                        y1: '5.78',
                        y2: '18.081',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#E59F9A'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#6A3FBA'
                            }
                        ]
                    ]
                ],
                [
                    'clipPath',
                    {
                        id: 'LYXE__a'
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
 * @component @name TokenLYXE
 * @description Web3Icon for TokenLYXE
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9InVybCgjTFlYRV9fYSkiIGQ9Im0xMiAzIDggNC40Mzh2OS4xMjVMMTIgMjFsLTgtNC40MzhWNy40Mzh6Ii8+CiAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTQuMjUgOEg5Ljc3NUw3LjUgMTJoNC41NzZ6Ii8+CiAgICA8cGF0aCBmaWxsPSIjREFEQkRBIiBkPSJtOS44MDcgMTYtMi4yODMtNGg0LjUyNmwyLjI0NCA0eiIvPgogICAgPHBhdGggZmlsbD0iI0VGRUVFRSIgZD0ibTE0LjI5MiAxNS45OTgtMi4yNDQtMy45OTJMMTQuMjUgOGwyLjI0OCA0eiIvPgogICAgPGRlZnM+CiAgICAgICAgPGxpbmVhckdyYWRpZW50IGlkPSJMWVhFX19hIiB4MT0iOC40OTgiIHgyPSIxNi4xMjciIHkxPSI1LjAwMyIgeTI9IjE4Ljg0MSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjRTU5RjlBIi8+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzZBM0ZCQSIvPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICA8L2RlZnM+Cjwvc3ZnPgo=) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Im0xMiAzIDggNC40Mzh2OS4xMjVMMTIgMjFsLTgtNC40MzhWNy40Mzh6Ii8+CiAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTQuMjUgOEg5Ljc3NUw3LjUgMTJoNC41NzZ6bS00LjQ0MyA4LTIuMjgzLTRoNC41MjZsMi4yNDQgNHoiLz4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Im0xNC4yOTIgMTUuOTk4LTIuMjQ0LTMuOTkyTDE0LjI1IDhsMi4yNDggNHoiLz4KPC9zdmc+Cg==) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNMWVhFX19hKSI+CiAgICAgICAgPHBhdGggZmlsbD0iIzAwMCIgZD0iTTI0IDBIMHYyNGgyNHoiLz4KICAgICAgICA8cGF0aCBmaWxsPSJ1cmwoI0xZWEVfX2IpIiBkPSJtMTIgNCA3LjExIDMuOTQ0djguMTExTDEyIDIwbC03LjExMS0zLjk0NXYtOC4xMXoiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTQgOC40NDRoLTMuOTc4TDggMTEuOTk5aDQuMDY4eiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNEQURCREEiIGQ9Ik0xMC4wNSAxNS41NTYgOC4wMjEgMTJoNC4wMjRsMS45OTQgMy41NTZ6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0iI0VGRUVFRSIgZD0ibTE0LjAzOCAxNS41NTMtMS45OTUtMy41NDggMS45NTYtMy41NjEgMS45OTkgMy41NTV6Ii8+CiAgICA8L2c+CiAgICA8ZGVmcz4KICAgICAgICA8bGluZWFyR3JhZGllbnQgaWQ9IkxZWEVfX2IiIHgxPSI4Ljg4NiIgeDI9IjE1LjY2OCIgeTE9IjUuNzgiIHkyPSIxOC4wODEiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iI0U1OUY5QSIvPgogICAgICAgICAgICA8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiM2QTNGQkEiLz4KICAgICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgICAgIDxjbGlwUGF0aCBpZD0iTFlYRV9fYSI+CiAgICAgICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0wIDBoMjR2MjRIMHoiLz4KICAgICAgICA8L2NsaXBQYXRoPgogICAgPC9kZWZzPgo8L3N2Zz4K)
 * @see https://web3icons.io/tokens/LYXE
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenLYXE = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenLYXE', __iconNode);
;
}),
];

//# sourceMappingURL=1qqr_%40web3icons_react_dist_0poepjx._.js.map