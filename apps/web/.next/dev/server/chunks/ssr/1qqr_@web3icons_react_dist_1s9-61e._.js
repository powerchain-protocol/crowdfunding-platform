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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenPRIME.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenPRIME
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-ssr] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#ED1651',
                d: 'M13.5 4h-3v8.75l1.5.75 1.5-.75zM6 8.5H3l.95 4.27a.5.5 0 0 0 .265.335l2.23 1.12A1 1 0 0 1 7 15.12v3.38l3.5 1.5v-4.25l-2.8-1.29a1 1 0 0 1-.555-.7zM13.5 20v-4.25l2.8-1.29a1 1 0 0 0 .555-.7L18 8.5h3l-.95 4.27a.5.5 0 0 1-.265.335l-2.23 1.12a1 1 0 0 0-.555.895v3.38z'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M13.5 4h-3v8.75l1.5.75 1.5-.75zM6 8.5H3l.95 4.27a.5.5 0 0 0 .265.335l2.23 1.12A1 1 0 0 1 7 15.12v3.38l3.5 1.5v-4.25l-2.8-1.29a1 1 0 0 1-.555-.7zM13.5 20v-4.25l2.8-1.29a1 1 0 0 0 .555-.7L18 8.5h3l-.95 4.27a.5.5 0 0 1-.265.335l-2.23 1.12a1 1 0 0 0-.555.895v3.38z'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#PRIME__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#ED1651',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M13.333 4.889h-2.666v7.777l1.333.667 1.333-.667zm-6.666 4H4l.844 3.795a.45.45 0 0 0 .236.298l1.982.996a.89.89 0 0 1 .494.795v3.005l3.11 1.333v-3.778l-2.488-1.147a.89.89 0 0 1-.494-.622zm6.666 10.222v-3.778l2.49-1.147a.89.89 0 0 0 .493-.622l1.017-4.675H20l-.844 3.795a.45.45 0 0 1-.236.298l-1.982.996a.89.89 0 0 0-.494.795v3.005z'
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
                        id: 'PRIME__a'
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
 * @component @name TokenPRIME
 * @description Web3Icon for TokenPRIME
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNFRDE2NTEiIGQ9Ik0xMy41IDRoLTN2OC43NWwxLjUuNzUgMS41LS43NXpNNiA4LjVIM2wuOTUgNC4yN2EuNS41IDAgMCAwIC4yNjUuMzM1bDIuMjMgMS4xMkExIDEgMCAwIDEgNyAxNS4xMnYzLjM4bDMuNSAxLjV2LTQuMjVsLTIuOC0xLjI5YTEgMSAwIDAgMS0uNTU1LS43ek0xMy41IDIwdi00LjI1bDIuOC0xLjI5YTEgMSAwIDAgMCAuNTU1LS43TDE4IDguNWgzbC0uOTUgNC4yN2EuNS41IDAgMCAxLS4yNjUuMzM1bC0yLjIzIDEuMTJhMSAxIDAgMCAwLS41NTUuODk1djMuMzh6Ii8+Cjwvc3ZnPgo=) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xMy41IDRoLTN2OC43NWwxLjUuNzUgMS41LS43NXpNNiA4LjVIM2wuOTUgNC4yN2EuNS41IDAgMCAwIC4yNjUuMzM1bDIuMjMgMS4xMkExIDEgMCAwIDEgNyAxNS4xMnYzLjM4bDMuNSAxLjV2LTQuMjVsLTIuOC0xLjI5YTEgMSAwIDAgMS0uNTU1LS43ek0xMy41IDIwdi00LjI1bDIuOC0xLjI5YTEgMSAwIDAgMCAuNTU1LS43TDE4IDguNWgzbC0uOTUgNC4yN2EuNS41IDAgMCAxLS4yNjUuMzM1bC0yLjIzIDEuMTJhMSAxIDAgMCAwLS41NTUuODk1djMuMzh6Ii8+Cjwvc3ZnPgo=) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNQUklNRV9fYSkiPgogICAgICAgIDxwYXRoIGZpbGw9IiNFRDE2NTEiIGQ9Ik0yNCAwSDB2MjRoMjR6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTEzLjMzMyA0Ljg4OWgtMi42NjZ2Ny43NzdsMS4zMzMuNjY3IDEuMzMzLS42Njd6bS02LjY2NiA0SDRsLjg0NCAzLjc5NWEuNDUuNDUgMCAwIDAgLjIzNi4yOThsMS45ODIuOTk2YS44OS44OSAwIDAgMSAuNDk0Ljc5NXYzLjAwNWwzLjExIDEuMzMzdi0zLjc3OGwtMi40ODgtMS4xNDdhLjg5Ljg5IDAgMCAxLS40OTQtLjYyMnptNi42NjYgMTAuMjIydi0zLjc3OGwyLjQ5LTEuMTQ3YS44OS44OSAwIDAgMCAuNDkzLS42MjJsMS4wMTctNC42NzVIMjBsLS44NDQgMy43OTVhLjQ1LjQ1IDAgMCAxLS4yMzYuMjk4bC0xLjk4Mi45OTZhLjg5Ljg5IDAgMCAwLS40OTQuNzk1djMuMDA1eiIvPgogICAgPC9nPgogICAgPGRlZnM+CiAgICAgICAgPGNsaXBQYXRoIGlkPSJQUklNRV9fYSI+CiAgICAgICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0wIDBoMjR2MjRIMHoiLz4KICAgICAgICA8L2NsaXBQYXRoPgogICAgPC9kZWZzPgo8L3N2Zz4K)
 * @see https://web3icons.io/tokens/PRIME
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenPRIME = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenPRIME', __iconNode);
;
}),
];

//# sourceMappingURL=1qqr_%40web3icons_react_dist_1s9-61e._.js.map