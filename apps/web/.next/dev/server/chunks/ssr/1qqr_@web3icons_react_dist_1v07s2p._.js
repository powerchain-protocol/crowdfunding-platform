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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenCMDX.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenCMDX
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-ssr] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#FF424E',
                d: 'M7.2 4.158V6.3h1.794V5.1h8.808l-1.938 1.8H3.852c-.48 0-.852.282-.852.756v12.18c0 .48.372.864.852.864H16.41l4.344-4.002c.51-.468.174-1.398-.528-1.398H8.994v-6h-1.8v6.948c0 .48.204.852.684.852H17.88l-2.034 1.8H4.8V8.7h11.61l4.344-4.08c.51-.468.174-1.32-.528-1.32H7.878c-.48 0-.684.384-.684.858z'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M7.2 4.158V6.3h1.794V5.1h8.808l-1.938 1.8H3.852c-.48 0-.852.282-.852.756v12.18c0 .48.372.864.852.864H16.41l4.344-4.002c.51-.468.174-1.398-.528-1.398H8.994v-6h-1.8v6.948c0 .48.204.852.684.852H17.88l-2.034 1.8H4.8V8.7h11.61l4.344-4.08c.51-.468.174-1.32-.528-1.32H7.878c-.48 0-.684.384-.684.858z'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#CMDX__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#FF424E',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M7.733 5.03v1.903h1.595V5.867h7.83l-1.723 1.6H4.757c-.426 0-.757.25-.757.672v10.827c0 .426.33.767.757.767H15.92l3.862-3.557c.453-.416.154-1.243-.47-1.243H9.328V9.6h-1.6v6.176c0 .427.181.757.608.757h8.89l-1.807 1.6H5.6V9.067h10.32l3.862-3.627c.453-.416.154-1.173-.47-1.173H8.336c-.427 0-.608.34-.608.762z'
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
                        id: 'CMDX__a'
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
 * @component @name TokenCMDX
 * @description Web3Icon for TokenCMDX
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNGRjQyNEUiIGQ9Ik03LjIgNC4xNThWNi4zaDEuNzk0VjUuMWg4LjgwOGwtMS45MzggMS44SDMuODUyYy0uNDggMC0uODUyLjI4Mi0uODUyLjc1NnYxMi4xOGMwIC40OC4zNzIuODY0Ljg1Mi44NjRIMTYuNDFsNC4zNDQtNC4wMDJjLjUxLS40NjguMTc0LTEuMzk4LS41MjgtMS4zOThIOC45OTR2LTZoLTEuOHY2Ljk0OGMwIC40OC4yMDQuODUyLjY4NC44NTJIMTcuODhsLTIuMDM0IDEuOEg0LjhWOC43aDExLjYxbDQuMzQ0LTQuMDhjLjUxLS40NjguMTc0LTEuMzItLjUyOC0xLjMySDcuODc4Yy0uNDggMC0uNjg0LjM4NC0uNjg0Ljg1OHoiLz4KPC9zdmc+Cg==) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik03LjIgNC4xNThWNi4zaDEuNzk0VjUuMWg4LjgwOGwtMS45MzggMS44SDMuODUyYy0uNDggMC0uODUyLjI4Mi0uODUyLjc1NnYxMi4xOGMwIC40OC4zNzIuODY0Ljg1Mi44NjRIMTYuNDFsNC4zNDQtNC4wMDJjLjUxLS40NjguMTc0LTEuMzk4LS41MjgtMS4zOThIOC45OTR2LTZoLTEuOHY2Ljk0OGMwIC40OC4yMDQuODUyLjY4NC44NTJIMTcuODhsLTIuMDM0IDEuOEg0LjhWOC43aDExLjYxbDQuMzQ0LTQuMDhjLjUxLS40NjguMTc0LTEuMzItLjUyOC0xLjMySDcuODc4Yy0uNDggMC0uNjg0LjM4NC0uNjg0Ljg1OHoiLz4KPC9zdmc+Cg==) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNDTURYX19hKSI+CiAgICAgICAgPHBhdGggZmlsbD0iI0ZGNDI0RSIgZD0iTTI0IDBIMHYyNGgyNHoiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNNy43MzMgNS4wM3YxLjkwM2gxLjU5NVY1Ljg2N2g3LjgzbC0xLjcyMyAxLjZINC43NTdjLS40MjYgMC0uNzU3LjI1LS43NTcuNjcydjEwLjgyN2MwIC40MjYuMzMuNzY3Ljc1Ny43NjdIMTUuOTJsMy44NjItMy41NTdjLjQ1My0uNDE2LjE1NC0xLjI0My0uNDctMS4yNDNIOS4zMjhWOS42aC0xLjZ2Ni4xNzZjMCAuNDI3LjE4MS43NTcuNjA4Ljc1N2g4Ljg5bC0xLjgwNyAxLjZINS42VjkuMDY3aDEwLjMybDMuODYyLTMuNjI3Yy40NTMtLjQxNi4xNTQtMS4xNzMtLjQ3LTEuMTczSDguMzM2Yy0uNDI3IDAtLjYwOC4zNC0uNjA4Ljc2MnoiLz4KICAgIDwvZz4KICAgIDxkZWZzPgogICAgICAgIDxjbGlwUGF0aCBpZD0iQ01EWF9fYSI+CiAgICAgICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0wIDBoMjR2MjRIMHoiLz4KICAgICAgICA8L2NsaXBQYXRoPgogICAgPC9kZWZzPgo8L3N2Zz4K)
 * @see https://web3icons.io/tokens/CMDX
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenCMDX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenCMDX', __iconNode);
;
}),
];

//# sourceMappingURL=1qqr_%40web3icons_react_dist_1v07s2p._.js.map