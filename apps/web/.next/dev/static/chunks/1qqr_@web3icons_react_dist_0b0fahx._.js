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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenWELT.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenWELT
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-client] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: 'url(#WELT__a)',
                d: 'M19.187 3.493a1.09 1.09 0 0 1-.014 1.218q-.124.18-.308.298L6.321 13.19a1.092 1.092 0 0 1-1.189-1.832l12.544-8.181a1.09 1.09 0 0 1 1.511.321zm-5.28 16.144a1.363 1.363 0 1 1-2.726 0 1.363 1.363 0 0 1 2.727 0m4.964-9.447a1.093 1.093 0 0 0-1.2-1.827L5.127 16.544a1.092 1.092 0 1 0 1.2 1.827z'
            }
        ],
        [
            'defs',
            {},
            [
                [
                    'linearGradient',
                    {
                        id: 'WELT__a',
                        x1: '18.271',
                        x2: '4.636',
                        y1: '8.183',
                        y2: '16.91',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#CD5792'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '.49',
                                stopColor: '#B041AD'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#7F67CF'
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
                d: 'M19.187 3.493a1.09 1.09 0 0 1-.322 1.516L6.321 13.19a1.092 1.092 0 0 1-1.189-1.832l12.544-8.181a1.09 1.09 0 0 1 1.511.321zm-5.28 16.144a1.364 1.364 0 1 1-2.727 0 1.364 1.364 0 0 1 2.728 0m4.964-9.447a1.093 1.093 0 1 0-1.2-1.827L5.127 16.544a1.092 1.092 0 1 0 1.2 1.827z'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#WELT__a)'
            },
            [
                [
                    'path',
                    {
                        fill: 'url(#WELT__b)',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M18.388 4.438a.97.97 0 0 1-.286 1.348l-11.15 7.272a.971.971 0 0 1-1.057-1.63l11.15-7.271a.97.97 0 0 1 1.343.286zm-4.692 14.35a1.212 1.212 0 1 1-2.425 0 1.212 1.212 0 0 1 2.425 0m4.411-8.397a.972.972 0 0 0-1.066-1.624L5.89 16.04a.972.972 0 0 0 1.066 1.624z'
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
                        id: 'WELT__b',
                        x1: '17.574',
                        x2: '5.454',
                        y1: '8.607',
                        y2: '16.364',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#CD5792'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '.49',
                                stopColor: '#B041AD'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#7F67CF'
                            }
                        ]
                    ]
                ],
                [
                    'clipPath',
                    {
                        id: 'WELT__a'
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
 * @component @name TokenWELT
 * @description Web3Icon for TokenWELT
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9InVybCgjV0VMVF9fYSkiIGQ9Ik0xOS4xODcgMy40OTNhMS4wOSAxLjA5IDAgMCAxLS4wMTQgMS4yMThxLS4xMjQuMTgtLjMwOC4yOThMNi4zMjEgMTMuMTlhMS4wOTIgMS4wOTIgMCAwIDEtMS4xODktMS44MzJsMTIuNTQ0LTguMTgxYTEuMDkgMS4wOSAwIDAgMSAxLjUxMS4zMjF6bS01LjI4IDE2LjE0NGExLjM2MyAxLjM2MyAwIDEgMS0yLjcyNiAwIDEuMzYzIDEuMzYzIDAgMCAxIDIuNzI3IDBtNC45NjQtOS40NDdhMS4wOTMgMS4wOTMgMCAwIDAtMS4yLTEuODI3TDUuMTI3IDE2LjU0NGExLjA5MiAxLjA5MiAwIDEgMCAxLjIgMS44Mjd6Ii8+CiAgICA8ZGVmcz4KICAgICAgICA8bGluZWFyR3JhZGllbnQgaWQ9IldFTFRfX2EiIHgxPSIxOC4yNzEiIHgyPSI0LjYzNiIgeTE9IjguMTgzIiB5Mj0iMTYuOTEiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iI0NENTc5MiIvPgogICAgICAgICAgICA8c3RvcCBvZmZzZXQ9Ii40OSIgc3RvcC1jb2xvcj0iI0IwNDFBRCIvPgogICAgICAgICAgICA8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiM3RjY3Q0YiLz4KICAgICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgPC9kZWZzPgo8L3N2Zz4K) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xOS4xODcgMy40OTNhMS4wOSAxLjA5IDAgMCAxLS4zMjIgMS41MTZMNi4zMjEgMTMuMTlhMS4wOTIgMS4wOTIgMCAwIDEtMS4xODktMS44MzJsMTIuNTQ0LTguMTgxYTEuMDkgMS4wOSAwIDAgMSAxLjUxMS4zMjF6bS01LjI4IDE2LjE0NGExLjM2NCAxLjM2NCAwIDEgMS0yLjcyNyAwIDEuMzY0IDEuMzY0IDAgMCAxIDIuNzI4IDBtNC45NjQtOS40NDdhMS4wOTMgMS4wOTMgMCAxIDAtMS4yLTEuODI3TDUuMTI3IDE2LjU0NGExLjA5MiAxLjA5MiAwIDEgMCAxLjIgMS44Mjd6Ii8+Cjwvc3ZnPgo=) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNXRUxUX19hKSI+CiAgICAgICAgPHBhdGggZmlsbD0idXJsKCNXRUxUX19iKSIgZD0iTTI0IDBIMHYyNGgyNHoiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTguMzg4IDQuNDM4YS45Ny45NyAwIDAgMS0uMjg2IDEuMzQ4bC0xMS4xNSA3LjI3MmEuOTcxLjk3MSAwIDAgMS0xLjA1Ny0xLjYzbDExLjE1LTcuMjcxYS45Ny45NyAwIDAgMSAxLjM0My4yODZ6bS00LjY5MiAxNC4zNWExLjIxMiAxLjIxMiAwIDEgMS0yLjQyNSAwIDEuMjEyIDEuMjEyIDAgMCAxIDIuNDI1IDBtNC40MTEtOC4zOTdhLjk3Mi45NzIgMCAwIDAtMS4wNjYtMS42MjRMNS44OSAxNi4wNGEuOTcyLjk3MiAwIDAgMCAxLjA2NiAxLjYyNHoiLz4KICAgIDwvZz4KICAgIDxkZWZzPgogICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iV0VMVF9fYiIgeDE9IjE3LjU3NCIgeDI9IjUuNDU0IiB5MT0iOC42MDciIHkyPSIxNi4zNjQiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iI0NENTc5MiIvPgogICAgICAgICAgICA8c3RvcCBvZmZzZXQ9Ii40OSIgc3RvcC1jb2xvcj0iI0IwNDFBRCIvPgogICAgICAgICAgICA8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiM3RjY3Q0YiLz4KICAgICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgICAgIDxjbGlwUGF0aCBpZD0iV0VMVF9fYSI+CiAgICAgICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0wIDBoMjR2MjRIMHoiLz4KICAgICAgICA8L2NsaXBQYXRoPgogICAgPC9kZWZzPgo8L3N2Zz4K)
 * @see https://web3icons.io/tokens/WELT
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenWELT = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenWELT', __iconNode);
;
}),
]);

//# sourceMappingURL=1qqr_%40web3icons_react_dist_0b0fahx._.js.map