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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenCLS.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenCLS
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-client] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#0053F1',
                d: 'M12.002 21a9 9 0 1 0-8.079-5.03l6.67-3.975-2.779-1.588a.816.816 0 0 1-.301-1.102.815.815 0 0 1 1.1-.301l2.86 1.604V7.399c0-.439.317-.693.757-.693s.83.254.83.693v3.209l2.786-1.604a.815.815 0 0 1 1.1.301c.223.376.08.88-.296 1.101l-2.8 1.589 2.784 1.588a.806.806 0 0 1 .297 1.096.82.82 0 0 1-.831.397.7.7 0 0 1-.254-.096l-2.785-1.604v3.225c0 .439-.392.693-.831.693-.44 0-.757-.254-.757-.693v-3.24l-6.724 3.97A8.99 8.99 0 0 0 12.002 21'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M12.002 21a8.999 8.999 0 1 0-8.079-5.03l6.67-3.975-2.779-1.588a.815.815 0 0 1-.301-1.102.815.815 0 0 1 1.1-.301l2.86 1.604V7.399c0-.439.317-.693.757-.693s.83.254.83.693v3.209l2.785-1.604a.816.816 0 0 1 1.102.301c.222.376.08.88-.297 1.101l-2.8 1.589 2.784 1.588a.806.806 0 0 1 .297 1.096.82.82 0 0 1-.831.397.7.7 0 0 1-.255-.096l-2.784-1.603V16.6c0 .439-.392.693-.831.693-.44 0-.757-.254-.757-.693v-3.24l-6.724 3.97A8.99 8.99 0 0 0 12.002 21'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#CLS__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#0053F1',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M12.002 20a8 8 0 1 0-7.181-4.47l5.93-3.535-2.472-1.411a.725.725 0 0 1-.268-.98.725.725 0 0 1 .98-.268l2.54 1.426V7.911c0-.391.282-.617.673-.617.39 0 .739.226.739.617v2.851l2.475-1.426a.725.725 0 0 1 .979.269.727.727 0 0 1-.263.979l-2.49 1.411 2.475 1.412a.717.717 0 0 1 .264.974.73.73 0 0 1-.739.353.6.6 0 0 1-.226-.085l-2.475-1.425v2.865c0 .391-.348.617-.739.617-.39 0-.673-.226-.673-.617v-2.88l-5.976 3.53A7.99 7.99 0 0 0 12.002 20'
                    }
                ]
            ]
        ],
        [
            'defs',
            {},
            [
                [
                    'clipPath',
                    {
                        id: 'CLS__a'
                    },
                    [
                        [
                            'path',
                            {
                                fill: '#fff',
                                d: 'M0 0h24v24H0z'
                            }
                        ]
                    ]
                ]
            ]
        ]
    ]
};
/**
 * @component @name TokenCLS
 * @description Web3Icon for TokenCLS
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiMwMDUzRjEiIGQ9Ik0xMi4wMDIgMjFhOSA5IDAgMSAwLTguMDc5LTUuMDNsNi42Ny0zLjk3NS0yLjc3OS0xLjU4OGEuODE2LjgxNiAwIDAgMS0uMzAxLTEuMTAyLjgxNS44MTUgMCAwIDEgMS4xLS4zMDFsMi44NiAxLjYwNFY3LjM5OWMwLS40MzkuMzE3LS42OTMuNzU3LS42OTNzLjgzLjI1NC44My42OTN2My4yMDlsMi43ODYtMS42MDRhLjgxNS44MTUgMCAwIDEgMS4xLjMwMWMuMjIzLjM3Ni4wOC44OC0uMjk2IDEuMTAxbC0yLjggMS41ODkgMi43ODQgMS41ODhhLjgwNi44MDYgMCAwIDEgLjI5NyAxLjA5Ni44Mi44MiAwIDAgMS0uODMxLjM5Ny43LjcgMCAwIDEtLjI1NC0uMDk2bC0yLjc4NS0xLjYwNHYzLjIyNWMwIC40MzktLjM5Mi42OTMtLjgzMS42OTMtLjQ0IDAtLjc1Ny0uMjU0LS43NTctLjY5M3YtMy4yNGwtNi43MjQgMy45N0E4Ljk5IDguOTkgMCAwIDAgMTIuMDAyIDIxIi8+Cjwvc3ZnPgo=) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xMi4wMDIgMjFhOC45OTkgOC45OTkgMCAxIDAtOC4wNzktNS4wM2w2LjY3LTMuOTc1LTIuNzc5LTEuNTg4YS44MTUuODE1IDAgMCAxLS4zMDEtMS4xMDIuODE1LjgxNSAwIDAgMSAxLjEtLjMwMWwyLjg2IDEuNjA0VjcuMzk5YzAtLjQzOS4zMTctLjY5My43NTctLjY5M3MuODMuMjU0LjgzLjY5M3YzLjIwOWwyLjc4NS0xLjYwNGEuODE2LjgxNiAwIDAgMSAxLjEwMi4zMDFjLjIyMi4zNzYuMDguODgtLjI5NyAxLjEwMWwtMi44IDEuNTg5IDIuNzg0IDEuNTg4YS44MDYuODA2IDAgMCAxIC4yOTcgMS4wOTYuODIuODIgMCAwIDEtLjgzMS4zOTcuNy43IDAgMCAxLS4yNTUtLjA5NmwtMi43ODQtMS42MDNWMTYuNmMwIC40MzktLjM5Mi42OTMtLjgzMS42OTMtLjQ0IDAtLjc1Ny0uMjU0LS43NTctLjY5M3YtMy4yNGwtNi43MjQgMy45N0E4Ljk5IDguOTkgMCAwIDAgMTIuMDAyIDIxIi8+Cjwvc3ZnPgo=) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNDTFNfX2EpIj4KICAgICAgICA8cGF0aCBmaWxsPSIjMDA1M0YxIiBkPSJNMjQgMEgwdjI0aDI0eiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xMi4wMDIgMjBhOCA4IDAgMSAwLTcuMTgxLTQuNDdsNS45My0zLjUzNS0yLjQ3Mi0xLjQxMWEuNzI1LjcyNSAwIDAgMS0uMjY4LS45OC43MjUuNzI1IDAgMCAxIC45OC0uMjY4bDIuNTQgMS40MjZWNy45MTFjMC0uMzkxLjI4Mi0uNjE3LjY3My0uNjE3LjM5IDAgLjczOS4yMjYuNzM5LjYxN3YyLjg1MWwyLjQ3NS0xLjQyNmEuNzI1LjcyNSAwIDAgMSAuOTc5LjI2OS43MjcuNzI3IDAgMCAxLS4yNjMuOTc5bC0yLjQ5IDEuNDExIDIuNDc1IDEuNDEyYS43MTcuNzE3IDAgMCAxIC4yNjQuOTc0LjczLjczIDAgMCAxLS43MzkuMzUzLjYuNiAwIDAgMS0uMjI2LS4wODVsLTIuNDc1LTEuNDI1djIuODY1YzAgLjM5MS0uMzQ4LjYxNy0uNzM5LjYxNy0uMzkgMC0uNjczLS4yMjYtLjY3My0uNjE3di0yLjg4bC01Ljk3NiAzLjUzQTcuOTkgNy45OSAwIDAgMCAxMi4wMDIgMjAiLz4KICAgIDwvZz4KICAgIDxkZWZzPgogICAgICAgIDxjbGlwUGF0aCBpZD0iQ0xTX19hIj4KICAgICAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTAgMGgyNHYyNEgweiIvPgogICAgICAgIDwvY2xpcFBhdGg+CiAgICA8L2RlZnM+Cjwvc3ZnPgo=)
 * @see https://web3icons.io/tokens/CLS
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenCLS = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenCLS', __iconNode);
;
}),
]);

//# sourceMappingURL=1qqr_%40web3icons_react_dist_1qtgpml._.js.map