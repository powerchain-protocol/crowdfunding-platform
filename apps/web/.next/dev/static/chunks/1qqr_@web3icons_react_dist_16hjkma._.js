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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenSKL.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenSKL
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-client] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#fff',
                d: 'M3 4.125h2.25v15.75H3z'
            }
        ],
        [
            'path',
            {
                fill: '#fff',
                d: 'M17.063 3.563v2.25H3v-2.25zm.562 14.624v2.25H3v-2.25zm-.562-11.25c2.25 0 3.656 1.688 3.656 2.813H18.75c0-.281-.636-1.125-1.687-1.125-1.266 0-1.688.562-1.688 1.125s.281.844 1.688 1.125c1.299.259 3.937.844 3.937 3.094 0 1.8-1.969 3.094-3.937 3.094-1.575 0-3.938-.844-3.938-3.375h1.688c0 .843 1.124 1.687 2.25 1.687.675 0 1.968-.281 1.968-1.406s-1.293-1.294-1.968-1.407c-1.688-.28-3.657-.843-3.657-2.812 0-1.406 1.406-2.812 3.656-2.812'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M3 4.125h2.25v15.75H3z'
            }
        ],
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M17.063 3.563v2.25H3v-2.25zm.562 14.624v2.25H3v-2.25zm-.562-11.25c2.25 0 3.656 1.688 3.656 2.813H18.75c0-.281-.636-1.125-1.687-1.125-1.266 0-1.688.562-1.688 1.125s.281.844 1.688 1.125c1.299.259 3.937.844 3.937 3.094 0 1.8-1.969 3.094-3.937 3.094-1.575 0-3.938-.844-3.938-3.375h1.688c0 .843 1.124 1.687 2.25 1.687.675 0 1.968-.281 1.968-1.406s-1.293-1.294-1.968-1.407c-1.688-.28-3.657-.843-3.657-2.812 0-1.406 1.406-2.812 3.656-2.812'
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
                d: 'M4 5h2v14H4z'
            }
        ],
        [
            'path',
            {
                fill: '#fff',
                d: 'M16.5 4.5v2H4v-2zm.5 13v2H4v-2zm-.5-10c2 0 3.25 1.5 3.25 2.5H18c0-.25-.565-1-1.5-1-1.125 0-1.5.5-1.5 1s.25.75 1.5 1c1.155.23 3.5.75 3.5 2.75 0 1.6-1.75 2.75-3.5 2.75-1.4 0-3.5-.75-3.5-3h1.5c0 .75 1 1.5 2 1.5.6 0 1.75-.25 1.75-1.25S17.1 12.6 16.5 12.5c-1.5-.25-3.25-.75-3.25-2.5 0-1.25 1.25-2.5 3.25-2.5'
            }
        ]
    ]
};
/**
 * @component @name TokenSKL
 * @description Web3Icon for TokenSKL
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0zIDQuMTI1aDIuMjV2MTUuNzVIM3oiLz4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xNy4wNjMgMy41NjN2Mi4yNUgzdi0yLjI1em0uNTYyIDE0LjYyNHYyLjI1SDN2LTIuMjV6bS0uNTYyLTExLjI1YzIuMjUgMCAzLjY1NiAxLjY4OCAzLjY1NiAyLjgxM0gxOC43NWMwLS4yODEtLjYzNi0xLjEyNS0xLjY4Ny0xLjEyNS0xLjI2NiAwLTEuNjg4LjU2Mi0xLjY4OCAxLjEyNXMuMjgxLjg0NCAxLjY4OCAxLjEyNWMxLjI5OS4yNTkgMy45MzcuODQ0IDMuOTM3IDMuMDk0IDAgMS44LTEuOTY5IDMuMDk0LTMuOTM3IDMuMDk0LTEuNTc1IDAtMy45MzgtLjg0NC0zLjkzOC0zLjM3NWgxLjY4OGMwIC44NDMgMS4xMjQgMS42ODcgMi4yNSAxLjY4Ny42NzUgMCAxLjk2OC0uMjgxIDEuOTY4LTEuNDA2cy0xLjI5My0xLjI5NC0xLjk2OC0xLjQwN2MtMS42ODgtLjI4LTMuNjU3LS44NDMtMy42NTctMi44MTIgMC0xLjQwNiAxLjQwNi0yLjgxMiAzLjY1Ni0yLjgxMiIvPgo8L3N2Zz4K) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0zIDQuMTI1aDIuMjV2MTUuNzVIM3oiLz4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xNy4wNjMgMy41NjN2Mi4yNUgzdi0yLjI1em0uNTYyIDE0LjYyNHYyLjI1SDN2LTIuMjV6bS0uNTYyLTExLjI1YzIuMjUgMCAzLjY1NiAxLjY4OCAzLjY1NiAyLjgxM0gxOC43NWMwLS4yODEtLjYzNi0xLjEyNS0xLjY4Ny0xLjEyNS0xLjI2NiAwLTEuNjg4LjU2Mi0xLjY4OCAxLjEyNXMuMjgxLjg0NCAxLjY4OCAxLjEyNWMxLjI5OS4yNTkgMy45MzcuODQ0IDMuOTM3IDMuMDk0IDAgMS44LTEuOTY5IDMuMDk0LTMuOTM3IDMuMDk0LTEuNTc1IDAtMy45MzgtLjg0NC0zLjkzOC0zLjM3NWgxLjY4OGMwIC44NDMgMS4xMjQgMS42ODcgMi4yNSAxLjY4Ny42NzUgMCAxLjk2OC0uMjgxIDEuOTY4LTEuNDA2cy0xLjI5My0xLjI5NC0xLjk2OC0xLjQwN2MtMS42ODgtLjI4LTMuNjU3LS44NDMtMy42NTctMi44MTIgMC0xLjQwNiAxLjQwNi0yLjgxMiAzLjY1Ni0yLjgxMiIvPgo8L3N2Zz4K) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiMwMDAiIGQ9Ik0yNCAwSDB2MjRoMjR6Ii8+CiAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNNCA1aDJ2MTRINHoiLz4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xNi41IDQuNXYySDR2LTJ6bS41IDEzdjJINHYtMnptLS41LTEwYzIgMCAzLjI1IDEuNSAzLjI1IDIuNUgxOGMwLS4yNS0uNTY1LTEtMS41LTEtMS4xMjUgMC0xLjUuNS0xLjUgMXMuMjUuNzUgMS41IDFjMS4xNTUuMjMgMy41Ljc1IDMuNSAyLjc1IDAgMS42LTEuNzUgMi43NS0zLjUgMi43NS0xLjQgMC0zLjUtLjc1LTMuNS0zaDEuNWMwIC43NSAxIDEuNSAyIDEuNS42IDAgMS43NS0uMjUgMS43NS0xLjI1UzE3LjEgMTIuNiAxNi41IDEyLjVjLTEuNS0uMjUtMy4yNS0uNzUtMy4yNS0yLjUgMC0xLjI1IDEuMjUtMi41IDMuMjUtMi41Ii8+Cjwvc3ZnPgo=)
 * @see https://web3icons.io/tokens/SKL
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenSKL = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenSKL', __iconNode);
;
}),
]);

//# sourceMappingURL=1qqr_%40web3icons_react_dist_16hjkma._.js.map