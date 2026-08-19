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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenSFP.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenSFP
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-ssr] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#4B21EF',
                d: 'M9.43 3.61a2.06 2.06 0 0 1 1.462-.607h10.105L16.667 7.5H8.29c-.529 0-.788.26-.788.788v7.057l-4.155-3.987a1.18 1.18 0 0 1 0-1.67zm6.281 12.89H7.333l-4.33 4.498h10.105c.55 0 1.068-.22 1.462-.607l6.084-6.079a1.18 1.18 0 0 0 0-1.67L16.5 8.654v7.057c0 .529-.26.788-.788.788'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M9.43 3.61a2.06 2.06 0 0 1 1.462-.607h10.105L16.667 7.5H8.29c-.529 0-.788.26-.788.788v7.057l-4.155-3.987a1.18 1.18 0 0 1 0-1.67zm6.281 12.89H7.333l-4.33 4.498h10.105c.55 0 1.068-.22 1.462-.607l6.084-6.079a1.18 1.18 0 0 0 0-1.67L16.5 8.654v7.057c0 .529-.26.788-.788.788'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#SFP__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#4B21EF',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M9.716 4.542a1.83 1.83 0 0 1 1.3-.54h8.981l-3.848 4H8.7c-.47 0-.7.23-.7.699v6.273L4.307 11.43a1.05 1.05 0 0 1 0-1.484zM15.299 16H7.85l-3.848 3.998h8.982c.49 0 .95-.195 1.3-.54l5.408-5.403a1.047 1.047 0 0 0 0-1.484l-3.694-3.544V15.3c0 .47-.23.7-.7.7'
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
                        id: 'SFP__a'
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
 * @component @name TokenSFP
 * @description Web3Icon for TokenSFP
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiM0QjIxRUYiIGQ9Ik05LjQzIDMuNjFhMi4wNiAyLjA2IDAgMCAxIDEuNDYyLS42MDdoMTAuMTA1TDE2LjY2NyA3LjVIOC4yOWMtLjUyOSAwLS43ODguMjYtLjc4OC43ODh2Ny4wNTdsLTQuMTU1LTMuOTg3YTEuMTggMS4xOCAwIDAgMSAwLTEuNjd6bTYuMjgxIDEyLjg5SDcuMzMzbC00LjMzIDQuNDk4aDEwLjEwNWMuNTUgMCAxLjA2OC0uMjIgMS40NjItLjYwN2w2LjA4NC02LjA3OWExLjE4IDEuMTggMCAwIDAgMC0xLjY3TDE2LjUgOC42NTR2Ny4wNTdjMCAuNTI5LS4yNi43ODgtLjc4OC43ODgiLz4KPC9zdmc+Cg==) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik05LjQzIDMuNjFhMi4wNiAyLjA2IDAgMCAxIDEuNDYyLS42MDdoMTAuMTA1TDE2LjY2NyA3LjVIOC4yOWMtLjUyOSAwLS43ODguMjYtLjc4OC43ODh2Ny4wNTdsLTQuMTU1LTMuOTg3YTEuMTggMS4xOCAwIDAgMSAwLTEuNjd6bTYuMjgxIDEyLjg5SDcuMzMzbC00LjMzIDQuNDk4aDEwLjEwNWMuNTUgMCAxLjA2OC0uMjIgMS40NjItLjYwN2w2LjA4NC02LjA3OWExLjE4IDEuMTggMCAwIDAgMC0xLjY3TDE2LjUgOC42NTR2Ny4wNTdjMCAuNTI5LS4yNi43ODgtLjc4OC43ODgiLz4KPC9zdmc+Cg==) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNTRlBfX2EpIj4KICAgICAgICA8cGF0aCBmaWxsPSIjNEIyMUVGIiBkPSJNMjQgMEgwdjI0aDI0eiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik05LjcxNiA0LjU0MmExLjgzIDEuODMgMCAwIDEgMS4zLS41NGg4Ljk4MWwtMy44NDggNEg4LjdjLS40NyAwLS43LjIzLS43LjY5OXY2LjI3M0w0LjMwNyAxMS40M2ExLjA1IDEuMDUgMCAwIDEgMC0xLjQ4NHpNMTUuMjk5IDE2SDcuODVsLTMuODQ4IDMuOTk4aDguOTgyYy40OSAwIC45NS0uMTk1IDEuMy0uNTRsNS40MDgtNS40MDNhMS4wNDcgMS4wNDcgMCAwIDAgMC0xLjQ4NGwtMy42OTQtMy41NDRWMTUuM2MwIC40Ny0uMjMuNy0uNy43Ii8+CiAgICA8L2c+CiAgICA8ZGVmcz4KICAgICAgICA8Y2xpcFBhdGggaWQ9IlNGUF9fYSI+CiAgICAgICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0wIDBoMjR2MjRIMHoiLz4KICAgICAgICA8L2NsaXBQYXRoPgogICAgPC9kZWZzPgo8L3N2Zz4K)
 * @see https://web3icons.io/tokens/SFP
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenSFP = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenSFP', __iconNode);
;
}),
];

//# sourceMappingURL=1qqr_%40web3icons_react_dist_03dh_7l._.js.map