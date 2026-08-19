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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenLYRA.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenLYRA
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-client] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: 'url(#LYRA__a)',
                d: 'm15.884 9.979-3.134 3.145H4.812c-.574 0-.861-.658-.473-1.052l8.872-8.929a.495.495 0 0 1 .794.135l2.21 4.923a1.59 1.59 0 0 1-.33 1.778'
            }
        ],
        [
            'path',
            {
                fill: 'url(#LYRA__b)',
                d: 'M3 13.686c.18.242.827.563 1.947.563h12.321c.714 0 1.361.416 1.643 1.069l2.042 4.827a.62.62 0 0 1-.574.855H7.523a2.03 2.03 0 0 1-1.856-1.204z'
            }
        ],
        [
            'defs',
            {},
            [
                [
                    'linearGradient',
                    {
                        id: 'LYRA__a',
                        x1: '12',
                        x2: '12',
                        y1: '2.994',
                        y2: '21.001',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#5ADCD3'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#37C4B1'
                            }
                        ]
                    ]
                ],
                [
                    'linearGradient',
                    {
                        id: 'LYRA__b',
                        x1: '18.838',
                        x2: '5.267',
                        y1: '15.025',
                        y2: '19.988',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#47D1C1'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#21BFA1'
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
                d: 'm15.884 9.979-3.134 3.145H4.812c-.574 0-.861-.658-.473-1.052l8.872-8.929a.495.495 0 0 1 .794.135l2.211 4.923a1.59 1.59 0 0 1-.332 1.778M3 13.686c.18.242.827.563 1.947.563h12.32a1.78 1.78 0 0 1 1.644 1.069l2.042 4.827a.62.62 0 0 1-.574.855H7.523a2.02 2.02 0 0 1-1.856-1.204z'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#LYRA__a)'
            },
            [
                [
                    'path',
                    {
                        fill: 'url(#LYRA__b)',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M15.453 10.203 12.667 13H5.61c-.51 0-.766-.585-.42-.935l7.886-7.937a.44.44 0 0 1 .705.12l1.966 4.376a1.41 1.41 0 0 1-.295 1.58M4 13.499c.16.215.735.5 1.73.5h10.953c.635 0 1.21.37 1.46.95l1.815 4.29a.55.55 0 0 1-.51.76H8.021a1.8 1.8 0 0 1-1.65-1.07z'
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
                        id: 'LYRA__b',
                        x1: '12',
                        x2: '12',
                        y1: '3.995',
                        y2: '20',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#5ADCD3'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#37C4B1'
                            }
                        ]
                    ]
                ],
                [
                    'clipPath',
                    {
                        id: 'LYRA__a'
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
 * @component @name TokenLYRA
 * @description Web3Icon for TokenLYRA
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9InVybCgjTFlSQV9fYSkiIGQ9Im0xNS44ODQgOS45NzktMy4xMzQgMy4xNDVINC44MTJjLS41NzQgMC0uODYxLS42NTgtLjQ3My0xLjA1Mmw4Ljg3Mi04LjkyOWEuNDk1LjQ5NSAwIDAgMSAuNzk0LjEzNWwyLjIxIDQuOTIzYTEuNTkgMS41OSAwIDAgMS0uMzMgMS43NzgiLz4KICAgIDxwYXRoIGZpbGw9InVybCgjTFlSQV9fYikiIGQ9Ik0zIDEzLjY4NmMuMTguMjQyLjgyNy41NjMgMS45NDcuNTYzaDEyLjMyMWMuNzE0IDAgMS4zNjEuNDE2IDEuNjQzIDEuMDY5bDIuMDQyIDQuODI3YS42Mi42MiAwIDAgMS0uNTc0Ljg1NUg3LjUyM2EyLjAzIDIuMDMgMCAwIDEtMS44NTYtMS4yMDR6Ii8+CiAgICA8ZGVmcz4KICAgICAgICA8bGluZWFyR3JhZGllbnQgaWQ9IkxZUkFfX2EiIHgxPSIxMiIgeDI9IjEyIiB5MT0iMi45OTQiIHkyPSIyMS4wMDEiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iIzVBRENEMyIvPgogICAgICAgICAgICA8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMzN0M0QjEiLz4KICAgICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iTFlSQV9fYiIgeDE9IjE4LjgzOCIgeDI9IjUuMjY3IiB5MT0iMTUuMDI1IiB5Mj0iMTkuOTg4IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiM0N0QxQzEiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMjFCRkExIi8+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgIDwvZGVmcz4KPC9zdmc+Cg==) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Im0xNS44ODQgOS45NzktMy4xMzQgMy4xNDVINC44MTJjLS41NzQgMC0uODYxLS42NTgtLjQ3My0xLjA1Mmw4Ljg3Mi04LjkyOWEuNDk1LjQ5NSAwIDAgMSAuNzk0LjEzNWwyLjIxMSA0LjkyM2ExLjU5IDEuNTkgMCAwIDEtLjMzMiAxLjc3OE0zIDEzLjY4NmMuMTguMjQyLjgyNy41NjMgMS45NDcuNTYzaDEyLjMyYTEuNzggMS43OCAwIDAgMSAxLjY0NCAxLjA2OWwyLjA0MiA0LjgyN2EuNjIuNjIgMCAwIDEtLjU3NC44NTVINy41MjNhMi4wMiAyLjAyIDAgMCAxLTEuODU2LTEuMjA0eiIvPgo8L3N2Zz4K) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNMWVJBX19hKSI+CiAgICAgICAgPHBhdGggZmlsbD0idXJsKCNMWVJBX19iKSIgZD0iTTI0IDBIMHYyNGgyNHoiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTUuNDUzIDEwLjIwMyAxMi42NjcgMTNINS42MWMtLjUxIDAtLjc2Ni0uNTg1LS40Mi0uOTM1bDcuODg2LTcuOTM3YS40NC40NCAwIDAgMSAuNzA1LjEybDEuOTY2IDQuMzc2YTEuNDEgMS40MSAwIDAgMS0uMjk1IDEuNThNNCAxMy40OTljLjE2LjIxNS43MzUuNSAxLjczLjVoMTAuOTUzYy42MzUgMCAxLjIxLjM3IDEuNDYuOTVsMS44MTUgNC4yOWEuNTUuNTUgMCAwIDEtLjUxLjc2SDguMDIxYTEuOCAxLjggMCAwIDEtMS42NS0xLjA3eiIvPgogICAgPC9nPgogICAgPGRlZnM+CiAgICAgICAgPGxpbmVhckdyYWRpZW50IGlkPSJMWVJBX19iIiB4MT0iMTIiIHgyPSIxMiIgeTE9IjMuOTk1IiB5Mj0iMjAiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iIzVBRENEMyIvPgogICAgICAgICAgICA8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMzN0M0QjEiLz4KICAgICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgICAgIDxjbGlwUGF0aCBpZD0iTFlSQV9fYSI+CiAgICAgICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0wIDBoMjR2MjRIMHoiLz4KICAgICAgICA8L2NsaXBQYXRoPgogICAgPC9kZWZzPgo8L3N2Zz4K)
 * @see https://web3icons.io/tokens/LYRA
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenLYRA = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenLYRA', __iconNode);
;
}),
]);

//# sourceMappingURL=1qqr_%40web3icons_react_dist_0hhfmdk._.js.map