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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenINST.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenINST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-ssr] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#3F75FF',
                d: 'M12.932 20.996c-.514.053-.932-.371-.932-.895v-2.488c0-.518.424-.931.926-1.032a4.77 4.77 0 0 0 3.838-4.584 4.77 4.77 0 0 0-3.838-4.583C12.418 7.308 12 6.9 12 6.387V3.894c0-.519.418-.942.932-.89a9.024 9.024 0 0 1 8.066 8.993c0 4.68-3.536 8.522-8.066 8.999M8.136 3.872c.582-.281 1.218.169 1.218.804v14.63c0 .635-.636 1.085-1.218.805a9.04 9.04 0 0 1-5.134-8.115c0-3.562 2.09-6.642 5.134-8.12z'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M12.932 20.996c-.514.053-.932-.371-.932-.895v-2.488c0-.518.424-.931.927-1.032a4.77 4.77 0 0 0 3.837-4.584 4.77 4.77 0 0 0-3.837-4.583C12.418 7.308 12 6.9 12 6.387V3.894c0-.519.418-.942.932-.89a9.024 9.024 0 0 1 8.066 8.993c0 4.68-3.536 8.522-8.066 8.999M8.136 3.872c.582-.281 1.218.169 1.218.804v14.63c0 .635-.636 1.085-1.218.805a9.04 9.04 0 0 1-5.134-8.115c0-3.562 2.09-6.642 5.134-8.12z'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#INST__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#3F75FF',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M12.828 19.996c-.457.047-.828-.33-.828-.795v-2.212c0-.46.376-.828.823-.917a4.24 4.24 0 0 0 3.411-4.074 4.24 4.24 0 0 0-3.41-4.075C12.37 7.83 12 7.467 12 7.01V4.794c0-.46.371-.837.828-.79a8.02 8.02 0 0 1 7.17 7.994c0 4.159-3.143 7.575-7.17 7.998M8.565 4.776c.518-.25 1.082.15 1.082.715v13.004c0 .565-.564.965-1.082.715a8.03 8.03 0 0 1-4.564-7.212c0-3.167 1.859-5.905 4.564-7.218z'
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
                        id: 'INST__a'
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
 * @component @name TokenINST
 * @description Web3Icon for TokenINST
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiMzRjc1RkYiIGQ9Ik0xMi45MzIgMjAuOTk2Yy0uNTE0LjA1My0uOTMyLS4zNzEtLjkzMi0uODk1di0yLjQ4OGMwLS41MTguNDI0LS45MzEuOTI2LTEuMDMyYTQuNzcgNC43NyAwIDAgMCAzLjgzOC00LjU4NCA0Ljc3IDQuNzcgMCAwIDAtMy44MzgtNC41ODNDMTIuNDE4IDcuMzA4IDEyIDYuOSAxMiA2LjM4N1YzLjg5NGMwLS41MTkuNDE4LS45NDIuOTMyLS44OWE5LjAyNCA5LjAyNCAwIDAgMSA4LjA2NiA4Ljk5M2MwIDQuNjgtMy41MzYgOC41MjItOC4wNjYgOC45OTlNOC4xMzYgMy44NzJjLjU4Mi0uMjgxIDEuMjE4LjE2OSAxLjIxOC44MDR2MTQuNjNjMCAuNjM1LS42MzYgMS4wODUtMS4yMTguODA1YTkuMDQgOS4wNCAwIDAgMS01LjEzNC04LjExNWMwLTMuNTYyIDIuMDktNi42NDIgNS4xMzQtOC4xMnoiLz4KPC9zdmc+Cg==) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xMi45MzIgMjAuOTk2Yy0uNTE0LjA1My0uOTMyLS4zNzEtLjkzMi0uODk1di0yLjQ4OGMwLS41MTguNDI0LS45MzEuOTI3LTEuMDMyYTQuNzcgNC43NyAwIDAgMCAzLjgzNy00LjU4NCA0Ljc3IDQuNzcgMCAwIDAtMy44MzctNC41ODNDMTIuNDE4IDcuMzA4IDEyIDYuOSAxMiA2LjM4N1YzLjg5NGMwLS41MTkuNDE4LS45NDIuOTMyLS44OWE5LjAyNCA5LjAyNCAwIDAgMSA4LjA2NiA4Ljk5M2MwIDQuNjgtMy41MzYgOC41MjItOC4wNjYgOC45OTlNOC4xMzYgMy44NzJjLjU4Mi0uMjgxIDEuMjE4LjE2OSAxLjIxOC44MDR2MTQuNjNjMCAuNjM1LS42MzYgMS4wODUtMS4yMTguODA1YTkuMDQgOS4wNCAwIDAgMS01LjEzNC04LjExNWMwLTMuNTYyIDIuMDktNi42NDIgNS4xMzQtOC4xMnoiLz4KPC9zdmc+Cg==) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNJTlNUX19hKSI+CiAgICAgICAgPHBhdGggZmlsbD0iIzNGNzVGRiIgZD0iTTI0IDBIMHYyNGgyNHoiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTIuODI4IDE5Ljk5NmMtLjQ1Ny4wNDctLjgyOC0uMzMtLjgyOC0uNzk1di0yLjIxMmMwLS40Ni4zNzYtLjgyOC44MjMtLjkxN2E0LjI0IDQuMjQgMCAwIDAgMy40MTEtNC4wNzQgNC4yNCA0LjI0IDAgMCAwLTMuNDEtNC4wNzVDMTIuMzcgNy44MyAxMiA3LjQ2NyAxMiA3LjAxVjQuNzk0YzAtLjQ2LjM3MS0uODM3LjgyOC0uNzlhOC4wMiA4LjAyIDAgMCAxIDcuMTcgNy45OTRjMCA0LjE1OS0zLjE0MyA3LjU3NS03LjE3IDcuOTk4TTguNTY1IDQuNzc2Yy41MTgtLjI1IDEuMDgyLjE1IDEuMDgyLjcxNXYxMy4wMDRjMCAuNTY1LS41NjQuOTY1LTEuMDgyLjcxNWE4LjAzIDguMDMgMCAwIDEtNC41NjQtNy4yMTJjMC0zLjE2NyAxLjg1OS01LjkwNSA0LjU2NC03LjIxOHoiLz4KICAgIDwvZz4KICAgIDxkZWZzPgogICAgICAgIDxjbGlwUGF0aCBpZD0iSU5TVF9fYSI+CiAgICAgICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0wIDBoMjR2MjRIMHoiLz4KICAgICAgICA8L2NsaXBQYXRoPgogICAgPC9kZWZzPgo8L3N2Zz4K)
 * @see https://web3icons.io/tokens/INST
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenINST = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenINST', __iconNode);
;
}),
];

//# sourceMappingURL=1qqr_%40web3icons_react_dist_0mu9a_b._.js.map