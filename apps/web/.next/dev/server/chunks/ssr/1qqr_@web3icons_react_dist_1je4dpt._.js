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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenVAB.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenVAB
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-ssr] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: 'url(#VAB__a)',
                d: 'M13.233 19.463a1.006 1.006 0 0 1-1.71 0L3.134 5.49c-.381-.635.095-1.429.858-1.429h15.026c1.535 0 2.482 1.604 1.704 2.869l-1.826 2.98c-.709 1.159-1.932 1.561-3.334 1.561H9.85a.52.52 0 0 0-.498.53c.01.317.265.529.498.529h4.144a1.927 1.927 0 0 1 1.64 2.927z'
            }
        ],
        [
            'defs',
            {},
            [
                [
                    'linearGradient',
                    {
                        id: 'VAB__a',
                        x1: '5.384',
                        x2: '12.518',
                        y1: '5.914',
                        y2: '19.151',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#470180'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '.82',
                                stopColor: '#EF62C9'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#FFCCF7'
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
                d: 'M13.233 19.463a1.006 1.006 0 0 1-1.71 0L3.134 5.49c-.381-.635.095-1.429.858-1.429h15.026c1.535 0 2.482 1.604 1.704 2.869l-1.826 2.98c-.709 1.159-1.932 1.561-3.334 1.561H9.85a.52.52 0 0 0-.498.53c.01.317.265.529.498.529h4.144a1.927 1.927 0 0 1 1.64 2.927z'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#VAB__a)'
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
                        fill: 'url(#VAB__b)',
                        d: 'M13.096 18.634a.894.894 0 0 1-1.52 0L4.12 6.214c-.339-.565.085-1.27.762-1.27h13.357c1.364 0 2.207 1.425 1.515 2.55l-1.623 2.648c-.63 1.03-1.717 1.388-2.964 1.388H10.09a.46.46 0 0 0-.443.47c.01.283.236.47.443.47h3.683a1.711 1.711 0 0 1 1.459 2.603z'
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
                        id: 'VAB__b',
                        x1: '6.119',
                        x2: '12.461',
                        y1: '6.59',
                        y2: '18.357',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#470180'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '.82',
                                stopColor: '#EF62C9'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#FFCCF7'
                            }
                        ]
                    ]
                ],
                [
                    'clipPath',
                    {
                        id: 'VAB__a'
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
 * @component @name TokenVAB
 * @description Web3Icon for TokenVAB
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9InVybCgjVkFCX19hKSIgZD0iTTEzLjIzMyAxOS40NjNhMS4wMDYgMS4wMDYgMCAwIDEtMS43MSAwTDMuMTM0IDUuNDljLS4zODEtLjYzNS4wOTUtMS40MjkuODU4LTEuNDI5aDE1LjAyNmMxLjUzNSAwIDIuNDgyIDEuNjA0IDEuNzA0IDIuODY5bC0xLjgyNiAyLjk4Yy0uNzA5IDEuMTU5LTEuOTMyIDEuNTYxLTMuMzM0IDEuNTYxSDkuODVhLjUyLjUyIDAgMCAwLS40OTguNTNjLjAxLjMxNy4yNjUuNTI5LjQ5OC41MjloNC4xNDRhMS45MjcgMS45MjcgMCAwIDEgMS42NCAyLjkyN3oiLz4KICAgIDxkZWZzPgogICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iVkFCX19hIiB4MT0iNS4zODQiIHgyPSIxMi41MTgiIHkxPSI1LjkxNCIgeTI9IjE5LjE1MSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjNDcwMTgwIi8+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iLjgyIiBzdG9wLWNvbG9yPSIjRUY2MkM5Ii8+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI0ZGQ0NGNyIvPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICA8L2RlZnM+Cjwvc3ZnPgo=) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xMy4yMzMgMTkuNDYzYTEuMDA2IDEuMDA2IDAgMCAxLTEuNzEgMEwzLjEzNCA1LjQ5Yy0uMzgxLS42MzUuMDk1LTEuNDI5Ljg1OC0xLjQyOWgxNS4wMjZjMS41MzUgMCAyLjQ4MiAxLjYwNCAxLjcwNCAyLjg2OWwtMS44MjYgMi45OGMtLjcwOSAxLjE1OS0xLjkzMiAxLjU2MS0zLjMzNCAxLjU2MUg5Ljg1YS41Mi41MiAwIDAgMC0uNDk4LjUzYy4wMS4zMTcuMjY1LjUyOS40OTguNTI5aDQuMTQ0YTEuOTI3IDEuOTI3IDAgMCAxIDEuNjQgMi45Mjd6Ii8+Cjwvc3ZnPgo=) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNWQUJfX2EpIj4KICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMjQgMEgwdjI0aDI0eiIvPgogICAgICAgIDxwYXRoIGZpbGw9InVybCgjVkFCX19iKSIgZD0iTTEzLjA5NiAxOC42MzRhLjg5NC44OTQgMCAwIDEtMS41MiAwTDQuMTIgNi4yMTRjLS4zMzktLjU2NS4wODUtMS4yNy43NjItMS4yN2gxMy4zNTdjMS4zNjQgMCAyLjIwNyAxLjQyNSAxLjUxNSAyLjU1bC0xLjYyMyAyLjY0OGMtLjYzIDEuMDMtMS43MTcgMS4zODgtMi45NjQgMS4zODhIMTAuMDlhLjQ2LjQ2IDAgMCAwLS40NDMuNDdjLjAxLjI4My4yMzYuNDcuNDQzLjQ3aDMuNjgzYTEuNzExIDEuNzExIDAgMCAxIDEuNDU5IDIuNjAzeiIvPgogICAgPC9nPgogICAgPGRlZnM+CiAgICAgICAgPGxpbmVhckdyYWRpZW50IGlkPSJWQUJfX2IiIHgxPSI2LjExOSIgeDI9IjEyLjQ2MSIgeTE9IjYuNTkiIHkyPSIxOC4zNTciIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iIzQ3MDE4MCIvPgogICAgICAgICAgICA8c3RvcCBvZmZzZXQ9Ii44MiIgc3RvcC1jb2xvcj0iI0VGNjJDOSIvPgogICAgICAgICAgICA8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNGRkNDRjciLz4KICAgICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgICAgIDxjbGlwUGF0aCBpZD0iVkFCX19hIj4KICAgICAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTAgMGgyNHYyNEgweiIvPgogICAgICAgIDwvY2xpcFBhdGg+CiAgICA8L2RlZnM+Cjwvc3ZnPgo=)
 * @see https://web3icons.io/tokens/VAB
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenVAB = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenVAB', __iconNode);
;
}),
];

//# sourceMappingURL=1qqr_%40web3icons_react_dist_1je4dpt._.js.map