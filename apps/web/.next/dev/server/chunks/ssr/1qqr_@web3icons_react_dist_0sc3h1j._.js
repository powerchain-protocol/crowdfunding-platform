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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenMVD.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenMVD
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-ssr] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: 'url(#MVD__a)',
                d: 'm3 7.5 9 9V21l-9-9z'
            }
        ],
        [
            'path',
            {
                fill: 'url(#MVD__b)',
                d: 'm3 12 4.5-4.5V3L3 7.5z'
            }
        ],
        [
            'path',
            {
                fill: '#C58F3C',
                d: 'M5.25 9.75 3 12V7.5z'
            }
        ],
        [
            'path',
            {
                fill: '#FFAA27',
                d: 'M12 12 7.5 7.5V3L12 7.579z'
            }
        ],
        [
            'path',
            {
                fill: 'url(#MVD__c)',
                d: 'm21 7.5-9 9V21l9-9z'
            }
        ],
        [
            'path',
            {
                fill: 'url(#MVD__d)',
                d: 'm21 12-4.5-4.5V3L21 7.5z'
            }
        ],
        [
            'path',
            {
                fill: '#D79B3F',
                d: 'M18.75 9.75 21 12V7.5z'
            }
        ],
        [
            'path',
            {
                fill: '#D28A1C',
                d: 'm12 12 4.5-4.5V3L12 7.579z'
            }
        ],
        [
            'defs',
            {},
            [
                [
                    'linearGradient',
                    {
                        id: 'MVD__a',
                        x1: '3',
                        x2: '12.98',
                        y1: '4.898',
                        y2: '24.985',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#955A00'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '.79',
                                stopColor: '#F29F20'
                            }
                        ]
                    ]
                ],
                [
                    'linearGradient',
                    {
                        id: 'MVD__b',
                        x1: '6.532',
                        x2: '13.466',
                        y1: '14.205',
                        y2: '-.138',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#9E877A'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#fff'
                            }
                        ]
                    ]
                ],
                [
                    'linearGradient',
                    {
                        id: 'MVD__c',
                        x1: '9.154',
                        x2: '12.601',
                        y1: '10.582',
                        y2: '15.596',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#B06E07'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#C77E0C'
                            }
                        ]
                    ]
                ],
                [
                    'linearGradient',
                    {
                        id: 'MVD__d',
                        x1: '17.467',
                        x2: '10.534',
                        y1: '14.205',
                        y2: '-.138',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#9E877A'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#fff'
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
                d: 'm3 7.5 9 9V21l-9-9z'
            }
        ],
        [
            'path',
            {
                fill: 'currentColor',
                d: 'm3 12 4.5-4.5V3L3 7.5z'
            }
        ],
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M5.25 9.75 3 12V7.5zM12 12 7.5 7.5V3L12 7.579zm9-4.5-9 9V21l9-9z'
            }
        ],
        [
            'path',
            {
                fill: 'currentColor',
                d: 'm20.999 12-4.5-4.5V3l4.5 4.5z'
            }
        ],
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M18.75 9.75 21 12V7.5zM12 12l4.5-4.5V3L12 7.579z'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#MVD__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#FFAA27',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'm4 8 8 8v4l-8-8z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'm4 12 4-4V4L4 8z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'm6 10-2 2V8zm6 2L8 8V4l4 4.07zm8-4-8 8v4l8-8z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'm19.999 12-4-4V4l4 4z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'm18 10 2 2V8zm-6 2 4-4V4l-4 4.07z'
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
                        id: 'MVD__a'
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
 * @component @name TokenMVD
 * @description Web3Icon for TokenMVD
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9InVybCgjTVZEX19hKSIgZD0ibTMgNy41IDkgOVYyMWwtOS05eiIvPgogICAgPHBhdGggZmlsbD0idXJsKCNNVkRfX2IpIiBkPSJtMyAxMiA0LjUtNC41VjNMMyA3LjV6Ii8+CiAgICA8cGF0aCBmaWxsPSIjQzU4RjNDIiBkPSJNNS4yNSA5Ljc1IDMgMTJWNy41eiIvPgogICAgPHBhdGggZmlsbD0iI0ZGQUEyNyIgZD0iTTEyIDEyIDcuNSA3LjVWM0wxMiA3LjU3OXoiLz4KICAgIDxwYXRoIGZpbGw9InVybCgjTVZEX19jKSIgZD0ibTIxIDcuNS05IDlWMjFsOS05eiIvPgogICAgPHBhdGggZmlsbD0idXJsKCNNVkRfX2QpIiBkPSJtMjEgMTItNC41LTQuNVYzTDIxIDcuNXoiLz4KICAgIDxwYXRoIGZpbGw9IiNENzlCM0YiIGQ9Ik0xOC43NSA5Ljc1IDIxIDEyVjcuNXoiLz4KICAgIDxwYXRoIGZpbGw9IiNEMjhBMUMiIGQ9Im0xMiAxMiA0LjUtNC41VjNMMTIgNy41Nzl6Ii8+CiAgICA8ZGVmcz4KICAgICAgICA8bGluZWFyR3JhZGllbnQgaWQ9Ik1WRF9fYSIgeDE9IjMiIHgyPSIxMi45OCIgeTE9IjQuODk4IiB5Mj0iMjQuOTg1IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiM5NTVBMDAiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIuNzkiIHN0b3AtY29sb3I9IiNGMjlGMjAiLz4KICAgICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iTVZEX19iIiB4MT0iNi41MzIiIHgyPSIxMy40NjYiIHkxPSIxNC4yMDUiIHkyPSItLjEzOCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjOUU4NzdBIi8+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI2ZmZiIvPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICAgICAgPGxpbmVhckdyYWRpZW50IGlkPSJNVkRfX2MiIHgxPSI5LjE1NCIgeDI9IjEyLjYwMSIgeTE9IjEwLjU4MiIgeTI9IjE1LjU5NiIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjQjA2RTA3Ii8+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI0M3N0UwQyIvPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICAgICAgPGxpbmVhckdyYWRpZW50IGlkPSJNVkRfX2QiIHgxPSIxNy40NjciIHgyPSIxMC41MzQiIHkxPSIxNC4yMDUiIHkyPSItLjEzOCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjOUU4NzdBIi8+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI2ZmZiIvPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICA8L2RlZnM+Cjwvc3ZnPgo=) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Im0zIDcuNSA5IDlWMjFsLTktOXoiLz4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Im0zIDEyIDQuNS00LjVWM0wzIDcuNXoiLz4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik01LjI1IDkuNzUgMyAxMlY3LjV6TTEyIDEyIDcuNSA3LjVWM0wxMiA3LjU3OXptOS00LjUtOSA5VjIxbDktOXoiLz4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Im0yMC45OTkgMTItNC41LTQuNVYzbDQuNSA0LjV6Ii8+CiAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTguNzUgOS43NSAyMSAxMlY3LjV6TTEyIDEybDQuNS00LjVWM0wxMiA3LjU3OXoiLz4KPC9zdmc+Cg==) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNNVkRfX2EpIj4KICAgICAgICA8cGF0aCBmaWxsPSIjRkZBQTI3IiBkPSJNMjQgMEgwdjI0aDI0eiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Im00IDggOCA4djRsLTgtOHoiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJtNCAxMiA0LTRWNEw0IDh6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0ibTYgMTAtMiAyVjh6bTYgMkw4IDhWNGw0IDQuMDd6bTgtNC04IDh2NGw4LTh6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0ibTE5Ljk5OSAxMi00LTRWNGw0IDR6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0ibTE4IDEwIDIgMlY4em0tNiAyIDQtNFY0bC00IDQuMDd6Ii8+CiAgICA8L2c+CiAgICA8ZGVmcz4KICAgICAgICA8Y2xpcFBhdGggaWQ9Ik1WRF9fYSI+CiAgICAgICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0wIDBoMjR2MjRIMHoiLz4KICAgICAgICA8L2NsaXBQYXRoPgogICAgPC9kZWZzPgo8L3N2Zz4K)
 * @see https://web3icons.io/tokens/MVD
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenMVD = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenMVD', __iconNode);
;
}),
];

//# sourceMappingURL=1qqr_%40web3icons_react_dist_0sc3h1j._.js.map