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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenDAD.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenDAD
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-ssr] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: 'url(#DAD__a)',
                d: 'M12.712 3H3.6v3.6h7.835c1.514.04 4.765 1.803 4.765 5.172 0 4.038-3.103 5.628-4.765 5.628H7.2V21h5.512c2.581 0 7.805-2.574 7.686-9.228C20.28 5.119 15.145 3 12.712 3M9 10.2h1.8a1.8 1.8 0 1 1 0 3.6H9zM3.6 12a1.8 1.8 0 0 1 1.8-1.8v3.6A1.8 1.8 0 0 1 3.6 12'
            }
        ],
        [
            'defs',
            {},
            [
                [
                    'linearGradient',
                    {
                        id: 'DAD__a',
                        x1: '7.251',
                        x2: '18.113',
                        y1: '5.262',
                        y2: '17.71',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#00EDEF'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#0094FF'
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
                d: 'M12.712 3H3.6v3.6h7.835c1.514.04 4.765 1.803 4.765 5.172 0 4.038-3.103 5.628-4.765 5.628H7.2V21h5.512c2.581 0 7.805-2.574 7.686-9.228C20.28 5.119 15.145 3 12.712 3M9 10.2h1.8a1.8 1.8 0 1 1 0 3.6H9zM3.6 12a1.8 1.8 0 0 1 1.8-1.8v3.6A1.8 1.8 0 0 1 3.6 12'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#DAD__a)'
            },
            [
                [
                    'path',
                    {
                        fill: 'url(#DAD__b)',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M12.633 4h-8.1v3.2h6.965c1.346.036 4.236 1.603 4.236 4.597 0 3.59-2.759 5.003-4.236 5.003H7.734V20h4.899c2.295 0 6.938-2.288 6.832-8.203C19.36 5.884 14.795 4 12.633 4m-3.3 6.4h1.6a1.6 1.6 0 1 1 0 3.2h-1.6zm-4.8 1.6a1.6 1.6 0 0 1 1.6-1.6v3.2a1.6 1.6 0 0 1-1.6-1.6'
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
                        id: 'DAD__b',
                        x1: '7.779',
                        x2: '17.434',
                        y1: '6.011',
                        y2: '17.075',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#00EDEF'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#0094FF'
                            }
                        ]
                    ]
                ],
                [
                    'clipPath',
                    {
                        id: 'DAD__a'
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
 * @component @name TokenDAD
 * @description Web3Icon for TokenDAD
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9InVybCgjREFEX19hKSIgZD0iTTEyLjcxMiAzSDMuNnYzLjZoNy44MzVjMS41MTQuMDQgNC43NjUgMS44MDMgNC43NjUgNS4xNzIgMCA0LjAzOC0zLjEwMyA1LjYyOC00Ljc2NSA1LjYyOEg3LjJWMjFoNS41MTJjMi41ODEgMCA3LjgwNS0yLjU3NCA3LjY4Ni05LjIyOEMyMC4yOCA1LjExOSAxNS4xNDUgMyAxMi43MTIgM005IDEwLjJoMS44YTEuOCAxLjggMCAxIDEgMCAzLjZIOXpNMy42IDEyYTEuOCAxLjggMCAwIDEgMS44LTEuOHYzLjZBMS44IDEuOCAwIDAgMSAzLjYgMTIiLz4KICAgIDxkZWZzPgogICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iREFEX19hIiB4MT0iNy4yNTEiIHgyPSIxOC4xMTMiIHkxPSI1LjI2MiIgeTI9IjE3LjcxIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiMwMEVERUYiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMDA5NEZGIi8+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgIDwvZGVmcz4KPC9zdmc+Cg==) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xMi43MTIgM0gzLjZ2My42aDcuODM1YzEuNTE0LjA0IDQuNzY1IDEuODAzIDQuNzY1IDUuMTcyIDAgNC4wMzgtMy4xMDMgNS42MjgtNC43NjUgNS42MjhINy4yVjIxaDUuNTEyYzIuNTgxIDAgNy44MDUtMi41NzQgNy42ODYtOS4yMjhDMjAuMjggNS4xMTkgMTUuMTQ1IDMgMTIuNzEyIDNNOSAxMC4yaDEuOGExLjggMS44IDAgMSAxIDAgMy42SDl6TTMuNiAxMmExLjggMS44IDAgMCAxIDEuOC0xLjh2My42QTEuOCAxLjggMCAwIDEgMy42IDEyIi8+Cjwvc3ZnPgo=) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNEQURfX2EpIj4KICAgICAgICA8cGF0aCBmaWxsPSJ1cmwoI0RBRF9fYikiIGQ9Ik0yNCAwSDB2MjRoMjR6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTEyLjYzMyA0aC04LjF2My4yaDYuOTY1YzEuMzQ2LjAzNiA0LjIzNiAxLjYwMyA0LjIzNiA0LjU5NyAwIDMuNTktMi43NTkgNS4wMDMtNC4yMzYgNS4wMDNINy43MzRWMjBoNC44OTljMi4yOTUgMCA2LjkzOC0yLjI4OCA2LjgzMi04LjIwM0MxOS4zNiA1Ljg4NCAxNC43OTUgNCAxMi42MzMgNG0tMy4zIDYuNGgxLjZhMS42IDEuNiAwIDEgMSAwIDMuMmgtMS42em0tNC44IDEuNmExLjYgMS42IDAgMCAxIDEuNi0xLjZ2My4yYTEuNiAxLjYgMCAwIDEtMS42LTEuNiIvPgogICAgPC9nPgogICAgPGRlZnM+CiAgICAgICAgPGxpbmVhckdyYWRpZW50IGlkPSJEQURfX2IiIHgxPSI3Ljc3OSIgeDI9IjE3LjQzNCIgeTE9IjYuMDExIiB5Mj0iMTcuMDc1IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiMwMEVERUYiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMDA5NEZGIi8+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgICAgICA8Y2xpcFBhdGggaWQ9IkRBRF9fYSI+CiAgICAgICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0wIDBoMjR2MjRIMHoiLz4KICAgICAgICA8L2NsaXBQYXRoPgogICAgPC9kZWZzPgo8L3N2Zz4K)
 * @see https://web3icons.io/tokens/DAD
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenDAD = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenDAD', __iconNode);
;
}),
];

//# sourceMappingURL=1qqr_%40web3icons_react_dist_19n83p-._.js.map