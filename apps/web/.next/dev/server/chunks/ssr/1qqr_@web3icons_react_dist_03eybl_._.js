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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/networks/NetworkBlastSepolia.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>NetworkBlastSepolia
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-ssr] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#FCFC03',
                d: 'm17.183 11.894 2.838-1.415L21 7.476l-1.957-1.424H6.013L3 8.29h15.316l-.813 2.518H11.36l-.591 1.841h6.142l-1.725 5.3 2.878-1.425 1.026-3.177-1.927-1.415z'
            }
        ],
        [
            'path',
            {
                fill: '#FCFC03',
                d: 'm7.33 15.67 1.774-5.521-1.967-1.473-2.955 9.271h11.005l.737-2.276z'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'm17.183 11.894 2.838-1.415L21 7.476l-1.957-1.424H6.013L3 8.29h15.316l-.813 2.518H11.36l-.591 1.841h6.142l-1.725 5.3 2.878-1.425 1.026-3.177-1.927-1.415z'
            }
        ],
        [
            'path',
            {
                fill: 'currentColor',
                d: 'm7.33 15.67 1.774-5.521-1.967-1.473-2.955 9.271h11.005l.737-2.276z'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#blast__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#FCFC03',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'm16.607 11.905 2.523-1.257.87-2.67-1.74-1.265H6.679L4 8.702h13.615l-.724 2.239h-5.46l-.525 1.636h5.46l-1.533 4.71 2.558-1.265.913-2.825-1.714-1.257z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'm7.85 15.263 1.575-4.909-1.748-1.309-2.626 8.242h9.782l.655-2.024z'
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
                        id: 'blast__a'
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
 * @component @name NetworkBlastSepolia
 * @description Web3Icon for NetworkBlastSepolia
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNGQ0ZDMDMiIGQ9Im0xNy4xODMgMTEuODk0IDIuODM4LTEuNDE1TDIxIDcuNDc2bC0xLjk1Ny0xLjQyNEg2LjAxM0wzIDguMjloMTUuMzE2bC0uODEzIDIuNTE4SDExLjM2bC0uNTkxIDEuODQxaDYuMTQybC0xLjcyNSA1LjMgMi44NzgtMS40MjUgMS4wMjYtMy4xNzctMS45MjctMS40MTV6Ii8+CiAgICA8cGF0aCBmaWxsPSIjRkNGQzAzIiBkPSJtNy4zMyAxNS42NyAxLjc3NC01LjUyMS0xLjk2Ny0xLjQ3My0yLjk1NSA5LjI3MWgxMS4wMDVsLjczNy0yLjI3NnoiLz4KPC9zdmc+Cg==) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Im0xNy4xODMgMTEuODk0IDIuODM4LTEuNDE1TDIxIDcuNDc2bC0xLjk1Ny0xLjQyNEg2LjAxM0wzIDguMjloMTUuMzE2bC0uODEzIDIuNTE4SDExLjM2bC0uNTkxIDEuODQxaDYuMTQybC0xLjcyNSA1LjMgMi44NzgtMS40MjUgMS4wMjYtMy4xNzctMS45MjctMS40MTV6Ii8+CiAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJtNy4zMyAxNS42NyAxLjc3NC01LjUyMS0xLjk2Ny0xLjQ3My0yLjk1NSA5LjI3MWgxMS4wMDVsLjczNy0yLjI3NnoiLz4KPC9zdmc+Cg==) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNibGFzdF9fYSkiPgogICAgICAgIDxwYXRoIGZpbGw9IiNGQ0ZDMDMiIGQ9Ik0yNCAwSDB2MjRoMjR6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0ibTE2LjYwNyAxMS45MDUgMi41MjMtMS4yNTcuODctMi42Ny0xLjc0LTEuMjY1SDYuNjc5TDQgOC43MDJoMTMuNjE1bC0uNzI0IDIuMjM5aC01LjQ2bC0uNTI1IDEuNjM2aDUuNDZsLTEuNTMzIDQuNzEgMi41NTgtMS4yNjUuOTEzLTIuODI1LTEuNzE0LTEuMjU3eiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Im03Ljg1IDE1LjI2MyAxLjU3NS00LjkwOS0xLjc0OC0xLjMwOS0yLjYyNiA4LjI0Mmg5Ljc4MmwuNjU1LTIuMDI0eiIvPgogICAgPC9nPgogICAgPGRlZnM+CiAgICAgICAgPGNsaXBQYXRoIGlkPSJibGFzdF9fYSI+CiAgICAgICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0wIDBoMjR2MjRIMHoiLz4KICAgICAgICA8L2NsaXBQYXRoPgogICAgPC9kZWZzPgo8L3N2Zz4K)
 * @see https://web3icons.io/networks/blast-sepolia
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const NetworkBlastSepolia = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createWeb3Icon"])('NetworkBlastSepolia', __iconNode);
;
}),
];

//# sourceMappingURL=1qqr_%40web3icons_react_dist_03eybl_._.js.map