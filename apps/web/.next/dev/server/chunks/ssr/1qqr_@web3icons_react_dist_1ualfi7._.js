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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenLM.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenLM
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-ssr] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: 'url(#LM__a)',
                d: 'm4.421 7.737 2.842 1.421v5.21L4.421 15.79z'
            }
        ],
        [
            'path',
            {
                fill: 'url(#LM__b)',
                d: 'm19.579 8.21-2.842 1.422v5.21l2.842 1.422z'
            }
        ],
        [
            'path',
            {
                fill: '#004F9F',
                d: 'M7.263 9.158 4.421 7.737 12.001 3l7.104 4.263-2.842 1.421L12 6.316z'
            }
        ],
        [
            'path',
            {
                fill: '#009945',
                d: 'm16.737 14.842 2.842 1.42L11.999 21l-7.104-4.263 2.842-1.421L12 17.684z'
            }
        ],
        [
            'path',
            {
                fill: '#0174BC',
                d: 'M15.316 9.63H8.684L12 11.763z'
            }
        ],
        [
            'path',
            {
                fill: '#024531',
                d: 'M12 15.789v-4.027l3.316-2.131z'
            }
        ],
        [
            'defs',
            {},
            [
                [
                    'linearGradient',
                    {
                        id: 'LM__a',
                        x1: '12',
                        x2: '12',
                        y1: '3',
                        y2: '21',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#1E5EA8'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#163F71'
                            }
                        ]
                    ]
                ],
                [
                    'linearGradient',
                    {
                        id: 'LM__b',
                        x1: '12',
                        x2: '12',
                        y1: '3',
                        y2: '21',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#03783C'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#015429'
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
                d: 'm4.421 7.737 2.842 1.421v5.21L4.421 15.79zm15.159.473-2.843 1.422v5.21l2.842 1.422z'
            }
        ],
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M7.263 9.158 4.421 7.737 12.001 3l7.104 4.263-2.842 1.421L12 6.316zm9.474 5.684 2.842 1.42L11.999 21l-7.104-4.264 2.842-1.42L12 17.684zm-1.421-5.21H8.684L12 11.763z'
            }
        ],
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M12 15.79v-4.027l3.316-2.131z'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#LM__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#004F9F',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'm5.263 8.21 2.526 1.264v4.632l-2.526 1.263zm13.474.422L16.21 9.895v4.632l2.527 1.263z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M7.79 9.474 5.262 8.21 12 4l6.316 3.79-2.526 1.263L12 6.947zm8.42 5.052 2.527 1.264L12 20l-6.316-3.79 2.526-1.263L12 17.054zm-1.263-4.63H9.052L12 11.79z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M12 15.37v-3.58l2.948-1.894z'
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
                        id: 'LM__a'
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
 * @component @name TokenLM
 * @description Web3Icon for TokenLM
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9InVybCgjTE1fX2EpIiBkPSJtNC40MjEgNy43MzcgMi44NDIgMS40MjF2NS4yMUw0LjQyMSAxNS43OXoiLz4KICAgIDxwYXRoIGZpbGw9InVybCgjTE1fX2IpIiBkPSJtMTkuNTc5IDguMjEtMi44NDIgMS40MjJ2NS4yMWwyLjg0MiAxLjQyMnoiLz4KICAgIDxwYXRoIGZpbGw9IiMwMDRGOUYiIGQ9Ik03LjI2MyA5LjE1OCA0LjQyMSA3LjczNyAxMi4wMDEgM2w3LjEwNCA0LjI2My0yLjg0MiAxLjQyMUwxMiA2LjMxNnoiLz4KICAgIDxwYXRoIGZpbGw9IiMwMDk5NDUiIGQ9Im0xNi43MzcgMTQuODQyIDIuODQyIDEuNDJMMTEuOTk5IDIxbC03LjEwNC00LjI2MyAyLjg0Mi0xLjQyMUwxMiAxNy42ODR6Ii8+CiAgICA8cGF0aCBmaWxsPSIjMDE3NEJDIiBkPSJNMTUuMzE2IDkuNjNIOC42ODRMMTIgMTEuNzYzeiIvPgogICAgPHBhdGggZmlsbD0iIzAyNDUzMSIgZD0iTTEyIDE1Ljc4OXYtNC4wMjdsMy4zMTYtMi4xMzF6Ii8+CiAgICA8ZGVmcz4KICAgICAgICA8bGluZWFyR3JhZGllbnQgaWQ9IkxNX19hIiB4MT0iMTIiIHgyPSIxMiIgeTE9IjMiIHkyPSIyMSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjMUU1RUE4Ii8+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzE2M0Y3MSIvPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICAgICAgPGxpbmVhckdyYWRpZW50IGlkPSJMTV9fYiIgeDE9IjEyIiB4Mj0iMTIiIHkxPSIzIiB5Mj0iMjEiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iIzAzNzgzQyIvPgogICAgICAgICAgICA8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMwMTU0MjkiLz4KICAgICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgPC9kZWZzPgo8L3N2Zz4K) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Im00LjQyMSA3LjczNyAyLjg0MiAxLjQyMXY1LjIxTDQuNDIxIDE1Ljc5em0xNS4xNTkuNDczLTIuODQzIDEuNDIydjUuMjFsMi44NDIgMS40MjJ6Ii8+CiAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNNy4yNjMgOS4xNTggNC40MjEgNy43MzcgMTIuMDAxIDNsNy4xMDQgNC4yNjMtMi44NDIgMS40MjFMMTIgNi4zMTZ6bTkuNDc0IDUuNjg0IDIuODQyIDEuNDJMMTEuOTk5IDIxbC03LjEwNC00LjI2NCAyLjg0Mi0xLjQyTDEyIDE3LjY4NHptLTEuNDIxLTUuMjFIOC42ODRMMTIgMTEuNzYzeiIvPgogICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTEyIDE1Ljc5di00LjAyN2wzLjMxNi0yLjEzMXoiLz4KPC9zdmc+Cg==) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNMTV9fYSkiPgogICAgICAgIDxwYXRoIGZpbGw9IiMwMDRGOUYiIGQ9Ik0yNCAwSDB2MjRoMjR6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0ibTUuMjYzIDguMjEgMi41MjYgMS4yNjR2NC42MzJsLTIuNTI2IDEuMjYzem0xMy40NzQuNDIyTDE2LjIxIDkuODk1djQuNjMybDIuNTI3IDEuMjYzeiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik03Ljc5IDkuNDc0IDUuMjYyIDguMjEgMTIgNGw2LjMxNiAzLjc5LTIuNTI2IDEuMjYzTDEyIDYuOTQ3em04LjQyIDUuMDUyIDIuNTI3IDEuMjY0TDEyIDIwbC02LjMxNi0zLjc5IDIuNTI2LTEuMjYzTDEyIDE3LjA1NHptLTEuMjYzLTQuNjNIOS4wNTJMMTIgMTEuNzl6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTEyIDE1LjM3di0zLjU4bDIuOTQ4LTEuODk0eiIvPgogICAgPC9nPgogICAgPGRlZnM+CiAgICAgICAgPGNsaXBQYXRoIGlkPSJMTV9fYSI+CiAgICAgICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0wIDBoMjR2MjRIMHoiLz4KICAgICAgICA8L2NsaXBQYXRoPgogICAgPC9kZWZzPgo8L3N2Zz4K)
 * @see https://web3icons.io/tokens/LM
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenLM = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenLM', __iconNode);
;
}),
];

//# sourceMappingURL=1qqr_%40web3icons_react_dist_1ualfi7._.js.map