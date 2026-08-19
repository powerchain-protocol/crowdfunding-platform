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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenAHT.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenAHT
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-ssr] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#30BFBD',
                d: 'M17.85 7.725h-.45v1.8h.45zm-8.1.45h-.9v8.1h.9v-2.7a1.8 1.8 0 1 1 3.6 0v2.7h.9v-2.7a2.701 2.701 0 0 0-4.5-2.011zm-4.05 8.1c.693 0 1.323-.26 1.8-.688v.688h.9v-2.7a2.7 2.7 0 1 0-2.7 2.7m0-.9a1.8 1.8 0 1 0 0-3.6 1.8 1.8 0 0 0 0 3.6m11.7.9c.693 0 1.323-.26 1.8-.688v.688h.9v-2.7a2.7 2.7 0 1 0-2.7 2.7m0-.9a1.8 1.8 0 1 0 0-3.6 1.8 1.8 0 0 0 0 3.6m-2.781-6.858-.355.356 1.417 1.422.36-.36zM21 8.85l-.355-.355-1.418 1.422.355.36z',
                fillRule: 'evenodd',
                clipRule: 'evenodd'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M17.85 7.725h-.45v1.8h.45zm-8.1.45h-.9v8.1h.9v-2.7a1.8 1.8 0 1 1 3.6 0v2.7h.9v-2.7a2.701 2.701 0 0 0-4.5-2.011zm-4.05 8.1c.693 0 1.323-.26 1.8-.688v.688h.9v-2.7a2.7 2.7 0 1 0-2.7 2.7m0-.9a1.8 1.8 0 1 0 0-3.6 1.8 1.8 0 0 0 0 3.6m11.7.9c.693 0 1.323-.26 1.8-.688v.688h.9v-2.7a2.7 2.7 0 1 0-2.7 2.7m0-.9a1.8 1.8 0 1 0 0-3.6 1.8 1.8 0 0 0 0 3.6m-2.781-6.858-.355.356 1.417 1.422.36-.36zM21 8.85l-.355-.355-1.418 1.422.355.36z',
                fillRule: 'evenodd',
                clipRule: 'evenodd'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#AHT__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#30BFBD',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M17.2 8.2h-.4v1.6h.4zm-7.2.4h-.8v7.2h.8v-2.4a1.6 1.6 0 0 1 3.2 0v2.4h.8v-2.4a2.4 2.4 0 0 0-4-1.788zm-3.6 7.2c.616 0 1.176-.232 1.6-.612v.612h.8v-2.4a2.4 2.4 0 1 0-2.4 2.4m0-.8a1.6 1.6 0 1 0 0-3.2 1.6 1.6 0 0 0 0 3.2m10.4.8c.616 0 1.176-.232 1.6-.612v.612h.8v-2.4a2.4 2.4 0 1 0-2.4 2.4m0-.8a1.6 1.6 0 1 0 0-3.2 1.6 1.6 0 0 0 0 3.2m-2.472-6.096-.316.316 1.26 1.264.32-.32zM20 9.2l-.316-.316-1.26 1.264.316.32z',
                        fillRule: 'evenodd',
                        clipRule: 'evenodd'
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
                        id: 'AHT__a'
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
 * @component @name TokenAHT
 * @description Web3Icon for TokenAHT
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiMzMEJGQkQiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTE3Ljg1IDcuNzI1aC0uNDV2MS44aC40NXptLTguMS40NWgtLjl2OC4xaC45di0yLjdhMS44IDEuOCAwIDEgMSAzLjYgMHYyLjdoLjl2LTIuN2EyLjcwMSAyLjcwMSAwIDAgMC00LjUtMi4wMTF6bS00LjA1IDguMWMuNjkzIDAgMS4zMjMtLjI2IDEuOC0uNjg4di42ODhoLjl2LTIuN2EyLjcgMi43IDAgMSAwLTIuNyAyLjdtMC0uOWExLjggMS44IDAgMSAwIDAtMy42IDEuOCAxLjggMCAwIDAgMCAzLjZtMTEuNy45Yy42OTMgMCAxLjMyMy0uMjYgMS44LS42ODh2LjY4OGguOXYtMi43YTIuNyAyLjcgMCAxIDAtMi43IDIuN20wLS45YTEuOCAxLjggMCAxIDAgMC0zLjYgMS44IDEuOCAwIDAgMCAwIDMuNm0tMi43ODEtNi44NTgtLjM1NS4zNTYgMS40MTcgMS40MjIuMzYtLjM2ek0yMSA4Ljg1bC0uMzU1LS4zNTUtMS40MTggMS40MjIuMzU1LjM2eiIgY2xpcC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo=) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTE3Ljg1IDcuNzI1aC0uNDV2MS44aC40NXptLTguMS40NWgtLjl2OC4xaC45di0yLjdhMS44IDEuOCAwIDEgMSAzLjYgMHYyLjdoLjl2LTIuN2EyLjcwMSAyLjcwMSAwIDAgMC00LjUtMi4wMTF6bS00LjA1IDguMWMuNjkzIDAgMS4zMjMtLjI2IDEuOC0uNjg4di42ODhoLjl2LTIuN2EyLjcgMi43IDAgMSAwLTIuNyAyLjdtMC0uOWExLjggMS44IDAgMSAwIDAtMy42IDEuOCAxLjggMCAwIDAgMCAzLjZtMTEuNy45Yy42OTMgMCAxLjMyMy0uMjYgMS44LS42ODh2LjY4OGguOXYtMi43YTIuNyAyLjcgMCAxIDAtMi43IDIuN20wLS45YTEuOCAxLjggMCAxIDAgMC0zLjYgMS44IDEuOCAwIDAgMCAwIDMuNm0tMi43ODEtNi44NTgtLjM1NS4zNTYgMS40MTcgMS40MjIuMzYtLjM2ek0yMSA4Ljg1bC0uMzU1LS4zNTUtMS40MTggMS40MjIuMzU1LjM2eiIgY2xpcC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo=) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNBSFRfX2EpIj4KICAgICAgICA8cGF0aCBmaWxsPSIjMzBCRkJEIiBkPSJNMjQgMEgwdjI0aDI0eiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTE3LjIgOC4yaC0uNHYxLjZoLjR6bS03LjIuNGgtLjh2Ny4yaC44di0yLjRhMS42IDEuNiAwIDAgMSAzLjIgMHYyLjRoLjh2LTIuNGEyLjQgMi40IDAgMCAwLTQtMS43ODh6bS0zLjYgNy4yYy42MTYgMCAxLjE3Ni0uMjMyIDEuNi0uNjEydi42MTJoLjh2LTIuNGEyLjQgMi40IDAgMSAwLTIuNCAyLjRtMC0uOGExLjYgMS42IDAgMSAwIDAtMy4yIDEuNiAxLjYgMCAwIDAgMCAzLjJtMTAuNC44Yy42MTYgMCAxLjE3Ni0uMjMyIDEuNi0uNjEydi42MTJoLjh2LTIuNGEyLjQgMi40IDAgMSAwLTIuNCAyLjRtMC0uOGExLjYgMS42IDAgMSAwIDAtMy4yIDEuNiAxLjYgMCAwIDAgMCAzLjJtLTIuNDcyLTYuMDk2LS4zMTYuMzE2IDEuMjYgMS4yNjQuMzItLjMyek0yMCA5LjJsLS4zMTYtLjMxNi0xLjI2IDEuMjY0LjMxNi4zMnoiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgogICAgPC9nPgogICAgPGRlZnM+CiAgICAgICAgPGNsaXBQYXRoIGlkPSJBSFRfX2EiPgogICAgICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMCAwaDI0djI0SDB6Ii8+CiAgICAgICAgPC9jbGlwUGF0aD4KICAgIDwvZGVmcz4KPC9zdmc+Cg==)
 * @see https://web3icons.io/tokens/AHT
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenAHT = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenAHT', __iconNode);
;
}),
];

//# sourceMappingURL=1qqr_%40web3icons_react_dist_1j-ywvm._.js.map