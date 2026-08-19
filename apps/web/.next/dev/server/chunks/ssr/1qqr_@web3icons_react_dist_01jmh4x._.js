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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenABYSS.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenABYSS
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-ssr] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: 'url(#ABYSS__a)',
                d: 'M12.01 8.685c-1.35 0-2.379.208-2.379.208v2.16h4.737V8.894c.022 0-1.007-.21-2.358-.21'
            }
        ],
        [
            'path',
            {
                fill: 'url(#ABYSS__b)',
                d: 'M12 3C8.54 3 4.42 4.778 4.42 4.778V15.6L12 21l7.579-5.378V4.755c.022 0-4.1-1.755-7.58-1.755m4.263 11.436-1.895 1.383v-2.872H9.631v2.871l-1.894-1.382V7.26s2.5-.57 4.285-.57c1.784-.001 4.241.57 4.241.57z'
            }
        ],
        [
            'defs',
            {},
            [
                [
                    'linearGradient',
                    {
                        id: 'ABYSS__a',
                        x1: '6.496',
                        x2: '18.731',
                        y1: '6.106',
                        y2: '16.484',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#A025F3'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#4212A0'
                            }
                        ]
                    ]
                ],
                [
                    'linearGradient',
                    {
                        id: 'ABYSS__b',
                        x1: '6.496',
                        x2: '18.731',
                        y1: '6.105',
                        y2: '16.483',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#A025F3'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#4212A0'
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
                d: 'M12.01 8.685c-1.35 0-2.38.208-2.38.208v2.16h4.738V8.894c.022 0-1.007-.21-2.358-.21'
            }
        ],
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M12 3C8.54 3 4.42 4.778 4.42 4.778V15.6L12 21l7.579-5.378V4.755C19.6 4.755 15.48 3 11.999 3m4.263 11.436-1.895 1.383v-2.872H9.631v2.871l-1.894-1.382V7.26s2.5-.57 4.285-.57c1.784-.001 4.241.57 4.241.57z'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#ABYSS__a)'
            },
            [
                [
                    'path',
                    {
                        fill: 'url(#ABYSS__b)',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M12.009 9.053c-1.2 0-2.115.185-2.115.185v1.92h4.21V9.24c.02 0-.895-.186-2.095-.186'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M12 4C8.925 4 5.263 5.58 5.263 5.58v9.62L12 20l6.737-4.78V5.56C18.757 5.56 15.094 4 12 4m3.79 10.165-1.685 1.23v-2.553h-4.21v2.552L8.21 14.165V7.787s2.223-.508 3.808-.508c1.586 0 3.77.508 3.77.508z'
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
                        id: 'ABYSS__b',
                        x1: '7.107',
                        x2: '17.983',
                        y1: '6.761',
                        y2: '15.986',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#A025F3'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#4212A0'
                            }
                        ]
                    ]
                ],
                [
                    'clipPath',
                    {
                        id: 'ABYSS__a'
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
 * @component @name TokenABYSS
 * @description Web3Icon for TokenABYSS
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9InVybCgjQUJZU1NfX2EpIiBkPSJNMTIuMDEgOC42ODVjLTEuMzUgMC0yLjM3OS4yMDgtMi4zNzkuMjA4djIuMTZoNC43MzdWOC44OTRjLjAyMiAwLTEuMDA3LS4yMS0yLjM1OC0uMjEiLz4KICAgIDxwYXRoIGZpbGw9InVybCgjQUJZU1NfX2IpIiBkPSJNMTIgM0M4LjU0IDMgNC40MiA0Ljc3OCA0LjQyIDQuNzc4VjE1LjZMMTIgMjFsNy41NzktNS4zNzhWNC43NTVjLjAyMiAwLTQuMS0xLjc1NS03LjU4LTEuNzU1bTQuMjYzIDExLjQzNi0xLjg5NSAxLjM4M3YtMi44NzJIOS42MzF2Mi44NzFsLTEuODk0LTEuMzgyVjcuMjZzMi41LS41NyA0LjI4NS0uNTdjMS43ODQtLjAwMSA0LjI0MS41NyA0LjI0MS41N3oiLz4KICAgIDxkZWZzPgogICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iQUJZU1NfX2EiIHgxPSI2LjQ5NiIgeDI9IjE4LjczMSIgeTE9IjYuMTA2IiB5Mj0iMTYuNDg0IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiNBMDI1RjMiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjNDIxMkEwIi8+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgICAgICA8bGluZWFyR3JhZGllbnQgaWQ9IkFCWVNTX19iIiB4MT0iNi40OTYiIHgyPSIxOC43MzEiIHkxPSI2LjEwNSIgeTI9IjE2LjQ4MyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjQTAyNUYzIi8+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzQyMTJBMCIvPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICA8L2RlZnM+Cjwvc3ZnPgo=) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xMi4wMSA4LjY4NWMtMS4zNSAwLTIuMzguMjA4LTIuMzguMjA4djIuMTZoNC43MzhWOC44OTRjLjAyMiAwLTEuMDA3LS4yMS0yLjM1OC0uMjEiLz4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xMiAzQzguNTQgMyA0LjQyIDQuNzc4IDQuNDIgNC43NzhWMTUuNkwxMiAyMWw3LjU3OS01LjM3OFY0Ljc1NUMxOS42IDQuNzU1IDE1LjQ4IDMgMTEuOTk5IDNtNC4yNjMgMTEuNDM2LTEuODk1IDEuMzgzdi0yLjg3Mkg5LjYzMXYyLjg3MWwtMS44OTQtMS4zODJWNy4yNnMyLjUtLjU3IDQuMjg1LS41N2MxLjc4NC0uMDAxIDQuMjQxLjU3IDQuMjQxLjU3eiIvPgo8L3N2Zz4K) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNBQllTU19fYSkiPgogICAgICAgIDxwYXRoIGZpbGw9InVybCgjQUJZU1NfX2IpIiBkPSJNMjQgMEgwdjI0aDI0eiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xMi4wMDkgOS4wNTNjLTEuMiAwLTIuMTE1LjE4NS0yLjExNS4xODV2MS45Mmg0LjIxVjkuMjRjLjAyIDAtLjg5NS0uMTg2LTIuMDk1LS4xODYiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTIgNEM4LjkyNSA0IDUuMjYzIDUuNTggNS4yNjMgNS41OHY5LjYyTDEyIDIwbDYuNzM3LTQuNzhWNS41NkMxOC43NTcgNS41NiAxNS4wOTQgNCAxMiA0bTMuNzkgMTAuMTY1LTEuNjg1IDEuMjN2LTIuNTUzaC00LjIxdjIuNTUyTDguMjEgMTQuMTY1VjcuNzg3czIuMjIzLS41MDggMy44MDgtLjUwOGMxLjU4NiAwIDMuNzcuNTA4IDMuNzcuNTA4eiIvPgogICAgPC9nPgogICAgPGRlZnM+CiAgICAgICAgPGxpbmVhckdyYWRpZW50IGlkPSJBQllTU19fYiIgeDE9IjcuMTA3IiB4Mj0iMTcuOTgzIiB5MT0iNi43NjEiIHkyPSIxNS45ODYiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iI0EwMjVGMyIvPgogICAgICAgICAgICA8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiM0MjEyQTAiLz4KICAgICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgICAgIDxjbGlwUGF0aCBpZD0iQUJZU1NfX2EiPgogICAgICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMCAwaDI0djI0SDB6Ii8+CiAgICAgICAgPC9jbGlwUGF0aD4KICAgIDwvZGVmcz4KPC9zdmc+Cg==)
 * @see https://web3icons.io/tokens/ABYSS
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenABYSS = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenABYSS', __iconNode);
;
}),
];

//# sourceMappingURL=1qqr_%40web3icons_react_dist_01jmh4x._.js.map