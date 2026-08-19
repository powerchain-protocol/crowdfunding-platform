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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/networks/NetworkCoinexSmartChain.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>NetworkCoinexSmartChain
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-ssr] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#5F5FFF',
                d: 'M14.474 8.965a3.11 3.11 0 0 1 3.3 1.404 3.095 3.095 0 0 1-1.798 4.608 3.11 3.11 0 0 1-3.382-1.193 3.1 3.1 0 0 1-.57-1.79H9.276a5.84 5.84 0 0 0 1.19 3.538 5.873 5.873 0 0 0 9.683-.496 5.84 5.84 0 0 0-.732-7.035 5.865 5.865 0 0 0-6.987-1.19 5.9 5.9 0 0 1 2.044 2.154'
            }
        ],
        [
            'path',
            {
                fill: '#17E5AA',
                d: 'M9.526 15.035a3.11 3.11 0 0 1-3.3-1.404 3.095 3.095 0 0 1 1.797-4.609 3.11 3.11 0 0 1 3.383 1.192c.37.524.57 1.15.57 1.79h2.747a5.84 5.84 0 0 0-1.19-3.537 5.873 5.873 0 0 0-9.683.497 5.84 5.84 0 0 0 .733 7.035 5.865 5.865 0 0 0 6.986 1.19 5.9 5.9 0 0 1-2.043-2.154'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M14.474 8.965a3.11 3.11 0 0 1 3.3 1.404 3.095 3.095 0 0 1-1.798 4.608 3.11 3.11 0 0 1-3.382-1.193 3.1 3.1 0 0 1-.57-1.79H9.276a5.84 5.84 0 0 0 1.19 3.538 5.873 5.873 0 0 0 9.683-.496 5.84 5.84 0 0 0-.732-7.035 5.865 5.865 0 0 0-6.987-1.19 5.9 5.9 0 0 1 2.044 2.154'
            }
        ],
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M9.526 15.035a3.11 3.11 0 0 1-3.3-1.404 3.095 3.095 0 0 1 1.797-4.609 3.11 3.11 0 0 1 3.383 1.192c.37.524.57 1.15.57 1.79h2.747a5.84 5.84 0 0 0-1.19-3.537 5.873 5.873 0 0 0-9.683.497 5.84 5.84 0 0 0 .733 7.035 5.865 5.865 0 0 0 6.986 1.19 5.9 5.9 0 0 1-2.043-2.154'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#coinex-smart-chain__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#5F5FFF',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M14.2 9.303a2.77 2.77 0 0 1 2.932 1.247 2.75 2.75 0 0 1-1.598 4.096 2.77 2.77 0 0 1-3.006-1.06 2.75 2.75 0 0 1-.507-1.59H9.58a5.2 5.2 0 0 0 1.057 3.144 5.21 5.21 0 0 0 6.066 1.697 5.2 5.2 0 0 0 2.541-2.138 5.19 5.19 0 0 0-.65-6.254 5.21 5.21 0 0 0-6.21-1.057A5.2 5.2 0 0 1 14.2 9.303'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M9.8 14.698a2.77 2.77 0 0 1-2.933-1.248 2.75 2.75 0 0 1 1.598-4.097 2.77 2.77 0 0 1 3.007 1.06 2.75 2.75 0 0 1 .507 1.591h2.442c0-1.135-.37-2.24-1.057-3.144a5.22 5.22 0 0 0-8.607.441 5.19 5.19 0 0 0 .65 6.254 5.214 5.214 0 0 0 6.21 1.057 5.2 5.2 0 0 1-1.816-1.914'
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
                        id: 'coinex-smart-chain__a'
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
 * @component @name NetworkCoinexSmartChain
 * @description Web3Icon for NetworkCoinexSmartChain
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiM1RjVGRkYiIGQ9Ik0xNC40NzQgOC45NjVhMy4xMSAzLjExIDAgMCAxIDMuMyAxLjQwNCAzLjA5NSAzLjA5NSAwIDAgMS0xLjc5OCA0LjYwOCAzLjExIDMuMTEgMCAwIDEtMy4zODItMS4xOTMgMy4xIDMuMSAwIDAgMS0uNTctMS43OUg5LjI3NmE1Ljg0IDUuODQgMCAwIDAgMS4xOSAzLjUzOCA1Ljg3MyA1Ljg3MyAwIDAgMCA5LjY4My0uNDk2IDUuODQgNS44NCAwIDAgMC0uNzMyLTcuMDM1IDUuODY1IDUuODY1IDAgMCAwLTYuOTg3LTEuMTkgNS45IDUuOSAwIDAgMSAyLjA0NCAyLjE1NCIvPgogICAgPHBhdGggZmlsbD0iIzE3RTVBQSIgZD0iTTkuNTI2IDE1LjAzNWEzLjExIDMuMTEgMCAwIDEtMy4zLTEuNDA0IDMuMDk1IDMuMDk1IDAgMCAxIDEuNzk3LTQuNjA5IDMuMTEgMy4xMSAwIDAgMSAzLjM4MyAxLjE5MmMuMzcuNTI0LjU3IDEuMTUuNTcgMS43OWgyLjc0N2E1Ljg0IDUuODQgMCAwIDAtMS4xOS0zLjUzNyA1Ljg3MyA1Ljg3MyAwIDAgMC05LjY4My40OTcgNS44NCA1Ljg0IDAgMCAwIC43MzMgNy4wMzUgNS44NjUgNS44NjUgMCAwIDAgNi45ODYgMS4xOSA1LjkgNS45IDAgMCAxLTIuMDQzLTIuMTU0Ii8+Cjwvc3ZnPgo=) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xNC40NzQgOC45NjVhMy4xMSAzLjExIDAgMCAxIDMuMyAxLjQwNCAzLjA5NSAzLjA5NSAwIDAgMS0xLjc5OCA0LjYwOCAzLjExIDMuMTEgMCAwIDEtMy4zODItMS4xOTMgMy4xIDMuMSAwIDAgMS0uNTctMS43OUg5LjI3NmE1Ljg0IDUuODQgMCAwIDAgMS4xOSAzLjUzOCA1Ljg3MyA1Ljg3MyAwIDAgMCA5LjY4My0uNDk2IDUuODQgNS44NCAwIDAgMC0uNzMyLTcuMDM1IDUuODY1IDUuODY1IDAgMCAwLTYuOTg3LTEuMTkgNS45IDUuOSAwIDAgMSAyLjA0NCAyLjE1NCIvPgogICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTkuNTI2IDE1LjAzNWEzLjExIDMuMTEgMCAwIDEtMy4zLTEuNDA0IDMuMDk1IDMuMDk1IDAgMCAxIDEuNzk3LTQuNjA5IDMuMTEgMy4xMSAwIDAgMSAzLjM4MyAxLjE5MmMuMzcuNTI0LjU3IDEuMTUuNTcgMS43OWgyLjc0N2E1Ljg0IDUuODQgMCAwIDAtMS4xOS0zLjUzNyA1Ljg3MyA1Ljg3MyAwIDAgMC05LjY4My40OTcgNS44NCA1Ljg0IDAgMCAwIC43MzMgNy4wMzUgNS44NjUgNS44NjUgMCAwIDAgNi45ODYgMS4xOSA1LjkgNS45IDAgMCAxLTIuMDQzLTIuMTU0Ii8+Cjwvc3ZnPgo=) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNjb2luZXgtc21hcnQtY2hhaW5fX2EpIj4KICAgICAgICA8cGF0aCBmaWxsPSIjNUY1RkZGIiBkPSJNMjQgMEgwdjI0aDI0eiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xNC4yIDkuMzAzYTIuNzcgMi43NyAwIDAgMSAyLjkzMiAxLjI0NyAyLjc1IDIuNzUgMCAwIDEtMS41OTggNC4wOTYgMi43NyAyLjc3IDAgMCAxLTMuMDA2LTEuMDYgMi43NSAyLjc1IDAgMCAxLS41MDctMS41OUg5LjU4YTUuMiA1LjIgMCAwIDAgMS4wNTcgMy4xNDQgNS4yMSA1LjIxIDAgMCAwIDYuMDY2IDEuNjk3IDUuMiA1LjIgMCAwIDAgMi41NDEtMi4xMzggNS4xOSA1LjE5IDAgMCAwLS42NS02LjI1NCA1LjIxIDUuMjEgMCAwIDAtNi4yMS0xLjA1N0E1LjIgNS4yIDAgMCAxIDE0LjIgOS4zMDMiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNOS44IDE0LjY5OGEyLjc3IDIuNzcgMCAwIDEtMi45MzMtMS4yNDggMi43NSAyLjc1IDAgMCAxIDEuNTk4LTQuMDk3IDIuNzcgMi43NyAwIDAgMSAzLjAwNyAxLjA2IDIuNzUgMi43NSAwIDAgMSAuNTA3IDEuNTkxaDIuNDQyYzAtMS4xMzUtLjM3LTIuMjQtMS4wNTctMy4xNDRhNS4yMiA1LjIyIDAgMCAwLTguNjA3LjQ0MSA1LjE5IDUuMTkgMCAwIDAgLjY1IDYuMjU0IDUuMjE0IDUuMjE0IDAgMCAwIDYuMjEgMS4wNTcgNS4yIDUuMiAwIDAgMS0xLjgxNi0xLjkxNCIvPgogICAgPC9nPgogICAgPGRlZnM+CiAgICAgICAgPGNsaXBQYXRoIGlkPSJjb2luZXgtc21hcnQtY2hhaW5fX2EiPgogICAgICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMCAwaDI0djI0SDB6Ii8+CiAgICAgICAgPC9jbGlwUGF0aD4KICAgIDwvZGVmcz4KPC9zdmc+Cg==)
 * @see https://web3icons.io/networks/coinex-smart-chain
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const NetworkCoinexSmartChain = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createWeb3Icon"])('NetworkCoinexSmartChain', __iconNode);
;
}),
];

//# sourceMappingURL=1qqr_%40web3icons_react_dist_0u6xaal._.js.map