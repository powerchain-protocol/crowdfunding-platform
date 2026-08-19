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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenKAP.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenKAP
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-client] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: 'url(#KAP__a)',
                d: 'M7.738 9.353 4.058 21l5.93-3.23.323.18-1.075-3.6-.53 1.626-.603-.265.8-2.461zm8.439 0L19.94 21l-6.072-3.23-.328.18 1.1-3.6.54 1.626.62-.265-.82-2.461 1.201-3.897z'
            }
        ],
        [
            'path',
            {
                fill: 'url(#KAP__b)',
                d: 'm11.999 3-2.647 8.195 2.647 8.746 2.647-8.746zm-1.859 8.211L12 5.441l1.858 5.77L12 17.326z'
            }
        ],
        [
            'defs',
            {},
            [
                [
                    'linearGradient',
                    {
                        id: 'KAP__a',
                        x1: '12',
                        x2: '12',
                        y1: '3',
                        y2: '21',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#DBA646'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#D38B3E'
                            }
                        ]
                    ]
                ],
                [
                    'linearGradient',
                    {
                        id: 'KAP__b',
                        x1: '11.999',
                        x2: '11.999',
                        y1: '3',
                        y2: '19.941',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#DCAC4A'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#CC7229'
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
                d: 'M7.738 9.353 4.058 21l5.93-3.23.323.18-1.075-3.6-.53 1.626-.603-.265.8-2.461zm8.439 0L19.941 21l-6.072-3.23-.328.18 1.1-3.6.54 1.626.62-.265-.82-2.461 1.201-3.897zM11.999 3l-2.647 8.195 2.647 8.746 2.647-8.746zm-1.859 8.211L12 5.441l1.858 5.77L12 17.326z'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#KAP__a)'
            },
            [
                [
                    'path',
                    {
                        fill: 'url(#KAP__b)',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M8.212 9.647 4.942 20l5.27-2.87.287.16-.955-3.2-.47 1.444-.537-.235.71-2.188zm7.501 0L19.06 20l-5.398-2.87-.291.16.979-3.2.48 1.444.55-.235-.73-2.188 1.069-3.464zM11.999 4l-2.353 7.285 2.353 7.774 2.353-7.774zm-1.652 7.299L12 6.169l1.652 5.13L12 16.734z'
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
                        id: 'KAP__b',
                        x1: '12',
                        x2: '12',
                        y1: '4',
                        y2: '20',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#DBA646'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#D38B3E'
                            }
                        ]
                    ]
                ],
                [
                    'clipPath',
                    {
                        id: 'KAP__a'
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
 * @component @name TokenKAP
 * @description Web3Icon for TokenKAP
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9InVybCgjS0FQX19hKSIgZD0iTTcuNzM4IDkuMzUzIDQuMDU4IDIxbDUuOTMtMy4yMy4zMjMuMTgtMS4wNzUtMy42LS41MyAxLjYyNi0uNjAzLS4yNjUuOC0yLjQ2MXptOC40MzkgMEwxOS45NCAyMWwtNi4wNzItMy4yMy0uMzI4LjE4IDEuMS0zLjYuNTQgMS42MjYuNjItLjI2NS0uODItMi40NjEgMS4yMDEtMy44OTd6Ii8+CiAgICA8cGF0aCBmaWxsPSJ1cmwoI0tBUF9fYikiIGQ9Im0xMS45OTkgMy0yLjY0NyA4LjE5NSAyLjY0NyA4Ljc0NiAyLjY0Ny04Ljc0NnptLTEuODU5IDguMjExTDEyIDUuNDQxbDEuODU4IDUuNzdMMTIgMTcuMzI2eiIvPgogICAgPGRlZnM+CiAgICAgICAgPGxpbmVhckdyYWRpZW50IGlkPSJLQVBfX2EiIHgxPSIxMiIgeDI9IjEyIiB5MT0iMyIgeTI9IjIxIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiNEQkE2NDYiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjRDM4QjNFIi8+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgICAgICA8bGluZWFyR3JhZGllbnQgaWQ9IktBUF9fYiIgeDE9IjExLjk5OSIgeDI9IjExLjk5OSIgeTE9IjMiIHkyPSIxOS45NDEiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iI0RDQUM0QSIvPgogICAgICAgICAgICA8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNDQzcyMjkiLz4KICAgICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgPC9kZWZzPgo8L3N2Zz4K) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik03LjczOCA5LjM1MyA0LjA1OCAyMWw1LjkzLTMuMjMuMzIzLjE4LTEuMDc1LTMuNi0uNTMgMS42MjYtLjYwMy0uMjY1LjgtMi40NjF6bTguNDM5IDBMMTkuOTQxIDIxbC02LjA3Mi0zLjIzLS4zMjguMTggMS4xLTMuNi41NCAxLjYyNi42Mi0uMjY1LS44Mi0yLjQ2MSAxLjIwMS0zLjg5N3pNMTEuOTk5IDNsLTIuNjQ3IDguMTk1IDIuNjQ3IDguNzQ2IDIuNjQ3LTguNzQ2em0tMS44NTkgOC4yMTFMMTIgNS40NDFsMS44NTggNS43N0wxMiAxNy4zMjZ6Ii8+Cjwvc3ZnPgo=) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNLQVBfX2EpIj4KICAgICAgICA8cGF0aCBmaWxsPSJ1cmwoI0tBUF9fYikiIGQ9Ik0yNCAwSDB2MjRoMjR6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTguMjEyIDkuNjQ3IDQuOTQyIDIwbDUuMjctMi44Ny4yODcuMTYtLjk1NS0zLjItLjQ3IDEuNDQ0LS41MzctLjIzNS43MS0yLjE4OHptNy41MDEgMEwxOS4wNiAyMGwtNS4zOTgtMi44Ny0uMjkxLjE2Ljk3OS0zLjIuNDggMS40NDQuNTUtLjIzNS0uNzMtMi4xODggMS4wNjktMy40NjR6TTExLjk5OSA0bC0yLjM1MyA3LjI4NSAyLjM1MyA3Ljc3NCAyLjM1My03Ljc3NHptLTEuNjUyIDcuMjk5TDEyIDYuMTY5bDEuNjUyIDUuMTNMMTIgMTYuNzM0eiIvPgogICAgPC9nPgogICAgPGRlZnM+CiAgICAgICAgPGxpbmVhckdyYWRpZW50IGlkPSJLQVBfX2IiIHgxPSIxMiIgeDI9IjEyIiB5MT0iNCIgeTI9IjIwIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiNEQkE2NDYiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjRDM4QjNFIi8+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgICAgICA8Y2xpcFBhdGggaWQ9IktBUF9fYSI+CiAgICAgICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0wIDBoMjR2MjRIMHoiLz4KICAgICAgICA8L2NsaXBQYXRoPgogICAgPC9kZWZzPgo8L3N2Zz4K)
 * @see https://web3icons.io/tokens/KAP
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenKAP = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenKAP', __iconNode);
;
}),
]);

//# sourceMappingURL=1qqr_%40web3icons_react_dist_0ulyw4p._.js.map