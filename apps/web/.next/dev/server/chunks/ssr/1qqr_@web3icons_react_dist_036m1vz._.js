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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/wallets/WalletArgent.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>WalletArgent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-ssr] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#FF875B',
                d: 'M14.316 3.9H9.684a.286.286 0 0 0-.282.284c-.094 4.42-2.37 8.617-6.287 11.589a.29.29 0 0 0-.062.399l2.71 3.808c.093.13.272.16.399.064 2.449-1.846 4.42-4.073 5.838-6.542 1.419 2.469 3.389 4.696 5.838 6.542a.28.28 0 0 0 .398-.064l2.71-3.808a.29.29 0 0 0-.061-.4c-3.917-2.971-6.193-7.167-6.287-11.588a.285.285 0 0 0-.282-.284'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M14.316 3.9H9.684a.286.286 0 0 0-.282.284c-.094 4.42-2.37 8.617-6.287 11.589a.29.29 0 0 0-.062.399l2.71 3.808c.093.13.272.16.399.064 2.449-1.846 4.42-4.073 5.838-6.542 1.419 2.469 3.389 4.696 5.838 6.542a.28.28 0 0 0 .398-.064l2.71-3.808a.29.29 0 0 0-.061-.4c-3.917-2.971-6.193-7.167-6.287-11.588a.285.285 0 0 0-.282-.284'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#argent__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#FF875B',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M14.059 4.8H9.94a.254.254 0 0 0-.25.252c-.084 3.93-2.107 7.66-5.589 10.302a.26.26 0 0 0-.055.354l2.41 3.386a.25.25 0 0 0 .353.056c2.178-1.64 3.929-3.62 5.19-5.815 1.261 2.195 3.012 4.174 5.19 5.815a.25.25 0 0 0 .354-.056l2.409-3.386a.26.26 0 0 0-.055-.354c-3.482-2.642-5.505-6.372-5.588-10.302a.254.254 0 0 0-.251-.252'
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
                        id: 'argent__a'
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
 * @component @name WalletArgent
 * @description Web3Icon for WalletArgent
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNGRjg3NUIiIGQ9Ik0xNC4zMTYgMy45SDkuNjg0YS4yODYuMjg2IDAgMCAwLS4yODIuMjg0Yy0uMDk0IDQuNDItMi4zNyA4LjYxNy02LjI4NyAxMS41ODlhLjI5LjI5IDAgMCAwLS4wNjIuMzk5bDIuNzEgMy44MDhjLjA5My4xMy4yNzIuMTYuMzk5LjA2NCAyLjQ0OS0xLjg0NiA0LjQyLTQuMDczIDUuODM4LTYuNTQyIDEuNDE5IDIuNDY5IDMuMzg5IDQuNjk2IDUuODM4IDYuNTQyYS4yOC4yOCAwIDAgMCAuMzk4LS4wNjRsMi43MS0zLjgwOGEuMjkuMjkgMCAwIDAtLjA2MS0uNGMtMy45MTctMi45NzEtNi4xOTMtNy4xNjctNi4yODctMTEuNTg4YS4yODUuMjg1IDAgMCAwLS4yODItLjI4NCIvPgo8L3N2Zz4K) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xNC4zMTYgMy45SDkuNjg0YS4yODYuMjg2IDAgMCAwLS4yODIuMjg0Yy0uMDk0IDQuNDItMi4zNyA4LjYxNy02LjI4NyAxMS41ODlhLjI5LjI5IDAgMCAwLS4wNjIuMzk5bDIuNzEgMy44MDhjLjA5My4xMy4yNzIuMTYuMzk5LjA2NCAyLjQ0OS0xLjg0NiA0LjQyLTQuMDczIDUuODM4LTYuNTQyIDEuNDE5IDIuNDY5IDMuMzg5IDQuNjk2IDUuODM4IDYuNTQyYS4yOC4yOCAwIDAgMCAuMzk4LS4wNjRsMi43MS0zLjgwOGEuMjkuMjkgMCAwIDAtLjA2MS0uNGMtMy45MTctMi45NzEtNi4xOTMtNy4xNjctNi4yODctMTEuNTg4YS4yODUuMjg1IDAgMCAwLS4yODItLjI4NCIvPgo8L3N2Zz4K) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNhcmdlbnRfX2EpIj4KICAgICAgICA8cGF0aCBmaWxsPSIjRkY4NzVCIiBkPSJNMjQgMEgwdjI0aDI0eiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xNC4wNTkgNC44SDkuOTRhLjI1NC4yNTQgMCAwIDAtLjI1LjI1MmMtLjA4NCAzLjkzLTIuMTA3IDcuNjYtNS41ODkgMTAuMzAyYS4yNi4yNiAwIDAgMC0uMDU1LjM1NGwyLjQxIDMuMzg2YS4yNS4yNSAwIDAgMCAuMzUzLjA1NmMyLjE3OC0xLjY0IDMuOTI5LTMuNjIgNS4xOS01LjgxNSAxLjI2MSAyLjE5NSAzLjAxMiA0LjE3NCA1LjE5IDUuODE1YS4yNS4yNSAwIDAgMCAuMzU0LS4wNTZsMi40MDktMy4zODZhLjI2LjI2IDAgMCAwLS4wNTUtLjM1NGMtMy40ODItMi42NDItNS41MDUtNi4zNzItNS41ODgtMTAuMzAyYS4yNTQuMjU0IDAgMCAwLS4yNTEtLjI1MiIvPgogICAgPC9nPgogICAgPGRlZnM+CiAgICAgICAgPGNsaXBQYXRoIGlkPSJhcmdlbnRfX2EiPgogICAgICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMCAwaDI0djI0SDB6Ii8+CiAgICAgICAgPC9jbGlwUGF0aD4KICAgIDwvZGVmcz4KPC9zdmc+Cg==)
 * @see https://web3icons.io/wallets/argent
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const WalletArgent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createWeb3Icon"])('WalletArgent', __iconNode);
;
}),
];

//# sourceMappingURL=1qqr_%40web3icons_react_dist_036m1vz._.js.map