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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenXEP.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenXEP
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-ssr] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: 'url(#XEP__a)',
                d: 'M12.003 20.998a8.998 8.998 0 0 0 8.846-10.64l-2.11 1.237.012.405a6.75 6.75 0 0 1-12.13 4.077l2.693-1.608a3.654 3.654 0 0 0 5.973-3.566L18.21 9.16l1.879-1.097a8.998 8.998 0 1 0-8.087 12.935m-3.881-8.633-2.587 1.547A6.749 6.749 0 0 1 16.76 7.208l-2.755 1.648a3.655 3.655 0 0 0-5.872 3.504zm9.392-3.925-4.089 2.463v1.8l-1.704.984-1.49-.86-3.92 2.356-.225-.371 3.931-2.362v-1.716l1.704-.984 1.418.821 4.15-2.497z'
            }
        ],
        [
            'defs',
            {},
            [
                [
                    'linearGradient',
                    {
                        id: 'XEP__a',
                        x1: '12',
                        x2: '12',
                        y1: '3.001',
                        y2: '20.998',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#017FEE'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#171B6E'
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
                d: 'M12.003 20.998a9 9 0 0 0 8.706-6.728 9 9 0 0 0 .14-3.912l-2.11 1.237.012.405a6.75 6.75 0 0 1-12.13 4.077l2.693-1.608a3.655 3.655 0 0 0 5.973-3.566L18.21 9.16l1.879-1.097a8.998 8.998 0 1 0-8.087 12.935m-3.881-8.633-2.587 1.547A6.749 6.749 0 0 1 16.76 7.208l-2.755 1.648a3.655 3.655 0 0 0-5.872 3.504zm9.392-3.925-4.089 2.463v1.8l-1.704.984-1.49-.86-3.92 2.356-.225-.371 3.931-2.362v-1.716l1.704-.984 1.418.821 4.15-2.497z'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#XEP__a)'
            },
            [
                [
                    'path',
                    {
                        fill: 'url(#XEP__b)',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M12.002 19.999a8 8 0 0 0 7.864-9.459l-1.875 1.1.01.36a5.999 5.999 0 0 1-10.783 3.624l2.395-1.43a3.248 3.248 0 0 0 5.309-3.169l2.6-1.55 1.669-.974a7.999 7.999 0 1 0-7.189 11.498m-3.45-7.674L6.254 13.7a5.999 5.999 0 0 1 9.978-5.96l-2.45 1.465a3.25 3.25 0 0 0-5.218 3.115zm8.35-3.49-3.635 2.19v1.6l-1.515.875-1.325-.765-3.484 2.094-.2-.33 3.495-2.1v-1.524L11.752 10l1.26.73 3.69-2.22z'
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
                        id: 'XEP__b',
                        x1: '12',
                        x2: '12',
                        y1: '4.001',
                        y2: '19.998',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#017FEE'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#171B6E'
                            }
                        ]
                    ]
                ],
                [
                    'clipPath',
                    {
                        id: 'XEP__a'
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
 * @component @name TokenXEP
 * @description Web3Icon for TokenXEP
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9InVybCgjWEVQX19hKSIgZD0iTTEyLjAwMyAyMC45OThhOC45OTggOC45OTggMCAwIDAgOC44NDYtMTAuNjRsLTIuMTEgMS4yMzcuMDEyLjQwNWE2Ljc1IDYuNzUgMCAwIDEtMTIuMTMgNC4wNzdsMi42OTMtMS42MDhhMy42NTQgMy42NTQgMCAwIDAgNS45NzMtMy41NjZMMTguMjEgOS4xNmwxLjg3OS0xLjA5N2E4Ljk5OCA4Ljk5OCAwIDEgMC04LjA4NyAxMi45MzVtLTMuODgxLTguNjMzLTIuNTg3IDEuNTQ3QTYuNzQ5IDYuNzQ5IDAgMCAxIDE2Ljc2IDcuMjA4bC0yLjc1NSAxLjY0OGEzLjY1NSAzLjY1NSAwIDAgMC01Ljg3MiAzLjUwNHptOS4zOTItMy45MjUtNC4wODkgMi40NjN2MS44bC0xLjcwNC45ODQtMS40OS0uODYtMy45MiAyLjM1Ni0uMjI1LS4zNzEgMy45MzEtMi4zNjJ2LTEuNzE2bDEuNzA0LS45ODQgMS40MTguODIxIDQuMTUtMi40OTd6Ii8+CiAgICA8ZGVmcz4KICAgICAgICA8bGluZWFyR3JhZGllbnQgaWQ9IlhFUF9fYSIgeDE9IjEyIiB4Mj0iMTIiIHkxPSIzLjAwMSIgeTI9IjIwLjk5OCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjMDE3RkVFIi8+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzE3MUI2RSIvPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICA8L2RlZnM+Cjwvc3ZnPgo=) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xMi4wMDMgMjAuOTk4YTkgOSAwIDAgMCA4LjcwNi02LjcyOCA5IDkgMCAwIDAgLjE0LTMuOTEybC0yLjExIDEuMjM3LjAxMi40MDVhNi43NSA2Ljc1IDAgMCAxLTEyLjEzIDQuMDc3bDIuNjkzLTEuNjA4YTMuNjU1IDMuNjU1IDAgMCAwIDUuOTczLTMuNTY2TDE4LjIxIDkuMTZsMS44NzktMS4wOTdhOC45OTggOC45OTggMCAxIDAtOC4wODcgMTIuOTM1bS0zLjg4MS04LjYzMy0yLjU4NyAxLjU0N0E2Ljc0OSA2Ljc0OSAwIDAgMSAxNi43NiA3LjIwOGwtMi43NTUgMS42NDhhMy42NTUgMy42NTUgMCAwIDAtNS44NzIgMy41MDR6bTkuMzkyLTMuOTI1LTQuMDg5IDIuNDYzdjEuOGwtMS43MDQuOTg0LTEuNDktLjg2LTMuOTIgMi4zNTYtLjIyNS0uMzcxIDMuOTMxLTIuMzYydi0xLjcxNmwxLjcwNC0uOTg0IDEuNDE4LjgyMSA0LjE1LTIuNDk3eiIvPgo8L3N2Zz4K) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNYRVBfX2EpIj4KICAgICAgICA8cGF0aCBmaWxsPSJ1cmwoI1hFUF9fYikiIGQ9Ik0yNCAwSDB2MjRoMjR6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTEyLjAwMiAxOS45OTlhOCA4IDAgMCAwIDcuODY0LTkuNDU5bC0xLjg3NSAxLjEuMDEuMzZhNS45OTkgNS45OTkgMCAwIDEtMTAuNzgzIDMuNjI0bDIuMzk1LTEuNDNhMy4yNDggMy4yNDggMCAwIDAgNS4zMDktMy4xNjlsMi42LTEuNTUgMS42NjktLjk3NGE3Ljk5OSA3Ljk5OSAwIDEgMC03LjE4OSAxMS40OThtLTMuNDUtNy42NzRMNi4yNTQgMTMuN2E1Ljk5OSA1Ljk5OSAwIDAgMSA5Ljk3OC01Ljk2bC0yLjQ1IDEuNDY1YTMuMjUgMy4yNSAwIDAgMC01LjIxOCAzLjExNXptOC4zNS0zLjQ5LTMuNjM1IDIuMTl2MS42bC0xLjUxNS44NzUtMS4zMjUtLjc2NS0zLjQ4NCAyLjA5NC0uMi0uMzMgMy40OTUtMi4xdi0xLjUyNEwxMS43NTIgMTBsMS4yNi43MyAzLjY5LTIuMjJ6Ii8+CiAgICA8L2c+CiAgICA8ZGVmcz4KICAgICAgICA8bGluZWFyR3JhZGllbnQgaWQ9IlhFUF9fYiIgeDE9IjEyIiB4Mj0iMTIiIHkxPSI0LjAwMSIgeTI9IjE5Ljk5OCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjMDE3RkVFIi8+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzE3MUI2RSIvPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICAgICAgPGNsaXBQYXRoIGlkPSJYRVBfX2EiPgogICAgICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMCAwaDI0djI0SDB6Ii8+CiAgICAgICAgPC9jbGlwUGF0aD4KICAgIDwvZGVmcz4KPC9zdmc+Cg==)
 * @see https://web3icons.io/tokens/XEP
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenXEP = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenXEP', __iconNode);
;
}),
];

//# sourceMappingURL=1qqr_%40web3icons_react_dist_0-i8uvf._.js.map