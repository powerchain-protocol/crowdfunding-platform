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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenCBETH.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenCBETH
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-client] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#0052FF',
                d: 'M12 20.156a8.157 8.157 0 1 0 0-16.313 8.157 8.157 0 0 0 0 16.313M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0'
            }
        ],
        [
            'path',
            {
                fill: '#0052FF',
                d: 'M12 5.25v4.781l3.938 1.806z',
                fillOpacity: '.6'
            }
        ],
        [
            'path',
            {
                fill: '#0052FF',
                d: 'm12 5.25-3.937 6.587 3.937-1.8z'
            }
        ],
        [
            'path',
            {
                fill: '#0052FF',
                d: 'M12 14.936v3.252l3.938-5.597z',
                fillOpacity: '.6'
            }
        ],
        [
            'path',
            {
                fill: '#0052FF',
                d: 'M12 18.188v-3.252l-3.937-2.345z'
            }
        ],
        [
            'path',
            {
                fill: '#0052FF',
                d: 'm12 14.188 3.938-2.352-3.938-1.8z',
                fillOpacity: '.2'
            }
        ],
        [
            'path',
            {
                fill: '#0052FF',
                d: 'M8.063 11.837 12 14.188v-4.157z',
                fillOpacity: '.6'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M12 20.156a8.157 8.157 0 1 0 0-16.313 8.157 8.157 0 0 0 0 16.313M21 12a9 9 0 1 1-17.999 0A9 9 0 0 1 21 12'
            }
        ],
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M12 5.25v4.781l3.938 1.806zm0 0-3.937 6.587 3.937-1.8zm0 9.686v3.252l3.938-5.597zm0 3.252v-3.252l-3.937-2.345z'
            }
        ],
        [
            'path',
            {
                fill: 'currentColor',
                d: 'm12 14.188 3.938-2.352-3.938-1.8zm-3.937-2.351L12 14.188v-4.157z'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#CBETH__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#0052FF',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M12 19.25a7.25 7.25 0 1 0 0-14.5 7.25 7.25 0 0 0 0 14.5M20 12a8 8 0 1 1-16 0 8 8 0 0 1 16 0'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M12 6v4.25l3.5 1.605zm0 0-3.5 5.855 3.5-1.6zm0 8.61v2.89l3.5-4.975zm0 2.89v-2.89l-3.5-2.085zm0-3.555 3.5-2.09-3.5-1.6z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'm8.5 11.855 3.5 2.09V10.25z'
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
                        id: 'CBETH__a'
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
 * @component @name TokenCBETH
 * @description Web3Icon for TokenCBETH
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiMwMDUyRkYiIGQ9Ik0xMiAyMC4xNTZhOC4xNTcgOC4xNTcgMCAxIDAgMC0xNi4zMTMgOC4xNTcgOC4xNTcgMCAwIDAgMCAxNi4zMTNNMjEgMTJhOSA5IDAgMSAxLTE4IDAgOSA5IDAgMCAxIDE4IDAiLz4KICAgIDxwYXRoIGZpbGw9IiMwMDUyRkYiIGZpbGwtb3BhY2l0eT0iLjYiIGQ9Ik0xMiA1LjI1djQuNzgxbDMuOTM4IDEuODA2eiIvPgogICAgPHBhdGggZmlsbD0iIzAwNTJGRiIgZD0ibTEyIDUuMjUtMy45MzcgNi41ODcgMy45MzctMS44eiIvPgogICAgPHBhdGggZmlsbD0iIzAwNTJGRiIgZmlsbC1vcGFjaXR5PSIuNiIgZD0iTTEyIDE0LjkzNnYzLjI1MmwzLjkzOC01LjU5N3oiLz4KICAgIDxwYXRoIGZpbGw9IiMwMDUyRkYiIGQ9Ik0xMiAxOC4xODh2LTMuMjUybC0zLjkzNy0yLjM0NXoiLz4KICAgIDxwYXRoIGZpbGw9IiMwMDUyRkYiIGZpbGwtb3BhY2l0eT0iLjIiIGQ9Im0xMiAxNC4xODggMy45MzgtMi4zNTItMy45MzgtMS44eiIvPgogICAgPHBhdGggZmlsbD0iIzAwNTJGRiIgZmlsbC1vcGFjaXR5PSIuNiIgZD0iTTguMDYzIDExLjgzNyAxMiAxNC4xODh2LTQuMTU3eiIvPgo8L3N2Zz4K) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xMiAyMC4xNTZhOC4xNTcgOC4xNTcgMCAxIDAgMC0xNi4zMTMgOC4xNTcgOC4xNTcgMCAwIDAgMCAxNi4zMTNNMjEgMTJhOSA5IDAgMSAxLTE3Ljk5OSAwQTkgOSAwIDAgMSAyMSAxMiIvPgogICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTEyIDUuMjV2NC43ODFsMy45MzggMS44MDZ6bTAgMC0zLjkzNyA2LjU4NyAzLjkzNy0xLjh6bTAgOS42ODZ2My4yNTJsMy45MzgtNS41OTd6bTAgMy4yNTJ2LTMuMjUybC0zLjkzNy0yLjM0NXoiLz4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Im0xMiAxNC4xODggMy45MzgtMi4zNTItMy45MzgtMS44em0tMy45MzctMi4zNTFMMTIgMTQuMTg4di00LjE1N3oiLz4KPC9zdmc+Cg==) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNDQkVUSF9fYSkiPgogICAgICAgIDxwYXRoIGZpbGw9IiMwMDUyRkYiIGQ9Ik0yNCAwSDB2MjRoMjR6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTEyIDE5LjI1YTcuMjUgNy4yNSAwIDEgMCAwLTE0LjUgNy4yNSA3LjI1IDAgMCAwIDAgMTQuNU0yMCAxMmE4IDggMCAxIDEtMTYgMCA4IDggMCAwIDEgMTYgMCIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xMiA2djQuMjVsMy41IDEuNjA1em0wIDAtMy41IDUuODU1IDMuNS0xLjZ6bTAgOC42MXYyLjg5bDMuNS00Ljk3NXptMCAyLjg5di0yLjg5bC0zLjUtMi4wODV6bTAtMy41NTUgMy41LTIuMDktMy41LTEuNnoiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJtOC41IDExLjg1NSAzLjUgMi4wOVYxMC4yNXoiLz4KICAgIDwvZz4KICAgIDxkZWZzPgogICAgICAgIDxjbGlwUGF0aCBpZD0iQ0JFVEhfX2EiPgogICAgICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMCAwaDI0djI0SDB6Ii8+CiAgICAgICAgPC9jbGlwUGF0aD4KICAgIDwvZGVmcz4KPC9zdmc+Cg==)
 * @see https://web3icons.io/tokens/CBETH
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenCBETH = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenCBETH', __iconNode);
;
}),
]);

//# sourceMappingURL=1qqr_%40web3icons_react_dist_0b7pge-._.js.map