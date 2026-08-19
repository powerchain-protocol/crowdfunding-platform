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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/networks/NetworkTelos.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>NetworkTelos
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-client] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: 'url(#telos__a)',
                d: 'M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12m0 3a9 9 0 1 0 0-18 9 9 0 0 0 0 18',
                fillRule: 'evenodd',
                clipRule: 'evenodd'
            }
        ],
        [
            'defs',
            {},
            [
                [
                    'radialGradient',
                    {
                        id: 'telos__a',
                        cx: '0',
                        cy: '0',
                        r: '1',
                        gradientTransform: 'matrix(0 9 -9 0 12 12)',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                offset: '.152',
                                stopColor: '#42A0B9'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '.247',
                                stopColor: '#70C38D'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '.344',
                                stopColor: '#6FC68F'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '.488',
                                stopColor: '#3B74CE'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '.66',
                                stopColor: '#954494'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '.76',
                                stopColor: '#9A4290'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '.871',
                                stopColor: '#7256AB'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#3D7DC7'
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
                d: 'M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12m0 3a9 9 0 1 0 0-18 9 9 0 0 0 0 18',
                fillRule: 'evenodd',
                clipRule: 'evenodd'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#telos__a)'
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
                        fill: 'url(#telos__b)',
                        d: 'M12 17.333a5.333 5.333 0 1 0 0-10.666 5.333 5.333 0 0 0 0 10.666M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16',
                        fillRule: 'evenodd',
                        clipRule: 'evenodd'
                    }
                ]
            ]
        ],
        [
            'defs',
            {},
            [
                [
                    'radialGradient',
                    {
                        id: 'telos__b',
                        cx: '0',
                        cy: '0',
                        r: '1',
                        gradientTransform: 'matrix(0 8 -8 0 12 12)',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                offset: '.152',
                                stopColor: '#42A0B9'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '.247',
                                stopColor: '#70C38D'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '.344',
                                stopColor: '#6FC68F'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '.488',
                                stopColor: '#3B74CE'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '.66',
                                stopColor: '#954494'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '.76',
                                stopColor: '#9A4290'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '.871',
                                stopColor: '#7256AB'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#3D7DC7'
                            }
                        ]
                    ]
                ],
                [
                    'clipPath',
                    {
                        id: 'telos__a'
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
 * @component @name NetworkTelos
 * @description Web3Icon for NetworkTelos
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9InVybCgjdGVsb3NfX2EpIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMiAxOGE2IDYgMCAxIDAgMC0xMiA2IDYgMCAwIDAgMCAxMm0wIDNhOSA5IDAgMSAwIDAtMTggOSA5IDAgMCAwIDAgMTgiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgogICAgPGRlZnM+CiAgICAgICAgPHJhZGlhbEdyYWRpZW50IGlkPSJ0ZWxvc19fYSIgY3g9IjAiIGN5PSIwIiByPSIxIiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KDAgOSAtOSAwIDEyIDEyKSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgICAgICAgICA8c3RvcCBvZmZzZXQ9Ii4xNTIiIHN0b3AtY29sb3I9IiM0MkEwQjkiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIuMjQ3IiBzdG9wLWNvbG9yPSIjNzBDMzhEIi8+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iLjM0NCIgc3RvcC1jb2xvcj0iIzZGQzY4RiIvPgogICAgICAgICAgICA8c3RvcCBvZmZzZXQ9Ii40ODgiIHN0b3AtY29sb3I9IiMzQjc0Q0UiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIuNjYiIHN0b3AtY29sb3I9IiM5NTQ0OTQiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIuNzYiIHN0b3AtY29sb3I9IiM5QTQyOTAiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIuODcxIiBzdG9wLWNvbG9yPSIjNzI1NkFCIi8+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzNEN0RDNyIvPgogICAgICAgIDwvcmFkaWFsR3JhZGllbnQ+CiAgICA8L2RlZnM+Cjwvc3ZnPgo=) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTEyIDE4YTYgNiAwIDEgMCAwLTEyIDYgNiAwIDAgMCAwIDEybTAgM2E5IDkgMCAxIDAgMC0xOCA5IDkgMCAwIDAgMCAxOCIgY2xpcC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo=) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCN0ZWxvc19fYSkiPgogICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0yNCAwSDB2MjRoMjR6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0idXJsKCN0ZWxvc19fYikiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTEyIDE3LjMzM2E1LjMzMyA1LjMzMyAwIDEgMCAwLTEwLjY2NiA1LjMzMyA1LjMzMyAwIDAgMCAwIDEwLjY2Nk0xMiAyMGE4IDggMCAxIDAgMC0xNiA4IDggMCAwIDAgMCAxNiIgY2xpcC1ydWxlPSJldmVub2RkIi8+CiAgICA8L2c+CiAgICA8ZGVmcz4KICAgICAgICA8cmFkaWFsR3JhZGllbnQgaWQ9InRlbG9zX19iIiBjeD0iMCIgY3k9IjAiIHI9IjEiIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoMCA4IC04IDAgMTIgMTIpIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iLjE1MiIgc3RvcC1jb2xvcj0iIzQyQTBCOSIvPgogICAgICAgICAgICA8c3RvcCBvZmZzZXQ9Ii4yNDciIHN0b3AtY29sb3I9IiM3MEMzOEQiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIuMzQ0IiBzdG9wLWNvbG9yPSIjNkZDNjhGIi8+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iLjQ4OCIgc3RvcC1jb2xvcj0iIzNCNzRDRSIvPgogICAgICAgICAgICA8c3RvcCBvZmZzZXQ9Ii42NiIgc3RvcC1jb2xvcj0iIzk1NDQ5NCIvPgogICAgICAgICAgICA8c3RvcCBvZmZzZXQ9Ii43NiIgc3RvcC1jb2xvcj0iIzlBNDI5MCIvPgogICAgICAgICAgICA8c3RvcCBvZmZzZXQ9Ii44NzEiIHN0b3AtY29sb3I9IiM3MjU2QUIiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjM0Q3REM3Ii8+CiAgICAgICAgPC9yYWRpYWxHcmFkaWVudD4KICAgICAgICA8Y2xpcFBhdGggaWQ9InRlbG9zX19hIj4KICAgICAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTAgMGgyNHYyNEgweiIvPgogICAgICAgIDwvY2xpcFBhdGg+CiAgICA8L2RlZnM+Cjwvc3ZnPgo=)
 * @see https://web3icons.io/networks/telos
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const NetworkTelos = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWeb3Icon"])('NetworkTelos', __iconNode);
;
}),
]);

//# sourceMappingURL=1qqr_%40web3icons_react_dist_0d_rcfb._.js.map