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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/networks/NetworkClover.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>NetworkClover
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-ssr] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: 'url(#clover__a)',
                d: 'M16.68 3H7.32A4.32 4.32 0 0 0 3 7.32v9.36A4.32 4.32 0 0 0 7.32 21h9.36A4.32 4.32 0 0 0 21 16.68V7.32A4.32 4.32 0 0 0 16.68 3'
            }
        ],
        [
            'path',
            {
                fill: '#0C0B0B',
                d: 'M12 17.76a5.76 5.76 0 1 0 0-11.52 5.76 5.76 0 0 0 0 11.52m-1.017-8.51a.3.3 0 0 1 .3-.3h1.433a.3.3 0 0 1 .3.3v1.755h-2.033v1.99h2.033v1.754a.3.3 0 0 1-.3.3h-1.433a.3.3 0 0 1-.3-.3v-1.69H9.25a.3.3 0 0 1-.3-.3v-1.454a.3.3 0 0 1 .3-.3h1.733zm2.033 1.755h1.734a.3.3 0 0 1 .3.3v1.454a.3.3 0 0 1-.3.3h-1.733z',
                fillRule: 'evenodd',
                clipRule: 'evenodd'
            }
        ],
        [
            'defs',
            {},
            [
                [
                    'linearGradient',
                    {
                        id: 'clover__a',
                        x1: '4.498',
                        x2: '20.232',
                        y1: '19.5',
                        y2: '4.125',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#BDFDE2'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#9BDAF6'
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
                d: 'M11.283 8.95a.3.3 0 0 0-.3.3v1.755H9.25a.3.3 0 0 0-.3.3v1.454a.3.3 0 0 0 .3.3h1.733v1.69a.3.3 0 0 0 .3.3h1.433a.3.3 0 0 0 .3-.3v-1.754h-2.033v-1.99h2.033v2.054h1.734a.3.3 0 0 0 .3-.3v-1.454a.3.3 0 0 0-.3-.3h-1.734V9.25a.3.3 0 0 0-.3-.3z'
            }
        ],
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M7.32 3h9.36A4.32 4.32 0 0 1 21 7.32v9.36A4.32 4.32 0 0 1 16.68 21H7.32A4.32 4.32 0 0 1 3 16.68V7.32A4.32 4.32 0 0 1 7.32 3m10.44 9a5.76 5.76 0 1 1-11.52 0 5.76 5.76 0 0 1 11.52 0',
                fillRule: 'evenodd',
                clipRule: 'evenodd'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#clover__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#0C0B0B',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M11.362 9.29a.267.267 0 0 0-.266.266v1.56h-1.54a.267.267 0 0 0-.267.266v1.293c0 .147.12.266.266.266h1.54v1.503c0 .147.12.266.267.266h1.274a.266.266 0 0 0 .267-.266v-1.56h-1.807v-1.769h1.807v1.826h1.54a.266.266 0 0 0 .267-.266v-1.293a.267.267 0 0 0-.266-.267h-1.541v-1.56a.267.267 0 0 0-.267-.266z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M7.84 4h8.32A3.84 3.84 0 0 1 20 7.84v8.32A3.84 3.84 0 0 1 16.16 20H7.84A3.84 3.84 0 0 1 4 16.16V7.84A3.84 3.84 0 0 1 7.84 4m9.28 8a5.12 5.12 0 1 1-10.24 0 5.12 5.12 0 0 1 10.24 0',
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
                    'clipPath',
                    {
                        id: 'clover__a'
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
 * @component @name NetworkClover
 * @description Web3Icon for NetworkClover
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9InVybCgjY2xvdmVyX19hKSIgZD0iTTE2LjY4IDNINy4zMkE0LjMyIDQuMzIgMCAwIDAgMyA3LjMydjkuMzZBNC4zMiA0LjMyIDAgMCAwIDcuMzIgMjFoOS4zNkE0LjMyIDQuMzIgMCAwIDAgMjEgMTYuNjhWNy4zMkE0LjMyIDQuMzIgMCAwIDAgMTYuNjggMyIvPgogICAgPHBhdGggZmlsbD0iIzBDMEIwQiIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTIgMTcuNzZhNS43NiA1Ljc2IDAgMSAwIDAtMTEuNTIgNS43NiA1Ljc2IDAgMCAwIDAgMTEuNTJtLTEuMDE3LTguNTFhLjMuMyAwIDAgMSAuMy0uM2gxLjQzM2EuMy4zIDAgMCAxIC4zLjN2MS43NTVoLTIuMDMzdjEuOTloMi4wMzN2MS43NTRhLjMuMyAwIDAgMS0uMy4zaC0xLjQzM2EuMy4zIDAgMCAxLS4zLS4zdi0xLjY5SDkuMjVhLjMuMyAwIDAgMS0uMy0uM3YtMS40NTRhLjMuMyAwIDAgMSAuMy0uM2gxLjczM3ptMi4wMzMgMS43NTVoMS43MzRhLjMuMyAwIDAgMSAuMy4zdjEuNDU0YS4zLjMgMCAwIDEtLjMuM2gtMS43MzN6IiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KICAgIDxkZWZzPgogICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iY2xvdmVyX19hIiB4MT0iNC40OTgiIHgyPSIyMC4yMzIiIHkxPSIxOS41IiB5Mj0iNC4xMjUiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iI0JERkRFMiIvPgogICAgICAgICAgICA8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiM5QkRBRjYiLz4KICAgICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgPC9kZWZzPgo8L3N2Zz4K) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xMS4yODMgOC45NWEuMy4zIDAgMCAwLS4zLjN2MS43NTVIOS4yNWEuMy4zIDAgMCAwLS4zLjN2MS40NTRhLjMuMyAwIDAgMCAuMy4zaDEuNzMzdjEuNjlhLjMuMyAwIDAgMCAuMy4zaDEuNDMzYS4zLjMgMCAwIDAgLjMtLjN2LTEuNzU0aC0yLjAzM3YtMS45OWgyLjAzM3YyLjA1NGgxLjczNGEuMy4zIDAgMCAwIC4zLS4zdi0xLjQ1NGEuMy4zIDAgMCAwLS4zLS4zaC0xLjczNFY5LjI1YS4zLjMgMCAwIDAtLjMtLjN6Ii8+CiAgICA8cGF0aCBmaWxsPSIjZmZmIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik03LjMyIDNoOS4zNkE0LjMyIDQuMzIgMCAwIDEgMjEgNy4zMnY5LjM2QTQuMzIgNC4zMiAwIDAgMSAxNi42OCAyMUg3LjMyQTQuMzIgNC4zMiAwIDAgMSAzIDE2LjY4VjcuMzJBNC4zMiA0LjMyIDAgMCAxIDcuMzIgM20xMC40NCA5YTUuNzYgNS43NiAwIDEgMS0xMS41MiAwIDUuNzYgNS43NiAwIDAgMSAxMS41MiAwIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+Cg==) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNjbG92ZXJfX2EpIj4KICAgICAgICA8cGF0aCBmaWxsPSIjMEMwQjBCIiBkPSJNMjQgMEgwdjI0aDI0eiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xMS4zNjIgOS4yOWEuMjY3LjI2NyAwIDAgMC0uMjY2LjI2NnYxLjU2aC0xLjU0YS4yNjcuMjY3IDAgMCAwLS4yNjcuMjY2djEuMjkzYzAgLjE0Ny4xMi4yNjYuMjY2LjI2NmgxLjU0djEuNTAzYzAgLjE0Ny4xMi4yNjYuMjY3LjI2NmgxLjI3NGEuMjY2LjI2NiAwIDAgMCAuMjY3LS4yNjZ2LTEuNTZoLTEuODA3di0xLjc2OWgxLjgwN3YxLjgyNmgxLjU0YS4yNjYuMjY2IDAgMCAwIC4yNjctLjI2NnYtMS4yOTNhLjI2Ny4yNjcgMCAwIDAtLjI2Ni0uMjY3aC0xLjU0MXYtMS41NmEuMjY3LjI2NyAwIDAgMC0uMjY3LS4yNjZ6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNNy44NCA0aDguMzJBMy44NCAzLjg0IDAgMCAxIDIwIDcuODR2OC4zMkEzLjg0IDMuODQgMCAwIDEgMTYuMTYgMjBINy44NEEzLjg0IDMuODQgMCAwIDEgNCAxNi4xNlY3Ljg0QTMuODQgMy44NCAwIDAgMSA3Ljg0IDRtOS4yOCA4YTUuMTIgNS4xMiAwIDEgMS0xMC4yNCAwIDUuMTIgNS4xMiAwIDAgMSAxMC4yNCAwIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KICAgIDwvZz4KICAgIDxkZWZzPgogICAgICAgIDxjbGlwUGF0aCBpZD0iY2xvdmVyX19hIj4KICAgICAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTAgMGgyNHYyNEgweiIvPgogICAgICAgIDwvY2xpcFBhdGg+CiAgICA8L2RlZnM+Cjwvc3ZnPgo=)
 * @see https://web3icons.io/networks/clover
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const NetworkClover = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createWeb3Icon"])('NetworkClover', __iconNode);
;
}),
];

//# sourceMappingURL=1qqr_%40web3icons_react_dist_136bil0._.js.map