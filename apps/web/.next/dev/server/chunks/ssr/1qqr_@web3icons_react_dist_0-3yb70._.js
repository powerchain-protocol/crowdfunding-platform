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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenPDT.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenPDT
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-ssr] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#8CDC48',
                d: 'M12 6.258 8.34 12h.006l-.84 1.332H7.5L3 20.4V3.6l3.654 5.742-.846 1.326-1.362-2.142v6.948L6.654 12l.84-1.332H7.5L12 3.6l3.654 5.742-.846 1.326zm4.5 4.41L21 3.6v16.8l-3.66-5.742.852-1.332 1.362 2.148V8.526l-1.656 2.598-.552.876L12 20.4l-3.654-5.742.846-1.326L12 17.742 15.654 12l.84-1.332z'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M12 6.258 8.34 12h.006l-.84 1.332H7.5L3 20.4V3.6l3.654 5.742-.846 1.326-1.362-2.142v6.948L6.654 12l.84-1.332H7.5L12 3.6l3.654 5.742-.846 1.326zm4.5 4.41L21 3.6v16.8l-3.66-5.742.852-1.332 1.362 2.148V8.526l-1.656 2.598-.552.876L12 20.4l-3.654-5.742.846-1.326L12 17.742 15.654 12l.84-1.332z'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#PDT__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#8CDC48',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M12 6.896 8.747 12h.005l-.747 1.184H8l-4 6.283V4.533l3.248 5.104-.752 1.179-1.21-1.904v6.176L7.247 12l.747-1.184H8l4-6.283 3.248 5.104-.752 1.179zm4 3.92 4-6.283v14.934l-3.253-5.104.757-1.184 1.21 1.909V8.912l-1.471 2.31-.491.778L12 19.467l-3.248-5.104.752-1.18L12 17.104 15.248 12l.747-1.184z'
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
                        id: 'PDT__a'
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
 * @component @name TokenPDT
 * @description Web3Icon for TokenPDT
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiM4Q0RDNDgiIGQ9Ik0xMiA2LjI1OCA4LjM0IDEyaC4wMDZsLS44NCAxLjMzMkg3LjVMMyAyMC40VjMuNmwzLjY1NCA1Ljc0Mi0uODQ2IDEuMzI2LTEuMzYyLTIuMTQydjYuOTQ4TDYuNjU0IDEybC44NC0xLjMzMkg3LjVMMTIgMy42bDMuNjU0IDUuNzQyLS44NDYgMS4zMjZ6bTQuNSA0LjQxTDIxIDMuNnYxNi44bC0zLjY2LTUuNzQyLjg1Mi0xLjMzMiAxLjM2MiAyLjE0OFY4LjUyNmwtMS42NTYgMi41OTgtLjU1Mi44NzZMMTIgMjAuNGwtMy42NTQtNS43NDIuODQ2LTEuMzI2TDEyIDE3Ljc0MiAxNS42NTQgMTJsLjg0LTEuMzMyeiIvPgo8L3N2Zz4K) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xMiA2LjI1OCA4LjM0IDEyaC4wMDZsLS44NCAxLjMzMkg3LjVMMyAyMC40VjMuNmwzLjY1NCA1Ljc0Mi0uODQ2IDEuMzI2LTEuMzYyLTIuMTQydjYuOTQ4TDYuNjU0IDEybC44NC0xLjMzMkg3LjVMMTIgMy42bDMuNjU0IDUuNzQyLS44NDYgMS4zMjZ6bTQuNSA0LjQxTDIxIDMuNnYxNi44bC0zLjY2LTUuNzQyLjg1Mi0xLjMzMiAxLjM2MiAyLjE0OFY4LjUyNmwtMS42NTYgMi41OTgtLjU1Mi44NzZMMTIgMjAuNGwtMy42NTQtNS43NDIuODQ2LTEuMzI2TDEyIDE3Ljc0MiAxNS42NTQgMTJsLjg0LTEuMzMyeiIvPgo8L3N2Zz4K) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNQRFRfX2EpIj4KICAgICAgICA8cGF0aCBmaWxsPSIjOENEQzQ4IiBkPSJNMjQgMEgwdjI0aDI0eiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xMiA2Ljg5NiA4Ljc0NyAxMmguMDA1bC0uNzQ3IDEuMTg0SDhsLTQgNi4yODNWNC41MzNsMy4yNDggNS4xMDQtLjc1MiAxLjE3OS0xLjIxLTEuOTA0djYuMTc2TDcuMjQ3IDEybC43NDctMS4xODRIOGw0LTYuMjgzIDMuMjQ4IDUuMTA0LS43NTIgMS4xNzl6bTQgMy45MiA0LTYuMjgzdjE0LjkzNGwtMy4yNTMtNS4xMDQuNzU3LTEuMTg0IDEuMjEgMS45MDlWOC45MTJsLTEuNDcxIDIuMzEtLjQ5MS43NzhMMTIgMTkuNDY3bC0zLjI0OC01LjEwNC43NTItMS4xOEwxMiAxNy4xMDQgMTUuMjQ4IDEybC43NDctMS4xODR6Ii8+CiAgICA8L2c+CiAgICA8ZGVmcz4KICAgICAgICA8Y2xpcFBhdGggaWQ9IlBEVF9fYSI+CiAgICAgICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0wIDBoMjR2MjRIMHoiLz4KICAgICAgICA8L2NsaXBQYXRoPgogICAgPC9kZWZzPgo8L3N2Zz4K)
 * @see https://web3icons.io/tokens/PDT
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenPDT = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenPDT', __iconNode);
;
}),
];

//# sourceMappingURL=1qqr_%40web3icons_react_dist_0-3yb70._.js.map