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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenDEC.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenDEC
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-ssr] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: 'url(#DEC__a)',
                d: 'M16.5 4.059h-9l4.5 7.944z'
            }
        ],
        [
            'path',
            {
                fill: 'url(#DEC__b)',
                d: 'M16.5 4.059 12 12.003l4.5 7.938 4.5-7.938z'
            }
        ],
        [
            'path',
            {
                fill: 'url(#DEC__c)',
                d: 'M7.5 4.059 3 12.003l4.5 7.938 4.5-7.938z'
            }
        ],
        [
            'path',
            {
                fill: '#74C5EE',
                d: 'm12 12.002-4.5 7.94h9z'
            }
        ],
        [
            'defs',
            {},
            [
                [
                    'linearGradient',
                    {
                        id: 'DEC__a',
                        x1: '12.001',
                        x2: '12.001',
                        y1: '20.185',
                        y2: '3.326',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#74C5EE'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '.32',
                                stopColor: '#73C2EF'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '.53',
                                stopColor: '#6EB9F1'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '.72',
                                stopColor: '#66AAF5'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '.88',
                                stopColor: '#5A95FA'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#4F80FF'
                            }
                        ]
                    ]
                ],
                [
                    'linearGradient',
                    {
                        id: 'DEC__b',
                        x1: '2.981',
                        x2: '21.239',
                        y1: '12.003',
                        y2: '12.003',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#96D4C8'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#42C0C6'
                            }
                        ]
                    ]
                ],
                [
                    'linearGradient',
                    {
                        id: 'DEC__c',
                        x1: '3',
                        x2: '21',
                        y1: '12.003',
                        y2: '12.003',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#4F80FF'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '.28',
                                stopColor: '#4E7FFC'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '.48',
                                stopColor: '#4A7CF3'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '.64',
                                stopColor: '#4477E4'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '.79',
                                stopColor: '#3C6FCE'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '.93',
                                stopColor: '#3166B3'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#2B60A3'
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
                clipPath: 'url(#DEC__a)'
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
                        fill: 'url(#DEC__b)',
                        d: 'M16 4.941H8l4 7.061z'
                    }
                ],
                [
                    'path',
                    {
                        fill: 'url(#DEC__c)',
                        d: 'm16 4.941-4 7.061 4 7.057 4-7.057z'
                    }
                ],
                [
                    'path',
                    {
                        fill: 'url(#DEC__d)',
                        d: 'm8 4.941-4 7.061 4 7.057 4-7.057z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#74C5EE',
                        d: 'M12 12.002 8 19.06h8z'
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
                        id: 'DEC__b',
                        x1: '12.001',
                        x2: '12.001',
                        y1: '19.275',
                        y2: '4.29',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#74C5EE'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '.32',
                                stopColor: '#73C2EF'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '.53',
                                stopColor: '#6EB9F1'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '.72',
                                stopColor: '#66AAF5'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '.88',
                                stopColor: '#5A95FA'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#4F80FF'
                            }
                        ]
                    ]
                ],
                [
                    'linearGradient',
                    {
                        id: 'DEC__c',
                        x1: '3.983',
                        x2: '20.213',
                        y1: '12.002',
                        y2: '12.002',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#96D4C8'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#42C0C6'
                            }
                        ]
                    ]
                ],
                [
                    'linearGradient',
                    {
                        id: 'DEC__d',
                        x1: '4',
                        x2: '20',
                        y1: '12.002',
                        y2: '12.002',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#4F80FF'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '.28',
                                stopColor: '#4E7FFC'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '.48',
                                stopColor: '#4A7CF3'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '.64',
                                stopColor: '#4477E4'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '.79',
                                stopColor: '#3C6FCE'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '.93',
                                stopColor: '#3166B3'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#2B60A3'
                            }
                        ]
                    ]
                ],
                [
                    'clipPath',
                    {
                        id: 'DEC__a'
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
 * @component @name TokenDEC
 * @description Web3Icon for TokenDEC
 *
 * @preview (branded, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9InVybCgjREVDX19hKSIgZD0iTTE2LjUgNC4wNTloLTlsNC41IDcuOTQ0eiIvPgogICAgPHBhdGggZmlsbD0idXJsKCNERUNfX2IpIiBkPSJNMTYuNSA0LjA1OSAxMiAxMi4wMDNsNC41IDcuOTM4IDQuNS03LjkzOHoiLz4KICAgIDxwYXRoIGZpbGw9InVybCgjREVDX19jKSIgZD0iTTcuNSA0LjA1OSAzIDEyLjAwM2w0LjUgNy45MzggNC41LTcuOTM4eiIvPgogICAgPHBhdGggZmlsbD0iIzc0QzVFRSIgZD0ibTEyIDEyLjAwMi00LjUgNy45NGg5eiIvPgogICAgPGRlZnM+CiAgICAgICAgPGxpbmVhckdyYWRpZW50IGlkPSJERUNfX2EiIHgxPSIxMi4wMDEiIHgyPSIxMi4wMDEiIHkxPSIyMC4xODUiIHkyPSIzLjMyNiIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjNzRDNUVFIi8+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iLjMyIiBzdG9wLWNvbG9yPSIjNzNDMkVGIi8+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iLjUzIiBzdG9wLWNvbG9yPSIjNkVCOUYxIi8+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iLjcyIiBzdG9wLWNvbG9yPSIjNjZBQUY1Ii8+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iLjg4IiBzdG9wLWNvbG9yPSIjNUE5NUZBIi8+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzRGODBGRiIvPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICAgICAgPGxpbmVhckdyYWRpZW50IGlkPSJERUNfX2IiIHgxPSIyLjk4MSIgeDI9IjIxLjIzOSIgeTE9IjEyLjAwMyIgeTI9IjEyLjAwMyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjOTZENEM4Ii8+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzQyQzBDNiIvPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICAgICAgPGxpbmVhckdyYWRpZW50IGlkPSJERUNfX2MiIHgxPSIzIiB4Mj0iMjEiIHkxPSIxMi4wMDMiIHkyPSIxMi4wMDMiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iIzRGODBGRiIvPgogICAgICAgICAgICA8c3RvcCBvZmZzZXQ9Ii4yOCIgc3RvcC1jb2xvcj0iIzRFN0ZGQyIvPgogICAgICAgICAgICA8c3RvcCBvZmZzZXQ9Ii40OCIgc3RvcC1jb2xvcj0iIzRBN0NGMyIvPgogICAgICAgICAgICA8c3RvcCBvZmZzZXQ9Ii42NCIgc3RvcC1jb2xvcj0iIzQ0NzdFNCIvPgogICAgICAgICAgICA8c3RvcCBvZmZzZXQ9Ii43OSIgc3RvcC1jb2xvcj0iIzNDNkZDRSIvPgogICAgICAgICAgICA8c3RvcCBvZmZzZXQ9Ii45MyIgc3RvcC1jb2xvcj0iIzMxNjZCMyIvPgogICAgICAgICAgICA8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMyQjYwQTMiLz4KICAgICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgPC9kZWZzPgo8L3N2Zz4K) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNERUNfX2EpIj4KICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMjQgMEgwdjI0aDI0eiIvPgogICAgICAgIDxwYXRoIGZpbGw9InVybCgjREVDX19iKSIgZD0iTTE2IDQuOTQxSDhsNCA3LjA2MXoiLz4KICAgICAgICA8cGF0aCBmaWxsPSJ1cmwoI0RFQ19fYykiIGQ9Im0xNiA0Ljk0MS00IDcuMDYxIDQgNy4wNTcgNC03LjA1N3oiLz4KICAgICAgICA8cGF0aCBmaWxsPSJ1cmwoI0RFQ19fZCkiIGQ9Im04IDQuOTQxLTQgNy4wNjEgNCA3LjA1NyA0LTcuMDU3eiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiM3NEM1RUUiIGQ9Ik0xMiAxMi4wMDIgOCAxOS4wNmg4eiIvPgogICAgPC9nPgogICAgPGRlZnM+CiAgICAgICAgPGxpbmVhckdyYWRpZW50IGlkPSJERUNfX2IiIHgxPSIxMi4wMDEiIHgyPSIxMi4wMDEiIHkxPSIxOS4yNzUiIHkyPSI0LjI5IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiM3NEM1RUUiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIuMzIiIHN0b3AtY29sb3I9IiM3M0MyRUYiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIuNTMiIHN0b3AtY29sb3I9IiM2RUI5RjEiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIuNzIiIHN0b3AtY29sb3I9IiM2NkFBRjUiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIuODgiIHN0b3AtY29sb3I9IiM1QTk1RkEiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjNEY4MEZGIi8+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgICAgICA8bGluZWFyR3JhZGllbnQgaWQ9IkRFQ19fYyIgeDE9IjMuOTgzIiB4Mj0iMjAuMjEzIiB5MT0iMTIuMDAyIiB5Mj0iMTIuMDAyIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiM5NkQ0QzgiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjNDJDMEM2Ii8+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgICAgICA8bGluZWFyR3JhZGllbnQgaWQ9IkRFQ19fZCIgeDE9IjQiIHgyPSIyMCIgeTE9IjEyLjAwMiIgeTI9IjEyLjAwMiIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjNEY4MEZGIi8+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iLjI4IiBzdG9wLWNvbG9yPSIjNEU3RkZDIi8+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iLjQ4IiBzdG9wLWNvbG9yPSIjNEE3Q0YzIi8+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iLjY0IiBzdG9wLWNvbG9yPSIjNDQ3N0U0Ii8+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iLjc5IiBzdG9wLWNvbG9yPSIjM0M2RkNFIi8+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iLjkzIiBzdG9wLWNvbG9yPSIjMzE2NkIzIi8+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzJCNjBBMyIvPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICAgICAgPGNsaXBQYXRoIGlkPSJERUNfX2EiPgogICAgICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMCAwaDI0djI0SDB6Ii8+CiAgICAgICAgPC9jbGlwUGF0aD4KICAgIDwvZGVmcz4KPC9zdmc+Cg==)
 * @see https://web3icons.io/tokens/DEC
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenDEC = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenDEC', __iconNode);
;
}),
];

//# sourceMappingURL=1qqr_%40web3icons_react_dist_1d8ddm9._.js.map