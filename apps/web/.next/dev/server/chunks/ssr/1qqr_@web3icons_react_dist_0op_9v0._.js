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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenHTR.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenHTR
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-ssr] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#fff',
                d: 'M4 12c0-4.385 3.615-8 8-8s8 3.615 8 8-3.615 8-8 8-8-3.615-8-8m8-9a9 9 0 1 0 0 18 9 9 0 0 0 0-18m1.5 6.5c-1.27.045-2.35.43-3 1.5V6H9v7.5H8V15h4v-1.5h-1v-.68c0-.95.945-2 1.92-2.025 1.325-.035 1.975.81 2.08 2.025v4.68h1.5v-5.2c0-1.8-1.5-2.8-3-2.8M8 16v1.5h4V16z'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M4 12c0-4.385 3.615-8 8-8s8 3.615 8 8-3.615 8-8 8-8-3.615-8-8m8-9a9 9 0 1 0 0 18 9 9 0 0 0 0-18m1.5 6.5c-1.27.045-2.35.43-3 1.5V6H9v7.5H8V15h4v-1.5h-1v-.68c0-.95.945-2 1.92-2.025 1.325-.035 1.975.81 2.08 2.025v4.68h1.5v-5.2c0-1.8-1.5-2.8-3-2.8M8 16v1.5h4V16z'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#HTR__a)'
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
                        d: 'M4.889 12c0-3.898 3.213-7.111 7.111-7.111S19.111 8.102 19.111 12 15.898 19.111 12 19.111 4.889 15.898 4.889 12M12 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16m1.333 5.778c-1.129.04-2.088.382-2.666 1.333V6.667H9.333v6.666h-.889v1.334H12v-1.334h-.889v-.604c0-.844.84-1.778 1.707-1.8 1.178-.031 1.755.72 1.849 1.8v4.16H16v-4.622c0-1.6-1.333-2.49-2.667-2.49m-4.889 5.778v1.333H12v-1.333z'
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
                        id: 'HTR__a'
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
 * @component @name TokenHTR
 * @description Web3Icon for TokenHTR
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik00IDEyYzAtNC4zODUgMy42MTUtOCA4LThzOCAzLjYxNSA4IDgtMy42MTUgOC04IDgtOC0zLjYxNS04LThtOC05YTkgOSAwIDEgMCAwIDE4IDkgOSAwIDAgMCAwLTE4bTEuNSA2LjVjLTEuMjcuMDQ1LTIuMzUuNDMtMyAxLjVWNkg5djcuNUg4VjE1aDR2LTEuNWgtMXYtLjY4YzAtLjk1Ljk0NS0yIDEuOTItMi4wMjUgMS4zMjUtLjAzNSAxLjk3NS44MSAyLjA4IDIuMDI1djQuNjhoMS41di01LjJjMC0xLjgtMS41LTIuOC0zLTIuOE04IDE2djEuNWg0VjE2eiIvPgo8L3N2Zz4K) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik00IDEyYzAtNC4zODUgMy42MTUtOCA4LThzOCAzLjYxNSA4IDgtMy42MTUgOC04IDgtOC0zLjYxNS04LThtOC05YTkgOSAwIDEgMCAwIDE4IDkgOSAwIDAgMCAwLTE4bTEuNSA2LjVjLTEuMjcuMDQ1LTIuMzUuNDMtMyAxLjVWNkg5djcuNUg4VjE1aDR2LTEuNWgtMXYtLjY4YzAtLjk1Ljk0NS0yIDEuOTItMi4wMjUgMS4zMjUtLjAzNSAxLjk3NS44MSAyLjA4IDIuMDI1djQuNjhoMS41di01LjJjMC0xLjgtMS41LTIuOC0zLTIuOE04IDE2djEuNWg0VjE2eiIvPgo8L3N2Zz4K) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNIVFJfX2EpIj4KICAgICAgICA8cGF0aCBmaWxsPSIjMDAwIiBkPSJNMjQgMEgwdjI0aDI0eiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik00Ljg4OSAxMmMwLTMuODk4IDMuMjEzLTcuMTExIDcuMTExLTcuMTExUzE5LjExMSA4LjEwMiAxOS4xMTEgMTIgMTUuODk4IDE5LjExMSAxMiAxOS4xMTEgNC44ODkgMTUuODk4IDQuODg5IDEyTTEyIDRhOCA4IDAgMSAwIDAgMTYgOCA4IDAgMCAwIDAtMTZtMS4zMzMgNS43NzhjLTEuMTI5LjA0LTIuMDg4LjM4Mi0yLjY2NiAxLjMzM1Y2LjY2N0g5LjMzM3Y2LjY2NmgtLjg4OXYxLjMzNEgxMnYtMS4zMzRoLS44ODl2LS42MDRjMC0uODQ0Ljg0LTEuNzc4IDEuNzA3LTEuOCAxLjE3OC0uMDMxIDEuNzU1LjcyIDEuODQ5IDEuOHY0LjE2SDE2di00LjYyMmMwLTEuNi0xLjMzMy0yLjQ5LTIuNjY3LTIuNDltLTQuODg5IDUuNzc4djEuMzMzSDEydi0xLjMzM3oiLz4KICAgIDwvZz4KICAgIDxkZWZzPgogICAgICAgIDxjbGlwUGF0aCBpZD0iSFRSX19hIj4KICAgICAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTAgMGgyNHYyNEgweiIvPgogICAgICAgIDwvY2xpcFBhdGg+CiAgICA8L2RlZnM+Cjwvc3ZnPgo=)
 * @see https://web3icons.io/tokens/HTR
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenHTR = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenHTR', __iconNode);
;
}),
];

//# sourceMappingURL=1qqr_%40web3icons_react_dist_0op_9v0._.js.map