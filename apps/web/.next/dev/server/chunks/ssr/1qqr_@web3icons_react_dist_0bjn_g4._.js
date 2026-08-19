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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenDEFX.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenDEFX
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-ssr] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: 'url(#DEFX__a)',
                d: 'm7.725 6.6 4.208 2.565L16.328 6.6 21 9.287v5.458L16.334 17.4l-4.406-2.42-4.203 2.42L3 14.745V9.287zm8.1 9.64v-3.938l-7.65-4.496v3.91zm-8.55-4.528V7.77L3.9 9.764v4.027zm-2.925 2.79L7.752 16.5l3.348-2.007-3.375-2.043zm12.375-2.21v3.934l3.375-1.953v-4.028zm2.925-2.767L16.329 7.5 12.9 9.525l3.429 1.949z'
            }
        ],
        [
            'defs',
            {},
            [
                [
                    'linearGradient',
                    {
                        id: 'DEFX__a',
                        x1: '21.032',
                        x2: '3',
                        y1: '12.023',
                        y2: '12.023',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#2D73BA'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#4BA69B'
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
                d: 'm7.725 6.6 4.208 2.565L16.328 6.6 21 9.287v5.458L16.334 17.4l-4.406-2.42-4.203 2.42L3 14.745V9.287zm8.1 9.64v-3.938l-7.65-4.496v3.91zm-8.55-4.528V7.77L3.9 9.764v4.027zm-2.925 2.79L7.752 16.5l3.348-2.007-3.375-2.043zm12.375-2.21v3.934l3.375-1.953v-4.028zm2.925-2.767L16.329 7.5 12.9 9.525l3.429 1.949z'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#DEFX__a)'
            },
            [
                [
                    'path',
                    {
                        fill: 'url(#DEFX__b)',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'm8.2 7.2 3.74 2.28 3.908-2.28L20 9.588v4.852l-4.148 2.36-3.916-2.152L8.2 16.8 4 14.44V9.588zm7.2 8.568v-3.5L8.6 8.272v3.476zm-7.6-4.024V8.24l-3 1.772v3.58zm-2.6 2.48L8.224 16l2.976-1.784-3-1.816zm11-1.964v3.496l3-1.736v-3.58zm2.6-2.46L15.848 8 12.8 9.8l3.048 1.732z'
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
                        id: 'DEFX__b',
                        x1: '20.028',
                        x2: '4',
                        y1: '12.02',
                        y2: '12.02',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#2D73BA'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#4BA69B'
                            }
                        ]
                    ]
                ],
                [
                    'clipPath',
                    {
                        id: 'DEFX__a'
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
 * @component @name TokenDEFX
 * @description Web3Icon for TokenDEFX
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9InVybCgjREVGWF9fYSkiIGQ9Im03LjcyNSA2LjYgNC4yMDggMi41NjVMMTYuMzI4IDYuNiAyMSA5LjI4N3Y1LjQ1OEwxNi4zMzQgMTcuNGwtNC40MDYtMi40Mi00LjIwMyAyLjQyTDMgMTQuNzQ1VjkuMjg3em04LjEgOS42NHYtMy45MzhsLTcuNjUtNC40OTZ2My45MXptLTguNTUtNC41MjhWNy43N0wzLjkgOS43NjR2NC4wMjd6bS0yLjkyNSAyLjc5TDcuNzUyIDE2LjVsMy4zNDgtMi4wMDctMy4zNzUtMi4wNDN6bTEyLjM3NS0yLjIxdjMuOTM0bDMuMzc1LTEuOTUzdi00LjAyOHptMi45MjUtMi43NjdMMTYuMzI5IDcuNSAxMi45IDkuNTI1bDMuNDI5IDEuOTQ5eiIvPgogICAgPGRlZnM+CiAgICAgICAgPGxpbmVhckdyYWRpZW50IGlkPSJERUZYX19hIiB4MT0iMjEuMDMyIiB4Mj0iMyIgeTE9IjEyLjAyMyIgeTI9IjEyLjAyMyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjMkQ3M0JBIi8+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzRCQTY5QiIvPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICA8L2RlZnM+Cjwvc3ZnPgo=) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Im03LjcyNSA2LjYgNC4yMDggMi41NjVMMTYuMzI4IDYuNiAyMSA5LjI4N3Y1LjQ1OEwxNi4zMzQgMTcuNGwtNC40MDYtMi40Mi00LjIwMyAyLjQyTDMgMTQuNzQ1VjkuMjg3em04LjEgOS42NHYtMy45MzhsLTcuNjUtNC40OTZ2My45MXptLTguNTUtNC41MjhWNy43N0wzLjkgOS43NjR2NC4wMjd6bS0yLjkyNSAyLjc5TDcuNzUyIDE2LjVsMy4zNDgtMi4wMDctMy4zNzUtMi4wNDN6bTEyLjM3NS0yLjIxdjMuOTM0bDMuMzc1LTEuOTUzdi00LjAyOHptMi45MjUtMi43NjdMMTYuMzI5IDcuNSAxMi45IDkuNTI1bDMuNDI5IDEuOTQ5eiIvPgo8L3N2Zz4K) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNERUZYX19hKSI+CiAgICAgICAgPHBhdGggZmlsbD0idXJsKCNERUZYX19iKSIgZD0iTTI0IDBIMHYyNGgyNHoiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJtOC4yIDcuMiAzLjc0IDIuMjggMy45MDgtMi4yOEwyMCA5LjU4OHY0Ljg1MmwtNC4xNDggMi4zNi0zLjkxNi0yLjE1Mkw4LjIgMTYuOCA0IDE0LjQ0VjkuNTg4em03LjIgOC41Njh2LTMuNUw4LjYgOC4yNzJ2My40NzZ6bS03LjYtNC4wMjRWOC4yNGwtMyAxLjc3MnYzLjU4em0tMi42IDIuNDhMOC4yMjQgMTZsMi45NzYtMS43ODQtMy0xLjgxNnptMTEtMS45NjR2My40OTZsMy0xLjczNnYtMy41OHptMi42LTIuNDZMMTUuODQ4IDggMTIuOCA5LjhsMy4wNDggMS43MzJ6Ii8+CiAgICA8L2c+CiAgICA8ZGVmcz4KICAgICAgICA8bGluZWFyR3JhZGllbnQgaWQ9IkRFRlhfX2IiIHgxPSIyMC4wMjgiIHgyPSI0IiB5MT0iMTIuMDIiIHkyPSIxMi4wMiIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjMkQ3M0JBIi8+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzRCQTY5QiIvPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICAgICAgPGNsaXBQYXRoIGlkPSJERUZYX19hIj4KICAgICAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTAgMGgyNHYyNEgweiIvPgogICAgICAgIDwvY2xpcFBhdGg+CiAgICA8L2RlZnM+Cjwvc3ZnPgo=)
 * @see https://web3icons.io/tokens/DEFX
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenDEFX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenDEFX', __iconNode);
;
}),
];

//# sourceMappingURL=1qqr_%40web3icons_react_dist_0bjn_g4._.js.map