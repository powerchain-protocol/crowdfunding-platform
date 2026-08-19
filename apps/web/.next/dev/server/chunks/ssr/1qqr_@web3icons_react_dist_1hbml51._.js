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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenCAPS.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenCAPS
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-ssr] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#fff',
                d: 'M15.087 20.747A9.023 9.023 0 0 0 12 3.253a9.023 9.023 0 0 0-3.087 17.494h.452a1.515 1.515 0 0 0 1.402-.958 1.5 1.5 0 0 0 .104-.588v-5.226H9.094c-.576 0-1.044-.508-1.044-1.128 0-.621.468-1.129 1.044-1.129h5.812c.576 0 1.044.508 1.044 1.129 0 .62-.468 1.128-1.044 1.128H13.13v5.226a1.574 1.574 0 0 0 1.58 1.546zM12 10.025a2.257 2.257 0 1 0 0-4.514 2.257 2.257 0 0 0 0 4.514m-6.208 3.95a1.128 1.128 0 1 0 0-2.257 1.128 1.128 0 0 0 0 2.257m13.544-1.128a1.129 1.129 0 1 1-2.257 0 1.129 1.129 0 0 1 2.257 0',
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
                d: 'M15.087 20.747A9.023 9.023 0 0 0 12 3.253a9.023 9.023 0 0 0-3.087 17.494h.452a1.515 1.515 0 0 0 1.402-.958 1.5 1.5 0 0 0 .104-.588v-5.226H9.094c-.576 0-1.044-.508-1.044-1.128 0-.621.468-1.129 1.044-1.129h5.812c.576 0 1.044.508 1.044 1.129 0 .62-.468 1.128-1.044 1.128H13.13v5.226a1.574 1.574 0 0 0 1.58 1.546zM12 10.025a2.257 2.257 0 1 0 0-4.514 2.257 2.257 0 0 0 0 4.514m-6.208 3.95a1.128 1.128 0 1 0 0-2.257 1.128 1.128 0 0 0 0 2.257m13.544-1.128a1.129 1.129 0 1 1-2.257 0 1.129 1.129 0 0 1 2.257 0',
                fillRule: 'evenodd',
                clipRule: 'evenodd'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#CAPS__a)'
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
                        d: 'M14.744 19.775A8.02 8.02 0 0 0 12 4.225a8.02 8.02 0 0 0-2.744 15.55h.401a1.346 1.346 0 0 0 1.34-1.374v-4.645h-1.58c-.512 0-.928-.452-.928-1.004 0-.551.416-1.003.928-1.003h5.166c.512 0 .928.452.928 1.003 0 .552-.416 1.004-.928 1.004h-1.58V18.4a1.4 1.4 0 0 0 1.405 1.374zM12 10.245a2.006 2.006 0 1 0 0-4.013 2.006 2.006 0 0 0 0 4.012m-5.518 3.51a1.003 1.003 0 1 0 0-2.006 1.003 1.003 0 0 0 0 2.007m12.039-1.003a1.003 1.003 0 1 1-2.006 0 1.003 1.003 0 0 1 2.006 0',
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
                        id: 'CAPS__a'
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
 * @component @name TokenCAPS
 * @description Web3Icon for TokenCAPS
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTE1LjA4NyAyMC43NDdBOS4wMjMgOS4wMjMgMCAwIDAgMTIgMy4yNTNhOS4wMjMgOS4wMjMgMCAwIDAtMy4wODcgMTcuNDk0aC40NTJhMS41MTUgMS41MTUgMCAwIDAgMS40MDItLjk1OCAxLjUgMS41IDAgMCAwIC4xMDQtLjU4OHYtNS4yMjZIOS4wOTRjLS41NzYgMC0xLjA0NC0uNTA4LTEuMDQ0LTEuMTI4IDAtLjYyMS40NjgtMS4xMjkgMS4wNDQtMS4xMjloNS44MTJjLjU3NiAwIDEuMDQ0LjUwOCAxLjA0NCAxLjEyOSAwIC42Mi0uNDY4IDEuMTI4LTEuMDQ0IDEuMTI4SDEzLjEzdjUuMjI2YTEuNTc0IDEuNTc0IDAgMCAwIDEuNTggMS41NDZ6TTEyIDEwLjAyNWEyLjI1NyAyLjI1NyAwIDEgMCAwLTQuNTE0IDIuMjU3IDIuMjU3IDAgMCAwIDAgNC41MTRtLTYuMjA4IDMuOTVhMS4xMjggMS4xMjggMCAxIDAgMC0yLjI1NyAxLjEyOCAxLjEyOCAwIDAgMCAwIDIuMjU3bTEzLjU0NC0xLjEyOGExLjEyOSAxLjEyOSAwIDEgMS0yLjI1NyAwIDEuMTI5IDEuMTI5IDAgMCAxIDIuMjU3IDAiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4K) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTE1LjA4NyAyMC43NDdBOS4wMjMgOS4wMjMgMCAwIDAgMTIgMy4yNTNhOS4wMjMgOS4wMjMgMCAwIDAtMy4wODcgMTcuNDk0aC40NTJhMS41MTUgMS41MTUgMCAwIDAgMS40MDItLjk1OCAxLjUgMS41IDAgMCAwIC4xMDQtLjU4OHYtNS4yMjZIOS4wOTRjLS41NzYgMC0xLjA0NC0uNTA4LTEuMDQ0LTEuMTI4IDAtLjYyMS40NjgtMS4xMjkgMS4wNDQtMS4xMjloNS44MTJjLjU3NiAwIDEuMDQ0LjUwOCAxLjA0NCAxLjEyOSAwIC42Mi0uNDY4IDEuMTI4LTEuMDQ0IDEuMTI4SDEzLjEzdjUuMjI2YTEuNTc0IDEuNTc0IDAgMCAwIDEuNTggMS41NDZ6TTEyIDEwLjAyNWEyLjI1NyAyLjI1NyAwIDEgMCAwLTQuNTE0IDIuMjU3IDIuMjU3IDAgMCAwIDAgNC41MTRtLTYuMjA4IDMuOTVhMS4xMjggMS4xMjggMCAxIDAgMC0yLjI1NyAxLjEyOCAxLjEyOCAwIDAgMCAwIDIuMjU3bTEzLjU0NC0xLjEyOGExLjEyOSAxLjEyOSAwIDEgMS0yLjI1NyAwIDEuMTI5IDEuMTI5IDAgMCAxIDIuMjU3IDAiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4K) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNDQVBTX19hKSI+CiAgICAgICAgPHBhdGggZmlsbD0iIzAwMCIgZD0iTTI0IDBIMHYyNGgyNHoiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNC43NDQgMTkuNzc1QTguMDIgOC4wMiAwIDAgMCAxMiA0LjIyNWE4LjAyIDguMDIgMCAwIDAtMi43NDQgMTUuNTVoLjQwMWExLjM0NiAxLjM0NiAwIDAgMCAxLjM0LTEuMzc0di00LjY0NWgtMS41OGMtLjUxMiAwLS45MjgtLjQ1Mi0uOTI4LTEuMDA0IDAtLjU1MS40MTYtMS4wMDMuOTI4LTEuMDAzaDUuMTY2Yy41MTIgMCAuOTI4LjQ1Mi45MjggMS4wMDMgMCAuNTUyLS40MTYgMS4wMDQtLjkyOCAxLjAwNGgtMS41OFYxOC40YTEuNCAxLjQgMCAwIDAgMS40MDUgMS4zNzR6TTEyIDEwLjI0NWEyLjAwNiAyLjAwNiAwIDEgMCAwLTQuMDEzIDIuMDA2IDIuMDA2IDAgMCAwIDAgNC4wMTJtLTUuNTE4IDMuNTFhMS4wMDMgMS4wMDMgMCAxIDAgMC0yLjAwNiAxLjAwMyAxLjAwMyAwIDAgMCAwIDIuMDA3bTEyLjAzOS0xLjAwM2ExLjAwMyAxLjAwMyAwIDEgMS0yLjAwNiAwIDEuMDAzIDEuMDAzIDAgMCAxIDIuMDA2IDAiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgogICAgPC9nPgogICAgPGRlZnM+CiAgICAgICAgPGNsaXBQYXRoIGlkPSJDQVBTX19hIj4KICAgICAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTAgMGgyNHYyNEgweiIvPgogICAgICAgIDwvY2xpcFBhdGg+CiAgICA8L2RlZnM+Cjwvc3ZnPgo=)
 * @see https://web3icons.io/tokens/CAPS
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenCAPS = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenCAPS', __iconNode);
;
}),
];

//# sourceMappingURL=1qqr_%40web3icons_react_dist_1hbml51._.js.map