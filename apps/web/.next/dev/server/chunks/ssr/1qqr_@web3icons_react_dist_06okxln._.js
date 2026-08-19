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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/wallets/WalletPhantom.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>WalletPhantom
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-ssr] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#AB9FF2',
                d: 'M5.13 19.2c2.297 0 4.023-1.92 5.053-3.436a2.9 2.9 0 0 0-.195.994c0 .885.53 1.516 1.574 1.516 1.433 0 2.965-1.208 3.758-2.51a2 2 0 0 0-.083.524c0 .617.362 1.006 1.1 1.006 2.324 0 4.663-3.959 4.663-7.421C21 7.175 19.58 4.8 16.016 4.8 9.752 4.8 3 12.154 3 16.905 3 18.771 4.044 19.2 5.13 19.2m8.729-9.622c0-.671.39-1.141.96-1.141.557 0 .947.47.947 1.14 0 .672-.39 1.155-.947 1.155-.57 0-.96-.483-.96-1.154m2.979 0c0-.671.39-1.141.96-1.141.557 0 .947.47.947 1.14 0 .672-.39 1.155-.947 1.155-.57 0-.96-.483-.96-1.154'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M5.13 19.2c2.297 0 4.023-1.92 5.053-3.436a2.9 2.9 0 0 0-.195.994c0 .885.53 1.516 1.574 1.516 1.433 0 2.965-1.208 3.758-2.51a2 2 0 0 0-.083.524c0 .617.362 1.006 1.1 1.006 2.324 0 4.663-3.959 4.663-7.421C21 7.175 19.58 4.8 16.016 4.8 9.752 4.8 3 12.154 3 16.905 3 18.771 4.044 19.2 5.13 19.2m8.729-9.622c0-.671.39-1.141.96-1.141.557 0 .947.47.947 1.14 0 .672-.39 1.155-.947 1.155-.57 0-.96-.483-.96-1.154m2.979 0c0-.671.39-1.141.96-1.141.557 0 .947.47.947 1.14 0 .672-.39 1.155-.947 1.155-.57 0-.96-.483-.96-1.154'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#phantom__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#AB9FF2',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M5.893 18.4c2.042 0 3.576-1.706 4.492-3.054a2.5 2.5 0 0 0-.173.883c0 .787.47 1.348 1.398 1.348 1.275 0 2.636-1.074 3.341-2.23q-.075.25-.074.464c0 .55.322.895.978.895 2.066 0 4.145-3.52 4.145-6.597C20 7.711 18.738 5.6 15.57 5.6 10.002 5.6 4 12.137 4 16.36c0 1.658.928 2.04 1.893 2.04m7.759-8.553c0-.597.347-1.014.854-1.014.495 0 .841.417.841 1.014 0 .596-.346 1.026-.841 1.026-.508 0-.854-.43-.854-1.026m2.648 0c0-.597.347-1.014.854-1.014.495 0 .841.417.841 1.014 0 .596-.346 1.026-.841 1.026-.507 0-.854-.43-.854-1.026'
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
                        id: 'phantom__a'
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
 * @component @name WalletPhantom
 * @description Web3Icon for WalletPhantom
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNBQjlGRjIiIGQ9Ik01LjEzIDE5LjJjMi4yOTcgMCA0LjAyMy0xLjkyIDUuMDUzLTMuNDM2YTIuOSAyLjkgMCAwIDAtLjE5NS45OTRjMCAuODg1LjUzIDEuNTE2IDEuNTc0IDEuNTE2IDEuNDMzIDAgMi45NjUtMS4yMDggMy43NTgtMi41MWEyIDIgMCAwIDAtLjA4My41MjRjMCAuNjE3LjM2MiAxLjAwNiAxLjEgMS4wMDYgMi4zMjQgMCA0LjY2My0zLjk1OSA0LjY2My03LjQyMUMyMSA3LjE3NSAxOS41OCA0LjggMTYuMDE2IDQuOCA5Ljc1MiA0LjggMyAxMi4xNTQgMyAxNi45MDUgMyAxOC43NzEgNC4wNDQgMTkuMiA1LjEzIDE5LjJtOC43MjktOS42MjJjMC0uNjcxLjM5LTEuMTQxLjk2LTEuMTQxLjU1NyAwIC45NDcuNDcuOTQ3IDEuMTQgMCAuNjcyLS4zOSAxLjE1NS0uOTQ3IDEuMTU1LS41NyAwLS45Ni0uNDgzLS45Ni0xLjE1NG0yLjk3OSAwYzAtLjY3MS4zOS0xLjE0MS45Ni0xLjE0MS41NTcgMCAuOTQ3LjQ3Ljk0NyAxLjE0IDAgLjY3Mi0uMzkgMS4xNTUtLjk0NyAxLjE1NS0uNTcgMC0uOTYtLjQ4My0uOTYtMS4xNTQiLz4KPC9zdmc+Cg==) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik01LjEzIDE5LjJjMi4yOTcgMCA0LjAyMy0xLjkyIDUuMDUzLTMuNDM2YTIuOSAyLjkgMCAwIDAtLjE5NS45OTRjMCAuODg1LjUzIDEuNTE2IDEuNTc0IDEuNTE2IDEuNDMzIDAgMi45NjUtMS4yMDggMy43NTgtMi41MWEyIDIgMCAwIDAtLjA4My41MjRjMCAuNjE3LjM2MiAxLjAwNiAxLjEgMS4wMDYgMi4zMjQgMCA0LjY2My0zLjk1OSA0LjY2My03LjQyMUMyMSA3LjE3NSAxOS41OCA0LjggMTYuMDE2IDQuOCA5Ljc1MiA0LjggMyAxMi4xNTQgMyAxNi45MDUgMyAxOC43NzEgNC4wNDQgMTkuMiA1LjEzIDE5LjJtOC43MjktOS42MjJjMC0uNjcxLjM5LTEuMTQxLjk2LTEuMTQxLjU1NyAwIC45NDcuNDcuOTQ3IDEuMTQgMCAuNjcyLS4zOSAxLjE1NS0uOTQ3IDEuMTU1LS41NyAwLS45Ni0uNDgzLS45Ni0xLjE1NG0yLjk3OSAwYzAtLjY3MS4zOS0xLjE0MS45Ni0xLjE0MS41NTcgMCAuOTQ3LjQ3Ljk0NyAxLjE0IDAgLjY3Mi0uMzkgMS4xNTUtLjk0NyAxLjE1NS0uNTcgMC0uOTYtLjQ4My0uOTYtMS4xNTQiLz4KPC9zdmc+Cg==) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNwaGFudG9tX19hKSI+CiAgICAgICAgPHBhdGggZmlsbD0iI0FCOUZGMiIgZD0iTTI0IDBIMHYyNGgyNHoiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNNS44OTMgMTguNGMyLjA0MiAwIDMuNTc2LTEuNzA2IDQuNDkyLTMuMDU0YTIuNSAyLjUgMCAwIDAtLjE3My44ODNjMCAuNzg3LjQ3IDEuMzQ4IDEuMzk4IDEuMzQ4IDEuMjc1IDAgMi42MzYtMS4wNzQgMy4zNDEtMi4yM3EtLjA3NS4yNS0uMDc0LjQ2NGMwIC41NS4zMjIuODk1Ljk3OC44OTUgMi4wNjYgMCA0LjE0NS0zLjUyIDQuMTQ1LTYuNTk3QzIwIDcuNzExIDE4LjczOCA1LjYgMTUuNTcgNS42IDEwLjAwMiA1LjYgNCAxMi4xMzcgNCAxNi4zNmMwIDEuNjU4LjkyOCAyLjA0IDEuODkzIDIuMDRtNy43NTktOC41NTNjMC0uNTk3LjM0Ny0xLjAxNC44NTQtMS4wMTQuNDk1IDAgLjg0MS40MTcuODQxIDEuMDE0IDAgLjU5Ni0uMzQ2IDEuMDI2LS44NDEgMS4wMjYtLjUwOCAwLS44NTQtLjQzLS44NTQtMS4wMjZtMi42NDggMGMwLS41OTcuMzQ3LTEuMDE0Ljg1NC0xLjAxNC40OTUgMCAuODQxLjQxNy44NDEgMS4wMTQgMCAuNTk2LS4zNDYgMS4wMjYtLjg0MSAxLjAyNi0uNTA3IDAtLjg1NC0uNDMtLjg1NC0xLjAyNiIvPgogICAgPC9nPgogICAgPGRlZnM+CiAgICAgICAgPGNsaXBQYXRoIGlkPSJwaGFudG9tX19hIj4KICAgICAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTAgMGgyNHYyNEgweiIvPgogICAgICAgIDwvY2xpcFBhdGg+CiAgICA8L2RlZnM+Cjwvc3ZnPgo=)
 * @see https://web3icons.io/wallets/phantom
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const WalletPhantom = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createWeb3Icon"])('WalletPhantom', __iconNode);
;
}),
];

//# sourceMappingURL=1qqr_%40web3icons_react_dist_06okxln._.js.map