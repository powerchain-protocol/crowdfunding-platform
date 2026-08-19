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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenTNT.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenTNT
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-ssr] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#F94081',
                d: 'M15.937 14.125a53 53 0 0 0-7.875 0l-.264-3.487a57 57 0 0 1 8.404 0zm-2.25 5.468a28 28 0 0 0-3.374 0c-.034-1.193-.09-1.62-.124-2.813 1.44-.073 2.16-.067 3.6 0zM3 5.187l.58 4.078c.337-.596.506-.9.854-1.485a51.2 51.2 0 0 1 15.311.028c.282.58.411.872.675 1.457.226-1.63.344-2.447.58-4.078a52.3 52.3 0 0 0-18 0'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M15.937 14.125a53 53 0 0 0-7.875 0l-.264-3.487a57 57 0 0 1 8.404 0zm-2.25 5.468a28 28 0 0 0-3.374 0c-.034-1.193-.09-1.62-.124-2.813 1.44-.073 2.16-.067 3.6 0zM3 5.187l.58 4.078c.337-.596.506-.9.854-1.485a51.2 51.2 0 0 1 15.311.028c.282.58.411.872.675 1.457.226-1.63.344-2.447.58-4.078a52.3 52.3 0 0 0-18 0'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#TNT__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#F94081',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M15.5 13.89a47.4 47.4 0 0 0-7 0l-.235-3.1a50.4 50.4 0 0 1 7.47 0zm-2 4.86q-1.5-.091-3 0c-.03-1.06-.08-1.44-.11-2.5 1.28-.066 1.92-.06 3.2 0zM4 5.943l.515 3.625c.3-.53.45-.8.76-1.32 4.512-.673 9.1-.665 13.61.025.25.515.365.775.6 1.295.2-1.45.305-2.175.515-3.625a46.5 46.5 0 0 0-16 0'
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
                        id: 'TNT__a'
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
 * @component @name TokenTNT
 * @description Web3Icon for TokenTNT
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNGOTQwODEiIGQ9Ik0xNS45MzcgMTQuMTI1YTUzIDUzIDAgMCAwLTcuODc1IDBsLS4yNjQtMy40ODdhNTcgNTcgMCAwIDEgOC40MDQgMHptLTIuMjUgNS40NjhhMjggMjggMCAwIDAtMy4zNzQgMGMtLjAzNC0xLjE5My0uMDktMS42Mi0uMTI0LTIuODEzIDEuNDQtLjA3MyAyLjE2LS4wNjcgMy42IDB6TTMgNS4xODdsLjU4IDQuMDc4Yy4zMzctLjU5Ni41MDYtLjkuODU0LTEuNDg1YTUxLjIgNTEuMiAwIDAgMSAxNS4zMTEuMDI4Yy4yODIuNTguNDExLjg3Mi42NzUgMS40NTcuMjI2LTEuNjMuMzQ0LTIuNDQ3LjU4LTQuMDc4YTUyLjMgNTIuMyAwIDAgMC0xOCAwIi8+Cjwvc3ZnPgo=) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xNS45MzcgMTQuMTI1YTUzIDUzIDAgMCAwLTcuODc1IDBsLS4yNjQtMy40ODdhNTcgNTcgMCAwIDEgOC40MDQgMHptLTIuMjUgNS40NjhhMjggMjggMCAwIDAtMy4zNzQgMGMtLjAzNC0xLjE5My0uMDktMS42Mi0uMTI0LTIuODEzIDEuNDQtLjA3MyAyLjE2LS4wNjcgMy42IDB6TTMgNS4xODdsLjU4IDQuMDc4Yy4zMzctLjU5Ni41MDYtLjkuODU0LTEuNDg1YTUxLjIgNTEuMiAwIDAgMSAxNS4zMTEuMDI4Yy4yODIuNTguNDExLjg3Mi42NzUgMS40NTcuMjI2LTEuNjMuMzQ0LTIuNDQ3LjU4LTQuMDc4YTUyLjMgNTIuMyAwIDAgMC0xOCAwIi8+Cjwvc3ZnPgo=) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNUTlRfX2EpIj4KICAgICAgICA8cGF0aCBmaWxsPSIjRjk0MDgxIiBkPSJNMjQgMEgwdjI0aDI0eiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xNS41IDEzLjg5YTQ3LjQgNDcuNCAwIDAgMC03IDBsLS4yMzUtMy4xYTUwLjQgNTAuNCAwIDAgMSA3LjQ3IDB6bS0yIDQuODZxLTEuNS0uMDkxLTMgMGMtLjAzLTEuMDYtLjA4LTEuNDQtLjExLTIuNSAxLjI4LS4wNjYgMS45Mi0uMDYgMy4yIDB6TTQgNS45NDNsLjUxNSAzLjYyNWMuMy0uNTMuNDUtLjguNzYtMS4zMiA0LjUxMi0uNjczIDkuMS0uNjY1IDEzLjYxLjAyNS4yNS41MTUuMzY1Ljc3NS42IDEuMjk1LjItMS40NS4zMDUtMi4xNzUuNTE1LTMuNjI1YTQ2LjUgNDYuNSAwIDAgMC0xNiAwIi8+CiAgICA8L2c+CiAgICA8ZGVmcz4KICAgICAgICA8Y2xpcFBhdGggaWQ9IlROVF9fYSI+CiAgICAgICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0wIDBoMjR2MjRIMHoiLz4KICAgICAgICA8L2NsaXBQYXRoPgogICAgPC9kZWZzPgo8L3N2Zz4K)
 * @see https://web3icons.io/tokens/TNT
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenTNT = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenTNT', __iconNode);
;
}),
];

//# sourceMappingURL=1qqr_%40web3icons_react_dist_1-uem5j._.js.map