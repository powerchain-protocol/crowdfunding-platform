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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/networks/NetworkFantomTestnet.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>NetworkFantomTestnet
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-client] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#26B6EA',
                d: 'M11.97 3 6.602 6.046v11.817L11.97 21l5.432-3.137V6.046zm.032.9L7.95 6.33 12 8.692l4.05-2.362zM7.5 7.05v4.05l3.6-2.016zm4.951 2.924v4.05l3.6-2.015zm4.05-2.924v4.05l-3.6-2.016zm-4.95 2.923v4.05L7.95 12.009zm-4.05 2.73v4.698l4.5 2.698 4.5-2.7v-4.698l-4.5 2.448z',
                fillRule: 'evenodd',
                clipRule: 'evenodd'
            }
        ],
        [
            'path',
            {
                fill: '#26B6EA',
                d: 'M4.35 18.835V16.05h.9v2.34l2.25 1.16v1zm15.3-13.67V7.95h-.9V5.61L16.5 4.45v-1z'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M11.97 3 6.602 6.046v11.817L11.97 21l5.432-3.137V6.046zm.032.9L7.95 6.33 12 8.692l4.05-2.362zM7.5 7.05v4.05l3.6-2.016zm4.951 2.924v4.05l3.6-2.015zm4.05-2.924v4.05l-3.6-2.016zm-4.95 2.923v4.05L7.95 12.009zm-4.05 2.73v4.698l4.5 2.698 4.5-2.7v-4.698l-4.5 2.448z',
                fillRule: 'evenodd',
                clipRule: 'evenodd'
            }
        ],
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M4.35 18.835V16.05h.9v2.34l2.25 1.16v1zm15.3-13.67V7.95h-.9V5.61L16.5 4.45v-1z'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#fantom__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#26B6EA',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M11.974 4 7.202 6.708V17.21L11.974 20l4.828-2.789V6.708zm.028.8L8.4 6.96l3.6 2.1 3.6-2.1zM8 7.6v3.6l3.2-1.792zm4.4 2.6v3.6l3.2-1.792zM16 7.6v3.6l-3.2-1.792zm-4.4 2.598V13.8l-3.2-1.793zM8 12.625V16.8l4 2.398 4.001-2.4v-4.176l-4 2.178z',
                        fillRule: 'evenodd',
                        clipRule: 'evenodd'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M5.2 18.076V15.6H6v2.08l2 1.032v.888zM18.8 5.924V8.4H18V6.32l-2-1.03V4.4z'
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
                        id: 'fantom__a'
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
 * @component @name NetworkFantomTestnet
 * @description Web3Icon for NetworkFantomTestnet
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiMyNkI2RUEiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTExLjk3IDMgNi42MDIgNi4wNDZ2MTEuODE3TDExLjk3IDIxbDUuNDMyLTMuMTM3VjYuMDQ2em0uMDMyLjlMNy45NSA2LjMzIDEyIDguNjkybDQuMDUtMi4zNjJ6TTcuNSA3LjA1djQuMDVsMy42LTIuMDE2em00Ljk1MSAyLjkyNHY0LjA1bDMuNi0yLjAxNXptNC4wNS0yLjkyNHY0LjA1bC0zLjYtMi4wMTZ6bS00Ljk1IDIuOTIzdjQuMDVMNy45NSAxMi4wMDl6bS00LjA1IDIuNzN2NC42OThsNC41IDIuNjk4IDQuNS0yLjd2LTQuNjk4bC00LjUgMi40NDh6IiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KICAgIDxwYXRoIGZpbGw9IiMyNkI2RUEiIGQ9Ik00LjM1IDE4LjgzNVYxNi4wNWguOXYyLjM0bDIuMjUgMS4xNnYxem0xNS4zLTEzLjY3VjcuOTVoLS45VjUuNjFMMTYuNSA0LjQ1di0xeiIvPgo8L3N2Zz4K) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTExLjk3IDMgNi42MDIgNi4wNDZ2MTEuODE3TDExLjk3IDIxbDUuNDMyLTMuMTM3VjYuMDQ2em0uMDMyLjlMNy45NSA2LjMzIDEyIDguNjkybDQuMDUtMi4zNjJ6TTcuNSA3LjA1djQuMDVsMy42LTIuMDE2em00Ljk1MSAyLjkyNHY0LjA1bDMuNi0yLjAxNXptNC4wNS0yLjkyNHY0LjA1bC0zLjYtMi4wMTZ6bS00Ljk1IDIuOTIzdjQuMDVMNy45NSAxMi4wMDl6bS00LjA1IDIuNzN2NC42OThsNC41IDIuNjk4IDQuNS0yLjd2LTQuNjk4bC00LjUgMi40NDh6IiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik00LjM1IDE4LjgzNVYxNi4wNWguOXYyLjM0bDIuMjUgMS4xNnYxem0xNS4zLTEzLjY3VjcuOTVoLS45VjUuNjFMMTYuNSA0LjQ1di0xeiIvPgo8L3N2Zz4K) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNmYW50b21fX2EpIj4KICAgICAgICA8cGF0aCBmaWxsPSIjMjZCNkVBIiBkPSJNMjQgMEgwdjI0aDI0eiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTExLjk3NCA0IDcuMjAyIDYuNzA4VjE3LjIxTDExLjk3NCAyMGw0LjgyOC0yLjc4OVY2LjcwOHptLjAyOC44TDguNCA2Ljk2bDMuNiAyLjEgMy42LTIuMXpNOCA3LjZ2My42bDMuMi0xLjc5MnptNC40IDIuNnYzLjZsMy4yLTEuNzkyek0xNiA3LjZ2My42bC0zLjItMS43OTJ6bS00LjQgMi41OThWMTMuOGwtMy4yLTEuNzkzek04IDEyLjYyNVYxNi44bDQgMi4zOTggNC4wMDEtMi40di00LjE3NmwtNCAyLjE3OHoiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik01LjIgMTguMDc2VjE1LjZINnYyLjA4bDIgMS4wMzJ2Ljg4OHpNMTguOCA1LjkyNFY4LjRIMThWNi4zMmwtMi0xLjAzVjQuNHoiLz4KICAgIDwvZz4KICAgIDxkZWZzPgogICAgICAgIDxjbGlwUGF0aCBpZD0iZmFudG9tX19hIj4KICAgICAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTAgMGgyNHYyNEgweiIvPgogICAgICAgIDwvY2xpcFBhdGg+CiAgICA8L2RlZnM+Cjwvc3ZnPgo=)
 * @see https://web3icons.io/networks/fantom-testnet
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const NetworkFantomTestnet = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWeb3Icon"])('NetworkFantomTestnet', __iconNode);
;
}),
]);

//# sourceMappingURL=1qqr_%40web3icons_react_dist_0h9xget._.js.map