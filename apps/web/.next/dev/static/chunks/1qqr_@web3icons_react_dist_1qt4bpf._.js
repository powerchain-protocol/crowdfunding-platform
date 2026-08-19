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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenZPAY.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenZPAY
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-client] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#11F',
                d: 'M16.103 4.059H6.97c-.382 0-.795.301-.795.667v1.842c0 .37.413.667.795.667h5.304L3 15.705h4.463l9.868-8.809c1.059-1.059.291-2.837-1.228-2.837M7.897 19.94h9.397c.381 0 .53-.302.53-.667V17.43c0-.37-.149-.667-.53-.667h-5.57L21 8.294h-4.463l-9.868 8.81c-1.059 1.058-.291 2.837 1.228 2.837'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M16.103 4.059H6.97c-.382 0-.795.301-.795.667v1.842c0 .37.413.667.795.667h5.304L3 15.705h4.463l9.868-8.809c1.059-1.059.291-2.837-1.228-2.837M7.897 19.94h9.397c.381 0 .53-.302.53-.667V17.43c0-.37-.149-.667-.53-.667h-5.57L21 8.294h-4.463l-9.868 8.81c-1.059 1.058-.291 2.837 1.228 2.837'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#ZPAY__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#11F',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M15.647 4.941H7.529c-.338 0-.705.269-.705.593v1.638c0 .33.367.593.705.593h4.716L4 15.295h3.967l8.772-7.831c.94-.941.259-2.523-1.092-2.523M8.353 19.06h8.353c.339 0 .47-.268.47-.593v-1.638c0-.329-.131-.593-.47-.593h-4.95L20 8.706h-3.967l-8.772 7.83c-.941.942-.259 2.523 1.092 2.523'
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
                        id: 'ZPAY__a'
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
 * @component @name TokenZPAY
 * @description Web3Icon for TokenZPAY
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiMxMUYiIGQ9Ik0xNi4xMDMgNC4wNTlINi45N2MtLjM4MiAwLS43OTUuMzAxLS43OTUuNjY3djEuODQyYzAgLjM3LjQxMy42NjcuNzk1LjY2N2g1LjMwNEwzIDE1LjcwNWg0LjQ2M2w5Ljg2OC04LjgwOWMxLjA1OS0xLjA1OS4yOTEtMi44MzctMS4yMjgtMi44MzdNNy44OTcgMTkuOTRoOS4zOTdjLjM4MSAwIC41My0uMzAyLjUzLS42NjdWMTcuNDNjMC0uMzctLjE0OS0uNjY3LS41My0uNjY3aC01LjU3TDIxIDguMjk0aC00LjQ2M2wtOS44NjggOC44MWMtMS4wNTkgMS4wNTgtLjI5MSAyLjgzNyAxLjIyOCAyLjgzNyIvPgo8L3N2Zz4K) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xNi4xMDMgNC4wNTlINi45N2MtLjM4MiAwLS43OTUuMzAxLS43OTUuNjY3djEuODQyYzAgLjM3LjQxMy42NjcuNzk1LjY2N2g1LjMwNEwzIDE1LjcwNWg0LjQ2M2w5Ljg2OC04LjgwOWMxLjA1OS0xLjA1OS4yOTEtMi44MzctMS4yMjgtMi44MzdNNy44OTcgMTkuOTRoOS4zOTdjLjM4MSAwIC41My0uMzAyLjUzLS42NjdWMTcuNDNjMC0uMzctLjE0OS0uNjY3LS41My0uNjY3aC01LjU3TDIxIDguMjk0aC00LjQ2M2wtOS44NjggOC44MWMtMS4wNTkgMS4wNTgtLjI5MSAyLjgzNyAxLjIyOCAyLjgzNyIvPgo8L3N2Zz4K) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNaUEFZX19hKSI+CiAgICAgICAgPHBhdGggZmlsbD0iIzExRiIgZD0iTTI0IDBIMHYyNGgyNHoiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTUuNjQ3IDQuOTQxSDcuNTI5Yy0uMzM4IDAtLjcwNS4yNjktLjcwNS41OTN2MS42MzhjMCAuMzMuMzY3LjU5My43MDUuNTkzaDQuNzE2TDQgMTUuMjk1aDMuOTY3bDguNzcyLTcuODMxYy45NC0uOTQxLjI1OS0yLjUyMy0xLjA5Mi0yLjUyM004LjM1MyAxOS4wNmg4LjM1M2MuMzM5IDAgLjQ3LS4yNjguNDctLjU5M3YtMS42MzhjMC0uMzI5LS4xMzEtLjU5My0uNDctLjU5M2gtNC45NUwyMCA4LjcwNmgtMy45NjdsLTguNzcyIDcuODNjLS45NDEuOTQyLS4yNTkgMi41MjMgMS4wOTIgMi41MjMiLz4KICAgIDwvZz4KICAgIDxkZWZzPgogICAgICAgIDxjbGlwUGF0aCBpZD0iWlBBWV9fYSI+CiAgICAgICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0wIDBoMjR2MjRIMHoiLz4KICAgICAgICA8L2NsaXBQYXRoPgogICAgPC9kZWZzPgo8L3N2Zz4K)
 * @see https://web3icons.io/tokens/ZPAY
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenZPAY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenZPAY', __iconNode);
;
}),
]);

//# sourceMappingURL=1qqr_%40web3icons_react_dist_1qt4bpf._.js.map