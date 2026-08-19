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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenSLG.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenSLG
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-ssr] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: 'url(#SLG__a)',
                d: 'm3.53 17.225 2.647-4.923 5.876 2.583 5.77-2.583 2.647 4.923L12.053 21z'
            }
        ],
        [
            'path',
            {
                fill: 'url(#SLG__b)',
                d: 'M11.99 15.234A960 960 0 0 0 6.176 12.3l5.812-2.89 5.834 2.89zm0-.916c-1.308-.662-3.94-1.996-3.987-2.012l3.986-1.98 4.008 1.985-4.008 2.012zm-1.843-1.525 1.853.794 1.853-.8L12 12l-1.853.789z',
                fillRule: 'evenodd',
                clipRule: 'evenodd'
            }
        ],
        [
            'path',
            {
                fill: 'url(#SLG__c)',
                d: 'M11.999 11.47 7.764 9.607 11.999 3z'
            }
        ],
        [
            'path',
            {
                fill: 'url(#SLG__d)',
                d: 'm12 11.47 4.235-1.863L12 3z'
            }
        ],
        [
            'defs',
            {},
            [
                [
                    'linearGradient',
                    {
                        id: 'SLG__a',
                        x1: '11.831',
                        x2: '11.831',
                        y1: '20.285',
                        y2: '13.715',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                offset: '.59',
                                stopColor: '#A9CFD8'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#CFE6EE'
                            }
                        ]
                    ]
                ],
                [
                    'linearGradient',
                    {
                        id: 'SLG__b',
                        x1: '12',
                        x2: '12',
                        y1: '9.41',
                        y2: '15.233',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                offset: '.57',
                                stopColor: '#D7FDFF'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#DAFBFF'
                            }
                        ]
                    ]
                ],
                [
                    'linearGradient',
                    {
                        id: 'SLG__c',
                        x1: '8.595',
                        x2: '11.623',
                        y1: '9.993',
                        y2: '4.419',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                offset: '.46',
                                stopColor: '#70B8C7'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#D8F3FC'
                            }
                        ]
                    ]
                ],
                [
                    'linearGradient',
                    {
                        id: 'SLG__d',
                        x1: '15.403',
                        x2: '12.375',
                        y1: '9.993',
                        y2: '4.419',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                offset: '.26',
                                stopColor: '#96CEDF'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#D8F3FC'
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
                d: 'm3.53 17.225 2.647-4.923 5.876 2.583 5.77-2.583 2.647 4.923L12.053 21z'
            }
        ],
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M11.989 15.234A973 973 0 0 0 6.176 12.3l5.813-2.89 5.834 2.89zm0-.916c-1.308-.662-3.939-1.996-3.986-2.012l3.986-1.98 4.007 1.985-4.007 2.012zm-1.842-1.525 1.852.794 1.853-.8L12 12l-1.852.789z',
                fillRule: 'evenodd',
                clipRule: 'evenodd'
            }
        ],
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M12 11.47 7.765 9.607 12 3zm0 0 4.235-1.863L12 3z'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#SLG__a)'
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
                        fill: 'url(#SLG__b)',
                        d: 'm4.47 16.645 2.354-4.376 5.223 2.296 5.13-2.296 2.352 4.376L12.047 20z'
                    }
                ],
                [
                    'path',
                    {
                        fill: 'url(#SLG__c)',
                        d: 'M11.99 14.875a853 853 0 0 0-5.166-2.607l5.167-2.57 5.186 2.57zm0-.815c-1.162-.588-3.5-1.774-3.543-1.788l3.544-1.76 3.562 1.765-3.562 1.788zm-1.637-1.355 1.647.706 1.647-.71L12 11.999l-1.647.701z',
                        fillRule: 'evenodd',
                        clipRule: 'evenodd'
                    }
                ],
                [
                    'path',
                    {
                        fill: 'url(#SLG__d)',
                        d: 'M12 11.53 8.233 9.872 12 4z'
                    }
                ],
                [
                    'path',
                    {
                        fill: 'url(#SLG__e)',
                        d: 'm12 11.53 3.764-1.657L12 4z'
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
                        id: 'SLG__b',
                        x1: '11.849',
                        x2: '11.849',
                        y1: '19.365',
                        y2: '13.525',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                offset: '.59',
                                stopColor: '#A9CFD8'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#CFE6EE'
                            }
                        ]
                    ]
                ],
                [
                    'linearGradient',
                    {
                        id: 'SLG__c',
                        x1: '12',
                        x2: '12',
                        y1: '9.698',
                        y2: '14.875',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                offset: '.57',
                                stopColor: '#D7FDFF'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#DAFBFF'
                            }
                        ]
                    ]
                ],
                [
                    'linearGradient',
                    {
                        id: 'SLG__d',
                        x1: '8.973',
                        x2: '11.665',
                        y1: '10.216',
                        y2: '5.261',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                offset: '.46',
                                stopColor: '#70B8C7'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#D8F3FC'
                            }
                        ]
                    ]
                ],
                [
                    'linearGradient',
                    {
                        id: 'SLG__e',
                        x1: '15.025',
                        x2: '12.334',
                        y1: '10.216',
                        y2: '5.261',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                offset: '.26',
                                stopColor: '#96CEDF'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#D8F3FC'
                            }
                        ]
                    ]
                ],
                [
                    'clipPath',
                    {
                        id: 'SLG__a'
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
 * @component @name TokenSLG
 * @description Web3Icon for TokenSLG
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9InVybCgjU0xHX19hKSIgZD0ibTMuNTMgMTcuMjI1IDIuNjQ3LTQuOTIzIDUuODc2IDIuNTgzIDUuNzctMi41ODMgMi42NDcgNC45MjNMMTIuMDUzIDIxeiIvPgogICAgPHBhdGggZmlsbD0idXJsKCNTTEdfX2IpIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMS45OSAxNS4yMzRBOTYwIDk2MCAwIDAgMCA2LjE3NiAxMi4zbDUuODEyLTIuODkgNS44MzQgMi44OXptMC0uOTE2Yy0xLjMwOC0uNjYyLTMuOTQtMS45OTYtMy45ODctMi4wMTJsMy45ODYtMS45OCA0LjAwOCAxLjk4NS00LjAwOCAyLjAxMnptLTEuODQzLTEuNTI1IDEuODUzLjc5NCAxLjg1My0uOEwxMiAxMmwtMS44NTMuNzg5eiIgY2xpcC1ydWxlPSJldmVub2RkIi8+CiAgICA8cGF0aCBmaWxsPSJ1cmwoI1NMR19fYykiIGQ9Ik0xMS45OTkgMTEuNDcgNy43NjQgOS42MDcgMTEuOTk5IDN6Ii8+CiAgICA8cGF0aCBmaWxsPSJ1cmwoI1NMR19fZCkiIGQ9Im0xMiAxMS40NyA0LjIzNS0xLjg2M0wxMiAzeiIvPgogICAgPGRlZnM+CiAgICAgICAgPGxpbmVhckdyYWRpZW50IGlkPSJTTEdfX2EiIHgxPSIxMS44MzEiIHgyPSIxMS44MzEiIHkxPSIyMC4yODUiIHkyPSIxMy43MTUiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIuNTkiIHN0b3AtY29sb3I9IiNBOUNGRDgiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjQ0ZFNkVFIi8+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgICAgICA8bGluZWFyR3JhZGllbnQgaWQ9IlNMR19fYiIgeDE9IjEyIiB4Mj0iMTIiIHkxPSI5LjQxIiB5Mj0iMTUuMjMzIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iLjU3IiBzdG9wLWNvbG9yPSIjRDdGREZGIi8+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI0RBRkJGRiIvPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICAgICAgPGxpbmVhckdyYWRpZW50IGlkPSJTTEdfX2MiIHgxPSI4LjU5NSIgeDI9IjExLjYyMyIgeTE9IjkuOTkzIiB5Mj0iNC40MTkiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIuNDYiIHN0b3AtY29sb3I9IiM3MEI4QzciLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjRDhGM0ZDIi8+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgICAgICA8bGluZWFyR3JhZGllbnQgaWQ9IlNMR19fZCIgeDE9IjE1LjQwMyIgeDI9IjEyLjM3NSIgeTE9IjkuOTkzIiB5Mj0iNC40MTkiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIuMjYiIHN0b3AtY29sb3I9IiM5NkNFREYiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjRDhGM0ZDIi8+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgIDwvZGVmcz4KPC9zdmc+Cg==) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Im0zLjUzIDE3LjIyNSAyLjY0Ny00LjkyMyA1Ljg3NiAyLjU4MyA1Ljc3LTIuNTgzIDIuNjQ3IDQuOTIzTDEyLjA1MyAyMXoiLz4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTExLjk4OSAxNS4yMzRBOTczIDk3MyAwIDAgMCA2LjE3NiAxMi4zbDUuODEzLTIuODkgNS44MzQgMi44OXptMC0uOTE2Yy0xLjMwOC0uNjYyLTMuOTM5LTEuOTk2LTMuOTg2LTIuMDEybDMuOTg2LTEuOTggNC4wMDcgMS45ODUtNC4wMDcgMi4wMTJ6bS0xLjg0Mi0xLjUyNSAxLjg1Mi43OTQgMS44NTMtLjhMMTIgMTJsLTEuODUyLjc4OXoiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgogICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTEyIDExLjQ3IDcuNzY1IDkuNjA3IDEyIDN6bTAgMCA0LjIzNS0xLjg2M0wxMiAzeiIvPgo8L3N2Zz4K) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNTTEdfX2EpIj4KICAgICAgICA8cGF0aCBmaWxsPSIjMDAwIiBkPSJNMjQgMEgwdjI0aDI0eiIvPgogICAgICAgIDxwYXRoIGZpbGw9InVybCgjU0xHX19iKSIgZD0ibTQuNDcgMTYuNjQ1IDIuMzU0LTQuMzc2IDUuMjIzIDIuMjk2IDUuMTMtMi4yOTYgMi4zNTIgNC4zNzZMMTIuMDQ3IDIweiIvPgogICAgICAgIDxwYXRoIGZpbGw9InVybCgjU0xHX19jKSIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTEuOTkgMTQuODc1YTg1MyA4NTMgMCAwIDAtNS4xNjYtMi42MDdsNS4xNjctMi41NyA1LjE4NiAyLjU3em0wLS44MTVjLTEuMTYyLS41ODgtMy41LTEuNzc0LTMuNTQzLTEuNzg4bDMuNTQ0LTEuNzYgMy41NjIgMS43NjUtMy41NjIgMS43ODh6bS0xLjYzNy0xLjM1NSAxLjY0Ny43MDYgMS42NDctLjcxTDEyIDExLjk5OWwtMS42NDcuNzAxeiIgY2xpcC1ydWxlPSJldmVub2RkIi8+CiAgICAgICAgPHBhdGggZmlsbD0idXJsKCNTTEdfX2QpIiBkPSJNMTIgMTEuNTMgOC4yMzMgOS44NzIgMTIgNHoiLz4KICAgICAgICA8cGF0aCBmaWxsPSJ1cmwoI1NMR19fZSkiIGQ9Im0xMiAxMS41MyAzLjc2NC0xLjY1N0wxMiA0eiIvPgogICAgPC9nPgogICAgPGRlZnM+CiAgICAgICAgPGxpbmVhckdyYWRpZW50IGlkPSJTTEdfX2IiIHgxPSIxMS44NDkiIHgyPSIxMS44NDkiIHkxPSIxOS4zNjUiIHkyPSIxMy41MjUiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIuNTkiIHN0b3AtY29sb3I9IiNBOUNGRDgiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjQ0ZFNkVFIi8+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgICAgICA8bGluZWFyR3JhZGllbnQgaWQ9IlNMR19fYyIgeDE9IjEyIiB4Mj0iMTIiIHkxPSI5LjY5OCIgeTI9IjE0Ljg3NSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgICAgICAgICA8c3RvcCBvZmZzZXQ9Ii41NyIgc3RvcC1jb2xvcj0iI0Q3RkRGRiIvPgogICAgICAgICAgICA8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNEQUZCRkYiLz4KICAgICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iU0xHX19kIiB4MT0iOC45NzMiIHgyPSIxMS42NjUiIHkxPSIxMC4yMTYiIHkyPSI1LjI2MSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgICAgICAgICA8c3RvcCBvZmZzZXQ9Ii40NiIgc3RvcC1jb2xvcj0iIzcwQjhDNyIvPgogICAgICAgICAgICA8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNEOEYzRkMiLz4KICAgICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iU0xHX19lIiB4MT0iMTUuMDI1IiB4Mj0iMTIuMzM0IiB5MT0iMTAuMjE2IiB5Mj0iNS4yNjEiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIuMjYiIHN0b3AtY29sb3I9IiM5NkNFREYiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjRDhGM0ZDIi8+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgICAgICA8Y2xpcFBhdGggaWQ9IlNMR19fYSI+CiAgICAgICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0wIDBoMjR2MjRIMHoiLz4KICAgICAgICA8L2NsaXBQYXRoPgogICAgPC9kZWZzPgo8L3N2Zz4K)
 * @see https://web3icons.io/tokens/SLG
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenSLG = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenSLG', __iconNode);
;
}),
];

//# sourceMappingURL=1qqr_%40web3icons_react_dist_1ng67yi._.js.map