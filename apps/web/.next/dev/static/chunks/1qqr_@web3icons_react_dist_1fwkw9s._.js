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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenGHUB.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenGHUB
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-client] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#C6E9F4',
                d: 'M10.03 3.794 7.5 5.435l9-1.096z'
            }
        ],
        [
            'path',
            {
                fill: '#42C6EA',
                d: 'm14.25 8.992-2.812-.82L16.5 4.339z'
            }
        ],
        [
            'path',
            {
                fill: '#42AADB',
                d: 'm11.439 8.173-3.94-2.737L3 14.186z'
            }
        ],
        [
            'path',
            {
                fill: '#2A4D9B',
                d: 'M13.97 9.813 3 14.186h10.122z'
            }
        ],
        [
            'path',
            {
                fill: '#1B6DB7',
                d: 'm13.127 14.186 1.403-4.648L21 12l-7.878 2.186z'
            }
        ],
        [
            'path',
            {
                fill: '#2589C9',
                d: 'm21 12-4.5-7.661-1.689 4.653z'
            }
        ],
        [
            'path',
            {
                fill: '#243E81',
                d: 'm12 20.206 1.127-6.02L20.999 12z'
            }
        ],
        [
            'path',
            {
                fill: '#1D1F50',
                d: 'M13.122 14.187H3l9 6.019z'
            }
        ],
        [
            'path',
            {
                fill: '#1996CE',
                d: 'm13.97 9.262-2.531-1.09L3 14.186z'
            }
        ],
        [
            'path',
            {
                fill: '#7CD1EC',
                d: 'M11.439 8.172 7.5 5.435l9-1.096z'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#GHUB__a)'
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
                        fill: '#C6E9F4',
                        d: 'M10.25 4.706 8 6.165l8-.974z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#42C6EA',
                        d: 'm14 9.327-2.499-.73L16 5.19z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#42AADB',
                        d: 'M11.501 8.598 8 6.165l-4 7.779z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#2A4D9B',
                        d: 'M13.75 10.057 4 13.944h8.998z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#1B6DB7',
                        d: 'm13.002 13.943 1.247-4.131L19.999 12l-7.002 1.943z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#2589C9',
                        d: 'm20 12-4-6.81-1.5 4.137z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#243E81',
                        d: 'm12 19.294 1.002-5.35L19.999 12z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#1D1F50',
                        d: 'M12.998 13.943H4l8 5.35z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#1996CE',
                        d: 'm13.75 9.567-2.249-.97L4 13.944z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#7CD1EC',
                        d: 'M11.501 8.597 8 6.165l8-.975z'
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
                        id: 'GHUB__a'
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
 * @component @name TokenGHUB
 * @description Web3Icon for TokenGHUB
 *
 * @preview (branded, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNDNkU5RjQiIGQ9Ik0xMC4wMyAzLjc5NCA3LjUgNS40MzVsOS0xLjA5NnoiLz4KICAgIDxwYXRoIGZpbGw9IiM0MkM2RUEiIGQ9Im0xNC4yNSA4Ljk5Mi0yLjgxMi0uODJMMTYuNSA0LjMzOXoiLz4KICAgIDxwYXRoIGZpbGw9IiM0MkFBREIiIGQ9Im0xMS40MzkgOC4xNzMtMy45NC0yLjczN0wzIDE0LjE4NnoiLz4KICAgIDxwYXRoIGZpbGw9IiMyQTREOUIiIGQ9Ik0xMy45NyA5LjgxMyAzIDE0LjE4NmgxMC4xMjJ6Ii8+CiAgICA8cGF0aCBmaWxsPSIjMUI2REI3IiBkPSJtMTMuMTI3IDE0LjE4NiAxLjQwMy00LjY0OEwyMSAxMmwtNy44NzggMi4xODZ6Ii8+CiAgICA8cGF0aCBmaWxsPSIjMjU4OUM5IiBkPSJtMjEgMTItNC41LTcuNjYxLTEuNjg5IDQuNjUzeiIvPgogICAgPHBhdGggZmlsbD0iIzI0M0U4MSIgZD0ibTEyIDIwLjIwNiAxLjEyNy02LjAyTDIwLjk5OSAxMnoiLz4KICAgIDxwYXRoIGZpbGw9IiMxRDFGNTAiIGQ9Ik0xMy4xMjIgMTQuMTg3SDNsOSA2LjAxOXoiLz4KICAgIDxwYXRoIGZpbGw9IiMxOTk2Q0UiIGQ9Im0xMy45NyA5LjI2Mi0yLjUzMS0xLjA5TDMgMTQuMTg2eiIvPgogICAgPHBhdGggZmlsbD0iIzdDRDFFQyIgZD0iTTExLjQzOSA4LjE3MiA3LjUgNS40MzVsOS0xLjA5NnoiLz4KPC9zdmc+Cg==) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNHSFVCX19hKSI+CiAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTI0IDBIMHYyNGgyNHoiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjQzZFOUY0IiBkPSJNMTAuMjUgNC43MDYgOCA2LjE2NWw4LS45NzR6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0iIzQyQzZFQSIgZD0ibTE0IDkuMzI3LTIuNDk5LS43M0wxNiA1LjE5eiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiM0MkFBREIiIGQ9Ik0xMS41MDEgOC41OTggOCA2LjE2NWwtNCA3Ljc3OXoiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjMkE0RDlCIiBkPSJNMTMuNzUgMTAuMDU3IDQgMTMuOTQ0aDguOTk4eiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiMxQjZEQjciIGQ9Im0xMy4wMDIgMTMuOTQzIDEuMjQ3LTQuMTMxTDE5Ljk5OSAxMmwtNy4wMDIgMS45NDN6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0iIzI1ODlDOSIgZD0ibTIwIDEyLTQtNi44MS0xLjUgNC4xMzd6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0iIzI0M0U4MSIgZD0ibTEyIDE5LjI5NCAxLjAwMi01LjM1TDE5Ljk5OSAxMnoiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjMUQxRjUwIiBkPSJNMTIuOTk4IDEzLjk0M0g0bDggNS4zNXoiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjMTk5NkNFIiBkPSJtMTMuNzUgOS41NjctMi4yNDktLjk3TDQgMTMuOTQ0eiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiM3Q0QxRUMiIGQ9Ik0xMS41MDEgOC41OTcgOCA2LjE2NWw4LS45NzV6Ii8+CiAgICA8L2c+CiAgICA8ZGVmcz4KICAgICAgICA8Y2xpcFBhdGggaWQ9IkdIVUJfX2EiPgogICAgICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMCAwaDI0djI0SDB6Ii8+CiAgICAgICAgPC9jbGlwUGF0aD4KICAgIDwvZGVmcz4KPC9zdmc+Cg==)
 * @see https://web3icons.io/tokens/GHUB
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenGHUB = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenGHUB', __iconNode);
;
}),
]);

//# sourceMappingURL=1qqr_%40web3icons_react_dist_1fwkw9s._.js.map