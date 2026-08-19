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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenTIPS.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenTIPS
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-ssr] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#F7C91E',
                d: 'M8.618 8.378c-.71 0-.884-.632-.884-.949.197-.736.928-2.52 2.368-2.52 2.072 0 4.26.23 5.443.546-2.661.632-6.038 2.923-6.927 2.923'
            }
        ],
        [
            'path',
            {
                fill: '#F7C91E',
                d: 'M7.735 8.062c0 .316.403.665.992.665.366 0 1.418-.545 2.618-1.162 1.697-.872 3.682-1.898 4.375-1.712.196.316.655 1.636.89 3.152l.18.077C18.163 9.638 21 10.794 21 12c0 1.576-4.39 7.09-10.898 7.09C3.589 19.09 3 14.679 3 13.735c0-.949 1.184-3.152 4.44-4.418.196-.098.295-.753.295-1.254m-.917 3.392c.197.524 1.07 1.637 2.727 1.637 2.073 0 6.502-2.64 7.091-3.273v2.455c0 .709-4.472 3.272-6.545 3.272s-3.546-1.494-3.546-2.127c0-.502.175-1.544.273-1.964',
                fillRule: 'evenodd',
                clipRule: 'evenodd'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M8.619 8.378c-.71 0-.884-.632-.884-.949.197-.736.928-2.52 2.368-2.52 2.072 0 4.26.23 5.443.546-2.661.632-6.038 2.923-6.927 2.923'
            }
        ],
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M7.735 8.062c0 .316.403.665.992.665.366 0 1.418-.545 2.618-1.162 1.697-.872 3.682-1.898 4.375-1.712.196.316.655 1.636.89 3.152l.18.077C18.163 9.638 21 10.794 21 12c0 1.576-4.39 7.09-10.898 7.09C3.589 19.09 3 14.679 3 13.735c0-.949 1.184-3.152 4.44-4.418.196-.098.295-.753.295-1.254m-.917 3.392c.197.524 1.07 1.637 2.727 1.637 2.073 0 6.502-2.64 7.091-3.273v2.455c0 .709-4.472 3.272-6.545 3.272s-3.546-1.494-3.546-2.127c0-.502.175-1.544.273-1.964',
                fillRule: 'evenodd',
                clipRule: 'evenodd'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#TIPS__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#F7C91E',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#000',
                        d: 'M8.994 8.78c-.63 0-.785-.562-.785-.843.175-.654.824-2.24 2.104-2.24 1.843 0 3.787.204 4.839.485-2.366.563-5.367 2.599-6.158 2.599'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#000',
                        d: 'M8.209 8.5c0 .28.358.59.882.59.325 0 1.26-.484 2.327-1.032 1.508-.776 3.273-1.687 3.889-1.522.174.28.582 1.454.79 2.802l.16.068C17.479 9.9 20 10.928 20 12c0 1.401-3.903 6.303-9.687 6.303C4.523 18.303 4 14.38 4 13.542c0-.844 1.052-2.803 3.947-3.928.174-.087.262-.669.262-1.115m-.815 3.015c.174.465.95 1.454 2.424 1.454 1.843 0 5.78-2.346 6.303-2.908v2.181c0 .63-3.975 2.91-5.818 2.91s-3.151-1.33-3.151-1.892c0-.446.155-1.372.242-1.745',
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
                        id: 'TIPS__a'
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
 * @component @name TokenTIPS
 * @description Web3Icon for TokenTIPS
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNGN0M5MUUiIGQ9Ik04LjYxOCA4LjM3OGMtLjcxIDAtLjg4NC0uNjMyLS44ODQtLjk0OS4xOTctLjczNi45MjgtMi41MiAyLjM2OC0yLjUyIDIuMDcyIDAgNC4yNi4yMyA1LjQ0My41NDYtMi42NjEuNjMyLTYuMDM4IDIuOTIzLTYuOTI3IDIuOTIzIi8+CiAgICA8cGF0aCBmaWxsPSIjRjdDOTFFIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik03LjczNSA4LjA2MmMwIC4zMTYuNDAzLjY2NS45OTIuNjY1LjM2NiAwIDEuNDE4LS41NDUgMi42MTgtMS4xNjIgMS42OTctLjg3MiAzLjY4Mi0xLjg5OCA0LjM3NS0xLjcxMi4xOTYuMzE2LjY1NSAxLjYzNi44OSAzLjE1MmwuMTguMDc3QzE4LjE2MyA5LjYzOCAyMSAxMC43OTQgMjEgMTJjMCAxLjU3Ni00LjM5IDcuMDktMTAuODk4IDcuMDlDMy41ODkgMTkuMDkgMyAxNC42NzkgMyAxMy43MzVjMC0uOTQ5IDEuMTg0LTMuMTUyIDQuNDQtNC40MTguMTk2LS4wOTguMjk1LS43NTMuMjk1LTEuMjU0bS0uOTE3IDMuMzkyYy4xOTcuNTI0IDEuMDcgMS42MzcgMi43MjcgMS42MzcgMi4wNzMgMCA2LjUwMi0yLjY0IDcuMDkxLTMuMjczdjIuNDU1YzAgLjcwOS00LjQ3MiAzLjI3Mi02LjU0NSAzLjI3MnMtMy41NDYtMS40OTQtMy41NDYtMi4xMjdjMC0uNTAyLjE3NS0xLjU0NC4yNzMtMS45NjQiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4K) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik04LjYxOSA4LjM3OGMtLjcxIDAtLjg4NC0uNjMyLS44ODQtLjk0OS4xOTctLjczNi45MjgtMi41MiAyLjM2OC0yLjUyIDIuMDcyIDAgNC4yNi4yMyA1LjQ0My41NDYtMi42NjEuNjMyLTYuMDM4IDIuOTIzLTYuOTI3IDIuOTIzIi8+CiAgICA8cGF0aCBmaWxsPSIjZmZmIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik03LjczNSA4LjA2MmMwIC4zMTYuNDAzLjY2NS45OTIuNjY1LjM2NiAwIDEuNDE4LS41NDUgMi42MTgtMS4xNjIgMS42OTctLjg3MiAzLjY4Mi0xLjg5OCA0LjM3NS0xLjcxMi4xOTYuMzE2LjY1NSAxLjYzNi44OSAzLjE1MmwuMTguMDc3QzE4LjE2MyA5LjYzOCAyMSAxMC43OTQgMjEgMTJjMCAxLjU3Ni00LjM5IDcuMDktMTAuODk4IDcuMDlDMy41ODkgMTkuMDkgMyAxNC42NzkgMyAxMy43MzVjMC0uOTQ5IDEuMTg0LTMuMTUyIDQuNDQtNC40MTguMTk2LS4wOTguMjk1LS43NTMuMjk1LTEuMjU0bS0uOTE3IDMuMzkyYy4xOTcuNTI0IDEuMDcgMS42MzcgMi43MjcgMS42MzcgMi4wNzMgMCA2LjUwMi0yLjY0IDcuMDkxLTMuMjczdjIuNDU1YzAgLjcwOS00LjQ3MiAzLjI3Mi02LjU0NSAzLjI3MnMtMy41NDYtMS40OTQtMy41NDYtMi4xMjdjMC0uNTAyLjE3NS0xLjU0NC4yNzMtMS45NjQiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4K) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNUSVBTX19hKSI+CiAgICAgICAgPHBhdGggZmlsbD0iI0Y3QzkxRSIgZD0iTTI0IDBIMHYyNGgyNHoiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjMDAwIiBkPSJNOC45OTQgOC43OGMtLjYzIDAtLjc4NS0uNTYyLS43ODUtLjg0My4xNzUtLjY1NC44MjQtMi4yNCAyLjEwNC0yLjI0IDEuODQzIDAgMy43ODcuMjA0IDQuODM5LjQ4NS0yLjM2Ni41NjMtNS4zNjcgMi41OTktNi4xNTggMi41OTkiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjMDAwIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik04LjIwOSA4LjVjMCAuMjguMzU4LjU5Ljg4Mi41OS4zMjUgMCAxLjI2LS40ODQgMi4zMjctMS4wMzIgMS41MDgtLjc3NiAzLjI3My0xLjY4NyAzLjg4OS0xLjUyMi4xNzQuMjguNTgyIDEuNDU0Ljc5IDIuODAybC4xNi4wNjhDMTcuNDc5IDkuOSAyMCAxMC45MjggMjAgMTJjMCAxLjQwMS0zLjkwMyA2LjMwMy05LjY4NyA2LjMwM0M0LjUyMyAxOC4zMDMgNCAxNC4zOCA0IDEzLjU0MmMwLS44NDQgMS4wNTItMi44MDMgMy45NDctMy45MjguMTc0LS4wODcuMjYyLS42NjkuMjYyLTEuMTE1bS0uODE1IDMuMDE1Yy4xNzQuNDY1Ljk1IDEuNDU0IDIuNDI0IDEuNDU0IDEuODQzIDAgNS43OC0yLjM0NiA2LjMwMy0yLjkwOHYyLjE4MWMwIC42My0zLjk3NSAyLjkxLTUuODE4IDIuOTFzLTMuMTUxLTEuMzMtMy4xNTEtMS44OTJjMC0uNDQ2LjE1NS0xLjM3Mi4yNDItMS43NDUiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgogICAgPC9nPgogICAgPGRlZnM+CiAgICAgICAgPGNsaXBQYXRoIGlkPSJUSVBTX19hIj4KICAgICAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTAgMGgyNHYyNEgweiIvPgogICAgICAgIDwvY2xpcFBhdGg+CiAgICA8L2RlZnM+Cjwvc3ZnPgo=)
 * @see https://web3icons.io/tokens/TIPS
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenTIPS = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenTIPS', __iconNode);
;
}),
];

//# sourceMappingURL=1qqr_%40web3icons_react_dist_0byqi77._.js.map