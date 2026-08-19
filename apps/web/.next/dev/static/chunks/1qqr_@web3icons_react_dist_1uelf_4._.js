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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenSC.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenSC
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-client] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#15D47B',
                d: 'M14.813 14.813V12A2.813 2.813 0 1 0 12 14.813zM12 6.937a5.062 5.062 0 1 0 0 10.125h4.5a.56.56 0 0 0 .563-.562V12A5.06 5.06 0 0 0 12 6.938',
                fillRule: 'evenodd',
                clipRule: 'evenodd'
            }
        ],
        [
            'path',
            {
                fill: '#15D47B',
                d: 'M12 3.563a8.438 8.438 0 1 0 0 16.875 8.438 8.438 0 0 0 0-16.875M3 12a9 9 0 0 1 9-9 9 9 0 0 1 9 9 9 9 0 0 1-9 9 9 9 0 0 1-9-9'
            }
        ],
        [
            'path',
            {
                fill: '#15D47B',
                d: 'M6.094 7.5a1.406 1.406 0 1 0 0-2.813 1.406 1.406 0 0 0 0 2.813'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M14.813 14.813V12A2.813 2.813 0 1 0 12 14.813zM12 6.937a5.063 5.063 0 1 0 0 10.125h4.5a.56.56 0 0 0 .563-.562V12A5.06 5.06 0 0 0 12 6.938',
                fillRule: 'evenodd',
                clipRule: 'evenodd'
            }
        ],
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M12 3.563a8.438 8.438 0 1 0 0 16.875 8.438 8.438 0 0 0 0-16.875M3 12a9 9 0 0 1 9-9 9 9 0 0 1 9 9 9 9 0 0 1-9 9 9 9 0 0 1-9-9'
            }
        ],
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M6.094 7.5a1.406 1.406 0 1 0 0-2.813 1.406 1.406 0 0 0 0 2.813'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#SC__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#15D47B',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M14.5 14.5V12a2.5 2.5 0 1 0-2.5 2.5zm-2.5-7a4.5 4.5 0 1 0 0 9h4a.5.5 0 0 0 .5-.5v-4A4.5 4.5 0 0 0 12 7.5',
                        fillRule: 'evenodd',
                        clipRule: 'evenodd'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M12 4.5a7.5 7.5 0 1 0 0 15 7.5 7.5 0 0 0 0-15M4 12a8 8 0 0 1 8-8 8 8 0 1 1-8 8'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M6.75 8a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5'
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
                        id: 'SC__a'
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
 * @component @name TokenSC
 * @description Web3Icon for TokenSC
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiMxNUQ0N0IiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTE0LjgxMyAxNC44MTNWMTJBMi44MTMgMi44MTMgMCAxIDAgMTIgMTQuODEzek0xMiA2LjkzN2E1LjA2MiA1LjA2MiAwIDEgMCAwIDEwLjEyNWg0LjVhLjU2LjU2IDAgMCAwIC41NjMtLjU2MlYxMkE1LjA2IDUuMDYgMCAwIDAgMTIgNi45MzgiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgogICAgPHBhdGggZmlsbD0iIzE1RDQ3QiIgZD0iTTEyIDMuNTYzYTguNDM4IDguNDM4IDAgMSAwIDAgMTYuODc1IDguNDM4IDguNDM4IDAgMCAwIDAtMTYuODc1TTMgMTJhOSA5IDAgMCAxIDktOSA5IDkgMCAwIDEgOSA5IDkgOSAwIDAgMS05IDkgOSA5IDAgMCAxLTktOSIvPgogICAgPHBhdGggZmlsbD0iIzE1RDQ3QiIgZD0iTTYuMDk0IDcuNWExLjQwNiAxLjQwNiAwIDEgMCAwLTIuODEzIDEuNDA2IDEuNDA2IDAgMCAwIDAgMi44MTMiLz4KPC9zdmc+Cg==) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTE0LjgxMyAxNC44MTNWMTJBMi44MTMgMi44MTMgMCAxIDAgMTIgMTQuODEzek0xMiA2LjkzN2E1LjA2MyA1LjA2MyAwIDEgMCAwIDEwLjEyNWg0LjVhLjU2LjU2IDAgMCAwIC41NjMtLjU2MlYxMkE1LjA2IDUuMDYgMCAwIDAgMTIgNi45MzgiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgogICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTEyIDMuNTYzYTguNDM4IDguNDM4IDAgMSAwIDAgMTYuODc1IDguNDM4IDguNDM4IDAgMCAwIDAtMTYuODc1TTMgMTJhOSA5IDAgMCAxIDktOSA5IDkgMCAwIDEgOSA5IDkgOSAwIDAgMS05IDkgOSA5IDAgMCAxLTktOSIvPgogICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTYuMDk0IDcuNWExLjQwNiAxLjQwNiAwIDEgMCAwLTIuODEzIDEuNDA2IDEuNDA2IDAgMCAwIDAgMi44MTMiLz4KPC9zdmc+Cg==) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNTQ19fYSkiPgogICAgICAgIDxwYXRoIGZpbGw9IiMxNUQ0N0IiIGQ9Ik0yNCAwSDB2MjRoMjR6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTQuNSAxNC41VjEyYTIuNSAyLjUgMCAxIDAtMi41IDIuNXptLTIuNS03YTQuNSA0LjUgMCAxIDAgMCA5aDRhLjUuNSAwIDAgMCAuNS0uNXYtNEE0LjUgNC41IDAgMCAwIDEyIDcuNSIgY2xpcC1ydWxlPSJldmVub2RkIi8+CiAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTEyIDQuNWE3LjUgNy41IDAgMSAwIDAgMTUgNy41IDcuNSAwIDAgMCAwLTE1TTQgMTJhOCA4IDAgMCAxIDgtOCA4IDggMCAxIDEtOCA4Ii8+CiAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTYuNzUgOGExLjI1IDEuMjUgMCAxIDAgMC0yLjUgMS4yNSAxLjI1IDAgMCAwIDAgMi41Ii8+CiAgICA8L2c+CiAgICA8ZGVmcz4KICAgICAgICA8Y2xpcFBhdGggaWQ9IlNDX19hIj4KICAgICAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTAgMGgyNHYyNEgweiIvPgogICAgICAgIDwvY2xpcFBhdGg+CiAgICA8L2RlZnM+Cjwvc3ZnPgo=)
 * @see https://web3icons.io/tokens/SC
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenSC = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenSC', __iconNode);
;
}),
]);

//# sourceMappingURL=1qqr_%40web3icons_react_dist_1uelf_4._.js.map