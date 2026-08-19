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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenDKA.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenDKA
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-ssr] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#1FC0DC',
                d: 'M15.858 15c-2.034-.013-1.89-.265-2.982-1.32a83 83 0 0 0-3.198-2.995c-.636-.546-2.382-.486-2.382-.486H4.284v9.6H7.89c.804 0 1.902-.96 1.902-.96l2.796-2.958.954 1.008s-2.088 2.232-2.934 3.06c-1.152 1.134-2.718 1.05-2.718 1.05H3v-12h4.296c2.526 0 3.258.739 3.258.739s3.24 3.09 3.798 3.575c.761.612 1.758.486 1.758.486h3.605V4.2h-3.012c-.096 0-.93-.041-1.77.439-.611.246-3.383 3.264-3.383 3.264l-1.002-.924S12.78 4.632 13.23 4.2 14.49 3 16.703 3H21v12z'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M15.858 15c-2.034-.013-1.89-.265-2.982-1.32a83 83 0 0 0-3.198-2.995c-.636-.546-2.381-.486-2.381-.486H4.285v9.6H7.89c.804 0 1.901-.96 1.901-.96l2.796-2.958.954 1.008s-2.088 2.232-2.934 3.06c-1.152 1.134-2.717 1.05-2.717 1.05H3v-12h4.296c2.525 0 3.257.739 3.257.739s3.24 3.09 3.798 3.575c.762.612 1.758.486 1.758.486h3.606V4.2h-3.012c-.096 0-.93-.041-1.77.439-.612.246-3.384 3.264-3.384 3.264l-1.002-.924S12.78 4.632 13.23 4.2 14.49 3 16.704 3H21v12z'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#DKA__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#1FC0DC',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M15.429 14.666c-1.808-.01-1.68-.235-2.65-1.173a74 74 0 0 0-2.843-2.661c-.565-.486-2.117-.433-2.117-.433H5.142v8.533h3.205c.714 0 1.69-.853 1.69-.853l2.486-2.63.847.897s-1.855 1.983-2.607 2.72c-1.024 1.008-2.416.933-2.416.933H4V9.333h3.82c2.245 0 2.896.656 2.896.656s2.88 2.746 3.375 3.178c.678.544 1.563.432 1.563.432h3.205V5.067H16.18c-.085 0-.827-.038-1.573.389-.544.219-3.008 2.901-3.008 2.901l-.89-.821s1.983-2.085 2.383-2.47C13.492 4.683 14.212 4 16.18 4h3.818v10.666z'
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
                        id: 'DKA__a'
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
 * @component @name TokenDKA
 * @description Web3Icon for TokenDKA
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiMxRkMwREMiIGQ9Ik0xNS44NTggMTVjLTIuMDM0LS4wMTMtMS44OS0uMjY1LTIuOTgyLTEuMzJhODMgODMgMCAwIDAtMy4xOTgtMi45OTVjLS42MzYtLjU0Ni0yLjM4Mi0uNDg2LTIuMzgyLS40ODZINC4yODR2OS42SDcuODljLjgwNCAwIDEuOTAyLS45NiAxLjkwMi0uOTZsMi43OTYtMi45NTguOTU0IDEuMDA4cy0yLjA4OCAyLjIzMi0yLjkzNCAzLjA2Yy0xLjE1MiAxLjEzNC0yLjcxOCAxLjA1LTIuNzE4IDEuMDVIM3YtMTJoNC4yOTZjMi41MjYgMCAzLjI1OC43MzkgMy4yNTguNzM5czMuMjQgMy4wOSAzLjc5OCAzLjU3NWMuNzYxLjYxMiAxLjc1OC40ODYgMS43NTguNDg2aDMuNjA1VjQuMmgtMy4wMTJjLS4wOTYgMC0uOTMtLjA0MS0xLjc3LjQzOS0uNjExLjI0Ni0zLjM4MyAzLjI2NC0zLjM4MyAzLjI2NGwtMS4wMDItLjkyNFMxMi43OCA0LjYzMiAxMy4yMyA0LjIgMTQuNDkgMyAxNi43MDMgM0gyMXYxMnoiLz4KPC9zdmc+Cg==) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xNS44NTggMTVjLTIuMDM0LS4wMTMtMS44OS0uMjY1LTIuOTgyLTEuMzJhODMgODMgMCAwIDAtMy4xOTgtMi45OTVjLS42MzYtLjU0Ni0yLjM4MS0uNDg2LTIuMzgxLS40ODZINC4yODV2OS42SDcuODljLjgwNCAwIDEuOTAxLS45NiAxLjkwMS0uOTZsMi43OTYtMi45NTguOTU0IDEuMDA4cy0yLjA4OCAyLjIzMi0yLjkzNCAzLjA2Yy0xLjE1MiAxLjEzNC0yLjcxNyAxLjA1LTIuNzE3IDEuMDVIM3YtMTJoNC4yOTZjMi41MjUgMCAzLjI1Ny43MzkgMy4yNTcuNzM5czMuMjQgMy4wOSAzLjc5OCAzLjU3NWMuNzYyLjYxMiAxLjc1OC40ODYgMS43NTguNDg2aDMuNjA2VjQuMmgtMy4wMTJjLS4wOTYgMC0uOTMtLjA0MS0xLjc3LjQzOS0uNjEyLjI0Ni0zLjM4NCAzLjI2NC0zLjM4NCAzLjI2NGwtMS4wMDItLjkyNFMxMi43OCA0LjYzMiAxMy4yMyA0LjIgMTQuNDkgMyAxNi43MDQgM0gyMXYxMnoiLz4KPC9zdmc+Cg==) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNES0FfX2EpIj4KICAgICAgICA8cGF0aCBmaWxsPSIjMUZDMERDIiBkPSJNMjQgMEgwdjI0aDI0eiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xNS40MjkgMTQuNjY2Yy0xLjgwOC0uMDEtMS42OC0uMjM1LTIuNjUtMS4xNzNhNzQgNzQgMCAwIDAtMi44NDMtMi42NjFjLS41NjUtLjQ4Ni0yLjExNy0uNDMzLTIuMTE3LS40MzNINS4xNDJ2OC41MzNoMy4yMDVjLjcxNCAwIDEuNjktLjg1MyAxLjY5LS44NTNsMi40ODYtMi42My44NDcuODk3cy0xLjg1NSAxLjk4My0yLjYwNyAyLjcyYy0xLjAyNCAxLjAwOC0yLjQxNi45MzMtMi40MTYuOTMzSDRWOS4zMzNoMy44MmMyLjI0NSAwIDIuODk2LjY1NiAyLjg5Ni42NTZzMi44OCAyLjc0NiAzLjM3NSAzLjE3OGMuNjc4LjU0NCAxLjU2My40MzIgMS41NjMuNDMyaDMuMjA1VjUuMDY3SDE2LjE4Yy0uMDg1IDAtLjgyNy0uMDM4LTEuNTczLjM4OS0uNTQ0LjIxOS0zLjAwOCAyLjkwMS0zLjAwOCAyLjkwMWwtLjg5LS44MjFzMS45ODMtMi4wODUgMi4zODMtMi40N0MxMy40OTIgNC42ODMgMTQuMjEyIDQgMTYuMTggNGgzLjgxOHYxMC42NjZ6Ii8+CiAgICA8L2c+CiAgICA8ZGVmcz4KICAgICAgICA8Y2xpcFBhdGggaWQ9IkRLQV9fYSI+CiAgICAgICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0wIDBoMjR2MjRIMHoiLz4KICAgICAgICA8L2NsaXBQYXRoPgogICAgPC9kZWZzPgo8L3N2Zz4K)
 * @see https://web3icons.io/tokens/DKA
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenDKA = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenDKA', __iconNode);
;
}),
];

//# sourceMappingURL=1qqr_%40web3icons_react_dist_1r0dhze._.js.map