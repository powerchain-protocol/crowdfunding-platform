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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenFRONT.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenFRONT
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-ssr] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#fff',
                d: 'm18.187 3-.618 1.654c-1.603 4.078-2.847 6.018-4.163 6.018-.815 0-1.4-.382-1.969-.916-.421-.4-.596-.501-1-.501-.209 0-.586.281-1.07.928a15.6 15.6 0 0 0-1.665 2.942h5.67l-.81 1.688H7.5V21H5.813V3zm-2.25 1.687L7.5 4.671v6.001c1.057-1.9 2.74-4.06 4.849-2.143.31.287.596.62 1.052.62.37 0 1.305-1.424 2.536-4.462'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'm18.187 3-.618 1.654c-1.603 4.078-2.847 6.018-4.163 6.018-.815 0-1.4-.382-1.969-.916-.421-.4-.596-.501-1-.501-.209 0-.586.281-1.07.928a15.6 15.6 0 0 0-1.665 2.942h5.67l-.81 1.688H7.5V21H5.813V3zm-2.25 1.687L7.5 4.671v6.001c1.057-1.9 2.74-4.06 4.849-2.143.31.287.596.62 1.052.62.37 0 1.305-1.424 2.536-4.462'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#FRONT__a)'
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
                        d: 'm17.5 4-.55 1.47c-1.425 3.625-2.53 5.35-3.7 5.35-.725 0-1.245-.34-1.75-.815-.375-.355-.53-.445-.89-.445-.185 0-.52.25-.95.825A14 14 0 0 0 8.18 13h5.04l-.72 1.5H8V20H6.5V4zm-2 1.5L8 5.485v5.335c.94-1.69 2.435-3.61 4.31-1.905.275.255.53.55.935.55.33 0 1.16-1.265 2.255-3.965'
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
                        id: 'FRONT__a'
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
 * @component @name TokenFRONT
 * @description Web3Icon for TokenFRONT
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Im0xOC4xODcgMy0uNjE4IDEuNjU0Yy0xLjYwMyA0LjA3OC0yLjg0NyA2LjAxOC00LjE2MyA2LjAxOC0uODE1IDAtMS40LS4zODItMS45NjktLjkxNi0uNDIxLS40LS41OTYtLjUwMS0xLS41MDEtLjIwOSAwLS41ODYuMjgxLTEuMDcuOTI4YTE1LjYgMTUuNiAwIDAgMC0xLjY2NSAyLjk0Mmg1LjY3bC0uODEgMS42ODhINy41VjIxSDUuODEzVjN6bS0yLjI1IDEuNjg3TDcuNSA0LjY3MXY2LjAwMWMxLjA1Ny0xLjkgMi43NC00LjA2IDQuODQ5LTIuMTQzLjMxLjI4Ny41OTYuNjIgMS4wNTIuNjIuMzcgMCAxLjMwNS0xLjQyNCAyLjUzNi00LjQ2MiIvPgo8L3N2Zz4K) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Im0xOC4xODcgMy0uNjE4IDEuNjU0Yy0xLjYwMyA0LjA3OC0yLjg0NyA2LjAxOC00LjE2MyA2LjAxOC0uODE1IDAtMS40LS4zODItMS45NjktLjkxNi0uNDIxLS40LS41OTYtLjUwMS0xLS41MDEtLjIwOSAwLS41ODYuMjgxLTEuMDcuOTI4YTE1LjYgMTUuNiAwIDAgMC0xLjY2NSAyLjk0Mmg1LjY3bC0uODEgMS42ODhINy41VjIxSDUuODEzVjN6bS0yLjI1IDEuNjg3TDcuNSA0LjY3MXY2LjAwMWMxLjA1Ny0xLjkgMi43NC00LjA2IDQuODQ5LTIuMTQzLjMxLjI4Ny41OTYuNjIgMS4wNTIuNjIuMzcgMCAxLjMwNS0xLjQyNCAyLjUzNi00LjQ2MiIvPgo8L3N2Zz4K) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNGUk9OVF9fYSkiPgogICAgICAgIDxwYXRoIGZpbGw9IiMwMDAiIGQ9Ik0yNCAwSDB2MjRoMjR6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0ibTE3LjUgNC0uNTUgMS40N2MtMS40MjUgMy42MjUtMi41MyA1LjM1LTMuNyA1LjM1LS43MjUgMC0xLjI0NS0uMzQtMS43NS0uODE1LS4zNzUtLjM1NS0uNTMtLjQ0NS0uODktLjQ0NS0uMTg1IDAtLjUyLjI1LS45NS44MjVBMTQgMTQgMCAwIDAgOC4xOCAxM2g1LjA0bC0uNzIgMS41SDhWMjBINi41VjR6bS0yIDEuNUw4IDUuNDg1djUuMzM1Yy45NC0xLjY5IDIuNDM1LTMuNjEgNC4zMS0xLjkwNS4yNzUuMjU1LjUzLjU1LjkzNS41NS4zMyAwIDEuMTYtMS4yNjUgMi4yNTUtMy45NjUiLz4KICAgIDwvZz4KICAgIDxkZWZzPgogICAgICAgIDxjbGlwUGF0aCBpZD0iRlJPTlRfX2EiPgogICAgICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMCAwaDI0djI0SDB6Ii8+CiAgICAgICAgPC9jbGlwUGF0aD4KICAgIDwvZGVmcz4KPC9zdmc+Cg==)
 * @see https://web3icons.io/tokens/FRONT
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenFRONT = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenFRONT', __iconNode);
;
}),
];

//# sourceMappingURL=1qqr_%40web3icons_react_dist_1af0s6-._.js.map