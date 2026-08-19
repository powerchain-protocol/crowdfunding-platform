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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenA.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenA
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-ssr] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#180116',
                d: 'M15.272 10.067h-2.441a.36.36 0 0 0-.256.106l-5.622 5.628h-3.66v-5.42L5.47 8.199v6.042h.31l5.682-5.686c.227-.228.535-.356.857-.356h2.953zm6.02-1.868h-3.66l-5.621 5.628a.36.36 0 0 1-.256.106H9.314v1.868h2.95c.324 0 .634-.129.862-.357l5.679-5.685h.311v5.105h-3.507v.937h3.507l.323-.324.302-.302 1.552-1.556z'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M14.565 10.067h-2.441a.36.36 0 0 0-.256.106l-5.622 5.628h-3.66v-5.42l2.177-2.182v6.042h.31l5.682-5.686c.227-.228.535-.356.856-.356h2.954zm6.02-1.868h-3.66l-5.621 5.628a.36.36 0 0 1-.256.106H8.607v1.868h2.95c.324 0 .634-.129.862-.357l5.679-5.685h.311v5.105h-3.507v.937h3.507l.323-.324.301-.302 1.553-1.556z'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#A__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#2E3BFF',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M14.648 10.282h-2.17a.32.32 0 0 0-.227.094L7.253 15.38H4v-4.82l1.935-1.94v5.371h.276l5.05-5.055c.202-.202.476-.315.762-.315h2.625zM20 8.622h-3.253l-4.998 5.002a.32.32 0 0 1-.227.094h-2.17v1.66h2.623c.287 0 .563-.114.765-.317l5.048-5.053h.277v4.538h-3.118v.833h3.118l.287-.288.268-.268L20 13.44z'
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
                        id: 'A__a'
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
 * @component @name TokenA
 * @description Web3Icon for TokenA
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiMxODAxMTYiIGQ9Ik0xNS4yNzIgMTAuMDY3aC0yLjQ0MWEuMzYuMzYgMCAwIDAtLjI1Ni4xMDZsLTUuNjIyIDUuNjI4aC0zLjY2di01LjQyTDUuNDcgOC4xOTl2Ni4wNDJoLjMxbDUuNjgyLTUuNjg2Yy4yMjctLjIyOC41MzUtLjM1Ni44NTctLjM1NmgyLjk1M3ptNi4wMi0xLjg2OGgtMy42NmwtNS42MjEgNS42MjhhLjM2LjM2IDAgMCAxLS4yNTYuMTA2SDkuMzE0djEuODY4aDIuOTVjLjMyNCAwIC42MzQtLjEyOS44NjItLjM1N2w1LjY3OS01LjY4NWguMzExdjUuMTA1aC0zLjUwN3YuOTM3aDMuNTA3bC4zMjMtLjMyNC4zMDItLjMwMiAxLjU1Mi0xLjU1NnoiLz4KPC9zdmc+Cg==) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xNC41NjUgMTAuMDY3aC0yLjQ0MWEuMzYuMzYgMCAwIDAtLjI1Ni4xMDZsLTUuNjIyIDUuNjI4aC0zLjY2di01LjQybDIuMTc3LTIuMTgydjYuMDQyaC4zMWw1LjY4Mi01LjY4NmMuMjI3LS4yMjguNTM1LS4zNTYuODU2LS4zNTZoMi45NTR6bTYuMDItMS44NjhoLTMuNjZsLTUuNjIxIDUuNjI4YS4zNi4zNiAwIDAgMS0uMjU2LjEwNkg4LjYwN3YxLjg2OGgyLjk1Yy4zMjQgMCAuNjM0LS4xMjkuODYyLS4zNTdsNS42NzktNS42ODVoLjMxMXY1LjEwNWgtMy41MDd2LjkzN2gzLjUwN2wuMzIzLS4zMjQuMzAxLS4zMDIgMS41NTMtMS41NTZ6Ii8+Cjwvc3ZnPgo=) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNBX19hKSI+CiAgICAgICAgPHBhdGggZmlsbD0iIzJFM0JGRiIgZD0iTTI0IDBIMHYyNGgyNHoiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTQuNjQ4IDEwLjI4MmgtMi4xN2EuMzIuMzIgMCAwIDAtLjIyNy4wOTRMNy4yNTMgMTUuMzhINHYtNC44MmwxLjkzNS0xLjk0djUuMzcxaC4yNzZsNS4wNS01LjA1NWMuMjAyLS4yMDIuNDc2LS4zMTUuNzYyLS4zMTVoMi42MjV6TTIwIDguNjIyaC0zLjI1M2wtNC45OTggNS4wMDJhLjMyLjMyIDAgMCAxLS4yMjcuMDk0aC0yLjE3djEuNjZoMi42MjNjLjI4NyAwIC41NjMtLjExNC43NjUtLjMxN2w1LjA0OC01LjA1M2guMjc3djQuNTM4aC0zLjExOHYuODMzaDMuMTE4bC4yODctLjI4OC4yNjgtLjI2OEwyMCAxMy40NHoiLz4KICAgIDwvZz4KICAgIDxkZWZzPgogICAgICAgIDxjbGlwUGF0aCBpZD0iQV9fYSI+CiAgICAgICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0wIDBoMjR2MjRIMHoiLz4KICAgICAgICA8L2NsaXBQYXRoPgogICAgPC9kZWZzPgo8L3N2Zz4K)
 * @see https://web3icons.io/tokens/A
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenA = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenA', __iconNode);
;
}),
];

//# sourceMappingURL=1qqr_%40web3icons_react_dist_0quwb8o._.js.map