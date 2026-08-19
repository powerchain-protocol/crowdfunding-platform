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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenCHR.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenCHR
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-client] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#FFB0C2',
                d: 'M15.27 15.5c-.6 1.16-1.8 2-3.17 2-2.15 0-3.615-1.51-3.6-3.73S9.93 10 12.1 10a3.63 3.63 0 0 1 3.17 2H19c-.75-3.185-3.55-5.5-6.9-5.5C8.18 6.5 5 9.75 5 13.75S8.18 21 12.1 21c3.34 0 6.14-2.33 6.9-5.5z'
            }
        ],
        [
            'path',
            {
                fill: '#CC91F0',
                d: 'M17.65 9.24A3.66 3.66 0 0 0 19 6.48 3.49 3.49 0 0 0 15.5 3 3.51 3.51 0 0 0 12 6.5h.2c2.23 0 4.165 1.1 5.45 2.74'
            }
        ],
        [
            'path',
            {
                fill: '#CB65B7',
                d: 'M15.505 9.955c.84 0 1.545-.235 2.145-.72A6.87 6.87 0 0 0 12.2 6.5H12a3.48 3.48 0 0 0 3.5 3.455z'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M15.27 15.5c-.6 1.16-1.8 2-3.17 2-2.15 0-3.615-1.51-3.6-3.73S9.93 10 12.1 10a3.63 3.63 0 0 1 3.17 2H19c-.75-3.185-3.55-5.5-6.9-5.5C8.18 6.5 5 9.75 5 13.75S8.18 21 12.1 21c3.34 0 6.14-2.33 6.9-5.5z'
            }
        ],
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M17.65 9.24A3.66 3.66 0 0 0 19 6.48 3.49 3.49 0 0 0 15.5 3 3.51 3.51 0 0 0 12 6.5h.2c2.23 0 4.165 1.1 5.45 2.74'
            }
        ],
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M15.505 9.955c.84 0 1.545-.235 2.145-.72A6.87 6.87 0 0 0 12.2 6.5H12a3.48 3.48 0 0 0 3.5 3.455z'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#CHR__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#FFB0C2',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M14.906 15.111c-.533 1.031-1.6 1.778-2.818 1.778-1.91 0-3.213-1.342-3.2-3.316.014-1.973 1.272-3.35 3.2-3.35A3.23 3.23 0 0 1 14.907 12h3.316c-.667-2.831-3.156-4.889-6.134-4.889-3.484 0-6.31 2.889-6.31 6.445 0 3.555 2.826 6.444 6.31 6.444 2.97 0 5.458-2.071 6.134-4.889z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M17.022 9.547a3.25 3.25 0 0 0 1.2-2.454A3.1 3.1 0 0 0 15.112 4 3.12 3.12 0 0 0 12 7.111h.178c1.982 0 3.702.978 4.844 2.436'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M15.116 10.182c.746 0 1.373-.209 1.906-.64a6.1 6.1 0 0 0-4.844-2.43H12a3.094 3.094 0 0 0 3.111 3.07z'
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
                        id: 'CHR__a'
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
 * @component @name TokenCHR
 * @description Web3Icon for TokenCHR
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNGRkIwQzIiIGQ9Ik0xNS4yNyAxNS41Yy0uNiAxLjE2LTEuOCAyLTMuMTcgMi0yLjE1IDAtMy42MTUtMS41MS0zLjYtMy43M1M5LjkzIDEwIDEyLjEgMTBhMy42MyAzLjYzIDAgMCAxIDMuMTcgMkgxOWMtLjc1LTMuMTg1LTMuNTUtNS41LTYuOS01LjVDOC4xOCA2LjUgNSA5Ljc1IDUgMTMuNzVTOC4xOCAyMSAxMi4xIDIxYzMuMzQgMCA2LjE0LTIuMzMgNi45LTUuNXoiLz4KICAgIDxwYXRoIGZpbGw9IiNDQzkxRjAiIGQ9Ik0xNy42NSA5LjI0QTMuNjYgMy42NiAwIDAgMCAxOSA2LjQ4IDMuNDkgMy40OSAwIDAgMCAxNS41IDMgMy41MSAzLjUxIDAgMCAwIDEyIDYuNWguMmMyLjIzIDAgNC4xNjUgMS4xIDUuNDUgMi43NCIvPgogICAgPHBhdGggZmlsbD0iI0NCNjVCNyIgZD0iTTE1LjUwNSA5Ljk1NWMuODQgMCAxLjU0NS0uMjM1IDIuMTQ1LS43MkE2Ljg3IDYuODcgMCAwIDAgMTIuMiA2LjVIMTJhMy40OCAzLjQ4IDAgMCAwIDMuNSAzLjQ1NXoiLz4KPC9zdmc+Cg==) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xNS4yNyAxNS41Yy0uNiAxLjE2LTEuOCAyLTMuMTcgMi0yLjE1IDAtMy42MTUtMS41MS0zLjYtMy43M1M5LjkzIDEwIDEyLjEgMTBhMy42MyAzLjYzIDAgMCAxIDMuMTcgMkgxOWMtLjc1LTMuMTg1LTMuNTUtNS41LTYuOS01LjVDOC4xOCA2LjUgNSA5Ljc1IDUgMTMuNzVTOC4xOCAyMSAxMi4xIDIxYzMuMzQgMCA2LjE0LTIuMzMgNi45LTUuNXoiLz4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xNy42NSA5LjI0QTMuNjYgMy42NiAwIDAgMCAxOSA2LjQ4IDMuNDkgMy40OSAwIDAgMCAxNS41IDMgMy41MSAzLjUxIDAgMCAwIDEyIDYuNWguMmMyLjIzIDAgNC4xNjUgMS4xIDUuNDUgMi43NCIvPgogICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTE1LjUwNSA5Ljk1NWMuODQgMCAxLjU0NS0uMjM1IDIuMTQ1LS43MkE2Ljg3IDYuODcgMCAwIDAgMTIuMiA2LjVIMTJhMy40OCAzLjQ4IDAgMCAwIDMuNSAzLjQ1NXoiLz4KPC9zdmc+Cg==) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNDSFJfX2EpIj4KICAgICAgICA8cGF0aCBmaWxsPSIjRkZCMEMyIiBkPSJNMjQgMEgwdjI0aDI0eiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xNC45MDYgMTUuMTExYy0uNTMzIDEuMDMxLTEuNiAxLjc3OC0yLjgxOCAxLjc3OC0xLjkxIDAtMy4yMTMtMS4zNDItMy4yLTMuMzE2LjAxNC0xLjk3MyAxLjI3Mi0zLjM1IDMuMi0zLjM1QTMuMjMgMy4yMyAwIDAgMSAxNC45MDcgMTJoMy4zMTZjLS42NjctMi44MzEtMy4xNTYtNC44ODktNi4xMzQtNC44ODktMy40ODQgMC02LjMxIDIuODg5LTYuMzEgNi40NDUgMCAzLjU1NSAyLjgyNiA2LjQ0NCA2LjMxIDYuNDQ0IDIuOTcgMCA1LjQ1OC0yLjA3MSA2LjEzNC00Ljg4OXoiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTcuMDIyIDkuNTQ3YTMuMjUgMy4yNSAwIDAgMCAxLjItMi40NTRBMy4xIDMuMSAwIDAgMCAxNS4xMTIgNCAzLjEyIDMuMTIgMCAwIDAgMTIgNy4xMTFoLjE3OGMxLjk4MiAwIDMuNzAyLjk3OCA0Ljg0NCAyLjQzNiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xNS4xMTYgMTAuMTgyYy43NDYgMCAxLjM3My0uMjA5IDEuOTA2LS42NGE2LjEgNi4xIDAgMCAwLTQuODQ0LTIuNDNIMTJhMy4wOTQgMy4wOTQgMCAwIDAgMy4xMTEgMy4wN3oiLz4KICAgIDwvZz4KICAgIDxkZWZzPgogICAgICAgIDxjbGlwUGF0aCBpZD0iQ0hSX19hIj4KICAgICAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTAgMGgyNHYyNEgweiIvPgogICAgICAgIDwvY2xpcFBhdGg+CiAgICA8L2RlZnM+Cjwvc3ZnPgo=)
 * @see https://web3icons.io/tokens/CHR
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenCHR = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenCHR', __iconNode);
;
}),
]);

//# sourceMappingURL=1qqr_%40web3icons_react_dist_04ryeeu._.js.map