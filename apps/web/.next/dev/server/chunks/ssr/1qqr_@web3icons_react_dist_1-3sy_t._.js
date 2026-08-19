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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenSTEEM.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenSTEEM
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-ssr] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#171FC9',
                d: 'M6.038 4.947c.2.036-.29 1.334-.019 2.814.237 1.271 3.178 6.21 3.06 7.9-.09 1.07-2.515 3.559-2.769 3.396-.272-.082.735-1.771.363-3.178-.445-1.653-3.032-5.902-3.032-7.782 0-1.37 2.224-3.241 2.397-3.15m5.538-1.944c.255.046-.363 1.698-.018 3.596.3 1.625 4.059 7.917 3.904 10.078-.118 1.354-3.205 4.522-3.532 4.313-.354-.09.936-2.252.454-4.05-.545-2.096-3.858-7.526-3.858-9.914 0-1.762 2.832-4.132 3.059-4.022zm5.73 1.944c.2.036-.291 1.334-.019 2.814.236 1.271 3.178 6.21 3.07 7.9-.091 1.07-2.516 3.559-2.78 3.396-.271-.082.736-1.771.364-3.178-.436-1.653-3.032-5.902-3.032-7.782 0-1.37 2.224-3.241 2.396-3.15'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M6.038 4.947c.2.036-.29 1.334-.019 2.814.237 1.271 3.178 6.21 3.06 7.9-.09 1.07-2.515 3.559-2.769 3.396-.272-.082.735-1.771.363-3.178-.445-1.653-3.032-5.902-3.032-7.782 0-1.37 2.224-3.241 2.397-3.15m5.538-1.944c.255.046-.363 1.698-.018 3.596.3 1.625 4.059 7.917 3.904 10.078-.118 1.354-3.205 4.522-3.532 4.313-.354-.09.936-2.252.454-4.05-.545-2.096-3.858-7.526-3.858-9.914 0-1.762 2.832-4.132 3.059-4.022zm5.73 1.944c.2.036-.291 1.334-.019 2.814.236 1.271 3.178 6.21 3.07 7.9-.091 1.07-2.516 3.559-2.78 3.396-.271-.082.736-1.771.364-3.178-.436-1.653-3.032-5.902-3.032-7.782 0-1.37 2.224-3.241 2.396-3.15'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#STEEM__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#171FC9',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M6.7 5.73c.177.033-.258 1.186-.016 2.502.21 1.13 2.825 5.52 2.72 7.022-.081.952-2.236 3.163-2.462 3.019-.242-.073.654-1.575.323-2.825-.395-1.47-2.696-5.246-2.696-6.917 0-1.219 1.978-2.881 2.131-2.8m4.923-1.727c.227.04-.322 1.51-.016 3.196.267 1.445 3.608 7.038 3.47 8.959-.104 1.202-2.849 4.02-3.139 3.833-.315-.08.831-2.001.404-3.6-.485-1.863-3.43-6.69-3.43-8.813 0-1.565 2.518-3.672 2.72-3.575zm5.093 1.727c.177.033-.258 1.186-.016 2.502.21 1.13 2.825 5.52 2.728 7.022-.08.952-2.236 3.163-2.47 3.019-.242-.073.654-1.575.323-2.825-.388-1.47-2.696-5.246-2.696-6.917 0-1.219 1.978-2.881 2.131-2.8'
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
                        id: 'STEEM__a'
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
 * @component @name TokenSTEEM
 * @description Web3Icon for TokenSTEEM
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiMxNzFGQzkiIGQ9Ik02LjAzOCA0Ljk0N2MuMi4wMzYtLjI5IDEuMzM0LS4wMTkgMi44MTQuMjM3IDEuMjcxIDMuMTc4IDYuMjEgMy4wNiA3LjktLjA5IDEuMDctMi41MTUgMy41NTktMi43NjkgMy4zOTYtLjI3Mi0uMDgyLjczNS0xLjc3MS4zNjMtMy4xNzgtLjQ0NS0xLjY1My0zLjAzMi01LjkwMi0zLjAzMi03Ljc4MiAwLTEuMzcgMi4yMjQtMy4yNDEgMi4zOTctMy4xNW01LjUzOC0xLjk0NGMuMjU1LjA0Ni0uMzYzIDEuNjk4LS4wMTggMy41OTYuMyAxLjYyNSA0LjA1OSA3LjkxNyAzLjkwNCAxMC4wNzgtLjExOCAxLjM1NC0zLjIwNSA0LjUyMi0zLjUzMiA0LjMxMy0uMzU0LS4wOS45MzYtMi4yNTIuNDU0LTQuMDUtLjU0NS0yLjA5Ni0zLjg1OC03LjUyNi0zLjg1OC05LjkxNCAwLTEuNzYyIDIuODMyLTQuMTMyIDMuMDU5LTQuMDIyem01LjczIDEuOTQ0Yy4yLjAzNi0uMjkxIDEuMzM0LS4wMTkgMi44MTQuMjM2IDEuMjcxIDMuMTc4IDYuMjEgMy4wNyA3LjktLjA5MSAxLjA3LTIuNTE2IDMuNTU5LTIuNzggMy4zOTYtLjI3MS0uMDgyLjczNi0xLjc3MS4zNjQtMy4xNzgtLjQzNi0xLjY1My0zLjAzMi01LjkwMi0zLjAzMi03Ljc4MiAwLTEuMzcgMi4yMjQtMy4yNDEgMi4zOTYtMy4xNSIvPgo8L3N2Zz4K) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik02LjAzOCA0Ljk0N2MuMi4wMzYtLjI5IDEuMzM0LS4wMTkgMi44MTQuMjM3IDEuMjcxIDMuMTc4IDYuMjEgMy4wNiA3LjktLjA5IDEuMDctMi41MTUgMy41NTktMi43NjkgMy4zOTYtLjI3Mi0uMDgyLjczNS0xLjc3MS4zNjMtMy4xNzgtLjQ0NS0xLjY1My0zLjAzMi01LjkwMi0zLjAzMi03Ljc4MiAwLTEuMzcgMi4yMjQtMy4yNDEgMi4zOTctMy4xNW01LjUzOC0xLjk0NGMuMjU1LjA0Ni0uMzYzIDEuNjk4LS4wMTggMy41OTYuMyAxLjYyNSA0LjA1OSA3LjkxNyAzLjkwNCAxMC4wNzgtLjExOCAxLjM1NC0zLjIwNSA0LjUyMi0zLjUzMiA0LjMxMy0uMzU0LS4wOS45MzYtMi4yNTIuNDU0LTQuMDUtLjU0NS0yLjA5Ni0zLjg1OC03LjUyNi0zLjg1OC05LjkxNCAwLTEuNzYyIDIuODMyLTQuMTMyIDMuMDU5LTQuMDIyem01LjczIDEuOTQ0Yy4yLjAzNi0uMjkxIDEuMzM0LS4wMTkgMi44MTQuMjM2IDEuMjcxIDMuMTc4IDYuMjEgMy4wNyA3LjktLjA5MSAxLjA3LTIuNTE2IDMuNTU5LTIuNzggMy4zOTYtLjI3MS0uMDgyLjczNi0xLjc3MS4zNjQtMy4xNzgtLjQzNi0xLjY1My0zLjAzMi01LjkwMi0zLjAzMi03Ljc4MiAwLTEuMzcgMi4yMjQtMy4yNDEgMi4zOTYtMy4xNSIvPgo8L3N2Zz4K) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNTVEVFTV9fYSkiPgogICAgICAgIDxwYXRoIGZpbGw9IiMxNzFGQzkiIGQ9Ik0yNCAwSDB2MjRoMjR6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTYuNyA1LjczYy4xNzcuMDMzLS4yNTggMS4xODYtLjAxNiAyLjUwMi4yMSAxLjEzIDIuODI1IDUuNTIgMi43MiA3LjAyMi0uMDgxLjk1Mi0yLjIzNiAzLjE2My0yLjQ2MiAzLjAxOS0uMjQyLS4wNzMuNjU0LTEuNTc1LjMyMy0yLjgyNS0uMzk1LTEuNDctMi42OTYtNS4yNDYtMi42OTYtNi45MTcgMC0xLjIxOSAxLjk3OC0yLjg4MSAyLjEzMS0yLjhtNC45MjMtMS43MjdjLjIyNy4wNC0uMzIyIDEuNTEtLjAxNiAzLjE5Ni4yNjcgMS40NDUgMy42MDggNy4wMzggMy40NyA4Ljk1OS0uMTA0IDEuMjAyLTIuODQ5IDQuMDItMy4xMzkgMy44MzMtLjMxNS0uMDguODMxLTIuMDAxLjQwNC0zLjYtLjQ4NS0xLjg2My0zLjQzLTYuNjktMy40My04LjgxMyAwLTEuNTY1IDIuNTE4LTMuNjcyIDIuNzItMy41NzV6bTUuMDkzIDEuNzI3Yy4xNzcuMDMzLS4yNTggMS4xODYtLjAxNiAyLjUwMi4yMSAxLjEzIDIuODI1IDUuNTIgMi43MjggNy4wMjItLjA4Ljk1Mi0yLjIzNiAzLjE2My0yLjQ3IDMuMDE5LS4yNDItLjA3My42NTQtMS41NzUuMzIzLTIuODI1LS4zODgtMS40Ny0yLjY5Ni01LjI0Ni0yLjY5Ni02LjkxNyAwLTEuMjE5IDEuOTc4LTIuODgxIDIuMTMxLTIuOCIvPgogICAgPC9nPgogICAgPGRlZnM+CiAgICAgICAgPGNsaXBQYXRoIGlkPSJTVEVFTV9fYSI+CiAgICAgICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0wIDBoMjR2MjRIMHoiLz4KICAgICAgICA8L2NsaXBQYXRoPgogICAgPC9kZWZzPgo8L3N2Zz4K)
 * @see https://web3icons.io/tokens/STEEM
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenSTEEM = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenSTEEM', __iconNode);
;
}),
];

//# sourceMappingURL=1qqr_%40web3icons_react_dist_1-3sy_t._.js.map