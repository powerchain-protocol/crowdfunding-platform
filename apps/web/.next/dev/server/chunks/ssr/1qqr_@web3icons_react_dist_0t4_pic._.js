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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenDVI.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenDVI
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-ssr] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#fff',
                d: 'M4.37 3.142A.19.19 0 0 1 4.56 3h4.953l10.025 5.826c.077.043.11.136.093.218h.005l-.01.016a.2.2 0 0 1-.044.066L12.016 21H6.83L4.38 3.273a.2.2 0 0 1-.01-.11l-.006-.021zm2.88.245.146 1.075 2.188 1.287-.328-2.362zm1.908 14.051L7.462 4.948l2.193 1.287 1.2 8.563-1.691 2.64zm.082.59.327 2.388 1.702-2.672-.333-2.357-1.69 2.64zm2.018-3.142.328 2.35 5.072-7.985h-1.783zm3.628-6.022-.028-.017-4.854-2.852-.344-2.46 9.174 5.329zm-.371.229-3.344 5.209-1.09-7.816z',
                fillRule: 'evenodd',
                clipRule: 'evenodd'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M4.37 3.142A.19.19 0 0 1 4.56 3h4.953l10.025 5.826c.077.043.11.136.093.218h.005l-.01.016a.2.2 0 0 1-.044.066L12.016 21H6.83L4.38 3.273a.2.2 0 0 1-.01-.11l-.006-.021zm2.88.245.146 1.075 2.188 1.287-.328-2.362zm1.908 14.051L7.462 4.948l2.193 1.287 1.2 8.563-1.691 2.64zm.082.59.327 2.388 1.702-2.672-.333-2.357-1.69 2.64zm2.018-3.142.328 2.35 5.072-7.985h-1.783zm3.628-6.022-.028-.017-4.854-2.852-.344-2.46 9.174 5.329zm-.371.229-3.344 5.209-1.09-7.816z',
                fillRule: 'evenodd',
                clipRule: 'evenodd'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#DVI__a)'
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
                        d: 'M5.217 4.126A.17.17 0 0 1 5.387 4h4.402l8.912 5.178a.18.18 0 0 1 .082.194h.005l-.01.015a.2.2 0 0 1-.038.058L12.015 20H7.404L5.227 4.243a.17.17 0 0 1-.01-.097l-.005-.02zm2.56.218.131.955 1.944 1.145-.29-2.1zm1.697 12.49L7.966 5.73l1.95 1.144 1.066 7.612-1.503 2.347zm.073.524.29 2.123 1.514-2.376-.296-2.094-1.503 2.347zm1.794-2.793.29 2.09 4.51-7.099h-1.586zm3.224-5.353-.024-.014-4.315-2.536-.306-2.187 8.155 4.737zm-.33.204-2.972 4.63-.97-6.948z',
                        fillRule: 'evenodd',
                        clipRule: 'evenodd'
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
                        id: 'DVI__a'
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
 * @component @name TokenDVI
 * @description Web3Icon for TokenDVI
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTQuMzcgMy4xNDJBLjE5LjE5IDAgMCAxIDQuNTYgM2g0Ljk1M2wxMC4wMjUgNS44MjZjLjA3Ny4wNDMuMTEuMTM2LjA5My4yMThoLjAwNWwtLjAxLjAxNmEuMi4yIDAgMCAxLS4wNDQuMDY2TDEyLjAxNiAyMUg2LjgzTDQuMzggMy4yNzNhLjIuMiAwIDAgMS0uMDEtLjExbC0uMDA2LS4wMjF6bTIuODguMjQ1LjE0NiAxLjA3NSAyLjE4OCAxLjI4Ny0uMzI4LTIuMzYyem0xLjkwOCAxNC4wNTFMNy40NjIgNC45NDhsMi4xOTMgMS4yODcgMS4yIDguNTYzLTEuNjkxIDIuNjR6bS4wODIuNTkuMzI3IDIuMzg4IDEuNzAyLTIuNjcyLS4zMzMtMi4zNTctMS42OSAyLjY0em0yLjAxOC0zLjE0Mi4zMjggMi4zNSA1LjA3Mi03Ljk4NWgtMS43ODN6bTMuNjI4LTYuMDIyLS4wMjgtLjAxNy00Ljg1NC0yLjg1Mi0uMzQ0LTIuNDYgOS4xNzQgNS4zMjl6bS0uMzcxLjIyOS0zLjM0NCA1LjIwOS0xLjA5LTcuODE2eiIgY2xpcC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo=) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTQuMzcgMy4xNDJBLjE5LjE5IDAgMCAxIDQuNTYgM2g0Ljk1M2wxMC4wMjUgNS44MjZjLjA3Ny4wNDMuMTEuMTM2LjA5My4yMThoLjAwNWwtLjAxLjAxNmEuMi4yIDAgMCAxLS4wNDQuMDY2TDEyLjAxNiAyMUg2LjgzTDQuMzggMy4yNzNhLjIuMiAwIDAgMS0uMDEtLjExbC0uMDA2LS4wMjF6bTIuODguMjQ1LjE0NiAxLjA3NSAyLjE4OCAxLjI4Ny0uMzI4LTIuMzYyem0xLjkwOCAxNC4wNTFMNy40NjIgNC45NDhsMi4xOTMgMS4yODcgMS4yIDguNTYzLTEuNjkxIDIuNjR6bS4wODIuNTkuMzI3IDIuMzg4IDEuNzAyLTIuNjcyLS4zMzMtMi4zNTctMS42OSAyLjY0em0yLjAxOC0zLjE0Mi4zMjggMi4zNSA1LjA3Mi03Ljk4NWgtMS43ODN6bTMuNjI4LTYuMDIyLS4wMjgtLjAxNy00Ljg1NC0yLjg1Mi0uMzQ0LTIuNDYgOS4xNzQgNS4zMjl6bS0uMzcxLjIyOS0zLjM0NCA1LjIwOS0xLjA5LTcuODE2eiIgY2xpcC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo=) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNEVklfX2EpIj4KICAgICAgICA8cGF0aCBmaWxsPSIjMDAwIiBkPSJNMjQgMEgwdjI0aDI0eiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTUuMjE3IDQuMTI2QS4xNy4xNyAwIDAgMSA1LjM4NyA0aDQuNDAybDguOTEyIDUuMTc4YS4xOC4xOCAwIDAgMSAuMDgyLjE5NGguMDA1bC0uMDEuMDE1YS4yLjIgMCAwIDEtLjAzOC4wNThMMTIuMDE1IDIwSDcuNDA0TDUuMjI3IDQuMjQzYS4xNy4xNyAwIDAgMS0uMDEtLjA5N2wtLjAwNS0uMDJ6bTIuNTYuMjE4LjEzMS45NTUgMS45NDQgMS4xNDUtLjI5LTIuMXptMS42OTcgMTIuNDlMNy45NjYgNS43M2wxLjk1IDEuMTQ0IDEuMDY2IDcuNjEyLTEuNTAzIDIuMzQ3em0uMDczLjUyNC4yOSAyLjEyMyAxLjUxNC0yLjM3Ni0uMjk2LTIuMDk0LTEuNTAzIDIuMzQ3em0xLjc5NC0yLjc5My4yOSAyLjA5IDQuNTEtNy4wOTloLTEuNTg2em0zLjIyNC01LjM1My0uMDI0LS4wMTQtNC4zMTUtMi41MzYtLjMwNi0yLjE4NyA4LjE1NSA0LjczN3ptLS4zMy4yMDQtMi45NzIgNC42My0uOTctNi45NDh6IiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KICAgIDwvZz4KICAgIDxkZWZzPgogICAgICAgIDxjbGlwUGF0aCBpZD0iRFZJX19hIj4KICAgICAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTAgMGgyNHYyNEgweiIvPgogICAgICAgIDwvY2xpcFBhdGg+CiAgICA8L2RlZnM+Cjwvc3ZnPgo=)
 * @see https://web3icons.io/tokens/DVI
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenDVI = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenDVI', __iconNode);
;
}),
];

//# sourceMappingURL=1qqr_%40web3icons_react_dist_0t4_pic._.js.map