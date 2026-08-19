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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/networks/NetworkLumio.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>NetworkLumio
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-ssr] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: 'url(#lumio__a)',
                d: 'm3 3.9 15.873 5.951v4.298L3 20.1z'
            }
        ],
        [
            'path',
            {
                fill: 'url(#lumio__b)',
                d: 'm3 7.206 15.873 2.645v4.298L3 16.794z'
            }
        ],
        [
            'path',
            {
                fill: '#fff',
                d: 'M18.873 14.149A2.14 2.14 0 0 0 21 12a2.14 2.14 0 0 0-2.127-2.149A2.14 2.14 0 0 0 16.746 12c0 1.187.952 2.149 2.127 2.149'
            }
        ],
        [
            'defs',
            {},
            [
                [
                    'linearGradient',
                    {
                        id: 'lumio__a',
                        x1: '4.964',
                        x2: '19.036',
                        y1: '12.165',
                        y2: '12.277',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#8D29C1',
                                stopOpacity: '0'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#8D29C1'
                            }
                        ]
                    ]
                ],
                [
                    'linearGradient',
                    {
                        id: 'lumio__b',
                        x1: '3',
                        x2: '19.036',
                        y1: '12.165',
                        y2: '12.165',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#F03F79',
                                stopOpacity: '0'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#F03F79'
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
                clipPath: 'url(#lumio__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#000',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: 'url(#lumio__b)',
                        d: 'm4 4.8 14.109 5.29v3.82L4 19.2z'
                    }
                ],
                [
                    'path',
                    {
                        fill: 'url(#lumio__c)',
                        d: 'm4 7.739 14.109 2.35v3.821L4 16.261z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M18.11 13.91A1.9 1.9 0 0 0 20 12a1.9 1.9 0 0 0-1.89-1.91A1.9 1.9 0 0 0 16.217 12a1.9 1.9 0 0 0 1.891 1.91'
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
                        id: 'lumio__b',
                        x1: '5.745',
                        x2: '18.255',
                        y1: '12.147',
                        y2: '12.246',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#8D29C1',
                                stopOpacity: '0'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#8D29C1'
                            }
                        ]
                    ]
                ],
                [
                    'linearGradient',
                    {
                        id: 'lumio__c',
                        x1: '4',
                        x2: '18.255',
                        y1: '12.147',
                        y2: '12.147',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#F03F79',
                                stopOpacity: '0'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#F03F79'
                            }
                        ]
                    ]
                ],
                [
                    'clipPath',
                    {
                        id: 'lumio__a'
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
 * @component @name NetworkLumio
 * @description Web3Icon for NetworkLumio
 *
 * @preview (branded, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9InVybCgjbHVtaW9fX2EpIiBkPSJtMyAzLjkgMTUuODczIDUuOTUxdjQuMjk4TDMgMjAuMXoiLz4KICAgIDxwYXRoIGZpbGw9InVybCgjbHVtaW9fX2IpIiBkPSJtMyA3LjIwNiAxNS44NzMgMi42NDV2NC4yOThMMyAxNi43OTR6Ii8+CiAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTguODczIDE0LjE0OUEyLjE0IDIuMTQgMCAwIDAgMjEgMTJhMi4xNCAyLjE0IDAgMCAwLTIuMTI3LTIuMTQ5QTIuMTQgMi4xNCAwIDAgMCAxNi43NDYgMTJjMCAxLjE4Ny45NTIgMi4xNDkgMi4xMjcgMi4xNDkiLz4KICAgIDxkZWZzPgogICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD0ibHVtaW9fX2EiIHgxPSI0Ljk2NCIgeDI9IjE5LjAzNiIgeTE9IjEyLjE2NSIgeTI9IjEyLjI3NyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjOEQyOUMxIiBzdG9wLW9wYWNpdHk9IjAiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjOEQyOUMxIi8+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgICAgICA8bGluZWFyR3JhZGllbnQgaWQ9Imx1bWlvX19iIiB4MT0iMyIgeDI9IjE5LjAzNiIgeTE9IjEyLjE2NSIgeTI9IjEyLjE2NSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjRjAzRjc5IiBzdG9wLW9wYWNpdHk9IjAiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjRjAzRjc5Ii8+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgIDwvZGVmcz4KPC9zdmc+Cg==) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNsdW1pb19fYSkiPgogICAgICAgIDxwYXRoIGZpbGw9IiMwMDAiIGQ9Ik0yNCAwSDB2MjRoMjR6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0idXJsKCNsdW1pb19fYikiIGQ9Im00IDQuOCAxNC4xMDkgNS4yOXYzLjgyTDQgMTkuMnoiLz4KICAgICAgICA8cGF0aCBmaWxsPSJ1cmwoI2x1bWlvX19jKSIgZD0ibTQgNy43MzkgMTQuMTA5IDIuMzV2My44MjFMNCAxNi4yNjF6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTE4LjExIDEzLjkxQTEuOSAxLjkgMCAwIDAgMjAgMTJhMS45IDEuOSAwIDAgMC0xLjg5LTEuOTFBMS45IDEuOSAwIDAgMCAxNi4yMTcgMTJhMS45IDEuOSAwIDAgMCAxLjg5MSAxLjkxIi8+CiAgICA8L2c+CiAgICA8ZGVmcz4KICAgICAgICA8bGluZWFyR3JhZGllbnQgaWQ9Imx1bWlvX19iIiB4MT0iNS43NDUiIHgyPSIxOC4yNTUiIHkxPSIxMi4xNDciIHkyPSIxMi4yNDYiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iIzhEMjlDMSIgc3RvcC1vcGFjaXR5PSIwIi8+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzhEMjlDMSIvPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICAgICAgPGxpbmVhckdyYWRpZW50IGlkPSJsdW1pb19fYyIgeDE9IjQiIHgyPSIxOC4yNTUiIHkxPSIxMi4xNDciIHkyPSIxMi4xNDciIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iI0YwM0Y3OSIgc3RvcC1vcGFjaXR5PSIwIi8+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI0YwM0Y3OSIvPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICAgICAgPGNsaXBQYXRoIGlkPSJsdW1pb19fYSI+CiAgICAgICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0wIDBoMjR2MjRIMHoiLz4KICAgICAgICA8L2NsaXBQYXRoPgogICAgPC9kZWZzPgo8L3N2Zz4K)
 * @see https://web3icons.io/networks/lumio
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const NetworkLumio = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createWeb3Icon"])('NetworkLumio', __iconNode);
;
}),
];

//# sourceMappingURL=1qqr_%40web3icons_react_dist_0ngt3bi._.js.map