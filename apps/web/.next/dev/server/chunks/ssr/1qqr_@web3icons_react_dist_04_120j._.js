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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/wallets/WalletVenly.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>WalletVenly
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-ssr] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: 'url(#venly__a)',
                d: 'm20.825 9.206-2.208.818c-.093.033-.183-.055-.143-.146l2.46-5.826a.11.11 0 0 0-.14-.145l-4.677 1.597a.33.33 0 0 0-.2.187l-3.17 7.801c-.039.099.06.198.16.162l1.98-.708c.11-.038.212.077.153.178l-2.91 4.816a.165.165 0 0 1-.28 0l-2.909-4.818c-.06-.1.04-.217.152-.179l1.98.708c.101.036.2-.063.16-.162L8.062 5.691a.33.33 0 0 0-.2-.187L3.19 3.907c-.092-.03-.177.058-.14.145l2.458 5.826c.036.088-.054.178-.144.146l-2.193-.818c-.113-.041-.214.077-.152.178l6.53 10.549a.36.36 0 0 0 .307.167h4.28a.36.36 0 0 0 .307-.167l6.542-10.549c.054-.101-.047-.22-.16-.178'
            }
        ],
        [
            'defs',
            {},
            [
                [
                    'linearGradient',
                    {
                        id: 'venly__a',
                        x1: '10.265',
                        x2: '21.947',
                        y1: '3.9',
                        y2: '7.16',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#7735E8'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#C62CF1'
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
                d: 'm20.825 9.206-2.208.818c-.093.033-.183-.055-.143-.146l2.46-5.826a.11.11 0 0 0-.14-.145l-4.677 1.597a.33.33 0 0 0-.2.187l-3.17 7.801c-.039.099.06.198.16.162l1.98-.708c.11-.038.212.077.153.178l-2.91 4.816a.165.165 0 0 1-.28 0l-2.909-4.818c-.06-.1.04-.217.152-.179l1.98.708c.101.036.2-.063.16-.162L8.062 5.691a.33.33 0 0 0-.2-.187L3.19 3.907c-.092-.03-.177.058-.14.145l2.458 5.826c.036.088-.054.178-.144.146l-2.193-.818c-.113-.041-.214.077-.152.178l6.53 10.549a.36.36 0 0 0 .307.167h4.28a.36.36 0 0 0 .307-.167l6.542-10.549c.054-.101-.047-.22-.16-.178'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#venly__a)'
            },
            [
                [
                    'path',
                    {
                        fill: 'url(#venly__b)',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'm19.844 9.516-1.962.727c-.083.03-.163-.049-.128-.13l2.188-5.178a.098.098 0 0 0-.125-.129l-4.158 1.42a.3.3 0 0 0-.177.166l-2.818 6.934c-.035.088.053.176.143.144l1.76-.63c.097-.033.187.07.135.16l-2.585 4.28a.147.147 0 0 1-.25 0l-2.585-4.283c-.053-.088.035-.193.135-.159l1.76.63c.09.031.177-.056.142-.144L8.5 6.392a.3.3 0 0 0-.177-.166L4.17 4.806a.099.099 0 0 0-.125.13l2.185 5.178c.033.078-.047.159-.127.13l-1.95-.728c-.1-.036-.19.069-.135.159l5.805 9.376c.057.093.16.149.272.149H13.9c.11 0 .215-.056.273-.149l5.815-9.376c.047-.09-.043-.195-.143-.159'
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
                        id: 'venly__b',
                        x1: '10.457',
                        x2: '20.842',
                        y1: '4.8',
                        y2: '7.697',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#7735E8'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#C62CF1'
                            }
                        ]
                    ]
                ],
                [
                    'clipPath',
                    {
                        id: 'venly__a'
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
 * @component @name WalletVenly
 * @description Web3Icon for WalletVenly
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9InVybCgjdmVubHlfX2EpIiBkPSJtMjAuODI1IDkuMjA2LTIuMjA4LjgxOGMtLjA5My4wMzMtLjE4My0uMDU1LS4xNDMtLjE0NmwyLjQ2LTUuODI2YS4xMS4xMSAwIDAgMC0uMTQtLjE0NWwtNC42NzcgMS41OTdhLjMzLjMzIDAgMCAwLS4yLjE4N2wtMy4xNyA3LjgwMWMtLjAzOS4wOTkuMDYuMTk4LjE2LjE2MmwxLjk4LS43MDhjLjExLS4wMzguMjEyLjA3Ny4xNTMuMTc4bC0yLjkxIDQuODE2YS4xNjUuMTY1IDAgMCAxLS4yOCAwbC0yLjkwOS00LjgxOGMtLjA2LS4xLjA0LS4yMTcuMTUyLS4xNzlsMS45OC43MDhjLjEwMS4wMzYuMi0uMDYzLjE2LS4xNjJMOC4wNjIgNS42OTFhLjMzLjMzIDAgMCAwLS4yLS4xODdMMy4xOSAzLjkwN2MtLjA5Mi0uMDMtLjE3Ny4wNTgtLjE0LjE0NWwyLjQ1OCA1LjgyNmMuMDM2LjA4OC0uMDU0LjE3OC0uMTQ0LjE0NmwtMi4xOTMtLjgxOGMtLjExMy0uMDQxLS4yMTQuMDc3LS4xNTIuMTc4bDYuNTMgMTAuNTQ5YS4zNi4zNiAwIDAgMCAuMzA3LjE2N2g0LjI4YS4zNi4zNiAwIDAgMCAuMzA3LS4xNjdsNi41NDItMTAuNTQ5Yy4wNTQtLjEwMS0uMDQ3LS4yMi0uMTYtLjE3OCIvPgogICAgPGRlZnM+CiAgICAgICAgPGxpbmVhckdyYWRpZW50IGlkPSJ2ZW5seV9fYSIgeDE9IjEwLjI2NSIgeDI9IjIxLjk0NyIgeTE9IjMuOSIgeTI9IjcuMTYiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iIzc3MzVFOCIvPgogICAgICAgICAgICA8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNDNjJDRjEiLz4KICAgICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgPC9kZWZzPgo8L3N2Zz4K) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Im0yMC44MjUgOS4yMDYtMi4yMDguODE4Yy0uMDkzLjAzMy0uMTgzLS4wNTUtLjE0My0uMTQ2bDIuNDYtNS44MjZhLjExLjExIDAgMCAwLS4xNC0uMTQ1bC00LjY3NyAxLjU5N2EuMzMuMzMgMCAwIDAtLjIuMTg3bC0zLjE3IDcuODAxYy0uMDM5LjA5OS4wNi4xOTguMTYuMTYybDEuOTgtLjcwOGMuMTEtLjAzOC4yMTIuMDc3LjE1My4xNzhsLTIuOTEgNC44MTZhLjE2NS4xNjUgMCAwIDEtLjI4IDBsLTIuOTA5LTQuODE4Yy0uMDYtLjEuMDQtLjIxNy4xNTItLjE3OWwxLjk4LjcwOGMuMTAxLjAzNi4yLS4wNjMuMTYtLjE2Mkw4LjA2MiA1LjY5MWEuMzMuMzMgMCAwIDAtLjItLjE4N0wzLjE5IDMuOTA3Yy0uMDkyLS4wMy0uMTc3LjA1OC0uMTQuMTQ1bDIuNDU4IDUuODI2Yy4wMzYuMDg4LS4wNTQuMTc4LS4xNDQuMTQ2bC0yLjE5My0uODE4Yy0uMTEzLS4wNDEtLjIxNC4wNzctLjE1Mi4xNzhsNi41MyAxMC41NDlhLjM2LjM2IDAgMCAwIC4zMDcuMTY3aDQuMjhhLjM2LjM2IDAgMCAwIC4zMDctLjE2N2w2LjU0Mi0xMC41NDljLjA1NC0uMTAxLS4wNDctLjIyLS4xNi0uMTc4Ii8+Cjwvc3ZnPgo=) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCN2ZW5seV9fYSkiPgogICAgICAgIDxwYXRoIGZpbGw9InVybCgjdmVubHlfX2IpIiBkPSJNMjQgMEgwdjI0aDI0eiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Im0xOS44NDQgOS41MTYtMS45NjIuNzI3Yy0uMDgzLjAzLS4xNjMtLjA0OS0uMTI4LS4xM2wyLjE4OC01LjE3OGEuMDk4LjA5OCAwIDAgMC0uMTI1LS4xMjlsLTQuMTU4IDEuNDJhLjMuMyAwIDAgMC0uMTc3LjE2NmwtMi44MTggNi45MzRjLS4wMzUuMDg4LjA1My4xNzYuMTQzLjE0NGwxLjc2LS42M2MuMDk3LS4wMzMuMTg3LjA3LjEzNS4xNmwtMi41ODUgNC4yOGEuMTQ3LjE0NyAwIDAgMS0uMjUgMGwtMi41ODUtNC4yODNjLS4wNTMtLjA4OC4wMzUtLjE5My4xMzUtLjE1OWwxLjc2LjYzYy4wOS4wMzEuMTc3LS4wNTYuMTQyLS4xNDRMOC41IDYuMzkyYS4zLjMgMCAwIDAtLjE3Ny0uMTY2TDQuMTcgNC44MDZhLjA5OS4wOTkgMCAwIDAtLjEyNS4xM2wyLjE4NSA1LjE3OGMuMDMzLjA3OC0uMDQ3LjE1OS0uMTI3LjEzbC0xLjk1LS43MjhjLS4xLS4wMzYtLjE5LjA2OS0uMTM1LjE1OWw1LjgwNSA5LjM3NmMuMDU3LjA5My4xNi4xNDkuMjcyLjE0OUgxMy45Yy4xMSAwIC4yMTUtLjA1Ni4yNzMtLjE0OWw1LjgxNS05LjM3NmMuMDQ3LS4wOS0uMDQzLS4xOTUtLjE0My0uMTU5Ii8+CiAgICA8L2c+CiAgICA8ZGVmcz4KICAgICAgICA8bGluZWFyR3JhZGllbnQgaWQ9InZlbmx5X19iIiB4MT0iMTAuNDU3IiB4Mj0iMjAuODQyIiB5MT0iNC44IiB5Mj0iNy42OTciIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iIzc3MzVFOCIvPgogICAgICAgICAgICA8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNDNjJDRjEiLz4KICAgICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgICAgIDxjbGlwUGF0aCBpZD0idmVubHlfX2EiPgogICAgICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMCAwaDI0djI0SDB6Ii8+CiAgICAgICAgPC9jbGlwUGF0aD4KICAgIDwvZGVmcz4KPC9zdmc+Cg==)
 * @see https://web3icons.io/wallets/venly
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const WalletVenly = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createWeb3Icon"])('WalletVenly', __iconNode);
;
}),
];

//# sourceMappingURL=1qqr_%40web3icons_react_dist_04_120j._.js.map