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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenTHE.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenTHE
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-client] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#fff',
                d: 'M3 6.5h5.5V8H3zm0 2h5.5V10H3zm5.5 2H3v2.245l1.5-.12V17.5H7v-4.875l1.5.12zm.5-4h2.5V8H9zm4 0h2.5V8H13zm-1.5 2H9V10h2.5zm-2.5 2h2.5v2H13v-2h2.5v7H13v-3h-1.5v3H9zm6.5-2H13V10h2.5zm.5-2h5V8h-5zm0 2h5V10h-5zm0 2h5v2h-2v.5h2v2h-2v.5h2v2h-5z'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M3 6.5h5.5V8H3zm0 2h5.5V10H3zm5.5 2H3v2.245l1.5-.12V17.5H7v-4.875l1.5.12zm.5-4h2.5V8H9zm4 0h2.5V8H13zm-1.5 2H9V10h2.5zm-2.5 2h2.5v2H13v-2h2.5v7H13v-3h-1.5v3H9zm6.5-2H13V10h2.5zm.5-2h5V8h-5zm0 2h5V10h-5zm0 2h5v2h-2v.5h2v2h-2v.5h2v2h-5z'
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
                d: 'M4 7.111h4.889v1.334H4zM4 8.89h4.889v1.333H4zm4.889 1.778H4v1.995l1.333-.106v4.333h2.223v-4.333l1.333.106zm.444-3.556h2.223v1.334H9.333zm3.556 0h2.222v1.334H12.89zM11.556 8.89H9.333v1.333h2.223zm-2.223 1.778h2.223v1.778h1.333v-1.778h2.222v6.222H12.89v-2.667h-1.333v2.667H9.333zm5.778-1.778H12.89v1.333h2.222zm.445-1.778H20v1.334h-4.444zm0 1.778H20v1.333h-4.444zm0 1.778H20v1.778h-1.778v.444H20v1.778h-1.778v.444H20v1.778h-4.444z'
            }
        ]
    ]
};
/**
 * @component @name TokenTHE
 * @description Web3Icon for TokenTHE
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0zIDYuNWg1LjVWOEgzem0wIDJoNS41VjEwSDN6bTUuNSAySDN2Mi4yNDVsMS41LS4xMlYxNy41SDd2LTQuODc1bDEuNS4xMnptLjUtNGgyLjVWOEg5em00IDBoMi41VjhIMTN6bS0xLjUgMkg5VjEwaDIuNXptLTIuNSAyaDIuNXYySDEzdi0yaDIuNXY3SDEzdi0zaC0xLjV2M0g5em02LjUtMkgxM1YxMGgyLjV6bS41LTJoNVY4aC01em0wIDJoNVYxMGgtNXptMCAyaDV2MmgtMnYuNWgydjJoLTJ2LjVoMnYyaC01eiIvPgo8L3N2Zz4K) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0zIDYuNWg1LjVWOEgzem0wIDJoNS41VjEwSDN6bTUuNSAySDN2Mi4yNDVsMS41LS4xMlYxNy41SDd2LTQuODc1bDEuNS4xMnptLjUtNGgyLjVWOEg5em00IDBoMi41VjhIMTN6bS0xLjUgMkg5VjEwaDIuNXptLTIuNSAyaDIuNXYySDEzdi0yaDIuNXY3SDEzdi0zaC0xLjV2M0g5em02LjUtMkgxM1YxMGgyLjV6bS41LTJoNVY4aC01em0wIDJoNVYxMGgtNXptMCAyaDV2MmgtMnYuNWgydjJoLTJ2LjVoMnYyaC01eiIvPgo8L3N2Zz4K) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiMwMDAiIGQ9Ik0yNCAwSDB2MjRoMjR6Ii8+CiAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNNCA3LjExMWg0Ljg4OXYxLjMzNEg0ek00IDguODloNC44ODl2MS4zMzNINHptNC44ODkgMS43NzhINHYxLjk5NWwxLjMzMy0uMTA2djQuMzMzaDIuMjIzdi00LjMzM2wxLjMzMy4xMDZ6bS40NDQtMy41NTZoMi4yMjN2MS4zMzRIOS4zMzN6bTMuNTU2IDBoMi4yMjJ2MS4zMzRIMTIuODl6TTExLjU1NiA4Ljg5SDkuMzMzdjEuMzMzaDIuMjIzem0tMi4yMjMgMS43NzhoMi4yMjN2MS43NzhoMS4zMzN2LTEuNzc4aDIuMjIydjYuMjIySDEyLjg5di0yLjY2N2gtMS4zMzN2Mi42NjdIOS4zMzN6bTUuNzc4LTEuNzc4SDEyLjg5djEuMzMzaDIuMjIyem0uNDQ1LTEuNzc4SDIwdjEuMzM0aC00LjQ0NHptMCAxLjc3OEgyMHYxLjMzM2gtNC40NDR6bTAgMS43NzhIMjB2MS43NzhoLTEuNzc4di40NDRIMjB2MS43NzhoLTEuNzc4di40NDRIMjB2MS43NzhoLTQuNDQ0eiIvPgo8L3N2Zz4K)
 * @see https://web3icons.io/tokens/THE
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenTHE = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenTHE', __iconNode);
;
}),
]);

//# sourceMappingURL=1qqr_%40web3icons_react_dist_0cqnb6v._.js.map