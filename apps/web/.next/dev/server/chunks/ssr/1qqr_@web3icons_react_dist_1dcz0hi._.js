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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenTXAU.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenTXAU
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-ssr] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#E3BA4F',
                d: 'M20.47 12a8.47 8.47 0 1 1-16.94 0 8.47 8.47 0 0 1 16.94 0m.53 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0m-8.47 4.765v-1.06h-1.06c-1.27 0-1.588-1.058-1.588-1.587V9.353c0-.847 1.06-1.059 1.588-1.059h1.06c1.27 0 1.588 1.059 1.588 1.588v.53h1.588v-1.06c0-1.693-2.118-2.117-3.176-2.117h-1.06c-2.54 0-3.176 1.414-3.176 2.118v4.765c0 2.117 2.118 2.647 3.176 2.647zM15.706 12H12v1.059h2.118v3.706h1.588z',
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
                d: 'M20.47 12a8.47 8.47 0 1 1-16.94 0 8.47 8.47 0 0 1 16.94 0m.53 0a9 9 0 1 1-17.999 0A9 9 0 0 1 21 12m-8.47 4.765v-1.06h-1.06c-1.27 0-1.588-1.058-1.588-1.587V9.353c0-.847 1.06-1.059 1.589-1.059h1.058c1.271 0 1.589 1.059 1.589 1.588v.53h1.588v-1.06c0-1.693-2.118-2.117-3.177-2.117h-1.058c-2.542 0-3.177 1.414-3.177 2.118v4.765c0 2.117 2.118 2.647 3.177 2.647zM15.705 12H12v1.059h2.118v3.706h1.588z',
                fillRule: 'evenodd',
                clipRule: 'evenodd'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#TXAU__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#E3BA4F',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M19.53 12a7.53 7.53 0 1 1-15.06 0 7.53 7.53 0 0 1 15.06 0m.47 0a8 8 0 1 1-16 0 8 8 0 0 1 16 0m-7.53 4.235v-.94h-.94c-1.13 0-1.412-.942-1.412-1.413V9.647c0-.753.94-.941 1.411-.941h.942c1.129 0 1.411.941 1.411 1.412v.47h1.412v-.94c0-1.507-1.882-1.883-2.823-1.883h-.942c-2.258 0-2.823 1.256-2.823 1.882v4.235c0 1.883 1.882 2.353 2.823 2.353zM15.295 12H12v.941h1.882v3.294h1.412z',
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
                        id: 'TXAU__a'
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
 * @component @name TokenTXAU
 * @description Web3Icon for TokenTXAU
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNFM0JBNEYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTIwLjQ3IDEyYTguNDcgOC40NyAwIDEgMS0xNi45NCAwIDguNDcgOC40NyAwIDAgMSAxNi45NCAwbS41MyAwYTkgOSAwIDEgMS0xOCAwIDkgOSAwIDAgMSAxOCAwbS04LjQ3IDQuNzY1di0xLjA2aC0xLjA2Yy0xLjI3IDAtMS41ODgtMS4wNTgtMS41ODgtMS41ODdWOS4zNTNjMC0uODQ3IDEuMDYtMS4wNTkgMS41ODgtMS4wNTloMS4wNmMxLjI3IDAgMS41ODggMS4wNTkgMS41ODggMS41ODh2LjUzaDEuNTg4di0xLjA2YzAtMS42OTMtMi4xMTgtMi4xMTctMy4xNzYtMi4xMTdoLTEuMDZjLTIuNTQgMC0zLjE3NiAxLjQxNC0zLjE3NiAyLjExOHY0Ljc2NWMwIDIuMTE3IDIuMTE4IDIuNjQ3IDMuMTc2IDIuNjQ3ek0xNS43MDYgMTJIMTJ2MS4wNTloMi4xMTh2My43MDZoMS41ODh6IiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+Cg==) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTIwLjQ3IDEyYTguNDcgOC40NyAwIDEgMS0xNi45NCAwIDguNDcgOC40NyAwIDAgMSAxNi45NCAwbS41MyAwYTkgOSAwIDEgMS0xNy45OTkgMEE5IDkgMCAwIDEgMjEgMTJtLTguNDcgNC43NjV2LTEuMDZoLTEuMDZjLTEuMjcgMC0xLjU4OC0xLjA1OC0xLjU4OC0xLjU4N1Y5LjM1M2MwLS44NDcgMS4wNi0xLjA1OSAxLjU4OS0xLjA1OWgxLjA1OGMxLjI3MSAwIDEuNTg5IDEuMDU5IDEuNTg5IDEuNTg4di41M2gxLjU4OHYtMS4wNmMwLTEuNjkzLTIuMTE4LTIuMTE3LTMuMTc3LTIuMTE3aC0xLjA1OGMtMi41NDIgMC0zLjE3NyAxLjQxNC0zLjE3NyAyLjExOHY0Ljc2NWMwIDIuMTE3IDIuMTE4IDIuNjQ3IDMuMTc3IDIuNjQ3ek0xNS43MDUgMTJIMTJ2MS4wNTloMi4xMTh2My43MDZoMS41ODh6IiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+Cg==) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNUWEFVX19hKSI+CiAgICAgICAgPHBhdGggZmlsbD0iI0UzQkE0RiIgZD0iTTI0IDBIMHYyNGgyNHoiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xOS41MyAxMmE3LjUzIDcuNTMgMCAxIDEtMTUuMDYgMCA3LjUzIDcuNTMgMCAwIDEgMTUuMDYgMG0uNDcgMGE4IDggMCAxIDEtMTYgMCA4IDggMCAwIDEgMTYgMG0tNy41MyA0LjIzNXYtLjk0aC0uOTRjLTEuMTMgMC0xLjQxMi0uOTQyLTEuNDEyLTEuNDEzVjkuNjQ3YzAtLjc1My45NC0uOTQxIDEuNDExLS45NDFoLjk0MmMxLjEyOSAwIDEuNDExLjk0MSAxLjQxMSAxLjQxMnYuNDdoMS40MTJ2LS45NGMwLTEuNTA3LTEuODgyLTEuODgzLTIuODIzLTEuODgzaC0uOTQyYy0yLjI1OCAwLTIuODIzIDEuMjU2LTIuODIzIDEuODgydjQuMjM1YzAgMS44ODMgMS44ODIgMi4zNTMgMi44MjMgMi4zNTN6TTE1LjI5NSAxMkgxMnYuOTQxaDEuODgydjMuMjk0aDEuNDEyeiIgY2xpcC1ydWxlPSJldmVub2RkIi8+CiAgICA8L2c+CiAgICA8ZGVmcz4KICAgICAgICA8Y2xpcFBhdGggaWQ9IlRYQVVfX2EiPgogICAgICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMCAwaDI0djI0SDB6Ii8+CiAgICAgICAgPC9jbGlwUGF0aD4KICAgIDwvZGVmcz4KPC9zdmc+Cg==)
 * @see https://web3icons.io/tokens/TXAU
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenTXAU = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenTXAU', __iconNode);
;
}),
];

//# sourceMappingURL=1qqr_%40web3icons_react_dist_1dcz0hi._.js.map