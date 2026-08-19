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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenLGCY.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenLGCY
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-ssr] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#fff',
                d: 'M11.28 3.012a.25.25 0 0 1 .205.247v17.487a.25.25 0 0 1-.245.252.26.26 0 0 1-.125-.026L4.431 17.79a.247.247 0 0 1-.123-.324l6.684-14.314a.26.26 0 0 1 .293-.144zM5.454 16.226l5.517-5.918V4.416L5.454 16.22zm5.517-5.167-6.005 6.427 6.005 2.864zm1.748-8.047a.25.25 0 0 0-.205.247v17.487c0 .087.046.17.123.216a.25.25 0 0 0 .247.01l6.684-3.183c.124-.056.18-.205.124-.324L13.007 3.151a.26.26 0 0 0-.293-.144zm5.826 13.214-5.517-5.918V4.416l5.517 11.805zm-5.517-5.167 6.006 6.427-6.006 2.864z'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M11.28 3.012a.25.25 0 0 1 .205.247v17.487a.25.25 0 0 1-.245.252.26.26 0 0 1-.125-.026L4.431 17.79a.247.247 0 0 1-.123-.324l6.684-14.314a.26.26 0 0 1 .293-.144zM5.454 16.226l5.517-5.918V4.416L5.454 16.22zm5.517-5.167-6.005 6.427 6.005 2.864zm1.748-8.047a.25.25 0 0 0-.205.247v17.487c0 .087.046.17.123.216a.25.25 0 0 0 .247.01l6.684-3.183c.124-.056.18-.205.124-.324L13.007 3.151a.26.26 0 0 0-.293-.144zm5.826 13.214-5.517-5.918V4.416l5.517 11.805zm-5.517-5.167 6.006 6.427-6.006 2.864z'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#LGCY__a)'
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
                        fill: '#fff',
                        d: 'M11.36 4.01c.11.024.183.115.183.22v15.544a.224.224 0 0 1-.219.224.23.23 0 0 1-.11-.023l-5.942-2.829a.22.22 0 0 1-.11-.288l5.942-12.724a.23.23 0 0 1 .26-.128zM6.18 15.758l4.904-5.26V5.257L6.181 15.752zm4.904-4.594-5.338 5.714 5.338 2.545zm1.554-7.152a.224.224 0 0 0-.182.22v15.543c0 .078.04.15.11.192a.22.22 0 0 0 .219.01l5.941-2.83c.11-.05.16-.183.11-.288L12.895 4.134a.23.23 0 0 0-.26-.128zm5.179 11.746-4.904-5.26V5.257l4.904 10.494zm-4.904-4.594 5.338 5.714-5.338 2.545z'
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
                        id: 'LGCY__a'
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
 * @component @name TokenLGCY
 * @description Web3Icon for TokenLGCY
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xMS4yOCAzLjAxMmEuMjUuMjUgMCAwIDEgLjIwNS4yNDd2MTcuNDg3YS4yNS4yNSAwIDAgMS0uMjQ1LjI1Mi4yNi4yNiAwIDAgMS0uMTI1LS4wMjZMNC40MzEgMTcuNzlhLjI0Ny4yNDcgMCAwIDEtLjEyMy0uMzI0bDYuNjg0LTE0LjMxNGEuMjYuMjYgMCAwIDEgLjI5My0uMTQ0ek01LjQ1NCAxNi4yMjZsNS41MTctNS45MThWNC40MTZMNS40NTQgMTYuMjJ6bTUuNTE3LTUuMTY3LTYuMDA1IDYuNDI3IDYuMDA1IDIuODY0em0xLjc0OC04LjA0N2EuMjUuMjUgMCAwIDAtLjIwNS4yNDd2MTcuNDg3YzAgLjA4Ny4wNDYuMTcuMTIzLjIxNmEuMjUuMjUgMCAwIDAgLjI0Ny4wMWw2LjY4NC0zLjE4M2MuMTI0LS4wNTYuMTgtLjIwNS4xMjQtLjMyNEwxMy4wMDcgMy4xNTFhLjI2LjI2IDAgMCAwLS4yOTMtLjE0NHptNS44MjYgMTMuMjE0LTUuNTE3LTUuOTE4VjQuNDE2bDUuNTE3IDExLjgwNXptLTUuNTE3LTUuMTY3IDYuMDA2IDYuNDI3LTYuMDA2IDIuODY0eiIvPgo8L3N2Zz4K) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xMS4yOCAzLjAxMmEuMjUuMjUgMCAwIDEgLjIwNS4yNDd2MTcuNDg3YS4yNS4yNSAwIDAgMS0uMjQ1LjI1Mi4yNi4yNiAwIDAgMS0uMTI1LS4wMjZMNC40MzEgMTcuNzlhLjI0Ny4yNDcgMCAwIDEtLjEyMy0uMzI0bDYuNjg0LTE0LjMxNGEuMjYuMjYgMCAwIDEgLjI5My0uMTQ0ek01LjQ1NCAxNi4yMjZsNS41MTctNS45MThWNC40MTZMNS40NTQgMTYuMjJ6bTUuNTE3LTUuMTY3LTYuMDA1IDYuNDI3IDYuMDA1IDIuODY0em0xLjc0OC04LjA0N2EuMjUuMjUgMCAwIDAtLjIwNS4yNDd2MTcuNDg3YzAgLjA4Ny4wNDYuMTcuMTIzLjIxNmEuMjUuMjUgMCAwIDAgLjI0Ny4wMWw2LjY4NC0zLjE4M2MuMTI0LS4wNTYuMTgtLjIwNS4xMjQtLjMyNEwxMy4wMDcgMy4xNTFhLjI2LjI2IDAgMCAwLS4yOTMtLjE0NHptNS44MjYgMTMuMjE0LTUuNTE3LTUuOTE4VjQuNDE2bDUuNTE3IDExLjgwNXptLTUuNTE3LTUuMTY3IDYuMDA2IDYuNDI3LTYuMDA2IDIuODY0eiIvPgo8L3N2Zz4K) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNMR0NZX19hKSI+CiAgICAgICAgPHBhdGggZmlsbD0iIzAwMCIgZD0iTTI0IDBIMHYyNGgyNHoiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTEuMzYgNC4wMWMuMTEuMDI0LjE4My4xMTUuMTgzLjIydjE1LjU0NGEuMjI0LjIyNCAwIDAgMS0uMjE5LjIyNC4yMy4yMyAwIDAgMS0uMTEtLjAyM2wtNS45NDItMi44MjlhLjIyLjIyIDAgMCAxLS4xMS0uMjg4bDUuOTQyLTEyLjcyNGEuMjMuMjMgMCAwIDEgLjI2LS4xMjh6TTYuMTggMTUuNzU4bDQuOTA0LTUuMjZWNS4yNTdMNi4xODEgMTUuNzUyem00LjkwNC00LjU5NC01LjMzOCA1LjcxNCA1LjMzOCAyLjU0NXptMS41NTQtNy4xNTJhLjIyNC4yMjQgMCAwIDAtLjE4Mi4yMnYxNS41NDNjMCAuMDc4LjA0LjE1LjExLjE5MmEuMjIuMjIgMCAwIDAgLjIxOS4wMWw1Ljk0MS0yLjgzYy4xMS0uMDUuMTYtLjE4My4xMS0uMjg4TDEyLjg5NSA0LjEzNGEuMjMuMjMgMCAwIDAtLjI2LS4xMjh6bTUuMTc5IDExLjc0Ni00LjkwNC01LjI2VjUuMjU3bDQuOTA0IDEwLjQ5NHptLTQuOTA0LTQuNTk0IDUuMzM4IDUuNzE0LTUuMzM4IDIuNTQ1eiIvPgogICAgPC9nPgogICAgPGRlZnM+CiAgICAgICAgPGNsaXBQYXRoIGlkPSJMR0NZX19hIj4KICAgICAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTAgMGgyNHYyNEgweiIvPgogICAgICAgIDwvY2xpcFBhdGg+CiAgICA8L2RlZnM+Cjwvc3ZnPgo=)
 * @see https://web3icons.io/tokens/LGCY
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenLGCY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenLGCY', __iconNode);
;
}),
];

//# sourceMappingURL=1qqr_%40web3icons_react_dist_08u5zwu._.js.map