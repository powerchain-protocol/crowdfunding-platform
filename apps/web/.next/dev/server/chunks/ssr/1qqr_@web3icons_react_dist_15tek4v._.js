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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/wallets/WalletEnkrypt.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>WalletEnkrypt
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-ssr] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#C54AFF',
                d: 'M3 6.464A3.464 3.464 0 0 1 6.464 3H21v2.658a2.49 2.49 0 0 1-2.49 2.49h-6.834a3.464 3.464 0 0 0-3.464 3.463v.881a3.464 3.464 0 0 0 3.464 3.464h6.834a2.49 2.49 0 0 1 2.49 2.49V21H6.464A3.464 3.464 0 0 1 3 17.536zm8.826 3.132h7.01c1.195 0 2.164.97 2.164 2.165v.582c0 1.196-.97 2.165-2.165 2.165h-7.01a2.165 2.165 0 0 1-2.164-2.165v-.582c0-1.196.969-2.165 2.165-2.165',
                fillRule: 'evenodd',
                clipRule: 'evenodd'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M3 6.464A3.464 3.464 0 0 1 6.464 3H21v2.658a2.49 2.49 0 0 1-2.49 2.49h-6.834a3.464 3.464 0 0 0-3.464 3.463v.881a3.464 3.464 0 0 0 3.464 3.464h6.834a2.49 2.49 0 0 1 2.49 2.49V21H6.464A3.464 3.464 0 0 1 3 17.536zm8.826 3.132h7.01c1.195 0 2.164.97 2.164 2.165v.582c0 1.196-.97 2.165-2.165 2.165h-7.01a2.165 2.165 0 0 1-2.164-2.165v-.582c0-1.196.969-2.165 2.165-2.165',
                fillRule: 'evenodd',
                clipRule: 'evenodd'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#enkrypt__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#C54AFF',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M4 7.079A3.08 3.08 0 0 1 7.08 4H20v2.362c0 1.223-.99 2.213-2.213 2.213h-6.075a3.08 3.08 0 0 0-3.079 3.08v.783a3.08 3.08 0 0 0 3.08 3.079h6.074c1.222 0 2.213.99 2.213 2.213V20H7.079A3.08 3.08 0 0 1 4 16.921zm7.845 2.784h6.23c1.064 0 1.925.862 1.925 1.924v.518a1.924 1.924 0 0 1-1.924 1.924h-6.23a1.924 1.924 0 0 1-1.925-1.924v-.518c0-1.062.861-1.924 1.924-1.924',
                        fillRule: 'evenodd',
                        clipRule: 'evenodd'
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
                        id: 'enkrypt__a'
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
 * @component @name WalletEnkrypt
 * @description Web3Icon for WalletEnkrypt
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNDNTRBRkYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTMgNi40NjRBMy40NjQgMy40NjQgMCAwIDEgNi40NjQgM0gyMXYyLjY1OGEyLjQ5IDIuNDkgMCAwIDEtMi40OSAyLjQ5aC02LjgzNGEzLjQ2NCAzLjQ2NCAwIDAgMC0zLjQ2NCAzLjQ2M3YuODgxYTMuNDY0IDMuNDY0IDAgMCAwIDMuNDY0IDMuNDY0aDYuODM0YTIuNDkgMi40OSAwIDAgMSAyLjQ5IDIuNDlWMjFINi40NjRBMy40NjQgMy40NjQgMCAwIDEgMyAxNy41MzZ6bTguODI2IDMuMTMyaDcuMDFjMS4xOTUgMCAyLjE2NC45NyAyLjE2NCAyLjE2NXYuNTgyYzAgMS4xOTYtLjk3IDIuMTY1LTIuMTY1IDIuMTY1aC03LjAxYTIuMTY1IDIuMTY1IDAgMCAxLTIuMTY0LTIuMTY1di0uNTgyYzAtMS4xOTYuOTY5LTIuMTY1IDIuMTY1LTIuMTY1IiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+Cg==) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTMgNi40NjRBMy40NjQgMy40NjQgMCAwIDEgNi40NjQgM0gyMXYyLjY1OGEyLjQ5IDIuNDkgMCAwIDEtMi40OSAyLjQ5aC02LjgzNGEzLjQ2NCAzLjQ2NCAwIDAgMC0zLjQ2NCAzLjQ2M3YuODgxYTMuNDY0IDMuNDY0IDAgMCAwIDMuNDY0IDMuNDY0aDYuODM0YTIuNDkgMi40OSAwIDAgMSAyLjQ5IDIuNDlWMjFINi40NjRBMy40NjQgMy40NjQgMCAwIDEgMyAxNy41MzZ6bTguODI2IDMuMTMyaDcuMDFjMS4xOTUgMCAyLjE2NC45NyAyLjE2NCAyLjE2NXYuNTgyYzAgMS4xOTYtLjk3IDIuMTY1LTIuMTY1IDIuMTY1aC03LjAxYTIuMTY1IDIuMTY1IDAgMCAxLTIuMTY0LTIuMTY1di0uNTgyYzAtMS4xOTYuOTY5LTIuMTY1IDIuMTY1LTIuMTY1IiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+Cg==) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNlbmtyeXB0X19hKSI+CiAgICAgICAgPHBhdGggZmlsbD0iI0M1NEFGRiIgZD0iTTI0IDBIMHYyNGgyNHoiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik00IDcuMDc5QTMuMDggMy4wOCAwIDAgMSA3LjA4IDRIMjB2Mi4zNjJjMCAxLjIyMy0uOTkgMi4yMTMtMi4yMTMgMi4yMTNoLTYuMDc1YTMuMDggMy4wOCAwIDAgMC0zLjA3OSAzLjA4di43ODNhMy4wOCAzLjA4IDAgMCAwIDMuMDggMy4wNzloNi4wNzRjMS4yMjIgMCAyLjIxMy45OSAyLjIxMyAyLjIxM1YyMEg3LjA3OUEzLjA4IDMuMDggMCAwIDEgNCAxNi45MjF6bTcuODQ1IDIuNzg0aDYuMjNjMS4wNjQgMCAxLjkyNS44NjIgMS45MjUgMS45MjR2LjUxOGExLjkyNCAxLjkyNCAwIDAgMS0xLjkyNCAxLjkyNGgtNi4yM2ExLjkyNCAxLjkyNCAwIDAgMS0xLjkyNS0xLjkyNHYtLjUxOGMwLTEuMDYyLjg2MS0xLjkyNCAxLjkyNC0xLjkyNCIgY2xpcC1ydWxlPSJldmVub2RkIi8+CiAgICA8L2c+CiAgICA8ZGVmcz4KICAgICAgICA8Y2xpcFBhdGggaWQ9ImVua3J5cHRfX2EiPgogICAgICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMCAwaDI0djI0SDB6Ii8+CiAgICAgICAgPC9jbGlwUGF0aD4KICAgIDwvZGVmcz4KPC9zdmc+Cg==)
 * @see https://web3icons.io/wallets/enkrypt
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const WalletEnkrypt = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createWeb3Icon"])('WalletEnkrypt', __iconNode);
;
}),
];

//# sourceMappingURL=1qqr_%40web3icons_react_dist_15tek4v._.js.map