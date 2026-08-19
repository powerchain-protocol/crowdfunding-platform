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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenBLANK.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenBLANK
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-ssr] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: 'url(#BLANK__a)',
                d: 'M11.999 20.999a9 9 0 1 0 0-17.998 9 9 0 0 0 0 17.998M8.062 6.938l8.999 2.531-1.406 7.874-9-2.53z'
            }
        ],
        [
            'path',
            {
                fill: 'url(#BLANK__b)',
                d: 'M11.999 3.001c-1.48 0-2.88.36-4.106.99a9 9 0 0 0 9.91 14.888A9 9 0 0 0 12 3M8.624 5.813l9.562 2.812-1.407 8.156-9.561-2.531z'
            }
        ],
        [
            'defs',
            {},
            [
                [
                    'linearGradient',
                    {
                        id: 'BLANK__a',
                        x1: '6.375',
                        x2: '14.811',
                        y1: '5.251',
                        y2: '20.437',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#337C01'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '.21',
                                stopColor: '#2B6F04'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '.39',
                                stopColor: '#62E700'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '.53',
                                stopColor: '#66E604'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '.77',
                                stopColor: '#142417'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#406925'
                            }
                        ]
                    ]
                ],
                [
                    'linearGradient',
                    {
                        id: 'BLANK__b',
                        x1: '18.467',
                        x2: '6.656',
                        y1: '5.813',
                        y2: '17.062',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#43C601'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#C7FE02'
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
                clipPath: 'url(#BLANK__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: 'url(#BLANK__b)',
                        d: 'M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16M8.5 7.5l7.999 2.25-1.25 7-8-2.25z'
                    }
                ],
                [
                    'path',
                    {
                        fill: 'url(#BLANK__c)',
                        d: 'M11.999 4c-1.315 0-2.56.32-3.65.88a8 8 0 0 0 8.81 13.234 7.998 7.998 0 0 0-5.16-14.113m-3 2.5L17.5 9l-1.25 7.25L7.75 14z'
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
                        id: 'BLANK__b',
                        x1: '7',
                        x2: '14.499',
                        y1: '6.001',
                        y2: '19.5',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#337C01'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '.21',
                                stopColor: '#2B6F04'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '.39',
                                stopColor: '#62E700'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '.53',
                                stopColor: '#66E604'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '.77',
                                stopColor: '#142417'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#406925'
                            }
                        ]
                    ]
                ],
                [
                    'linearGradient',
                    {
                        id: 'BLANK__c',
                        x1: '17.748',
                        x2: '7.249',
                        y1: '6.5',
                        y2: '16.5',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#43C601'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#C7FE02'
                            }
                        ]
                    ]
                ],
                [
                    'clipPath',
                    {
                        id: 'BLANK__a'
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
 * @component @name TokenBLANK
 * @description Web3Icon for TokenBLANK
 *
 * @preview (branded, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9InVybCgjQkxBTktfX2EpIiBkPSJNMTEuOTk5IDIwLjk5OWE5IDkgMCAxIDAgMC0xNy45OTggOSA5IDAgMCAwIDAgMTcuOTk4TTguMDYyIDYuOTM4bDguOTk5IDIuNTMxLTEuNDA2IDcuODc0LTktMi41M3oiLz4KICAgIDxwYXRoIGZpbGw9InVybCgjQkxBTktfX2IpIiBkPSJNMTEuOTk5IDMuMDAxYy0xLjQ4IDAtMi44OC4zNi00LjEwNi45OWE5IDkgMCAwIDAgOS45MSAxNC44ODhBOSA5IDAgMCAwIDEyIDNNOC42MjQgNS44MTNsOS41NjIgMi44MTItMS40MDcgOC4xNTYtOS41NjEtMi41MzF6Ii8+CiAgICA8ZGVmcz4KICAgICAgICA8bGluZWFyR3JhZGllbnQgaWQ9IkJMQU5LX19hIiB4MT0iNi4zNzUiIHgyPSIxNC44MTEiIHkxPSI1LjI1MSIgeTI9IjIwLjQzNyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjMzM3QzAxIi8+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iLjIxIiBzdG9wLWNvbG9yPSIjMkI2RjA0Ii8+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iLjM5IiBzdG9wLWNvbG9yPSIjNjJFNzAwIi8+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iLjUzIiBzdG9wLWNvbG9yPSIjNjZFNjA0Ii8+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iLjc3IiBzdG9wLWNvbG9yPSIjMTQyNDE3Ii8+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzQwNjkyNSIvPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICAgICAgPGxpbmVhckdyYWRpZW50IGlkPSJCTEFOS19fYiIgeDE9IjE4LjQ2NyIgeDI9IjYuNjU2IiB5MT0iNS44MTMiIHkyPSIxNy4wNjIiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iIzQzQzYwMSIvPgogICAgICAgICAgICA8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNDN0ZFMDIiLz4KICAgICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgPC9kZWZzPgo8L3N2Zz4K) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNCTEFOS19fYSkiPgogICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0yNCAwSDB2MjRoMjR6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0idXJsKCNCTEFOS19fYikiIGQ9Ik0xMiAyMGE4IDggMCAxIDAgMC0xNiA4IDggMCAwIDAgMCAxNk04LjUgNy41bDcuOTk5IDIuMjUtMS4yNSA3LTgtMi4yNXoiLz4KICAgICAgICA8cGF0aCBmaWxsPSJ1cmwoI0JMQU5LX19jKSIgZD0iTTExLjk5OSA0Yy0xLjMxNSAwLTIuNTYuMzItMy42NS44OGE4IDggMCAwIDAgOC44MSAxMy4yMzQgNy45OTggNy45OTggMCAwIDAtNS4xNi0xNC4xMTNtLTMgMi41TDE3LjUgOWwtMS4yNSA3LjI1TDcuNzUgMTR6Ii8+CiAgICA8L2c+CiAgICA8ZGVmcz4KICAgICAgICA8bGluZWFyR3JhZGllbnQgaWQ9IkJMQU5LX19iIiB4MT0iNyIgeDI9IjE0LjQ5OSIgeTE9IjYuMDAxIiB5Mj0iMTkuNSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjMzM3QzAxIi8+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iLjIxIiBzdG9wLWNvbG9yPSIjMkI2RjA0Ii8+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iLjM5IiBzdG9wLWNvbG9yPSIjNjJFNzAwIi8+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iLjUzIiBzdG9wLWNvbG9yPSIjNjZFNjA0Ii8+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iLjc3IiBzdG9wLWNvbG9yPSIjMTQyNDE3Ii8+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzQwNjkyNSIvPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICAgICAgPGxpbmVhckdyYWRpZW50IGlkPSJCTEFOS19fYyIgeDE9IjE3Ljc0OCIgeDI9IjcuMjQ5IiB5MT0iNi41IiB5Mj0iMTYuNSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjNDNDNjAxIi8+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI0M3RkUwMiIvPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICAgICAgPGNsaXBQYXRoIGlkPSJCTEFOS19fYSI+CiAgICAgICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0wIDBoMjR2MjRIMHoiLz4KICAgICAgICA8L2NsaXBQYXRoPgogICAgPC9kZWZzPgo8L3N2Zz4K)
 * @see https://web3icons.io/tokens/BLANK
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenBLANK = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenBLANK', __iconNode);
;
}),
];

//# sourceMappingURL=1qqr_%40web3icons_react_dist_0wnmtg9._.js.map