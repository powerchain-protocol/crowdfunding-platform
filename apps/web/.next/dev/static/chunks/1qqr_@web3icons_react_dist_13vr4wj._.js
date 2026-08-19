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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenRARE.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenRARE
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-client] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: 'url(#RARE__a)',
                d: 'M11.786 3h1.286v2.143h3.441v4.285h-.394c-.322-1.761-2.289-3.891-4.148-3.891-1.393 0-2.932.677-2.932 1.933 0 1.53 1.624 2.344 2.747 2.858v3.236a11 11 0 0 1-.968-.373C9.005 12.334 7.025 11.22 7.072 9c.047-2.422 2.143-3.857 4.714-3.857z'
            }
        ],
        [
            'path',
            {
                fill: 'url(#RARE__b)',
                d: 'M11.786 18.857h.634l-4.564-.008H7.5v-4.706h.356c.454 2.1 2.237 4.286 4.706 4.286 1.787 0 2.571-1.072 2.49-2.623-.052-.943-.986-1.367-1.98-1.787v-3.304q.228.101.445.223c1.672.758 3.412 1.671 3.412 3.861 0 2.773-2.413 4.058-4.286 4.058l.429-.021V21h-1.286z'
            }
        ],
        [
            'defs',
            {},
            [
                [
                    'linearGradient',
                    {
                        id: 'RARE__a',
                        x1: '8.905',
                        x2: '19.591',
                        y1: '6.121',
                        y2: '13.159',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#E7F88F'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#50F0F8'
                            }
                        ]
                    ]
                ],
                [
                    'linearGradient',
                    {
                        id: 'RARE__b',
                        x1: '8.905',
                        x2: '19.591',
                        y1: '6.122',
                        y2: '13.16',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#E7F88F'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#50F0F8'
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
                d: 'M11.786 3h1.285v2.143h3.442v4.285h-.395c-.321-1.761-2.288-3.891-4.148-3.891-1.393 0-2.931.677-2.931 1.933 0 1.53 1.624 2.344 2.747 2.858v3.236a11 11 0 0 1-.969-.373C9.004 12.334 7.024 11.22 7.072 9c.047-2.422 2.142-3.857 4.714-3.857z'
            }
        ],
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M11.787 18.857h.634l-4.564-.008H7.5v-4.706h.356c.454 2.1 2.237 4.286 4.705 4.286 1.787 0 2.572-1.072 2.49-2.623-.051-.943-.985-1.367-1.98-1.787v-3.304q.228.101.446.223c1.671.758 3.411 1.671 3.411 3.861 0 2.773-2.412 4.058-4.285 4.058l.428-.021V21h-1.285z'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#RARE__a)'
            },
            [
                [
                    'path',
                    {
                        fill: 'url(#RARE__b)',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#000',
                        d: 'M11.81 4h1.143v1.905h3.058v3.809h-.35c-.286-1.566-2.034-3.459-3.688-3.459-1.238 0-2.605.602-2.605 1.718 0 1.36 1.444 2.084 2.442 2.541v2.876a10 10 0 0 1-.861-.332c-1.612-.761-3.372-1.752-3.33-3.725.042-2.152 1.905-3.428 4.19-3.428z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#000',
                        d: 'M11.81 18.095h.564l-4.057-.007h-.316v-4.183h.316c.404 1.867 1.989 3.81 4.183 3.81 1.588 0 2.285-.953 2.213-2.332-.046-.838-.876-1.215-1.76-1.588v-2.938q.202.09.396.199c1.486.674 3.032 1.485 3.032 3.432 0 2.464-2.144 3.607-3.809 3.607l.381-.019V20H11.81z'
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
                        id: 'RARE__b',
                        x1: '9.249',
                        x2: '18.748',
                        y1: '6.774',
                        y2: '13.03',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#E7F88F'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#50F0F8'
                            }
                        ]
                    ]
                ],
                [
                    'clipPath',
                    {
                        id: 'RARE__a'
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
 * @component @name TokenRARE
 * @description Web3Icon for TokenRARE
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9InVybCgjUkFSRV9fYSkiIGQ9Ik0xMS43ODYgM2gxLjI4NnYyLjE0M2gzLjQ0MXY0LjI4NWgtLjM5NGMtLjMyMi0xLjc2MS0yLjI4OS0zLjg5MS00LjE0OC0zLjg5MS0xLjM5MyAwLTIuOTMyLjY3Ny0yLjkzMiAxLjkzMyAwIDEuNTMgMS42MjQgMi4zNDQgMi43NDcgMi44NTh2My4yMzZhMTEgMTEgMCAwIDEtLjk2OC0uMzczQzkuMDA1IDEyLjMzNCA3LjAyNSAxMS4yMiA3LjA3MiA5Yy4wNDctMi40MjIgMi4xNDMtMy44NTcgNC43MTQtMy44NTd6Ii8+CiAgICA8cGF0aCBmaWxsPSJ1cmwoI1JBUkVfX2IpIiBkPSJNMTEuNzg2IDE4Ljg1N2guNjM0bC00LjU2NC0uMDA4SDcuNXYtNC43MDZoLjM1NmMuNDU0IDIuMSAyLjIzNyA0LjI4NiA0LjcwNiA0LjI4NiAxLjc4NyAwIDIuNTcxLTEuMDcyIDIuNDktMi42MjMtLjA1Mi0uOTQzLS45ODYtMS4zNjctMS45OC0xLjc4N3YtMy4zMDRxLjIyOC4xMDEuNDQ1LjIyM2MxLjY3Mi43NTggMy40MTIgMS42NzEgMy40MTIgMy44NjEgMCAyLjc3My0yLjQxMyA0LjA1OC00LjI4NiA0LjA1OGwuNDI5LS4wMjFWMjFoLTEuMjg2eiIvPgogICAgPGRlZnM+CiAgICAgICAgPGxpbmVhckdyYWRpZW50IGlkPSJSQVJFX19hIiB4MT0iOC45MDUiIHgyPSIxOS41OTEiIHkxPSI2LjEyMSIgeTI9IjEzLjE1OSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjRTdGODhGIi8+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzUwRjBGOCIvPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICAgICAgPGxpbmVhckdyYWRpZW50IGlkPSJSQVJFX19iIiB4MT0iOC45MDUiIHgyPSIxOS41OTEiIHkxPSI2LjEyMiIgeTI9IjEzLjE2IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiNFN0Y4OEYiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjNTBGMEY4Ii8+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgIDwvZGVmcz4KPC9zdmc+Cg==) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xMS43ODYgM2gxLjI4NXYyLjE0M2gzLjQ0MnY0LjI4NWgtLjM5NWMtLjMyMS0xLjc2MS0yLjI4OC0zLjg5MS00LjE0OC0zLjg5MS0xLjM5MyAwLTIuOTMxLjY3Ny0yLjkzMSAxLjkzMyAwIDEuNTMgMS42MjQgMi4zNDQgMi43NDcgMi44NTh2My4yMzZhMTEgMTEgMCAwIDEtLjk2OS0uMzczQzkuMDA0IDEyLjMzNCA3LjAyNCAxMS4yMiA3LjA3MiA5Yy4wNDctMi40MjIgMi4xNDItMy44NTcgNC43MTQtMy44NTd6Ii8+CiAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTEuNzg3IDE4Ljg1N2guNjM0bC00LjU2NC0uMDA4SDcuNXYtNC43MDZoLjM1NmMuNDU0IDIuMSAyLjIzNyA0LjI4NiA0LjcwNSA0LjI4NiAxLjc4NyAwIDIuNTcyLTEuMDcyIDIuNDktMi42MjMtLjA1MS0uOTQzLS45ODUtMS4zNjctMS45OC0xLjc4N3YtMy4zMDRxLjIyOC4xMDEuNDQ2LjIyM2MxLjY3MS43NTggMy40MTEgMS42NzEgMy40MTEgMy44NjEgMCAyLjc3My0yLjQxMiA0LjA1OC00LjI4NSA0LjA1OGwuNDI4LS4wMjFWMjFoLTEuMjg1eiIvPgo8L3N2Zz4K) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNSQVJFX19hKSI+CiAgICAgICAgPHBhdGggZmlsbD0idXJsKCNSQVJFX19iKSIgZD0iTTI0IDBIMHYyNGgyNHoiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjMDAwIiBkPSJNMTEuODEgNGgxLjE0M3YxLjkwNWgzLjA1OHYzLjgwOWgtLjM1Yy0uMjg2LTEuNTY2LTIuMDM0LTMuNDU5LTMuNjg4LTMuNDU5LTEuMjM4IDAtMi42MDUuNjAyLTIuNjA1IDEuNzE4IDAgMS4zNiAxLjQ0NCAyLjA4NCAyLjQ0MiAyLjU0MXYyLjg3NmExMCAxMCAwIDAgMS0uODYxLS4zMzJjLTEuNjEyLS43NjEtMy4zNzItMS43NTItMy4zMy0zLjcyNS4wNDItMi4xNTIgMS45MDUtMy40MjggNC4xOS0zLjQyOHoiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjMDAwIiBkPSJNMTEuODEgMTguMDk1aC41NjRsLTQuMDU3LS4wMDdoLS4zMTZ2LTQuMTgzaC4zMTZjLjQwNCAxLjg2NyAxLjk4OSAzLjgxIDQuMTgzIDMuODEgMS41ODggMCAyLjI4NS0uOTUzIDIuMjEzLTIuMzMyLS4wNDYtLjgzOC0uODc2LTEuMjE1LTEuNzYtMS41ODh2LTIuOTM4cS4yMDIuMDkuMzk2LjE5OWMxLjQ4Ni42NzQgMy4wMzIgMS40ODUgMy4wMzIgMy40MzIgMCAyLjQ2NC0yLjE0NCAzLjYwNy0zLjgwOSAzLjYwN2wuMzgxLS4wMTlWMjBIMTEuODF6Ii8+CiAgICA8L2c+CiAgICA8ZGVmcz4KICAgICAgICA8bGluZWFyR3JhZGllbnQgaWQ9IlJBUkVfX2IiIHgxPSI5LjI0OSIgeDI9IjE4Ljc0OCIgeTE9IjYuNzc0IiB5Mj0iMTMuMDMiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iI0U3Rjg4RiIvPgogICAgICAgICAgICA8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiM1MEYwRjgiLz4KICAgICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgICAgIDxjbGlwUGF0aCBpZD0iUkFSRV9fYSI+CiAgICAgICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0wIDBoMjR2MjRIMHoiLz4KICAgICAgICA8L2NsaXBQYXRoPgogICAgPC9kZWZzPgo8L3N2Zz4K)
 * @see https://web3icons.io/tokens/RARE
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenRARE = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenRARE', __iconNode);
;
}),
]);

//# sourceMappingURL=1qqr_%40web3icons_react_dist_13vr4wj._.js.map