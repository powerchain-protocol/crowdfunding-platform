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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenSERO.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenSERO
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-client] (ecmascript)");
;
const __iconNode = {
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M12 21a9 9 0 0 0 9-9 9 9 0 0 0-9-9 9 9 0 0 0-9 9 9 9 0 0 0 9 9m7.5-6.594a7.875 7.875 0 0 0-12.62-8.39l.05-.028c-.446.31-1.308 1.435-1.192 3.459s1.278 2.93 2.151 3.517l.344.231c2.127 1.425 4.394 2.944 3.755 4.246-.058-.36-.378-1.157-1.192-1.483S8.053 14.523 7.19 14.01c-1.007-.59-2.964-2.244-2.732-4.127q.02-.155.045-.303a7.875 7.875 0 0 0 13.414 7.615c.29-.478.774-1.705.574-3.123-.256-1.824-2.165-4.103-5.014-5.072 1.083.2 3.601 1.071 5.014 2.963.62.83.908 1.682 1.008 2.443M15.36 8.744l.74-.257-.455-2.906c-.836-.446-3.02-1.134-5.072-.313-2.564 1.025-2.899 3.107-2.785 4.247s.477 1.85 1.39 2.448c.728.478 2.545 1.548 3.361 2.023.532.323 1.573 1.225 1.481 2.25-.113 1.283-.586 2.043-2.022 2.166-.998.085-2.85-1.082-3.704-3.334l-.861.135.321 2.848c.549.51 2.165 1.485 4.244 1.313 2.599-.215 4.728-1.732 4.728-4.16 0-1.944-1.271-3.1-1.907-3.435l-3.574-2.057c-.575-.362-1.866-1.787-.588-3.216 1.328-1.482 3.75.119 4.033.79q.318.736.67 1.458',
                fillRule: 'evenodd',
                clipRule: 'evenodd'
            }
        ]
    ]
};
/**
 * @component @name TokenSERO
 * @description Web3Icon for TokenSERO
 *
 * @preview (mono)
 * @preview ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTEyIDIxYTkgOSAwIDAgMCA5LTkgOSA5IDAgMCAwLTktOSA5IDkgMCAwIDAtOSA5IDkgOSAwIDAgMCA5IDltNy41LTYuNTk0YTcuODc1IDcuODc1IDAgMCAwLTEyLjYyLTguMzlsLjA1LS4wMjhjLS40NDYuMzEtMS4zMDggMS40MzUtMS4xOTIgMy40NTlzMS4yNzggMi45MyAyLjE1MSAzLjUxN2wuMzQ0LjIzMWMyLjEyNyAxLjQyNSA0LjM5NCAyLjk0NCAzLjc1NSA0LjI0Ni0uMDU4LS4zNi0uMzc4LTEuMTU3LTEuMTkyLTEuNDgzUzguMDUzIDE0LjUyMyA3LjE5IDE0LjAxYy0xLjAwNy0uNTktMi45NjQtMi4yNDQtMi43MzItNC4xMjdxLjAyLS4xNTUuMDQ1LS4zMDNhNy44NzUgNy44NzUgMCAwIDAgMTMuNDE0IDcuNjE1Yy4yOS0uNDc4Ljc3NC0xLjcwNS41NzQtMy4xMjMtLjI1Ni0xLjgyNC0yLjE2NS00LjEwMy01LjAxNC01LjA3MiAxLjA4My4yIDMuNjAxIDEuMDcxIDUuMDE0IDIuOTYzLjYyLjgzLjkwOCAxLjY4MiAxLjAwOCAyLjQ0M00xNS4zNiA4Ljc0NGwuNzQtLjI1Ny0uNDU1LTIuOTA2Yy0uODM2LS40NDYtMy4wMi0xLjEzNC01LjA3Mi0uMzEzLTIuNTY0IDEuMDI1LTIuODk5IDMuMTA3LTIuNzg1IDQuMjQ3cy40NzcgMS44NSAxLjM5IDIuNDQ4Yy43MjguNDc4IDIuNTQ1IDEuNTQ4IDMuMzYxIDIuMDIzLjUzMi4zMjMgMS41NzMgMS4yMjUgMS40ODEgMi4yNS0uMTEzIDEuMjgzLS41ODYgMi4wNDMtMi4wMjIgMi4xNjYtLjk5OC4wODUtMi44NS0xLjA4Mi0zLjcwNC0zLjMzNGwtLjg2MS4xMzUuMzIxIDIuODQ4Yy41NDkuNTEgMi4xNjUgMS40ODUgNC4yNDQgMS4zMTMgMi41OTktLjIxNSA0LjcyOC0xLjczMiA0LjcyOC00LjE2IDAtMS45NDQtMS4yNzEtMy4xLTEuOTA3LTMuNDM1bC0zLjU3NC0yLjA1N2MtLjU3NS0uMzYyLTEuODY2LTEuNzg3LS41ODgtMy4yMTYgMS4zMjgtMS40ODIgMy43NS4xMTkgNC4wMzMuNzlxLjMxOC43MzYuNjcgMS40NTgiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4K)
 * @see https://web3icons.io/tokens/SERO
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenSERO = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenSERO', __iconNode);
;
}),
]);

//# sourceMappingURL=1qqr_%40web3icons_react_dist_1i42_9z._.js.map