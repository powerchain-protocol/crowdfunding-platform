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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenCKP.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenCKP
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-client] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#1FA4FF',
                d: 'm12.085 3 7.592 4.405-3.463 4.537 3.288 4.754L12.085 21l-7.761-4.5v-9zm.71 14.824a5.8 5.8 0 0 0 3.652-1.287l-.98-1.588a4.14 4.14 0 0 1-2.408.757c-2.192 0-3.97-1.657-3.97-3.706s1.778-3.706 3.97-3.706c.847 0 1.63.249 2.277.667l.952-1.62a5.825 5.825 0 1 0-3.494 10.482'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'm12.085 3 7.592 4.405-3.463 4.537 3.288 4.754L12.085 21l-7.761-4.5v-9zm.71 14.824a5.8 5.8 0 0 0 3.652-1.287l-.98-1.588a4.14 4.14 0 0 1-2.408.757c-2.192 0-3.97-1.657-3.97-3.706s1.778-3.706 3.97-3.706c.847 0 1.63.249 2.277.667l.952-1.62a5.823 5.823 0 1 0-3.494 10.482'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#CKP__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#1FA4FF',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'm12.075 4 6.748 3.915-3.077 4.033 2.922 4.226L12.075 20l-6.899-4V8zm.63 13.177a5.16 5.16 0 0 0 3.248-1.144l-.87-1.412a3.7 3.7 0 0 1-2.142.673c-1.948 0-3.53-1.473-3.53-3.294s1.582-3.294 3.53-3.294c.753 0 1.45.221 2.023.593l.848-1.44a5.176 5.176 0 1 0-3.106 9.318'
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
                        id: 'CKP__a'
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
 * @component @name TokenCKP
 * @description Web3Icon for TokenCKP
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiMxRkE0RkYiIGQ9Im0xMi4wODUgMyA3LjU5MiA0LjQwNS0zLjQ2MyA0LjUzNyAzLjI4OCA0Ljc1NEwxMi4wODUgMjFsLTcuNzYxLTQuNXYtOXptLjcxIDE0LjgyNGE1LjggNS44IDAgMCAwIDMuNjUyLTEuMjg3bC0uOTgtMS41ODhhNC4xNCA0LjE0IDAgMCAxLTIuNDA4Ljc1N2MtMi4xOTIgMC0zLjk3LTEuNjU3LTMuOTctMy43MDZzMS43NzgtMy43MDYgMy45Ny0zLjcwNmMuODQ3IDAgMS42My4yNDkgMi4yNzcuNjY3bC45NTItMS42MmE1LjgyNSA1LjgyNSAwIDEgMC0zLjQ5NCAxMC40ODIiLz4KPC9zdmc+Cg==) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Im0xMi4wODUgMyA3LjU5MiA0LjQwNS0zLjQ2MyA0LjUzNyAzLjI4OCA0Ljc1NEwxMi4wODUgMjFsLTcuNzYxLTQuNXYtOXptLjcxIDE0LjgyNGE1LjggNS44IDAgMCAwIDMuNjUyLTEuMjg3bC0uOTgtMS41ODhhNC4xNCA0LjE0IDAgMCAxLTIuNDA4Ljc1N2MtMi4xOTIgMC0zLjk3LTEuNjU3LTMuOTctMy43MDZzMS43NzgtMy43MDYgMy45Ny0zLjcwNmMuODQ3IDAgMS42My4yNDkgMi4yNzcuNjY3bC45NTItMS42MmE1LjgyMyA1LjgyMyAwIDEgMC0zLjQ5NCAxMC40ODIiLz4KPC9zdmc+Cg==) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNDS1BfX2EpIj4KICAgICAgICA8cGF0aCBmaWxsPSIjMUZBNEZGIiBkPSJNMjQgMEgwdjI0aDI0eiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Im0xMi4wNzUgNCA2Ljc0OCAzLjkxNS0zLjA3NyA0LjAzMyAyLjkyMiA0LjIyNkwxMi4wNzUgMjBsLTYuODk5LTRWOHptLjYzIDEzLjE3N2E1LjE2IDUuMTYgMCAwIDAgMy4yNDgtMS4xNDRsLS44Ny0xLjQxMmEzLjcgMy43IDAgMCAxLTIuMTQyLjY3M2MtMS45NDggMC0zLjUzLTEuNDczLTMuNTMtMy4yOTRzMS41ODItMy4yOTQgMy41My0zLjI5NGMuNzUzIDAgMS40NS4yMjEgMi4wMjMuNTkzbC44NDgtMS40NGE1LjE3NiA1LjE3NiAwIDEgMC0zLjEwNiA5LjMxOCIvPgogICAgPC9nPgogICAgPGRlZnM+CiAgICAgICAgPGNsaXBQYXRoIGlkPSJDS1BfX2EiPgogICAgICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMCAwaDI0djI0SDB6Ii8+CiAgICAgICAgPC9jbGlwUGF0aD4KICAgIDwvZGVmcz4KPC9zdmc+Cg==)
 * @see https://web3icons.io/tokens/CKP
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenCKP = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenCKP', __iconNode);
;
}),
]);

//# sourceMappingURL=1qqr_%40web3icons_react_dist_1ycmp_3._.js.map