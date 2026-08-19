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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenAXEL.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenAXEL
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-ssr] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: 'url(#AXEL__a)',
                d: 'M12.7 3.429a.782.782 0 0 0-1.395 0l-3.933 7.86 3.736 1.963 3.286-6.436zm2.442 4.878-2.847 5.57 7.635 4.006zm5.807 11.635-9.272-4.872L8.655 21h11.562a.788.788 0 0 0 .732-1.058M7.147 21l3.348-6.55-3.725-1.957-3.685 7.37A.787.787 0 0 0 3.783 21z'
            }
        ],
        [
            'defs',
            {},
            [
                [
                    'linearGradient',
                    {
                        id: 'AXEL__a',
                        x1: '7.952',
                        x2: '20.454',
                        y1: '11.998',
                        y2: '18.918',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#0642DE'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#0F36AF'
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
                d: 'M12.7 3.429a.782.782 0 0 0-1.395 0l-3.933 7.86 3.736 1.963 3.286-6.436zm2.442 4.878-2.847 5.57 7.635 4.006zm5.807 11.635-9.272-4.872L8.655 21h11.562a.787.787 0 0 0 .732-1.058M7.147 21l3.348-6.55-3.725-1.957-3.685 7.37A.787.787 0 0 0 3.783 21z'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#AXEL__a)'
            },
            [
                [
                    'path',
                    {
                        fill: 'url(#AXEL__b)',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M12.623 4.381a.695.695 0 0 0-1.24 0l-3.497 6.987 3.321 1.745 2.921-5.721zm2.17 4.336-2.53 4.951 6.786 3.561zm5.161 10.343-8.242-4.331L9.027 20h10.277a.702.702 0 0 0 .65-.94M7.686 20l2.976-5.821-3.31-1.74-3.276 6.55A.7.7 0 0 0 4.696 20z'
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
                        id: 'AXEL__b',
                        x1: '8.402',
                        x2: '19.514',
                        y1: '11.998',
                        y2: '18.149',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#0642DE'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#0F36AF'
                            }
                        ]
                    ]
                ],
                [
                    'clipPath',
                    {
                        id: 'AXEL__a'
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
 * @component @name TokenAXEL
 * @description Web3Icon for TokenAXEL
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9InVybCgjQVhFTF9fYSkiIGQ9Ik0xMi43IDMuNDI5YS43ODIuNzgyIDAgMCAwLTEuMzk1IDBsLTMuOTMzIDcuODYgMy43MzYgMS45NjMgMy4yODYtNi40MzZ6bTIuNDQyIDQuODc4LTIuODQ3IDUuNTcgNy42MzUgNC4wMDZ6bTUuODA3IDExLjYzNS05LjI3Mi00Ljg3Mkw4LjY1NSAyMWgxMS41NjJhLjc4OC43ODggMCAwIDAgLjczMi0xLjA1OE03LjE0NyAyMWwzLjM0OC02LjU1LTMuNzI1LTEuOTU3LTMuNjg1IDcuMzdBLjc4Ny43ODcgMCAwIDAgMy43ODMgMjF6Ii8+CiAgICA8ZGVmcz4KICAgICAgICA8bGluZWFyR3JhZGllbnQgaWQ9IkFYRUxfX2EiIHgxPSI3Ljk1MiIgeDI9IjIwLjQ1NCIgeTE9IjExLjk5OCIgeTI9IjE4LjkxOCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjMDY0MkRFIi8+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzBGMzZBRiIvPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICA8L2RlZnM+Cjwvc3ZnPgo=) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xMi43IDMuNDI5YS43ODIuNzgyIDAgMCAwLTEuMzk1IDBsLTMuOTMzIDcuODYgMy43MzYgMS45NjMgMy4yODYtNi40MzZ6bTIuNDQyIDQuODc4LTIuODQ3IDUuNTcgNy42MzUgNC4wMDZ6bTUuODA3IDExLjYzNS05LjI3Mi00Ljg3Mkw4LjY1NSAyMWgxMS41NjJhLjc4Ny43ODcgMCAwIDAgLjczMi0xLjA1OE03LjE0NyAyMWwzLjM0OC02LjU1LTMuNzI1LTEuOTU3LTMuNjg1IDcuMzdBLjc4Ny43ODcgMCAwIDAgMy43ODMgMjF6Ii8+Cjwvc3ZnPgo=) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNBWEVMX19hKSI+CiAgICAgICAgPHBhdGggZmlsbD0idXJsKCNBWEVMX19iKSIgZD0iTTI0IDBIMHYyNGgyNHoiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTIuNjIzIDQuMzgxYS42OTUuNjk1IDAgMCAwLTEuMjQgMGwtMy40OTcgNi45ODcgMy4zMjEgMS43NDUgMi45MjEtNS43MjF6bTIuMTcgNC4zMzYtMi41MyA0Ljk1MSA2Ljc4NiAzLjU2MXptNS4xNjEgMTAuMzQzLTguMjQyLTQuMzMxTDkuMDI3IDIwaDEwLjI3N2EuNzAyLjcwMiAwIDAgMCAuNjUtLjk0TTcuNjg2IDIwbDIuOTc2LTUuODIxLTMuMzEtMS43NC0zLjI3NiA2LjU1QS43LjcgMCAwIDAgNC42OTYgMjB6Ii8+CiAgICA8L2c+CiAgICA8ZGVmcz4KICAgICAgICA8bGluZWFyR3JhZGllbnQgaWQ9IkFYRUxfX2IiIHgxPSI4LjQwMiIgeDI9IjE5LjUxNCIgeTE9IjExLjk5OCIgeTI9IjE4LjE0OSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjMDY0MkRFIi8+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzBGMzZBRiIvPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICAgICAgPGNsaXBQYXRoIGlkPSJBWEVMX19hIj4KICAgICAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTAgMGgyNHYyNEgweiIvPgogICAgICAgIDwvY2xpcFBhdGg+CiAgICA8L2RlZnM+Cjwvc3ZnPgo=)
 * @see https://web3icons.io/tokens/AXEL
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenAXEL = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenAXEL', __iconNode);
;
}),
];

//# sourceMappingURL=1qqr_%40web3icons_react_dist_19zxs3h._.js.map