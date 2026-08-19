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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenIPAD.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenIPAD
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-client] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: 'url(#IPAD__a)',
                d: 'm3 12 1.421-1.422L5.842 12l-1.42 1.421z'
            }
        ],
        [
            'path',
            {
                fill: 'url(#IPAD__b)',
                d: 'm4.895 13.895 1.42-1.421 3.316 3.315-1.42 1.422z'
            }
        ],
        [
            'path',
            {
                fill: 'url(#IPAD__c)',
                d: 'm8.684 13.895 1.421-1.421 1.421 1.42-1.42 1.422z'
            }
        ],
        [
            'path',
            {
                fill: 'url(#IPAD__d)',
                d: 'M10.58 12 12 10.577 13.423 12 12 13.42z'
            }
        ],
        [
            'path',
            {
                fill: 'url(#IPAD__e)',
                d: 'm12.474 10.106 1.421-1.421 1.421 1.42-1.42 1.422z'
            }
        ],
        [
            'path',
            {
                fill: '#F3BA2F',
                d: 'm14.369 8.21 1.42-1.42 3.317 3.315-1.422 1.42z'
            }
        ],
        [
            'path',
            {
                fill: 'url(#IPAD__f)',
                d: 'm12.474 13.895 1.421-1.421 1.421 1.42-1.42 1.422z'
            }
        ],
        [
            'path',
            {
                fill: 'url(#IPAD__g)',
                d: 'm14.369 15.79 3.315-3.316 1.422 1.42-3.316 3.316z'
            }
        ],
        [
            'path',
            {
                fill: '#F3BA2F',
                d: 'm18.158 12 1.421-1.422L21 12l-1.42 1.421z'
            }
        ],
        [
            'path',
            {
                fill: 'url(#IPAD__h)',
                d: 'M4.895 10.105 8.21 6.789 9.631 8.21l-3.315 3.316z'
            }
        ],
        [
            'path',
            {
                fill: 'url(#IPAD__i)',
                d: 'm8.684 10.106 1.421-1.421 1.421 1.42-1.42 1.422z'
            }
        ],
        [
            'defs',
            {},
            [
                [
                    'linearGradient',
                    {
                        id: 'IPAD__a',
                        x1: '9.394',
                        x2: '10.825',
                        y1: '10.815',
                        y2: '9.389',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#4086FF'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#48D5FF'
                            }
                        ]
                    ]
                ],
                [
                    'linearGradient',
                    {
                        id: 'IPAD__b',
                        x1: '9.3',
                        x2: '12.02',
                        y1: '13.563',
                        y2: '8.865',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#4086FF'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#48D5FF'
                            }
                        ]
                    ]
                ],
                [
                    'linearGradient',
                    {
                        id: 'IPAD__c',
                        x1: '9.395',
                        x2: '10.825',
                        y1: '10.816',
                        y2: '9.39',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#4086FF'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#48D5FF'
                            }
                        ]
                    ]
                ],
                [
                    'linearGradient',
                    {
                        id: 'IPAD__d',
                        x1: '7.501',
                        x2: '12.019',
                        y1: '14.605',
                        y2: '6.799',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#E8BB41'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#F6DA5B'
                            }
                        ]
                    ]
                ],
                [
                    'linearGradient',
                    {
                        id: 'IPAD__e',
                        x1: '7.5',
                        x2: '12.019',
                        y1: '14.606',
                        y2: '6.801',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#E8BB41'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#F6DA5B'
                            }
                        ]
                    ]
                ],
                [
                    'linearGradient',
                    {
                        id: 'IPAD__f',
                        x1: '7.5',
                        x2: '12.019',
                        y1: '14.605',
                        y2: '6.8',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#E8BB41'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#F6DA5B'
                            }
                        ]
                    ]
                ],
                [
                    'linearGradient',
                    {
                        id: 'IPAD__g',
                        x1: '5.7',
                        x2: '12.026',
                        y1: '15.647',
                        y2: '4.72',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#E8BB41'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#F6DA5B'
                            }
                        ]
                    ]
                ],
                [
                    'linearGradient',
                    {
                        id: 'IPAD__h',
                        x1: '5.7',
                        x2: '12.107',
                        y1: '15.647',
                        y2: '4.673',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#4086FF'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#48D5FF'
                            }
                        ]
                    ]
                ],
                [
                    'linearGradient',
                    {
                        id: 'IPAD__i',
                        x1: '9.395',
                        x2: '10.825',
                        y1: '10.816',
                        y2: '9.39',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#4086FF'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#48D5FF'
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
                d: 'm3 12 1.421-1.42L5.842 12l-1.42 1.421zm1.895 1.895 1.42-1.421 3.316 3.315-1.42 1.421zm3.789 0 1.42-1.421 1.422 1.42-1.421 1.422zM10.58 12 12 10.58 13.423 12 12 13.421zm1.894-1.894 1.421-1.421 1.421 1.42-1.42 1.422zm1.895-1.896 1.42-1.42 3.317 3.315-1.422 1.421zm-1.895 5.685 1.421-1.421 1.421 1.42-1.42 1.422zm1.895 1.895 3.315-3.316 1.422 1.42-3.316 3.316zM18.158 12l1.421-1.42L21 12l-1.42 1.421zM4.895 10.105 8.21 6.789 9.631 8.21l-3.315 3.316zm3.789.001 1.42-1.421 1.422 1.42-1.421 1.422z'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#IPAD__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#F3BA2F',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'm4 12 1.263-1.264L6.526 12l-1.263 1.264zm1.684 1.684 1.263-1.263 2.948 2.947-1.264 1.263zm3.368 0 1.263-1.263 1.264 1.263-1.264 1.263zM10.737 12l1.264-1.264L13.264 12 12 13.263zm1.684-1.684 1.264-1.263 1.263 1.263-1.264 1.263zm1.685-1.685 1.263-1.263 2.947 2.948-1.263 1.263zm-1.685 5.053 1.264-1.263 1.263 1.263-1.264 1.263zm1.685 1.684 2.947-2.947 1.263 1.263-2.947 2.947zM17.474 12l1.263-1.264L20 12l-1.263 1.264zm-11.79-1.684 2.947-2.948 1.264 1.263-2.948 2.948zm3.368 0 1.263-1.263 1.264 1.263-1.264 1.263z'
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
                        id: 'IPAD__a'
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
 * @component @name TokenIPAD
 * @description Web3Icon for TokenIPAD
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9InVybCgjSVBBRF9fYSkiIGQ9Im0zIDEyIDEuNDIxLTEuNDIyTDUuODQyIDEybC0xLjQyIDEuNDIxeiIvPgogICAgPHBhdGggZmlsbD0idXJsKCNJUEFEX19iKSIgZD0ibTQuODk1IDEzLjg5NSAxLjQyLTEuNDIxIDMuMzE2IDMuMzE1LTEuNDIgMS40MjJ6Ii8+CiAgICA8cGF0aCBmaWxsPSJ1cmwoI0lQQURfX2MpIiBkPSJtOC42ODQgMTMuODk1IDEuNDIxLTEuNDIxIDEuNDIxIDEuNDItMS40MiAxLjQyMnoiLz4KICAgIDxwYXRoIGZpbGw9InVybCgjSVBBRF9fZCkiIGQ9Ik0xMC41OCAxMiAxMiAxMC41NzcgMTMuNDIzIDEyIDEyIDEzLjQyeiIvPgogICAgPHBhdGggZmlsbD0idXJsKCNJUEFEX19lKSIgZD0ibTEyLjQ3NCAxMC4xMDYgMS40MjEtMS40MjEgMS40MjEgMS40Mi0xLjQyIDEuNDIyeiIvPgogICAgPHBhdGggZmlsbD0iI0YzQkEyRiIgZD0ibTE0LjM2OSA4LjIxIDEuNDItMS40MiAzLjMxNyAzLjMxNS0xLjQyMiAxLjQyeiIvPgogICAgPHBhdGggZmlsbD0idXJsKCNJUEFEX19mKSIgZD0ibTEyLjQ3NCAxMy44OTUgMS40MjEtMS40MjEgMS40MjEgMS40Mi0xLjQyIDEuNDIyeiIvPgogICAgPHBhdGggZmlsbD0idXJsKCNJUEFEX19nKSIgZD0ibTE0LjM2OSAxNS43OSAzLjMxNS0zLjMxNiAxLjQyMiAxLjQyLTMuMzE2IDMuMzE2eiIvPgogICAgPHBhdGggZmlsbD0iI0YzQkEyRiIgZD0ibTE4LjE1OCAxMiAxLjQyMS0xLjQyMkwyMSAxMmwtMS40MiAxLjQyMXoiLz4KICAgIDxwYXRoIGZpbGw9InVybCgjSVBBRF9faCkiIGQ9Ik00Ljg5NSAxMC4xMDUgOC4yMSA2Ljc4OSA5LjYzMSA4LjIxbC0zLjMxNSAzLjMxNnoiLz4KICAgIDxwYXRoIGZpbGw9InVybCgjSVBBRF9faSkiIGQ9Im04LjY4NCAxMC4xMDYgMS40MjEtMS40MjEgMS40MjEgMS40Mi0xLjQyIDEuNDIyeiIvPgogICAgPGRlZnM+CiAgICAgICAgPGxpbmVhckdyYWRpZW50IGlkPSJJUEFEX19hIiB4MT0iOS4zOTQiIHgyPSIxMC44MjUiIHkxPSIxMC44MTUiIHkyPSI5LjM4OSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjNDA4NkZGIi8+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzQ4RDVGRiIvPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICAgICAgPGxpbmVhckdyYWRpZW50IGlkPSJJUEFEX19iIiB4MT0iOS4zIiB4Mj0iMTIuMDIiIHkxPSIxMy41NjMiIHkyPSI4Ljg2NSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjNDA4NkZGIi8+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzQ4RDVGRiIvPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICAgICAgPGxpbmVhckdyYWRpZW50IGlkPSJJUEFEX19jIiB4MT0iOS4zOTUiIHgyPSIxMC44MjUiIHkxPSIxMC44MTYiIHkyPSI5LjM5IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiM0MDg2RkYiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjNDhENUZGIi8+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgICAgICA8bGluZWFyR3JhZGllbnQgaWQ9IklQQURfX2QiIHgxPSI3LjUwMSIgeDI9IjEyLjAxOSIgeTE9IjE0LjYwNSIgeTI9IjYuNzk5IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiNFOEJCNDEiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjRjZEQTVCIi8+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgICAgICA8bGluZWFyR3JhZGllbnQgaWQ9IklQQURfX2UiIHgxPSI3LjUiIHgyPSIxMi4wMTkiIHkxPSIxNC42MDYiIHkyPSI2LjgwMSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjRThCQjQxIi8+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI0Y2REE1QiIvPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICAgICAgPGxpbmVhckdyYWRpZW50IGlkPSJJUEFEX19mIiB4MT0iNy41IiB4Mj0iMTIuMDE5IiB5MT0iMTQuNjA1IiB5Mj0iNi44IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiNFOEJCNDEiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjRjZEQTVCIi8+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgICAgICA8bGluZWFyR3JhZGllbnQgaWQ9IklQQURfX2ciIHgxPSI1LjciIHgyPSIxMi4wMjYiIHkxPSIxNS42NDciIHkyPSI0LjcyIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiNFOEJCNDEiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjRjZEQTVCIi8+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgICAgICA8bGluZWFyR3JhZGllbnQgaWQ9IklQQURfX2giIHgxPSI1LjciIHgyPSIxMi4xMDciIHkxPSIxNS42NDciIHkyPSI0LjY3MyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjNDA4NkZGIi8+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzQ4RDVGRiIvPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICAgICAgPGxpbmVhckdyYWRpZW50IGlkPSJJUEFEX19pIiB4MT0iOS4zOTUiIHgyPSIxMC44MjUiIHkxPSIxMC44MTYiIHkyPSI5LjM5IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiM0MDg2RkYiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjNDhENUZGIi8+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgIDwvZGVmcz4KPC9zdmc+Cg==) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Im0zIDEyIDEuNDIxLTEuNDJMNS44NDIgMTJsLTEuNDIgMS40MjF6bTEuODk1IDEuODk1IDEuNDItMS40MjEgMy4zMTYgMy4zMTUtMS40MiAxLjQyMXptMy43ODkgMCAxLjQyLTEuNDIxIDEuNDIyIDEuNDItMS40MjEgMS40MjJ6TTEwLjU4IDEyIDEyIDEwLjU4IDEzLjQyMyAxMiAxMiAxMy40MjF6bTEuODk0LTEuODk0IDEuNDIxLTEuNDIxIDEuNDIxIDEuNDItMS40MiAxLjQyMnptMS44OTUtMS44OTYgMS40Mi0xLjQyIDMuMzE3IDMuMzE1LTEuNDIyIDEuNDIxem0tMS44OTUgNS42ODUgMS40MjEtMS40MjEgMS40MjEgMS40Mi0xLjQyIDEuNDIyem0xLjg5NSAxLjg5NSAzLjMxNS0zLjMxNiAxLjQyMiAxLjQyLTMuMzE2IDMuMzE2ek0xOC4xNTggMTJsMS40MjEtMS40MkwyMSAxMmwtMS40MiAxLjQyMXpNNC44OTUgMTAuMTA1IDguMjEgNi43ODkgOS42MzEgOC4yMWwtMy4zMTUgMy4zMTZ6bTMuNzg5LjAwMSAxLjQyLTEuNDIxIDEuNDIyIDEuNDItMS40MjEgMS40MjJ6Ii8+Cjwvc3ZnPgo=) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNJUEFEX19hKSI+CiAgICAgICAgPHBhdGggZmlsbD0iI0YzQkEyRiIgZD0iTTI0IDBIMHYyNGgyNHoiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJtNCAxMiAxLjI2My0xLjI2NEw2LjUyNiAxMmwtMS4yNjMgMS4yNjR6bTEuNjg0IDEuNjg0IDEuMjYzLTEuMjYzIDIuOTQ4IDIuOTQ3LTEuMjY0IDEuMjYzem0zLjM2OCAwIDEuMjYzLTEuMjYzIDEuMjY0IDEuMjYzLTEuMjY0IDEuMjYzek0xMC43MzcgMTJsMS4yNjQtMS4yNjRMMTMuMjY0IDEyIDEyIDEzLjI2M3ptMS42ODQtMS42ODQgMS4yNjQtMS4yNjMgMS4yNjMgMS4yNjMtMS4yNjQgMS4yNjN6bTEuNjg1LTEuNjg1IDEuMjYzLTEuMjYzIDIuOTQ3IDIuOTQ4LTEuMjYzIDEuMjYzem0tMS42ODUgNS4wNTMgMS4yNjQtMS4yNjMgMS4yNjMgMS4yNjMtMS4yNjQgMS4yNjN6bTEuNjg1IDEuNjg0IDIuOTQ3LTIuOTQ3IDEuMjYzIDEuMjYzLTIuOTQ3IDIuOTQ3ek0xNy40NzQgMTJsMS4yNjMtMS4yNjRMMjAgMTJsLTEuMjYzIDEuMjY0em0tMTEuNzktMS42ODQgMi45NDctMi45NDggMS4yNjQgMS4yNjMtMi45NDggMi45NDh6bTMuMzY4IDAgMS4yNjMtMS4yNjMgMS4yNjQgMS4yNjMtMS4yNjQgMS4yNjN6Ii8+CiAgICA8L2c+CiAgICA8ZGVmcz4KICAgICAgICA8Y2xpcFBhdGggaWQ9IklQQURfX2EiPgogICAgICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMCAwaDI0djI0SDB6Ii8+CiAgICAgICAgPC9jbGlwUGF0aD4KICAgIDwvZGVmcz4KPC9zdmc+Cg==)
 * @see https://web3icons.io/tokens/IPAD
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenIPAD = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenIPAD', __iconNode);
;
}),
]);

//# sourceMappingURL=1qqr_%40web3icons_react_dist_15vzrwq._.js.map