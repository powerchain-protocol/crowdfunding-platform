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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenSRX.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenSRX
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-ssr] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#A62222',
                d: 'M8 9.75v-4.5L4 7.5z'
            }
        ],
        [
            'path',
            {
                fill: '#EE8622',
                d: 'M8 14.25v-4.5L4 12z'
            }
        ],
        [
            'path',
            {
                fill: '#A62222',
                d: 'M8 18.75v-4.5L4 16.5z'
            }
        ],
        [
            'path',
            {
                fill: '#E23C25',
                d: 'M20 16.5V12l-4 2.25zm-4-2.25v-4.5L12 12zm0 4.5v-4.5l-4 2.25z'
            }
        ],
        [
            'path',
            {
                fill: '#EE8622',
                d: 'M12 21v-4.5l-4 2.25z'
            }
        ],
        [
            'path',
            {
                fill: '#FAC211',
                d: 'M20 12V7.5l-4 2.25z'
            }
        ],
        [
            'path',
            {
                fill: '#EE8622',
                d: 'M12 7.5V3L8 5.25z'
            }
        ],
        [
            'path',
            {
                fill: '#E23C25',
                d: 'M8 9.75v-4.5l4 2.25z'
            }
        ],
        [
            'path',
            {
                fill: '#FAC211',
                d: 'M8 14.25v-4.5L12 12zM12 21v-4.5l4 2.25z'
            }
        ],
        [
            'path',
            {
                fill: '#E23C25',
                d: 'M4 12V7.5l4 2.25zm0 4.5V12l4 2.25z'
            }
        ],
        [
            'path',
            {
                fill: '#FAC211',
                d: 'M12 7.5V3l4 2.25z'
            }
        ],
        [
            'path',
            {
                fill: '#EE8622',
                d: 'M16 9.75v-4.5l4 2.25zm0 4.5v-4.5L20 12z'
            }
        ],
        [
            'path',
            {
                fill: '#A62222',
                d: 'M16 18.75v-4.5l4 2.25z'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M8 9.75v-4.5L4 7.5zm0 4.5v-4.5L4 12zm0 4.5v-4.5L4 16.5zm12-2.25V12l-4 2.25zm-4-2.25v-4.5L12 12zm0 4.5v-4.5l-4 2.25zM12 21v-4.5l-4 2.25zm8-9V7.5l-4 2.25zm-8-4.5V3L8 5.25z'
            }
        ],
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M8 9.75v-4.5l4 2.25zm0 4.5v-4.5L12 12zM12 21v-4.5l4 2.25zm-8-9V7.5l4 2.25zm0 4.5V12l4 2.25zm8-9V3l4 2.25zm4 2.25v-4.5l4 2.25zm0 4.5v-4.5L20 12zm0 4.5v-4.5l4 2.25z'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#SRX__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#E23C25',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M8.444 10V6L4.89 8zm0 4v-4L4.89 12zm0 4v-4L4.89 16zm10.667-2v-4l-3.555 2zm-3.555-2v-4L12 12zm0 4v-4L12 16z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M12 20v-4l-3.556 2zm7.111-8V8l-3.555 2zM12 8V4L8.444 6z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M8.444 10V6L12 8zm0 4v-4L12 12zM12 20v-4l3.556 2zm-7.111-8V8l3.555 2zm0 4v-4l3.555 2zM12 8V4l3.556 2z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M15.556 10V6l3.555 2zm0 4v-4l3.555 2zm0 4v-4l3.555 2z'
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
                        id: 'SRX__a'
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
 * @component @name TokenSRX
 * @description Web3Icon for TokenSRX
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNBNjIyMjIiIGQ9Ik04IDkuNzV2LTQuNUw0IDcuNXoiLz4KICAgIDxwYXRoIGZpbGw9IiNFRTg2MjIiIGQ9Ik04IDE0LjI1di00LjVMNCAxMnoiLz4KICAgIDxwYXRoIGZpbGw9IiNBNjIyMjIiIGQ9Ik04IDE4Ljc1di00LjVMNCAxNi41eiIvPgogICAgPHBhdGggZmlsbD0iI0UyM0MyNSIgZD0iTTIwIDE2LjVWMTJsLTQgMi4yNXptLTQtMi4yNXYtNC41TDEyIDEyem0wIDQuNXYtNC41bC00IDIuMjV6Ii8+CiAgICA8cGF0aCBmaWxsPSIjRUU4NjIyIiBkPSJNMTIgMjF2LTQuNWwtNCAyLjI1eiIvPgogICAgPHBhdGggZmlsbD0iI0ZBQzIxMSIgZD0iTTIwIDEyVjcuNWwtNCAyLjI1eiIvPgogICAgPHBhdGggZmlsbD0iI0VFODYyMiIgZD0iTTEyIDcuNVYzTDggNS4yNXoiLz4KICAgIDxwYXRoIGZpbGw9IiNFMjNDMjUiIGQ9Ik04IDkuNzV2LTQuNWw0IDIuMjV6Ii8+CiAgICA8cGF0aCBmaWxsPSIjRkFDMjExIiBkPSJNOCAxNC4yNXYtNC41TDEyIDEyek0xMiAyMXYtNC41bDQgMi4yNXoiLz4KICAgIDxwYXRoIGZpbGw9IiNFMjNDMjUiIGQ9Ik00IDEyVjcuNWw0IDIuMjV6bTAgNC41VjEybDQgMi4yNXoiLz4KICAgIDxwYXRoIGZpbGw9IiNGQUMyMTEiIGQ9Ik0xMiA3LjVWM2w0IDIuMjV6Ii8+CiAgICA8cGF0aCBmaWxsPSIjRUU4NjIyIiBkPSJNMTYgOS43NXYtNC41bDQgMi4yNXptMCA0LjV2LTQuNUwyMCAxMnoiLz4KICAgIDxwYXRoIGZpbGw9IiNBNjIyMjIiIGQ9Ik0xNiAxOC43NXYtNC41bDQgMi4yNXoiLz4KPC9zdmc+Cg==) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik04IDkuNzV2LTQuNUw0IDcuNXptMCA0LjV2LTQuNUw0IDEyem0wIDQuNXYtNC41TDQgMTYuNXptMTItMi4yNVYxMmwtNCAyLjI1em0tNC0yLjI1di00LjVMMTIgMTJ6bTAgNC41di00LjVsLTQgMi4yNXpNMTIgMjF2LTQuNWwtNCAyLjI1em04LTlWNy41bC00IDIuMjV6bS04LTQuNVYzTDggNS4yNXoiLz4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik04IDkuNzV2LTQuNWw0IDIuMjV6bTAgNC41di00LjVMMTIgMTJ6TTEyIDIxdi00LjVsNCAyLjI1em0tOC05VjcuNWw0IDIuMjV6bTAgNC41VjEybDQgMi4yNXptOC05VjNsNCAyLjI1em00IDIuMjV2LTQuNWw0IDIuMjV6bTAgNC41di00LjVMMjAgMTJ6bTAgNC41di00LjVsNCAyLjI1eiIvPgo8L3N2Zz4K) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNTUlhfX2EpIj4KICAgICAgICA8cGF0aCBmaWxsPSIjRTIzQzI1IiBkPSJNMjQgMEgwdjI0aDI0eiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik04LjQ0NCAxMFY2TDQuODkgOHptMCA0di00TDQuODkgMTJ6bTAgNHYtNEw0Ljg5IDE2em0xMC42NjctMnYtNGwtMy41NTUgMnptLTMuNTU1LTJ2LTRMMTIgMTJ6bTAgNHYtNEwxMiAxNnoiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTIgMjB2LTRsLTMuNTU2IDJ6bTcuMTExLThWOGwtMy41NTUgMnpNMTIgOFY0TDguNDQ0IDZ6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTguNDQ0IDEwVjZMMTIgOHptMCA0di00TDEyIDEyek0xMiAyMHYtNGwzLjU1NiAyem0tNy4xMTEtOFY4bDMuNTU1IDJ6bTAgNHYtNGwzLjU1NSAyek0xMiA4VjRsMy41NTYgMnoiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTUuNTU2IDEwVjZsMy41NTUgMnptMCA0di00bDMuNTU1IDJ6bTAgNHYtNGwzLjU1NSAyeiIvPgogICAgPC9nPgogICAgPGRlZnM+CiAgICAgICAgPGNsaXBQYXRoIGlkPSJTUlhfX2EiPgogICAgICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMCAwaDI0djI0SDB6Ii8+CiAgICAgICAgPC9jbGlwUGF0aD4KICAgIDwvZGVmcz4KPC9zdmc+Cg==)
 * @see https://web3icons.io/tokens/SRX
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenSRX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenSRX', __iconNode);
;
}),
];

//# sourceMappingURL=1qqr_%40web3icons_react_dist_0npvg2x._.js.map