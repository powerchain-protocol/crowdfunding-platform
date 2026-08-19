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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/networks/NetworkRari.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>NetworkRari
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-ssr] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#B16EFF',
                d: 'M3 8.758V6.333C3 5.597 3.768 5 4.714 5h3.117c.947 0 1.714.597 1.714 1.333v1.958c0 .338.173.661.48.9.639.497 1.675.497 2.314 0l4.886-3.8c.322-.25.758-.391 1.212-.391h.849C20.233 5 21 5.597 21 6.333v.66c0 .354-.18.693-.502.943l-4.886 3.8c-.64.497-.64 1.303 0 1.8a1.9 1.9 0 0 0 1.157.373h2.517c.947 0 1.714.597 1.714 1.333v2.425c0 .736-.767 1.333-1.714 1.333h-3.117c-.947 0-1.715-.597-1.715-1.333v-1.958c0-.338-.172-.661-.479-.9-.639-.497-1.675-.497-2.314 0l-4.886 3.8c-.322.25-.758.391-1.212.391h-.849C3.768 19 3 18.403 3 17.667v-.66c0-.354.18-.693.502-.943l4.886-3.8c.64-.497.64-1.303 0-1.8a1.9 1.9 0 0 0-1.157-.373H4.714C3.768 10.09 3 9.494 3 8.758'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M3 8.758V6.333C3 5.597 3.768 5 4.714 5h3.117c.947 0 1.714.597 1.714 1.333v1.958c0 .338.173.661.48.9.639.497 1.675.497 2.314 0l4.886-3.8c.322-.25.758-.391 1.212-.391h.849C20.233 5 21 5.597 21 6.333v.66c0 .354-.18.693-.502.943l-4.886 3.8c-.64.497-.64 1.303 0 1.8a1.9 1.9 0 0 0 1.157.373h2.517c.947 0 1.714.597 1.714 1.333v2.425c0 .736-.767 1.333-1.714 1.333h-3.117c-.947 0-1.715-.597-1.715-1.333v-1.958c0-.338-.172-.661-.479-.9-.639-.497-1.675-.497-2.314 0l-4.886 3.8c-.322.25-.758.391-1.212.391h-.849C3.768 19 3 18.403 3 17.667v-.66c0-.354.18-.693.502-.943l4.886-3.8c.64-.497.64-1.303 0-1.8a1.9 1.9 0 0 0-1.157-.373H4.714C3.768 10.09 3 9.494 3 8.758'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#rari__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#B16EFF',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M4 9.118V6.963c0-.655.682-1.185 1.524-1.185h2.77c.842 0 1.524.53 1.524 1.185v1.74c0 .3.153.588.426.8.568.442 1.49.442 2.057 0l4.344-3.378a1.77 1.77 0 0 1 1.077-.347h.754c.842 0 1.524.53 1.524 1.185v.586c0 .315-.16.616-.446.839l-4.344 3.378c-.568.441-.568 1.158 0 1.6a1.7 1.7 0 0 0 1.029.331h2.237c.842 0 1.524.53 1.524 1.185v2.155c0 .655-.682 1.185-1.524 1.185h-2.77c-.842 0-1.524-.53-1.524-1.185v-1.74c0-.3-.153-.588-.426-.8-.568-.442-1.49-.442-2.057 0l-4.344 3.378a1.77 1.77 0 0 1-1.077.347h-.754c-.842 0-1.524-.53-1.524-1.185v-.587c0-.314.16-.615.446-.838l4.344-3.378c.568-.442.568-1.158 0-1.6a1.7 1.7 0 0 0-1.029-.331H5.524C4.682 10.303 4 9.773 4 9.118'
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
                        id: 'rari__a'
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
 * @component @name NetworkRari
 * @description Web3Icon for NetworkRari
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNCMTZFRkYiIGQ9Ik0zIDguNzU4VjYuMzMzQzMgNS41OTcgMy43NjggNSA0LjcxNCA1aDMuMTE3Yy45NDcgMCAxLjcxNC41OTcgMS43MTQgMS4zMzN2MS45NThjMCAuMzM4LjE3My42NjEuNDguOS42MzkuNDk3IDEuNjc1LjQ5NyAyLjMxNCAwbDQuODg2LTMuOGMuMzIyLS4yNS43NTgtLjM5MSAxLjIxMi0uMzkxaC44NDlDMjAuMjMzIDUgMjEgNS41OTcgMjEgNi4zMzN2LjY2YzAgLjM1NC0uMTguNjkzLS41MDIuOTQzbC00Ljg4NiAzLjhjLS42NC40OTctLjY0IDEuMzAzIDAgMS44YTEuOSAxLjkgMCAwIDAgMS4xNTcuMzczaDIuNTE3Yy45NDcgMCAxLjcxNC41OTcgMS43MTQgMS4zMzN2Mi40MjVjMCAuNzM2LS43NjcgMS4zMzMtMS43MTQgMS4zMzNoLTMuMTE3Yy0uOTQ3IDAtMS43MTUtLjU5Ny0xLjcxNS0xLjMzM3YtMS45NThjMC0uMzM4LS4xNzItLjY2MS0uNDc5LS45LS42MzktLjQ5Ny0xLjY3NS0uNDk3LTIuMzE0IDBsLTQuODg2IDMuOGMtLjMyMi4yNS0uNzU4LjM5MS0xLjIxMi4zOTFoLS44NDlDMy43NjggMTkgMyAxOC40MDMgMyAxNy42Njd2LS42NmMwLS4zNTQuMTgtLjY5My41MDItLjk0M2w0Ljg4Ni0zLjhjLjY0LS40OTcuNjQtMS4zMDMgMC0xLjhhMS45IDEuOSAwIDAgMC0xLjE1Ny0uMzczSDQuNzE0QzMuNzY4IDEwLjA5IDMgOS40OTQgMyA4Ljc1OCIvPgo8L3N2Zz4K) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0zIDguNzU4VjYuMzMzQzMgNS41OTcgMy43NjggNSA0LjcxNCA1aDMuMTE3Yy45NDcgMCAxLjcxNC41OTcgMS43MTQgMS4zMzN2MS45NThjMCAuMzM4LjE3My42NjEuNDguOS42MzkuNDk3IDEuNjc1LjQ5NyAyLjMxNCAwbDQuODg2LTMuOGMuMzIyLS4yNS43NTgtLjM5MSAxLjIxMi0uMzkxaC44NDlDMjAuMjMzIDUgMjEgNS41OTcgMjEgNi4zMzN2LjY2YzAgLjM1NC0uMTguNjkzLS41MDIuOTQzbC00Ljg4NiAzLjhjLS42NC40OTctLjY0IDEuMzAzIDAgMS44YTEuOSAxLjkgMCAwIDAgMS4xNTcuMzczaDIuNTE3Yy45NDcgMCAxLjcxNC41OTcgMS43MTQgMS4zMzN2Mi40MjVjMCAuNzM2LS43NjcgMS4zMzMtMS43MTQgMS4zMzNoLTMuMTE3Yy0uOTQ3IDAtMS43MTUtLjU5Ny0xLjcxNS0xLjMzM3YtMS45NThjMC0uMzM4LS4xNzItLjY2MS0uNDc5LS45LS42MzktLjQ5Ny0xLjY3NS0uNDk3LTIuMzE0IDBsLTQuODg2IDMuOGMtLjMyMi4yNS0uNzU4LjM5MS0xLjIxMi4zOTFoLS44NDlDMy43NjggMTkgMyAxOC40MDMgMyAxNy42Njd2LS42NmMwLS4zNTQuMTgtLjY5My41MDItLjk0M2w0Ljg4Ni0zLjhjLjY0LS40OTcuNjQtMS4zMDMgMC0xLjhhMS45IDEuOSAwIDAgMC0xLjE1Ny0uMzczSDQuNzE0QzMuNzY4IDEwLjA5IDMgOS40OTQgMyA4Ljc1OCIvPgo8L3N2Zz4K) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNyYXJpX19hKSI+CiAgICAgICAgPHBhdGggZmlsbD0iI0IxNkVGRiIgZD0iTTI0IDBIMHYyNGgyNHoiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNNCA5LjExOFY2Ljk2M2MwLS42NTUuNjgyLTEuMTg1IDEuNTI0LTEuMTg1aDIuNzdjLjg0MiAwIDEuNTI0LjUzIDEuNTI0IDEuMTg1djEuNzRjMCAuMy4xNTMuNTg4LjQyNi44LjU2OC40NDIgMS40OS40NDIgMi4wNTcgMGw0LjM0NC0zLjM3OGExLjc3IDEuNzcgMCAwIDEgMS4wNzctLjM0N2guNzU0Yy44NDIgMCAxLjUyNC41MyAxLjUyNCAxLjE4NXYuNTg2YzAgLjMxNS0uMTYuNjE2LS40NDYuODM5bC00LjM0NCAzLjM3OGMtLjU2OC40NDEtLjU2OCAxLjE1OCAwIDEuNmExLjcgMS43IDAgMCAwIDEuMDI5LjMzMWgyLjIzN2MuODQyIDAgMS41MjQuNTMgMS41MjQgMS4xODV2Mi4xNTVjMCAuNjU1LS42ODIgMS4xODUtMS41MjQgMS4xODVoLTIuNzdjLS44NDIgMC0xLjUyNC0uNTMtMS41MjQtMS4xODV2LTEuNzRjMC0uMy0uMTUzLS41ODgtLjQyNi0uOC0uNTY4LS40NDItMS40OS0uNDQyLTIuMDU3IDBsLTQuMzQ0IDMuMzc4YTEuNzcgMS43NyAwIDAgMS0xLjA3Ny4zNDdoLS43NTRjLS44NDIgMC0xLjUyNC0uNTMtMS41MjQtMS4xODV2LS41ODdjMC0uMzE0LjE2LS42MTUuNDQ2LS44MzhsNC4zNDQtMy4zNzhjLjU2OC0uNDQyLjU2OC0xLjE1OCAwLTEuNmExLjcgMS43IDAgMCAwLTEuMDI5LS4zMzFINS41MjRDNC42ODIgMTAuMzAzIDQgOS43NzMgNCA5LjExOCIvPgogICAgPC9nPgogICAgPGRlZnM+CiAgICAgICAgPGNsaXBQYXRoIGlkPSJyYXJpX19hIj4KICAgICAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTAgMGgyNHYyNEgweiIvPgogICAgICAgIDwvY2xpcFBhdGg+CiAgICA8L2RlZnM+Cjwvc3ZnPgo=)
 * @see https://web3icons.io/networks/rari
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const NetworkRari = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createWeb3Icon"])('NetworkRari', __iconNode);
;
}),
];

//# sourceMappingURL=1qqr_%40web3icons_react_dist_1boav14._.js.map