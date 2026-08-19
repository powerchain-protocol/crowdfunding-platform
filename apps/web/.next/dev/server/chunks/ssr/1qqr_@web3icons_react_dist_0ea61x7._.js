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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenGSWAP.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenGSWAP
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-ssr] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#7377D8',
                d: 'm17.906 6.938.563-2.25H8.625c-.748 0-2.363.45-2.812 2.25l-.563 3.937h1.969l.562-2.813c0-.376.281-1.124 1.406-1.124zm0 0-.281 2.25H9.469l-.282 1.687H21zM6.094 17.063l-.563 2.25h9.844c.748 0 2.363-.45 2.812-2.25l.563-3.938h-1.969l-.562 2.812c0 .377-.282 1.126-1.407 1.126zm0 0 .281-2.25h8.156l.281-1.688H3z'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'm17.906 6.938.563-2.25H8.625c-.748 0-2.363.45-2.813 2.25l-.562 3.937h1.969l.562-2.813c0-.376.281-1.124 1.406-1.124zm0 0-.281 2.25H9.469l-.282 1.687H21zM6.094 17.063l-.563 2.25h9.844c.748 0 2.362-.45 2.812-2.25l.563-3.938h-1.969l-.562 2.812c0 .377-.282 1.126-1.407 1.126zm0 0 .281-2.25h8.156l.281-1.688H3z'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#GSWAP__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#7377D8',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'm17.25 7.5.5-2H9c-.665 0-2.1.4-2.5 2L6 11h1.75l.5-2.5c0-.335.25-1 1.25-1zm0 0-.25 2H9.75L9.5 11H20zm-10.5 9-.5 2H15c.665 0 2.1-.4 2.5-2L18 13h-1.75l-.5 2.5c0 .335-.25 1-1.25 1zm0 0 .25-2h7.25l.25-1.5H4z'
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
                        id: 'GSWAP__a'
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
 * @component @name TokenGSWAP
 * @description Web3Icon for TokenGSWAP
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiM3Mzc3RDgiIGQ9Im0xNy45MDYgNi45MzguNTYzLTIuMjVIOC42MjVjLS43NDggMC0yLjM2My40NS0yLjgxMiAyLjI1bC0uNTYzIDMuOTM3aDEuOTY5bC41NjItMi44MTNjMC0uMzc2LjI4MS0xLjEyNCAxLjQwNi0xLjEyNHptMCAwLS4yODEgMi4yNUg5LjQ2OWwtLjI4MiAxLjY4N0gyMXpNNi4wOTQgMTcuMDYzbC0uNTYzIDIuMjVoOS44NDRjLjc0OCAwIDIuMzYzLS40NSAyLjgxMi0yLjI1bC41NjMtMy45MzhoLTEuOTY5bC0uNTYyIDIuODEyYzAgLjM3Ny0uMjgyIDEuMTI2LTEuNDA3IDEuMTI2em0wIDAgLjI4MS0yLjI1aDguMTU2bC4yODEtMS42ODhIM3oiLz4KPC9zdmc+Cg==) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Im0xNy45MDYgNi45MzguNTYzLTIuMjVIOC42MjVjLS43NDggMC0yLjM2My40NS0yLjgxMyAyLjI1bC0uNTYyIDMuOTM3aDEuOTY5bC41NjItMi44MTNjMC0uMzc2LjI4MS0xLjEyNCAxLjQwNi0xLjEyNHptMCAwLS4yODEgMi4yNUg5LjQ2OWwtLjI4MiAxLjY4N0gyMXpNNi4wOTQgMTcuMDYzbC0uNTYzIDIuMjVoOS44NDRjLjc0OCAwIDIuMzYyLS40NSAyLjgxMi0yLjI1bC41NjMtMy45MzhoLTEuOTY5bC0uNTYyIDIuODEyYzAgLjM3Ny0uMjgyIDEuMTI2LTEuNDA3IDEuMTI2em0wIDAgLjI4MS0yLjI1aDguMTU2bC4yODEtMS42ODhIM3oiLz4KPC9zdmc+Cg==) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNHU1dBUF9fYSkiPgogICAgICAgIDxwYXRoIGZpbGw9IiM3Mzc3RDgiIGQ9Ik0yNCAwSDB2MjRoMjR6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0ibTE3LjI1IDcuNS41LTJIOWMtLjY2NSAwLTIuMS40LTIuNSAyTDYgMTFoMS43NWwuNS0yLjVjMC0uMzM1LjI1LTEgMS4yNS0xem0wIDAtLjI1IDJIOS43NUw5LjUgMTFIMjB6bS0xMC41IDktLjUgMkgxNWMuNjY1IDAgMi4xLS40IDIuNS0yTDE4IDEzaC0xLjc1bC0uNSAyLjVjMCAuMzM1LS4yNSAxLTEuMjUgMXptMCAwIC4yNS0yaDcuMjVsLjI1LTEuNUg0eiIvPgogICAgPC9nPgogICAgPGRlZnM+CiAgICAgICAgPGNsaXBQYXRoIGlkPSJHU1dBUF9fYSI+CiAgICAgICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0wIDBoMjR2MjRIMHoiLz4KICAgICAgICA8L2NsaXBQYXRoPgogICAgPC9kZWZzPgo8L3N2Zz4K)
 * @see https://web3icons.io/tokens/GSWAP
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenGSWAP = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenGSWAP', __iconNode);
;
}),
];

//# sourceMappingURL=1qqr_%40web3icons_react_dist_0ea61x7._.js.map