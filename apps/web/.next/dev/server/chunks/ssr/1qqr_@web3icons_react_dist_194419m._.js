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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenWOW.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenWOW
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-ssr] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#F3BA2F',
                d: 'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18'
            }
        ],
        [
            'path',
            {
                fill: '#000',
                d: 'M12 19.875a7.875 7.875 0 1 0 0-15.75 7.875 7.875 0 0 0 0 15.75M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18',
                fillRule: 'evenodd',
                clipRule: 'evenodd'
            }
        ],
        [
            'path',
            {
                fill: '#000',
                d: 'M9.75 10.313c.622 0 1.126-.63 1.126-1.407 0-.776-.504-1.406-1.126-1.406-.62 0-1.125.63-1.125 1.406 0 .777.504 1.406 1.125 1.406m4.5.001c.622 0 1.125-.63 1.125-1.407 0-.776-.503-1.406-1.125-1.406-.621 0-1.124.63-1.124 1.406 0 .777.503 1.406 1.124 1.406M12 18.188c1.554 0 2.813-1.511 2.813-3.375s-1.26-3.376-2.812-3.376c-1.554 0-2.813 1.512-2.813 3.376s1.26 3.374 2.813 3.374'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#WOW__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#F3BA2F',
                        d: 'M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#000',
                        d: 'M12 19a7 7 0 1 0 0-14 7 7 0 0 0 0 14m0 1a8 8 0 1 0 0-16 8 8 0 0 0 0 16',
                        fillRule: 'evenodd',
                        clipRule: 'evenodd'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#000',
                        d: 'M10 10.5c.553 0 1-.56 1-1.25S10.554 8 10 8s-1 .56-1 1.25.448 1.25 1 1.25m4 0c.553 0 1-.56 1-1.25S14.553 8 14 8s-1 .56-1 1.25.448 1.25 1 1.25m-2 7c1.381 0 2.5-1.343 2.5-3s-1.119-3-2.5-3c-1.38 0-2.5 1.343-2.5 3s1.12 3 2.5 3'
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
                        id: 'WOW__a'
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
 * @component @name TokenWOW
 * @description Web3Icon for TokenWOW
 *
 * @preview (branded, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNGM0JBMkYiIGQ9Ik0xMiAyMWE5IDkgMCAxIDAgMC0xOCA5IDkgMCAwIDAgMCAxOCIvPgogICAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTIgMTkuODc1YTcuODc1IDcuODc1IDAgMSAwIDAtMTUuNzUgNy44NzUgNy44NzUgMCAwIDAgMCAxNS43NU0xMiAyMWE5IDkgMCAxIDAgMC0xOCA5IDkgMCAwIDAgMCAxOCIgY2xpcC1ydWxlPSJldmVub2RkIi8+CiAgICA8cGF0aCBmaWxsPSIjMDAwIiBkPSJNOS43NSAxMC4zMTNjLjYyMiAwIDEuMTI2LS42MyAxLjEyNi0xLjQwNyAwLS43NzYtLjUwNC0xLjQwNi0xLjEyNi0xLjQwNi0uNjIgMC0xLjEyNS42My0xLjEyNSAxLjQwNiAwIC43NzcuNTA0IDEuNDA2IDEuMTI1IDEuNDA2bTQuNS4wMDFjLjYyMiAwIDEuMTI1LS42MyAxLjEyNS0xLjQwNyAwLS43NzYtLjUwMy0xLjQwNi0xLjEyNS0xLjQwNi0uNjIxIDAtMS4xMjQuNjMtMS4xMjQgMS40MDYgMCAuNzc3LjUwMyAxLjQwNiAxLjEyNCAxLjQwNk0xMiAxOC4xODhjMS41NTQgMCAyLjgxMy0xLjUxMSAyLjgxMy0zLjM3NXMtMS4yNi0zLjM3Ni0yLjgxMi0zLjM3NmMtMS41NTQgMC0yLjgxMyAxLjUxMi0yLjgxMyAzLjM3NnMxLjI2IDMuMzc0IDIuODEzIDMuMzc0Ii8+Cjwvc3ZnPgo=) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNXT1dfX2EpIj4KICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMjQgMEgwdjI0aDI0eiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNGM0JBMkYiIGQ9Ik0xMiAyMGE4IDggMCAxIDAgMC0xNiA4IDggMCAwIDAgMCAxNiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiMwMDAiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTEyIDE5YTcgNyAwIDEgMCAwLTE0IDcgNyAwIDAgMCAwIDE0bTAgMWE4IDggMCAxIDAgMC0xNiA4IDggMCAwIDAgMCAxNiIgY2xpcC1ydWxlPSJldmVub2RkIi8+CiAgICAgICAgPHBhdGggZmlsbD0iIzAwMCIgZD0iTTEwIDEwLjVjLjU1MyAwIDEtLjU2IDEtMS4yNVMxMC41NTQgOCAxMCA4cy0xIC41Ni0xIDEuMjUuNDQ4IDEuMjUgMSAxLjI1bTQgMGMuNTUzIDAgMS0uNTYgMS0xLjI1UzE0LjU1MyA4IDE0IDhzLTEgLjU2LTEgMS4yNS40NDggMS4yNSAxIDEuMjVtLTIgN2MxLjM4MSAwIDIuNS0xLjM0MyAyLjUtM3MtMS4xMTktMy0yLjUtM2MtMS4zOCAwLTIuNSAxLjM0My0yLjUgM3MxLjEyIDMgMi41IDMiLz4KICAgIDwvZz4KICAgIDxkZWZzPgogICAgICAgIDxjbGlwUGF0aCBpZD0iV09XX19hIj4KICAgICAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTAgMGgyNHYyNEgweiIvPgogICAgICAgIDwvY2xpcFBhdGg+CiAgICA8L2RlZnM+Cjwvc3ZnPgo=)
 * @see https://web3icons.io/tokens/WOW
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenWOW = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenWOW', __iconNode);
;
}),
];

//# sourceMappingURL=1qqr_%40web3icons_react_dist_194419m._.js.map