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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenGRAIL.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenGRAIL
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-client] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#FFAF1D',
                d: 'M13.688 21v-7.313c1.766.191 2.84.911 2.84.911l1.125-1.265c-1.845-1.317-4.545-1.334-4.545-1.334l-.495-5.005a1.096 1.096 0 1 0-1.704-.917c0 .388.197.731.495.917L10.875 12s-2.66.01-4.511 1.333l1.125 1.265s1.057-.72 2.824-.91v7.311C3.405 15.886 2.983 8.462 3 5.998c0-.512.31-.984.777-1.187A21 21 0 0 1 12 3c3.695 0 6.845 1.198 8.223 1.811A1.3 1.3 0 0 1 21 5.992c.017 2.475-.422 9.9-7.312 15.007'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M13.688 21v-7.313c1.766.191 2.84.911 2.84.911l1.125-1.265c-1.845-1.317-4.545-1.334-4.545-1.334l-.495-5.005a1.096 1.096 0 1 0-1.704-.917c0 .388.197.73.495.917L10.875 12s-2.66.01-4.511 1.333l1.125 1.265s1.057-.72 2.824-.91v7.311C3.405 15.886 2.983 8.462 3 5.998c0-.512.31-.984.777-1.187A21 21 0 0 1 12 3c3.695 0 6.845 1.198 8.223 1.811A1.3 1.3 0 0 1 21 5.992c.017 2.475-.422 9.9-7.312 15.007'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#GRAIL__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#FFAF1D',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#000',
                        d: 'M13.5 20v-6.5c1.57.17 2.525.81 2.525.81l1-1.125c-1.64-1.17-4.04-1.186-4.04-1.186l-.44-4.45a.975.975 0 1 0-1.515-.814c0 .345.175.65.44.815L11 12s-2.365.01-4.01 1.185l1 1.124s.94-.64 2.51-.81V20C4.36 15.455 3.985 8.855 4 6.665c0-.455.275-.875.69-1.055A18.7 18.7 0 0 1 12 4c3.285 0 6.085 1.065 7.31 1.61.415.18.69.6.69 1.05.015 2.2-.375 8.8-6.5 13.34'
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
                        id: 'GRAIL__a'
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
 * @component @name TokenGRAIL
 * @description Web3Icon for TokenGRAIL
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNGRkFGMUQiIGQ9Ik0xMy42ODggMjF2LTcuMzEzYzEuNzY2LjE5MSAyLjg0LjkxMSAyLjg0LjkxMWwxLjEyNS0xLjI2NWMtMS44NDUtMS4zMTctNC41NDUtMS4zMzQtNC41NDUtMS4zMzRsLS40OTUtNS4wMDVhMS4wOTYgMS4wOTYgMCAxIDAtMS43MDQtLjkxN2MwIC4zODguMTk3LjczMS40OTUuOTE3TDEwLjg3NSAxMnMtMi42Ni4wMS00LjUxMSAxLjMzM2wxLjEyNSAxLjI2NXMxLjA1Ny0uNzIgMi44MjQtLjkxdjcuMzExQzMuNDA1IDE1Ljg4NiAyLjk4MyA4LjQ2MiAzIDUuOTk4YzAtLjUxMi4zMS0uOTg0Ljc3Ny0xLjE4N0EyMSAyMSAwIDAgMSAxMiAzYzMuNjk1IDAgNi44NDUgMS4xOTggOC4yMjMgMS44MTFBMS4zIDEuMyAwIDAgMSAyMSA1Ljk5MmMuMDE3IDIuNDc1LS40MjIgOS45LTcuMzEyIDE1LjAwNyIvPgo8L3N2Zz4K) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xMy42ODggMjF2LTcuMzEzYzEuNzY2LjE5MSAyLjg0LjkxMSAyLjg0LjkxMWwxLjEyNS0xLjI2NWMtMS44NDUtMS4zMTctNC41NDUtMS4zMzQtNC41NDUtMS4zMzRsLS40OTUtNS4wMDVhMS4wOTYgMS4wOTYgMCAxIDAtMS43MDQtLjkxN2MwIC4zODguMTk3LjczLjQ5NS45MTdMMTAuODc1IDEycy0yLjY2LjAxLTQuNTExIDEuMzMzbDEuMTI1IDEuMjY1czEuMDU3LS43MiAyLjgyNC0uOTF2Ny4zMTFDMy40MDUgMTUuODg2IDIuOTgzIDguNDYyIDMgNS45OThjMC0uNTEyLjMxLS45ODQuNzc3LTEuMTg3QTIxIDIxIDAgMCAxIDEyIDNjMy42OTUgMCA2Ljg0NSAxLjE5OCA4LjIyMyAxLjgxMUExLjMgMS4zIDAgMCAxIDIxIDUuOTkyYy4wMTcgMi40NzUtLjQyMiA5LjktNy4zMTIgMTUuMDA3Ii8+Cjwvc3ZnPgo=) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNHUkFJTF9fYSkiPgogICAgICAgIDxwYXRoIGZpbGw9IiNGRkFGMUQiIGQ9Ik0yNCAwSDB2MjRoMjR6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0iIzAwMCIgZD0iTTEzLjUgMjB2LTYuNWMxLjU3LjE3IDIuNTI1LjgxIDIuNTI1LjgxbDEtMS4xMjVjLTEuNjQtMS4xNy00LjA0LTEuMTg2LTQuMDQtMS4xODZsLS40NC00LjQ1YS45NzUuOTc1IDAgMSAwLTEuNTE1LS44MTRjMCAuMzQ1LjE3NS42NS40NC44MTVMMTEgMTJzLTIuMzY1LjAxLTQuMDEgMS4xODVsMSAxLjEyNHMuOTQtLjY0IDIuNTEtLjgxVjIwQzQuMzYgMTUuNDU1IDMuOTg1IDguODU1IDQgNi42NjVjMC0uNDU1LjI3NS0uODc1LjY5LTEuMDU1QTE4LjcgMTguNyAwIDAgMSAxMiA0YzMuMjg1IDAgNi4wODUgMS4wNjUgNy4zMSAxLjYxLjQxNS4xOC42OS42LjY5IDEuMDUuMDE1IDIuMi0uMzc1IDguOC02LjUgMTMuMzQiLz4KICAgIDwvZz4KICAgIDxkZWZzPgogICAgICAgIDxjbGlwUGF0aCBpZD0iR1JBSUxfX2EiPgogICAgICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMCAwaDI0djI0SDB6Ii8+CiAgICAgICAgPC9jbGlwUGF0aD4KICAgIDwvZGVmcz4KPC9zdmc+Cg==)
 * @see https://web3icons.io/tokens/GRAIL
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenGRAIL = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenGRAIL', __iconNode);
;
}),
]);

//# sourceMappingURL=1qqr_%40web3icons_react_dist_0uwqo5r._.js.map