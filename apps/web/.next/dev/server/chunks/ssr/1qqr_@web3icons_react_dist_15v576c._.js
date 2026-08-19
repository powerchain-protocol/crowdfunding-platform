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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenFRM.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenFRM
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-ssr] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: 'url(#FRM__a)',
                d: 'm4.323 16.24.794.461.794-.466v-3.44L17.76 6.202l-1.588-1.07-10.26 5.522V8.432l8.671-4.363L12.995 3 4.323 7.394z'
            }
        ],
        [
            'path',
            {
                fill: 'url(#FRM__b)',
                d: 'm16.5 8.198-9 5.082v2.41l9-5.348z'
            }
        ],
        [
            'path',
            {
                fill: '#CCA362',
                d: 'm8.56 18.899-1.589-1.07 9.53-5.882v2.145l-7.942 4.817z'
            }
        ],
        [
            'path',
            {
                fill: '#CCA362',
                d: 'm18.882 7.13.794.508v8.587L11.63 21l-1.588-1.07 8.047-4.775V7.66l.794-.535z'
            }
        ],
        [
            'defs',
            {},
            [
                [
                    'linearGradient',
                    {
                        id: 'FRM__a',
                        x1: '3.537',
                        x2: '18.864',
                        y1: '16.055',
                        y2: '7.509',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                offset: '.05',
                                stopColor: '#C5C3C5'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '.3',
                                stopColor: '#F2F2F2'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '.9',
                                stopColor: '#BEBBBE'
                            }
                        ]
                    ]
                ],
                [
                    'linearGradient',
                    {
                        id: 'FRM__b',
                        x1: '2.029',
                        x2: '25.758',
                        y1: '18.379',
                        y2: '10.902',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                offset: '.2',
                                stopColor: '#CAA467'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '.62',
                                stopColor: '#ECC77C'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '.92',
                                stopColor: '#CCA362'
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
                d: 'm4.324 16.24.794.461.794-.466v-3.44l11.849-6.592-1.588-1.07-10.26 5.522V8.432l8.671-4.363L12.996 3 4.324 7.394z'
            }
        ],
        [
            'path',
            {
                fill: 'currentColor',
                d: 'm16.5 8.198-9 5.082v2.41l9-5.348zM8.558 18.899l-1.588-1.07 9.53-5.882v2.145l-7.942 4.817z'
            }
        ],
        [
            'path',
            {
                fill: 'currentColor',
                d: 'm18.882 7.13.794.508v8.587L11.629 21l-1.588-1.07 8.046-4.775V7.66l.795-.535z'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#FRM__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#CCA362',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'm5.177 15.77.706.409.706-.414v-3.06l10.532-5.858-1.412-.95-9.12 4.908V8.828l7.708-3.877L12.885 4 5.178 7.906z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'm16 8.62-8 4.518v2.14l8-4.752zm-7.059 9.512-1.412-.95L16 11.953v1.906l-7.058 4.283z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'm18.117 7.67.706.452v7.633L11.67 20l-1.412-.95 7.153-4.245V8.14l.706-.475z'
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
                        id: 'FRM__a'
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
 * @component @name TokenFRM
 * @description Web3Icon for TokenFRM
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9InVybCgjRlJNX19hKSIgZD0ibTQuMzIzIDE2LjI0Ljc5NC40NjEuNzk0LS40NjZ2LTMuNDRMMTcuNzYgNi4yMDJsLTEuNTg4LTEuMDctMTAuMjYgNS41MjJWOC40MzJsOC42NzEtNC4zNjNMMTIuOTk1IDMgNC4zMjMgNy4zOTR6Ii8+CiAgICA8cGF0aCBmaWxsPSJ1cmwoI0ZSTV9fYikiIGQ9Im0xNi41IDguMTk4LTkgNS4wODJ2Mi40MWw5LTUuMzQ4eiIvPgogICAgPHBhdGggZmlsbD0iI0NDQTM2MiIgZD0ibTguNTYgMTguODk5LTEuNTg5LTEuMDcgOS41My01Ljg4MnYyLjE0NWwtNy45NDIgNC44MTd6Ii8+CiAgICA8cGF0aCBmaWxsPSIjQ0NBMzYyIiBkPSJtMTguODgyIDcuMTMuNzk0LjUwOHY4LjU4N0wxMS42MyAyMWwtMS41ODgtMS4wNyA4LjA0Ny00Ljc3NVY3LjY2bC43OTQtLjUzNXoiLz4KICAgIDxkZWZzPgogICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iRlJNX19hIiB4MT0iMy41MzciIHgyPSIxOC44NjQiIHkxPSIxNi4wNTUiIHkyPSI3LjUwOSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgICAgICAgICA8c3RvcCBvZmZzZXQ9Ii4wNSIgc3RvcC1jb2xvcj0iI0M1QzNDNSIvPgogICAgICAgICAgICA8c3RvcCBvZmZzZXQ9Ii4zIiBzdG9wLWNvbG9yPSIjRjJGMkYyIi8+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iLjkiIHN0b3AtY29sb3I9IiNCRUJCQkUiLz4KICAgICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iRlJNX19iIiB4MT0iMi4wMjkiIHgyPSIyNS43NTgiIHkxPSIxOC4zNzkiIHkyPSIxMC45MDIiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIuMiIgc3RvcC1jb2xvcj0iI0NBQTQ2NyIvPgogICAgICAgICAgICA8c3RvcCBvZmZzZXQ9Ii42MiIgc3RvcC1jb2xvcj0iI0VDQzc3QyIvPgogICAgICAgICAgICA8c3RvcCBvZmZzZXQ9Ii45MiIgc3RvcC1jb2xvcj0iI0NDQTM2MiIvPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICA8L2RlZnM+Cjwvc3ZnPgo=) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Im00LjMyNCAxNi4yNC43OTQuNDYxLjc5NC0uNDY2di0zLjQ0bDExLjg0OS02LjU5Mi0xLjU4OC0xLjA3LTEwLjI2IDUuNTIyVjguNDMybDguNjcxLTQuMzYzTDEyLjk5NiAzIDQuMzI0IDcuMzk0eiIvPgogICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0ibTE2LjUgOC4xOTgtOSA1LjA4MnYyLjQxbDktNS4zNDh6TTguNTU4IDE4Ljg5OWwtMS41ODgtMS4wNyA5LjUzLTUuODgydjIuMTQ1bC03Ljk0MiA0LjgxN3oiLz4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Im0xOC44ODIgNy4xMy43OTQuNTA4djguNTg3TDExLjYyOSAyMWwtMS41ODgtMS4wNyA4LjA0Ni00Ljc3NVY3LjY2bC43OTUtLjUzNXoiLz4KPC9zdmc+Cg==) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNGUk1fX2EpIj4KICAgICAgICA8cGF0aCBmaWxsPSIjQ0NBMzYyIiBkPSJNMjQgMEgwdjI0aDI0eiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Im01LjE3NyAxNS43Ny43MDYuNDA5LjcwNi0uNDE0di0zLjA2bDEwLjUzMi01Ljg1OC0xLjQxMi0uOTUtOS4xMiA0LjkwOFY4LjgyOGw3LjcwOC0zLjg3N0wxMi44ODUgNCA1LjE3OCA3LjkwNnoiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJtMTYgOC42Mi04IDQuNTE4djIuMTRsOC00Ljc1MnptLTcuMDU5IDkuNTEyLTEuNDEyLS45NUwxNiAxMS45NTN2MS45MDZsLTcuMDU4IDQuMjgzeiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Im0xOC4xMTcgNy42Ny43MDYuNDUydjcuNjMzTDExLjY3IDIwbC0xLjQxMi0uOTUgNy4xNTMtNC4yNDVWOC4xNGwuNzA2LS40NzV6Ii8+CiAgICA8L2c+CiAgICA8ZGVmcz4KICAgICAgICA8Y2xpcFBhdGggaWQ9IkZSTV9fYSI+CiAgICAgICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0wIDBoMjR2MjRIMHoiLz4KICAgICAgICA8L2NsaXBQYXRoPgogICAgPC9kZWZzPgo8L3N2Zz4K)
 * @see https://web3icons.io/tokens/FRM
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenFRM = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenFRM', __iconNode);
;
}),
];

//# sourceMappingURL=1qqr_%40web3icons_react_dist_15v576c._.js.map