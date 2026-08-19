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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenCTC.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenCTC
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-ssr] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#fff',
                d: 'm19.2 8.647-2.02.62a6.14 6.14 0 0 0-5.72-3.45c-4.342 0-6.21 3.708-6.21 6.183 0 1.952 1.384 6.193 6.188 6.193 3.594 0 5.501-2.886 5.743-3.398l2.132.507c-.197.77-2.616 5.13-7.853 5.13C6.791 20.432 3 16.658 3 12s3.791-8.432 8.46-8.432c4.675 0 7.279 3.6 7.74 5.08'
            }
        ],
        [
            'path',
            {
                fill: '#fff',
                d: 'M12.5 10.88H21v2.25h-8.5z'
            }
        ],
        [
            'path',
            {
                fill: '#fff',
                d: 'M11.437 13.693a1.688 1.688 0 1 0 0-3.375 1.688 1.688 0 0 0 0 3.375'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'm19.2 8.647-2.02.62a6.14 6.14 0 0 0-5.72-3.45c-4.342 0-6.21 3.708-6.21 6.183 0 1.952 1.384 6.193 6.188 6.193 3.594 0 5.501-2.886 5.743-3.398l2.132.507c-.197.77-2.616 5.13-7.853 5.13C6.791 20.432 3 16.658 3 12s3.791-8.432 8.46-8.432c4.675 0 7.279 3.6 7.74 5.08'
            }
        ],
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M12.5 10.88H21v2.25h-8.5z'
            }
        ],
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M11.437 13.693a1.688 1.688 0 1 0 0-3.375 1.688 1.688 0 0 0 0 3.375'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#CTC__a)'
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
                        d: 'm18.4 9.02-1.795.55a5.46 5.46 0 0 0-5.085-3.065C7.66 6.505 6 9.8 6 12c0 1.735 1.23 5.505 5.5 5.505 3.195 0 4.89-2.565 5.105-3.02l1.895.45c-.175.685-2.325 4.56-6.98 4.56C7.37 19.495 4 16.14 4 12s3.37-7.495 7.52-7.495c4.155 0 6.47 3.2 6.88 4.515'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M12.445 11.005H20v2h-7.555z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M11.5 13.505a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3'
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
                        id: 'CTC__a'
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
 * @component @name TokenCTC
 * @description Web3Icon for TokenCTC
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Im0xOS4yIDguNjQ3LTIuMDIuNjJhNi4xNCA2LjE0IDAgMCAwLTUuNzItMy40NWMtNC4zNDIgMC02LjIxIDMuNzA4LTYuMjEgNi4xODMgMCAxLjk1MiAxLjM4NCA2LjE5MyA2LjE4OCA2LjE5MyAzLjU5NCAwIDUuNTAxLTIuODg2IDUuNzQzLTMuMzk4bDIuMTMyLjUwN2MtLjE5Ny43Ny0yLjYxNiA1LjEzLTcuODUzIDUuMTNDNi43OTEgMjAuNDMyIDMgMTYuNjU4IDMgMTJzMy43OTEtOC40MzIgOC40Ni04LjQzMmM0LjY3NSAwIDcuMjc5IDMuNiA3Ljc0IDUuMDgiLz4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xMi41IDEwLjg4SDIxdjIuMjVoLTguNXoiLz4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xMS40MzcgMTMuNjkzYTEuNjg4IDEuNjg4IDAgMSAwIDAtMy4zNzUgMS42ODggMS42ODggMCAwIDAgMCAzLjM3NSIvPgo8L3N2Zz4K) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Im0xOS4yIDguNjQ3LTIuMDIuNjJhNi4xNCA2LjE0IDAgMCAwLTUuNzItMy40NWMtNC4zNDIgMC02LjIxIDMuNzA4LTYuMjEgNi4xODMgMCAxLjk1MiAxLjM4NCA2LjE5MyA2LjE4OCA2LjE5MyAzLjU5NCAwIDUuNTAxLTIuODg2IDUuNzQzLTMuMzk4bDIuMTMyLjUwN2MtLjE5Ny43Ny0yLjYxNiA1LjEzLTcuODUzIDUuMTNDNi43OTEgMjAuNDMyIDMgMTYuNjU4IDMgMTJzMy43OTEtOC40MzIgOC40Ni04LjQzMmM0LjY3NSAwIDcuMjc5IDMuNiA3Ljc0IDUuMDgiLz4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xMi41IDEwLjg4SDIxdjIuMjVoLTguNXoiLz4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xMS40MzcgMTMuNjkzYTEuNjg4IDEuNjg4IDAgMSAwIDAtMy4zNzUgMS42ODggMS42ODggMCAwIDAgMCAzLjM3NSIvPgo8L3N2Zz4K) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNDVENfX2EpIj4KICAgICAgICA8cGF0aCBmaWxsPSIjMDAwIiBkPSJNMjQgMEgwdjI0aDI0eiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Im0xOC40IDkuMDItMS43OTUuNTVhNS40NiA1LjQ2IDAgMCAwLTUuMDg1LTMuMDY1QzcuNjYgNi41MDUgNiA5LjggNiAxMmMwIDEuNzM1IDEuMjMgNS41MDUgNS41IDUuNTA1IDMuMTk1IDAgNC44OS0yLjU2NSA1LjEwNS0zLjAybDEuODk1LjQ1Yy0uMTc1LjY4NS0yLjMyNSA0LjU2LTYuOTggNC41NkM3LjM3IDE5LjQ5NSA0IDE2LjE0IDQgMTJzMy4zNy03LjQ5NSA3LjUyLTcuNDk1YzQuMTU1IDAgNi40NyAzLjIgNi44OCA0LjUxNSIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xMi40NDUgMTEuMDA1SDIwdjJoLTcuNTU1eiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xMS41IDEzLjUwNWExLjUgMS41IDAgMSAwIDAtMyAxLjUgMS41IDAgMCAwIDAgMyIvPgogICAgPC9nPgogICAgPGRlZnM+CiAgICAgICAgPGNsaXBQYXRoIGlkPSJDVENfX2EiPgogICAgICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMCAwaDI0djI0SDB6Ii8+CiAgICAgICAgPC9jbGlwUGF0aD4KICAgIDwvZGVmcz4KPC9zdmc+Cg==)
 * @see https://web3icons.io/tokens/CTC
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenCTC = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenCTC', __iconNode);
;
}),
];

//# sourceMappingURL=1qqr_%40web3icons_react_dist_1g7v_03._.js.map