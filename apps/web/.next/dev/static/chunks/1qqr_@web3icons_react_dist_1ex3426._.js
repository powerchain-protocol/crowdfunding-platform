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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenUW3S.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenUW3S
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-client] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: 'url(#UW3S__a)',
                d: 'M15.148 8.62H8.62v6.528a6.085 6.085 0 0 1-5.48-7.365 6.083 6.083 0 0 1 12.008.837'
            }
        ],
        [
            'path',
            {
                fill: 'url(#UW3S__b)',
                d: 'M8.835 15.047A6.207 6.207 0 0 0 15.04 8.62H21V21H8.62v-5.964z'
            }
        ],
        [
            'defs',
            {},
            [
                [
                    'linearGradient',
                    {
                        id: 'UW3S__a',
                        x1: '19.749',
                        x2: '2.991',
                        y1: '11.245',
                        y2: '15.33',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#C3F5E9'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '.17',
                                stopColor: '#C7C6E8'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '.45',
                                stopColor: '#D196E5'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '.69',
                                stopColor: '#7698EC'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '.95',
                                stopColor: '#5693F0'
                            }
                        ]
                    ]
                ],
                [
                    'linearGradient',
                    {
                        id: 'UW3S__b',
                        x1: '20.404',
                        x2: '8.993',
                        y1: '8.942',
                        y2: '21',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#E9CFEB'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '.2',
                                stopColor: '#AC90F4'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '.49',
                                stopColor: '#7567F8'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#3095F4'
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
                d: 'M15.149 8.62H8.62v6.528A6.084 6.084 0 0 1 4.782 4.782 6.083 6.083 0 0 1 15.148 8.62'
            }
        ],
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M8.834 15.047A6.207 6.207 0 0 0 15.04 8.62H21V21H8.62v-5.964z'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#UW3S__a)'
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
                        fill: 'url(#UW3S__b)',
                        d: 'M14.798 8.996H8.996v5.802a5.408 5.408 0 0 1-3.412-9.214 5.407 5.407 0 0 1 9.214 3.412'
                    }
                ],
                [
                    'path',
                    {
                        fill: 'url(#UW3S__c)',
                        d: 'M9.187 14.708a5.517 5.517 0 0 0 5.516-5.711H20V20H8.997v-5.302z'
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
                        id: 'UW3S__b',
                        x1: '18.888',
                        x2: '3.992',
                        y1: '11.329',
                        y2: '14.96',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#C3F5E9'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '.17',
                                stopColor: '#C7C6E8'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '.45',
                                stopColor: '#D196E5'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '.69',
                                stopColor: '#7698EC'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '.95',
                                stopColor: '#5693F0'
                            }
                        ]
                    ]
                ],
                [
                    'linearGradient',
                    {
                        id: 'UW3S__c',
                        x1: '19.47',
                        x2: '9.327',
                        y1: '9.282',
                        y2: '20',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#E9CFEB'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '.2',
                                stopColor: '#AC90F4'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '.49',
                                stopColor: '#7567F8'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#3095F4'
                            }
                        ]
                    ]
                ],
                [
                    'clipPath',
                    {
                        id: 'UW3S__a'
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
 * @component @name TokenUW3S
 * @description Web3Icon for TokenUW3S
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9InVybCgjVVczU19fYSkiIGQ9Ik0xNS4xNDggOC42Mkg4LjYydjYuNTI4YTYuMDg1IDYuMDg1IDAgMCAxLTUuNDgtNy4zNjUgNi4wODMgNi4wODMgMCAwIDEgMTIuMDA4LjgzNyIvPgogICAgPHBhdGggZmlsbD0idXJsKCNVVzNTX19iKSIgZD0iTTguODM1IDE1LjA0N0E2LjIwNyA2LjIwNyAwIDAgMCAxNS4wNCA4LjYySDIxVjIxSDguNjJ2LTUuOTY0eiIvPgogICAgPGRlZnM+CiAgICAgICAgPGxpbmVhckdyYWRpZW50IGlkPSJVVzNTX19hIiB4MT0iMTkuNzQ5IiB4Mj0iMi45OTEiIHkxPSIxMS4yNDUiIHkyPSIxNS4zMyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjQzNGNUU5Ii8+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iLjE3IiBzdG9wLWNvbG9yPSIjQzdDNkU4Ii8+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iLjQ1IiBzdG9wLWNvbG9yPSIjRDE5NkU1Ii8+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iLjY5IiBzdG9wLWNvbG9yPSIjNzY5OEVDIi8+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iLjk1IiBzdG9wLWNvbG9yPSIjNTY5M0YwIi8+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgICAgICA8bGluZWFyR3JhZGllbnQgaWQ9IlVXM1NfX2IiIHgxPSIyMC40MDQiIHgyPSI4Ljk5MyIgeTE9IjguOTQyIiB5Mj0iMjEiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iI0U5Q0ZFQiIvPgogICAgICAgICAgICA8c3RvcCBvZmZzZXQ9Ii4yIiBzdG9wLWNvbG9yPSIjQUM5MEY0Ii8+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iLjQ5IiBzdG9wLWNvbG9yPSIjNzU2N0Y4Ii8+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzMwOTVGNCIvPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICA8L2RlZnM+Cjwvc3ZnPgo=) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xNS4xNDkgOC42Mkg4LjYydjYuNTI4QTYuMDg0IDYuMDg0IDAgMCAxIDQuNzgyIDQuNzgyIDYuMDgzIDYuMDgzIDAgMCAxIDE1LjE0OCA4LjYyIi8+CiAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNOC44MzQgMTUuMDQ3QTYuMjA3IDYuMjA3IDAgMCAwIDE1LjA0IDguNjJIMjFWMjFIOC42MnYtNS45NjR6Ii8+Cjwvc3ZnPgo=) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNVVzNTX19hKSI+CiAgICAgICAgPHBhdGggZmlsbD0iIzAwMCIgZD0iTTI0IDBIMHYyNGgyNHoiLz4KICAgICAgICA8cGF0aCBmaWxsPSJ1cmwoI1VXM1NfX2IpIiBkPSJNMTQuNzk4IDguOTk2SDguOTk2djUuODAyYTUuNDA4IDUuNDA4IDAgMCAxLTMuNDEyLTkuMjE0IDUuNDA3IDUuNDA3IDAgMCAxIDkuMjE0IDMuNDEyIi8+CiAgICAgICAgPHBhdGggZmlsbD0idXJsKCNVVzNTX19jKSIgZD0iTTkuMTg3IDE0LjcwOGE1LjUxNyA1LjUxNyAwIDAgMCA1LjUxNi01LjcxMUgyMFYyMEg4Ljk5N3YtNS4zMDJ6Ii8+CiAgICA8L2c+CiAgICA8ZGVmcz4KICAgICAgICA8bGluZWFyR3JhZGllbnQgaWQ9IlVXM1NfX2IiIHgxPSIxOC44ODgiIHgyPSIzLjk5MiIgeTE9IjExLjMyOSIgeTI9IjE0Ljk2IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiNDM0Y1RTkiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIuMTciIHN0b3AtY29sb3I9IiNDN0M2RTgiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIuNDUiIHN0b3AtY29sb3I9IiNEMTk2RTUiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIuNjkiIHN0b3AtY29sb3I9IiM3Njk4RUMiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIuOTUiIHN0b3AtY29sb3I9IiM1NjkzRjAiLz4KICAgICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iVVczU19fYyIgeDE9IjE5LjQ3IiB4Mj0iOS4zMjciIHkxPSI5LjI4MiIgeTI9IjIwIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiNFOUNGRUIiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIuMiIgc3RvcC1jb2xvcj0iI0FDOTBGNCIvPgogICAgICAgICAgICA8c3RvcCBvZmZzZXQ9Ii40OSIgc3RvcC1jb2xvcj0iIzc1NjdGOCIvPgogICAgICAgICAgICA8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMzMDk1RjQiLz4KICAgICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgICAgIDxjbGlwUGF0aCBpZD0iVVczU19fYSI+CiAgICAgICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0wIDBoMjR2MjRIMHoiLz4KICAgICAgICA8L2NsaXBQYXRoPgogICAgPC9kZWZzPgo8L3N2Zz4K)
 * @see https://web3icons.io/tokens/UW3S
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenUW3S = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenUW3S', __iconNode);
;
}),
]);

//# sourceMappingURL=1qqr_%40web3icons_react_dist_1ex3426._.js.map