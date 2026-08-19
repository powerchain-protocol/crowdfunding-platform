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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenMARSH.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenMARSH
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-ssr] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#34D399',
                d: 'M9.187 9.131 7.5 8.141v5.546c0 2.177 2.014 3.938 4.5 3.938s4.5-1.76 4.5-3.938V5.813h-6.16l2.909 1.63h1.563v6.244c0 1.238-1.26 2.25-2.812 2.25-1.553 0-2.813-1.012-2.813-2.25zm-3.375-1.98v7.38c0 2.644 2.768 4.781 6.188 4.781s6.188-2.137 6.188-4.78V4.686H8.332L5.317 3h14.558v11.25c0 3.73-3.527 6.75-7.875 6.75s-7.875-3.02-7.875-6.75V6.161z'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M9.187 9.131 7.5 8.141v5.546c0 2.177 2.014 3.938 4.5 3.938s4.5-1.76 4.5-3.938V5.813h-6.16l2.909 1.63h1.563v6.244c0 1.238-1.26 2.25-2.812 2.25-1.553 0-2.813-1.012-2.813-2.25zm-3.375-1.98v7.38c0 2.644 2.768 4.781 6.188 4.781s6.188-2.137 6.188-4.78V4.686H8.332L5.317 3h14.558v11.25c0 3.73-3.527 6.75-7.875 6.75s-7.875-3.02-7.875-6.75V6.161z'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#MARSH__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#34D399',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M9.5 9.45 8 8.57v4.93c0 1.935 1.79 3.5 4 3.5s4-1.565 4-3.5v-7h-5.475l2.585 1.45h1.39v5.55c0 1.1-1.12 2-2.5 2s-2.5-.9-2.5-2zm-3-1.76v6.56c0 2.35 2.46 4.25 5.5 4.25s5.5-1.9 5.5-4.25V5.5H8.74L6.06 4H19v10c0 3.315-3.135 6-7 6s-7-2.685-7-6V6.81z'
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
                        id: 'MARSH__a'
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
 * @component @name TokenMARSH
 * @description Web3Icon for TokenMARSH
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiMzNEQzOTkiIGQ9Ik05LjE4NyA5LjEzMSA3LjUgOC4xNDF2NS41NDZjMCAyLjE3NyAyLjAxNCAzLjkzOCA0LjUgMy45MzhzNC41LTEuNzYgNC41LTMuOTM4VjUuODEzaC02LjE2bDIuOTA5IDEuNjNoMS41NjN2Ni4yNDRjMCAxLjIzOC0xLjI2IDIuMjUtMi44MTIgMi4yNS0xLjU1MyAwLTIuODEzLTEuMDEyLTIuODEzLTIuMjV6bS0zLjM3NS0xLjk4djcuMzhjMCAyLjY0NCAyLjc2OCA0Ljc4MSA2LjE4OCA0Ljc4MXM2LjE4OC0yLjEzNyA2LjE4OC00Ljc4VjQuNjg2SDguMzMyTDUuMzE3IDNoMTQuNTU4djExLjI1YzAgMy43My0zLjUyNyA2Ljc1LTcuODc1IDYuNzVzLTcuODc1LTMuMDItNy44NzUtNi43NVY2LjE2MXoiLz4KPC9zdmc+Cg==) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik05LjE4NyA5LjEzMSA3LjUgOC4xNDF2NS41NDZjMCAyLjE3NyAyLjAxNCAzLjkzOCA0LjUgMy45MzhzNC41LTEuNzYgNC41LTMuOTM4VjUuODEzaC02LjE2bDIuOTA5IDEuNjNoMS41NjN2Ni4yNDRjMCAxLjIzOC0xLjI2IDIuMjUtMi44MTIgMi4yNS0xLjU1MyAwLTIuODEzLTEuMDEyLTIuODEzLTIuMjV6bS0zLjM3NS0xLjk4djcuMzhjMCAyLjY0NCAyLjc2OCA0Ljc4MSA2LjE4OCA0Ljc4MXM2LjE4OC0yLjEzNyA2LjE4OC00Ljc4VjQuNjg2SDguMzMyTDUuMzE3IDNoMTQuNTU4djExLjI1YzAgMy43My0zLjUyNyA2Ljc1LTcuODc1IDYuNzVzLTcuODc1LTMuMDItNy44NzUtNi43NVY2LjE2MXoiLz4KPC9zdmc+Cg==) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNNQVJTSF9fYSkiPgogICAgICAgIDxwYXRoIGZpbGw9IiMzNEQzOTkiIGQ9Ik0yNCAwSDB2MjRoMjR6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTkuNSA5LjQ1IDggOC41N3Y0LjkzYzAgMS45MzUgMS43OSAzLjUgNCAzLjVzNC0xLjU2NSA0LTMuNXYtN2gtNS40NzVsMi41ODUgMS40NWgxLjM5djUuNTVjMCAxLjEtMS4xMiAyLTIuNSAycy0yLjUtLjktMi41LTJ6bS0zLTEuNzZ2Ni41NmMwIDIuMzUgMi40NiA0LjI1IDUuNSA0LjI1czUuNS0xLjkgNS41LTQuMjVWNS41SDguNzRMNi4wNiA0SDE5djEwYzAgMy4zMTUtMy4xMzUgNi03IDZzLTctMi42ODUtNy02VjYuODF6Ii8+CiAgICA8L2c+CiAgICA8ZGVmcz4KICAgICAgICA8Y2xpcFBhdGggaWQ9Ik1BUlNIX19hIj4KICAgICAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTAgMGgyNHYyNEgweiIvPgogICAgICAgIDwvY2xpcFBhdGg+CiAgICA8L2RlZnM+Cjwvc3ZnPgo=)
 * @see https://web3icons.io/tokens/MARSH
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenMARSH = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenMARSH', __iconNode);
;
}),
];

//# sourceMappingURL=1qqr_%40web3icons_react_dist_185z29h._.js.map