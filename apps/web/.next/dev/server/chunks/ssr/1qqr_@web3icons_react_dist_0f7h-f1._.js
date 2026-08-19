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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenGHOST.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenGHOST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-ssr] (ecmascript)");
;
const __iconNode = {
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M17.263 8.283q0 .11-.005.22h.005c.73-.587 2.193-.733 2.193.22 0 .88-1.111 1.981-1.989 3.082v3.124c.015.746-.335 1.969-.497 1.988 0 0 0-.745-.497-.745s-1.242 2.485-1.242 2.485-.249-.497-.497-.497c-.598 0-.994 1.242-.994 1.242s-.313-.343-.746 0c-.266.212-.617 1.598-.848 1.598-.207 0-.146-2.343-1.14-2.343-.746 0-.746.994-.746.994-.497 0-.994-2.237-1.49-2.237-.498 0-.498.497-.498.497-.248 0-.248-1.74-.746-1.74-.248 0-.248.498-.497.498-.248 0-.512-1.243-.497-1.74v-3.124c-.877-1.1-1.988-2.201-1.988-3.082 0-.953 1.462-.807 2.193-.22h.005a5 5 0 0 1-.005-.22C6.737 5.365 9.094 3 12 3c2.907 0 5.263 2.365 5.263 5.283m-7.857 0a.441.441 0 0 1 .31-.751.44.44 0 0 1 .31.128l.31.311a.442.442 0 0 1-.31.752.44.44 0 0 1-.31-.129zm5.135-.623a.44.44 0 0 1 0 .623l-.31.311a.44.44 0 0 1-.62 0 .44.44 0 0 1 0-.623l.309-.31a.44.44 0 0 1 .62 0',
                fillRule: 'evenodd',
                clipRule: 'evenodd'
            }
        ]
    ]
};
/**
 * @component @name TokenGHOST
 * @description Web3Icon for TokenGHOST
 *
 * @preview (mono)
 * @preview ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTE3LjI2MyA4LjI4M3EwIC4xMS0uMDA1LjIyaC4wMDVjLjczLS41ODcgMi4xOTMtLjczMyAyLjE5My4yMiAwIC44OC0xLjExMSAxLjk4MS0xLjk4OSAzLjA4MnYzLjEyNGMuMDE1Ljc0Ni0uMzM1IDEuOTY5LS40OTcgMS45ODggMCAwIDAtLjc0NS0uNDk3LS43NDVzLTEuMjQyIDIuNDg1LTEuMjQyIDIuNDg1LS4yNDktLjQ5Ny0uNDk3LS40OTdjLS41OTggMC0uOTk0IDEuMjQyLS45OTQgMS4yNDJzLS4zMTMtLjM0My0uNzQ2IDBjLS4yNjYuMjEyLS42MTcgMS41OTgtLjg0OCAxLjU5OC0uMjA3IDAtLjE0Ni0yLjM0My0xLjE0LTIuMzQzLS43NDYgMC0uNzQ2Ljk5NC0uNzQ2Ljk5NC0uNDk3IDAtLjk5NC0yLjIzNy0xLjQ5LTIuMjM3LS40OTggMC0uNDk4LjQ5Ny0uNDk4LjQ5Ny0uMjQ4IDAtLjI0OC0xLjc0LS43NDYtMS43NC0uMjQ4IDAtLjI0OC40OTgtLjQ5Ny40OTgtLjI0OCAwLS41MTItMS4yNDMtLjQ5Ny0xLjc0di0zLjEyNGMtLjg3Ny0xLjEtMS45ODgtMi4yMDEtMS45ODgtMy4wODIgMC0uOTUzIDEuNDYyLS44MDcgMi4xOTMtLjIyaC4wMDVhNSA1IDAgMCAxLS4wMDUtLjIyQzYuNzM3IDUuMzY1IDkuMDk0IDMgMTIgM2MyLjkwNyAwIDUuMjYzIDIuMzY1IDUuMjYzIDUuMjgzbS03Ljg1NyAwYS40NDEuNDQxIDAgMCAxIC4zMS0uNzUxLjQ0LjQ0IDAgMCAxIC4zMS4xMjhsLjMxLjMxMWEuNDQyLjQ0MiAwIDAgMS0uMzEuNzUyLjQ0LjQ0IDAgMCAxLS4zMS0uMTI5em01LjEzNS0uNjIzYS40NC40NCAwIDAgMSAwIC42MjNsLS4zMS4zMTFhLjQ0LjQ0IDAgMCAxLS42MiAwIC40NC40NCAwIDAgMSAwLS42MjNsLjMwOS0uMzFhLjQ0LjQ0IDAgMCAxIC42MiAwIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+Cg==)
 * @see https://web3icons.io/tokens/GHOST
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenGHOST = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenGHOST', __iconNode);
;
}),
];

//# sourceMappingURL=1qqr_%40web3icons_react_dist_0f7h-f1._.js.map