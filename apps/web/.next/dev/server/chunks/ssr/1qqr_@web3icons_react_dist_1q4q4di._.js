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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenRADIO.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenRADIO
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-ssr] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#EC1D25',
                d: 'M19.412 12c0 4.04-3.373 7.412-7.412 7.412-1.98 0-3.806-.81-5.146-2.118h1.97v-3.176h1.36l2.42 3.176h3.028l-2.573-3.176c1.323-.265 2.647-1.853 2.647-3.706 0-2.647-2.494-3.706-3.706-3.706H6.854A7.38 7.38 0 0 1 12 4.588c4.04 0 7.412 3.373 7.412 7.412M6.176 7.458A7.36 7.36 0 0 0 4.588 12c0 1.694.598 3.282 1.588 4.542zM21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0m-9.53 0H8.825V8.824h2.646c.795 0 1.589.412 1.589 1.588 0 1.175-.794 1.588-1.588 1.588',
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
                d: 'M19.412 12c0 4.04-3.372 7.412-7.412 7.412-1.98 0-3.806-.81-5.146-2.118h1.97v-3.176h1.36l2.42 3.176h3.028l-2.573-3.176c1.323-.265 2.647-1.853 2.647-3.706 0-2.647-2.494-3.706-3.706-3.706H6.854A7.38 7.38 0 0 1 12 4.588c4.04 0 7.412 3.373 7.412 7.412M6.176 7.458A7.36 7.36 0 0 0 4.588 12c0 1.694.598 3.282 1.588 4.542zM21 12a9 9 0 1 1-17.999 0A9 9 0 0 1 21 12m-9.53 0H8.825V8.824h2.647c.794 0 1.588.412 1.588 1.588 0 1.175-.794 1.588-1.588 1.588',
                fillRule: 'evenodd',
                clipRule: 'evenodd'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#RADIO__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#EC1D25',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M18.588 12c0 3.59-2.997 6.588-6.588 6.588-1.76 0-3.384-.72-4.574-1.882h1.75v-2.824h1.21l2.15 2.824h2.692l-2.287-2.824c1.177-.235 2.353-1.647 2.353-3.294 0-2.353-2.216-3.294-3.294-3.294H7.426A6.56 6.56 0 0 1 12 5.412c3.59 0 6.588 2.997 6.588 6.588M6.824 7.962A6.54 6.54 0 0 0 5.412 12c0 1.506.532 2.918 1.412 4.038zM20 12a8 8 0 1 1-16 0 8 8 0 0 1 16 0m-8.47 0H9.175V9.176h2.353c.706 0 1.412.368 1.412 1.412S12.235 12 11.53 12',
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
                        id: 'RADIO__a'
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
 * @component @name TokenRADIO
 * @description Web3Icon for TokenRADIO
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNFQzFEMjUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTE5LjQxMiAxMmMwIDQuMDQtMy4zNzMgNy40MTItNy40MTIgNy40MTItMS45OCAwLTMuODA2LS44MS01LjE0Ni0yLjExOGgxLjk3di0zLjE3NmgxLjM2bDIuNDIgMy4xNzZoMy4wMjhsLTIuNTczLTMuMTc2YzEuMzIzLS4yNjUgMi42NDctMS44NTMgMi42NDctMy43MDYgMC0yLjY0Ny0yLjQ5NC0zLjcwNi0zLjcwNi0zLjcwNkg2Ljg1NEE3LjM4IDcuMzggMCAwIDEgMTIgNC41ODhjNC4wNCAwIDcuNDEyIDMuMzczIDcuNDEyIDcuNDEyTTYuMTc2IDcuNDU4QTcuMzYgNy4zNiAwIDAgMCA0LjU4OCAxMmMwIDEuNjk0LjU5OCAzLjI4MiAxLjU4OCA0LjU0MnpNMjEgMTJhOSA5IDAgMSAxLTE4IDAgOSA5IDAgMCAxIDE4IDBtLTkuNTMgMEg4LjgyNVY4LjgyNGgyLjY0NmMuNzk1IDAgMS41ODkuNDEyIDEuNTg5IDEuNTg4IDAgMS4xNzUtLjc5NCAxLjU4OC0xLjU4OCAxLjU4OCIgY2xpcC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo=) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTE5LjQxMiAxMmMwIDQuMDQtMy4zNzIgNy40MTItNy40MTIgNy40MTItMS45OCAwLTMuODA2LS44MS01LjE0Ni0yLjExOGgxLjk3di0zLjE3NmgxLjM2bDIuNDIgMy4xNzZoMy4wMjhsLTIuNTczLTMuMTc2YzEuMzIzLS4yNjUgMi42NDctMS44NTMgMi42NDctMy43MDYgMC0yLjY0Ny0yLjQ5NC0zLjcwNi0zLjcwNi0zLjcwNkg2Ljg1NEE3LjM4IDcuMzggMCAwIDEgMTIgNC41ODhjNC4wNCAwIDcuNDEyIDMuMzczIDcuNDEyIDcuNDEyTTYuMTc2IDcuNDU4QTcuMzYgNy4zNiAwIDAgMCA0LjU4OCAxMmMwIDEuNjk0LjU5OCAzLjI4MiAxLjU4OCA0LjU0MnpNMjEgMTJhOSA5IDAgMSAxLTE3Ljk5OSAwQTkgOSAwIDAgMSAyMSAxMm0tOS41MyAwSDguODI1VjguODI0aDIuNjQ3Yy43OTQgMCAxLjU4OC40MTIgMS41ODggMS41ODggMCAxLjE3NS0uNzk0IDEuNTg4LTEuNTg4IDEuNTg4IiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+Cg==) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNSQURJT19fYSkiPgogICAgICAgIDxwYXRoIGZpbGw9IiNFQzFEMjUiIGQ9Ik0yNCAwSDB2MjRoMjR6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTguNTg4IDEyYzAgMy41OS0yLjk5NyA2LjU4OC02LjU4OCA2LjU4OC0xLjc2IDAtMy4zODQtLjcyLTQuNTc0LTEuODgyaDEuNzV2LTIuODI0aDEuMjFsMi4xNSAyLjgyNGgyLjY5MmwtMi4yODctMi44MjRjMS4xNzctLjIzNSAyLjM1My0xLjY0NyAyLjM1My0zLjI5NCAwLTIuMzUzLTIuMjE2LTMuMjk0LTMuMjk0LTMuMjk0SDcuNDI2QTYuNTYgNi41NiAwIDAgMSAxMiA1LjQxMmMzLjU5IDAgNi41ODggMi45OTcgNi41ODggNi41ODhNNi44MjQgNy45NjJBNi41NCA2LjU0IDAgMCAwIDUuNDEyIDEyYzAgMS41MDYuNTMyIDIuOTE4IDEuNDEyIDQuMDM4ek0yMCAxMmE4IDggMCAxIDEtMTYgMCA4IDggMCAwIDEgMTYgMG0tOC40NyAwSDkuMTc1VjkuMTc2aDIuMzUzYy43MDYgMCAxLjQxMi4zNjggMS40MTIgMS40MTJTMTIuMjM1IDEyIDExLjUzIDEyIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KICAgIDwvZz4KICAgIDxkZWZzPgogICAgICAgIDxjbGlwUGF0aCBpZD0iUkFESU9fX2EiPgogICAgICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMCAwaDI0djI0SDB6Ii8+CiAgICAgICAgPC9jbGlwUGF0aD4KICAgIDwvZGVmcz4KPC9zdmc+Cg==)
 * @see https://web3icons.io/tokens/RADIO
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenRADIO = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenRADIO', __iconNode);
;
}),
];

//# sourceMappingURL=1qqr_%40web3icons_react_dist_1q4q4di._.js.map