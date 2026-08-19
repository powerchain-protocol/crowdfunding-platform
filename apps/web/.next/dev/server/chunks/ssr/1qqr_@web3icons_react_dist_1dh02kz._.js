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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenWWY.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenWWY
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-ssr] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#fff',
                d: 'M3.121 10.623a.485.485 0 0 1 0-.642.387.387 0 0 1 .587 0l3.09 3.396a.5.5 0 0 1 0 .642.387.387 0 0 1-.586 0zm8.372-.642a.5.5 0 0 1 0 .642l-3.09 3.396a.387.387 0 0 1-.587 0 .485.485 0 0 1 0-.642l3.09-3.396a.387.387 0 0 1 .587 0m1.018.642a.485.485 0 0 1 0-.642.385.385 0 0 1 .454-.1q.077.037.132.1l3.091 3.396a.5.5 0 0 1 0 .642.387.387 0 0 1-.587 0zm8.372 0a.5.5 0 0 0 0-.642.387.387 0 0 0-.587 0l-3.09 3.396a.485.485 0 0 0 0 .642.388.388 0 0 0 .586 0z'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M3.121 10.623a.485.485 0 0 1 0-.642.387.387 0 0 1 .587 0l3.09 3.396a.5.5 0 0 1 0 .642.387.387 0 0 1-.586 0zm8.372-.642a.5.5 0 0 1 0 .642l-3.09 3.396a.387.387 0 0 1-.587 0 .485.485 0 0 1 0-.642l3.09-3.396a.387.387 0 0 1 .587 0m1.018.642a.485.485 0 0 1 0-.642.385.385 0 0 1 .454-.1q.077.037.132.1l3.091 3.396a.5.5 0 0 1 0 .642.387.387 0 0 1-.587 0zm8.372 0a.5.5 0 0 0 0-.642.387.387 0 0 0-.587 0l-3.09 3.396a.485.485 0 0 0 0 .642.388.388 0 0 0 .586 0z'
            }
        ]
    ],
    background: [
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
                d: 'M4.108 10.776a.43.43 0 0 1 0-.57.345.345 0 0 1 .521 0l2.748 3.018a.44.44 0 0 1 0 .57.344.344 0 0 1-.522 0zm7.442-.57a.44.44 0 0 1 0 .57l-2.748 3.018a.344.344 0 0 1-.521 0 .43.43 0 0 1 0-.57l2.747-3.018a.35.35 0 0 1 .404-.089q.068.031.118.088m.904.57a.43.43 0 0 1 0-.57.345.345 0 0 1 .521 0l2.748 3.018a.44.44 0 0 1 0 .57.344.344 0 0 1-.522 0zm7.442 0a.44.44 0 0 0 0-.57.35.35 0 0 0-.405-.089.4.4 0 0 0-.117.088l-2.747 3.019a.43.43 0 0 0 0 .57.345.345 0 0 0 .521 0z'
            }
        ]
    ]
};
/**
 * @component @name TokenWWY
 * @description Web3Icon for TokenWWY
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0zLjEyMSAxMC42MjNhLjQ4NS40ODUgMCAwIDEgMC0uNjQyLjM4Ny4zODcgMCAwIDEgLjU4NyAwbDMuMDkgMy4zOTZhLjUuNSAwIDAgMSAwIC42NDIuMzg3LjM4NyAwIDAgMS0uNTg2IDB6bTguMzcyLS42NDJhLjUuNSAwIDAgMSAwIC42NDJsLTMuMDkgMy4zOTZhLjM4Ny4zODcgMCAwIDEtLjU4NyAwIC40ODUuNDg1IDAgMCAxIDAtLjY0MmwzLjA5LTMuMzk2YS4zODcuMzg3IDAgMCAxIC41ODcgMG0xLjAxOC42NDJhLjQ4NS40ODUgMCAwIDEgMC0uNjQyLjM4NS4zODUgMCAwIDEgLjQ1NC0uMXEuMDc3LjAzNy4xMzIuMWwzLjA5MSAzLjM5NmEuNS41IDAgMCAxIDAgLjY0Mi4zODcuMzg3IDAgMCAxLS41ODcgMHptOC4zNzIgMGEuNS41IDAgMCAwIDAtLjY0Mi4zODcuMzg3IDAgMCAwLS41ODcgMGwtMy4wOSAzLjM5NmEuNDg1LjQ4NSAwIDAgMCAwIC42NDIuMzg4LjM4OCAwIDAgMCAuNTg2IDB6Ii8+Cjwvc3ZnPgo=) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0zLjEyMSAxMC42MjNhLjQ4NS40ODUgMCAwIDEgMC0uNjQyLjM4Ny4zODcgMCAwIDEgLjU4NyAwbDMuMDkgMy4zOTZhLjUuNSAwIDAgMSAwIC42NDIuMzg3LjM4NyAwIDAgMS0uNTg2IDB6bTguMzcyLS42NDJhLjUuNSAwIDAgMSAwIC42NDJsLTMuMDkgMy4zOTZhLjM4Ny4zODcgMCAwIDEtLjU4NyAwIC40ODUuNDg1IDAgMCAxIDAtLjY0MmwzLjA5LTMuMzk2YS4zODcuMzg3IDAgMCAxIC41ODcgMG0xLjAxOC42NDJhLjQ4NS40ODUgMCAwIDEgMC0uNjQyLjM4NS4zODUgMCAwIDEgLjQ1NC0uMXEuMDc3LjAzNy4xMzIuMWwzLjA5MSAzLjM5NmEuNS41IDAgMCAxIDAgLjY0Mi4zODcuMzg3IDAgMCAxLS41ODcgMHptOC4zNzIgMGEuNS41IDAgMCAwIDAtLjY0Mi4zODcuMzg3IDAgMCAwLS41ODcgMGwtMy4wOSAzLjM5NmEuNDg1LjQ4NSAwIDAgMCAwIC42NDIuMzg4LjM4OCAwIDAgMCAuNTg2IDB6Ii8+Cjwvc3ZnPgo=) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiMwMDAiIGQ9Ik0yNCAwSDB2MjRoMjR6Ii8+CiAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNNC4xMDggMTAuNzc2YS40My40MyAwIDAgMSAwLS41Ny4zNDUuMzQ1IDAgMCAxIC41MjEgMGwyLjc0OCAzLjAxOGEuNDQuNDQgMCAwIDEgMCAuNTcuMzQ0LjM0NCAwIDAgMS0uNTIyIDB6bTcuNDQyLS41N2EuNDQuNDQgMCAwIDEgMCAuNTdsLTIuNzQ4IDMuMDE4YS4zNDQuMzQ0IDAgMCAxLS41MjEgMCAuNDMuNDMgMCAwIDEgMC0uNTdsMi43NDctMy4wMThhLjM1LjM1IDAgMCAxIC40MDQtLjA4OXEuMDY4LjAzMS4xMTguMDg4bS45MDQuNTdhLjQzLjQzIDAgMCAxIDAtLjU3LjM0NS4zNDUgMCAwIDEgLjUyMSAwbDIuNzQ4IDMuMDE4YS40NC40NCAwIDAgMSAwIC41Ny4zNDQuMzQ0IDAgMCAxLS41MjIgMHptNy40NDIgMGEuNDQuNDQgMCAwIDAgMC0uNTcuMzUuMzUgMCAwIDAtLjQwNS0uMDg5LjQuNCAwIDAgMC0uMTE3LjA4OGwtMi43NDcgMy4wMTlhLjQzLjQzIDAgMCAwIDAgLjU3LjM0NS4zNDUgMCAwIDAgLjUyMSAweiIvPgo8L3N2Zz4K)
 * @see https://web3icons.io/tokens/WWY
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenWWY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenWWY', __iconNode);
;
}),
];

//# sourceMappingURL=1qqr_%40web3icons_react_dist_1dh02kz._.js.map