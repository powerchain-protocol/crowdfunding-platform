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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenSLCL.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenSLCL
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-ssr] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#fff',
                d: 'm10.041 15.451 1.25-2.4c-1.07-.685-2.94-2.67-1.845-5.11 1.37-3.05 4.01-2.325 5.26-1.88l1.17-2.345c-2.05-.935-6.64-1.695-8.595 2.75-2.345 5.33 1.2 7.87 2.6 8.87l.16.12zm-2.185 4.84 1.195-2.435c1.17.49 3.845.885 5.16-1.44 1.64-2.91-.475-4.67-1.56-5.45l1.195-2.33c1.94 1.15 5.215 4.51 2.8 8.71-2.9 5.04-6.995 3.585-8.6 3.01z'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'm10.041 15.451 1.25-2.4c-1.07-.685-2.94-2.67-1.845-5.11 1.37-3.05 4.01-2.325 5.26-1.88l1.17-2.345c-2.05-.935-6.64-1.695-8.595 2.75-2.345 5.33 1.2 7.87 2.6 8.87l.16.12zm-2.185 4.84 1.195-2.435c1.17.49 3.845.885 5.16-1.44 1.64-2.91-.475-4.67-1.56-5.45l1.195-2.33c1.94 1.15 5.215 4.51 2.8 8.71-2.9 5.04-6.995 3.585-8.6 3.01z'
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
                d: 'm10.26 15.068 1.11-2.134c-.95-.608-2.613-2.373-1.64-4.542 1.218-2.711 3.565-2.067 4.676-1.671l1.04-2.084c-1.822-.832-5.902-1.507-7.64 2.444-2.085 4.738 1.066 6.996 2.31 7.885l.143.106zM8.316 19.37l1.062-2.165c1.04.436 3.418.787 4.587-1.28 1.458-2.586-.422-4.15-1.387-4.844L13.64 9.01c1.725 1.022 4.636 4.009 2.49 7.742-2.578 4.48-6.219 3.187-7.645 2.676z'
            }
        ]
    ]
};
/**
 * @component @name TokenSLCL
 * @description Web3Icon for TokenSLCL
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Im0xMC4wNDEgMTUuNDUxIDEuMjUtMi40Yy0xLjA3LS42ODUtMi45NC0yLjY3LTEuODQ1LTUuMTEgMS4zNy0zLjA1IDQuMDEtMi4zMjUgNS4yNi0xLjg4bDEuMTctMi4zNDVjLTIuMDUtLjkzNS02LjY0LTEuNjk1LTguNTk1IDIuNzUtMi4zNDUgNS4zMyAxLjIgNy44NyAyLjYgOC44N2wuMTYuMTJ6bS0yLjE4NSA0Ljg0IDEuMTk1LTIuNDM1YzEuMTcuNDkgMy44NDUuODg1IDUuMTYtMS40NCAxLjY0LTIuOTEtLjQ3NS00LjY3LTEuNTYtNS40NWwxLjE5NS0yLjMzYzEuOTQgMS4xNSA1LjIxNSA0LjUxIDIuOCA4LjcxLTIuOSA1LjA0LTYuOTk1IDMuNTg1LTguNiAzLjAxeiIvPgo8L3N2Zz4K) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Im0xMC4wNDEgMTUuNDUxIDEuMjUtMi40Yy0xLjA3LS42ODUtMi45NC0yLjY3LTEuODQ1LTUuMTEgMS4zNy0zLjA1IDQuMDEtMi4zMjUgNS4yNi0xLjg4bDEuMTctMi4zNDVjLTIuMDUtLjkzNS02LjY0LTEuNjk1LTguNTk1IDIuNzUtMi4zNDUgNS4zMyAxLjIgNy44NyAyLjYgOC44N2wuMTYuMTJ6bS0yLjE4NSA0Ljg0IDEuMTk1LTIuNDM1YzEuMTcuNDkgMy44NDUuODg1IDUuMTYtMS40NCAxLjY0LTIuOTEtLjQ3NS00LjY3LTEuNTYtNS40NWwxLjE5NS0yLjMzYzEuOTQgMS4xNSA1LjIxNSA0LjUxIDIuOCA4LjcxLTIuOSA1LjA0LTYuOTk1IDMuNTg1LTguNiAzLjAxeiIvPgo8L3N2Zz4K) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiMwMDAiIGQ9Ik0yNCAwSDB2MjRoMjR6Ii8+CiAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJtMTAuMjYgMTUuMDY4IDEuMTEtMi4xMzRjLS45NS0uNjA4LTIuNjEzLTIuMzczLTEuNjQtNC41NDIgMS4yMTgtMi43MTEgMy41NjUtMi4wNjcgNC42NzYtMS42NzFsMS4wNC0yLjA4NGMtMS44MjItLjgzMi01LjkwMi0xLjUwNy03LjY0IDIuNDQ0LTIuMDg1IDQuNzM4IDEuMDY2IDYuOTk2IDIuMzEgNy44ODVsLjE0My4xMDZ6TTguMzE2IDE5LjM3bDEuMDYyLTIuMTY1YzEuMDQuNDM2IDMuNDE4Ljc4NyA0LjU4Ny0xLjI4IDEuNDU4LTIuNTg2LS40MjItNC4xNS0xLjM4Ny00Ljg0NEwxMy42NCA5LjAxYzEuNzI1IDEuMDIyIDQuNjM2IDQuMDA5IDIuNDkgNy43NDItMi41NzggNC40OC02LjIxOSAzLjE4Ny03LjY0NSAyLjY3NnoiLz4KPC9zdmc+Cg==)
 * @see https://web3icons.io/tokens/SLCL
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenSLCL = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenSLCL', __iconNode);
;
}),
];

//# sourceMappingURL=1qqr_%40web3icons_react_dist_1rx6c1i._.js.map