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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenDMC.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenDMC
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-ssr] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#02828B',
                d: 'm6.33 10.594-1.4-6.188 3.729 6.188z'
            }
        ],
        [
            'path',
            {
                fill: '#00514F',
                d: 'm6.33 10.594-3.33 9 5.659-9z'
            }
        ],
        [
            'path',
            {
                fill: '#001E1E',
                d: 'M4.912 4.424 3 19.594l3.375-9z'
            }
        ],
        [
            'path',
            {
                fill: '#02828B',
                d: 'm17.67 10.594 1.4-6.188-3.73 6.188z'
            }
        ],
        [
            'path',
            {
                fill: '#00514F',
                d: 'm17.67 10.594 3.33 9-5.66-9z'
            }
        ],
        [
            'path',
            {
                fill: '#001E1E',
                d: 'M19.088 4.424 21 19.594l-3.375-9z'
            }
        ],
        [
            'path',
            {
                fill: '#00504F',
                d: 'M12 9.356s-2.138.765-3.212 1.136l3.211 5.18z'
            }
        ],
        [
            'path',
            {
                fill: '#001E1E',
                d: 'M12 9.349s2.15.77 3.218 1.142l-3.212 5.18V9.355z'
            }
        ],
        [
            'path',
            {
                fill: '#01A0A6',
                d: 'm12 9.373-3.212 1.136 3.211-5.175z'
            }
        ],
        [
            'path',
            {
                fill: '#028188',
                d: 'm12 9.373 3.218 1.125L12 5.334z'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'm6.33 10.594-1.4-6.188 3.729 6.188zm0 0-3.33 9 5.659-9z'
            }
        ],
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M4.912 4.422 3 19.592l3.375-9zm12.758 6.172 1.4-6.188-3.73 6.188zm0 0 3.33 9-5.66-9z'
            }
        ],
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M19.088 4.422 21 19.592l-3.375-9zM12 9.356s-2.138.765-3.212 1.136L12 15.674zm0-.005s2.15.77 3.218 1.142l-3.212 5.18V9.358z'
            }
        ],
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M12 9.373 8.788 10.51 12 5.334zm0 0 3.218 1.125L12 5.334z'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#DMC__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#001E1E',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'm6.96 10.75-1.245-5.5 3.315 5.5zm0 0-2.96 8 5.03-8z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M5.7 5.264 4 18.75l3-8zm11.34 5.486 1.245-5.5-3.315 5.5zm0 0 2.96 8-5.03-8z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M18.3 5.264 20 18.75l-3-8zM12 9.65s-1.9.68-2.855 1.01L12 15.265zm0-.005s1.91.685 2.86 1.015l-2.854 4.605V9.65z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'm12 9.665-2.855 1.01L12 6.075zm0 0 2.86 1L12 6.075z'
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
                        id: 'DMC__a'
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
 * @component @name TokenDMC
 * @description Web3Icon for TokenDMC
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiMwMjgyOEIiIGQ9Im02LjMzIDEwLjU5NC0xLjQtNi4xODggMy43MjkgNi4xODh6Ii8+CiAgICA8cGF0aCBmaWxsPSIjMDA1MTRGIiBkPSJtNi4zMyAxMC41OTQtMy4zMyA5IDUuNjU5LTl6Ii8+CiAgICA8cGF0aCBmaWxsPSIjMDAxRTFFIiBkPSJNNC45MTIgNC40MjQgMyAxOS41OTRsMy4zNzUtOXoiLz4KICAgIDxwYXRoIGZpbGw9IiMwMjgyOEIiIGQ9Im0xNy42NyAxMC41OTQgMS40LTYuMTg4LTMuNzMgNi4xODh6Ii8+CiAgICA8cGF0aCBmaWxsPSIjMDA1MTRGIiBkPSJtMTcuNjcgMTAuNTk0IDMuMzMgOS01LjY2LTl6Ii8+CiAgICA8cGF0aCBmaWxsPSIjMDAxRTFFIiBkPSJNMTkuMDg4IDQuNDI0IDIxIDE5LjU5NGwtMy4zNzUtOXoiLz4KICAgIDxwYXRoIGZpbGw9IiMwMDUwNEYiIGQ9Ik0xMiA5LjM1NnMtMi4xMzguNzY1LTMuMjEyIDEuMTM2bDMuMjExIDUuMTh6Ii8+CiAgICA8cGF0aCBmaWxsPSIjMDAxRTFFIiBkPSJNMTIgOS4zNDlzMi4xNS43NyAzLjIxOCAxLjE0MmwtMy4yMTIgNS4xOFY5LjM1NXoiLz4KICAgIDxwYXRoIGZpbGw9IiMwMUEwQTYiIGQ9Im0xMiA5LjM3My0zLjIxMiAxLjEzNiAzLjIxMS01LjE3NXoiLz4KICAgIDxwYXRoIGZpbGw9IiMwMjgxODgiIGQ9Im0xMiA5LjM3MyAzLjIxOCAxLjEyNUwxMiA1LjMzNHoiLz4KPC9zdmc+Cg==) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Im02LjMzIDEwLjU5NC0xLjQtNi4xODggMy43MjkgNi4xODh6bTAgMC0zLjMzIDkgNS42NTktOXoiLz4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik00LjkxMiA0LjQyMiAzIDE5LjU5MmwzLjM3NS05em0xMi43NTggNi4xNzIgMS40LTYuMTg4LTMuNzMgNi4xODh6bTAgMCAzLjMzIDktNS42Ni05eiIvPgogICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTE5LjA4OCA0LjQyMiAyMSAxOS41OTJsLTMuMzc1LTl6TTEyIDkuMzU2cy0yLjEzOC43NjUtMy4yMTIgMS4xMzZMMTIgMTUuNjc0em0wLS4wMDVzMi4xNS43NyAzLjIxOCAxLjE0MmwtMy4yMTIgNS4xOFY5LjM1OHoiLz4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xMiA5LjM3MyA4Ljc4OCAxMC41MSAxMiA1LjMzNHptMCAwIDMuMjE4IDEuMTI1TDEyIDUuMzM0eiIvPgo8L3N2Zz4K) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNETUNfX2EpIj4KICAgICAgICA8cGF0aCBmaWxsPSIjMDAxRTFFIiBkPSJNMjQgMEgwdjI0aDI0eiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Im02Ljk2IDEwLjc1LTEuMjQ1LTUuNSAzLjMxNSA1LjV6bTAgMC0yLjk2IDggNS4wMy04eiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik01LjcgNS4yNjQgNCAxOC43NWwzLTh6bTExLjM0IDUuNDg2IDEuMjQ1LTUuNS0zLjMxNSA1LjV6bTAgMCAyLjk2IDgtNS4wMy04eiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xOC4zIDUuMjY0IDIwIDE4Ljc1bC0zLTh6TTEyIDkuNjVzLTEuOS42OC0yLjg1NSAxLjAxTDEyIDE1LjI2NXptMC0uMDA1czEuOTEuNjg1IDIuODYgMS4wMTVsLTIuODU0IDQuNjA1VjkuNjV6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0ibTEyIDkuNjY1LTIuODU1IDEuMDFMMTIgNi4wNzV6bTAgMCAyLjg2IDFMMTIgNi4wNzV6Ii8+CiAgICA8L2c+CiAgICA8ZGVmcz4KICAgICAgICA8Y2xpcFBhdGggaWQ9IkRNQ19fYSI+CiAgICAgICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0wIDBoMjR2MjRIMHoiLz4KICAgICAgICA8L2NsaXBQYXRoPgogICAgPC9kZWZzPgo8L3N2Zz4K)
 * @see https://web3icons.io/tokens/DMC
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenDMC = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenDMC', __iconNode);
;
}),
];

//# sourceMappingURL=1qqr_%40web3icons_react_dist_1g6sq5j._.js.map