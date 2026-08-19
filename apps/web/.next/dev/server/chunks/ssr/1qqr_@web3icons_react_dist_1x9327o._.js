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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenMUSIC.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenMUSIC
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-ssr] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#FBBF02',
                d: 'M13.49 3.13A9 9 0 0 0 12 3.001a9 9 0 0 0-7.39 14.135c.618-.905 2.047-1.535 3.7-1.535 1.137 0 2.166.298 2.897.782zm4.782 2.425c1.558 3.436.191 5.276.191 5.276-1.052-3.173-4.106-3.64-4.106-3.64s-2.02 10.829-2.02 10.97c0 1.169-1.242 2.159-2.935 2.457A9.004 9.004 0 0 0 21 12a8.96 8.96 0 0 0-2.728-6.445'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M13.49 3.13A9 9 0 0 0 12 3.001a9 9 0 0 0-7.39 14.135c.618-.905 2.047-1.535 3.7-1.535 1.137 0 2.166.298 2.897.782zm4.782 2.425c1.558 3.436.191 5.276.191 5.276-1.052-3.173-4.106-3.64-4.106-3.64s-2.02 10.829-2.02 10.97c0 1.169-1.242 2.159-2.935 2.457A9.004 9.004 0 0 0 21 12a8.96 8.96 0 0 0-2.728-6.445'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#MUSIC__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#FBBF02',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M13.325 4.116A8 8 0 0 0 12 4.001a8 8 0 0 0-6.57 12.565c.55-.805 1.82-1.365 3.29-1.365 1.01 0 1.925.265 2.575.695zm4.25 2.155c1.385 3.055.17 4.69.17 4.69-.935-2.82-3.65-3.235-3.65-3.235S12.3 17.35 12.3 17.476c0 1.04-1.105 1.92-2.61 2.184A8.003 8.003 0 0 0 20 12c0-2.25-.93-4.274-2.425-5.73'
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
                        id: 'MUSIC__a'
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
 * @component @name TokenMUSIC
 * @description Web3Icon for TokenMUSIC
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNGQkJGMDIiIGQ9Ik0xMy40OSAzLjEzQTkgOSAwIDAgMCAxMiAzLjAwMWE5IDkgMCAwIDAtNy4zOSAxNC4xMzVjLjYxOC0uOTA1IDIuMDQ3LTEuNTM1IDMuNy0xLjUzNSAxLjEzNyAwIDIuMTY2LjI5OCAyLjg5Ny43ODJ6bTQuNzgyIDIuNDI1YzEuNTU4IDMuNDM2LjE5MSA1LjI3Ni4xOTEgNS4yNzYtMS4wNTItMy4xNzMtNC4xMDYtMy42NC00LjEwNi0zLjY0cy0yLjAyIDEwLjgyOS0yLjAyIDEwLjk3YzAgMS4xNjktMS4yNDIgMi4xNTktMi45MzUgMi40NTdBOS4wMDQgOS4wMDQgMCAwIDAgMjEgMTJhOC45NiA4Ljk2IDAgMCAwLTIuNzI4LTYuNDQ1Ii8+Cjwvc3ZnPgo=) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xMy40OSAzLjEzQTkgOSAwIDAgMCAxMiAzLjAwMWE5IDkgMCAwIDAtNy4zOSAxNC4xMzVjLjYxOC0uOTA1IDIuMDQ3LTEuNTM1IDMuNy0xLjUzNSAxLjEzNyAwIDIuMTY2LjI5OCAyLjg5Ny43ODJ6bTQuNzgyIDIuNDI1YzEuNTU4IDMuNDM2LjE5MSA1LjI3Ni4xOTEgNS4yNzYtMS4wNTItMy4xNzMtNC4xMDYtMy42NC00LjEwNi0zLjY0cy0yLjAyIDEwLjgyOS0yLjAyIDEwLjk3YzAgMS4xNjktMS4yNDIgMi4xNTktMi45MzUgMi40NTdBOS4wMDQgOS4wMDQgMCAwIDAgMjEgMTJhOC45NiA4Ljk2IDAgMCAwLTIuNzI4LTYuNDQ1Ii8+Cjwvc3ZnPgo=) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNNVVNJQ19fYSkiPgogICAgICAgIDxwYXRoIGZpbGw9IiNGQkJGMDIiIGQ9Ik0yNCAwSDB2MjRoMjR6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTEzLjMyNSA0LjExNkE4IDggMCAwIDAgMTIgNC4wMDFhOCA4IDAgMCAwLTYuNTcgMTIuNTY1Yy41NS0uODA1IDEuODItMS4zNjUgMy4yOS0xLjM2NSAxLjAxIDAgMS45MjUuMjY1IDIuNTc1LjY5NXptNC4yNSAyLjE1NWMxLjM4NSAzLjA1NS4xNyA0LjY5LjE3IDQuNjktLjkzNS0yLjgyLTMuNjUtMy4yMzUtMy42NS0zLjIzNVMxMi4zIDE3LjM1IDEyLjMgMTcuNDc2YzAgMS4wNC0xLjEwNSAxLjkyLTIuNjEgMi4xODRBOC4wMDMgOC4wMDMgMCAwIDAgMjAgMTJjMC0yLjI1LS45My00LjI3NC0yLjQyNS01LjczIi8+CiAgICA8L2c+CiAgICA8ZGVmcz4KICAgICAgICA8Y2xpcFBhdGggaWQ9Ik1VU0lDX19hIj4KICAgICAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTAgMGgyNHYyNEgweiIvPgogICAgICAgIDwvY2xpcFBhdGg+CiAgICA8L2RlZnM+Cjwvc3ZnPgo=)
 * @see https://web3icons.io/tokens/MUSIC
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenMUSIC = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenMUSIC', __iconNode);
;
}),
];

//# sourceMappingURL=1qqr_%40web3icons_react_dist_1x9327o._.js.map