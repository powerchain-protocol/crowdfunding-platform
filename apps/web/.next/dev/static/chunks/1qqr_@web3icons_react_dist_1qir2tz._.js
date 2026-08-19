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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenWOM.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenWOM
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-client] (ecmascript)");
;
const __iconNode = {
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M9.469 3a.844.844 0 0 0-.844.844v1.039A7.88 7.88 0 0 0 4.125 12a7.88 7.88 0 0 0 4.5 7.117v1.04a.844.844 0 0 0 1.688 0v-.463a7.9 7.9 0 0 0 3.374 0v.462a.844.844 0 0 0 1.688 0v-1.039a7.88 7.88 0 0 0 4.5-7.117 7.88 7.88 0 0 0-4.5-7.117v-1.04a.843.843 0 1 0-1.688 0v.463a7.9 7.9 0 0 0-3.374 0v-.462A.843.843 0 0 0 9.469 3m4.218 3.073A5.7 5.7 0 0 0 12 5.813a5.7 5.7 0 0 0-1.687.26V9.47a.843.843 0 1 1-1.688 0V6.9C6.963 8.043 5.812 9.956 5.812 12c0 3.263 2.926 6.188 6.188 6.188s6.188-2.925 6.188-6.187c0-2.045-1.15-3.958-2.813-5.101v2.57a.843.843 0 1 1-1.688 0zM9.434 3.454a.242.242 0 0 0-.356.056l-.214.318a.29.29 0 0 0 .06.384.24.24 0 0 0 .355-.055l.214-.319a.29.29 0 0 0-.06-.384M8.075 13.681c.308-.307.785-.26 1.279.194.114.105.227.223.343.345.512.536 1.103 1.155 2.303 1.155 1.29 0 2.217-.906 2.607-1.385.221-.272.808-.603 1.285-.309.314.194.419.793.235 1.059-.557.802-1.921 2.336-4.127 2.323-2.205-.014-3.543-1.532-4.067-2.323a.82.82 0 0 1 .142-1.059M14.137 3.51a.242.242 0 0 1 .356-.055.29.29 0 0 1 .06.384l-.215.318a.243.243 0 0 1-.356.056.29.29 0 0 1-.06-.385z',
                fillRule: 'evenodd',
                clipRule: 'evenodd'
            }
        ]
    ]
};
/**
 * @component @name TokenWOM
 * @description Web3Icon for TokenWOM
 *
 * @preview (mono)
 * @preview ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTkuNDY5IDNhLjg0NC44NDQgMCAwIDAtLjg0NC44NDR2MS4wMzlBNy44OCA3Ljg4IDAgMCAwIDQuMTI1IDEyYTcuODggNy44OCAwIDAgMCA0LjUgNy4xMTd2MS4wNGEuODQ0Ljg0NCAwIDAgMCAxLjY4OCAwdi0uNDYzYTcuOSA3LjkgMCAwIDAgMy4zNzQgMHYuNDYyYS44NDQuODQ0IDAgMCAwIDEuNjg4IDB2LTEuMDM5YTcuODggNy44OCAwIDAgMCA0LjUtNy4xMTcgNy44OCA3Ljg4IDAgMCAwLTQuNS03LjExN3YtMS4wNGEuODQzLjg0MyAwIDEgMC0xLjY4OCAwdi40NjNhNy45IDcuOSAwIDAgMC0zLjM3NCAwdi0uNDYyQS44NDMuODQzIDAgMCAwIDkuNDY5IDNtNC4yMTggMy4wNzNBNS43IDUuNyAwIDAgMCAxMiA1LjgxM2E1LjcgNS43IDAgMCAwLTEuNjg3LjI2VjkuNDdhLjg0My44NDMgMCAxIDEtMS42ODggMFY2LjlDNi45NjMgOC4wNDMgNS44MTIgOS45NTYgNS44MTIgMTJjMCAzLjI2MyAyLjkyNiA2LjE4OCA2LjE4OCA2LjE4OHM2LjE4OC0yLjkyNSA2LjE4OC02LjE4N2MwLTIuMDQ1LTEuMTUtMy45NTgtMi44MTMtNS4xMDF2Mi41N2EuODQzLjg0MyAwIDEgMS0xLjY4OCAwek05LjQzNCAzLjQ1NGEuMjQyLjI0MiAwIDAgMC0uMzU2LjA1NmwtLjIxNC4zMThhLjI5LjI5IDAgMCAwIC4wNi4zODQuMjQuMjQgMCAwIDAgLjM1NS0uMDU1bC4yMTQtLjMxOWEuMjkuMjkgMCAwIDAtLjA2LS4zODRNOC4wNzUgMTMuNjgxYy4zMDgtLjMwNy43ODUtLjI2IDEuMjc5LjE5NC4xMTQuMTA1LjIyNy4yMjMuMzQzLjM0NS41MTIuNTM2IDEuMTAzIDEuMTU1IDIuMzAzIDEuMTU1IDEuMjkgMCAyLjIxNy0uOTA2IDIuNjA3LTEuMzg1LjIyMS0uMjcyLjgwOC0uNjAzIDEuMjg1LS4zMDkuMzE0LjE5NC40MTkuNzkzLjIzNSAxLjA1OS0uNTU3LjgwMi0xLjkyMSAyLjMzNi00LjEyNyAyLjMyMy0yLjIwNS0uMDE0LTMuNTQzLTEuNTMyLTQuMDY3LTIuMzIzYS44Mi44MiAwIDAgMSAuMTQyLTEuMDU5TTE0LjEzNyAzLjUxYS4yNDIuMjQyIDAgMCAxIC4zNTYtLjA1NS4yOS4yOSAwIDAgMSAuMDYuMzg0bC0uMjE1LjMxOGEuMjQzLjI0MyAwIDAgMS0uMzU2LjA1Ni4yOS4yOSAwIDAgMS0uMDYtLjM4NXoiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4K)
 * @see https://web3icons.io/tokens/WOM
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenWOM = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenWOM', __iconNode);
;
}),
]);

//# sourceMappingURL=1qqr_%40web3icons_react_dist_1qir2tz._.js.map