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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenKOM.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenKOM
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-client] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#2891F9',
                d: 'M15.375 15.015v-1.89L17.625 12l.056 4.185z'
            }
        ],
        [
            'path',
            {
                fill: '#2B6DEF',
                d: 'm10.712 12.022 5.26-3.06.309-3.122-8.258 3.657v2.525zM17.642 21l2.233-1.407-11.272-6.502L6.1 14.385z'
            }
        ],
        [
            'path',
            {
                fill: '#2891F9',
                d: 'M4.125 4.052 6.375 3v15.547L4.125 19.6zm11.25.326L17.625 3v5.946l-2.25 1.085z'
            }
        ],
        [
            'path',
            {
                fill: '#2BBDF7',
                d: 'M19.875 4.322 17.625 3v5.906l2.25 1.125zm-11.25-.27L6.375 3v15.547l2.25 1.052z'
            }
        ],
        [
            'path',
            {
                fill: '#2B6DEF',
                d: 'm6.375 18.187-2.25 1.407L6.369 21l2.256-1.406zm11.25-9.562-2.25 1.406 2.25 1.406 2.25-1.406z'
            }
        ],
        [
            'path',
            {
                fill: '#2891F9',
                d: 'M6.375 9.446 17.625 3v2.773L6.375 12z'
            }
        ],
        [
            'path',
            {
                fill: 'url(#KOM__a)',
                d: 'm6.375 11.999 13.5 7.594v-6.469l-2.25-1.125v3.937l-9.017-5.191z'
            }
        ],
        [
            'defs',
            {},
            [
                [
                    'linearGradient',
                    {
                        id: 'KOM__a',
                        x1: '7.775',
                        x2: '20.049',
                        y1: '13.585',
                        y2: '13.585',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                offset: '.35',
                                stopColor: '#2B6DEF'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '.76',
                                stopColor: '#2BBCF7'
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
                d: 'M15.375 15.015v-1.89L17.625 12l.056 4.185zm-4.663-2.993 5.26-3.06.309-3.122-8.258 3.657v2.525zM17.642 21l2.233-1.407-11.272-6.502L6.1 14.385z'
            }
        ],
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M4.125 4.052 6.375 3v15.547L4.125 19.6zm11.25.326L17.625 3v5.946l-2.25 1.085zm4.5-.056L17.625 3v5.906l2.25 1.125zm-11.25-.27L6.375 3v15.547l2.25 1.052z'
            }
        ],
        [
            'path',
            {
                fill: 'currentColor',
                d: 'm6.375 18.188-2.25 1.406L6.369 21l2.256-1.406zm11.25-9.563-2.25 1.406 2.25 1.406 2.25-1.406zm-11.25.821L17.625 3v2.773L6.375 12z'
            }
        ],
        [
            'path',
            {
                fill: 'currentColor',
                d: 'm6.375 11.999 13.5 7.594v-6.469l-2.25-1.125v3.937l-9.017-5.191z'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#KOM__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#2B6DEF',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M15 14.68V13l2-1 .05 3.72zm-4.145-2.66L15.53 9.3l.275-2.775-7.34 3.25v2.245zm6.16 7.98L19 18.75 8.98 12.97l-2.225 1.15z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M5 4.935 7 4v13.82l-2 .935zm10 .29L17 4v5.285l-2 .965zm4-.05L17 4v5.25l2 1zm-10-.24L7 4v13.82l2 .935z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'm7 17.5-2 1.25L6.995 20 9 18.75zM17 9l-2 1.25 2 1.25 2-1.25zM7 9.73 17 4v2.465L7 12z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'm7 12 12 6.75V13l-2-1v3.5l-8.015-4.616z'
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
                        id: 'KOM__a'
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
 * @component @name TokenKOM
 * @description Web3Icon for TokenKOM
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiMyODkxRjkiIGQ9Ik0xNS4zNzUgMTUuMDE1di0xLjg5TDE3LjYyNSAxMmwuMDU2IDQuMTg1eiIvPgogICAgPHBhdGggZmlsbD0iIzJCNkRFRiIgZD0ibTEwLjcxMiAxMi4wMjIgNS4yNi0zLjA2LjMwOS0zLjEyMi04LjI1OCAzLjY1N3YyLjUyNXpNMTcuNjQyIDIxbDIuMjMzLTEuNDA3LTExLjI3Mi02LjUwMkw2LjEgMTQuMzg1eiIvPgogICAgPHBhdGggZmlsbD0iIzI4OTFGOSIgZD0iTTQuMTI1IDQuMDUyIDYuMzc1IDN2MTUuNTQ3TDQuMTI1IDE5LjZ6bTExLjI1LjMyNkwxNy42MjUgM3Y1Ljk0NmwtMi4yNSAxLjA4NXoiLz4KICAgIDxwYXRoIGZpbGw9IiMyQkJERjciIGQ9Ik0xOS44NzUgNC4zMjIgMTcuNjI1IDN2NS45MDZsMi4yNSAxLjEyNXptLTExLjI1LS4yN0w2LjM3NSAzdjE1LjU0N2wyLjI1IDEuMDUyeiIvPgogICAgPHBhdGggZmlsbD0iIzJCNkRFRiIgZD0ibTYuMzc1IDE4LjE4Ny0yLjI1IDEuNDA3TDYuMzY5IDIxbDIuMjU2LTEuNDA2em0xMS4yNS05LjU2Mi0yLjI1IDEuNDA2IDIuMjUgMS40MDYgMi4yNS0xLjQwNnoiLz4KICAgIDxwYXRoIGZpbGw9IiMyODkxRjkiIGQ9Ik02LjM3NSA5LjQ0NiAxNy42MjUgM3YyLjc3M0w2LjM3NSAxMnoiLz4KICAgIDxwYXRoIGZpbGw9InVybCgjS09NX19hKSIgZD0ibTYuMzc1IDExLjk5OSAxMy41IDcuNTk0di02LjQ2OWwtMi4yNS0xLjEyNXYzLjkzN2wtOS4wMTctNS4xOTF6Ii8+CiAgICA8ZGVmcz4KICAgICAgICA8bGluZWFyR3JhZGllbnQgaWQ9IktPTV9fYSIgeDE9IjcuNzc1IiB4Mj0iMjAuMDQ5IiB5MT0iMTMuNTg1IiB5Mj0iMTMuNTg1IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iLjM1IiBzdG9wLWNvbG9yPSIjMkI2REVGIi8+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iLjc2IiBzdG9wLWNvbG9yPSIjMkJCQ0Y3Ii8+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgIDwvZGVmcz4KPC9zdmc+Cg==) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xNS4zNzUgMTUuMDE1di0xLjg5TDE3LjYyNSAxMmwuMDU2IDQuMTg1em0tNC42NjMtMi45OTMgNS4yNi0zLjA2LjMwOS0zLjEyMi04LjI1OCAzLjY1N3YyLjUyNXpNMTcuNjQyIDIxbDIuMjMzLTEuNDA3LTExLjI3Mi02LjUwMkw2LjEgMTQuMzg1eiIvPgogICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTQuMTI1IDQuMDUyIDYuMzc1IDN2MTUuNTQ3TDQuMTI1IDE5LjZ6bTExLjI1LjMyNkwxNy42MjUgM3Y1Ljk0NmwtMi4yNSAxLjA4NXptNC41LS4wNTZMMTcuNjI1IDN2NS45MDZsMi4yNSAxLjEyNXptLTExLjI1LS4yN0w2LjM3NSAzdjE1LjU0N2wyLjI1IDEuMDUyeiIvPgogICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0ibTYuMzc1IDE4LjE4OC0yLjI1IDEuNDA2TDYuMzY5IDIxbDIuMjU2LTEuNDA2em0xMS4yNS05LjU2My0yLjI1IDEuNDA2IDIuMjUgMS40MDYgMi4yNS0xLjQwNnptLTExLjI1LjgyMUwxNy42MjUgM3YyLjc3M0w2LjM3NSAxMnoiLz4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Im02LjM3NSAxMS45OTkgMTMuNSA3LjU5NHYtNi40NjlsLTIuMjUtMS4xMjV2My45MzdsLTkuMDE3LTUuMTkxeiIvPgo8L3N2Zz4K) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNLT01fX2EpIj4KICAgICAgICA8cGF0aCBmaWxsPSIjMkI2REVGIiBkPSJNMjQgMEgwdjI0aDI0eiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xNSAxNC42OFYxM2wyLTEgLjA1IDMuNzJ6bS00LjE0NS0yLjY2TDE1LjUzIDkuM2wuMjc1LTIuNzc1LTcuMzQgMy4yNXYyLjI0NXptNi4xNiA3Ljk4TDE5IDE4Ljc1IDguOTggMTIuOTdsLTIuMjI1IDEuMTV6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTUgNC45MzUgNyA0djEzLjgybC0yIC45MzV6bTEwIC4yOUwxNyA0djUuMjg1bC0yIC45NjV6bTQtLjA1TDE3IDR2NS4yNWwyIDF6bS0xMC0uMjRMNyA0djEzLjgybDIgLjkzNXoiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJtNyAxNy41LTIgMS4yNUw2Ljk5NSAyMCA5IDE4Ljc1ek0xNyA5bC0yIDEuMjUgMiAxLjI1IDItMS4yNXpNNyA5LjczIDE3IDR2Mi40NjVMNyAxMnoiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJtNyAxMiAxMiA2Ljc1VjEzbC0yLTF2My41bC04LjAxNS00LjYxNnoiLz4KICAgIDwvZz4KICAgIDxkZWZzPgogICAgICAgIDxjbGlwUGF0aCBpZD0iS09NX19hIj4KICAgICAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTAgMGgyNHYyNEgweiIvPgogICAgICAgIDwvY2xpcFBhdGg+CiAgICA8L2RlZnM+Cjwvc3ZnPgo=)
 * @see https://web3icons.io/tokens/KOM
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenKOM = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenKOM', __iconNode);
;
}),
]);

//# sourceMappingURL=1qqr_%40web3icons_react_dist_0jkyhwp._.js.map