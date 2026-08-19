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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenXOR.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenXOR
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-ssr] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#E3232C',
                d: 'M7.715 19.914A8.94 8.94 0 0 0 12 21a8.94 8.94 0 0 0 4.284-1.086L12 13.532z'
            }
        ],
        [
            'path',
            {
                fill: '#E3232C',
                d: 'M6.375 12v-1.687h5.063V9.187H6.375V7.5h11.25v1.687h-5.062v1.126h5.062V12h-4.882l4.778 7.109A9 9 0 0 0 21 12a9 9 0 0 0-9-9 9 9 0 0 0-5.522 16.109L11.258 12z'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M7.715 19.914A8.95 8.95 0 0 0 12 21a8.94 8.94 0 0 0 4.284-1.086L12 13.532z'
            }
        ],
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M6.375 12v-1.687h5.062V9.187H6.375V7.5h11.25v1.687h-5.062v1.126h5.062V12h-4.883l4.78 7.109A9 9 0 0 0 21 11.999 9 9 0 0 0 12 3a9 9 0 0 0-5.522 16.109l4.78-7.11z'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#XOR__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#E3232C',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M8.191 19.035A7.95 7.95 0 0 0 12 20a7.94 7.94 0 0 0 3.808-.965L12 13.362z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M7 12v-1.5h4.5v-1H7V8h10v1.5h-4.5v1H17V12h-4.34l4.248 6.319A8 8 0 0 0 20 11.999 8 8 0 0 0 12 4a8 8 0 0 0-4.908 14.319l4.249-6.32z'
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
                        id: 'XOR__a'
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
 * @component @name TokenXOR
 * @description Web3Icon for TokenXOR
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNFMzIzMkMiIGQ9Ik03LjcxNSAxOS45MTRBOC45NCA4Ljk0IDAgMCAwIDEyIDIxYTguOTQgOC45NCAwIDAgMCA0LjI4NC0xLjA4NkwxMiAxMy41MzJ6Ii8+CiAgICA8cGF0aCBmaWxsPSIjRTMyMzJDIiBkPSJNNi4zNzUgMTJ2LTEuNjg3aDUuMDYzVjkuMTg3SDYuMzc1VjcuNWgxMS4yNXYxLjY4N2gtNS4wNjJ2MS4xMjZoNS4wNjJWMTJoLTQuODgybDQuNzc4IDcuMTA5QTkgOSAwIDAgMCAyMSAxMmE5IDkgMCAwIDAtOS05IDkgOSAwIDAgMC01LjUyMiAxNi4xMDlMMTEuMjU4IDEyeiIvPgo8L3N2Zz4K) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik03LjcxNSAxOS45MTRBOC45NSA4Ljk1IDAgMCAwIDEyIDIxYTguOTQgOC45NCAwIDAgMCA0LjI4NC0xLjA4NkwxMiAxMy41MzJ6Ii8+CiAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNNi4zNzUgMTJ2LTEuNjg3aDUuMDYyVjkuMTg3SDYuMzc1VjcuNWgxMS4yNXYxLjY4N2gtNS4wNjJ2MS4xMjZoNS4wNjJWMTJoLTQuODgzbDQuNzggNy4xMDlBOSA5IDAgMCAwIDIxIDExLjk5OSA5IDkgMCAwIDAgMTIgM2E5IDkgMCAwIDAtNS41MjIgMTYuMTA5bDQuNzgtNy4xMXoiLz4KPC9zdmc+Cg==) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNYT1JfX2EpIj4KICAgICAgICA8cGF0aCBmaWxsPSIjRTMyMzJDIiBkPSJNMjQgMEgwdjI0aDI0eiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik04LjE5MSAxOS4wMzVBNy45NSA3Ljk1IDAgMCAwIDEyIDIwYTcuOTQgNy45NCAwIDAgMCAzLjgwOC0uOTY1TDEyIDEzLjM2MnoiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNNyAxMnYtMS41aDQuNXYtMUg3VjhoMTB2MS41aC00LjV2MUgxN1YxMmgtNC4zNGw0LjI0OCA2LjMxOUE4IDggMCAwIDAgMjAgMTEuOTk5IDggOCAwIDAgMCAxMiA0YTggOCAwIDAgMC00LjkwOCAxNC4zMTlsNC4yNDktNi4zMnoiLz4KICAgIDwvZz4KICAgIDxkZWZzPgogICAgICAgIDxjbGlwUGF0aCBpZD0iWE9SX19hIj4KICAgICAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTAgMGgyNHYyNEgweiIvPgogICAgICAgIDwvY2xpcFBhdGg+CiAgICA8L2RlZnM+Cjwvc3ZnPgo=)
 * @see https://web3icons.io/tokens/XOR
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenXOR = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenXOR', __iconNode);
;
}),
];

//# sourceMappingURL=1qqr_%40web3icons_react_dist_0e0ym_7._.js.map