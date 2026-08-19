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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenFIS.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenFIS
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-ssr] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#00F3AB',
                d: 'm8.355 17.394-.135.025c-.405.193-1.19.495-2.154.707L6.651 21h2.752l1.247-3.928c-.726.077-1.363.167-1.832.238l-.399 1.324zm1.26-2.713a8.2 8.2 0 0 1 1.91-.354l.475-1.51.45 1.497a5.9 5.9 0 0 1 1.929.393l-1.794-5.278h-1.389L9.61 14.68zm5.67 2.745.412 1.208.057-1.093 1.029.29.321.096c.258.064.54.116.817.135L17.317 21h-2.835l-1.203-3.96c.694.084 1.389.232 2.006.386m3.086-1.543c-.348-.02-.772-.064-1.273-.148a5.8 5.8 0 0 1-1.228-.353v-.052L18.184 3H21l-2.636 12.883zm-12.729.148L3 3h2.816l2.41 12.214-.507.238c-.348.16-.65.302-.92.392-.366.129-.771.174-1.157.187'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'm8.355 17.394-.135.025c-.405.193-1.19.495-2.154.707L6.651 21h2.752l1.247-3.928c-.726.077-1.363.167-1.832.238l-.399 1.324zm1.26-2.713a8.2 8.2 0 0 1 1.91-.354l.475-1.51.45 1.497a5.9 5.9 0 0 1 1.929.393l-1.794-5.278h-1.389L9.61 14.68zm5.67 2.745.412 1.208.057-1.093 1.029.29.321.096c.258.064.54.116.817.135L17.317 21h-2.835l-1.203-3.96c.694.084 1.389.232 2.006.386m3.086-1.543c-.348-.02-.772-.064-1.273-.148a5.8 5.8 0 0 1-1.228-.353v-.052L18.184 3H21l-2.636 12.883zm-12.729.148L3 3h2.816l2.41 12.214-.507.238c-.348.16-.65.302-.92.392-.366.129-.771.174-1.157.187'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#FIS__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#00F3AB',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'm8.76 16.794-.12.023c-.36.171-1.057.44-1.914.629L7.246 20H9.69l1.109-3.491a38 38 0 0 0-1.629.211l-.354 1.177zm1.12-2.411a7.3 7.3 0 0 1 1.697-.314L12 12.726l.4 1.331a5.2 5.2 0 0 1 1.714.349L12.52 9.714h-1.234l-1.412 4.669zm5.04 2.44.366 1.074.051-.971.914.257.286.086c.229.057.48.102.726.12L16.726 20h-2.52l-1.069-3.52c.617.074 1.234.206 1.783.343m2.743-1.372a11 11 0 0 1-1.132-.131 5 5 0 0 1-1.091-.314v-.046L17.497 4H20l-2.343 11.451zm-11.314.132L4 4h2.503l2.143 10.857-.452.212c-.308.142-.577.268-.817.348-.326.114-.686.154-1.028.166'
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
                        id: 'FIS__a'
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
 * @component @name TokenFIS
 * @description Web3Icon for TokenFIS
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiMwMEYzQUIiIGQ9Im04LjM1NSAxNy4zOTQtLjEzNS4wMjVjLS40MDUuMTkzLTEuMTkuNDk1LTIuMTU0LjcwN0w2LjY1MSAyMWgyLjc1MmwxLjI0Ny0zLjkyOGMtLjcyNi4wNzctMS4zNjMuMTY3LTEuODMyLjIzOGwtLjM5OSAxLjMyNHptMS4yNi0yLjcxM2E4LjIgOC4yIDAgMCAxIDEuOTEtLjM1NGwuNDc1LTEuNTEuNDUgMS40OTdhNS45IDUuOSAwIDAgMSAxLjkyOS4zOTNsLTEuNzk0LTUuMjc4aC0xLjM4OUw5LjYxIDE0LjY4em01LjY3IDIuNzQ1LjQxMiAxLjIwOC4wNTctMS4wOTMgMS4wMjkuMjkuMzIxLjA5NmMuMjU4LjA2NC41NC4xMTYuODE3LjEzNUwxNy4zMTcgMjFoLTIuODM1bC0xLjIwMy0zLjk2Yy42OTQuMDg0IDEuMzg5LjIzMiAyLjAwNi4zODZtMy4wODYtMS41NDNjLS4zNDgtLjAyLS43NzItLjA2NC0xLjI3My0uMTQ4YTUuOCA1LjggMCAwIDEtMS4yMjgtLjM1M3YtLjA1MkwxOC4xODQgM0gyMWwtMi42MzYgMTIuODgzem0tMTIuNzI5LjE0OEwzIDNoMi44MTZsMi40MSAxMi4yMTQtLjUwNy4yMzhjLS4zNDguMTYtLjY1LjMwMi0uOTIuMzkyLS4zNjYuMTI5LS43NzEuMTc0LTEuMTU3LjE4NyIvPgo8L3N2Zz4K) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Im04LjM1NSAxNy4zOTQtLjEzNS4wMjVjLS40MDUuMTkzLTEuMTkuNDk1LTIuMTU0LjcwN0w2LjY1MSAyMWgyLjc1MmwxLjI0Ny0zLjkyOGMtLjcyNi4wNzctMS4zNjMuMTY3LTEuODMyLjIzOGwtLjM5OSAxLjMyNHptMS4yNi0yLjcxM2E4LjIgOC4yIDAgMCAxIDEuOTEtLjM1NGwuNDc1LTEuNTEuNDUgMS40OTdhNS45IDUuOSAwIDAgMSAxLjkyOS4zOTNsLTEuNzk0LTUuMjc4aC0xLjM4OUw5LjYxIDE0LjY4em01LjY3IDIuNzQ1LjQxMiAxLjIwOC4wNTctMS4wOTMgMS4wMjkuMjkuMzIxLjA5NmMuMjU4LjA2NC41NC4xMTYuODE3LjEzNUwxNy4zMTcgMjFoLTIuODM1bC0xLjIwMy0zLjk2Yy42OTQuMDg0IDEuMzg5LjIzMiAyLjAwNi4zODZtMy4wODYtMS41NDNjLS4zNDgtLjAyLS43NzItLjA2NC0xLjI3My0uMTQ4YTUuOCA1LjggMCAwIDEtMS4yMjgtLjM1M3YtLjA1MkwxOC4xODQgM0gyMWwtMi42MzYgMTIuODgzem0tMTIuNzI5LjE0OEwzIDNoMi44MTZsMi40MSAxMi4yMTQtLjUwNy4yMzhjLS4zNDguMTYtLjY1LjMwMi0uOTIuMzkyLS4zNjYuMTI5LS43NzEuMTc0LTEuMTU3LjE4NyIvPgo8L3N2Zz4K) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNGSVNfX2EpIj4KICAgICAgICA8cGF0aCBmaWxsPSIjMDBGM0FCIiBkPSJNMjQgMEgwdjI0aDI0eiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Im04Ljc2IDE2Ljc5NC0uMTIuMDIzYy0uMzYuMTcxLTEuMDU3LjQ0LTEuOTE0LjYyOUw3LjI0NiAyMEg5LjY5bDEuMTA5LTMuNDkxYTM4IDM4IDAgMCAwLTEuNjI5LjIxMWwtLjM1NCAxLjE3N3ptMS4xMi0yLjQxMWE3LjMgNy4zIDAgMCAxIDEuNjk3LS4zMTRMMTIgMTIuNzI2bC40IDEuMzMxYTUuMiA1LjIgMCAwIDEgMS43MTQuMzQ5TDEyLjUyIDkuNzE0aC0xLjIzNGwtMS40MTIgNC42Njl6bTUuMDQgMi40NC4zNjYgMS4wNzQuMDUxLS45NzEuOTE0LjI1Ny4yODYuMDg2Yy4yMjkuMDU3LjQ4LjEwMi43MjYuMTJMMTYuNzI2IDIwaC0yLjUybC0xLjA2OS0zLjUyYy42MTcuMDc0IDEuMjM0LjIwNiAxLjc4My4zNDNtMi43NDMtMS4zNzJhMTEgMTEgMCAwIDEtMS4xMzItLjEzMSA1IDUgMCAwIDEtMS4wOTEtLjMxNHYtLjA0NkwxNy40OTcgNEgyMGwtMi4zNDMgMTEuNDUxem0tMTEuMzE0LjEzMkw0IDRoMi41MDNsMi4xNDMgMTAuODU3LS40NTIuMjEyYy0uMzA4LjE0Mi0uNTc3LjI2OC0uODE3LjM0OC0uMzI2LjExNC0uNjg2LjE1NC0xLjAyOC4xNjYiLz4KICAgIDwvZz4KICAgIDxkZWZzPgogICAgICAgIDxjbGlwUGF0aCBpZD0iRklTX19hIj4KICAgICAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTAgMGgyNHYyNEgweiIvPgogICAgICAgIDwvY2xpcFBhdGg+CiAgICA8L2RlZnM+Cjwvc3ZnPgo=)
 * @see https://web3icons.io/tokens/FIS
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenFIS = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenFIS', __iconNode);
;
}),
];

//# sourceMappingURL=1qqr_%40web3icons_react_dist_1c2x7mj._.js.map