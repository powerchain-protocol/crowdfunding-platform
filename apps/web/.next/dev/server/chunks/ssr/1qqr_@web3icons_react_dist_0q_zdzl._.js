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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenUSDT.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenUSDT
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-ssr] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#009393',
                d: 'm12 19.2-9-8.88L6.433 4.8h11.134L21 10.32zm.9-8.1v-1.098c1.62.08 3.132.396 3.6.805-.544.477-2.493.824-4.5.824s-3.956-.347-4.5-.824c.463-.41 1.98-.72 3.6-.81V11.1zm-5.4-.297v.661c.463.41 1.975.72 3.6.81V14.7h1.8v-2.43c1.62-.081 3.136-.396 3.6-.806v-1.318c-.464-.41-1.98-.725-3.6-.81V8.4h2.7V7.05H8.4V8.4h2.7v.936c-1.625.085-3.137.4-3.6.81z'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'm12 19.2-9-8.88L6.433 4.8h11.134L21 10.32zm.9-8.1v-1.098c1.62.08 3.132.396 3.6.805-.544.477-2.493.824-4.5.824s-3.956-.347-4.5-.824c.463-.41 1.98-.72 3.6-.81V11.1zm-5.4-.297v.661c.463.41 1.975.72 3.6.81V14.7h1.8v-2.43c1.62-.081 3.136-.396 3.6-.806v-1.318c-.464-.41-1.98-.725-3.6-.81V8.4h2.7V7.05H8.4V8.4h2.7v.936c-1.625.085-3.137.4-3.6.81z'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#USDT__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#009393',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'm12 18.4-8-7.892L7.052 5.6h9.896L20 10.508zm.8-7.2v-.976c1.44.072 2.784.352 3.2.716-.484.424-2.216.732-4 .732s-3.516-.308-4-.732c.412-.364 1.76-.64 3.2-.72v.98zM8 10.936v.588c.412.364 1.756.64 3.2.72V14.4h1.6v-2.16c1.44-.072 2.788-.352 3.2-.716v-1.172c-.412-.364-1.76-.644-3.2-.72V8.8h2.4V7.6H8.8v1.2h2.4v.832c-1.444.076-2.788.356-3.2.72z'
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
                        id: 'USDT__a'
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
 * @component @name TokenUSDT
 * @description Web3Icon for TokenUSDT
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiMwMDkzOTMiIGQ9Im0xMiAxOS4yLTktOC44OEw2LjQzMyA0LjhoMTEuMTM0TDIxIDEwLjMyem0uOS04LjF2LTEuMDk4YzEuNjIuMDggMy4xMzIuMzk2IDMuNi44MDUtLjU0NC40NzctMi40OTMuODI0LTQuNS44MjRzLTMuOTU2LS4zNDctNC41LS44MjRjLjQ2My0uNDEgMS45OC0uNzIgMy42LS44MVYxMS4xem0tNS40LS4yOTd2LjY2MWMuNDYzLjQxIDEuOTc1LjcyIDMuNi44MVYxNC43aDEuOHYtMi40M2MxLjYyLS4wODEgMy4xMzYtLjM5NiAzLjYtLjgwNnYtMS4zMThjLS40NjQtLjQxLTEuOTgtLjcyNS0zLjYtLjgxVjguNGgyLjdWNy4wNUg4LjRWOC40aDIuN3YuOTM2Yy0xLjYyNS4wODUtMy4xMzcuNC0zLjYuODF6Ii8+Cjwvc3ZnPgo=) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Im0xMiAxOS4yLTktOC44OEw2LjQzMyA0LjhoMTEuMTM0TDIxIDEwLjMyem0uOS04LjF2LTEuMDk4YzEuNjIuMDggMy4xMzIuMzk2IDMuNi44MDUtLjU0NC40NzctMi40OTMuODI0LTQuNS44MjRzLTMuOTU2LS4zNDctNC41LS44MjRjLjQ2My0uNDEgMS45OC0uNzIgMy42LS44MVYxMS4xem0tNS40LS4yOTd2LjY2MWMuNDYzLjQxIDEuOTc1LjcyIDMuNi44MVYxNC43aDEuOHYtMi40M2MxLjYyLS4wODEgMy4xMzYtLjM5NiAzLjYtLjgwNnYtMS4zMThjLS40NjQtLjQxLTEuOTgtLjcyNS0zLjYtLjgxVjguNGgyLjdWNy4wNUg4LjRWOC40aDIuN3YuOTM2Yy0xLjYyNS4wODUtMy4xMzcuNC0zLjYuODF6Ii8+Cjwvc3ZnPgo=) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNVU0RUX19hKSI+CiAgICAgICAgPHBhdGggZmlsbD0iIzAwOTM5MyIgZD0iTTI0IDBIMHYyNGgyNHoiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJtMTIgMTguNC04LTcuODkyTDcuMDUyIDUuNmg5Ljg5NkwyMCAxMC41MDh6bS44LTcuMnYtLjk3NmMxLjQ0LjA3MiAyLjc4NC4zNTIgMy4yLjcxNi0uNDg0LjQyNC0yLjIxNi43MzItNCAuNzMycy0zLjUxNi0uMzA4LTQtLjczMmMuNDEyLS4zNjQgMS43Ni0uNjQgMy4yLS43MnYuOTh6TTggMTAuOTM2di41ODhjLjQxMi4zNjQgMS43NTYuNjQgMy4yLjcyVjE0LjRoMS42di0yLjE2YzEuNDQtLjA3MiAyLjc4OC0uMzUyIDMuMi0uNzE2di0xLjE3MmMtLjQxMi0uMzY0LTEuNzYtLjY0NC0zLjItLjcyVjguOGgyLjRWNy42SDguOHYxLjJoMi40di44MzJjLTEuNDQ0LjA3Ni0yLjc4OC4zNTYtMy4yLjcyeiIvPgogICAgPC9nPgogICAgPGRlZnM+CiAgICAgICAgPGNsaXBQYXRoIGlkPSJVU0RUX19hIj4KICAgICAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTAgMGgyNHYyNEgweiIvPgogICAgICAgIDwvY2xpcFBhdGg+CiAgICA8L2RlZnM+Cjwvc3ZnPgo=)
 * @see https://web3icons.io/tokens/USDT
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenUSDT = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenUSDT', __iconNode);
;
}),
];

//# sourceMappingURL=1qqr_%40web3icons_react_dist_0q_zdzl._.js.map