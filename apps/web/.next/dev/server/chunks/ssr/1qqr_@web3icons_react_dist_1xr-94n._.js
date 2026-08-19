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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/wallets/WalletWallet3.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>WalletWallet3
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-ssr] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#6286FF',
                d: 'M21 3H3v18h18z'
            }
        ],
        [
            'path',
            {
                fill: '#fff',
                d: 'M18.12 8.412a.572.572 0 0 1-.733.607l-3.411-1.042a.57.57 0 0 0-.722.412l-.857 3.593a.57.57 0 0 1-.808.379L3 8.113v7.069l11.815 3.36a.57.57 0 0 0 .726-.547l.03-6.995a.57.57 0 0 1 .769-.532l2.578.959a.57.57 0 0 0 .76-.64L18.221 3h-.688z'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M18.222 3H21v18H3v-5.818l11.815 3.36a.57.57 0 0 0 .726-.547l.03-6.995a.57.57 0 0 1 .769-.532l2.578.959a.57.57 0 0 0 .76-.64z'
            }
        ],
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M17.534 3H3v5.113l8.59 4.248a.572.572 0 0 0 .807-.379l.857-3.593a.57.57 0 0 1 .722-.412l3.411 1.042a.57.57 0 0 0 .734-.607z'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#wallet-3__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#6286FF',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M17.53 4H20v16H4v-5.172l10.502 2.987a.507.507 0 0 0 .646-.486l.026-6.218a.507.507 0 0 1 .684-.473l2.291.852a.507.507 0 0 0 .675-.568z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M16.92 4H4v4.545l7.635 3.776a.508.508 0 0 0 .718-.337l.761-3.193a.507.507 0 0 1 .642-.367l3.033.926a.507.507 0 0 0 .652-.54z'
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
                        id: 'wallet-3__a'
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
 * @component @name WalletWallet3
 * @description Web3Icon for WalletWallet3
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiM2Mjg2RkYiIGQ9Ik0yMSAzSDN2MThoMTh6Ii8+CiAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTguMTIgOC40MTJhLjU3Mi41NzIgMCAwIDEtLjczMy42MDdsLTMuNDExLTEuMDQyYS41Ny41NyAwIDAgMC0uNzIyLjQxMmwtLjg1NyAzLjU5M2EuNTcuNTcgMCAwIDEtLjgwOC4zNzlMMyA4LjExM3Y3LjA2OWwxMS44MTUgMy4zNmEuNTcuNTcgMCAwIDAgLjcyNi0uNTQ3bC4wMy02Ljk5NWEuNTcuNTcgMCAwIDEgLjc2OS0uNTMybDIuNTc4Ljk1OWEuNTcuNTcgMCAwIDAgLjc2LS42NEwxOC4yMjEgM2gtLjY4OHoiLz4KPC9zdmc+Cg==) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xOC4yMjIgM0gyMXYxOEgzdi01LjgxOGwxMS44MTUgMy4zNmEuNTcuNTcgMCAwIDAgLjcyNi0uNTQ3bC4wMy02Ljk5NWEuNTcuNTcgMCAwIDEgLjc2OS0uNTMybDIuNTc4Ljk1OWEuNTcuNTcgMCAwIDAgLjc2LS42NHoiLz4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xNy41MzQgM0gzdjUuMTEzbDguNTkgNC4yNDhhLjU3Mi41NzIgMCAwIDAgLjgwNy0uMzc5bC44NTctMy41OTNhLjU3LjU3IDAgMCAxIC43MjItLjQxMmwzLjQxMSAxLjA0MmEuNTcuNTcgMCAwIDAgLjczNC0uNjA3eiIvPgo8L3N2Zz4K) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCN3YWxsZXQtM19fYSkiPgogICAgICAgIDxwYXRoIGZpbGw9IiM2Mjg2RkYiIGQ9Ik0yNCAwSDB2MjRoMjR6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTE3LjUzIDRIMjB2MTZINHYtNS4xNzJsMTAuNTAyIDIuOTg3YS41MDcuNTA3IDAgMCAwIC42NDYtLjQ4NmwuMDI2LTYuMjE4YS41MDcuNTA3IDAgMCAxIC42ODQtLjQ3M2wyLjI5MS44NTJhLjUwNy41MDcgMCAwIDAgLjY3NS0uNTY4eiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xNi45MiA0SDR2NC41NDVsNy42MzUgMy43NzZhLjUwOC41MDggMCAwIDAgLjcxOC0uMzM3bC43NjEtMy4xOTNhLjUwNy41MDcgMCAwIDEgLjY0Mi0uMzY3bDMuMDMzLjkyNmEuNTA3LjUwNyAwIDAgMCAuNjUyLS41NHoiLz4KICAgIDwvZz4KICAgIDxkZWZzPgogICAgICAgIDxjbGlwUGF0aCBpZD0id2FsbGV0LTNfX2EiPgogICAgICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMCAwaDI0djI0SDB6Ii8+CiAgICAgICAgPC9jbGlwUGF0aD4KICAgIDwvZGVmcz4KPC9zdmc+Cg==)
 * @see https://web3icons.io/wallets/wallet-3
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const WalletWallet3 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createWeb3Icon"])('WalletWallet3', __iconNode);
;
}),
];

//# sourceMappingURL=1qqr_%40web3icons_react_dist_1xr-94n._.js.map