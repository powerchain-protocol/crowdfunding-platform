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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenAIOZ.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenAIOZ
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-ssr] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#fff',
                d: 'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18m1.699-4.753V9.823l-5.974 6.97a.85.85 0 0 1-.551.27.764.764 0 0 1-.799-.754v-.023c0-.174.067-.349.186-.49l7.312-8.566a.87.87 0 0 1 .653-.293.84.84 0 0 1 .849.827v8.483a.83.83 0 0 1-.844.815.824.824 0 0 1-.832-.815'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18m1.699-4.753V9.823l-5.974 6.97a.85.85 0 0 1-.551.27.764.764 0 0 1-.799-.754v-.023c0-.174.067-.349.186-.49l7.312-8.566a.87.87 0 0 1 .653-.293.84.84 0 0 1 .849.827v8.483a.83.83 0 0 1-.844.815.824.824 0 0 1-.832-.815'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#AIOZ__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#000',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16m1.51-4.225v-5.71L8.2 16.26a.75.75 0 0 1-.49.24.68.68 0 0 1-.71-.67v-.02c0-.155.06-.31.165-.435l6.5-7.615a.77.77 0 0 1 .58-.26c.415 0 .755.33.755.735v7.54c0 .4-.335.725-.75.725a.73.73 0 0 1-.74-.725'
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
                        id: 'AIOZ__a'
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
 * @component @name TokenAIOZ
 * @description Web3Icon for TokenAIOZ
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xMiAyMWE5IDkgMCAxIDAgMC0xOCA5IDkgMCAwIDAgMCAxOG0xLjY5OS00Ljc1M1Y5LjgyM2wtNS45NzQgNi45N2EuODUuODUgMCAwIDEtLjU1MS4yNy43NjQuNzY0IDAgMCAxLS43OTktLjc1NHYtLjAyM2MwLS4xNzQuMDY3LS4zNDkuMTg2LS40OWw3LjMxMi04LjU2NmEuODcuODcgMCAwIDEgLjY1My0uMjkzLjg0Ljg0IDAgMCAxIC44NDkuODI3djguNDgzYS44My44MyAwIDAgMS0uODQ0LjgxNS44MjQuODI0IDAgMCAxLS44MzItLjgxNSIvPgo8L3N2Zz4K) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xMiAyMWE5IDkgMCAxIDAgMC0xOCA5IDkgMCAwIDAgMCAxOG0xLjY5OS00Ljc1M1Y5LjgyM2wtNS45NzQgNi45N2EuODUuODUgMCAwIDEtLjU1MS4yNy43NjQuNzY0IDAgMCAxLS43OTktLjc1NHYtLjAyM2MwLS4xNzQuMDY3LS4zNDkuMTg2LS40OWw3LjMxMi04LjU2NmEuODcuODcgMCAwIDEgLjY1My0uMjkzLjg0Ljg0IDAgMCAxIC44NDkuODI3djguNDgzYS44My44MyAwIDAgMS0uODQ0LjgxNS44MjQuODI0IDAgMCAxLS44MzItLjgxNSIvPgo8L3N2Zz4K) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNBSU9aX19hKSI+CiAgICAgICAgPHBhdGggZmlsbD0iIzAwMCIgZD0iTTI0IDBIMHYyNGgyNHoiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTIgMjBhOCA4IDAgMSAwIDAtMTYgOCA4IDAgMCAwIDAgMTZtMS41MS00LjIyNXYtNS43MUw4LjIgMTYuMjZhLjc1Ljc1IDAgMCAxLS40OS4yNC42OC42OCAwIDAgMS0uNzEtLjY3di0uMDJjMC0uMTU1LjA2LS4zMS4xNjUtLjQzNWw2LjUtNy42MTVhLjc3Ljc3IDAgMCAxIC41OC0uMjZjLjQxNSAwIC43NTUuMzMuNzU1LjczNXY3LjU0YzAgLjQtLjMzNS43MjUtLjc1LjcyNWEuNzMuNzMgMCAwIDEtLjc0LS43MjUiLz4KICAgIDwvZz4KICAgIDxkZWZzPgogICAgICAgIDxjbGlwUGF0aCBpZD0iQUlPWl9fYSI+CiAgICAgICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0wIDBoMjR2MjRIMHoiLz4KICAgICAgICA8L2NsaXBQYXRoPgogICAgPC9kZWZzPgo8L3N2Zz4K)
 * @see https://web3icons.io/tokens/AIOZ
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenAIOZ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenAIOZ', __iconNode);
;
}),
];

//# sourceMappingURL=1qqr_%40web3icons_react_dist_1ktg3um._.js.map