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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenSNT.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenSNT
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-ssr] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#5B6DEE',
                d: 'M9.03 10.922a10 10 0 0 0-1.827.154A8.99 8.99 0 0 1 16.093 3c2.795 0 4.71 1.364 4.71 4.203 0 2.828-2.3 4.192-5.656 4.192-2.476 0-3.642-.473-6.117-.473m-.176 1.672c-3.356 0-5.656 1.386-5.656 4.203 0 2.839 1.915 4.203 4.71 4.203a8.99 8.99 0 0 0 8.89-8.076q-.908.161-1.827.154c-2.476 0-3.642-.473-6.117-.473'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M9.03 10.922a10 10 0 0 0-1.827.154A8.99 8.99 0 0 1 16.093 3c2.795 0 4.71 1.364 4.71 4.203 0 2.828-2.3 4.192-5.656 4.192-2.476 0-3.642-.473-6.117-.473m-.176 1.672c-3.356 0-5.656 1.386-5.656 4.203 0 2.839 1.915 4.203 4.71 4.203a8.99 8.99 0 0 0 8.89-8.076q-.908.161-1.827.154c-2.476 0-3.642-.473-6.117-.473'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#SNT__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#5B6DEE',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M9.36 11.042a9 9 0 0 0-1.624.136A7.99 7.99 0 0 1 15.638 4c2.484 0 4.186 1.213 4.186 3.736 0 2.513-2.044 3.726-5.027 3.726-2.2 0-3.237-.42-5.438-.42m-.157 1.486c-2.983 0-5.027 1.233-5.027 3.736C4.176 18.787 5.877 20 8.362 20a7.99 7.99 0 0 0 7.902-7.178q-.806.142-1.624.137c-2.2 0-3.237-.421-5.437-.421'
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
                        id: 'SNT__a'
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
 * @component @name TokenSNT
 * @description Web3Icon for TokenSNT
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiM1QjZERUUiIGQ9Ik05LjAzIDEwLjkyMmExMCAxMCAwIDAgMC0xLjgyNy4xNTRBOC45OSA4Ljk5IDAgMCAxIDE2LjA5MyAzYzIuNzk1IDAgNC43MSAxLjM2NCA0LjcxIDQuMjAzIDAgMi44MjgtMi4zIDQuMTkyLTUuNjU2IDQuMTkyLTIuNDc2IDAtMy42NDItLjQ3My02LjExNy0uNDczbS0uMTc2IDEuNjcyYy0zLjM1NiAwLTUuNjU2IDEuMzg2LTUuNjU2IDQuMjAzIDAgMi44MzkgMS45MTUgNC4yMDMgNC43MSA0LjIwM2E4Ljk5IDguOTkgMCAwIDAgOC44OS04LjA3NnEtLjkwOC4xNjEtMS44MjcuMTU0Yy0yLjQ3NiAwLTMuNjQyLS40NzMtNi4xMTctLjQ3MyIvPgo8L3N2Zz4K) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik05LjAzIDEwLjkyMmExMCAxMCAwIDAgMC0xLjgyNy4xNTRBOC45OSA4Ljk5IDAgMCAxIDE2LjA5MyAzYzIuNzk1IDAgNC43MSAxLjM2NCA0LjcxIDQuMjAzIDAgMi44MjgtMi4zIDQuMTkyLTUuNjU2IDQuMTkyLTIuNDc2IDAtMy42NDItLjQ3My02LjExNy0uNDczbS0uMTc2IDEuNjcyYy0zLjM1NiAwLTUuNjU2IDEuMzg2LTUuNjU2IDQuMjAzIDAgMi44MzkgMS45MTUgNC4yMDMgNC43MSA0LjIwM2E4Ljk5IDguOTkgMCAwIDAgOC44OS04LjA3NnEtLjkwOC4xNjEtMS44MjcuMTU0Yy0yLjQ3NiAwLTMuNjQyLS40NzMtNi4xMTctLjQ3MyIvPgo8L3N2Zz4K) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNTTlRfX2EpIj4KICAgICAgICA8cGF0aCBmaWxsPSIjNUI2REVFIiBkPSJNMjQgMEgwdjI0aDI0eiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik05LjM2IDExLjA0MmE5IDkgMCAwIDAtMS42MjQuMTM2QTcuOTkgNy45OSAwIDAgMSAxNS42MzggNGMyLjQ4NCAwIDQuMTg2IDEuMjEzIDQuMTg2IDMuNzM2IDAgMi41MTMtMi4wNDQgMy43MjYtNS4wMjcgMy43MjYtMi4yIDAtMy4yMzctLjQyLTUuNDM4LS40Mm0tLjE1NyAxLjQ4NmMtMi45ODMgMC01LjAyNyAxLjIzMy01LjAyNyAzLjczNkM0LjE3NiAxOC43ODcgNS44NzcgMjAgOC4zNjIgMjBhNy45OSA3Ljk5IDAgMCAwIDcuOTAyLTcuMTc4cS0uODA2LjE0Mi0xLjYyNC4xMzdjLTIuMiAwLTMuMjM3LS40MjEtNS40MzctLjQyMSIvPgogICAgPC9nPgogICAgPGRlZnM+CiAgICAgICAgPGNsaXBQYXRoIGlkPSJTTlRfX2EiPgogICAgICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMCAwaDI0djI0SDB6Ii8+CiAgICAgICAgPC9jbGlwUGF0aD4KICAgIDwvZGVmcz4KPC9zdmc+Cg==)
 * @see https://web3icons.io/tokens/SNT
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenSNT = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenSNT', __iconNode);
;
}),
];

//# sourceMappingURL=1qqr_%40web3icons_react_dist_0sst0pt._.js.map