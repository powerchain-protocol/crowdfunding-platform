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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenDFI.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenDFI
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-ssr] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#FF00AF',
                d: 'M14.253 18.709V5.29c2.89.863 4.501 3.544 4.501 6.709s-1.612 5.847-4.5 6.709M11.998 3v7.585l-1.143-1.142-.147-2.851 1.193-3.587a9 9 0 0 0-2.21.304l-.576 1.734-1.635-.82a9 9 0 0 0-1.776 1.348L8.73 7.088l.089 1.735-1.736-.089-1.517-3.026a9 9 0 0 0-1.348 1.776l.82 1.634-1.735.576A9 9 0 0 0 3 11.904l3.588-1.193 2.852.146L10.583 12 9.44 13.143l-2.852.146L3 12.097a9 9 0 0 0 .304 2.209l1.735.576-.82 1.634a9 9 0 0 0 1.348 1.776l1.517-3.026 1.736-.09-.089 1.736-3.027 1.517c.534.52 1.131.973 1.776 1.348l1.635-.82.577 1.734a9 9 0 0 0 2.208.304l-1.192-3.587.147-2.852 1.143-1.141V21a9.001 9.001 0 1 0 0-18'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M14.253 18.709V5.29c2.89.863 4.501 3.544 4.501 6.709s-1.612 5.846-4.5 6.709M11.998 3v7.585l-1.143-1.142-.146-2.851L11.9 3.005a9 9 0 0 0-2.21.304l-.576 1.734-1.635-.82a9 9 0 0 0-1.776 1.348L8.73 7.088l.089 1.735-1.736-.089-1.517-3.026a9 9 0 0 0-1.348 1.776l.82 1.634-1.735.576A9 9 0 0 0 3 11.904l3.588-1.193 2.852.146L10.583 12 9.44 13.143l-2.852.146L3 12.097a9 9 0 0 0 .304 2.209l1.735.576-.82 1.634a9 9 0 0 0 1.348 1.776l1.517-3.026 1.736-.09-.089 1.736-3.027 1.517c.534.52 1.131.973 1.776 1.348l1.635-.82.577 1.734a9 9 0 0 0 2.208.304l-1.191-3.587.146-2.852 1.143-1.141V21a9.001 9.001 0 1 0 0-18'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#DFI__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#FF00AF',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M14.003 17.963V6.036c2.568.767 4 3.15 4 5.964 0 2.813-1.432 5.197-4 5.963M11.998 4v6.743l-1.016-1.016-.13-2.535 1.06-3.187a8 8 0 0 0-1.964.27l-.513 1.541-1.453-.728a8 8 0 0 0-1.579 1.197l2.691 1.348.079 1.543-1.543-.079-1.349-2.69a8 8 0 0 0-1.198 1.579l.73 1.452-1.543.513A8 8 0 0 0 4 11.914l3.19-1.06 2.535.13L10.74 12l-1.015 1.016-2.536.13L4 12.085a8 8 0 0 0 .27 1.963l1.543.512-.73 1.453a8 8 0 0 0 1.198 1.579l1.35-2.69 1.542-.08-.079 1.543-2.69 1.349a8 8 0 0 0 1.578 1.198l1.453-.73.513 1.542a8 8 0 0 0 1.963.27l-1.059-3.187.13-2.535 1.016-1.016V20A8 8 0 0 0 20 12c0-4.418-3.583-8-8.002-8'
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
                        id: 'DFI__a'
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
 * @component @name TokenDFI
 * @description Web3Icon for TokenDFI
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNGRjAwQUYiIGQ9Ik0xNC4yNTMgMTguNzA5VjUuMjljMi44OS44NjMgNC41MDEgMy41NDQgNC41MDEgNi43MDlzLTEuNjEyIDUuODQ3LTQuNSA2LjcwOU0xMS45OTggM3Y3LjU4NWwtMS4xNDMtMS4xNDItLjE0Ny0yLjg1MSAxLjE5My0zLjU4N2E5IDkgMCAwIDAtMi4yMS4zMDRsLS41NzYgMS43MzQtMS42MzUtLjgyYTkgOSAwIDAgMC0xLjc3NiAxLjM0OEw4LjczIDcuMDg4bC4wODkgMS43MzUtMS43MzYtLjA4OS0xLjUxNy0zLjAyNmE5IDkgMCAwIDAtMS4zNDggMS43NzZsLjgyIDEuNjM0LTEuNzM1LjU3NkE5IDkgMCAwIDAgMyAxMS45MDRsMy41ODgtMS4xOTMgMi44NTIuMTQ2TDEwLjU4MyAxMiA5LjQ0IDEzLjE0M2wtMi44NTIuMTQ2TDMgMTIuMDk3YTkgOSAwIDAgMCAuMzA0IDIuMjA5bDEuNzM1LjU3Ni0uODIgMS42MzRhOSA5IDAgMCAwIDEuMzQ4IDEuNzc2bDEuNTE3LTMuMDI2IDEuNzM2LS4wOS0uMDg5IDEuNzM2LTMuMDI3IDEuNTE3Yy41MzQuNTIgMS4xMzEuOTczIDEuNzc2IDEuMzQ4bDEuNjM1LS44Mi41NzcgMS43MzRhOSA5IDAgMCAwIDIuMjA4LjMwNGwtMS4xOTItMy41ODcuMTQ3LTIuODUyIDEuMTQzLTEuMTQxVjIxYTkuMDAxIDkuMDAxIDAgMSAwIDAtMTgiLz4KPC9zdmc+Cg==) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xNC4yNTMgMTguNzA5VjUuMjljMi44OS44NjMgNC41MDEgMy41NDQgNC41MDEgNi43MDlzLTEuNjEyIDUuODQ2LTQuNSA2LjcwOU0xMS45OTggM3Y3LjU4NWwtMS4xNDMtMS4xNDItLjE0Ni0yLjg1MUwxMS45IDMuMDA1YTkgOSAwIDAgMC0yLjIxLjMwNGwtLjU3NiAxLjczNC0xLjYzNS0uODJhOSA5IDAgMCAwLTEuNzc2IDEuMzQ4TDguNzMgNy4wODhsLjA4OSAxLjczNS0xLjczNi0uMDg5LTEuNTE3LTMuMDI2YTkgOSAwIDAgMC0xLjM0OCAxLjc3NmwuODIgMS42MzQtMS43MzUuNTc2QTkgOSAwIDAgMCAzIDExLjkwNGwzLjU4OC0xLjE5MyAyLjg1Mi4xNDZMMTAuNTgzIDEyIDkuNDQgMTMuMTQzbC0yLjg1Mi4xNDZMMyAxMi4wOTdhOSA5IDAgMCAwIC4zMDQgMi4yMDlsMS43MzUuNTc2LS44MiAxLjYzNGE5IDkgMCAwIDAgMS4zNDggMS43NzZsMS41MTctMy4wMjYgMS43MzYtLjA5LS4wODkgMS43MzYtMy4wMjcgMS41MTdjLjUzNC41MiAxLjEzMS45NzMgMS43NzYgMS4zNDhsMS42MzUtLjgyLjU3NyAxLjczNGE5IDkgMCAwIDAgMi4yMDguMzA0bC0xLjE5MS0zLjU4Ny4xNDYtMi44NTIgMS4xNDMtMS4xNDFWMjFhOS4wMDEgOS4wMDEgMCAxIDAgMC0xOCIvPgo8L3N2Zz4K) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNERklfX2EpIj4KICAgICAgICA8cGF0aCBmaWxsPSIjRkYwMEFGIiBkPSJNMjQgMEgwdjI0aDI0eiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xNC4wMDMgMTcuOTYzVjYuMDM2YzIuNTY4Ljc2NyA0IDMuMTUgNCA1Ljk2NCAwIDIuODEzLTEuNDMyIDUuMTk3LTQgNS45NjNNMTEuOTk4IDR2Ni43NDNsLTEuMDE2LTEuMDE2LS4xMy0yLjUzNSAxLjA2LTMuMTg3YTggOCAwIDAgMC0xLjk2NC4yN2wtLjUxMyAxLjU0MS0xLjQ1My0uNzI4YTggOCAwIDAgMC0xLjU3OSAxLjE5N2wyLjY5MSAxLjM0OC4wNzkgMS41NDMtMS41NDMtLjA3OS0xLjM0OS0yLjY5YTggOCAwIDAgMC0xLjE5OCAxLjU3OWwuNzMgMS40NTItMS41NDMuNTEzQTggOCAwIDAgMCA0IDExLjkxNGwzLjE5LTEuMDYgMi41MzUuMTNMMTAuNzQgMTJsLTEuMDE1IDEuMDE2LTIuNTM2LjEzTDQgMTIuMDg1YTggOCAwIDAgMCAuMjcgMS45NjNsMS41NDMuNTEyLS43MyAxLjQ1M2E4IDggMCAwIDAgMS4xOTggMS41NzlsMS4zNS0yLjY5IDEuNTQyLS4wOC0uMDc5IDEuNTQzLTIuNjkgMS4zNDlhOCA4IDAgMCAwIDEuNTc4IDEuMTk4bDEuNDUzLS43My41MTMgMS41NDJhOCA4IDAgMCAwIDEuOTYzLjI3bC0xLjA1OS0zLjE4Ny4xMy0yLjUzNSAxLjAxNi0xLjAxNlYyMEE4IDggMCAwIDAgMjAgMTJjMC00LjQxOC0zLjU4My04LTguMDAyLTgiLz4KICAgIDwvZz4KICAgIDxkZWZzPgogICAgICAgIDxjbGlwUGF0aCBpZD0iREZJX19hIj4KICAgICAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTAgMGgyNHYyNEgweiIvPgogICAgICAgIDwvY2xpcFBhdGg+CiAgICA8L2RlZnM+Cjwvc3ZnPgo=)
 * @see https://web3icons.io/tokens/DFI
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenDFI = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenDFI', __iconNode);
;
}),
];

//# sourceMappingURL=1qqr_%40web3icons_react_dist_0fd95ln._.js.map