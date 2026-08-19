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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenGRS.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenGRS
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-client] (ecmascript)");
;
const __iconNode = {
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M16.3 19.909A8.96 8.96 0 0 1 12 21a9 9 0 0 1-9-9 9 9 0 0 1 9-9 9 9 0 0 1 5.265 16.3c-.332-1.23-1.524-1.756-2.706-1.833-1.457-.086-2.913-.144-4.37-.253h-.017c-.613-.13-.799-.506-.478-1.04.152-.259.388-.473.602-.698.05-.045.185-.028.275-.005 1.013.242 2.02.253 3.004-.096 1.204-.428 2.03-1.243 2.334-2.509.228-.935.027-1.711-.393-2.553h1.372c.056-.006.14-.04.157-.074l.456-1.569s-.566.533-.973.517c-.407.004-1.8 0-1.8 0l1.153-1.305c.8-.864 1.876-2.263.95-3.408-.37-.372-.927-.557-.927-.557s-.45-.028-.67 0c-.773.111-1.264.765-1.36 1.507-.035.136.131.175.201.062.195-.272.277-.547.591-.73a1.16 1.16 0 0 1 1.412.201c.761.825.052 2.136-.574 2.813-.138.163-.913 1.24-1.153 1.102-.703-.399-1.457-.579-2.267-.596-1.576-.1-3.232.746-3.925 2.195-.496 1.038-.472 2.34.109 3.34.342.587.877 1.023 1.466 1.347-.414.405-.853.79-1.244 1.218-.281.32-.478.703-.506 1.153-.05.64.578.98 1.012 1.328l-.342.36q-.34.365-.687.72a.27.27 0 0 1-.169.022c.28.162.939.432.933.429.234-.487.541-.909.884-1.329.04-.056.146-.078.225-.078 1.626.106 3.257.178 4.882.298.7.021 1.578.63 1.578.63'
            }
        ],
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M13.3 14.537c-.521.489-1.35.613-2 .327-.916-.403-1.315-1.526-1.416-2.448-.18-1.205-.077-2.911 1.25-3.42 1.629-.636 2.659 1.185 2.778 2.548.1.959.158 2.267-.613 2.993'
            }
        ]
    ]
};
/**
 * @component @name TokenGRS
 * @description Web3Icon for TokenGRS
 *
 * @preview (mono)
 * @preview ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xNi4zIDE5LjkwOUE4Ljk2IDguOTYgMCAwIDEgMTIgMjFhOSA5IDAgMCAxLTktOSA5IDkgMCAwIDEgOS05IDkgOSAwIDAgMSA1LjI2NSAxNi4zYy0uMzMyLTEuMjMtMS41MjQtMS43NTYtMi43MDYtMS44MzMtMS40NTctLjA4Ni0yLjkxMy0uMTQ0LTQuMzctLjI1M2gtLjAxN2MtLjYxMy0uMTMtLjc5OS0uNTA2LS40NzgtMS4wNC4xNTItLjI1OS4zODgtLjQ3My42MDItLjY5OC4wNS0uMDQ1LjE4NS0uMDI4LjI3NS0uMDA1IDEuMDEzLjI0MiAyLjAyLjI1MyAzLjAwNC0uMDk2IDEuMjA0LS40MjggMi4wMy0xLjI0MyAyLjMzNC0yLjUwOS4yMjgtLjkzNS4wMjctMS43MTEtLjM5My0yLjU1M2gxLjM3MmMuMDU2LS4wMDYuMTQtLjA0LjE1Ny0uMDc0bC40NTYtMS41NjlzLS41NjYuNTMzLS45NzMuNTE3Yy0uNDA3LjAwNC0xLjggMC0xLjggMGwxLjE1My0xLjMwNWMuOC0uODY0IDEuODc2LTIuMjYzLjk1LTMuNDA4LS4zNy0uMzcyLS45MjctLjU1Ny0uOTI3LS41NTdzLS40NS0uMDI4LS42NyAwYy0uNzczLjExMS0xLjI2NC43NjUtMS4zNiAxLjUwNy0uMDM1LjEzNi4xMzEuMTc1LjIwMS4wNjIuMTk1LS4yNzIuMjc3LS41NDcuNTkxLS43M2ExLjE2IDEuMTYgMCAwIDEgMS40MTIuMjAxYy43NjEuODI1LjA1MiAyLjEzNi0uNTc0IDIuODEzLS4xMzguMTYzLS45MTMgMS4yNC0xLjE1MyAxLjEwMi0uNzAzLS4zOTktMS40NTctLjU3OS0yLjI2Ny0uNTk2LTEuNTc2LS4xLTMuMjMyLjc0Ni0zLjkyNSAyLjE5NS0uNDk2IDEuMDM4LS40NzIgMi4zNC4xMDkgMy4zNC4zNDIuNTg3Ljg3NyAxLjAyMyAxLjQ2NiAxLjM0Ny0uNDE0LjQwNS0uODUzLjc5LTEuMjQ0IDEuMjE4LS4yODEuMzItLjQ3OC43MDMtLjUwNiAxLjE1My0uMDUuNjQuNTc4Ljk4IDEuMDEyIDEuMzI4bC0uMzQyLjM2cS0uMzQuMzY1LS42ODcuNzJhLjI3LjI3IDAgMCAxLS4xNjkuMDIyYy4yOC4xNjIuOTM5LjQzMi45MzMuNDI5LjIzNC0uNDg3LjU0MS0uOTA5Ljg4NC0xLjMyOS4wNC0uMDU2LjE0Ni0uMDc4LjIyNS0uMDc4IDEuNjI2LjEwNiAzLjI1Ny4xNzggNC44ODIuMjk4LjcuMDIxIDEuNTc4LjYzIDEuNTc4LjYzIi8+CiAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTMuMyAxNC41MzdjLS41MjEuNDg5LTEuMzUuNjEzLTIgLjMyNy0uOTE2LS40MDMtMS4zMTUtMS41MjYtMS40MTYtMi40NDgtLjE4LTEuMjA1LS4wNzctMi45MTEgMS4yNS0zLjQyIDEuNjI5LS42MzYgMi42NTkgMS4xODUgMi43NzggMi41NDguMS45NTkuMTU4IDIuMjY3LS42MTMgMi45OTMiLz4KPC9zdmc+Cg==)
 * @see https://web3icons.io/tokens/GRS
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenGRS = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenGRS', __iconNode);
;
}),
]);

//# sourceMappingURL=1qqr_%40web3icons_react_dist_1s_-a7i._.js.map