module.exports = [
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createWeb3Icon",
    ()=>createWeb3Icon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$types$2b$node$40$24$2e$13$2e$3_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.1_@types+node@24.13.3_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$BaseIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/BaseIcon.js [app-ssr] (ecmascript)");
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
    const Component = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$types$2b$node$40$24$2e$13$2e$3_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ variant = defaultVariant, fallback, ...props }, ref)=>{
        const iconData = variants[variant];
        if (!iconData) {
            console.warn(`Icon "${name}" does not have variant "${variant}". ` + `Available variants: ${availableVariants.join(', ')}`);
            return null;
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$types$2b$node$40$24$2e$13$2e$3_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$BaseIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseIcon"], {
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
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$types$2b$node$40$24$2e$13$2e$3_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])(element, elementProps, childElements);
    });
}
;
}),
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenHIBS.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenHIBS
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-ssr] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: 'url(#HIBS__a)',
                d: 'M5.25 3A2.25 2.25 0 0 0 3 5.25v13.5a2.25 2.25 0 0 0 4.5 0V5.25A2.25 2.25 0 0 0 5.25 3M12 5.584a2.25 2.25 0 0 0-2.25 2.257v8.337a2.25 2.25 0 0 0 4.5 0V7.842A2.25 2.25 0 0 0 12 5.584m4.5 6.056c0-1.222 1.01-2.211 2.25-2.211s2.25.99 2.25 2.211v7.148C21 20.01 19.99 21 18.75 21a2.23 2.23 0 0 1-2.25-2.212zM18.75 3a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5'
            }
        ],
        [
            'defs',
            {},
            [
                [
                    'linearGradient',
                    {
                        id: 'HIBS__a',
                        x1: '11.678',
                        x2: '11.678',
                        y1: '3',
                        y2: '21',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#25A9E0'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#1A75BB'
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
                d: 'M5.25 3A2.25 2.25 0 0 0 3 5.25v13.5a2.25 2.25 0 0 0 4.5 0V5.25A2.25 2.25 0 0 0 5.25 3M12 5.584a2.25 2.25 0 0 0-2.25 2.257v8.337a2.25 2.25 0 0 0 4.5 0V7.842A2.25 2.25 0 0 0 12 5.584m4.5 6.056c0-1.222 1.01-2.211 2.25-2.211s2.25.99 2.25 2.211v7.148C21 20.01 19.99 21 18.75 21a2.23 2.23 0 0 1-2.25-2.212zM18.75 3a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#HIBS__a)'
            },
            [
                [
                    'path',
                    {
                        fill: 'url(#HIBS__b)',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M6 4a2 2 0 0 0-2 2v12a2 2 0 0 0 4 0V6a2 2 0 0 0-2-2m6 2.297a2 2 0 0 0-2 2.006v7.411a2 2 0 1 0 4 0V8.303a2 2 0 0 0-2-2.006m4 5.383c0-1.086.897-1.966 2-1.966s2 .88 2 1.966v6.354C20 19.12 19.103 20 18 20a1.98 1.98 0 0 1-2-1.966zM18 4a2 2 0 1 0 0 4 2 2 0 0 0 0-4'
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
                        id: 'HIBS__b',
                        x1: '11.714',
                        x2: '11.714',
                        y1: '4',
                        y2: '20',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#25A9E0'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#1A75BB'
                            }
                        ]
                    ]
                ],
                [
                    'clipPath',
                    {
                        id: 'HIBS__a'
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
 * @component @name TokenHIBS
 * @description Web3Icon for TokenHIBS
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9InVybCgjSElCU19fYSkiIGQ9Ik01LjI1IDNBMi4yNSAyLjI1IDAgMCAwIDMgNS4yNXYxMy41YTIuMjUgMi4yNSAwIDAgMCA0LjUgMFY1LjI1QTIuMjUgMi4yNSAwIDAgMCA1LjI1IDNNMTIgNS41ODRhMi4yNSAyLjI1IDAgMCAwLTIuMjUgMi4yNTd2OC4zMzdhMi4yNSAyLjI1IDAgMCAwIDQuNSAwVjcuODQyQTIuMjUgMi4yNSAwIDAgMCAxMiA1LjU4NG00LjUgNi4wNTZjMC0xLjIyMiAxLjAxLTIuMjExIDIuMjUtMi4yMTFzMi4yNS45OSAyLjI1IDIuMjExdjcuMTQ4QzIxIDIwLjAxIDE5Ljk5IDIxIDE4Ljc1IDIxYTIuMjMgMi4yMyAwIDAgMS0yLjI1LTIuMjEyek0xOC43NSAzYTIuMjUgMi4yNSAwIDEgMCAwIDQuNSAyLjI1IDIuMjUgMCAwIDAgMC00LjUiLz4KICAgIDxkZWZzPgogICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iSElCU19fYSIgeDE9IjExLjY3OCIgeDI9IjExLjY3OCIgeTE9IjMiIHkyPSIyMSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjMjVBOUUwIi8+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzFBNzVCQiIvPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICA8L2RlZnM+Cjwvc3ZnPgo=) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik01LjI1IDNBMi4yNSAyLjI1IDAgMCAwIDMgNS4yNXYxMy41YTIuMjUgMi4yNSAwIDAgMCA0LjUgMFY1LjI1QTIuMjUgMi4yNSAwIDAgMCA1LjI1IDNNMTIgNS41ODRhMi4yNSAyLjI1IDAgMCAwLTIuMjUgMi4yNTd2OC4zMzdhMi4yNSAyLjI1IDAgMCAwIDQuNSAwVjcuODQyQTIuMjUgMi4yNSAwIDAgMCAxMiA1LjU4NG00LjUgNi4wNTZjMC0xLjIyMiAxLjAxLTIuMjExIDIuMjUtMi4yMTFzMi4yNS45OSAyLjI1IDIuMjExdjcuMTQ4QzIxIDIwLjAxIDE5Ljk5IDIxIDE4Ljc1IDIxYTIuMjMgMi4yMyAwIDAgMS0yLjI1LTIuMjEyek0xOC43NSAzYTIuMjUgMi4yNSAwIDEgMCAwIDQuNSAyLjI1IDIuMjUgMCAwIDAgMC00LjUiLz4KPC9zdmc+Cg==) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNISUJTX19hKSI+CiAgICAgICAgPHBhdGggZmlsbD0idXJsKCNISUJTX19iKSIgZD0iTTI0IDBIMHYyNGgyNHoiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNNiA0YTIgMiAwIDAgMC0yIDJ2MTJhMiAyIDAgMCAwIDQgMFY2YTIgMiAwIDAgMC0yLTJtNiAyLjI5N2EyIDIgMCAwIDAtMiAyLjAwNnY3LjQxMWEyIDIgMCAxIDAgNCAwVjguMzAzYTIgMiAwIDAgMC0yLTIuMDA2bTQgNS4zODNjMC0xLjA4Ni44OTctMS45NjYgMi0xLjk2NnMyIC44OCAyIDEuOTY2djYuMzU0QzIwIDE5LjEyIDE5LjEwMyAyMCAxOCAyMGExLjk4IDEuOTggMCAwIDEtMi0xLjk2NnpNMTggNGEyIDIgMCAxIDAgMCA0IDIgMiAwIDAgMCAwLTQiLz4KICAgIDwvZz4KICAgIDxkZWZzPgogICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iSElCU19fYiIgeDE9IjExLjcxNCIgeDI9IjExLjcxNCIgeTE9IjQiIHkyPSIyMCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjMjVBOUUwIi8+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzFBNzVCQiIvPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICAgICAgPGNsaXBQYXRoIGlkPSJISUJTX19hIj4KICAgICAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTAgMGgyNHYyNEgweiIvPgogICAgICAgIDwvY2xpcFBhdGg+CiAgICA8L2RlZnM+Cjwvc3ZnPgo=)
 * @see https://web3icons.io/tokens/HIBS
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenHIBS = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenHIBS', __iconNode);
;
}),
];

//# sourceMappingURL=1qqr_%40web3icons_react_dist_150r0zd._.js.map