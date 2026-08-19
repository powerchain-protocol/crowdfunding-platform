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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenMX.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenMX
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-ssr] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#1977F3',
                d: 'M7.2 7.406a2.113 2.113 0 0 1 3.7 0l5.814 10.28H5.2c-1.691 0-2.748-1.87-1.905-3.368z'
            }
        ],
        [
            'path',
            {
                fill: '#002F81',
                d: 'M16.8 7.406a2.113 2.113 0 0 0-3.7 0l-4.123 7.296c-.753 1.327.185 2.985 1.682 2.985h8.14c1.691 0 2.748-1.872 1.904-3.369z'
            }
        ],
        [
            'path',
            {
                fill: 'url(#MX__a)',
                d: 'M10.659 17.686h6.055L12 9.348 8.971 14.7c-.748 1.327.19 2.985 1.687 2.985'
            }
        ],
        [
            'defs',
            {},
            [
                [
                    'linearGradient',
                    {
                        id: 'MX__a',
                        x1: '9.029',
                        x2: '18.187',
                        y1: '15.981',
                        y2: '15.981',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                offset: '.12',
                                stopColor: '#1C6AD9'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '.76',
                                stopColor: '#1C6AD9',
                                stopOpacity: '0'
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
                d: 'M7.2 7.406a2.113 2.113 0 0 1 3.701 0l5.813 10.281H5.201c-1.691 0-2.748-1.871-1.905-3.369z'
            }
        ],
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M16.8 7.406a2.113 2.113 0 0 0-3.701 0l-4.122 7.296c-.753 1.327.185 2.985 1.682 2.985h8.14c1.691 0 2.748-1.871 1.905-3.369z'
            }
        ],
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M10.659 17.687h6.055L12 9.347l-3.028 5.355c-.748 1.326.19 2.985 1.687 2.985'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#MX__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#002F81',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M7.734 7.916a1.878 1.878 0 0 1 3.289 0l5.168 9.14H5.957c-1.504 0-2.443-1.664-1.694-2.995z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M16.266 7.916a1.878 1.878 0 0 0-3.29 0l-3.663 6.486c-.67 1.18.164 2.653 1.495 2.653h7.236c1.503 0 2.442-1.663 1.693-2.994z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M10.808 17.054h5.382L12 9.642 9.309 14.4c-.666 1.179.168 2.653 1.499 2.653'
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
                        id: 'MX__a'
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
 * @component @name TokenMX
 * @description Web3Icon for TokenMX
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiMxOTc3RjMiIGQ9Ik03LjIgNy40MDZhMi4xMTMgMi4xMTMgMCAwIDEgMy43IDBsNS44MTQgMTAuMjhINS4yYy0xLjY5MSAwLTIuNzQ4LTEuODctMS45MDUtMy4zNjh6Ii8+CiAgICA8cGF0aCBmaWxsPSIjMDAyRjgxIiBkPSJNMTYuOCA3LjQwNmEyLjExMyAyLjExMyAwIDAgMC0zLjcgMGwtNC4xMjMgNy4yOTZjLS43NTMgMS4zMjcuMTg1IDIuOTg1IDEuNjgyIDIuOTg1aDguMTRjMS42OTEgMCAyLjc0OC0xLjg3MiAxLjkwNC0zLjM2OXoiLz4KICAgIDxwYXRoIGZpbGw9InVybCgjTVhfX2EpIiBkPSJNMTAuNjU5IDE3LjY4Nmg2LjA1NUwxMiA5LjM0OCA4Ljk3MSAxNC43Yy0uNzQ4IDEuMzI3LjE5IDIuOTg1IDEuNjg3IDIuOTg1Ii8+CiAgICA8ZGVmcz4KICAgICAgICA8bGluZWFyR3JhZGllbnQgaWQ9Ik1YX19hIiB4MT0iOS4wMjkiIHgyPSIxOC4xODciIHkxPSIxNS45ODEiIHkyPSIxNS45ODEiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIuMTIiIHN0b3AtY29sb3I9IiMxQzZBRDkiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIuNzYiIHN0b3AtY29sb3I9IiMxQzZBRDkiIHN0b3Atb3BhY2l0eT0iMCIvPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICA8L2RlZnM+Cjwvc3ZnPgo=) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik03LjIgNy40MDZhMi4xMTMgMi4xMTMgMCAwIDEgMy43MDEgMGw1LjgxMyAxMC4yODFINS4yMDFjLTEuNjkxIDAtMi43NDgtMS44NzEtMS45MDUtMy4zNjl6Ii8+CiAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTYuOCA3LjQwNmEyLjExMyAyLjExMyAwIDAgMC0zLjcwMSAwbC00LjEyMiA3LjI5NmMtLjc1MyAxLjMyNy4xODUgMi45ODUgMS42ODIgMi45ODVoOC4xNGMxLjY5MSAwIDIuNzQ4LTEuODcxIDEuOTA1LTMuMzY5eiIvPgogICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTEwLjY1OSAxNy42ODdoNi4wNTVMMTIgOS4zNDdsLTMuMDI4IDUuMzU1Yy0uNzQ4IDEuMzI2LjE5IDIuOTg1IDEuNjg3IDIuOTg1Ii8+Cjwvc3ZnPgo=) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNNWF9fYSkiPgogICAgICAgIDxwYXRoIGZpbGw9IiMwMDJGODEiIGQ9Ik0yNCAwSDB2MjRoMjR6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTcuNzM0IDcuOTE2YTEuODc4IDEuODc4IDAgMCAxIDMuMjg5IDBsNS4xNjggOS4xNEg1Ljk1N2MtMS41MDQgMC0yLjQ0My0xLjY2NC0xLjY5NC0yLjk5NXoiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTYuMjY2IDcuOTE2YTEuODc4IDEuODc4IDAgMCAwLTMuMjkgMGwtMy42NjMgNi40ODZjLS42NyAxLjE4LjE2NCAyLjY1MyAxLjQ5NSAyLjY1M2g3LjIzNmMxLjUwMyAwIDIuNDQyLTEuNjYzIDEuNjkzLTIuOTk0eiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xMC44MDggMTcuMDU0aDUuMzgyTDEyIDkuNjQyIDkuMzA5IDE0LjRjLS42NjYgMS4xNzkuMTY4IDIuNjUzIDEuNDk5IDIuNjUzIi8+CiAgICA8L2c+CiAgICA8ZGVmcz4KICAgICAgICA8Y2xpcFBhdGggaWQ9Ik1YX19hIj4KICAgICAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTAgMGgyNHYyNEgweiIvPgogICAgICAgIDwvY2xpcFBhdGg+CiAgICA8L2RlZnM+Cjwvc3ZnPgo=)
 * @see https://web3icons.io/tokens/MX
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenMX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenMX', __iconNode);
;
}),
];

//# sourceMappingURL=1qqr_%40web3icons_react_dist_0z5fi-l._.js.map