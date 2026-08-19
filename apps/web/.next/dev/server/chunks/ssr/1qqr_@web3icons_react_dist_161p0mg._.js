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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenPOP.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenPOP
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-ssr] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: 'url(#POP__a)',
                d: 'M6.15 13.8h12.6V8.4H21v7.2H6.15zm-.9 1.8H3V8.4h14.85v1.8H5.25zm12.6-2.7v-1.8H6.15v1.8z'
            }
        ],
        [
            'defs',
            {},
            [
                [
                    'linearGradient',
                    {
                        id: 'POP__a',
                        x1: '12.45',
                        x2: '9.75',
                        y1: '7.5',
                        y2: '15.6',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#00BAC9'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '.12',
                                stopColor: '#2060B2'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '.18',
                                stopColor: '#7046B2'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '.24',
                                stopColor: '#CC83A1'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '.3',
                                stopColor: '#663FA9'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '.37',
                                stopColor: '#3557B8'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '.45',
                                stopColor: '#8851B7'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '.56',
                                stopColor: '#E096AC'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '.75',
                                stopColor: '#7443B7'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '.91',
                                stopColor: '#8F48A9'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#C379AD'
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
                d: 'M6.15 13.8h12.6V8.4H21v7.2H6.15zm-.9 1.8H3V8.4h14.85v1.8H5.25zm12.6-2.7v-1.8H6.15v1.8z'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#POP__a)'
            },
            [
                [
                    'path',
                    {
                        fill: 'url(#POP__b)',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M6.8 13.6H18V8.8h2v6.4H6.8zM6 15.2H4V8.8h13.2v1.6H6zm11.2-2.4v-1.6H6.8v1.6z'
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
                        id: 'POP__b',
                        x1: '12.4',
                        x2: '10',
                        y1: '8',
                        y2: '15.2',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#00BAC9'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '.12',
                                stopColor: '#2060B2'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '.18',
                                stopColor: '#7046B2'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '.24',
                                stopColor: '#CC83A1'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '.3',
                                stopColor: '#663FA9'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '.37',
                                stopColor: '#3557B8'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '.45',
                                stopColor: '#8851B7'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '.56',
                                stopColor: '#E096AC'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '.75',
                                stopColor: '#7443B7'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '.91',
                                stopColor: '#8F48A9'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#C379AD'
                            }
                        ]
                    ]
                ],
                [
                    'clipPath',
                    {
                        id: 'POP__a'
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
 * @component @name TokenPOP
 * @description Web3Icon for TokenPOP
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9InVybCgjUE9QX19hKSIgZD0iTTYuMTUgMTMuOGgxMi42VjguNEgyMXY3LjJINi4xNXptLS45IDEuOEgzVjguNGgxNC44NXYxLjhINS4yNXptMTIuNi0yLjd2LTEuOEg2LjE1djEuOHoiLz4KICAgIDxkZWZzPgogICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iUE9QX19hIiB4MT0iMTIuNDUiIHgyPSI5Ljc1IiB5MT0iNy41IiB5Mj0iMTUuNiIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjMDBCQUM5Ii8+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iLjEyIiBzdG9wLWNvbG9yPSIjMjA2MEIyIi8+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iLjE4IiBzdG9wLWNvbG9yPSIjNzA0NkIyIi8+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iLjI0IiBzdG9wLWNvbG9yPSIjQ0M4M0ExIi8+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iLjMiIHN0b3AtY29sb3I9IiM2NjNGQTkiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIuMzciIHN0b3AtY29sb3I9IiMzNTU3QjgiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIuNDUiIHN0b3AtY29sb3I9IiM4ODUxQjciLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIuNTYiIHN0b3AtY29sb3I9IiNFMDk2QUMiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIuNzUiIHN0b3AtY29sb3I9IiM3NDQzQjciLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIuOTEiIHN0b3AtY29sb3I9IiM4RjQ4QTkiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjQzM3OUFEIi8+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgIDwvZGVmcz4KPC9zdmc+Cg==) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik02LjE1IDEzLjhoMTIuNlY4LjRIMjF2Ny4ySDYuMTV6bS0uOSAxLjhIM1Y4LjRoMTQuODV2MS44SDUuMjV6bTEyLjYtMi43di0xLjhINi4xNXYxLjh6Ii8+Cjwvc3ZnPgo=) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNQT1BfX2EpIj4KICAgICAgICA8cGF0aCBmaWxsPSJ1cmwoI1BPUF9fYikiIGQ9Ik0yNCAwSDB2MjRoMjR6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTYuOCAxMy42SDE4VjguOGgydjYuNEg2Ljh6TTYgMTUuMkg0VjguOGgxMy4ydjEuNkg2em0xMS4yLTIuNHYtMS42SDYuOHYxLjZ6Ii8+CiAgICA8L2c+CiAgICA8ZGVmcz4KICAgICAgICA8bGluZWFyR3JhZGllbnQgaWQ9IlBPUF9fYiIgeDE9IjEyLjQiIHgyPSIxMCIgeTE9IjgiIHkyPSIxNS4yIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiMwMEJBQzkiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIuMTIiIHN0b3AtY29sb3I9IiMyMDYwQjIiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIuMTgiIHN0b3AtY29sb3I9IiM3MDQ2QjIiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIuMjQiIHN0b3AtY29sb3I9IiNDQzgzQTEiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIuMyIgc3RvcC1jb2xvcj0iIzY2M0ZBOSIvPgogICAgICAgICAgICA8c3RvcCBvZmZzZXQ9Ii4zNyIgc3RvcC1jb2xvcj0iIzM1NTdCOCIvPgogICAgICAgICAgICA8c3RvcCBvZmZzZXQ9Ii40NSIgc3RvcC1jb2xvcj0iIzg4NTFCNyIvPgogICAgICAgICAgICA8c3RvcCBvZmZzZXQ9Ii41NiIgc3RvcC1jb2xvcj0iI0UwOTZBQyIvPgogICAgICAgICAgICA8c3RvcCBvZmZzZXQ9Ii43NSIgc3RvcC1jb2xvcj0iIzc0NDNCNyIvPgogICAgICAgICAgICA8c3RvcCBvZmZzZXQ9Ii45MSIgc3RvcC1jb2xvcj0iIzhGNDhBOSIvPgogICAgICAgICAgICA8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNDMzc5QUQiLz4KICAgICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgICAgIDxjbGlwUGF0aCBpZD0iUE9QX19hIj4KICAgICAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTAgMGgyNHYyNEgweiIvPgogICAgICAgIDwvY2xpcFBhdGg+CiAgICA8L2RlZnM+Cjwvc3ZnPgo=)
 * @see https://web3icons.io/tokens/POP
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenPOP = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenPOP', __iconNode);
;
}),
];

//# sourceMappingURL=1qqr_%40web3icons_react_dist_161p0mg._.js.map