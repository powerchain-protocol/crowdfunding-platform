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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenGHO.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenGHO
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-ssr] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#C9B4F9',
                d: 'M14.724 12h3.486L21 16.8v3H10.362C6.294 19.8 3 16.434 3 12.276v-.552C3 7.56 6.3 4.2 10.362 4.2h4.47l1.728 3h-5.838a4.74 4.74 0 0 0-4.68 4.788c0 2.64 2.094 4.812 4.68 4.812h6.792zM11.4 9.9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0 4.2a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M14.724 12h3.486L21 16.8v3H10.362C6.294 19.8 3 16.434 3 12.276v-.552C3 7.56 6.3 4.2 10.362 4.2h4.47l1.728 3h-5.838a4.74 4.74 0 0 0-4.68 4.788c0 2.64 2.094 4.812 4.68 4.812h6.792zM11.4 9.9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0 4.2a1.5 1.5 0 1 1-3.001 0 1.5 1.5 0 0 1 3.001 0'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#GHO__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#C9B4F9',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#000',
                        d: 'M14.421 12h3.1L20 16.267v2.666h-9.456C6.928 18.933 4 15.941 4 12.245v-.49c0-3.702 2.933-6.689 6.544-6.689h3.973l1.536 2.667h-5.189a4.213 4.213 0 0 0-4.16 4.256c0 2.347 1.861 4.278 4.16 4.278h6.037zm-2.954-1.867a1.334 1.334 0 1 1-2.668 0 1.334 1.334 0 0 1 2.668 0m0 3.733a1.334 1.334 0 1 1-2.668 0 1.334 1.334 0 0 1 2.668 0'
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
                        id: 'GHO__a'
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
 * @component @name TokenGHO
 * @description Web3Icon for TokenGHO
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNDOUI0RjkiIGQ9Ik0xNC43MjQgMTJoMy40ODZMMjEgMTYuOHYzSDEwLjM2MkM2LjI5NCAxOS44IDMgMTYuNDM0IDMgMTIuMjc2di0uNTUyQzMgNy41NiA2LjMgNC4yIDEwLjM2MiA0LjJoNC40N2wxLjcyOCAzaC01LjgzOGE0Ljc0IDQuNzQgMCAwIDAtNC42OCA0Ljc4OGMwIDIuNjQgMi4wOTQgNC44MTIgNC42OCA0LjgxMmg2Ljc5MnpNMTEuNCA5LjlhMS41IDEuNSAwIDEgMS0zIDAgMS41IDEuNSAwIDAgMSAzIDBtMCA0LjJhMS41IDEuNSAwIDEgMS0zIDAgMS41IDEuNSAwIDAgMSAzIDAiLz4KPC9zdmc+Cg==) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xNC43MjQgMTJoMy40ODZMMjEgMTYuOHYzSDEwLjM2MkM2LjI5NCAxOS44IDMgMTYuNDM0IDMgMTIuMjc2di0uNTUyQzMgNy41NiA2LjMgNC4yIDEwLjM2MiA0LjJoNC40N2wxLjcyOCAzaC01LjgzOGE0Ljc0IDQuNzQgMCAwIDAtNC42OCA0Ljc4OGMwIDIuNjQgMi4wOTQgNC44MTIgNC42OCA0LjgxMmg2Ljc5MnpNMTEuNCA5LjlhMS41IDEuNSAwIDEgMS0zIDAgMS41IDEuNSAwIDAgMSAzIDBtMCA0LjJhMS41IDEuNSAwIDEgMS0zLjAwMSAwIDEuNSAxLjUgMCAwIDEgMy4wMDEgMCIvPgo8L3N2Zz4K) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNHSE9fX2EpIj4KICAgICAgICA8cGF0aCBmaWxsPSIjQzlCNEY5IiBkPSJNMjQgMEgwdjI0aDI0eiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiMwMDAiIGQ9Ik0xNC40MjEgMTJoMy4xTDIwIDE2LjI2N3YyLjY2NmgtOS40NTZDNi45MjggMTguOTMzIDQgMTUuOTQxIDQgMTIuMjQ1di0uNDljMC0zLjcwMiAyLjkzMy02LjY4OSA2LjU0NC02LjY4OWgzLjk3M2wxLjUzNiAyLjY2N2gtNS4xODlhNC4yMTMgNC4yMTMgMCAwIDAtNC4xNiA0LjI1NmMwIDIuMzQ3IDEuODYxIDQuMjc4IDQuMTYgNC4yNzhoNi4wMzd6bS0yLjk1NC0xLjg2N2ExLjMzNCAxLjMzNCAwIDEgMS0yLjY2OCAwIDEuMzM0IDEuMzM0IDAgMCAxIDIuNjY4IDBtMCAzLjczM2ExLjMzNCAxLjMzNCAwIDEgMS0yLjY2OCAwIDEuMzM0IDEuMzM0IDAgMCAxIDIuNjY4IDAiLz4KICAgIDwvZz4KICAgIDxkZWZzPgogICAgICAgIDxjbGlwUGF0aCBpZD0iR0hPX19hIj4KICAgICAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTAgMGgyNHYyNEgweiIvPgogICAgICAgIDwvY2xpcFBhdGg+CiAgICA8L2RlZnM+Cjwvc3ZnPgo=)
 * @see https://web3icons.io/tokens/GHO
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenGHO = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenGHO', __iconNode);
;
}),
];

//# sourceMappingURL=1qqr_%40web3icons_react_dist_1-2q-kx._.js.map