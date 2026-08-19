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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenSAFE.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenSAFE
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-ssr] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#049F67',
                d: 'M7.063 8.117c0-.583.472-1.055 1.055-1.055h7.76c.582 0 1.055-.472 1.055-1.055V4.055c0-.583-.473-1.055-1.055-1.055h-8.21c-.583 0-1.055.472-1.055 1.055V5.56c0 .583-.473 1.055-1.055 1.055H4.056A1.055 1.055 0 0 0 3 7.67v3.293c0 .583.475 1.031 1.058 1.031h1.951c.583 0 1.056-.472 1.056-1.055zm12.882 3.878h-1.952c-.583 0-1.055.472-1.055 1.055v2.833c0 .583-.472 1.055-1.055 1.055H8.118c-.583 0-1.055.472-1.055 1.055v1.952c0 .583.472 1.055 1.055 1.055h8.214a1.05 1.05 0 0 0 1.049-1.055v-1.566c0-.583.472-.996 1.055-.996h1.509c.582 0 1.055-.473 1.055-1.056v-3.29c0-.582-.473-1.042-1.055-1.042m-6.989-2.052h-1.874c-.61 0-1.107.496-1.107 1.107v1.874c0 .61.496 1.107 1.107 1.107h1.874c.61 0 1.107-.496 1.107-1.107V11.05c0-.61-.496-1.107-1.107-1.107'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M7.063 8.117c0-.583.472-1.055 1.055-1.055h7.76c.582 0 1.055-.472 1.055-1.055V4.055c0-.583-.473-1.055-1.055-1.055h-8.21c-.583 0-1.055.472-1.055 1.055V5.56c0 .583-.473 1.055-1.055 1.055H4.056A1.055 1.055 0 0 0 3 7.67v3.293c0 .583.475 1.031 1.058 1.031h1.951c.583 0 1.056-.472 1.056-1.055zm12.882 3.878h-1.952c-.583 0-1.055.472-1.055 1.055v2.833c0 .583-.472 1.055-1.055 1.055H8.118c-.583 0-1.055.472-1.055 1.055v1.952c0 .583.472 1.055 1.055 1.055h8.214a1.05 1.05 0 0 0 1.049-1.055v-1.566c0-.583.472-.996 1.055-.996h1.509c.582 0 1.055-.473 1.055-1.056v-3.29c0-.582-.473-1.042-1.055-1.042m-6.989-2.052h-1.874c-.61 0-1.107.496-1.107 1.107v1.874c0 .61.496 1.107 1.107 1.107h1.874c.61 0 1.107-.496 1.107-1.107V11.05c0-.61-.496-1.107-1.107-1.107'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#SAFE__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#049F67',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M7.611 8.549c0-.518.42-.938.938-.938h6.898c.518 0 .938-.42.938-.938V4.938A.94.94 0 0 0 15.447 4H8.149a.94.94 0 0 0-.938.938v1.337c0 .518-.42.938-.938.938H4.938A.94.94 0 0 0 4 8.15v2.927c0 .518.422.917.94.917h1.735c.518 0 .938-.42.938-.938zm11.451 3.446h-1.735a.94.94 0 0 0-.938.938v2.518c0 .518-.42.938-.938.938H8.55a.94.94 0 0 0-.938.938v1.735c0 .518.42.938.938.938h7.302c.518 0 .932-.42.932-.938V17.67c0-.518.42-.886.938-.886h1.34c.519 0 .939-.42.939-.938v-2.924a.93.93 0 0 0-.939-.927m-6.212-1.824h-1.667a.984.984 0 0 0-.983.984v1.666c0 .543.44.984.983.984h1.667c.542 0 .983-.44.983-.984v-1.666a.984.984 0 0 0-.983-.984'
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
                        id: 'SAFE__a'
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
 * @component @name TokenSAFE
 * @description Web3Icon for TokenSAFE
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiMwNDlGNjciIGQ9Ik03LjA2MyA4LjExN2MwLS41ODMuNDcyLTEuMDU1IDEuMDU1LTEuMDU1aDcuNzZjLjU4MiAwIDEuMDU1LS40NzIgMS4wNTUtMS4wNTVWNC4wNTVjMC0uNTgzLS40NzMtMS4wNTUtMS4wNTUtMS4wNTVoLTguMjFjLS41ODMgMC0xLjA1NS40NzItMS4wNTUgMS4wNTVWNS41NmMwIC41ODMtLjQ3MyAxLjA1NS0xLjA1NSAxLjA1NUg0LjA1NkExLjA1NSAxLjA1NSAwIDAgMCAzIDcuNjd2My4yOTNjMCAuNTgzLjQ3NSAxLjAzMSAxLjA1OCAxLjAzMWgxLjk1MWMuNTgzIDAgMS4wNTYtLjQ3MiAxLjA1Ni0xLjA1NXptMTIuODgyIDMuODc4aC0xLjk1MmMtLjU4MyAwLTEuMDU1LjQ3Mi0xLjA1NSAxLjA1NXYyLjgzM2MwIC41ODMtLjQ3MiAxLjA1NS0xLjA1NSAxLjA1NUg4LjExOGMtLjU4MyAwLTEuMDU1LjQ3Mi0xLjA1NSAxLjA1NXYxLjk1MmMwIC41ODMuNDcyIDEuMDU1IDEuMDU1IDEuMDU1aDguMjE0YTEuMDUgMS4wNSAwIDAgMCAxLjA0OS0xLjA1NXYtMS41NjZjMC0uNTgzLjQ3Mi0uOTk2IDEuMDU1LS45OTZoMS41MDljLjU4MiAwIDEuMDU1LS40NzMgMS4wNTUtMS4wNTZ2LTMuMjljMC0uNTgyLS40NzMtMS4wNDItMS4wNTUtMS4wNDJtLTYuOTg5LTIuMDUyaC0xLjg3NGMtLjYxIDAtMS4xMDcuNDk2LTEuMTA3IDEuMTA3djEuODc0YzAgLjYxLjQ5NiAxLjEwNyAxLjEwNyAxLjEwN2gxLjg3NGMuNjEgMCAxLjEwNy0uNDk2IDEuMTA3LTEuMTA3VjExLjA1YzAtLjYxLS40OTYtMS4xMDctMS4xMDctMS4xMDciLz4KPC9zdmc+Cg==) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik03LjA2MyA4LjExN2MwLS41ODMuNDcyLTEuMDU1IDEuMDU1LTEuMDU1aDcuNzZjLjU4MiAwIDEuMDU1LS40NzIgMS4wNTUtMS4wNTVWNC4wNTVjMC0uNTgzLS40NzMtMS4wNTUtMS4wNTUtMS4wNTVoLTguMjFjLS41ODMgMC0xLjA1NS40NzItMS4wNTUgMS4wNTVWNS41NmMwIC41ODMtLjQ3MyAxLjA1NS0xLjA1NSAxLjA1NUg0LjA1NkExLjA1NSAxLjA1NSAwIDAgMCAzIDcuNjd2My4yOTNjMCAuNTgzLjQ3NSAxLjAzMSAxLjA1OCAxLjAzMWgxLjk1MWMuNTgzIDAgMS4wNTYtLjQ3MiAxLjA1Ni0xLjA1NXptMTIuODgyIDMuODc4aC0xLjk1MmMtLjU4MyAwLTEuMDU1LjQ3Mi0xLjA1NSAxLjA1NXYyLjgzM2MwIC41ODMtLjQ3MiAxLjA1NS0xLjA1NSAxLjA1NUg4LjExOGMtLjU4MyAwLTEuMDU1LjQ3Mi0xLjA1NSAxLjA1NXYxLjk1MmMwIC41ODMuNDcyIDEuMDU1IDEuMDU1IDEuMDU1aDguMjE0YTEuMDUgMS4wNSAwIDAgMCAxLjA0OS0xLjA1NXYtMS41NjZjMC0uNTgzLjQ3Mi0uOTk2IDEuMDU1LS45OTZoMS41MDljLjU4MiAwIDEuMDU1LS40NzMgMS4wNTUtMS4wNTZ2LTMuMjljMC0uNTgyLS40NzMtMS4wNDItMS4wNTUtMS4wNDJtLTYuOTg5LTIuMDUyaC0xLjg3NGMtLjYxIDAtMS4xMDcuNDk2LTEuMTA3IDEuMTA3djEuODc0YzAgLjYxLjQ5NiAxLjEwNyAxLjEwNyAxLjEwN2gxLjg3NGMuNjEgMCAxLjEwNy0uNDk2IDEuMTA3LTEuMTA3VjExLjA1YzAtLjYxLS40OTYtMS4xMDctMS4xMDctMS4xMDciLz4KPC9zdmc+Cg==) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNTQUZFX19hKSI+CiAgICAgICAgPHBhdGggZmlsbD0iIzA0OUY2NyIgZD0iTTI0IDBIMHYyNGgyNHoiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNNy42MTEgOC41NDljMC0uNTE4LjQyLS45MzguOTM4LS45MzhoNi44OThjLjUxOCAwIC45MzgtLjQyLjkzOC0uOTM4VjQuOTM4QS45NC45NCAwIDAgMCAxNS40NDcgNEg4LjE0OWEuOTQuOTQgMCAwIDAtLjkzOC45Mzh2MS4zMzdjMCAuNTE4LS40Mi45MzgtLjkzOC45MzhINC45MzhBLjk0Ljk0IDAgMCAwIDQgOC4xNXYyLjkyN2MwIC41MTguNDIyLjkxNy45NC45MTdoMS43MzVjLjUxOCAwIC45MzgtLjQyLjkzOC0uOTM4em0xMS40NTEgMy40NDZoLTEuNzM1YS45NC45NCAwIDAgMC0uOTM4LjkzOHYyLjUxOGMwIC41MTgtLjQyLjkzOC0uOTM4LjkzOEg4LjU1YS45NC45NCAwIDAgMC0uOTM4LjkzOHYxLjczNWMwIC41MTguNDIuOTM4LjkzOC45MzhoNy4zMDJjLjUxOCAwIC45MzItLjQyLjkzMi0uOTM4VjE3LjY3YzAtLjUxOC40Mi0uODg2LjkzOC0uODg2aDEuMzRjLjUxOSAwIC45MzktLjQyLjkzOS0uOTM4di0yLjkyNGEuOTMuOTMgMCAwIDAtLjkzOS0uOTI3bS02LjIxMi0xLjgyNGgtMS42NjdhLjk4NC45ODQgMCAwIDAtLjk4My45ODR2MS42NjZjMCAuNTQzLjQ0Ljk4NC45ODMuOTg0aDEuNjY3Yy41NDIgMCAuOTgzLS40NC45ODMtLjk4NHYtMS42NjZhLjk4NC45ODQgMCAwIDAtLjk4My0uOTg0Ii8+CiAgICA8L2c+CiAgICA8ZGVmcz4KICAgICAgICA8Y2xpcFBhdGggaWQ9IlNBRkVfX2EiPgogICAgICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMCAwaDI0djI0SDB6Ii8+CiAgICAgICAgPC9jbGlwUGF0aD4KICAgIDwvZGVmcz4KPC9zdmc+Cg==)
 * @see https://web3icons.io/tokens/SAFE
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenSAFE = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenSAFE', __iconNode);
;
}),
];

//# sourceMappingURL=1qqr_%40web3icons_react_dist_16mauva._.js.map