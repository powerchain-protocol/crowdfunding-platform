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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenHUNT.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenHUNT
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-ssr] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#FB6F6E',
                d: 'M7.372 4.029a1.028 1.028 0 1 1 2.057 0V8.41a4.628 4.628 0 0 1 7.2 3.847v4.629a1.029 1.029 0 0 1-2.057 0v-4.629a2.571 2.571 0 0 0-5.143 0v4.629a1.029 1.029 0 0 1-2.057 0zM9.429 19.97a1.029 1.029 0 1 1-2.058 0 1.029 1.029 0 0 1 2.058 0M15.6 21a1.029 1.029 0 1 0 0-2.057 1.029 1.029 0 0 0 0 2.057'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M7.372 4.029a1.028 1.028 0 1 1 2.057 0V8.41a4.628 4.628 0 0 1 7.2 3.847v4.629a1.03 1.03 0 0 1-2.057 0v-4.629a2.571 2.571 0 0 0-5.143 0v4.629a1.029 1.029 0 0 1-2.057 0zM9.429 19.97a1.029 1.029 0 1 1-2.058 0 1.029 1.029 0 0 1 2.058 0M15.6 21a1.029 1.029 0 1 0 0-2.057 1.029 1.029 0 0 0 0 2.057'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#HUNT__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#FB6F6E',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M7.886 4.914a.914.914 0 1 1 1.828 0V8.81a4.114 4.114 0 0 1 6.4 3.42v4.114a.915.915 0 0 1-1.828 0V12.23a2.286 2.286 0 1 0-4.572 0v4.114a.914.914 0 0 1-1.828 0zm1.828 14.172a.914.914 0 1 1-1.828 0 .914.914 0 0 1 1.828 0M15.2 20a.914.914 0 1 0 0-1.828.914.914 0 0 0 0 1.828'
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
                        id: 'HUNT__a'
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
 * @component @name TokenHUNT
 * @description Web3Icon for TokenHUNT
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNGQjZGNkUiIGQ9Ik03LjM3MiA0LjAyOWExLjAyOCAxLjAyOCAwIDEgMSAyLjA1NyAwVjguNDFhNC42MjggNC42MjggMCAwIDEgNy4yIDMuODQ3djQuNjI5YTEuMDI5IDEuMDI5IDAgMCAxLTIuMDU3IDB2LTQuNjI5YTIuNTcxIDIuNTcxIDAgMCAwLTUuMTQzIDB2NC42MjlhMS4wMjkgMS4wMjkgMCAwIDEtMi4wNTcgMHpNOS40MjkgMTkuOTdhMS4wMjkgMS4wMjkgMCAxIDEtMi4wNTggMCAxLjAyOSAxLjAyOSAwIDAgMSAyLjA1OCAwTTE1LjYgMjFhMS4wMjkgMS4wMjkgMCAxIDAgMC0yLjA1NyAxLjAyOSAxLjAyOSAwIDAgMCAwIDIuMDU3Ii8+Cjwvc3ZnPgo=) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik03LjM3MiA0LjAyOWExLjAyOCAxLjAyOCAwIDEgMSAyLjA1NyAwVjguNDFhNC42MjggNC42MjggMCAwIDEgNy4yIDMuODQ3djQuNjI5YTEuMDMgMS4wMyAwIDAgMS0yLjA1NyAwdi00LjYyOWEyLjU3MSAyLjU3MSAwIDAgMC01LjE0MyAwdjQuNjI5YTEuMDI5IDEuMDI5IDAgMCAxLTIuMDU3IDB6TTkuNDI5IDE5Ljk3YTEuMDI5IDEuMDI5IDAgMSAxLTIuMDU4IDAgMS4wMjkgMS4wMjkgMCAwIDEgMi4wNTggME0xNS42IDIxYTEuMDI5IDEuMDI5IDAgMSAwIDAtMi4wNTcgMS4wMjkgMS4wMjkgMCAwIDAgMCAyLjA1NyIvPgo8L3N2Zz4K) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNIVU5UX19hKSI+CiAgICAgICAgPHBhdGggZmlsbD0iI0ZCNkY2RSIgZD0iTTI0IDBIMHYyNGgyNHoiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNNy44ODYgNC45MTRhLjkxNC45MTQgMCAxIDEgMS44MjggMFY4LjgxYTQuMTE0IDQuMTE0IDAgMCAxIDYuNCAzLjQydjQuMTE0YS45MTUuOTE1IDAgMCAxLTEuODI4IDBWMTIuMjNhMi4yODYgMi4yODYgMCAxIDAtNC41NzIgMHY0LjExNGEuOTE0LjkxNCAwIDAgMS0xLjgyOCAwem0xLjgyOCAxNC4xNzJhLjkxNC45MTQgMCAxIDEtMS44MjggMCAuOTE0LjkxNCAwIDAgMSAxLjgyOCAwTTE1LjIgMjBhLjkxNC45MTQgMCAxIDAgMC0xLjgyOC45MTQuOTE0IDAgMCAwIDAgMS44MjgiLz4KICAgIDwvZz4KICAgIDxkZWZzPgogICAgICAgIDxjbGlwUGF0aCBpZD0iSFVOVF9fYSI+CiAgICAgICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0wIDBoMjR2MjRIMHoiLz4KICAgICAgICA8L2NsaXBQYXRoPgogICAgPC9kZWZzPgo8L3N2Zz4K)
 * @see https://web3icons.io/tokens/HUNT
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenHUNT = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenHUNT', __iconNode);
;
}),
];

//# sourceMappingURL=1qqr_%40web3icons_react_dist_1pk38tr._.js.map