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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenHUSD.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenHUSD
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-client] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#1A61F0',
                d: 'M18.75 21h-3.375v-5.693c0-.912-.82-1.62-1.766-1.62H8.678c-1.892 0-3.428-1.513-3.428-3.338V3.002h3.375v5.694c0 .912.82 1.617 1.766 1.617h4.93c1.892.001 3.426 1.516 3.427 3.341zM8.625 21H5.25v-5.625c1.893 0 3.375 1.552 3.375 3.379zm6.75-18h3.375v5.625c-1.895 0-3.375-1.55-3.375-3.376z'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M18.75 21h-3.375v-5.693c0-.912-.82-1.62-1.766-1.62H8.678c-1.892 0-3.428-1.513-3.428-3.338V3.002h3.375v5.694c0 .912.82 1.617 1.766 1.617h4.93c1.892.001 3.426 1.516 3.427 3.341zM8.625 21H5.25v-5.625c1.893 0 3.375 1.552 3.375 3.379zm6.75-18h3.375v5.625c-1.895 0-3.375-1.55-3.375-3.376z'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#HUSD__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#1A61F0',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M18 20h-3v-5.06c0-.811-.729-1.44-1.57-1.44H9.048C7.365 13.5 6 12.155 6 10.533V4.002h3v5.061c0 .81.729 1.437 1.57 1.437h4.381c1.683.002 3.046 1.348 3.047 2.97zm-9 0H6v-5c1.683 0 3 1.38 3 3.003zm6-16h3v5c-1.684 0-3-1.379-3-3z'
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
                        id: 'HUSD__a'
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
 * @component @name TokenHUSD
 * @description Web3Icon for TokenHUSD
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiMxQTYxRjAiIGQ9Ik0xOC43NSAyMWgtMy4zNzV2LTUuNjkzYzAtLjkxMi0uODItMS42Mi0xLjc2Ni0xLjYySDguNjc4Yy0xLjg5MiAwLTMuNDI4LTEuNTEzLTMuNDI4LTMuMzM4VjMuMDAyaDMuMzc1djUuNjk0YzAgLjkxMi44MiAxLjYxNyAxLjc2NiAxLjYxN2g0LjkzYzEuODkyLjAwMSAzLjQyNiAxLjUxNiAzLjQyNyAzLjM0MXpNOC42MjUgMjFINS4yNXYtNS42MjVjMS44OTMgMCAzLjM3NSAxLjU1MiAzLjM3NSAzLjM3OXptNi43NS0xOGgzLjM3NXY1LjYyNWMtMS44OTUgMC0zLjM3NS0xLjU1LTMuMzc1LTMuMzc2eiIvPgo8L3N2Zz4K) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xOC43NSAyMWgtMy4zNzV2LTUuNjkzYzAtLjkxMi0uODItMS42Mi0xLjc2Ni0xLjYySDguNjc4Yy0xLjg5MiAwLTMuNDI4LTEuNTEzLTMuNDI4LTMuMzM4VjMuMDAyaDMuMzc1djUuNjk0YzAgLjkxMi44MiAxLjYxNyAxLjc2NiAxLjYxN2g0LjkzYzEuODkyLjAwMSAzLjQyNiAxLjUxNiAzLjQyNyAzLjM0MXpNOC42MjUgMjFINS4yNXYtNS42MjVjMS44OTMgMCAzLjM3NSAxLjU1MiAzLjM3NSAzLjM3OXptNi43NS0xOGgzLjM3NXY1LjYyNWMtMS44OTUgMC0zLjM3NS0xLjU1LTMuMzc1LTMuMzc2eiIvPgo8L3N2Zz4K) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNIVVNEX19hKSI+CiAgICAgICAgPHBhdGggZmlsbD0iIzFBNjFGMCIgZD0iTTI0IDBIMHYyNGgyNHoiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTggMjBoLTN2LTUuMDZjMC0uODExLS43MjktMS40NC0xLjU3LTEuNDRIOS4wNDhDNy4zNjUgMTMuNSA2IDEyLjE1NSA2IDEwLjUzM1Y0LjAwMmgzdjUuMDYxYzAgLjgxLjcyOSAxLjQzNyAxLjU3IDEuNDM3aDQuMzgxYzEuNjgzLjAwMiAzLjA0NiAxLjM0OCAzLjA0NyAyLjk3em0tOSAwSDZ2LTVjMS42ODMgMCAzIDEuMzggMyAzLjAwM3ptNi0xNmgzdjVjLTEuNjg0IDAtMy0xLjM3OS0zLTN6Ii8+CiAgICA8L2c+CiAgICA8ZGVmcz4KICAgICAgICA8Y2xpcFBhdGggaWQ9IkhVU0RfX2EiPgogICAgICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMCAwaDI0djI0SDB6Ii8+CiAgICAgICAgPC9jbGlwUGF0aD4KICAgIDwvZGVmcz4KPC9zdmc+Cg==)
 * @see https://web3icons.io/tokens/HUSD
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenHUSD = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenHUSD', __iconNode);
;
}),
]);

//# sourceMappingURL=1qqr_%40web3icons_react_dist_0i1_xsj._.js.map