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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenEUNO.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenEUNO
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-ssr] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: 'url(#EUNO__a)',
                d: 'M5.065 7.64h11.78a1.16 1.16 0 0 0 .847-.365l1.888-1.958.198-.203c.755-.778.22-2.114-.842-2.114H5.066c-.32 0-.622.128-.849.36-.22.232-.348.552-.348.877V6.41c0 .326.128.64.348.872.227.232.529.366.848.366z'
            }
        ],
        [
            'path',
            {
                fill: 'url(#EUNO__b)',
                d: 'M18.936 9.964H5.066a1.22 1.22 0 0 0-.849.349c-.22.218-.346.514-.348.825v8.689a1.16 1.16 0 0 0 .348.83c.227.221.529.343.848.343h7.284c.32 0 .621-.122.848-.349l2.09-2.056c.756-.737.227-1.66-.841-1.66h-5.93v-2.916h8.323c.319 0 .621-.128.848-.35l1.893-1.503.198-.192c.755-.744.22-2.01-.842-2.01'
            }
        ],
        [
            'defs',
            {},
            [
                [
                    'linearGradient',
                    {
                        id: 'EUNO__a',
                        x1: '20.132',
                        x2: '4.015',
                        y1: '19.762',
                        y2: '21.492',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#7599F2'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#562CDD'
                            }
                        ]
                    ]
                ],
                [
                    'linearGradient',
                    {
                        id: 'EUNO__b',
                        x1: '20.132',
                        x2: '6.233',
                        y1: '7.327',
                        y2: '13.107',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#7599F2'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#562CDD'
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
                d: 'M5.065 7.64h11.78a1.16 1.16 0 0 0 .848-.365l1.887-1.958.198-.203c.755-.778.22-2.114-.843-2.114H5.065c-.32 0-.621.128-.848.36-.22.232-.348.552-.348.877V6.41c0 .326.128.64.348.872.227.232.529.366.848.366zm13.87 2.324H5.065a1.22 1.22 0 0 0-.848.349c-.22.218-.346.514-.348.825v8.689a1.16 1.16 0 0 0 .348.83c.227.221.529.343.848.343h7.284c.32 0 .621-.122.848-.348l2.09-2.057c.756-.737.227-1.66-.841-1.66h-5.93v-2.916h8.323c.319 0 .621-.128.848-.35l1.893-1.503.198-.192c.755-.744.22-2.01-.843-2.01'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#EUNO__a)'
            },
            [
                [
                    'path',
                    {
                        fill: 'url(#EUNO__b)',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M5.836 8.125h10.47a1.03 1.03 0 0 0 .754-.325l1.678-1.74.175-.18c.671-.693.197-1.88-.748-1.88H5.835c-.283 0-.552.114-.753.32-.196.207-.31.49-.31.78v1.93c0 .29.114.569.31.775.201.207.47.325.754.325zm12.329 2.065H5.835a1.08 1.08 0 0 0-.753.31 1.04 1.04 0 0 0-.31.733v7.724a1.03 1.03 0 0 0 .31.738c.201.197.47.305.754.305h6.474c.284 0 .552-.108.754-.31l1.858-1.828c.672-.655.202-1.476-.748-1.476H8.903v-2.592H16.3c.284 0 .552-.113.754-.31l1.683-1.337.175-.17c.671-.661.197-1.786-.748-1.786'
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
                        id: 'EUNO__b',
                        x1: '19.228',
                        x2: '4.903',
                        y1: '18.9',
                        y2: '20.437',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#7599F2'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#562CDD'
                            }
                        ]
                    ]
                ],
                [
                    'clipPath',
                    {
                        id: 'EUNO__a'
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
 * @component @name TokenEUNO
 * @description Web3Icon for TokenEUNO
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9InVybCgjRVVOT19fYSkiIGQ9Ik01LjA2NSA3LjY0aDExLjc4YTEuMTYgMS4xNiAwIDAgMCAuODQ3LS4zNjVsMS44ODgtMS45NTguMTk4LS4yMDNjLjc1NS0uNzc4LjIyLTIuMTE0LS44NDItMi4xMTRINS4wNjZjLS4zMiAwLS42MjIuMTI4LS44NDkuMzYtLjIyLjIzMi0uMzQ4LjU1Mi0uMzQ4Ljg3N1Y2LjQxYzAgLjMyNi4xMjguNjQuMzQ4Ljg3Mi4yMjcuMjMyLjUyOS4zNjYuODQ4LjM2NnoiLz4KICAgIDxwYXRoIGZpbGw9InVybCgjRVVOT19fYikiIGQ9Ik0xOC45MzYgOS45NjRINS4wNjZhMS4yMiAxLjIyIDAgMCAwLS44NDkuMzQ5Yy0uMjIuMjE4LS4zNDYuNTE0LS4zNDguODI1djguNjg5YTEuMTYgMS4xNiAwIDAgMCAuMzQ4LjgzYy4yMjcuMjIxLjUyOS4zNDMuODQ4LjM0M2g3LjI4NGMuMzIgMCAuNjIxLS4xMjIuODQ4LS4zNDlsMi4wOS0yLjA1NmMuNzU2LS43MzcuMjI3LTEuNjYtLjg0MS0xLjY2aC01Ljkzdi0yLjkxNmg4LjMyM2MuMzE5IDAgLjYyMS0uMTI4Ljg0OC0uMzVsMS44OTMtMS41MDMuMTk4LS4xOTJjLjc1NS0uNzQ0LjIyLTIuMDEtLjg0Mi0yLjAxIi8+CiAgICA8ZGVmcz4KICAgICAgICA8bGluZWFyR3JhZGllbnQgaWQ9IkVVTk9fX2EiIHgxPSIyMC4xMzIiIHgyPSI0LjAxNSIgeTE9IjE5Ljc2MiIgeTI9IjIxLjQ5MiIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjNzU5OUYyIi8+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzU2MkNERCIvPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICAgICAgPGxpbmVhckdyYWRpZW50IGlkPSJFVU5PX19iIiB4MT0iMjAuMTMyIiB4Mj0iNi4yMzMiIHkxPSI3LjMyNyIgeTI9IjEzLjEwNyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjNzU5OUYyIi8+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzU2MkNERCIvPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICA8L2RlZnM+Cjwvc3ZnPgo=) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik01LjA2NSA3LjY0aDExLjc4YTEuMTYgMS4xNiAwIDAgMCAuODQ4LS4zNjVsMS44ODctMS45NTguMTk4LS4yMDNjLjc1NS0uNzc4LjIyLTIuMTE0LS44NDMtMi4xMTRINS4wNjVjLS4zMiAwLS42MjEuMTI4LS44NDguMzYtLjIyLjIzMi0uMzQ4LjU1Mi0uMzQ4Ljg3N1Y2LjQxYzAgLjMyNi4xMjguNjQuMzQ4Ljg3Mi4yMjcuMjMyLjUyOS4zNjYuODQ4LjM2NnptMTMuODcgMi4zMjRINS4wNjVhMS4yMiAxLjIyIDAgMCAwLS44NDguMzQ5Yy0uMjIuMjE4LS4zNDYuNTE0LS4zNDguODI1djguNjg5YTEuMTYgMS4xNiAwIDAgMCAuMzQ4LjgzYy4yMjcuMjIxLjUyOS4zNDMuODQ4LjM0M2g3LjI4NGMuMzIgMCAuNjIxLS4xMjIuODQ4LS4zNDhsMi4wOS0yLjA1N2MuNzU2LS43MzcuMjI3LTEuNjYtLjg0MS0xLjY2aC01Ljkzdi0yLjkxNmg4LjMyM2MuMzE5IDAgLjYyMS0uMTI4Ljg0OC0uMzVsMS44OTMtMS41MDMuMTk4LS4xOTJjLjc1NS0uNzQ0LjIyLTIuMDEtLjg0My0yLjAxIi8+Cjwvc3ZnPgo=) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNFVU5PX19hKSI+CiAgICAgICAgPHBhdGggZmlsbD0idXJsKCNFVU5PX19iKSIgZD0iTTI0IDBIMHYyNGgyNHoiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNNS44MzYgOC4xMjVoMTAuNDdhMS4wMyAxLjAzIDAgMCAwIC43NTQtLjMyNWwxLjY3OC0xLjc0LjE3NS0uMThjLjY3MS0uNjkzLjE5Ny0xLjg4LS43NDgtMS44OEg1LjgzNWMtLjI4MyAwLS41NTIuMTE0LS43NTMuMzItLjE5Ni4yMDctLjMxLjQ5LS4zMS43OHYxLjkzYzAgLjI5LjExNC41NjkuMzEuNzc1LjIwMS4yMDcuNDcuMzI1Ljc1NC4zMjV6bTEyLjMyOSAyLjA2NUg1LjgzNWExLjA4IDEuMDggMCAwIDAtLjc1My4zMSAxLjA0IDEuMDQgMCAwIDAtLjMxLjczM3Y3LjcyNGExLjAzIDEuMDMgMCAwIDAgLjMxLjczOGMuMjAxLjE5Ny40Ny4zMDUuNzU0LjMwNWg2LjQ3NGMuMjg0IDAgLjU1Mi0uMTA4Ljc1NC0uMzFsMS44NTgtMS44MjhjLjY3Mi0uNjU1LjIwMi0xLjQ3Ni0uNzQ4LTEuNDc2SDguOTAzdi0yLjU5MkgxNi4zYy4yODQgMCAuNTUyLS4xMTMuNzU0LS4zMWwxLjY4My0xLjMzNy4xNzUtLjE3Yy42NzEtLjY2MS4xOTctMS43ODYtLjc0OC0xLjc4NiIvPgogICAgPC9nPgogICAgPGRlZnM+CiAgICAgICAgPGxpbmVhckdyYWRpZW50IGlkPSJFVU5PX19iIiB4MT0iMTkuMjI4IiB4Mj0iNC45MDMiIHkxPSIxOC45IiB5Mj0iMjAuNDM3IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiM3NTk5RjIiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjNTYyQ0REIi8+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgICAgICA8Y2xpcFBhdGggaWQ9IkVVTk9fX2EiPgogICAgICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMCAwaDI0djI0SDB6Ii8+CiAgICAgICAgPC9jbGlwUGF0aD4KICAgIDwvZGVmcz4KPC9zdmc+Cg==)
 * @see https://web3icons.io/tokens/EUNO
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenEUNO = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenEUNO', __iconNode);
;
}),
];

//# sourceMappingURL=1qqr_%40web3icons_react_dist_0b120mj._.js.map