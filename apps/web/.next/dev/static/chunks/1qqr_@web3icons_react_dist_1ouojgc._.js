(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createWeb3Icon",
    ()=>createWeb3Icon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$types$2b$node$40$24$2e$13$2e$3_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.1_@types+node@24.13.3_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$BaseIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/BaseIcon.js [app-client] (ecmascript)");
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
    const Component = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$types$2b$node$40$24$2e$13$2e$3_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(({ variant = defaultVariant, fallback, ...props }, ref)=>{
        const iconData = variants[variant];
        if (!iconData) {
            console.warn(`Icon "${name}" does not have variant "${variant}". ` + `Available variants: ${availableVariants.join(', ')}`);
            return null;
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$types$2b$node$40$24$2e$13$2e$3_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$BaseIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseIcon"], {
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
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$types$2b$node$40$24$2e$13$2e$3_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(element, elementProps, childElements);
    });
}
;
}),
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/exchanges/ExchangeCoinbase.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>ExchangeCoinbase
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-client] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#0052FF',
                d: 'M12.151 6.721c-2.925 0-4.943 2.246-4.944 5.296 0 3.016 2.051 5.262 4.977 5.262 2.119 0 3.8-1.341 4.406-3.285h4.238C20.054 18.184 16.557 21 12.185 21c-5.178 0-9.046-3.821-9.046-8.983S7.107 3 12.185 3c4.472 0 7.902 2.816 8.676 6.972H16.59c-.639-1.944-2.32-3.251-4.439-3.251'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M12.151 6.721c-2.925 0-4.943 2.246-4.944 5.296 0 3.016 2.051 5.262 4.977 5.262 2.119 0 3.8-1.341 4.406-3.285h4.238C20.054 18.184 16.557 21 12.185 21c-5.178 0-9.046-3.821-9.046-8.983S7.107 3 12.185 3c4.472 0 7.902 2.816 8.676 6.972H16.59c-.639-1.944-2.32-3.251-4.439-3.251'
            }
        ]
    ],
    background: [
        [
            'path',
            {
                fill: '#0052FF',
                d: 'M0 0h24v24H0z'
            }
        ],
        [
            'path',
            {
                fill: '#fff',
                d: 'M12.134 7.307c-2.6 0-4.393 1.997-4.394 4.708 0 2.681 1.822 4.678 4.424 4.678 1.883 0 3.378-1.192 3.916-2.92h3.767C19.159 17.497 16.05 20 12.165 20c-4.603 0-8.041-3.396-8.041-7.985C4.124 7.427 7.651 4 12.165 4c3.975 0 7.023 2.503 7.711 6.197H16.08c-.568-1.728-2.062-2.89-3.946-2.89'
            }
        ]
    ]
};
/**
 * @component @name ExchangeCoinbase
 * @description Web3Icon for ExchangeCoinbase
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiMwMDUyRkYiIGQ9Ik0xMi4xNTEgNi43MjFjLTIuOTI1IDAtNC45NDMgMi4yNDYtNC45NDQgNS4yOTYgMCAzLjAxNiAyLjA1MSA1LjI2MiA0Ljk3NyA1LjI2MiAyLjExOSAwIDMuOC0xLjM0MSA0LjQwNi0zLjI4NWg0LjIzOEMyMC4wNTQgMTguMTg0IDE2LjU1NyAyMSAxMi4xODUgMjFjLTUuMTc4IDAtOS4wNDYtMy44MjEtOS4wNDYtOC45ODNTNy4xMDcgMyAxMi4xODUgM2M0LjQ3MiAwIDcuOTAyIDIuODE2IDguNjc2IDYuOTcySDE2LjU5Yy0uNjM5LTEuOTQ0LTIuMzItMy4yNTEtNC40MzktMy4yNTEiLz4KPC9zdmc+Cg==) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xMi4xNTEgNi43MjFjLTIuOTI1IDAtNC45NDMgMi4yNDYtNC45NDQgNS4yOTYgMCAzLjAxNiAyLjA1MSA1LjI2MiA0Ljk3NyA1LjI2MiAyLjExOSAwIDMuOC0xLjM0MSA0LjQwNi0zLjI4NWg0LjIzOEMyMC4wNTQgMTguMTg0IDE2LjU1NyAyMSAxMi4xODUgMjFjLTUuMTc4IDAtOS4wNDYtMy44MjEtOS4wNDYtOC45ODNTNy4xMDcgMyAxMi4xODUgM2M0LjQ3MiAwIDcuOTAyIDIuODE2IDguNjc2IDYuOTcySDE2LjU5Yy0uNjM5LTEuOTQ0LTIuMzItMy4yNTEtNC40MzktMy4yNTEiLz4KPC9zdmc+Cg==) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiMwMDUyRkYiIGQ9Ik0wIDBoMjR2MjRIMHoiLz4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xMi4xMzQgNy4zMDdjLTIuNiAwLTQuMzkzIDEuOTk3LTQuMzk0IDQuNzA4IDAgMi42ODEgMS44MjIgNC42NzggNC40MjQgNC42NzggMS44ODMgMCAzLjM3OC0xLjE5MiAzLjkxNi0yLjkyaDMuNzY3QzE5LjE1OSAxNy40OTcgMTYuMDUgMjAgMTIuMTY1IDIwYy00LjYwMyAwLTguMDQxLTMuMzk2LTguMDQxLTcuOTg1QzQuMTI0IDcuNDI3IDcuNjUxIDQgMTIuMTY1IDRjMy45NzUgMCA3LjAyMyAyLjUwMyA3LjcxMSA2LjE5N0gxNi4wOGMtLjU2OC0xLjcyOC0yLjA2Mi0yLjg5LTMuOTQ2LTIuODkiLz4KPC9zdmc+Cg==)
 * @see https://web3icons.io/exchanges/coinbase
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const ExchangeCoinbase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWeb3Icon"])('ExchangeCoinbase', __iconNode);
;
}),
]);

//# sourceMappingURL=1qqr_%40web3icons_react_dist_1ouojgc._.js.map