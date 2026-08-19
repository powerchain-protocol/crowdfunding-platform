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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenLYX.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenLYX
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-ssr] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#FE005B',
                d: 'm13.475 3.4 5.15 3.006A2.99 2.99 0 0 1 20.1 8.991v6.015c0 1.065-.564 2.05-1.476 2.585l-5.149 3.008a2.92 2.92 0 0 1-2.95 0l-5.15-3.008A3 3 0 0 1 3.9 15.006V8.99a3 3 0 0 1 1.475-2.585l5.15-3.005a2.92 2.92 0 0 1 2.95 0m1.08 11.88 1.532-2.683q.039-.07.069-.142a1.2 1.2 0 0 0-.075-1.052L14.549 8.72a1.17 1.17 0 0 0-1.02-.597h-3.063c-.422 0-.812.227-1.022.597l-1.531 2.683c-.21.37-.21.824 0 1.194l1.534 2.683a1.18 1.18 0 0 0 1.021.597h3.066q.04 0 .079-.002c.391-.027.746-.248.942-.595',
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
                d: 'm13.475 3.4 5.15 3.006A2.99 2.99 0 0 1 20.1 8.991v6.015c0 1.065-.564 2.05-1.476 2.585l-5.149 3.008a2.92 2.92 0 0 1-2.95 0l-5.15-3.008A3 3 0 0 1 3.9 15.006V8.99a3 3 0 0 1 1.475-2.585l5.15-3.005a2.92 2.92 0 0 1 2.95 0m1.08 11.88 1.532-2.683q.039-.07.069-.142a1.2 1.2 0 0 0-.075-1.052L14.549 8.72a1.17 1.17 0 0 0-1.02-.597h-3.063c-.422 0-.812.227-1.022.597l-1.531 2.683c-.21.37-.21.824 0 1.194l1.534 2.683a1.18 1.18 0 0 0 1.021.597h3.066q.04 0 .079-.002c.391-.027.746-.248.942-.595',
                fillRule: 'evenodd',
                clipRule: 'evenodd'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#LYX__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#FE005B',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'm13.311 4.356 4.577 2.672A2.66 2.66 0 0 1 19.2 9.326v5.346c0 .947-.501 1.822-1.312 2.297l-4.577 2.675a2.59 2.59 0 0 1-2.623 0l-4.577-2.675A2.66 2.66 0 0 1 4.8 14.672V9.326c0-.948.5-1.823 1.311-2.298l4.577-2.672a2.59 2.59 0 0 1 2.623 0m.96 10.56 1.362-2.385a1.06 1.06 0 0 0-.005-1.061l-1.362-2.386a1.04 1.04 0 0 0-.908-.53h-2.722c-.375 0-.721.201-.908.53L8.367 11.47a1.08 1.08 0 0 0 0 1.062l1.364 2.385a1.05 1.05 0 0 0 .908.53h2.725l.07-.002a1.04 1.04 0 0 0 .837-.528',
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
                        id: 'LYX__a'
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
 * @component @name TokenLYX
 * @description Web3Icon for TokenLYX
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNGRTAwNUIiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0ibTEzLjQ3NSAzLjQgNS4xNSAzLjAwNkEyLjk5IDIuOTkgMCAwIDEgMjAuMSA4Ljk5MXY2LjAxNWMwIDEuMDY1LS41NjQgMi4wNS0xLjQ3NiAyLjU4NWwtNS4xNDkgMy4wMDhhMi45MiAyLjkyIDAgMCAxLTIuOTUgMGwtNS4xNS0zLjAwOEEzIDMgMCAwIDEgMy45IDE1LjAwNlY4Ljk5YTMgMyAwIDAgMSAxLjQ3NS0yLjU4NWw1LjE1LTMuMDA1YTIuOTIgMi45MiAwIDAgMSAyLjk1IDBtMS4wOCAxMS44OCAxLjUzMi0yLjY4M3EuMDM5LS4wNy4wNjktLjE0MmExLjIgMS4yIDAgMCAwLS4wNzUtMS4wNTJMMTQuNTQ5IDguNzJhMS4xNyAxLjE3IDAgMCAwLTEuMDItLjU5N2gtMy4wNjNjLS40MjIgMC0uODEyLjIyNy0xLjAyMi41OTdsLTEuNTMxIDIuNjgzYy0uMjEuMzctLjIxLjgyNCAwIDEuMTk0bDEuNTM0IDIuNjgzYTEuMTggMS4xOCAwIDAgMCAxLjAyMS41OTdoMy4wNjZxLjA0IDAgLjA3OS0uMDAyYy4zOTEtLjAyNy43NDYtLjI0OC45NDItLjU5NSIgY2xpcC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo=) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0ibTEzLjQ3NSAzLjQgNS4xNSAzLjAwNkEyLjk5IDIuOTkgMCAwIDEgMjAuMSA4Ljk5MXY2LjAxNWMwIDEuMDY1LS41NjQgMi4wNS0xLjQ3NiAyLjU4NWwtNS4xNDkgMy4wMDhhMi45MiAyLjkyIDAgMCAxLTIuOTUgMGwtNS4xNS0zLjAwOEEzIDMgMCAwIDEgMy45IDE1LjAwNlY4Ljk5YTMgMyAwIDAgMSAxLjQ3NS0yLjU4NWw1LjE1LTMuMDA1YTIuOTIgMi45MiAwIDAgMSAyLjk1IDBtMS4wOCAxMS44OCAxLjUzMi0yLjY4M3EuMDM5LS4wNy4wNjktLjE0MmExLjIgMS4yIDAgMCAwLS4wNzUtMS4wNTJMMTQuNTQ5IDguNzJhMS4xNyAxLjE3IDAgMCAwLTEuMDItLjU5N2gtMy4wNjNjLS40MjIgMC0uODEyLjIyNy0xLjAyMi41OTdsLTEuNTMxIDIuNjgzYy0uMjEuMzctLjIxLjgyNCAwIDEuMTk0bDEuNTM0IDIuNjgzYTEuMTggMS4xOCAwIDAgMCAxLjAyMS41OTdoMy4wNjZxLjA0IDAgLjA3OS0uMDAyYy4zOTEtLjAyNy43NDYtLjI0OC45NDItLjU5NSIgY2xpcC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo=) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNMWVhfX2EpIj4KICAgICAgICA8cGF0aCBmaWxsPSIjRkUwMDVCIiBkPSJNMjQgMEgwdjI0aDI0eiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0ibTEzLjMxMSA0LjM1NiA0LjU3NyAyLjY3MkEyLjY2IDIuNjYgMCAwIDEgMTkuMiA5LjMyNnY1LjM0NmMwIC45NDctLjUwMSAxLjgyMi0xLjMxMiAyLjI5N2wtNC41NzcgMi42NzVhMi41OSAyLjU5IDAgMCAxLTIuNjIzIDBsLTQuNTc3LTIuNjc1QTIuNjYgMi42NiAwIDAgMSA0LjggMTQuNjcyVjkuMzI2YzAtLjk0OC41LTEuODIzIDEuMzExLTIuMjk4bDQuNTc3LTIuNjcyYTIuNTkgMi41OSAwIDAgMSAyLjYyMyAwbS45NiAxMC41NiAxLjM2Mi0yLjM4NWExLjA2IDEuMDYgMCAwIDAtLjAwNS0xLjA2MWwtMS4zNjItMi4zODZhMS4wNCAxLjA0IDAgMCAwLS45MDgtLjUzaC0yLjcyMmMtLjM3NSAwLS43MjEuMjAxLS45MDguNTNMOC4zNjcgMTEuNDdhMS4wOCAxLjA4IDAgMCAwIDAgMS4wNjJsMS4zNjQgMi4zODVhMS4wNSAxLjA1IDAgMCAwIC45MDguNTNoMi43MjVsLjA3LS4wMDJhMS4wNCAxLjA0IDAgMCAwIC44MzctLjUyOCIgY2xpcC1ydWxlPSJldmVub2RkIi8+CiAgICA8L2c+CiAgICA8ZGVmcz4KICAgICAgICA8Y2xpcFBhdGggaWQ9IkxZWF9fYSI+CiAgICAgICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0wIDBoMjR2MjRIMHoiLz4KICAgICAgICA8L2NsaXBQYXRoPgogICAgPC9kZWZzPgo8L3N2Zz4K)
 * @see https://web3icons.io/tokens/LYX
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenLYX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenLYX', __iconNode);
;
}),
];

//# sourceMappingURL=1qqr_%40web3icons_react_dist_0h_gvt1._.js.map