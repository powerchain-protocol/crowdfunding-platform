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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenNSFW.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenNSFW
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-client] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: 'url(#NSFW__a)',
                d: 'M12 19v-8.5H3z'
            }
        ],
        [
            'path',
            {
                fill: 'url(#NSFW__b)',
                d: 'M12 19v-8.5h9z'
            }
        ],
        [
            'path',
            {
                fill: 'url(#NSFW__c)',
                d: 'M16.75 5 12 10.5h9z'
            }
        ],
        [
            'path',
            {
                fill: 'url(#NSFW__d)',
                d: 'M7.25 5 12 10.5H3z'
            }
        ],
        [
            'path',
            {
                fill: '#8E04E2',
                d: 'M12 10.5V7.185L16.75 5z'
            }
        ],
        [
            'path',
            {
                fill: '#6801C2',
                d: 'M12 10.5V7.185L7.25 5z'
            }
        ],
        [
            'defs',
            {},
            [
                [
                    'linearGradient',
                    {
                        id: 'NSFW__a',
                        x1: '7.5',
                        x2: '17.456',
                        y1: '7.471',
                        y2: '20.528',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#7A03B3'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#A300D4'
                            }
                        ]
                    ]
                ],
                [
                    'linearGradient',
                    {
                        id: 'NSFW__b',
                        x1: '3',
                        x2: '10.131',
                        y1: '5',
                        y2: '14.621',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#7A03B3'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#8C08A0'
                            }
                        ]
                    ]
                ],
                [
                    'linearGradient',
                    {
                        id: 'NSFW__c',
                        x1: '12',
                        x2: '12',
                        y1: '5',
                        y2: '19',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#8605B8'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#9300CB'
                            }
                        ]
                    ]
                ],
                [
                    'linearGradient',
                    {
                        id: 'NSFW__d',
                        x1: '7',
                        x2: '23.102',
                        y1: '10.727',
                        y2: '16.631',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#4902CC'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#8C04EE'
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
                d: 'M12 19v-8.5H3zm0 0v-8.5h9zm4.75-14L12 10.5h9zm-9.5 0L12 10.5H3z'
            }
        ],
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M12 10.5V7.185L16.75 5zm0 0V7.185L7.25 5z'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#NSFW__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#8E04E2',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M12 18.223v-7.556H4zm0 0v-7.556h8z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M16.222 5.777 12 10.667h8zm-8.444 0L12 10.667H4zM12 10.666V7.72l4.222-1.943z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M12 10.666V7.72L7.779 5.777z'
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
                        id: 'NSFW__a'
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
 * @component @name TokenNSFW
 * @description Web3Icon for TokenNSFW
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9InVybCgjTlNGV19fYSkiIGQ9Ik0xMiAxOXYtOC41SDN6Ii8+CiAgICA8cGF0aCBmaWxsPSJ1cmwoI05TRldfX2IpIiBkPSJNMTIgMTl2LTguNWg5eiIvPgogICAgPHBhdGggZmlsbD0idXJsKCNOU0ZXX19jKSIgZD0iTTE2Ljc1IDUgMTIgMTAuNWg5eiIvPgogICAgPHBhdGggZmlsbD0idXJsKCNOU0ZXX19kKSIgZD0iTTcuMjUgNSAxMiAxMC41SDN6Ii8+CiAgICA8cGF0aCBmaWxsPSIjOEUwNEUyIiBkPSJNMTIgMTAuNVY3LjE4NUwxNi43NSA1eiIvPgogICAgPHBhdGggZmlsbD0iIzY4MDFDMiIgZD0iTTEyIDEwLjVWNy4xODVMNy4yNSA1eiIvPgogICAgPGRlZnM+CiAgICAgICAgPGxpbmVhckdyYWRpZW50IGlkPSJOU0ZXX19hIiB4MT0iNy41IiB4Mj0iMTcuNDU2IiB5MT0iNy40NzEiIHkyPSIyMC41MjgiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iIzdBMDNCMyIvPgogICAgICAgICAgICA8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNBMzAwRDQiLz4KICAgICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iTlNGV19fYiIgeDE9IjMiIHgyPSIxMC4xMzEiIHkxPSI1IiB5Mj0iMTQuNjIxIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiM3QTAzQjMiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjOEMwOEEwIi8+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgICAgICA8bGluZWFyR3JhZGllbnQgaWQ9Ik5TRldfX2MiIHgxPSIxMiIgeDI9IjEyIiB5MT0iNSIgeTI9IjE5IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiM4NjA1QjgiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjOTMwMENCIi8+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgICAgICA8bGluZWFyR3JhZGllbnQgaWQ9Ik5TRldfX2QiIHgxPSI3IiB4Mj0iMjMuMTAyIiB5MT0iMTAuNzI3IiB5Mj0iMTYuNjMxIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiM0OTAyQ0MiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjOEMwNEVFIi8+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgIDwvZGVmcz4KPC9zdmc+Cg==) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xMiAxOXYtOC41SDN6bTAgMHYtOC41aDl6bTQuNzUtMTRMMTIgMTAuNWg5em0tOS41IDBMMTIgMTAuNUgzeiIvPgogICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTEyIDEwLjVWNy4xODVMMTYuNzUgNXptMCAwVjcuMTg1TDcuMjUgNXoiLz4KPC9zdmc+Cg==) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNOU0ZXX19hKSI+CiAgICAgICAgPHBhdGggZmlsbD0iIzhFMDRFMiIgZD0iTTI0IDBIMHYyNGgyNHoiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTIgMTguMjIzdi03LjU1Nkg0em0wIDB2LTcuNTU2aDh6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTE2LjIyMiA1Ljc3NyAxMiAxMC42NjdoOHptLTguNDQ0IDBMMTIgMTAuNjY3SDR6TTEyIDEwLjY2NlY3LjcybDQuMjIyLTEuOTQzeiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xMiAxMC42NjZWNy43Mkw3Ljc3OSA1Ljc3N3oiLz4KICAgIDwvZz4KICAgIDxkZWZzPgogICAgICAgIDxjbGlwUGF0aCBpZD0iTlNGV19fYSI+CiAgICAgICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0wIDBoMjR2MjRIMHoiLz4KICAgICAgICA8L2NsaXBQYXRoPgogICAgPC9kZWZzPgo8L3N2Zz4K)
 * @see https://web3icons.io/tokens/NSFW
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenNSFW = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenNSFW', __iconNode);
;
}),
]);

//# sourceMappingURL=1qqr_%40web3icons_react_dist_1m5_fjc._.js.map