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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenKALM.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenKALM
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-ssr] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#E6403B',
                d: 'M6.938 6.375a1.688 1.688 0 1 0 0-3.375 1.688 1.688 0 0 0 0 3.375'
            }
        ],
        [
            'path',
            {
                fill: '#FCB82B',
                d: 'M6.938 11.438a1.687 1.687 0 1 0 0-3.375 1.687 1.687 0 0 0 0 3.374'
            }
        ],
        [
            'path',
            {
                fill: '#40D27E',
                d: 'M6.938 16.5a1.688 1.688 0 1 0 0-3.375 1.688 1.688 0 0 0 0 3.375'
            }
        ],
        [
            'path',
            {
                fill: '#2BA5F8',
                d: 'M6.938 21a1.687 1.687 0 1 0 0-3.375 1.687 1.687 0 0 0 0 3.375'
            }
        ],
        [
            'path',
            {
                fill: '#414141',
                d: 'M15.375 8.063h3.375l-5.625 6.187L18.75 21h-3.375L9.75 14.25z'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M6.938 6.375a1.688 1.688 0 1 0 0-3.375 1.688 1.688 0 0 0 0 3.375m0 5.063a1.687 1.687 0 1 0 0-3.375 1.687 1.687 0 0 0 0 3.374m0 5.063a1.688 1.688 0 1 0 0-3.375 1.688 1.688 0 0 0 0 3.375m0 4.5a1.687 1.687 0 1 0 0-3.375 1.687 1.687 0 0 0 0 3.375m8.437-12.937h3.375l-5.625 6.187L18.75 21h-3.375L9.75 14.25z'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#KALM__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#414141',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M7.5 7a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m0 4.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m0 4.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m0 4a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3M15 8.5h3L13 14l5 6h-3l-5-6z'
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
                        id: 'KALM__a'
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
 * @component @name TokenKALM
 * @description Web3Icon for TokenKALM
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNFNjQwM0IiIGQ9Ik02LjkzOCA2LjM3NWExLjY4OCAxLjY4OCAwIDEgMCAwLTMuMzc1IDEuNjg4IDEuNjg4IDAgMCAwIDAgMy4zNzUiLz4KICAgIDxwYXRoIGZpbGw9IiNGQ0I4MkIiIGQ9Ik02LjkzOCAxMS40MzhhMS42ODcgMS42ODcgMCAxIDAgMC0zLjM3NSAxLjY4NyAxLjY4NyAwIDAgMCAwIDMuMzc0Ii8+CiAgICA8cGF0aCBmaWxsPSIjNDBEMjdFIiBkPSJNNi45MzggMTYuNWExLjY4OCAxLjY4OCAwIDEgMCAwLTMuMzc1IDEuNjg4IDEuNjg4IDAgMCAwIDAgMy4zNzUiLz4KICAgIDxwYXRoIGZpbGw9IiMyQkE1RjgiIGQ9Ik02LjkzOCAyMWExLjY4NyAxLjY4NyAwIDEgMCAwLTMuMzc1IDEuNjg3IDEuNjg3IDAgMCAwIDAgMy4zNzUiLz4KICAgIDxwYXRoIGZpbGw9IiM0MTQxNDEiIGQ9Ik0xNS4zNzUgOC4wNjNoMy4zNzVsLTUuNjI1IDYuMTg3TDE4Ljc1IDIxaC0zLjM3NUw5Ljc1IDE0LjI1eiIvPgo8L3N2Zz4K) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik02LjkzOCA2LjM3NWExLjY4OCAxLjY4OCAwIDEgMCAwLTMuMzc1IDEuNjg4IDEuNjg4IDAgMCAwIDAgMy4zNzVtMCA1LjA2M2ExLjY4NyAxLjY4NyAwIDEgMCAwLTMuMzc1IDEuNjg3IDEuNjg3IDAgMCAwIDAgMy4zNzRtMCA1LjA2M2ExLjY4OCAxLjY4OCAwIDEgMCAwLTMuMzc1IDEuNjg4IDEuNjg4IDAgMCAwIDAgMy4zNzVtMCA0LjVhMS42ODcgMS42ODcgMCAxIDAgMC0zLjM3NSAxLjY4NyAxLjY4NyAwIDAgMCAwIDMuMzc1bTguNDM3LTEyLjkzN2gzLjM3NWwtNS42MjUgNi4xODdMMTguNzUgMjFoLTMuMzc1TDkuNzUgMTQuMjV6Ii8+Cjwvc3ZnPgo=) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNLQUxNX19hKSI+CiAgICAgICAgPHBhdGggZmlsbD0iIzQxNDE0MSIgZD0iTTI0IDBIMHYyNGgyNHoiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNNy41IDdhMS41IDEuNSAwIDEgMCAwLTMgMS41IDEuNSAwIDAgMCAwIDNtMCA0LjVhMS41IDEuNSAwIDEgMCAwLTMgMS41IDEuNSAwIDAgMCAwIDNtMCA0LjVhMS41IDEuNSAwIDEgMCAwLTMgMS41IDEuNSAwIDAgMCAwIDNtMCA0YTEuNSAxLjUgMCAxIDAgMC0zIDEuNSAxLjUgMCAwIDAgMCAzTTE1IDguNWgzTDEzIDE0bDUgNmgtM2wtNS02eiIvPgogICAgPC9nPgogICAgPGRlZnM+CiAgICAgICAgPGNsaXBQYXRoIGlkPSJLQUxNX19hIj4KICAgICAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTAgMGgyNHYyNEgweiIvPgogICAgICAgIDwvY2xpcFBhdGg+CiAgICA8L2RlZnM+Cjwvc3ZnPgo=)
 * @see https://web3icons.io/tokens/KALM
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenKALM = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenKALM', __iconNode);
;
}),
];

//# sourceMappingURL=1qqr_%40web3icons_react_dist_0ssb1jy._.js.map