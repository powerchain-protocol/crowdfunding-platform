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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/networks/NetworkArc.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>NetworkArc
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-client] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: 'url(#arc__a)',
                d: 'M3.5 20.999c.146-4.407.893-8.519 2.142-11.717C7.223 5.231 9.513 3 12.088 3s4.865 2.231 6.447 6.283c.822 2.107 1.427 4.61 1.786 7.334q.048.366.087.737.015.024.013.041s.21 1.317.256 3.604h-.024c-.313-.256-4-3.153-10.112-2.314.093-1.035.22-2.04.383-3.005l.027-.146a24.5 24.5 0 0 1 6.104.57q-.007-.056-.017-.115c-.33-2.06-.819-3.945-1.448-5.556-1.029-2.635-2.371-4.271-3.502-4.271-1.132 0-2.474 1.636-3.503 4.271q-.375.958-.679 2.034a30 30 0 0 0-.718 3.213A40 40 0 0 0 6.662 21H3.5z'
            }
        ],
        [
            'defs',
            {},
            [
                [
                    'linearGradient',
                    {
                        id: 'arc__a',
                        x1: '12.088',
                        x2: '12.088',
                        y1: '3',
                        y2: '21',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#182680'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#842D56'
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
                d: 'M3.5 20.999c.146-4.407.893-8.519 2.142-11.717C7.223 5.231 9.513 3 12.088 3s4.865 2.231 6.447 6.283c.822 2.107 1.427 4.61 1.786 7.334q.048.366.087.737.015.024.013.041s.21 1.317.256 3.604h-.024c-.313-.256-4-3.153-10.112-2.314.093-1.035.22-2.04.383-3.005l.027-.146a24.5 24.5 0 0 1 6.104.57q-.007-.056-.017-.115c-.33-2.06-.819-3.945-1.448-5.556-1.029-2.635-2.371-4.271-3.502-4.271-1.132 0-2.474 1.636-3.503 4.271q-.375.958-.679 2.034a30 30 0 0 0-.718 3.213A40 40 0 0 0 6.662 21H3.5z'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#arc__a)'
            },
            [
                [
                    'path',
                    {
                        fill: 'url(#arc__b)',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M4.5 19.999c.13-3.917.794-7.572 1.904-10.415C7.81 5.984 9.845 4 12.134 4s4.324 1.983 5.73 5.585c.731 1.872 1.27 4.098 1.588 6.52q.042.324.078.654.013.021.011.037s.187 1.17.227 3.204h-.02c-.279-.229-3.556-2.804-8.989-2.058.082-.92.195-1.814.34-2.671l.024-.13a21.8 21.8 0 0 1 5.426.508l-.015-.103c-.294-1.83-.728-3.506-1.287-4.939-.915-2.342-2.108-3.797-3.114-3.797S9.934 8.265 9.02 10.607a20 20 0 0 0-.604 1.808 27 27 0 0 0-.638 2.856A36 36 0 0 0 7.311 20H4.5z'
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
                        id: 'arc__b',
                        x1: '12',
                        x2: '12',
                        y1: '0',
                        y2: '24',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#182680'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#842D56'
                            }
                        ]
                    ]
                ],
                [
                    'clipPath',
                    {
                        id: 'arc__a'
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
 * @component @name NetworkArc
 * @description Web3Icon for NetworkArc
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9InVybCgjYXJjX19hKSIgZD0iTTMuNSAyMC45OTljLjE0Ni00LjQwNy44OTMtOC41MTkgMi4xNDItMTEuNzE3QzcuMjIzIDUuMjMxIDkuNTEzIDMgMTIuMDg4IDNzNC44NjUgMi4yMzEgNi40NDcgNi4yODNjLjgyMiAyLjEwNyAxLjQyNyA0LjYxIDEuNzg2IDcuMzM0cS4wNDguMzY2LjA4Ny43MzcuMDE1LjAyNC4wMTMuMDQxcy4yMSAxLjMxNy4yNTYgMy42MDRoLS4wMjRjLS4zMTMtLjI1Ni00LTMuMTUzLTEwLjExMi0yLjMxNC4wOTMtMS4wMzUuMjItMi4wNC4zODMtMy4wMDVsLjAyNy0uMTQ2YTI0LjUgMjQuNSAwIDAgMSA2LjEwNC41N3EtLjAwNy0uMDU2LS4wMTctLjExNWMtLjMzLTIuMDYtLjgxOS0zLjk0NS0xLjQ0OC01LjU1Ni0xLjAyOS0yLjYzNS0yLjM3MS00LjI3MS0zLjUwMi00LjI3MS0xLjEzMiAwLTIuNDc0IDEuNjM2LTMuNTAzIDQuMjcxcS0uMzc1Ljk1OC0uNjc5IDIuMDM0YTMwIDMwIDAgMCAwLS43MTggMy4yMTNBNDAgNDAgMCAwIDAgNi42NjIgMjFIMy41eiIvPgogICAgPGRlZnM+CiAgICAgICAgPGxpbmVhckdyYWRpZW50IGlkPSJhcmNfX2EiIHgxPSIxMi4wODgiIHgyPSIxMi4wODgiIHkxPSIzIiB5Mj0iMjEiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iIzE4MjY4MCIvPgogICAgICAgICAgICA8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiM4NDJENTYiLz4KICAgICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgPC9kZWZzPgo8L3N2Zz4K) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0zLjUgMjAuOTk5Yy4xNDYtNC40MDcuODkzLTguNTE5IDIuMTQyLTExLjcxN0M3LjIyMyA1LjIzMSA5LjUxMyAzIDEyLjA4OCAzczQuODY1IDIuMjMxIDYuNDQ3IDYuMjgzYy44MjIgMi4xMDcgMS40MjcgNC42MSAxLjc4NiA3LjMzNHEuMDQ4LjM2Ni4wODcuNzM3LjAxNS4wMjQuMDEzLjA0MXMuMjEgMS4zMTcuMjU2IDMuNjA0aC0uMDI0Yy0uMzEzLS4yNTYtNC0zLjE1My0xMC4xMTItMi4zMTQuMDkzLTEuMDM1LjIyLTIuMDQuMzgzLTMuMDA1bC4wMjctLjE0NmEyNC41IDI0LjUgMCAwIDEgNi4xMDQuNTdxLS4wMDctLjA1Ni0uMDE3LS4xMTVjLS4zMy0yLjA2LS44MTktMy45NDUtMS40NDgtNS41NTYtMS4wMjktMi42MzUtMi4zNzEtNC4yNzEtMy41MDItNC4yNzEtMS4xMzIgMC0yLjQ3NCAxLjYzNi0zLjUwMyA0LjI3MXEtLjM3NS45NTgtLjY3OSAyLjAzNGEzMCAzMCAwIDAgMC0uNzE4IDMuMjEzQTQwIDQwIDAgMCAwIDYuNjYyIDIxSDMuNXoiLz4KPC9zdmc+Cg==) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNhcmNfX2EpIj4KICAgICAgICA8cGF0aCBmaWxsPSJ1cmwoI2FyY19fYikiIGQ9Ik0yNCAwSDB2MjRoMjR6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTQuNSAxOS45OTljLjEzLTMuOTE3Ljc5NC03LjU3MiAxLjkwNC0xMC40MTVDNy44MSA1Ljk4NCA5Ljg0NSA0IDEyLjEzNCA0czQuMzI0IDEuOTgzIDUuNzMgNS41ODVjLjczMSAxLjg3MiAxLjI3IDQuMDk4IDEuNTg4IDYuNTJxLjA0Mi4zMjQuMDc4LjY1NC4wMTMuMDIxLjAxMS4wMzdzLjE4NyAxLjE3LjIyNyAzLjIwNGgtLjAyYy0uMjc5LS4yMjktMy41NTYtMi44MDQtOC45ODktMi4wNTguMDgyLS45Mi4xOTUtMS44MTQuMzQtMi42NzFsLjAyNC0uMTNhMjEuOCAyMS44IDAgMCAxIDUuNDI2LjUwOGwtLjAxNS0uMTAzYy0uMjk0LTEuODMtLjcyOC0zLjUwNi0xLjI4Ny00LjkzOS0uOTE1LTIuMzQyLTIuMTA4LTMuNzk3LTMuMTE0LTMuNzk3UzkuOTM0IDguMjY1IDkuMDIgMTAuNjA3YTIwIDIwIDAgMCAwLS42MDQgMS44MDggMjcgMjcgMCAwIDAtLjYzOCAyLjg1NkEzNiAzNiAwIDAgMCA3LjMxMSAyMEg0LjV6Ii8+CiAgICA8L2c+CiAgICA8ZGVmcz4KICAgICAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImFyY19fYiIgeDE9IjEyIiB4Mj0iMTIiIHkxPSIwIiB5Mj0iMjQiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iIzE4MjY4MCIvPgogICAgICAgICAgICA8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiM4NDJENTYiLz4KICAgICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgICAgIDxjbGlwUGF0aCBpZD0iYXJjX19hIj4KICAgICAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTAgMGgyNHYyNEgweiIvPgogICAgICAgIDwvY2xpcFBhdGg+CiAgICA8L2RlZnM+Cjwvc3ZnPgo=)
 * @see https://web3icons.io/networks/arc
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const NetworkArc = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWeb3Icon"])('NetworkArc', __iconNode);
;
}),
]);

//# sourceMappingURL=1qqr_%40web3icons_react_dist_1lgfn9w._.js.map