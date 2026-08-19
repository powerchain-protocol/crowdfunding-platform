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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenABL.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenABL
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-ssr] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#fff',
                d: 'M12.844 6.377h-1.688L6.375 17.624h1.687l1.308-2.811h5.214l1.353 2.811h1.688zm1.098 6.749h-3.928L12 8.626z'
            }
        ],
        [
            'path',
            {
                fill: '#fff',
                d: 'M20.438 17.96c-1.164.221-2.241 1.307-2.461 2.477H6.023c-.22-1.17-1.297-2.255-2.46-2.477V6.04c1.163-.221 2.24-1.307 2.46-2.477h11.954c.22 1.17 1.297 2.255 2.46 2.477zm.38-12.595a2.177 2.177 0 0 1-2.17-2.182.183.183 0 0 0-.181-.183H5.534a.183.183 0 0 0-.183.183 2.18 2.18 0 0 1-2.168 2.182.183.183 0 0 0-.183.183v12.904c0 .101.082.184.183.184 1.196 0 2.168.978 2.168 2.18 0 .102.082.184.183.184h12.932a.183.183 0 0 0 .183-.183c0-1.203.973-2.181 2.168-2.181a.183.183 0 0 0 .183-.184V5.548a.2.2 0 0 0-.053-.13.18.18 0 0 0-.13-.053'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M12.844 6.377h-1.688L6.375 17.624h1.687l1.308-2.811h5.214l1.353 2.811h1.688zm1.098 6.749h-3.928L12 8.626z'
            }
        ],
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M20.438 17.96c-1.164.221-2.241 1.307-2.461 2.477H6.023c-.22-1.17-1.297-2.255-2.46-2.477V6.04c1.163-.221 2.24-1.307 2.46-2.477h11.954c.22 1.17 1.297 2.255 2.46 2.477zm.38-12.595a2.177 2.177 0 0 1-2.17-2.182.183.183 0 0 0-.181-.183H5.534a.183.183 0 0 0-.183.183 2.18 2.18 0 0 1-2.168 2.182.183.183 0 0 0-.183.183v12.904c0 .101.082.184.183.184 1.196 0 2.168.978 2.168 2.18 0 .102.082.184.183.184h12.932a.183.183 0 0 0 .183-.183c0-1.203.973-2.181 2.168-2.181a.183.183 0 0 0 .183-.184V5.548a.2.2 0 0 0-.053-.13.18.18 0 0 0-.13-.053'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#ABL__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#000',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M12.75 7.002h-1.5L7 17h1.5l1.162-2.5h4.635L15.5 17H17zM13.726 13h-3.491L12 9z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M19.5 17.298c-1.035.196-1.991 1.161-2.187 2.202H6.687c-.196-1.04-1.153-2.005-2.187-2.203V6.704C5.534 6.505 6.491 5.54 6.687 4.5h10.625c.196 1.04 1.153 2.005 2.188 2.202zm.337-11.196a1.935 1.935 0 0 1-1.927-1.939.16.16 0 0 0-.162-.163H6.252a.16.16 0 0 0-.162.163 1.936 1.936 0 0 1-1.928 1.939.16.16 0 0 0-.162.163v11.47c0 .09.072.163.162.163 1.064 0 1.928.87 1.928 1.939 0 .09.072.163.162.163h11.495c.09 0 .163-.073.163-.163 0-1.07.865-1.939 1.927-1.939.09 0 .163-.072.163-.163V6.265a.17.17 0 0 0-.047-.115.16.16 0 0 0-.116-.048'
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
                        id: 'ABL__a'
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
 * @component @name TokenABL
 * @description Web3Icon for TokenABL
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xMi44NDQgNi4zNzdoLTEuNjg4TDYuMzc1IDE3LjYyNGgxLjY4N2wxLjMwOC0yLjgxMWg1LjIxNGwxLjM1MyAyLjgxMWgxLjY4OHptMS4wOTggNi43NDloLTMuOTI4TDEyIDguNjI2eiIvPgogICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTIwLjQzOCAxNy45NmMtMS4xNjQuMjIxLTIuMjQxIDEuMzA3LTIuNDYxIDIuNDc3SDYuMDIzYy0uMjItMS4xNy0xLjI5Ny0yLjI1NS0yLjQ2LTIuNDc3VjYuMDRjMS4xNjMtLjIyMSAyLjI0LTEuMzA3IDIuNDYtMi40NzdoMTEuOTU0Yy4yMiAxLjE3IDEuMjk3IDIuMjU1IDIuNDYgMi40Nzd6bS4zOC0xMi41OTVhMi4xNzcgMi4xNzcgMCAwIDEtMi4xNy0yLjE4Mi4xODMuMTgzIDAgMCAwLS4xODEtLjE4M0g1LjUzNGEuMTgzLjE4MyAwIDAgMC0uMTgzLjE4MyAyLjE4IDIuMTggMCAwIDEtMi4xNjggMi4xODIuMTgzLjE4MyAwIDAgMC0uMTgzLjE4M3YxMi45MDRjMCAuMTAxLjA4Mi4xODQuMTgzLjE4NCAxLjE5NiAwIDIuMTY4Ljk3OCAyLjE2OCAyLjE4IDAgLjEwMi4wODIuMTg0LjE4My4xODRoMTIuOTMyYS4xODMuMTgzIDAgMCAwIC4xODMtLjE4M2MwLTEuMjAzLjk3My0yLjE4MSAyLjE2OC0yLjE4MWEuMTgzLjE4MyAwIDAgMCAuMTgzLS4xODRWNS41NDhhLjIuMiAwIDAgMC0uMDUzLS4xMy4xOC4xOCAwIDAgMC0uMTMtLjA1MyIvPgo8L3N2Zz4K) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xMi44NDQgNi4zNzdoLTEuNjg4TDYuMzc1IDE3LjYyNGgxLjY4N2wxLjMwOC0yLjgxMWg1LjIxNGwxLjM1MyAyLjgxMWgxLjY4OHptMS4wOTggNi43NDloLTMuOTI4TDEyIDguNjI2eiIvPgogICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTIwLjQzOCAxNy45NmMtMS4xNjQuMjIxLTIuMjQxIDEuMzA3LTIuNDYxIDIuNDc3SDYuMDIzYy0uMjItMS4xNy0xLjI5Ny0yLjI1NS0yLjQ2LTIuNDc3VjYuMDRjMS4xNjMtLjIyMSAyLjI0LTEuMzA3IDIuNDYtMi40NzdoMTEuOTU0Yy4yMiAxLjE3IDEuMjk3IDIuMjU1IDIuNDYgMi40Nzd6bS4zOC0xMi41OTVhMi4xNzcgMi4xNzcgMCAwIDEtMi4xNy0yLjE4Mi4xODMuMTgzIDAgMCAwLS4xODEtLjE4M0g1LjUzNGEuMTgzLjE4MyAwIDAgMC0uMTgzLjE4MyAyLjE4IDIuMTggMCAwIDEtMi4xNjggMi4xODIuMTgzLjE4MyAwIDAgMC0uMTgzLjE4M3YxMi45MDRjMCAuMTAxLjA4Mi4xODQuMTgzLjE4NCAxLjE5NiAwIDIuMTY4Ljk3OCAyLjE2OCAyLjE4IDAgLjEwMi4wODIuMTg0LjE4My4xODRoMTIuOTMyYS4xODMuMTgzIDAgMCAwIC4xODMtLjE4M2MwLTEuMjAzLjk3My0yLjE4MSAyLjE2OC0yLjE4MWEuMTgzLjE4MyAwIDAgMCAuMTgzLS4xODRWNS41NDhhLjIuMiAwIDAgMC0uMDUzLS4xMy4xOC4xOCAwIDAgMC0uMTMtLjA1MyIvPgo8L3N2Zz4K) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNBQkxfX2EpIj4KICAgICAgICA8cGF0aCBmaWxsPSIjMDAwIiBkPSJNMjQgMEgwdjI0aDI0eiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xMi43NSA3LjAwMmgtMS41TDcgMTdoMS41bDEuMTYyLTIuNWg0LjYzNUwxNS41IDE3SDE3ek0xMy43MjYgMTNoLTMuNDkxTDEyIDl6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTE5LjUgMTcuMjk4Yy0xLjAzNS4xOTYtMS45OTEgMS4xNjEtMi4xODcgMi4yMDJINi42ODdjLS4xOTYtMS4wNC0xLjE1My0yLjAwNS0yLjE4Ny0yLjIwM1Y2LjcwNEM1LjUzNCA2LjUwNSA2LjQ5MSA1LjU0IDYuNjg3IDQuNWgxMC42MjVjLjE5NiAxLjA0IDEuMTUzIDIuMDA1IDIuMTg4IDIuMjAyem0uMzM3LTExLjE5NmExLjkzNSAxLjkzNSAwIDAgMS0xLjkyNy0xLjkzOS4xNi4xNiAwIDAgMC0uMTYyLS4xNjNINi4yNTJhLjE2LjE2IDAgMCAwLS4xNjIuMTYzIDEuOTM2IDEuOTM2IDAgMCAxLTEuOTI4IDEuOTM5LjE2LjE2IDAgMCAwLS4xNjIuMTYzdjExLjQ3YzAgLjA5LjA3Mi4xNjMuMTYyLjE2MyAxLjA2NCAwIDEuOTI4Ljg3IDEuOTI4IDEuOTM5IDAgLjA5LjA3Mi4xNjMuMTYyLjE2M2gxMS40OTVjLjA5IDAgLjE2My0uMDczLjE2My0uMTYzIDAtMS4wNy44NjUtMS45MzkgMS45MjctMS45MzkuMDkgMCAuMTYzLS4wNzIuMTYzLS4xNjNWNi4yNjVhLjE3LjE3IDAgMCAwLS4wNDctLjExNS4xNi4xNiAwIDAgMC0uMTE2LS4wNDgiLz4KICAgIDwvZz4KICAgIDxkZWZzPgogICAgICAgIDxjbGlwUGF0aCBpZD0iQUJMX19hIj4KICAgICAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTAgMGgyNHYyNEgweiIvPgogICAgICAgIDwvY2xpcFBhdGg+CiAgICA8L2RlZnM+Cjwvc3ZnPgo=)
 * @see https://web3icons.io/tokens/ABL
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenABL = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenABL', __iconNode);
;
}),
];

//# sourceMappingURL=1qqr_%40web3icons_react_dist_0ovehnn._.js.map