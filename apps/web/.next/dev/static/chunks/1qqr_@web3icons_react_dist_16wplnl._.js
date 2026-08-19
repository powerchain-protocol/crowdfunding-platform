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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenLOVELY.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenLOVELY
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-client] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#D8337B',
                d: 'M3 13.364h7.636v7.091C7.146 18.89 4.091 15.077 3 13.365m16.91 0h-7.637v7.091c3.49-1.565 6.545-5.378 7.636-7.09M3.512 11.728h7.123V6.562a3.57 3.57 0 0 0-3.441-2.47C4.473 4.091 3 7.718 3 9c0 1.031.344 2.248.513 2.728m16.898 0h-8.138V5.837c.273-.884 1.45-2.291 3.933-2.291C19.314 3.546 21 7.43 21 8.81c0 1.101-.393 2.4-.589 2.918'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M3 13.364h7.636v7.091C7.146 18.89 4.091 15.077 3 13.365m16.91 0h-7.637v7.091c3.49-1.565 6.545-5.378 7.636-7.09M3.512 11.728h7.123V6.562a3.57 3.57 0 0 0-3.441-2.47C4.473 4.091 3 7.718 3 9c0 1.031.344 2.248.513 2.728m16.898 0h-8.138V5.837c.273-.884 1.45-2.291 3.933-2.291C19.314 3.546 21 7.43 21 8.81c0 1.101-.393 2.4-.589 2.918'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#LOVELY__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#D8337B',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M4 13.212h6.788v6.303C7.685 18.123 4.97 14.735 4 13.212m15.03 0h-6.788v6.303c3.103-1.392 5.819-4.78 6.788-6.303M4.456 11.757h6.332V7.166a3.18 3.18 0 0 0-3.06-2.197C5.31 4.97 4 8.193 4 9.333c0 .916.305 1.998.456 2.424m15.02 0h-7.233V6.521c.242-.786 1.29-2.037 3.495-2.037 2.764 0 4.262 3.453 4.262 4.68 0 .979-.349 2.133-.524 2.593'
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
                        id: 'LOVELY__a'
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
 * @component @name TokenLOVELY
 * @description Web3Icon for TokenLOVELY
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNEODMzN0IiIGQ9Ik0zIDEzLjM2NGg3LjYzNnY3LjA5MUM3LjE0NiAxOC44OSA0LjA5MSAxNS4wNzcgMyAxMy4zNjVtMTYuOTEgMGgtNy42Mzd2Ny4wOTFjMy40OS0xLjU2NSA2LjU0NS01LjM3OCA3LjYzNi03LjA5TTMuNTEyIDExLjcyOGg3LjEyM1Y2LjU2MmEzLjU3IDMuNTcgMCAwIDAtMy40NDEtMi40N0M0LjQ3MyA0LjA5MSAzIDcuNzE4IDMgOWMwIDEuMDMxLjM0NCAyLjI0OC41MTMgMi43MjhtMTYuODk4IDBoLTguMTM4VjUuODM3Yy4yNzMtLjg4NCAxLjQ1LTIuMjkxIDMuOTMzLTIuMjkxQzE5LjMxNCAzLjU0NiAyMSA3LjQzIDIxIDguODFjMCAxLjEwMS0uMzkzIDIuNC0uNTg5IDIuOTE4Ii8+Cjwvc3ZnPgo=) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0zIDEzLjM2NGg3LjYzNnY3LjA5MUM3LjE0NiAxOC44OSA0LjA5MSAxNS4wNzcgMyAxMy4zNjVtMTYuOTEgMGgtNy42Mzd2Ny4wOTFjMy40OS0xLjU2NSA2LjU0NS01LjM3OCA3LjYzNi03LjA5TTMuNTEyIDExLjcyOGg3LjEyM1Y2LjU2MmEzLjU3IDMuNTcgMCAwIDAtMy40NDEtMi40N0M0LjQ3MyA0LjA5MSAzIDcuNzE4IDMgOWMwIDEuMDMxLjM0NCAyLjI0OC41MTMgMi43MjhtMTYuODk4IDBoLTguMTM4VjUuODM3Yy4yNzMtLjg4NCAxLjQ1LTIuMjkxIDMuOTMzLTIuMjkxQzE5LjMxNCAzLjU0NiAyMSA3LjQzIDIxIDguODFjMCAxLjEwMS0uMzkzIDIuNC0uNTg5IDIuOTE4Ii8+Cjwvc3ZnPgo=) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNMT1ZFTFlfX2EpIj4KICAgICAgICA8cGF0aCBmaWxsPSIjRDgzMzdCIiBkPSJNMjQgMEgwdjI0aDI0eiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik00IDEzLjIxMmg2Ljc4OHY2LjMwM0M3LjY4NSAxOC4xMjMgNC45NyAxNC43MzUgNCAxMy4yMTJtMTUuMDMgMGgtNi43ODh2Ni4zMDNjMy4xMDMtMS4zOTIgNS44MTktNC43OCA2Ljc4OC02LjMwM000LjQ1NiAxMS43NTdoNi4zMzJWNy4xNjZhMy4xOCAzLjE4IDAgMCAwLTMuMDYtMi4xOTdDNS4zMSA0Ljk3IDQgOC4xOTMgNCA5LjMzM2MwIC45MTYuMzA1IDEuOTk4LjQ1NiAyLjQyNG0xNS4wMiAwaC03LjIzM1Y2LjUyMWMuMjQyLS43ODYgMS4yOS0yLjAzNyAzLjQ5NS0yLjAzNyAyLjc2NCAwIDQuMjYyIDMuNDUzIDQuMjYyIDQuNjggMCAuOTc5LS4zNDkgMi4xMzMtLjUyNCAyLjU5MyIvPgogICAgPC9nPgogICAgPGRlZnM+CiAgICAgICAgPGNsaXBQYXRoIGlkPSJMT1ZFTFlfX2EiPgogICAgICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMCAwaDI0djI0SDB6Ii8+CiAgICAgICAgPC9jbGlwUGF0aD4KICAgIDwvZGVmcz4KPC9zdmc+Cg==)
 * @see https://web3icons.io/tokens/LOVELY
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenLOVELY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenLOVELY', __iconNode);
;
}),
]);

//# sourceMappingURL=1qqr_%40web3icons_react_dist_16wplnl._.js.map