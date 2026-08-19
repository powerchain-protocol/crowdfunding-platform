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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenJST.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenJST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-ssr] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#B41514',
                d: 'M14.119 5.118a2.118 2.118 0 1 1-4.235 0 2.118 2.118 0 0 1 4.235 0m0 13.764a2.118 2.118 0 1 1-4.235 0 2.118 2.118 0 0 1 4.235 0m-10.06-5.824h15.884v2.648H4.06z'
            }
        ],
        [
            'path',
            {
                fill: '#B41514',
                d: 'M3.529 3.528c.201 4.42 3.917 7.942 8.47 7.942 4.555 0 8.27-3.522 8.472-7.942h-2.665c-.27 2.912-2.767 5.192-5.805 5.192-3.039 0-5.534-2.28-5.805-5.192z'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M14.117 5.118a2.118 2.118 0 1 1-4.235 0 2.118 2.118 0 0 1 4.235 0m0 13.764a2.117 2.117 0 1 1-4.235 0 2.117 2.117 0 0 1 4.235 0m-10.06-5.824h15.884v2.648H4.058z'
            }
        ],
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M3.529 3.528C3.73 7.948 7.446 11.47 12 11.47s8.27-3.522 8.471-7.942h-2.665c-.27 2.912-2.767 5.192-5.805 5.192-3.039 0-5.534-2.28-5.805-5.192z'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#JST__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#B41514',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M13.882 5.882a1.882 1.882 0 1 1-3.764 0 1.882 1.882 0 0 1 3.764 0m0 12.236a1.882 1.882 0 1 1-3.764 0 1.882 1.882 0 0 1 3.764 0M4.94 12.94h14.12v2.353H4.94z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M4.47 4.47c.179 3.928 3.482 7.06 7.53 7.06s7.351-3.132 7.53-7.06h-2.369c-.24 2.588-2.46 4.615-5.16 4.615s-4.92-2.027-5.16-4.615z'
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
                        id: 'JST__a'
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
 * @component @name TokenJST
 * @description Web3Icon for TokenJST
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNCNDE1MTQiIGQ9Ik0xNC4xMTkgNS4xMThhMi4xMTggMi4xMTggMCAxIDEtNC4yMzUgMCAyLjExOCAyLjExOCAwIDAgMSA0LjIzNSAwbTAgMTMuNzY0YTIuMTE4IDIuMTE4IDAgMSAxLTQuMjM1IDAgMi4xMTggMi4xMTggMCAwIDEgNC4yMzUgMG0tMTAuMDYtNS44MjRoMTUuODg0djIuNjQ4SDQuMDZ6Ii8+CiAgICA8cGF0aCBmaWxsPSIjQjQxNTE0IiBkPSJNMy41MjkgMy41MjhjLjIwMSA0LjQyIDMuOTE3IDcuOTQyIDguNDcgNy45NDIgNC41NTUgMCA4LjI3LTMuNTIyIDguNDcyLTcuOTQyaC0yLjY2NWMtLjI3IDIuOTEyLTIuNzY3IDUuMTkyLTUuODA1IDUuMTkyLTMuMDM5IDAtNS41MzQtMi4yOC01LjgwNS01LjE5MnoiLz4KPC9zdmc+Cg==) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xNC4xMTcgNS4xMThhMi4xMTggMi4xMTggMCAxIDEtNC4yMzUgMCAyLjExOCAyLjExOCAwIDAgMSA0LjIzNSAwbTAgMTMuNzY0YTIuMTE3IDIuMTE3IDAgMSAxLTQuMjM1IDAgMi4xMTcgMi4xMTcgMCAwIDEgNC4yMzUgMG0tMTAuMDYtNS44MjRoMTUuODg0djIuNjQ4SDQuMDU4eiIvPgogICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTMuNTI5IDMuNTI4QzMuNzMgNy45NDggNy40NDYgMTEuNDcgMTIgMTEuNDdzOC4yNy0zLjUyMiA4LjQ3MS03Ljk0MmgtMi42NjVjLS4yNyAyLjkxMi0yLjc2NyA1LjE5Mi01LjgwNSA1LjE5Mi0zLjAzOSAwLTUuNTM0LTIuMjgtNS44MDUtNS4xOTJ6Ii8+Cjwvc3ZnPgo=) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNKU1RfX2EpIj4KICAgICAgICA8cGF0aCBmaWxsPSIjQjQxNTE0IiBkPSJNMjQgMEgwdjI0aDI0eiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xMy44ODIgNS44ODJhMS44ODIgMS44ODIgMCAxIDEtMy43NjQgMCAxLjg4MiAxLjg4MiAwIDAgMSAzLjc2NCAwbTAgMTIuMjM2YTEuODgyIDEuODgyIDAgMSAxLTMuNzY0IDAgMS44ODIgMS44ODIgMCAwIDEgMy43NjQgME00Ljk0IDEyLjk0aDE0LjEydjIuMzUzSDQuOTR6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTQuNDcgNC40N2MuMTc5IDMuOTI4IDMuNDgyIDcuMDYgNy41MyA3LjA2czcuMzUxLTMuMTMyIDcuNTMtNy4wNmgtMi4zNjljLS4yNCAyLjU4OC0yLjQ2IDQuNjE1LTUuMTYgNC42MTVzLTQuOTItMi4wMjctNS4xNi00LjYxNXoiLz4KICAgIDwvZz4KICAgIDxkZWZzPgogICAgICAgIDxjbGlwUGF0aCBpZD0iSlNUX19hIj4KICAgICAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTAgMGgyNHYyNEgweiIvPgogICAgICAgIDwvY2xpcFBhdGg+CiAgICA8L2RlZnM+Cjwvc3ZnPgo=)
 * @see https://web3icons.io/tokens/JST
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenJST = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenJST', __iconNode);
;
}),
];

//# sourceMappingURL=1qqr_%40web3icons_react_dist_0z8p41o._.js.map