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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenWCFG.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenWCFG
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-ssr] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#fff',
                d: 'M4.14 13.423c0 1.534.387 2.978 1.067 4.249l-1.012.505A10.128 10.128 0 0 1 21 7.033l-.854.73a9.003 9.003 0 0 0-16.007 5.654zm8.722 6.176a6.181 6.181 0 1 1 5.142-9.987l.85-.73a7.307 7.307 0 1 0-5.992 11.842v-1.13zm2.714-3.86a3.36 3.36 0 0 1-5.816-2.316 3.372 3.372 0 0 1 6.131-1.945l.854-.73a4.49 4.49 0 0 0-8.11 2.67 4.496 4.496 0 0 0 7.616 3.236l-.675-.921z'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M4.14 13.423c0 1.534.387 2.978 1.067 4.249l-1.012.505A10.128 10.128 0 0 1 21 7.033l-.854.73a9.003 9.003 0 0 0-16.007 5.654zm8.722 6.176a6.181 6.181 0 1 1 5.142-9.987l.85-.73a7.307 7.307 0 1 0-5.992 11.842v-1.13zm2.714-3.86a3.36 3.36 0 0 1-5.816-2.316 3.372 3.372 0 0 1 6.131-1.945l.854-.73a4.49 4.49 0 0 0-8.11 2.67 4.496 4.496 0 0 0 7.616 3.236l-.675-.921z'
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
                d: 'M5.013 13.265c0 1.364.344 2.648.949 3.777l-.9.45A9.002 9.002 0 0 1 20 7.584l-.76.65A8.003 8.003 0 0 0 5.014 13.26zm7.753 5.49a5.493 5.493 0 0 1-5.25-5.352 5.495 5.495 0 0 1 9.821-3.525l.755-.65a6.495 6.495 0 1 0-5.326 10.527V18.75zm2.413-3.432a2.988 2.988 0 0 1-5.17-2.058 2.997 2.997 0 0 1 5.45-1.728l.76-.65a3.991 3.991 0 0 0-7.21 2.373 3.996 3.996 0 0 0 6.77 2.878l-.6-.82z'
            }
        ]
    ]
};
/**
 * @component @name TokenWCFG
 * @description Web3Icon for TokenWCFG
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik00LjE0IDEzLjQyM2MwIDEuNTM0LjM4NyAyLjk3OCAxLjA2NyA0LjI0OWwtMS4wMTIuNTA1QTEwLjEyOCAxMC4xMjggMCAwIDEgMjEgNy4wMzNsLS44NTQuNzNhOS4wMDMgOS4wMDMgMCAwIDAtMTYuMDA3IDUuNjU0em04LjcyMiA2LjE3NmE2LjE4MSA2LjE4MSAwIDEgMSA1LjE0Mi05Ljk4N2wuODUtLjczYTcuMzA3IDcuMzA3IDAgMSAwLTUuOTkyIDExLjg0MnYtMS4xM3ptMi43MTQtMy44NmEzLjM2IDMuMzYgMCAwIDEtNS44MTYtMi4zMTYgMy4zNzIgMy4zNzIgMCAwIDEgNi4xMzEtMS45NDVsLjg1NC0uNzNhNC40OSA0LjQ5IDAgMCAwLTguMTEgMi42NyA0LjQ5NiA0LjQ5NiAwIDAgMCA3LjYxNiAzLjIzNmwtLjY3NS0uOTIxeiIvPgo8L3N2Zz4K) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik00LjE0IDEzLjQyM2MwIDEuNTM0LjM4NyAyLjk3OCAxLjA2NyA0LjI0OWwtMS4wMTIuNTA1QTEwLjEyOCAxMC4xMjggMCAwIDEgMjEgNy4wMzNsLS44NTQuNzNhOS4wMDMgOS4wMDMgMCAwIDAtMTYuMDA3IDUuNjU0em04LjcyMiA2LjE3NmE2LjE4MSA2LjE4MSAwIDEgMSA1LjE0Mi05Ljk4N2wuODUtLjczYTcuMzA3IDcuMzA3IDAgMSAwLTUuOTkyIDExLjg0MnYtMS4xM3ptMi43MTQtMy44NmEzLjM2IDMuMzYgMCAwIDEtNS44MTYtMi4zMTYgMy4zNzIgMy4zNzIgMCAwIDEgNi4xMzEtMS45NDVsLjg1NC0uNzNhNC40OSA0LjQ5IDAgMCAwLTguMTEgMi42NyA0LjQ5NiA0LjQ5NiAwIDAgMCA3LjYxNiAzLjIzNmwtLjY3NS0uOTIxeiIvPgo8L3N2Zz4K) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiMwMDAiIGQ9Ik0yNCAwSDB2MjRoMjR6Ii8+CiAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNNS4wMTMgMTMuMjY1YzAgMS4zNjQuMzQ0IDIuNjQ4Ljk0OSAzLjc3N2wtLjkuNDVBOS4wMDIgOS4wMDIgMCAwIDEgMjAgNy41ODRsLS43Ni42NUE4LjAwMyA4LjAwMyAwIDAgMCA1LjAxNCAxMy4yNnptNy43NTMgNS40OWE1LjQ5MyA1LjQ5MyAwIDAgMS01LjI1LTUuMzUyIDUuNDk1IDUuNDk1IDAgMCAxIDkuODIxLTMuNTI1bC43NTUtLjY1YTYuNDk1IDYuNDk1IDAgMSAwLTUuMzI2IDEwLjUyN1YxOC43NXptMi40MTMtMy40MzJhMi45ODggMi45ODggMCAwIDEtNS4xNy0yLjA1OCAyLjk5NyAyLjk5NyAwIDAgMSA1LjQ1LTEuNzI4bC43Ni0uNjVhMy45OTEgMy45OTEgMCAwIDAtNy4yMSAyLjM3MyAzLjk5NiAzLjk5NiAwIDAgMCA2Ljc3IDIuODc4bC0uNi0uODJ6Ii8+Cjwvc3ZnPgo=)
 * @see https://web3icons.io/tokens/WCFG
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenWCFG = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenWCFG', __iconNode);
;
}),
];

//# sourceMappingURL=1qqr_%40web3icons_react_dist_1h4whwu._.js.map