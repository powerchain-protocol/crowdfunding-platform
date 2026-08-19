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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenGSWIFT.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenGSWIFT
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-ssr] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: 'url(#GSWIFT__a)',
                d: 'M3 16.948 8.625 10.9l1.125.55-1.688 1.925 3.097-1.377 1.403.824z'
            }
        ],
        [
            'path',
            {
                fill: '#fff',
                d: 'm21 16.95-5.063-5.225L18.75 10.2l-3.375-3.15h-6.75L5.25 10.2zm-11.813-9h5.625l1.972 1.85-1.972.823L13.8 9.75H9.75l2.475.9h1.125l2.587 2.727-8.72-3.578z'
            }
        ],
        [
            'path',
            {
                fill: '#E9E9E9',
                d: 'm16.361 11.517-1.026-1.111-.522.216-.315-.302 1.44 1.404z',
                fillOpacity: '.6'
            }
        ],
        [
            'defs',
            {},
            [
                [
                    'linearGradient',
                    {
                        id: 'GSWIFT__a',
                        x1: '16.24',
                        x2: '6.136',
                        y1: '7.947',
                        y2: '17.665',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#FFA902'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#FFF000'
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
                d: 'm3 16.95 5.625-6.05 1.125.55-1.688 1.925L11.16 12l1.403.824z'
            }
        ],
        [
            'path',
            {
                fill: 'currentColor',
                d: 'm21 16.95-5.063-5.225L18.75 10.2l-3.375-3.15h-6.75L5.25 10.2zm-11.813-9h5.626l1.97 1.85-1.97.823L13.8 9.75H9.75l2.475.9h1.125l2.587 2.727-8.72-3.578z'
            }
        ],
        [
            'path',
            {
                fill: 'currentColor',
                d: 'm16.36 11.518-1.026-1.111-.522.216-.315-.302 1.44 1.404z'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#GSWIFT__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#E9E9E9',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'm4 16.4 5-5.377 1 .489-1.5 1.711L11.252 12l1.248.732z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'm20 16.4-4.5-4.644 2.5-1.357-3-2.8H9l-3 2.8zm-10.5-8h5l1.752 1.644-1.752.732-.9-.776H10l2.2.8h1l2.3 2.424-7.752-3.18z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'm15.876 11.572-.912-.988-.464.192-.28-.268 1.28 1.248z'
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
                        id: 'GSWIFT__a'
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
 * @component @name TokenGSWIFT
 * @description Web3Icon for TokenGSWIFT
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9InVybCgjR1NXSUZUX19hKSIgZD0iTTMgMTYuOTQ4IDguNjI1IDEwLjlsMS4xMjUuNTUtMS42ODggMS45MjUgMy4wOTctMS4zNzcgMS40MDMuODI0eiIvPgogICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0ibTIxIDE2Ljk1LTUuMDYzLTUuMjI1TDE4Ljc1IDEwLjJsLTMuMzc1LTMuMTVoLTYuNzVMNS4yNSAxMC4yem0tMTEuODEzLTloNS42MjVsMS45NzIgMS44NS0xLjk3Mi44MjNMMTMuOCA5Ljc1SDkuNzVsMi40NzUuOWgxLjEyNWwyLjU4NyAyLjcyNy04LjcyLTMuNTc4eiIvPgogICAgPHBhdGggZmlsbD0iI0U5RTlFOSIgZmlsbC1vcGFjaXR5PSIuNiIgZD0ibTE2LjM2MSAxMS41MTctMS4wMjYtMS4xMTEtLjUyMi4yMTYtLjMxNS0uMzAyIDEuNDQgMS40MDR6Ii8+CiAgICA8ZGVmcz4KICAgICAgICA8bGluZWFyR3JhZGllbnQgaWQ9IkdTV0lGVF9fYSIgeDE9IjE2LjI0IiB4Mj0iNi4xMzYiIHkxPSI3Ljk0NyIgeTI9IjE3LjY2NSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjRkZBOTAyIi8+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI0ZGRjAwMCIvPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICA8L2RlZnM+Cjwvc3ZnPgo=) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Im0zIDE2Ljk1IDUuNjI1LTYuMDUgMS4xMjUuNTUtMS42ODggMS45MjVMMTEuMTYgMTJsMS40MDMuODI0eiIvPgogICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0ibTIxIDE2Ljk1LTUuMDYzLTUuMjI1TDE4Ljc1IDEwLjJsLTMuMzc1LTMuMTVoLTYuNzVMNS4yNSAxMC4yem0tMTEuODEzLTloNS42MjZsMS45NyAxLjg1LTEuOTcuODIzTDEzLjggOS43NUg5Ljc1bDIuNDc1LjloMS4xMjVsMi41ODcgMi43MjctOC43Mi0zLjU3OHoiLz4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Im0xNi4zNiAxMS41MTgtMS4wMjYtMS4xMTEtLjUyMi4yMTYtLjMxNS0uMzAyIDEuNDQgMS40MDR6Ii8+Cjwvc3ZnPgo=) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNHU1dJRlRfX2EpIj4KICAgICAgICA8cGF0aCBmaWxsPSIjRTlFOUU5IiBkPSJNMjQgMEgwdjI0aDI0eiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Im00IDE2LjQgNS01LjM3NyAxIC40ODktMS41IDEuNzExTDExLjI1MiAxMmwxLjI0OC43MzJ6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0ibTIwIDE2LjQtNC41LTQuNjQ0IDIuNS0xLjM1Ny0zLTIuOEg5bC0zIDIuOHptLTEwLjUtOGg1bDEuNzUyIDEuNjQ0LTEuNzUyLjczMi0uOS0uNzc2SDEwbDIuMi44aDFsMi4zIDIuNDI0LTcuNzUyLTMuMTh6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0ibTE1Ljg3NiAxMS41NzItLjkxMi0uOTg4LS40NjQuMTkyLS4yOC0uMjY4IDEuMjggMS4yNDh6Ii8+CiAgICA8L2c+CiAgICA8ZGVmcz4KICAgICAgICA8Y2xpcFBhdGggaWQ9IkdTV0lGVF9fYSI+CiAgICAgICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0wIDBoMjR2MjRIMHoiLz4KICAgICAgICA8L2NsaXBQYXRoPgogICAgPC9kZWZzPgo8L3N2Zz4K)
 * @see https://web3icons.io/tokens/GSWIFT
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenGSWIFT = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenGSWIFT', __iconNode);
;
}),
];

//# sourceMappingURL=1qqr_%40web3icons_react_dist_10m6c2w._.js.map