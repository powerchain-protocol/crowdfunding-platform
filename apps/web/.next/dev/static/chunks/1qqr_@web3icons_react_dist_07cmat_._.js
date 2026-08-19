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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenAIMX.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenAIMX
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-client] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: 'url(#AIMX__a)',
                d: 'm10.628 3.915-.084.064c-1.223 1.274-.457 4.125-1.126 6.37-.63 2.124-3.867 3.333-5.238 4.633a3.212 3.212 0 1 0 4.408 4.646H8.6a2.4 2.4 0 0 0 .553-.856l.032-.09v-.032a3 3 0 0 0 .129-.399c.618-2.265.232-6.113.76-7.49.662-1.73 1.859-2.606 2.856-3.565.689-.656 1.126-1.351 1.023-2.11V5.04a1.93 1.93 0 0 0-1.568-1.698 1.9 1.9 0 0 0-.82.025c-.36.09-.688.283-.939.547m6.511 14.844a1.931 1.931 0 1 0 3.863 0 1.931 1.931 0 0 0-3.863 0'
            }
        ],
        [
            'defs',
            {},
            [
                [
                    'linearGradient',
                    {
                        id: 'AIMX__a',
                        x1: '5.642',
                        x2: '18.072',
                        y1: '6.147',
                        y2: '18.795',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#135554'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#00A790'
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
                d: 'm10.628 3.915-.084.064c-1.223 1.274-.457 4.125-1.126 6.37-.63 2.124-3.867 3.333-5.238 4.633a3.212 3.212 0 1 0 4.408 4.646H8.6a2.4 2.4 0 0 0 .553-.856l.032-.09v-.032q.08-.195.129-.399c.618-2.265.232-6.113.76-7.49.662-1.73 1.859-2.606 2.856-3.565.689-.656 1.126-1.351 1.023-2.11V5.04a1.93 1.93 0 0 0-2.387-1.673 1.96 1.96 0 0 0-.94.547m6.511 14.844a1.931 1.931 0 1 0 3.863 0 1.931 1.931 0 0 0-3.863 0'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#AIMX__a)'
            },
            [
                [
                    'path',
                    {
                        fill: 'url(#AIMX__b)',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'm10.78 4.813-.074.057c-1.087 1.133-.406 3.667-1.001 5.663-.56 1.887-3.438 2.963-4.656 4.118a2.854 2.854 0 1 0 3.918 4.13h.011a2.1 2.1 0 0 0 .492-.761l.029-.08v-.029q.07-.172.114-.355c.55-2.013.206-5.433.675-6.657.59-1.539 1.653-2.317 2.54-3.169.612-.583 1-1.201.909-1.876v-.04a1.716 1.716 0 0 0-2.122-1.487 1.74 1.74 0 0 0-.835.486m5.788 13.195a1.716 1.716 0 1 0 3.432 0 1.716 1.716 0 0 0-3.432 0'
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
                        id: 'AIMX__b',
                        x1: '6.349',
                        x2: '17.397',
                        y1: '6.797',
                        y2: '18.04',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#135554'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#00A790'
                            }
                        ]
                    ]
                ],
                [
                    'clipPath',
                    {
                        id: 'AIMX__a'
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
 * @component @name TokenAIMX
 * @description Web3Icon for TokenAIMX
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9InVybCgjQUlNWF9fYSkiIGQ9Im0xMC42MjggMy45MTUtLjA4NC4wNjRjLTEuMjIzIDEuMjc0LS40NTcgNC4xMjUtMS4xMjYgNi4zNy0uNjMgMi4xMjQtMy44NjcgMy4zMzMtNS4yMzggNC42MzNhMy4yMTIgMy4yMTIgMCAxIDAgNC40MDggNC42NDZIOC42YTIuNCAyLjQgMCAwIDAgLjU1My0uODU2bC4wMzItLjA5di0uMDMyYTMgMyAwIDAgMCAuMTI5LS4zOTljLjYxOC0yLjI2NS4yMzItNi4xMTMuNzYtNy40OS42NjItMS43MyAxLjg1OS0yLjYwNiAyLjg1Ni0zLjU2NS42ODktLjY1NiAxLjEyNi0xLjM1MSAxLjAyMy0yLjExVjUuMDRhMS45MyAxLjkzIDAgMCAwLTEuNTY4LTEuNjk4IDEuOSAxLjkgMCAwIDAtLjgyLjAyNWMtLjM2LjA5LS42ODguMjgzLS45MzkuNTQ3bTYuNTExIDE0Ljg0NGExLjkzMSAxLjkzMSAwIDEgMCAzLjg2MyAwIDEuOTMxIDEuOTMxIDAgMCAwLTMuODYzIDAiLz4KICAgIDxkZWZzPgogICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iQUlNWF9fYSIgeDE9IjUuNjQyIiB4Mj0iMTguMDcyIiB5MT0iNi4xNDciIHkyPSIxOC43OTUiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iIzEzNTU1NCIvPgogICAgICAgICAgICA8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMwMEE3OTAiLz4KICAgICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgPC9kZWZzPgo8L3N2Zz4K) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Im0xMC42MjggMy45MTUtLjA4NC4wNjRjLTEuMjIzIDEuMjc0LS40NTcgNC4xMjUtMS4xMjYgNi4zNy0uNjMgMi4xMjQtMy44NjcgMy4zMzMtNS4yMzggNC42MzNhMy4yMTIgMy4yMTIgMCAxIDAgNC40MDggNC42NDZIOC42YTIuNCAyLjQgMCAwIDAgLjU1My0uODU2bC4wMzItLjA5di0uMDMycS4wOC0uMTk1LjEyOS0uMzk5Yy42MTgtMi4yNjUuMjMyLTYuMTEzLjc2LTcuNDkuNjYyLTEuNzMgMS44NTktMi42MDYgMi44NTYtMy41NjUuNjg5LS42NTYgMS4xMjYtMS4zNTEgMS4wMjMtMi4xMVY1LjA0YTEuOTMgMS45MyAwIDAgMC0yLjM4Ny0xLjY3MyAxLjk2IDEuOTYgMCAwIDAtLjk0LjU0N202LjUxMSAxNC44NDRhMS45MzEgMS45MzEgMCAxIDAgMy44NjMgMCAxLjkzMSAxLjkzMSAwIDAgMC0zLjg2MyAwIi8+Cjwvc3ZnPgo=) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNBSU1YX19hKSI+CiAgICAgICAgPHBhdGggZmlsbD0idXJsKCNBSU1YX19iKSIgZD0iTTI0IDBIMHYyNGgyNHoiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJtMTAuNzggNC44MTMtLjA3NC4wNTdjLTEuMDg3IDEuMTMzLS40MDYgMy42NjctMS4wMDEgNS42NjMtLjU2IDEuODg3LTMuNDM4IDIuOTYzLTQuNjU2IDQuMTE4YTIuODU0IDIuODU0IDAgMSAwIDMuOTE4IDQuMTNoLjAxMWEyLjEgMi4xIDAgMCAwIC40OTItLjc2MWwuMDI5LS4wOHYtLjAyOXEuMDctLjE3Mi4xMTQtLjM1NWMuNTUtMi4wMTMuMjA2LTUuNDMzLjY3NS02LjY1Ny41OS0xLjUzOSAxLjY1My0yLjMxNyAyLjU0LTMuMTY5LjYxMi0uNTgzIDEtMS4yMDEuOTA5LTEuODc2di0uMDRhMS43MTYgMS43MTYgMCAwIDAtMi4xMjItMS40ODcgMS43NCAxLjc0IDAgMCAwLS44MzUuNDg2bTUuNzg4IDEzLjE5NWExLjcxNiAxLjcxNiAwIDEgMCAzLjQzMiAwIDEuNzE2IDEuNzE2IDAgMCAwLTMuNDMyIDAiLz4KICAgIDwvZz4KICAgIDxkZWZzPgogICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iQUlNWF9fYiIgeDE9IjYuMzQ5IiB4Mj0iMTcuMzk3IiB5MT0iNi43OTciIHkyPSIxOC4wNCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjMTM1NTU0Ii8+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzAwQTc5MCIvPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICAgICAgPGNsaXBQYXRoIGlkPSJBSU1YX19hIj4KICAgICAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTAgMGgyNHYyNEgweiIvPgogICAgICAgIDwvY2xpcFBhdGg+CiAgICA8L2RlZnM+Cjwvc3ZnPgo=)
 * @see https://web3icons.io/tokens/AIMX
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenAIMX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenAIMX', __iconNode);
;
}),
]);

//# sourceMappingURL=1qqr_%40web3icons_react_dist_07cmat_._.js.map