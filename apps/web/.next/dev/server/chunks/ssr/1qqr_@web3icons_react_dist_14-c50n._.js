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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenLORDS.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenLORDS
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-ssr] (ecmascript)");
;
const __iconNode = {
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M3.54 19.875 3 16.472h.4a3.74 3.74 0 0 0 1.912 2.56h2.852c.602 0 1.091-.372 1.091-.98v-1.068c-2.475-1.13-2.897-3.86-2.88-5.08 0-2.722 1.49-4.258 2.323-4.68l-1.457-.573v-.276h1.384v-2.25h.76v1.108c0 .636.506 1.142 1.141 1.142a1.14 1.14 0 0 0 1.142-1.142V4.125h.664v1.108c0 .636.506 1.153 1.142 1.153.63 0 1.142-.517 1.142-1.153V4.125h.759v2.25h1.384v.276l-1.457.573c.832.422 2.323 1.958 2.323 4.68.017 1.22-.4 3.95-2.88 5.074v1.069c0 .613.49.984 1.091.984h2.852a3.74 3.74 0 0 0 1.913-2.56H21l-.54 3.404h-6.773V7.5h-3.374v12.375zm5.647-4.247V8.175C8.625 8.541 7.5 9.801 7.5 11.887c0 2.093 1.125 3.364 1.687 3.741m5.626 0V8.175c.562.366 1.687 1.626 1.687 3.712 0 2.093-1.125 3.364-1.687 3.741',
                fillRule: 'evenodd',
                clipRule: 'evenodd'
            }
        ]
    ]
};
/**
 * @component @name TokenLORDS
 * @description Web3Icon for TokenLORDS
 *
 * @preview (mono)
 * @preview ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTMuNTQgMTkuODc1IDMgMTYuNDcyaC40YTMuNzQgMy43NCAwIDAgMCAxLjkxMiAyLjU2aDIuODUyYy42MDIgMCAxLjA5MS0uMzcyIDEuMDkxLS45OHYtMS4wNjhjLTIuNDc1LTEuMTMtMi44OTctMy44Ni0yLjg4LTUuMDggMC0yLjcyMiAxLjQ5LTQuMjU4IDIuMzIzLTQuNjhsLTEuNDU3LS41NzN2LS4yNzZoMS4zODR2LTIuMjVoLjc2djEuMTA4YzAgLjYzNi41MDYgMS4xNDIgMS4xNDEgMS4xNDJhMS4xNCAxLjE0IDAgMCAwIDEuMTQyLTEuMTQyVjQuMTI1aC42NjR2MS4xMDhjMCAuNjM2LjUwNiAxLjE1MyAxLjE0MiAxLjE1My42MyAwIDEuMTQyLS41MTcgMS4xNDItMS4xNTNWNC4xMjVoLjc1OXYyLjI1aDEuMzg0di4yNzZsLTEuNDU3LjU3M2MuODMyLjQyMiAyLjMyMyAxLjk1OCAyLjMyMyA0LjY4LjAxNyAxLjIyLS40IDMuOTUtMi44OCA1LjA3NHYxLjA2OWMwIC42MTMuNDkuOTg0IDEuMDkxLjk4NGgyLjg1MmEzLjc0IDMuNzQgMCAwIDAgMS45MTMtMi41NkgyMWwtLjU0IDMuNDA0aC02Ljc3M1Y3LjVoLTMuMzc0djEyLjM3NXptNS42NDctNC4yNDdWOC4xNzVDOC42MjUgOC41NDEgNy41IDkuODAxIDcuNSAxMS44ODdjMCAyLjA5MyAxLjEyNSAzLjM2NCAxLjY4NyAzLjc0MW01LjYyNiAwVjguMTc1Yy41NjIuMzY2IDEuNjg3IDEuNjI2IDEuNjg3IDMuNzEyIDAgMi4wOTMtMS4xMjUgMy4zNjQtMS42ODcgMy43NDEiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4K)
 * @see https://web3icons.io/tokens/LORDS
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenLORDS = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenLORDS', __iconNode);
;
}),
];

//# sourceMappingURL=1qqr_%40web3icons_react_dist_14-c50n._.js.map