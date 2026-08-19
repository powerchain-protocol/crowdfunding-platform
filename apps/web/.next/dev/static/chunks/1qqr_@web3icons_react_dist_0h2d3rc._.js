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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenSAKAI.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenSAKAI
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-client] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#348AA7',
                d: 'M8 9.75v-4.5L4 7.5z'
            }
        ],
        [
            'path',
            {
                fill: '#55CF98',
                d: 'M12 7.5 8 9.75v4.5l4 2.25z'
            }
        ],
        [
            'path',
            {
                fill: '#1A6882',
                d: 'm4 7.5 4 2.25v4.5L4 16.5z'
            }
        ],
        [
            'path',
            {
                fill: '#76E8B5',
                d: 'm8 5.25 4 2.25-4 2.25z'
            }
        ],
        [
            'path',
            {
                fill: '#12556B',
                d: 'm4 16.5 4-2.25 4 2.25V21z'
            }
        ],
        [
            'path',
            {
                fill: '#BCE784',
                d: 'M16 5.25 12 7.5 8 5.25 12 3z'
            }
        ],
        [
            'path',
            {
                fill: '#48B081',
                d: 'm12 7.5 4 2.25v4.5l-4 2.25z'
            }
        ],
        [
            'path',
            {
                fill: '#1A6882',
                d: 'm20 7.5-4 2.25v4.5l4 2.25z'
            }
        ],
        [
            'path',
            {
                fill: '#57C795',
                d: 'M16 5.25 12 7.5l4 2.25z'
            }
        ],
        [
            'path',
            {
                fill: '#0D3E4F',
                d: 'm20 16.5-4-2.25-4 2.25V21z'
            }
        ],
        [
            'path',
            {
                fill: '#348AA7',
                d: 'M16 9.75v-4.5l4 2.25z'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M8 9.75v-4.5L4 7.5z'
            }
        ],
        [
            'path',
            {
                fill: 'currentColor',
                d: 'm11.999 7.5-4 2.25v4.5l4 2.25z'
            }
        ],
        [
            'path',
            {
                fill: 'currentColor',
                d: 'm4 7.5 4 2.25v4.5L4 16.5z'
            }
        ],
        [
            'path',
            {
                fill: 'currentColor',
                d: 'm7.999 5.25 4 2.25-4 2.25zM4 16.5l4-2.25 4 2.25V21z'
            }
        ],
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M16 5.25 11.998 7.5l-4-2.25 4-2.25zM12 7.5l4 2.25v4.5l-4 2.25zm8 0-4 2.25v4.5l4 2.25z'
            }
        ],
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M16 5.25 12 7.5l4 2.25zm4 11.25-4-2.25-4 2.25V21zm-4-6.75v-4.5l4 2.25z'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#SAKAI__a)'
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
                        fill: '#348AA7',
                        d: 'M8.444 10V6L4.89 8z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#55CF98',
                        d: 'm12 8-3.556 2v4L12 16z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#1A6882',
                        d: 'm4.889 8 3.555 2v4L4.89 16z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#76E8B5',
                        d: 'M8.444 6 12 8l-3.556 2z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#12556B',
                        d: 'm4.889 16 3.555-2L12 16v4z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#BCE784',
                        d: 'M15.556 6 12 8 8.444 6 12 4z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#48B081',
                        d: 'm12 8 3.556 2v4L12 16z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#1A6882',
                        d: 'm19.111 8-3.555 2v4l3.555 2z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#57C795',
                        d: 'M15.556 6 12 8l3.556 2z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#0D3E4F',
                        d: 'm19.111 16-3.555-2L12 16v4z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#348AA7',
                        d: 'M15.556 10V6l3.555 2z'
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
                        id: 'SAKAI__a'
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
 * @component @name TokenSAKAI
 * @description Web3Icon for TokenSAKAI
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiMzNDhBQTciIGQ9Ik04IDkuNzV2LTQuNUw0IDcuNXoiLz4KICAgIDxwYXRoIGZpbGw9IiM1NUNGOTgiIGQ9Ik0xMiA3LjUgOCA5Ljc1djQuNWw0IDIuMjV6Ii8+CiAgICA8cGF0aCBmaWxsPSIjMUE2ODgyIiBkPSJtNCA3LjUgNCAyLjI1djQuNUw0IDE2LjV6Ii8+CiAgICA8cGF0aCBmaWxsPSIjNzZFOEI1IiBkPSJtOCA1LjI1IDQgMi4yNS00IDIuMjV6Ii8+CiAgICA8cGF0aCBmaWxsPSIjMTI1NTZCIiBkPSJtNCAxNi41IDQtMi4yNSA0IDIuMjVWMjF6Ii8+CiAgICA8cGF0aCBmaWxsPSIjQkNFNzg0IiBkPSJNMTYgNS4yNSAxMiA3LjUgOCA1LjI1IDEyIDN6Ii8+CiAgICA8cGF0aCBmaWxsPSIjNDhCMDgxIiBkPSJtMTIgNy41IDQgMi4yNXY0LjVsLTQgMi4yNXoiLz4KICAgIDxwYXRoIGZpbGw9IiMxQTY4ODIiIGQ9Im0yMCA3LjUtNCAyLjI1djQuNWw0IDIuMjV6Ii8+CiAgICA8cGF0aCBmaWxsPSIjNTdDNzk1IiBkPSJNMTYgNS4yNSAxMiA3LjVsNCAyLjI1eiIvPgogICAgPHBhdGggZmlsbD0iIzBEM0U0RiIgZD0ibTIwIDE2LjUtNC0yLjI1LTQgMi4yNVYyMXoiLz4KICAgIDxwYXRoIGZpbGw9IiMzNDhBQTciIGQ9Ik0xNiA5Ljc1di00LjVsNCAyLjI1eiIvPgo8L3N2Zz4K) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik04IDkuNzV2LTQuNUw0IDcuNXoiLz4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Im0xMS45OTkgNy41LTQgMi4yNXY0LjVsNCAyLjI1eiIvPgogICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0ibTQgNy41IDQgMi4yNXY0LjVMNCAxNi41eiIvPgogICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0ibTcuOTk5IDUuMjUgNCAyLjI1LTQgMi4yNXpNNCAxNi41bDQtMi4yNSA0IDIuMjVWMjF6Ii8+CiAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTYgNS4yNSAxMS45OTggNy41bC00LTIuMjUgNC0yLjI1ek0xMiA3LjVsNCAyLjI1djQuNWwtNCAyLjI1em04IDAtNCAyLjI1djQuNWw0IDIuMjV6Ii8+CiAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTYgNS4yNSAxMiA3LjVsNCAyLjI1em00IDExLjI1LTQtMi4yNS00IDIuMjVWMjF6bS00LTYuNzV2LTQuNWw0IDIuMjV6Ii8+Cjwvc3ZnPgo=) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNTQUtBSV9fYSkiPgogICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0yNCAwSDB2MjRoMjR6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0iIzM0OEFBNyIgZD0iTTguNDQ0IDEwVjZMNC44OSA4eiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiM1NUNGOTgiIGQ9Im0xMiA4LTMuNTU2IDJ2NEwxMiAxNnoiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjMUE2ODgyIiBkPSJtNC44ODkgOCAzLjU1NSAydjRMNC44OSAxNnoiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjNzZFOEI1IiBkPSJNOC40NDQgNiAxMiA4bC0zLjU1NiAyeiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiMxMjU1NkIiIGQ9Im00Ljg4OSAxNiAzLjU1NS0yTDEyIDE2djR6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0iI0JDRTc4NCIgZD0iTTE1LjU1NiA2IDEyIDggOC40NDQgNiAxMiA0eiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiM0OEIwODEiIGQ9Im0xMiA4IDMuNTU2IDJ2NEwxMiAxNnoiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjMUE2ODgyIiBkPSJtMTkuMTExIDgtMy41NTUgMnY0bDMuNTU1IDJ6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0iIzU3Qzc5NSIgZD0iTTE1LjU1NiA2IDEyIDhsMy41NTYgMnoiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjMEQzRTRGIiBkPSJtMTkuMTExIDE2LTMuNTU1LTJMMTIgMTZ2NHoiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjMzQ4QUE3IiBkPSJNMTUuNTU2IDEwVjZsMy41NTUgMnoiLz4KICAgIDwvZz4KICAgIDxkZWZzPgogICAgICAgIDxjbGlwUGF0aCBpZD0iU0FLQUlfX2EiPgogICAgICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMCAwaDI0djI0SDB6Ii8+CiAgICAgICAgPC9jbGlwUGF0aD4KICAgIDwvZGVmcz4KPC9zdmc+Cg==)
 * @see https://web3icons.io/tokens/SAKAI
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenSAKAI = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenSAKAI', __iconNode);
;
}),
]);

//# sourceMappingURL=1qqr_%40web3icons_react_dist_0h2d3rc._.js.map