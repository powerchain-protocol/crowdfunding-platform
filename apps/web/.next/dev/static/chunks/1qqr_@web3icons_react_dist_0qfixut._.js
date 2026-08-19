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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenBST.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenBST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-client] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#88743C',
                d: 'M4.125 12A7.875 7.875 0 0 0 12 19.875V21a9 9 0 0 1-9-9z'
            }
        ],
        [
            'path',
            {
                fill: '#FFBC00',
                d: 'M19.875 12A7.875 7.875 0 0 0 12 4.125V3a9 9 0 0 1 9 9 9 9 0 0 1-9 9v-1.125A7.875 7.875 0 0 0 19.875 12M9.21 4.634a7.9 7.9 0 0 0-2.6 1.625l-.77-.82a9 9 0 0 1 2.972-1.857z'
            }
        ],
        [
            'path',
            {
                fill: '#88743C',
                d: 'M12 6.375A5.625 5.625 0 0 0 6.375 12H5.25A6.75 6.75 0 0 1 12 5.25z'
            }
        ],
        [
            'path',
            {
                fill: '#FFBC00',
                d: 'M17.225 9.914a5.6 5.6 0 0 0-1.239-1.881l.797-.794a6.8 6.8 0 0 1 1.486 2.257zM6.375 12a5.625 5.625 0 1 0 11.25 0h1.125a6.75 6.75 0 0 1-13.5 0z'
            }
        ],
        [
            'path',
            {
                fill: '#88743C',
                d: 'M15.375 12A3.375 3.375 0 0 0 12 8.625V7.5a4.5 4.5 0 0 1 4.5 4.5z'
            }
        ],
        [
            'path',
            {
                fill: '#FFBC00',
                d: 'M12 8.625a3.375 3.375 0 1 0 0 6.75V16.5a4.5 4.5 0 1 1 0-9zm1.467 6.415a3.4 3.4 0 0 0 1.407-1.27l.957.59a4.5 4.5 0 0 1-1.873 1.692z'
            }
        ],
        [
            'path',
            {
                fill: '#88743C',
                d: 'M12 10.875A1.125 1.125 0 0 0 10.875 12H9.75a2.25 2.25 0 1 1 4.5 0h-1.125A1.124 1.124 0 0 0 12 10.875'
            }
        ],
        [
            'path',
            {
                fill: '#FFBC00',
                d: 'M13.125 12A1.124 1.124 0 0 0 12 10.875V9.75a2.25 2.25 0 1 1 0 4.5v-1.125A1.125 1.125 0 0 0 13.125 12'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M4.125 12A7.875 7.875 0 0 0 12 19.875V21a9 9 0 0 1-9-9zm15.75 0A7.875 7.875 0 0 0 12 4.125V3a9 9 0 0 1 9 9 9 9 0 0 1-9 9v-1.125A7.875 7.875 0 0 0 19.875 12M9.21 4.634a7.9 7.9 0 0 0-2.6 1.625l-.771-.82A9 9 0 0 1 8.81 3.582z'
            }
        ],
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M12 6.375A5.625 5.625 0 0 0 6.375 12H5.25A6.75 6.75 0 0 1 12 5.25zm5.225 3.538a5.6 5.6 0 0 0-1.239-1.88l.797-.795a6.8 6.8 0 0 1 1.487 2.257zm-10.85 2.088a5.625 5.625 0 1 0 11.25 0h1.125a6.75 6.75 0 0 1-13.5 0zm9-.001a3.375 3.375 0 0 0-3.374-3.375V7.5a4.5 4.5 0 0 1 4.5 4.5z'
            }
        ],
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M12 8.625a3.375 3.375 0 1 0 0 6.75V16.5a4.5 4.5 0 1 1 0-9zm1.468 6.415a3.4 3.4 0 0 0 1.406-1.27l.958.59a4.5 4.5 0 0 1-1.873 1.692z'
            }
        ],
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M12 10.875A1.125 1.125 0 0 0 10.875 12H9.75a2.25 2.25 0 1 1 4.5 0h-1.125A1.125 1.125 0 0 0 12 10.875'
            }
        ],
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M13.126 12A1.125 1.125 0 0 0 12 10.875V9.75a2.25 2.25 0 1 1 0 4.5v-1.125A1.125 1.125 0 0 0 13.126 12'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#BST__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#FFBC00',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#000',
                        d: 'M5 12a7 7 0 0 0 7 7v1a8 8 0 0 1-8-8zm14 0a7 7 0 0 0-7-7V4a8 8 0 1 1 0 16v-1a7 7 0 0 0 7-7M9.52 5.452a7 7 0 0 0-2.312 1.445l-.685-.729a8 8 0 0 1 2.642-1.651z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#000',
                        d: 'M12 7a5 5 0 0 0-5 5H6a6 6 0 0 1 6-6zm4.645 3.145a5 5 0 0 0-1.101-1.672l.708-.706a6 6 0 0 1 1.321 2.007zM7 12.001a5 5 0 1 0 10 0h1a6 6 0 0 1-12 0zM15 12a3 3 0 0 0-3-3V8a4 4 0 0 1 4 4z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#000',
                        d: 'M12 9a3 3 0 1 0 0 6v1a4 4 0 1 1 0-8zm1.305 5.702c.515-.25.949-.641 1.25-1.129l.85.525c-.4.65-.977 1.171-1.664 1.504z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#000',
                        d: 'M12 11a1 1 0 0 0-1 1h-1a2 2 0 1 1 4 0h-1a1 1 0 0 0-1-1'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#000',
                        d: 'M13 12a1 1 0 0 0-1-1v-1a2 2 0 0 1 0 4v-1a1 1 0 0 0 1-1'
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
                        id: 'BST__a'
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
 * @component @name TokenBST
 * @description Web3Icon for TokenBST
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiM4ODc0M0MiIGQ9Ik00LjEyNSAxMkE3Ljg3NSA3Ljg3NSAwIDAgMCAxMiAxOS44NzVWMjFhOSA5IDAgMCAxLTktOXoiLz4KICAgIDxwYXRoIGZpbGw9IiNGRkJDMDAiIGQ9Ik0xOS44NzUgMTJBNy44NzUgNy44NzUgMCAwIDAgMTIgNC4xMjVWM2E5IDkgMCAwIDEgOSA5IDkgOSAwIDAgMS05IDl2LTEuMTI1QTcuODc1IDcuODc1IDAgMCAwIDE5Ljg3NSAxMk05LjIxIDQuNjM0YTcuOSA3LjkgMCAwIDAtMi42IDEuNjI1bC0uNzctLjgyYTkgOSAwIDAgMSAyLjk3Mi0xLjg1N3oiLz4KICAgIDxwYXRoIGZpbGw9IiM4ODc0M0MiIGQ9Ik0xMiA2LjM3NUE1LjYyNSA1LjYyNSAwIDAgMCA2LjM3NSAxMkg1LjI1QTYuNzUgNi43NSAwIDAgMSAxMiA1LjI1eiIvPgogICAgPHBhdGggZmlsbD0iI0ZGQkMwMCIgZD0iTTE3LjIyNSA5LjkxNGE1LjYgNS42IDAgMCAwLTEuMjM5LTEuODgxbC43OTctLjc5NGE2LjggNi44IDAgMCAxIDEuNDg2IDIuMjU3ek02LjM3NSAxMmE1LjYyNSA1LjYyNSAwIDEgMCAxMS4yNSAwaDEuMTI1YTYuNzUgNi43NSAwIDAgMS0xMy41IDB6Ii8+CiAgICA8cGF0aCBmaWxsPSIjODg3NDNDIiBkPSJNMTUuMzc1IDEyQTMuMzc1IDMuMzc1IDAgMCAwIDEyIDguNjI1VjcuNWE0LjUgNC41IDAgMCAxIDQuNSA0LjV6Ii8+CiAgICA8cGF0aCBmaWxsPSIjRkZCQzAwIiBkPSJNMTIgOC42MjVhMy4zNzUgMy4zNzUgMCAxIDAgMCA2Ljc1VjE2LjVhNC41IDQuNSAwIDEgMSAwLTl6bTEuNDY3IDYuNDE1YTMuNCAzLjQgMCAwIDAgMS40MDctMS4yN2wuOTU3LjU5YTQuNSA0LjUgMCAwIDEtMS44NzMgMS42OTJ6Ii8+CiAgICA8cGF0aCBmaWxsPSIjODg3NDNDIiBkPSJNMTIgMTAuODc1QTEuMTI1IDEuMTI1IDAgMCAwIDEwLjg3NSAxMkg5Ljc1YTIuMjUgMi4yNSAwIDEgMSA0LjUgMGgtMS4xMjVBMS4xMjQgMS4xMjQgMCAwIDAgMTIgMTAuODc1Ii8+CiAgICA8cGF0aCBmaWxsPSIjRkZCQzAwIiBkPSJNMTMuMTI1IDEyQTEuMTI0IDEuMTI0IDAgMCAwIDEyIDEwLjg3NVY5Ljc1YTIuMjUgMi4yNSAwIDEgMSAwIDQuNXYtMS4xMjVBMS4xMjUgMS4xMjUgMCAwIDAgMTMuMTI1IDEyIi8+Cjwvc3ZnPgo=) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik00LjEyNSAxMkE3Ljg3NSA3Ljg3NSAwIDAgMCAxMiAxOS44NzVWMjFhOSA5IDAgMCAxLTktOXptMTUuNzUgMEE3Ljg3NSA3Ljg3NSAwIDAgMCAxMiA0LjEyNVYzYTkgOSAwIDAgMSA5IDkgOSA5IDAgMCAxLTkgOXYtMS4xMjVBNy44NzUgNy44NzUgMCAwIDAgMTkuODc1IDEyTTkuMjEgNC42MzRhNy45IDcuOSAwIDAgMC0yLjYgMS42MjVsLS43NzEtLjgyQTkgOSAwIDAgMSA4LjgxIDMuNTgyeiIvPgogICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTEyIDYuMzc1QTUuNjI1IDUuNjI1IDAgMCAwIDYuMzc1IDEySDUuMjVBNi43NSA2Ljc1IDAgMCAxIDEyIDUuMjV6bTUuMjI1IDMuNTM4YTUuNiA1LjYgMCAwIDAtMS4yMzktMS44OGwuNzk3LS43OTVhNi44IDYuOCAwIDAgMSAxLjQ4NyAyLjI1N3ptLTEwLjg1IDIuMDg4YTUuNjI1IDUuNjI1IDAgMSAwIDExLjI1IDBoMS4xMjVhNi43NSA2Ljc1IDAgMCAxLTEzLjUgMHptOS0uMDAxYTMuMzc1IDMuMzc1IDAgMCAwLTMuMzc0LTMuMzc1VjcuNWE0LjUgNC41IDAgMCAxIDQuNSA0LjV6Ii8+CiAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTIgOC42MjVhMy4zNzUgMy4zNzUgMCAxIDAgMCA2Ljc1VjE2LjVhNC41IDQuNSAwIDEgMSAwLTl6bTEuNDY4IDYuNDE1YTMuNCAzLjQgMCAwIDAgMS40MDYtMS4yN2wuOTU4LjU5YTQuNSA0LjUgMCAwIDEtMS44NzMgMS42OTJ6Ii8+CiAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTIgMTAuODc1QTEuMTI1IDEuMTI1IDAgMCAwIDEwLjg3NSAxMkg5Ljc1YTIuMjUgMi4yNSAwIDEgMSA0LjUgMGgtMS4xMjVBMS4xMjUgMS4xMjUgMCAwIDAgMTIgMTAuODc1Ii8+CiAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTMuMTI2IDEyQTEuMTI1IDEuMTI1IDAgMCAwIDEyIDEwLjg3NVY5Ljc1YTIuMjUgMi4yNSAwIDEgMSAwIDQuNXYtMS4xMjVBMS4xMjUgMS4xMjUgMCAwIDAgMTMuMTI2IDEyIi8+Cjwvc3ZnPgo=) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNCU1RfX2EpIj4KICAgICAgICA8cGF0aCBmaWxsPSIjRkZCQzAwIiBkPSJNMjQgMEgwdjI0aDI0eiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiMwMDAiIGQ9Ik01IDEyYTcgNyAwIDAgMCA3IDd2MWE4IDggMCAwIDEtOC04em0xNCAwYTcgNyAwIDAgMC03LTdWNGE4IDggMCAxIDEgMCAxNnYtMWE3IDcgMCAwIDAgNy03TTkuNTIgNS40NTJhNyA3IDAgMCAwLTIuMzEyIDEuNDQ1bC0uNjg1LS43MjlhOCA4IDAgMCAxIDIuNjQyLTEuNjUxeiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiMwMDAiIGQ9Ik0xMiA3YTUgNSAwIDAgMC01IDVINmE2IDYgMCAwIDEgNi02em00LjY0NSAzLjE0NWE1IDUgMCAwIDAtMS4xMDEtMS42NzJsLjcwOC0uNzA2YTYgNiAwIDAgMSAxLjMyMSAyLjAwN3pNNyAxMi4wMDFhNSA1IDAgMSAwIDEwIDBoMWE2IDYgMCAwIDEtMTIgMHpNMTUgMTJhMyAzIDAgMCAwLTMtM1Y4YTQgNCAwIDAgMSA0IDR6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0iIzAwMCIgZD0iTTEyIDlhMyAzIDAgMSAwIDAgNnYxYTQgNCAwIDEgMSAwLTh6bTEuMzA1IDUuNzAyYy41MTUtLjI1Ljk0OS0uNjQxIDEuMjUtMS4xMjlsLjg1LjUyNWMtLjQuNjUtLjk3NyAxLjE3MS0xLjY2NCAxLjUwNHoiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjMDAwIiBkPSJNMTIgMTFhMSAxIDAgMCAwLTEgMWgtMWEyIDIgMCAxIDEgNCAwaC0xYTEgMSAwIDAgMC0xLTEiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjMDAwIiBkPSJNMTMgMTJhMSAxIDAgMCAwLTEtMXYtMWEyIDIgMCAwIDEgMCA0di0xYTEgMSAwIDAgMCAxLTEiLz4KICAgIDwvZz4KICAgIDxkZWZzPgogICAgICAgIDxjbGlwUGF0aCBpZD0iQlNUX19hIj4KICAgICAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTAgMGgyNHYyNEgweiIvPgogICAgICAgIDwvY2xpcFBhdGg+CiAgICA8L2RlZnM+Cjwvc3ZnPgo=)
 * @see https://web3icons.io/tokens/BST
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenBST = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenBST', __iconNode);
;
}),
]);

//# sourceMappingURL=1qqr_%40web3icons_react_dist_0qfixut._.js.map