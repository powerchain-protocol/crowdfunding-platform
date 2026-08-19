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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenNEXO.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenNEXO
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-ssr] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#3CA9E5',
                d: 'm7.671 4.502 8.817 4.961v5.063L3 6.939l4.325-2.43a.37.37 0 0 1 .346 0z'
            }
        ],
        [
            'path',
            {
                fill: '#2853C3',
                d: 'm16.496 4.4-4.499 2.53 4.499 2.531z'
            }
        ],
        [
            'path',
            {
                fill: '#1A4199',
                d: 'm16.494 4.4 4.325 2.43a.35.35 0 0 1 .173.297v9.929l-4.498-2.525z'
            }
        ],
        [
            'path',
            {
                fill: '#2853C3',
                d: 'm21 17.059-4.332 2.433a.37.37 0 0 1-.367 0L7.484 14.53V9.456z'
            }
        ],
        [
            'path',
            {
                fill: '#60BEFF',
                d: 'M3 6.93v9.93a.35.35 0 0 0 .173.31l4.325 2.43V9.463z'
            }
        ],
        [
            'path',
            {
                fill: '#3CA9E5',
                d: 'm7.499 19.593 4.499-2.53-4.499-2.539z'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#NEXO__a)'
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
                        fill: '#3CA9E5',
                        d: 'm8.152 5.336 7.837 4.41v4.5L4 7.5l3.844-2.16a.33.33 0 0 1 .308 0z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#2853C3',
                        d: 'm15.995 5.244-3.998 2.25 3.998 2.25z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#1A4199',
                        d: 'm15.995 5.244 3.845 2.16a.31.31 0 0 1 .153.264v8.826l-3.998-2.244z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#2853C3',
                        d: 'm20 16.497-3.85 2.163a.33.33 0 0 1-.326 0l-7.838-4.41V9.737z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#60BEFF',
                        d: 'M4 7.494v8.826a.31.31 0 0 0 .154.276l3.844 2.16V9.745z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#3CA9E5',
                        d: 'm7.999 18.75 3.999-2.25-3.999-2.256z'
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
                        id: 'NEXO__a'
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
 * @component @name TokenNEXO
 * @description Web3Icon for TokenNEXO
 *
 * @preview (branded, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiMzQ0E5RTUiIGQ9Im03LjY3MSA0LjUwMiA4LjgxNyA0Ljk2MXY1LjA2M0wzIDYuOTM5bDQuMzI1LTIuNDNhLjM3LjM3IDAgMCAxIC4zNDYgMHoiLz4KICAgIDxwYXRoIGZpbGw9IiMyODUzQzMiIGQ9Im0xNi40OTYgNC40LTQuNDk5IDIuNTMgNC40OTkgMi41MzF6Ii8+CiAgICA8cGF0aCBmaWxsPSIjMUE0MTk5IiBkPSJtMTYuNDk0IDQuNCA0LjMyNSAyLjQzYS4zNS4zNSAwIDAgMSAuMTczLjI5N3Y5LjkyOWwtNC40OTgtMi41MjV6Ii8+CiAgICA8cGF0aCBmaWxsPSIjMjg1M0MzIiBkPSJtMjEgMTcuMDU5LTQuMzMyIDIuNDMzYS4zNy4zNyAwIDAgMS0uMzY3IDBMNy40ODQgMTQuNTNWOS40NTZ6Ii8+CiAgICA8cGF0aCBmaWxsPSIjNjBCRUZGIiBkPSJNMyA2LjkzdjkuOTNhLjM1LjM1IDAgMCAwIC4xNzMuMzFsNC4zMjUgMi40M1Y5LjQ2M3oiLz4KICAgIDxwYXRoIGZpbGw9IiMzQ0E5RTUiIGQ9Im03LjQ5OSAxOS41OTMgNC40OTktMi41My00LjQ5OS0yLjUzOXoiLz4KPC9zdmc+Cg==) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNORVhPX19hKSI+CiAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTI0IDBIMHYyNGgyNHoiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjM0NBOUU1IiBkPSJtOC4xNTIgNS4zMzYgNy44MzcgNC40MXY0LjVMNCA3LjVsMy44NDQtMi4xNmEuMzMuMzMgMCAwIDEgLjMwOCAweiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiMyODUzQzMiIGQ9Im0xNS45OTUgNS4yNDQtMy45OTggMi4yNSAzLjk5OCAyLjI1eiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiMxQTQxOTkiIGQ9Im0xNS45OTUgNS4yNDQgMy44NDUgMi4xNmEuMzEuMzEgMCAwIDEgLjE1My4yNjR2OC44MjZsLTMuOTk4LTIuMjQ0eiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiMyODUzQzMiIGQ9Im0yMCAxNi40OTctMy44NSAyLjE2M2EuMzMuMzMgMCAwIDEtLjMyNiAwbC03LjgzOC00LjQxVjkuNzM3eiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiM2MEJFRkYiIGQ9Ik00IDcuNDk0djguODI2YS4zMS4zMSAwIDAgMCAuMTU0LjI3NmwzLjg0NCAyLjE2VjkuNzQ1eiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiMzQ0E5RTUiIGQ9Im03Ljk5OSAxOC43NSAzLjk5OS0yLjI1LTMuOTk5LTIuMjU2eiIvPgogICAgPC9nPgogICAgPGRlZnM+CiAgICAgICAgPGNsaXBQYXRoIGlkPSJORVhPX19hIj4KICAgICAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTAgMGgyNHYyNEgweiIvPgogICAgICAgIDwvY2xpcFBhdGg+CiAgICA8L2RlZnM+Cjwvc3ZnPgo=)
 * @see https://web3icons.io/tokens/NEXO
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenNEXO = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenNEXO', __iconNode);
;
}),
];

//# sourceMappingURL=1qqr_%40web3icons_react_dist_0_c4ags._.js.map