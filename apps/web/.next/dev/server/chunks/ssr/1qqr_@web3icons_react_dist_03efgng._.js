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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenXRT.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenXRT
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-ssr] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#03A2E5',
                d: 'M12.282 5.174a.56.56 0 1 0-.637-.92.562.562 0 0 0 .066.932L3.816 18.803a.56.56 0 1 0 .306.5h15.729a.56.56 0 0 0 .562.56.56.56 0 1 0-.017-1.12zm7.84 13.65L11.986 5.26 4.029 18.993l.017.028h15.881a.56.56 0 0 1 .194-.198',
                fillRule: 'evenodd',
                clipRule: 'evenodd'
            }
        ],
        [
            'path',
            {
                fill: '#545873',
                d: 'm8.055 16.496 3.93-2.028 3.934 2.028z'
            }
        ],
        [
            'path',
            {
                fill: '#00A8EB',
                d: 'm11.987 9.753-3.932 6.74 3.932-1.988z'
            }
        ],
        [
            'path',
            {
                fill: '#B4C0F2',
                d: 'm11.987 9.753 3.932 6.74-3.932-1.988z'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M12.282 5.174a.56.56 0 1 0-.637-.92.562.562 0 0 0 .066.932L3.816 18.803a.56.56 0 1 0 .306.5h15.729a.56.56 0 0 0 .562.56.56.56 0 1 0-.017-1.12zm7.84 13.65L11.986 5.26 4.029 18.993l.017.028h15.881a.56.56 0 0 1 .194-.198',
                fillRule: 'evenodd',
                clipRule: 'evenodd'
            }
        ],
        [
            'path',
            {
                fill: 'currentColor',
                d: 'm8.055 16.494 3.93-2.028 3.934 2.028z'
            }
        ],
        [
            'path',
            {
                fill: 'currentColor',
                d: 'm11.987 9.753-3.932 6.74 3.932-1.988zm0 0 3.932 6.74-3.932-1.988z'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#XRT__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#03A2E5',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M12.25 5.932a.498.498 0 1 0-.566-.818.5.5 0 0 0 .06.829L4.725 18.046a.497.497 0 0 0-.724.395.5.5 0 1 0 .996.05h13.98a.5.5 0 0 0 .5.498.499.499 0 1 0-.015-.996zm6.969 12.133-7.23-12.057-7.075 12.207.016.025h14.117a.5.5 0 0 1 .172-.175',
                        fillRule: 'evenodd',
                        clipRule: 'evenodd'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'm8.493 15.994 3.493-1.803 3.498 1.803z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'm11.988 10.002-3.495 5.992 3.495-1.768zm0 0 3.496 5.992-3.496-1.768z'
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
                        id: 'XRT__a'
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
 * @component @name TokenXRT
 * @description Web3Icon for TokenXRT
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiMwM0EyRTUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTEyLjI4MiA1LjE3NGEuNTYuNTYgMCAxIDAtLjYzNy0uOTIuNTYyLjU2MiAwIDAgMCAuMDY2LjkzMkwzLjgxNiAxOC44MDNhLjU2LjU2IDAgMSAwIC4zMDYuNWgxNS43MjlhLjU2LjU2IDAgMCAwIC41NjIuNTYuNTYuNTYgMCAxIDAtLjAxNy0xLjEyem03Ljg0IDEzLjY1TDExLjk4NiA1LjI2IDQuMDI5IDE4Ljk5M2wuMDE3LjAyOGgxNS44ODFhLjU2LjU2IDAgMCAxIC4xOTQtLjE5OCIgY2xpcC1ydWxlPSJldmVub2RkIi8+CiAgICA8cGF0aCBmaWxsPSIjNTQ1ODczIiBkPSJtOC4wNTUgMTYuNDk2IDMuOTMtMi4wMjggMy45MzQgMi4wMjh6Ii8+CiAgICA8cGF0aCBmaWxsPSIjMDBBOEVCIiBkPSJtMTEuOTg3IDkuNzUzLTMuOTMyIDYuNzQgMy45MzItMS45ODh6Ii8+CiAgICA8cGF0aCBmaWxsPSIjQjRDMEYyIiBkPSJtMTEuOTg3IDkuNzUzIDMuOTMyIDYuNzQtMy45MzItMS45ODh6Ii8+Cjwvc3ZnPgo=) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTEyLjI4MiA1LjE3NGEuNTYuNTYgMCAxIDAtLjYzNy0uOTIuNTYyLjU2MiAwIDAgMCAuMDY2LjkzMkwzLjgxNiAxOC44MDNhLjU2LjU2IDAgMSAwIC4zMDYuNWgxNS43MjlhLjU2LjU2IDAgMCAwIC41NjIuNTYuNTYuNTYgMCAxIDAtLjAxNy0xLjEyem03Ljg0IDEzLjY1TDExLjk4NiA1LjI2IDQuMDI5IDE4Ljk5M2wuMDE3LjAyOGgxNS44ODFhLjU2LjU2IDAgMCAxIC4xOTQtLjE5OCIgY2xpcC1ydWxlPSJldmVub2RkIi8+CiAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJtOC4wNTUgMTYuNDk0IDMuOTMtMi4wMjggMy45MzQgMi4wMjh6Ii8+CiAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJtMTEuOTg3IDkuNzUzLTMuOTMyIDYuNzQgMy45MzItMS45ODh6bTAgMCAzLjkzMiA2Ljc0LTMuOTMyLTEuOTg4eiIvPgo8L3N2Zz4K) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNYUlRfX2EpIj4KICAgICAgICA8cGF0aCBmaWxsPSIjMDNBMkU1IiBkPSJNMjQgMEgwdjI0aDI0eiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTEyLjI1IDUuOTMyYS40OTguNDk4IDAgMSAwLS41NjYtLjgxOC41LjUgMCAwIDAgLjA2LjgyOUw0LjcyNSAxOC4wNDZhLjQ5Ny40OTcgMCAwIDAtLjcyNC4zOTUuNS41IDAgMSAwIC45OTYuMDVoMTMuOThhLjUuNSAwIDAgMCAuNS40OTguNDk5LjQ5OSAwIDEgMC0uMDE1LS45OTZ6bTYuOTY5IDEyLjEzMy03LjIzLTEyLjA1Ny03LjA3NSAxMi4yMDcuMDE2LjAyNWgxNC4xMTdhLjUuNSAwIDAgMSAuMTcyLS4xNzUiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Im04LjQ5MyAxNS45OTQgMy40OTMtMS44MDMgMy40OTggMS44MDN6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0ibTExLjk4OCAxMC4wMDItMy40OTUgNS45OTIgMy40OTUtMS43Njh6bTAgMCAzLjQ5NiA1Ljk5Mi0zLjQ5Ni0xLjc2OHoiLz4KICAgIDwvZz4KICAgIDxkZWZzPgogICAgICAgIDxjbGlwUGF0aCBpZD0iWFJUX19hIj4KICAgICAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTAgMGgyNHYyNEgweiIvPgogICAgICAgIDwvY2xpcFBhdGg+CiAgICA8L2RlZnM+Cjwvc3ZnPgo=)
 * @see https://web3icons.io/tokens/XRT
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenXRT = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenXRT', __iconNode);
;
}),
];

//# sourceMappingURL=1qqr_%40web3icons_react_dist_03efgng._.js.map