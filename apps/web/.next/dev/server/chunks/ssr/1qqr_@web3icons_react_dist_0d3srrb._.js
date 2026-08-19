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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenDCK.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenDCK
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-ssr] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: 'url(#DCK__a)',
                d: 'm17.714 8.176-.018.005-8.66 8.836a1.247 1.247 0 0 1-1.787.01L3.44 13.17c-.932-.935-.28-2.52 1.02-2.52h2.192c.382 0 .751.15 1.03.42l2.025 1.947-1.035 1.125-2.025-1.917H4.59l3.55 3.528 8.494-8.693a1.5 1.5 0 0 1 1.08-.459h1.647c1.462 0 2.191 1.818 1.147 2.875l-7.45 7.528a1.32 1.32 0 0 1-1.899-.018l-.509-.527 1.08-1.084.387.405 7.334-7.38c.081-.08.023-.225-.09-.225H17.71z'
            }
        ],
        [
            'defs',
            {},
            [
                [
                    'linearGradient',
                    {
                        id: 'DCK__a',
                        x1: '20.985',
                        x2: '3.002',
                        y1: '8.244',
                        y2: '8.244',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#097CB8'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#8ADECF'
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
                d: 'm17.714 8.176-.018.005-8.66 8.836a1.246 1.246 0 0 1-1.787.01L3.44 13.17c-.932-.935-.28-2.52 1.02-2.52h2.192c.382 0 .751.15 1.03.42l2.025 1.947-1.035 1.125-2.025-1.917H4.59l3.55 3.528 8.494-8.693a1.5 1.5 0 0 1 1.08-.459h1.647c1.462 0 2.191 1.818 1.147 2.875l-7.45 7.528a1.32 1.32 0 0 1-1.899-.018l-.509-.527 1.08-1.084.387.405 7.334-7.38c.081-.08.023-.225-.09-.225H17.71z'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#DCK__a)'
            },
            [
                [
                    'path',
                    {
                        fill: 'url(#DCK__b)',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'm17.08 8.601-.017.004-7.698 7.855a1.11 1.11 0 0 1-1.588.008L4.39 13.04c-.828-.831-.248-2.24.907-2.24h1.948c.34 0 .668.133.916.373l1.8 1.731-.92 1-1.8-1.704H5.413l3.156 3.136 7.55-7.727a1.34 1.34 0 0 1 .96-.408h1.464c1.3 0 1.948 1.616 1.02 2.556l-6.623 6.69a1.176 1.176 0 0 1-1.688-.015l-.452-.468.96-.964.344.36 6.52-6.559c.071-.072.02-.2-.08-.2h-1.469z'
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
                        id: 'DCK__b',
                        x1: '19.987',
                        x2: '4.002',
                        y1: '8.661',
                        y2: '8.661',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#097CB8'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#8ADECF'
                            }
                        ]
                    ]
                ],
                [
                    'clipPath',
                    {
                        id: 'DCK__a'
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
 * @component @name TokenDCK
 * @description Web3Icon for TokenDCK
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9InVybCgjRENLX19hKSIgZD0ibTE3LjcxNCA4LjE3Ni0uMDE4LjAwNS04LjY2IDguODM2YTEuMjQ3IDEuMjQ3IDAgMCAxLTEuNzg3LjAxTDMuNDQgMTMuMTdjLS45MzItLjkzNS0uMjgtMi41MiAxLjAyLTIuNTJoMi4xOTJjLjM4MiAwIC43NTEuMTUgMS4wMy40MmwyLjAyNSAxLjk0Ny0xLjAzNSAxLjEyNS0yLjAyNS0xLjkxN0g0LjU5bDMuNTUgMy41MjggOC40OTQtOC42OTNhMS41IDEuNSAwIDAgMSAxLjA4LS40NTloMS42NDdjMS40NjIgMCAyLjE5MSAxLjgxOCAxLjE0NyAyLjg3NWwtNy40NSA3LjUyOGExLjMyIDEuMzIgMCAwIDEtMS44OTktLjAxOGwtLjUwOS0uNTI3IDEuMDgtMS4wODQuMzg3LjQwNSA3LjMzNC03LjM4Yy4wODEtLjA4LjAyMy0uMjI1LS4wOS0uMjI1SDE3LjcxeiIvPgogICAgPGRlZnM+CiAgICAgICAgPGxpbmVhckdyYWRpZW50IGlkPSJEQ0tfX2EiIHgxPSIyMC45ODUiIHgyPSIzLjAwMiIgeTE9IjguMjQ0IiB5Mj0iOC4yNDQiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iIzA5N0NCOCIvPgogICAgICAgICAgICA8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiM4QURFQ0YiLz4KICAgICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgPC9kZWZzPgo8L3N2Zz4K) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Im0xNy43MTQgOC4xNzYtLjAxOC4wMDUtOC42NiA4LjgzNmExLjI0NiAxLjI0NiAwIDAgMS0xLjc4Ny4wMUwzLjQ0IDEzLjE3Yy0uOTMyLS45MzUtLjI4LTIuNTIgMS4wMi0yLjUyaDIuMTkyYy4zODIgMCAuNzUxLjE1IDEuMDMuNDJsMi4wMjUgMS45NDctMS4wMzUgMS4xMjUtMi4wMjUtMS45MTdINC41OWwzLjU1IDMuNTI4IDguNDk0LTguNjkzYTEuNSAxLjUgMCAwIDEgMS4wOC0uNDU5aDEuNjQ3YzEuNDYyIDAgMi4xOTEgMS44MTggMS4xNDcgMi44NzVsLTcuNDUgNy41MjhhMS4zMiAxLjMyIDAgMCAxLTEuODk5LS4wMThsLS41MDktLjUyNyAxLjA4LTEuMDg0LjM4Ny40MDUgNy4zMzQtNy4zOGMuMDgxLS4wOC4wMjMtLjIyNS0uMDktLjIyNUgxNy43MXoiLz4KPC9zdmc+Cg==) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNEQ0tfX2EpIj4KICAgICAgICA8cGF0aCBmaWxsPSJ1cmwoI0RDS19fYikiIGQ9Ik0yNCAwSDB2MjRoMjR6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0ibTE3LjA4IDguNjAxLS4wMTcuMDA0LTcuNjk4IDcuODU1YTEuMTEgMS4xMSAwIDAgMS0xLjU4OC4wMDhMNC4zOSAxMy4wNGMtLjgyOC0uODMxLS4yNDgtMi4yNC45MDctMi4yNGgxLjk0OGMuMzQgMCAuNjY4LjEzMy45MTYuMzczbDEuOCAxLjczMS0uOTIgMS0xLjgtMS43MDRINS40MTNsMy4xNTYgMy4xMzYgNy41NS03LjcyN2ExLjM0IDEuMzQgMCAwIDEgLjk2LS40MDhoMS40NjRjMS4zIDAgMS45NDggMS42MTYgMS4wMiAyLjU1NmwtNi42MjMgNi42OWExLjE3NiAxLjE3NiAwIDAgMS0xLjY4OC0uMDE1bC0uNDUyLS40NjguOTYtLjk2NC4zNDQuMzYgNi41Mi02LjU1OWMuMDcxLS4wNzIuMDItLjItLjA4LS4yaC0xLjQ2OXoiLz4KICAgIDwvZz4KICAgIDxkZWZzPgogICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iRENLX19iIiB4MT0iMTkuOTg3IiB4Mj0iNC4wMDIiIHkxPSI4LjY2MSIgeTI9IjguNjYxIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiMwOTdDQjgiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjOEFERUNGIi8+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgICAgICA8Y2xpcFBhdGggaWQ9IkRDS19fYSI+CiAgICAgICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0wIDBoMjR2MjRIMHoiLz4KICAgICAgICA8L2NsaXBQYXRoPgogICAgPC9kZWZzPgo8L3N2Zz4K)
 * @see https://web3icons.io/tokens/DCK
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenDCK = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenDCK', __iconNode);
;
}),
];

//# sourceMappingURL=1qqr_%40web3icons_react_dist_0d3srrb._.js.map