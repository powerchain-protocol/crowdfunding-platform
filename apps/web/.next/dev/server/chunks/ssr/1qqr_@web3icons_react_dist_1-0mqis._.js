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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenTOR.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenTOR
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-ssr] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#BE7C40',
                d: 'M6.602 5.716a1.406 1.406 0 1 0-.787.068v2.755l5.527-3.689-.85 6.331-6.927 3.88 6.67 2.474-1.514 1.012a1.406 1.406 0 1 0 .394.596l2.57-1.884-6.495-2.361 5.578-3.154 6.669 4.408-1.035-6.702 1.305.663a1.405 1.405 0 1 0 .376-.562L15.48 8.224l1.018 6.562-5.325-3.605 1.023-7.815-5.6 3.936V5.716zm.157-1.31a.664.664 0 1 1-1.327 0 .664.664 0 0 1 1.327 0m12.269 6.848a.663.663 0 1 0 0-1.326.663.663 0 0 0 0 1.326M8.446 19.587a.663.663 0 1 1-1.326 0 .663.663 0 0 1 1.326 0',
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
                d: 'M6.602 5.716a1.406 1.406 0 1 0-.787.068v2.755l5.527-3.689-.85 6.331-6.927 3.88 6.67 2.474-1.514 1.012a1.406 1.406 0 1 0 .394.596l2.57-1.884-6.495-2.361 5.578-3.154 6.669 4.408-1.035-6.702 1.305.663a1.405 1.405 0 1 0 .376-.562L15.48 8.224l1.018 6.562-5.325-3.605 1.023-7.815-5.6 3.936V5.716zm.157-1.31a.664.664 0 1 1-1.327 0 .664.664 0 0 1 1.327 0m12.269 6.848a.663.663 0 1 0 0-1.326.663.663 0 0 0 0 1.326M8.446 19.587a.663.663 0 1 1-1.326 0 .663.663 0 0 1 1.326 0',
                fillRule: 'evenodd',
                clipRule: 'evenodd'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#TOR__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#BE7C40',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M7.202 6.414a1.25 1.25 0 1 0-.7.06v2.45l4.913-3.28-.755 5.628-6.157 3.449 5.928 2.2-1.345.899a1.25 1.25 0 1 0 .35.53l2.284-1.675-5.773-2.099 4.958-2.804 5.928 3.919-.92-5.958 1.16.59a1.249 1.249 0 1 0 .335-.5l-2.314-1.18.904 5.833-4.733-3.204.91-6.947-4.978 3.499v-1.41zm.14-1.164a.59.59 0 1 1-1.18 0 .59.59 0 0 1 1.18 0m10.905 6.087a.59.59 0 1 0 0-1.18.59.59 0 0 0 0 1.18m-9.406 7.407a.59.59 0 1 1-1.18 0 .59.59 0 0 1 1.18 0',
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
                        id: 'TOR__a'
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
 * @component @name TokenTOR
 * @description Web3Icon for TokenTOR
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNCRTdDNDAiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTYuNjAyIDUuNzE2YTEuNDA2IDEuNDA2IDAgMSAwLS43ODcuMDY4djIuNzU1bDUuNTI3LTMuNjg5LS44NSA2LjMzMS02LjkyNyAzLjg4IDYuNjcgMi40NzQtMS41MTQgMS4wMTJhMS40MDYgMS40MDYgMCAxIDAgLjM5NC41OTZsMi41Ny0xLjg4NC02LjQ5NS0yLjM2MSA1LjU3OC0zLjE1NCA2LjY2OSA0LjQwOC0xLjAzNS02LjcwMiAxLjMwNS42NjNhMS40MDUgMS40MDUgMCAxIDAgLjM3Ni0uNTYyTDE1LjQ4IDguMjI0bDEuMDE4IDYuNTYyLTUuMzI1LTMuNjA1IDEuMDIzLTcuODE1LTUuNiAzLjkzNlY1LjcxNnptLjE1Ny0xLjMxYS42NjQuNjY0IDAgMSAxLTEuMzI3IDAgLjY2NC42NjQgMCAwIDEgMS4zMjcgMG0xMi4yNjkgNi44NDhhLjY2My42NjMgMCAxIDAgMC0xLjMyNi42NjMuNjYzIDAgMCAwIDAgMS4zMjZNOC40NDYgMTkuNTg3YS42NjMuNjYzIDAgMSAxLTEuMzI2IDAgLjY2My42NjMgMCAwIDEgMS4zMjYgMCIgY2xpcC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo=) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTYuNjAyIDUuNzE2YTEuNDA2IDEuNDA2IDAgMSAwLS43ODcuMDY4djIuNzU1bDUuNTI3LTMuNjg5LS44NSA2LjMzMS02LjkyNyAzLjg4IDYuNjcgMi40NzQtMS41MTQgMS4wMTJhMS40MDYgMS40MDYgMCAxIDAgLjM5NC41OTZsMi41Ny0xLjg4NC02LjQ5NS0yLjM2MSA1LjU3OC0zLjE1NCA2LjY2OSA0LjQwOC0xLjAzNS02LjcwMiAxLjMwNS42NjNhMS40MDUgMS40MDUgMCAxIDAgLjM3Ni0uNTYyTDE1LjQ4IDguMjI0bDEuMDE4IDYuNTYyLTUuMzI1LTMuNjA1IDEuMDIzLTcuODE1LTUuNiAzLjkzNlY1LjcxNnptLjE1Ny0xLjMxYS42NjQuNjY0IDAgMSAxLTEuMzI3IDAgLjY2NC42NjQgMCAwIDEgMS4zMjcgMG0xMi4yNjkgNi44NDhhLjY2My42NjMgMCAxIDAgMC0xLjMyNi42NjMuNjYzIDAgMCAwIDAgMS4zMjZNOC40NDYgMTkuNTg3YS42NjMuNjYzIDAgMSAxLTEuMzI2IDAgLjY2My42NjMgMCAwIDEgMS4zMjYgMCIgY2xpcC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo=) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNUT1JfX2EpIj4KICAgICAgICA8cGF0aCBmaWxsPSIjQkU3QzQwIiBkPSJNMjQgMEgwdjI0aDI0eiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTcuMjAyIDYuNDE0YTEuMjUgMS4yNSAwIDEgMC0uNy4wNnYyLjQ1bDQuOTEzLTMuMjgtLjc1NSA1LjYyOC02LjE1NyAzLjQ0OSA1LjkyOCAyLjItMS4zNDUuODk5YTEuMjUgMS4yNSAwIDEgMCAuMzUuNTNsMi4yODQtMS42NzUtNS43NzMtMi4wOTkgNC45NTgtMi44MDQgNS45MjggMy45MTktLjkyLTUuOTU4IDEuMTYuNTlhMS4yNDkgMS4yNDkgMCAxIDAgLjMzNS0uNWwtMi4zMTQtMS4xOC45MDQgNS44MzMtNC43MzMtMy4yMDQuOTEtNi45NDctNC45NzggMy40OTl2LTEuNDF6bS4xNC0xLjE2NGEuNTkuNTkgMCAxIDEtMS4xOCAwIC41OS41OSAwIDAgMSAxLjE4IDBtMTAuOTA1IDYuMDg3YS41OS41OSAwIDEgMCAwLTEuMTguNTkuNTkgMCAwIDAgMCAxLjE4bS05LjQwNiA3LjQwN2EuNTkuNTkgMCAxIDEtMS4xOCAwIC41OS41OSAwIDAgMSAxLjE4IDAiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgogICAgPC9nPgogICAgPGRlZnM+CiAgICAgICAgPGNsaXBQYXRoIGlkPSJUT1JfX2EiPgogICAgICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMCAwaDI0djI0SDB6Ii8+CiAgICAgICAgPC9jbGlwUGF0aD4KICAgIDwvZGVmcz4KPC9zdmc+Cg==)
 * @see https://web3icons.io/tokens/TOR
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenTOR = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenTOR', __iconNode);
;
}),
];

//# sourceMappingURL=1qqr_%40web3icons_react_dist_1-0mqis._.js.map