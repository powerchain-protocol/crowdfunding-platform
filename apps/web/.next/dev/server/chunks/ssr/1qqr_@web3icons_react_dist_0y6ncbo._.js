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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenEURS.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenEURS
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-ssr] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: 'url(#EURS__a)',
                d: 'M18.437 18.29A8.97 8.97 0 0 0 21 12a8.99 8.99 0 0 0-3.445-7.082l-1.612.062c-2.375.271-4.472 1.647-5.516 3.643h8.885l-1.125 2.25H9.755l-.005.05c-.109.867-.097 1.334 0 2.143l.007.059h7.306l-1.126 2.25h-5.326c.925 1.334 2.481 2.227 4.253 2.53a28 28 0 0 0 3.573.385m-2.603 1.854A9 9 0 0 1 3 12a9 9 0 0 1 11.042-8.767 8.48 8.48 0 0 0-6.07 5.39H6.374l-1.125 2.25H7.5v.002c-.068.909-.06 1.398 0 2.25H6.375l-1.125 2.25h2.88c1.303 2.622 4.307 4.378 6.734 4.667q.516.061.97.102'
            }
        ],
        [
            'defs',
            {},
            [
                [
                    'linearGradient',
                    {
                        id: 'EURS__a',
                        x1: '20.394',
                        x2: '3.939',
                        y1: '4.123',
                        y2: '19.015',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#B030EC'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '.464',
                                stopColor: '#2B7FEF'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#15BCFF'
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
                d: 'M18.437 18.29A8.97 8.97 0 0 0 21 12a8.99 8.99 0 0 0-3.445-7.082l-1.612.062c-2.375.271-4.472 1.647-5.516 3.643h8.885l-1.125 2.25H9.755l-.005.05c-.109.867-.097 1.334 0 2.143l.007.059h7.306l-1.126 2.25h-5.326c.925 1.334 2.481 2.227 4.253 2.53a28 28 0 0 0 3.573.385m-2.603 1.855A9 9 0 0 1 3 12a9 9 0 0 1 11.042-8.767 8.48 8.48 0 0 0-6.07 5.39H6.374l-1.125 2.25H7.5v.002c-.068.909-.06 1.398 0 2.25H6.375l-1.125 2.25h2.88c1.303 2.622 4.308 4.378 6.734 4.667q.516.061.97.102'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#EURS__a)'
            },
            [
                [
                    'path',
                    {
                        fill: 'url(#EURS__b)',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M17.722 17.592A7.98 7.98 0 0 0 20 12a7.99 7.99 0 0 0-3.062-6.295l-1.433.055c-2.112.241-3.975 1.464-4.904 3.238H18.5l-1 2h-7.495l-.005.046c-.097.77-.087 1.184 0 1.904l.006.052H16.5l-1 2h-4.735c.822 1.186 2.206 1.98 3.781 2.25 1.356.232 2.471.314 3.175.341m-2.314 1.648A8 8 0 0 1 4 12a8 8 0 0 1 9.815-7.793 7.54 7.54 0 0 0-5.396 4.791H7l-1 2h2V11c-.06.808-.053 1.242 0 2H7l-1 2h2.56c1.158 2.33 3.829 3.892 5.986 4.148q.459.055.863.091'
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
                        id: 'EURS__b',
                        x1: '19.462',
                        x2: '4.834',
                        y1: '4.999',
                        y2: '18.235',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#B030EC'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '.464',
                                stopColor: '#2B7FEF'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#15BCFF'
                            }
                        ]
                    ]
                ],
                [
                    'clipPath',
                    {
                        id: 'EURS__a'
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
 * @component @name TokenEURS
 * @description Web3Icon for TokenEURS
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9InVybCgjRVVSU19fYSkiIGQ9Ik0xOC40MzcgMTguMjlBOC45NyA4Ljk3IDAgMCAwIDIxIDEyYTguOTkgOC45OSAwIDAgMC0zLjQ0NS03LjA4MmwtMS42MTIuMDYyYy0yLjM3NS4yNzEtNC40NzIgMS42NDctNS41MTYgMy42NDNoOC44ODVsLTEuMTI1IDIuMjVIOS43NTVsLS4wMDUuMDVjLS4xMDkuODY3LS4wOTcgMS4zMzQgMCAyLjE0M2wuMDA3LjA1OWg3LjMwNmwtMS4xMjYgMi4yNWgtNS4zMjZjLjkyNSAxLjMzNCAyLjQ4MSAyLjIyNyA0LjI1MyAyLjUzYTI4IDI4IDAgMCAwIDMuNTczLjM4NW0tMi42MDMgMS44NTRBOSA5IDAgMCAxIDMgMTJhOSA5IDAgMCAxIDExLjA0Mi04Ljc2NyA4LjQ4IDguNDggMCAwIDAtNi4wNyA1LjM5SDYuMzc0bC0xLjEyNSAyLjI1SDcuNXYuMDAyYy0uMDY4LjkwOS0uMDYgMS4zOTggMCAyLjI1SDYuMzc1bC0xLjEyNSAyLjI1aDIuODhjMS4zMDMgMi42MjIgNC4zMDcgNC4zNzggNi43MzQgNC42NjdxLjUxNi4wNjEuOTcuMTAyIi8+CiAgICA8ZGVmcz4KICAgICAgICA8bGluZWFyR3JhZGllbnQgaWQ9IkVVUlNfX2EiIHgxPSIyMC4zOTQiIHgyPSIzLjkzOSIgeTE9IjQuMTIzIiB5Mj0iMTkuMDE1IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiNCMDMwRUMiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIuNDY0IiBzdG9wLWNvbG9yPSIjMkI3RkVGIi8+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzE1QkNGRiIvPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICA8L2RlZnM+Cjwvc3ZnPgo=) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xOC40MzcgMTguMjlBOC45NyA4Ljk3IDAgMCAwIDIxIDEyYTguOTkgOC45OSAwIDAgMC0zLjQ0NS03LjA4MmwtMS42MTIuMDYyYy0yLjM3NS4yNzEtNC40NzIgMS42NDctNS41MTYgMy42NDNoOC44ODVsLTEuMTI1IDIuMjVIOS43NTVsLS4wMDUuMDVjLS4xMDkuODY3LS4wOTcgMS4zMzQgMCAyLjE0M2wuMDA3LjA1OWg3LjMwNmwtMS4xMjYgMi4yNWgtNS4zMjZjLjkyNSAxLjMzNCAyLjQ4MSAyLjIyNyA0LjI1MyAyLjUzYTI4IDI4IDAgMCAwIDMuNTczLjM4NW0tMi42MDMgMS44NTVBOSA5IDAgMCAxIDMgMTJhOSA5IDAgMCAxIDExLjA0Mi04Ljc2NyA4LjQ4IDguNDggMCAwIDAtNi4wNyA1LjM5SDYuMzc0bC0xLjEyNSAyLjI1SDcuNXYuMDAyYy0uMDY4LjkwOS0uMDYgMS4zOTggMCAyLjI1SDYuMzc1bC0xLjEyNSAyLjI1aDIuODhjMS4zMDMgMi42MjIgNC4zMDggNC4zNzggNi43MzQgNC42NjdxLjUxNi4wNjEuOTcuMTAyIi8+Cjwvc3ZnPgo=) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNFVVJTX19hKSI+CiAgICAgICAgPHBhdGggZmlsbD0idXJsKCNFVVJTX19iKSIgZD0iTTI0IDBIMHYyNGgyNHoiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTcuNzIyIDE3LjU5MkE3Ljk4IDcuOTggMCAwIDAgMjAgMTJhNy45OSA3Ljk5IDAgMCAwLTMuMDYyLTYuMjk1bC0xLjQzMy4wNTVjLTIuMTEyLjI0MS0zLjk3NSAxLjQ2NC00LjkwNCAzLjIzOEgxOC41bC0xIDJoLTcuNDk1bC0uMDA1LjA0NmMtLjA5Ny43Ny0uMDg3IDEuMTg0IDAgMS45MDRsLjAwNi4wNTJIMTYuNWwtMSAyaC00LjczNWMuODIyIDEuMTg2IDIuMjA2IDEuOTggMy43ODEgMi4yNSAxLjM1Ni4yMzIgMi40NzEuMzE0IDMuMTc1LjM0MW0tMi4zMTQgMS42NDhBOCA4IDAgMCAxIDQgMTJhOCA4IDAgMCAxIDkuODE1LTcuNzkzIDcuNTQgNy41NCAwIDAgMC01LjM5NiA0Ljc5MUg3bC0xIDJoMlYxMWMtLjA2LjgwOC0uMDUzIDEuMjQyIDAgMkg3bC0xIDJoMi41NmMxLjE1OCAyLjMzIDMuODI5IDMuODkyIDUuOTg2IDQuMTQ4cS40NTkuMDU1Ljg2My4wOTEiLz4KICAgIDwvZz4KICAgIDxkZWZzPgogICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iRVVSU19fYiIgeDE9IjE5LjQ2MiIgeDI9IjQuODM0IiB5MT0iNC45OTkiIHkyPSIxOC4yMzUiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iI0IwMzBFQyIvPgogICAgICAgICAgICA8c3RvcCBvZmZzZXQ9Ii40NjQiIHN0b3AtY29sb3I9IiMyQjdGRUYiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMTVCQ0ZGIi8+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgICAgICA8Y2xpcFBhdGggaWQ9IkVVUlNfX2EiPgogICAgICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMCAwaDI0djI0SDB6Ii8+CiAgICAgICAgPC9jbGlwUGF0aD4KICAgIDwvZGVmcz4KPC9zdmc+Cg==)
 * @see https://web3icons.io/tokens/EURS
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenEURS = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenEURS', __iconNode);
;
}),
];

//# sourceMappingURL=1qqr_%40web3icons_react_dist_0y6ncbo._.js.map