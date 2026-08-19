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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenFEVR.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenFEVR
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-client] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: 'url(#FEVR__a)',
                d: 'M12.36 4H3.667A.667.667 0 0 0 3 4.667v14.666a.667.667 0 0 0 .667.667H7v-5.333h2.547l1.053-4H7V8h4.307zm.18 6.667h2.294a1.332 1.332 0 1 0 0-2.667h-1.587L14.3 4h.387a5.333 5.333 0 0 1 3.013 9.733L21 20h-4.46l-2.813-5.333h-2.24z'
            }
        ],
        [
            'defs',
            {},
            [
                [
                    'linearGradient',
                    {
                        id: 'FEVR__a',
                        x1: '6.536',
                        x2: '15.8',
                        y1: '6.143',
                        y2: '19.209',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#E752F5'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '.48',
                                stopColor: '#5C0CA9'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#44019C'
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
                d: 'M12.36 4H3.667A.667.667 0 0 0 3 4.667v14.666a.667.667 0 0 0 .667.667H7v-5.333h2.547l1.053-4H7V8h4.307zm.18 6.667h2.294a1.332 1.332 0 1 0 0-2.667h-1.587L14.3 4h.387a5.333 5.333 0 0 1 3.013 9.733L21 20h-4.46l-2.813-5.333h-2.24z'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#FEVR__a)'
            },
            [
                [
                    'path',
                    {
                        fill: 'url(#FEVR__b)',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M12.32 4.889H4.593A.593.593 0 0 0 4 5.482v13.037a.593.593 0 0 0 .593.592h2.963v-4.74h2.263l.936-3.556h-3.2v-2.37h3.829zm.16 5.926h2.039a1.185 1.185 0 1 0 0-2.37h-1.41l.935-3.556h.344a4.74 4.74 0 0 1 2.679 8.652L20 19.11h-3.964l-2.501-4.74h-1.991z'
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
                        id: 'FEVR__b',
                        x1: '7.143',
                        x2: '15.377',
                        y1: '6.794',
                        y2: '18.408',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#E752F5'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '.48',
                                stopColor: '#5C0CA9'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#44019C'
                            }
                        ]
                    ]
                ],
                [
                    'clipPath',
                    {
                        id: 'FEVR__a'
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
 * @component @name TokenFEVR
 * @description Web3Icon for TokenFEVR
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9InVybCgjRkVWUl9fYSkiIGQ9Ik0xMi4zNiA0SDMuNjY3QS42NjcuNjY3IDAgMCAwIDMgNC42Njd2MTQuNjY2YS42NjcuNjY3IDAgMCAwIC42NjcuNjY3SDd2LTUuMzMzaDIuNTQ3bDEuMDUzLTRIN1Y4aDQuMzA3em0uMTggNi42NjdoMi4yOTRhMS4zMzIgMS4zMzIgMCAxIDAgMC0yLjY2N2gtMS41ODdMMTQuMyA0aC4zODdhNS4zMzMgNS4zMzMgMCAwIDEgMy4wMTMgOS43MzNMMjEgMjBoLTQuNDZsLTIuODEzLTUuMzMzaC0yLjI0eiIvPgogICAgPGRlZnM+CiAgICAgICAgPGxpbmVhckdyYWRpZW50IGlkPSJGRVZSX19hIiB4MT0iNi41MzYiIHgyPSIxNS44IiB5MT0iNi4xNDMiIHkyPSIxOS4yMDkiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iI0U3NTJGNSIvPgogICAgICAgICAgICA8c3RvcCBvZmZzZXQ9Ii40OCIgc3RvcC1jb2xvcj0iIzVDMENBOSIvPgogICAgICAgICAgICA8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiM0NDAxOUMiLz4KICAgICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgPC9kZWZzPgo8L3N2Zz4K) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xMi4zNiA0SDMuNjY3QS42NjcuNjY3IDAgMCAwIDMgNC42Njd2MTQuNjY2YS42NjcuNjY3IDAgMCAwIC42NjcuNjY3SDd2LTUuMzMzaDIuNTQ3bDEuMDUzLTRIN1Y4aDQuMzA3em0uMTggNi42NjdoMi4yOTRhMS4zMzIgMS4zMzIgMCAxIDAgMC0yLjY2N2gtMS41ODdMMTQuMyA0aC4zODdhNS4zMzMgNS4zMzMgMCAwIDEgMy4wMTMgOS43MzNMMjEgMjBoLTQuNDZsLTIuODEzLTUuMzMzaC0yLjI0eiIvPgo8L3N2Zz4K) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNGRVZSX19hKSI+CiAgICAgICAgPHBhdGggZmlsbD0idXJsKCNGRVZSX19iKSIgZD0iTTI0IDBIMHYyNGgyNHoiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTIuMzIgNC44ODlINC41OTNBLjU5My41OTMgMCAwIDAgNCA1LjQ4MnYxMy4wMzdhLjU5My41OTMgMCAwIDAgLjU5My41OTJoMi45NjN2LTQuNzRoMi4yNjNsLjkzNi0zLjU1NmgtMy4ydi0yLjM3aDMuODI5em0uMTYgNS45MjZoMi4wMzlhMS4xODUgMS4xODUgMCAxIDAgMC0yLjM3aC0xLjQxbC45MzUtMy41NTZoLjM0NGE0Ljc0IDQuNzQgMCAwIDEgMi42NzkgOC42NTJMMjAgMTkuMTFoLTMuOTY0bC0yLjUwMS00Ljc0aC0xLjk5MXoiLz4KICAgIDwvZz4KICAgIDxkZWZzPgogICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iRkVWUl9fYiIgeDE9IjcuMTQzIiB4Mj0iMTUuMzc3IiB5MT0iNi43OTQiIHkyPSIxOC40MDgiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iI0U3NTJGNSIvPgogICAgICAgICAgICA8c3RvcCBvZmZzZXQ9Ii40OCIgc3RvcC1jb2xvcj0iIzVDMENBOSIvPgogICAgICAgICAgICA8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiM0NDAxOUMiLz4KICAgICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgICAgIDxjbGlwUGF0aCBpZD0iRkVWUl9fYSI+CiAgICAgICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0wIDBoMjR2MjRIMHoiLz4KICAgICAgICA8L2NsaXBQYXRoPgogICAgPC9kZWZzPgo8L3N2Zz4K)
 * @see https://web3icons.io/tokens/FEVR
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenFEVR = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenFEVR', __iconNode);
;
}),
]);

//# sourceMappingURL=1qqr_%40web3icons_react_dist_1fq2y9v._.js.map