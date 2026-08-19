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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenAUTO.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenAUTO
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-ssr] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#E9595C',
                d: 'm6.73 15.965 3.023-1.894 5.376 3.197-3.01 1.934z'
            }
        ],
        [
            'path',
            {
                fill: '#109E92',
                d: 'M11.166 5.366 5.958 8.523v6.094l5.209-3.03z'
            }
        ],
        [
            'path',
            {
                fill: '#000',
                d: 'm19.58 14.94-3.316-2.074v-1.783l1.421.757V8.57l-4.737-3.08v6.982l-1.415.807 6.723 4.023L12 21l-7.58-4.48V7.56L12 3l7.58 4.56zM6.315 8.571v5.83l4.736-2.88V5.61zm3.469 5.71-2.798 1.727L12 18.97l2.832-1.675z'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#AUTO__a)'
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
                        fill: '#E9595C',
                        d: 'm7.315 15.524 2.687-1.683 4.78 2.842-2.677 1.719z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#109E92',
                        d: 'M11.259 6.103 6.629 8.91v5.417l4.63-2.694z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#000',
                        d: 'm18.737 14.614-2.947-1.845v-1.584l1.263.673V8.952l-4.211-2.737v6.205l-1.257.718 5.975 3.576L12 20l-6.738-3.982V8.053L12 4l6.737 4.053zM6.947 8.952v5.182l4.21-2.56V6.32zm3.083 5.075-2.487 1.536L12 18.196l2.517-1.488z'
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
                        id: 'AUTO__a'
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
 * @component @name TokenAUTO
 * @description Web3Icon for TokenAUTO
 *
 * @preview (branded, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNFOTU5NUMiIGQ9Im02LjczIDE1Ljk2NSAzLjAyMy0xLjg5NCA1LjM3NiAzLjE5Ny0zLjAxIDEuOTM0eiIvPgogICAgPHBhdGggZmlsbD0iIzEwOUU5MiIgZD0iTTExLjE2NiA1LjM2NiA1Ljk1OCA4LjUyM3Y2LjA5NGw1LjIwOS0zLjAzeiIvPgogICAgPHBhdGggZmlsbD0iIzAwMCIgZD0ibTE5LjU4IDE0Ljk0LTMuMzE2LTIuMDc0di0xLjc4M2wxLjQyMS43NTdWOC41N2wtNC43MzctMy4wOHY2Ljk4MmwtMS40MTUuODA3IDYuNzIzIDQuMDIzTDEyIDIxbC03LjU4LTQuNDhWNy41NkwxMiAzbDcuNTggNC41NnpNNi4zMTUgOC41NzF2NS44M2w0LjczNi0yLjg4VjUuNjF6bTMuNDY5IDUuNzEtMi43OTggMS43MjdMMTIgMTguOTdsMi44MzItMS42NzV6Ii8+Cjwvc3ZnPgo=) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNBVVRPX19hKSI+CiAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTI0IDBIMHYyNGgyNHoiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjRTk1OTVDIiBkPSJtNy4zMTUgMTUuNTI0IDIuNjg3LTEuNjgzIDQuNzggMi44NDItMi42NzcgMS43MTl6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0iIzEwOUU5MiIgZD0iTTExLjI1OSA2LjEwMyA2LjYyOSA4LjkxdjUuNDE3bDQuNjMtMi42OTR6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0iIzAwMCIgZD0ibTE4LjczNyAxNC42MTQtMi45NDctMS44NDV2LTEuNTg0bDEuMjYzLjY3M1Y4Ljk1MmwtNC4yMTEtMi43Mzd2Ni4yMDVsLTEuMjU3LjcxOCA1Ljk3NSAzLjU3NkwxMiAyMGwtNi43MzgtMy45ODJWOC4wNTNMMTIgNGw2LjczNyA0LjA1M3pNNi45NDcgOC45NTJ2NS4xODJsNC4yMS0yLjU2VjYuMzJ6bTMuMDgzIDUuMDc1LTIuNDg3IDEuNTM2TDEyIDE4LjE5NmwyLjUxNy0xLjQ4OHoiLz4KICAgIDwvZz4KICAgIDxkZWZzPgogICAgICAgIDxjbGlwUGF0aCBpZD0iQVVUT19fYSI+CiAgICAgICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0wIDBoMjR2MjRIMHoiLz4KICAgICAgICA8L2NsaXBQYXRoPgogICAgPC9kZWZzPgo8L3N2Zz4K)
 * @see https://web3icons.io/tokens/AUTO
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenAUTO = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenAUTO', __iconNode);
;
}),
];

//# sourceMappingURL=1qqr_%40web3icons_react_dist_0_62nz3._.js.map