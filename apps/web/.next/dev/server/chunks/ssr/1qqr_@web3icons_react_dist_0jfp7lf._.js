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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenTKP.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenTKP
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-ssr] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#00A9FF',
                d: 'm11.346 12.124 2.87-3.631a4.284 4.284 0 0 0-5.636.422 4.41 4.41 0 0 0-.396 5.708 4.29 4.29 0 0 0 5.523 1.214 4.4 4.4 0 0 0 1.98-5.354l-4.34 1.646z'
            }
        ],
        [
            'path',
            {
                fill: '#00A9FF',
                d: 'M16.68 9.62a4.4 4.4 0 0 0-1.465-1.991L12.36 11.27l4.32-1.646z'
            }
        ],
        [
            'path',
            {
                fill: '#FFAF14',
                d: 'm19.74 8.95-2.104.818a6.51 6.51 0 0 1-2.952 7.93 6.346 6.346 0 0 1-8.177-1.826 6.53 6.53 0 0 1 .617-8.455 6.34 6.34 0 0 1 8.357-.586l1.425-1.764a8.56 8.56 0 0 0-9.082-.91A8.76 8.76 0 0 0 3 11.999c0 3.497 2.062 6.66 5.24 8.039a8.56 8.56 0 0 0 9.36-1.708 8.82 8.82 0 0 0 2.14-9.38'
            }
        ],
        [
            'path',
            {
                fill: '#FFAF14',
                d: 'M18.984 4.681a9 9 0 0 0-.859-.694L16.68 5.622a5.97 5.97 0 0 1 2.186 2.726L21 7.602a8.1 8.1 0 0 0-2.016-2.916z'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'm11.346 12.124 2.87-3.631a4.284 4.284 0 0 0-5.636.422 4.41 4.41 0 0 0-.396 5.708 4.29 4.29 0 0 0 5.523 1.214 4.4 4.4 0 0 0 1.98-5.354l-4.34 1.646z'
            }
        ],
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M16.68 9.62a4.4 4.4 0 0 0-1.466-1.991l-2.855 3.641 4.32-1.646z'
            }
        ],
        [
            'path',
            {
                fill: 'currentColor',
                d: 'm19.74 8.95-2.104.818a6.51 6.51 0 0 1-2.952 7.93 6.346 6.346 0 0 1-8.177-1.826 6.53 6.53 0 0 1 .617-8.455 6.34 6.34 0 0 1 8.358-.586l1.424-1.764a8.56 8.56 0 0 0-9.082-.91A8.76 8.76 0 0 0 3 11.999c0 3.497 2.062 6.66 5.24 8.039a8.56 8.56 0 0 0 9.36-1.708 8.82 8.82 0 0 0 2.14-9.38'
            }
        ],
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M18.984 4.681a9 9 0 0 0-.859-.694L16.68 5.622a5.97 5.97 0 0 1 2.186 2.726L21 7.602a8.1 8.1 0 0 0-2.016-2.916z'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#TKP__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#FFAF14',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'm11.42 12.11 2.55-3.227a3.81 3.81 0 0 0-5.01.375 3.92 3.92 0 0 0-.352 5.074 3.81 3.81 0 0 0 4.91 1.079 3.91 3.91 0 0 0 1.76-4.759l-3.859 1.463z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M16.16 9.884a3.9 3.9 0 0 0-1.304-1.77l-2.537 3.237 3.84-1.463z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'm18.88 9.289-1.87.727a5.79 5.79 0 0 1-2.624 7.049 5.64 5.64 0 0 1-7.268-1.623 5.806 5.806 0 0 1 .548-7.515 5.636 5.636 0 0 1 7.429-.521l1.266-1.568a7.61 7.61 0 0 0-8.073-.81A7.79 7.79 0 0 0 4 12c0 3.108 1.833 5.92 4.658 7.145a7.61 7.61 0 0 0 8.32-1.518A7.84 7.84 0 0 0 18.88 9.29'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M18.208 5.495a8 8 0 0 0-.763-.618L16.16 6.331a5.3 5.3 0 0 1 1.943 2.423L20 8.09a7.2 7.2 0 0 0-1.792-2.59z'
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
                        id: 'TKP__a'
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
 * @component @name TokenTKP
 * @description Web3Icon for TokenTKP
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiMwMEE5RkYiIGQ9Im0xMS4zNDYgMTIuMTI0IDIuODctMy42MzFhNC4yODQgNC4yODQgMCAwIDAtNS42MzYuNDIyIDQuNDEgNC40MSAwIDAgMC0uMzk2IDUuNzA4IDQuMjkgNC4yOSAwIDAgMCA1LjUyMyAxLjIxNCA0LjQgNC40IDAgMCAwIDEuOTgtNS4zNTRsLTQuMzQgMS42NDZ6Ii8+CiAgICA8cGF0aCBmaWxsPSIjMDBBOUZGIiBkPSJNMTYuNjggOS42MmE0LjQgNC40IDAgMCAwLTEuNDY1LTEuOTkxTDEyLjM2IDExLjI3bDQuMzItMS42NDZ6Ii8+CiAgICA8cGF0aCBmaWxsPSIjRkZBRjE0IiBkPSJtMTkuNzQgOC45NS0yLjEwNC44MThhNi41MSA2LjUxIDAgMCAxLTIuOTUyIDcuOTMgNi4zNDYgNi4zNDYgMCAwIDEtOC4xNzctMS44MjYgNi41MyA2LjUzIDAgMCAxIC42MTctOC40NTUgNi4zNCA2LjM0IDAgMCAxIDguMzU3LS41ODZsMS40MjUtMS43NjRhOC41NiA4LjU2IDAgMCAwLTkuMDgyLS45MUE4Ljc2IDguNzYgMCAwIDAgMyAxMS45OTljMCAzLjQ5NyAyLjA2MiA2LjY2IDUuMjQgOC4wMzlhOC41NiA4LjU2IDAgMCAwIDkuMzYtMS43MDggOC44MiA4LjgyIDAgMCAwIDIuMTQtOS4zOCIvPgogICAgPHBhdGggZmlsbD0iI0ZGQUYxNCIgZD0iTTE4Ljk4NCA0LjY4MWE5IDkgMCAwIDAtLjg1OS0uNjk0TDE2LjY4IDUuNjIyYTUuOTcgNS45NyAwIDAgMSAyLjE4NiAyLjcyNkwyMSA3LjYwMmE4LjEgOC4xIDAgMCAwLTIuMDE2LTIuOTE2eiIvPgo8L3N2Zz4K) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Im0xMS4zNDYgMTIuMTI0IDIuODctMy42MzFhNC4yODQgNC4yODQgMCAwIDAtNS42MzYuNDIyIDQuNDEgNC40MSAwIDAgMC0uMzk2IDUuNzA4IDQuMjkgNC4yOSAwIDAgMCA1LjUyMyAxLjIxNCA0LjQgNC40IDAgMCAwIDEuOTgtNS4zNTRsLTQuMzQgMS42NDZ6Ii8+CiAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTYuNjggOS42MmE0LjQgNC40IDAgMCAwLTEuNDY2LTEuOTkxbC0yLjg1NSAzLjY0MSA0LjMyLTEuNjQ2eiIvPgogICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0ibTE5Ljc0IDguOTUtMi4xMDQuODE4YTYuNTEgNi41MSAwIDAgMS0yLjk1MiA3LjkzIDYuMzQ2IDYuMzQ2IDAgMCAxLTguMTc3LTEuODI2IDYuNTMgNi41MyAwIDAgMSAuNjE3LTguNDU1IDYuMzQgNi4zNCAwIDAgMSA4LjM1OC0uNTg2bDEuNDI0LTEuNzY0YTguNTYgOC41NiAwIDAgMC05LjA4Mi0uOTFBOC43NiA4Ljc2IDAgMCAwIDMgMTEuOTk5YzAgMy40OTcgMi4wNjIgNi42NiA1LjI0IDguMDM5YTguNTYgOC41NiAwIDAgMCA5LjM2LTEuNzA4IDguODIgOC44MiAwIDAgMCAyLjE0LTkuMzgiLz4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xOC45ODQgNC42ODFhOSA5IDAgMCAwLS44NTktLjY5NEwxNi42OCA1LjYyMmE1Ljk3IDUuOTcgMCAwIDEgMi4xODYgMi43MjZMMjEgNy42MDJhOC4xIDguMSAwIDAgMC0yLjAxNi0yLjkxNnoiLz4KPC9zdmc+Cg==) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNUS1BfX2EpIj4KICAgICAgICA8cGF0aCBmaWxsPSIjRkZBRjE0IiBkPSJNMjQgMEgwdjI0aDI0eiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Im0xMS40MiAxMi4xMSAyLjU1LTMuMjI3YTMuODEgMy44MSAwIDAgMC01LjAxLjM3NSAzLjkyIDMuOTIgMCAwIDAtLjM1MiA1LjA3NCAzLjgxIDMuODEgMCAwIDAgNC45MSAxLjA3OSAzLjkxIDMuOTEgMCAwIDAgMS43Ni00Ljc1OWwtMy44NTkgMS40NjN6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTE2LjE2IDkuODg0YTMuOSAzLjkgMCAwIDAtMS4zMDQtMS43N2wtMi41MzcgMy4yMzcgMy44NC0xLjQ2M3oiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJtMTguODggOS4yODktMS44Ny43MjdhNS43OSA1Ljc5IDAgMCAxLTIuNjI0IDcuMDQ5IDUuNjQgNS42NCAwIDAgMS03LjI2OC0xLjYyMyA1LjgwNiA1LjgwNiAwIDAgMSAuNTQ4LTcuNTE1IDUuNjM2IDUuNjM2IDAgMCAxIDcuNDI5LS41MjFsMS4yNjYtMS41NjhhNy42MSA3LjYxIDAgMCAwLTguMDczLS44MUE3Ljc5IDcuNzkgMCAwIDAgNCAxMmMwIDMuMTA4IDEuODMzIDUuOTIgNC42NTggNy4xNDVhNy42MSA3LjYxIDAgMCAwIDguMzItMS41MThBNy44NCA3Ljg0IDAgMCAwIDE4Ljg4IDkuMjkiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTguMjA4IDUuNDk1YTggOCAwIDAgMC0uNzYzLS42MThMMTYuMTYgNi4zMzFhNS4zIDUuMyAwIDAgMSAxLjk0MyAyLjQyM0wyMCA4LjA5YTcuMiA3LjIgMCAwIDAtMS43OTItMi41OXoiLz4KICAgIDwvZz4KICAgIDxkZWZzPgogICAgICAgIDxjbGlwUGF0aCBpZD0iVEtQX19hIj4KICAgICAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTAgMGgyNHYyNEgweiIvPgogICAgICAgIDwvY2xpcFBhdGg+CiAgICA8L2RlZnM+Cjwvc3ZnPgo=)
 * @see https://web3icons.io/tokens/TKP
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenTKP = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenTKP', __iconNode);
;
}),
];

//# sourceMappingURL=1qqr_%40web3icons_react_dist_0jfp7lf._.js.map