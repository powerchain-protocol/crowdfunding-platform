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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenGFT.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenGFT
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-ssr] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#DFF8DA',
                d: 'm12 3.895 7.205 4.05v8.11l-7.2 4.05-7.21-4.05v-8.11L12 3.9z'
            }
        ],
        [
            'path',
            {
                fill: '#3B896A',
                d: 'm6.49 12.745-2.15-2.46 3.816-.72z'
            }
        ],
        [
            'path',
            {
                fill: '#4ED9AB',
                d: 'M8 17.8v-5.665l4.185-7.455 3.55 6.95z'
            }
        ],
        [
            'path',
            {
                fill: '#3B896A',
                d: 'm16.795 17.916-4.69-2.63 3.79-2.89z'
            }
        ],
        [
            'path',
            {
                fill: '#4CDAC7',
                d: 'M16.045 11.345 14.6 8.52l4.28.915z'
            }
        ],
        [
            'path',
            {
                fill: '#4ED9AB',
                d: 'M7.35 11.71 5.2 9.25l3.816-.72z'
            }
        ],
        [
            'path',
            {
                fill: '#4EDBC8',
                d: 'M20 7.5 12 3 4 7.5v9l8 4.5 8-4.5zm-1 .545-7-3.96-7 3.96v7.905l7 3.96 7-3.96z',
                fillRule: 'evenodd',
                clipRule: 'evenodd'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#GFT__a)'
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
                        fill: '#DFF8DA',
                        d: 'm12 4.795 6.405 3.6v7.209l-6.4 3.6-6.41-3.6v-7.21L12 4.8z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#3B896A',
                        d: 'm7.103 12.663-1.911-2.187 3.39-.64z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#4ED9AB',
                        d: 'M8.444 17.155V12.12l3.72-6.627 3.156 6.178z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#3B896A',
                        d: 'm16.262 17.258-4.168-2.337 3.369-2.57z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#4CDAC7',
                        d: 'm15.595 11.417-1.284-2.51 3.804.813z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#4ED9AB',
                        d: 'm7.867 11.743-1.91-2.187 3.39-.64z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#4EDBC8',
                        d: 'M19.111 8 12 4 4.889 8v8L12 20l7.111-4zm-.889.484L12 4.964l-6.222 3.52v7.027L12 19.031l6.222-3.52z',
                        fillRule: 'evenodd',
                        clipRule: 'evenodd'
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
                        id: 'GFT__a'
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
 * @component @name TokenGFT
 * @description Web3Icon for TokenGFT
 *
 * @preview (branded, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNERkY4REEiIGQ9Im0xMiAzLjg5NSA3LjIwNSA0LjA1djguMTFsLTcuMiA0LjA1LTcuMjEtNC4wNXYtOC4xMUwxMiAzLjl6Ii8+CiAgICA8cGF0aCBmaWxsPSIjM0I4OTZBIiBkPSJtNi40OSAxMi43NDUtMi4xNS0yLjQ2IDMuODE2LS43MnoiLz4KICAgIDxwYXRoIGZpbGw9IiM0RUQ5QUIiIGQ9Ik04IDE3Ljh2LTUuNjY1bDQuMTg1LTcuNDU1IDMuNTUgNi45NXoiLz4KICAgIDxwYXRoIGZpbGw9IiMzQjg5NkEiIGQ9Im0xNi43OTUgMTcuOTE2LTQuNjktMi42MyAzLjc5LTIuODl6Ii8+CiAgICA8cGF0aCBmaWxsPSIjNENEQUM3IiBkPSJNMTYuMDQ1IDExLjM0NSAxNC42IDguNTJsNC4yOC45MTV6Ii8+CiAgICA8cGF0aCBmaWxsPSIjNEVEOUFCIiBkPSJNNy4zNSAxMS43MSA1LjIgOS4yNWwzLjgxNi0uNzJ6Ii8+CiAgICA8cGF0aCBmaWxsPSIjNEVEQkM4IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yMCA3LjUgMTIgMyA0IDcuNXY5bDggNC41IDgtNC41em0tMSAuNTQ1LTctMy45Ni03IDMuOTZ2Ny45MDVsNyAzLjk2IDctMy45NnoiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4K) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNHRlRfX2EpIj4KICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMjQgMEgwdjI0aDI0eiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNERkY4REEiIGQ9Im0xMiA0Ljc5NSA2LjQwNSAzLjZ2Ny4yMDlsLTYuNCAzLjYtNi40MS0zLjZ2LTcuMjFMMTIgNC44eiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiMzQjg5NkEiIGQ9Im03LjEwMyAxMi42NjMtMS45MTEtMi4xODcgMy4zOS0uNjR6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0iIzRFRDlBQiIgZD0iTTguNDQ0IDE3LjE1NVYxMi4xMmwzLjcyLTYuNjI3IDMuMTU2IDYuMTc4eiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiMzQjg5NkEiIGQ9Im0xNi4yNjIgMTcuMjU4LTQuMTY4LTIuMzM3IDMuMzY5LTIuNTd6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0iIzRDREFDNyIgZD0ibTE1LjU5NSAxMS40MTctMS4yODQtMi41MSAzLjgwNC44MTN6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0iIzRFRDlBQiIgZD0ibTcuODY3IDExLjc0My0xLjkxLTIuMTg3IDMuMzktLjY0eiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiM0RURCQzgiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTE5LjExMSA4IDEyIDQgNC44ODkgOHY4TDEyIDIwbDcuMTExLTR6bS0uODg5LjQ4NEwxMiA0Ljk2NGwtNi4yMjIgMy41MnY3LjAyN0wxMiAxOS4wMzFsNi4yMjItMy41MnoiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgogICAgPC9nPgogICAgPGRlZnM+CiAgICAgICAgPGNsaXBQYXRoIGlkPSJHRlRfX2EiPgogICAgICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMCAwaDI0djI0SDB6Ii8+CiAgICAgICAgPC9jbGlwUGF0aD4KICAgIDwvZGVmcz4KPC9zdmc+Cg==)
 * @see https://web3icons.io/tokens/GFT
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenGFT = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenGFT', __iconNode);
;
}),
];

//# sourceMappingURL=1qqr_%40web3icons_react_dist_01uub7o._.js.map