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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/networks/NetworkProm.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>NetworkProm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-client] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: 'url(#prom__a)',
                d: 'm17.38 5.172-9.845 6.953a5.87 5.87 0 0 1-.892-3.132C6.643 5.682 9.355 3 12.707 3a6.07 6.07 0 0 1 4.673 2.172'
            }
        ],
        [
            'path',
            {
                fill: 'url(#prom__b)',
                d: 'M17.5 10.262a5.9 5.9 0 0 0-.892-3.133l-4.911 3.465-4.936 3.48-.261.186.012 6.74s6.492-4.33 8.538-5.921c1.522-1.186 2.45-2.847 2.45-4.817'
            }
        ],
        [
            'defs',
            {},
            [
                [
                    'linearGradient',
                    {
                        id: 'prom__a',
                        x1: '14.355',
                        x2: '8.154',
                        y1: '3.24',
                        y2: '10.538',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#E2D177'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#EE448A'
                            }
                        ]
                    ]
                ],
                [
                    'linearGradient',
                    {
                        id: 'prom__b',
                        x1: '16.504',
                        x2: '7.202',
                        y1: '10.146',
                        y2: '17.523',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#E2D177'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#EE448A'
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
                d: 'm17.38 5.172-9.845 6.953a5.87 5.87 0 0 1-.892-3.132C6.643 5.682 9.355 3 12.707 3a6.07 6.07 0 0 1 4.673 2.172m.12 5.09a5.9 5.9 0 0 0-.892-3.133l-4.911 3.465-4.936 3.48-.261.186.012 6.74s6.492-4.33 8.538-5.921c1.522-1.186 2.45-2.847 2.45-4.817'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#prom__a)'
            },
            [
                [
                    'path',
                    {
                        fill: 'url(#prom__b)',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'm17.38 5.172-9.845 6.953a5.87 5.87 0 0 1-.892-3.132C6.643 5.682 9.355 3 12.707 3a6.07 6.07 0 0 1 4.673 2.172m.12 5.09a5.9 5.9 0 0 0-.892-3.133l-4.911 3.465-4.936 3.48-.261.186.012 6.74s6.492-4.33 8.538-5.921c1.522-1.186 2.45-2.847 2.45-4.817'
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
                        id: 'prom__b',
                        x1: '21.827',
                        x2: '5.298',
                        y1: '5.221',
                        y2: '21.75',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#E2D177'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#EE448A'
                            }
                        ]
                    ]
                ],
                [
                    'clipPath',
                    {
                        id: 'prom__a'
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
 * @component @name NetworkProm
 * @description Web3Icon for NetworkProm
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9InVybCgjcHJvbV9fYSkiIGQ9Im0xNy4zOCA1LjE3Mi05Ljg0NSA2Ljk1M2E1Ljg3IDUuODcgMCAwIDEtLjg5Mi0zLjEzMkM2LjY0MyA1LjY4MiA5LjM1NSAzIDEyLjcwNyAzYTYuMDcgNi4wNyAwIDAgMSA0LjY3MyAyLjE3MiIvPgogICAgPHBhdGggZmlsbD0idXJsKCNwcm9tX19iKSIgZD0iTTE3LjUgMTAuMjYyYTUuOSA1LjkgMCAwIDAtLjg5Mi0zLjEzM2wtNC45MTEgMy40NjUtNC45MzYgMy40OC0uMjYxLjE4Ni4wMTIgNi43NHM2LjQ5Mi00LjMzIDguNTM4LTUuOTIxYzEuNTIyLTEuMTg2IDIuNDUtMi44NDcgMi40NS00LjgxNyIvPgogICAgPGRlZnM+CiAgICAgICAgPGxpbmVhckdyYWRpZW50IGlkPSJwcm9tX19hIiB4MT0iMTQuMzU1IiB4Mj0iOC4xNTQiIHkxPSIzLjI0IiB5Mj0iMTAuNTM4IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiNFMkQxNzciLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjRUU0NDhBIi8+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgICAgICA8bGluZWFyR3JhZGllbnQgaWQ9InByb21fX2IiIHgxPSIxNi41MDQiIHgyPSI3LjIwMiIgeTE9IjEwLjE0NiIgeTI9IjE3LjUyMyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjRTJEMTc3Ii8+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI0VFNDQ4QSIvPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICA8L2RlZnM+Cjwvc3ZnPgo=) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Im0xNy4zOCA1LjE3Mi05Ljg0NSA2Ljk1M2E1Ljg3IDUuODcgMCAwIDEtLjg5Mi0zLjEzMkM2LjY0MyA1LjY4MiA5LjM1NSAzIDEyLjcwNyAzYTYuMDcgNi4wNyAwIDAgMSA0LjY3MyAyLjE3Mm0uMTIgNS4wOWE1LjkgNS45IDAgMCAwLS44OTItMy4xMzNsLTQuOTExIDMuNDY1LTQuOTM2IDMuNDgtLjI2MS4xODYuMDEyIDYuNzRzNi40OTItNC4zMyA4LjUzOC01LjkyMWMxLjUyMi0xLjE4NiAyLjQ1LTIuODQ3IDIuNDUtNC44MTciLz4KPC9zdmc+Cg==) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNwcm9tX19hKSI+CiAgICAgICAgPHBhdGggZmlsbD0idXJsKCNwcm9tX19iKSIgZD0iTTI0IDBIMHYyNGgyNHoiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJtMTcuMzggNS4xNzItOS44NDUgNi45NTNhNS44NyA1Ljg3IDAgMCAxLS44OTItMy4xMzJDNi42NDMgNS42ODIgOS4zNTUgMyAxMi43MDcgM2E2LjA3IDYuMDcgMCAwIDEgNC42NzMgMi4xNzJtLjEyIDUuMDlhNS45IDUuOSAwIDAgMC0uODkyLTMuMTMzbC00LjkxMSAzLjQ2NS00LjkzNiAzLjQ4LS4yNjEuMTg2LjAxMiA2Ljc0czYuNDkyLTQuMzMgOC41MzgtNS45MjFjMS41MjItMS4xODYgMi40NS0yLjg0NyAyLjQ1LTQuODE3Ii8+CiAgICA8L2c+CiAgICA8ZGVmcz4KICAgICAgICA8bGluZWFyR3JhZGllbnQgaWQ9InByb21fX2IiIHgxPSIyMS44MjciIHgyPSI1LjI5OCIgeTE9IjUuMjIxIiB5Mj0iMjEuNzUiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iI0UyRDE3NyIvPgogICAgICAgICAgICA8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNFRTQ0OEEiLz4KICAgICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgICAgIDxjbGlwUGF0aCBpZD0icHJvbV9fYSI+CiAgICAgICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0wIDBoMjR2MjRIMHoiLz4KICAgICAgICA8L2NsaXBQYXRoPgogICAgPC9kZWZzPgo8L3N2Zz4K)
 * @see https://web3icons.io/networks/prom
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const NetworkProm = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWeb3Icon"])('NetworkProm', __iconNode);
;
}),
]);

//# sourceMappingURL=1qqr_%40web3icons_react_dist_1k9ondq._.js.map