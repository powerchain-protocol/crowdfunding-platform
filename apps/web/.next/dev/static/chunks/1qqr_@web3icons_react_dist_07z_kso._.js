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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenFTM.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenFTM
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-client] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#26B6EA',
                d: 'M11.969 3 6.6 6.047v11.816L11.97 21l5.431-3.137V6.047zm.03.9L7.95 6.33 12 8.692l4.05-2.362zM7.5 7.05v4.05l3.6-2.016zm4.95 2.925v4.05l3.6-2.016zM16.5 7.05v4.05l-3.6-2.016zm-4.95 2.925v4.05l-3.6-2.016zM7.5 12.702V17.4l4.5 2.7 4.5-2.7v-4.698L12 15.15z',
                fillRule: 'evenodd',
                clipRule: 'evenodd'
            }
        ],
        [
            'path',
            {
                fill: '#26B6EA',
                d: 'M4.35 18.836V16.05h.9v2.34l2.25 1.161v1zm15.3-13.671V7.95h-.9V5.61L16.5 4.45v-1z'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M11.969 3 6.6 6.047v11.816L11.97 21l5.431-3.137V6.047zm.03.9L7.95 6.33 12 8.692l4.05-2.362zM7.5 7.05v4.05l3.6-2.016zm4.95 2.925v4.05l3.6-2.016zM16.5 7.05v4.05l-3.6-2.016zm-4.95 2.925v4.05l-3.6-2.016zM7.5 12.702V17.4l4.5 2.7 4.5-2.7v-4.698L12 15.15z',
                fillRule: 'evenodd',
                clipRule: 'evenodd'
            }
        ],
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M4.35 18.836V16.05h.9v2.34l2.25 1.161v1zm15.3-13.671V7.95h-.9V5.61L16.5 4.45v-1z'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#FTM__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#26B6EA',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M11.972 4 7.2 6.708v10.504L11.972 20l4.828-2.788V6.708zm.028.8L8.4 6.96l3.6 2.1 3.6-2.1zM8 7.6v3.6l3.2-1.792zm4.4 2.6v3.6l3.2-1.792zM16 7.6v3.6l-3.2-1.792zm-4.4 2.6v3.6l-3.2-1.792zM8 12.624V16.8l4 2.4 4-2.4v-4.176L12 14.8z',
                        fillRule: 'evenodd',
                        clipRule: 'evenodd'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M5.2 18.076V15.6H6v2.08l2 1.032v.888zM18.8 5.924V8.4H18V6.32l-2-1.032V4.4z'
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
                        id: 'FTM__a'
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
 * @component @name TokenFTM
 * @description Web3Icon for TokenFTM
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiMyNkI2RUEiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTExLjk2OSAzIDYuNiA2LjA0N3YxMS44MTZMMTEuOTcgMjFsNS40MzEtMy4xMzdWNi4wNDd6bS4wMy45TDcuOTUgNi4zMyAxMiA4LjY5Mmw0LjA1LTIuMzYyek03LjUgNy4wNXY0LjA1bDMuNi0yLjAxNnptNC45NSAyLjkyNXY0LjA1bDMuNi0yLjAxNnpNMTYuNSA3LjA1djQuMDVsLTMuNi0yLjAxNnptLTQuOTUgMi45MjV2NC4wNWwtMy42LTIuMDE2ek03LjUgMTIuNzAyVjE3LjRsNC41IDIuNyA0LjUtMi43di00LjY5OEwxMiAxNS4xNXoiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgogICAgPHBhdGggZmlsbD0iIzI2QjZFQSIgZD0iTTQuMzUgMTguODM2VjE2LjA1aC45djIuMzRsMi4yNSAxLjE2MXYxem0xNS4zLTEzLjY3MVY3Ljk1aC0uOVY1LjYxTDE2LjUgNC40NXYtMXoiLz4KPC9zdmc+Cg==) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTExLjk2OSAzIDYuNiA2LjA0N3YxMS44MTZMMTEuOTcgMjFsNS40MzEtMy4xMzdWNi4wNDd6bS4wMy45TDcuOTUgNi4zMyAxMiA4LjY5Mmw0LjA1LTIuMzYyek03LjUgNy4wNXY0LjA1bDMuNi0yLjAxNnptNC45NSAyLjkyNXY0LjA1bDMuNi0yLjAxNnpNMTYuNSA3LjA1djQuMDVsLTMuNi0yLjAxNnptLTQuOTUgMi45MjV2NC4wNWwtMy42LTIuMDE2ek03LjUgMTIuNzAyVjE3LjRsNC41IDIuNyA0LjUtMi43di00LjY5OEwxMiAxNS4xNXoiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgogICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTQuMzUgMTguODM2VjE2LjA1aC45djIuMzRsMi4yNSAxLjE2MXYxem0xNS4zLTEzLjY3MVY3Ljk1aC0uOVY1LjYxTDE2LjUgNC40NXYtMXoiLz4KPC9zdmc+Cg==) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNGVE1fX2EpIj4KICAgICAgICA8cGF0aCBmaWxsPSIjMjZCNkVBIiBkPSJNMjQgMEgwdjI0aDI0eiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTExLjk3MiA0IDcuMiA2LjcwOHYxMC41MDRMMTEuOTcyIDIwbDQuODI4LTIuNzg4VjYuNzA4em0uMDI4LjhMOC40IDYuOTZsMy42IDIuMSAzLjYtMi4xek04IDcuNnYzLjZsMy4yLTEuNzkyem00LjQgMi42djMuNmwzLjItMS43OTJ6TTE2IDcuNnYzLjZsLTMuMi0xLjc5MnptLTQuNCAyLjZ2My42bC0zLjItMS43OTJ6TTggMTIuNjI0VjE2LjhsNCAyLjQgNC0yLjR2LTQuMTc2TDEyIDE0Ljh6IiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNNS4yIDE4LjA3NlYxNS42SDZ2Mi4wOGwyIDEuMDMydi44ODh6TTE4LjggNS45MjRWOC40SDE4VjYuMzJsLTItMS4wMzJWNC40eiIvPgogICAgPC9nPgogICAgPGRlZnM+CiAgICAgICAgPGNsaXBQYXRoIGlkPSJGVE1fX2EiPgogICAgICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMCAwaDI0djI0SDB6Ii8+CiAgICAgICAgPC9jbGlwUGF0aD4KICAgIDwvZGVmcz4KPC9zdmc+Cg==)
 * @see https://web3icons.io/tokens/FTM
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenFTM = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenFTM', __iconNode);
;
}),
]);

//# sourceMappingURL=1qqr_%40web3icons_react_dist_07z_kso._.js.map