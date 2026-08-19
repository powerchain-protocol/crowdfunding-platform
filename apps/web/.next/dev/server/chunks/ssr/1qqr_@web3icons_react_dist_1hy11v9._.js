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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenSOUL.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenSOUL
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-ssr] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#17B1E8',
                d: 'M17.918 4.125H6.025C4.361 4.125 3 5.531 3 7.278v10.484c0 .912 1.078 1.348 1.664.664a1.732 1.732 0 0 1 2.666.02l.926 1.082a.93.93 0 0 0 1.418 0l.965-1.102a1.757 1.757 0 0 1 2.666 0l.964 1.12a.932.932 0 0 0 1.418 0l.964-1.12a1.756 1.756 0 0 1 2.666 0l.019.02c.586.684 1.664.248 1.664-.665V7.278c-.056-1.747-1.399-3.153-3.082-3.153'
            }
        ],
        [
            'path',
            {
                fill: '#fff',
                d: 'M15.376 10.875a1.687 1.687 0 1 0 0-3.375 1.687 1.687 0 0 0 0 3.375',
                opacity: '.5',
                fillOpacity: '.667'
            }
        ],
        [
            'path',
            {
                fill: '#fff',
                d: 'M15.375 10.313a1.124 1.124 0 1 0 0-2.25 1.124 1.124 0 0 0 0 2.25',
                fillOpacity: '.667'
            }
        ],
        [
            'path',
            {
                fill: '#fff',
                d: 'M8.625 10.875a1.687 1.687 0 1 0 0-3.374 1.687 1.687 0 0 0 0 3.374',
                opacity: '.5',
                fillOpacity: '.667'
            }
        ],
        [
            'path',
            {
                fill: '#fff',
                d: 'M8.625 10.313a1.125 1.125 0 1 0 0-2.25 1.125 1.125 0 0 0 0 2.25',
                fillOpacity: '.667'
            }
        ],
        [
            'path',
            {
                fill: '#17B1E8',
                d: 'M10.314 8.063a.563.563 0 1 0-1.126 0 .563.563 0 0 0 1.125 0m6.75 0a.562.562 0 1 0-1.125 0 .562.562 0 0 0 1.124 0',
                opacity: '.5'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M6.025 4.125h11.893c1.683 0 3.026 1.406 3.082 3.153V17.78c0 .913-1.078 1.349-1.664.665l-.018-.02a1.76 1.76 0 0 0-2.667 0l-.964 1.12a.93.93 0 0 1-1.418 0l-.964-1.12a1.76 1.76 0 0 0-2.666 0l-.965 1.103a.93.93 0 0 1-1.418 0l-.926-1.083a1.732 1.732 0 0 0-2.666-.02C4.078 19.11 3 18.673 3 17.761V7.278C3 5.53 4.361 4.125 6.025 4.125m2.6 6.75a1.687 1.687 0 0 0 1.522-2.415.563.563 0 1 1-.795-.796 1.687 1.687 0 1 0-.727 3.21m7.312-2.813c0-.149.06-.292.165-.397a1.688 1.688 0 1 0 .795.795.563.563 0 0 1-.96-.398',
                fillRule: 'evenodd',
                clipRule: 'evenodd'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#SOUL__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#17B1E8',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M6.689 5h10.572C18.756 5 19.95 6.25 20 7.802v9.337c0 .811-.958 1.198-1.48.59l-.015-.017a1.563 1.563 0 0 0-2.37 0l-.858.996a.827.827 0 0 1-1.26 0l-.857-.995a1.562 1.562 0 0 0-2.37 0l-.857.979a.825.825 0 0 1-1.261 0l-.823-.962a1.54 1.54 0 0 0-2.37-.018c-.521.609-1.479.22-1.479-.59v-9.32C4 6.25 5.21 5 6.689 5M9 11a1.5 1.5 0 0 0 1.353-2.147.5.5 0 1 1-.707-.707A1.5 1.5 0 1 0 9 11m6.5-2.5a.5.5 0 0 1 .146-.354 1.5 1.5 0 1 0 .707.707.5.5 0 0 1-.854-.353',
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
                        id: 'SOUL__a'
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
 * @component @name TokenSOUL
 * @description Web3Icon for TokenSOUL
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiMxN0IxRTgiIGQ9Ik0xNy45MTggNC4xMjVINi4wMjVDNC4zNjEgNC4xMjUgMyA1LjUzMSAzIDcuMjc4djEwLjQ4NGMwIC45MTIgMS4wNzggMS4zNDggMS42NjQuNjY0YTEuNzMyIDEuNzMyIDAgMCAxIDIuNjY2LjAybC45MjYgMS4wODJhLjkzLjkzIDAgMCAwIDEuNDE4IDBsLjk2NS0xLjEwMmExLjc1NyAxLjc1NyAwIDAgMSAyLjY2NiAwbC45NjQgMS4xMmEuOTMyLjkzMiAwIDAgMCAxLjQxOCAwbC45NjQtMS4xMmExLjc1NiAxLjc1NiAwIDAgMSAyLjY2NiAwbC4wMTkuMDJjLjU4Ni42ODQgMS42NjQuMjQ4IDEuNjY0LS42NjVWNy4yNzhjLS4wNTYtMS43NDctMS4zOTktMy4xNTMtMy4wODItMy4xNTMiLz4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iLjY2NyIgZD0iTTE1LjM3NiAxMC44NzVhMS42ODcgMS42ODcgMCAxIDAgMC0zLjM3NSAxLjY4NyAxLjY4NyAwIDAgMCAwIDMuMzc1IiBvcGFjaXR5PSIuNSIvPgogICAgPHBhdGggZmlsbD0iI2ZmZiIgZmlsbC1vcGFjaXR5PSIuNjY3IiBkPSJNMTUuMzc1IDEwLjMxM2ExLjEyNCAxLjEyNCAwIDEgMCAwLTIuMjUgMS4xMjQgMS4xMjQgMCAwIDAgMCAyLjI1Ii8+CiAgICA8cGF0aCBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9Ii42NjciIGQ9Ik04LjYyNSAxMC44NzVhMS42ODcgMS42ODcgMCAxIDAgMC0zLjM3NCAxLjY4NyAxLjY4NyAwIDAgMCAwIDMuMzc0IiBvcGFjaXR5PSIuNSIvPgogICAgPHBhdGggZmlsbD0iI2ZmZiIgZmlsbC1vcGFjaXR5PSIuNjY3IiBkPSJNOC42MjUgMTAuMzEzYTEuMTI1IDEuMTI1IDAgMSAwIDAtMi4yNSAxLjEyNSAxLjEyNSAwIDAgMCAwIDIuMjUiLz4KICAgIDxwYXRoIGZpbGw9IiMxN0IxRTgiIGQ9Ik0xMC4zMTQgOC4wNjNhLjU2My41NjMgMCAxIDAtMS4xMjYgMCAuNTYzLjU2MyAwIDAgMCAxLjEyNSAwbTYuNzUgMGEuNTYyLjU2MiAwIDEgMC0xLjEyNSAwIC41NjIuNTYyIDAgMCAwIDEuMTI0IDAiIG9wYWNpdHk9Ii41Ii8+Cjwvc3ZnPgo=) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTYuMDI1IDQuMTI1aDExLjg5M2MxLjY4MyAwIDMuMDI2IDEuNDA2IDMuMDgyIDMuMTUzVjE3Ljc4YzAgLjkxMy0xLjA3OCAxLjM0OS0xLjY2NC42NjVsLS4wMTgtLjAyYTEuNzYgMS43NiAwIDAgMC0yLjY2NyAwbC0uOTY0IDEuMTJhLjkzLjkzIDAgMCAxLTEuNDE4IDBsLS45NjQtMS4xMmExLjc2IDEuNzYgMCAwIDAtMi42NjYgMGwtLjk2NSAxLjEwM2EuOTMuOTMgMCAwIDEtMS40MTggMGwtLjkyNi0xLjA4M2ExLjczMiAxLjczMiAwIDAgMC0yLjY2Ni0uMDJDNC4wNzggMTkuMTEgMyAxOC42NzMgMyAxNy43NjFWNy4yNzhDMyA1LjUzIDQuMzYxIDQuMTI1IDYuMDI1IDQuMTI1bTIuNiA2Ljc1YTEuNjg3IDEuNjg3IDAgMCAwIDEuNTIyLTIuNDE1LjU2My41NjMgMCAxIDEtLjc5NS0uNzk2IDEuNjg3IDEuNjg3IDAgMSAwLS43MjcgMy4yMW03LjMxMi0yLjgxM2MwLS4xNDkuMDYtLjI5Mi4xNjUtLjM5N2ExLjY4OCAxLjY4OCAwIDEgMCAuNzk1Ljc5NS41NjMuNTYzIDAgMCAxLS45Ni0uMzk4IiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+Cg==) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNTT1VMX19hKSI+CiAgICAgICAgPHBhdGggZmlsbD0iIzE3QjFFOCIgZD0iTTI0IDBIMHYyNGgyNHoiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik02LjY4OSA1aDEwLjU3MkMxOC43NTYgNSAxOS45NSA2LjI1IDIwIDcuODAydjkuMzM3YzAgLjgxMS0uOTU4IDEuMTk4LTEuNDguNTlsLS4wMTUtLjAxN2ExLjU2MyAxLjU2MyAwIDAgMC0yLjM3IDBsLS44NTguOTk2YS44MjcuODI3IDAgMCAxLTEuMjYgMGwtLjg1Ny0uOTk1YTEuNTYyIDEuNTYyIDAgMCAwLTIuMzcgMGwtLjg1Ny45NzlhLjgyNS44MjUgMCAwIDEtMS4yNjEgMGwtLjgyMy0uOTYyYTEuNTQgMS41NCAwIDAgMC0yLjM3LS4wMThjLS41MjEuNjA5LTEuNDc5LjIyLTEuNDc5LS41OXYtOS4zMkM0IDYuMjUgNS4yMSA1IDYuNjg5IDVNOSAxMWExLjUgMS41IDAgMCAwIDEuMzUzLTIuMTQ3LjUuNSAwIDEgMS0uNzA3LS43MDdBMS41IDEuNSAwIDEgMCA5IDExbTYuNS0yLjVhLjUuNSAwIDAgMSAuMTQ2LS4zNTQgMS41IDEuNSAwIDEgMCAuNzA3LjcwNy41LjUgMCAwIDEtLjg1NC0uMzUzIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KICAgIDwvZz4KICAgIDxkZWZzPgogICAgICAgIDxjbGlwUGF0aCBpZD0iU09VTF9fYSI+CiAgICAgICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0wIDBoMjR2MjRIMHoiLz4KICAgICAgICA8L2NsaXBQYXRoPgogICAgPC9kZWZzPgo8L3N2Zz4K)
 * @see https://web3icons.io/tokens/SOUL
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenSOUL = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenSOUL', __iconNode);
;
}),
];

//# sourceMappingURL=1qqr_%40web3icons_react_dist_1hy11v9._.js.map