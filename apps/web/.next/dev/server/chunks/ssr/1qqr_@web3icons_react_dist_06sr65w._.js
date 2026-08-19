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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenLCC.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenLCC
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-ssr] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#2AB643',
                d: 'M4.721 6.91 8.096 3l5.108 1.074 1.57 4.54 4.656.984L21 14.464l-3.29 3.91-4.866-.929L9.734 21l-5.013-.956L3 15.06l3.206-3.701-1.485-4.444z'
            }
        ],
        [
            'path',
            {
                fill: '#068210',
                d: 'M9.874 8.14 8.36 3.725l4.32.849 1.367 4.286-2.852 3.145-4.303-.732zm6.216 5.535-1.52-4.421 4.326.855 1.362 4.286-2.852 3.145-4.298-.732zm-7.937 2.74L6.64 11.999l4.32.855 1.366 4.286-2.852 3.139-4.303-.731z'
            }
        ],
        [
            'path',
            {
                fill: '#fff',
                d: 'M8.384 12.636 6.466 6.842l2.784-1.84 1.648 4.715 1.373-1.654.523 1.378-1.44 1.744.917 2.486 4.702-2.942.754 2.025-7.65 4.759-1.238-3.375-1.322 1.558-.506-1.446z'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#LCC__a)'
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
                        fill: '#2AB643',
                        d: 'M5.53 7.475 8.53 4l4.54.955 1.395 4.035 4.14.875L20 14.19l-2.925 3.475-4.325-.825L9.985 20l-4.455-.85L4 14.72l2.85-3.29-1.32-3.95z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#068210',
                        d: 'M10.11 8.57 8.765 4.645l3.84.755 1.215 3.81-2.535 2.794-3.825-.65zm5.525 4.92-1.35-3.93 3.845.76 1.21 3.81-2.535 2.794-3.82-.65zM8.58 15.924 7.235 12l3.84.76 1.215 3.81-2.535 2.79-3.825-.65z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M8.786 12.565 7.08 7.415 9.556 5.78l1.465 4.19 1.22-1.47.465 1.225-1.28 1.55.815 2.21 4.18-2.615.67 1.8-6.8 4.23-1.1-3-1.175 1.385L7.566 14z'
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
                        id: 'LCC__a'
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
 * @component @name TokenLCC
 * @description Web3Icon for TokenLCC
 *
 * @preview (branded, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiMyQUI2NDMiIGQ9Ik00LjcyMSA2LjkxIDguMDk2IDNsNS4xMDggMS4wNzQgMS41NyA0LjU0IDQuNjU2Ljk4NEwyMSAxNC40NjRsLTMuMjkgMy45MS00Ljg2Ni0uOTI5TDkuNzM0IDIxbC01LjAxMy0uOTU2TDMgMTUuMDZsMy4yMDYtMy43MDEtMS40ODUtNC40NDR6Ii8+CiAgICA8cGF0aCBmaWxsPSIjMDY4MjEwIiBkPSJNOS44NzQgOC4xNCA4LjM2IDMuNzI1bDQuMzIuODQ5IDEuMzY3IDQuMjg2LTIuODUyIDMuMTQ1LTQuMzAzLS43MzJ6bTYuMjE2IDUuNTM1LTEuNTItNC40MjEgNC4zMjYuODU1IDEuMzYyIDQuMjg2LTIuODUyIDMuMTQ1LTQuMjk4LS43MzJ6bS03LjkzNyAyLjc0TDYuNjQgMTEuOTk5bDQuMzIuODU1IDEuMzY2IDQuMjg2LTIuODUyIDMuMTM5LTQuMzAzLS43MzF6Ii8+CiAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNOC4zODQgMTIuNjM2IDYuNDY2IDYuODQybDIuNzg0LTEuODQgMS42NDggNC43MTUgMS4zNzMtMS42NTQuNTIzIDEuMzc4LTEuNDQgMS43NDQuOTE3IDIuNDg2IDQuNzAyLTIuOTQyLjc1NCAyLjAyNS03LjY1IDQuNzU5LTEuMjM4LTMuMzc1LTEuMzIyIDEuNTU4LS41MDYtMS40NDZ6Ii8+Cjwvc3ZnPgo=) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNMQ0NfX2EpIj4KICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMjQgMEgwdjI0aDI0eiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiMyQUI2NDMiIGQ9Ik01LjUzIDcuNDc1IDguNTMgNGw0LjU0Ljk1NSAxLjM5NSA0LjAzNSA0LjE0Ljg3NUwyMCAxNC4xOWwtMi45MjUgMy40NzUtNC4zMjUtLjgyNUw5Ljk4NSAyMGwtNC40NTUtLjg1TDQgMTQuNzJsMi44NS0zLjI5LTEuMzItMy45NXoiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjMDY4MjEwIiBkPSJNMTAuMTEgOC41NyA4Ljc2NSA0LjY0NWwzLjg0Ljc1NSAxLjIxNSAzLjgxLTIuNTM1IDIuNzk0LTMuODI1LS42NXptNS41MjUgNC45Mi0xLjM1LTMuOTMgMy44NDUuNzYgMS4yMSAzLjgxLTIuNTM1IDIuNzk0LTMuODItLjY1ek04LjU4IDE1LjkyNCA3LjIzNSAxMmwzLjg0Ljc2IDEuMjE1IDMuODEtMi41MzUgMi43OS0zLjgyNS0uNjV6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTguNzg2IDEyLjU2NSA3LjA4IDcuNDE1IDkuNTU2IDUuNzhsMS40NjUgNC4xOSAxLjIyLTEuNDcuNDY1IDEuMjI1LTEuMjggMS41NS44MTUgMi4yMSA0LjE4LTIuNjE1LjY3IDEuOC02LjggNC4yMy0xLjEtMy0xLjE3NSAxLjM4NUw3LjU2NiAxNHoiLz4KICAgIDwvZz4KICAgIDxkZWZzPgogICAgICAgIDxjbGlwUGF0aCBpZD0iTENDX19hIj4KICAgICAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTAgMGgyNHYyNEgweiIvPgogICAgICAgIDwvY2xpcFBhdGg+CiAgICA8L2RlZnM+Cjwvc3ZnPgo=)
 * @see https://web3icons.io/tokens/LCC
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenLCC = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenLCC', __iconNode);
;
}),
];

//# sourceMappingURL=1qqr_%40web3icons_react_dist_06sr65w._.js.map