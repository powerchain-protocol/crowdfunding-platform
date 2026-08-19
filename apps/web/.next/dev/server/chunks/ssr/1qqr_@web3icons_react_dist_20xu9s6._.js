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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenPERI.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenPERI
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-ssr] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#14085A',
                d: 'M11.997 21a9.001 9.001 0 1 0-6.85-3.167l2.643-7.537c.112-.276.523-.827 1.237-.827.186.005.625.146.929.59a3.5 3.5 0 0 1 1.338-.309c.726 0 2.307.742 1.857 2.503a39 39 0 0 1-1.317 3.915c.282-.04.99-.304 1.52-1.04.344-.458.622-.962.826-1.497.079-.146.337-.433.81-.433.58 0 .821.534.821.996s-1.3 3.993-5.495 3.993l-.147-.01c-.686-.057-1.946-.158-2.407-.395h-.073L6.9 19.42A9 9 0 0 0 11.997 21m-3.735-5.254c-.135.563.231.675.389.731a.14.14 0 0 1 .061.023c.782 0 1.035-.574 1.064-.86.315-.929.973-2.875 1.051-3.252.096-.467.057-.95-.562-.95-.49 0-.731.404-.799.607-.343 1.012-1.069 3.161-1.204 3.701'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M11.997 21a9.001 9.001 0 1 0-6.85-3.167l2.643-7.537c.112-.276.523-.827 1.237-.827.186.005.625.146.929.59a3.5 3.5 0 0 1 1.338-.309c.726 0 2.307.742 1.857 2.503a39 39 0 0 1-1.317 3.915c.282-.04.99-.304 1.52-1.04a6.1 6.1 0 0 0 .826-1.497c.079-.146.337-.433.81-.433.58 0 .821.534.821.996s-1.3 3.993-5.495 3.993l-.147-.01c-.686-.057-1.946-.158-2.407-.395h-.073L6.9 19.42A9 9 0 0 0 11.997 21m-3.735-5.254c-.135.563.231.675.389.731a.14.14 0 0 1 .061.023c.782 0 1.035-.574 1.064-.86.315-.929.973-2.875 1.051-3.252.096-.467.057-.95-.562-.95-.49 0-.731.404-.799.607-.343 1.012-1.069 3.161-1.204 3.701'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#PERI__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#14085A',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M11.998 20a8 8 0 1 0-6.09-2.815l2.35-6.7c.1-.245.465-.735 1.1-.735.165.005.555.13.825.525a3.2 3.2 0 0 1 1.19-.275c.645 0 2.05.66 1.65 2.225a34 34 0 0 1-1.17 3.48c.25-.035.88-.27 1.35-.925a5.5 5.5 0 0 0 .735-1.33c.07-.13.3-.385.72-.385.515 0 .73.475.73.885s-1.155 3.55-4.885 3.55l-.13-.01c-.61-.05-1.73-.14-2.14-.35h-.065l-.7 1.455A8 8 0 0 0 11.998 20m-3.32-4.67c-.12.5.205.6.345.65.03.005.05.015.055.02.695 0 .92-.51.945-.765.28-.825.865-2.555.935-2.89.085-.415.05-.845-.5-.845-.435 0-.65.36-.71.54-.305.9-.95 2.81-1.07 3.29'
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
                        id: 'PERI__a'
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
 * @component @name TokenPERI
 * @description Web3Icon for TokenPERI
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiMxNDA4NUEiIGQ9Ik0xMS45OTcgMjFhOS4wMDEgOS4wMDEgMCAxIDAtNi44NS0zLjE2N2wyLjY0My03LjUzN2MuMTEyLS4yNzYuNTIzLS44MjcgMS4yMzctLjgyNy4xODYuMDA1LjYyNS4xNDYuOTI5LjU5YTMuNSAzLjUgMCAwIDEgMS4zMzgtLjMwOWMuNzI2IDAgMi4zMDcuNzQyIDEuODU3IDIuNTAzYTM5IDM5IDAgMCAxLTEuMzE3IDMuOTE1Yy4yODItLjA0Ljk5LS4zMDQgMS41Mi0xLjA0LjM0NC0uNDU4LjYyMi0uOTYyLjgyNi0xLjQ5Ny4wNzktLjE0Ni4zMzctLjQzMy44MS0uNDMzLjU4IDAgLjgyMS41MzQuODIxLjk5NnMtMS4zIDMuOTkzLTUuNDk1IDMuOTkzbC0uMTQ3LS4wMWMtLjY4Ni0uMDU3LTEuOTQ2LS4xNTgtMi40MDctLjM5NWgtLjA3M0w2LjkgMTkuNDJBOSA5IDAgMCAwIDExLjk5NyAyMW0tMy43MzUtNS4yNTRjLS4xMzUuNTYzLjIzMS42NzUuMzg5LjczMWEuMTQuMTQgMCAwIDEgLjA2MS4wMjNjLjc4MiAwIDEuMDM1LS41NzQgMS4wNjQtLjg2LjMxNS0uOTI5Ljk3My0yLjg3NSAxLjA1MS0zLjI1Mi4wOTYtLjQ2Ny4wNTctLjk1LS41NjItLjk1LS40OSAwLS43MzEuNDA0LS43OTkuNjA3LS4zNDMgMS4wMTItMS4wNjkgMy4xNjEtMS4yMDQgMy43MDEiLz4KPC9zdmc+Cg==) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xMS45OTcgMjFhOS4wMDEgOS4wMDEgMCAxIDAtNi44NS0zLjE2N2wyLjY0My03LjUzN2MuMTEyLS4yNzYuNTIzLS44MjcgMS4yMzctLjgyNy4xODYuMDA1LjYyNS4xNDYuOTI5LjU5YTMuNSAzLjUgMCAwIDEgMS4zMzgtLjMwOWMuNzI2IDAgMi4zMDcuNzQyIDEuODU3IDIuNTAzYTM5IDM5IDAgMCAxLTEuMzE3IDMuOTE1Yy4yODItLjA0Ljk5LS4zMDQgMS41Mi0xLjA0YTYuMSA2LjEgMCAwIDAgLjgyNi0xLjQ5N2MuMDc5LS4xNDYuMzM3LS40MzMuODEtLjQzMy41OCAwIC44MjEuNTM0LjgyMS45OTZzLTEuMyAzLjk5My01LjQ5NSAzLjk5M2wtLjE0Ny0uMDFjLS42ODYtLjA1Ny0xLjk0Ni0uMTU4LTIuNDA3LS4zOTVoLS4wNzNMNi45IDE5LjQyQTkgOSAwIDAgMCAxMS45OTcgMjFtLTMuNzM1LTUuMjU0Yy0uMTM1LjU2My4yMzEuNjc1LjM4OS43MzFhLjE0LjE0IDAgMCAxIC4wNjEuMDIzYy43ODIgMCAxLjAzNS0uNTc0IDEuMDY0LS44Ni4zMTUtLjkyOS45NzMtMi44NzUgMS4wNTEtMy4yNTIuMDk2LS40NjcuMDU3LS45NS0uNTYyLS45NS0uNDkgMC0uNzMxLjQwNC0uNzk5LjYwNy0uMzQzIDEuMDEyLTEuMDY5IDMuMTYxLTEuMjA0IDMuNzAxIi8+Cjwvc3ZnPgo=) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNQRVJJX19hKSI+CiAgICAgICAgPHBhdGggZmlsbD0iIzE0MDg1QSIgZD0iTTI0IDBIMHYyNGgyNHoiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTEuOTk4IDIwYTggOCAwIDEgMC02LjA5LTIuODE1bDIuMzUtNi43Yy4xLS4yNDUuNDY1LS43MzUgMS4xLS43MzUuMTY1LjAwNS41NTUuMTMuODI1LjUyNWEzLjIgMy4yIDAgMCAxIDEuMTktLjI3NWMuNjQ1IDAgMi4wNS42NiAxLjY1IDIuMjI1YTM0IDM0IDAgMCAxLTEuMTcgMy40OGMuMjUtLjAzNS44OC0uMjcgMS4zNS0uOTI1YTUuNSA1LjUgMCAwIDAgLjczNS0xLjMzYy4wNy0uMTMuMy0uMzg1LjcyLS4zODUuNTE1IDAgLjczLjQ3NS43My44ODVzLTEuMTU1IDMuNTUtNC44ODUgMy41NWwtLjEzLS4wMWMtLjYxLS4wNS0xLjczLS4xNC0yLjE0LS4zNWgtLjA2NWwtLjcgMS40NTVBOCA4IDAgMCAwIDExLjk5OCAyMG0tMy4zMi00LjY3Yy0uMTIuNS4yMDUuNi4zNDUuNjUuMDMuMDA1LjA1LjAxNS4wNTUuMDIuNjk1IDAgLjkyLS41MS45NDUtLjc2NS4yOC0uODI1Ljg2NS0yLjU1NS45MzUtMi44OS4wODUtLjQxNS4wNS0uODQ1LS41LS44NDUtLjQzNSAwLS42NS4zNi0uNzEuNTQtLjMwNS45LS45NSAyLjgxLTEuMDcgMy4yOSIvPgogICAgPC9nPgogICAgPGRlZnM+CiAgICAgICAgPGNsaXBQYXRoIGlkPSJQRVJJX19hIj4KICAgICAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTAgMGgyNHYyNEgweiIvPgogICAgICAgIDwvY2xpcFBhdGg+CiAgICA8L2RlZnM+Cjwvc3ZnPgo=)
 * @see https://web3icons.io/tokens/PERI
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenPERI = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenPERI', __iconNode);
;
}),
];

//# sourceMappingURL=1qqr_%40web3icons_react_dist_20xu9s6._.js.map