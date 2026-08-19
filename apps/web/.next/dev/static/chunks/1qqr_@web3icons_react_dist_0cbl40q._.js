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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenBAT.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenBAT
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-client] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#FF4724',
                d: 'M12 4.2a.41.41 0 0 0-.358.207L3.056 19.184a.41.41 0 0 0 0 .414l5.24-2.8 3.705-6.6z'
            }
        ],
        [
            'path',
            {
                fill: '#FF4724',
                d: 'M20.943 19.184 12.358 4.406A.42.42 0 0 0 12 4.2l.001 6 3.694 6.611 5.25 2.788a.41.41 0 0 0-.001-.415'
            }
        ],
        [
            'path',
            {
                fill: '#FF4724',
                d: 'M20.943 19.608 15.7 16.8H8.3l-5.245 2.808a.4.4 0 0 0 .152.14.44.44 0 0 0 .207.052h17.17a.44.44 0 0 0 .208-.052.4.4 0 0 0 .152-.14'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M12 4.2a.41.41 0 0 0-.358.207L3.056 19.184a.41.41 0 0 0 0 .414l5.24-2.8 3.705-6.6z'
            }
        ],
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M20.943 19.184 12.358 4.406A.42.42 0 0 0 12 4.2l.001 6 3.694 6.611 5.25 2.788a.41.41 0 0 0-.001-.415'
            }
        ],
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M20.943 19.608 15.7 16.8H8.3l-5.245 2.808a.4.4 0 0 0 .152.14.44.44 0 0 0 .207.052h17.17a.44.44 0 0 0 .208-.052.4.4 0 0 0 .152-.14'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#BAT__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#FF4724',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M12 5.067a.37.37 0 0 0-.318.184L4.05 18.386a.37.37 0 0 0 0 .368l4.658-2.488 3.294-5.868z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M19.95 18.386 12.317 5.25A.37.37 0 0 0 12 5.067v5.332l3.284 5.878 4.666 2.478a.37.37 0 0 0 0-.37'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'm19.95 18.763-4.662-2.496H8.711l-4.663 2.496a.36.36 0 0 0 .135.125q.087.045.184.045H19.63a.4.4 0 0 0 .185-.045.36.36 0 0 0 .136-.125'
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
                        id: 'BAT__a'
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
 * @component @name TokenBAT
 * @description Web3Icon for TokenBAT
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNGRjQ3MjQiIGQ9Ik0xMiA0LjJhLjQxLjQxIDAgMCAwLS4zNTguMjA3TDMuMDU2IDE5LjE4NGEuNDEuNDEgMCAwIDAgMCAuNDE0bDUuMjQtMi44IDMuNzA1LTYuNnoiLz4KICAgIDxwYXRoIGZpbGw9IiNGRjQ3MjQiIGQ9Ik0yMC45NDMgMTkuMTg0IDEyLjM1OCA0LjQwNkEuNDIuNDIgMCAwIDAgMTIgNC4ybC4wMDEgNiAzLjY5NCA2LjYxMSA1LjI1IDIuNzg4YS40MS40MSAwIDAgMC0uMDAxLS40MTUiLz4KICAgIDxwYXRoIGZpbGw9IiNGRjQ3MjQiIGQ9Ik0yMC45NDMgMTkuNjA4IDE1LjcgMTYuOEg4LjNsLTUuMjQ1IDIuODA4YS40LjQgMCAwIDAgLjE1Mi4xNC40NC40NCAwIDAgMCAuMjA3LjA1MmgxNy4xN2EuNDQuNDQgMCAwIDAgLjIwOC0uMDUyLjQuNCAwIDAgMCAuMTUyLS4xNCIvPgo8L3N2Zz4K) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xMiA0LjJhLjQxLjQxIDAgMCAwLS4zNTguMjA3TDMuMDU2IDE5LjE4NGEuNDEuNDEgMCAwIDAgMCAuNDE0bDUuMjQtMi44IDMuNzA1LTYuNnoiLz4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0yMC45NDMgMTkuMTg0IDEyLjM1OCA0LjQwNkEuNDIuNDIgMCAwIDAgMTIgNC4ybC4wMDEgNiAzLjY5NCA2LjYxMSA1LjI1IDIuNzg4YS40MS40MSAwIDAgMC0uMDAxLS40MTUiLz4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0yMC45NDMgMTkuNjA4IDE1LjcgMTYuOEg4LjNsLTUuMjQ1IDIuODA4YS40LjQgMCAwIDAgLjE1Mi4xNC40NC40NCAwIDAgMCAuMjA3LjA1MmgxNy4xN2EuNDQuNDQgMCAwIDAgLjIwOC0uMDUyLjQuNCAwIDAgMCAuMTUyLS4xNCIvPgo8L3N2Zz4K) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNCQVRfX2EpIj4KICAgICAgICA8cGF0aCBmaWxsPSIjRkY0NzI0IiBkPSJNMjQgMEgwdjI0aDI0eiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xMiA1LjA2N2EuMzcuMzcgMCAwIDAtLjMxOC4xODRMNC4wNSAxOC4zODZhLjM3LjM3IDAgMCAwIDAgLjM2OGw0LjY1OC0yLjQ4OCAzLjI5NC01Ljg2OHoiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTkuOTUgMTguMzg2IDEyLjMxNyA1LjI1QS4zNy4zNyAwIDAgMCAxMiA1LjA2N3Y1LjMzMmwzLjI4NCA1Ljg3OCA0LjY2NiAyLjQ3OGEuMzcuMzcgMCAwIDAgMC0uMzciLz4KICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJtMTkuOTUgMTguNzYzLTQuNjYyLTIuNDk2SDguNzExbC00LjY2MyAyLjQ5NmEuMzYuMzYgMCAwIDAgLjEzNS4xMjVxLjA4Ny4wNDUuMTg0LjA0NUgxOS42M2EuNC40IDAgMCAwIC4xODUtLjA0NS4zNi4zNiAwIDAgMCAuMTM2LS4xMjUiLz4KICAgIDwvZz4KICAgIDxkZWZzPgogICAgICAgIDxjbGlwUGF0aCBpZD0iQkFUX19hIj4KICAgICAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTAgMGgyNHYyNEgweiIvPgogICAgICAgIDwvY2xpcFBhdGg+CiAgICA8L2RlZnM+Cjwvc3ZnPgo=)
 * @see https://web3icons.io/tokens/BAT
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenBAT = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenBAT', __iconNode);
;
}),
]);

//# sourceMappingURL=1qqr_%40web3icons_react_dist_0cbl40q._.js.map