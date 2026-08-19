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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenQRDO.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenQRDO
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-client] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: 'url(#QRDO__a)',
                d: 'M12 5.81a6.188 6.188 0 0 0-6.064 7.424 1.406 1.406 0 1 1-2.756.563 9 9 0 1 1 17.82-1.8h-2.813A6.19 6.19 0 0 0 12 5.809'
            }
        ],
        [
            'path',
            {
                fill: 'url(#QRDO__b)',
                d: 'M19.2 9.186a1.407 1.407 0 0 1 1.643 1.125q.157.831.157 1.677v.005c0 2.295-.86 4.388-2.273 5.98l.546.658a1.407 1.407 0 0 1-2.171 1.788l-.546-.663a9 9 0 0 1-12.342-3.248A9 9 0 0 1 3 11.993h2.813a6.187 6.187 0 0 0 8.92 5.552l-.82-.996a1.405 1.405 0 0 1 .19-1.98 1.407 1.407 0 0 1 1.98.192l.833 1.007a6.16 6.16 0 0 0 1.17-4.933 1.406 1.406 0 0 1 1.12-1.643z'
            }
        ],
        [
            'path',
            {
                fill: '#FFE000',
                d: 'M5.83 12.47a7 7 0 0 0 .106.765 1.406 1.406 0 0 1-2.756.562 9 9 0 0 1-.18-1.8h2.813'
            }
        ],
        [
            'defs',
            {},
            [
                [
                    'linearGradient',
                    {
                        id: 'QRDO__a',
                        x1: '19.031',
                        x2: '3.736',
                        y1: '11.485',
                        y2: '15.06',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#2DDE41'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#FFE000'
                            }
                        ]
                    ]
                ],
                [
                    'linearGradient',
                    {
                        id: 'QRDO__b',
                        x1: '26.062',
                        x2: '6.373',
                        y1: '14.578',
                        y2: '14.763',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                offset: '.36',
                                stopColor: '#FF26EB'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '.66',
                                stopColor: '#137FF9'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#27B3F9'
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
                d: 'M12 5.81a6.187 6.187 0 0 0-6.064 7.424 1.407 1.407 0 0 1-2.756.563 9 9 0 1 1 17.82-1.8h-2.813A6.19 6.19 0 0 0 12 5.809'
            }
        ],
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M19.2 9.186a1.407 1.407 0 0 1 1.643 1.125q.157.831.157 1.677v.005c0 2.295-.86 4.388-2.273 5.98l.546.658a1.406 1.406 0 0 1-2.171 1.788l-.546-.663A8.999 8.999 0 0 1 3 11.993h2.812a6.187 6.187 0 0 0 8.922 5.552l-.822-.996a1.407 1.407 0 1 1 2.172-1.788l.832 1.007a6.16 6.16 0 0 0 1.17-4.933 1.406 1.406 0 0 1 1.12-1.643z'
            }
        ],
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M5.83 12.47q.032.395.106.765a1.406 1.406 0 1 1-2.756.562 9 9 0 0 1-.18-1.8h2.812'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#QRDO__a)'
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
                        fill: 'url(#QRDO__b)',
                        d: 'M12 6.497a5.5 5.5 0 0 0-5.39 6.6 1.25 1.25 0 1 1-2.45.5 8 8 0 1 1 15.84-1.6h-2.5a5.5 5.5 0 0 0-5.5-5.5'
                    }
                ],
                [
                    'path',
                    {
                        fill: 'url(#QRDO__c)',
                        d: 'M18.4 9.5a1.25 1.25 0 0 1 1.46 1 8 8 0 0 1 .14 1.49v.004c0 2.04-.765 3.9-2.02 5.315l.485.585a1.25 1.25 0 1 1-1.93 1.59l-.485-.59A7.999 7.999 0 0 1 4 11.994h2.5a5.5 5.5 0 0 0 7.93 4.935l-.73-.885a1.25 1.25 0 0 1 1.93-1.59l.74.895a5.48 5.48 0 0 0 1.04-4.385 1.25 1.25 0 0 1 .995-1.46z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#FFE000',
                        d: 'M6.515 12.417q.029.351.095.68a1.25 1.25 0 1 1-2.45.5 8 8 0 0 1-.16-1.6h2.5'
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
                        id: 'QRDO__b',
                        x1: '18.25',
                        x2: '4.655',
                        y1: '11.542',
                        y2: '14.72',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#2DDE41'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#FFE000'
                            }
                        ]
                    ]
                ],
                [
                    'linearGradient',
                    {
                        id: 'QRDO__c',
                        x1: '24.5',
                        x2: '6.998',
                        y1: '14.291',
                        y2: '14.456',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                offset: '.36',
                                stopColor: '#FF26EB'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '.66',
                                stopColor: '#137FF9'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#27B3F9'
                            }
                        ]
                    ]
                ],
                [
                    'clipPath',
                    {
                        id: 'QRDO__a'
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
 * @component @name TokenQRDO
 * @description Web3Icon for TokenQRDO
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9InVybCgjUVJET19fYSkiIGQ9Ik0xMiA1LjgxYTYuMTg4IDYuMTg4IDAgMCAwLTYuMDY0IDcuNDI0IDEuNDA2IDEuNDA2IDAgMSAxLTIuNzU2LjU2MyA5IDkgMCAxIDEgMTcuODItMS44aC0yLjgxM0E2LjE5IDYuMTkgMCAwIDAgMTIgNS44MDkiLz4KICAgIDxwYXRoIGZpbGw9InVybCgjUVJET19fYikiIGQ9Ik0xOS4yIDkuMTg2YTEuNDA3IDEuNDA3IDAgMCAxIDEuNjQzIDEuMTI1cS4xNTcuODMxLjE1NyAxLjY3N3YuMDA1YzAgMi4yOTUtLjg2IDQuMzg4LTIuMjczIDUuOThsLjU0Ni42NThhMS40MDcgMS40MDcgMCAwIDEtMi4xNzEgMS43ODhsLS41NDYtLjY2M2E5IDkgMCAwIDEtMTIuMzQyLTMuMjQ4QTkgOSAwIDAgMSAzIDExLjk5M2gyLjgxM2E2LjE4NyA2LjE4NyAwIDAgMCA4LjkyIDUuNTUybC0uODItLjk5NmExLjQwNSAxLjQwNSAwIDAgMSAuMTktMS45OCAxLjQwNyAxLjQwNyAwIDAgMSAxLjk4LjE5MmwuODMzIDEuMDA3YTYuMTYgNi4xNiAwIDAgMCAxLjE3LTQuOTMzIDEuNDA2IDEuNDA2IDAgMCAxIDEuMTItMS42NDN6Ii8+CiAgICA8cGF0aCBmaWxsPSIjRkZFMDAwIiBkPSJNNS44MyAxMi40N2E3IDcgMCAwIDAgLjEwNi43NjUgMS40MDYgMS40MDYgMCAwIDEtMi43NTYuNTYyIDkgOSAwIDAgMS0uMTgtMS44aDIuODEzIi8+CiAgICA8ZGVmcz4KICAgICAgICA8bGluZWFyR3JhZGllbnQgaWQ9IlFSRE9fX2EiIHgxPSIxOS4wMzEiIHgyPSIzLjczNiIgeTE9IjExLjQ4NSIgeTI9IjE1LjA2IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiMyRERFNDEiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjRkZFMDAwIi8+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgICAgICA8bGluZWFyR3JhZGllbnQgaWQ9IlFSRE9fX2IiIHgxPSIyNi4wNjIiIHgyPSI2LjM3MyIgeTE9IjE0LjU3OCIgeTI9IjE0Ljc2MyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgICAgICAgICA8c3RvcCBvZmZzZXQ9Ii4zNiIgc3RvcC1jb2xvcj0iI0ZGMjZFQiIvPgogICAgICAgICAgICA8c3RvcCBvZmZzZXQ9Ii42NiIgc3RvcC1jb2xvcj0iIzEzN0ZGOSIvPgogICAgICAgICAgICA8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMyN0IzRjkiLz4KICAgICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgPC9kZWZzPgo8L3N2Zz4K) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xMiA1LjgxYTYuMTg3IDYuMTg3IDAgMCAwLTYuMDY0IDcuNDI0IDEuNDA3IDEuNDA3IDAgMCAxLTIuNzU2LjU2MyA5IDkgMCAxIDEgMTcuODItMS44aC0yLjgxM0E2LjE5IDYuMTkgMCAwIDAgMTIgNS44MDkiLz4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xOS4yIDkuMTg2YTEuNDA3IDEuNDA3IDAgMCAxIDEuNjQzIDEuMTI1cS4xNTcuODMxLjE1NyAxLjY3N3YuMDA1YzAgMi4yOTUtLjg2IDQuMzg4LTIuMjczIDUuOThsLjU0Ni42NThhMS40MDYgMS40MDYgMCAwIDEtMi4xNzEgMS43ODhsLS41NDYtLjY2M0E4Ljk5OSA4Ljk5OSAwIDAgMSAzIDExLjk5M2gyLjgxMmE2LjE4NyA2LjE4NyAwIDAgMCA4LjkyMiA1LjU1MmwtLjgyMi0uOTk2YTEuNDA3IDEuNDA3IDAgMSAxIDIuMTcyLTEuNzg4bC44MzIgMS4wMDdhNi4xNiA2LjE2IDAgMCAwIDEuMTctNC45MzMgMS40MDYgMS40MDYgMCAwIDEgMS4xMi0xLjY0M3oiLz4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik01LjgzIDEyLjQ3cS4wMzIuMzk1LjEwNi43NjVhMS40MDYgMS40MDYgMCAxIDEtMi43NTYuNTYyIDkgOSAwIDAgMS0uMTgtMS44aDIuODEyIi8+Cjwvc3ZnPgo=) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNRUkRPX19hKSI+CiAgICAgICAgPHBhdGggZmlsbD0iIzAwMCIgZD0iTTI0IDBIMHYyNGgyNHoiLz4KICAgICAgICA8cGF0aCBmaWxsPSJ1cmwoI1FSRE9fX2IpIiBkPSJNMTIgNi40OTdhNS41IDUuNSAwIDAgMC01LjM5IDYuNiAxLjI1IDEuMjUgMCAxIDEtMi40NS41IDggOCAwIDEgMSAxNS44NC0xLjZoLTIuNWE1LjUgNS41IDAgMCAwLTUuNS01LjUiLz4KICAgICAgICA8cGF0aCBmaWxsPSJ1cmwoI1FSRE9fX2MpIiBkPSJNMTguNCA5LjVhMS4yNSAxLjI1IDAgMCAxIDEuNDYgMSA4IDggMCAwIDEgLjE0IDEuNDl2LjAwNGMwIDIuMDQtLjc2NSAzLjktMi4wMiA1LjMxNWwuNDg1LjU4NWExLjI1IDEuMjUgMCAxIDEtMS45MyAxLjU5bC0uNDg1LS41OUE3Ljk5OSA3Ljk5OSAwIDAgMSA0IDExLjk5NGgyLjVhNS41IDUuNSAwIDAgMCA3LjkzIDQuOTM1bC0uNzMtLjg4NWExLjI1IDEuMjUgMCAwIDEgMS45My0xLjU5bC43NC44OTVhNS40OCA1LjQ4IDAgMCAwIDEuMDQtNC4zODUgMS4yNSAxLjI1IDAgMCAxIC45OTUtMS40NnoiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjRkZFMDAwIiBkPSJNNi41MTUgMTIuNDE3cS4wMjkuMzUxLjA5NS42OGExLjI1IDEuMjUgMCAxIDEtMi40NS41IDggOCAwIDAgMS0uMTYtMS42aDIuNSIvPgogICAgPC9nPgogICAgPGRlZnM+CiAgICAgICAgPGxpbmVhckdyYWRpZW50IGlkPSJRUkRPX19iIiB4MT0iMTguMjUiIHgyPSI0LjY1NSIgeTE9IjExLjU0MiIgeTI9IjE0LjcyIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiMyRERFNDEiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjRkZFMDAwIi8+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgICAgICA8bGluZWFyR3JhZGllbnQgaWQ9IlFSRE9fX2MiIHgxPSIyNC41IiB4Mj0iNi45OTgiIHkxPSIxNC4yOTEiIHkyPSIxNC40NTYiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIuMzYiIHN0b3AtY29sb3I9IiNGRjI2RUIiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIuNjYiIHN0b3AtY29sb3I9IiMxMzdGRjkiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMjdCM0Y5Ii8+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgICAgICA8Y2xpcFBhdGggaWQ9IlFSRE9fX2EiPgogICAgICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMCAwaDI0djI0SDB6Ii8+CiAgICAgICAgPC9jbGlwUGF0aD4KICAgIDwvZGVmcz4KPC9zdmc+Cg==)
 * @see https://web3icons.io/tokens/QRDO
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenQRDO = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenQRDO', __iconNode);
;
}),
]);

//# sourceMappingURL=1qqr_%40web3icons_react_dist_0n0hz7p._.js.map