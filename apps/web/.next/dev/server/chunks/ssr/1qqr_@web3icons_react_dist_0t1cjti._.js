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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenCARD.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenCARD
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-ssr] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#00EBE5',
                d: 'm16.78 18.612 3.69-1.847-13.235-6.607L3.54 12l13.235 6.612zM12 21l3.705-1.848-8.47-4.235-3.68 1.848zm8.46-9-3.696 1.842L13.08 12l3.69-1.842z'
            }
        ],
        [
            'path',
            {
                fill: '#37EB77',
                d: 'M8.3 4.853 12.006 3l3.7 1.853L12 6.695 8.3 4.848zm-1.08.535L3.53 7.235l8.47 4.23 3.69-1.842-8.47-4.23zm9.545 3.7 3.7-1.853-3.69-1.837-3.705 1.848z'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'm16.78 18.612 3.69-1.847-13.235-6.607L3.54 12l13.235 6.612zM12 21l3.706-1.848-8.47-4.235-3.68 1.848zm8.46-9-3.695 1.842L13.08 12l3.69-1.842zM8.3 4.853 12.004 3l3.7 1.853L12 6.695 8.3 4.848zm-1.08.535L3.53 7.235l8.47 4.23 3.69-1.842-8.47-4.23zm9.545 3.7 3.7-1.853-3.69-1.837-3.706 1.848z'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#CARD__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#37EB77',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'm16.25 17.878 3.28-1.643-11.765-5.873L4.48 12l11.765 5.878zM12 20l3.294-1.642-7.53-3.765-3.27 1.642zm7.52-8-3.285 1.638L12.96 12l3.28-1.638zM8.71 5.647 12.006 4l3.289 1.647L12 7.285 8.71 5.642zm-.96.475L4.47 7.765l7.53 3.76 3.28-1.638-7.53-3.76zm8.485 3.29 3.29-1.647-3.28-1.633-3.294 1.642z'
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
                        id: 'CARD__a'
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
 * @component @name TokenCARD
 * @description Web3Icon for TokenCARD
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiMwMEVCRTUiIGQ9Im0xNi43OCAxOC42MTIgMy42OS0xLjg0Ny0xMy4yMzUtNi42MDdMMy41NCAxMmwxMy4yMzUgNi42MTJ6TTEyIDIxbDMuNzA1LTEuODQ4LTguNDctNC4yMzUtMy42OCAxLjg0OHptOC40Ni05LTMuNjk2IDEuODQyTDEzLjA4IDEybDMuNjktMS44NDJ6Ii8+CiAgICA8cGF0aCBmaWxsPSIjMzdFQjc3IiBkPSJNOC4zIDQuODUzIDEyLjAwNiAzbDMuNyAxLjg1M0wxMiA2LjY5NSA4LjMgNC44NDh6bS0xLjA4LjUzNUwzLjUzIDcuMjM1bDguNDcgNC4yMyAzLjY5LTEuODQyLTguNDctNC4yM3ptOS41NDUgMy43IDMuNy0xLjg1My0zLjY5LTEuODM3LTMuNzA1IDEuODQ4eiIvPgo8L3N2Zz4K) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Im0xNi43OCAxOC42MTIgMy42OS0xLjg0Ny0xMy4yMzUtNi42MDdMMy41NCAxMmwxMy4yMzUgNi42MTJ6TTEyIDIxbDMuNzA2LTEuODQ4LTguNDctNC4yMzUtMy42OCAxLjg0OHptOC40Ni05LTMuNjk1IDEuODQyTDEzLjA4IDEybDMuNjktMS44NDJ6TTguMyA0Ljg1MyAxMi4wMDQgM2wzLjcgMS44NTNMMTIgNi42OTUgOC4zIDQuODQ4em0tMS4wOC41MzVMMy41MyA3LjIzNWw4LjQ3IDQuMjMgMy42OS0xLjg0Mi04LjQ3LTQuMjN6bTkuNTQ1IDMuNyAzLjctMS44NTMtMy42OS0xLjgzNy0zLjcwNiAxLjg0OHoiLz4KPC9zdmc+Cg==) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNDQVJEX19hKSI+CiAgICAgICAgPHBhdGggZmlsbD0iIzM3RUI3NyIgZD0iTTI0IDBIMHYyNGgyNHoiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJtMTYuMjUgMTcuODc4IDMuMjgtMS42NDMtMTEuNzY1LTUuODczTDQuNDggMTJsMTEuNzY1IDUuODc4ek0xMiAyMGwzLjI5NC0xLjY0Mi03LjUzLTMuNzY1LTMuMjcgMS42NDJ6bTcuNTItOC0zLjI4NSAxLjYzOEwxMi45NiAxMmwzLjI4LTEuNjM4ek04LjcxIDUuNjQ3IDEyLjAwNiA0bDMuMjg5IDEuNjQ3TDEyIDcuMjg1IDguNzEgNS42NDJ6bS0uOTYuNDc1TDQuNDcgNy43NjVsNy41MyAzLjc2IDMuMjgtMS42MzgtNy41My0zLjc2em04LjQ4NSAzLjI5IDMuMjktMS42NDctMy4yOC0xLjYzMy0zLjI5NCAxLjY0MnoiLz4KICAgIDwvZz4KICAgIDxkZWZzPgogICAgICAgIDxjbGlwUGF0aCBpZD0iQ0FSRF9fYSI+CiAgICAgICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0wIDBoMjR2MjRIMHoiLz4KICAgICAgICA8L2NsaXBQYXRoPgogICAgPC9kZWZzPgo8L3N2Zz4K)
 * @see https://web3icons.io/tokens/CARD
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenCARD = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenCARD', __iconNode);
;
}),
];

//# sourceMappingURL=1qqr_%40web3icons_react_dist_0t1cjti._.js.map