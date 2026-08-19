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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenOETH.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenOETH
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-client] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#0074F0',
                d: 'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18'
            }
        ],
        [
            'path',
            {
                fill: '#3390F3',
                d: 'M17.611 17.611a7.94 7.94 0 0 0-5.689-13.527 7.94 7.94 0 0 0-5.603 2.357l11.297 11.17z'
            }
        ],
        [
            'path',
            {
                fill: '#fff',
                d: 'M6.706 12a5.294 5.294 0 0 1 5.103-5.294l-1.127 1.832A3.71 3.71 0 0 0 8.294 12a3.653 3.653 0 0 0 4.114 3.674l-1.15 1.62A5.284 5.284 0 0 1 6.707 12'
            }
        ],
        [
            'path',
            {
                fill: '#fff',
                d: 'M12.1 17.294A5.294 5.294 0 0 0 17.294 12a5.26 5.26 0 0 0-4.664-5.294l-.98 1.615c.138-.016.207-.027.35-.027a3.705 3.705 0 0 1 1.477 7.105z'
            }
        ],
        [
            'path',
            {
                fill: '#CEE5FD',
                d: 'M12 13.589V10.94L9.354 12z'
            }
        ],
        [
            'path',
            {
                fill: '#E5F1FE',
                d: 'M12.001 13.589V10.94L14.648 12zM12 10.941V7.765L9.355 12z'
            }
        ],
        [
            'path',
            {
                fill: '#fff',
                d: 'M12.001 10.941V7.765L14.648 12z'
            }
        ],
        [
            'path',
            {
                fill: '#E5F1FE',
                d: 'M12.001 16.235v-2.08l2.647-1.626z'
            }
        ],
        [
            'path',
            {
                fill: '#fff',
                d: 'M12 16.235v-2.08l-2.646-1.626z'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0M8.188 8.322A5.3 5.3 0 0 0 6.706 12a5.284 5.284 0 0 0 4.553 5.294l1.148-1.62-.007.001 2.247-3.146L12 14.155l-2.647-1.626 2.256 3.159a3.65 3.65 0 0 1-3.007-2.168A3.65 3.65 0 0 1 8.294 12a3.705 3.705 0 0 1 2.387-3.462l1.128-1.832a5.3 5.3 0 0 0-3.62 1.616m7.591 7.386a5.3 5.3 0 0 1-3.679 1.586l1.377-1.895a3.705 3.705 0 0 0-1.136-7.09L14.647 12 12 13.588 9.353 12l2.3-3.68h-.003l.98-1.614A5.257 5.257 0 0 1 17.294 12a5.3 5.3 0 0 1-1.515 3.708',
                fillRule: 'evenodd',
                clipRule: 'evenodd'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#OETH__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#E5F1FE',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M20 12a8 8 0 1 1-16 0 8 8 0 0 1 16 0M8.612 8.73A4.7 4.7 0 0 0 7.294 12a4.696 4.696 0 0 0 4.047 4.706l1.021-1.44h-.007l1.998-2.795L12 13.915l-2.353-1.444 2.005 2.807A3.245 3.245 0 0 1 8.706 12a3.29 3.29 0 0 1 2.122-3.078l1.002-1.628a4.7 4.7 0 0 0-3.218 1.437m6.747 6.566a4.7 4.7 0 0 1-3.27 1.41l1.224-1.685a3.294 3.294 0 0 0-1.01-6.301l2.05 3.28L12 13.412 9.647 12l2.044-3.27h-.002l.87-1.436A4.673 4.673 0 0 1 16.707 12a4.7 4.7 0 0 1-1.347 3.296',
                        fillRule: 'evenodd',
                        clipRule: 'evenodd'
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
                        id: 'OETH__a'
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
 * @component @name TokenOETH
 * @description Web3Icon for TokenOETH
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiMwMDc0RjAiIGQ9Ik0xMiAyMWE5IDkgMCAxIDAgMC0xOCA5IDkgMCAwIDAgMCAxOCIvPgogICAgPHBhdGggZmlsbD0iIzMzOTBGMyIgZD0iTTE3LjYxMSAxNy42MTFhNy45NCA3Ljk0IDAgMCAwLTUuNjg5LTEzLjUyNyA3Ljk0IDcuOTQgMCAwIDAtNS42MDMgMi4zNTdsMTEuMjk3IDExLjE3eiIvPgogICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTYuNzA2IDEyYTUuMjk0IDUuMjk0IDAgMCAxIDUuMTAzLTUuMjk0bC0xLjEyNyAxLjgzMkEzLjcxIDMuNzEgMCAwIDAgOC4yOTQgMTJhMy42NTMgMy42NTMgMCAwIDAgNC4xMTQgMy42NzRsLTEuMTUgMS42MkE1LjI4NCA1LjI4NCAwIDAgMSA2LjcwNyAxMiIvPgogICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTEyLjEgMTcuMjk0QTUuMjk0IDUuMjk0IDAgMCAwIDE3LjI5NCAxMmE1LjI2IDUuMjYgMCAwIDAtNC42NjQtNS4yOTRsLS45OCAxLjYxNWMuMTM4LS4wMTYuMjA3LS4wMjcuMzUtLjAyN2EzLjcwNSAzLjcwNSAwIDAgMSAxLjQ3NyA3LjEwNXoiLz4KICAgIDxwYXRoIGZpbGw9IiNDRUU1RkQiIGQ9Ik0xMiAxMy41ODlWMTAuOTRMOS4zNTQgMTJ6Ii8+CiAgICA8cGF0aCBmaWxsPSIjRTVGMUZFIiBkPSJNMTIuMDAxIDEzLjU4OVYxMC45NEwxNC42NDggMTJ6TTEyIDEwLjk0MVY3Ljc2NUw5LjM1NSAxMnoiLz4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xMi4wMDEgMTAuOTQxVjcuNzY1TDE0LjY0OCAxMnoiLz4KICAgIDxwYXRoIGZpbGw9IiNFNUYxRkUiIGQ9Ik0xMi4wMDEgMTYuMjM1di0yLjA4bDIuNjQ3LTEuNjI2eiIvPgogICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTEyIDE2LjIzNXYtMi4wOGwtMi42NDYtMS42MjZ6Ii8+Cjwvc3ZnPgo=) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTIxIDEyYTkgOSAwIDEgMS0xOCAwIDkgOSAwIDAgMSAxOCAwTTguMTg4IDguMzIyQTUuMyA1LjMgMCAwIDAgNi43MDYgMTJhNS4yODQgNS4yODQgMCAwIDAgNC41NTMgNS4yOTRsMS4xNDgtMS42Mi0uMDA3LjAwMSAyLjI0Ny0zLjE0NkwxMiAxNC4xNTVsLTIuNjQ3LTEuNjI2IDIuMjU2IDMuMTU5YTMuNjUgMy42NSAwIDAgMS0zLjAwNy0yLjE2OEEzLjY1IDMuNjUgMCAwIDEgOC4yOTQgMTJhMy43MDUgMy43MDUgMCAwIDEgMi4zODctMy40NjJsMS4xMjgtMS44MzJhNS4zIDUuMyAwIDAgMC0zLjYyIDEuNjE2bTcuNTkxIDcuMzg2YTUuMyA1LjMgMCAwIDEtMy42NzkgMS41ODZsMS4zNzctMS44OTVhMy43MDUgMy43MDUgMCAwIDAtMS4xMzYtNy4wOUwxNC42NDcgMTIgMTIgMTMuNTg4IDkuMzUzIDEybDIuMy0zLjY4aC0uMDAzbC45OC0xLjYxNEE1LjI1NyA1LjI1NyAwIDAgMSAxNy4yOTQgMTJhNS4zIDUuMyAwIDAgMS0xLjUxNSAzLjcwOCIgY2xpcC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo=) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNPRVRIX19hKSI+CiAgICAgICAgPHBhdGggZmlsbD0iI0U1RjFGRSIgZD0iTTI0IDBIMHYyNGgyNHoiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yMCAxMmE4IDggMCAxIDEtMTYgMCA4IDggMCAwIDEgMTYgME04LjYxMiA4LjczQTQuNyA0LjcgMCAwIDAgNy4yOTQgMTJhNC42OTYgNC42OTYgMCAwIDAgNC4wNDcgNC43MDZsMS4wMjEtMS40NGgtLjAwN2wxLjk5OC0yLjc5NUwxMiAxMy45MTVsLTIuMzUzLTEuNDQ0IDIuMDA1IDIuODA3QTMuMjQ1IDMuMjQ1IDAgMCAxIDguNzA2IDEyYTMuMjkgMy4yOSAwIDAgMSAyLjEyMi0zLjA3OGwxLjAwMi0xLjYyOGE0LjcgNC43IDAgMCAwLTMuMjE4IDEuNDM3bTYuNzQ3IDYuNTY2YTQuNyA0LjcgMCAwIDEtMy4yNyAxLjQxbDEuMjI0LTEuNjg1YTMuMjk0IDMuMjk0IDAgMCAwLTEuMDEtNi4zMDFsMi4wNSAzLjI4TDEyIDEzLjQxMiA5LjY0NyAxMmwyLjA0NC0zLjI3aC0uMDAybC44Ny0xLjQzNkE0LjY3MyA0LjY3MyAwIDAgMSAxNi43MDcgMTJhNC43IDQuNyAwIDAgMS0xLjM0NyAzLjI5NiIgY2xpcC1ydWxlPSJldmVub2RkIi8+CiAgICA8L2c+CiAgICA8ZGVmcz4KICAgICAgICA8Y2xpcFBhdGggaWQ9Ik9FVEhfX2EiPgogICAgICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMCAwaDI0djI0SDB6Ii8+CiAgICAgICAgPC9jbGlwUGF0aD4KICAgIDwvZGVmcz4KPC9zdmc+Cg==)
 * @see https://web3icons.io/tokens/OETH
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenOETH = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenOETH', __iconNode);
;
}),
]);

//# sourceMappingURL=1qqr_%40web3icons_react_dist_0k4fxxq._.js.map