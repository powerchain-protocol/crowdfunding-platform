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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenDBR.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenDBR
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-ssr] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#151E57',
                d: 'M12.947 6.79H10.58l-.71 2.842H7.6c-1.284 0-4.6 1.174-4.6 4.518 0 1.847 1.099 3.06 2.984 3.06h4.548l.52-1.895h-4.39c-.384-.014-1.294-.507-1.294-1.36 0-1.07 1.241-2.43 2.653-2.43h1.374l-.71 2.842a3.03 3.03 0 0 0 2.94-2.297zm3.79 0h-2.369l-1.894 7.578h2.368l.71-2.842h1.933c.38.014 1.147.507 1.147 1.36 0 1.07-1.223 2.43-2.63 2.43H13.64a2.127 2.127 0 0 0-2.113 1.894h4.893c1.526-.112 4.58-1.173 4.58-4.518 0-1.848-1.09-3.06-2.965-3.06h-2.009z'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M12.947 6.79H10.58l-.71 2.842H7.6c-1.284 0-4.6 1.174-4.6 4.518 0 1.848 1.099 3.06 2.984 3.06h4.548l.52-1.894h-4.39c-.384-.014-1.294-.507-1.294-1.36 0-1.07 1.241-2.43 2.653-2.43h1.374l-.71 2.842a3.03 3.03 0 0 0 2.94-2.297zm3.79 0h-2.369l-1.894 7.578h2.368l.71-2.842h1.933c.38.014 1.147.507 1.147 1.36 0 1.07-1.223 2.43-2.63 2.43H13.64a2.127 2.127 0 0 0-2.113 1.894h4.893c1.526-.112 4.58-1.173 4.58-4.518 0-1.848-1.09-3.06-2.965-3.06h-2.009z'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#DBR__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#151E57',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M12.842 7.368h-2.105l-.632 2.527H8.088C6.948 9.895 4 10.939 4 13.912c0 1.642.977 2.72 2.653 2.72h4.042l.463-1.685H7.255c-.341-.012-1.15-.45-1.15-1.208 0-.952 1.103-2.16 2.358-2.16h1.221l-.631 2.526a2.694 2.694 0 0 0 2.614-2.042zm3.369 0h-2.106l-1.684 6.737h2.105l.632-2.526h1.718c.337.012 1.019.45 1.019 1.208 0 .952-1.087 2.16-2.337 2.16h-2.101a1.89 1.89 0 0 0-1.878 1.685h4.35C17.284 16.53 20 15.587 20 12.615c0-1.642-.968-2.72-2.636-2.72H15.58z'
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
                        id: 'DBR__a'
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
 * @component @name TokenDBR
 * @description Web3Icon for TokenDBR
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiMxNTFFNTciIGQ9Ik0xMi45NDcgNi43OUgxMC41OGwtLjcxIDIuODQySDcuNmMtMS4yODQgMC00LjYgMS4xNzQtNC42IDQuNTE4IDAgMS44NDcgMS4wOTkgMy4wNiAyLjk4NCAzLjA2aDQuNTQ4bC41Mi0xLjg5NWgtNC4zOWMtLjM4NC0uMDE0LTEuMjk0LS41MDctMS4yOTQtMS4zNiAwLTEuMDcgMS4yNDEtMi40MyAyLjY1My0yLjQzaDEuMzc0bC0uNzEgMi44NDJhMy4wMyAzLjAzIDAgMCAwIDIuOTQtMi4yOTd6bTMuNzkgMGgtMi4zNjlsLTEuODk0IDcuNTc4aDIuMzY4bC43MS0yLjg0MmgxLjkzM2MuMzguMDE0IDEuMTQ3LjUwNyAxLjE0NyAxLjM2IDAgMS4wNy0xLjIyMyAyLjQzLTIuNjMgMi40M0gxMy42NGEyLjEyNyAyLjEyNyAwIDAgMC0yLjExMyAxLjg5NGg0Ljg5M2MxLjUyNi0uMTEyIDQuNTgtMS4xNzMgNC41OC00LjUxOCAwLTEuODQ4LTEuMDktMy4wNi0yLjk2NS0zLjA2aC0yLjAwOXoiLz4KPC9zdmc+Cg==) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xMi45NDcgNi43OUgxMC41OGwtLjcxIDIuODQySDcuNmMtMS4yODQgMC00LjYgMS4xNzQtNC42IDQuNTE4IDAgMS44NDggMS4wOTkgMy4wNiAyLjk4NCAzLjA2aDQuNTQ4bC41Mi0xLjg5NGgtNC4zOWMtLjM4NC0uMDE0LTEuMjk0LS41MDctMS4yOTQtMS4zNiAwLTEuMDcgMS4yNDEtMi40MyAyLjY1My0yLjQzaDEuMzc0bC0uNzEgMi44NDJhMy4wMyAzLjAzIDAgMCAwIDIuOTQtMi4yOTd6bTMuNzkgMGgtMi4zNjlsLTEuODk0IDcuNTc4aDIuMzY4bC43MS0yLjg0MmgxLjkzM2MuMzguMDE0IDEuMTQ3LjUwNyAxLjE0NyAxLjM2IDAgMS4wNy0xLjIyMyAyLjQzLTIuNjMgMi40M0gxMy42NGEyLjEyNyAyLjEyNyAwIDAgMC0yLjExMyAxLjg5NGg0Ljg5M2MxLjUyNi0uMTEyIDQuNTgtMS4xNzMgNC41OC00LjUxOCAwLTEuODQ4LTEuMDktMy4wNi0yLjk2NS0zLjA2aC0yLjAwOXoiLz4KPC9zdmc+Cg==) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNEQlJfX2EpIj4KICAgICAgICA8cGF0aCBmaWxsPSIjMTUxRTU3IiBkPSJNMjQgMEgwdjI0aDI0eiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xMi44NDIgNy4zNjhoLTIuMTA1bC0uNjMyIDIuNTI3SDguMDg4QzYuOTQ4IDkuODk1IDQgMTAuOTM5IDQgMTMuOTEyYzAgMS42NDIuOTc3IDIuNzIgMi42NTMgMi43Mmg0LjA0MmwuNDYzLTEuNjg1SDcuMjU1Yy0uMzQxLS4wMTItMS4xNS0uNDUtMS4xNS0xLjIwOCAwLS45NTIgMS4xMDMtMi4xNiAyLjM1OC0yLjE2aDEuMjIxbC0uNjMxIDIuNTI2YTIuNjk0IDIuNjk0IDAgMCAwIDIuNjE0LTIuMDQyem0zLjM2OSAwaC0yLjEwNmwtMS42ODQgNi43MzdoMi4xMDVsLjYzMi0yLjUyNmgxLjcxOGMuMzM3LjAxMiAxLjAxOS40NSAxLjAxOSAxLjIwOCAwIC45NTItMS4wODcgMi4xNi0yLjMzNyAyLjE2aC0yLjEwMWExLjg5IDEuODkgMCAwIDAtMS44NzggMS42ODVoNC4zNUMxNy4yODQgMTYuNTMgMjAgMTUuNTg3IDIwIDEyLjYxNWMwLTEuNjQyLS45NjgtMi43Mi0yLjYzNi0yLjcySDE1LjU4eiIvPgogICAgPC9nPgogICAgPGRlZnM+CiAgICAgICAgPGNsaXBQYXRoIGlkPSJEQlJfX2EiPgogICAgICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMCAwaDI0djI0SDB6Ii8+CiAgICAgICAgPC9jbGlwUGF0aD4KICAgIDwvZGVmcz4KPC9zdmc+Cg==)
 * @see https://web3icons.io/tokens/DBR
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenDBR = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenDBR', __iconNode);
;
}),
];

//# sourceMappingURL=1qqr_%40web3icons_react_dist_1n1snba._.js.map