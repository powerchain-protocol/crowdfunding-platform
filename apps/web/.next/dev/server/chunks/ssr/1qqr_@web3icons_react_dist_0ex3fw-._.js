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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenLYM.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenLYM
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-ssr] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#FDC5CA',
                d: 'M9.315 17.72 3.062 6.769c.012 0-.456-1.265 1.008-1.265h4.033a1.33 1.33 0 0 1 1.224.633C9.77 6.866 16 17.83 16 17.83l-5.353.669a1.43 1.43 0 0 1-1.332-.778'
            }
        ],
        [
            'path',
            {
                fill: '#fff',
                d: 'm10.522 16.127 3.876-6.505S14.707 9 15.682 9h4.111s1.704.036 1.062 1.137c-.642 1.114-4.543 7.68-4.543 7.68s-.259.682-1.309.682H9.992s-.926-.036-.235-1.15.766-1.222.766-1.222'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M9.315 17.721 3.062 6.768c.012 0-.456-1.265 1.008-1.265h4.033a1.33 1.33 0 0 1 1.224.632C9.771 6.865 16 17.831 16 17.831l-5.353.668a1.43 1.43 0 0 1-1.332-.778'
            }
        ],
        [
            'path',
            {
                fill: 'currentColor',
                d: 'm10.522 16.128 3.876-6.505S14.707 9 15.682 9h4.111s1.704.036 1.062 1.138a1785 1785 0 0 1-4.543 7.68s-.26.682-1.309.682H9.991s-.926-.036-.235-1.15.766-1.222.766-1.222'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#LYM__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#FDC5CA',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M9.613 17.085 4.055 7.35c.01 0-.405-1.124.896-1.124h3.585a1.18 1.18 0 0 1 1.088.562c.395.649 5.932 10.396 5.932 10.396l-4.759.594a1.27 1.27 0 0 1-1.184-.692'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'm10.686 15.669 3.446-5.783s.274-.553 1.141-.553h3.654s1.515.032.945 1.011c-.571.99-4.04 6.826-4.04 6.826s-.23.607-1.162.607h-4.456s-.823-.032-.209-1.022c.615-.99.68-1.086.68-1.086'
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
                        id: 'LYM__a'
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
 * @component @name TokenLYM
 * @description Web3Icon for TokenLYM
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNGREM1Q0EiIGQ9Ik05LjMxNSAxNy43MiAzLjA2MiA2Ljc2OWMuMDEyIDAtLjQ1Ni0xLjI2NSAxLjAwOC0xLjI2NWg0LjAzM2ExLjMzIDEuMzMgMCAwIDEgMS4yMjQuNjMzQzkuNzcgNi44NjYgMTYgMTcuODMgMTYgMTcuODNsLTUuMzUzLjY2OWExLjQzIDEuNDMgMCAwIDEtMS4zMzItLjc3OCIvPgogICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0ibTEwLjUyMiAxNi4xMjcgMy44NzYtNi41MDVTMTQuNzA3IDkgMTUuNjgyIDloNC4xMTFzMS43MDQuMDM2IDEuMDYyIDEuMTM3Yy0uNjQyIDEuMTE0LTQuNTQzIDcuNjgtNC41NDMgNy42OHMtLjI1OS42ODItMS4zMDkuNjgySDkuOTkycy0uOTI2LS4wMzYtLjIzNS0xLjE1Ljc2Ni0xLjIyMi43NjYtMS4yMjIiLz4KPC9zdmc+Cg==) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik05LjMxNSAxNy43MjEgMy4wNjIgNi43NjhjLjAxMiAwLS40NTYtMS4yNjUgMS4wMDgtMS4yNjVoNC4wMzNhMS4zMyAxLjMzIDAgMCAxIDEuMjI0LjYzMkM5Ljc3MSA2Ljg2NSAxNiAxNy44MzEgMTYgMTcuODMxbC01LjM1My42NjhhMS40MyAxLjQzIDAgMCAxLTEuMzMyLS43NzgiLz4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Im0xMC41MjIgMTYuMTI4IDMuODc2LTYuNTA1UzE0LjcwNyA5IDE1LjY4MiA5aDQuMTExczEuNzA0LjAzNiAxLjA2MiAxLjEzOGExNzg1IDE3ODUgMCAwIDEtNC41NDMgNy42OHMtLjI2LjY4Mi0xLjMwOS42ODJIOS45OTFzLS45MjYtLjAzNi0uMjM1LTEuMTUuNzY2LTEuMjIyLjc2Ni0xLjIyMiIvPgo8L3N2Zz4K) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNMWU1fX2EpIj4KICAgICAgICA8cGF0aCBmaWxsPSIjRkRDNUNBIiBkPSJNMjQgMEgwdjI0aDI0eiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik05LjYxMyAxNy4wODUgNC4wNTUgNy4zNWMuMDEgMC0uNDA1LTEuMTI0Ljg5Ni0xLjEyNGgzLjU4NWExLjE4IDEuMTggMCAwIDEgMS4wODguNTYyYy4zOTUuNjQ5IDUuOTMyIDEwLjM5NiA1LjkzMiAxMC4zOTZsLTQuNzU5LjU5NGExLjI3IDEuMjcgMCAwIDEtMS4xODQtLjY5MiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Im0xMC42ODYgMTUuNjY5IDMuNDQ2LTUuNzgzcy4yNzQtLjU1MyAxLjE0MS0uNTUzaDMuNjU0czEuNTE1LjAzMi45NDUgMS4wMTFjLS41NzEuOTktNC4wNCA2LjgyNi00LjA0IDYuODI2cy0uMjMuNjA3LTEuMTYyLjYwN2gtNC40NTZzLS44MjMtLjAzMi0uMjA5LTEuMDIyYy42MTUtLjk5LjY4LTEuMDg2LjY4LTEuMDg2Ii8+CiAgICA8L2c+CiAgICA8ZGVmcz4KICAgICAgICA8Y2xpcFBhdGggaWQ9IkxZTV9fYSI+CiAgICAgICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0wIDBoMjR2MjRIMHoiLz4KICAgICAgICA8L2NsaXBQYXRoPgogICAgPC9kZWZzPgo8L3N2Zz4K)
 * @see https://web3icons.io/tokens/LYM
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenLYM = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenLYM', __iconNode);
;
}),
];

//# sourceMappingURL=1qqr_%40web3icons_react_dist_0ex3fw-._.js.map