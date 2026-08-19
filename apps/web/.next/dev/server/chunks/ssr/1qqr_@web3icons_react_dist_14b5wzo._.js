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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/networks/NetworkBobaSepolia.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>NetworkBobaSepolia
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-ssr] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#AEDB01',
                d: 'M12.05 14.998H3.842V3h8.208a5.1 5.1 0 0 1 5.095 5.102v1.794a5.1 5.1 0 0 1-5.095 5.102'
            }
        ],
        [
            'path',
            {
                fill: '#B0B1AC',
                d: 'M14.159 21H3.842v-6.002a5.993 5.993 0 0 1 5.996-5.996h4.32a5.999 5.999 0 0 1 0 11.998'
            }
        ],
        [
            'path',
            {
                fill: '#5D6D3C',
                d: 'M17.144 9.795v.101a5.1 5.1 0 0 1-5.101 5.102h-8.2A6 6 0 0 1 9.84 9.002h4.32c1.092 0 2.11.293 2.987.793'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M12.05 14.998H3.842V3h8.208a5.1 5.1 0 0 1 5.095 5.102v1.794a5.1 5.1 0 0 1-5.095 5.102'
            }
        ],
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M14.159 21H3.842v-6.002a5.993 5.993 0 0 1 5.996-5.996h4.32a6 6 0 1 1 0 11.998'
            }
        ],
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M17.144 9.795v.101a5.1 5.1 0 0 1-5.101 5.102h-8.2A6 6 0 0 1 9.84 9.002h4.32c1.092 0 2.11.293 2.987.793'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#boba__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#B0B1AC',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M12.044 14.665H4.749V4h7.295a4.534 4.534 0 0 1 4.529 4.535v1.595a4.535 4.535 0 0 1-4.53 4.535'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M13.919 20h-9.17v-5.335a5.327 5.327 0 0 1 5.329-5.33h3.84a5.333 5.333 0 1 1 0 10.665'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M16.573 10.04v.09a4.535 4.535 0 0 1-4.535 4.535H4.75a5.33 5.33 0 0 1 5.329-5.33h3.84c.97 0 1.876.26 2.655.705'
                    }
                ]
            ]
        ],
        [
            'defs',
            {},
            [
                [
                    'clipPath',
                    {
                        id: 'boba__a'
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
 * @component @name NetworkBobaSepolia
 * @description Web3Icon for NetworkBobaSepolia
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNBRURCMDEiIGQ9Ik0xMi4wNSAxNC45OThIMy44NDJWM2g4LjIwOGE1LjEgNS4xIDAgMCAxIDUuMDk1IDUuMTAydjEuNzk0YTUuMSA1LjEgMCAwIDEtNS4wOTUgNS4xMDIiLz4KICAgIDxwYXRoIGZpbGw9IiNCMEIxQUMiIGQ9Ik0xNC4xNTkgMjFIMy44NDJ2LTYuMDAyYTUuOTkzIDUuOTkzIDAgMCAxIDUuOTk2LTUuOTk2aDQuMzJhNS45OTkgNS45OTkgMCAwIDEgMCAxMS45OTgiLz4KICAgIDxwYXRoIGZpbGw9IiM1RDZEM0MiIGQ9Ik0xNy4xNDQgOS43OTV2LjEwMWE1LjEgNS4xIDAgMCAxLTUuMTAxIDUuMTAyaC04LjJBNiA2IDAgMCAxIDkuODQgOS4wMDJoNC4zMmMxLjA5MiAwIDIuMTEuMjkzIDIuOTg3Ljc5MyIvPgo8L3N2Zz4K) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xMi4wNSAxNC45OThIMy44NDJWM2g4LjIwOGE1LjEgNS4xIDAgMCAxIDUuMDk1IDUuMTAydjEuNzk0YTUuMSA1LjEgMCAwIDEtNS4wOTUgNS4xMDIiLz4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xNC4xNTkgMjFIMy44NDJ2LTYuMDAyYTUuOTkzIDUuOTkzIDAgMCAxIDUuOTk2LTUuOTk2aDQuMzJhNiA2IDAgMSAxIDAgMTEuOTk4Ii8+CiAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTcuMTQ0IDkuNzk1di4xMDFhNS4xIDUuMSAwIDAgMS01LjEwMSA1LjEwMmgtOC4yQTYgNiAwIDAgMSA5Ljg0IDkuMDAyaDQuMzJjMS4wOTIgMCAyLjExLjI5MyAyLjk4Ny43OTMiLz4KPC9zdmc+Cg==) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNib2JhX19hKSI+CiAgICAgICAgPHBhdGggZmlsbD0iI0IwQjFBQyIgZD0iTTI0IDBIMHYyNGgyNHoiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTIuMDQ0IDE0LjY2NUg0Ljc0OVY0aDcuMjk1YTQuNTM0IDQuNTM0IDAgMCAxIDQuNTI5IDQuNTM1djEuNTk1YTQuNTM1IDQuNTM1IDAgMCAxLTQuNTMgNC41MzUiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTMuOTE5IDIwaC05LjE3di01LjMzNWE1LjMyNyA1LjMyNyAwIDAgMSA1LjMyOS01LjMzaDMuODRhNS4zMzMgNS4zMzMgMCAxIDEgMCAxMC42NjUiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTYuNTczIDEwLjA0di4wOWE0LjUzNSA0LjUzNSAwIDAgMS00LjUzNSA0LjUzNUg0Ljc1YTUuMzMgNS4zMyAwIDAgMSA1LjMyOS01LjMzaDMuODRjLjk3IDAgMS44NzYuMjYgMi42NTUuNzA1Ii8+CiAgICA8L2c+CiAgICA8ZGVmcz4KICAgICAgICA8Y2xpcFBhdGggaWQ9ImJvYmFfX2EiPgogICAgICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMCAwaDI0djI0SDB6Ii8+CiAgICAgICAgPC9jbGlwUGF0aD4KICAgIDwvZGVmcz4KPC9zdmc+Cg==)
 * @see https://web3icons.io/networks/boba-sepolia
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const NetworkBobaSepolia = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createWeb3Icon"])('NetworkBobaSepolia', __iconNode);
;
}),
];

//# sourceMappingURL=1qqr_%40web3icons_react_dist_14b5wzo._.js.map