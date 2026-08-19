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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenSENATE.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenSENATE
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-client] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#fff',
                d: 'M7.87 8.84a1.54 1.54 0 0 1 1.281-.698h11.425c.36 0 .493.141.39.437-.03.086-.077.18-.141.27l-.515.694a1.74 1.74 0 0 1-.844.618c-.172.051-.313.124-.446.124H9.117a.78.78 0 0 0-.647.322.4.4 0 0 0-.069.128c-.056.15.013.408.202.408h9.517c.535 0 .724.025.578.454a1.3 1.3 0 0 1-.214.403l-2.336 3.15a1.72 1.72 0 0 1-1.282.708H3.42c-.356 0-.49-.141-.386-.437.03-.086.077-.18.141-.27l1.56-2.1c.314-.417.747-.58 1.287-.622h9.131c.236 0 .459-.198.647-.43a.4.4 0 0 0 .069-.132c.043-.146-.013-.296-.189-.296H6.935c-.549 0-.75-.133-.604-.557a2.3 2.3 0 0 1 .231-.407l1.308-1.77z'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M7.87 8.84a1.54 1.54 0 0 1 1.281-.698h11.425c.36 0 .493.141.39.437-.03.086-.077.18-.141.27l-.515.694a1.74 1.74 0 0 1-.844.618c-.172.051-.313.124-.446.124H9.117a.78.78 0 0 0-.647.322.4.4 0 0 0-.069.128c-.056.15.013.408.202.408h9.517c.535 0 .724.025.578.454a1.3 1.3 0 0 1-.214.403l-2.336 3.15a1.72 1.72 0 0 1-1.282.708H3.42c-.356 0-.49-.141-.386-.437.03-.086.077-.18.141-.27l1.56-2.1c.314-.417.747-.58 1.287-.622h9.131c.236 0 .459-.198.647-.43a.4.4 0 0 0 .069-.132c.043-.146-.013-.296-.189-.296H6.935c-.549 0-.75-.133-.604-.557a2.3 2.3 0 0 1 .231-.407l1.308-1.77z'
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
                d: 'M8.328 9.191a1.37 1.37 0 0 1 1.14-.62h10.155c.32 0 .438.125.347.388a1 1 0 0 1-.126.24l-.457.617a1.55 1.55 0 0 1-.75.55c-.153.045-.279.11-.397.11H9.437a.7.7 0 0 0-.575.285.3.3 0 0 0-.061.115c-.05.133.011.362.18.362h8.459c.476 0 .644.023.514.404-.05.137-.107.255-.19.358l-2.077 2.8a1.53 1.53 0 0 1-1.14.63H4.374c-.316 0-.434-.126-.343-.39a1 1 0 0 1 .126-.24l1.387-1.867c.278-.37.663-.514 1.143-.552h8.117c.21 0 .408-.175.575-.381a.3.3 0 0 0 .061-.118c.038-.13-.011-.263-.168-.263H7.498c-.488 0-.667-.118-.538-.496a2 2 0 0 1 .206-.362l1.162-1.573z'
            }
        ]
    ]
};
/**
 * @component @name TokenSENATE
 * @description Web3Icon for TokenSENATE
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik03Ljg3IDguODRhMS41NCAxLjU0IDAgMCAxIDEuMjgxLS42OThoMTEuNDI1Yy4zNiAwIC40OTMuMTQxLjM5LjQzNy0uMDMuMDg2LS4wNzcuMTgtLjE0MS4yN2wtLjUxNS42OTRhMS43NCAxLjc0IDAgMCAxLS44NDQuNjE4Yy0uMTcyLjA1MS0uMzEzLjEyNC0uNDQ2LjEyNEg5LjExN2EuNzguNzggMCAwIDAtLjY0Ny4zMjIuNC40IDAgMCAwLS4wNjkuMTI4Yy0uMDU2LjE1LjAxMy40MDguMjAyLjQwOGg5LjUxN2MuNTM1IDAgLjcyNC4wMjUuNTc4LjQ1NGExLjMgMS4zIDAgMCAxLS4yMTQuNDAzbC0yLjMzNiAzLjE1YTEuNzIgMS43MiAwIDAgMS0xLjI4Mi43MDhIMy40MmMtLjM1NiAwLS40OS0uMTQxLS4zODYtLjQzNy4wMy0uMDg2LjA3Ny0uMTguMTQxLS4yN2wxLjU2LTIuMWMuMzE0LS40MTcuNzQ3LS41OCAxLjI4Ny0uNjIyaDkuMTMxYy4yMzYgMCAuNDU5LS4xOTguNjQ3LS40M2EuNC40IDAgMCAwIC4wNjktLjEzMmMuMDQzLS4xNDYtLjAxMy0uMjk2LS4xODktLjI5Nkg2LjkzNWMtLjU0OSAwLS43NS0uMTMzLS42MDQtLjU1N2EyLjMgMi4zIDAgMCAxIC4yMzEtLjQwN2wxLjMwOC0xLjc3eiIvPgo8L3N2Zz4K) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik03Ljg3IDguODRhMS41NCAxLjU0IDAgMCAxIDEuMjgxLS42OThoMTEuNDI1Yy4zNiAwIC40OTMuMTQxLjM5LjQzNy0uMDMuMDg2LS4wNzcuMTgtLjE0MS4yN2wtLjUxNS42OTRhMS43NCAxLjc0IDAgMCAxLS44NDQuNjE4Yy0uMTcyLjA1MS0uMzEzLjEyNC0uNDQ2LjEyNEg5LjExN2EuNzguNzggMCAwIDAtLjY0Ny4zMjIuNC40IDAgMCAwLS4wNjkuMTI4Yy0uMDU2LjE1LjAxMy40MDguMjAyLjQwOGg5LjUxN2MuNTM1IDAgLjcyNC4wMjUuNTc4LjQ1NGExLjMgMS4zIDAgMCAxLS4yMTQuNDAzbC0yLjMzNiAzLjE1YTEuNzIgMS43MiAwIDAgMS0xLjI4Mi43MDhIMy40MmMtLjM1NiAwLS40OS0uMTQxLS4zODYtLjQzNy4wMy0uMDg2LjA3Ny0uMTguMTQxLS4yN2wxLjU2LTIuMWMuMzE0LS40MTcuNzQ3LS41OCAxLjI4Ny0uNjIyaDkuMTMxYy4yMzYgMCAuNDU5LS4xOTguNjQ3LS40M2EuNC40IDAgMCAwIC4wNjktLjEzMmMuMDQzLS4xNDYtLjAxMy0uMjk2LS4xODktLjI5Nkg2LjkzNWMtLjU0OSAwLS43NS0uMTMzLS42MDQtLjU1N2EyLjMgMi4zIDAgMCAxIC4yMzEtLjQwN2wxLjMwOC0xLjc3eiIvPgo8L3N2Zz4K) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiMwMDAiIGQ9Ik0yNCAwSDB2MjRoMjR6Ii8+CiAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNOC4zMjggOS4xOTFhMS4zNyAxLjM3IDAgMCAxIDEuMTQtLjYyaDEwLjE1NWMuMzIgMCAuNDM4LjEyNS4zNDcuMzg4YTEgMSAwIDAgMS0uMTI2LjI0bC0uNDU3LjYxN2ExLjU1IDEuNTUgMCAwIDEtLjc1LjU1Yy0uMTUzLjA0NS0uMjc5LjExLS4zOTcuMTFIOS40MzdhLjcuNyAwIDAgMC0uNTc1LjI4NS4zLjMgMCAwIDAtLjA2MS4xMTVjLS4wNS4xMzMuMDExLjM2Mi4xOC4zNjJoOC40NTljLjQ3NiAwIC42NDQuMDIzLjUxNC40MDQtLjA1LjEzNy0uMTA3LjI1NS0uMTkuMzU4bC0yLjA3NyAyLjhhMS41MyAxLjUzIDAgMCAxLTEuMTQuNjNINC4zNzRjLS4zMTYgMC0uNDM0LS4xMjYtLjM0My0uMzlhMSAxIDAgMCAxIC4xMjYtLjI0bDEuMzg3LTEuODY3Yy4yNzgtLjM3LjY2My0uNTE0IDEuMTQzLS41NTJoOC4xMTdjLjIxIDAgLjQwOC0uMTc1LjU3NS0uMzgxYS4zLjMgMCAwIDAgLjA2MS0uMTE4Yy4wMzgtLjEzLS4wMTEtLjI2My0uMTY4LS4yNjNINy40OThjLS40ODggMC0uNjY3LS4xMTgtLjUzOC0uNDk2YTIgMiAwIDAgMSAuMjA2LS4zNjJsMS4xNjItMS41NzN6Ii8+Cjwvc3ZnPgo=)
 * @see https://web3icons.io/tokens/SENATE
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenSENATE = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenSENATE', __iconNode);
;
}),
]);

//# sourceMappingURL=1qqr_%40web3icons_react_dist_1-j-1lp._.js.map