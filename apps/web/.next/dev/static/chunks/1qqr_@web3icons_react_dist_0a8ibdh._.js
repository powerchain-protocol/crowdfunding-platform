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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenWAXP.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenWAXP
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-client] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#F78E1E',
                d: 'm19.238 10.125-.863.739.881.761 1.744-1.5zM13.875 9l3.337 2.981-1.274.769-2.25-2.625h-1.5L8.25 15h1.5l3.188-3.75.997 1.125H12.75l-.75.75h2.498l.69.75h1.5l1.5-1.125 1.312 1.125H21L15.375 9zM9 10.125l-.75 2.25-.75-2.25H6l-.75 2.25-.75-2.25H3l1.5 3.75H6l.75-2.25.75 2.25H9l1.5-3.75z'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'm19.238 10.125-.863.739.881.761 1.744-1.5zM13.875 9l3.337 2.981-1.274.769-2.25-2.625h-1.5L8.25 15h1.5l3.188-3.75.997 1.125H12.75l-.75.75h2.498l.69.75h1.5l1.5-1.125 1.312 1.125H21L15.375 9zM9 10.125l-.75 2.25-.75-2.25H6l-.75 2.25-.75-2.25H3l1.5 3.75H6l.75-2.25.75 2.25H9l1.5-3.75z'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#WAXP__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#F78E1E',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'm18.433 10.333-.766.657.783.676L20 10.333zm-4.766-1 2.966 2.65-1.133.683-2-2.333h-1.333l-3.5 4.333H10l2.833-3.333.887 1h-1.053L12 13h2.22l.613.666h1.334l1.333-1 1.167 1H20l-5-4.333zm-4.334 1-.666 2-.667-2H6.667l-.667 2-.667-2H4l1.333 3.333h1.334l.666-2 .667 2h1.333l1.334-3.333z'
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
                        id: 'WAXP__a'
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
 * @component @name TokenWAXP
 * @description Web3Icon for TokenWAXP
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNGNzhFMUUiIGQ9Im0xOS4yMzggMTAuMTI1LS44NjMuNzM5Ljg4MS43NjEgMS43NDQtMS41ek0xMy44NzUgOWwzLjMzNyAyLjk4MS0xLjI3NC43NjktMi4yNS0yLjYyNWgtMS41TDguMjUgMTVoMS41bDMuMTg4LTMuNzUuOTk3IDEuMTI1SDEyLjc1bC0uNzUuNzVoMi40OThsLjY5Ljc1aDEuNWwxLjUtMS4xMjUgMS4zMTIgMS4xMjVIMjFMMTUuMzc1IDl6TTkgMTAuMTI1bC0uNzUgMi4yNS0uNzUtMi4yNUg2bC0uNzUgMi4yNS0uNzUtMi4yNUgzbDEuNSAzLjc1SDZsLjc1LTIuMjUuNzUgMi4yNUg5bDEuNS0zLjc1eiIvPgo8L3N2Zz4K) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Im0xOS4yMzggMTAuMTI1LS44NjMuNzM5Ljg4MS43NjEgMS43NDQtMS41ek0xMy44NzUgOWwzLjMzNyAyLjk4MS0xLjI3NC43NjktMi4yNS0yLjYyNWgtMS41TDguMjUgMTVoMS41bDMuMTg4LTMuNzUuOTk3IDEuMTI1SDEyLjc1bC0uNzUuNzVoMi40OThsLjY5Ljc1aDEuNWwxLjUtMS4xMjUgMS4zMTIgMS4xMjVIMjFMMTUuMzc1IDl6TTkgMTAuMTI1bC0uNzUgMi4yNS0uNzUtMi4yNUg2bC0uNzUgMi4yNS0uNzUtMi4yNUgzbDEuNSAzLjc1SDZsLjc1LTIuMjUuNzUgMi4yNUg5bDEuNS0zLjc1eiIvPgo8L3N2Zz4K) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNXQVhQX19hKSI+CiAgICAgICAgPHBhdGggZmlsbD0iI0Y3OEUxRSIgZD0iTTI0IDBIMHYyNGgyNHoiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJtMTguNDMzIDEwLjMzMy0uNzY2LjY1Ny43ODMuNjc2TDIwIDEwLjMzM3ptLTQuNzY2LTEgMi45NjYgMi42NS0xLjEzMy42ODMtMi0yLjMzM2gtMS4zMzNsLTMuNSA0LjMzM0gxMGwyLjgzMy0zLjMzMy44ODcgMWgtMS4wNTNMMTIgMTNoMi4yMmwuNjEzLjY2NmgxLjMzNGwxLjMzMy0xIDEuMTY3IDFIMjBsLTUtNC4zMzN6bS00LjMzNCAxLS42NjYgMi0uNjY3LTJINi42NjdsLS42NjcgMi0uNjY3LTJINGwxLjMzMyAzLjMzM2gxLjMzNGwuNjY2LTIgLjY2NyAyaDEuMzMzbDEuMzM0LTMuMzMzeiIvPgogICAgPC9nPgogICAgPGRlZnM+CiAgICAgICAgPGNsaXBQYXRoIGlkPSJXQVhQX19hIj4KICAgICAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTAgMGgyNHYyNEgweiIvPgogICAgICAgIDwvY2xpcFBhdGg+CiAgICA8L2RlZnM+Cjwvc3ZnPgo=)
 * @see https://web3icons.io/tokens/WAXP
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenWAXP = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenWAXP', __iconNode);
;
}),
]);

//# sourceMappingURL=1qqr_%40web3icons_react_dist_0a8ibdh._.js.map