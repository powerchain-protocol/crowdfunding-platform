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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenBOBA.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenBOBA
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-client] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#AEDB01',
                d: 'M12.05 14.999H3.841V3h8.207a5.1 5.1 0 0 1 5.097 5.102v1.795a5.1 5.1 0 0 1-5.097 5.102'
            }
        ],
        [
            'path',
            {
                fill: '#B0B1AC',
                d: 'M14.159 21H3.842v-6.002A5.995 5.995 0 0 1 9.839 9h4.32a6 6 0 1 1 0 11.999'
            }
        ],
        [
            'path',
            {
                fill: '#5D6D3C',
                d: 'M17.146 9.794v.102a5.1 5.1 0 0 1-5.102 5.102H3.842A5.997 5.997 0 0 1 9.839 9h4.32c1.091 0 2.11.293 2.987.793'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M12.05 14.999H3.841V3h8.207a5.1 5.1 0 0 1 5.097 5.102v1.795a5.1 5.1 0 0 1-5.097 5.102'
            }
        ],
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M14.159 21H3.842v-6.002A5.995 5.995 0 0 1 9.839 9h4.32a6 6 0 0 1 0 11.999'
            }
        ],
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M17.146 9.794v.102a5.1 5.1 0 0 1-5.102 5.102H3.842A5.997 5.997 0 0 1 9.839 9h4.32c1.091 0 2.11.293 2.987.793'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#BOBA__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#B0B1AC',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M12.044 14.666H4.748V4h7.296c2.5 0 4.53 2.03 4.53 4.535v1.595a4.534 4.534 0 0 1-4.53 4.536'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M13.919 20h-9.17v-5.335a5.33 5.33 0 0 1 5.33-5.33h3.84a5.333 5.333 0 1 1 0 10.665'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M16.574 10.04v.09a4.534 4.534 0 0 1-4.535 4.535h-7.29a5.33 5.33 0 0 1 5.33-5.33h3.84c.97 0 1.875.26 2.655.705'
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
                        id: 'BOBA__a'
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
 * @component @name TokenBOBA
 * @description Web3Icon for TokenBOBA
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNBRURCMDEiIGQ9Ik0xMi4wNSAxNC45OTlIMy44NDFWM2g4LjIwN2E1LjEgNS4xIDAgMCAxIDUuMDk3IDUuMTAydjEuNzk1YTUuMSA1LjEgMCAwIDEtNS4wOTcgNS4xMDIiLz4KICAgIDxwYXRoIGZpbGw9IiNCMEIxQUMiIGQ9Ik0xNC4xNTkgMjFIMy44NDJ2LTYuMDAyQTUuOTk1IDUuOTk1IDAgMCAxIDkuODM5IDloNC4zMmE2IDYgMCAxIDEgMCAxMS45OTkiLz4KICAgIDxwYXRoIGZpbGw9IiM1RDZEM0MiIGQ9Ik0xNy4xNDYgOS43OTR2LjEwMmE1LjEgNS4xIDAgMCAxLTUuMTAyIDUuMTAySDMuODQyQTUuOTk3IDUuOTk3IDAgMCAxIDkuODM5IDloNC4zMmMxLjA5MSAwIDIuMTEuMjkzIDIuOTg3Ljc5MyIvPgo8L3N2Zz4K) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xMi4wNSAxNC45OTlIMy44NDFWM2g4LjIwN2E1LjEgNS4xIDAgMCAxIDUuMDk3IDUuMTAydjEuNzk1YTUuMSA1LjEgMCAwIDEtNS4wOTcgNS4xMDIiLz4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xNC4xNTkgMjFIMy44NDJ2LTYuMDAyQTUuOTk1IDUuOTk1IDAgMCAxIDkuODM5IDloNC4zMmE2IDYgMCAwIDEgMCAxMS45OTkiLz4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xNy4xNDYgOS43OTR2LjEwMmE1LjEgNS4xIDAgMCAxLTUuMTAyIDUuMTAySDMuODQyQTUuOTk3IDUuOTk3IDAgMCAxIDkuODM5IDloNC4zMmMxLjA5MSAwIDIuMTEuMjkzIDIuOTg3Ljc5MyIvPgo8L3N2Zz4K) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNCT0JBX19hKSI+CiAgICAgICAgPHBhdGggZmlsbD0iI0IwQjFBQyIgZD0iTTI0IDBIMHYyNGgyNHoiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTIuMDQ0IDE0LjY2Nkg0Ljc0OFY0aDcuMjk2YzIuNSAwIDQuNTMgMi4wMyA0LjUzIDQuNTM1djEuNTk1YTQuNTM0IDQuNTM0IDAgMCAxLTQuNTMgNC41MzYiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTMuOTE5IDIwaC05LjE3di01LjMzNWE1LjMzIDUuMzMgMCAwIDEgNS4zMy01LjMzaDMuODRhNS4zMzMgNS4zMzMgMCAxIDEgMCAxMC42NjUiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTYuNTc0IDEwLjA0di4wOWE0LjUzNCA0LjUzNCAwIDAgMS00LjUzNSA0LjUzNWgtNy4yOWE1LjMzIDUuMzMgMCAwIDEgNS4zMy01LjMzaDMuODRjLjk3IDAgMS44NzUuMjYgMi42NTUuNzA1Ii8+CiAgICA8L2c+CiAgICA8ZGVmcz4KICAgICAgICA8Y2xpcFBhdGggaWQ9IkJPQkFfX2EiPgogICAgICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMCAwaDI0djI0SDB6Ii8+CiAgICAgICAgPC9jbGlwUGF0aD4KICAgIDwvZGVmcz4KPC9zdmc+Cg==)
 * @see https://web3icons.io/tokens/BOBA
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenBOBA = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenBOBA', __iconNode);
;
}),
]);

//# sourceMappingURL=1qqr_%40web3icons_react_dist_0u6axr9._.js.map