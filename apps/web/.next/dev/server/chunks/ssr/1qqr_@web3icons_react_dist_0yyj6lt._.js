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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenSMARTCREDIT.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenSMARTCREDIT
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-ssr] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#5999E9',
                d: 'M4.1 16.659c-.084-.168-.09-.62.551-1.09.094-.07.225-.16.382-.269 1.185-.817 3.934-2.715 4.967-5.083.87-1.995 1.126-4.875 1.21-5.816.012-.132.02-.226.026-.274.05-.387.335-1.074.67-1.124.334-.05.735.553.768 1.124.19 3.23.521 4.856 1.192 6.09.525.967 3.628 4.048 5.427 5.351.274.146.779.568.619 1.09-.16.524-.959.33-1.338.169-1.282-.72-4.41-2.135-6.669-2.04-2.257.094-5.079 1.287-6.206 1.872-.448.175-1.393.422-1.599 0m2.075-5.718a2.118 2.118 0 1 0 0-4.236 2.118 2.118 0 0 0 0 4.236m11.647 0a2.118 2.118 0 1 0 0-4.236 2.118 2.118 0 0 0 0 4.236m-3.705 7.941a2.117 2.117 0 1 1-4.235 0 2.117 2.117 0 0 1 4.235 0',
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
                d: 'M4.1 16.659c-.084-.168-.09-.62.551-1.09.094-.07.225-.16.382-.269 1.185-.817 3.934-2.715 4.967-5.083.87-1.995 1.126-4.875 1.21-5.816.012-.132.02-.226.026-.274.05-.387.335-1.074.67-1.124.334-.05.735.553.768 1.124.19 3.23.521 4.856 1.192 6.09.525.967 3.628 4.048 5.427 5.351.273.146.779.568.619 1.09-.16.524-.959.33-1.338.169-1.282-.72-4.41-2.135-6.669-2.04-2.257.094-5.079 1.287-6.206 1.872-.448.175-1.393.422-1.599 0m2.075-5.718a2.118 2.118 0 1 0 0-4.236 2.118 2.118 0 0 0 0 4.236m11.647 0a2.118 2.118 0 1 0 0-4.236 2.118 2.118 0 0 0 0 4.236m-3.705 7.941a2.117 2.117 0 1 1-4.235 0 2.117 2.117 0 0 1 4.235 0',
                fillRule: 'evenodd',
                clipRule: 'evenodd'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#SMARTCREDIT__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#5999E9',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M4.978 16.141c-.075-.149-.08-.551.49-.97q.127-.09.34-.237c1.052-.727 3.496-2.414 4.414-4.519.773-1.773 1.001-4.333 1.076-5.17.01-.117.018-.201.023-.243.045-.344.298-.955.595-1 .297-.044.654.492.683 1 .168 2.87.463 4.316 1.06 5.413.466.86 3.224 3.598 4.824 4.757.242.13.692.504.55.97-.143.465-.852.292-1.19.148-1.14-.64-3.92-1.897-5.927-1.813S7.4 15.622 6.398 16.141c-.398.156-1.238.375-1.421 0m1.844-5.082a1.883 1.883 0 1 0 0-3.766 1.883 1.883 0 0 0 0 3.766m10.353 0a1.883 1.883 0 1 0 0-3.766 1.883 1.883 0 0 0 0 3.766m-3.294 7.059a1.882 1.882 0 1 1-3.764 0 1.882 1.882 0 0 1 3.764 0',
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
                        id: 'SMARTCREDIT__a'
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
 * @component @name TokenSMARTCREDIT
 * @description Web3Icon for TokenSMARTCREDIT
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiM1OTk5RTkiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTQuMSAxNi42NTljLS4wODQtLjE2OC0uMDktLjYyLjU1MS0xLjA5LjA5NC0uMDcuMjI1LS4xNi4zODItLjI2OSAxLjE4NS0uODE3IDMuOTM0LTIuNzE1IDQuOTY3LTUuMDgzLjg3LTEuOTk1IDEuMTI2LTQuODc1IDEuMjEtNS44MTYuMDEyLS4xMzIuMDItLjIyNi4wMjYtLjI3NC4wNS0uMzg3LjMzNS0xLjA3NC42Ny0xLjEyNC4zMzQtLjA1LjczNS41NTMuNzY4IDEuMTI0LjE5IDMuMjMuNTIxIDQuODU2IDEuMTkyIDYuMDkuNTI1Ljk2NyAzLjYyOCA0LjA0OCA1LjQyNyA1LjM1MS4yNzQuMTQ2Ljc3OS41NjguNjE5IDEuMDktLjE2LjUyNC0uOTU5LjMzLTEuMzM4LjE2OS0xLjI4Mi0uNzItNC40MS0yLjEzNS02LjY2OS0yLjA0LTIuMjU3LjA5NC01LjA3OSAxLjI4Ny02LjIwNiAxLjg3Mi0uNDQ4LjE3NS0xLjM5My40MjItMS41OTkgMG0yLjA3NS01LjcxOGEyLjExOCAyLjExOCAwIDEgMCAwLTQuMjM2IDIuMTE4IDIuMTE4IDAgMCAwIDAgNC4yMzZtMTEuNjQ3IDBhMi4xMTggMi4xMTggMCAxIDAgMC00LjIzNiAyLjExOCAyLjExOCAwIDAgMCAwIDQuMjM2bS0zLjcwNSA3Ljk0MWEyLjExNyAyLjExNyAwIDEgMS00LjIzNSAwIDIuMTE3IDIuMTE3IDAgMCAxIDQuMjM1IDAiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4K) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTQuMSAxNi42NTljLS4wODQtLjE2OC0uMDktLjYyLjU1MS0xLjA5LjA5NC0uMDcuMjI1LS4xNi4zODItLjI2OSAxLjE4NS0uODE3IDMuOTM0LTIuNzE1IDQuOTY3LTUuMDgzLjg3LTEuOTk1IDEuMTI2LTQuODc1IDEuMjEtNS44MTYuMDEyLS4xMzIuMDItLjIyNi4wMjYtLjI3NC4wNS0uMzg3LjMzNS0xLjA3NC42Ny0xLjEyNC4zMzQtLjA1LjczNS41NTMuNzY4IDEuMTI0LjE5IDMuMjMuNTIxIDQuODU2IDEuMTkyIDYuMDkuNTI1Ljk2NyAzLjYyOCA0LjA0OCA1LjQyNyA1LjM1MS4yNzMuMTQ2Ljc3OS41NjguNjE5IDEuMDktLjE2LjUyNC0uOTU5LjMzLTEuMzM4LjE2OS0xLjI4Mi0uNzItNC40MS0yLjEzNS02LjY2OS0yLjA0LTIuMjU3LjA5NC01LjA3OSAxLjI4Ny02LjIwNiAxLjg3Mi0uNDQ4LjE3NS0xLjM5My40MjItMS41OTkgMG0yLjA3NS01LjcxOGEyLjExOCAyLjExOCAwIDEgMCAwLTQuMjM2IDIuMTE4IDIuMTE4IDAgMCAwIDAgNC4yMzZtMTEuNjQ3IDBhMi4xMTggMi4xMTggMCAxIDAgMC00LjIzNiAyLjExOCAyLjExOCAwIDAgMCAwIDQuMjM2bS0zLjcwNSA3Ljk0MWEyLjExNyAyLjExNyAwIDEgMS00LjIzNSAwIDIuMTE3IDIuMTE3IDAgMCAxIDQuMjM1IDAiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4K) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNTTUFSVENSRURJVF9fYSkiPgogICAgICAgIDxwYXRoIGZpbGw9IiM1OTk5RTkiIGQ9Ik0yNCAwSDB2MjRoMjR6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNNC45NzggMTYuMTQxYy0uMDc1LS4xNDktLjA4LS41NTEuNDktLjk3cS4xMjctLjA5LjM0LS4yMzdjMS4wNTItLjcyNyAzLjQ5Ni0yLjQxNCA0LjQxNC00LjUxOS43NzMtMS43NzMgMS4wMDEtNC4zMzMgMS4wNzYtNS4xNy4wMS0uMTE3LjAxOC0uMjAxLjAyMy0uMjQzLjA0NS0uMzQ0LjI5OC0uOTU1LjU5NS0xIC4yOTctLjA0NC42NTQuNDkyLjY4MyAxIC4xNjggMi44Ny40NjMgNC4zMTYgMS4wNiA1LjQxMy40NjYuODYgMy4yMjQgMy41OTggNC44MjQgNC43NTcuMjQyLjEzLjY5Mi41MDQuNTUuOTctLjE0My40NjUtLjg1Mi4yOTItMS4xOS4xNDgtMS4xNC0uNjQtMy45Mi0xLjg5Ny01LjkyNy0xLjgxM1M3LjQgMTUuNjIyIDYuMzk4IDE2LjE0MWMtLjM5OC4xNTYtMS4yMzguMzc1LTEuNDIxIDBtMS44NDQtNS4wODJhMS44ODMgMS44ODMgMCAxIDAgMC0zLjc2NiAxLjg4MyAxLjg4MyAwIDAgMCAwIDMuNzY2bTEwLjM1MyAwYTEuODgzIDEuODgzIDAgMSAwIDAtMy43NjYgMS44ODMgMS44ODMgMCAwIDAgMCAzLjc2Nm0tMy4yOTQgNy4wNTlhMS44ODIgMS44ODIgMCAxIDEtMy43NjQgMCAxLjg4MiAxLjg4MiAwIDAgMSAzLjc2NCAwIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KICAgIDwvZz4KICAgIDxkZWZzPgogICAgICAgIDxjbGlwUGF0aCBpZD0iU01BUlRDUkVESVRfX2EiPgogICAgICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMCAwaDI0djI0SDB6Ii8+CiAgICAgICAgPC9jbGlwUGF0aD4KICAgIDwvZGVmcz4KPC9zdmc+Cg==)
 * @see https://web3icons.io/tokens/SMARTCREDIT
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenSMARTCREDIT = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenSMARTCREDIT', __iconNode);
;
}),
];

//# sourceMappingURL=1qqr_%40web3icons_react_dist_0yyj6lt._.js.map