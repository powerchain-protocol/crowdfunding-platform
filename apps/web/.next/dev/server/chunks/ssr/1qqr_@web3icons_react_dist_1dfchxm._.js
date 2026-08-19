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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenSEND.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenSEND
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-ssr] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: 'url(#SEND__a)',
                d: 'M20.4 8.1H6.6v-3h10.734c1.02 0 3.066.6 3.066 3m-13.8 0v1.542c0 .258.15.858.75.858H18c1.002 0 3 .378 3 2.226v3.858c0 .516-.6 2.316-3 2.316H6c-1.002 0-3-.504-3-2.97h14.25c.252 0 .75-.312.75-.93v-.6c0-.258-.15-.9-.75-.9H5.1c-.75 0-1.5-.306-1.5-1.542V8.1z'
            }
        ],
        [
            'defs',
            {},
            [
                [
                    'linearGradient',
                    {
                        id: 'SEND__a',
                        x1: '12',
                        x2: '12',
                        y1: '5.1',
                        y2: '18.3',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#FDF6EB'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '.28',
                                stopColor: '#CFB89A'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '.58',
                                stopColor: '#846B52'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '.78',
                                stopColor: '#AD9173'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#DFCCAF'
                            }
                        ]
                    ]
                ]
            ]
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M20.4 8.1H6.6v-3h10.734c1.02 0 3.066.6 3.066 3m-13.8 0v1.542c0 .258.15.858.75.858H18c1.002 0 3 .378 3 2.226v3.858c0 .516-.6 2.316-3 2.316H6c-1.002 0-3-.504-3-2.97h14.25c.252 0 .75-.312.75-.93v-.6c0-.258-.15-.9-.75-.9H5.1c-.75 0-1.5-.306-1.5-1.542V8.1z'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#SEND__a)'
            },
            [
                [
                    'path',
                    {
                        fill: 'url(#SEND__b)',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M19.467 8.533H7.2V5.866h9.541c.907 0 2.726.534 2.726 2.667m-12.267 0v1.37c0 .23.133.763.667.763h9.466c.891 0 2.667.336 2.667 1.979v3.43c0 .458-.533 2.058-2.667 2.058H6.667c-.891 0-2.667-.448-2.667-2.64h12.667c.224 0 .666-.277.666-.827v-.533c0-.23-.133-.8-.666-.8h-10.8c-.667 0-1.334-.272-1.334-1.37v-3.43z'
                    }
                ]
            ]
        ],
        [
            'defs',
            {},
            [
                [
                    'linearGradient',
                    {
                        id: 'SEND__b',
                        x1: '12',
                        x2: '12',
                        y1: '5.867',
                        y2: '17.6',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#FDF6EB'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '.28',
                                stopColor: '#CFB89A'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '.58',
                                stopColor: '#846B52'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '.78',
                                stopColor: '#AD9173'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#DFCCAF'
                            }
                        ]
                    ]
                ],
                [
                    'clipPath',
                    {
                        id: 'SEND__a'
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
 * @component @name TokenSEND
 * @description Web3Icon for TokenSEND
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9InVybCgjU0VORF9fYSkiIGQ9Ik0yMC40IDguMUg2LjZ2LTNoMTAuNzM0YzEuMDIgMCAzLjA2Ni42IDMuMDY2IDNtLTEzLjggMHYxLjU0MmMwIC4yNTguMTUuODU4Ljc1Ljg1OEgxOGMxLjAwMiAwIDMgLjM3OCAzIDIuMjI2djMuODU4YzAgLjUxNi0uNiAyLjMxNi0zIDIuMzE2SDZjLTEuMDAyIDAtMy0uNTA0LTMtMi45N2gxNC4yNWMuMjUyIDAgLjc1LS4zMTIuNzUtLjkzdi0uNmMwLS4yNTgtLjE1LS45LS43NS0uOUg1LjFjLS43NSAwLTEuNS0uMzA2LTEuNS0xLjU0MlY4LjF6Ii8+CiAgICA8ZGVmcz4KICAgICAgICA8bGluZWFyR3JhZGllbnQgaWQ9IlNFTkRfX2EiIHgxPSIxMiIgeDI9IjEyIiB5MT0iNS4xIiB5Mj0iMTguMyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjRkRGNkVCIi8+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iLjI4IiBzdG9wLWNvbG9yPSIjQ0ZCODlBIi8+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iLjU4IiBzdG9wLWNvbG9yPSIjODQ2QjUyIi8+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iLjc4IiBzdG9wLWNvbG9yPSIjQUQ5MTczIi8+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI0RGQ0NBRiIvPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICA8L2RlZnM+Cjwvc3ZnPgo=) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0yMC40IDguMUg2LjZ2LTNoMTAuNzM0YzEuMDIgMCAzLjA2Ni42IDMuMDY2IDNtLTEzLjggMHYxLjU0MmMwIC4yNTguMTUuODU4Ljc1Ljg1OEgxOGMxLjAwMiAwIDMgLjM3OCAzIDIuMjI2djMuODU4YzAgLjUxNi0uNiAyLjMxNi0zIDIuMzE2SDZjLTEuMDAyIDAtMy0uNTA0LTMtMi45N2gxNC4yNWMuMjUyIDAgLjc1LS4zMTIuNzUtLjkzdi0uNmMwLS4yNTgtLjE1LS45LS43NS0uOUg1LjFjLS43NSAwLTEuNS0uMzA2LTEuNS0xLjU0MlY4LjF6Ii8+Cjwvc3ZnPgo=) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNTRU5EX19hKSI+CiAgICAgICAgPHBhdGggZmlsbD0idXJsKCNTRU5EX19iKSIgZD0iTTI0IDBIMHYyNGgyNHoiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTkuNDY3IDguNTMzSDcuMlY1Ljg2Nmg5LjU0MWMuOTA3IDAgMi43MjYuNTM0IDIuNzI2IDIuNjY3bS0xMi4yNjcgMHYxLjM3YzAgLjIzLjEzMy43NjMuNjY3Ljc2M2g5LjQ2NmMuODkxIDAgMi42NjcuMzM2IDIuNjY3IDEuOTc5djMuNDNjMCAuNDU4LS41MzMgMi4wNTgtMi42NjcgMi4wNThINi42NjdjLS44OTEgMC0yLjY2Ny0uNDQ4LTIuNjY3LTIuNjRoMTIuNjY3Yy4yMjQgMCAuNjY2LS4yNzcuNjY2LS44Mjd2LS41MzNjMC0uMjMtLjEzMy0uOC0uNjY2LS44aC0xMC44Yy0uNjY3IDAtMS4zMzQtLjI3Mi0xLjMzNC0xLjM3di0zLjQzeiIvPgogICAgPC9nPgogICAgPGRlZnM+CiAgICAgICAgPGxpbmVhckdyYWRpZW50IGlkPSJTRU5EX19iIiB4MT0iMTIiIHgyPSIxMiIgeTE9IjUuODY3IiB5Mj0iMTcuNiIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjRkRGNkVCIi8+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iLjI4IiBzdG9wLWNvbG9yPSIjQ0ZCODlBIi8+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iLjU4IiBzdG9wLWNvbG9yPSIjODQ2QjUyIi8+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iLjc4IiBzdG9wLWNvbG9yPSIjQUQ5MTczIi8+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI0RGQ0NBRiIvPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICAgICAgPGNsaXBQYXRoIGlkPSJTRU5EX19hIj4KICAgICAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTAgMGgyNHYyNEgweiIvPgogICAgICAgIDwvY2xpcFBhdGg+CiAgICA8L2RlZnM+Cjwvc3ZnPgo=)
 * @see https://web3icons.io/tokens/SEND
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenSEND = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenSEND', __iconNode);
;
}),
];

//# sourceMappingURL=1qqr_%40web3icons_react_dist_1dfchxm._.js.map