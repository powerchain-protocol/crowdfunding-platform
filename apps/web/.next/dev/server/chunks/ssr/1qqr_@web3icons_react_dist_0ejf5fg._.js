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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenTT.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenTT
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-ssr] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: 'url(#TT__a)',
                d: 'm7.215 19.622 4.626-7.33c.07-.112-.01-.292-.143-.292H7.65c-.328 0-.529-.323-.354-.603l4.98-8.39-.28-.005a8.998 8.998 0 0 0-4.78 16.62m4.515 1.376h.265a8.998 8.998 0 0 0 4.79-16.62l-4.441 7.363a.17.17 0 0 0 .143.26h4.35c.329 0 .572.401.398.682l-5.51 8.31z'
            }
        ],
        [
            'defs',
            {},
            [
                [
                    'linearGradient',
                    {
                        id: 'TT__a',
                        x1: '11.995',
                        x2: '11.995',
                        y1: '3.532',
                        y2: '20.468',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#06FCD7'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#0502DA'
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
                d: 'm7.215 19.622 4.626-7.33c.07-.112-.01-.292-.143-.292H7.65c-.328 0-.529-.323-.354-.603l4.98-8.39-.28-.005a8.998 8.998 0 0 0-4.78 16.62m4.515 1.376h.265a8.999 8.999 0 0 0 4.79-16.62l-4.441 7.363a.17.17 0 0 0 .143.26h4.35c.329 0 .572.401.398.682l-5.51 8.31z'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#TT__a)'
            },
            [
                [
                    'path',
                    {
                        fill: 'url(#TT__b)',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'm7.747 18.775 4.112-6.516c.061-.1-.01-.26-.127-.26h-3.6c-.29 0-.47-.286-.314-.536l4.427-7.456-.25-.005a7.998 7.998 0 0 0-4.248 14.773m4.013 1.223h.235a7.999 7.999 0 0 0 4.258-14.773l-3.947 6.544a.15.15 0 0 0 .127.23H16.3c.292 0 .508.358.353.608l-4.898 7.386z'
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
                        id: 'TT__b',
                        x1: '11.995',
                        x2: '11.995',
                        y1: '4.473',
                        y2: '19.527',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#06FCD7'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#0502DA'
                            }
                        ]
                    ]
                ],
                [
                    'clipPath',
                    {
                        id: 'TT__a'
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
 * @component @name TokenTT
 * @description Web3Icon for TokenTT
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9InVybCgjVFRfX2EpIiBkPSJtNy4yMTUgMTkuNjIyIDQuNjI2LTcuMzNjLjA3LS4xMTItLjAxLS4yOTItLjE0My0uMjkySDcuNjVjLS4zMjggMC0uNTI5LS4zMjMtLjM1NC0uNjAzbDQuOTgtOC4zOS0uMjgtLjAwNWE4Ljk5OCA4Ljk5OCAwIDAgMC00Ljc4IDE2LjYybTQuNTE1IDEuMzc2aC4yNjVhOC45OTggOC45OTggMCAwIDAgNC43OS0xNi42MmwtNC40NDEgNy4zNjNhLjE3LjE3IDAgMCAwIC4xNDMuMjZoNC4zNWMuMzI5IDAgLjU3Mi40MDEuMzk4LjY4MmwtNS41MSA4LjMxeiIvPgogICAgPGRlZnM+CiAgICAgICAgPGxpbmVhckdyYWRpZW50IGlkPSJUVF9fYSIgeDE9IjExLjk5NSIgeDI9IjExLjk5NSIgeTE9IjMuNTMyIiB5Mj0iMjAuNDY4IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiMwNkZDRDciLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMDUwMkRBIi8+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgIDwvZGVmcz4KPC9zdmc+Cg==) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Im03LjIxNSAxOS42MjIgNC42MjYtNy4zM2MuMDctLjExMi0uMDEtLjI5Mi0uMTQzLS4yOTJINy42NWMtLjMyOCAwLS41MjktLjMyMy0uMzU0LS42MDNsNC45OC04LjM5LS4yOC0uMDA1YTguOTk4IDguOTk4IDAgMCAwLTQuNzggMTYuNjJtNC41MTUgMS4zNzZoLjI2NWE4Ljk5OSA4Ljk5OSAwIDAgMCA0Ljc5LTE2LjYybC00LjQ0MSA3LjM2M2EuMTcuMTcgMCAwIDAgLjE0My4yNmg0LjM1Yy4zMjkgMCAuNTcyLjQwMS4zOTguNjgybC01LjUxIDguMzF6Ii8+Cjwvc3ZnPgo=) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNUVF9fYSkiPgogICAgICAgIDxwYXRoIGZpbGw9InVybCgjVFRfX2IpIiBkPSJNMjQgMEgwdjI0aDI0eiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Im03Ljc0NyAxOC43NzUgNC4xMTItNi41MTZjLjA2MS0uMS0uMDEtLjI2LS4xMjctLjI2aC0zLjZjLS4yOSAwLS40Ny0uMjg2LS4zMTQtLjUzNmw0LjQyNy03LjQ1Ni0uMjUtLjAwNWE3Ljk5OCA3Ljk5OCAwIDAgMC00LjI0OCAxNC43NzNtNC4wMTMgMS4yMjNoLjIzNWE3Ljk5OSA3Ljk5OSAwIDAgMCA0LjI1OC0xNC43NzNsLTMuOTQ3IDYuNTQ0YS4xNS4xNSAwIDAgMCAuMTI3LjIzSDE2LjNjLjI5MiAwIC41MDguMzU4LjM1My42MDhsLTQuODk4IDcuMzg2eiIvPgogICAgPC9nPgogICAgPGRlZnM+CiAgICAgICAgPGxpbmVhckdyYWRpZW50IGlkPSJUVF9fYiIgeDE9IjExLjk5NSIgeDI9IjExLjk5NSIgeTE9IjQuNDczIiB5Mj0iMTkuNTI3IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiMwNkZDRDciLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMDUwMkRBIi8+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgICAgICA8Y2xpcFBhdGggaWQ9IlRUX19hIj4KICAgICAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTAgMGgyNHYyNEgweiIvPgogICAgICAgIDwvY2xpcFBhdGg+CiAgICA8L2RlZnM+Cjwvc3ZnPgo=)
 * @see https://web3icons.io/tokens/TT
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenTT = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenTT', __iconNode);
;
}),
];

//# sourceMappingURL=1qqr_%40web3icons_react_dist_0ejf5fg._.js.map