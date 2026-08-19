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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/networks/NetworkL3x.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>NetworkL3x
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-ssr] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#48EA98',
                d: 'M18.3 16.409v-.365h-4.606v.573l-.001.037q-.016.233-.252.249l-.038.001H5.7v2.53L7.765 21h5.982q4.5-.051 4.552-4.489zM7.62 13.435v-3.392h10.587v3.392zM13.745 3H8.03L5.965 4.565v2.53h7.438l.038.002q.133.009.196.087.048.06.056.162l.001.037v.574H18.3v-.469Q18.247 3.05 13.744 3'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M18.3 16.409v-.365h-4.606v.573l-.001.037q-.016.233-.252.249l-.038.001H5.7v2.53L7.765 21h5.982q4.5-.051 4.552-4.489zM7.62 13.435v-3.392h10.587v3.392zM13.745 3H8.03L5.965 4.565v2.53h7.438l.038.002q.133.009.196.087.048.06.056.162l.001.037v.574H18.3v-.469Q18.247 3.05 13.744 3'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#l3x__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#48EA98',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#000',
                        d: 'M17.6 15.919v-.325h-4.094v.51l-.001.033q-.015.207-.225.221l-.033.001H6.4v2.25L8.235 20h5.317q4.002-.045 4.047-3.99zm-9.495-2.644v-3.014h9.412v3.014zM13.551 4H8.47L6.635 5.391v2.25h6.645q.118.009.175.078a.25.25 0 0 1 .05.144v.543H17.6v-.417Q17.552 4.044 13.55 4'
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
                        id: 'l3x__a'
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
 * @component @name NetworkL3x
 * @description Web3Icon for NetworkL3x
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiM0OEVBOTgiIGQ9Ik0xOC4zIDE2LjQwOXYtLjM2NWgtNC42MDZ2LjU3M2wtLjAwMS4wMzdxLS4wMTYuMjMzLS4yNTIuMjQ5bC0uMDM4LjAwMUg1Ljd2Mi41M0w3Ljc2NSAyMWg1Ljk4MnE0LjUtLjA1MSA0LjU1Mi00LjQ4OXpNNy42MiAxMy40MzV2LTMuMzkyaDEwLjU4N3YzLjM5MnpNMTMuNzQ1IDNIOC4wM0w1Ljk2NSA0LjU2NXYyLjUzaDcuNDM4bC4wMzguMDAycS4xMzMuMDA5LjE5Ni4wODcuMDQ4LjA2LjA1Ni4xNjJsLjAwMS4wMzd2LjU3NEgxOC4zdi0uNDY5UTE4LjI0NyAzLjA1IDEzLjc0NCAzIi8+Cjwvc3ZnPgo=) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xOC4zIDE2LjQwOXYtLjM2NWgtNC42MDZ2LjU3M2wtLjAwMS4wMzdxLS4wMTYuMjMzLS4yNTIuMjQ5bC0uMDM4LjAwMUg1Ljd2Mi41M0w3Ljc2NSAyMWg1Ljk4MnE0LjUtLjA1MSA0LjU1Mi00LjQ4OXpNNy42MiAxMy40MzV2LTMuMzkyaDEwLjU4N3YzLjM5MnpNMTMuNzQ1IDNIOC4wM0w1Ljk2NSA0LjU2NXYyLjUzaDcuNDM4bC4wMzguMDAycS4xMzMuMDA5LjE5Ni4wODcuMDQ4LjA2LjA1Ni4xNjJsLjAwMS4wMzd2LjU3NEgxOC4zdi0uNDY5UTE4LjI0NyAzLjA1IDEzLjc0NCAzIi8+Cjwvc3ZnPgo=) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNsM3hfX2EpIj4KICAgICAgICA8cGF0aCBmaWxsPSIjNDhFQTk4IiBkPSJNMjQgMEgwdjI0aDI0eiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiMwMDAiIGQ9Ik0xNy42IDE1LjkxOXYtLjMyNWgtNC4wOTR2LjUxbC0uMDAxLjAzM3EtLjAxNS4yMDctLjIyNS4yMjFsLS4wMzMuMDAxSDYuNHYyLjI1TDguMjM1IDIwaDUuMzE3cTQuMDAyLS4wNDUgNC4wNDctMy45OXptLTkuNDk1LTIuNjQ0di0zLjAxNGg5LjQxMnYzLjAxNHpNMTMuNTUxIDRIOC40N0w2LjYzNSA1LjM5MXYyLjI1aDYuNjQ1cS4xMTguMDA5LjE3NS4wNzhhLjI1LjI1IDAgMCAxIC4wNS4xNDR2LjU0M0gxNy42di0uNDE3UTE3LjU1MiA0LjA0NCAxMy41NSA0Ii8+CiAgICA8L2c+CiAgICA8ZGVmcz4KICAgICAgICA8Y2xpcFBhdGggaWQ9ImwzeF9fYSI+CiAgICAgICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0wIDBoMjR2MjRIMHoiLz4KICAgICAgICA8L2NsaXBQYXRoPgogICAgPC9kZWZzPgo8L3N2Zz4K)
 * @see https://web3icons.io/networks/l3x
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const NetworkL3x = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createWeb3Icon"])('NetworkL3x', __iconNode);
;
}),
];

//# sourceMappingURL=1qqr_%40web3icons_react_dist_07congm._.js.map