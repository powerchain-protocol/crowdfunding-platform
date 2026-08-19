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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenMLK.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenMLK
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-ssr] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#5DBAB8',
                d: 'M19.126 6.565 13.278 3.33a2.62 2.62 0 0 0-2.544 0L4.881 6.565a2.63 2.63 0 0 0-1.352 2.286v6.297c0 .951.52 1.823 1.352 2.286l5.847 3.237a2.62 2.62 0 0 0 2.544 0l5.847-3.237a2.62 2.62 0 0 0 1.352-2.286V8.851a2.62 2.62 0 0 0-1.345-2.286m-9.244 8.651c0 .865-.72 1.549-1.588 1.549s-1.588-.684-1.588-1.55v-5.36c0-.866.72-1.561 1.588-1.561s1.588.695 1.588 1.56zM12 12.53a1.594 1.594 0 0 1-1.588-1.588c0-.871.713-1.588 1.588-1.588s1.588.717 1.588 1.588S12.875 12.53 12 12.53m5.294 2.687c0 .865-.72 1.549-1.588 1.549s-1.588-.684-1.588-1.55v-5.36c0-.866.72-1.561 1.588-1.561s1.588.695 1.588 1.56z'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M19.126 6.565 13.278 3.33a2.62 2.62 0 0 0-2.544 0L4.881 6.565a2.63 2.63 0 0 0-1.352 2.286v6.297c0 .951.52 1.823 1.352 2.286l5.847 3.237a2.62 2.62 0 0 0 2.544 0l5.847-3.237a2.62 2.62 0 0 0 1.352-2.286V8.851a2.62 2.62 0 0 0-1.345-2.286m-9.244 8.651c0 .865-.72 1.549-1.588 1.549s-1.588-.684-1.588-1.55v-5.36c0-.866.72-1.561 1.588-1.561s1.588.695 1.588 1.56zM12 12.53a1.593 1.593 0 0 1-1.588-1.588c0-.871.713-1.588 1.588-1.588s1.588.717 1.588 1.588S12.875 12.53 12 12.53m5.294 2.687c0 .865-.72 1.549-1.588 1.549s-1.588-.684-1.588-1.55v-5.36c0-.866.72-1.561 1.588-1.561s1.588.695 1.588 1.56z'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#MLK__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#5DBAB8',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'm18.334 7.17-5.198-2.878a2.33 2.33 0 0 0-2.261 0L5.671 7.17A2.33 2.33 0 0 0 4.47 9.201V14.8c0 .845.462 1.62 1.202 2.031l5.197 2.877a2.33 2.33 0 0 0 2.262 0l5.197-2.877a2.33 2.33 0 0 0 1.201-2.031V9.2a2.33 2.33 0 0 0-1.195-2.032m-8.217 7.689c0 .768-.64 1.376-1.411 1.376-.772 0-1.412-.608-1.412-1.377v-4.765c0-.77.64-1.387 1.412-1.387s1.411.617 1.411 1.387zM12 12.47a1.416 1.416 0 0 1-1.412-1.411c0-.775.634-1.412 1.412-1.412s1.412.637 1.412 1.412S12.777 12.47 12 12.47m4.706 2.388c0 .77-.64 1.377-1.412 1.377s-1.412-.608-1.412-1.377v-4.765c0-.77.64-1.387 1.412-1.387s1.412.617 1.412 1.387z'
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
                        id: 'MLK__a'
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
 * @component @name TokenMLK
 * @description Web3Icon for TokenMLK
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiM1REJBQjgiIGQ9Ik0xOS4xMjYgNi41NjUgMTMuMjc4IDMuMzNhMi42MiAyLjYyIDAgMCAwLTIuNTQ0IDBMNC44ODEgNi41NjVhMi42MyAyLjYzIDAgMCAwLTEuMzUyIDIuMjg2djYuMjk3YzAgLjk1MS41MiAxLjgyMyAxLjM1MiAyLjI4Nmw1Ljg0NyAzLjIzN2EyLjYyIDIuNjIgMCAwIDAgMi41NDQgMGw1Ljg0Ny0zLjIzN2EyLjYyIDIuNjIgMCAwIDAgMS4zNTItMi4yODZWOC44NTFhMi42MiAyLjYyIDAgMCAwLTEuMzQ1LTIuMjg2bS05LjI0NCA4LjY1MWMwIC44NjUtLjcyIDEuNTQ5LTEuNTg4IDEuNTQ5cy0xLjU4OC0uNjg0LTEuNTg4LTEuNTV2LTUuMzZjMC0uODY2LjcyLTEuNTYxIDEuNTg4LTEuNTYxczEuNTg4LjY5NSAxLjU4OCAxLjU2ek0xMiAxMi41M2ExLjU5NCAxLjU5NCAwIDAgMS0xLjU4OC0xLjU4OGMwLS44NzEuNzEzLTEuNTg4IDEuNTg4LTEuNTg4czEuNTg4LjcxNyAxLjU4OCAxLjU4OFMxMi44NzUgMTIuNTMgMTIgMTIuNTNtNS4yOTQgMi42ODdjMCAuODY1LS43MiAxLjU0OS0xLjU4OCAxLjU0OXMtMS41ODgtLjY4NC0xLjU4OC0xLjU1di01LjM2YzAtLjg2Ni43Mi0xLjU2MSAxLjU4OC0xLjU2MXMxLjU4OC42OTUgMS41ODggMS41NnoiLz4KPC9zdmc+Cg==) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xOS4xMjYgNi41NjUgMTMuMjc4IDMuMzNhMi42MiAyLjYyIDAgMCAwLTIuNTQ0IDBMNC44ODEgNi41NjVhMi42MyAyLjYzIDAgMCAwLTEuMzUyIDIuMjg2djYuMjk3YzAgLjk1MS41MiAxLjgyMyAxLjM1MiAyLjI4Nmw1Ljg0NyAzLjIzN2EyLjYyIDIuNjIgMCAwIDAgMi41NDQgMGw1Ljg0Ny0zLjIzN2EyLjYyIDIuNjIgMCAwIDAgMS4zNTItMi4yODZWOC44NTFhMi42MiAyLjYyIDAgMCAwLTEuMzQ1LTIuMjg2bS05LjI0NCA4LjY1MWMwIC44NjUtLjcyIDEuNTQ5LTEuNTg4IDEuNTQ5cy0xLjU4OC0uNjg0LTEuNTg4LTEuNTV2LTUuMzZjMC0uODY2LjcyLTEuNTYxIDEuNTg4LTEuNTYxczEuNTg4LjY5NSAxLjU4OCAxLjU2ek0xMiAxMi41M2ExLjU5MyAxLjU5MyAwIDAgMS0xLjU4OC0xLjU4OGMwLS44NzEuNzEzLTEuNTg4IDEuNTg4LTEuNTg4czEuNTg4LjcxNyAxLjU4OCAxLjU4OFMxMi44NzUgMTIuNTMgMTIgMTIuNTNtNS4yOTQgMi42ODdjMCAuODY1LS43MiAxLjU0OS0xLjU4OCAxLjU0OXMtMS41ODgtLjY4NC0xLjU4OC0xLjU1di01LjM2YzAtLjg2Ni43Mi0xLjU2MSAxLjU4OC0xLjU2MXMxLjU4OC42OTUgMS41ODggMS41NnoiLz4KPC9zdmc+Cg==) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNNTEtfX2EpIj4KICAgICAgICA8cGF0aCBmaWxsPSIjNURCQUI4IiBkPSJNMjQgMEgwdjI0aDI0eiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Im0xOC4zMzQgNy4xNy01LjE5OC0yLjg3OGEyLjMzIDIuMzMgMCAwIDAtMi4yNjEgMEw1LjY3MSA3LjE3QTIuMzMgMi4zMyAwIDAgMCA0LjQ3IDkuMjAxVjE0LjhjMCAuODQ1LjQ2MiAxLjYyIDEuMjAyIDIuMDMxbDUuMTk3IDIuODc3YTIuMzMgMi4zMyAwIDAgMCAyLjI2MiAwbDUuMTk3LTIuODc3YTIuMzMgMi4zMyAwIDAgMCAxLjIwMS0yLjAzMVY5LjJhMi4zMyAyLjMzIDAgMCAwLTEuMTk1LTIuMDMybS04LjIxNyA3LjY4OWMwIC43NjgtLjY0IDEuMzc2LTEuNDExIDEuMzc2LS43NzIgMC0xLjQxMi0uNjA4LTEuNDEyLTEuMzc3di00Ljc2NWMwLS43Ny42NC0xLjM4NyAxLjQxMi0xLjM4N3MxLjQxMS42MTcgMS40MTEgMS4zODd6TTEyIDEyLjQ3YTEuNDE2IDEuNDE2IDAgMCAxLTEuNDEyLTEuNDExYzAtLjc3NS42MzQtMS40MTIgMS40MTItMS40MTJzMS40MTIuNjM3IDEuNDEyIDEuNDEyUzEyLjc3NyAxMi40NyAxMiAxMi40N200LjcwNiAyLjM4OGMwIC43Ny0uNjQgMS4zNzctMS40MTIgMS4zNzdzLTEuNDEyLS42MDgtMS40MTItMS4zNzd2LTQuNzY1YzAtLjc3LjY0LTEuMzg3IDEuNDEyLTEuMzg3czEuNDEyLjYxNyAxLjQxMiAxLjM4N3oiLz4KICAgIDwvZz4KICAgIDxkZWZzPgogICAgICAgIDxjbGlwUGF0aCBpZD0iTUxLX19hIj4KICAgICAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTAgMGgyNHYyNEgweiIvPgogICAgICAgIDwvY2xpcFBhdGg+CiAgICA8L2RlZnM+Cjwvc3ZnPgo=)
 * @see https://web3icons.io/tokens/MLK
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenMLK = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenMLK', __iconNode);
;
}),
];

//# sourceMappingURL=1qqr_%40web3icons_react_dist_1ht2fmh._.js.map