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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenCRYSTAL.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenCRYSTAL
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-client] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#D2E2DA',
                d: 'M12 6.273V3L3.273 21 6 18.818z'
            }
        ],
        [
            'path',
            {
                fill: '#7E8B92',
                d: 'M12 6.273V3l8.727 18L18 18.818z'
            }
        ],
        [
            'path',
            {
                fill: '#5A687A',
                d: 'M18 18.818H6L3.273 21h17.454z'
            }
        ],
        [
            'path',
            {
                fill: '#6A7C8B',
                d: 'm6 18.818 6-12.545 6 12.545z'
            }
        ],
        [
            'path',
            {
                fill: '#8AC4DE',
                d: 'M12 10.636V6.818l-2.728 5.454.819.818-1.637.819-1.909 4.636 2.182-1.91z'
            }
        ],
        [
            'path',
            {
                fill: '#58779F',
                d: 'M12 10.636V6.818l2.727 5.454-.818.818 1.636.819 1.91 4.636-2.183-1.91z'
            }
        ],
        [
            'path',
            {
                fill: '#475985',
                d: 'M15.272 16.637H8.727l-2.182 1.909h4.091l.818-.818h1.091l.818.818h4.09z'
            }
        ],
        [
            'path',
            {
                fill: 'url(#CRYSTAL__a)',
                d: 'm8.728 16.636 3.272-6 3.273 6z'
            }
        ],
        [
            'defs',
            {},
            [
                [
                    'linearGradient',
                    {
                        id: 'CRYSTAL__a',
                        x1: '10.364',
                        x2: '15.273',
                        y1: '13.636',
                        y2: '16.636',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#D2EDFB'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#91CCE5'
                            }
                        ]
                    ]
                ]
            ]
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#CRYSTAL__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#D2E2DA',
                        d: 'M12 6.909V4L4.242 20l2.425-1.94z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#7E8B92',
                        d: 'M12 6.909V4l7.758 16-2.425-1.94z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#5A687A',
                        d: 'M17.333 18.06H6.667L4.242 20h15.515z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#6A7C8B',
                        d: 'M6.667 18.06 12 6.91l5.333 11.15z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#8AC4DE',
                        d: 'M12 10.788V7.394l-2.424 4.848.727.727-1.455.728-1.697 4.12 1.94-1.696z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#58779F',
                        d: 'M12 10.788V7.394l2.424 4.848-.727.727 1.455.728 1.697 4.12-1.94-1.696z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#475985',
                        d: 'M14.909 16.122H9.09l-1.94 1.697h3.637l.727-.728h.97l.727.727h3.636z'
                    }
                ],
                [
                    'path',
                    {
                        fill: 'url(#CRYSTAL__b)',
                        d: 'm9.091 16.12 2.91-5.333 2.908 5.334z'
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
                        id: 'CRYSTAL__b',
                        x1: '10.546',
                        x2: '14.909',
                        y1: '13.454',
                        y2: '16.121',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#D2EDFB'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#91CCE5'
                            }
                        ]
                    ]
                ],
                [
                    'clipPath',
                    {
                        id: 'CRYSTAL__a'
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
 * @component @name TokenCRYSTAL
 * @description Web3Icon for TokenCRYSTAL
 *
 * @preview (branded, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNEMkUyREEiIGQ9Ik0xMiA2LjI3M1YzTDMuMjczIDIxIDYgMTguODE4eiIvPgogICAgPHBhdGggZmlsbD0iIzdFOEI5MiIgZD0iTTEyIDYuMjczVjNsOC43MjcgMThMMTggMTguODE4eiIvPgogICAgPHBhdGggZmlsbD0iIzVBNjg3QSIgZD0iTTE4IDE4LjgxOEg2TDMuMjczIDIxaDE3LjQ1NHoiLz4KICAgIDxwYXRoIGZpbGw9IiM2QTdDOEIiIGQ9Im02IDE4LjgxOCA2LTEyLjU0NSA2IDEyLjU0NXoiLz4KICAgIDxwYXRoIGZpbGw9IiM4QUM0REUiIGQ9Ik0xMiAxMC42MzZWNi44MThsLTIuNzI4IDUuNDU0LjgxOS44MTgtMS42MzcuODE5LTEuOTA5IDQuNjM2IDIuMTgyLTEuOTF6Ii8+CiAgICA8cGF0aCBmaWxsPSIjNTg3NzlGIiBkPSJNMTIgMTAuNjM2VjYuODE4bDIuNzI3IDUuNDU0LS44MTguODE4IDEuNjM2LjgxOSAxLjkxIDQuNjM2LTIuMTgzLTEuOTF6Ii8+CiAgICA8cGF0aCBmaWxsPSIjNDc1OTg1IiBkPSJNMTUuMjcyIDE2LjYzN0g4LjcyN2wtMi4xODIgMS45MDloNC4wOTFsLjgxOC0uODE4aDEuMDkxbC44MTguODE4aDQuMDl6Ii8+CiAgICA8cGF0aCBmaWxsPSJ1cmwoI0NSWVNUQUxfX2EpIiBkPSJtOC43MjggMTYuNjM2IDMuMjcyLTYgMy4yNzMgNnoiLz4KICAgIDxkZWZzPgogICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iQ1JZU1RBTF9fYSIgeDE9IjEwLjM2NCIgeDI9IjE1LjI3MyIgeTE9IjEzLjYzNiIgeTI9IjE2LjYzNiIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjRDJFREZCIi8+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzkxQ0NFNSIvPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICA8L2RlZnM+Cjwvc3ZnPgo=) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNDUllTVEFMX19hKSI+CiAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTI0IDBIMHYyNGgyNHoiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjRDJFMkRBIiBkPSJNMTIgNi45MDlWNEw0LjI0MiAyMGwyLjQyNS0xLjk0eiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiM3RThCOTIiIGQ9Ik0xMiA2LjkwOVY0bDcuNzU4IDE2LTIuNDI1LTEuOTR6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0iIzVBNjg3QSIgZD0iTTE3LjMzMyAxOC4wNkg2LjY2N0w0LjI0MiAyMGgxNS41MTV6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0iIzZBN0M4QiIgZD0iTTYuNjY3IDE4LjA2IDEyIDYuOTFsNS4zMzMgMTEuMTV6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0iIzhBQzRERSIgZD0iTTEyIDEwLjc4OFY3LjM5NGwtMi40MjQgNC44NDguNzI3LjcyNy0xLjQ1NS43MjgtMS42OTcgNC4xMiAxLjk0LTEuNjk2eiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiM1ODc3OUYiIGQ9Ik0xMiAxMC43ODhWNy4zOTRsMi40MjQgNC44NDgtLjcyNy43MjcgMS40NTUuNzI4IDEuNjk3IDQuMTItMS45NC0xLjY5NnoiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjNDc1OTg1IiBkPSJNMTQuOTA5IDE2LjEyMkg5LjA5bC0xLjk0IDEuNjk3aDMuNjM3bC43MjctLjcyOGguOTdsLjcyNy43MjdoMy42MzZ6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0idXJsKCNDUllTVEFMX19iKSIgZD0ibTkuMDkxIDE2LjEyIDIuOTEtNS4zMzMgMi45MDggNS4zMzR6Ii8+CiAgICA8L2c+CiAgICA8ZGVmcz4KICAgICAgICA8bGluZWFyR3JhZGllbnQgaWQ9IkNSWVNUQUxfX2IiIHgxPSIxMC41NDYiIHgyPSIxNC45MDkiIHkxPSIxMy40NTQiIHkyPSIxNi4xMjEiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iI0QyRURGQiIvPgogICAgICAgICAgICA8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiM5MUNDRTUiLz4KICAgICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgICAgIDxjbGlwUGF0aCBpZD0iQ1JZU1RBTF9fYSI+CiAgICAgICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0wIDBoMjR2MjRIMHoiLz4KICAgICAgICA8L2NsaXBQYXRoPgogICAgPC9kZWZzPgo8L3N2Zz4K)
 * @see https://web3icons.io/tokens/CRYSTAL
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenCRYSTAL = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenCRYSTAL', __iconNode);
;
}),
]);

//# sourceMappingURL=1qqr_%40web3icons_react_dist_1-bwaeg._.js.map