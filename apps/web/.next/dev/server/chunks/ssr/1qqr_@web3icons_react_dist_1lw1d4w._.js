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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenSOURCE.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenSOURCE
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-ssr] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: 'url(#SOURCE__a)',
                d: 'M11.87 11.539c-.81-.715-2.43-2.38-2.43-3.308 0-1.159 1.216-1.856 3.123-1.856.708 0 1.237.568 1.957 1.339l.495.517c.99 1.018 1.277 1.153 2.076 1.153.798 0 1.659-.298 1.659-2.278C18.75 5.115 15.662 3 11.87 3 8.086 3 5.25 6.037 5.25 8.062c0 2.037 2.812 4.04 6.62 3.477m.26.922c.81.715 2.43 2.38 2.43 3.308 0 1.158-2.127 1.687-2.982 1.687s-1.603-.675-2.593-1.687c-.99-1.018-1.277-1.153-2.076-1.153-.798 0-1.659.298-1.659 2.278 0 1.99 3.088 4.106 6.88 4.106 3.785 0 6.62-3.038 6.62-5.063 0-2.036-2.812-4.038-6.62-3.476'
            }
        ],
        [
            'defs',
            {},
            [
                [
                    'linearGradient',
                    {
                        id: 'SOURCE__a',
                        x1: '12',
                        x2: '12',
                        y1: '3',
                        y2: '21',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#ED69FF'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#7B61F4'
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
                d: 'M11.87 11.539c-.81-.715-2.43-2.38-2.43-3.308 0-1.159 1.216-1.856 3.123-1.856.708 0 1.237.568 1.957 1.339l.495.517c.99 1.018 1.277 1.153 2.076 1.153.798 0 1.659-.298 1.659-2.278C18.75 5.115 15.662 3 11.87 3 8.086 3 5.25 6.037 5.25 8.062c0 2.037 2.812 4.04 6.62 3.477m.26.922c.81.715 2.43 2.38 2.43 3.308 0 1.158-2.127 1.687-2.982 1.687s-1.603-.675-2.593-1.687c-.99-1.018-1.277-1.153-2.076-1.153-.798 0-1.659.298-1.659 2.278 0 1.99 3.088 4.106 6.88 4.106 3.785 0 6.62-3.038 6.62-5.063 0-2.036-2.812-4.038-6.62-3.476'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#SOURCE__a)'
            },
            [
                [
                    'path',
                    {
                        fill: 'url(#SOURCE__b)',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M11.885 11.59c-.72-.635-2.16-2.115-2.16-2.94C9.725 7.62 10.805 7 12.5 7c.63 0 1.1.505 1.74 1.19l.44.46c.88.905 1.135 1.025 1.845 1.025S18 9.41 18 7.65C18 5.88 15.255 4 11.885 4 8.52 4 6 6.7 6 8.5c0 1.81 2.5 3.59 5.885 3.09m.23.82c.72.635 2.16 2.115 2.16 2.94 0 1.03-1.89 1.5-2.65 1.5s-1.425-.6-2.305-1.5c-.88-.905-1.135-1.025-1.845-1.025S6 14.59 6 16.35C6 18.12 8.745 20 12.115 20 15.48 20 18 17.3 18 15.5c0-1.81-2.5-3.59-5.885-3.09'
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
                        id: 'SOURCE__b',
                        x1: '12',
                        x2: '12',
                        y1: '4',
                        y2: '20',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#ED69FF'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#7B61F4'
                            }
                        ]
                    ]
                ],
                [
                    'clipPath',
                    {
                        id: 'SOURCE__a'
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
 * @component @name TokenSOURCE
 * @description Web3Icon for TokenSOURCE
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9InVybCgjU09VUkNFX19hKSIgZD0iTTExLjg3IDExLjUzOWMtLjgxLS43MTUtMi40My0yLjM4LTIuNDMtMy4zMDggMC0xLjE1OSAxLjIxNi0xLjg1NiAzLjEyMy0xLjg1Ni43MDggMCAxLjIzNy41NjggMS45NTcgMS4zMzlsLjQ5NS41MTdjLjk5IDEuMDE4IDEuMjc3IDEuMTUzIDIuMDc2IDEuMTUzLjc5OCAwIDEuNjU5LS4yOTggMS42NTktMi4yNzhDMTguNzUgNS4xMTUgMTUuNjYyIDMgMTEuODcgMyA4LjA4NiAzIDUuMjUgNi4wMzcgNS4yNSA4LjA2MmMwIDIuMDM3IDIuODEyIDQuMDQgNi42MiAzLjQ3N20uMjYuOTIyYy44MS43MTUgMi40MyAyLjM4IDIuNDMgMy4zMDggMCAxLjE1OC0yLjEyNyAxLjY4Ny0yLjk4MiAxLjY4N3MtMS42MDMtLjY3NS0yLjU5My0xLjY4N2MtLjk5LTEuMDE4LTEuMjc3LTEuMTUzLTIuMDc2LTEuMTUzLS43OTggMC0xLjY1OS4yOTgtMS42NTkgMi4yNzggMCAxLjk5IDMuMDg4IDQuMTA2IDYuODggNC4xMDYgMy43ODUgMCA2LjYyLTMuMDM4IDYuNjItNS4wNjMgMC0yLjAzNi0yLjgxMi00LjAzOC02LjYyLTMuNDc2Ii8+CiAgICA8ZGVmcz4KICAgICAgICA8bGluZWFyR3JhZGllbnQgaWQ9IlNPVVJDRV9fYSIgeDE9IjEyIiB4Mj0iMTIiIHkxPSIzIiB5Mj0iMjEiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iI0VENjlGRiIvPgogICAgICAgICAgICA8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiM3QjYxRjQiLz4KICAgICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgPC9kZWZzPgo8L3N2Zz4K) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xMS44NyAxMS41MzljLS44MS0uNzE1LTIuNDMtMi4zOC0yLjQzLTMuMzA4IDAtMS4xNTkgMS4yMTYtMS44NTYgMy4xMjMtMS44NTYuNzA4IDAgMS4yMzcuNTY4IDEuOTU3IDEuMzM5bC40OTUuNTE3Yy45OSAxLjAxOCAxLjI3NyAxLjE1MyAyLjA3NiAxLjE1My43OTggMCAxLjY1OS0uMjk4IDEuNjU5LTIuMjc4QzE4Ljc1IDUuMTE1IDE1LjY2MiAzIDExLjg3IDMgOC4wODYgMyA1LjI1IDYuMDM3IDUuMjUgOC4wNjJjMCAyLjAzNyAyLjgxMiA0LjA0IDYuNjIgMy40NzdtLjI2LjkyMmMuODEuNzE1IDIuNDMgMi4zOCAyLjQzIDMuMzA4IDAgMS4xNTgtMi4xMjcgMS42ODctMi45ODIgMS42ODdzLTEuNjAzLS42NzUtMi41OTMtMS42ODdjLS45OS0xLjAxOC0xLjI3Ny0xLjE1My0yLjA3Ni0xLjE1My0uNzk4IDAtMS42NTkuMjk4LTEuNjU5IDIuMjc4IDAgMS45OSAzLjA4OCA0LjEwNiA2Ljg4IDQuMTA2IDMuNzg1IDAgNi42Mi0zLjAzOCA2LjYyLTUuMDYzIDAtMi4wMzYtMi44MTItNC4wMzgtNi42Mi0zLjQ3NiIvPgo8L3N2Zz4K) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNTT1VSQ0VfX2EpIj4KICAgICAgICA8cGF0aCBmaWxsPSJ1cmwoI1NPVVJDRV9fYikiIGQ9Ik0yNCAwSDB2MjRoMjR6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTExLjg4NSAxMS41OWMtLjcyLS42MzUtMi4xNi0yLjExNS0yLjE2LTIuOTRDOS43MjUgNy42MiAxMC44MDUgNyAxMi41IDdjLjYzIDAgMS4xLjUwNSAxLjc0IDEuMTlsLjQ0LjQ2Yy44OC45MDUgMS4xMzUgMS4wMjUgMS44NDUgMS4wMjVTMTggOS40MSAxOCA3LjY1QzE4IDUuODggMTUuMjU1IDQgMTEuODg1IDQgOC41MiA0IDYgNi43IDYgOC41YzAgMS44MSAyLjUgMy41OSA1Ljg4NSAzLjA5bS4yMy44MmMuNzIuNjM1IDIuMTYgMi4xMTUgMi4xNiAyLjk0IDAgMS4wMy0xLjg5IDEuNS0yLjY1IDEuNXMtMS40MjUtLjYtMi4zMDUtMS41Yy0uODgtLjkwNS0xLjEzNS0xLjAyNS0xLjg0NS0xLjAyNVM2IDE0LjU5IDYgMTYuMzVDNiAxOC4xMiA4Ljc0NSAyMCAxMi4xMTUgMjAgMTUuNDggMjAgMTggMTcuMyAxOCAxNS41YzAtMS44MS0yLjUtMy41OS01Ljg4NS0zLjA5Ii8+CiAgICA8L2c+CiAgICA8ZGVmcz4KICAgICAgICA8bGluZWFyR3JhZGllbnQgaWQ9IlNPVVJDRV9fYiIgeDE9IjEyIiB4Mj0iMTIiIHkxPSI0IiB5Mj0iMjAiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iI0VENjlGRiIvPgogICAgICAgICAgICA8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiM3QjYxRjQiLz4KICAgICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgICAgIDxjbGlwUGF0aCBpZD0iU09VUkNFX19hIj4KICAgICAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTAgMGgyNHYyNEgweiIvPgogICAgICAgIDwvY2xpcFBhdGg+CiAgICA8L2RlZnM+Cjwvc3ZnPgo=)
 * @see https://web3icons.io/tokens/SOURCE
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenSOURCE = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenSOURCE', __iconNode);
;
}),
];

//# sourceMappingURL=1qqr_%40web3icons_react_dist_1lw1d4w._.js.map