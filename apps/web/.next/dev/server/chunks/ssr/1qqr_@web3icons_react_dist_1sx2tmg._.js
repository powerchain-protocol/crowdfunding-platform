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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenMPLX.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenMPLX
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-ssr] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#fff',
                d: 'M11.89 14.913a.42.42 0 0 0 .017-.442l-4.81-8.542a.38.38 0 0 0-.328-.201H3.387c-.3 0-.485.343-.332.616L9.37 17.722a.38.38 0 0 0 .654.027zm8.728 3.36c.295 0 .48-.344.327-.611l-6.49-11.733a.38.38 0 0 0-.339-.201h-3.37c-.295 0-.48.343-.328.616l6.513 11.727a.38.38 0 0 0 .327.202zm-14.563-.726c.147.273-.039.726-.339.726H3.404c-.218 0-.404-.295-.404-.518v-4.118c0-.415.535-.568.736-.208l2.313 4.118z'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M11.89 14.913a.42.42 0 0 0 .017-.442l-4.81-8.542a.38.38 0 0 0-.328-.201H3.387c-.3 0-.485.343-.332.616L9.37 17.722a.38.38 0 0 0 .654.027zm8.728 3.36c.295 0 .48-.344.327-.611l-6.49-11.733a.38.38 0 0 0-.339-.201h-3.37c-.295 0-.48.343-.328.616l6.513 11.727a.38.38 0 0 0 .327.202zm-14.563-.726c.147.273-.039.726-.339.726H3.404c-.218 0-.404-.295-.404-.518v-4.118c0-.415.535-.568.736-.208l2.313 4.118z'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#MPLX__a)'
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
                        d: 'M11.903 14.589a.38.38 0 0 0 .014-.393L7.641 6.603a.34.34 0 0 0-.29-.18H4.343c-.266 0-.431.306-.295.549l5.614 10.113c.13.228.436.243.582.025zm7.757 2.986c.262 0 .427-.305.291-.543l-5.77-10.429a.34.34 0 0 0-.3-.18h-2.996c-.262 0-.427.306-.291.549l5.789 10.424a.34.34 0 0 0 .29.18zM6.715 16.93c.131.243-.034.645-.3.645H4.359c-.194 0-.359-.262-.359-.46v-3.661c0-.369.475-.504.655-.184l2.055 3.66z'
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
                        id: 'MPLX__a'
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
 * @component @name TokenMPLX
 * @description Web3Icon for TokenMPLX
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xMS44OSAxNC45MTNhLjQyLjQyIDAgMCAwIC4wMTctLjQ0MmwtNC44MS04LjU0MmEuMzguMzggMCAwIDAtLjMyOC0uMjAxSDMuMzg3Yy0uMyAwLS40ODUuMzQzLS4zMzIuNjE2TDkuMzcgMTcuNzIyYS4zOC4zOCAwIDAgMCAuNjU0LjAyN3ptOC43MjggMy4zNmMuMjk1IDAgLjQ4LS4zNDQuMzI3LS42MTFsLTYuNDktMTEuNzMzYS4zOC4zOCAwIDAgMC0uMzM5LS4yMDFoLTMuMzdjLS4yOTUgMC0uNDguMzQzLS4zMjguNjE2bDYuNTEzIDExLjcyN2EuMzguMzggMCAwIDAgLjMyNy4yMDJ6bS0xNC41NjMtLjcyNmMuMTQ3LjI3My0uMDM5LjcyNi0uMzM5LjcyNkgzLjQwNGMtLjIxOCAwLS40MDQtLjI5NS0uNDA0LS41MTh2LTQuMTE4YzAtLjQxNS41MzUtLjU2OC43MzYtLjIwOGwyLjMxMyA0LjExOHoiLz4KPC9zdmc+Cg==) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xMS44OSAxNC45MTNhLjQyLjQyIDAgMCAwIC4wMTctLjQ0MmwtNC44MS04LjU0MmEuMzguMzggMCAwIDAtLjMyOC0uMjAxSDMuMzg3Yy0uMyAwLS40ODUuMzQzLS4zMzIuNjE2TDkuMzcgMTcuNzIyYS4zOC4zOCAwIDAgMCAuNjU0LjAyN3ptOC43MjggMy4zNmMuMjk1IDAgLjQ4LS4zNDQuMzI3LS42MTFsLTYuNDktMTEuNzMzYS4zOC4zOCAwIDAgMC0uMzM5LS4yMDFoLTMuMzdjLS4yOTUgMC0uNDguMzQzLS4zMjguNjE2bDYuNTEzIDExLjcyN2EuMzguMzggMCAwIDAgLjMyNy4yMDJ6bS0xNC41NjMtLjcyNmMuMTQ3LjI3My0uMDM5LjcyNi0uMzM5LjcyNkgzLjQwNGMtLjIxOCAwLS40MDQtLjI5NS0uNDA0LS41MTh2LTQuMTE4YzAtLjQxNS41MzUtLjU2OC43MzYtLjIwOGwyLjMxMyA0LjExOHoiLz4KPC9zdmc+Cg==) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNNUExYX19hKSI+CiAgICAgICAgPHBhdGggZmlsbD0iIzAwMCIgZD0iTTI0IDBIMHYyNGgyNHoiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTEuOTAzIDE0LjU4OWEuMzguMzggMCAwIDAgLjAxNC0uMzkzTDcuNjQxIDYuNjAzYS4zNC4zNCAwIDAgMC0uMjktLjE4SDQuMzQzYy0uMjY2IDAtLjQzMS4zMDYtLjI5NS41NDlsNS42MTQgMTAuMTEzYy4xMy4yMjguNDM2LjI0My41ODIuMDI1em03Ljc1NyAyLjk4NmMuMjYyIDAgLjQyNy0uMzA1LjI5MS0uNTQzbC01Ljc3LTEwLjQyOWEuMzQuMzQgMCAwIDAtLjMtLjE4aC0yLjk5NmMtLjI2MiAwLS40MjcuMzA2LS4yOTEuNTQ5bDUuNzg5IDEwLjQyNGEuMzQuMzQgMCAwIDAgLjI5LjE4ek02LjcxNSAxNi45M2MuMTMxLjI0My0uMDM0LjY0NS0uMy42NDVINC4zNTljLS4xOTQgMC0uMzU5LS4yNjItLjM1OS0uNDZ2LTMuNjYxYzAtLjM2OS40NzUtLjUwNC42NTUtLjE4NGwyLjA1NSAzLjY2eiIvPgogICAgPC9nPgogICAgPGRlZnM+CiAgICAgICAgPGNsaXBQYXRoIGlkPSJNUExYX19hIj4KICAgICAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTAgMGgyNHYyNEgweiIvPgogICAgICAgIDwvY2xpcFBhdGg+CiAgICA8L2RlZnM+Cjwvc3ZnPgo=)
 * @see https://web3icons.io/tokens/MPLX
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenMPLX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenMPLX', __iconNode);
;
}),
];

//# sourceMappingURL=1qqr_%40web3icons_react_dist_1sx2tmg._.js.map