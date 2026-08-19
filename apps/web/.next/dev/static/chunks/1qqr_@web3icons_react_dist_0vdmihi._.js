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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenXEM.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenXEM
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-client] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#32A4F2',
                d: 'M17.409 16.127a5.3 5.3 0 0 0-.657-2.61c-1.052-1.938-3.605-2.523-4.014-4.896a4.07 4.07 0 0 1 3.042-4.698c1.817-.444 3.683.564 5.22 1.43-.016 3.902-1.375 7.582-3.591 10.774'
            }
        ],
        [
            'path',
            {
                fill: '#FFAA12',
                d: 'M12.375 4.688a5.4 5.4 0 0 1 1.812-1.575C10.3 2.736 6.415 3.417 3 5.363c.005 2.127.17 4.864 2.191 6.046 2.27 1.327 5.274.09 5.981-2.41.426-1.552.16-2.886 1.203-4.311'
            }
        ],
        [
            'path',
            {
                fill: '#2CBAAD',
                d: 'M9.957 12.572c-1.66.952-3.774.958-5.427-.01 1.526 3.48 4.168 6.524 7.47 8.425 2.295-1.355 4.858-2.96 3.898-6.048-.74-2.496-3.702-3.646-5.94-2.367'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M17.409 16.127a5.3 5.3 0 0 0-.657-2.61c-1.052-1.938-3.605-2.523-4.014-4.896a4.07 4.07 0 0 1 3.042-4.698c1.817-.444 3.683.564 5.22 1.43-.016 3.902-1.375 7.582-3.591 10.774'
            }
        ],
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M12.375 4.688a5.4 5.4 0 0 1 1.812-1.575C10.3 2.736 6.415 3.417 3 5.363c.004 2.127.17 4.864 2.191 6.046 2.27 1.327 5.274.09 5.981-2.41.426-1.552.16-2.886 1.203-4.311m-2.418 7.884c-1.66.952-3.774.958-5.427-.01 1.526 3.48 4.168 6.524 7.47 8.425 2.295-1.355 4.858-2.96 3.898-6.048-.74-2.496-3.702-3.646-5.94-2.367'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#XEM__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#32A4F2',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M16.808 15.669a4.7 4.7 0 0 0-.584-2.32c-.935-1.723-3.204-2.243-3.568-4.353A3.616 3.616 0 0 1 15.36 4.82c1.615-.394 3.274.502 4.64 1.272-.014 3.468-1.222 6.74-3.192 9.577'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M12.333 5.5a4.8 4.8 0 0 1 1.611-1.4c-3.455-.335-6.908.27-9.944 2 .004 1.891.151 4.324 1.948 5.375 2.018 1.18 4.688.08 5.316-2.143.38-1.379.143-2.565 1.07-3.832m-2.15 7.008c-1.475.847-3.355.852-4.824-.008 1.356 3.093 3.705 5.8 6.64 7.488 2.04-1.204 4.319-2.63 3.465-5.376-.658-2.218-3.29-3.24-5.28-2.104'
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
                        id: 'XEM__a'
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
 * @component @name TokenXEM
 * @description Web3Icon for TokenXEM
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiMzMkE0RjIiIGQ9Ik0xNy40MDkgMTYuMTI3YTUuMyA1LjMgMCAwIDAtLjY1Ny0yLjYxYy0xLjA1Mi0xLjkzOC0zLjYwNS0yLjUyMy00LjAxNC00Ljg5NmE0LjA3IDQuMDcgMCAwIDEgMy4wNDItNC42OThjMS44MTctLjQ0NCAzLjY4My41NjQgNS4yMiAxLjQzLS4wMTYgMy45MDItMS4zNzUgNy41ODItMy41OTEgMTAuNzc0Ii8+CiAgICA8cGF0aCBmaWxsPSIjRkZBQTEyIiBkPSJNMTIuMzc1IDQuNjg4YTUuNCA1LjQgMCAwIDEgMS44MTItMS41NzVDMTAuMyAyLjczNiA2LjQxNSAzLjQxNyAzIDUuMzYzYy4wMDUgMi4xMjcuMTcgNC44NjQgMi4xOTEgNi4wNDYgMi4yNyAxLjMyNyA1LjI3NC4wOSA1Ljk4MS0yLjQxLjQyNi0xLjU1Mi4xNi0yLjg4NiAxLjIwMy00LjMxMSIvPgogICAgPHBhdGggZmlsbD0iIzJDQkFBRCIgZD0iTTkuOTU3IDEyLjU3MmMtMS42Ni45NTItMy43NzQuOTU4LTUuNDI3LS4wMSAxLjUyNiAzLjQ4IDQuMTY4IDYuNTI0IDcuNDcgOC40MjUgMi4yOTUtMS4zNTUgNC44NTgtMi45NiAzLjg5OC02LjA0OC0uNzQtMi40OTYtMy43MDItMy42NDYtNS45NC0yLjM2NyIvPgo8L3N2Zz4K) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xNy40MDkgMTYuMTI3YTUuMyA1LjMgMCAwIDAtLjY1Ny0yLjYxYy0xLjA1Mi0xLjkzOC0zLjYwNS0yLjUyMy00LjAxNC00Ljg5NmE0LjA3IDQuMDcgMCAwIDEgMy4wNDItNC42OThjMS44MTctLjQ0NCAzLjY4My41NjQgNS4yMiAxLjQzLS4wMTYgMy45MDItMS4zNzUgNy41ODItMy41OTEgMTAuNzc0Ii8+CiAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTIuMzc1IDQuNjg4YTUuNCA1LjQgMCAwIDEgMS44MTItMS41NzVDMTAuMyAyLjczNiA2LjQxNSAzLjQxNyAzIDUuMzYzYy4wMDQgMi4xMjcuMTcgNC44NjQgMi4xOTEgNi4wNDYgMi4yNyAxLjMyNyA1LjI3NC4wOSA1Ljk4MS0yLjQxLjQyNi0xLjU1Mi4xNi0yLjg4NiAxLjIwMy00LjMxMW0tMi40MTggNy44ODRjLTEuNjYuOTUyLTMuNzc0Ljk1OC01LjQyNy0uMDEgMS41MjYgMy40OCA0LjE2OCA2LjUyNCA3LjQ3IDguNDI1IDIuMjk1LTEuMzU1IDQuODU4LTIuOTYgMy44OTgtNi4wNDgtLjc0LTIuNDk2LTMuNzAyLTMuNjQ2LTUuOTQtMi4zNjciLz4KPC9zdmc+Cg==) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNYRU1fX2EpIj4KICAgICAgICA8cGF0aCBmaWxsPSIjMzJBNEYyIiBkPSJNMjQgMEgwdjI0aDI0eiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xNi44MDggMTUuNjY5YTQuNyA0LjcgMCAwIDAtLjU4NC0yLjMyYy0uOTM1LTEuNzIzLTMuMjA0LTIuMjQzLTMuNTY4LTQuMzUzQTMuNjE2IDMuNjE2IDAgMCAxIDE1LjM2IDQuODJjMS42MTUtLjM5NCAzLjI3NC41MDIgNC42NCAxLjI3Mi0uMDE0IDMuNDY4LTEuMjIyIDYuNzQtMy4xOTIgOS41NzciLz4KICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTIuMzMzIDUuNWE0LjggNC44IDAgMCAxIDEuNjExLTEuNGMtMy40NTUtLjMzNS02LjkwOC4yNy05Ljk0NCAyIC4wMDQgMS44OTEuMTUxIDQuMzI0IDEuOTQ4IDUuMzc1IDIuMDE4IDEuMTggNC42ODguMDggNS4zMTYtMi4xNDMuMzgtMS4zNzkuMTQzLTIuNTY1IDEuMDctMy44MzJtLTIuMTUgNy4wMDhjLTEuNDc1Ljg0Ny0zLjM1NS44NTItNC44MjQtLjAwOCAxLjM1NiAzLjA5MyAzLjcwNSA1LjggNi42NCA3LjQ4OCAyLjA0LTEuMjA0IDQuMzE5LTIuNjMgMy40NjUtNS4zNzYtLjY1OC0yLjIxOC0zLjI5LTMuMjQtNS4yOC0yLjEwNCIvPgogICAgPC9nPgogICAgPGRlZnM+CiAgICAgICAgPGNsaXBQYXRoIGlkPSJYRU1fX2EiPgogICAgICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMCAwaDI0djI0SDB6Ii8+CiAgICAgICAgPC9jbGlwUGF0aD4KICAgIDwvZGVmcz4KPC9zdmc+Cg==)
 * @see https://web3icons.io/tokens/XEM
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenXEM = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenXEM', __iconNode);
;
}),
]);

//# sourceMappingURL=1qqr_%40web3icons_react_dist_0vdmihi._.js.map