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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenNMX.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenNMX
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-client] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#00A0FF',
                d: 'M3.071 13.119a9.007 9.007 0 0 1 17.282-4.504h-.99a2.98 2.98 0 0 0-2.095.845l-4.137 4.222V9.066c0-.901-.732-1.565-1.503-1.576-.366 0-.743.123-1.053.416l-5.612 4.982a.83.83 0 0 1-.574.23z'
            }
        ],
        [
            'path',
            {
                fill: '#80CFFF',
                d: 'M12.005 21a9.006 9.006 0 0 0 8.922-10.132h-1.565a.82.82 0 0 0-.585.242l-5.348 4.953a1.498 1.498 0 0 1-2.55-1.086V10.54l-4.442 4.177c-.557.523-1.294.647-2.054.647H3.65C4.99 18.675 8.289 21 12.005 21'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M3.071 13.119a9.007 9.007 0 0 1 17.282-4.504h-.99a2.98 2.98 0 0 0-2.095.845l-4.137 4.221V9.067c0-.901-.732-1.565-1.503-1.577-.366 0-.743.124-1.053.417l-5.612 4.982a.83.83 0 0 1-.574.23z'
            }
        ],
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M12.005 21a9.006 9.006 0 0 0 8.922-10.132h-1.565a.82.82 0 0 0-.585.242l-5.348 4.953a1.498 1.498 0 0 1-2.55-1.086V10.54l-4.442 4.177c-.557.523-1.294.647-2.054.647H3.65C4.99 18.675 8.289 21 12.005 21'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#NMX__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#00A0FF',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M4.064 12.994a8.006 8.006 0 0 1 15.361-4.003h-.88a2.65 2.65 0 0 0-1.862.75l-3.678 3.754V9.392c0-.8-.65-1.391-1.336-1.401-.325 0-.66.11-.935.37l-4.989 4.428a.74.74 0 0 1-.51.205z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M12.004 20a8.006 8.006 0 0 0 7.931-9.007h-1.391a.73.73 0 0 0-.52.216l-4.754 4.403a1.332 1.332 0 0 1-2.267-.966v-3.943l-3.948 3.713c-.495.465-1.15.575-1.826.575h-.65C5.769 17.933 8.702 20 12.004 20'
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
                        id: 'NMX__a'
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
 * @component @name TokenNMX
 * @description Web3Icon for TokenNMX
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiMwMEEwRkYiIGQ9Ik0zLjA3MSAxMy4xMTlhOS4wMDcgOS4wMDcgMCAwIDEgMTcuMjgyLTQuNTA0aC0uOTlhMi45OCAyLjk4IDAgMCAwLTIuMDk1Ljg0NWwtNC4xMzcgNC4yMjJWOS4wNjZjMC0uOTAxLS43MzItMS41NjUtMS41MDMtMS41NzYtLjM2NiAwLS43NDMuMTIzLTEuMDUzLjQxNmwtNS42MTIgNC45ODJhLjgzLjgzIDAgMCAxLS41NzQuMjN6Ii8+CiAgICA8cGF0aCBmaWxsPSIjODBDRkZGIiBkPSJNMTIuMDA1IDIxYTkuMDA2IDkuMDA2IDAgMCAwIDguOTIyLTEwLjEzMmgtMS41NjVhLjgyLjgyIDAgMCAwLS41ODUuMjQybC01LjM0OCA0Ljk1M2ExLjQ5OCAxLjQ5OCAwIDAgMS0yLjU1LTEuMDg2VjEwLjU0bC00LjQ0MiA0LjE3N2MtLjU1Ny41MjMtMS4yOTQuNjQ3LTIuMDU0LjY0N0gzLjY1QzQuOTkgMTguNjc1IDguMjg5IDIxIDEyLjAwNSAyMSIvPgo8L3N2Zz4K) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0zLjA3MSAxMy4xMTlhOS4wMDcgOS4wMDcgMCAwIDEgMTcuMjgyLTQuNTA0aC0uOTlhMi45OCAyLjk4IDAgMCAwLTIuMDk1Ljg0NWwtNC4xMzcgNC4yMjFWOS4wNjdjMC0uOTAxLS43MzItMS41NjUtMS41MDMtMS41NzctLjM2NiAwLS43NDMuMTI0LTEuMDUzLjQxN2wtNS42MTIgNC45ODJhLjgzLjgzIDAgMCAxLS41NzQuMjN6Ii8+CiAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTIuMDA1IDIxYTkuMDA2IDkuMDA2IDAgMCAwIDguOTIyLTEwLjEzMmgtMS41NjVhLjgyLjgyIDAgMCAwLS41ODUuMjQybC01LjM0OCA0Ljk1M2ExLjQ5OCAxLjQ5OCAwIDAgMS0yLjU1LTEuMDg2VjEwLjU0bC00LjQ0MiA0LjE3N2MtLjU1Ny41MjMtMS4yOTQuNjQ3LTIuMDU0LjY0N0gzLjY1QzQuOTkgMTguNjc1IDguMjg5IDIxIDEyLjAwNSAyMSIvPgo8L3N2Zz4K) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNOTVhfX2EpIj4KICAgICAgICA8cGF0aCBmaWxsPSIjMDBBMEZGIiBkPSJNMjQgMEgwdjI0aDI0eiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik00LjA2NCAxMi45OTRhOC4wMDYgOC4wMDYgMCAwIDEgMTUuMzYxLTQuMDAzaC0uODhhMi42NSAyLjY1IDAgMCAwLTEuODYyLjc1bC0zLjY3OCAzLjc1NFY5LjM5MmMwLS44LS42NS0xLjM5MS0xLjMzNi0xLjQwMS0uMzI1IDAtLjY2LjExLS45MzUuMzdsLTQuOTg5IDQuNDI4YS43NC43NCAwIDAgMS0uNTEuMjA1eiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xMi4wMDQgMjBhOC4wMDYgOC4wMDYgMCAwIDAgNy45MzEtOS4wMDdoLTEuMzkxYS43My43MyAwIDAgMC0uNTIuMjE2bC00Ljc1NCA0LjQwM2ExLjMzMiAxLjMzMiAwIDAgMS0yLjI2Ny0uOTY2di0zLjk0M2wtMy45NDggMy43MTNjLS40OTUuNDY1LTEuMTUuNTc1LTEuODI2LjU3NWgtLjY1QzUuNzY5IDE3LjkzMyA4LjcwMiAyMCAxMi4wMDQgMjAiLz4KICAgIDwvZz4KICAgIDxkZWZzPgogICAgICAgIDxjbGlwUGF0aCBpZD0iTk1YX19hIj4KICAgICAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTAgMGgyNHYyNEgweiIvPgogICAgICAgIDwvY2xpcFBhdGg+CiAgICA8L2RlZnM+Cjwvc3ZnPgo=)
 * @see https://web3icons.io/tokens/NMX
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenNMX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenNMX', __iconNode);
;
}),
]);

//# sourceMappingURL=1qqr_%40web3icons_react_dist_1325n2t._.js.map