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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/networks/NetworkCronosZkevm.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>NetworkCronosZkevm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-ssr] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#051221',
                d: 'M12.003 3 4.125 7.502v9L12.003 21l7.872-4.499v-9zm5.54 12.168-5.54 3.165-5.543-3.165V8.832l5.543-3.165 5.54 3.165z'
            }
        ],
        [
            'path',
            {
                fill: '#051221',
                d: 'm15.676 14.104-3.677 2.1-3.68-2.1V9.9l3.68-2.103L15.676 9.9l-1.53.875-2.147-1.228-2.147 1.228v2.45L12 14.454l2.146-1.228z'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M12.003 3 4.125 7.502v9L12.003 21l7.872-4.499v-9zm5.54 12.168-5.54 3.165-5.543-3.165V8.832l5.543-3.165 5.54 3.165z'
            }
        ],
        [
            'path',
            {
                fill: 'currentColor',
                d: 'm15.676 14.104-3.677 2.1-3.68-2.1V9.9l3.68-2.103L15.676 9.9l-1.53.875-2.147-1.228-2.147 1.228v2.45L12 14.454l2.146-1.228z'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#cronos-zkevm__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#051221',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M12.003 4 5 8.001v8L12.003 20 19 16.001v-8zm4.924 10.816-4.924 2.813-4.927-2.813V9.184l4.927-2.813 4.924 2.813z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M15.267 13.87 12 15.737 8.728 13.87v-3.736l3.271-1.87 3.268 1.87-1.36.778-1.908-1.092-1.908 1.092v2.177L12 14.182l1.908-1.091z'
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
                        id: 'cronos-zkevm__a'
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
 * @component @name NetworkCronosZkevm
 * @description Web3Icon for NetworkCronosZkevm
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiMwNTEyMjEiIGQ9Ik0xMi4wMDMgMyA0LjEyNSA3LjUwMnY5TDEyLjAwMyAyMWw3Ljg3Mi00LjQ5OXYtOXptNS41NCAxMi4xNjgtNS41NCAzLjE2NS01LjU0My0zLjE2NVY4LjgzMmw1LjU0My0zLjE2NSA1LjU0IDMuMTY1eiIvPgogICAgPHBhdGggZmlsbD0iIzA1MTIyMSIgZD0ibTE1LjY3NiAxNC4xMDQtMy42NzcgMi4xLTMuNjgtMi4xVjkuOWwzLjY4LTIuMTAzTDE1LjY3NiA5LjlsLTEuNTMuODc1LTIuMTQ3LTEuMjI4LTIuMTQ3IDEuMjI4djIuNDVMMTIgMTQuNDU0bDIuMTQ2LTEuMjI4eiIvPgo8L3N2Zz4K) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xMi4wMDMgMyA0LjEyNSA3LjUwMnY5TDEyLjAwMyAyMWw3Ljg3Mi00LjQ5OXYtOXptNS41NCAxMi4xNjgtNS41NCAzLjE2NS01LjU0My0zLjE2NVY4LjgzMmw1LjU0My0zLjE2NSA1LjU0IDMuMTY1eiIvPgogICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0ibTE1LjY3NiAxNC4xMDQtMy42NzcgMi4xLTMuNjgtMi4xVjkuOWwzLjY4LTIuMTAzTDE1LjY3NiA5LjlsLTEuNTMuODc1LTIuMTQ3LTEuMjI4LTIuMTQ3IDEuMjI4djIuNDVMMTIgMTQuNDU0bDIuMTQ2LTEuMjI4eiIvPgo8L3N2Zz4K) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNjcm9ub3Mtemtldm1fX2EpIj4KICAgICAgICA8cGF0aCBmaWxsPSIjMDUxMjIxIiBkPSJNMjQgMEgwdjI0aDI0eiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xMi4wMDMgNCA1IDguMDAxdjhMMTIuMDAzIDIwIDE5IDE2LjAwMXYtOHptNC45MjQgMTAuODE2LTQuOTI0IDIuODEzLTQuOTI3LTIuODEzVjkuMTg0bDQuOTI3LTIuODEzIDQuOTI0IDIuODEzeiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xNS4yNjcgMTMuODcgMTIgMTUuNzM3IDguNzI4IDEzLjg3di0zLjczNmwzLjI3MS0xLjg3IDMuMjY4IDEuODctMS4zNi43NzgtMS45MDgtMS4wOTItMS45MDggMS4wOTJ2Mi4xNzdMMTIgMTQuMTgybDEuOTA4LTEuMDkxeiIvPgogICAgPC9nPgogICAgPGRlZnM+CiAgICAgICAgPGNsaXBQYXRoIGlkPSJjcm9ub3Mtemtldm1fX2EiPgogICAgICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMCAwaDI0djI0SDB6Ii8+CiAgICAgICAgPC9jbGlwUGF0aD4KICAgIDwvZGVmcz4KPC9zdmc+Cg==)
 * @see https://web3icons.io/networks/cronos-zkevm
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const NetworkCronosZkevm = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createWeb3Icon"])('NetworkCronosZkevm', __iconNode);
;
}),
];

//# sourceMappingURL=1qqr_%40web3icons_react_dist_1wx__70._.js.map