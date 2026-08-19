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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenPIB.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenPIB
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-ssr] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: 'url(#PIB__a)',
                d: 'M5 10.232V7.045l3.574-2.033 2.755 1.582zM11.75 3 9 4.681l6.5 3.69V5.132zM16 12.82V5.399l3 1.64V11.2zm2.999 2.067v-3.194l-6.3 3.639 2.734 1.658zM8.5 16.777v-3.219L15 17.27 12.25 19zM5 19.364v-6.708L8 11v10zm5-9.686L12 8.5l2 1.178v2.555L12 13.5l-2-1.267z'
            }
        ],
        [
            'defs',
            {},
            [
                [
                    'linearGradient',
                    {
                        id: 'PIB__a',
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
                                stopColor: '#8CB69D'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '.191',
                                stopColor: '#A2C98A'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '.386',
                                stopColor: '#C1A879'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '.579',
                                stopColor: '#DF6B83'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '.8',
                                stopColor: '#6E7CB4'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#7270AF'
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
                d: 'M5 10.232V7.045l3.574-2.033 2.755 1.582zM11.75 3 9 4.681l6.5 3.69V5.132zM16 12.82V5.399l3 1.64V11.2zm2.999 2.067v-3.194l-6.3 3.639 2.734 1.658zM8.5 16.777v-3.219L15 17.27 12.25 19zM5 19.364v-6.708L8 11v10zm5-9.686L12 8.5l2 1.178v2.555L12 13.5l-2-1.267z'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#PIB__a)'
            },
            [
                [
                    'path',
                    {
                        fill: 'url(#PIB__b)',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M5.778 10.428V7.596l3.177-1.808 2.449 1.406zm6-6.428L9.333 5.494l5.778 3.28V5.895zm3.778 8.729V6.132l2.666 1.458v3.7zm2.665 1.837v-2.84l-5.6 3.235 2.43 1.474zm-9.332 1.68v-2.861l5.778 3.298-2.445 1.54zm-3.111 2.3v-5.962l2.667-1.473V20zm4.444-8.61L12 8.89l1.778 1.047v2.271L12 13.333l-1.778-1.125z'
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
                        id: 'PIB__b',
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
                                stopColor: '#8CB69D'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '.191',
                                stopColor: '#A2C98A'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '.386',
                                stopColor: '#C1A879'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '.579',
                                stopColor: '#DF6B83'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '.8',
                                stopColor: '#6E7CB4'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#7270AF'
                            }
                        ]
                    ]
                ],
                [
                    'clipPath',
                    {
                        id: 'PIB__a'
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
 * @component @name TokenPIB
 * @description Web3Icon for TokenPIB
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9InVybCgjUElCX19hKSIgZD0iTTUgMTAuMjMyVjcuMDQ1bDMuNTc0LTIuMDMzIDIuNzU1IDEuNTgyek0xMS43NSAzIDkgNC42ODFsNi41IDMuNjlWNS4xMzJ6TTE2IDEyLjgyVjUuMzk5bDMgMS42NFYxMS4yem0yLjk5OSAyLjA2N3YtMy4xOTRsLTYuMyAzLjYzOSAyLjczNCAxLjY1OHpNOC41IDE2Ljc3N3YtMy4yMTlMMTUgMTcuMjcgMTIuMjUgMTl6TTUgMTkuMzY0di02LjcwOEw4IDExdjEwem01LTkuNjg2TDEyIDguNWwyIDEuMTc4djIuNTU1TDEyIDEzLjVsLTItMS4yNjd6Ii8+CiAgICA8ZGVmcz4KICAgICAgICA8bGluZWFyR3JhZGllbnQgaWQ9IlBJQl9fYSIgeDE9IjEyIiB4Mj0iMTIiIHkxPSIzIiB5Mj0iMjEiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iIzhDQjY5RCIvPgogICAgICAgICAgICA8c3RvcCBvZmZzZXQ9Ii4xOTEiIHN0b3AtY29sb3I9IiNBMkM5OEEiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIuMzg2IiBzdG9wLWNvbG9yPSIjQzFBODc5Ii8+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iLjU3OSIgc3RvcC1jb2xvcj0iI0RGNkI4MyIvPgogICAgICAgICAgICA8c3RvcCBvZmZzZXQ9Ii44IiBzdG9wLWNvbG9yPSIjNkU3Q0I0Ii8+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzcyNzBBRiIvPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICA8L2RlZnM+Cjwvc3ZnPgo=) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik01IDEwLjIzMlY3LjA0NWwzLjU3NC0yLjAzMyAyLjc1NSAxLjU4MnpNMTEuNzUgMyA5IDQuNjgxbDYuNSAzLjY5VjUuMTMyek0xNiAxMi44MlY1LjM5OWwzIDEuNjRWMTEuMnptMi45OTkgMi4wNjd2LTMuMTk0bC02LjMgMy42MzkgMi43MzQgMS42NTh6TTguNSAxNi43Nzd2LTMuMjE5TDE1IDE3LjI3IDEyLjI1IDE5ek01IDE5LjM2NHYtNi43MDhMOCAxMXYxMHptNS05LjY4NkwxMiA4LjVsMiAxLjE3OHYyLjU1NUwxMiAxMy41bC0yLTEuMjY3eiIvPgo8L3N2Zz4K) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNQSUJfX2EpIj4KICAgICAgICA8cGF0aCBmaWxsPSJ1cmwoI1BJQl9fYikiIGQ9Ik0yNCAwSDB2MjRoMjR6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTUuNzc4IDEwLjQyOFY3LjU5NmwzLjE3Ny0xLjgwOCAyLjQ0OSAxLjQwNnptNi02LjQyOEw5LjMzMyA1LjQ5NGw1Ljc3OCAzLjI4VjUuODk1em0zLjc3OCA4LjcyOVY2LjEzMmwyLjY2NiAxLjQ1OHYzLjd6bTIuNjY1IDEuODM3di0yLjg0bC01LjYgMy4yMzUgMi40MyAxLjQ3NHptLTkuMzMyIDEuNjh2LTIuODYxbDUuNzc4IDMuMjk4LTIuNDQ1IDEuNTR6bS0zLjExMSAyLjN2LTUuOTYybDIuNjY3LTEuNDczVjIwem00LjQ0NC04LjYxTDEyIDguODlsMS43NzggMS4wNDd2Mi4yNzFMMTIgMTMuMzMzbC0xLjc3OC0xLjEyNXoiLz4KICAgIDwvZz4KICAgIDxkZWZzPgogICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iUElCX19iIiB4MT0iMTIiIHgyPSIxMiIgeTE9IjQiIHkyPSIyMCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjOENCNjlEIi8+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iLjE5MSIgc3RvcC1jb2xvcj0iI0EyQzk4QSIvPgogICAgICAgICAgICA8c3RvcCBvZmZzZXQ9Ii4zODYiIHN0b3AtY29sb3I9IiNDMUE4NzkiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIuNTc5IiBzdG9wLWNvbG9yPSIjREY2QjgzIi8+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iLjgiIHN0b3AtY29sb3I9IiM2RTdDQjQiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjNzI3MEFGIi8+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgICAgICA8Y2xpcFBhdGggaWQ9IlBJQl9fYSI+CiAgICAgICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0wIDBoMjR2MjRIMHoiLz4KICAgICAgICA8L2NsaXBQYXRoPgogICAgPC9kZWZzPgo8L3N2Zz4K)
 * @see https://web3icons.io/tokens/PIB
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenPIB = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenPIB', __iconNode);
;
}),
];

//# sourceMappingURL=1qqr_%40web3icons_react_dist_05b_ccm._.js.map