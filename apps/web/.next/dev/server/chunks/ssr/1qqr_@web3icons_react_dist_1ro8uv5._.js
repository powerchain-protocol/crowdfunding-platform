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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenISK.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenISK
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-ssr] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: 'url(#ISK__a)',
                d: 'm11.896 3 6.688 6.556a3.3 3.3 0 0 1 0 4.737l-2.06 2.018-4.624-4.534A6.123 6.123 0 0 1 11.9 3zm.208 18-6.688-6.556a3.3 3.3 0 0 1 0-4.737l2.06-2.018 4.623 4.534a6.125 6.125 0 0 1 0 8.777z'
            }
        ],
        [
            'defs',
            {},
            [
                [
                    'linearGradient',
                    {
                        id: 'ISK__a',
                        x1: '16.294',
                        x2: '6.692',
                        y1: '3.993',
                        y2: '19.654',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#FA2A9B'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '.39',
                                stopColor: '#6691DA'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '.57',
                                stopColor: '#2BAAEA'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#003A9F'
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
                d: 'm11.896 3 6.688 6.556a3.3 3.3 0 0 1 0 4.737l-2.06 2.018-4.624-4.534A6.124 6.124 0 0 1 11.9 3zm.208 18-6.688-6.556a3.3 3.3 0 0 1 0-4.737l2.06-2.018 4.623 4.534a6.127 6.127 0 0 1 0 8.777z'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#ISK__a)'
            },
            [
                [
                    'path',
                    {
                        fill: 'url(#ISK__b)',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'm11.908 4 5.945 5.827a2.934 2.934 0 0 1 0 4.21l-1.832 1.795-4.11-4.03a5.443 5.443 0 0 1 0-7.802zm.185 16-5.946-5.827a2.934 2.934 0 0 1 0-4.21L7.98 8.167l4.11 4.03a5.45 5.45 0 0 1 1.218 6.018A5.45 5.45 0 0 1 12.088 20z'
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
                        id: 'ISK__b',
                        x1: '15.817',
                        x2: '7.282',
                        y1: '4.883',
                        y2: '18.804',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#FA2A9B'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '.39',
                                stopColor: '#6691DA'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '.57',
                                stopColor: '#2BAAEA'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#003A9F'
                            }
                        ]
                    ]
                ],
                [
                    'clipPath',
                    {
                        id: 'ISK__a'
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
 * @component @name TokenISK
 * @description Web3Icon for TokenISK
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9InVybCgjSVNLX19hKSIgZD0ibTExLjg5NiAzIDYuNjg4IDYuNTU2YTMuMyAzLjMgMCAwIDEgMCA0LjczN2wtMi4wNiAyLjAxOC00LjYyNC00LjUzNEE2LjEyMyA2LjEyMyAwIDAgMSAxMS45IDN6bS4yMDggMTgtNi42ODgtNi41NTZhMy4zIDMuMyAwIDAgMSAwLTQuNzM3bDIuMDYtMi4wMTggNC42MjMgNC41MzRhNi4xMjUgNi4xMjUgMCAwIDEgMCA4Ljc3N3oiLz4KICAgIDxkZWZzPgogICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iSVNLX19hIiB4MT0iMTYuMjk0IiB4Mj0iNi42OTIiIHkxPSIzLjk5MyIgeTI9IjE5LjY1NCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjRkEyQTlCIi8+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iLjM5IiBzdG9wLWNvbG9yPSIjNjY5MURBIi8+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iLjU3IiBzdG9wLWNvbG9yPSIjMkJBQUVBIi8+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzAwM0E5RiIvPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICA8L2RlZnM+Cjwvc3ZnPgo=) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Im0xMS44OTYgMyA2LjY4OCA2LjU1NmEzLjMgMy4zIDAgMCAxIDAgNC43MzdsLTIuMDYgMi4wMTgtNC42MjQtNC41MzRBNi4xMjQgNi4xMjQgMCAwIDEgMTEuOSAzem0uMjA4IDE4LTYuNjg4LTYuNTU2YTMuMyAzLjMgMCAwIDEgMC00LjczN2wyLjA2LTIuMDE4IDQuNjIzIDQuNTM0YTYuMTI3IDYuMTI3IDAgMCAxIDAgOC43Nzd6Ii8+Cjwvc3ZnPgo=) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNJU0tfX2EpIj4KICAgICAgICA8cGF0aCBmaWxsPSJ1cmwoI0lTS19fYikiIGQ9Ik0yNCAwSDB2MjRoMjR6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0ibTExLjkwOCA0IDUuOTQ1IDUuODI3YTIuOTM0IDIuOTM0IDAgMCAxIDAgNC4yMWwtMS44MzIgMS43OTUtNC4xMS00LjAzYTUuNDQzIDUuNDQzIDAgMCAxIDAtNy44MDJ6bS4xODUgMTYtNS45NDYtNS44MjdhMi45MzQgMi45MzQgMCAwIDEgMC00LjIxTDcuOTggOC4xNjdsNC4xMSA0LjAzYTUuNDUgNS40NSAwIDAgMSAxLjIxOCA2LjAxOEE1LjQ1IDUuNDUgMCAwIDEgMTIuMDg4IDIweiIvPgogICAgPC9nPgogICAgPGRlZnM+CiAgICAgICAgPGxpbmVhckdyYWRpZW50IGlkPSJJU0tfX2IiIHgxPSIxNS44MTciIHgyPSI3LjI4MiIgeTE9IjQuODgzIiB5Mj0iMTguODA0IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiNGQTJBOUIiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIuMzkiIHN0b3AtY29sb3I9IiM2NjkxREEiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIuNTciIHN0b3AtY29sb3I9IiMyQkFBRUEiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMDAzQTlGIi8+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgICAgICA8Y2xpcFBhdGggaWQ9IklTS19fYSI+CiAgICAgICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0wIDBoMjR2MjRIMHoiLz4KICAgICAgICA8L2NsaXBQYXRoPgogICAgPC9kZWZzPgo8L3N2Zz4K)
 * @see https://web3icons.io/tokens/ISK
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenISK = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenISK', __iconNode);
;
}),
];

//# sourceMappingURL=1qqr_%40web3icons_react_dist_1ro8uv5._.js.map