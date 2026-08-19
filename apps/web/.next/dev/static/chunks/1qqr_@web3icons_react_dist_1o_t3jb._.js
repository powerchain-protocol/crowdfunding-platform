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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenSHX.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenSHX
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-client] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: 'url(#SHX__a)',
                d: 'M8.35 3 3.31 20.385a.476.476 0 0 0 .447.615h16.49c.308 0 .529-.302.447-.61L15.776 3h-1.51l.245 1.161h-1.347V3H10.84v1.161H9.645L9.819 3H8.344z'
            }
        ],
        [
            'path',
            {
                fill: 'url(#SHX__b)',
                d: 'm20.236 18.712-8.222-4.366V3h1.15v1.161h1.353L14.273 3h1.51z'
            }
        ],
        [
            'path',
            {
                fill: 'url(#SHX__c)',
                d: 'm3.78 18.712 8.222-4.366V3h-.825v1.161H9.493L9.743 3h-1.51z'
            }
        ],
        [
            'defs',
            {},
            [
                [
                    'linearGradient',
                    {
                        id: 'SHX__a',
                        x1: '12.002',
                        x2: '12.002',
                        y1: '3',
                        y2: '21.581',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                offset: '.64',
                                stopColor: '#054DC9'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#0B3299'
                            }
                        ]
                    ]
                ],
                [
                    'linearGradient',
                    {
                        id: 'SHX__b',
                        x1: '3.289',
                        x2: '5.97',
                        y1: '4.596',
                        y2: '22.565',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#0556D9'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '.77',
                                stopColor: '#0A2993'
                            }
                        ]
                    ]
                ],
                [
                    'linearGradient',
                    {
                        id: 'SHX__c',
                        x1: '3.141',
                        x2: '12.309',
                        y1: '4.057',
                        y2: '13.875',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#025EE3'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#0E2FA2'
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
                d: 'M8.35 3 3.31 20.385a.476.476 0 0 0 .447.615h16.49c.308 0 .529-.302.447-.61L15.776 3h-1.51l.245 1.161h-1.347V3H10.84v1.161H9.645L9.819 3H8.344z'
            }
        ],
        [
            'path',
            {
                fill: 'currentColor',
                d: 'm20.235 18.712-8.222-4.366V3h1.15v1.161h1.353L14.272 3h1.51zm-16.455 0 8.222-4.366V3h-.825v1.161H9.493L9.743 3h-1.51z'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#SHX__a)'
            },
            [
                [
                    'path',
                    {
                        fill: 'url(#SHX__b)',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'm8.755 4-4.48 15.453a.423.423 0 0 0 .398.547H19.33c.273 0 .47-.268.397-.542L15.357 4h-1.342l.216 1.032h-1.197V4H10.97v1.032H9.907L10.061 4h-1.31z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'm19.32 17.966-7.308-3.88V4h1.022v1.032h1.202L14.02 4h1.342zm-14.627 0 7.309-3.88V4h-.733v1.032H9.772L9.994 4H8.652z'
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
                        id: 'SHX__b',
                        x1: '12.002',
                        x2: '12.002',
                        y1: '4',
                        y2: '20.516',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                offset: '.64',
                                stopColor: '#054DC9'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#0B3299'
                            }
                        ]
                    ]
                ],
                [
                    'clipPath',
                    {
                        id: 'SHX__a'
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
 * @component @name TokenSHX
 * @description Web3Icon for TokenSHX
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9InVybCgjU0hYX19hKSIgZD0iTTguMzUgMyAzLjMxIDIwLjM4NWEuNDc2LjQ3NiAwIDAgMCAuNDQ3LjYxNWgxNi40OWMuMzA4IDAgLjUyOS0uMzAyLjQ0Ny0uNjFMMTUuNzc2IDNoLTEuNTFsLjI0NSAxLjE2MWgtMS4zNDdWM0gxMC44NHYxLjE2MUg5LjY0NUw5LjgxOSAzSDguMzQ0eiIvPgogICAgPHBhdGggZmlsbD0idXJsKCNTSFhfX2IpIiBkPSJtMjAuMjM2IDE4LjcxMi04LjIyMi00LjM2NlYzaDEuMTV2MS4xNjFoMS4zNTNMMTQuMjczIDNoMS41MXoiLz4KICAgIDxwYXRoIGZpbGw9InVybCgjU0hYX19jKSIgZD0ibTMuNzggMTguNzEyIDguMjIyLTQuMzY2VjNoLS44MjV2MS4xNjFIOS40OTNMOS43NDMgM2gtMS41MXoiLz4KICAgIDxkZWZzPgogICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iU0hYX19hIiB4MT0iMTIuMDAyIiB4Mj0iMTIuMDAyIiB5MT0iMyIgeTI9IjIxLjU4MSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgICAgICAgICA8c3RvcCBvZmZzZXQ9Ii42NCIgc3RvcC1jb2xvcj0iIzA1NERDOSIvPgogICAgICAgICAgICA8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMwQjMyOTkiLz4KICAgICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iU0hYX19iIiB4MT0iMy4yODkiIHgyPSI1Ljk3IiB5MT0iNC41OTYiIHkyPSIyMi41NjUiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iIzA1NTZEOSIvPgogICAgICAgICAgICA8c3RvcCBvZmZzZXQ9Ii43NyIgc3RvcC1jb2xvcj0iIzBBMjk5MyIvPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICAgICAgPGxpbmVhckdyYWRpZW50IGlkPSJTSFhfX2MiIHgxPSIzLjE0MSIgeDI9IjEyLjMwOSIgeTE9IjQuMDU3IiB5Mj0iMTMuODc1IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiMwMjVFRTMiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMEUyRkEyIi8+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgIDwvZGVmcz4KPC9zdmc+Cg==) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik04LjM1IDMgMy4zMSAyMC4zODVhLjQ3Ni40NzYgMCAwIDAgLjQ0Ny42MTVoMTYuNDljLjMwOCAwIC41MjktLjMwMi40NDctLjYxTDE1Ljc3NiAzaC0xLjUxbC4yNDUgMS4xNjFoLTEuMzQ3VjNIMTAuODR2MS4xNjFIOS42NDVMOS44MTkgM0g4LjM0NHoiLz4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Im0yMC4yMzUgMTguNzEyLTguMjIyLTQuMzY2VjNoMS4xNXYxLjE2MWgxLjM1M0wxNC4yNzIgM2gxLjUxem0tMTYuNDU1IDAgOC4yMjItNC4zNjZWM2gtLjgyNXYxLjE2MUg5LjQ5M0w5Ljc0MyAzaC0xLjUxeiIvPgo8L3N2Zz4K) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNTSFhfX2EpIj4KICAgICAgICA8cGF0aCBmaWxsPSJ1cmwoI1NIWF9fYikiIGQ9Ik0yNCAwSDB2MjRoMjR6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0ibTguNzU1IDQtNC40OCAxNS40NTNhLjQyMy40MjMgMCAwIDAgLjM5OC41NDdIMTkuMzNjLjI3MyAwIC40Ny0uMjY4LjM5Ny0uNTQyTDE1LjM1NyA0aC0xLjM0MmwuMjE2IDEuMDMyaC0xLjE5N1Y0SDEwLjk3djEuMDMySDkuOTA3TDEwLjA2MSA0aC0xLjMxeiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Im0xOS4zMiAxNy45NjYtNy4zMDgtMy44OFY0aDEuMDIydjEuMDMyaDEuMjAyTDE0LjAyIDRoMS4zNDJ6bS0xNC42MjcgMCA3LjMwOS0zLjg4VjRoLS43MzN2MS4wMzJIOS43NzJMOS45OTQgNEg4LjY1MnoiLz4KICAgIDwvZz4KICAgIDxkZWZzPgogICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iU0hYX19iIiB4MT0iMTIuMDAyIiB4Mj0iMTIuMDAyIiB5MT0iNCIgeTI9IjIwLjUxNiIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgICAgICAgICA8c3RvcCBvZmZzZXQ9Ii42NCIgc3RvcC1jb2xvcj0iIzA1NERDOSIvPgogICAgICAgICAgICA8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMwQjMyOTkiLz4KICAgICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgICAgIDxjbGlwUGF0aCBpZD0iU0hYX19hIj4KICAgICAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTAgMGgyNHYyNEgweiIvPgogICAgICAgIDwvY2xpcFBhdGg+CiAgICA8L2RlZnM+Cjwvc3ZnPgo=)
 * @see https://web3icons.io/tokens/SHX
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenSHX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenSHX', __iconNode);
;
}),
]);

//# sourceMappingURL=1qqr_%40web3icons_react_dist_1o_t3jb._.js.map