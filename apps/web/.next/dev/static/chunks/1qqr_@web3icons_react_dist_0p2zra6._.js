(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createWeb3Icon",
    ()=>createWeb3Icon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$types$2b$node$40$24$2e$13$2e$3_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.1_@types+node@24.13.3_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$BaseIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/BaseIcon.js [app-client] (ecmascript)");
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
    const Component = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$types$2b$node$40$24$2e$13$2e$3_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(({ variant = defaultVariant, fallback, ...props }, ref)=>{
        const iconData = variants[variant];
        if (!iconData) {
            console.warn(`Icon "${name}" does not have variant "${variant}". ` + `Available variants: ${availableVariants.join(', ')}`);
            return null;
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$types$2b$node$40$24$2e$13$2e$3_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$BaseIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseIcon"], {
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
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$types$2b$node$40$24$2e$13$2e$3_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(element, elementProps, childElements);
    });
}
;
}),
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/networks/NetworkApechain.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>NetworkApechain
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-client] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'g',
            {
                clipPath: 'url(#apechain__a)'
            },
            [
                [
                    'path',
                    {
                        stroke: '#0054FA',
                        d: 'M20.784 5.027H3.22a.16.16 0 0 0-.161.161v13.395c0 .09.072.161.161.161h17.564a.16.16 0 0 0 .161-.16V5.187a.16.16 0 0 0-.16-.16Z',
                        strokeWidth: '2.256'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#0054FA',
                        d: 'M7.191 8.18h1.424l.917 7.632H8.326l-.134-1.66h-.64l-.134 1.66H6.274zm.568 3.394-.124 1.567h.474l-.134-1.567-.093-1.32h-.03zm4.302 4.238h-1.227V8.181h1.609c.877 0 1.413.515 1.413 1.444v1.877c0 .917-.536 1.433-1.413 1.433h-.382zm.01-3.795h.269c.206 0 .289-.185.289-.515V9.625c0-.34-.083-.526-.29-.526h-.267zm3.199 3.795V8.181h2.392v1.01h-1.165v2.259h1.041v1.01h-1.041v2.342h1.165v1.01z'
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
                        id: 'apechain__a'
                    },
                    [
                        [
                            'path',
                            {
                                fill: '#fff',
                                d: 'M3 5h18v13.761H3z'
                            }
                        ]
                    ]
                ]
            ]
        ]
    ],
    mono: [
        [
            'g',
            {
                clipPath: 'url(#apechain__a)'
            },
            [
                [
                    'path',
                    {
                        stroke: 'currentColor',
                        d: 'M20.784 5.027H3.22a.16.16 0 0 0-.161.161v13.395c0 .09.072.161.161.161h17.564a.16.16 0 0 0 .161-.16V5.187a.16.16 0 0 0-.16-.16Z',
                        strokeWidth: '2.256'
                    }
                ],
                [
                    'path',
                    {
                        fill: 'currentColor',
                        d: 'M7.191 8.18h1.424l.917 7.632H8.326l-.134-1.66h-.64l-.134 1.66H6.274zm.568 3.394-.124 1.567h.474l-.134-1.567-.093-1.32h-.03zm4.302 4.238h-1.227V8.181h1.609c.877 0 1.413.515 1.413 1.444v1.877c0 .917-.536 1.433-1.413 1.433h-.382zm.01-3.795h.269c.206 0 .289-.185.289-.515V9.625c0-.34-.083-.526-.29-.526h-.267zm3.199 3.795V8.181h2.392v1.01h-1.165v2.259h1.041v1.01h-1.041v2.342h1.165v1.01z'
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
                        id: 'apechain__a'
                    },
                    [
                        [
                            'path',
                            {
                                fill: 'currentColor',
                                d: 'M3 5h18v13.761H3z'
                            }
                        ]
                    ]
                ]
            ]
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#apechain__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#0054FA',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'g',
                    {
                        clipPath: 'url(#apechain__b)'
                    },
                    [
                        [
                            'path',
                            {
                                stroke: '#fff',
                                d: 'M19.808 6.024H4.196a.143.143 0 0 0-.144.143v11.907c0 .079.064.143.144.143h15.612c.08 0 .143-.064.143-.143V6.167a.143.143 0 0 0-.143-.143Z',
                                strokeWidth: '2.256'
                            }
                        ],
                        [
                            'path',
                            {
                                fill: '#fff',
                                d: 'M7.726 8.827H8.99l.816 6.784H8.734l-.12-1.476h-.567l-.12 1.476H6.91zm.504 3.016-.11 1.394h.422l-.12-1.394-.082-1.173h-.028zm3.825 3.768h-1.091V8.827h1.43c.779 0 1.256.459 1.256 1.284v1.668c0 .816-.477 1.274-1.256 1.274h-.34zm.009-3.373h.238c.183 0 .257-.165.257-.459v-1.668c0-.303-.074-.468-.257-.468h-.238zm2.842 3.373V8.827h2.127v.899h-1.036v2.007h.926v.899h-.926v2.08h1.036v.899z'
                            }
                        ]
                    ]
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
                        id: 'apechain__a'
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
                ],
                [
                    'clipPath',
                    {
                        id: 'apechain__b'
                    },
                    [
                        [
                            'path',
                            {
                                fill: '#fff',
                                d: 'M4 6h16v12.232H4z'
                            }
                        ]
                    ]
                ]
            ]
        ]
    ]
};
/**
 * @component @name NetworkApechain
 * @description Web3Icon for NetworkApechain
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNhcGVjaGFpbl9fYSkiPgogICAgICAgIDxwYXRoIHN0cm9rZT0iIzAwNTRGQSIgc3Ryb2tlLXdpZHRoPSIyLjI1NiIgZD0iTTIwLjc4NCA1LjAyN0gzLjIyYS4xNi4xNiAwIDAgMC0uMTYxLjE2MXYxMy4zOTVjMCAuMDkuMDcyLjE2MS4xNjEuMTYxaDE3LjU2NGEuMTYuMTYgMCAwIDAgLjE2MS0uMTZWNS4xODdhLjE2LjE2IDAgMCAwLS4xNi0uMTZaIi8+CiAgICAgICAgPHBhdGggZmlsbD0iIzAwNTRGQSIgZD0iTTcuMTkxIDguMThoMS40MjRsLjkxNyA3LjYzMkg4LjMyNmwtLjEzNC0xLjY2aC0uNjRsLS4xMzQgMS42Nkg2LjI3NHptLjU2OCAzLjM5NC0uMTI0IDEuNTY3aC40NzRsLS4xMzQtMS41NjctLjA5My0xLjMyaC0uMDN6bTQuMzAyIDQuMjM4aC0xLjIyN1Y4LjE4MWgxLjYwOWMuODc3IDAgMS40MTMuNTE1IDEuNDEzIDEuNDQ0djEuODc3YzAgLjkxNy0uNTM2IDEuNDMzLTEuNDEzIDEuNDMzaC0uMzgyem0uMDEtMy43OTVoLjI2OWMuMjA2IDAgLjI4OS0uMTg1LjI4OS0uNTE1VjkuNjI1YzAtLjM0LS4wODMtLjUyNi0uMjktLjUyNmgtLjI2N3ptMy4xOTkgMy43OTVWOC4xODFoMi4zOTJ2MS4wMWgtMS4xNjV2Mi4yNTloMS4wNDF2MS4wMWgtMS4wNDF2Mi4zNDJoMS4xNjV2MS4wMXoiLz4KICAgIDwvZz4KICAgIDxkZWZzPgogICAgICAgIDxjbGlwUGF0aCBpZD0iYXBlY2hhaW5fX2EiPgogICAgICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMyA1aDE4djEzLjc2MUgzeiIvPgogICAgICAgIDwvY2xpcFBhdGg+CiAgICA8L2RlZnM+Cjwvc3ZnPgo=) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNhcGVjaGFpbl9fYSkiPgogICAgICAgIDxwYXRoIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIyLjI1NiIgZD0iTTIwLjc4NCA1LjAyN0gzLjIyYS4xNi4xNiAwIDAgMC0uMTYxLjE2MXYxMy4zOTVjMCAuMDkuMDcyLjE2MS4xNjEuMTYxaDE3LjU2NGEuMTYuMTYgMCAwIDAgLjE2MS0uMTZWNS4xODdhLjE2LjE2IDAgMCAwLS4xNi0uMTZaIi8+CiAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTcuMTkxIDguMThoMS40MjRsLjkxNyA3LjYzMkg4LjMyNmwtLjEzNC0xLjY2aC0uNjRsLS4xMzQgMS42Nkg2LjI3NHptLjU2OCAzLjM5NC0uMTI0IDEuNTY3aC40NzRsLS4xMzQtMS41NjctLjA5My0xLjMyaC0uMDN6bTQuMzAyIDQuMjM4aC0xLjIyN1Y4LjE4MWgxLjYwOWMuODc3IDAgMS40MTMuNTE1IDEuNDEzIDEuNDQ0djEuODc3YzAgLjkxNy0uNTM2IDEuNDMzLTEuNDEzIDEuNDMzaC0uMzgyem0uMDEtMy43OTVoLjI2OWMuMjA2IDAgLjI4OS0uMTg1LjI4OS0uNTE1VjkuNjI1YzAtLjM0LS4wODMtLjUyNi0uMjktLjUyNmgtLjI2N3ptMy4xOTkgMy43OTVWOC4xODFoMi4zOTJ2MS4wMWgtMS4xNjV2Mi4yNTloMS4wNDF2MS4wMWgtMS4wNDF2Mi4zNDJoMS4xNjV2MS4wMXoiLz4KICAgIDwvZz4KICAgIDxkZWZzPgogICAgICAgIDxjbGlwUGF0aCBpZD0iYXBlY2hhaW5fX2EiPgogICAgICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMyA1aDE4djEzLjc2MUgzeiIvPgogICAgICAgIDwvY2xpcFBhdGg+CiAgICA8L2RlZnM+Cjwvc3ZnPgo=) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNhcGVjaGFpbl9fYSkiPgogICAgICAgIDxwYXRoIGZpbGw9IiMwMDU0RkEiIGQ9Ik0yNCAwSDB2MjRoMjR6Ii8+CiAgICAgICAgPGcgY2xpcC1wYXRoPSJ1cmwoI2FwZWNoYWluX19iKSI+CiAgICAgICAgICAgIDxwYXRoIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIyLjI1NiIgZD0iTTE5LjgwOCA2LjAyNEg0LjE5NmEuMTQzLjE0MyAwIDAgMC0uMTQ0LjE0M3YxMS45MDdjMCAuMDc5LjA2NC4xNDMuMTQ0LjE0M2gxNS42MTJjLjA4IDAgLjE0My0uMDY0LjE0My0uMTQzVjYuMTY3YS4xNDMuMTQzIDAgMCAwLS4xNDMtLjE0M1oiLz4KICAgICAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTcuNzI2IDguODI3SDguOTlsLjgxNiA2Ljc4NEg4LjczNGwtLjEyLTEuNDc2aC0uNTY3bC0uMTIgMS40NzZINi45MXptLjUwNCAzLjAxNi0uMTEgMS4zOTRoLjQyMmwtLjEyLTEuMzk0LS4wODItMS4xNzNoLS4wMjh6bTMuODI1IDMuNzY4aC0xLjA5MVY4LjgyN2gxLjQzYy43NzkgMCAxLjI1Ni40NTkgMS4yNTYgMS4yODR2MS42NjhjMCAuODE2LS40NzcgMS4yNzQtMS4yNTYgMS4yNzRoLS4zNHptLjAwOS0zLjM3M2guMjM4Yy4xODMgMCAuMjU3LS4xNjUuMjU3LS40NTl2LTEuNjY4YzAtLjMwMy0uMDc0LS40NjgtLjI1Ny0uNDY4aC0uMjM4em0yLjg0MiAzLjM3M1Y4LjgyN2gyLjEyN3YuODk5aC0xLjAzNnYyLjAwN2guOTI2di44OTloLS45MjZ2Mi4wOGgxLjAzNnYuODk5eiIvPgogICAgICAgIDwvZz4KICAgIDwvZz4KICAgIDxkZWZzPgogICAgICAgIDxjbGlwUGF0aCBpZD0iYXBlY2hhaW5fX2EiPgogICAgICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMCAwaDI0djI0SDB6Ii8+CiAgICAgICAgPC9jbGlwUGF0aD4KICAgICAgICA8Y2xpcFBhdGggaWQ9ImFwZWNoYWluX19iIj4KICAgICAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTQgNmgxNnYxMi4yMzJINHoiLz4KICAgICAgICA8L2NsaXBQYXRoPgogICAgPC9kZWZzPgo8L3N2Zz4K)
 * @see https://web3icons.io/networks/apechain
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const NetworkApechain = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWeb3Icon"])('NetworkApechain', __iconNode);
;
}),
]);

//# sourceMappingURL=1qqr_%40web3icons_react_dist_0p2zra6._.js.map