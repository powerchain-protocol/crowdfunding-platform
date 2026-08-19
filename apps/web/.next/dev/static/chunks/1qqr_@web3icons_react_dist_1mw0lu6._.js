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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenATD.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenATD
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-client] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: 'url(#ATD__a)',
                d: 'M12.297 6a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3'
            }
        ],
        [
            'path',
            {
                fill: '#610467',
                d: 'M6.095 18.596c-.708 0-1.284.468-1.284 1.152a1.26 1.26 0 0 0 1.284 1.248h11.818a1.26 1.26 0 0 0 1.284-1.248c0-.684-.576-1.152-1.284-1.152z'
            }
        ],
        [
            'path',
            {
                fill: '#610467',
                d: 'M5.37 20.8a1.26 1.26 0 0 0 1.734-.366l3.491-5.321a1.23 1.23 0 0 0-.366-1.716 1.26 1.26 0 0 0-1.733.366l-3.492 5.32A1.23 1.23 0 0 0 5.37 20.8'
            }
        ],
        [
            'path',
            {
                fill: 'url(#ATD__b)',
                d: 'M8.932 7.428a1.22 1.22 0 0 0-.3 1.727L16.9 20.481c.408.552 1.2.684 1.77.288a1.22 1.22 0 0 0 .293-1.728L10.696 7.716a1.29 1.29 0 0 0-1.764-.288'
            }
        ],
        [
            'defs',
            {},
            [
                [
                    'linearGradient',
                    {
                        id: 'ATD__a',
                        x1: '12.297',
                        x2: '12.297',
                        y1: '3',
                        y2: '5.999',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#E4396A'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#300F39'
                            }
                        ]
                    ]
                ],
                [
                    'linearGradient',
                    {
                        id: 'ATD__b',
                        x1: '14.697',
                        x2: '13.498',
                        y1: '13.498',
                        y2: '14.398',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#D12D6D'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#610467'
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
                clipPath: 'url(#ATD__a)'
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
                        fill: 'url(#ATD__b)',
                        d: 'M12.264 6.666a1.333 1.333 0 1 0 0-2.665 1.333 1.333 0 0 0 0 2.665'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#610467',
                        d: 'M6.751 17.864c-.629 0-1.14.415-1.14 1.023a1.12 1.12 0 0 0 1.14 1.11h10.505a1.12 1.12 0 0 0 1.14-1.11c0-.608-.51-1.024-1.14-1.024z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#610467',
                        d: 'M6.107 19.822a1.12 1.12 0 0 0 1.54-.326l3.104-4.73a1.093 1.093 0 0 0-.325-1.524 1.12 1.12 0 0 0-1.541.325l-3.103 4.73a1.093 1.093 0 0 0 .325 1.525'
                    }
                ],
                [
                    'path',
                    {
                        fill: 'url(#ATD__c)',
                        d: 'M9.273 7.936a1.083 1.083 0 0 0-.266 1.535l7.348 10.068a1.15 1.15 0 0 0 1.572.256 1.085 1.085 0 0 0 .262-1.536L10.84 8.192a1.145 1.145 0 0 0-1.568-.256'
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
                        id: 'ATD__b',
                        x1: '12.264',
                        x2: '12.264',
                        y1: '4',
                        y2: '6.666',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#E4396A'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#300F39'
                            }
                        ]
                    ]
                ],
                [
                    'linearGradient',
                    {
                        id: 'ATD__c',
                        x1: '14.398',
                        x2: '13.331',
                        y1: '13.332',
                        y2: '14.132',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#D12D6D'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#610467'
                            }
                        ]
                    ]
                ],
                [
                    'clipPath',
                    {
                        id: 'ATD__a'
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
 * @component @name TokenATD
 * @description Web3Icon for TokenATD
 *
 * @preview (branded, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9InVybCgjQVREX19hKSIgZD0iTTEyLjI5NyA2YTEuNSAxLjUgMCAxIDAgMC0zIDEuNSAxLjUgMCAwIDAgMCAzIi8+CiAgICA8cGF0aCBmaWxsPSIjNjEwNDY3IiBkPSJNNi4wOTUgMTguNTk2Yy0uNzA4IDAtMS4yODQuNDY4LTEuMjg0IDEuMTUyYTEuMjYgMS4yNiAwIDAgMCAxLjI4NCAxLjI0OGgxMS44MThhMS4yNiAxLjI2IDAgMCAwIDEuMjg0LTEuMjQ4YzAtLjY4NC0uNTc2LTEuMTUyLTEuMjg0LTEuMTUyeiIvPgogICAgPHBhdGggZmlsbD0iIzYxMDQ2NyIgZD0iTTUuMzcgMjAuOGExLjI2IDEuMjYgMCAwIDAgMS43MzQtLjM2NmwzLjQ5MS01LjMyMWExLjIzIDEuMjMgMCAwIDAtLjM2Ni0xLjcxNiAxLjI2IDEuMjYgMCAwIDAtMS43MzMuMzY2bC0zLjQ5MiA1LjMyQTEuMjMgMS4yMyAwIDAgMCA1LjM3IDIwLjgiLz4KICAgIDxwYXRoIGZpbGw9InVybCgjQVREX19iKSIgZD0iTTguOTMyIDcuNDI4YTEuMjIgMS4yMiAwIDAgMC0uMyAxLjcyN0wxNi45IDIwLjQ4MWMuNDA4LjU1MiAxLjIuNjg0IDEuNzcuMjg4YTEuMjIgMS4yMiAwIDAgMCAuMjkzLTEuNzI4TDEwLjY5NiA3LjcxNmExLjI5IDEuMjkgMCAwIDAtMS43NjQtLjI4OCIvPgogICAgPGRlZnM+CiAgICAgICAgPGxpbmVhckdyYWRpZW50IGlkPSJBVERfX2EiIHgxPSIxMi4yOTciIHgyPSIxMi4yOTciIHkxPSIzIiB5Mj0iNS45OTkiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iI0U0Mzk2QSIvPgogICAgICAgICAgICA8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMzMDBGMzkiLz4KICAgICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iQVREX19iIiB4MT0iMTQuNjk3IiB4Mj0iMTMuNDk4IiB5MT0iMTMuNDk4IiB5Mj0iMTQuMzk4IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiNEMTJENkQiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjNjEwNDY3Ii8+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgIDwvZGVmcz4KPC9zdmc+Cg==) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNBVERfX2EpIj4KICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMjQgMEgwdjI0aDI0eiIvPgogICAgICAgIDxwYXRoIGZpbGw9InVybCgjQVREX19iKSIgZD0iTTEyLjI2NCA2LjY2NmExLjMzMyAxLjMzMyAwIDEgMCAwLTIuNjY1IDEuMzMzIDEuMzMzIDAgMCAwIDAgMi42NjUiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjNjEwNDY3IiBkPSJNNi43NTEgMTcuODY0Yy0uNjI5IDAtMS4xNC40MTUtMS4xNCAxLjAyM2ExLjEyIDEuMTIgMCAwIDAgMS4xNCAxLjExaDEwLjUwNWExLjEyIDEuMTIgMCAwIDAgMS4xNC0xLjExYzAtLjYwOC0uNTEtMS4wMjQtMS4xNC0xLjAyNHoiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjNjEwNDY3IiBkPSJNNi4xMDcgMTkuODIyYTEuMTIgMS4xMiAwIDAgMCAxLjU0LS4zMjZsMy4xMDQtNC43M2ExLjA5MyAxLjA5MyAwIDAgMC0uMzI1LTEuNTI0IDEuMTIgMS4xMiAwIDAgMC0xLjU0MS4zMjVsLTMuMTAzIDQuNzNhMS4wOTMgMS4wOTMgMCAwIDAgLjMyNSAxLjUyNSIvPgogICAgICAgIDxwYXRoIGZpbGw9InVybCgjQVREX19jKSIgZD0iTTkuMjczIDcuOTM2YTEuMDgzIDEuMDgzIDAgMCAwLS4yNjYgMS41MzVsNy4zNDggMTAuMDY4YTEuMTUgMS4xNSAwIDAgMCAxLjU3Mi4yNTYgMS4wODUgMS4wODUgMCAwIDAgLjI2Mi0xLjUzNkwxMC44NCA4LjE5MmExLjE0NSAxLjE0NSAwIDAgMC0xLjU2OC0uMjU2Ii8+CiAgICA8L2c+CiAgICA8ZGVmcz4KICAgICAgICA8bGluZWFyR3JhZGllbnQgaWQ9IkFURF9fYiIgeDE9IjEyLjI2NCIgeDI9IjEyLjI2NCIgeTE9IjQiIHkyPSI2LjY2NiIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjRTQzOTZBIi8+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzMwMEYzOSIvPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICAgICAgPGxpbmVhckdyYWRpZW50IGlkPSJBVERfX2MiIHgxPSIxNC4zOTgiIHgyPSIxMy4zMzEiIHkxPSIxMy4zMzIiIHkyPSIxNC4xMzIiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iI0QxMkQ2RCIvPgogICAgICAgICAgICA8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiM2MTA0NjciLz4KICAgICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgICAgIDxjbGlwUGF0aCBpZD0iQVREX19hIj4KICAgICAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTAgMGgyNHYyNEgweiIvPgogICAgICAgIDwvY2xpcFBhdGg+CiAgICA8L2RlZnM+Cjwvc3ZnPgo=)
 * @see https://web3icons.io/tokens/ATD
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenATD = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenATD', __iconNode);
;
}),
]);

//# sourceMappingURL=1qqr_%40web3icons_react_dist_1mw0lu6._.js.map