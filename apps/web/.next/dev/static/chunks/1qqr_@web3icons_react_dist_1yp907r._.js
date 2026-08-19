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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenMTRM.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenMTRM
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-client] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#F7DF53',
                d: 'M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0'
            }
        ],
        [
            'path',
            {
                fill: '#8117C9',
                d: 'M12 20.63a8.63 8.63 0 1 0 0-17.26 8.63 8.63 0 0 0 0 17.258m0 .37a9 9 0 1 0 0-18 9 9 0 0 0 0 18',
                fillRule: 'evenodd',
                clipRule: 'evenodd'
            }
        ],
        [
            'path',
            {
                fill: '#440090',
                d: 'M19.57 12a7.57 7.57 0 1 1-15.139 0 7.57 7.57 0 0 1 15.14 0'
            }
        ],
        [
            'path',
            {
                fill: '#2F0065',
                d: 'M18.877 12a6.876 6.876 0 1 1-13.753 0 6.876 6.876 0 0 1 13.753 0'
            }
        ],
        [
            'path',
            {
                fill: '#030007',
                d: 'M18.115 11.999a6.114 6.114 0 1 1-12.228 0 6.114 6.114 0 0 1 12.228 0'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#MTRM__a)'
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
                        fill: '#F7DF53',
                        d: 'M20 12a8 8 0 1 1-16 0 8 8 0 0 1 16 0'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#8117C9',
                        d: 'M12 19.67a7.67 7.67 0 1 0 0-15.34 7.67 7.67 0 0 0 0 15.34m0 .33a8 8 0 1 0 0-16 8 8 0 0 0 0 16',
                        fillRule: 'evenodd',
                        clipRule: 'evenodd'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#440090',
                        d: 'M18.73 12a6.73 6.73 0 1 1-13.46 0 6.73 6.73 0 0 1 13.46 0'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#2F0065',
                        d: 'M18.113 12a6.112 6.112 0 1 1-12.225 0 6.112 6.112 0 0 1 12.225 0'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#030007',
                        d: 'M17.436 12a5.435 5.435 0 1 1-10.87 0 5.435 5.435 0 0 1 10.87 0'
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
                        id: 'MTRM__a'
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
 * @component @name TokenMTRM
 * @description Web3Icon for TokenMTRM
 *
 * @preview (branded, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNGN0RGNTMiIGQ9Ik0yMSAxMmE5IDkgMCAxIDEtMTggMCA5IDkgMCAwIDEgMTggMCIvPgogICAgPHBhdGggZmlsbD0iIzgxMTdDOSIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTIgMjAuNjNhOC42MyA4LjYzIDAgMSAwIDAtMTcuMjYgOC42MyA4LjYzIDAgMCAwIDAgMTcuMjU4bTAgLjM3YTkgOSAwIDEgMCAwLTE4IDkgOSAwIDAgMCAwIDE4IiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KICAgIDxwYXRoIGZpbGw9IiM0NDAwOTAiIGQ9Ik0xOS41NyAxMmE3LjU3IDcuNTcgMCAxIDEtMTUuMTM5IDAgNy41NyA3LjU3IDAgMCAxIDE1LjE0IDAiLz4KICAgIDxwYXRoIGZpbGw9IiMyRjAwNjUiIGQ9Ik0xOC44NzcgMTJhNi44NzYgNi44NzYgMCAxIDEtMTMuNzUzIDAgNi44NzYgNi44NzYgMCAwIDEgMTMuNzUzIDAiLz4KICAgIDxwYXRoIGZpbGw9IiMwMzAwMDciIGQ9Ik0xOC4xMTUgMTEuOTk5YTYuMTE0IDYuMTE0IDAgMSAxLTEyLjIyOCAwIDYuMTE0IDYuMTE0IDAgMCAxIDEyLjIyOCAwIi8+Cjwvc3ZnPgo=) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNNVFJNX19hKSI+CiAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTI0IDBIMHYyNGgyNHoiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjRjdERjUzIiBkPSJNMjAgMTJhOCA4IDAgMSAxLTE2IDAgOCA4IDAgMCAxIDE2IDAiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjODExN0M5IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMiAxOS42N2E3LjY3IDcuNjcgMCAxIDAgMC0xNS4zNCA3LjY3IDcuNjcgMCAwIDAgMCAxNS4zNG0wIC4zM2E4IDggMCAxIDAgMC0xNiA4IDggMCAwIDAgMCAxNiIgY2xpcC1ydWxlPSJldmVub2RkIi8+CiAgICAgICAgPHBhdGggZmlsbD0iIzQ0MDA5MCIgZD0iTTE4LjczIDEyYTYuNzMgNi43MyAwIDEgMS0xMy40NiAwIDYuNzMgNi43MyAwIDAgMSAxMy40NiAwIi8+CiAgICAgICAgPHBhdGggZmlsbD0iIzJGMDA2NSIgZD0iTTE4LjExMyAxMmE2LjExMiA2LjExMiAwIDEgMS0xMi4yMjUgMCA2LjExMiA2LjExMiAwIDAgMSAxMi4yMjUgMCIvPgogICAgICAgIDxwYXRoIGZpbGw9IiMwMzAwMDciIGQ9Ik0xNy40MzYgMTJhNS40MzUgNS40MzUgMCAxIDEtMTAuODcgMCA1LjQzNSA1LjQzNSAwIDAgMSAxMC44NyAwIi8+CiAgICA8L2c+CiAgICA8ZGVmcz4KICAgICAgICA8Y2xpcFBhdGggaWQ9Ik1UUk1fX2EiPgogICAgICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMCAwaDI0djI0SDB6Ii8+CiAgICAgICAgPC9jbGlwUGF0aD4KICAgIDwvZGVmcz4KPC9zdmc+Cg==)
 * @see https://web3icons.io/tokens/MTRM
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenMTRM = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenMTRM', __iconNode);
;
}),
]);

//# sourceMappingURL=1qqr_%40web3icons_react_dist_1yp907r._.js.map