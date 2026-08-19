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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenLUSD.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenLUSD
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-ssr] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#745DDF',
                d: 'M13.688 21C17.847 20.206 21 16.39 21 12s-3.153-8.046-7.312-8.84v2.384c.848.342 1.67 1.028 2.409 2.31 0 .077-1.496 1.1-2.203 1.58-.874-2.111-2.23-2.133-2.794-1.373-.807 1.088.603 1.81 2.218 2.413 1.827.68 3.208 2.288 3.182 4.339-.025 2.004-1.457 3.054-2.812 3.571z'
            }
        ],
        [
            'path',
            {
                fill: '#2EB6EA',
                d: 'M10.875 3H3v9.162C3.081 16.69 6.47 20.47 10.875 21v-2.55c-1.525-.362-3.012-1.508-3.185-3.88l2.514-.73c-.016.782.321 2.345 1.797 2.335s1.796-1.074 1.772-1.604c.056-.348-.22-1.19-1.772-1.785-1.94-.742-3.688-2.155-3.688-4.072 0-2.065 1.24-2.846 2.562-3.24z'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M13.688 21C17.847 20.206 21 16.39 21 12s-3.153-8.046-7.312-8.84v2.384c.848.342 1.67 1.028 2.409 2.31 0 .077-1.496 1.1-2.203 1.58-.874-2.111-2.23-2.133-2.794-1.373-.807 1.088.603 1.81 2.218 2.413 1.827.68 3.208 2.288 3.182 4.339-.025 2.004-1.457 3.054-2.812 3.571z'
            }
        ],
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M10.875 3H3v9.162C3.081 16.69 6.47 20.47 10.875 21v-2.55c-1.525-.362-3.012-1.508-3.185-3.88l2.514-.73c-.016.782.321 2.345 1.797 2.335s1.796-1.074 1.772-1.604c.056-.348-.22-1.19-1.772-1.785-1.94-.742-3.688-2.155-3.688-4.072 0-2.065 1.24-2.846 2.562-3.24z'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#LUSD__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#2EB6EA',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M13.5 20c3.697-.706 6.5-4.097 6.5-8s-2.803-7.151-6.5-7.857v2.119c.754.304 1.485.913 2.142 2.052 0 .069-1.33.98-1.959 1.405-.776-1.877-1.982-1.896-2.483-1.22-.717.967.536 1.608 1.971 2.144 1.624.605 2.852 2.035 2.83 3.857-.023 1.782-1.296 2.716-2.5 3.175z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M11 4H4v8.144c.072 4.025 3.084 7.385 7 7.856v-2.265c-1.356-.323-2.677-1.341-2.831-3.45l2.235-.649c-.014.696.285 2.085 1.597 2.076 1.311-.008 1.596-.955 1.575-1.426.05-.31-.195-1.058-1.575-1.586-1.725-.66-3.279-1.916-3.279-3.62 0-1.836 1.103-2.53 2.278-2.88z'
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
                        id: 'LUSD__a'
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
 * @component @name TokenLUSD
 * @description Web3Icon for TokenLUSD
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiM3NDVEREYiIGQ9Ik0xMy42ODggMjFDMTcuODQ3IDIwLjIwNiAyMSAxNi4zOSAyMSAxMnMtMy4xNTMtOC4wNDYtNy4zMTItOC44NHYyLjM4NGMuODQ4LjM0MiAxLjY3IDEuMDI4IDIuNDA5IDIuMzEgMCAuMDc3LTEuNDk2IDEuMS0yLjIwMyAxLjU4LS44NzQtMi4xMTEtMi4yMy0yLjEzMy0yLjc5NC0xLjM3My0uODA3IDEuMDg4LjYwMyAxLjgxIDIuMjE4IDIuNDEzIDEuODI3LjY4IDMuMjA4IDIuMjg4IDMuMTgyIDQuMzM5LS4wMjUgMi4wMDQtMS40NTcgMy4wNTQtMi44MTIgMy41NzF6Ii8+CiAgICA8cGF0aCBmaWxsPSIjMkVCNkVBIiBkPSJNMTAuODc1IDNIM3Y5LjE2MkMzLjA4MSAxNi42OSA2LjQ3IDIwLjQ3IDEwLjg3NSAyMXYtMi41NWMtMS41MjUtLjM2Mi0zLjAxMi0xLjUwOC0zLjE4NS0zLjg4bDIuNTE0LS43M2MtLjAxNi43ODIuMzIxIDIuMzQ1IDEuNzk3IDIuMzM1czEuNzk2LTEuMDc0IDEuNzcyLTEuNjA0Yy4wNTYtLjM0OC0uMjItMS4xOS0xLjc3Mi0xLjc4NS0xLjk0LS43NDItMy42ODgtMi4xNTUtMy42ODgtNC4wNzIgMC0yLjA2NSAxLjI0LTIuODQ2IDIuNTYyLTMuMjR6Ii8+Cjwvc3ZnPgo=) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xMy42ODggMjFDMTcuODQ3IDIwLjIwNiAyMSAxNi4zOSAyMSAxMnMtMy4xNTMtOC4wNDYtNy4zMTItOC44NHYyLjM4NGMuODQ4LjM0MiAxLjY3IDEuMDI4IDIuNDA5IDIuMzEgMCAuMDc3LTEuNDk2IDEuMS0yLjIwMyAxLjU4LS44NzQtMi4xMTEtMi4yMy0yLjEzMy0yLjc5NC0xLjM3My0uODA3IDEuMDg4LjYwMyAxLjgxIDIuMjE4IDIuNDEzIDEuODI3LjY4IDMuMjA4IDIuMjg4IDMuMTgyIDQuMzM5LS4wMjUgMi4wMDQtMS40NTcgMy4wNTQtMi44MTIgMy41NzF6Ii8+CiAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTAuODc1IDNIM3Y5LjE2MkMzLjA4MSAxNi42OSA2LjQ3IDIwLjQ3IDEwLjg3NSAyMXYtMi41NWMtMS41MjUtLjM2Mi0zLjAxMi0xLjUwOC0zLjE4NS0zLjg4bDIuNTE0LS43M2MtLjAxNi43ODIuMzIxIDIuMzQ1IDEuNzk3IDIuMzM1czEuNzk2LTEuMDc0IDEuNzcyLTEuNjA0Yy4wNTYtLjM0OC0uMjItMS4xOS0xLjc3Mi0xLjc4NS0xLjk0LS43NDItMy42ODgtMi4xNTUtMy42ODgtNC4wNzIgMC0yLjA2NSAxLjI0LTIuODQ2IDIuNTYyLTMuMjR6Ii8+Cjwvc3ZnPgo=) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNMVVNEX19hKSI+CiAgICAgICAgPHBhdGggZmlsbD0iIzJFQjZFQSIgZD0iTTI0IDBIMHYyNGgyNHoiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTMuNSAyMGMzLjY5Ny0uNzA2IDYuNS00LjA5NyA2LjUtOHMtMi44MDMtNy4xNTEtNi41LTcuODU3djIuMTE5Yy43NTQuMzA0IDEuNDg1LjkxMyAyLjE0MiAyLjA1MiAwIC4wNjktMS4zMy45OC0xLjk1OSAxLjQwNS0uNzc2LTEuODc3LTEuOTgyLTEuODk2LTIuNDgzLTEuMjItLjcxNy45NjcuNTM2IDEuNjA4IDEuOTcxIDIuMTQ0IDEuNjI0LjYwNSAyLjg1MiAyLjAzNSAyLjgzIDMuODU3LS4wMjMgMS43ODItMS4yOTYgMi43MTYtMi41IDMuMTc1eiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xMSA0SDR2OC4xNDRjLjA3MiA0LjAyNSAzLjA4NCA3LjM4NSA3IDcuODU2di0yLjI2NWMtMS4zNTYtLjMyMy0yLjY3Ny0xLjM0MS0yLjgzMS0zLjQ1bDIuMjM1LS42NDljLS4wMTQuNjk2LjI4NSAyLjA4NSAxLjU5NyAyLjA3NiAxLjMxMS0uMDA4IDEuNTk2LS45NTUgMS41NzUtMS40MjYuMDUtLjMxLS4xOTUtMS4wNTgtMS41NzUtMS41ODYtMS43MjUtLjY2LTMuMjc5LTEuOTE2LTMuMjc5LTMuNjIgMC0xLjgzNiAxLjEwMy0yLjUzIDIuMjc4LTIuODh6Ii8+CiAgICA8L2c+CiAgICA8ZGVmcz4KICAgICAgICA8Y2xpcFBhdGggaWQ9IkxVU0RfX2EiPgogICAgICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMCAwaDI0djI0SDB6Ii8+CiAgICAgICAgPC9jbGlwUGF0aD4KICAgIDwvZGVmcz4KPC9zdmc+Cg==)
 * @see https://web3icons.io/tokens/LUSD
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenLUSD = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenLUSD', __iconNode);
;
}),
];

//# sourceMappingURL=1qqr_%40web3icons_react_dist_1_u9w66._.js.map