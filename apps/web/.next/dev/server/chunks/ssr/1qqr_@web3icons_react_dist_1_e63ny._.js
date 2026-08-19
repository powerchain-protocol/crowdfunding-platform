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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenMOOV.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenMOOV
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-ssr] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: 'url(#MOOV__a)',
                d: 'm9.75 3.09 9.67 5.7c.2.12.33.34.33.58v5.28a.67.67 0 0 1-.33.579l-9.665 5.68a.65.65 0 0 1-.665 0l-4.515-2.72a.68.68 0 0 1-.325-.58v-11.3c0-.24.125-.46.33-.58L9.095 3.09c.2-.12.45-.12.655 0m-3 1.99v13.814c0 .2.22.33.395.23l11.974-6.93a.265.265 0 0 0 0-.455L7.14 4.85a.26.26 0 0 0-.39.23'
            }
        ],
        [
            'path',
            {
                fill: 'url(#MOOV__b)',
                d: 'M9.25 13.824v-3.65a.67.67 0 0 1 1-.585l3.164 1.82c.45.26.45.91 0 1.17l-3.16 1.83a.67.67 0 0 1-1.004-.586'
            }
        ],
        [
            'defs',
            {},
            [
                [
                    'linearGradient',
                    {
                        id: 'MOOV__a',
                        x1: '12',
                        x2: '12',
                        y1: '3',
                        y2: '20.998',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#FF825F'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#FF3E68'
                            }
                        ]
                    ]
                ],
                [
                    'linearGradient',
                    {
                        id: 'MOOV__b',
                        x1: '11.5',
                        x2: '11.5',
                        y1: '9.499',
                        y2: '14.499',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#FF825F'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#FF3E68'
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
                d: 'm9.75 3.09 9.67 5.7c.2.12.33.34.33.58v5.28a.67.67 0 0 1-.33.579l-9.665 5.68a.65.65 0 0 1-.665 0l-4.515-2.72a.68.68 0 0 1-.325-.58v-11.3c0-.24.125-.46.33-.58L9.095 3.09c.2-.12.45-.12.655 0m-3 1.99v13.814c0 .2.22.33.395.23l11.974-6.93a.265.265 0 0 0 0-.455L7.14 4.85a.26.26 0 0 0-.39.23'
            }
        ],
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M9.25 13.824v-3.65a.67.67 0 0 1 1-.585l3.164 1.82c.45.26.45.91 0 1.17l-3.16 1.83a.67.67 0 0 1-1.004-.586'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#MOOV__a)'
            },
            [
                [
                    'path',
                    {
                        fill: 'url(#MOOV__b)',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'm10 4.08 8.595 5.066a.6.6 0 0 1 .293.516v4.693a.59.59 0 0 1-.293.515l-8.59 5.049a.58.58 0 0 1-.591 0L5.4 17.5a.6.6 0 0 1-.29-.515V6.942c0-.213.112-.409.294-.516L9.418 4.08a.57.57 0 0 1 .582 0M7.334 5.849v12.279c0 .177.195.293.35.204l10.644-6.16a.235.235 0 0 0 0-.404L7.68 5.644a.231.231 0 0 0-.346.205'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M9.555 13.62v-3.243a.595.595 0 0 1 .889-.52l2.813 1.617a.6.6 0 0 1 0 1.04l-2.809 1.627a.595.595 0 0 1-.893-.52'
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
                        id: 'MOOV__b',
                        x1: '12',
                        x2: '12',
                        y1: '4',
                        y2: '19.999',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#FF825F'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#FF3E68'
                            }
                        ]
                    ]
                ],
                [
                    'clipPath',
                    {
                        id: 'MOOV__a'
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
 * @component @name TokenMOOV
 * @description Web3Icon for TokenMOOV
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9InVybCgjTU9PVl9fYSkiIGQ9Im05Ljc1IDMuMDkgOS42NyA1LjdjLjIuMTIuMzMuMzQuMzMuNTh2NS4yOGEuNjcuNjcgMCAwIDEtLjMzLjU3OWwtOS42NjUgNS42OGEuNjUuNjUgMCAwIDEtLjY2NSAwbC00LjUxNS0yLjcyYS42OC42OCAwIDAgMS0uMzI1LS41OHYtMTEuM2MwLS4yNC4xMjUtLjQ2LjMzLS41OEw5LjA5NSAzLjA5Yy4yLS4xMi40NS0uMTIuNjU1IDBtLTMgMS45OXYxMy44MTRjMCAuMi4yMi4zMy4zOTUuMjNsMTEuOTc0LTYuOTNhLjI2NS4yNjUgMCAwIDAgMC0uNDU1TDcuMTQgNC44NWEuMjYuMjYgMCAwIDAtLjM5LjIzIi8+CiAgICA8cGF0aCBmaWxsPSJ1cmwoI01PT1ZfX2IpIiBkPSJNOS4yNSAxMy44MjR2LTMuNjVhLjY3LjY3IDAgMCAxIDEtLjU4NWwzLjE2NCAxLjgyYy40NS4yNi40NS45MSAwIDEuMTdsLTMuMTYgMS44M2EuNjcuNjcgMCAwIDEtMS4wMDQtLjU4NiIvPgogICAgPGRlZnM+CiAgICAgICAgPGxpbmVhckdyYWRpZW50IGlkPSJNT09WX19hIiB4MT0iMTIiIHgyPSIxMiIgeTE9IjMiIHkyPSIyMC45OTgiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iI0ZGODI1RiIvPgogICAgICAgICAgICA8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNGRjNFNjgiLz4KICAgICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iTU9PVl9fYiIgeDE9IjExLjUiIHgyPSIxMS41IiB5MT0iOS40OTkiIHkyPSIxNC40OTkiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iI0ZGODI1RiIvPgogICAgICAgICAgICA8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNGRjNFNjgiLz4KICAgICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgPC9kZWZzPgo8L3N2Zz4K) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Im05Ljc1IDMuMDkgOS42NyA1LjdjLjIuMTIuMzMuMzQuMzMuNTh2NS4yOGEuNjcuNjcgMCAwIDEtLjMzLjU3OWwtOS42NjUgNS42OGEuNjUuNjUgMCAwIDEtLjY2NSAwbC00LjUxNS0yLjcyYS42OC42OCAwIDAgMS0uMzI1LS41OHYtMTEuM2MwLS4yNC4xMjUtLjQ2LjMzLS41OEw5LjA5NSAzLjA5Yy4yLS4xMi40NS0uMTIuNjU1IDBtLTMgMS45OXYxMy44MTRjMCAuMi4yMi4zMy4zOTUuMjNsMTEuOTc0LTYuOTNhLjI2NS4yNjUgMCAwIDAgMC0uNDU1TDcuMTQgNC44NWEuMjYuMjYgMCAwIDAtLjM5LjIzIi8+CiAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNOS4yNSAxMy44MjR2LTMuNjVhLjY3LjY3IDAgMCAxIDEtLjU4NWwzLjE2NCAxLjgyYy40NS4yNi40NS45MSAwIDEuMTdsLTMuMTYgMS44M2EuNjcuNjcgMCAwIDEtMS4wMDQtLjU4NiIvPgo8L3N2Zz4K) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNNT09WX19hKSI+CiAgICAgICAgPHBhdGggZmlsbD0idXJsKCNNT09WX19iKSIgZD0iTTI0IDBIMHYyNGgyNHoiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJtMTAgNC4wOCA4LjU5NSA1LjA2NmEuNi42IDAgMCAxIC4yOTMuNTE2djQuNjkzYS41OS41OSAwIDAgMS0uMjkzLjUxNWwtOC41OSA1LjA0OWEuNTguNTggMCAwIDEtLjU5MSAwTDUuNCAxNy41YS42LjYgMCAwIDEtLjI5LS41MTVWNi45NDJjMC0uMjEzLjExMi0uNDA5LjI5NC0uNTE2TDkuNDE4IDQuMDhhLjU3LjU3IDAgMCAxIC41ODIgME03LjMzNCA1Ljg0OXYxMi4yNzljMCAuMTc3LjE5NS4yOTMuMzUuMjA0bDEwLjY0NC02LjE2YS4yMzUuMjM1IDAgMCAwIDAtLjQwNEw3LjY4IDUuNjQ0YS4yMzEuMjMxIDAgMCAwLS4zNDYuMjA1Ii8+CiAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTkuNTU1IDEzLjYydi0zLjI0M2EuNTk1LjU5NSAwIDAgMSAuODg5LS41MmwyLjgxMyAxLjYxN2EuNi42IDAgMCAxIDAgMS4wNGwtMi44MDkgMS42MjdhLjU5NS41OTUgMCAwIDEtLjg5My0uNTIiLz4KICAgIDwvZz4KICAgIDxkZWZzPgogICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iTU9PVl9fYiIgeDE9IjEyIiB4Mj0iMTIiIHkxPSI0IiB5Mj0iMTkuOTk5IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiNGRjgyNUYiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjRkYzRTY4Ii8+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgICAgICA8Y2xpcFBhdGggaWQ9Ik1PT1ZfX2EiPgogICAgICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMCAwaDI0djI0SDB6Ii8+CiAgICAgICAgPC9jbGlwUGF0aD4KICAgIDwvZGVmcz4KPC9zdmc+Cg==)
 * @see https://web3icons.io/tokens/MOOV
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenMOOV = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenMOOV', __iconNode);
;
}),
];

//# sourceMappingURL=1qqr_%40web3icons_react_dist_1_e63ny._.js.map