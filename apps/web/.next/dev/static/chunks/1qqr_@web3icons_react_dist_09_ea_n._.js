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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenSCLP.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenSCLP
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-client] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: 'url(#SCLP__a)',
                d: 'm15.674 4.077-4.288 4.409a.3.3 0 0 0-.042.037L8.23 11.635a.77.77 0 0 0 0 1.09l2.948 2.95-3.63 3.81a11 11 0 0 1-1.631-1.37C2.112 14.318 1.98 9.618 5.812 5.78c3.038-3.038 6.622-3.552 9.862-1.704'
            }
        ],
        [
            'path',
            {
                fill: 'url(#SCLP__b)',
                d: 'M18.225 18.187c-3.028 3.023-6.59 3.568-9.809 1.827l1.281-1.334 2.933-3.033 2.916-2.917a.78.78 0 0 0 0-1.09l-2.927-2.928 3.594-3.758.318-.328c.529.37 1.058.82 1.561 1.323 3.774 3.764 3.933 8.433.133 12.238'
            }
        ],
        [
            'defs',
            {},
            [
                [
                    'linearGradient',
                    {
                        id: 'SCLP__a',
                        x1: '17.767',
                        x2: '-4.099',
                        y1: '-3.604',
                        y2: '58.547',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#00DECA'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '.38',
                                stopColor: '#3A8AFA'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#1A6AF4'
                            }
                        ]
                    ]
                ],
                [
                    'linearGradient',
                    {
                        id: 'SCLP__b',
                        x1: '18.744',
                        x2: '-5.314',
                        y1: '-1.382',
                        y2: '51.148',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#00DECA'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '.38',
                                stopColor: '#3A8AFA'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#1A6AF4'
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
                d: 'm15.673 4.076-4.287 4.41a.3.3 0 0 0-.042.037L8.23 11.635a.77.77 0 0 0 0 1.09l2.948 2.949-3.63 3.811a11 11 0 0 1-1.631-1.371C2.112 14.319 1.98 9.618 5.812 5.781c3.038-3.038 6.622-3.552 9.861-1.705'
            }
        ],
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M18.225 18.188c-3.028 3.023-6.59 3.568-9.809 1.826l1.281-1.334 2.933-3.033 2.916-2.916a.78.78 0 0 0 0-1.09L12.62 8.712l3.594-3.758.318-.328c.53.37 1.059.82 1.561 1.323 3.775 3.764 3.933 8.432.133 12.238'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#SCLP__a)'
            },
            [
                [
                    'path',
                    {
                        fill: 'url(#SCLP__b)',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'm15.265 4.957-3.811 3.92a.2.2 0 0 0-.038.032L8.65 11.676a.684.684 0 0 0 0 .97l2.62 2.62-3.227 3.388a10 10 0 0 1-1.45-1.22c-3.382-3.373-3.5-7.55-.093-10.962 2.7-2.7 5.886-3.157 8.765-1.515'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M17.533 17.5c-2.691 2.687-5.858 3.172-8.719 1.624l1.14-1.186 2.606-2.696 2.592-2.592a.693.693 0 0 0 0-.97l-2.602-2.6 3.195-3.341.282-.292c.47.33.941.73 1.388 1.177 3.355 3.345 3.496 7.495.118 10.878'
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
                        id: 'SCLP__b',
                        x1: '17.127',
                        x2: '-2.31',
                        y1: '-1.871',
                        y2: '53.375',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#00DECA'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '.38',
                                stopColor: '#3A8AFA'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#1A6AF4'
                            }
                        ]
                    ]
                ],
                [
                    'clipPath',
                    {
                        id: 'SCLP__a'
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
 * @component @name TokenSCLP
 * @description Web3Icon for TokenSCLP
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9InVybCgjU0NMUF9fYSkiIGQ9Im0xNS42NzQgNC4wNzctNC4yODggNC40MDlhLjMuMyAwIDAgMC0uMDQyLjAzN0w4LjIzIDExLjYzNWEuNzcuNzcgMCAwIDAgMCAxLjA5bDIuOTQ4IDIuOTUtMy42MyAzLjgxYTExIDExIDAgMCAxLTEuNjMxLTEuMzdDMi4xMTIgMTQuMzE4IDEuOTggOS42MTggNS44MTIgNS43OGMzLjAzOC0zLjAzOCA2LjYyMi0zLjU1MiA5Ljg2Mi0xLjcwNCIvPgogICAgPHBhdGggZmlsbD0idXJsKCNTQ0xQX19iKSIgZD0iTTE4LjIyNSAxOC4xODdjLTMuMDI4IDMuMDIzLTYuNTkgMy41NjgtOS44MDkgMS44MjdsMS4yODEtMS4zMzQgMi45MzMtMy4wMzMgMi45MTYtMi45MTdhLjc4Ljc4IDAgMCAwIDAtMS4wOWwtMi45MjctMi45MjggMy41OTQtMy43NTguMzE4LS4zMjhjLjUyOS4zNyAxLjA1OC44MiAxLjU2MSAxLjMyMyAzLjc3NCAzLjc2NCAzLjkzMyA4LjQzMy4xMzMgMTIuMjM4Ii8+CiAgICA8ZGVmcz4KICAgICAgICA8bGluZWFyR3JhZGllbnQgaWQ9IlNDTFBfX2EiIHgxPSIxNy43NjciIHgyPSItNC4wOTkiIHkxPSItMy42MDQiIHkyPSI1OC41NDciIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iIzAwREVDQSIvPgogICAgICAgICAgICA8c3RvcCBvZmZzZXQ9Ii4zOCIgc3RvcC1jb2xvcj0iIzNBOEFGQSIvPgogICAgICAgICAgICA8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMxQTZBRjQiLz4KICAgICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iU0NMUF9fYiIgeDE9IjE4Ljc0NCIgeDI9Ii01LjMxNCIgeTE9Ii0xLjM4MiIgeTI9IjUxLjE0OCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjMDBERUNBIi8+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iLjM4IiBzdG9wLWNvbG9yPSIjM0E4QUZBIi8+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzFBNkFGNCIvPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICA8L2RlZnM+Cjwvc3ZnPgo=) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Im0xNS42NzMgNC4wNzYtNC4yODcgNC40MWEuMy4zIDAgMCAwLS4wNDIuMDM3TDguMjMgMTEuNjM1YS43Ny43NyAwIDAgMCAwIDEuMDlsMi45NDggMi45NDktMy42MyAzLjgxMWExMSAxMSAwIDAgMS0xLjYzMS0xLjM3MUMyLjExMiAxNC4zMTkgMS45OCA5LjYxOCA1LjgxMiA1Ljc4MWMzLjAzOC0zLjAzOCA2LjYyMi0zLjU1MiA5Ljg2MS0xLjcwNSIvPgogICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTE4LjIyNSAxOC4xODhjLTMuMDI4IDMuMDIzLTYuNTkgMy41NjgtOS44MDkgMS44MjZsMS4yODEtMS4zMzQgMi45MzMtMy4wMzMgMi45MTYtMi45MTZhLjc4Ljc4IDAgMCAwIDAtMS4wOUwxMi42MiA4LjcxMmwzLjU5NC0zLjc1OC4zMTgtLjMyOGMuNTMuMzcgMS4wNTkuODIgMS41NjEgMS4zMjMgMy43NzUgMy43NjQgMy45MzMgOC40MzIuMTMzIDEyLjIzOCIvPgo8L3N2Zz4K) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNTQ0xQX19hKSI+CiAgICAgICAgPHBhdGggZmlsbD0idXJsKCNTQ0xQX19iKSIgZD0iTTI0IDBIMHYyNGgyNHoiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJtMTUuMjY1IDQuOTU3LTMuODExIDMuOTJhLjIuMiAwIDAgMC0uMDM4LjAzMkw4LjY1IDExLjY3NmEuNjg0LjY4NCAwIDAgMCAwIC45N2wyLjYyIDIuNjItMy4yMjcgMy4zODhhMTAgMTAgMCAwIDEtMS40NS0xLjIyYy0zLjM4Mi0zLjM3My0zLjUtNy41NS0uMDkzLTEwLjk2MiAyLjctMi43IDUuODg2LTMuMTU3IDguNzY1LTEuNTE1Ii8+CiAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTE3LjUzMyAxNy41Yy0yLjY5MSAyLjY4Ny01Ljg1OCAzLjE3Mi04LjcxOSAxLjYyNGwxLjE0LTEuMTg2IDIuNjA2LTIuNjk2IDIuNTkyLTIuNTkyYS42OTMuNjkzIDAgMCAwIDAtLjk3bC0yLjYwMi0yLjYgMy4xOTUtMy4zNDEuMjgyLS4yOTJjLjQ3LjMzLjk0MS43MyAxLjM4OCAxLjE3NyAzLjM1NSAzLjM0NSAzLjQ5NiA3LjQ5NS4xMTggMTAuODc4Ii8+CiAgICA8L2c+CiAgICA8ZGVmcz4KICAgICAgICA8bGluZWFyR3JhZGllbnQgaWQ9IlNDTFBfX2IiIHgxPSIxNy4xMjciIHgyPSItMi4zMSIgeTE9Ii0xLjg3MSIgeTI9IjUzLjM3NSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjMDBERUNBIi8+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iLjM4IiBzdG9wLWNvbG9yPSIjM0E4QUZBIi8+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzFBNkFGNCIvPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICAgICAgPGNsaXBQYXRoIGlkPSJTQ0xQX19hIj4KICAgICAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTAgMGgyNHYyNEgweiIvPgogICAgICAgIDwvY2xpcFBhdGg+CiAgICA8L2RlZnM+Cjwvc3ZnPgo=)
 * @see https://web3icons.io/tokens/SCLP
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenSCLP = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenSCLP', __iconNode);
;
}),
]);

//# sourceMappingURL=1qqr_%40web3icons_react_dist_09_ea_n._.js.map