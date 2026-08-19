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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/wallets/WalletAtomic.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>WalletAtomic
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-client] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: 'url(#atomic__a)',
                d: 'M3 20.5 8.341 6.152c.678-1.676 1.942-2.624 3.621-2.651V3.5h.076c1.68.028 2.943.976 3.62 2.652L21 20.5l-3.307-1.128L13.13 7.115c-.278-.678-.599-.922-1.13-.933-.532.011-.852.255-1.13.933L6.308 19.372zm11.324-5.464a2.28 2.28 0 0 1-2.293 2.27c-1.266 0-2.292-1.017-2.292-2.27s1.026-2.27 2.292-2.27a2.28 2.28 0 0 1 2.293 2.27',
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
                        id: 'atomic__a',
                        x1: '3',
                        x2: '3',
                        y1: '3.5',
                        y2: '20.5',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#42C1FD'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#1F8EFA'
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
                d: 'M3 20.5 8.341 6.152c.678-1.676 1.942-2.624 3.621-2.651V3.5h.076c1.68.028 2.943.976 3.62 2.652L21 20.5l-3.307-1.128L13.13 7.115c-.278-.678-.599-.922-1.13-.933-.532.011-.852.255-1.13.933L6.308 19.372zm11.324-5.464a2.28 2.28 0 0 1-2.293 2.27c-1.266 0-2.292-1.017-2.292-2.27s1.026-2.27 2.292-2.27a2.28 2.28 0 0 1 2.293 2.27',
                fillRule: 'evenodd',
                clipRule: 'evenodd'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#atomic__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#212E4F',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: 'url(#atomic__b)',
                        d: 'M4 19.5 8.748 6.84c.602-1.479 1.726-2.315 3.219-2.34h.066c1.494.025 2.617.861 3.22 2.34L20 19.5l-2.94-.995L13.004 7.69c-.247-.599-.532-.814-1.005-.823-.472.01-.756.225-1.003.823L6.94 18.505zm10.066-4.821c0 1.106-.913 2.002-2.038 2.002-1.126 0-2.038-.896-2.038-2.002s.912-2.002 2.038-2.002 2.038.896 2.038 2.002',
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
                        id: 'atomic__b',
                        x1: '4',
                        x2: '4',
                        y1: '4.5',
                        y2: '19.5',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#42C1FD'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#1F8EFA'
                            }
                        ]
                    ]
                ],
                [
                    'clipPath',
                    {
                        id: 'atomic__a'
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
 * @component @name WalletAtomic
 * @description Web3Icon for WalletAtomic
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9InVybCgjYXRvbWljX19hKSIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMyAyMC41IDguMzQxIDYuMTUyYy42NzgtMS42NzYgMS45NDItMi42MjQgMy42MjEtMi42NTFWMy41aC4wNzZjMS42OC4wMjggMi45NDMuOTc2IDMuNjIgMi42NTJMMjEgMjAuNWwtMy4zMDctMS4xMjhMMTMuMTMgNy4xMTVjLS4yNzgtLjY3OC0uNTk5LS45MjItMS4xMy0uOTMzLS41MzIuMDExLS44NTIuMjU1LTEuMTMuOTMzTDYuMzA4IDE5LjM3MnptMTEuMzI0LTUuNDY0YTIuMjggMi4yOCAwIDAgMS0yLjI5MyAyLjI3Yy0xLjI2NiAwLTIuMjkyLTEuMDE3LTIuMjkyLTIuMjdzMS4wMjYtMi4yNyAyLjI5Mi0yLjI3YTIuMjggMi4yOCAwIDAgMSAyLjI5MyAyLjI3IiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KICAgIDxkZWZzPgogICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iYXRvbWljX19hIiB4MT0iMyIgeDI9IjMiIHkxPSIzLjUiIHkyPSIyMC41IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiM0MkMxRkQiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMUY4RUZBIi8+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgIDwvZGVmcz4KPC9zdmc+Cg==) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTMgMjAuNSA4LjM0MSA2LjE1MmMuNjc4LTEuNjc2IDEuOTQyLTIuNjI0IDMuNjIxLTIuNjUxVjMuNWguMDc2YzEuNjguMDI4IDIuOTQzLjk3NiAzLjYyIDIuNjUyTDIxIDIwLjVsLTMuMzA3LTEuMTI4TDEzLjEzIDcuMTE1Yy0uMjc4LS42NzgtLjU5OS0uOTIyLTEuMTMtLjkzMy0uNTMyLjAxMS0uODUyLjI1NS0xLjEzLjkzM0w2LjMwOCAxOS4zNzJ6bTExLjMyNC01LjQ2NGEyLjI4IDIuMjggMCAwIDEtMi4yOTMgMi4yN2MtMS4yNjYgMC0yLjI5Mi0xLjAxNy0yLjI5Mi0yLjI3czEuMDI2LTIuMjcgMi4yOTItMi4yN2EyLjI4IDIuMjggMCAwIDEgMi4yOTMgMi4yNyIgY2xpcC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo=) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNhdG9taWNfX2EpIj4KICAgICAgICA8cGF0aCBmaWxsPSIjMjEyRTRGIiBkPSJNMjQgMEgwdjI0aDI0eiIvPgogICAgICAgIDxwYXRoIGZpbGw9InVybCgjYXRvbWljX19iKSIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNNCAxOS41IDguNzQ4IDYuODRjLjYwMi0xLjQ3OSAxLjcyNi0yLjMxNSAzLjIxOS0yLjM0aC4wNjZjMS40OTQuMDI1IDIuNjE3Ljg2MSAzLjIyIDIuMzRMMjAgMTkuNWwtMi45NC0uOTk1TDEzLjAwNCA3LjY5Yy0uMjQ3LS41OTktLjUzMi0uODE0LTEuMDA1LS44MjMtLjQ3Mi4wMS0uNzU2LjIyNS0xLjAwMy44MjNMNi45NCAxOC41MDV6bTEwLjA2Ni00LjgyMWMwIDEuMTA2LS45MTMgMi4wMDItMi4wMzggMi4wMDItMS4xMjYgMC0yLjAzOC0uODk2LTIuMDM4LTIuMDAycy45MTItMi4wMDIgMi4wMzgtMi4wMDIgMi4wMzguODk2IDIuMDM4IDIuMDAyIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KICAgIDwvZz4KICAgIDxkZWZzPgogICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iYXRvbWljX19iIiB4MT0iNCIgeDI9IjQiIHkxPSI0LjUiIHkyPSIxOS41IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiM0MkMxRkQiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMUY4RUZBIi8+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgICAgICA8Y2xpcFBhdGggaWQ9ImF0b21pY19fYSI+CiAgICAgICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0wIDBoMjR2MjRIMHoiLz4KICAgICAgICA8L2NsaXBQYXRoPgogICAgPC9kZWZzPgo8L3N2Zz4K)
 * @see https://web3icons.io/wallets/atomic
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const WalletAtomic = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWeb3Icon"])('WalletAtomic', __iconNode);
;
}),
]);

//# sourceMappingURL=1qqr_%40web3icons_react_dist_0leyew0._.js.map