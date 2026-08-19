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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenAPT.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenAPT
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-client] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: 'url(#APT__a)',
                d: 'M17.158 9.625 6.83 13.293a.767.767 0 0 1-1.018-.855l.956-5.198a.75.75 0 0 1 .27-.455l4.478-3.612a.77.77 0 0 1 .973 0l4.5 3.628c.13.107.226.248.265.405l.394 1.502a.77.77 0 0 1-.49.917m-11.937 6.24-.517 2.632a.755.755 0 0 0 .399.827A15.2 15.2 0 0 0 12.006 21a15.1 15.1 0 0 0 6.834-1.643.856.856 0 0 0 .456-.928l-1.238-6.582a.77.77 0 0 0-1.023-.579L5.727 15.29a.77.77 0 0 0-.506.574'
            }
        ],
        [
            'defs',
            {},
            [
                [
                    'linearGradient',
                    {
                        id: 'APT__a',
                        x1: '19.223',
                        x2: '9.84',
                        y1: '20.899',
                        y2: '4.315',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                offset: '.11',
                                stopColor: '#C65CFF'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '.18',
                                stopColor: '#BA6BFF'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '.33',
                                stopColor: '#9991FF'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '.53',
                                stopColor: '#6CF'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '.81',
                                stopColor: '#42F0DB'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '.97',
                                stopColor: '#3FC'
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
                d: 'M17.158 9.625 6.83 13.293a.767.767 0 0 1-1.018-.855l.956-5.198a.75.75 0 0 1 .27-.455l4.478-3.612a.77.77 0 0 1 .973 0l4.5 3.628c.13.107.226.248.265.405l.394 1.502a.77.77 0 0 1-.49.917m-11.937 6.24-.517 2.632a.755.755 0 0 0 .399.827A15.2 15.2 0 0 0 12.006 21a15.1 15.1 0 0 0 6.834-1.643.856.856 0 0 0 .456-.928l-1.238-6.582a.77.77 0 0 0-1.023-.579L5.727 15.29a.77.77 0 0 0-.506.574'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#APT__a)'
            },
            [
                [
                    'path',
                    {
                        fill: 'url(#APT__b)',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'm16.585 9.89-9.18 3.26c-.5.18-1-.25-.905-.76l.85-4.62a.67.67 0 0 1 .24-.406l3.98-3.21a.685.685 0 0 1 .865 0l4 3.225c.115.095.2.22.235.36l.35 1.335c.09.34-.1.695-.435.815m-10.61 5.545-.46 2.34c-.06.3.084.6.354.735A13.5 13.5 0 0 0 12.005 20c1.175 0 3.5-.155 6.075-1.46a.76.76 0 0 0 .405-.825l-1.1-5.85a.685.685 0 0 0-.91-.516l-10.05 3.576a.68.68 0 0 0-.45.51'
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
                        id: 'APT__b',
                        x1: '18.42',
                        x2: '10.08',
                        y1: '19.91',
                        y2: '5.169',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                offset: '.11',
                                stopColor: '#C65CFF'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '.18',
                                stopColor: '#BA6BFF'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '.33',
                                stopColor: '#9991FF'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '.53',
                                stopColor: '#6CF'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '.81',
                                stopColor: '#42F0DB'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '.97',
                                stopColor: '#3FC'
                            }
                        ]
                    ]
                ],
                [
                    'clipPath',
                    {
                        id: 'APT__a'
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
 * @component @name TokenAPT
 * @description Web3Icon for TokenAPT
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9InVybCgjQVBUX19hKSIgZD0iTTE3LjE1OCA5LjYyNSA2LjgzIDEzLjI5M2EuNzY3Ljc2NyAwIDAgMS0xLjAxOC0uODU1bC45NTYtNS4xOThhLjc1Ljc1IDAgMCAxIC4yNy0uNDU1bDQuNDc4LTMuNjEyYS43Ny43NyAwIDAgMSAuOTczIDBsNC41IDMuNjI4Yy4xMy4xMDcuMjI2LjI0OC4yNjUuNDA1bC4zOTQgMS41MDJhLjc3Ljc3IDAgMCAxLS40OS45MTdtLTExLjkzNyA2LjI0LS41MTcgMi42MzJhLjc1NS43NTUgMCAwIDAgLjM5OS44MjdBMTUuMiAxNS4yIDAgMCAwIDEyLjAwNiAyMWExNS4xIDE1LjEgMCAwIDAgNi44MzQtMS42NDMuODU2Ljg1NiAwIDAgMCAuNDU2LS45MjhsLTEuMjM4LTYuNTgyYS43Ny43NyAwIDAgMC0xLjAyMy0uNTc5TDUuNzI3IDE1LjI5YS43Ny43NyAwIDAgMC0uNTA2LjU3NCIvPgogICAgPGRlZnM+CiAgICAgICAgPGxpbmVhckdyYWRpZW50IGlkPSJBUFRfX2EiIHgxPSIxOS4yMjMiIHgyPSI5Ljg0IiB5MT0iMjAuODk5IiB5Mj0iNC4zMTUiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIuMTEiIHN0b3AtY29sb3I9IiNDNjVDRkYiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIuMTgiIHN0b3AtY29sb3I9IiNCQTZCRkYiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIuMzMiIHN0b3AtY29sb3I9IiM5OTkxRkYiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIuNTMiIHN0b3AtY29sb3I9IiM2Q0YiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIuODEiIHN0b3AtY29sb3I9IiM0MkYwREIiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIuOTciIHN0b3AtY29sb3I9IiMzRkMiLz4KICAgICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgPC9kZWZzPgo8L3N2Zz4K) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xNy4xNTggOS42MjUgNi44MyAxMy4yOTNhLjc2Ny43NjcgMCAwIDEtMS4wMTgtLjg1NWwuOTU2LTUuMTk4YS43NS43NSAwIDAgMSAuMjctLjQ1NWw0LjQ3OC0zLjYxMmEuNzcuNzcgMCAwIDEgLjk3MyAwbDQuNSAzLjYyOGMuMTMuMTA3LjIyNi4yNDguMjY1LjQwNWwuMzk0IDEuNTAyYS43Ny43NyAwIDAgMS0uNDkuOTE3bS0xMS45MzcgNi4yNC0uNTE3IDIuNjMyYS43NTUuNzU1IDAgMCAwIC4zOTkuODI3QTE1LjIgMTUuMiAwIDAgMCAxMi4wMDYgMjFhMTUuMSAxNS4xIDAgMCAwIDYuODM0LTEuNjQzLjg1Ni44NTYgMCAwIDAgLjQ1Ni0uOTI4bC0xLjIzOC02LjU4MmEuNzcuNzcgMCAwIDAtMS4wMjMtLjU3OUw1LjcyNyAxNS4yOWEuNzcuNzcgMCAwIDAtLjUwNi41NzQiLz4KPC9zdmc+Cg==) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNBUFRfX2EpIj4KICAgICAgICA8cGF0aCBmaWxsPSJ1cmwoI0FQVF9fYikiIGQ9Ik0yNCAwSDB2MjRoMjR6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0ibTE2LjU4NSA5Ljg5LTkuMTggMy4yNmMtLjUuMTgtMS0uMjUtLjkwNS0uNzZsLjg1LTQuNjJhLjY3LjY3IDAgMCAxIC4yNC0uNDA2bDMuOTgtMy4yMWEuNjg1LjY4NSAwIDAgMSAuODY1IDBsNCAzLjIyNWMuMTE1LjA5NS4yLjIyLjIzNS4zNmwuMzUgMS4zMzVjLjA5LjM0LS4xLjY5NS0uNDM1LjgxNW0tMTAuNjEgNS41NDUtLjQ2IDIuMzRjLS4wNi4zLjA4NC42LjM1NC43MzVBMTMuNSAxMy41IDAgMCAwIDEyLjAwNSAyMGMxLjE3NSAwIDMuNS0uMTU1IDYuMDc1LTEuNDZhLjc2Ljc2IDAgMCAwIC40MDUtLjgyNWwtMS4xLTUuODVhLjY4NS42ODUgMCAwIDAtLjkxLS41MTZsLTEwLjA1IDMuNTc2YS42OC42OCAwIDAgMC0uNDUuNTEiLz4KICAgIDwvZz4KICAgIDxkZWZzPgogICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iQVBUX19iIiB4MT0iMTguNDIiIHgyPSIxMC4wOCIgeTE9IjE5LjkxIiB5Mj0iNS4xNjkiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIuMTEiIHN0b3AtY29sb3I9IiNDNjVDRkYiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIuMTgiIHN0b3AtY29sb3I9IiNCQTZCRkYiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIuMzMiIHN0b3AtY29sb3I9IiM5OTkxRkYiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIuNTMiIHN0b3AtY29sb3I9IiM2Q0YiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIuODEiIHN0b3AtY29sb3I9IiM0MkYwREIiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIuOTciIHN0b3AtY29sb3I9IiMzRkMiLz4KICAgICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgICAgIDxjbGlwUGF0aCBpZD0iQVBUX19hIj4KICAgICAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTAgMGgyNHYyNEgweiIvPgogICAgICAgIDwvY2xpcFBhdGg+CiAgICA8L2RlZnM+Cjwvc3ZnPgo=)
 * @see https://web3icons.io/tokens/APT
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenAPT = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenAPT', __iconNode);
;
}),
]);

//# sourceMappingURL=1qqr_%40web3icons_react_dist_0ojilko._.js.map