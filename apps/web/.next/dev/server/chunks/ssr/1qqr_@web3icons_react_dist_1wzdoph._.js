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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenGBEX.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenGBEX
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-ssr] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#FE036A',
                d: 'M5.841 12.001a3.79 3.79 0 0 0 3.79 3.79h7.58c.317 0 .947-.19.947-.948s-.63-.947-.948-.947h-7.106v-2.843h6.87c.317 0 1.184-.189 1.184-.947 0-.947-.71-.947-1.184-.947h-1.659V6.316h2.843c.867 0 2.842.474 2.842 3.08 0 .71-.379 2.51-1.895 3.079.63.08 1.895.663 1.895 2.368 0 2.132-.947 3.79-3.79 3.79H9.157v-.019a6.631 6.631 0 1 1 5.348-11.113l-2.089 1.928A3.79 3.79 0 0 0 5.841 12'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M5.841 12a3.79 3.79 0 0 0 3.79 3.79h7.58c.317 0 .947-.189.947-.947s-.63-.947-.948-.947h-7.106v-2.843h6.87c.317 0 1.184-.189 1.184-.947 0-.947-.71-.947-1.184-.947h-1.659V6.316h2.843c.867 0 2.842.474 2.842 3.08 0 .71-.379 2.51-1.895 3.079.63.08 1.895.663 1.895 2.368 0 2.132-.947 3.79-3.79 3.79H9.157v-.019a6.632 6.632 0 1 1 5.348-11.113l-2.089 1.928A3.79 3.79 0 0 0 5.841 12'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#GBEX__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#FE036A',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M6.525 12a3.37 3.37 0 0 0 3.369 3.37h6.737c.282 0 .843-.169.843-.843s-.56-.842-.843-.842h-6.316V11.16h6.106c.282 0 1.053-.169 1.053-.842 0-.843-.632-.843-1.053-.843h-1.474V6.948h2.527c.77 0 2.526.42 2.526 2.737 0 .632-.337 2.232-1.684 2.737.56.071 1.684.59 1.684 2.105 0 1.895-.842 3.37-3.369 3.37H9.473v-.018a5.896 5.896 0 1 1 4.754-9.878L12.37 9.714a3.37 3.37 0 0 0-5.845 2.287'
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
                        id: 'GBEX__a'
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
 * @component @name TokenGBEX
 * @description Web3Icon for TokenGBEX
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNGRTAzNkEiIGQ9Ik01Ljg0MSAxMi4wMDFhMy43OSAzLjc5IDAgMCAwIDMuNzkgMy43OWg3LjU4Yy4zMTcgMCAuOTQ3LS4xOS45NDctLjk0OHMtLjYzLS45NDctLjk0OC0uOTQ3aC03LjEwNnYtMi44NDNoNi44N2MuMzE3IDAgMS4xODQtLjE4OSAxLjE4NC0uOTQ3IDAtLjk0Ny0uNzEtLjk0Ny0xLjE4NC0uOTQ3aC0xLjY1OVY2LjMxNmgyLjg0M2MuODY3IDAgMi44NDIuNDc0IDIuODQyIDMuMDggMCAuNzEtLjM3OSAyLjUxLTEuODk1IDMuMDc5LjYzLjA4IDEuODk1LjY2MyAxLjg5NSAyLjM2OCAwIDIuMTMyLS45NDcgMy43OS0zLjc5IDMuNzlIOS4xNTd2LS4wMTlhNi42MzEgNi42MzEgMCAxIDEgNS4zNDgtMTEuMTEzbC0yLjA4OSAxLjkyOEEzLjc5IDMuNzkgMCAwIDAgNS44NDEgMTIiLz4KPC9zdmc+Cg==) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik01Ljg0MSAxMmEzLjc5IDMuNzkgMCAwIDAgMy43OSAzLjc5aDcuNThjLjMxNyAwIC45NDctLjE4OS45NDctLjk0N3MtLjYzLS45NDctLjk0OC0uOTQ3aC03LjEwNnYtMi44NDNoNi44N2MuMzE3IDAgMS4xODQtLjE4OSAxLjE4NC0uOTQ3IDAtLjk0Ny0uNzEtLjk0Ny0xLjE4NC0uOTQ3aC0xLjY1OVY2LjMxNmgyLjg0M2MuODY3IDAgMi44NDIuNDc0IDIuODQyIDMuMDggMCAuNzEtLjM3OSAyLjUxLTEuODk1IDMuMDc5LjYzLjA4IDEuODk1LjY2MyAxLjg5NSAyLjM2OCAwIDIuMTMyLS45NDcgMy43OS0zLjc5IDMuNzlIOS4xNTd2LS4wMTlhNi42MzIgNi42MzIgMCAxIDEgNS4zNDgtMTEuMTEzbC0yLjA4OSAxLjkyOEEzLjc5IDMuNzkgMCAwIDAgNS44NDEgMTIiLz4KPC9zdmc+Cg==) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNHQkVYX19hKSI+CiAgICAgICAgPHBhdGggZmlsbD0iI0ZFMDM2QSIgZD0iTTI0IDBIMHYyNGgyNHoiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNNi41MjUgMTJhMy4zNyAzLjM3IDAgMCAwIDMuMzY5IDMuMzdoNi43MzdjLjI4MiAwIC44NDMtLjE2OS44NDMtLjg0M3MtLjU2LS44NDItLjg0My0uODQyaC02LjMxNlYxMS4xNmg2LjEwNmMuMjgyIDAgMS4wNTMtLjE2OSAxLjA1My0uODQyIDAtLjg0My0uNjMyLS44NDMtMS4wNTMtLjg0M2gtMS40NzRWNi45NDhoMi41MjdjLjc3IDAgMi41MjYuNDIgMi41MjYgMi43MzcgMCAuNjMyLS4zMzcgMi4yMzItMS42ODQgMi43MzcuNTYuMDcxIDEuNjg0LjU5IDEuNjg0IDIuMTA1IDAgMS44OTUtLjg0MiAzLjM3LTMuMzY5IDMuMzdIOS40NzN2LS4wMThhNS44OTYgNS44OTYgMCAxIDEgNC43NTQtOS44NzhMMTIuMzcgOS43MTRhMy4zNyAzLjM3IDAgMCAwLTUuODQ1IDIuMjg3Ii8+CiAgICA8L2c+CiAgICA8ZGVmcz4KICAgICAgICA8Y2xpcFBhdGggaWQ9IkdCRVhfX2EiPgogICAgICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMCAwaDI0djI0SDB6Ii8+CiAgICAgICAgPC9jbGlwUGF0aD4KICAgIDwvZGVmcz4KPC9zdmc+Cg==)
 * @see https://web3icons.io/tokens/GBEX
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenGBEX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenGBEX', __iconNode);
;
}),
];

//# sourceMappingURL=1qqr_%40web3icons_react_dist_1wzdoph._.js.map