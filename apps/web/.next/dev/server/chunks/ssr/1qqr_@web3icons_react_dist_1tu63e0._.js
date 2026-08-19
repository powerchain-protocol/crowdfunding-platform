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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenCEL.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenCEL
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-ssr] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#4055A6',
                d: 'M17.633 5.912c.153.233.164.699-.074 1.043-.244.344-.9.566-1.43.053-1.382-1.334-3.5-1.594-4.49-1.594A6.61 6.61 0 0 0 4.838 12c.053 2.732 1.9 6.586 6.803 6.586 1.376 0 3.685-.593 4.85-1.81.2-.212.92-.08 1.174.237.26.318.186 1.06-.105 1.308a9.32 9.32 0 0 1-5.924 2.15C6.87 20.47 3 16.68 3 12s3.865-8.47 8.64-8.47c3.97 0 5.892 2.228 5.993 2.382'
            }
        ],
        [
            'path',
            {
                fill: '#4055A6',
                d: 'M19.412 10.942a1.588 1.588 0 1 0 0-3.176 1.588 1.588 0 0 0 0 3.176'
            }
        ],
        [
            'path',
            {
                fill: '#4055A6',
                d: 'M19.411 9.883a.53.53 0 1 0 0-1.059.53.53 0 0 0 0 1.059'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M17.633 5.912c.154.233.164.698-.074 1.043-.244.344-.9.566-1.43.053-1.381-1.335-3.499-1.594-4.489-1.594A6.61 6.61 0 0 0 4.837 12c.053 2.732 1.9 6.586 6.803 6.586 1.376 0 3.685-.593 4.85-1.81.2-.212.92-.08 1.175.237.26.318.185 1.06-.106 1.308a9.32 9.32 0 0 1-5.924 2.15C6.87 20.47 3 16.68 3 12s3.865-8.47 8.64-8.47c3.97 0 5.892 2.228 5.993 2.382'
            }
        ],
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M19.412 10.942a1.588 1.588 0 1 0 0-3.176 1.588 1.588 0 0 0 0 3.176'
            }
        ],
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M19.411 9.883a.53.53 0 1 0 0-1.059.53.53 0 0 0 0 1.059'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#CEL__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#4055A6',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M17.007 6.588c.136.207.146.622-.066.927-.216.306-.8.504-1.27.047-1.229-1.185-3.111-1.416-3.99-1.416A5.877 5.877 0 0 0 5.632 12c.047 2.428 1.69 5.854 6.047 5.854 1.223 0 3.275-.527 4.31-1.61.18-.187.82-.07 1.045.212.23.283.165.942-.094 1.163a8.28 8.28 0 0 1-5.266 1.91C7.44 19.53 4 16.16 4 12s3.435-7.53 7.68-7.53c3.53 0 5.238 1.982 5.327 2.118'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M18.588 11.06a1.412 1.412 0 1 0 0-2.823 1.412 1.412 0 0 0 0 2.823'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M18.588 10.118a.47.47 0 1 0 0-.941.47.47 0 0 0 0 .94'
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
                        id: 'CEL__a'
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
 * @component @name TokenCEL
 * @description Web3Icon for TokenCEL
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiM0MDU1QTYiIGQ9Ik0xNy42MzMgNS45MTJjLjE1My4yMzMuMTY0LjY5OS0uMDc0IDEuMDQzLS4yNDQuMzQ0LS45LjU2Ni0xLjQzLjA1My0xLjM4Mi0xLjMzNC0zLjUtMS41OTQtNC40OS0xLjU5NEE2LjYxIDYuNjEgMCAwIDAgNC44MzggMTJjLjA1MyAyLjczMiAxLjkgNi41ODYgNi44MDMgNi41ODYgMS4zNzYgMCAzLjY4NS0uNTkzIDQuODUtMS44MS4yLS4yMTIuOTItLjA4IDEuMTc0LjIzNy4yNi4zMTguMTg2IDEuMDYtLjEwNSAxLjMwOGE5LjMyIDkuMzIgMCAwIDEtNS45MjQgMi4xNUM2Ljg3IDIwLjQ3IDMgMTYuNjggMyAxMnMzLjg2NS04LjQ3IDguNjQtOC40N2MzLjk3IDAgNS44OTIgMi4yMjggNS45OTMgMi4zODIiLz4KICAgIDxwYXRoIGZpbGw9IiM0MDU1QTYiIGQ9Ik0xOS40MTIgMTAuOTQyYTEuNTg4IDEuNTg4IDAgMSAwIDAtMy4xNzYgMS41ODggMS41ODggMCAwIDAgMCAzLjE3NiIvPgogICAgPHBhdGggZmlsbD0iIzQwNTVBNiIgZD0iTTE5LjQxMSA5Ljg4M2EuNTMuNTMgMCAxIDAgMC0xLjA1OS41My41MyAwIDAgMCAwIDEuMDU5Ii8+Cjwvc3ZnPgo=) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xNy42MzMgNS45MTJjLjE1NC4yMzMuMTY0LjY5OC0uMDc0IDEuMDQzLS4yNDQuMzQ0LS45LjU2Ni0xLjQzLjA1My0xLjM4MS0xLjMzNS0zLjQ5OS0xLjU5NC00LjQ4OS0xLjU5NEE2LjYxIDYuNjEgMCAwIDAgNC44MzcgMTJjLjA1MyAyLjczMiAxLjkgNi41ODYgNi44MDMgNi41ODYgMS4zNzYgMCAzLjY4NS0uNTkzIDQuODUtMS44MS4yLS4yMTIuOTItLjA4IDEuMTc1LjIzNy4yNi4zMTguMTg1IDEuMDYtLjEwNiAxLjMwOGE5LjMyIDkuMzIgMCAwIDEtNS45MjQgMi4xNUM2Ljg3IDIwLjQ3IDMgMTYuNjggMyAxMnMzLjg2NS04LjQ3IDguNjQtOC40N2MzLjk3IDAgNS44OTIgMi4yMjggNS45OTMgMi4zODIiLz4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xOS40MTIgMTAuOTQyYTEuNTg4IDEuNTg4IDAgMSAwIDAtMy4xNzYgMS41ODggMS41ODggMCAwIDAgMCAzLjE3NiIvPgogICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTE5LjQxMSA5Ljg4M2EuNTMuNTMgMCAxIDAgMC0xLjA1OS41My41MyAwIDAgMCAwIDEuMDU5Ii8+Cjwvc3ZnPgo=) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNDRUxfX2EpIj4KICAgICAgICA8cGF0aCBmaWxsPSIjNDA1NUE2IiBkPSJNMjQgMEgwdjI0aDI0eiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xNy4wMDcgNi41ODhjLjEzNi4yMDcuMTQ2LjYyMi0uMDY2LjkyNy0uMjE2LjMwNi0uOC41MDQtMS4yNy4wNDctMS4yMjktMS4xODUtMy4xMTEtMS40MTYtMy45OS0xLjQxNkE1Ljg3NyA1Ljg3NyAwIDAgMCA1LjYzMiAxMmMuMDQ3IDIuNDI4IDEuNjkgNS44NTQgNi4wNDcgNS44NTQgMS4yMjMgMCAzLjI3NS0uNTI3IDQuMzEtMS42MS4xOC0uMTg3LjgyLS4wNyAxLjA0NS4yMTIuMjMuMjgzLjE2NS45NDItLjA5NCAxLjE2M2E4LjI4IDguMjggMCAwIDEtNS4yNjYgMS45MUM3LjQ0IDE5LjUzIDQgMTYuMTYgNCAxMnMzLjQzNS03LjUzIDcuNjgtNy41M2MzLjUzIDAgNS4yMzggMS45ODIgNS4zMjcgMi4xMTgiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTguNTg4IDExLjA2YTEuNDEyIDEuNDEyIDAgMSAwIDAtMi44MjMgMS40MTIgMS40MTIgMCAwIDAgMCAyLjgyMyIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xOC41ODggMTAuMTE4YS40Ny40NyAwIDEgMCAwLS45NDEuNDcuNDcgMCAwIDAgMCAuOTQiLz4KICAgIDwvZz4KICAgIDxkZWZzPgogICAgICAgIDxjbGlwUGF0aCBpZD0iQ0VMX19hIj4KICAgICAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTAgMGgyNHYyNEgweiIvPgogICAgICAgIDwvY2xpcFBhdGg+CiAgICA8L2RlZnM+Cjwvc3ZnPgo=)
 * @see https://web3icons.io/tokens/CEL
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenCEL = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenCEL', __iconNode);
;
}),
];

//# sourceMappingURL=1qqr_%40web3icons_react_dist_1tu63e0._.js.map