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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenKNC.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenKNC
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-ssr] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#31CB9E',
                d: 'M12.78 3.053a.265.265 0 0 0-.418.16l-1.387 7.029a.26.26 0 0 0 .106.264.26.26 0 0 0 .284.016l6.159-3.459a.26.26 0 0 0 .134-.212.26.26 0 0 0-.106-.228z'
            }
        ],
        [
            'path',
            {
                fill: '#31CB9E',
                d: 'M10.78 3.383a.265.265 0 0 1 .418.262l-1.604 8.129a.3.3 0 0 0 0 .1l1.61 8.52a.265.265 0 0 1-.408.267l-5.03-3.346a.26.26 0 0 1-.119-.22v-9.74c0-.083.04-.162.106-.211z'
            }
        ],
        [
            'path',
            {
                fill: '#31CB9E',
                d: 'M12.354 20.784a.266.266 0 0 0 .286.215.26.26 0 0 0 .122-.044l4.974-3.309a.262.262 0 0 0-.006-.442l-6.35-3.97a.264.264 0 0 0-.401.273zm5.593-4.69a.264.264 0 0 0 .405-.223V8.26a.264.264 0 0 0-.394-.23l-6.414 3.601a.264.264 0 0 0-.01.454z'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M12.78 3.053a.265.265 0 0 0-.418.16l-1.387 7.029a.265.265 0 0 0 .39.28l6.159-3.459a.26.26 0 0 0 .134-.212.26.26 0 0 0-.106-.228z'
            }
        ],
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M10.778 3.383a.265.265 0 0 1 .419.262l-1.604 8.129a.3.3 0 0 0 0 .1l1.61 8.52a.26.26 0 0 1-.115.269.27.27 0 0 1-.293-.002l-5.03-3.346a.26.26 0 0 1-.119-.22v-9.74c0-.083.04-.162.106-.211z'
            }
        ],
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M12.355 20.784a.265.265 0 0 0 .408.171l4.974-3.309a.26.26 0 0 0 .084-.348.26.26 0 0 0-.09-.094l-6.35-3.97a.265.265 0 0 0-.4.273zm5.593-4.69a.266.266 0 0 0 .368-.089.3.3 0 0 0 .037-.134V8.26a.26.26 0 0 0-.131-.228.26.26 0 0 0-.263-.002l-6.414 3.601a.27.27 0 0 0-.135.224.26.26 0 0 0 .125.23z'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#KNC__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#31CB9E',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M12.694 4.047a.235.235 0 0 0-.372.142l-1.233 6.248a.235.235 0 0 0 .346.25l5.475-3.075a.233.233 0 0 0 .098-.302.23.23 0 0 0-.073-.09z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M10.914 4.34a.235.235 0 0 1 .372.233L9.86 11.799a.2.2 0 0 0 0 .089l1.432 7.573a.23.23 0 0 1-.102.24.24.24 0 0 1-.26-.002l-4.473-2.974a.23.23 0 0 1-.104-.195V7.87a.23.23 0 0 1 .094-.187z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M12.316 19.809a.236.236 0 0 0 .362.151l4.422-2.94a.234.234 0 0 0-.006-.394l-5.645-3.529a.235.235 0 0 0-.356.243zm4.97-4.17a.24.24 0 0 0 .24.007.24.24 0 0 0 .121-.205V8.676a.234.234 0 0 0-.233-.234.23.23 0 0 0-.117.03l-5.701 3.201a.24.24 0 0 0-.12.2.23.23 0 0 0 .11.204z'
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
                        id: 'KNC__a'
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
 * @component @name TokenKNC
 * @description Web3Icon for TokenKNC
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiMzMUNCOUUiIGQ9Ik0xMi43OCAzLjA1M2EuMjY1LjI2NSAwIDAgMC0uNDE4LjE2bC0xLjM4NyA3LjAyOWEuMjYuMjYgMCAwIDAgLjEwNi4yNjQuMjYuMjYgMCAwIDAgLjI4NC4wMTZsNi4xNTktMy40NTlhLjI2LjI2IDAgMCAwIC4xMzQtLjIxMi4yNi4yNiAwIDAgMC0uMTA2LS4yMjh6Ii8+CiAgICA8cGF0aCBmaWxsPSIjMzFDQjlFIiBkPSJNMTAuNzggMy4zODNhLjI2NS4yNjUgMCAwIDEgLjQxOC4yNjJsLTEuNjA0IDguMTI5YS4zLjMgMCAwIDAgMCAuMWwxLjYxIDguNTJhLjI2NS4yNjUgMCAwIDEtLjQwOC4yNjdsLTUuMDMtMy4zNDZhLjI2LjI2IDAgMCAxLS4xMTktLjIydi05Ljc0YzAtLjA4My4wNC0uMTYyLjEwNi0uMjExeiIvPgogICAgPHBhdGggZmlsbD0iIzMxQ0I5RSIgZD0iTTEyLjM1NCAyMC43ODRhLjI2Ni4yNjYgMCAwIDAgLjI4Ni4yMTUuMjYuMjYgMCAwIDAgLjEyMi0uMDQ0bDQuOTc0LTMuMzA5YS4yNjIuMjYyIDAgMCAwLS4wMDYtLjQ0MmwtNi4zNS0zLjk3YS4yNjQuMjY0IDAgMCAwLS40MDEuMjczem01LjU5My00LjY5YS4yNjQuMjY0IDAgMCAwIC40MDUtLjIyM1Y4LjI2YS4yNjQuMjY0IDAgMCAwLS4zOTQtLjIzbC02LjQxNCAzLjYwMWEuMjY0LjI2NCAwIDAgMC0uMDEuNDU0eiIvPgo8L3N2Zz4K) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xMi43OCAzLjA1M2EuMjY1LjI2NSAwIDAgMC0uNDE4LjE2bC0xLjM4NyA3LjAyOWEuMjY1LjI2NSAwIDAgMCAuMzkuMjhsNi4xNTktMy40NTlhLjI2LjI2IDAgMCAwIC4xMzQtLjIxMi4yNi4yNiAwIDAgMC0uMTA2LS4yMjh6Ii8+CiAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTAuNzc4IDMuMzgzYS4yNjUuMjY1IDAgMCAxIC40MTkuMjYybC0xLjYwNCA4LjEyOWEuMy4zIDAgMCAwIDAgLjFsMS42MSA4LjUyYS4yNi4yNiAwIDAgMS0uMTE1LjI2OS4yNy4yNyAwIDAgMS0uMjkzLS4wMDJsLTUuMDMtMy4zNDZhLjI2LjI2IDAgMCAxLS4xMTktLjIydi05Ljc0YzAtLjA4My4wNC0uMTYyLjEwNi0uMjExeiIvPgogICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTEyLjM1NSAyMC43ODRhLjI2NS4yNjUgMCAwIDAgLjQwOC4xNzFsNC45NzQtMy4zMDlhLjI2LjI2IDAgMCAwIC4wODQtLjM0OC4yNi4yNiAwIDAgMC0uMDktLjA5NGwtNi4zNS0zLjk3YS4yNjUuMjY1IDAgMCAwLS40LjI3M3ptNS41OTMtNC42OWEuMjY2LjI2NiAwIDAgMCAuMzY4LS4wODkuMy4zIDAgMCAwIC4wMzctLjEzNFY4LjI2YS4yNi4yNiAwIDAgMC0uMTMxLS4yMjguMjYuMjYgMCAwIDAtLjI2My0uMDAybC02LjQxNCAzLjYwMWEuMjcuMjcgMCAwIDAtLjEzNS4yMjQuMjYuMjYgMCAwIDAgLjEyNS4yM3oiLz4KPC9zdmc+Cg==) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNLTkNfX2EpIj4KICAgICAgICA8cGF0aCBmaWxsPSIjMzFDQjlFIiBkPSJNMjQgMEgwdjI0aDI0eiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xMi42OTQgNC4wNDdhLjIzNS4yMzUgMCAwIDAtLjM3Mi4xNDJsLTEuMjMzIDYuMjQ4YS4yMzUuMjM1IDAgMCAwIC4zNDYuMjVsNS40NzUtMy4wNzVhLjIzMy4yMzMgMCAwIDAgLjA5OC0uMzAyLjIzLjIzIDAgMCAwLS4wNzMtLjA5eiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xMC45MTQgNC4zNGEuMjM1LjIzNSAwIDAgMSAuMzcyLjIzM0w5Ljg2IDExLjc5OWEuMi4yIDAgMCAwIDAgLjA4OWwxLjQzMiA3LjU3M2EuMjMuMjMgMCAwIDEtLjEwMi4yNC4yNC4yNCAwIDAgMS0uMjYtLjAwMmwtNC40NzMtMi45NzRhLjIzLjIzIDAgMCAxLS4xMDQtLjE5NVY3Ljg3YS4yMy4yMyAwIDAgMSAuMDk0LS4xODd6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTEyLjMxNiAxOS44MDlhLjIzNi4yMzYgMCAwIDAgLjM2Mi4xNTFsNC40MjItMi45NGEuMjM0LjIzNCAwIDAgMC0uMDA2LS4zOTRsLTUuNjQ1LTMuNTI5YS4yMzUuMjM1IDAgMCAwLS4zNTYuMjQzem00Ljk3LTQuMTdhLjI0LjI0IDAgMCAwIC4yNC4wMDcuMjQuMjQgMCAwIDAgLjEyMS0uMjA1VjguNjc2YS4yMzQuMjM0IDAgMCAwLS4yMzMtLjIzNC4yMy4yMyAwIDAgMC0uMTE3LjAzbC01LjcwMSAzLjIwMWEuMjQuMjQgMCAwIDAtLjEyLjIuMjMuMjMgMCAwIDAgLjExLjIwNHoiLz4KICAgIDwvZz4KICAgIDxkZWZzPgogICAgICAgIDxjbGlwUGF0aCBpZD0iS05DX19hIj4KICAgICAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTAgMGgyNHYyNEgweiIvPgogICAgICAgIDwvY2xpcFBhdGg+CiAgICA8L2RlZnM+Cjwvc3ZnPgo=)
 * @see https://web3icons.io/tokens/KNC
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenKNC = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenKNC', __iconNode);
;
}),
];

//# sourceMappingURL=1qqr_%40web3icons_react_dist_1s8gfss._.js.map