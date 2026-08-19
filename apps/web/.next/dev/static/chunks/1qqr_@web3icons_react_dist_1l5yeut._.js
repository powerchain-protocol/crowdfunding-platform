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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenPYTH.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenPYTH
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-client] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#110F24',
                d: 'M13.543 10.2c0 .993-.853 1.543-1.543 1.543V13.8a3.6 3.6 0 1 0-3.6-3.6v8.846L10.457 21V10.2c0-.668.55-1.542 1.543-1.542a1.543 1.543 0 0 1 1.543 1.543'
            }
        ],
        [
            'path',
            {
                fill: '#110F24',
                d: 'M12 3a7.16 7.16 0 0 0-5.4 2.438A7.17 7.17 0 0 0 4.8 10.2v5.4l2.057 1.98V10.2c0-2.685 2.16-5.143 5.143-5.143s5.143 2.484 5.143 5.143c0 2.983-2.458 5.143-5.143 5.143V17.4A7.2 7.2 0 1 0 12 3'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M13.543 10.2c0 .993-.853 1.543-1.543 1.543V13.8a3.6 3.6 0 1 0-3.6-3.6v8.846L10.457 21V10.2c0-.668.55-1.542 1.543-1.542a1.543 1.543 0 0 1 1.543 1.543'
            }
        ],
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M12 3a7.16 7.16 0 0 0-5.4 2.438A7.17 7.17 0 0 0 4.8 10.2v5.4l2.057 1.98V10.2c0-2.685 2.16-5.143 5.143-5.143s5.143 2.484 5.143 5.143c0 2.983-2.458 5.143-5.143 5.143V17.4A7.2 7.2 0 1 0 12 3'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#PYTH__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#110F24',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M13.372 10.4c0 .882-.76 1.371-1.372 1.371V13.6a3.2 3.2 0 1 0-3.2-3.2v7.863L10.63 20v-9.6c0-.594.489-1.371 1.371-1.371a1.37 1.37 0 0 1 1.371 1.371'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M12 4a6.37 6.37 0 0 0-4.8 2.167A6.38 6.38 0 0 0 5.6 10.4v4.8l1.829 1.76V10.4c0-2.386 1.92-4.571 4.57-4.571 2.652 0 4.572 2.207 4.572 4.57 0 2.652-2.185 4.572-4.571 4.572v1.828A6.4 6.4 0 1 0 12 4'
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
                        id: 'PYTH__a'
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
 * @component @name TokenPYTH
 * @description Web3Icon for TokenPYTH
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiMxMTBGMjQiIGQ9Ik0xMy41NDMgMTAuMmMwIC45OTMtLjg1MyAxLjU0My0xLjU0MyAxLjU0M1YxMy44YTMuNiAzLjYgMCAxIDAtMy42LTMuNnY4Ljg0NkwxMC40NTcgMjFWMTAuMmMwLS42NjguNTUtMS41NDIgMS41NDMtMS41NDJhMS41NDMgMS41NDMgMCAwIDEgMS41NDMgMS41NDMiLz4KICAgIDxwYXRoIGZpbGw9IiMxMTBGMjQiIGQ9Ik0xMiAzYTcuMTYgNy4xNiAwIDAgMC01LjQgMi40MzhBNy4xNyA3LjE3IDAgMCAwIDQuOCAxMC4ydjUuNGwyLjA1NyAxLjk4VjEwLjJjMC0yLjY4NSAyLjE2LTUuMTQzIDUuMTQzLTUuMTQzczUuMTQzIDIuNDg0IDUuMTQzIDUuMTQzYzAgMi45ODMtMi40NTggNS4xNDMtNS4xNDMgNS4xNDNWMTcuNEE3LjIgNy4yIDAgMSAwIDEyIDMiLz4KPC9zdmc+Cg==) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xMy41NDMgMTAuMmMwIC45OTMtLjg1MyAxLjU0My0xLjU0MyAxLjU0M1YxMy44YTMuNiAzLjYgMCAxIDAtMy42LTMuNnY4Ljg0NkwxMC40NTcgMjFWMTAuMmMwLS42NjguNTUtMS41NDIgMS41NDMtMS41NDJhMS41NDMgMS41NDMgMCAwIDEgMS41NDMgMS41NDMiLz4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xMiAzYTcuMTYgNy4xNiAwIDAgMC01LjQgMi40MzhBNy4xNyA3LjE3IDAgMCAwIDQuOCAxMC4ydjUuNGwyLjA1NyAxLjk4VjEwLjJjMC0yLjY4NSAyLjE2LTUuMTQzIDUuMTQzLTUuMTQzczUuMTQzIDIuNDg0IDUuMTQzIDUuMTQzYzAgMi45ODMtMi40NTggNS4xNDMtNS4xNDMgNS4xNDNWMTcuNEE3LjIgNy4yIDAgMSAwIDEyIDMiLz4KPC9zdmc+Cg==) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNQWVRIX19hKSI+CiAgICAgICAgPHBhdGggZmlsbD0iIzExMEYyNCIgZD0iTTI0IDBIMHYyNGgyNHoiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTMuMzcyIDEwLjRjMCAuODgyLS43NiAxLjM3MS0xLjM3MiAxLjM3MVYxMy42YTMuMiAzLjIgMCAxIDAtMy4yLTMuMnY3Ljg2M0wxMC42MyAyMHYtOS42YzAtLjU5NC40ODktMS4zNzEgMS4zNzEtMS4zNzFhMS4zNyAxLjM3IDAgMCAxIDEuMzcxIDEuMzcxIi8+CiAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTEyIDRhNi4zNyA2LjM3IDAgMCAwLTQuOCAyLjE2N0E2LjM4IDYuMzggMCAwIDAgNS42IDEwLjR2NC44bDEuODI5IDEuNzZWMTAuNGMwLTIuMzg2IDEuOTItNC41NzEgNC41Ny00LjU3MSAyLjY1MiAwIDQuNTcyIDIuMjA3IDQuNTcyIDQuNTcgMCAyLjY1Mi0yLjE4NSA0LjU3Mi00LjU3MSA0LjU3MnYxLjgyOEE2LjQgNi40IDAgMSAwIDEyIDQiLz4KICAgIDwvZz4KICAgIDxkZWZzPgogICAgICAgIDxjbGlwUGF0aCBpZD0iUFlUSF9fYSI+CiAgICAgICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0wIDBoMjR2MjRIMHoiLz4KICAgICAgICA8L2NsaXBQYXRoPgogICAgPC9kZWZzPgo8L3N2Zz4K)
 * @see https://web3icons.io/tokens/PYTH
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenPYTH = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenPYTH', __iconNode);
;
}),
]);

//# sourceMappingURL=1qqr_%40web3icons_react_dist_1l5yeut._.js.map