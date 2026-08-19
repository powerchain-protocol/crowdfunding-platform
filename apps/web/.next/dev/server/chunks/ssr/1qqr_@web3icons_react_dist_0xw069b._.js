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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenPIXEL.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenPIXEL
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-ssr] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: 'url(#PIXEL__a)',
                d: 'M7.8 16.2h4.8V21H7.8z'
            }
        ],
        [
            'path',
            {
                fill: 'url(#PIXEL__b)',
                d: 'M12.6 3h1.878C18.078 3 21 5.922 21 9.528c0 3.6-2.922 6.672-6.528 6.672H7.8v-9h4.8v4.2h1.878c1.182 0 2.322-.918 2.322-2.1s-1.14-2.1-2.328-2.1H12.6z'
            }
        ],
        [
            'path',
            {
                fill: 'url(#PIXEL__c)',
                d: 'M3 11.401h4.8v4.8H3z'
            }
        ],
        [
            'path',
            {
                fill: 'url(#PIXEL__d)',
                d: 'M7.8 11.401h4.8v4.8H7.8z'
            }
        ],
        [
            'defs',
            {},
            [
                [
                    'linearGradient',
                    {
                        id: 'PIXEL__a',
                        x1: '3',
                        x2: '21',
                        y1: '8.4',
                        y2: '15.983',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#3EFF6E'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#16DDDE'
                            }
                        ]
                    ]
                ],
                [
                    'linearGradient',
                    {
                        id: 'PIXEL__b',
                        x1: '3.205',
                        x2: '22.547',
                        y1: '7.868',
                        y2: '16.606',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#FF5B3C'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#FF3196'
                            }
                        ]
                    ]
                ],
                [
                    'linearGradient',
                    {
                        id: 'PIXEL__c',
                        x1: '3',
                        x2: '21',
                        y1: '8.401',
                        y2: '15.984',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#FF6F3F'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#FFC546'
                            }
                        ]
                    ]
                ],
                [
                    'linearGradient',
                    {
                        id: 'PIXEL__d',
                        x1: '7.8',
                        x2: '12.6',
                        y1: '12.841',
                        y2: '14.863',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#E059FE'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#656FFF'
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
                d: 'M7.8 16.2h4.8V21H7.8zM12.6 3h1.878C18.078 3 21 5.922 21 9.528c0 3.6-2.922 6.672-6.528 6.672H7.801v-9h4.8v4.2h1.877c1.182 0 2.322-.918 2.322-2.1s-1.14-2.1-2.328-2.1H12.6zM3 11.401h4.8v4.8H3z'
            }
        ],
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M7.8 11.401h4.8v4.8H7.8z'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#PIXEL__a)'
            },
            [
                [
                    'path',
                    {
                        fill: 'url(#PIXEL__b)',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M8.267 15.733h4.267V20H8.267zM12.534 4h1.669A5.8 5.8 0 0 1 20 9.802c0 3.2-2.597 5.93-5.802 5.93h-5.93V7.734h4.266v3.733h1.669c1.05 0 2.064-.816 2.064-1.866s-1.013-1.867-2.07-1.867h-1.663zM4 11.468h4.267v4.266H4z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M8.267 11.468h4.267v4.266H8.267z'
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
                        id: 'PIXEL__b',
                        x1: '4',
                        x2: '20',
                        y1: '8.8',
                        y2: '15.54',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#3EFF6E'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#16DDDE'
                            }
                        ]
                    ]
                ],
                [
                    'clipPath',
                    {
                        id: 'PIXEL__a'
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
 * @component @name TokenPIXEL
 * @description Web3Icon for TokenPIXEL
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9InVybCgjUElYRUxfX2EpIiBkPSJNNy44IDE2LjJoNC44VjIxSDcuOHoiLz4KICAgIDxwYXRoIGZpbGw9InVybCgjUElYRUxfX2IpIiBkPSJNMTIuNiAzaDEuODc4QzE4LjA3OCAzIDIxIDUuOTIyIDIxIDkuNTI4YzAgMy42LTIuOTIyIDYuNjcyLTYuNTI4IDYuNjcySDcuOHYtOWg0Ljh2NC4yaDEuODc4YzEuMTgyIDAgMi4zMjItLjkxOCAyLjMyMi0yLjFzLTEuMTQtMi4xLTIuMzI4LTIuMUgxMi42eiIvPgogICAgPHBhdGggZmlsbD0idXJsKCNQSVhFTF9fYykiIGQ9Ik0zIDExLjQwMWg0Ljh2NC44SDN6Ii8+CiAgICA8cGF0aCBmaWxsPSJ1cmwoI1BJWEVMX19kKSIgZD0iTTcuOCAxMS40MDFoNC44djQuOEg3Ljh6Ii8+CiAgICA8ZGVmcz4KICAgICAgICA8bGluZWFyR3JhZGllbnQgaWQ9IlBJWEVMX19hIiB4MT0iMyIgeDI9IjIxIiB5MT0iOC40IiB5Mj0iMTUuOTgzIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiMzRUZGNkUiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMTZERERFIi8+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgICAgICA8bGluZWFyR3JhZGllbnQgaWQ9IlBJWEVMX19iIiB4MT0iMy4yMDUiIHgyPSIyMi41NDciIHkxPSI3Ljg2OCIgeTI9IjE2LjYwNiIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjRkY1QjNDIi8+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI0ZGMzE5NiIvPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICAgICAgPGxpbmVhckdyYWRpZW50IGlkPSJQSVhFTF9fYyIgeDE9IjMiIHgyPSIyMSIgeTE9IjguNDAxIiB5Mj0iMTUuOTg0IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiNGRjZGM0YiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjRkZDNTQ2Ii8+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgICAgICA8bGluZWFyR3JhZGllbnQgaWQ9IlBJWEVMX19kIiB4MT0iNy44IiB4Mj0iMTIuNiIgeTE9IjEyLjg0MSIgeTI9IjE0Ljg2MyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjRTA1OUZFIi8+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzY1NkZGRiIvPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICA8L2RlZnM+Cjwvc3ZnPgo=) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik03LjggMTYuMmg0LjhWMjFINy44ek0xMi42IDNoMS44NzhDMTguMDc4IDMgMjEgNS45MjIgMjEgOS41MjhjMCAzLjYtMi45MjIgNi42NzItNi41MjggNi42NzJINy44MDF2LTloNC44djQuMmgxLjg3N2MxLjE4MiAwIDIuMzIyLS45MTggMi4zMjItMi4xcy0xLjE0LTIuMS0yLjMyOC0yLjFIMTIuNnpNMyAxMS40MDFoNC44djQuOEgzeiIvPgogICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTcuOCAxMS40MDFoNC44djQuOEg3Ljh6Ii8+Cjwvc3ZnPgo=) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNQSVhFTF9fYSkiPgogICAgICAgIDxwYXRoIGZpbGw9InVybCgjUElYRUxfX2IpIiBkPSJNMjQgMEgwdjI0aDI0eiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik04LjI2NyAxNS43MzNoNC4yNjdWMjBIOC4yNjd6TTEyLjUzNCA0aDEuNjY5QTUuOCA1LjggMCAwIDEgMjAgOS44MDJjMCAzLjItMi41OTcgNS45My01LjgwMiA1LjkzaC01LjkzVjcuNzM0aDQuMjY2djMuNzMzaDEuNjY5YzEuMDUgMCAyLjA2NC0uODE2IDIuMDY0LTEuODY2cy0xLjAxMy0xLjg2Ny0yLjA3LTEuODY3aC0xLjY2M3pNNCAxMS40NjhoNC4yNjd2NC4yNjZINHoiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNOC4yNjcgMTEuNDY4aDQuMjY3djQuMjY2SDguMjY3eiIvPgogICAgPC9nPgogICAgPGRlZnM+CiAgICAgICAgPGxpbmVhckdyYWRpZW50IGlkPSJQSVhFTF9fYiIgeDE9IjQiIHgyPSIyMCIgeTE9IjguOCIgeTI9IjE1LjU0IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiMzRUZGNkUiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMTZERERFIi8+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgICAgICA8Y2xpcFBhdGggaWQ9IlBJWEVMX19hIj4KICAgICAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTAgMGgyNHYyNEgweiIvPgogICAgICAgIDwvY2xpcFBhdGg+CiAgICA8L2RlZnM+Cjwvc3ZnPgo=)
 * @see https://web3icons.io/tokens/PIXEL
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenPIXEL = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenPIXEL', __iconNode);
;
}),
];

//# sourceMappingURL=1qqr_%40web3icons_react_dist_0xw069b._.js.map