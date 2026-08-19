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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenUBT.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenUBT
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-ssr] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: 'url(#UBT__a)',
                d: 'M21 5.25 18.75 3h-9v14.625H6.375V5.25H3v13.5L5.25 21h5.625l2.25-2.25h5.625L21 16.5V12l-1.125-1.125L21 9.75zm-7.875 1.125h4.5V9.75h-4.5zm4.5 9h-4.5V12h4.5z'
            }
        ],
        [
            'defs',
            {},
            [
                [
                    'linearGradient',
                    {
                        id: 'UBT__a',
                        x1: '18.489',
                        x2: '5.771',
                        y1: '5.536',
                        y2: '18.335',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#F5E710'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '.22',
                                stopColor: '#4DB15A'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '.45',
                                stopColor: '#00A09A'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '.71',
                                stopColor: '#1E548A'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#DA1E74'
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
                d: 'M21 5.25 18.75 3h-9v14.625H6.375V5.25H3v13.5L5.25 21h5.625l2.25-2.25h5.625L21 16.5V12l-1.125-1.125L21 9.75zm-7.875 1.125h4.5V9.75h-4.5zm4.5 9h-4.5V12h4.5z'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#UBT__a)'
            },
            [
                [
                    'path',
                    {
                        fill: 'url(#UBT__b)',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'm20 6-2-2h-8v13H7V6H4v12l2 2h5l2-2h5l2-2v-4l-1-1 1-1zm-7 1h4v3h-4zm4 8h-4v-3h4z'
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
                        id: 'UBT__b',
                        x1: '17.768',
                        x2: '6.463',
                        y1: '6.254',
                        y2: '17.631',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#F5E710'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '.22',
                                stopColor: '#4DB15A'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '.45',
                                stopColor: '#00A09A'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '.71',
                                stopColor: '#1E548A'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#DA1E74'
                            }
                        ]
                    ]
                ],
                [
                    'clipPath',
                    {
                        id: 'UBT__a'
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
 * @component @name TokenUBT
 * @description Web3Icon for TokenUBT
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9InVybCgjVUJUX19hKSIgZD0iTTIxIDUuMjUgMTguNzUgM2gtOXYxNC42MjVINi4zNzVWNS4yNUgzdjEzLjVMNS4yNSAyMWg1LjYyNWwyLjI1LTIuMjVoNS42MjVMMjEgMTYuNVYxMmwtMS4xMjUtMS4xMjVMMjEgOS43NXptLTcuODc1IDEuMTI1aDQuNVY5Ljc1aC00LjV6bTQuNSA5aC00LjVWMTJoNC41eiIvPgogICAgPGRlZnM+CiAgICAgICAgPGxpbmVhckdyYWRpZW50IGlkPSJVQlRfX2EiIHgxPSIxOC40ODkiIHgyPSI1Ljc3MSIgeTE9IjUuNTM2IiB5Mj0iMTguMzM1IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiNGNUU3MTAiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIuMjIiIHN0b3AtY29sb3I9IiM0REIxNUEiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIuNDUiIHN0b3AtY29sb3I9IiMwMEEwOUEiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIuNzEiIHN0b3AtY29sb3I9IiMxRTU0OEEiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjREExRTc0Ii8+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgIDwvZGVmcz4KPC9zdmc+Cg==) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0yMSA1LjI1IDE4Ljc1IDNoLTl2MTQuNjI1SDYuMzc1VjUuMjVIM3YxMy41TDUuMjUgMjFoNS42MjVsMi4yNS0yLjI1aDUuNjI1TDIxIDE2LjVWMTJsLTEuMTI1LTEuMTI1TDIxIDkuNzV6bS03Ljg3NSAxLjEyNWg0LjVWOS43NWgtNC41em00LjUgOWgtNC41VjEyaDQuNXoiLz4KPC9zdmc+Cg==) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNVQlRfX2EpIj4KICAgICAgICA8cGF0aCBmaWxsPSJ1cmwoI1VCVF9fYikiIGQ9Ik0yNCAwSDB2MjRoMjR6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0ibTIwIDYtMi0yaC04djEzSDdWNkg0djEybDIgMmg1bDItMmg1bDItMnYtNGwtMS0xIDEtMXptLTcgMWg0djNoLTR6bTQgOGgtNHYtM2g0eiIvPgogICAgPC9nPgogICAgPGRlZnM+CiAgICAgICAgPGxpbmVhckdyYWRpZW50IGlkPSJVQlRfX2IiIHgxPSIxNy43NjgiIHgyPSI2LjQ2MyIgeTE9IjYuMjU0IiB5Mj0iMTcuNjMxIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiNGNUU3MTAiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIuMjIiIHN0b3AtY29sb3I9IiM0REIxNUEiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIuNDUiIHN0b3AtY29sb3I9IiMwMEEwOUEiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIuNzEiIHN0b3AtY29sb3I9IiMxRTU0OEEiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjREExRTc0Ii8+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgICAgICA8Y2xpcFBhdGggaWQ9IlVCVF9fYSI+CiAgICAgICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0wIDBoMjR2MjRIMHoiLz4KICAgICAgICA8L2NsaXBQYXRoPgogICAgPC9kZWZzPgo8L3N2Zz4K)
 * @see https://web3icons.io/tokens/UBT
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenUBT = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenUBT', __iconNode);
;
}),
];

//# sourceMappingURL=1qqr_%40web3icons_react_dist_155jui8._.js.map