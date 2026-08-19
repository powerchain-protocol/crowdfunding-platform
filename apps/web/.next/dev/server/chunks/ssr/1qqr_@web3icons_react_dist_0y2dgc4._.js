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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenVEE.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenVEE
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-ssr] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#718C98',
                d: 'M17.903 3.552a3.053 3.053 0 0 0-3.098 3.098c0 1.75 1.357 3.097 3.098 3.097S21 8.4 21 6.65c0-1.752-1.357-3.098-3.097-3.098m-9.89.107 6.477 12.136c.04.068.04.152 0 .214l-2.31 4.325a.215.215 0 0 1-.376 0L3.035 3.868a.208.208 0 0 1 .192-.316H7.85c.045 0 .13.04.17.107z'
            }
        ],
        [
            'path',
            {
                fill: '#718C98',
                d: 'M6.904 8.913a55 55 0 0 1-3.683-5.361c-.169 0-.276.169-.191.315l8.774 16.467a.213.213 0 0 0 .377 0l2.061-3.858A44 44 0 0 1 6.91 8.913z'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M17.902 3.552a3.053 3.053 0 0 0-3.097 3.098c0 1.75 1.357 3.097 3.097 3.097S21 8.4 21 6.65c0-1.752-1.357-3.098-3.098-3.098m-9.889.107 6.477 12.136c.04.068.04.152 0 .214l-2.31 4.325a.215.215 0 0 1-.298.083.2.2 0 0 1-.079-.083L3.035 3.868a.208.208 0 0 1 .192-.316H7.85c.045 0 .13.04.17.107z'
            }
        ],
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M6.904 8.913a55 55 0 0 1-3.683-5.361c-.169 0-.276.169-.191.315l8.774 16.467a.213.213 0 0 0 .377 0l2.06-3.858A44 44 0 0 1 6.91 8.913z'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#VEE__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#718C98',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M17.247 4.49a2.714 2.714 0 0 0-2.753 2.754c0 1.557 1.206 2.753 2.753 2.753S20 8.801 20 7.244 18.794 4.49 17.247 4.49m-8.79.096 5.756 10.787a.19.19 0 0 1 0 .19l-2.052 3.845a.19.19 0 0 1-.265.073.2.2 0 0 1-.07-.073L4.03 4.771a.185.185 0 0 1 .17-.28h4.11c.04 0 .116.035.15.095z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M7.47 9.256A49 49 0 0 1 4.196 4.49c-.15 0-.245.15-.17.28l7.8 14.638a.19.19 0 0 0 .335 0l1.832-3.43a39.2 39.2 0 0 1-6.518-6.722z'
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
                        id: 'VEE__a'
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
 * @component @name TokenVEE
 * @description Web3Icon for TokenVEE
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiM3MThDOTgiIGQ9Ik0xNy45MDMgMy41NTJhMy4wNTMgMy4wNTMgMCAwIDAtMy4wOTggMy4wOThjMCAxLjc1IDEuMzU3IDMuMDk3IDMuMDk4IDMuMDk3UzIxIDguNCAyMSA2LjY1YzAtMS43NTItMS4zNTctMy4wOTgtMy4wOTctMy4wOThtLTkuODkuMTA3IDYuNDc3IDEyLjEzNmMuMDQuMDY4LjA0LjE1MiAwIC4yMTRsLTIuMzEgNC4zMjVhLjIxNS4yMTUgMCAwIDEtLjM3NiAwTDMuMDM1IDMuODY4YS4yMDguMjA4IDAgMCAxIC4xOTItLjMxNkg3Ljg1Yy4wNDUgMCAuMTMuMDQuMTcuMTA3eiIvPgogICAgPHBhdGggZmlsbD0iIzcxOEM5OCIgZD0iTTYuOTA0IDguOTEzYTU1IDU1IDAgMCAxLTMuNjgzLTUuMzYxYy0uMTY5IDAtLjI3Ni4xNjktLjE5MS4zMTVsOC43NzQgMTYuNDY3YS4yMTMuMjEzIDAgMCAwIC4zNzcgMGwyLjA2MS0zLjg1OEE0NCA0NCAwIDAgMSA2LjkxIDguOTEzeiIvPgo8L3N2Zz4K) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xNy45MDIgMy41NTJhMy4wNTMgMy4wNTMgMCAwIDAtMy4wOTcgMy4wOThjMCAxLjc1IDEuMzU3IDMuMDk3IDMuMDk3IDMuMDk3UzIxIDguNCAyMSA2LjY1YzAtMS43NTItMS4zNTctMy4wOTgtMy4wOTgtMy4wOThtLTkuODg5LjEwNyA2LjQ3NyAxMi4xMzZjLjA0LjA2OC4wNC4xNTIgMCAuMjE0bC0yLjMxIDQuMzI1YS4yMTUuMjE1IDAgMCAxLS4yOTguMDgzLjIuMiAwIDAgMS0uMDc5LS4wODNMMy4wMzUgMy44NjhhLjIwOC4yMDggMCAwIDEgLjE5Mi0uMzE2SDcuODVjLjA0NSAwIC4xMy4wNC4xNy4xMDd6Ii8+CiAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNNi45MDQgOC45MTNhNTUgNTUgMCAwIDEtMy42ODMtNS4zNjFjLS4xNjkgMC0uMjc2LjE2OS0uMTkxLjMxNWw4Ljc3NCAxNi40NjdhLjIxMy4yMTMgMCAwIDAgLjM3NyAwbDIuMDYtMy44NThBNDQgNDQgMCAwIDEgNi45MSA4LjkxM3oiLz4KPC9zdmc+Cg==) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNWRUVfX2EpIj4KICAgICAgICA8cGF0aCBmaWxsPSIjNzE4Qzk4IiBkPSJNMjQgMEgwdjI0aDI0eiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xNy4yNDcgNC40OWEyLjcxNCAyLjcxNCAwIDAgMC0yLjc1MyAyLjc1NGMwIDEuNTU3IDEuMjA2IDIuNzUzIDIuNzUzIDIuNzUzUzIwIDguODAxIDIwIDcuMjQ0IDE4Ljc5NCA0LjQ5IDE3LjI0NyA0LjQ5bS04Ljc5LjA5NiA1Ljc1NiAxMC43ODdhLjE5LjE5IDAgMCAxIDAgLjE5bC0yLjA1MiAzLjg0NWEuMTkuMTkgMCAwIDEtLjI2NS4wNzMuMi4yIDAgMCAxLS4wNy0uMDczTDQuMDMgNC43NzFhLjE4NS4xODUgMCAwIDEgLjE3LS4yOGg0LjExYy4wNCAwIC4xMTYuMDM1LjE1LjA5NXoiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNNy40NyA5LjI1NkE0OSA0OSAwIDAgMSA0LjE5NiA0LjQ5Yy0uMTUgMC0uMjQ1LjE1LS4xNy4yOGw3LjggMTQuNjM4YS4xOS4xOSAwIDAgMCAuMzM1IDBsMS44MzItMy40M2EzOS4yIDM5LjIgMCAwIDEtNi41MTgtNi43MjJ6Ii8+CiAgICA8L2c+CiAgICA8ZGVmcz4KICAgICAgICA8Y2xpcFBhdGggaWQ9IlZFRV9fYSI+CiAgICAgICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0wIDBoMjR2MjRIMHoiLz4KICAgICAgICA8L2NsaXBQYXRoPgogICAgPC9kZWZzPgo8L3N2Zz4K)
 * @see https://web3icons.io/tokens/VEE
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenVEE = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenVEE', __iconNode);
;
}),
];

//# sourceMappingURL=1qqr_%40web3icons_react_dist_0y2dgc4._.js.map