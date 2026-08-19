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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenMTH.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenMTH
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-ssr] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#0072FF',
                d: 'm15.043 15.6-2.48 2.025V11.73c0-.985.55-1.94 1.31-2.531L15.937 7.5v5.602c0 .968-.157 1.913-.894 2.504zm-6.092.006c-.737-.591-.889-1.536-.889-2.504V7.5l2.065 1.699a3.5 3.5 0 0 1 1.31 2.53v5.896zm10.766 3.02-2.092 1.811V8.062c0-1.029.264-2.036 1.069-2.677L21 3.563v12.386a3.43 3.43 0 0 1-1.283 2.677m-15.435 0A3.43 3.43 0 0 1 3 15.95V3.563L5.306 5.39c.799.635 1.069 1.642 1.069 2.671v12.375z'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'm15.043 15.6-2.48 2.025V11.73c0-.984.55-1.94 1.31-2.531L15.937 7.5v5.602c0 .968-.157 1.913-.894 2.504zm-6.092.006c-.737-.591-.889-1.536-.889-2.504V7.5l2.065 1.699a3.5 3.5 0 0 1 1.31 2.53v5.896zm10.766 3.02-2.092 1.811V8.062c0-1.029.264-2.036 1.069-2.677L21 3.563v12.386a3.43 3.43 0 0 1-1.283 2.677m-15.435 0A3.43 3.43 0 0 1 3 15.95V3.563L5.306 5.39c.799.635 1.069 1.642 1.069 2.671v12.375z'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#MTH__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#0072FF',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M14.705 15.2 12.5 17v-5.24c0-.875.49-1.725 1.165-2.25L15.5 8v4.98c0 .86-.14 1.7-.795 2.225zm-5.415.005c-.655-.525-.79-1.365-.79-2.225V8l1.835 1.51a3.12 3.12 0 0 1 1.165 2.25V17zm9.57 2.685L17 19.5v-11c0-.915.235-1.81.95-2.38L20 4.5v11.01a3.05 3.05 0 0 1-1.14 2.38m-13.72 0A3.05 3.05 0 0 1 4 15.51V4.5l2.05 1.625C6.76 6.69 7 7.585 7 8.5v11z'
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
                        id: 'MTH__a'
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
 * @component @name TokenMTH
 * @description Web3Icon for TokenMTH
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiMwMDcyRkYiIGQ9Im0xNS4wNDMgMTUuNi0yLjQ4IDIuMDI1VjExLjczYzAtLjk4NS41NS0xLjk0IDEuMzEtMi41MzFMMTUuOTM3IDcuNXY1LjYwMmMwIC45NjgtLjE1NyAxLjkxMy0uODk0IDIuNTA0em0tNi4wOTIuMDA2Yy0uNzM3LS41OTEtLjg4OS0xLjUzNi0uODg5LTIuNTA0VjcuNWwyLjA2NSAxLjY5OWEzLjUgMy41IDAgMCAxIDEuMzEgMi41M3Y1Ljg5NnptMTAuNzY2IDMuMDItMi4wOTIgMS44MTFWOC4wNjJjMC0xLjAyOS4yNjQtMi4wMzYgMS4wNjktMi42NzdMMjEgMy41NjN2MTIuMzg2YTMuNDMgMy40MyAwIDAgMS0xLjI4MyAyLjY3N20tMTUuNDM1IDBBMy40MyAzLjQzIDAgMCAxIDMgMTUuOTVWMy41NjNMNS4zMDYgNS4zOWMuNzk5LjYzNSAxLjA2OSAxLjY0MiAxLjA2OSAyLjY3MXYxMi4zNzV6Ii8+Cjwvc3ZnPgo=) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Im0xNS4wNDMgMTUuNi0yLjQ4IDIuMDI1VjExLjczYzAtLjk4NC41NS0xLjk0IDEuMzEtMi41MzFMMTUuOTM3IDcuNXY1LjYwMmMwIC45NjgtLjE1NyAxLjkxMy0uODk0IDIuNTA0em0tNi4wOTIuMDA2Yy0uNzM3LS41OTEtLjg4OS0xLjUzNi0uODg5LTIuNTA0VjcuNWwyLjA2NSAxLjY5OWEzLjUgMy41IDAgMCAxIDEuMzEgMi41M3Y1Ljg5NnptMTAuNzY2IDMuMDItMi4wOTIgMS44MTFWOC4wNjJjMC0xLjAyOS4yNjQtMi4wMzYgMS4wNjktMi42NzdMMjEgMy41NjN2MTIuMzg2YTMuNDMgMy40MyAwIDAgMS0xLjI4MyAyLjY3N20tMTUuNDM1IDBBMy40MyAzLjQzIDAgMCAxIDMgMTUuOTVWMy41NjNMNS4zMDYgNS4zOWMuNzk5LjYzNSAxLjA2OSAxLjY0MiAxLjA2OSAyLjY3MXYxMi4zNzV6Ii8+Cjwvc3ZnPgo=) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNNVEhfX2EpIj4KICAgICAgICA8cGF0aCBmaWxsPSIjMDA3MkZGIiBkPSJNMjQgMEgwdjI0aDI0eiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xNC43MDUgMTUuMiAxMi41IDE3di01LjI0YzAtLjg3NS40OS0xLjcyNSAxLjE2NS0yLjI1TDE1LjUgOHY0Ljk4YzAgLjg2LS4xNCAxLjctLjc5NSAyLjIyNXptLTUuNDE1LjAwNWMtLjY1NS0uNTI1LS43OS0xLjM2NS0uNzktMi4yMjVWOGwxLjgzNSAxLjUxYTMuMTIgMy4xMiAwIDAgMSAxLjE2NSAyLjI1VjE3em05LjU3IDIuNjg1TDE3IDE5LjV2LTExYzAtLjkxNS4yMzUtMS44MS45NS0yLjM4TDIwIDQuNXYxMS4wMWEzLjA1IDMuMDUgMCAwIDEtMS4xNCAyLjM4bS0xMy43MiAwQTMuMDUgMy4wNSAwIDAgMSA0IDE1LjUxVjQuNWwyLjA1IDEuNjI1QzYuNzYgNi42OSA3IDcuNTg1IDcgOC41djExeiIvPgogICAgPC9nPgogICAgPGRlZnM+CiAgICAgICAgPGNsaXBQYXRoIGlkPSJNVEhfX2EiPgogICAgICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMCAwaDI0djI0SDB6Ii8+CiAgICAgICAgPC9jbGlwUGF0aD4KICAgIDwvZGVmcz4KPC9zdmc+Cg==)
 * @see https://web3icons.io/tokens/MTH
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenMTH = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenMTH', __iconNode);
;
}),
];

//# sourceMappingURL=1qqr_%40web3icons_react_dist_0ii_-s0._.js.map