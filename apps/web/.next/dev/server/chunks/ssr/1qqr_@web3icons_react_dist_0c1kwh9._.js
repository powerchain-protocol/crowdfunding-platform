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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/exchanges/ExchangeOdos.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>ExchangeOdos
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-ssr] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#FF5100',
                d: 'm6.888 5.77 1.236 1.275a6.274 6.274 0 0 1 8.718.947L15.597 9.27a4.517 4.517 0 0 1-6.237 6.402l-.634.658a5.424 5.424 0 0 0 8.033-6.942l.618-.64a6.28 6.28 0 0 1-.537 7.26l.637.653A7.195 7.195 0 0 0 8.238 5.864l-.618-.63a8 8 0 0 1 4.375-1.295 7.9 7.9 0 0 1 5.113 1.833l.635-.653A8.96 8.96 0 0 0 5.276 17.927l.636-.653a8.04 8.04 0 0 1 .976-11.503m3.465 4.944h3.758l-1.89 3.591zm-1.5-.91 3.142 6.035 3.142-6.035zM18.08 6.72l.636-.653h.005A8.959 8.959 0 0 1 6.25 18.876l.637-.654a8.03 8.03 0 0 0 9.48.542l-.619-.628A7.194 7.194 0 0 1 6.512 7.338l.641.657a6.27 6.27 0 0 0-.536 7.26l.618-.641a5.427 5.427 0 0 1 8.03-6.951l-.645.66a4.36 4.36 0 0 0-2.626-.846 4.518 4.518 0 0 0-3.602 7.253l-.64.656-.603.618a6.277 6.277 0 0 0 8.718.945l.636.657.603.618a8.047 8.047 0 0 0 .973-11.504',
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
                d: 'm6.888 5.77 1.236 1.275a6.274 6.274 0 0 1 8.718.947L15.597 9.27a4.517 4.517 0 0 1-6.237 6.402l-.634.658a5.424 5.424 0 0 0 8.033-6.942l.618-.64a6.28 6.28 0 0 1-.537 7.26l.637.653A7.195 7.195 0 0 0 8.238 5.864l-.618-.63a8 8 0 0 1 4.375-1.295 7.9 7.9 0 0 1 5.113 1.833l.635-.653A8.96 8.96 0 0 0 5.276 17.927l.636-.653a8.04 8.04 0 0 1 .976-11.503m3.465 4.944h3.758l-1.89 3.591zm-1.5-.91 3.142 6.035 3.142-6.035zM18.08 6.72l.636-.653h.005A8.959 8.959 0 0 1 6.25 18.876l.637-.654a8.03 8.03 0 0 0 9.48.542l-.619-.628A7.194 7.194 0 0 1 6.512 7.338l.641.657a6.27 6.27 0 0 0-.536 7.26l.618-.641a5.427 5.427 0 0 1 8.03-6.951l-.645.66a4.36 4.36 0 0 0-2.626-.846 4.518 4.518 0 0 0-3.602 7.253l-.64.656-.603.618a6.277 6.277 0 0 0 8.718.945l.636.657.603.618a8.047 8.047 0 0 0 .973-11.504',
                fillRule: 'evenodd',
                clipRule: 'evenodd'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#odos__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#FF5100',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'm7.456 6.463 1.099 1.133a5.577 5.577 0 0 1 7.75.841l-1.108 1.136a4.015 4.015 0 0 1-5.544 5.691l-.563.585a4.823 4.823 0 0 0 7.14-6.17l.55-.57a5.58 5.58 0 0 1-.477 6.453l.565.581a6.396 6.396 0 0 0-8.212-9.598l-.55-.559a7.1 7.1 0 0 1 3.89-1.152c1.66-.01 3.27.568 4.544 1.63l.565-.58A7.964 7.964 0 0 0 6.023 17.268l.565-.58a7.147 7.147 0 0 1 .868-10.226m3.08 4.394h3.34l-1.68 3.192zm-1.333-.81 2.793 5.365 2.793-5.364zm8.2-2.74.566-.58h.004A7.963 7.963 0 0 1 6.89 18.111l.566-.581a7.14 7.14 0 0 0 8.426.482l-.55-.559a6.395 6.395 0 0 1-8.21-9.598l.57.584a5.58 5.58 0 0 0-.477 6.453l.55-.57a4.824 4.824 0 0 1 7.137-6.178l-.573.587a3.88 3.88 0 0 0-2.334-.752 4.016 4.016 0 0 0-3.202 6.446l-.568.584-.537.55a5.58 5.58 0 0 0 7.75.84l.565.583.535.55a7.15 7.15 0 0 0 .865-10.226',
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
                        id: 'odos__a'
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
 * @component @name ExchangeOdos
 * @description Web3Icon for ExchangeOdos
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNGRjUxMDAiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0ibTYuODg4IDUuNzcgMS4yMzYgMS4yNzVhNi4yNzQgNi4yNzQgMCAwIDEgOC43MTguOTQ3TDE1LjU5NyA5LjI3YTQuNTE3IDQuNTE3IDAgMCAxLTYuMjM3IDYuNDAybC0uNjM0LjY1OGE1LjQyNCA1LjQyNCAwIDAgMCA4LjAzMy02Ljk0MmwuNjE4LS42NGE2LjI4IDYuMjggMCAwIDEtLjUzNyA3LjI2bC42MzcuNjUzQTcuMTk1IDcuMTk1IDAgMCAwIDguMjM4IDUuODY0bC0uNjE4LS42M2E4IDggMCAwIDEgNC4zNzUtMS4yOTUgNy45IDcuOSAwIDAgMSA1LjExMyAxLjgzM2wuNjM1LS42NTNBOC45NiA4Ljk2IDAgMCAwIDUuMjc2IDE3LjkyN2wuNjM2LS42NTNhOC4wNCA4LjA0IDAgMCAxIC45NzYtMTEuNTAzbTMuNDY1IDQuOTQ0aDMuNzU4bC0xLjg5IDMuNTkxem0tMS41LS45MSAzLjE0MiA2LjAzNSAzLjE0Mi02LjAzNXpNMTguMDggNi43MmwuNjM2LS42NTNoLjAwNUE4Ljk1OSA4Ljk1OSAwIDAgMSA2LjI1IDE4Ljg3NmwuNjM3LS42NTRhOC4wMyA4LjAzIDAgMCAwIDkuNDguNTQybC0uNjE5LS42MjhBNy4xOTQgNy4xOTQgMCAwIDEgNi41MTIgNy4zMzhsLjY0MS42NTdhNi4yNyA2LjI3IDAgMCAwLS41MzYgNy4yNmwuNjE4LS42NDFhNS40MjcgNS40MjcgMCAwIDEgOC4wMy02Ljk1MWwtLjY0NS42NmE0LjM2IDQuMzYgMCAwIDAtMi42MjYtLjg0NiA0LjUxOCA0LjUxOCAwIDAgMC0zLjYwMiA3LjI1M2wtLjY0LjY1Ni0uNjAzLjYxOGE2LjI3NyA2LjI3NyAwIDAgMCA4LjcxOC45NDVsLjYzNi42NTcuNjAzLjYxOGE4LjA0NyA4LjA0NyAwIDAgMCAuOTczLTExLjUwNCIgY2xpcC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo=) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0ibTYuODg4IDUuNzcgMS4yMzYgMS4yNzVhNi4yNzQgNi4yNzQgMCAwIDEgOC43MTguOTQ3TDE1LjU5NyA5LjI3YTQuNTE3IDQuNTE3IDAgMCAxLTYuMjM3IDYuNDAybC0uNjM0LjY1OGE1LjQyNCA1LjQyNCAwIDAgMCA4LjAzMy02Ljk0MmwuNjE4LS42NGE2LjI4IDYuMjggMCAwIDEtLjUzNyA3LjI2bC42MzcuNjUzQTcuMTk1IDcuMTk1IDAgMCAwIDguMjM4IDUuODY0bC0uNjE4LS42M2E4IDggMCAwIDEgNC4zNzUtMS4yOTUgNy45IDcuOSAwIDAgMSA1LjExMyAxLjgzM2wuNjM1LS42NTNBOC45NiA4Ljk2IDAgMCAwIDUuMjc2IDE3LjkyN2wuNjM2LS42NTNhOC4wNCA4LjA0IDAgMCAxIC45NzYtMTEuNTAzbTMuNDY1IDQuOTQ0aDMuNzU4bC0xLjg5IDMuNTkxem0tMS41LS45MSAzLjE0MiA2LjAzNSAzLjE0Mi02LjAzNXpNMTguMDggNi43MmwuNjM2LS42NTNoLjAwNUE4Ljk1OSA4Ljk1OSAwIDAgMSA2LjI1IDE4Ljg3NmwuNjM3LS42NTRhOC4wMyA4LjAzIDAgMCAwIDkuNDguNTQybC0uNjE5LS42MjhBNy4xOTQgNy4xOTQgMCAwIDEgNi41MTIgNy4zMzhsLjY0MS42NTdhNi4yNyA2LjI3IDAgMCAwLS41MzYgNy4yNmwuNjE4LS42NDFhNS40MjcgNS40MjcgMCAwIDEgOC4wMy02Ljk1MWwtLjY0NS42NmE0LjM2IDQuMzYgMCAwIDAtMi42MjYtLjg0NiA0LjUxOCA0LjUxOCAwIDAgMC0zLjYwMiA3LjI1M2wtLjY0LjY1Ni0uNjAzLjYxOGE2LjI3NyA2LjI3NyAwIDAgMCA4LjcxOC45NDVsLjYzNi42NTcuNjAzLjYxOGE4LjA0NyA4LjA0NyAwIDAgMCAuOTczLTExLjUwNCIgY2xpcC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo=) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNvZG9zX19hKSI+CiAgICAgICAgPHBhdGggZmlsbD0iI0ZGNTEwMCIgZD0iTTI0IDBIMHYyNGgyNHoiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Im03LjQ1NiA2LjQ2MyAxLjA5OSAxLjEzM2E1LjU3NyA1LjU3NyAwIDAgMSA3Ljc1Ljg0MWwtMS4xMDggMS4xMzZhNC4wMTUgNC4wMTUgMCAwIDEtNS41NDQgNS42OTFsLS41NjMuNTg1YTQuODIzIDQuODIzIDAgMCAwIDcuMTQtNi4xN2wuNTUtLjU3YTUuNTggNS41OCAwIDAgMS0uNDc3IDYuNDUzbC41NjUuNTgxYTYuMzk2IDYuMzk2IDAgMCAwLTguMjEyLTkuNTk4bC0uNTUtLjU1OWE3LjEgNy4xIDAgMCAxIDMuODktMS4xNTJjMS42Ni0uMDEgMy4yNy41NjggNC41NDQgMS42M2wuNTY1LS41OEE3Ljk2NCA3Ljk2NCAwIDAgMCA2LjAyMyAxNy4yNjhsLjU2NS0uNThhNy4xNDcgNy4xNDcgMCAwIDEgLjg2OC0xMC4yMjZtMy4wOCA0LjM5NGgzLjM0bC0xLjY4IDMuMTkyem0tMS4zMzMtLjgxIDIuNzkzIDUuMzY1IDIuNzkzLTUuMzY0em04LjItMi43NC41NjYtLjU4aC4wMDRBNy45NjMgNy45NjMgMCAwIDEgNi44OSAxOC4xMTFsLjU2Ni0uNTgxYTcuMTQgNy4xNCAwIDAgMCA4LjQyNi40ODJsLS41NS0uNTU5YTYuMzk1IDYuMzk1IDAgMCAxLTguMjEtOS41OThsLjU3LjU4NGE1LjU4IDUuNTggMCAwIDAtLjQ3NyA2LjQ1M2wuNTUtLjU3YTQuODI0IDQuODI0IDAgMCAxIDcuMTM3LTYuMTc4bC0uNTczLjU4N2EzLjg4IDMuODggMCAwIDAtMi4zMzQtLjc1MiA0LjAxNiA0LjAxNiAwIDAgMC0zLjIwMiA2LjQ0NmwtLjU2OC41ODQtLjUzNy41NWE1LjU4IDUuNTggMCAwIDAgNy43NS44NGwuNTY1LjU4My41MzUuNTVhNy4xNSA3LjE1IDAgMCAwIC44NjUtMTAuMjI2IiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KICAgIDwvZz4KICAgIDxkZWZzPgogICAgICAgIDxjbGlwUGF0aCBpZD0ib2Rvc19fYSI+CiAgICAgICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0wIDBoMjR2MjRIMHoiLz4KICAgICAgICA8L2NsaXBQYXRoPgogICAgPC9kZWZzPgo8L3N2Zz4K)
 * @see https://web3icons.io/exchanges/odos
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const ExchangeOdos = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createWeb3Icon"])('ExchangeOdos', __iconNode);
;
}),
];

//# sourceMappingURL=1qqr_%40web3icons_react_dist_0c1kwh9._.js.map