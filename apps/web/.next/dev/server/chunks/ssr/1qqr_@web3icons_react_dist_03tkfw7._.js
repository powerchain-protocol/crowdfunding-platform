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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenTIDAL.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenTIDAL
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-ssr] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#002D95',
                d: 'M21 6.841a5.9 5.9 0 0 1-2.676-.348l-.72-.27a8.3 8.3 0 0 0-5.808 0l-.72.27a5.92 5.92 0 0 1-4.152 0l-.72-.27A8.3 8.3 0 0 0 3 5.707v2.43a5.9 5.9 0 0 1 2.376.372l.72.27c1.873.7 3.935.7 5.808 0l.72-.27c1.339-.5 2.813-.5 4.152 0l.72.27A8.2 8.2 0 0 0 21 9.277zm-18 9.06h18v2.4H3zm15.324-4.608a5.9 5.9 0 0 0 2.676.349v2.436a8.2 8.2 0 0 1-3.504-.498l-.72-.27a5.93 5.93 0 0 0-4.152 0l-.72.27c-1.873.7-3.935.7-5.808 0l-.72-.27A5.9 5.9 0 0 0 3 12.936v-2.43a8.3 8.3 0 0 1 3.204.517l.72.27a5.9 5.9 0 0 0 4.152 0l.72-.27c1.873-.7 3.935-.7 5.808 0z'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M21 6.841a5.9 5.9 0 0 1-2.676-.348l-.72-.27a8.3 8.3 0 0 0-5.808 0l-.72.27a5.92 5.92 0 0 1-4.152 0l-.72-.27A8.3 8.3 0 0 0 3 5.707v2.43a5.9 5.9 0 0 1 2.376.372l.72.27c1.873.7 3.935.7 5.808 0l.72-.27c1.339-.5 2.813-.5 4.152 0l.72.27A8.2 8.2 0 0 0 21 9.277zm-18 9.06h18v2.4H3zm15.324-4.607a5.9 5.9 0 0 0 2.676.348v2.436a8.2 8.2 0 0 1-3.504-.498l-.72-.27a5.93 5.93 0 0 0-4.152 0l-.72.27c-1.873.7-3.935.7-5.808 0l-.72-.27A5.9 5.9 0 0 0 3 12.937v-2.43a8.3 8.3 0 0 1 3.204.517l.72.27a5.9 5.9 0 0 0 4.152 0l.72-.27c1.873-.7 3.935-.7 5.808 0z'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#TIDAL__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#002D95',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M20 7.415a5.3 5.3 0 0 1-2.379-.31l-.64-.24a7.38 7.38 0 0 0-5.162 0l-.64.24a5.27 5.27 0 0 1-3.691 0l-.64-.24A7.4 7.4 0 0 0 4 6.407v2.16a5.3 5.3 0 0 1 2.112.33l.64.24a7.38 7.38 0 0 0 5.163 0l.64-.24a5.27 5.27 0 0 1 3.69 0l.64.24A7.3 7.3 0 0 0 20 9.58zM4 15.468h16v2.133H4zm13.621-4.096a5.3 5.3 0 0 0 2.379.31v2.165a7.3 7.3 0 0 1-3.115-.443l-.64-.24a5.27 5.27 0 0 0-3.69 0l-.64.24a7.38 7.38 0 0 1-5.163 0l-.64-.24A5.3 5.3 0 0 0 4 12.834v-2.16c.96-.038 1.93.117 2.848.458l.64.24a5.24 5.24 0 0 0 3.69 0l.64-.24a7.38 7.38 0 0 1 5.163 0z'
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
                        id: 'TIDAL__a'
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
 * @component @name TokenTIDAL
 * @description Web3Icon for TokenTIDAL
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiMwMDJEOTUiIGQ9Ik0yMSA2Ljg0MWE1LjkgNS45IDAgMCAxLTIuNjc2LS4zNDhsLS43Mi0uMjdhOC4zIDguMyAwIDAgMC01LjgwOCAwbC0uNzIuMjdhNS45MiA1LjkyIDAgMCAxLTQuMTUyIDBsLS43Mi0uMjdBOC4zIDguMyAwIDAgMCAzIDUuNzA3djIuNDNhNS45IDUuOSAwIDAgMSAyLjM3Ni4zNzJsLjcyLjI3YzEuODczLjcgMy45MzUuNyA1LjgwOCAwbC43Mi0uMjdjMS4zMzktLjUgMi44MTMtLjUgNC4xNTIgMGwuNzIuMjdBOC4yIDguMiAwIDAgMCAyMSA5LjI3N3ptLTE4IDkuMDZoMTh2Mi40SDN6bTE1LjMyNC00LjYwOGE1LjkgNS45IDAgMCAwIDIuNjc2LjM0OXYyLjQzNmE4LjIgOC4yIDAgMCAxLTMuNTA0LS40OThsLS43Mi0uMjdhNS45MyA1LjkzIDAgMCAwLTQuMTUyIDBsLS43Mi4yN2MtMS44NzMuNy0zLjkzNS43LTUuODA4IDBsLS43Mi0uMjdBNS45IDUuOSAwIDAgMCAzIDEyLjkzNnYtMi40M2E4LjMgOC4zIDAgMCAxIDMuMjA0LjUxN2wuNzIuMjdhNS45IDUuOSAwIDAgMCA0LjE1MiAwbC43Mi0uMjdjMS44NzMtLjcgMy45MzUtLjcgNS44MDggMHoiLz4KPC9zdmc+Cg==) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0yMSA2Ljg0MWE1LjkgNS45IDAgMCAxLTIuNjc2LS4zNDhsLS43Mi0uMjdhOC4zIDguMyAwIDAgMC01LjgwOCAwbC0uNzIuMjdhNS45MiA1LjkyIDAgMCAxLTQuMTUyIDBsLS43Mi0uMjdBOC4zIDguMyAwIDAgMCAzIDUuNzA3djIuNDNhNS45IDUuOSAwIDAgMSAyLjM3Ni4zNzJsLjcyLjI3YzEuODczLjcgMy45MzUuNyA1LjgwOCAwbC43Mi0uMjdjMS4zMzktLjUgMi44MTMtLjUgNC4xNTIgMGwuNzIuMjdBOC4yIDguMiAwIDAgMCAyMSA5LjI3N3ptLTE4IDkuMDZoMTh2Mi40SDN6bTE1LjMyNC00LjYwN2E1LjkgNS45IDAgMCAwIDIuNjc2LjM0OHYyLjQzNmE4LjIgOC4yIDAgMCAxLTMuNTA0LS40OThsLS43Mi0uMjdhNS45MyA1LjkzIDAgMCAwLTQuMTUyIDBsLS43Mi4yN2MtMS44NzMuNy0zLjkzNS43LTUuODA4IDBsLS43Mi0uMjdBNS45IDUuOSAwIDAgMCAzIDEyLjkzN3YtMi40M2E4LjMgOC4zIDAgMCAxIDMuMjA0LjUxN2wuNzIuMjdhNS45IDUuOSAwIDAgMCA0LjE1MiAwbC43Mi0uMjdjMS44NzMtLjcgMy45MzUtLjcgNS44MDggMHoiLz4KPC9zdmc+Cg==) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNUSURBTF9fYSkiPgogICAgICAgIDxwYXRoIGZpbGw9IiMwMDJEOTUiIGQ9Ik0yNCAwSDB2MjRoMjR6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTIwIDcuNDE1YTUuMyA1LjMgMCAwIDEtMi4zNzktLjMxbC0uNjQtLjI0YTcuMzggNy4zOCAwIDAgMC01LjE2MiAwbC0uNjQuMjRhNS4yNyA1LjI3IDAgMCAxLTMuNjkxIDBsLS42NC0uMjRBNy40IDcuNCAwIDAgMCA0IDYuNDA3djIuMTZhNS4zIDUuMyAwIDAgMSAyLjExMi4zM2wuNjQuMjRhNy4zOCA3LjM4IDAgMCAwIDUuMTYzIDBsLjY0LS4yNGE1LjI3IDUuMjcgMCAwIDEgMy42OSAwbC42NC4yNEE3LjMgNy4zIDAgMCAwIDIwIDkuNTh6TTQgMTUuNDY4aDE2djIuMTMzSDR6bTEzLjYyMS00LjA5NmE1LjMgNS4zIDAgMCAwIDIuMzc5LjMxdjIuMTY1YTcuMyA3LjMgMCAwIDEtMy4xMTUtLjQ0M2wtLjY0LS4yNGE1LjI3IDUuMjcgMCAwIDAtMy42OSAwbC0uNjQuMjRhNy4zOCA3LjM4IDAgMCAxLTUuMTYzIDBsLS42NC0uMjRBNS4zIDUuMyAwIDAgMCA0IDEyLjgzNHYtMi4xNmMuOTYtLjAzOCAxLjkzLjExNyAyLjg0OC40NThsLjY0LjI0YTUuMjQgNS4yNCAwIDAgMCAzLjY5IDBsLjY0LS4yNGE3LjM4IDcuMzggMCAwIDEgNS4xNjMgMHoiLz4KICAgIDwvZz4KICAgIDxkZWZzPgogICAgICAgIDxjbGlwUGF0aCBpZD0iVElEQUxfX2EiPgogICAgICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMCAwaDI0djI0SDB6Ii8+CiAgICAgICAgPC9jbGlwUGF0aD4KICAgIDwvZGVmcz4KPC9zdmc+Cg==)
 * @see https://web3icons.io/tokens/TIDAL
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenTIDAL = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenTIDAL', __iconNode);
;
}),
];

//# sourceMappingURL=1qqr_%40web3icons_react_dist_03tkfw7._.js.map