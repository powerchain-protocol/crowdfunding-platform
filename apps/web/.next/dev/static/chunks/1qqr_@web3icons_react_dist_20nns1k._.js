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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenSNC.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenSNC
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-client] (ecmascript)");
;
const __iconNode = {
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M3.429 16.762 3 18.35c1.572 0 2.006-.1 2.584-.497.582-.397 1.037-1.424 1.196-1.885L8.612 8.8c.09-.44.386-1.573.74-1.588.356-.011.583.942.679 1.27l1.64 6.163c.371 1.238.938 3.71 3.018 3.71 2.086 0 2.891-3.42 3.304-5.293h2.266l.487-1.589h-1.959l-.424.265c.25-.921.922-3.356 1.15-3.95.227-.592.846-.619 1.122-.55L21 5.65h-1.578c-1.329 0-2.117 1.927-2.377 2.837l-1.71 6.803c-.095.371-.37 1.472-.688 1.472s-.508-.794-.625-1.138l-1.217-4.69c-.382-1.695-1.133-5.29-3.452-5.29-2.028 0-3.028 3.505-3.457 5.824H3.614l-.381 1.588h2.012l.344-.2c-.625 2.874-1.033 3.398-1.276 3.657-.201.212-.667.254-.879.25z'
            }
        ]
    ]
};
/**
 * @component @name TokenSNC
 * @description Web3Icon for TokenSNC
 *
 * @preview (mono)
 * @preview ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0zLjQyOSAxNi43NjIgMyAxOC4zNWMxLjU3MiAwIDIuMDA2LS4xIDIuNTg0LS40OTcuNTgyLS4zOTcgMS4wMzctMS40MjQgMS4xOTYtMS44ODVMOC42MTIgOC44Yy4wOS0uNDQuMzg2LTEuNTczLjc0LTEuNTg4LjM1Ni0uMDExLjU4My45NDIuNjc5IDEuMjdsMS42NCA2LjE2M2MuMzcxIDEuMjM4LjkzOCAzLjcxIDMuMDE4IDMuNzEgMi4wODYgMCAyLjg5MS0zLjQyIDMuMzA0LTUuMjkzaDIuMjY2bC40ODctMS41ODloLTEuOTU5bC0uNDI0LjI2NWMuMjUtLjkyMS45MjItMy4zNTYgMS4xNS0zLjk1LjIyNy0uNTkyLjg0Ni0uNjE5IDEuMTIyLS41NUwyMSA1LjY1aC0xLjU3OGMtMS4zMjkgMC0yLjExNyAxLjkyNy0yLjM3NyAyLjgzN2wtMS43MSA2LjgwM2MtLjA5NS4zNzEtLjM3IDEuNDcyLS42ODggMS40NzJzLS41MDgtLjc5NC0uNjI1LTEuMTM4bC0xLjIxNy00LjY5Yy0uMzgyLTEuNjk1LTEuMTMzLTUuMjktMy40NTItNS4yOS0yLjAyOCAwLTMuMDI4IDMuNTA1LTMuNDU3IDUuODI0SDMuNjE0bC0uMzgxIDEuNTg4aDIuMDEybC4zNDQtLjJjLS42MjUgMi44NzQtMS4wMzMgMy4zOTgtMS4yNzYgMy42NTctLjIwMS4yMTItLjY2Ny4yNTQtLjg3OS4yNXoiLz4KPC9zdmc+Cg==)
 * @see https://web3icons.io/tokens/SNC
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenSNC = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenSNC', __iconNode);
;
}),
]);

//# sourceMappingURL=1qqr_%40web3icons_react_dist_20nns1k._.js.map