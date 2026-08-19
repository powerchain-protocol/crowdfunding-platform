(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createWeb3Icon",
    ()=>createWeb3Icon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$types$2b$node$40$24$2e$13$2e$3_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.1_@types+node@24.13.3_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$BaseIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/BaseIcon.js [app-client] (ecmascript)");
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
    const Component = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$types$2b$node$40$24$2e$13$2e$3_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(({ variant = defaultVariant, fallback, ...props }, ref)=>{
        const iconData = variants[variant];
        if (!iconData) {
            console.warn(`Icon "${name}" does not have variant "${variant}". ` + `Available variants: ${availableVariants.join(', ')}`);
            return null;
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$types$2b$node$40$24$2e$13$2e$3_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$BaseIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseIcon"], {
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
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$types$2b$node$40$24$2e$13$2e$3_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(element, elementProps, childElements);
    });
}
;
}),
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenMC.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenMC
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-client] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: 'url(#MC__a)',
                d: 'M12 3c4.961 0 9 4.039 9 9s-4.039 9-9 9-9-4.039-9-9 4.039-9 9-9m0 12.937c-1.125-1-1.687-2.306-1.687-3.937S10.875 9.064 12 8.062c1.125 1.002 1.687 2.307 1.687 3.938s-.562 2.908-1.687 3.937',
                fillRule: 'evenodd',
                clipRule: 'evenodd'
            }
        ],
        [
            'path',
            {
                fill: 'url(#MC__b)',
                d: 'M3.254 14.153c.034.056 2.008 3.527 5.231 3.47 1.052-.016 2.216-.702 3.516-1.687 1.125-1.001 1.687-2.306 1.687-3.937 0-1.632-.562-2.937-1.687-3.938 0 0 1.811-1.727 3.937-1.687 1.665.028 3.544 1.12 4.939 4.123a9.013 9.013 0 0 1-8.876 10.48 8.96 8.96 0 0 1-8.747-6.824'
            }
        ],
        [
            'defs',
            {},
            [
                [
                    'linearGradient',
                    {
                        id: 'MC__a',
                        x1: '12',
                        x2: '12',
                        y1: '3',
                        y2: '17.906',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#F4C251'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '.89',
                                stopColor: '#E47236'
                            }
                        ]
                    ]
                ],
                [
                    'linearGradient',
                    {
                        id: 'MC__b',
                        x1: '12.125',
                        x2: '12.125',
                        y1: '6.374',
                        y2: '20.976',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                offset: '.15',
                                stopColor: '#E1602B'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#EDAD3F'
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
                d: 'M12 3c4.961 0 9 4.039 9 9s-4.039 9-9 9-9-4.039-9-9 4.039-9 9-9m0 12.937c-1.125-1-1.687-2.306-1.687-3.937S10.875 9.064 12 8.062c1.125 1.002 1.687 2.307 1.687 3.938s-.562 2.908-1.687 3.937',
                fillRule: 'evenodd',
                clipRule: 'evenodd'
            }
        ],
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M3.253 14.153c.034.056 2.008 3.527 5.231 3.47 1.052-.016 2.216-.703 3.516-1.687 1.125-1.001 1.687-2.306 1.687-3.937S13.125 9.062 12 8.06c0 0 1.811-1.727 3.937-1.687 1.665.028 3.544 1.12 4.939 4.123A9.013 9.013 0 0 1 12 20.977a8.96 8.96 0 0 1-8.747-6.824'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#MC__a)'
            },
            [
                [
                    'path',
                    {
                        fill: 'url(#MC__b)',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M12 4c4.41 0 8 3.59 8 8s-3.59 8-8 8-8-3.59-8-8 3.59-8 8-8m0 11.5c-1-.89-1.5-2.05-1.5-3.5S11 9.39 12 8.5c1 .89 1.5 2.05 1.5 3.5s-.5 2.585-1.5 3.5',
                        fillRule: 'evenodd',
                        clipRule: 'evenodd'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M4.226 13.914c.03.05 1.785 3.135 4.65 3.085.935-.015 1.97-.625 3.125-1.5 1-.89 1.5-2.05 1.5-3.5s-.5-2.61-1.5-3.5c0 0 1.61-1.535 3.5-1.5 1.48.025 3.15.995 4.39 3.665A8.012 8.012 0 0 1 12 19.979a7.964 7.964 0 0 1-7.775-6.065'
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
                        id: 'MC__b',
                        x1: '12',
                        x2: '12',
                        y1: '4',
                        y2: '17.25',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#F4C251'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '.89',
                                stopColor: '#E47236'
                            }
                        ]
                    ]
                ],
                [
                    'clipPath',
                    {
                        id: 'MC__a'
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
 * @component @name TokenMC
 * @description Web3Icon for TokenMC
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9InVybCgjTUNfX2EpIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMiAzYzQuOTYxIDAgOSA0LjAzOSA5IDlzLTQuMDM5IDktOSA5LTktNC4wMzktOS05IDQuMDM5LTkgOS05bTAgMTIuOTM3Yy0xLjEyNS0xLTEuNjg3LTIuMzA2LTEuNjg3LTMuOTM3UzEwLjg3NSA5LjA2NCAxMiA4LjA2MmMxLjEyNSAxLjAwMiAxLjY4NyAyLjMwNyAxLjY4NyAzLjkzOHMtLjU2MiAyLjkwOC0xLjY4NyAzLjkzNyIgY2xpcC1ydWxlPSJldmVub2RkIi8+CiAgICA8cGF0aCBmaWxsPSJ1cmwoI01DX19iKSIgZD0iTTMuMjU0IDE0LjE1M2MuMDM0LjA1NiAyLjAwOCAzLjUyNyA1LjIzMSAzLjQ3IDEuMDUyLS4wMTYgMi4yMTYtLjcwMiAzLjUxNi0xLjY4NyAxLjEyNS0xLjAwMSAxLjY4Ny0yLjMwNiAxLjY4Ny0zLjkzNyAwLTEuNjMyLS41NjItMi45MzctMS42ODctMy45MzggMCAwIDEuODExLTEuNzI3IDMuOTM3LTEuNjg3IDEuNjY1LjAyOCAzLjU0NCAxLjEyIDQuOTM5IDQuMTIzYTkuMDEzIDkuMDEzIDAgMCAxLTguODc2IDEwLjQ4IDguOTYgOC45NiAwIDAgMS04Ljc0Ny02LjgyNCIvPgogICAgPGRlZnM+CiAgICAgICAgPGxpbmVhckdyYWRpZW50IGlkPSJNQ19fYSIgeDE9IjEyIiB4Mj0iMTIiIHkxPSIzIiB5Mj0iMTcuOTA2IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiNGNEMyNTEiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIuODkiIHN0b3AtY29sb3I9IiNFNDcyMzYiLz4KICAgICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iTUNfX2IiIHgxPSIxMi4xMjUiIHgyPSIxMi4xMjUiIHkxPSI2LjM3NCIgeTI9IjIwLjk3NiIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgICAgICAgICA8c3RvcCBvZmZzZXQ9Ii4xNSIgc3RvcC1jb2xvcj0iI0UxNjAyQiIvPgogICAgICAgICAgICA8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNFREFEM0YiLz4KICAgICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgPC9kZWZzPgo8L3N2Zz4K) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTEyIDNjNC45NjEgMCA5IDQuMDM5IDkgOXMtNC4wMzkgOS05IDktOS00LjAzOS05LTkgNC4wMzktOSA5LTltMCAxMi45MzdjLTEuMTI1LTEtMS42ODctMi4zMDYtMS42ODctMy45MzdTMTAuODc1IDkuMDY0IDEyIDguMDYyYzEuMTI1IDEuMDAyIDEuNjg3IDIuMzA3IDEuNjg3IDMuOTM4cy0uNTYyIDIuOTA4LTEuNjg3IDMuOTM3IiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0zLjI1MyAxNC4xNTNjLjAzNC4wNTYgMi4wMDggMy41MjcgNS4yMzEgMy40NyAxLjA1Mi0uMDE2IDIuMjE2LS43MDMgMy41MTYtMS42ODcgMS4xMjUtMS4wMDEgMS42ODctMi4zMDYgMS42ODctMy45MzdTMTMuMTI1IDkuMDYyIDEyIDguMDZjMCAwIDEuODExLTEuNzI3IDMuOTM3LTEuNjg3IDEuNjY1LjAyOCAzLjU0NCAxLjEyIDQuOTM5IDQuMTIzQTkuMDEzIDkuMDEzIDAgMCAxIDEyIDIwLjk3N2E4Ljk2IDguOTYgMCAwIDEtOC43NDctNi44MjQiLz4KPC9zdmc+Cg==) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNNQ19fYSkiPgogICAgICAgIDxwYXRoIGZpbGw9InVybCgjTUNfX2IpIiBkPSJNMjQgMEgwdjI0aDI0eiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTEyIDRjNC40MSAwIDggMy41OSA4IDhzLTMuNTkgOC04IDgtOC0zLjU5LTgtOCAzLjU5LTggOC04bTAgMTEuNWMtMS0uODktMS41LTIuMDUtMS41LTMuNVMxMSA5LjM5IDEyIDguNWMxIC44OSAxLjUgMi4wNSAxLjUgMy41cy0uNSAyLjU4NS0xLjUgMy41IiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNNC4yMjYgMTMuOTE0Yy4wMy4wNSAxLjc4NSAzLjEzNSA0LjY1IDMuMDg1LjkzNS0uMDE1IDEuOTctLjYyNSAzLjEyNS0xLjUgMS0uODkgMS41LTIuMDUgMS41LTMuNXMtLjUtMi42MS0xLjUtMy41YzAgMCAxLjYxLTEuNTM1IDMuNS0xLjUgMS40OC4wMjUgMy4xNS45OTUgNC4zOSAzLjY2NUE4LjAxMiA4LjAxMiAwIDAgMSAxMiAxOS45NzlhNy45NjQgNy45NjQgMCAwIDEtNy43NzUtNi4wNjUiLz4KICAgIDwvZz4KICAgIDxkZWZzPgogICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iTUNfX2IiIHgxPSIxMiIgeDI9IjEyIiB5MT0iNCIgeTI9IjE3LjI1IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiNGNEMyNTEiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIuODkiIHN0b3AtY29sb3I9IiNFNDcyMzYiLz4KICAgICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgICAgIDxjbGlwUGF0aCBpZD0iTUNfX2EiPgogICAgICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMCAwaDI0djI0SDB6Ii8+CiAgICAgICAgPC9jbGlwUGF0aD4KICAgIDwvZGVmcz4KPC9zdmc+Cg==)
 * @see https://web3icons.io/tokens/MC
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenMC = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenMC', __iconNode);
;
}),
]);

//# sourceMappingURL=1qqr_%40web3icons_react_dist_0dxj7l_._.js.map