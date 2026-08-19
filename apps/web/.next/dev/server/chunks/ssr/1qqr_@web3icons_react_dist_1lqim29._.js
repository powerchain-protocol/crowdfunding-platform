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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenUSH.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenUSH
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-ssr] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: 'url(#USH__a)',
                d: 'M11.93 3 4.06 7.5 12 12l7.942-4.5z'
            }
        ],
        [
            'path',
            {
                fill: 'url(#USH__b)',
                d: 'M4.059 16.648V7.5l7.94 4.5v9z'
            }
        ],
        [
            'path',
            {
                fill: 'url(#USH__c)',
                d: 'M19.941 16.648V7.5L12 12v9z'
            }
        ],
        [
            'path',
            {
                fill: 'url(#USH__d)',
                d: 'm12 7.727 3.706 2.118v4.235L12 16.198 8.294 14.08V9.845z'
            }
        ],
        [
            'path',
            {
                fill: 'url(#USH__e)',
                d: 'M8.294 9.898 12 12v4.198L8.294 14.08z'
            }
        ],
        [
            'path',
            {
                fill: 'url(#USH__f)',
                d: 'M15.706 9.898v-.053L12 7.727 8.294 9.845v.053L12 11.999z'
            }
        ],
        [
            'defs',
            {},
            [
                [
                    'linearGradient',
                    {
                        id: 'USH__a',
                        x1: '14.853',
                        x2: '6.249',
                        y1: '6.653',
                        y2: '11.246',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#006ACA'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '.66',
                                stopColor: '#00DFFA'
                            }
                        ]
                    ]
                ],
                [
                    'linearGradient',
                    {
                        id: 'USH__b',
                        x1: '4.63',
                        x2: '11.563',
                        y1: '4.729',
                        y2: '23.314',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#0059CB'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '.4',
                                stopColor: '#00C3E4'
                            }
                        ]
                    ]
                ],
                [
                    'linearGradient',
                    {
                        id: 'USH__c',
                        x1: '18.882',
                        x2: '10.126',
                        y1: '5.012',
                        y2: '13.371',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#0062C8'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#00E7EF'
                            }
                        ]
                    ]
                ],
                [
                    'linearGradient',
                    {
                        id: 'USH__d',
                        x1: '15.256',
                        x2: '12.158',
                        y1: '13.698',
                        y2: '21.063',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#00E0FF'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#00C9FF'
                            }
                        ]
                    ]
                ],
                [
                    'linearGradient',
                    {
                        id: 'USH__e',
                        x1: '6.895',
                        x2: '11.289',
                        y1: '6.176',
                        y2: '13.723',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#00C3FF'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#00F1FF'
                            }
                        ]
                    ]
                ],
                [
                    'linearGradient',
                    {
                        id: 'USH__f',
                        x1: '10.301',
                        x2: '11.27',
                        y1: '8.871',
                        y2: '10.041',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#00C9FF'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#00E8FF'
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
                d: 'M11.93 3 4.06 7.5 12 12l7.942-4.5zM4.059 16.648V7.5l7.94 4.5v9z'
            }
        ],
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M19.941 16.648V7.5L12 12v9z'
            }
        ],
        [
            'path',
            {
                fill: 'currentColor',
                d: 'm12 7.727 3.706 2.118v4.235L12 16.198 8.294 14.08V9.845z'
            }
        ],
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M8.294 9.898 12 12v4.198L8.294 14.08z'
            }
        ],
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M15.706 9.898v-.053L12 7.727 8.294 9.845v.053L12 11.999z'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#USH__a)'
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
                        fill: 'url(#USH__b)',
                        d: 'M11.939 4 4.94 8 12 12l7.058-4z'
                    }
                ],
                [
                    'path',
                    {
                        fill: 'url(#USH__c)',
                        d: 'M4.94 16.132V8L12 12v8z'
                    }
                ],
                [
                    'path',
                    {
                        fill: 'url(#USH__d)',
                        d: 'M19.059 16.132V8L12 12v8z'
                    }
                ],
                [
                    'path',
                    {
                        fill: 'url(#USH__e)',
                        d: 'm12 8.202 3.294 1.882v3.765L12 15.73l-3.294-1.882v-3.765z'
                    }
                ],
                [
                    'path',
                    {
                        fill: 'url(#USH__f)',
                        d: 'M8.706 10.131 12 12v3.731L8.706 13.85z'
                    }
                ],
                [
                    'path',
                    {
                        fill: 'url(#USH__g)',
                        d: 'M15.294 10.131v-.047L12 8.202l-3.294 1.882v.047L12 11.999z'
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
                        id: 'USH__b',
                        x1: '14.536',
                        x2: '6.888',
                        y1: '7.247',
                        y2: '11.33',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#006ACA'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '.66',
                                stopColor: '#00DFFA'
                            }
                        ]
                    ]
                ],
                [
                    'linearGradient',
                    {
                        id: 'USH__c',
                        x1: '5.449',
                        x2: '11.611',
                        y1: '5.537',
                        y2: '22.056',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#0059CB'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '.4',
                                stopColor: '#00C3E4'
                            }
                        ]
                    ]
                ],
                [
                    'linearGradient',
                    {
                        id: 'USH__d',
                        x1: '18.118',
                        x2: '10.334',
                        y1: '5.788',
                        y2: '13.219',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#0062C8'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#00E7EF'
                            }
                        ]
                    ]
                ],
                [
                    'linearGradient',
                    {
                        id: 'USH__e',
                        x1: '14.894',
                        x2: '12.14',
                        y1: '13.509',
                        y2: '20.056',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#00E0FF'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#00C9FF'
                            }
                        ]
                    ]
                ],
                [
                    'linearGradient',
                    {
                        id: 'USH__f',
                        x1: '7.462',
                        x2: '11.368',
                        y1: '6.823',
                        y2: '13.532',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#00C3FF'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#00F1FF'
                            }
                        ]
                    ]
                ],
                [
                    'linearGradient',
                    {
                        id: 'USH__g',
                        x1: '10.49',
                        x2: '11.351',
                        y1: '9.218',
                        y2: '10.258',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#00C9FF'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#00E8FF'
                            }
                        ]
                    ]
                ],
                [
                    'clipPath',
                    {
                        id: 'USH__a'
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
 * @component @name TokenUSH
 * @description Web3Icon for TokenUSH
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9InVybCgjVVNIX19hKSIgZD0iTTExLjkzIDMgNC4wNiA3LjUgMTIgMTJsNy45NDItNC41eiIvPgogICAgPHBhdGggZmlsbD0idXJsKCNVU0hfX2IpIiBkPSJNNC4wNTkgMTYuNjQ4VjcuNWw3Ljk0IDQuNXY5eiIvPgogICAgPHBhdGggZmlsbD0idXJsKCNVU0hfX2MpIiBkPSJNMTkuOTQxIDE2LjY0OFY3LjVMMTIgMTJ2OXoiLz4KICAgIDxwYXRoIGZpbGw9InVybCgjVVNIX19kKSIgZD0ibTEyIDcuNzI3IDMuNzA2IDIuMTE4djQuMjM1TDEyIDE2LjE5OCA4LjI5NCAxNC4wOFY5Ljg0NXoiLz4KICAgIDxwYXRoIGZpbGw9InVybCgjVVNIX19lKSIgZD0iTTguMjk0IDkuODk4IDEyIDEydjQuMTk4TDguMjk0IDE0LjA4eiIvPgogICAgPHBhdGggZmlsbD0idXJsKCNVU0hfX2YpIiBkPSJNMTUuNzA2IDkuODk4di0uMDUzTDEyIDcuNzI3IDguMjk0IDkuODQ1di4wNTNMMTIgMTEuOTk5eiIvPgogICAgPGRlZnM+CiAgICAgICAgPGxpbmVhckdyYWRpZW50IGlkPSJVU0hfX2EiIHgxPSIxNC44NTMiIHgyPSI2LjI0OSIgeTE9IjYuNjUzIiB5Mj0iMTEuMjQ2IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiMwMDZBQ0EiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIuNjYiIHN0b3AtY29sb3I9IiMwMERGRkEiLz4KICAgICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iVVNIX19iIiB4MT0iNC42MyIgeDI9IjExLjU2MyIgeTE9IjQuNzI5IiB5Mj0iMjMuMzE0IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiMwMDU5Q0IiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIuNCIgc3RvcC1jb2xvcj0iIzAwQzNFNCIvPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICAgICAgPGxpbmVhckdyYWRpZW50IGlkPSJVU0hfX2MiIHgxPSIxOC44ODIiIHgyPSIxMC4xMjYiIHkxPSI1LjAxMiIgeTI9IjEzLjM3MSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjMDA2MkM4Ii8+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzAwRTdFRiIvPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICAgICAgPGxpbmVhckdyYWRpZW50IGlkPSJVU0hfX2QiIHgxPSIxNS4yNTYiIHgyPSIxMi4xNTgiIHkxPSIxMy42OTgiIHkyPSIyMS4wNjMiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iIzAwRTBGRiIvPgogICAgICAgICAgICA8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMwMEM5RkYiLz4KICAgICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iVVNIX19lIiB4MT0iNi44OTUiIHgyPSIxMS4yODkiIHkxPSI2LjE3NiIgeTI9IjEzLjcyMyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjMDBDM0ZGIi8+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzAwRjFGRiIvPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICAgICAgPGxpbmVhckdyYWRpZW50IGlkPSJVU0hfX2YiIHgxPSIxMC4zMDEiIHgyPSIxMS4yNyIgeTE9IjguODcxIiB5Mj0iMTAuMDQxIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiMwMEM5RkYiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMDBFOEZGIi8+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgIDwvZGVmcz4KPC9zdmc+Cg==) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xMS45MyAzIDQuMDYgNy41IDEyIDEybDcuOTQyLTQuNXpNNC4wNTkgMTYuNjQ4VjcuNWw3Ljk0IDQuNXY5eiIvPgogICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTE5Ljk0MSAxNi42NDhWNy41TDEyIDEydjl6Ii8+CiAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJtMTIgNy43MjcgMy43MDYgMi4xMTh2NC4yMzVMMTIgMTYuMTk4IDguMjk0IDE0LjA4VjkuODQ1eiIvPgogICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTguMjk0IDkuODk4IDEyIDEydjQuMTk4TDguMjk0IDE0LjA4eiIvPgogICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTE1LjcwNiA5Ljg5OHYtLjA1M0wxMiA3LjcyNyA4LjI5NCA5Ljg0NXYuMDUzTDEyIDExLjk5OXoiLz4KPC9zdmc+Cg==) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNVU0hfX2EpIj4KICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMjQgMEgwdjI0aDI0eiIvPgogICAgICAgIDxwYXRoIGZpbGw9InVybCgjVVNIX19iKSIgZD0iTTExLjkzOSA0IDQuOTQgOCAxMiAxMmw3LjA1OC00eiIvPgogICAgICAgIDxwYXRoIGZpbGw9InVybCgjVVNIX19jKSIgZD0iTTQuOTQgMTYuMTMyVjhMMTIgMTJ2OHoiLz4KICAgICAgICA8cGF0aCBmaWxsPSJ1cmwoI1VTSF9fZCkiIGQ9Ik0xOS4wNTkgMTYuMTMyVjhMMTIgMTJ2OHoiLz4KICAgICAgICA8cGF0aCBmaWxsPSJ1cmwoI1VTSF9fZSkiIGQ9Im0xMiA4LjIwMiAzLjI5NCAxLjg4MnYzLjc2NUwxMiAxNS43M2wtMy4yOTQtMS44ODJ2LTMuNzY1eiIvPgogICAgICAgIDxwYXRoIGZpbGw9InVybCgjVVNIX19mKSIgZD0iTTguNzA2IDEwLjEzMSAxMiAxMnYzLjczMUw4LjcwNiAxMy44NXoiLz4KICAgICAgICA8cGF0aCBmaWxsPSJ1cmwoI1VTSF9fZykiIGQ9Ik0xNS4yOTQgMTAuMTMxdi0uMDQ3TDEyIDguMjAybC0zLjI5NCAxLjg4MnYuMDQ3TDEyIDExLjk5OXoiLz4KICAgIDwvZz4KICAgIDxkZWZzPgogICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iVVNIX19iIiB4MT0iMTQuNTM2IiB4Mj0iNi44ODgiIHkxPSI3LjI0NyIgeTI9IjExLjMzIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiMwMDZBQ0EiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIuNjYiIHN0b3AtY29sb3I9IiMwMERGRkEiLz4KICAgICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iVVNIX19jIiB4MT0iNS40NDkiIHgyPSIxMS42MTEiIHkxPSI1LjUzNyIgeTI9IjIyLjA1NiIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjMDA1OUNCIi8+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iLjQiIHN0b3AtY29sb3I9IiMwMEMzRTQiLz4KICAgICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iVVNIX19kIiB4MT0iMTguMTE4IiB4Mj0iMTAuMzM0IiB5MT0iNS43ODgiIHkyPSIxMy4yMTkiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iIzAwNjJDOCIvPgogICAgICAgICAgICA8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMwMEU3RUYiLz4KICAgICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iVVNIX19lIiB4MT0iMTQuODk0IiB4Mj0iMTIuMTQiIHkxPSIxMy41MDkiIHkyPSIyMC4wNTYiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iIzAwRTBGRiIvPgogICAgICAgICAgICA8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMwMEM5RkYiLz4KICAgICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iVVNIX19mIiB4MT0iNy40NjIiIHgyPSIxMS4zNjgiIHkxPSI2LjgyMyIgeTI9IjEzLjUzMiIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjMDBDM0ZGIi8+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzAwRjFGRiIvPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICAgICAgPGxpbmVhckdyYWRpZW50IGlkPSJVU0hfX2ciIHgxPSIxMC40OSIgeDI9IjExLjM1MSIgeTE9IjkuMjE4IiB5Mj0iMTAuMjU4IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiMwMEM5RkYiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMDBFOEZGIi8+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgICAgICA8Y2xpcFBhdGggaWQ9IlVTSF9fYSI+CiAgICAgICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0wIDBoMjR2MjRIMHoiLz4KICAgICAgICA8L2NsaXBQYXRoPgogICAgPC9kZWZzPgo8L3N2Zz4K)
 * @see https://web3icons.io/tokens/USH
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenUSH = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenUSH', __iconNode);
;
}),
];

//# sourceMappingURL=1qqr_%40web3icons_react_dist_1lqim29._.js.map