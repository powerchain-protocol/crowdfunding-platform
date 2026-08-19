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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/wallets/WalletMyEtherWallet.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>WalletMyEtherWallet
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-ssr] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#fff',
                d: 'M12 18.463a6.463 6.463 0 1 0 0-12.925 6.463 6.463 0 0 0 0 12.925'
            }
        ],
        [
            'path',
            {
                fill: '#1896A4',
                d: 'M3 12a9 9 0 0 0 9 9 9 9 0 0 0 9-9 9 9 0 1 0-18 0m9 5.656c-3.042 0-5.65-2.467-5.65-5.51 0-.714.135-1.538.382-2.165l2.429 1.035-.03.128a3 3 0 0 0-.125.73A1 1 0 0 0 9 12.02l.003.033a2.982 2.982 0 0 0 3.661 2.867l1.38 2.344a5.5 5.5 0 0 1-2.042.39m5.213-3.417-6.162-2.61 3.951-.018c-.14-1.434-1.614-2.598-3.004-2.598-.315 0-.628.052-.926.155L9.706 6.843A5.5 5.5 0 0 1 12 6.345c3.042 0 5.642 2.512 5.642 5.554 0 .82-.106 1.64-.428 2.34'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M3 12a9 9 0 0 0 9 9 9 9 0 0 0 9-9 9 9 0 1 0-18 0m9 5.656c-3.042 0-5.65-2.467-5.65-5.51 0-.714.135-1.538.382-2.165l2.429 1.035-.03.128a3 3 0 0 0-.125.73A1 1 0 0 0 9 12.02l.003.033a2.982 2.982 0 0 0 3.661 2.867l1.38 2.344a5.5 5.5 0 0 1-2.042.39m5.213-3.417-6.162-2.61 3.951-.018c-.14-1.434-1.614-2.598-3.004-2.598-.315 0-.628.052-.926.155L9.706 6.843A5.5 5.5 0 0 1 12 6.345c3.042 0 5.642 2.512 5.642 5.554 0 .82-.106 1.64-.428 2.34'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#my-ether-wallet__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#1896A4',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M4 12a8 8 0 1 0 16 0 8 8 0 0 0-16 0m8 5.027c-2.704 0-5.023-2.192-5.023-4.897 0-.635.121-1.368.34-1.924l2.16.919q-.012.046-.026.114a2.7 2.7 0 0 0-.117.78l.002.03a2.65 2.65 0 0 0 3.255 2.548l1.226 2.083a4.9 4.9 0 0 1-1.815.347m4.633-3.038-5.477-2.32 3.513-.016c-.126-1.274-1.436-2.309-2.67-2.309-.281 0-.56.046-.824.138L9.96 7.416A4.9 4.9 0 0 1 12 6.973c2.704 0 5.015 2.233 5.015 4.937 0 .729-.094 1.458-.38 2.08'
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
                        id: 'my-ether-wallet__a'
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
 * @component @name WalletMyEtherWallet
 * @description Web3Icon for WalletMyEtherWallet
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xMiAxOC40NjNhNi40NjMgNi40NjMgMCAxIDAgMC0xMi45MjUgNi40NjMgNi40NjMgMCAwIDAgMCAxMi45MjUiLz4KICAgIDxwYXRoIGZpbGw9IiMxODk2QTQiIGQ9Ik0zIDEyYTkgOSAwIDAgMCA5IDkgOSA5IDAgMCAwIDktOSA5IDkgMCAxIDAtMTggMG05IDUuNjU2Yy0zLjA0MiAwLTUuNjUtMi40NjctNS42NS01LjUxIDAtLjcxNC4xMzUtMS41MzguMzgyLTIuMTY1bDIuNDI5IDEuMDM1LS4wMy4xMjhhMyAzIDAgMCAwLS4xMjUuNzNBMSAxIDAgMCAwIDkgMTIuMDJsLjAwMy4wMzNhMi45ODIgMi45ODIgMCAwIDAgMy42NjEgMi44NjdsMS4zOCAyLjM0NGE1LjUgNS41IDAgMCAxLTIuMDQyLjM5bTUuMjEzLTMuNDE3LTYuMTYyLTIuNjEgMy45NTEtLjAxOGMtLjE0LTEuNDM0LTEuNjE0LTIuNTk4LTMuMDA0LTIuNTk4LS4zMTUgMC0uNjI4LjA1Mi0uOTI2LjE1NUw5LjcwNiA2Ljg0M0E1LjUgNS41IDAgMCAxIDEyIDYuMzQ1YzMuMDQyIDAgNS42NDIgMi41MTIgNS42NDIgNS41NTQgMCAuODItLjEwNiAxLjY0LS40MjggMi4zNCIvPgo8L3N2Zz4K) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0zIDEyYTkgOSAwIDAgMCA5IDkgOSA5IDAgMCAwIDktOSA5IDkgMCAxIDAtMTggMG05IDUuNjU2Yy0zLjA0MiAwLTUuNjUtMi40NjctNS42NS01LjUxIDAtLjcxNC4xMzUtMS41MzguMzgyLTIuMTY1bDIuNDI5IDEuMDM1LS4wMy4xMjhhMyAzIDAgMCAwLS4xMjUuNzNBMSAxIDAgMCAwIDkgMTIuMDJsLjAwMy4wMzNhMi45ODIgMi45ODIgMCAwIDAgMy42NjEgMi44NjdsMS4zOCAyLjM0NGE1LjUgNS41IDAgMCAxLTIuMDQyLjM5bTUuMjEzLTMuNDE3LTYuMTYyLTIuNjEgMy45NTEtLjAxOGMtLjE0LTEuNDM0LTEuNjE0LTIuNTk4LTMuMDA0LTIuNTk4LS4zMTUgMC0uNjI4LjA1Mi0uOTI2LjE1NUw5LjcwNiA2Ljg0M0E1LjUgNS41IDAgMCAxIDEyIDYuMzQ1YzMuMDQyIDAgNS42NDIgMi41MTIgNS42NDIgNS41NTQgMCAuODItLjEwNiAxLjY0LS40MjggMi4zNCIvPgo8L3N2Zz4K) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNteS1ldGhlci13YWxsZXRfX2EpIj4KICAgICAgICA8cGF0aCBmaWxsPSIjMTg5NkE0IiBkPSJNMjQgMEgwdjI0aDI0eiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik00IDEyYTggOCAwIDEgMCAxNiAwIDggOCAwIDAgMC0xNiAwbTggNS4wMjdjLTIuNzA0IDAtNS4wMjMtMi4xOTItNS4wMjMtNC44OTcgMC0uNjM1LjEyMS0xLjM2OC4zNC0xLjkyNGwyLjE2LjkxOXEtLjAxMi4wNDYtLjAyNi4xMTRhMi43IDIuNyAwIDAgMC0uMTE3Ljc4bC4wMDIuMDNhMi42NSAyLjY1IDAgMCAwIDMuMjU1IDIuNTQ4bDEuMjI2IDIuMDgzYTQuOSA0LjkgMCAwIDEtMS44MTUuMzQ3bTQuNjMzLTMuMDM4LTUuNDc3LTIuMzIgMy41MTMtLjAxNmMtLjEyNi0xLjI3NC0xLjQzNi0yLjMwOS0yLjY3LTIuMzA5LS4yODEgMC0uNTYuMDQ2LS44MjQuMTM4TDkuOTYgNy40MTZBNC45IDQuOSAwIDAgMSAxMiA2Ljk3M2MyLjcwNCAwIDUuMDE1IDIuMjMzIDUuMDE1IDQuOTM3IDAgLjcyOS0uMDk0IDEuNDU4LS4zOCAyLjA4Ii8+CiAgICA8L2c+CiAgICA8ZGVmcz4KICAgICAgICA8Y2xpcFBhdGggaWQ9Im15LWV0aGVyLXdhbGxldF9fYSI+CiAgICAgICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0wIDBoMjR2MjRIMHoiLz4KICAgICAgICA8L2NsaXBQYXRoPgogICAgPC9kZWZzPgo8L3N2Zz4K)
 * @see https://web3icons.io/wallets/my-ether-wallet
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const WalletMyEtherWallet = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createWeb3Icon"])('WalletMyEtherWallet', __iconNode);
;
}),
];

//# sourceMappingURL=1qqr_%40web3icons_react_dist_0eizvql._.js.map