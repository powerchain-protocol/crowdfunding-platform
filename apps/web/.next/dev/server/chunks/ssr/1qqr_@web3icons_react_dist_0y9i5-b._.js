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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenZYN.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenZYN
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-ssr] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#F8B003',
                d: 'm17.288 3-2.115 3.375h4.156l-5.36 8.438h1.507l2.205-3.376h2.588l-3.42 5.626h-4.303L10.048 21h-2.53l2.463-3.937H5.83l5.293-8.438h-1.53l-2.42 3.735-3.442-5.456L6.268 3h11.025zm-9.86 2.25L6.335 6.937l.838 1.35 1.249-1.912h4.112l.708-1.125zm6.31 3.375-3.943 6.188h1.598l3.875-6.188z'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'm17.288 3-2.115 3.375h4.156l-5.36 8.438h1.507l2.205-3.376h2.588l-3.42 5.626h-4.303L10.048 21h-2.53l2.463-3.937H5.83l5.293-8.438h-1.53l-2.42 3.735-3.442-5.456L6.268 3h11.025zm-9.86 2.25L6.335 6.937l.838 1.35 1.249-1.912h4.112l.708-1.125zm6.31 3.375-3.943 6.188h1.598l3.875-6.188z'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#ZYN__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#F8B003',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'm16.7 4-1.88 3h3.695l-4.765 7.5h1.34l1.96-3h2.3l-3.04 5h-3.825l-2.22 3.5h-2.25l2.19-3.5h-3.69L11.22 9H9.86l-2.15 3.32-3.06-4.85L6.905 4h9.8zM7.935 6l-.97 1.5.745 1.2L8.82 7h3.655l.63-1zm5.61 3-3.505 5.5h1.42L14.905 9z'
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
                        id: 'ZYN__a'
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
 * @component @name TokenZYN
 * @description Web3Icon for TokenZYN
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNGOEIwMDMiIGQ9Im0xNy4yODggMy0yLjExNSAzLjM3NWg0LjE1NmwtNS4zNiA4LjQzOGgxLjUwN2wyLjIwNS0zLjM3NmgyLjU4OGwtMy40MiA1LjYyNmgtNC4zMDNMMTAuMDQ4IDIxaC0yLjUzbDIuNDYzLTMuOTM3SDUuODNsNS4yOTMtOC40MzhoLTEuNTNsLTIuNDIgMy43MzUtMy40NDItNS40NTZMNi4yNjggM2gxMS4wMjV6bS05Ljg2IDIuMjVMNi4zMzUgNi45MzdsLjgzOCAxLjM1IDEuMjQ5LTEuOTEyaDQuMTEybC43MDgtMS4xMjV6bTYuMzEgMy4zNzUtMy45NDMgNi4xODhoMS41OThsMy44NzUtNi4xODh6Ii8+Cjwvc3ZnPgo=) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Im0xNy4yODggMy0yLjExNSAzLjM3NWg0LjE1NmwtNS4zNiA4LjQzOGgxLjUwN2wyLjIwNS0zLjM3NmgyLjU4OGwtMy40MiA1LjYyNmgtNC4zMDNMMTAuMDQ4IDIxaC0yLjUzbDIuNDYzLTMuOTM3SDUuODNsNS4yOTMtOC40MzhoLTEuNTNsLTIuNDIgMy43MzUtMy40NDItNS40NTZMNi4yNjggM2gxMS4wMjV6bS05Ljg2IDIuMjVMNi4zMzUgNi45MzdsLjgzOCAxLjM1IDEuMjQ5LTEuOTEyaDQuMTEybC43MDgtMS4xMjV6bTYuMzEgMy4zNzUtMy45NDMgNi4xODhoMS41OThsMy44NzUtNi4xODh6Ii8+Cjwvc3ZnPgo=) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNaWU5fX2EpIj4KICAgICAgICA8cGF0aCBmaWxsPSIjRjhCMDAzIiBkPSJNMjQgMEgwdjI0aDI0eiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Im0xNi43IDQtMS44OCAzaDMuNjk1bC00Ljc2NSA3LjVoMS4zNGwxLjk2LTNoMi4zbC0zLjA0IDVoLTMuODI1bC0yLjIyIDMuNWgtMi4yNWwyLjE5LTMuNWgtMy42OUwxMS4yMiA5SDkuODZsLTIuMTUgMy4zMi0zLjA2LTQuODVMNi45MDUgNGg5Ljh6TTcuOTM1IDZsLS45NyAxLjUuNzQ1IDEuMkw4LjgyIDdoMy42NTVsLjYzLTF6bTUuNjEgMy0zLjUwNSA1LjVoMS40MkwxNC45MDUgOXoiLz4KICAgIDwvZz4KICAgIDxkZWZzPgogICAgICAgIDxjbGlwUGF0aCBpZD0iWllOX19hIj4KICAgICAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTAgMGgyNHYyNEgweiIvPgogICAgICAgIDwvY2xpcFBhdGg+CiAgICA8L2RlZnM+Cjwvc3ZnPgo=)
 * @see https://web3icons.io/tokens/ZYN
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenZYN = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenZYN', __iconNode);
;
}),
];

//# sourceMappingURL=1qqr_%40web3icons_react_dist_0y9i5-b._.js.map