(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createWeb3Icon",
    ()=>createWeb3Icon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$types$2b$node$40$24$2e$13$2e$3_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.1_@types+node@24.13.3_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$BaseIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/BaseIcon.js [app-client] (ecmascript)");
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
    const Component = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$types$2b$node$40$24$2e$13$2e$3_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(({ variant = defaultVariant, fallback, ...props }, ref)=>{
        const iconData = variants[variant];
        if (!iconData) {
            console.warn(`Icon "${name}" does not have variant "${variant}". ` + `Available variants: ${availableVariants.join(', ')}`);
            return null;
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$types$2b$node$40$24$2e$13$2e$3_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$BaseIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseIcon"], {
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
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$types$2b$node$40$24$2e$13$2e$3_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(element, elementProps, childElements);
    });
}
;
}),
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenGRAI.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenGRAI
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-client] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#A101F8',
                d: 'M16.642 14.369a5.214 5.214 0 0 1-6.519 2.494 5.2 5.2 0 0 1-2.064-1.452 1.54 1.54 0 0 0-1.137-.569c-.933 0-1.554.948-.995 1.691A7.58 7.58 0 0 0 19.2 14.37h.853a.947.947 0 0 0 0-1.895h-4.264a.947.947 0 1 0 0 1.895zm.436-5.21c-.44 0-.848-.233-1.137-.57a5.21 5.21 0 0 0-8.583 1.043h.853a.947.947 0 1 1 0 1.895H3.947a.947.947 0 0 1 0-1.895H4.8a7.579 7.579 0 0 1 13.273-2.165c.559.744-.057 1.691-.995 1.691'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M16.642 14.369a5.213 5.213 0 0 1-6.519 2.494 5.2 5.2 0 0 1-2.064-1.452 1.54 1.54 0 0 0-1.137-.569c-.933 0-1.554.948-.995 1.691A7.579 7.579 0 0 0 19.2 14.37h.853a.947.947 0 1 0 0-1.895h-4.264a.947.947 0 1 0 0 1.895zm.436-5.21c-.44 0-.848-.233-1.137-.57a5.21 5.21 0 0 0-8.583 1.043h.853a.947.947 0 1 1 0 1.895H3.947a.947.947 0 1 1 0-1.895H4.8a7.579 7.579 0 0 1 13.273-2.165c.559.744-.057 1.691-.995 1.691'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#GRAI__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#A101F8',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M16.126 14.105a4.633 4.633 0 0 1-7.63.927 1.36 1.36 0 0 0-1.01-.506c-.83 0-1.38.842-.884 1.504A6.737 6.737 0 0 0 18.4 14.105h.758a.842.842 0 0 0 0-1.684h-3.79a.842.842 0 1 0 0 1.684zm.388-4.631c-.392 0-.754-.207-1.01-.505a4.632 4.632 0 0 0-7.63.926h.758a.842.842 0 1 1 0 1.684h-3.79a.842.842 0 1 1 0-1.684H5.6A6.737 6.737 0 0 1 17.398 7.97c.497.66-.05 1.503-.884 1.503'
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
                        id: 'GRAI__a'
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
 * @component @name TokenGRAI
 * @description Web3Icon for TokenGRAI
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNBMTAxRjgiIGQ9Ik0xNi42NDIgMTQuMzY5YTUuMjE0IDUuMjE0IDAgMCAxLTYuNTE5IDIuNDk0IDUuMiA1LjIgMCAwIDEtMi4wNjQtMS40NTIgMS41NCAxLjU0IDAgMCAwLTEuMTM3LS41NjljLS45MzMgMC0xLjU1NC45NDgtLjk5NSAxLjY5MUE3LjU4IDcuNTggMCAwIDAgMTkuMiAxNC4zN2guODUzYS45NDcuOTQ3IDAgMCAwIDAtMS44OTVoLTQuMjY0YS45NDcuOTQ3IDAgMSAwIDAgMS44OTV6bS40MzYtNS4yMWMtLjQ0IDAtLjg0OC0uMjMzLTEuMTM3LS41N2E1LjIxIDUuMjEgMCAwIDAtOC41ODMgMS4wNDNoLjg1M2EuOTQ3Ljk0NyAwIDEgMSAwIDEuODk1SDMuOTQ3YS45NDcuOTQ3IDAgMCAxIDAtMS44OTVINC44YTcuNTc5IDcuNTc5IDAgMCAxIDEzLjI3My0yLjE2NWMuNTU5Ljc0NC0uMDU3IDEuNjkxLS45OTUgMS42OTEiLz4KPC9zdmc+Cg==) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xNi42NDIgMTQuMzY5YTUuMjEzIDUuMjEzIDAgMCAxLTYuNTE5IDIuNDk0IDUuMiA1LjIgMCAwIDEtMi4wNjQtMS40NTIgMS41NCAxLjU0IDAgMCAwLTEuMTM3LS41NjljLS45MzMgMC0xLjU1NC45NDgtLjk5NSAxLjY5MUE3LjU3OSA3LjU3OSAwIDAgMCAxOS4yIDE0LjM3aC44NTNhLjk0Ny45NDcgMCAxIDAgMC0xLjg5NWgtNC4yNjRhLjk0Ny45NDcgMCAxIDAgMCAxLjg5NXptLjQzNi01LjIxYy0uNDQgMC0uODQ4LS4yMzMtMS4xMzctLjU3YTUuMjEgNS4yMSAwIDAgMC04LjU4MyAxLjA0M2guODUzYS45NDcuOTQ3IDAgMSAxIDAgMS44OTVIMy45NDdhLjk0Ny45NDcgMCAxIDEgMC0xLjg5NUg0LjhhNy41NzkgNy41NzkgMCAwIDEgMTMuMjczLTIuMTY1Yy41NTkuNzQ0LS4wNTcgMS42OTEtLjk5NSAxLjY5MSIvPgo8L3N2Zz4K) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNHUkFJX19hKSI+CiAgICAgICAgPHBhdGggZmlsbD0iI0ExMDFGOCIgZD0iTTI0IDBIMHYyNGgyNHoiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTYuMTI2IDE0LjEwNWE0LjYzMyA0LjYzMyAwIDAgMS03LjYzLjkyNyAxLjM2IDEuMzYgMCAwIDAtMS4wMS0uNTA2Yy0uODMgMC0xLjM4Ljg0Mi0uODg0IDEuNTA0QTYuNzM3IDYuNzM3IDAgMCAwIDE4LjQgMTQuMTA1aC43NThhLjg0Mi44NDIgMCAwIDAgMC0xLjY4NGgtMy43OWEuODQyLjg0MiAwIDEgMCAwIDEuNjg0em0uMzg4LTQuNjMxYy0uMzkyIDAtLjc1NC0uMjA3LTEuMDEtLjUwNWE0LjYzMiA0LjYzMiAwIDAgMC03LjYzLjkyNmguNzU4YS44NDIuODQyIDAgMSAxIDAgMS42ODRoLTMuNzlhLjg0Mi44NDIgMCAxIDEgMC0xLjY4NEg1LjZBNi43MzcgNi43MzcgMCAwIDEgMTcuMzk4IDcuOTdjLjQ5Ny42Ni0uMDUgMS41MDMtLjg4NCAxLjUwMyIvPgogICAgPC9nPgogICAgPGRlZnM+CiAgICAgICAgPGNsaXBQYXRoIGlkPSJHUkFJX19hIj4KICAgICAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTAgMGgyNHYyNEgweiIvPgogICAgICAgIDwvY2xpcFBhdGg+CiAgICA8L2RlZnM+Cjwvc3ZnPgo=)
 * @see https://web3icons.io/tokens/GRAI
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenGRAI = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenGRAI', __iconNode);
;
}),
]);

//# sourceMappingURL=1qqr_%40web3icons_react_dist_1u4d719._.js.map