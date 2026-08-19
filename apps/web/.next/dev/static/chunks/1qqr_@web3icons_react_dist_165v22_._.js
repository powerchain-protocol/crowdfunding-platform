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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenENJ.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenENJ
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-client] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: 'url(#ENJ__a)',
                d: 'M19.06 16.8h-8.122c-1.9-.004-3.193-1.354-3.955-3h12.25C20.237 13.8 21 12.974 21 12s-.763-1.8-1.767-1.8H6.818c.6-1.636 2.312-3.002 4.12-3h8.121c1.003 0 1.767-.767 1.767-1.732 0-.974-.774-1.868-1.767-1.868h-8.121C6.552 3.6 3 7.374 3 12v.252c.064 2.18.928 4.25 2.41 5.771 1.48 1.52 3.463 2.373 5.528 2.377h8.121c1.004 0 1.767-.894 1.767-1.868s-.763-1.732-1.767-1.732'
            }
        ],
        [
            'defs',
            {},
            [
                [
                    'linearGradient',
                    {
                        id: 'ENJ__a',
                        x1: '20.175',
                        x2: '7.449',
                        y1: '16.331',
                        y2: '4.499',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#9468FF'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#ADF8FF'
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
                d: 'M19.06 16.8h-8.122c-1.9-.003-3.193-1.354-3.955-3h12.25C20.237 13.8 21 12.974 21 12s-.763-1.8-1.767-1.8H6.818c.6-1.636 2.312-3.002 4.12-3h8.121c1.003 0 1.767-.767 1.767-1.732 0-.974-.774-1.868-1.767-1.868h-8.12C6.551 3.6 3 7.374 3 12v.252c.064 2.181.928 4.25 2.41 5.771 1.48 1.52 3.463 2.373 5.528 2.377h8.121c1.004 0 1.767-.894 1.767-1.868s-.763-1.732-1.767-1.732'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#ENJ__a)'
            },
            [
                [
                    'path',
                    {
                        fill: 'url(#ENJ__b)',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M18.275 16.267h-7.219c-1.69-.003-2.838-1.204-3.516-2.667h10.89c.892 0 1.57-.734 1.57-1.6s-.678-1.6-1.57-1.6H7.393c.532-1.454 2.055-2.668 3.662-2.667h7.219c.89 0 1.57-.681 1.57-1.54 0-.865-.688-1.66-1.57-1.66h-7.219C7.157 4.533 4 7.888 4 12v.224c.057 1.939.825 3.778 2.142 5.13s3.079 2.11 4.914 2.113h7.219c.892 0 1.57-.795 1.57-1.66 0-.866-.678-1.54-1.57-1.54'
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
                        id: 'ENJ__b',
                        x1: '19.267',
                        x2: '7.954',
                        y1: '15.85',
                        y2: '5.332',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#9468FF'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#ADF8FF'
                            }
                        ]
                    ]
                ],
                [
                    'clipPath',
                    {
                        id: 'ENJ__a'
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
 * @component @name TokenENJ
 * @description Web3Icon for TokenENJ
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9InVybCgjRU5KX19hKSIgZD0iTTE5LjA2IDE2LjhoLTguMTIyYy0xLjktLjAwNC0zLjE5My0xLjM1NC0zLjk1NS0zaDEyLjI1QzIwLjIzNyAxMy44IDIxIDEyLjk3NCAyMSAxMnMtLjc2My0xLjgtMS43NjctMS44SDYuODE4Yy42LTEuNjM2IDIuMzEyLTMuMDAyIDQuMTItM2g4LjEyMWMxLjAwMyAwIDEuNzY3LS43NjcgMS43NjctMS43MzIgMC0uOTc0LS43NzQtMS44NjgtMS43NjctMS44NjhoLTguMTIxQzYuNTUyIDMuNiAzIDcuMzc0IDMgMTJ2LjI1MmMuMDY0IDIuMTguOTI4IDQuMjUgMi40MSA1Ljc3MSAxLjQ4IDEuNTIgMy40NjMgMi4zNzMgNS41MjggMi4zNzdoOC4xMjFjMS4wMDQgMCAxLjc2Ny0uODk0IDEuNzY3LTEuODY4cy0uNzYzLTEuNzMyLTEuNzY3LTEuNzMyIi8+CiAgICA8ZGVmcz4KICAgICAgICA8bGluZWFyR3JhZGllbnQgaWQ9IkVOSl9fYSIgeDE9IjIwLjE3NSIgeDI9IjcuNDQ5IiB5MT0iMTYuMzMxIiB5Mj0iNC40OTkiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iIzk0NjhGRiIvPgogICAgICAgICAgICA8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNBREY4RkYiLz4KICAgICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgPC9kZWZzPgo8L3N2Zz4K) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xOS4wNiAxNi44aC04LjEyMmMtMS45LS4wMDMtMy4xOTMtMS4zNTQtMy45NTUtM2gxMi4yNUMyMC4yMzcgMTMuOCAyMSAxMi45NzQgMjEgMTJzLS43NjMtMS44LTEuNzY3LTEuOEg2LjgxOGMuNi0xLjYzNiAyLjMxMi0zLjAwMiA0LjEyLTNoOC4xMjFjMS4wMDMgMCAxLjc2Ny0uNzY3IDEuNzY3LTEuNzMyIDAtLjk3NC0uNzc0LTEuODY4LTEuNzY3LTEuODY4aC04LjEyQzYuNTUxIDMuNiAzIDcuMzc0IDMgMTJ2LjI1MmMuMDY0IDIuMTgxLjkyOCA0LjI1IDIuNDEgNS43NzEgMS40OCAxLjUyIDMuNDYzIDIuMzczIDUuNTI4IDIuMzc3aDguMTIxYzEuMDA0IDAgMS43NjctLjg5NCAxLjc2Ny0xLjg2OHMtLjc2My0xLjczMi0xLjc2Ny0xLjczMiIvPgo8L3N2Zz4K) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNFTkpfX2EpIj4KICAgICAgICA8cGF0aCBmaWxsPSJ1cmwoI0VOSl9fYikiIGQ9Ik0yNCAwSDB2MjRoMjR6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTE4LjI3NSAxNi4yNjdoLTcuMjE5Yy0xLjY5LS4wMDMtMi44MzgtMS4yMDQtMy41MTYtMi42NjdoMTAuODljLjg5MiAwIDEuNTctLjczNCAxLjU3LTEuNnMtLjY3OC0xLjYtMS41Ny0xLjZINy4zOTNjLjUzMi0xLjQ1NCAyLjA1NS0yLjY2OCAzLjY2Mi0yLjY2N2g3LjIxOWMuODkgMCAxLjU3LS42ODEgMS41Ny0xLjU0IDAtLjg2NS0uNjg4LTEuNjYtMS41Ny0xLjY2aC03LjIxOUM3LjE1NyA0LjUzMyA0IDcuODg4IDQgMTJ2LjIyNGMuMDU3IDEuOTM5LjgyNSAzLjc3OCAyLjE0MiA1LjEzczMuMDc5IDIuMTEgNC45MTQgMi4xMTNoNy4yMTljLjg5MiAwIDEuNTctLjc5NSAxLjU3LTEuNjYgMC0uODY2LS42NzgtMS41NC0xLjU3LTEuNTQiLz4KICAgIDwvZz4KICAgIDxkZWZzPgogICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iRU5KX19iIiB4MT0iMTkuMjY3IiB4Mj0iNy45NTQiIHkxPSIxNS44NSIgeTI9IjUuMzMyIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiM5NDY4RkYiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjQURGOEZGIi8+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgICAgICA8Y2xpcFBhdGggaWQ9IkVOSl9fYSI+CiAgICAgICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0wIDBoMjR2MjRIMHoiLz4KICAgICAgICA8L2NsaXBQYXRoPgogICAgPC9kZWZzPgo8L3N2Zz4K)
 * @see https://web3icons.io/tokens/ENJ
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenENJ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenENJ', __iconNode);
;
}),
]);

//# sourceMappingURL=1qqr_%40web3icons_react_dist_165v22_._.js.map