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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenKAI.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenKAI
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-ssr] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#7E4778',
                d: 'm10.751 9.89-2.5-6.03 4 2.03z'
            }
        ],
        [
            'path',
            {
                fill: '#9B1B2E',
                d: 'M10.75 9.89v-3.5l1.5-.5z'
            }
        ],
        [
            'path',
            {
                fill: '#D3302D',
                d: 'm10.751 6.39-2.5-2.53 4 2.03z'
            }
        ],
        [
            'path',
            {
                fill: '#9B2026',
                d: 'M21 8.89h-4.25l2 3.5z'
            }
        ],
        [
            'path',
            {
                fill: '#BD282E',
                d: 'M16.75 8.89 13 10.39l5.75 2z'
            }
        ],
        [
            'path',
            {
                fill: '#DD2A2D',
                d: 'm14.707 5.39-1.707 5 3.75-1.5z'
            }
        ],
        [
            'path',
            {
                fill: '#BC2328',
                d: 'm19 4.64-2.25 4.25H21z'
            }
        ],
        [
            'path',
            {
                fill: '#EE4642',
                d: 'm14.707 5.39 2.044 3.5L19 4.64z'
            }
        ],
        [
            'path',
            {
                fill: '#D5302D',
                d: 'm13.251 19.64-2.75-7.75 6.75 2.5z'
            }
        ],
        [
            'path',
            {
                fill: '#9D1C21',
                d: 'M13.249 19.64v-5.25h4z'
            }
        ],
        [
            'path',
            {
                fill: '#BD2C33',
                d: 'm13.251 14.39-2.75-2.5 6.75 2.5z'
            }
        ],
        [
            'path',
            {
                fill: '#797CB3',
                d: 'M6 4.39 3 8.14l3 7 5.25 5z'
            }
        ],
        [
            'path',
            {
                fill: '#9A1C31',
                d: 'M8.5 11.89 6 15.14l5.25 5z'
            }
        ],
        [
            'path',
            {
                fill: '#7F4778',
                d: 'm6 10.14-3-2 3 7 2.5-3.25z'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'm10.751 9.89-2.5-6.03 4 2.03z'
            }
        ],
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M10.75 9.89v-3.5l1.5-.5z'
            }
        ],
        [
            'path',
            {
                fill: 'currentColor',
                d: 'm10.751 6.39-2.5-2.53 4 2.03zM21 8.89h-4.25l2 3.5z'
            }
        ],
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M16.75 8.89 13 10.39l5.75 2z'
            }
        ],
        [
            'path',
            {
                fill: 'currentColor',
                d: 'm14.707 5.39-1.707 5 3.75-1.5zM19 4.64l-2.25 4.25H21z'
            }
        ],
        [
            'path',
            {
                fill: 'currentColor',
                d: 'm14.707 5.39 2.044 3.5L19 4.64zm-1.456 14.25-2.75-7.75 6.75 2.5z'
            }
        ],
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M13.249 19.64v-5.25h4zm.002-5.25-2.75-2.5 6.75 2.5zM6 4.39 3 8.14l3 7 5.25 5z'
            }
        ],
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M8.5 11.89 6 15.14l5.25 5z'
            }
        ],
        [
            'path',
            {
                fill: 'currentColor',
                d: 'm6 10.14-3-2 3 7 2.5-3.25z'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#KAI__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#797CB3',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'm10.89 10.125-2.223-5.36 3.556 1.804z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M10.889 10.125V7.012l1.333-.444z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'm10.89 7.014-2.223-2.25 3.556 1.805zM20 9.236h-3.778L18 12.347zm-3.778 0-3.333 1.333 5.11 1.778z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'm14.406 6.125-1.517 4.445 3.333-1.334zm3.816-.667-2 3.778H20z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'm14.406 6.125 1.817 3.11 2-3.777zM13.112 18.79l-2.444-6.889 6 2.223z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M13.11 18.79v-4.666h3.556z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M13.112 14.124 10.668 11.9l6 2.223zM6.667 5.236 4 8.569l2.667 6.223 4.667 4.444z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'm8.889 11.901-2.222 2.89 4.666 4.444z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M6.667 10.347 4 8.569l2.667 6.222 2.222-2.889z'
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
                        id: 'KAI__a'
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
 * @component @name TokenKAI
 * @description Web3Icon for TokenKAI
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiM3RTQ3NzgiIGQ9Im0xMC43NTEgOS44OS0yLjUtNi4wMyA0IDIuMDN6Ii8+CiAgICA8cGF0aCBmaWxsPSIjOUIxQjJFIiBkPSJNMTAuNzUgOS44OXYtMy41bDEuNS0uNXoiLz4KICAgIDxwYXRoIGZpbGw9IiNEMzMwMkQiIGQ9Im0xMC43NTEgNi4zOS0yLjUtMi41MyA0IDIuMDN6Ii8+CiAgICA8cGF0aCBmaWxsPSIjOUIyMDI2IiBkPSJNMjEgOC44OWgtNC4yNWwyIDMuNXoiLz4KICAgIDxwYXRoIGZpbGw9IiNCRDI4MkUiIGQ9Ik0xNi43NSA4Ljg5IDEzIDEwLjM5bDUuNzUgMnoiLz4KICAgIDxwYXRoIGZpbGw9IiNERDJBMkQiIGQ9Im0xNC43MDcgNS4zOS0xLjcwNyA1IDMuNzUtMS41eiIvPgogICAgPHBhdGggZmlsbD0iI0JDMjMyOCIgZD0ibTE5IDQuNjQtMi4yNSA0LjI1SDIxeiIvPgogICAgPHBhdGggZmlsbD0iI0VFNDY0MiIgZD0ibTE0LjcwNyA1LjM5IDIuMDQ0IDMuNUwxOSA0LjY0eiIvPgogICAgPHBhdGggZmlsbD0iI0Q1MzAyRCIgZD0ibTEzLjI1MSAxOS42NC0yLjc1LTcuNzUgNi43NSAyLjV6Ii8+CiAgICA8cGF0aCBmaWxsPSIjOUQxQzIxIiBkPSJNMTMuMjQ5IDE5LjY0di01LjI1aDR6Ii8+CiAgICA8cGF0aCBmaWxsPSIjQkQyQzMzIiBkPSJtMTMuMjUxIDE0LjM5LTIuNzUtMi41IDYuNzUgMi41eiIvPgogICAgPHBhdGggZmlsbD0iIzc5N0NCMyIgZD0iTTYgNC4zOSAzIDguMTRsMyA3IDUuMjUgNXoiLz4KICAgIDxwYXRoIGZpbGw9IiM5QTFDMzEiIGQ9Ik04LjUgMTEuODkgNiAxNS4xNGw1LjI1IDV6Ii8+CiAgICA8cGF0aCBmaWxsPSIjN0Y0Nzc4IiBkPSJtNiAxMC4xNC0zLTIgMyA3IDIuNS0zLjI1eiIvPgo8L3N2Zz4K) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Im0xMC43NTEgOS44OS0yLjUtNi4wMyA0IDIuMDN6Ii8+CiAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTAuNzUgOS44OXYtMy41bDEuNS0uNXoiLz4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Im0xMC43NTEgNi4zOS0yLjUtMi41MyA0IDIuMDN6TTIxIDguODloLTQuMjVsMiAzLjV6Ii8+CiAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTYuNzUgOC44OSAxMyAxMC4zOWw1Ljc1IDJ6Ii8+CiAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJtMTQuNzA3IDUuMzktMS43MDcgNSAzLjc1LTEuNXpNMTkgNC42NGwtMi4yNSA0LjI1SDIxeiIvPgogICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0ibTE0LjcwNyA1LjM5IDIuMDQ0IDMuNUwxOSA0LjY0em0tMS40NTYgMTQuMjUtMi43NS03Ljc1IDYuNzUgMi41eiIvPgogICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTEzLjI0OSAxOS42NHYtNS4yNWg0em0uMDAyLTUuMjUtMi43NS0yLjUgNi43NSAyLjV6TTYgNC4zOSAzIDguMTRsMyA3IDUuMjUgNXoiLz4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik04LjUgMTEuODkgNiAxNS4xNGw1LjI1IDV6Ii8+CiAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJtNiAxMC4xNC0zLTIgMyA3IDIuNS0zLjI1eiIvPgo8L3N2Zz4K) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNLQUlfX2EpIj4KICAgICAgICA8cGF0aCBmaWxsPSIjNzk3Q0IzIiBkPSJNMjQgMEgwdjI0aDI0eiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Im0xMC44OSAxMC4xMjUtMi4yMjMtNS4zNiAzLjU1NiAxLjgwNHoiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTAuODg5IDEwLjEyNVY3LjAxMmwxLjMzMy0uNDQ0eiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Im0xMC44OSA3LjAxNC0yLjIyMy0yLjI1IDMuNTU2IDEuODA1ek0yMCA5LjIzNmgtMy43NzhMMTggMTIuMzQ3em0tMy43NzggMC0zLjMzMyAxLjMzMyA1LjExIDEuNzc4eiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Im0xNC40MDYgNi4xMjUtMS41MTcgNC40NDUgMy4zMzMtMS4zMzR6bTMuODE2LS42NjctMiAzLjc3OEgyMHoiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJtMTQuNDA2IDYuMTI1IDEuODE3IDMuMTEgMi0zLjc3N3pNMTMuMTEyIDE4Ljc5bC0yLjQ0NC02Ljg4OSA2IDIuMjIzeiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xMy4xMSAxOC43OXYtNC42NjZoMy41NTZ6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTEzLjExMiAxNC4xMjQgMTAuNjY4IDExLjlsNiAyLjIyM3pNNi42NjcgNS4yMzYgNCA4LjU2OWwyLjY2NyA2LjIyMyA0LjY2NyA0LjQ0NHoiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJtOC44ODkgMTEuOTAxLTIuMjIyIDIuODkgNC42NjYgNC40NDR6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTYuNjY3IDEwLjM0NyA0IDguNTY5bDIuNjY3IDYuMjIyIDIuMjIyLTIuODg5eiIvPgogICAgPC9nPgogICAgPGRlZnM+CiAgICAgICAgPGNsaXBQYXRoIGlkPSJLQUlfX2EiPgogICAgICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMCAwaDI0djI0SDB6Ii8+CiAgICAgICAgPC9jbGlwUGF0aD4KICAgIDwvZGVmcz4KPC9zdmc+Cg==)
 * @see https://web3icons.io/tokens/KAI
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenKAI = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenKAI', __iconNode);
;
}),
];

//# sourceMappingURL=1qqr_%40web3icons_react_dist_0_fozcx._.js.map