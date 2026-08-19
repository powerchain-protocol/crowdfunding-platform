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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenWBT.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenWBT
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-client] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: 'url(#WBT__a)',
                d: 'M18.364 18.364A9 9 0 1 1 5.636 5.636a9 9 0 0 1 12.728 12.728M12.42 9.321c.178.076.334.197.45.352h-.005l1.378 1.802 2.809-6.922a9 9 0 0 1 1.733 1.537l-3.244 7.993a1.09 1.09 0 0 1-1.433.592 1.1 1.1 0 0 1-.448-.349l-1.373-1.802-1.808 4.447a1.09 1.09 0 0 1-.959.684h-.053a1.09 1.09 0 0 1-.965-.583L5.97 12.286a1.093 1.093 0 1 1 1.934-1.018l1.437 2.709 1.643-4.055a1.09 1.09 0 0 1 1.437-.6',
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
                        id: 'WBT__a',
                        x1: '2.995',
                        x2: '21',
                        y1: '12',
                        y2: '12',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#E9C570'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#F7B839'
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
                d: 'M18.364 18.364A9 9 0 1 1 5.636 5.636a9 9 0 0 1 12.728 12.728M12.42 9.321c.178.076.334.197.45.352h-.005l1.378 1.802 2.809-6.922a9 9 0 0 1 1.733 1.537l-3.244 7.993a1.09 1.09 0 0 1-1.433.592 1.1 1.1 0 0 1-.448-.349l-1.373-1.802-1.808 4.447a1.09 1.09 0 0 1-.959.684h-.053a1.09 1.09 0 0 1-.965-.583L5.97 12.286a1.093 1.093 0 1 1 1.934-1.018l1.437 2.709 1.643-4.055a1.09 1.09 0 0 1 1.437-.6',
                fillRule: 'evenodd',
                clipRule: 'evenodd'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#WBT__a)'
            },
            [
                [
                    'path',
                    {
                        fill: 'url(#WBT__b)',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M17.657 17.657A8 8 0 1 1 6.343 6.342a8 8 0 0 1 11.314 11.315m-5.284-8.038a.97.97 0 0 1 .4.312h-.005l1.225 1.602 2.498-6.153c.57.387 1.087.847 1.54 1.366l-2.883 7.105a.97.97 0 0 1-1.673.217l-1.22-1.602-1.607 3.953a.97.97 0 0 1-.852.608h-.048a.97.97 0 0 1-.857-.518l-2.252-4.255a.972.972 0 0 1 1.72-.905l1.276 2.408 1.46-3.604a.97.97 0 0 1 1.278-.534',
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
                    'linearGradient',
                    {
                        id: 'WBT__b',
                        x1: '3.995',
                        x2: '20',
                        y1: '12',
                        y2: '12',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#E9C570'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#F7B839'
                            }
                        ]
                    ]
                ],
                [
                    'clipPath',
                    {
                        id: 'WBT__a'
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
 * @component @name TokenWBT
 * @description Web3Icon for TokenWBT
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9InVybCgjV0JUX19hKSIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTguMzY0IDE4LjM2NEE5IDkgMCAxIDEgNS42MzYgNS42MzZhOSA5IDAgMCAxIDEyLjcyOCAxMi43MjhNMTIuNDIgOS4zMjFjLjE3OC4wNzYuMzM0LjE5Ny40NS4zNTJoLS4wMDVsMS4zNzggMS44MDIgMi44MDktNi45MjJhOSA5IDAgMCAxIDEuNzMzIDEuNTM3bC0zLjI0NCA3Ljk5M2ExLjA5IDEuMDkgMCAwIDEtMS40MzMuNTkyIDEuMSAxLjEgMCAwIDEtLjQ0OC0uMzQ5bC0xLjM3My0xLjgwMi0xLjgwOCA0LjQ0N2ExLjA5IDEuMDkgMCAwIDEtLjk1OS42ODRoLS4wNTNhMS4wOSAxLjA5IDAgMCAxLS45NjUtLjU4M0w1Ljk3IDEyLjI4NmExLjA5MyAxLjA5MyAwIDEgMSAxLjkzNC0xLjAxOGwxLjQzNyAyLjcwOSAxLjY0My00LjA1NWExLjA5IDEuMDkgMCAwIDEgMS40MzctLjYiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgogICAgPGRlZnM+CiAgICAgICAgPGxpbmVhckdyYWRpZW50IGlkPSJXQlRfX2EiIHgxPSIyLjk5NSIgeDI9IjIxIiB5MT0iMTIiIHkyPSIxMiIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjRTlDNTcwIi8+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI0Y3QjgzOSIvPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICA8L2RlZnM+Cjwvc3ZnPgo=) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTE4LjM2NCAxOC4zNjRBOSA5IDAgMSAxIDUuNjM2IDUuNjM2YTkgOSAwIDAgMSAxMi43MjggMTIuNzI4TTEyLjQyIDkuMzIxYy4xNzguMDc2LjMzNC4xOTcuNDUuMzUyaC0uMDA1bDEuMzc4IDEuODAyIDIuODA5LTYuOTIyYTkgOSAwIDAgMSAxLjczMyAxLjUzN2wtMy4yNDQgNy45OTNhMS4wOSAxLjA5IDAgMCAxLTEuNDMzLjU5MiAxLjEgMS4xIDAgMCAxLS40NDgtLjM0OWwtMS4zNzMtMS44MDItMS44MDggNC40NDdhMS4wOSAxLjA5IDAgMCAxLS45NTkuNjg0aC0uMDUzYTEuMDkgMS4wOSAwIDAgMS0uOTY1LS41ODNMNS45NyAxMi4yODZhMS4wOTMgMS4wOTMgMCAxIDEgMS45MzQtMS4wMThsMS40MzcgMi43MDkgMS42NDMtNC4wNTVhMS4wOSAxLjA5IDAgMCAxIDEuNDM3LS42IiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+Cg==) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNXQlRfX2EpIj4KICAgICAgICA8cGF0aCBmaWxsPSJ1cmwoI1dCVF9fYikiIGQ9Ik0yNCAwSDB2MjRoMjR6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTcuNjU3IDE3LjY1N0E4IDggMCAxIDEgNi4zNDMgNi4zNDJhOCA4IDAgMCAxIDExLjMxNCAxMS4zMTVtLTUuMjg0LTguMDM4YS45Ny45NyAwIDAgMSAuNC4zMTJoLS4wMDVsMS4yMjUgMS42MDIgMi40OTgtNi4xNTNjLjU3LjM4NyAxLjA4Ny44NDcgMS41NCAxLjM2NmwtMi44ODMgNy4xMDVhLjk3Ljk3IDAgMCAxLTEuNjczLjIxN2wtMS4yMi0xLjYwMi0xLjYwNyAzLjk1M2EuOTcuOTcgMCAwIDEtLjg1Mi42MDhoLS4wNDhhLjk3Ljk3IDAgMCAxLS44NTctLjUxOGwtMi4yNTItNC4yNTVhLjk3Mi45NzIgMCAwIDEgMS43Mi0uOTA1bDEuMjc2IDIuNDA4IDEuNDYtMy42MDRhLjk3Ljk3IDAgMCAxIDEuMjc4LS41MzQiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgogICAgPC9nPgogICAgPGRlZnM+CiAgICAgICAgPGxpbmVhckdyYWRpZW50IGlkPSJXQlRfX2IiIHgxPSIzLjk5NSIgeDI9IjIwIiB5MT0iMTIiIHkyPSIxMiIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjRTlDNTcwIi8+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI0Y3QjgzOSIvPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICAgICAgPGNsaXBQYXRoIGlkPSJXQlRfX2EiPgogICAgICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMCAwaDI0djI0SDB6Ii8+CiAgICAgICAgPC9jbGlwUGF0aD4KICAgIDwvZGVmcz4KPC9zdmc+Cg==)
 * @see https://web3icons.io/tokens/WBT
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenWBT = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenWBT', __iconNode);
;
}),
]);

//# sourceMappingURL=1qqr_%40web3icons_react_dist_1szsk4r._.js.map