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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenATLAS.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenATLAS
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-client] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#fff',
                d: 'm12 8.657-3.652 8.264c-.118.263-.185.479-.447.479H5.483c-.344 0-.534-.098-.36-.479l5.894-13.53c.118-.226.196-.391.463-.391h1.044c.262 0 .334.165.463.39l5.893 13.526c.17.386-.025.484-.37.484h-2.412c-.262 0-.334-.216-.447-.479l-3.652-8.27z'
            }
        ],
        [
            'path',
            {
                fill: '#3FF',
                d: 'm12.005 21-2.412-4.63h4.741z'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'm12 8.657-3.652 8.264c-.118.263-.185.479-.447.479H5.483c-.344 0-.534-.098-.36-.479l5.894-13.53c.118-.226.196-.391.463-.391h1.044c.262 0 .334.165.463.39l5.893 13.526c.17.386-.025.484-.37.484h-2.412c-.262 0-.334-.216-.447-.479l-3.652-8.27z'
            }
        ],
        [
            'path',
            {
                fill: 'currentColor',
                d: 'm12.005 21-2.412-4.63h4.741z'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#ATLAS__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#3FF',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#000',
                        d: 'm12 9.028-3.246 7.347c-.105.233-.165.425-.398.425H6.207c-.306 0-.475-.087-.32-.425l5.24-12.028c.104-.2.173-.347.41-.347h.929c.233 0 .297.146.411.347l5.239 12.023c.15.343-.023.43-.33.43h-2.143c-.233 0-.297-.192-.398-.425L12 9.024z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#000',
                        d: 'M12.004 20 9.86 15.886h4.215z'
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
                        id: 'ATLAS__a'
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
 * @component @name TokenATLAS
 * @description Web3Icon for TokenATLAS
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Im0xMiA4LjY1Ny0zLjY1MiA4LjI2NGMtLjExOC4yNjMtLjE4NS40NzktLjQ0Ny40NzlINS40ODNjLS4zNDQgMC0uNTM0LS4wOTgtLjM2LS40NzlsNS44OTQtMTMuNTNjLjExOC0uMjI2LjE5Ni0uMzkxLjQ2My0uMzkxaDEuMDQ0Yy4yNjIgMCAuMzM0LjE2NS40NjMuMzlsNS44OTMgMTMuNTI2Yy4xNy4zODYtLjAyNS40ODQtLjM3LjQ4NGgtMi40MTJjLS4yNjIgMC0uMzM0LS4yMTYtLjQ0Ny0uNDc5bC0zLjY1Mi04LjI3eiIvPgogICAgPHBhdGggZmlsbD0iIzNGRiIgZD0ibTEyLjAwNSAyMS0yLjQxMi00LjYzaDQuNzQxeiIvPgo8L3N2Zz4K) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Im0xMiA4LjY1Ny0zLjY1MiA4LjI2NGMtLjExOC4yNjMtLjE4NS40NzktLjQ0Ny40NzlINS40ODNjLS4zNDQgMC0uNTM0LS4wOTgtLjM2LS40NzlsNS44OTQtMTMuNTNjLjExOC0uMjI2LjE5Ni0uMzkxLjQ2My0uMzkxaDEuMDQ0Yy4yNjIgMCAuMzM0LjE2NS40NjMuMzlsNS44OTMgMTMuNTI2Yy4xNy4zODYtLjAyNS40ODQtLjM3LjQ4NGgtMi40MTJjLS4yNjIgMC0uMzM0LS4yMTYtLjQ0Ny0uNDc5bC0zLjY1Mi04LjI3eiIvPgogICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0ibTEyLjAwNSAyMS0yLjQxMi00LjYzaDQuNzQxeiIvPgo8L3N2Zz4K) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNBVExBU19fYSkiPgogICAgICAgIDxwYXRoIGZpbGw9IiMzRkYiIGQ9Ik0yNCAwSDB2MjRoMjR6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0iIzAwMCIgZD0ibTEyIDkuMDI4LTMuMjQ2IDcuMzQ3Yy0uMTA1LjIzMy0uMTY1LjQyNS0uMzk4LjQyNUg2LjIwN2MtLjMwNiAwLS40NzUtLjA4Ny0uMzItLjQyNWw1LjI0LTEyLjAyOGMuMTA0LS4yLjE3My0uMzQ3LjQxLS4zNDdoLjkyOWMuMjMzIDAgLjI5Ny4xNDYuNDExLjM0N2w1LjIzOSAxMi4wMjNjLjE1LjM0My0uMDIzLjQzLS4zMy40M2gtMi4xNDNjLS4yMzMgMC0uMjk3LS4xOTItLjM5OC0uNDI1TDEyIDkuMDI0eiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiMwMDAiIGQ9Ik0xMi4wMDQgMjAgOS44NiAxNS44ODZoNC4yMTV6Ii8+CiAgICA8L2c+CiAgICA8ZGVmcz4KICAgICAgICA8Y2xpcFBhdGggaWQ9IkFUTEFTX19hIj4KICAgICAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTAgMGgyNHYyNEgweiIvPgogICAgICAgIDwvY2xpcFBhdGg+CiAgICA8L2RlZnM+Cjwvc3ZnPgo=)
 * @see https://web3icons.io/tokens/ATLAS
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenATLAS = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenATLAS', __iconNode);
;
}),
]);

//# sourceMappingURL=1qqr_%40web3icons_react_dist_0od1vu7._.js.map