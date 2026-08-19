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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenTRX.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenTRX
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-client] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#C4342B',
                d: 'M4.418 3.186a.56.56 0 0 1 .553-.17l11.904 2.915q.108.027.198.092l2.422 1.765a.564.564 0 0 1 .133.774l-8.332 12.192a.563.563 0 0 1-.998-.13L4.306 3.754a.56.56 0 0 1 .112-.568m1.965 3.045 4.16 11.711.684-6.07zm5.957 5.838-.695 6.175 5.884-8.61zm5.72-3.93-3.793 1.78 2.543-2.692zm-2.395-1.343L6.41 4.53l5.426 6.32z',
                fillRule: 'evenodd',
                clipRule: 'evenodd'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M4.418 3.186a.56.56 0 0 1 .553-.17l11.904 2.915q.108.027.198.092l2.422 1.765a.564.564 0 0 1 .133.774l-8.332 12.192a.564.564 0 0 1-.998-.13L4.306 3.754a.56.56 0 0 1 .112-.568m1.965 3.045 4.16 11.711.684-6.07zm5.957 5.838-.695 6.175 5.884-8.61zm5.72-3.93-3.793 1.78 2.543-2.692zm-2.395-1.343L6.41 4.53l5.426 6.32z',
                fillRule: 'evenodd',
                clipRule: 'evenodd'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#TRX__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#C4342B',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M5.26 4.165a.5.5 0 0 1 .492-.15l10.581 2.59a.5.5 0 0 1 .177.082l2.153 1.57a.5.5 0 0 1 .118.687l-7.407 10.837a.5.5 0 0 1-.887-.115L5.161 4.67a.5.5 0 0 1 .1-.505m1.747 2.707 3.698 10.41.608-5.395zm5.295 5.189-.617 5.489 5.23-7.654zm5.085-3.494-3.372 1.582 2.26-2.392zm-2.13-1.193L7.032 5.36l4.823 5.617z',
                        fillRule: 'evenodd',
                        clipRule: 'evenodd'
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
                        id: 'TRX__a'
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
 * @component @name TokenTRX
 * @description Web3Icon for TokenTRX
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNDNDM0MkIiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTQuNDE4IDMuMTg2YS41Ni41NiAwIDAgMSAuNTUzLS4xN2wxMS45MDQgMi45MTVxLjEwOC4wMjcuMTk4LjA5MmwyLjQyMiAxLjc2NWEuNTY0LjU2NCAwIDAgMSAuMTMzLjc3NGwtOC4zMzIgMTIuMTkyYS41NjMuNTYzIDAgMCAxLS45OTgtLjEzTDQuMzA2IDMuNzU0YS41Ni41NiAwIDAgMSAuMTEyLS41NjhtMS45NjUgMy4wNDUgNC4xNiAxMS43MTEuNjg0LTYuMDd6bTUuOTU3IDUuODM4LS42OTUgNi4xNzUgNS44ODQtOC42MXptNS43Mi0zLjkzLTMuNzkzIDEuNzggMi41NDMtMi42OTJ6bS0yLjM5NS0xLjM0M0w2LjQxIDQuNTNsNS40MjYgNi4zMnoiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4K) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTQuNDE4IDMuMTg2YS41Ni41NiAwIDAgMSAuNTUzLS4xN2wxMS45MDQgMi45MTVxLjEwOC4wMjcuMTk4LjA5MmwyLjQyMiAxLjc2NWEuNTY0LjU2NCAwIDAgMSAuMTMzLjc3NGwtOC4zMzIgMTIuMTkyYS41NjQuNTY0IDAgMCAxLS45OTgtLjEzTDQuMzA2IDMuNzU0YS41Ni41NiAwIDAgMSAuMTEyLS41NjhtMS45NjUgMy4wNDUgNC4xNiAxMS43MTEuNjg0LTYuMDd6bTUuOTU3IDUuODM4LS42OTUgNi4xNzUgNS44ODQtOC42MXptNS43Mi0zLjkzLTMuNzkzIDEuNzggMi41NDMtMi42OTJ6bS0yLjM5NS0xLjM0M0w2LjQxIDQuNTNsNS40MjYgNi4zMnoiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4K) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNUUlhfX2EpIj4KICAgICAgICA8cGF0aCBmaWxsPSIjQzQzNDJCIiBkPSJNMjQgMEgwdjI0aDI0eiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTUuMjYgNC4xNjVhLjUuNSAwIDAgMSAuNDkyLS4xNWwxMC41ODEgMi41OWEuNS41IDAgMCAxIC4xNzcuMDgybDIuMTUzIDEuNTdhLjUuNSAwIDAgMSAuMTE4LjY4N2wtNy40MDcgMTAuODM3YS41LjUgMCAwIDEtLjg4Ny0uMTE1TDUuMTYxIDQuNjdhLjUuNSAwIDAgMSAuMS0uNTA1bTEuNzQ3IDIuNzA3IDMuNjk4IDEwLjQxLjYwOC01LjM5NXptNS4yOTUgNS4xODktLjYxNyA1LjQ4OSA1LjIzLTcuNjU0em01LjA4NS0zLjQ5NC0zLjM3MiAxLjU4MiAyLjI2LTIuMzkyem0tMi4xMy0xLjE5M0w3LjAzMiA1LjM2bDQuODIzIDUuNjE3eiIgY2xpcC1ydWxlPSJldmVub2RkIi8+CiAgICA8L2c+CiAgICA8ZGVmcz4KICAgICAgICA8Y2xpcFBhdGggaWQ9IlRSWF9fYSI+CiAgICAgICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0wIDBoMjR2MjRIMHoiLz4KICAgICAgICA8L2NsaXBQYXRoPgogICAgPC9kZWZzPgo8L3N2Zz4K)
 * @see https://web3icons.io/tokens/TRX
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenTRX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenTRX', __iconNode);
;
}),
]);

//# sourceMappingURL=1qqr_%40web3icons_react_dist_1_bcspy._.js.map