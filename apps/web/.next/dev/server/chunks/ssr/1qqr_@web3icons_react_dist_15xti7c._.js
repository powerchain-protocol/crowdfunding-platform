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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenROOBEE.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenROOBEE
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-ssr] (ecmascript)");
;
const __iconNode = {
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M3.8 11.64V11H3v2.8h.8v-1.305l1.308-.856-.36-.64zm3 1.36c-.336 0-.6-.26-.6-.6s.256-.6.6-.6.6.24.6.6-.264.6-.6.6m0-2c-.82 0-1.4.64-1.4 1.4s.56 1.4 1.4 1.4 1.4-.64 1.4-1.4c0-.805-.58-1.4-1.4-1.4m3.2 2c-.36 0-.612-.253-.6-.6.012-.345.236-.597.6-.6.364-.005.6.251.6.6 0 .347-.24.6-.6.6m0-2a1.36 1.36 0 0 0-1.4 1.4c0 .76.58 1.4 1.4 1.4s1.4-.64 1.4-1.4c0-.8-.616-1.4-1.4-1.4m3.2 2c-.336 0-.616-.24-.6-.6s.252-.6.6-.6.6.24.6.6-.264.6-.6.6m0-2c-.268 0-.592.103-.772.195V10.2H11.8v2.2c0 .76.56 1.4 1.4 1.4s1.4-.64 1.4-1.4-.64-1.4-1.4-1.4m2.6 1.2c0-.353.224-.56.6-.56s.6.207.6.56zm.6-1.2c-.692 0-1.408.46-1.4 1.4a1.35 1.35 0 0 0 1.4 1.4c.4 0 .864-.149 1.088-.373l.044-.04-.448-.404c-.136.132-.456.216-.64.216-.412 0-.644-.292-.644-.6h2v-.24c0-.808-.64-1.36-1.4-1.36m2.6 1.2c0-.313.2-.56.6-.56s.6.251.6.56zm.6-1.2c-.66 0-1.404.415-1.4 1.4.004.983.812 1.387 1.5 1.387.4 0 .76-.136.988-.36l.04-.04-.444-.404a.84.84 0 0 1-.54.216c-.404 0-.744-.264-.744-.6h2v-.24c0-.808-.64-1.36-1.4-1.36'
            }
        ]
    ]
};
/**
 * @component @name TokenROOBEE
 * @description Web3Icon for TokenROOBEE
 *
 * @preview (mono)
 * @preview ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0zLjggMTEuNjRWMTFIM3YyLjhoLjh2LTEuMzA1bDEuMzA4LS44NTYtLjM2LS42NHptMyAxLjM2Yy0uMzM2IDAtLjYtLjI2LS42LS42cy4yNTYtLjYuNi0uNi42LjI0LjYuNi0uMjY0LjYtLjYuNm0wLTJjLS44MiAwLTEuNC42NC0xLjQgMS40cy41NiAxLjQgMS40IDEuNCAxLjQtLjY0IDEuNC0xLjRjMC0uODA1LS41OC0xLjQtMS40LTEuNG0zLjIgMmMtLjM2IDAtLjYxMi0uMjUzLS42LS42LjAxMi0uMzQ1LjIzNi0uNTk3LjYtLjYuMzY0LS4wMDUuNi4yNTEuNi42IDAgLjM0Ny0uMjQuNi0uNi42bTAtMmExLjM2IDEuMzYgMCAwIDAtMS40IDEuNGMwIC43Ni41OCAxLjQgMS40IDEuNHMxLjQtLjY0IDEuNC0xLjRjMC0uOC0uNjE2LTEuNC0xLjQtMS40bTMuMiAyYy0uMzM2IDAtLjYxNi0uMjQtLjYtLjZzLjI1Mi0uNi42LS42LjYuMjQuNi42LS4yNjQuNi0uNi42bTAtMmMtLjI2OCAwLS41OTIuMTAzLS43NzIuMTk1VjEwLjJIMTEuOHYyLjJjMCAuNzYuNTYgMS40IDEuNCAxLjRzMS40LS42NCAxLjQtMS40LS42NC0xLjQtMS40LTEuNG0yLjYgMS4yYzAtLjM1My4yMjQtLjU2LjYtLjU2cy42LjIwNy42LjU2em0uNi0xLjJjLS42OTIgMC0xLjQwOC40Ni0xLjQgMS40YTEuMzUgMS4zNSAwIDAgMCAxLjQgMS40Yy40IDAgLjg2NC0uMTQ5IDEuMDg4LS4zNzNsLjA0NC0uMDQtLjQ0OC0uNDA0Yy0uMTM2LjEzMi0uNDU2LjIxNi0uNjQuMjE2LS40MTIgMC0uNjQ0LS4yOTItLjY0NC0uNmgydi0uMjRjMC0uODA4LS42NC0xLjM2LTEuNC0xLjM2bTIuNiAxLjJjMC0uMzEzLjItLjU2LjYtLjU2cy42LjI1MS42LjU2em0uNi0xLjJjLS42NiAwLTEuNDA0LjQxNS0xLjQgMS40LjAwNC45ODMuODEyIDEuMzg3IDEuNSAxLjM4Ny40IDAgLjc2LS4xMzYuOTg4LS4zNmwuMDQtLjA0LS40NDQtLjQwNGEuODQuODQgMCAwIDEtLjU0LjIxNmMtLjQwNCAwLS43NDQtLjI2NC0uNzQ0LS42aDJ2LS4yNGMwLS44MDgtLjY0LTEuMzYtMS40LTEuMzYiLz4KPC9zdmc+Cg==)
 * @see https://web3icons.io/tokens/ROOBEE
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenROOBEE = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenROOBEE', __iconNode);
;
}),
];

//# sourceMappingURL=1qqr_%40web3icons_react_dist_15xti7c._.js.map