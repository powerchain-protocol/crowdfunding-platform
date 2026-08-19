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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenGYMNET.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenGYMNET
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-client] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#2F6EB6',
                d: 'M12 11.438a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5m8.145-8.437c-.27 4.533-4.601 8.33-6.727 9.668A8.81 8.81 0 0 0 20.814 11c.54-3.465-.225-6.778-.675-7.998z'
            }
        ],
        [
            'path',
            {
                fill: '#2F6EB6',
                d: 'M20.144 12.67C9.384 16.662 4.902 7.888 4.002 3c-3.695 11.001 3.7 16.333 8.07 17.998 4.838-1.867 7.397-6.333 8.072-8.33'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M12 11.438a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5M20.145 3c-.27 4.534-4.6 8.33-6.727 9.67a8.82 8.82 0 0 0 7.396-1.671c.54-3.465-.224-6.778-.674-7.999z'
            }
        ],
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M20.145 12.67C9.385 16.662 4.902 7.887 4.002 3 .307 14.002 7.703 19.334 12.073 21c4.838-1.868 7.397-6.334 8.072-8.33'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#GYMNET__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#2F6EB6',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M12 11.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4M19.24 4c-.24 4.03-4.09 7.405-5.98 8.595a7.83 7.83 0 0 0 6.575-1.485c.48-3.08-.2-6.025-.6-7.11z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M19.24 12.595C9.675 16.145 5.69 8.345 4.89 4c-3.284 9.78 3.29 14.52 7.175 16 4.3-1.66 6.575-5.63 7.175-7.405'
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
                        id: 'GYMNET__a'
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
 * @component @name TokenGYMNET
 * @description Web3Icon for TokenGYMNET
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiMyRjZFQjYiIGQ9Ik0xMiAxMS40MzhhMi4yNSAyLjI1IDAgMSAwIDAtNC41IDIuMjUgMi4yNSAwIDAgMCAwIDQuNW04LjE0NS04LjQzN2MtLjI3IDQuNTMzLTQuNjAxIDguMzMtNi43MjcgOS42NjhBOC44MSA4LjgxIDAgMCAwIDIwLjgxNCAxMWMuNTQtMy40NjUtLjIyNS02Ljc3OC0uNjc1LTcuOTk4eiIvPgogICAgPHBhdGggZmlsbD0iIzJGNkVCNiIgZD0iTTIwLjE0NCAxMi42N0M5LjM4NCAxNi42NjIgNC45MDIgNy44ODggNC4wMDIgM2MtMy42OTUgMTEuMDAxIDMuNyAxNi4zMzMgOC4wNyAxNy45OTggNC44MzgtMS44NjcgNy4zOTctNi4zMzMgOC4wNzItOC4zMyIvPgo8L3N2Zz4K) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xMiAxMS40MzhhMi4yNSAyLjI1IDAgMSAwIDAtNC41IDIuMjUgMi4yNSAwIDAgMCAwIDQuNU0yMC4xNDUgM2MtLjI3IDQuNTM0LTQuNiA4LjMzLTYuNzI3IDkuNjdhOC44MiA4LjgyIDAgMCAwIDcuMzk2LTEuNjcxYy41NC0zLjQ2NS0uMjI0LTYuNzc4LS42NzQtNy45OTl6Ii8+CiAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMjAuMTQ1IDEyLjY3QzkuMzg1IDE2LjY2MiA0LjkwMiA3Ljg4NyA0LjAwMiAzIC4zMDcgMTQuMDAyIDcuNzAzIDE5LjMzNCAxMi4wNzMgMjFjNC44MzgtMS44NjggNy4zOTctNi4zMzQgOC4wNzItOC4zMyIvPgo8L3N2Zz4K) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNHWU1ORVRfX2EpIj4KICAgICAgICA8cGF0aCBmaWxsPSIjMkY2RUI2IiBkPSJNMjQgMEgwdjI0aDI0eiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xMiAxMS41YTIgMiAwIDEgMCAwLTQgMiAyIDAgMCAwIDAgNE0xOS4yNCA0Yy0uMjQgNC4wMy00LjA5IDcuNDA1LTUuOTggOC41OTVhNy44MyA3LjgzIDAgMCAwIDYuNTc1LTEuNDg1Yy40OC0zLjA4LS4yLTYuMDI1LS42LTcuMTF6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTE5LjI0IDEyLjU5NUM5LjY3NSAxNi4xNDUgNS42OSA4LjM0NSA0Ljg5IDRjLTMuMjg0IDkuNzggMy4yOSAxNC41MiA3LjE3NSAxNiA0LjMtMS42NiA2LjU3NS01LjYzIDcuMTc1LTcuNDA1Ii8+CiAgICA8L2c+CiAgICA8ZGVmcz4KICAgICAgICA8Y2xpcFBhdGggaWQ9IkdZTU5FVF9fYSI+CiAgICAgICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0wIDBoMjR2MjRIMHoiLz4KICAgICAgICA8L2NsaXBQYXRoPgogICAgPC9kZWZzPgo8L3N2Zz4K)
 * @see https://web3icons.io/tokens/GYMNET
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenGYMNET = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenGYMNET', __iconNode);
;
}),
]);

//# sourceMappingURL=1qqr_%40web3icons_react_dist_1ucvwi-._.js.map