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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenPOLYPAD.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenPOLYPAD
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-client] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: 'url(#POLYPAD__a)',
                d: 'M19.94 16.495v-9L12 3 4.059 7.495v9l2.647 1.487V8.998L12 5.981l5.294 3.017v6.004L12 18.009V21z'
            }
        ],
        [
            'path',
            {
                fill: 'url(#POLYPAD__b)',
                d: 'M15.706 9.918 12 7.838l-3.706 2.08v9l2.117 1.143v-8.984L12 10.151l1.588.926v1.843L12 13.846v2.303l3.706-2.07z'
            }
        ],
        [
            'path',
            {
                fill: '#fff',
                d: 'M19.94 7.495 12 3 4.059 7.495l2.636 1.503L12 5.981l5.304 3.017z'
            }
        ],
        [
            'path',
            {
                fill: '#fff',
                d: 'M11.999 7.837 8.325 9.918l2.043 1.16 1.63-.932 1.632.926 2.075-1.154z'
            }
        ],
        [
            'defs',
            {},
            [
                [
                    'linearGradient',
                    {
                        id: 'POLYPAD__a',
                        x1: '15.97',
                        x2: '8.252',
                        y1: '5.25',
                        y2: '18.872',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#4E4AFF'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#A873FF'
                            }
                        ]
                    ]
                ],
                [
                    'linearGradient',
                    {
                        id: 'POLYPAD__b',
                        x1: '15.925',
                        x2: '9.381',
                        y1: '4.534',
                        y2: '21.346',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#4E4AFF'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#A873FF'
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
                d: 'M19.941 16.495v-9L12.001 3 4.058 7.495v9l2.647 1.487V8.998L12 5.981l5.294 3.017v6.004L12 18.009V21z'
            }
        ],
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M15.706 9.92 12 7.84 8.294 9.92v9l2.117 1.143V11.08L12 10.153l1.588.926v1.843L12 13.848v2.303l3.706-2.07z'
            }
        ],
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M19.941 7.495 12.001 3 4.058 7.495l2.637 1.503L12 5.981l5.305 3.017z'
            }
        ],
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M12 7.84 8.326 9.92l2.044 1.16 1.63-.932 1.63.926 2.076-1.154z'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#POLYPAD__a)'
            },
            [
                [
                    'path',
                    {
                        fill: 'url(#POLYPAD__b)',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M19.059 15.995v-8L12 4 4.941 7.995v8l2.353 1.323V9.332L12 6.649l4.706 2.683v5.336L12 17.341V20z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M15.294 10.15 12 8.302l-3.294 1.85v8l1.882 1.016v-7.986L12 10.358l1.411.823v1.638L12 13.642v2.048l3.294-1.84z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M19.059 7.995 12 4 4.941 7.995l2.344 1.337L12 6.649l4.715 2.683z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'm12 8.301-3.266 1.85 1.817 1.03 1.45-.828 1.449.824 1.844-1.026z'
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
                        id: 'POLYPAD__b',
                        x1: '15.529',
                        x2: '8.668',
                        y1: '6',
                        y2: '18.108',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#4E4AFF'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#A873FF'
                            }
                        ]
                    ]
                ],
                [
                    'clipPath',
                    {
                        id: 'POLYPAD__a'
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
 * @component @name TokenPOLYPAD
 * @description Web3Icon for TokenPOLYPAD
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9InVybCgjUE9MWVBBRF9fYSkiIGQ9Ik0xOS45NCAxNi40OTV2LTlMMTIgMyA0LjA1OSA3LjQ5NXY5bDIuNjQ3IDEuNDg3VjguOTk4TDEyIDUuOTgxbDUuMjk0IDMuMDE3djYuMDA0TDEyIDE4LjAwOVYyMXoiLz4KICAgIDxwYXRoIGZpbGw9InVybCgjUE9MWVBBRF9fYikiIGQ9Ik0xNS43MDYgOS45MTggMTIgNy44MzhsLTMuNzA2IDIuMDh2OWwyLjExNyAxLjE0M3YtOC45ODRMMTIgMTAuMTUxbDEuNTg4LjkyNnYxLjg0M0wxMiAxMy44NDZ2Mi4zMDNsMy43MDYtMi4wN3oiLz4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xOS45NCA3LjQ5NSAxMiAzIDQuMDU5IDcuNDk1bDIuNjM2IDEuNTAzTDEyIDUuOTgxbDUuMzA0IDMuMDE3eiIvPgogICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTExLjk5OSA3LjgzNyA4LjMyNSA5LjkxOGwyLjA0MyAxLjE2IDEuNjMtLjkzMiAxLjYzMi45MjYgMi4wNzUtMS4xNTR6Ii8+CiAgICA8ZGVmcz4KICAgICAgICA8bGluZWFyR3JhZGllbnQgaWQ9IlBPTFlQQURfX2EiIHgxPSIxNS45NyIgeDI9IjguMjUyIiB5MT0iNS4yNSIgeTI9IjE4Ljg3MiIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjNEU0QUZGIi8+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI0E4NzNGRiIvPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICAgICAgPGxpbmVhckdyYWRpZW50IGlkPSJQT0xZUEFEX19iIiB4MT0iMTUuOTI1IiB4Mj0iOS4zODEiIHkxPSI0LjUzNCIgeTI9IjIxLjM0NiIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjNEU0QUZGIi8+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI0E4NzNGRiIvPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICA8L2RlZnM+Cjwvc3ZnPgo=) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xOS45NDEgMTYuNDk1di05TDEyLjAwMSAzIDQuMDU4IDcuNDk1djlsMi42NDcgMS40ODdWOC45OThMMTIgNS45ODFsNS4yOTQgMy4wMTd2Ni4wMDRMMTIgMTguMDA5VjIxeiIvPgogICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTE1LjcwNiA5LjkyIDEyIDcuODQgOC4yOTQgOS45MnY5bDIuMTE3IDEuMTQzVjExLjA4TDEyIDEwLjE1M2wxLjU4OC45MjZ2MS44NDNMMTIgMTMuODQ4djIuMzAzbDMuNzA2LTIuMDd6Ii8+CiAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTkuOTQxIDcuNDk1IDEyLjAwMSAzIDQuMDU4IDcuNDk1bDIuNjM3IDEuNTAzTDEyIDUuOTgxbDUuMzA1IDMuMDE3eiIvPgogICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTEyIDcuODQgOC4zMjYgOS45MmwyLjA0NCAxLjE2IDEuNjMtLjkzMiAxLjYzLjkyNiAyLjA3Ni0xLjE1NHoiLz4KPC9zdmc+Cg==) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNQT0xZUEFEX19hKSI+CiAgICAgICAgPHBhdGggZmlsbD0idXJsKCNQT0xZUEFEX19iKSIgZD0iTTI0IDBIMHYyNGgyNHoiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTkuMDU5IDE1Ljk5NXYtOEwxMiA0IDQuOTQxIDcuOTk1djhsMi4zNTMgMS4zMjNWOS4zMzJMMTIgNi42NDlsNC43MDYgMi42ODN2NS4zMzZMMTIgMTcuMzQxVjIweiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xNS4yOTQgMTAuMTUgMTIgOC4zMDJsLTMuMjk0IDEuODV2OGwxLjg4MiAxLjAxNnYtNy45ODZMMTIgMTAuMzU4bDEuNDExLjgyM3YxLjYzOEwxMiAxMy42NDJ2Mi4wNDhsMy4yOTQtMS44NHoiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTkuMDU5IDcuOTk1IDEyIDQgNC45NDEgNy45OTVsMi4zNDQgMS4zMzdMMTIgNi42NDlsNC43MTUgMi42ODN6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0ibTEyIDguMzAxLTMuMjY2IDEuODUgMS44MTcgMS4wMyAxLjQ1LS44MjggMS40NDkuODI0IDEuODQ0LTEuMDI2eiIvPgogICAgPC9nPgogICAgPGRlZnM+CiAgICAgICAgPGxpbmVhckdyYWRpZW50IGlkPSJQT0xZUEFEX19iIiB4MT0iMTUuNTI5IiB4Mj0iOC42NjgiIHkxPSI2IiB5Mj0iMTguMTA4IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiM0RTRBRkYiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjQTg3M0ZGIi8+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgICAgICA8Y2xpcFBhdGggaWQ9IlBPTFlQQURfX2EiPgogICAgICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMCAwaDI0djI0SDB6Ii8+CiAgICAgICAgPC9jbGlwUGF0aD4KICAgIDwvZGVmcz4KPC9zdmc+Cg==)
 * @see https://web3icons.io/tokens/POLYPAD
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenPOLYPAD = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenPOLYPAD', __iconNode);
;
}),
]);

//# sourceMappingURL=1qqr_%40web3icons_react_dist_1pjotdu._.js.map