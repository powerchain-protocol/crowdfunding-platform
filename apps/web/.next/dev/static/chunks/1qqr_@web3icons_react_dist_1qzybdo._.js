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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenDEGO.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenDEGO
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-client] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#FF5174',
                d: 'M4.125 3h3.938v3.938H4.124z'
            }
        ],
        [
            'path',
            {
                fill: '#787878',
                d: 'm15.938 3 3.937 3.938h-3.937zm0 18 3.937-3.937h-3.937z'
            }
        ],
        [
            'path',
            {
                fill: '#4F4F4F',
                d: 'M8.063 3h7.874v3.938H8.064zM4.124 17.063h11.813V21H4.124z'
            }
        ],
        [
            'path',
            {
                fill: '#FFD766',
                d: 'M4.125 6.938h3.938v4.5H4.124z'
            }
        ],
        [
            'path',
            {
                fill: '#4F4F4F',
                d: 'M15.938 6.938h3.937v10.125h-3.937z'
            }
        ],
        [
            'path',
            {
                fill: '#21D99D',
                d: 'M4.125 10.875h3.938v6.188H4.124z'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M4.125 3h3.938v3.938H4.124zm11.813 0 3.937 3.938h-3.937zm0 18 3.937-3.937h-3.937zM8.063 3h7.874v3.938H8.064zM4.124 17.063h11.813V21H4.124z'
            }
        ],
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M4.125 6.938h3.938v4.5H4.124zm11.813 0h3.937v10.125h-3.937z'
            }
        ],
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M4.125 10.875h3.938v6.188H4.124z'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#DEGO__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#4F4F4F',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M5 4h3.5v3.5H5zm10.5 0L19 7.5h-3.5zm0 16 3.5-3.5h-3.5zm-7-16h7v3.5h-7zM5 16.5h10.5V20H5zm0-9h3.5v4H5zm10.5 0H19v9h-3.5z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M5 11h3.5v5.5H5z'
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
                        id: 'DEGO__a'
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
 * @component @name TokenDEGO
 * @description Web3Icon for TokenDEGO
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNGRjUxNzQiIGQ9Ik00LjEyNSAzaDMuOTM4djMuOTM4SDQuMTI0eiIvPgogICAgPHBhdGggZmlsbD0iIzc4Nzg3OCIgZD0ibTE1LjkzOCAzIDMuOTM3IDMuOTM4aC0zLjkzN3ptMCAxOCAzLjkzNy0zLjkzN2gtMy45Mzd6Ii8+CiAgICA8cGF0aCBmaWxsPSIjNEY0RjRGIiBkPSJNOC4wNjMgM2g3Ljg3NHYzLjkzOEg4LjA2NHpNNC4xMjQgMTcuMDYzaDExLjgxM1YyMUg0LjEyNHoiLz4KICAgIDxwYXRoIGZpbGw9IiNGRkQ3NjYiIGQ9Ik00LjEyNSA2LjkzOGgzLjkzOHY0LjVINC4xMjR6Ii8+CiAgICA8cGF0aCBmaWxsPSIjNEY0RjRGIiBkPSJNMTUuOTM4IDYuOTM4aDMuOTM3djEwLjEyNWgtMy45Mzd6Ii8+CiAgICA8cGF0aCBmaWxsPSIjMjFEOTlEIiBkPSJNNC4xMjUgMTAuODc1aDMuOTM4djYuMTg4SDQuMTI0eiIvPgo8L3N2Zz4K) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik00LjEyNSAzaDMuOTM4djMuOTM4SDQuMTI0em0xMS44MTMgMCAzLjkzNyAzLjkzOGgtMy45Mzd6bTAgMTggMy45MzctMy45MzdoLTMuOTM3ek04LjA2MyAzaDcuODc0djMuOTM4SDguMDY0ek00LjEyNCAxNy4wNjNoMTEuODEzVjIxSDQuMTI0eiIvPgogICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTQuMTI1IDYuOTM4aDMuOTM4djQuNUg0LjEyNHptMTEuODEzIDBoMy45Mzd2MTAuMTI1aC0zLjkzN3oiLz4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik00LjEyNSAxMC44NzVoMy45Mzh2Ni4xODhINC4xMjR6Ii8+Cjwvc3ZnPgo=) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNERUdPX19hKSI+CiAgICAgICAgPHBhdGggZmlsbD0iIzRGNEY0RiIgZD0iTTI0IDBIMHYyNGgyNHoiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNNSA0aDMuNXYzLjVINXptMTAuNSAwTDE5IDcuNWgtMy41em0wIDE2IDMuNS0zLjVoLTMuNXptLTctMTZoN3YzLjVoLTd6TTUgMTYuNWgxMC41VjIwSDV6bTAtOWgzLjV2NEg1em0xMC41IDBIMTl2OWgtMy41eiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik01IDExaDMuNXY1LjVINXoiLz4KICAgIDwvZz4KICAgIDxkZWZzPgogICAgICAgIDxjbGlwUGF0aCBpZD0iREVHT19fYSI+CiAgICAgICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0wIDBoMjR2MjRIMHoiLz4KICAgICAgICA8L2NsaXBQYXRoPgogICAgPC9kZWZzPgo8L3N2Zz4K)
 * @see https://web3icons.io/tokens/DEGO
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenDEGO = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenDEGO', __iconNode);
;
}),
]);

//# sourceMappingURL=1qqr_%40web3icons_react_dist_1qzybdo._.js.map