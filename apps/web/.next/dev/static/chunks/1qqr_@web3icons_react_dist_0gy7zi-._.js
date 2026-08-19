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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenLDO.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenLDO
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-client] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: 'url(#LDO__a)',
                d: 'm11.997 14.129-5.106-3-.144.22a6.32 6.32 0 0 0 .846 7.816 6.2 6.2 0 0 0 8.808 0 6.296 6.296 0 0 0 .847-7.816l-.145-.22z'
            }
        ],
        [
            'path',
            {
                fill: 'url(#LDO__b)',
                d: 'm17.078 11.14-5.066 2.978L6.91 11.14l5.1-2.69z'
            }
        ],
        [
            'path',
            {
                fill: 'url(#LDO__c)',
                d: 'm12.002 3 4.404 6.95-4.404 2.585z'
            }
        ],
        [
            'path',
            {
                fill: 'url(#LDO__d)',
                d: 'M12.002 3v9.535L7.6 9.945z'
            }
        ],
        [
            'defs',
            {},
            [
                [
                    'linearGradient',
                    {
                        id: 'LDO__a',
                        x1: '11.997',
                        x2: '11.997',
                        y1: '3',
                        y2: '21.006',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#498BE9'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#56F2FF'
                            }
                        ]
                    ]
                ],
                [
                    'linearGradient',
                    {
                        id: 'LDO__b',
                        x1: '11.996',
                        x2: '11.996',
                        y1: '3.015',
                        y2: '20.999',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#4A8CEA'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '.7',
                                stopColor: '#5ABEF4'
                            }
                        ]
                    ]
                ],
                [
                    'linearGradient',
                    {
                        id: 'LDO__c',
                        x1: '13.325',
                        x2: '10.874',
                        y1: '13.006',
                        y2: '21.729',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#FB8174'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '.56',
                                stopColor: '#568FDD'
                            }
                        ]
                    ]
                ],
                [
                    'linearGradient',
                    {
                        id: 'LDO__d',
                        x1: '8.531',
                        x2: '9.328',
                        y1: '7.767',
                        y2: '11.618',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#FFE235'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '.61',
                                stopColor: '#5DCBA2'
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
                d: 'm11.997 14.129-5.106-3-.144.22a6.32 6.32 0 0 0 .846 7.816 6.2 6.2 0 0 0 8.808 0 6.296 6.296 0 0 0 .847-7.816l-.145-.22z'
            }
        ],
        [
            'path',
            {
                fill: 'currentColor',
                d: 'm12.002 3 4.404 6.95-4.404 2.585z'
            }
        ],
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M12.002 3v9.535L7.6 9.945z'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#LDO__a)'
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
                        fill: 'url(#LDO__b)',
                        d: 'm11.998 13.892-4.54-2.665-.128.194a5.615 5.615 0 0 0 .753 6.948 5.51 5.51 0 0 0 7.829 0 5.596 5.596 0 0 0 .753-6.948l-.129-.194z'
                    }
                ],
                [
                    'path',
                    {
                        fill: 'url(#LDO__c)',
                        d: 'm16.515 11.235-4.504 2.648-4.534-2.648 4.534-2.391z'
                    }
                ],
                [
                    'path',
                    {
                        fill: 'url(#LDO__d)',
                        d: 'm12.003 4 3.914 6.177-3.914 2.298z'
                    }
                ],
                [
                    'path',
                    {
                        fill: 'url(#LDO__e)',
                        d: 'M12.003 4v8.475L8.09 10.173z'
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
                        id: 'LDO__b',
                        x1: '11.998',
                        x2: '11.998',
                        y1: '4',
                        y2: '20.005',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#498BE9'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#56F2FF'
                            }
                        ]
                    ]
                ],
                [
                    'linearGradient',
                    {
                        id: 'LDO__c',
                        x1: '11.998',
                        x2: '11.998',
                        y1: '4.014',
                        y2: '19.999',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#4A8CEA'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '.7',
                                stopColor: '#5ABEF4'
                            }
                        ]
                    ]
                ],
                [
                    'linearGradient',
                    {
                        id: 'LDO__d',
                        x1: '13.179',
                        x2: '11',
                        y1: '12.895',
                        y2: '20.648',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#FB8174'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '.56',
                                stopColor: '#568FDD'
                            }
                        ]
                    ]
                ],
                [
                    'linearGradient',
                    {
                        id: 'LDO__e',
                        x1: '8.917',
                        x2: '9.626',
                        y1: '8.238',
                        y2: '11.661',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#FFE235'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '.61',
                                stopColor: '#5DCBA2'
                            }
                        ]
                    ]
                ],
                [
                    'clipPath',
                    {
                        id: 'LDO__a'
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
 * @component @name TokenLDO
 * @description Web3Icon for TokenLDO
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9InVybCgjTERPX19hKSIgZD0ibTExLjk5NyAxNC4xMjktNS4xMDYtMy0uMTQ0LjIyYTYuMzIgNi4zMiAwIDAgMCAuODQ2IDcuODE2IDYuMiA2LjIgMCAwIDAgOC44MDggMCA2LjI5NiA2LjI5NiAwIDAgMCAuODQ3LTcuODE2bC0uMTQ1LS4yMnoiLz4KICAgIDxwYXRoIGZpbGw9InVybCgjTERPX19iKSIgZD0ibTE3LjA3OCAxMS4xNC01LjA2NiAyLjk3OEw2LjkxIDExLjE0bDUuMS0yLjY5eiIvPgogICAgPHBhdGggZmlsbD0idXJsKCNMRE9fX2MpIiBkPSJtMTIuMDAyIDMgNC40MDQgNi45NS00LjQwNCAyLjU4NXoiLz4KICAgIDxwYXRoIGZpbGw9InVybCgjTERPX19kKSIgZD0iTTEyLjAwMiAzdjkuNTM1TDcuNiA5Ljk0NXoiLz4KICAgIDxkZWZzPgogICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iTERPX19hIiB4MT0iMTEuOTk3IiB4Mj0iMTEuOTk3IiB5MT0iMyIgeTI9IjIxLjAwNiIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjNDk4QkU5Ii8+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzU2RjJGRiIvPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICAgICAgPGxpbmVhckdyYWRpZW50IGlkPSJMRE9fX2IiIHgxPSIxMS45OTYiIHgyPSIxMS45OTYiIHkxPSIzLjAxNSIgeTI9IjIwLjk5OSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjNEE4Q0VBIi8+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iLjciIHN0b3AtY29sb3I9IiM1QUJFRjQiLz4KICAgICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iTERPX19jIiB4MT0iMTMuMzI1IiB4Mj0iMTAuODc0IiB5MT0iMTMuMDA2IiB5Mj0iMjEuNzI5IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiNGQjgxNzQiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIuNTYiIHN0b3AtY29sb3I9IiM1NjhGREQiLz4KICAgICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iTERPX19kIiB4MT0iOC41MzEiIHgyPSI5LjMyOCIgeTE9IjcuNzY3IiB5Mj0iMTEuNjE4IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiNGRkUyMzUiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIuNjEiIHN0b3AtY29sb3I9IiM1RENCQTIiLz4KICAgICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgPC9kZWZzPgo8L3N2Zz4K) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Im0xMS45OTcgMTQuMTI5LTUuMTA2LTMtLjE0NC4yMmE2LjMyIDYuMzIgMCAwIDAgLjg0NiA3LjgxNiA2LjIgNi4yIDAgMCAwIDguODA4IDAgNi4yOTYgNi4yOTYgMCAwIDAgLjg0Ny03LjgxNmwtLjE0NS0uMjJ6Ii8+CiAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJtMTIuMDAyIDMgNC40MDQgNi45NS00LjQwNCAyLjU4NXoiLz4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xMi4wMDIgM3Y5LjUzNUw3LjYgOS45NDV6Ii8+Cjwvc3ZnPgo=) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNMRE9fX2EpIj4KICAgICAgICA8cGF0aCBmaWxsPSIjMDAwIiBkPSJNMjQgMEgwdjI0aDI0eiIvPgogICAgICAgIDxwYXRoIGZpbGw9InVybCgjTERPX19iKSIgZD0ibTExLjk5OCAxMy44OTItNC41NC0yLjY2NS0uMTI4LjE5NGE1LjYxNSA1LjYxNSAwIDAgMCAuNzUzIDYuOTQ4IDUuNTEgNS41MSAwIDAgMCA3LjgyOSAwIDUuNTk2IDUuNTk2IDAgMCAwIC43NTMtNi45NDhsLS4xMjktLjE5NHoiLz4KICAgICAgICA8cGF0aCBmaWxsPSJ1cmwoI0xET19fYykiIGQ9Im0xNi41MTUgMTEuMjM1LTQuNTA0IDIuNjQ4LTQuNTM0LTIuNjQ4IDQuNTM0LTIuMzkxeiIvPgogICAgICAgIDxwYXRoIGZpbGw9InVybCgjTERPX19kKSIgZD0ibTEyLjAwMyA0IDMuOTE0IDYuMTc3LTMuOTE0IDIuMjk4eiIvPgogICAgICAgIDxwYXRoIGZpbGw9InVybCgjTERPX19lKSIgZD0iTTEyLjAwMyA0djguNDc1TDguMDkgMTAuMTczeiIvPgogICAgPC9nPgogICAgPGRlZnM+CiAgICAgICAgPGxpbmVhckdyYWRpZW50IGlkPSJMRE9fX2IiIHgxPSIxMS45OTgiIHgyPSIxMS45OTgiIHkxPSI0IiB5Mj0iMjAuMDA1IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiM0OThCRTkiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjNTZGMkZGIi8+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgICAgICA8bGluZWFyR3JhZGllbnQgaWQ9IkxET19fYyIgeDE9IjExLjk5OCIgeDI9IjExLjk5OCIgeTE9IjQuMDE0IiB5Mj0iMTkuOTk5IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiM0QThDRUEiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIuNyIgc3RvcC1jb2xvcj0iIzVBQkVGNCIvPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICAgICAgPGxpbmVhckdyYWRpZW50IGlkPSJMRE9fX2QiIHgxPSIxMy4xNzkiIHgyPSIxMSIgeTE9IjEyLjg5NSIgeTI9IjIwLjY0OCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjRkI4MTc0Ii8+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iLjU2IiBzdG9wLWNvbG9yPSIjNTY4RkREIi8+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgICAgICA8bGluZWFyR3JhZGllbnQgaWQ9IkxET19fZSIgeDE9IjguOTE3IiB4Mj0iOS42MjYiIHkxPSI4LjIzOCIgeTI9IjExLjY2MSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjRkZFMjM1Ii8+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iLjYxIiBzdG9wLWNvbG9yPSIjNURDQkEyIi8+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgICAgICA8Y2xpcFBhdGggaWQ9IkxET19fYSI+CiAgICAgICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0wIDBoMjR2MjRIMHoiLz4KICAgICAgICA8L2NsaXBQYXRoPgogICAgPC9kZWZzPgo8L3N2Zz4K)
 * @see https://web3icons.io/tokens/LDO
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenLDO = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenLDO', __iconNode);
;
}),
]);

//# sourceMappingURL=1qqr_%40web3icons_react_dist_0gy7zi-._.js.map