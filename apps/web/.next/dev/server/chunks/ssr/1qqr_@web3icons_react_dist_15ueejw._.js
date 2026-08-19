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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenMONA.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenMONA
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-ssr] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#D0B47A',
                d: 'M18.777 9.67 17.49 3.9l-2.52 3.97a12.7 12.7 0 0 0-5.94 0L6.51 3.9 5.223 9.67C3.846 10.775 3 12.224 3 13.81c0 3.473 4.032 6.29 9 6.29s9-2.817 9-6.3c0-1.575-.846-3.024-2.223-4.13M6.996 12h-.594l1.458-1.687h1.071zm4.95 4.437-2.484-4.383.612-.35.558.859h2.718l.585-.869.603.36-2.583 4.383zM17.004 12l-1.935-1.687h1.08L17.607 12zm-5.04 3.033-1.08-1.908h2.253z'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M18.777 9.67 17.49 3.9l-2.52 3.97a12.7 12.7 0 0 0-5.94 0L6.51 3.9 5.223 9.67C3.846 10.775 3 12.224 3 13.81c0 3.473 4.032 6.29 9 6.29s9-2.817 9-6.3c0-1.575-.846-3.024-2.223-4.13M6.996 12h-.594l1.458-1.687h1.071zm4.95 4.437-2.484-4.383.612-.35.558.859h2.718l.585-.869.603.36-2.583 4.383zM17.004 12l-1.935-1.687h1.08L17.607 12zm-5.04 3.033-1.08-1.908h2.253z'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#MONA__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#D0B47A',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M18.024 9.928 16.88 4.8l-2.24 3.528a11.3 11.3 0 0 0-5.28 0L7.12 4.8 5.976 9.928C4.752 10.912 4 12.2 4 13.608c0 3.088 3.584 5.592 8 5.592s8-2.504 8-5.6c0-1.4-.752-2.688-1.976-3.672M7.552 12h-.528l1.296-1.5h.952zm4.4 3.944-2.208-3.896.544-.312.496.764H13.2l.52-.772.536.32-2.296 3.896zM16.448 12l-1.72-1.5h.96l1.296 1.5zm-4.48 2.696L11.008 13h2.003z'
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
                        id: 'MONA__a'
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
 * @component @name TokenMONA
 * @description Web3Icon for TokenMONA
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNEMEI0N0EiIGQ9Ik0xOC43NzcgOS42NyAxNy40OSAzLjlsLTIuNTIgMy45N2ExMi43IDEyLjcgMCAwIDAtNS45NCAwTDYuNTEgMy45IDUuMjIzIDkuNjdDMy44NDYgMTAuNzc1IDMgMTIuMjI0IDMgMTMuODFjMCAzLjQ3MyA0LjAzMiA2LjI5IDkgNi4yOXM5LTIuODE3IDktNi4zYzAtMS41NzUtLjg0Ni0zLjAyNC0yLjIyMy00LjEzTTYuOTk2IDEyaC0uNTk0bDEuNDU4LTEuNjg3aDEuMDcxem00Ljk1IDQuNDM3LTIuNDg0LTQuMzgzLjYxMi0uMzUuNTU4Ljg1OWgyLjcxOGwuNTg1LS44NjkuNjAzLjM2LTIuNTgzIDQuMzgzek0xNy4wMDQgMTJsLTEuOTM1LTEuNjg3aDEuMDhMMTcuNjA3IDEyem0tNS4wNCAzLjAzMy0xLjA4LTEuOTA4aDIuMjUzeiIvPgo8L3N2Zz4K) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xOC43NzcgOS42NyAxNy40OSAzLjlsLTIuNTIgMy45N2ExMi43IDEyLjcgMCAwIDAtNS45NCAwTDYuNTEgMy45IDUuMjIzIDkuNjdDMy44NDYgMTAuNzc1IDMgMTIuMjI0IDMgMTMuODFjMCAzLjQ3MyA0LjAzMiA2LjI5IDkgNi4yOXM5LTIuODE3IDktNi4zYzAtMS41NzUtLjg0Ni0zLjAyNC0yLjIyMy00LjEzTTYuOTk2IDEyaC0uNTk0bDEuNDU4LTEuNjg3aDEuMDcxem00Ljk1IDQuNDM3LTIuNDg0LTQuMzgzLjYxMi0uMzUuNTU4Ljg1OWgyLjcxOGwuNTg1LS44NjkuNjAzLjM2LTIuNTgzIDQuMzgzek0xNy4wMDQgMTJsLTEuOTM1LTEuNjg3aDEuMDhMMTcuNjA3IDEyem0tNS4wNCAzLjAzMy0xLjA4LTEuOTA4aDIuMjUzeiIvPgo8L3N2Zz4K) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNNT05BX19hKSI+CiAgICAgICAgPHBhdGggZmlsbD0iI0QwQjQ3QSIgZD0iTTI0IDBIMHYyNGgyNHoiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTguMDI0IDkuOTI4IDE2Ljg4IDQuOGwtMi4yNCAzLjUyOGExMS4zIDExLjMgMCAwIDAtNS4yOCAwTDcuMTIgNC44IDUuOTc2IDkuOTI4QzQuNzUyIDEwLjkxMiA0IDEyLjIgNCAxMy42MDhjMCAzLjA4OCAzLjU4NCA1LjU5MiA4IDUuNTkyczgtMi41MDQgOC01LjZjMC0xLjQtLjc1Mi0yLjY4OC0xLjk3Ni0zLjY3Mk03LjU1MiAxMmgtLjUyOGwxLjI5Ni0xLjVoLjk1MnptNC40IDMuOTQ0LTIuMjA4LTMuODk2LjU0NC0uMzEyLjQ5Ni43NjRIMTMuMmwuNTItLjc3Mi41MzYuMzItMi4yOTYgMy44OTZ6TTE2LjQ0OCAxMmwtMS43Mi0xLjVoLjk2bDEuMjk2IDEuNXptLTQuNDggMi42OTZMMTEuMDA4IDEzaDIuMDAzeiIvPgogICAgPC9nPgogICAgPGRlZnM+CiAgICAgICAgPGNsaXBQYXRoIGlkPSJNT05BX19hIj4KICAgICAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTAgMGgyNHYyNEgweiIvPgogICAgICAgIDwvY2xpcFBhdGg+CiAgICA8L2RlZnM+Cjwvc3ZnPgo=)
 * @see https://web3icons.io/tokens/MONA
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenMONA = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenMONA', __iconNode);
;
}),
];

//# sourceMappingURL=1qqr_%40web3icons_react_dist_15ueejw._.js.map