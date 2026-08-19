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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenPOLA.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenPOLA
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-client] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#1B7EFF',
                d: 'm14.118 20.47-.953-1.587 2.276-4.236L12 8.824h1.77l3.524 5.823z'
            }
        ],
        [
            'path',
            {
                fill: '#0B61CE',
                d: 'M4.853 13.058H3l4.451 7.405 6.667.007-.937-1.588H8.294z'
            }
        ],
        [
            'path',
            {
                fill: '#0D64CE',
                d: 'm9.882 3.53.953 1.588-2.277 4.235L12 15.176h-1.77L6.706 9.353z'
            }
        ],
        [
            'path',
            {
                fill: '#1B7FF6',
                d: 'M19.147 10.941H21l-4.451-7.405-6.667-.007.937 1.589h4.887z'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'm14.118 20.47-.953-1.587 2.276-4.236L12 8.824h1.77l3.524 5.823z'
            }
        ],
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M4.853 13.058H3l4.451 7.405 6.667.007-.937-1.588H8.294zM9.882 3.53l.953 1.588-2.277 4.235L12 15.176h-1.77L6.706 9.353z'
            }
        ],
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M19.147 10.941H21l-4.451-7.405-6.667-.007.937 1.589h4.887z'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#POLA__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#1B7EFF',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'm13.882 19.53-.847-1.412 2.024-3.765L12 9.177h1.573l3.133 5.176z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M5.647 12.94H4l3.957 6.583 5.925.006-.832-1.412H8.706zm4.471-8.47.846 1.412-2.023 3.765L12 14.823h-1.573L7.294 9.647z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M18.353 11.058H20l-3.957-6.582-5.925-.006.833 1.412h4.343z'
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
                        id: 'POLA__a'
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
 * @component @name TokenPOLA
 * @description Web3Icon for TokenPOLA
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiMxQjdFRkYiIGQ9Im0xNC4xMTggMjAuNDctLjk1My0xLjU4NyAyLjI3Ni00LjIzNkwxMiA4LjgyNGgxLjc3bDMuNTI0IDUuODIzeiIvPgogICAgPHBhdGggZmlsbD0iIzBCNjFDRSIgZD0iTTQuODUzIDEzLjA1OEgzbDQuNDUxIDcuNDA1IDYuNjY3LjAwNy0uOTM3LTEuNTg4SDguMjk0eiIvPgogICAgPHBhdGggZmlsbD0iIzBENjRDRSIgZD0ibTkuODgyIDMuNTMuOTUzIDEuNTg4LTIuMjc3IDQuMjM1TDEyIDE1LjE3NmgtMS43N0w2LjcwNiA5LjM1M3oiLz4KICAgIDxwYXRoIGZpbGw9IiMxQjdGRjYiIGQ9Ik0xOS4xNDcgMTAuOTQxSDIxbC00LjQ1MS03LjQwNS02LjY2Ny0uMDA3LjkzNyAxLjU4OWg0Ljg4N3oiLz4KPC9zdmc+Cg==) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Im0xNC4xMTggMjAuNDctLjk1My0xLjU4NyAyLjI3Ni00LjIzNkwxMiA4LjgyNGgxLjc3bDMuNTI0IDUuODIzeiIvPgogICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTQuODUzIDEzLjA1OEgzbDQuNDUxIDcuNDA1IDYuNjY3LjAwNy0uOTM3LTEuNTg4SDguMjk0ek05Ljg4MiAzLjUzbC45NTMgMS41ODgtMi4yNzcgNC4yMzVMMTIgMTUuMTc2aC0xLjc3TDYuNzA2IDkuMzUzeiIvPgogICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTE5LjE0NyAxMC45NDFIMjFsLTQuNDUxLTcuNDA1LTYuNjY3LS4wMDcuOTM3IDEuNTg5aDQuODg3eiIvPgo8L3N2Zz4K) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNQT0xBX19hKSI+CiAgICAgICAgPHBhdGggZmlsbD0iIzFCN0VGRiIgZD0iTTI0IDBIMHYyNGgyNHoiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJtMTMuODgyIDE5LjUzLS44NDctMS40MTIgMi4wMjQtMy43NjVMMTIgOS4xNzdoMS41NzNsMy4xMzMgNS4xNzZ6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTUuNjQ3IDEyLjk0SDRsMy45NTcgNi41ODMgNS45MjUuMDA2LS44MzItMS40MTJIOC43MDZ6bTQuNDcxLTguNDcuODQ2IDEuNDEyLTIuMDIzIDMuNzY1TDEyIDE0LjgyM2gtMS41NzNMNy4yOTQgOS42NDd6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTE4LjM1MyAxMS4wNThIMjBsLTMuOTU3LTYuNTgyLTUuOTI1LS4wMDYuODMzIDEuNDEyaDQuMzQzeiIvPgogICAgPC9nPgogICAgPGRlZnM+CiAgICAgICAgPGNsaXBQYXRoIGlkPSJQT0xBX19hIj4KICAgICAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTAgMGgyNHYyNEgweiIvPgogICAgICAgIDwvY2xpcFBhdGg+CiAgICA8L2RlZnM+Cjwvc3ZnPgo=)
 * @see https://web3icons.io/tokens/POLA
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenPOLA = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenPOLA', __iconNode);
;
}),
]);

//# sourceMappingURL=1qqr_%40web3icons_react_dist_11zs41z._.js.map