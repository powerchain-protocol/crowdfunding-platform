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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenAURORA.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenAURORA
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-ssr] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: 'url(#AURORA__a)',
                d: 'M13.88 5.676a2.1 2.1 0 0 0-3.768 0L4.424 16.46a2.1 2.1 0 0 0 1.884 3.04h11.377a2.1 2.1 0 0 0 1.792-.995 2.1 2.1 0 0 0 .092-2.047zm-4.842-.54a3.3 3.3 0 0 1 5.916 0L20.65 15.92a3.3 3.3 0 0 1-2.965 4.782H6.309a3.312 3.312 0 0 1-2.964-4.782L9.038 5.142z'
            }
        ],
        [
            'defs',
            {},
            [
                [
                    'linearGradient',
                    {
                        id: 'AURORA__a',
                        x1: '17.59',
                        x2: '6.929',
                        y1: '5.195',
                        y2: '19.354',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#95E141'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '.59',
                                stopColor: '#63B836'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#409C2D'
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
                d: 'M13.88 5.676a2.1 2.1 0 0 0-3.768 0L4.424 16.46a2.1 2.1 0 0 0 1.884 3.04h11.377a2.1 2.1 0 0 0 1.792-.995 2.1 2.1 0 0 0 .092-2.047zm-4.842-.54a3.3 3.3 0 0 1 5.916 0L20.65 15.92a3.3 3.3 0 0 1-2.965 4.782H6.309a3.312 3.312 0 0 1-2.964-4.782L9.038 5.142z'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#AURORA__a)'
            },
            [
                [
                    'path',
                    {
                        fill: 'url(#AURORA__b)',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M13.672 6.38a1.867 1.867 0 0 0-3.35 0l-5.056 9.583a1.867 1.867 0 0 0 1.675 2.705h10.112a1.87 1.87 0 0 0 1.871-1.784 1.9 1.9 0 0 0-.196-.92zM9.367 5.9a2.934 2.934 0 0 1 5.26 0l5.06 9.583a2.932 2.932 0 0 1-2.634 4.251H6.94a2.944 2.944 0 0 1-2.635-4.25l5.061-9.58z'
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
                        id: 'AURORA__b',
                        x1: '16.969',
                        x2: '7.493',
                        y1: '5.951',
                        y2: '18.537',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#95E141'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '.59',
                                stopColor: '#63B836'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#409C2D'
                            }
                        ]
                    ]
                ],
                [
                    'clipPath',
                    {
                        id: 'AURORA__a'
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
 * @component @name TokenAURORA
 * @description Web3Icon for TokenAURORA
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9InVybCgjQVVST1JBX19hKSIgZD0iTTEzLjg4IDUuNjc2YTIuMSAyLjEgMCAwIDAtMy43NjggMEw0LjQyNCAxNi40NmEyLjEgMi4xIDAgMCAwIDEuODg0IDMuMDRoMTEuMzc3YTIuMSAyLjEgMCAwIDAgMS43OTItLjk5NSAyLjEgMi4xIDAgMCAwIC4wOTItMi4wNDd6bS00Ljg0Mi0uNTRhMy4zIDMuMyAwIDAgMSA1LjkxNiAwTDIwLjY1IDE1LjkyYTMuMyAzLjMgMCAwIDEtMi45NjUgNC43ODJINi4zMDlhMy4zMTIgMy4zMTIgMCAwIDEtMi45NjQtNC43ODJMOS4wMzggNS4xNDJ6Ii8+CiAgICA8ZGVmcz4KICAgICAgICA8bGluZWFyR3JhZGllbnQgaWQ9IkFVUk9SQV9fYSIgeDE9IjE3LjU5IiB4Mj0iNi45MjkiIHkxPSI1LjE5NSIgeTI9IjE5LjM1NCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjOTVFMTQxIi8+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iLjU5IiBzdG9wLWNvbG9yPSIjNjNCODM2Ii8+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzQwOUMyRCIvPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICA8L2RlZnM+Cjwvc3ZnPgo=) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xMy44OCA1LjY3NmEyLjEgMi4xIDAgMCAwLTMuNzY4IDBMNC40MjQgMTYuNDZhMi4xIDIuMSAwIDAgMCAxLjg4NCAzLjA0aDExLjM3N2EyLjEgMi4xIDAgMCAwIDEuNzkyLS45OTUgMi4xIDIuMSAwIDAgMCAuMDkyLTIuMDQ3em0tNC44NDItLjU0YTMuMyAzLjMgMCAwIDEgNS45MTYgMEwyMC42NSAxNS45MmEzLjMgMy4zIDAgMCAxLTIuOTY1IDQuNzgySDYuMzA5YTMuMzEyIDMuMzEyIDAgMCAxLTIuOTY0LTQuNzgyTDkuMDM4IDUuMTQyeiIvPgo8L3N2Zz4K) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNBVVJPUkFfX2EpIj4KICAgICAgICA8cGF0aCBmaWxsPSJ1cmwoI0FVUk9SQV9fYikiIGQ9Ik0yNCAwSDB2MjRoMjR6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTEzLjY3MiA2LjM4YTEuODY3IDEuODY3IDAgMCAwLTMuMzUgMGwtNS4wNTYgOS41ODNhMS44NjcgMS44NjcgMCAwIDAgMS42NzUgMi43MDVoMTAuMTEyYTEuODcgMS44NyAwIDAgMCAxLjg3MS0xLjc4NCAxLjkgMS45IDAgMCAwLS4xOTYtLjkyek05LjM2NyA1LjlhMi45MzQgMi45MzQgMCAwIDEgNS4yNiAwbDUuMDYgOS41ODNhMi45MzIgMi45MzIgMCAwIDEtMi42MzQgNC4yNTFINi45NGEyLjk0NCAyLjk0NCAwIDAgMS0yLjYzNS00LjI1bDUuMDYxLTkuNTh6Ii8+CiAgICA8L2c+CiAgICA8ZGVmcz4KICAgICAgICA8bGluZWFyR3JhZGllbnQgaWQ9IkFVUk9SQV9fYiIgeDE9IjE2Ljk2OSIgeDI9IjcuNDkzIiB5MT0iNS45NTEiIHkyPSIxOC41MzciIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iIzk1RTE0MSIvPgogICAgICAgICAgICA8c3RvcCBvZmZzZXQ9Ii41OSIgc3RvcC1jb2xvcj0iIzYzQjgzNiIvPgogICAgICAgICAgICA8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiM0MDlDMkQiLz4KICAgICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgICAgIDxjbGlwUGF0aCBpZD0iQVVST1JBX19hIj4KICAgICAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTAgMGgyNHYyNEgweiIvPgogICAgICAgIDwvY2xpcFBhdGg+CiAgICA8L2RlZnM+Cjwvc3ZnPgo=)
 * @see https://web3icons.io/tokens/AURORA
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenAURORA = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenAURORA', __iconNode);
;
}),
];

//# sourceMappingURL=1qqr_%40web3icons_react_dist_10bfict._.js.map