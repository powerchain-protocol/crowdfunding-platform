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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenLINA.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenLINA
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-client] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: 'url(#LINA__a)',
                d: 'M4.638 14.548a2.22 2.22 0 0 1 0-3.119L12.977 3l.389.393a2.22 2.22 0 0 1 0 3.118l-8.34 8.43z'
            }
        ],
        [
            'path',
            {
                fill: 'url(#LINA__b)',
                d: 'M7.635 17.578a2.22 2.22 0 0 1 0-3.118l8.339-8.43.388.394a2.22 2.22 0 0 1 0 3.118l-8.338 8.43z'
            }
        ],
        [
            'path',
            {
                fill: 'url(#LINA__c)',
                d: 'M10.634 17.489a2.22 2.22 0 0 0 0 3.118l.39.393 8.338-8.43a2.22 2.22 0 0 0 0-3.117l-.388-.393z'
            }
        ],
        [
            'defs',
            {},
            [
                [
                    'linearGradient',
                    {
                        id: 'LINA__a',
                        x1: '10.455',
                        x2: '22.52',
                        y1: '10.529',
                        y2: '23.189',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#6BB7FF'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#053BF7'
                            }
                        ]
                    ]
                ],
                [
                    'linearGradient',
                    {
                        id: 'LINA__b',
                        x1: '5.661',
                        x2: '17.726',
                        y1: '5.962',
                        y2: '18.623',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#6BB7FF'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#053BF7'
                            }
                        ]
                    ]
                ],
                [
                    'linearGradient',
                    {
                        id: 'LINA__c',
                        x1: '8.038',
                        x2: '16.05',
                        y1: '7.994',
                        y2: '15.919',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#6BB7FF'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#053BF7'
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
                d: 'M4.64 14.547a2.22 2.22 0 0 1 0-3.118L12.978 3l.389.393a2.22 2.22 0 0 1 0 3.118l-8.339 8.428zm2.997 3.03a2.22 2.22 0 0 1 0-3.118l8.338-8.428.389.393a2.22 2.22 0 0 1 0 3.118L8.025 17.97zm2.997-.087a2.22 2.22 0 0 0 0 3.117l.389.393 8.338-8.428a2.22 2.22 0 0 0 0-3.118l-.388-.393z'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#LINA__a)'
            },
            [
                [
                    'path',
                    {
                        fill: 'url(#LINA__b)',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M5.458 14.264a1.975 1.975 0 0 1 0-2.772L12.869 4l.346.35a1.975 1.975 0 0 1 0 2.77l-7.412 7.493zm2.664 2.693a1.974 1.974 0 0 1 0-2.772l7.411-7.492.346.35a1.974 1.974 0 0 1 0 2.771l-7.412 7.492zm2.664-.077a1.975 1.975 0 0 0 0 2.77l.345.35 7.412-7.492a1.975 1.975 0 0 0 0-2.771l-.345-.35z'
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
                        id: 'LINA__b',
                        x1: '10.627',
                        x2: '21.351',
                        y1: '10.693',
                        y2: '21.946',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#6BB7FF'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#053BF7'
                            }
                        ]
                    ]
                ],
                [
                    'clipPath',
                    {
                        id: 'LINA__a'
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
 * @component @name TokenLINA
 * @description Web3Icon for TokenLINA
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9InVybCgjTElOQV9fYSkiIGQ9Ik00LjYzOCAxNC41NDhhMi4yMiAyLjIyIDAgMCAxIDAtMy4xMTlMMTIuOTc3IDNsLjM4OS4zOTNhMi4yMiAyLjIyIDAgMCAxIDAgMy4xMThsLTguMzQgOC40M3oiLz4KICAgIDxwYXRoIGZpbGw9InVybCgjTElOQV9fYikiIGQ9Ik03LjYzNSAxNy41NzhhMi4yMiAyLjIyIDAgMCAxIDAtMy4xMThsOC4zMzktOC40My4zODguMzk0YTIuMjIgMi4yMiAwIDAgMSAwIDMuMTE4bC04LjMzOCA4LjQzeiIvPgogICAgPHBhdGggZmlsbD0idXJsKCNMSU5BX19jKSIgZD0iTTEwLjYzNCAxNy40ODlhMi4yMiAyLjIyIDAgMCAwIDAgMy4xMThsLjM5LjM5MyA4LjMzOC04LjQzYTIuMjIgMi4yMiAwIDAgMCAwLTMuMTE3bC0uMzg4LS4zOTN6Ii8+CiAgICA8ZGVmcz4KICAgICAgICA8bGluZWFyR3JhZGllbnQgaWQ9IkxJTkFfX2EiIHgxPSIxMC40NTUiIHgyPSIyMi41MiIgeTE9IjEwLjUyOSIgeTI9IjIzLjE4OSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjNkJCN0ZGIi8+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzA1M0JGNyIvPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICAgICAgPGxpbmVhckdyYWRpZW50IGlkPSJMSU5BX19iIiB4MT0iNS42NjEiIHgyPSIxNy43MjYiIHkxPSI1Ljk2MiIgeTI9IjE4LjYyMyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjNkJCN0ZGIi8+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzA1M0JGNyIvPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICAgICAgPGxpbmVhckdyYWRpZW50IGlkPSJMSU5BX19jIiB4MT0iOC4wMzgiIHgyPSIxNi4wNSIgeTE9IjcuOTk0IiB5Mj0iMTUuOTE5IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiM2QkI3RkYiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMDUzQkY3Ii8+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgIDwvZGVmcz4KPC9zdmc+Cg==) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik00LjY0IDE0LjU0N2EyLjIyIDIuMjIgMCAwIDEgMC0zLjExOEwxMi45NzggM2wuMzg5LjM5M2EyLjIyIDIuMjIgMCAwIDEgMCAzLjExOGwtOC4zMzkgOC40Mjh6bTIuOTk3IDMuMDNhMi4yMiAyLjIyIDAgMCAxIDAtMy4xMThsOC4zMzgtOC40MjguMzg5LjM5M2EyLjIyIDIuMjIgMCAwIDEgMCAzLjExOEw4LjAyNSAxNy45N3ptMi45OTctLjA4N2EyLjIyIDIuMjIgMCAwIDAgMCAzLjExN2wuMzg5LjM5MyA4LjMzOC04LjQyOGEyLjIyIDIuMjIgMCAwIDAgMC0zLjExOGwtLjM4OC0uMzkzeiIvPgo8L3N2Zz4K) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNMSU5BX19hKSI+CiAgICAgICAgPHBhdGggZmlsbD0idXJsKCNMSU5BX19iKSIgZD0iTTI0IDBIMHYyNGgyNHoiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNNS40NTggMTQuMjY0YTEuOTc1IDEuOTc1IDAgMCAxIDAtMi43NzJMMTIuODY5IDRsLjM0Ni4zNWExLjk3NSAxLjk3NSAwIDAgMSAwIDIuNzdsLTcuNDEyIDcuNDkzem0yLjY2NCAyLjY5M2ExLjk3NCAxLjk3NCAwIDAgMSAwLTIuNzcybDcuNDExLTcuNDkyLjM0Ni4zNWExLjk3NCAxLjk3NCAwIDAgMSAwIDIuNzcxbC03LjQxMiA3LjQ5MnptMi42NjQtLjA3N2ExLjk3NSAxLjk3NSAwIDAgMCAwIDIuNzdsLjM0NS4zNSA3LjQxMi03LjQ5MmExLjk3NSAxLjk3NSAwIDAgMCAwLTIuNzcxbC0uMzQ1LS4zNXoiLz4KICAgIDwvZz4KICAgIDxkZWZzPgogICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iTElOQV9fYiIgeDE9IjEwLjYyNyIgeDI9IjIxLjM1MSIgeTE9IjEwLjY5MyIgeTI9IjIxLjk0NiIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjNkJCN0ZGIi8+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzA1M0JGNyIvPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICAgICAgPGNsaXBQYXRoIGlkPSJMSU5BX19hIj4KICAgICAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTAgMGgyNHYyNEgweiIvPgogICAgICAgIDwvY2xpcFBhdGg+CiAgICA8L2RlZnM+Cjwvc3ZnPgo=)
 * @see https://web3icons.io/tokens/LINA
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenLINA = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenLINA', __iconNode);
;
}),
]);

//# sourceMappingURL=1qqr_%40web3icons_react_dist_1wwjxpx._.js.map