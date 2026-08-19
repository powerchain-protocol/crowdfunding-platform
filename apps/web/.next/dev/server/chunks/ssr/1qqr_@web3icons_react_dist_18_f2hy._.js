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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenIDEX.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenIDEX
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-ssr] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: 'url(#IDEX__a)',
                d: 'M4.954 3h14.014L21 5.59l-4.976 6.462L21 18.467 18.994 21H4.954L3 18.467l4.944-6.415L3 5.59zm.052.894L17.863 20.35H5.109l-.978-1.273h9.586c.128 0 .205-.154.128-.257L3.624 5.623l1.388-1.736zm4.963 10.748 1.986 2.5H8.921a.465.465 0 0 1-.465-.513.46.46 0 0 1 .098-.238zm5.689-3.08-1.684-2.114 1.44-1.8c.25-.302.032-.79-.367-.79h-3.066l-.264-.387c-.129-.205.013-.257.257-.257h8.049l-4.371 5.349z',
                fillRule: 'evenodd',
                clipRule: 'evenodd'
            }
        ],
        [
            'defs',
            {},
            [
                [
                    'linearGradient',
                    {
                        id: 'IDEX__a',
                        x1: '6.034',
                        x2: '18.731',
                        y1: '21',
                        y2: '5.128',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#9722AD'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '.78',
                                stopColor: '#592E9C'
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
                d: 'M4.954 3h14.014L21 5.59l-4.976 6.462L21 18.467 18.994 21H4.954L3 18.467l4.944-6.415L3 5.59zm.052.894L17.863 20.35H5.109l-.978-1.273h9.586c.128 0 .205-.154.128-.257L3.624 5.623l1.388-1.736zm4.963 10.748 1.986 2.5H8.921a.465.465 0 0 1-.465-.513.46.46 0 0 1 .098-.238zm5.689-3.08-1.684-2.114 1.44-1.8c.25-.302.032-.79-.367-.79h-3.066l-.264-.387c-.129-.205.013-.257.257-.257h8.049l-4.371 5.349z',
                fillRule: 'evenodd',
                clipRule: 'evenodd'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#IDEX__a)'
            },
            [
                [
                    'path',
                    {
                        fill: 'url(#IDEX__b)',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M5.737 4h12.457L20 6.303l-4.423 5.743L20 17.749 18.217 20H5.737L4 17.749l4.394-5.703L4 6.303zm.046.794L17.21 19.423H5.874l-.868-1.132h8.52c.114 0 .183-.137.114-.228L4.554 6.33 5.79 4.79zm4.411 9.555 1.766 2.222H9.263a.413.413 0 0 1-.414-.456.4.4 0 0 1 .088-.212zm5.057-2.738-1.497-1.88 1.28-1.6c.223-.268.029-.702-.325-.702h-2.726l-.234-.343c-.115-.183.011-.229.228-.229h7.154l-3.885 4.754z',
                        fillRule: 'evenodd',
                        clipRule: 'evenodd'
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
                        id: 'IDEX__b',
                        x1: '6.697',
                        x2: '17.983',
                        y1: '20',
                        y2: '5.891',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#9722AD'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '.78',
                                stopColor: '#592E9C'
                            }
                        ]
                    ]
                ],
                [
                    'clipPath',
                    {
                        id: 'IDEX__a'
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
 * @component @name TokenIDEX
 * @description Web3Icon for TokenIDEX
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9InVybCgjSURFWF9fYSkiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTQuOTU0IDNoMTQuMDE0TDIxIDUuNTlsLTQuOTc2IDYuNDYyTDIxIDE4LjQ2NyAxOC45OTQgMjFINC45NTRMMyAxOC40NjdsNC45NDQtNi40MTVMMyA1LjU5em0uMDUyLjg5NEwxNy44NjMgMjAuMzVINS4xMDlsLS45NzgtMS4yNzNoOS41ODZjLjEyOCAwIC4yMDUtLjE1NC4xMjgtLjI1N0wzLjYyNCA1LjYyM2wxLjM4OC0xLjczNnptNC45NjMgMTAuNzQ4IDEuOTg2IDIuNUg4LjkyMWEuNDY1LjQ2NSAwIDAgMS0uNDY1LS41MTMuNDYuNDYgMCAwIDEgLjA5OC0uMjM4em01LjY4OS0zLjA4LTEuNjg0LTIuMTE0IDEuNDQtMS44Yy4yNS0uMzAyLjAzMi0uNzktLjM2Ny0uNzloLTMuMDY2bC0uMjY0LS4zODdjLS4xMjktLjIwNS4wMTMtLjI1Ny4yNTctLjI1N2g4LjA0OWwtNC4zNzEgNS4zNDl6IiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KICAgIDxkZWZzPgogICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iSURFWF9fYSIgeDE9IjYuMDM0IiB4Mj0iMTguNzMxIiB5MT0iMjEiIHkyPSI1LjEyOCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjOTcyMkFEIi8+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iLjc4IiBzdG9wLWNvbG9yPSIjNTkyRTlDIi8+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgIDwvZGVmcz4KPC9zdmc+Cg==) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTQuOTU0IDNoMTQuMDE0TDIxIDUuNTlsLTQuOTc2IDYuNDYyTDIxIDE4LjQ2NyAxOC45OTQgMjFINC45NTRMMyAxOC40NjdsNC45NDQtNi40MTVMMyA1LjU5em0uMDUyLjg5NEwxNy44NjMgMjAuMzVINS4xMDlsLS45NzgtMS4yNzNoOS41ODZjLjEyOCAwIC4yMDUtLjE1NC4xMjgtLjI1N0wzLjYyNCA1LjYyM2wxLjM4OC0xLjczNnptNC45NjMgMTAuNzQ4IDEuOTg2IDIuNUg4LjkyMWEuNDY1LjQ2NSAwIDAgMS0uNDY1LS41MTMuNDYuNDYgMCAwIDEgLjA5OC0uMjM4em01LjY4OS0zLjA4LTEuNjg0LTIuMTE0IDEuNDQtMS44Yy4yNS0uMzAyLjAzMi0uNzktLjM2Ny0uNzloLTMuMDY2bC0uMjY0LS4zODdjLS4xMjktLjIwNS4wMTMtLjI1Ny4yNTctLjI1N2g4LjA0OWwtNC4zNzEgNS4zNDl6IiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+Cg==) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNJREVYX19hKSI+CiAgICAgICAgPHBhdGggZmlsbD0idXJsKCNJREVYX19iKSIgZD0iTTI0IDBIMHYyNGgyNHoiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik01LjczNyA0aDEyLjQ1N0wyMCA2LjMwM2wtNC40MjMgNS43NDNMMjAgMTcuNzQ5IDE4LjIxNyAyMEg1LjczN0w0IDE3Ljc0OWw0LjM5NC01LjcwM0w0IDYuMzAzem0uMDQ2Ljc5NEwxNy4yMSAxOS40MjNINS44NzRsLS44NjgtMS4xMzJoOC41MmMuMTE0IDAgLjE4My0uMTM3LjExNC0uMjI4TDQuNTU0IDYuMzMgNS43OSA0Ljc5em00LjQxMSA5LjU1NSAxLjc2NiAyLjIyMkg5LjI2M2EuNDEzLjQxMyAwIDAgMS0uNDE0LS40NTYuNC40IDAgMCAxIC4wODgtLjIxMnptNS4wNTctMi43MzgtMS40OTctMS44OCAxLjI4LTEuNmMuMjIzLS4yNjguMDI5LS43MDItLjMyNS0uNzAyaC0yLjcyNmwtLjIzNC0uMzQzYy0uMTE1LS4xODMuMDExLS4yMjkuMjI4LS4yMjloNy4xNTRsLTMuODg1IDQuNzU0eiIgY2xpcC1ydWxlPSJldmVub2RkIi8+CiAgICA8L2c+CiAgICA8ZGVmcz4KICAgICAgICA8bGluZWFyR3JhZGllbnQgaWQ9IklERVhfX2IiIHgxPSI2LjY5NyIgeDI9IjE3Ljk4MyIgeTE9IjIwIiB5Mj0iNS44OTEiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iIzk3MjJBRCIvPgogICAgICAgICAgICA8c3RvcCBvZmZzZXQ9Ii43OCIgc3RvcC1jb2xvcj0iIzU5MkU5QyIvPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICAgICAgPGNsaXBQYXRoIGlkPSJJREVYX19hIj4KICAgICAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTAgMGgyNHYyNEgweiIvPgogICAgICAgIDwvY2xpcFBhdGg+CiAgICA8L2RlZnM+Cjwvc3ZnPgo=)
 * @see https://web3icons.io/tokens/IDEX
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenIDEX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenIDEX', __iconNode);
;
}),
];

//# sourceMappingURL=1qqr_%40web3icons_react_dist_18_f2hy._.js.map