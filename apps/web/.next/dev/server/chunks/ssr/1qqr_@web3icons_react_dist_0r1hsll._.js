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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenFIO.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenFIO
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-ssr] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#425CC7',
                d: 'M12.424 14.572v6.04c0 .32-.201.474-.45.339l-3.326-1.783a1.03 1.03 0 0 1-.453-.83v-5.903q.075.06.159.106z'
            }
        ],
        [
            'path',
            {
                fill: '#005CB9',
                d: 'm8.573 11.776 6.859-3.517a.81.81 0 0 0 .377-.665V3.319c0-.265-.17-.387-.377-.281l-6.32 3.241c-.652.35-.954.515-.918 1.254v3.962c0 .252.173.387.38.28'
            }
        ],
        [
            'path',
            {
                fill: '#3CB4E5',
                d: 'm8.573 6.883 6.859 3.517c.23.146.37.396.377.668v4.272c0 .265-.17.39-.377.284l-6.859-3.518a.81.81 0 0 1-.379-.667V7.166c0-.261.173-.39.38-.283'
            }
        ],
        [
            'path',
            {
                fill: '#00A0DF',
                d: 'm8.573 11.775 4.77-2.446-4.77-2.446a.24.24 0 0 0-.265 0 .95.95 0 0 0-.114.414v4.142q.004.137.056.266c.063.107.2.144.308.08z'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M12.424 14.572v6.04c0 .32-.202.474-.45.339l-3.326-1.783a1.03 1.03 0 0 1-.453-.83v-5.903q.075.06.159.106zm-3.851-2.796 6.859-3.517a.81.81 0 0 0 .377-.665V3.319c0-.265-.17-.387-.377-.281l-6.32 3.241c-.652.35-.954.515-.918 1.254v3.962c0 .252.173.387.38.28'
            }
        ],
        [
            'path',
            {
                fill: 'currentColor',
                d: 'm8.573 6.883 6.859 3.518c.23.145.37.396.377.667v4.272c0 .265-.17.39-.377.284l-6.859-3.517a.81.81 0 0 1-.379-.668V7.167c0-.262.173-.39.38-.284'
            }
        ],
        [
            'path',
            {
                fill: 'currentColor',
                d: 'm8.573 11.777 4.77-2.446-4.77-2.446a.24.24 0 0 0-.265 0 .95.95 0 0 0-.114.414v4.142q.004.138.056.266c.063.107.2.143.308.08z'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#FIO__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#005CB9',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M12.377 14.286v5.37c0 .284-.18.42-.4.3L9.02 18.372a.92.92 0 0 1-.402-.738v-5.247a1 1 0 0 0 .14.094zM8.954 11.8l6.097-3.125a.72.72 0 0 0 .334-.592v-3.8c0-.235-.15-.343-.334-.25L9.432 6.916c-.579.311-.848.457-.815 1.114v3.522c0 .224.153.344.337.25'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'm8.954 7.452 6.097 3.126c.204.13.33.352.334.593v3.798c0 .236-.15.346-.334.252l-6.097-3.126a.72.72 0 0 1-.337-.594V7.703c0-.232.153-.346.337-.251'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'm8.954 11.802 4.24-2.174-4.24-2.174a.21.21 0 0 0-.236 0 .84.84 0 0 0-.1.367v3.683a.7.7 0 0 0 .049.235.2.2 0 0 0 .274.072z'
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
                        id: 'FIO__a'
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
 * @component @name TokenFIO
 * @description Web3Icon for TokenFIO
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiM0MjVDQzciIGQ9Ik0xMi40MjQgMTQuNTcydjYuMDRjMCAuMzItLjIwMS40NzQtLjQ1LjMzOWwtMy4zMjYtMS43ODNhMS4wMyAxLjAzIDAgMCAxLS40NTMtLjgzdi01LjkwM3EuMDc1LjA2LjE1OS4xMDZ6Ii8+CiAgICA8cGF0aCBmaWxsPSIjMDA1Q0I5IiBkPSJtOC41NzMgMTEuNzc2IDYuODU5LTMuNTE3YS44MS44MSAwIDAgMCAuMzc3LS42NjVWMy4zMTljMC0uMjY1LS4xNy0uMzg3LS4zNzctLjI4MWwtNi4zMiAzLjI0MWMtLjY1Mi4zNS0uOTU0LjUxNS0uOTE4IDEuMjU0djMuOTYyYzAgLjI1Mi4xNzMuMzg3LjM4LjI4Ii8+CiAgICA8cGF0aCBmaWxsPSIjM0NCNEU1IiBkPSJtOC41NzMgNi44ODMgNi44NTkgMy41MTdjLjIzLjE0Ni4zNy4zOTYuMzc3LjY2OHY0LjI3MmMwIC4yNjUtLjE3LjM5LS4zNzcuMjg0bC02Ljg1OS0zLjUxOGEuODEuODEgMCAwIDEtLjM3OS0uNjY3VjcuMTY2YzAtLjI2MS4xNzMtLjM5LjM4LS4yODMiLz4KICAgIDxwYXRoIGZpbGw9IiMwMEEwREYiIGQ9Im04LjU3MyAxMS43NzUgNC43Ny0yLjQ0Ni00Ljc3LTIuNDQ2YS4yNC4yNCAwIDAgMC0uMjY1IDAgLjk1Ljk1IDAgMCAwLS4xMTQuNDE0djQuMTQycS4wMDQuMTM3LjA1Ni4yNjZjLjA2My4xMDcuMi4xNDQuMzA4LjA4eiIvPgo8L3N2Zz4K) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xMi40MjQgMTQuNTcydjYuMDRjMCAuMzItLjIwMi40NzQtLjQ1LjMzOWwtMy4zMjYtMS43ODNhMS4wMyAxLjAzIDAgMCAxLS40NTMtLjgzdi01LjkwM3EuMDc1LjA2LjE1OS4xMDZ6bS0zLjg1MS0yLjc5NiA2Ljg1OS0zLjUxN2EuODEuODEgMCAwIDAgLjM3Ny0uNjY1VjMuMzE5YzAtLjI2NS0uMTctLjM4Ny0uMzc3LS4yODFsLTYuMzIgMy4yNDFjLS42NTIuMzUtLjk1NC41MTUtLjkxOCAxLjI1NHYzLjk2MmMwIC4yNTIuMTczLjM4Ny4zOC4yOCIvPgogICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0ibTguNTczIDYuODgzIDYuODU5IDMuNTE4Yy4yMy4xNDUuMzcuMzk2LjM3Ny42Njd2NC4yNzJjMCAuMjY1LS4xNy4zOS0uMzc3LjI4NGwtNi44NTktMy41MTdhLjgxLjgxIDAgMCAxLS4zNzktLjY2OFY3LjE2N2MwLS4yNjIuMTczLS4zOS4zOC0uMjg0Ii8+CiAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJtOC41NzMgMTEuNzc3IDQuNzctMi40NDYtNC43Ny0yLjQ0NmEuMjQuMjQgMCAwIDAtLjI2NSAwIC45NS45NSAwIDAgMC0uMTE0LjQxNHY0LjE0MnEuMDA0LjEzOC4wNTYuMjY2Yy4wNjMuMTA3LjIuMTQzLjMwOC4wOHoiLz4KPC9zdmc+Cg==) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNGSU9fX2EpIj4KICAgICAgICA8cGF0aCBmaWxsPSIjMDA1Q0I5IiBkPSJNMjQgMEgwdjI0aDI0eiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xMi4zNzcgMTQuMjg2djUuMzdjMCAuMjg0LS4xOC40Mi0uNC4zTDkuMDIgMTguMzcyYS45Mi45MiAwIDAgMS0uNDAyLS43Mzh2LTUuMjQ3YTEgMSAwIDAgMCAuMTQuMDk0ek04Ljk1NCAxMS44bDYuMDk3LTMuMTI1YS43Mi43MiAwIDAgMCAuMzM0LS41OTJ2LTMuOGMwLS4yMzUtLjE1LS4zNDMtLjMzNC0uMjVMOS40MzIgNi45MTZjLS41NzkuMzExLS44NDguNDU3LS44MTUgMS4xMTR2My41MjJjMCAuMjI0LjE1My4zNDQuMzM3LjI1Ii8+CiAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0ibTguOTU0IDcuNDUyIDYuMDk3IDMuMTI2Yy4yMDQuMTMuMzMuMzUyLjMzNC41OTN2My43OThjMCAuMjM2LS4xNS4zNDYtLjMzNC4yNTJsLTYuMDk3LTMuMTI2YS43Mi43MiAwIDAgMS0uMzM3LS41OTRWNy43MDNjMC0uMjMyLjE1My0uMzQ2LjMzNy0uMjUxIi8+CiAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0ibTguOTU0IDExLjgwMiA0LjI0LTIuMTc0LTQuMjQtMi4xNzRhLjIxLjIxIDAgMCAwLS4yMzYgMCAuODQuODQgMCAwIDAtLjEuMzY3djMuNjgzYS43LjcgMCAwIDAgLjA0OS4yMzUuMi4yIDAgMCAwIC4yNzQuMDcyeiIvPgogICAgPC9nPgogICAgPGRlZnM+CiAgICAgICAgPGNsaXBQYXRoIGlkPSJGSU9fX2EiPgogICAgICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMCAwaDI0djI0SDB6Ii8+CiAgICAgICAgPC9jbGlwUGF0aD4KICAgIDwvZGVmcz4KPC9zdmc+Cg==)
 * @see https://web3icons.io/tokens/FIO
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenFIO = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenFIO', __iconNode);
;
}),
];

//# sourceMappingURL=1qqr_%40web3icons_react_dist_0r1hsll._.js.map