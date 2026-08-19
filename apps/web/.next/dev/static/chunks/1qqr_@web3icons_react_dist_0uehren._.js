(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createWeb3Icon",
    ()=>createWeb3Icon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$types$2b$node$40$24$2e$13$2e$3_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.1_@types+node@24.13.3_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$BaseIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/BaseIcon.js [app-client] (ecmascript)");
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
    const Component = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$types$2b$node$40$24$2e$13$2e$3_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(({ variant = defaultVariant, fallback, ...props }, ref)=>{
        const iconData = variants[variant];
        if (!iconData) {
            console.warn(`Icon "${name}" does not have variant "${variant}". ` + `Available variants: ${availableVariants.join(', ')}`);
            return null;
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$types$2b$node$40$24$2e$13$2e$3_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$BaseIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseIcon"], {
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
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$types$2b$node$40$24$2e$13$2e$3_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(element, elementProps, childElements);
    });
}
;
}),
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenCNG.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenCNG
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-client] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#0FF',
                d: 'M13.687 5.734v5.703l2.25-1.406V4.125zm3.297 5.282-3.859 2.109 2.812 1.688L21 11.881l-1.553-.9a2.41 2.41 0 0 0-2.463.034m-1.047 5.765-4.5-3.093v3.093l4.5 3.094zm-5.624.13v-4.349l-2.25 1.126v6.187l1.22-.85c.726-.472 1.03-1.226 1.03-2.114m.753-6.115-2.79-1.609L3 12.4l2.48 1.61zm1.496-3.352L7.5 4.125v2.081c0 .698.366 1.345.956 1.688l4.107 2.447z'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M13.687 5.734v5.703l2.25-1.406V4.125zm3.297 5.282-3.859 2.109 2.812 1.688L21 11.881l-1.553-.9a2.41 2.41 0 0 0-2.463.034m-1.047 5.765-4.5-3.094v3.094l4.5 3.094zm-5.624.13v-4.349l-2.25 1.125v6.188l1.22-.85c.726-.472 1.03-1.226 1.03-2.114m.753-6.115-2.79-1.609L3 12.4l2.48 1.61zm1.496-3.352L7.5 4.125v2.081c0 .698.366 1.345.956 1.688l4.107 2.447z'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#CNG__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#0FF',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M13.5 6.43v5.07l2-1.25V5zm2.93 4.695L13 13l2.5 1.5 4.5-2.605-1.38-.8a2.14 2.14 0 0 0-2.19.03m-.93 5.125-4-2.75v2.75l4 2.75zm-5 .115V12.5l-2 1V19l1.085-.755c.645-.42.915-1.09.915-1.88m.67-5.435L8.69 9.5 4 12.355l2.205 1.43zm1.33-2.98L8 5v1.85c0 .62.325 1.195.85 1.5l3.65 2.175z'
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
                        id: 'CNG__a'
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
 * @component @name TokenCNG
 * @description Web3Icon for TokenCNG
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiMwRkYiIGQ9Ik0xMy42ODcgNS43MzR2NS43MDNsMi4yNS0xLjQwNlY0LjEyNXptMy4yOTcgNS4yODItMy44NTkgMi4xMDkgMi44MTIgMS42ODhMMjEgMTEuODgxbC0xLjU1My0uOWEyLjQxIDIuNDEgMCAwIDAtMi40NjMuMDM0bS0xLjA0NyA1Ljc2NS00LjUtMy4wOTN2My4wOTNsNC41IDMuMDk0em0tNS42MjQuMTN2LTQuMzQ5bC0yLjI1IDEuMTI2djYuMTg3bDEuMjItLjg1Yy43MjYtLjQ3MiAxLjAzLTEuMjI2IDEuMDMtMi4xMTRtLjc1My02LjExNS0yLjc5LTEuNjA5TDMgMTIuNGwyLjQ4IDEuNjF6bTEuNDk2LTMuMzUyTDcuNSA0LjEyNXYyLjA4MWMwIC42OTguMzY2IDEuMzQ1Ljk1NiAxLjY4OGw0LjEwNyAyLjQ0N3oiLz4KPC9zdmc+Cg==) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xMy42ODcgNS43MzR2NS43MDNsMi4yNS0xLjQwNlY0LjEyNXptMy4yOTcgNS4yODItMy44NTkgMi4xMDkgMi44MTIgMS42ODhMMjEgMTEuODgxbC0xLjU1My0uOWEyLjQxIDIuNDEgMCAwIDAtMi40NjMuMDM0bS0xLjA0NyA1Ljc2NS00LjUtMy4wOTR2My4wOTRsNC41IDMuMDk0em0tNS42MjQuMTN2LTQuMzQ5bC0yLjI1IDEuMTI1djYuMTg4bDEuMjItLjg1Yy43MjYtLjQ3MiAxLjAzLTEuMjI2IDEuMDMtMi4xMTRtLjc1My02LjExNS0yLjc5LTEuNjA5TDMgMTIuNGwyLjQ4IDEuNjF6bTEuNDk2LTMuMzUyTDcuNSA0LjEyNXYyLjA4MWMwIC42OTguMzY2IDEuMzQ1Ljk1NiAxLjY4OGw0LjEwNyAyLjQ0N3oiLz4KPC9zdmc+Cg==) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNDTkdfX2EpIj4KICAgICAgICA8cGF0aCBmaWxsPSIjMEZGIiBkPSJNMjQgMEgwdjI0aDI0eiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xMy41IDYuNDN2NS4wN2wyLTEuMjVWNXptMi45MyA0LjY5NUwxMyAxM2wyLjUgMS41IDQuNS0yLjYwNS0xLjM4LS44YTIuMTQgMi4xNCAwIDAgMC0yLjE5LjAzbS0uOTMgNS4xMjUtNC0yLjc1djIuNzVsNCAyLjc1em0tNSAuMTE1VjEyLjVsLTIgMVYxOWwxLjA4NS0uNzU1Yy42NDUtLjQyLjkxNS0xLjA5LjkxNS0xLjg4bS42Ny01LjQzNUw4LjY5IDkuNSA0IDEyLjM1NWwyLjIwNSAxLjQzem0xLjMzLTIuOThMOCA1djEuODVjMCAuNjIuMzI1IDEuMTk1Ljg1IDEuNWwzLjY1IDIuMTc1eiIvPgogICAgPC9nPgogICAgPGRlZnM+CiAgICAgICAgPGNsaXBQYXRoIGlkPSJDTkdfX2EiPgogICAgICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMCAwaDI0djI0SDB6Ii8+CiAgICAgICAgPC9jbGlwUGF0aD4KICAgIDwvZGVmcz4KPC9zdmc+Cg==)
 * @see https://web3icons.io/tokens/CNG
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenCNG = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenCNG', __iconNode);
;
}),
]);

//# sourceMappingURL=1qqr_%40web3icons_react_dist_0uehren._.js.map