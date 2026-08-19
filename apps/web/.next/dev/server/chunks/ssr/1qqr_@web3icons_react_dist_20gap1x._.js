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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/wallets/WalletGlow.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>WalletGlow
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-ssr] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: 'url(#glow__a)',
                d: 'M18.312 18.416A8.97 8.97 0 0 1 12 21a8.97 8.97 0 0 1-6.3-2.574c3.685-2.903 8.923-2.906 12.612-.01m.104-.104A8.97 8.97 0 0 0 21 12a8.97 8.97 0 0 0-2.572-6.3c-2.905 3.697-2.908 8.923-.012 12.612m-.09-12.714c-3.695 2.91-8.95 2.906-12.64-.011A8.97 8.97 0 0 1 12 3c2.465 0 4.7.992 6.325 2.598m-12.74.087A8.97 8.97 0 0 0 3 12c0 2.466.992 4.7 2.598 6.325 2.91-3.694 2.906-8.948-.011-12.64'
            }
        ],
        [
            'defs',
            {},
            [
                [
                    'linearGradient',
                    {
                        id: 'glow__a',
                        x1: '3.009',
                        x2: '20.985',
                        y1: '2.964',
                        y2: '21.009',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#6F03FB'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#EC5EFF'
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
                d: 'M18.312 18.416A8.97 8.97 0 0 1 12 21a8.97 8.97 0 0 1-6.3-2.574c3.685-2.903 8.923-2.906 12.612-.01m.104-.104A8.97 8.97 0 0 0 21 12a8.97 8.97 0 0 0-2.572-6.3c-2.905 3.697-2.908 8.923-.012 12.612m-.09-12.714c-3.695 2.91-8.95 2.906-12.64-.011A8.97 8.97 0 0 1 12 3c2.465 0 4.7.992 6.325 2.598m-12.74.087A8.97 8.97 0 0 0 3 12c0 2.466.992 4.7 2.598 6.325 2.91-3.694 2.906-8.948-.011-12.64'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#glow__a)'
            },
            [
                [
                    'path',
                    {
                        fill: 'url(#glow__b)',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M17.61 17.703A7.98 7.98 0 0 1 12 20a7.97 7.97 0 0 1-5.6-2.288 9.095 9.095 0 0 1 11.21-.01m.093-.092A7.98 7.98 0 0 0 20 12c0-2.18-.872-4.156-2.286-5.6-2.582 3.286-2.585 7.932-.011 11.21m-.08-11.302a9.095 9.095 0 0 1-11.236-.01A7.97 7.97 0 0 1 12 4a7.98 7.98 0 0 1 5.623 2.309m-11.324.078A7.97 7.97 0 0 0 4 12c0 2.192.882 4.178 2.309 5.623a9.095 9.095 0 0 0-.01-11.236'
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
                        id: 'glow__b',
                        x1: '.012',
                        x2: '23.98',
                        y1: '-.048',
                        y2: '24.011',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#6F03FB'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#EC5EFF'
                            }
                        ]
                    ]
                ],
                [
                    'clipPath',
                    {
                        id: 'glow__a'
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
 * @component @name WalletGlow
 * @description Web3Icon for WalletGlow
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9InVybCgjZ2xvd19fYSkiIGQ9Ik0xOC4zMTIgMTguNDE2QTguOTcgOC45NyAwIDAgMSAxMiAyMWE4Ljk3IDguOTcgMCAwIDEtNi4zLTIuNTc0YzMuNjg1LTIuOTAzIDguOTIzLTIuOTA2IDEyLjYxMi0uMDFtLjEwNC0uMTA0QTguOTcgOC45NyAwIDAgMCAyMSAxMmE4Ljk3IDguOTcgMCAwIDAtMi41NzItNi4zYy0yLjkwNSAzLjY5Ny0yLjkwOCA4LjkyMy0uMDEyIDEyLjYxMm0tLjA5LTEyLjcxNGMtMy42OTUgMi45MS04Ljk1IDIuOTA2LTEyLjY0LS4wMTFBOC45NyA4Ljk3IDAgMCAxIDEyIDNjMi40NjUgMCA0LjcuOTkyIDYuMzI1IDIuNTk4bS0xMi43NC4wODdBOC45NyA4Ljk3IDAgMCAwIDMgMTJjMCAyLjQ2Ni45OTIgNC43IDIuNTk4IDYuMzI1IDIuOTEtMy42OTQgMi45MDYtOC45NDgtLjAxMS0xMi42NCIvPgogICAgPGRlZnM+CiAgICAgICAgPGxpbmVhckdyYWRpZW50IGlkPSJnbG93X19hIiB4MT0iMy4wMDkiIHgyPSIyMC45ODUiIHkxPSIyLjk2NCIgeTI9IjIxLjAwOSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjNkYwM0ZCIi8+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI0VDNUVGRiIvPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICA8L2RlZnM+Cjwvc3ZnPgo=) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xOC4zMTIgMTguNDE2QTguOTcgOC45NyAwIDAgMSAxMiAyMWE4Ljk3IDguOTcgMCAwIDEtNi4zLTIuNTc0YzMuNjg1LTIuOTAzIDguOTIzLTIuOTA2IDEyLjYxMi0uMDFtLjEwNC0uMTA0QTguOTcgOC45NyAwIDAgMCAyMSAxMmE4Ljk3IDguOTcgMCAwIDAtMi41NzItNi4zYy0yLjkwNSAzLjY5Ny0yLjkwOCA4LjkyMy0uMDEyIDEyLjYxMm0tLjA5LTEyLjcxNGMtMy42OTUgMi45MS04Ljk1IDIuOTA2LTEyLjY0LS4wMTFBOC45NyA4Ljk3IDAgMCAxIDEyIDNjMi40NjUgMCA0LjcuOTkyIDYuMzI1IDIuNTk4bS0xMi43NC4wODdBOC45NyA4Ljk3IDAgMCAwIDMgMTJjMCAyLjQ2Ni45OTIgNC43IDIuNTk4IDYuMzI1IDIuOTEtMy42OTQgMi45MDYtOC45NDgtLjAxMS0xMi42NCIvPgo8L3N2Zz4K) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNnbG93X19hKSI+CiAgICAgICAgPHBhdGggZmlsbD0idXJsKCNnbG93X19iKSIgZD0iTTI0IDBIMHYyNGgyNHoiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTcuNjEgMTcuNzAzQTcuOTggNy45OCAwIDAgMSAxMiAyMGE3Ljk3IDcuOTcgMCAwIDEtNS42LTIuMjg4IDkuMDk1IDkuMDk1IDAgMCAxIDExLjIxLS4wMW0uMDkzLS4wOTJBNy45OCA3Ljk4IDAgMCAwIDIwIDEyYzAtMi4xOC0uODcyLTQuMTU2LTIuMjg2LTUuNi0yLjU4MiAzLjI4Ni0yLjU4NSA3LjkzMi0uMDExIDExLjIxbS0uMDgtMTEuMzAyYTkuMDk1IDkuMDk1IDAgMCAxLTExLjIzNi0uMDFBNy45NyA3Ljk3IDAgMCAxIDEyIDRhNy45OCA3Ljk4IDAgMCAxIDUuNjIzIDIuMzA5bS0xMS4zMjQuMDc4QTcuOTcgNy45NyAwIDAgMCA0IDEyYzAgMi4xOTIuODgyIDQuMTc4IDIuMzA5IDUuNjIzYTkuMDk1IDkuMDk1IDAgMCAwLS4wMS0xMS4yMzYiLz4KICAgIDwvZz4KICAgIDxkZWZzPgogICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iZ2xvd19fYiIgeDE9Ii4wMTIiIHgyPSIyMy45OCIgeTE9Ii0uMDQ4IiB5Mj0iMjQuMDExIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiM2RjAzRkIiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjRUM1RUZGIi8+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgICAgICA8Y2xpcFBhdGggaWQ9Imdsb3dfX2EiPgogICAgICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMCAwaDI0djI0SDB6Ii8+CiAgICAgICAgPC9jbGlwUGF0aD4KICAgIDwvZGVmcz4KPC9zdmc+Cg==)
 * @see https://web3icons.io/wallets/glow
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const WalletGlow = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createWeb3Icon"])('WalletGlow', __iconNode);
;
}),
];

//# sourceMappingURL=1qqr_%40web3icons_react_dist_20gap1x._.js.map