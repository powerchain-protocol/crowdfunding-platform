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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenEUSD.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenEUSD
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-ssr] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#90C31F',
                d: 'M21 6.177H8.554c-.678.015-2.171.624-2.738 2.964 0 .127-.158.868-.37 1.8H3l1.922 2.277-.297 1.25c-.328 1.116-.344 3.356 2.219 3.356h10.625c.508 0 .958-.329 1.1-.805l.403-1.313h-8.338c-.646 0-1.096-.614-1.096-1.239s.45-1.408 1.096-1.408h7.788c.476 0 .895 0 1.037-.445l.556-1.673h-8.153a1.36 1.36 0 0 1-1.366-1.345 1.323 1.323 0 0 1 1.366-1.302h7.656a1.165 1.165 0 0 0 1.1-.826z'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M21 6.177H8.554c-.678.015-2.171.624-2.738 2.964 0 .127-.158.868-.37 1.8H3l1.922 2.277-.297 1.25c-.328 1.116-.344 3.356 2.219 3.356h10.625c.508 0 .958-.329 1.1-.805l.403-1.313h-8.338c-.646 0-1.096-.614-1.096-1.239s.45-1.408 1.096-1.408h7.788c.476 0 .895 0 1.037-.445l.556-1.673h-8.153a1.36 1.36 0 0 1-1.366-1.344 1.323 1.323 0 0 1 1.366-1.303h7.656a1.165 1.165 0 0 0 1.1-.826z'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#EUSD__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#90C31F',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M20 6.823H8.936c-.602.015-1.929.556-2.432 2.636 0 .113-.142.771-.33 1.6H4l1.708 2.023-.263 1.11c-.292.994-.306 2.984 1.971 2.984h9.445c.452 0 .852-.291.979-.715l.358-1.167h-7.412c-.574 0-.974-.546-.974-1.101s.4-1.252.974-1.252h6.922c.424 0 .796 0 .923-.395l.494-1.487h-7.247a1.21 1.21 0 0 1-1.214-1.196 1.176 1.176 0 0 1 1.214-1.157h6.804a1.035 1.035 0 0 0 .98-.734z'
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
                        id: 'EUSD__a'
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
 * @component @name TokenEUSD
 * @description Web3Icon for TokenEUSD
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiM5MEMzMUYiIGQ9Ik0yMSA2LjE3N0g4LjU1NGMtLjY3OC4wMTUtMi4xNzEuNjI0LTIuNzM4IDIuOTY0IDAgLjEyNy0uMTU4Ljg2OC0uMzcgMS44SDNsMS45MjIgMi4yNzctLjI5NyAxLjI1Yy0uMzI4IDEuMTE2LS4zNDQgMy4zNTYgMi4yMTkgMy4zNTZoMTAuNjI1Yy41MDggMCAuOTU4LS4zMjkgMS4xLS44MDVsLjQwMy0xLjMxM2gtOC4zMzhjLS42NDYgMC0xLjA5Ni0uNjE0LTEuMDk2LTEuMjM5cy40NS0xLjQwOCAxLjA5Ni0xLjQwOGg3Ljc4OGMuNDc2IDAgLjg5NSAwIDEuMDM3LS40NDVsLjU1Ni0xLjY3M2gtOC4xNTNhMS4zNiAxLjM2IDAgMCAxLTEuMzY2LTEuMzQ1IDEuMzIzIDEuMzIzIDAgMCAxIDEuMzY2LTEuMzAyaDcuNjU2YTEuMTY1IDEuMTY1IDAgMCAwIDEuMS0uODI2eiIvPgo8L3N2Zz4K) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0yMSA2LjE3N0g4LjU1NGMtLjY3OC4wMTUtMi4xNzEuNjI0LTIuNzM4IDIuOTY0IDAgLjEyNy0uMTU4Ljg2OC0uMzcgMS44SDNsMS45MjIgMi4yNzctLjI5NyAxLjI1Yy0uMzI4IDEuMTE2LS4zNDQgMy4zNTYgMi4yMTkgMy4zNTZoMTAuNjI1Yy41MDggMCAuOTU4LS4zMjkgMS4xLS44MDVsLjQwMy0xLjMxM2gtOC4zMzhjLS42NDYgMC0xLjA5Ni0uNjE0LTEuMDk2LTEuMjM5cy40NS0xLjQwOCAxLjA5Ni0xLjQwOGg3Ljc4OGMuNDc2IDAgLjg5NSAwIDEuMDM3LS40NDVsLjU1Ni0xLjY3M2gtOC4xNTNhMS4zNiAxLjM2IDAgMCAxLTEuMzY2LTEuMzQ0IDEuMzIzIDEuMzIzIDAgMCAxIDEuMzY2LTEuMzAzaDcuNjU2YTEuMTY1IDEuMTY1IDAgMCAwIDEuMS0uODI2eiIvPgo8L3N2Zz4K) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNFVVNEX19hKSI+CiAgICAgICAgPHBhdGggZmlsbD0iIzkwQzMxRiIgZD0iTTI0IDBIMHYyNGgyNHoiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMjAgNi44MjNIOC45MzZjLS42MDIuMDE1LTEuOTI5LjU1Ni0yLjQzMiAyLjYzNiAwIC4xMTMtLjE0Mi43NzEtLjMzIDEuNkg0bDEuNzA4IDIuMDIzLS4yNjMgMS4xMWMtLjI5Mi45OTQtLjMwNiAyLjk4NCAxLjk3MSAyLjk4NGg5LjQ0NWMuNDUyIDAgLjg1Mi0uMjkxLjk3OS0uNzE1bC4zNTgtMS4xNjdoLTcuNDEyYy0uNTc0IDAtLjk3NC0uNTQ2LS45NzQtMS4xMDFzLjQtMS4yNTIuOTc0LTEuMjUyaDYuOTIyYy40MjQgMCAuNzk2IDAgLjkyMy0uMzk1bC40OTQtMS40ODdoLTcuMjQ3YTEuMjEgMS4yMSAwIDAgMS0xLjIxNC0xLjE5NiAxLjE3NiAxLjE3NiAwIDAgMSAxLjIxNC0xLjE1N2g2LjgwNGExLjAzNSAxLjAzNSAwIDAgMCAuOTgtLjczNHoiLz4KICAgIDwvZz4KICAgIDxkZWZzPgogICAgICAgIDxjbGlwUGF0aCBpZD0iRVVTRF9fYSI+CiAgICAgICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0wIDBoMjR2MjRIMHoiLz4KICAgICAgICA8L2NsaXBQYXRoPgogICAgPC9kZWZzPgo8L3N2Zz4K)
 * @see https://web3icons.io/tokens/EUSD
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenEUSD = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenEUSD', __iconNode);
;
}),
];

//# sourceMappingURL=1qqr_%40web3icons_react_dist_0zhgku_._.js.map