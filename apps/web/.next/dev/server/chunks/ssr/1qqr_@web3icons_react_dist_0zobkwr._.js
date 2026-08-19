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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenCVC.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenCVC
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-ssr] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#FF6B4D',
                d: 'M13.592 19.313c2.84 0 5.366-2.284 5.72-5.024v-.039H21A7.48 7.48 0 0 1 13.592 21h-3.15C6.336 21 3 17.67 3 13.575v-3.15C3 6.33 6.341 3 10.442 3h3.15A7.48 7.48 0 0 1 21 9.75h-1.688c-.354-2.74-2.88-5.062-5.72-5.062h-3.15a5.88 5.88 0 0 0-5.755 5.737v3.15c0 3.071 2.672 5.738 5.755 5.738zM12 8.625c.928 0 1.687.793 1.687 1.772 0 .686-.37 1.282-.91 1.575l.624 2.84h-2.802l.625-2.84a1.78 1.78 0 0 1-.912-1.575A1.73 1.73 0 0 1 12 8.625'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M13.592 19.313c2.84 0 5.366-2.284 5.72-5.024v-.039H21A7.48 7.48 0 0 1 13.592 21h-3.15C6.336 21 3 17.67 3 13.575v-3.15C3 6.33 6.341 3 10.442 3h3.15A7.48 7.48 0 0 1 21 9.75h-1.688c-.354-2.74-2.88-5.062-5.72-5.062h-3.15a5.88 5.88 0 0 0-5.755 5.737v3.15c0 3.071 2.672 5.738 5.755 5.738zM12 8.625c.928 0 1.687.793 1.687 1.772 0 .686-.37 1.282-.91 1.575l.624 2.84h-2.802l.625-2.84a1.78 1.78 0 0 1-.912-1.575A1.73 1.73 0 0 1 12 8.625'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#CVC__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#FF6B4D',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M13.415 18.5c2.525 0 4.77-2.03 5.085-4.465V14H20a6.65 6.65 0 0 1-6.585 6h-2.8C6.965 20 4 17.04 4 13.4v-2.8C4 6.96 6.97 4 10.615 4h2.8A6.65 6.65 0 0 1 20 10h-1.5c-.315-2.435-2.56-4.5-5.085-4.5h-2.8A5.225 5.225 0 0 0 5.5 10.6v2.8c0 2.73 2.375 5.1 5.115 5.1zM12 9c.825 0 1.5.705 1.5 1.575 0 .61-.33 1.14-.81 1.4l.555 2.525h-2.49l.555-2.525a1.59 1.59 0 0 1-.81-1.4A1.54 1.54 0 0 1 12 9'
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
                        id: 'CVC__a'
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
 * @component @name TokenCVC
 * @description Web3Icon for TokenCVC
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNGRjZCNEQiIGQ9Ik0xMy41OTIgMTkuMzEzYzIuODQgMCA1LjM2Ni0yLjI4NCA1LjcyLTUuMDI0di0uMDM5SDIxQTcuNDggNy40OCAwIDAgMSAxMy41OTIgMjFoLTMuMTVDNi4zMzYgMjEgMyAxNy42NyAzIDEzLjU3NXYtMy4xNUMzIDYuMzMgNi4zNDEgMyAxMC40NDIgM2gzLjE1QTcuNDggNy40OCAwIDAgMSAyMSA5Ljc1aC0xLjY4OGMtLjM1NC0yLjc0LTIuODgtNS4wNjItNS43Mi01LjA2MmgtMy4xNWE1Ljg4IDUuODggMCAwIDAtNS43NTUgNS43Mzd2My4xNWMwIDMuMDcxIDIuNjcyIDUuNzM4IDUuNzU1IDUuNzM4ek0xMiA4LjYyNWMuOTI4IDAgMS42ODcuNzkzIDEuNjg3IDEuNzcyIDAgLjY4Ni0uMzcgMS4yODItLjkxIDEuNTc1bC42MjQgMi44NGgtMi44MDJsLjYyNS0yLjg0YTEuNzggMS43OCAwIDAgMS0uOTEyLTEuNTc1QTEuNzMgMS43MyAwIDAgMSAxMiA4LjYyNSIvPgo8L3N2Zz4K) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xMy41OTIgMTkuMzEzYzIuODQgMCA1LjM2Ni0yLjI4NCA1LjcyLTUuMDI0di0uMDM5SDIxQTcuNDggNy40OCAwIDAgMSAxMy41OTIgMjFoLTMuMTVDNi4zMzYgMjEgMyAxNy42NyAzIDEzLjU3NXYtMy4xNUMzIDYuMzMgNi4zNDEgMyAxMC40NDIgM2gzLjE1QTcuNDggNy40OCAwIDAgMSAyMSA5Ljc1aC0xLjY4OGMtLjM1NC0yLjc0LTIuODgtNS4wNjItNS43Mi01LjA2MmgtMy4xNWE1Ljg4IDUuODggMCAwIDAtNS43NTUgNS43Mzd2My4xNWMwIDMuMDcxIDIuNjcyIDUuNzM4IDUuNzU1IDUuNzM4ek0xMiA4LjYyNWMuOTI4IDAgMS42ODcuNzkzIDEuNjg3IDEuNzcyIDAgLjY4Ni0uMzcgMS4yODItLjkxIDEuNTc1bC42MjQgMi44NGgtMi44MDJsLjYyNS0yLjg0YTEuNzggMS43OCAwIDAgMS0uOTEyLTEuNTc1QTEuNzMgMS43MyAwIDAgMSAxMiA4LjYyNSIvPgo8L3N2Zz4K) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNDVkNfX2EpIj4KICAgICAgICA8cGF0aCBmaWxsPSIjRkY2QjREIiBkPSJNMjQgMEgwdjI0aDI0eiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xMy40MTUgMTguNWMyLjUyNSAwIDQuNzctMi4wMyA1LjA4NS00LjQ2NVYxNEgyMGE2LjY1IDYuNjUgMCAwIDEtNi41ODUgNmgtMi44QzYuOTY1IDIwIDQgMTcuMDQgNCAxMy40di0yLjhDNCA2Ljk2IDYuOTcgNCAxMC42MTUgNGgyLjhBNi42NSA2LjY1IDAgMCAxIDIwIDEwaC0xLjVjLS4zMTUtMi40MzUtMi41Ni00LjUtNS4wODUtNC41aC0yLjhBNS4yMjUgNS4yMjUgMCAwIDAgNS41IDEwLjZ2Mi44YzAgMi43MyAyLjM3NSA1LjEgNS4xMTUgNS4xek0xMiA5Yy44MjUgMCAxLjUuNzA1IDEuNSAxLjU3NSAwIC42MS0uMzMgMS4xNC0uODEgMS40bC41NTUgMi41MjVoLTIuNDlsLjU1NS0yLjUyNWExLjU5IDEuNTkgMCAwIDEtLjgxLTEuNEExLjU0IDEuNTQgMCAwIDEgMTIgOSIvPgogICAgPC9nPgogICAgPGRlZnM+CiAgICAgICAgPGNsaXBQYXRoIGlkPSJDVkNfX2EiPgogICAgICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMCAwaDI0djI0SDB6Ii8+CiAgICAgICAgPC9jbGlwUGF0aD4KICAgIDwvZGVmcz4KPC9zdmc+Cg==)
 * @see https://web3icons.io/tokens/CVC
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenCVC = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenCVC', __iconNode);
;
}),
];

//# sourceMappingURL=1qqr_%40web3icons_react_dist_0zobkwr._.js.map