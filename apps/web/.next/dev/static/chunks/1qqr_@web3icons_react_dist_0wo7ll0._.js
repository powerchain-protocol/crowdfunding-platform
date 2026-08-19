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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenVLXPAD.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenVLXPAD
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-client] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: 'url(#VLXPAD__a)',
                d: 'M5.735 5.999H3l5 8.5 3.75-6L10.5 6l-2.3 4.1z'
            }
        ],
        [
            'path',
            {
                fill: 'url(#VLXPAD__b)',
                d: 'M21 5.999H10.5l1.25 2.5h4.5l-.5 1H12l1 2.5h4z'
            }
        ],
        [
            'path',
            {
                fill: 'url(#VLXPAD__c)',
                d: 'm13 12-1-2.5-3.25 5.75A26 26 0 0 1 10 18s1.906-3.9 3-6'
            }
        ],
        [
            'defs',
            {},
            [
                [
                    'linearGradient',
                    {
                        id: 'VLXPAD__a',
                        x1: '5.808',
                        x2: '21.001',
                        y1: '9.86',
                        y2: '9.86',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#0753F7'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#02CBC5'
                            }
                        ]
                    ]
                ],
                [
                    'linearGradient',
                    {
                        id: 'VLXPAD__b',
                        x1: '5.142',
                        x2: '19.209',
                        y1: '7.639',
                        y2: '7.639',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#02A7A1'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#01E8BA'
                            }
                        ]
                    ]
                ],
                [
                    'linearGradient',
                    {
                        id: 'VLXPAD__c',
                        x1: '12.845',
                        x2: '9.29',
                        y1: '10.376',
                        y2: '16.666',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#01DBC0'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#03ACD3'
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
                d: 'M5.735 5.999H3l5 8.5 3.75-6L10.5 6l-2.3 4.1z'
            }
        ],
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M21 5.999H10.5l1.25 2.5h4.5l-.5 1H12l1 2.5h4z'
            }
        ],
        [
            'path',
            {
                fill: 'currentColor',
                d: 'm13 12-1-2.5-3.25 5.75Q9.456 16.59 10 18s1.906-3.9 3-6'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#VLXPAD__a)'
            },
            [
                [
                    'path',
                    {
                        fill: 'url(#VLXPAD__b)',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M6.431 6.666H4l4.445 7.556 3.333-5.334-1.111-2.222-2.044 3.644z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M20 6.666h-9.334l1.111 2.222h4l-.444.889h-3.334l.89 2.222h3.555z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M12.89 12.001 12 9.78l-2.889 5.11q.628 1.19 1.111 2.445S11.917 13.868 12.89 12'
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
                        id: 'VLXPAD__b',
                        x1: '6.496',
                        x2: '20',
                        y1: '10.098',
                        y2: '10.098',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#0753F7'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#02CBC5'
                            }
                        ]
                    ]
                ],
                [
                    'clipPath',
                    {
                        id: 'VLXPAD__a'
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
 * @component @name TokenVLXPAD
 * @description Web3Icon for TokenVLXPAD
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9InVybCgjVkxYUEFEX19hKSIgZD0iTTUuNzM1IDUuOTk5SDNsNSA4LjUgMy43NS02TDEwLjUgNmwtMi4zIDQuMXoiLz4KICAgIDxwYXRoIGZpbGw9InVybCgjVkxYUEFEX19iKSIgZD0iTTIxIDUuOTk5SDEwLjVsMS4yNSAyLjVoNC41bC0uNSAxSDEybDEgMi41aDR6Ii8+CiAgICA8cGF0aCBmaWxsPSJ1cmwoI1ZMWFBBRF9fYykiIGQ9Im0xMyAxMi0xLTIuNS0zLjI1IDUuNzVBMjYgMjYgMCAwIDEgMTAgMThzMS45MDYtMy45IDMtNiIvPgogICAgPGRlZnM+CiAgICAgICAgPGxpbmVhckdyYWRpZW50IGlkPSJWTFhQQURfX2EiIHgxPSI1LjgwOCIgeDI9IjIxLjAwMSIgeTE9IjkuODYiIHkyPSI5Ljg2IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiMwNzUzRjciLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMDJDQkM1Ii8+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgICAgICA8bGluZWFyR3JhZGllbnQgaWQ9IlZMWFBBRF9fYiIgeDE9IjUuMTQyIiB4Mj0iMTkuMjA5IiB5MT0iNy42MzkiIHkyPSI3LjYzOSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjMDJBN0ExIi8+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzAxRThCQSIvPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICAgICAgPGxpbmVhckdyYWRpZW50IGlkPSJWTFhQQURfX2MiIHgxPSIxMi44NDUiIHgyPSI5LjI5IiB5MT0iMTAuMzc2IiB5Mj0iMTYuNjY2IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiMwMURCQzAiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMDNBQ0QzIi8+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgIDwvZGVmcz4KPC9zdmc+Cg==) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik01LjczNSA1Ljk5OUgzbDUgOC41IDMuNzUtNkwxMC41IDZsLTIuMyA0LjF6Ii8+CiAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMjEgNS45OTlIMTAuNWwxLjI1IDIuNWg0LjVsLS41IDFIMTJsMSAyLjVoNHoiLz4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Im0xMyAxMi0xLTIuNS0zLjI1IDUuNzVROS40NTYgMTYuNTkgMTAgMThzMS45MDYtMy45IDMtNiIvPgo8L3N2Zz4K) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNWTFhQQURfX2EpIj4KICAgICAgICA8cGF0aCBmaWxsPSJ1cmwoI1ZMWFBBRF9fYikiIGQ9Ik0yNCAwSDB2MjRoMjR6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTYuNDMxIDYuNjY2SDRsNC40NDUgNy41NTYgMy4zMzMtNS4zMzQtMS4xMTEtMi4yMjItMi4wNDQgMy42NDR6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTIwIDYuNjY2aC05LjMzNGwxLjExMSAyLjIyMmg0bC0uNDQ0Ljg4OWgtMy4zMzRsLjg5IDIuMjIyaDMuNTU1eiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xMi44OSAxMi4wMDEgMTIgOS43OGwtMi44ODkgNS4xMXEuNjI4IDEuMTkgMS4xMTEgMi40NDVTMTEuOTE3IDEzLjg2OCAxMi44OSAxMiIvPgogICAgPC9nPgogICAgPGRlZnM+CiAgICAgICAgPGxpbmVhckdyYWRpZW50IGlkPSJWTFhQQURfX2IiIHgxPSI2LjQ5NiIgeDI9IjIwIiB5MT0iMTAuMDk4IiB5Mj0iMTAuMDk4IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiMwNzUzRjciLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMDJDQkM1Ii8+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgICAgICA8Y2xpcFBhdGggaWQ9IlZMWFBBRF9fYSI+CiAgICAgICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0wIDBoMjR2MjRIMHoiLz4KICAgICAgICA8L2NsaXBQYXRoPgogICAgPC9kZWZzPgo8L3N2Zz4K)
 * @see https://web3icons.io/tokens/VLXPAD
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenVLXPAD = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenVLXPAD', __iconNode);
;
}),
]);

//# sourceMappingURL=1qqr_%40web3icons_react_dist_0wo7ll0._.js.map