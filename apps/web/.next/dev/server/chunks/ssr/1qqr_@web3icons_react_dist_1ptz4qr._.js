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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenSOV.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenSOV
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-ssr] (ecmascript)");
;
const __iconNode = {
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M8.175 9.728c.18-1.356.59-2.723 1.806-3.488.372-.24.796-.386 1.237-.428h7.105l.995-1.372a.547.547 0 0 0-.433-.878H4.789a.5.5 0 0 0-.32.113.55.55 0 0 0-.113.765l3.819 5.31h4.14c.276.017.546.056.799.146l.197.045c.213.04.41.079.562.242.097.124.164.268.197.422.04.13.04.276.04.422 0 .157-.018.31-.034.461l-.023.214 3.24-4.202h-5.428c-.383 0-.686-.653-.686-1.035v-.09a2.4 2.4 0 0 0-.996.18 2.6 2.6 0 0 0-.94.697 5.1 5.1 0 0 0-1.068 2.476m4.14 1.147h-3.15l1.361 1.935.017.022c0 .006 0 .012.011.017l.006.017.22.293.652.894.107.113a.546.546 0 0 0 .76-.113l.685-.928.833-1.114.22-.292a9 9 0 0 0-.074-.692.93.93 0 0 0-.31-.619 1.1 1.1 0 0 0-.63-.225h-.022v.096c0 .382-.304.596-.686.596m-.956 4.219-3.983-5.53-4.342-6.001H3l3.73 7.408 3.543 7.059 1.03 2.042c.073.13.168.242.292.292.326.17.737.04.9-.292l1.035-2.003.017-.056-2.081-2.83c-.04-.01-.057-.033-.085-.061zm6.874-7.808.579-.787 2.132-2.936H21l-4.376 8.431-.58 1.108-2.193 4.253-1.575-2.138a.5.5 0 0 0 .151-.123l1.463-1.97.832-1.113z'
            }
        ]
    ]
};
/**
 * @component @name TokenSOV
 * @description Web3Icon for TokenSOV
 *
 * @preview (mono)
 * @preview ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik04LjE3NSA5LjcyOGMuMTgtMS4zNTYuNTktMi43MjMgMS44MDYtMy40ODguMzcyLS4yNC43OTYtLjM4NiAxLjIzNy0uNDI4aDcuMTA1bC45OTUtMS4zNzJhLjU0Ny41NDcgMCAwIDAtLjQzMy0uODc4SDQuNzg5YS41LjUgMCAwIDAtLjMyLjExMy41NS41NSAwIDAgMC0uMTEzLjc2NWwzLjgxOSA1LjMxaDQuMTRjLjI3Ni4wMTcuNTQ2LjA1Ni43OTkuMTQ2bC4xOTcuMDQ1Yy4yMTMuMDQuNDEuMDc5LjU2Mi4yNDIuMDk3LjEyNC4xNjQuMjY4LjE5Ny40MjIuMDQuMTMuMDQuMjc2LjA0LjQyMiAwIC4xNTctLjAxOC4zMS0uMDM0LjQ2MWwtLjAyMy4yMTQgMy4yNC00LjIwMmgtNS40MjhjLS4zODMgMC0uNjg2LS42NTMtLjY4Ni0xLjAzNXYtLjA5YTIuNCAyLjQgMCAwIDAtLjk5Ni4xOCAyLjYgMi42IDAgMCAwLS45NC42OTcgNS4xIDUuMSAwIDAgMC0xLjA2OCAyLjQ3Nm00LjE0IDEuMTQ3aC0zLjE1bDEuMzYxIDEuOTM1LjAxNy4wMjJjMCAuMDA2IDAgLjAxMi4wMTEuMDE3bC4wMDYuMDE3LjIyLjI5My42NTIuODk0LjEwNy4xMTNhLjU0Ni41NDYgMCAwIDAgLjc2LS4xMTNsLjY4NS0uOTI4LjgzMy0xLjExNC4yMi0uMjkyYTkgOSAwIDAgMC0uMDc0LS42OTIuOTMuOTMgMCAwIDAtLjMxLS42MTkgMS4xIDEuMSAwIDAgMC0uNjMtLjIyNWgtLjAyMnYuMDk2YzAgLjM4Mi0uMzA0LjU5Ni0uNjg2LjU5Nm0tLjk1NiA0LjIxOS0zLjk4My01LjUzLTQuMzQyLTYuMDAxSDNsMy43MyA3LjQwOCAzLjU0MyA3LjA1OSAxLjAzIDIuMDQyYy4wNzMuMTMuMTY4LjI0Mi4yOTIuMjkyLjMyNi4xNy43MzcuMDQuOS0uMjkybDEuMDM1LTIuMDAzLjAxNy0uMDU2LTIuMDgxLTIuODNjLS4wNC0uMDEtLjA1Ny0uMDMzLS4wODUtLjA2MXptNi44NzQtNy44MDguNTc5LS43ODcgMi4xMzItMi45MzZIMjFsLTQuMzc2IDguNDMxLS41OCAxLjEwOC0yLjE5MyA0LjI1My0xLjU3NS0yLjEzOGEuNS41IDAgMCAwIC4xNTEtLjEyM2wxLjQ2My0xLjk3LjgzMi0xLjExM3oiLz4KPC9zdmc+Cg==)
 * @see https://web3icons.io/tokens/SOV
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenSOV = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenSOV', __iconNode);
;
}),
];

//# sourceMappingURL=1qqr_%40web3icons_react_dist_1ptz4qr._.js.map