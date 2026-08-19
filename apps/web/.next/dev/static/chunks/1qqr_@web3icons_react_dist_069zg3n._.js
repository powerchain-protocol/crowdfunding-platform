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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenNEXA.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenNEXA
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-client] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#FFFD9D',
                d: 'm12 15.44 9-9.529-9 14.824z'
            }
        ],
        [
            'path',
            {
                fill: '#B6761C',
                d: 'M12 15.44 3 5.911l9 14.824z'
            }
        ],
        [
            'path',
            {
                fill: '#FFE144',
                d: 'M21 5.911H3l9 9.53z'
            }
        ],
        [
            'path',
            {
                fill: '#B6761C',
                d: 'M15.705 8.03H8.293l3.706 3.705z'
            }
        ],
        [
            'path',
            {
                fill: '#FFFD9D',
                d: 'm12 7.279 4.235-4.013L12 10.148z'
            }
        ],
        [
            'path',
            {
                fill: '#B6761C',
                d: 'M11.999 7.279 7.764 3.266l4.235 6.882z'
            }
        ],
        [
            'path',
            {
                fill: '#FFE144',
                d: 'M16.234 3.266h-8.47l4.235 4.013z'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#NEXA__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#FFFD9D',
                        d: 'm12 15.058 8-8.47-8 13.176z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#B6761C',
                        d: 'm12 15.058-8-8.47 8 13.176z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#FFE144',
                        d: 'M20 6.587H4l8 8.47z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#B6761C',
                        d: 'M15.293 8.47H8.705L12 11.764z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#FFFD9D',
                        d: 'm12 7.803 3.765-3.567L12 10.354z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#B6761C',
                        d: 'M12 7.803 8.233 4.236 12 10.354z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#FFE144',
                        d: 'M15.764 4.236h-7.53L12 7.803z'
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
                        id: 'NEXA__a'
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
 * @component @name TokenNEXA
 * @description Web3Icon for TokenNEXA
 *
 * @preview (branded, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNGRkZEOUQiIGQ9Im0xMiAxNS40NCA5LTkuNTI5LTkgMTQuODI0eiIvPgogICAgPHBhdGggZmlsbD0iI0I2NzYxQyIgZD0iTTEyIDE1LjQ0IDMgNS45MTFsOSAxNC44MjR6Ii8+CiAgICA8cGF0aCBmaWxsPSIjRkZFMTQ0IiBkPSJNMjEgNS45MTFIM2w5IDkuNTN6Ii8+CiAgICA8cGF0aCBmaWxsPSIjQjY3NjFDIiBkPSJNMTUuNzA1IDguMDNIOC4yOTNsMy43MDYgMy43MDV6Ii8+CiAgICA8cGF0aCBmaWxsPSIjRkZGRDlEIiBkPSJtMTIgNy4yNzkgNC4yMzUtNC4wMTNMMTIgMTAuMTQ4eiIvPgogICAgPHBhdGggZmlsbD0iI0I2NzYxQyIgZD0iTTExLjk5OSA3LjI3OSA3Ljc2NCAzLjI2Nmw0LjIzNSA2Ljg4MnoiLz4KICAgIDxwYXRoIGZpbGw9IiNGRkUxNDQiIGQ9Ik0xNi4yMzQgMy4yNjZoLTguNDdsNC4yMzUgNC4wMTN6Ii8+Cjwvc3ZnPgo=) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNORVhBX19hKSI+CiAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTI0IDBIMHYyNGgyNHoiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjRkZGRDlEIiBkPSJtMTIgMTUuMDU4IDgtOC40Ny04IDEzLjE3NnoiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjQjY3NjFDIiBkPSJtMTIgMTUuMDU4LTgtOC40NyA4IDEzLjE3NnoiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjRkZFMTQ0IiBkPSJNMjAgNi41ODdINGw4IDguNDd6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0iI0I2NzYxQyIgZD0iTTE1LjI5MyA4LjQ3SDguNzA1TDEyIDExLjc2NHoiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjRkZGRDlEIiBkPSJtMTIgNy44MDMgMy43NjUtMy41NjdMMTIgMTAuMzU0eiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNCNjc2MUMiIGQ9Ik0xMiA3LjgwMyA4LjIzMyA0LjIzNiAxMiAxMC4zNTR6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0iI0ZGRTE0NCIgZD0iTTE1Ljc2NCA0LjIzNmgtNy41M0wxMiA3LjgwM3oiLz4KICAgIDwvZz4KICAgIDxkZWZzPgogICAgICAgIDxjbGlwUGF0aCBpZD0iTkVYQV9fYSI+CiAgICAgICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0wIDBoMjR2MjRIMHoiLz4KICAgICAgICA8L2NsaXBQYXRoPgogICAgPC9kZWZzPgo8L3N2Zz4K)
 * @see https://web3icons.io/tokens/NEXA
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenNEXA = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenNEXA', __iconNode);
;
}),
]);

//# sourceMappingURL=1qqr_%40web3icons_react_dist_069zg3n._.js.map