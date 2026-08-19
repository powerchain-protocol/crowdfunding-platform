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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenGNY.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenGNY
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-ssr] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#CFEFFC',
                d: 'M9.285 4 11.5 5.28v12.86L9.315 20 5 17.2v-1.565l-2-1.34V8.95l2.185-.965.43-2.07zm-2.83 2.53-.44 2.11L4 9.55v4.25l2 1.335v1.56l3.25 2.05 1.25-1.035V5.81l-1.235-.75-2.81 1.465zM14.715 4 12.5 5.28v12.86L14.685 20 19 17.2v-1.565l2-1.34V8.95l-2.185-.965-.43-2.07zm2.83 2.53.44 2.11L20 9.55v4.25l-2 1.335v1.56l-3.235 2.135-1.265-1.115v-11.9l1.235-.75z'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M9.285 4 11.5 5.28v12.86L9.315 20 5 17.2v-1.565l-2-1.34V8.95l2.185-.965.43-2.07zm-2.83 2.53-.44 2.11L4 9.55v4.25l2 1.335v1.56l3.25 2.05 1.25-1.035V5.81l-1.235-.75-2.81 1.465zM14.715 4 12.5 5.28v12.86L14.685 20 19 17.2v-1.565l2-1.34V8.95l-2.185-.965-.43-2.07zm2.83 2.53.44 2.11L20 9.55v4.25l-2 1.335v1.56l-3.235 2.135-1.265-1.115v-11.9l1.235-.75z'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#GNY__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#CFEFFC',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'm9.587 4.889 1.969 1.137v11.432L9.613 19.11l-3.835-2.489V15.23L4 14.04V9.289l1.942-.858.382-1.84zM7.07 7.138l-.39 1.875-1.791.809V13.6l1.778 1.187v1.386l2.889 1.822 1.11-.92V6.498L9.57 5.83l-2.5 1.303zm7.342-2.25-1.969 1.138v11.432l1.943 1.653 3.835-2.489v-1.391L20 14.04V9.289l-1.942-.858-.382-1.84zm2.516 2.25.391 1.875 1.791.809V13.6l-1.778 1.187v1.386l-2.875 1.898-1.125-.991V6.502l1.098-.667z'
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
                        id: 'GNY__a'
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
 * @component @name TokenGNY
 * @description Web3Icon for TokenGNY
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNDRkVGRkMiIGQ9Ik05LjI4NSA0IDExLjUgNS4yOHYxMi44Nkw5LjMxNSAyMCA1IDE3LjJ2LTEuNTY1bC0yLTEuMzRWOC45NWwyLjE4NS0uOTY1LjQzLTIuMDd6bS0yLjgzIDIuNTMtLjQ0IDIuMTFMNCA5LjU1djQuMjVsMiAxLjMzNXYxLjU2bDMuMjUgMi4wNSAxLjI1LTEuMDM1VjUuODFsLTEuMjM1LS43NS0yLjgxIDEuNDY1ek0xNC43MTUgNCAxMi41IDUuMjh2MTIuODZMMTQuNjg1IDIwIDE5IDE3LjJ2LTEuNTY1bDItMS4zNFY4Ljk1bC0yLjE4NS0uOTY1LS40My0yLjA3em0yLjgzIDIuNTMuNDQgMi4xMUwyMCA5LjU1djQuMjVsLTIgMS4zMzV2MS41NmwtMy4yMzUgMi4xMzUtMS4yNjUtMS4xMTV2LTExLjlsMS4yMzUtLjc1eiIvPgo8L3N2Zz4K) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik05LjI4NSA0IDExLjUgNS4yOHYxMi44Nkw5LjMxNSAyMCA1IDE3LjJ2LTEuNTY1bC0yLTEuMzRWOC45NWwyLjE4NS0uOTY1LjQzLTIuMDd6bS0yLjgzIDIuNTMtLjQ0IDIuMTFMNCA5LjU1djQuMjVsMiAxLjMzNXYxLjU2bDMuMjUgMi4wNSAxLjI1LTEuMDM1VjUuODFsLTEuMjM1LS43NS0yLjgxIDEuNDY1ek0xNC43MTUgNCAxMi41IDUuMjh2MTIuODZMMTQuNjg1IDIwIDE5IDE3LjJ2LTEuNTY1bDItMS4zNFY4Ljk1bC0yLjE4NS0uOTY1LS40My0yLjA3em0yLjgzIDIuNTMuNDQgMi4xMUwyMCA5LjU1djQuMjVsLTIgMS4zMzV2MS41NmwtMy4yMzUgMi4xMzUtMS4yNjUtMS4xMTV2LTExLjlsMS4yMzUtLjc1eiIvPgo8L3N2Zz4K) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNHTllfX2EpIj4KICAgICAgICA8cGF0aCBmaWxsPSIjQ0ZFRkZDIiBkPSJNMjQgMEgwdjI0aDI0eiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Im05LjU4NyA0Ljg4OSAxLjk2OSAxLjEzN3YxMS40MzJMOS42MTMgMTkuMTFsLTMuODM1LTIuNDg5VjE1LjIzTDQgMTQuMDRWOS4yODlsMS45NDItLjg1OC4zODItMS44NHpNNy4wNyA3LjEzOGwtLjM5IDEuODc1LTEuNzkxLjgwOVYxMy42bDEuNzc4IDEuMTg3djEuMzg2bDIuODg5IDEuODIyIDEuMTEtLjkyVjYuNDk4TDkuNTcgNS44M2wtMi41IDEuMzAzem03LjM0Mi0yLjI1LTEuOTY5IDEuMTM4djExLjQzMmwxLjk0MyAxLjY1MyAzLjgzNS0yLjQ4OXYtMS4zOTFMMjAgMTQuMDRWOS4yODlsLTEuOTQyLS44NTgtLjM4Mi0xLjg0em0yLjUxNiAyLjI1LjM5MSAxLjg3NSAxLjc5MS44MDlWMTMuNmwtMS43NzggMS4xODd2MS4zODZsLTIuODc1IDEuODk4LTEuMTI1LS45OTFWNi41MDJsMS4wOTgtLjY2N3oiLz4KICAgIDwvZz4KICAgIDxkZWZzPgogICAgICAgIDxjbGlwUGF0aCBpZD0iR05ZX19hIj4KICAgICAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTAgMGgyNHYyNEgweiIvPgogICAgICAgIDwvY2xpcFBhdGg+CiAgICA8L2RlZnM+Cjwvc3ZnPgo=)
 * @see https://web3icons.io/tokens/GNY
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenGNY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenGNY', __iconNode);
;
}),
];

//# sourceMappingURL=1qqr_%40web3icons_react_dist_1kd0rbo._.js.map