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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenPOLYX.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenPOLYX
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-ssr] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: 'url(#POLYX__a)',
                d: 'M12.969 12c1.038 0 2.207-.44 2.207-1.588 0-1.107-1.122-1.589-2.207-1.589H9.882V7.765h3.25c1.706 0 3.103.863 3.103 2.647s-1.466 2.647-3.102 2.647H10.94v3.706H9.882V12z'
            }
        ],
        [
            'path',
            {
                fill: 'url(#POLYX__b)',
                d: 'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18m0-1.059a7.942 7.942 0 1 0 0-15.883 7.942 7.942 0 0 0 0 15.883',
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
                        id: 'POLYX__a',
                        x1: '108.825',
                        x2: '108.773',
                        y1: '2.651',
                        y2: '37.348',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#FF2E72'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '.93',
                                stopColor: '#4A125E'
                            }
                        ]
                    ]
                ],
                [
                    'linearGradient',
                    {
                        id: 'POLYX__b',
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
                                stopColor: '#FF2E72'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#631661'
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
                d: 'M12.969 12c1.038 0 2.207-.44 2.207-1.588 0-1.107-1.122-1.589-2.207-1.589H9.882V7.765h3.25c1.706 0 3.103.863 3.103 2.647s-1.466 2.647-3.102 2.647H10.94v3.706H9.882V12z'
            }
        ],
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M12 21a9 9 0 1 0 0-17.999A9 9 0 0 0 12 21m0-1.059a7.942 7.942 0 1 0 0-15.883 7.942 7.942 0 0 0 0 15.883',
                fillRule: 'evenodd',
                clipRule: 'evenodd'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#POLYX__a)'
            },
            [
                [
                    'path',
                    {
                        fill: 'url(#POLYX__b)',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M12.861 12c.923 0 1.962-.39 1.962-1.412 0-.983-.997-1.411-1.962-1.411h-2.743v-.942h2.89c1.514 0 2.757.767 2.757 2.353s-1.304 2.353-2.758 2.353H11.06v3.294h-.941V12z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16m0-.941a7.06 7.06 0 1 0 0-14.12 7.06 7.06 0 0 0 0 14.12',
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
                        id: 'POLYX__b',
                        x1: '98.066',
                        x2: '98.02',
                        y1: '3.69',
                        y2: '34.532',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#FF2E72'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '.93',
                                stopColor: '#4A125E'
                            }
                        ]
                    ]
                ],
                [
                    'clipPath',
                    {
                        id: 'POLYX__a'
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
 * @component @name TokenPOLYX
 * @description Web3Icon for TokenPOLYX
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9InVybCgjUE9MWVhfX2EpIiBkPSJNMTIuOTY5IDEyYzEuMDM4IDAgMi4yMDctLjQ0IDIuMjA3LTEuNTg4IDAtMS4xMDctMS4xMjItMS41ODktMi4yMDctMS41ODlIOS44ODJWNy43NjVoMy4yNWMxLjcwNiAwIDMuMTAzLjg2MyAzLjEwMyAyLjY0N3MtMS40NjYgMi42NDctMy4xMDIgMi42NDdIMTAuOTR2My43MDZIOS44ODJWMTJ6Ii8+CiAgICA8cGF0aCBmaWxsPSJ1cmwoI1BPTFlYX19iKSIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTIgMjFhOSA5IDAgMSAwIDAtMTggOSA5IDAgMCAwIDAgMThtMC0xLjA1OWE3Ljk0MiA3Ljk0MiAwIDEgMCAwLTE1Ljg4MyA3Ljk0MiA3Ljk0MiAwIDAgMCAwIDE1Ljg4MyIgY2xpcC1ydWxlPSJldmVub2RkIi8+CiAgICA8ZGVmcz4KICAgICAgICA8bGluZWFyR3JhZGllbnQgaWQ9IlBPTFlYX19hIiB4MT0iMTA4LjgyNSIgeDI9IjEwOC43NzMiIHkxPSIyLjY1MSIgeTI9IjM3LjM0OCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjRkYyRTcyIi8+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iLjkzIiBzdG9wLWNvbG9yPSIjNEExMjVFIi8+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgICAgICA8bGluZWFyR3JhZGllbnQgaWQ9IlBPTFlYX19iIiB4MT0iMTIiIHgyPSIxMiIgeTE9IjMiIHkyPSIyMSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjRkYyRTcyIi8+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzYzMTY2MSIvPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICA8L2RlZnM+Cjwvc3ZnPgo=) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xMi45NjkgMTJjMS4wMzggMCAyLjIwNy0uNDQgMi4yMDctMS41ODggMC0xLjEwNy0xLjEyMi0xLjU4OS0yLjIwNy0xLjU4OUg5Ljg4MlY3Ljc2NWgzLjI1YzEuNzA2IDAgMy4xMDMuODYzIDMuMTAzIDIuNjQ3cy0xLjQ2NiAyLjY0Ny0zLjEwMiAyLjY0N0gxMC45NHYzLjcwNkg5Ljg4MlYxMnoiLz4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTEyIDIxYTkgOSAwIDEgMCAwLTE3Ljk5OUE5IDkgMCAwIDAgMTIgMjFtMC0xLjA1OWE3Ljk0MiA3Ljk0MiAwIDEgMCAwLTE1Ljg4MyA3Ljk0MiA3Ljk0MiAwIDAgMCAwIDE1Ljg4MyIgY2xpcC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo=) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNQT0xZWF9fYSkiPgogICAgICAgIDxwYXRoIGZpbGw9InVybCgjUE9MWVhfX2IpIiBkPSJNMjQgMEgwdjI0aDI0eiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xMi44NjEgMTJjLjkyMyAwIDEuOTYyLS4zOSAxLjk2Mi0xLjQxMiAwLS45ODMtLjk5Ny0xLjQxMS0xLjk2Mi0xLjQxMWgtMi43NDN2LS45NDJoMi44OWMxLjUxNCAwIDIuNzU3Ljc2NyAyLjc1NyAyLjM1M3MtMS4zMDQgMi4zNTMtMi43NTggMi4zNTNIMTEuMDZ2My4yOTRoLS45NDFWMTJ6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTIgMjBhOCA4IDAgMSAwIDAtMTYgOCA4IDAgMCAwIDAgMTZtMC0uOTQxYTcuMDYgNy4wNiAwIDEgMCAwLTE0LjEyIDcuMDYgNy4wNiAwIDAgMCAwIDE0LjEyIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KICAgIDwvZz4KICAgIDxkZWZzPgogICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iUE9MWVhfX2IiIHgxPSI5OC4wNjYiIHgyPSI5OC4wMiIgeTE9IjMuNjkiIHkyPSIzNC41MzIiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iI0ZGMkU3MiIvPgogICAgICAgICAgICA8c3RvcCBvZmZzZXQ9Ii45MyIgc3RvcC1jb2xvcj0iIzRBMTI1RSIvPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICAgICAgPGNsaXBQYXRoIGlkPSJQT0xZWF9fYSI+CiAgICAgICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0wIDBoMjR2MjRIMHoiLz4KICAgICAgICA8L2NsaXBQYXRoPgogICAgPC9kZWZzPgo8L3N2Zz4K)
 * @see https://web3icons.io/tokens/POLYX
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenPOLYX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenPOLYX', __iconNode);
;
}),
];

//# sourceMappingURL=1qqr_%40web3icons_react_dist_055b88x._.js.map