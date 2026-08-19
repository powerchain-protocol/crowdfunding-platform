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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenSOLX.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenSOLX
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-ssr] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: 'url(#SOLX__a)',
                d: 'M18.367 8.625H14.25c0-1.485-1.553-2.194-2.25-2.25-.793-.04-2.25.433-2.25 1.817 0 1.727.607 1.417 5.012 2.261 3.527.675 4.5 3.38 4.545 4.652.112 1.969-1.17 5.895-7.2 5.895-6.025 0-7.46-3.707-7.42-5.625h4.365c-.056 1.957 2.385 2.25 3.055 2.25.675 0 2.705-.394 2.705-2.098s-1.67-1.62-2.323-1.665a27 27 0 0 1-1.614-.175c-4.388-.579-5.62-3.577-5.62-5.09C5.255 7.078 5.42 3 12 3c5.265 0 6.435 3.757 6.367 5.625'
            }
        ],
        [
            'defs',
            {},
            [
                [
                    'linearGradient',
                    {
                        id: 'SOLX__a',
                        x1: '20.42',
                        x2: '5.227',
                        y1: '9.092',
                        y2: '16.382',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                offset: '.03',
                                stopColor: '#E604B7'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '.61',
                                stopColor: '#483EFF'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#20BDFC'
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
                d: 'M18.367 8.625H14.25c0-1.485-1.553-2.194-2.25-2.25-.793-.04-2.25.433-2.25 1.817 0 1.727.607 1.417 5.012 2.261 3.527.675 4.5 3.38 4.545 4.652.112 1.969-1.17 5.895-7.2 5.895-6.025 0-7.46-3.707-7.42-5.625h4.365c-.056 1.957 2.385 2.25 3.055 2.25.675 0 2.705-.394 2.705-2.098s-1.67-1.62-2.323-1.665a27 27 0 0 1-1.614-.175c-4.388-.579-5.62-3.577-5.62-5.09C5.255 7.078 5.42 3 12 3c5.265 0 6.435 3.757 6.367 5.625'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#SOLX__a)'
            },
            [
                [
                    'path',
                    {
                        fill: 'url(#SOLX__b)',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M17.66 9H14c0-1.32-1.38-1.95-2-2-.705-.035-2 .385-2 1.615 0 1.535.54 1.26 4.455 2.01 3.135.6 4 3.005 4.04 4.135.1 1.75-1.04 5.24-6.4 5.24-5.355 0-6.63-3.295-6.595-5h3.88c-.05 1.74 2.12 2 2.715 2 .6 0 2.405-.35 2.405-1.865s-1.485-1.44-2.065-1.48c-.46-.03-1.15-.115-1.435-.155-3.9-.515-4.995-3.18-4.995-4.525C6.005 7.625 6.15 4 12 4c4.68 0 5.72 3.34 5.66 5'
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
                        id: 'SOLX__b',
                        x1: '19.485',
                        x2: '5.98',
                        y1: '9.415',
                        y2: '15.895',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                offset: '.03',
                                stopColor: '#E604B7'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '.61',
                                stopColor: '#483EFF'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#20BDFC'
                            }
                        ]
                    ]
                ],
                [
                    'clipPath',
                    {
                        id: 'SOLX__a'
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
 * @component @name TokenSOLX
 * @description Web3Icon for TokenSOLX
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9InVybCgjU09MWF9fYSkiIGQ9Ik0xOC4zNjcgOC42MjVIMTQuMjVjMC0xLjQ4NS0xLjU1My0yLjE5NC0yLjI1LTIuMjUtLjc5My0uMDQtMi4yNS40MzMtMi4yNSAxLjgxNyAwIDEuNzI3LjYwNyAxLjQxNyA1LjAxMiAyLjI2MSAzLjUyNy42NzUgNC41IDMuMzggNC41NDUgNC42NTIuMTEyIDEuOTY5LTEuMTcgNS44OTUtNy4yIDUuODk1LTYuMDI1IDAtNy40Ni0zLjcwNy03LjQyLTUuNjI1aDQuMzY1Yy0uMDU2IDEuOTU3IDIuMzg1IDIuMjUgMy4wNTUgMi4yNS42NzUgMCAyLjcwNS0uMzk0IDIuNzA1LTIuMDk4cy0xLjY3LTEuNjItMi4zMjMtMS42NjVhMjcgMjcgMCAwIDEtMS42MTQtLjE3NWMtNC4zODgtLjU3OS01LjYyLTMuNTc3LTUuNjItNS4wOUM1LjI1NSA3LjA3OCA1LjQyIDMgMTIgM2M1LjI2NSAwIDYuNDM1IDMuNzU3IDYuMzY3IDUuNjI1Ii8+CiAgICA8ZGVmcz4KICAgICAgICA8bGluZWFyR3JhZGllbnQgaWQ9IlNPTFhfX2EiIHgxPSIyMC40MiIgeDI9IjUuMjI3IiB5MT0iOS4wOTIiIHkyPSIxNi4zODIiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIuMDMiIHN0b3AtY29sb3I9IiNFNjA0QjciLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIuNjEiIHN0b3AtY29sb3I9IiM0ODNFRkYiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMjBCREZDIi8+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgIDwvZGVmcz4KPC9zdmc+Cg==) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xOC4zNjcgOC42MjVIMTQuMjVjMC0xLjQ4NS0xLjU1My0yLjE5NC0yLjI1LTIuMjUtLjc5My0uMDQtMi4yNS40MzMtMi4yNSAxLjgxNyAwIDEuNzI3LjYwNyAxLjQxNyA1LjAxMiAyLjI2MSAzLjUyNy42NzUgNC41IDMuMzggNC41NDUgNC42NTIuMTEyIDEuOTY5LTEuMTcgNS44OTUtNy4yIDUuODk1LTYuMDI1IDAtNy40Ni0zLjcwNy03LjQyLTUuNjI1aDQuMzY1Yy0uMDU2IDEuOTU3IDIuMzg1IDIuMjUgMy4wNTUgMi4yNS42NzUgMCAyLjcwNS0uMzk0IDIuNzA1LTIuMDk4cy0xLjY3LTEuNjItMi4zMjMtMS42NjVhMjcgMjcgMCAwIDEtMS42MTQtLjE3NWMtNC4zODgtLjU3OS01LjYyLTMuNTc3LTUuNjItNS4wOUM1LjI1NSA3LjA3OCA1LjQyIDMgMTIgM2M1LjI2NSAwIDYuNDM1IDMuNzU3IDYuMzY3IDUuNjI1Ii8+Cjwvc3ZnPgo=) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNTT0xYX19hKSI+CiAgICAgICAgPHBhdGggZmlsbD0idXJsKCNTT0xYX19iKSIgZD0iTTI0IDBIMHYyNGgyNHoiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTcuNjYgOUgxNGMwLTEuMzItMS4zOC0xLjk1LTItMi0uNzA1LS4wMzUtMiAuMzg1LTIgMS42MTUgMCAxLjUzNS41NCAxLjI2IDQuNDU1IDIuMDEgMy4xMzUuNiA0IDMuMDA1IDQuMDQgNC4xMzUuMSAxLjc1LTEuMDQgNS4yNC02LjQgNS4yNC01LjM1NSAwLTYuNjMtMy4yOTUtNi41OTUtNWgzLjg4Yy0uMDUgMS43NCAyLjEyIDIgMi43MTUgMiAuNiAwIDIuNDA1LS4zNSAyLjQwNS0xLjg2NXMtMS40ODUtMS40NC0yLjA2NS0xLjQ4Yy0uNDYtLjAzLTEuMTUtLjExNS0xLjQzNS0uMTU1LTMuOS0uNTE1LTQuOTk1LTMuMTgtNC45OTUtNC41MjVDNi4wMDUgNy42MjUgNi4xNSA0IDEyIDRjNC42OCAwIDUuNzIgMy4zNCA1LjY2IDUiLz4KICAgIDwvZz4KICAgIDxkZWZzPgogICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iU09MWF9fYiIgeDE9IjE5LjQ4NSIgeDI9IjUuOTgiIHkxPSI5LjQxNSIgeTI9IjE1Ljg5NSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgICAgICAgICA8c3RvcCBvZmZzZXQ9Ii4wMyIgc3RvcC1jb2xvcj0iI0U2MDRCNyIvPgogICAgICAgICAgICA8c3RvcCBvZmZzZXQ9Ii42MSIgc3RvcC1jb2xvcj0iIzQ4M0VGRiIvPgogICAgICAgICAgICA8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMyMEJERkMiLz4KICAgICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgICAgIDxjbGlwUGF0aCBpZD0iU09MWF9fYSI+CiAgICAgICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0wIDBoMjR2MjRIMHoiLz4KICAgICAgICA8L2NsaXBQYXRoPgogICAgPC9kZWZzPgo8L3N2Zz4K)
 * @see https://web3icons.io/tokens/SOLX
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenSOLX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenSOLX', __iconNode);
;
}),
];

//# sourceMappingURL=1qqr_%40web3icons_react_dist_12a__9w._.js.map