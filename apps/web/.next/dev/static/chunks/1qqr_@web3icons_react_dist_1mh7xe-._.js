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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/networks/NetworkNibiru.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>NetworkNibiru
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-client] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: 'url(#nibiru__a)',
                d: 'M12.225 3 6.19 7.244l11.66 8.475V6.957zm4.52 10.504L8.156 7.26l4.09-2.878 4.5 3.165z'
            }
        ],
        [
            'path',
            {
                fill: 'url(#nibiru__b)',
                d: 'M6.15 8.281v8.767L11.92 21l5.88-4.25zm1.146 8.167v-5.952l8.597 6.252-3.97 2.87z'
            }
        ],
        [
            'defs',
            {},
            [
                [
                    'linearGradient',
                    {
                        id: 'nibiru__a',
                        x1: '-.462',
                        x2: '77.832',
                        y1: '1.062',
                        y2: '17.697',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#F29AC4'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '.13',
                                stopColor: '#F2A9CB'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '.275',
                                stopColor: '#F2BAD5'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '.395',
                                stopColor: '#CDC6D7'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '.52',
                                stopColor: '#82D1D9'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '.66',
                                stopColor: '#09D4D7'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '.8',
                                stopColor: '#11BBCA'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#17A0BF'
                            }
                        ]
                    ]
                ],
                [
                    'linearGradient',
                    {
                        id: 'nibiru__b',
                        x1: '-.462',
                        x2: '77.832',
                        y1: '1.062',
                        y2: '17.697',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#F29AC4'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '.13',
                                stopColor: '#F2A9CB'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '.275',
                                stopColor: '#F2BAD5'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '.395',
                                stopColor: '#CDC6D7'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '.52',
                                stopColor: '#82D1D9'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '.66',
                                stopColor: '#09D4D7'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '.8',
                                stopColor: '#11BBCA'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#17A0BF'
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
                d: 'M12.225 3 6.19 7.244l11.66 8.475V6.957zm4.52 10.504L8.156 7.26l4.09-2.878 4.5 3.165zM6.15 8.281v8.767L11.92 21l5.88-4.25zm1.146 8.167v-5.952l8.597 6.252-3.97 2.87z'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#nibiru__a)'
            },
            [
                [
                    'path',
                    {
                        fill: 'url(#nibiru__b)',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M12.2 4 6.836 7.773 17.2 15.306V7.517zm4.018 9.337-7.636-5.55 3.636-2.558 4 2.813zM6.8 8.694v7.793L11.929 20l5.226-3.779zm1.018 7.26v-5.29l7.642 5.557-3.528 2.55z'
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
                        id: 'nibiru__b',
                        x1: '.922',
                        x2: '70.517',
                        y1: '2.277',
                        y2: '17.064',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#F29AC4'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '.13',
                                stopColor: '#F2A9CB'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '.275',
                                stopColor: '#F2BAD5'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '.395',
                                stopColor: '#CDC6D7'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '.52',
                                stopColor: '#82D1D9'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '.66',
                                stopColor: '#09D4D7'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '.8',
                                stopColor: '#11BBCA'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#17A0BF'
                            }
                        ]
                    ]
                ],
                [
                    'clipPath',
                    {
                        id: 'nibiru__a'
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
 * @component @name NetworkNibiru
 * @description Web3Icon for NetworkNibiru
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9InVybCgjbmliaXJ1X19hKSIgZD0iTTEyLjIyNSAzIDYuMTkgNy4yNDRsMTEuNjYgOC40NzVWNi45NTd6bTQuNTIgMTAuNTA0TDguMTU2IDcuMjZsNC4wOS0yLjg3OCA0LjUgMy4xNjV6Ii8+CiAgICA8cGF0aCBmaWxsPSJ1cmwoI25pYmlydV9fYikiIGQ9Ik02LjE1IDguMjgxdjguNzY3TDExLjkyIDIxbDUuODgtNC4yNXptMS4xNDYgOC4xNjd2LTUuOTUybDguNTk3IDYuMjUyLTMuOTcgMi44N3oiLz4KICAgIDxkZWZzPgogICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD0ibmliaXJ1X19hIiB4MT0iLS40NjIiIHgyPSI3Ny44MzIiIHkxPSIxLjA2MiIgeTI9IjE3LjY5NyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjRjI5QUM0Ii8+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iLjEzIiBzdG9wLWNvbG9yPSIjRjJBOUNCIi8+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iLjI3NSIgc3RvcC1jb2xvcj0iI0YyQkFENSIvPgogICAgICAgICAgICA8c3RvcCBvZmZzZXQ9Ii4zOTUiIHN0b3AtY29sb3I9IiNDREM2RDciLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIuNTIiIHN0b3AtY29sb3I9IiM4MkQxRDkiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIuNjYiIHN0b3AtY29sb3I9IiMwOUQ0RDciLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIuOCIgc3RvcC1jb2xvcj0iIzExQkJDQSIvPgogICAgICAgICAgICA8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMxN0EwQkYiLz4KICAgICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD0ibmliaXJ1X19iIiB4MT0iLS40NjIiIHgyPSI3Ny44MzIiIHkxPSIxLjA2MiIgeTI9IjE3LjY5NyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjRjI5QUM0Ii8+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iLjEzIiBzdG9wLWNvbG9yPSIjRjJBOUNCIi8+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iLjI3NSIgc3RvcC1jb2xvcj0iI0YyQkFENSIvPgogICAgICAgICAgICA8c3RvcCBvZmZzZXQ9Ii4zOTUiIHN0b3AtY29sb3I9IiNDREM2RDciLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIuNTIiIHN0b3AtY29sb3I9IiM4MkQxRDkiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIuNjYiIHN0b3AtY29sb3I9IiMwOUQ0RDciLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIuOCIgc3RvcC1jb2xvcj0iIzExQkJDQSIvPgogICAgICAgICAgICA8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMxN0EwQkYiLz4KICAgICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgPC9kZWZzPgo8L3N2Zz4K) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xMi4yMjUgMyA2LjE5IDcuMjQ0bDExLjY2IDguNDc1VjYuOTU3em00LjUyIDEwLjUwNEw4LjE1NiA3LjI2bDQuMDktMi44NzggNC41IDMuMTY1ek02LjE1IDguMjgxdjguNzY3TDExLjkyIDIxbDUuODgtNC4yNXptMS4xNDYgOC4xNjd2LTUuOTUybDguNTk3IDYuMjUyLTMuOTcgMi44N3oiLz4KPC9zdmc+Cg==) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNuaWJpcnVfX2EpIj4KICAgICAgICA8cGF0aCBmaWxsPSJ1cmwoI25pYmlydV9fYikiIGQ9Ik0yNCAwSDB2MjRoMjR6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTEyLjIgNCA2LjgzNiA3Ljc3MyAxNy4yIDE1LjMwNlY3LjUxN3ptNC4wMTggOS4zMzctNy42MzYtNS41NSAzLjYzNi0yLjU1OCA0IDIuODEzek02LjggOC42OTR2Ny43OTNMMTEuOTI5IDIwbDUuMjI2LTMuNzc5em0xLjAxOCA3LjI2di01LjI5bDcuNjQyIDUuNTU3LTMuNTI4IDIuNTV6Ii8+CiAgICA8L2c+CiAgICA8ZGVmcz4KICAgICAgICA8bGluZWFyR3JhZGllbnQgaWQ9Im5pYmlydV9fYiIgeDE9Ii45MjIiIHgyPSI3MC41MTciIHkxPSIyLjI3NyIgeTI9IjE3LjA2NCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjRjI5QUM0Ii8+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iLjEzIiBzdG9wLWNvbG9yPSIjRjJBOUNCIi8+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iLjI3NSIgc3RvcC1jb2xvcj0iI0YyQkFENSIvPgogICAgICAgICAgICA8c3RvcCBvZmZzZXQ9Ii4zOTUiIHN0b3AtY29sb3I9IiNDREM2RDciLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIuNTIiIHN0b3AtY29sb3I9IiM4MkQxRDkiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIuNjYiIHN0b3AtY29sb3I9IiMwOUQ0RDciLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIuOCIgc3RvcC1jb2xvcj0iIzExQkJDQSIvPgogICAgICAgICAgICA8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMxN0EwQkYiLz4KICAgICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgICAgIDxjbGlwUGF0aCBpZD0ibmliaXJ1X19hIj4KICAgICAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTAgMGgyNHYyNEgweiIvPgogICAgICAgIDwvY2xpcFBhdGg+CiAgICA8L2RlZnM+Cjwvc3ZnPgo=)
 * @see https://web3icons.io/networks/nibiru
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const NetworkNibiru = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWeb3Icon"])('NetworkNibiru', __iconNode);
;
}),
]);

//# sourceMappingURL=1qqr_%40web3icons_react_dist_1mh7xe-._.js.map