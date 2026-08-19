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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/networks/NetworkArbitrumNova.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>NetworkArbitrumNova
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-client] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#EF8220',
                d: 'M9.244 5.7H7.596a.27.27 0 0 0-.255.183l-4.333 12.23a.14.14 0 0 0 .128.187h1.648a.27.27 0 0 0 .255-.183l4.333-12.23a.14.14 0 0 0-.128-.187m2.005 5.124a.134.134 0 0 0-.254 0l-.855 2.413a.3.3 0 0 0 0 .19l1.662 4.69a.27.27 0 0 0 .254.183h1.649c.094 0 .16-.096.127-.187zm4.203 2.361a.134.134 0 0 0 .255 0l2.585-7.298a.14.14 0 0 0-.127-.187h-1.648a.27.27 0 0 0-.255.183l-1.665 4.699a.3.3 0 0 0 0 .19zm-3.25-7.303a.27.27 0 0 0-.253-.182h-1.654a.27.27 0 0 0-.254.183l-4.333 12.23a.14.14 0 0 0 .127.187h1.648a.27.27 0 0 0 .255-.183l3.318-9.364a.067.067 0 0 1 .127 0l3.318 9.364a.27.27 0 0 0 .255.183h1.648c.094 0 .16-.096.127-.187zm8.662-.182h-1.648a.27.27 0 0 0-.255.183l-3.014 8.508a.3.3 0 0 0 0 .19l.855 2.413a.134.134 0 0 0 .254 0l2.984-8.421.952-2.686a.14.14 0 0 0-.128-.187'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M9.244 5.7H7.596a.27.27 0 0 0-.255.183l-4.333 12.23a.14.14 0 0 0 .128.187h1.648a.27.27 0 0 0 .255-.183l4.333-12.23a.14.14 0 0 0-.128-.187m2.005 5.124a.134.134 0 0 0-.254 0l-.855 2.413a.3.3 0 0 0 0 .19l1.662 4.69a.27.27 0 0 0 .254.183h1.649c.094 0 .16-.096.127-.187zm4.203 2.361a.134.134 0 0 0 .255 0l2.585-7.298a.14.14 0 0 0-.127-.187h-1.648a.27.27 0 0 0-.255.183l-1.665 4.699a.3.3 0 0 0 0 .19zm-3.25-7.303a.27.27 0 0 0-.253-.182h-1.654a.27.27 0 0 0-.254.183l-4.333 12.23a.14.14 0 0 0 .127.187h1.648a.27.27 0 0 0 .255-.183l3.318-9.364a.067.067 0 0 1 .127 0l3.318 9.364a.27.27 0 0 0 .255.183h1.648c.094 0 .16-.096.127-.187zm8.662-.182h-1.648a.27.27 0 0 0-.255.183l-3.014 8.508a.3.3 0 0 0 0 .19l.855 2.413a.134.134 0 0 0 .254 0l2.984-8.421.952-2.686a.14.14 0 0 0-.128-.187'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#arbitrum-nova__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#EF8220',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M9.55 6.4H8.086a.24.24 0 0 0-.226.163l-3.852 10.87c-.028.082.03.167.114.167h1.465a.24.24 0 0 0 .226-.163l3.852-10.87c.028-.081-.03-.167-.113-.167m1.783 4.555a.12.12 0 0 0-.226 0l-.76 2.144a.26.26 0 0 0 0 .17l1.477 4.168a.24.24 0 0 0 .226.163h1.465a.123.123 0 0 0 .114-.167zm3.736 2.099a.12.12 0 0 0 .226 0l2.298-6.488a.123.123 0 0 0-.113-.166h-1.465a.24.24 0 0 0-.226.163l-1.48 4.176a.25.25 0 0 0 0 .17zm-2.89-6.492a.24.24 0 0 0-.224-.162h-1.47a.24.24 0 0 0-.227.163l-3.851 10.87c-.029.082.03.167.113.167h1.465a.24.24 0 0 0 .227-.163l2.949-8.323a.06.06 0 0 1 .113 0l2.95 8.323a.24.24 0 0 0 .225.163h1.466a.124.124 0 0 0 .113-.166zm7.7-.162h-1.465a.24.24 0 0 0-.226.163l-2.68 7.562a.26.26 0 0 0 0 .17l.76 2.145a.12.12 0 0 0 .226 0l2.653-7.486.846-2.388a.123.123 0 0 0-.114-.166'
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
                        id: 'arbitrum-nova__a'
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
 * @component @name NetworkArbitrumNova
 * @description Web3Icon for NetworkArbitrumNova
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNFRjgyMjAiIGQ9Ik05LjI0NCA1LjdINy41OTZhLjI3LjI3IDAgMCAwLS4yNTUuMTgzbC00LjMzMyAxMi4yM2EuMTQuMTQgMCAwIDAgLjEyOC4xODdoMS42NDhhLjI3LjI3IDAgMCAwIC4yNTUtLjE4M2w0LjMzMy0xMi4yM2EuMTQuMTQgMCAwIDAtLjEyOC0uMTg3bTIuMDA1IDUuMTI0YS4xMzQuMTM0IDAgMCAwLS4yNTQgMGwtLjg1NSAyLjQxM2EuMy4zIDAgMCAwIDAgLjE5bDEuNjYyIDQuNjlhLjI3LjI3IDAgMCAwIC4yNTQuMTgzaDEuNjQ5Yy4wOTQgMCAuMTYtLjA5Ni4xMjctLjE4N3ptNC4yMDMgMi4zNjFhLjEzNC4xMzQgMCAwIDAgLjI1NSAwbDIuNTg1LTcuMjk4YS4xNC4xNCAwIDAgMC0uMTI3LS4xODdoLTEuNjQ4YS4yNy4yNyAwIDAgMC0uMjU1LjE4M2wtMS42NjUgNC42OTlhLjMuMyAwIDAgMCAwIC4xOXptLTMuMjUtNy4zMDNhLjI3LjI3IDAgMCAwLS4yNTMtLjE4MmgtMS42NTRhLjI3LjI3IDAgMCAwLS4yNTQuMTgzbC00LjMzMyAxMi4yM2EuMTQuMTQgMCAwIDAgLjEyNy4xODdoMS42NDhhLjI3LjI3IDAgMCAwIC4yNTUtLjE4M2wzLjMxOC05LjM2NGEuMDY3LjA2NyAwIDAgMSAuMTI3IDBsMy4zMTggOS4zNjRhLjI3LjI3IDAgMCAwIC4yNTUuMTgzaDEuNjQ4Yy4wOTQgMCAuMTYtLjA5Ni4xMjctLjE4N3ptOC42NjItLjE4MmgtMS42NDhhLjI3LjI3IDAgMCAwLS4yNTUuMTgzbC0zLjAxNCA4LjUwOGEuMy4zIDAgMCAwIDAgLjE5bC44NTUgMi40MTNhLjEzNC4xMzQgMCAwIDAgLjI1NCAwbDIuOTg0LTguNDIxLjk1Mi0yLjY4NmEuMTQuMTQgMCAwIDAtLjEyOC0uMTg3Ii8+Cjwvc3ZnPgo=) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik05LjI0NCA1LjdINy41OTZhLjI3LjI3IDAgMCAwLS4yNTUuMTgzbC00LjMzMyAxMi4yM2EuMTQuMTQgMCAwIDAgLjEyOC4xODdoMS42NDhhLjI3LjI3IDAgMCAwIC4yNTUtLjE4M2w0LjMzMy0xMi4yM2EuMTQuMTQgMCAwIDAtLjEyOC0uMTg3bTIuMDA1IDUuMTI0YS4xMzQuMTM0IDAgMCAwLS4yNTQgMGwtLjg1NSAyLjQxM2EuMy4zIDAgMCAwIDAgLjE5bDEuNjYyIDQuNjlhLjI3LjI3IDAgMCAwIC4yNTQuMTgzaDEuNjQ5Yy4wOTQgMCAuMTYtLjA5Ni4xMjctLjE4N3ptNC4yMDMgMi4zNjFhLjEzNC4xMzQgMCAwIDAgLjI1NSAwbDIuNTg1LTcuMjk4YS4xNC4xNCAwIDAgMC0uMTI3LS4xODdoLTEuNjQ4YS4yNy4yNyAwIDAgMC0uMjU1LjE4M2wtMS42NjUgNC42OTlhLjMuMyAwIDAgMCAwIC4xOXptLTMuMjUtNy4zMDNhLjI3LjI3IDAgMCAwLS4yNTMtLjE4MmgtMS42NTRhLjI3LjI3IDAgMCAwLS4yNTQuMTgzbC00LjMzMyAxMi4yM2EuMTQuMTQgMCAwIDAgLjEyNy4xODdoMS42NDhhLjI3LjI3IDAgMCAwIC4yNTUtLjE4M2wzLjMxOC05LjM2NGEuMDY3LjA2NyAwIDAgMSAuMTI3IDBsMy4zMTggOS4zNjRhLjI3LjI3IDAgMCAwIC4yNTUuMTgzaDEuNjQ4Yy4wOTQgMCAuMTYtLjA5Ni4xMjctLjE4N3ptOC42NjItLjE4MmgtMS42NDhhLjI3LjI3IDAgMCAwLS4yNTUuMTgzbC0zLjAxNCA4LjUwOGEuMy4zIDAgMCAwIDAgLjE5bC44NTUgMi40MTNhLjEzNC4xMzQgMCAwIDAgLjI1NCAwbDIuOTg0LTguNDIxLjk1Mi0yLjY4NmEuMTQuMTQgMCAwIDAtLjEyOC0uMTg3Ii8+Cjwvc3ZnPgo=) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNhcmJpdHJ1bS1ub3ZhX19hKSI+CiAgICAgICAgPHBhdGggZmlsbD0iI0VGODIyMCIgZD0iTTI0IDBIMHYyNGgyNHoiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNOS41NSA2LjRIOC4wODZhLjI0LjI0IDAgMCAwLS4yMjYuMTYzbC0zLjg1MiAxMC44N2MtLjAyOC4wODIuMDMuMTY3LjExNC4xNjdoMS40NjVhLjI0LjI0IDAgMCAwIC4yMjYtLjE2M2wzLjg1Mi0xMC44N2MuMDI4LS4wODEtLjAzLS4xNjctLjExMy0uMTY3bTEuNzgzIDQuNTU1YS4xMi4xMiAwIDAgMC0uMjI2IDBsLS43NiAyLjE0NGEuMjYuMjYgMCAwIDAgMCAuMTdsMS40NzcgNC4xNjhhLjI0LjI0IDAgMCAwIC4yMjYuMTYzaDEuNDY1YS4xMjMuMTIzIDAgMCAwIC4xMTQtLjE2N3ptMy43MzYgMi4wOTlhLjEyLjEyIDAgMCAwIC4yMjYgMGwyLjI5OC02LjQ4OGEuMTIzLjEyMyAwIDAgMC0uMTEzLS4xNjZoLTEuNDY1YS4yNC4yNCAwIDAgMC0uMjI2LjE2M2wtMS40OCA0LjE3NmEuMjUuMjUgMCAwIDAgMCAuMTd6bS0yLjg5LTYuNDkyYS4yNC4yNCAwIDAgMC0uMjI0LS4xNjJoLTEuNDdhLjI0LjI0IDAgMCAwLS4yMjcuMTYzbC0zLjg1MSAxMC44N2MtLjAyOS4wODIuMDMuMTY3LjExMy4xNjdoMS40NjVhLjI0LjI0IDAgMCAwIC4yMjctLjE2M2wyLjk0OS04LjMyM2EuMDYuMDYgMCAwIDEgLjExMyAwbDIuOTUgOC4zMjNhLjI0LjI0IDAgMCAwIC4yMjUuMTYzaDEuNDY2YS4xMjQuMTI0IDAgMCAwIC4xMTMtLjE2NnptNy43LS4xNjJoLTEuNDY1YS4yNC4yNCAwIDAgMC0uMjI2LjE2M2wtMi42OCA3LjU2MmEuMjYuMjYgMCAwIDAgMCAuMTdsLjc2IDIuMTQ1YS4xMi4xMiAwIDAgMCAuMjI2IDBsMi42NTMtNy40ODYuODQ2LTIuMzg4YS4xMjMuMTIzIDAgMCAwLS4xMTQtLjE2NiIvPgogICAgPC9nPgogICAgPGRlZnM+CiAgICAgICAgPGNsaXBQYXRoIGlkPSJhcmJpdHJ1bS1ub3ZhX19hIj4KICAgICAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTAgMGgyNHYyNEgweiIvPgogICAgICAgIDwvY2xpcFBhdGg+CiAgICA8L2RlZnM+Cjwvc3ZnPgo=)
 * @see https://web3icons.io/networks/arbitrum-nova
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const NetworkArbitrumNova = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWeb3Icon"])('NetworkArbitrumNova', __iconNode);
;
}),
]);

//# sourceMappingURL=1qqr_%40web3icons_react_dist_0a34asr._.js.map