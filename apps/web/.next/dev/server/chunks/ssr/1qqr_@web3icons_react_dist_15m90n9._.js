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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/networks/NetworkPolygonZkevm.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>NetworkPolygonZkevm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-ssr] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: 'url(#polygon-zkevm__a)',
                d: 'm16.364 15.217 4.27-2.435a.73.73 0 0 0 .366-.627V7.284a.72.72 0 0 0-.366-.627l-4.27-2.435a.74.74 0 0 0-.732 0l-4.27 2.435a.72.72 0 0 0-.366.627v8.704l-2.994 1.707-2.994-1.707v-3.415l2.994-1.707 1.974 1.127V9.702l-1.608-.918a.75.75 0 0 0-.732 0l-4.27 2.435a.72.72 0 0 0-.366.627v4.87c0 .258.14.498.366.627l4.27 2.436a.75.75 0 0 0 .732 0l4.27-2.436a.72.72 0 0 0 .366-.626V8.012l.053-.03 2.94-1.677 2.994 1.707v3.415l-2.994 1.707-1.972-1.124v2.291l1.606.916a.75.75 0 0 0 .732 0z'
            }
        ],
        [
            'defs',
            {},
            [
                [
                    'linearGradient',
                    {
                        id: 'polygon-zkevm__a',
                        x1: '2.942',
                        x2: '20.119',
                        y1: '17.194',
                        y2: '7.101',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#A726C1'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '.88',
                                stopColor: '#803BDF'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#7B3FE4'
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
                d: 'm16.364 15.217 4.27-2.435a.73.73 0 0 0 .366-.627V7.284a.72.72 0 0 0-.366-.627l-4.27-2.435a.74.74 0 0 0-.732 0l-4.27 2.435a.72.72 0 0 0-.366.627v8.704l-2.994 1.707-2.994-1.707v-3.415l2.994-1.707 1.974 1.127V9.702l-1.608-.918a.75.75 0 0 0-.732 0l-4.27 2.435a.72.72 0 0 0-.366.627v4.87c0 .258.14.498.366.627l4.27 2.436a.75.75 0 0 0 .732 0l4.27-2.436a.72.72 0 0 0 .366-.626V8.012l.053-.03 2.94-1.677 2.994 1.707v3.415l-2.994 1.707-1.972-1.124v2.291l1.606.916a.75.75 0 0 0 .732 0z'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#polygon-zkevm__a)'
            },
            [
                [
                    'path',
                    {
                        fill: 'url(#polygon-zkevm__b)',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'm15.88 14.86 3.794-2.165a.64.64 0 0 0 .326-.558v-4.33a.64.64 0 0 0-.326-.556L15.88 5.086a.66.66 0 0 0-.65 0L11.432 7.25a.64.64 0 0 0-.325.557v7.737l-2.662 1.517-2.661-1.517v-3.036l2.661-1.517 1.755 1.001V9.958l-1.43-.816a.66.66 0 0 0-.65 0l-3.796 2.165a.64.64 0 0 0-.325.557v4.33c0 .229.124.442.325.557l3.796 2.165c.2.114.45.114.65 0l3.796-2.165a.64.64 0 0 0 .325-.557V8.455l.048-.026 2.613-1.49 2.661 1.516v3.036l-2.661 1.517-1.753-.999v2.037l1.427.814a.66.66 0 0 0 .651 0z'
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
                        id: 'polygon-zkevm__b',
                        x1: '3.948',
                        x2: '19.217',
                        y1: '16.617',
                        y2: '7.645',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#A726C1'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '.88',
                                stopColor: '#803BDF'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#7B3FE4'
                            }
                        ]
                    ]
                ],
                [
                    'clipPath',
                    {
                        id: 'polygon-zkevm__a'
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
 * @component @name NetworkPolygonZkevm
 * @description Web3Icon for NetworkPolygonZkevm
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9InVybCgjcG9seWdvbi16a2V2bV9fYSkiIGQ9Im0xNi4zNjQgMTUuMjE3IDQuMjctMi40MzVhLjczLjczIDAgMCAwIC4zNjYtLjYyN1Y3LjI4NGEuNzIuNzIgMCAwIDAtLjM2Ni0uNjI3bC00LjI3LTIuNDM1YS43NC43NCAwIDAgMC0uNzMyIDBsLTQuMjcgMi40MzVhLjcyLjcyIDAgMCAwLS4zNjYuNjI3djguNzA0bC0yLjk5NCAxLjcwNy0yLjk5NC0xLjcwN3YtMy40MTVsMi45OTQtMS43MDcgMS45NzQgMS4xMjdWOS43MDJsLTEuNjA4LS45MThhLjc1Ljc1IDAgMCAwLS43MzIgMGwtNC4yNyAyLjQzNWEuNzIuNzIgMCAwIDAtLjM2Ni42Mjd2NC44N2MwIC4yNTguMTQuNDk4LjM2Ni42MjdsNC4yNyAyLjQzNmEuNzUuNzUgMCAwIDAgLjczMiAwbDQuMjctMi40MzZhLjcyLjcyIDAgMCAwIC4zNjYtLjYyNlY4LjAxMmwuMDUzLS4wMyAyLjk0LTEuNjc3IDIuOTk0IDEuNzA3djMuNDE1bC0yLjk5NCAxLjcwNy0xLjk3Mi0xLjEyNHYyLjI5MWwxLjYwNi45MTZhLjc1Ljc1IDAgMCAwIC43MzIgMHoiLz4KICAgIDxkZWZzPgogICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD0icG9seWdvbi16a2V2bV9fYSIgeDE9IjIuOTQyIiB4Mj0iMjAuMTE5IiB5MT0iMTcuMTk0IiB5Mj0iNy4xMDEiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iI0E3MjZDMSIvPgogICAgICAgICAgICA8c3RvcCBvZmZzZXQ9Ii44OCIgc3RvcC1jb2xvcj0iIzgwM0JERiIvPgogICAgICAgICAgICA8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiM3QjNGRTQiLz4KICAgICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgPC9kZWZzPgo8L3N2Zz4K) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Im0xNi4zNjQgMTUuMjE3IDQuMjctMi40MzVhLjczLjczIDAgMCAwIC4zNjYtLjYyN1Y3LjI4NGEuNzIuNzIgMCAwIDAtLjM2Ni0uNjI3bC00LjI3LTIuNDM1YS43NC43NCAwIDAgMC0uNzMyIDBsLTQuMjcgMi40MzVhLjcyLjcyIDAgMCAwLS4zNjYuNjI3djguNzA0bC0yLjk5NCAxLjcwNy0yLjk5NC0xLjcwN3YtMy40MTVsMi45OTQtMS43MDcgMS45NzQgMS4xMjdWOS43MDJsLTEuNjA4LS45MThhLjc1Ljc1IDAgMCAwLS43MzIgMGwtNC4yNyAyLjQzNWEuNzIuNzIgMCAwIDAtLjM2Ni42Mjd2NC44N2MwIC4yNTguMTQuNDk4LjM2Ni42MjdsNC4yNyAyLjQzNmEuNzUuNzUgMCAwIDAgLjczMiAwbDQuMjctMi40MzZhLjcyLjcyIDAgMCAwIC4zNjYtLjYyNlY4LjAxMmwuMDUzLS4wMyAyLjk0LTEuNjc3IDIuOTk0IDEuNzA3djMuNDE1bC0yLjk5NCAxLjcwNy0xLjk3Mi0xLjEyNHYyLjI5MWwxLjYwNi45MTZhLjc1Ljc1IDAgMCAwIC43MzIgMHoiLz4KPC9zdmc+Cg==) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNwb2x5Z29uLXprZXZtX19hKSI+CiAgICAgICAgPHBhdGggZmlsbD0idXJsKCNwb2x5Z29uLXprZXZtX19iKSIgZD0iTTI0IDBIMHYyNGgyNHoiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJtMTUuODggMTQuODYgMy43OTQtMi4xNjVhLjY0LjY0IDAgMCAwIC4zMjYtLjU1OHYtNC4zM2EuNjQuNjQgMCAwIDAtLjMyNi0uNTU2TDE1Ljg4IDUuMDg2YS42Ni42NiAwIDAgMC0uNjUgMEwxMS40MzIgNy4yNWEuNjQuNjQgMCAwIDAtLjMyNS41NTd2Ny43MzdsLTIuNjYyIDEuNTE3LTIuNjYxLTEuNTE3di0zLjAzNmwyLjY2MS0xLjUxNyAxLjc1NSAxLjAwMVY5Ljk1OGwtMS40My0uODE2YS42Ni42NiAwIDAgMC0uNjUgMGwtMy43OTYgMi4xNjVhLjY0LjY0IDAgMCAwLS4zMjUuNTU3djQuMzNjMCAuMjI5LjEyNC40NDIuMzI1LjU1N2wzLjc5NiAyLjE2NWMuMi4xMTQuNDUuMTE0LjY1IDBsMy43OTYtMi4xNjVhLjY0LjY0IDAgMCAwIC4zMjUtLjU1N1Y4LjQ1NWwuMDQ4LS4wMjYgMi42MTMtMS40OSAyLjY2MSAxLjUxNnYzLjAzNmwtMi42NjEgMS41MTctMS43NTMtLjk5OXYyLjAzN2wxLjQyNy44MTRhLjY2LjY2IDAgMCAwIC42NTEgMHoiLz4KICAgIDwvZz4KICAgIDxkZWZzPgogICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD0icG9seWdvbi16a2V2bV9fYiIgeDE9IjMuOTQ4IiB4Mj0iMTkuMjE3IiB5MT0iMTYuNjE3IiB5Mj0iNy42NDUiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iI0E3MjZDMSIvPgogICAgICAgICAgICA8c3RvcCBvZmZzZXQ9Ii44OCIgc3RvcC1jb2xvcj0iIzgwM0JERiIvPgogICAgICAgICAgICA8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiM3QjNGRTQiLz4KICAgICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgICAgIDxjbGlwUGF0aCBpZD0icG9seWdvbi16a2V2bV9fYSI+CiAgICAgICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0wIDBoMjR2MjRIMHoiLz4KICAgICAgICA8L2NsaXBQYXRoPgogICAgPC9kZWZzPgo8L3N2Zz4K)
 * @see https://web3icons.io/networks/polygon-zkevm
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const NetworkPolygonZkevm = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createWeb3Icon"])('NetworkPolygonZkevm', __iconNode);
;
}),
];

//# sourceMappingURL=1qqr_%40web3icons_react_dist_15m90n9._.js.map