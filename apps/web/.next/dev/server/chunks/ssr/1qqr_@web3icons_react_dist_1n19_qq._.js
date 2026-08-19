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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenREQ.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenREQ
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-ssr] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#69E2A5',
                d: 'M6.211 3A2.37 2.37 0 0 0 3.84 5.371V18.9a2.1 2.1 0 1 0 4.2 0V6.6h8.4l3.6-3.6z'
            }
        ],
        [
            'path',
            {
                fill: '#3D8A65',
                d: 'M20.04 8.304v-5.29l-9.094 8.977a1.65 1.65 0 0 0-.014 2.337l5.958 6.031a1.91 1.91 0 1 0 2.721-2.68l-4.102-4.177a.493.493 0 0 1 .003-.695z'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M6.211 3A2.37 2.37 0 0 0 3.84 5.371V18.9a2.1 2.1 0 1 0 4.2 0V6.6h8.4l3.6-3.6z'
            }
        ],
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M20.04 8.304v-5.29l-9.095 8.977a1.653 1.653 0 0 0-.013 2.337l5.958 6.031a1.91 1.91 0 1 0 2.72-2.68l-4.101-4.177a.493.493 0 0 1 .003-.695z'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#REQ__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#69E2A5',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M6.854 4a2.11 2.11 0 0 0-2.108 2.108v12.025a1.866 1.866 0 1 0 3.733 0V7.2h7.467l3.2-3.2z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M19.147 8.715V4.013l-8.084 7.978a1.47 1.47 0 0 0-.012 2.078l5.296 5.361a1.697 1.697 0 1 0 2.419-2.381l-3.646-3.715a.44.44 0 0 1 .002-.617z'
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
                        id: 'REQ__a'
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
 * @component @name TokenREQ
 * @description Web3Icon for TokenREQ
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiM2OUUyQTUiIGQ9Ik02LjIxMSAzQTIuMzcgMi4zNyAwIDAgMCAzLjg0IDUuMzcxVjE4LjlhMi4xIDIuMSAwIDEgMCA0LjIgMFY2LjZoOC40bDMuNi0zLjZ6Ii8+CiAgICA8cGF0aCBmaWxsPSIjM0Q4QTY1IiBkPSJNMjAuMDQgOC4zMDR2LTUuMjlsLTkuMDk0IDguOTc3YTEuNjUgMS42NSAwIDAgMC0uMDE0IDIuMzM3bDUuOTU4IDYuMDMxYTEuOTEgMS45MSAwIDEgMCAyLjcyMS0yLjY4bC00LjEwMi00LjE3N2EuNDkzLjQ5MyAwIDAgMSAuMDAzLS42OTV6Ii8+Cjwvc3ZnPgo=) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik02LjIxMSAzQTIuMzcgMi4zNyAwIDAgMCAzLjg0IDUuMzcxVjE4LjlhMi4xIDIuMSAwIDEgMCA0LjIgMFY2LjZoOC40bDMuNi0zLjZ6Ii8+CiAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMjAuMDQgOC4zMDR2LTUuMjlsLTkuMDk1IDguOTc3YTEuNjUzIDEuNjUzIDAgMCAwLS4wMTMgMi4zMzdsNS45NTggNi4wMzFhMS45MSAxLjkxIDAgMSAwIDIuNzItMi42OGwtNC4xMDEtNC4xNzdhLjQ5My40OTMgMCAwIDEgLjAwMy0uNjk1eiIvPgo8L3N2Zz4K) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNSRVFfX2EpIj4KICAgICAgICA8cGF0aCBmaWxsPSIjNjlFMkE1IiBkPSJNMjQgMEgwdjI0aDI0eiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik02Ljg1NCA0YTIuMTEgMi4xMSAwIDAgMC0yLjEwOCAyLjEwOHYxMi4wMjVhMS44NjYgMS44NjYgMCAxIDAgMy43MzMgMFY3LjJoNy40NjdsMy4yLTMuMnoiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTkuMTQ3IDguNzE1VjQuMDEzbC04LjA4NCA3Ljk3OGExLjQ3IDEuNDcgMCAwIDAtLjAxMiAyLjA3OGw1LjI5NiA1LjM2MWExLjY5NyAxLjY5NyAwIDEgMCAyLjQxOS0yLjM4MWwtMy42NDYtMy43MTVhLjQ0LjQ0IDAgMCAxIC4wMDItLjYxN3oiLz4KICAgIDwvZz4KICAgIDxkZWZzPgogICAgICAgIDxjbGlwUGF0aCBpZD0iUkVRX19hIj4KICAgICAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTAgMGgyNHYyNEgweiIvPgogICAgICAgIDwvY2xpcFBhdGg+CiAgICA8L2RlZnM+Cjwvc3ZnPgo=)
 * @see https://web3icons.io/tokens/REQ
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenREQ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenREQ', __iconNode);
;
}),
];

//# sourceMappingURL=1qqr_%40web3icons_react_dist_1n19_qq._.js.map