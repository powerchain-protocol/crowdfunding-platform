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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenEDGE.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenEDGE
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-client] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#0ECC5F',
                d: 'M20.999 12a8 8 0 0 0-.011-.429q-.009-.147-.021-.294-.002-.056-.009-.114a9 9 0 0 0-.044-.374v-.02a9 9 0 1 0-1.88 6.844l-2.76-1.967c-1.135 1.325-2.653 1.979-4.27 1.979A5.606 5.606 0 0 1 6.377 12 5.6 5.6 0 0 1 12 6.376a5.61 5.61 0 0 1 5.367 3.937h-5.362l-1.437 3.375H20.85a10 10 0 0 0 .14-1.347c.006-.09.009-.2.009-.34'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M20.999 12q0-.215-.012-.429-.007-.147-.02-.294-.001-.056-.009-.114a9 9 0 0 0-.044-.374v-.02a9 9 0 1 0-1.88 6.844l-2.76-1.967c-1.135 1.325-2.653 1.979-4.27 1.979A5.607 5.607 0 0 1 6.376 12 5.6 5.6 0 0 1 12 6.376a5.61 5.61 0 0 1 5.366 3.937h-5.362l-1.437 3.375H20.85a10 10 0 0 0 .149-1.687'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#EDGE__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#0ECC5F',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M19.999 12q0-.191-.01-.381-.007-.131-.019-.261-.001-.051-.007-.102a8 8 0 0 0-.04-.333v-.018a8 8 0 1 0-1.67 6.084l-2.455-1.748C14.791 16.419 13.441 17 12.004 17A4.986 4.986 0 0 1 7 12a4.98 4.98 0 0 1 5-4.998 4.99 4.99 0 0 1 4.77 3.5h-4.766l-1.277 3h9.14c.068-.379.11-.814.123-1.198.006-.08.009-.178.009-.303'
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
                        id: 'EDGE__a'
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
 * @component @name TokenEDGE
 * @description Web3Icon for TokenEDGE
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiMwRUNDNUYiIGQ9Ik0yMC45OTkgMTJhOCA4IDAgMCAwLS4wMTEtLjQyOXEtLjAwOS0uMTQ3LS4wMjEtLjI5NC0uMDAyLS4wNTYtLjAwOS0uMTE0YTkgOSAwIDAgMC0uMDQ0LS4zNzR2LS4wMmE5IDkgMCAxIDAtMS44OCA2Ljg0NGwtMi43Ni0xLjk2N2MtMS4xMzUgMS4zMjUtMi42NTMgMS45NzktNC4yNyAxLjk3OUE1LjYwNiA1LjYwNiAwIDAgMSA2LjM3NyAxMiA1LjYgNS42IDAgMCAxIDEyIDYuMzc2YTUuNjEgNS42MSAwIDAgMSA1LjM2NyAzLjkzN2gtNS4zNjJsLTEuNDM3IDMuMzc1SDIwLjg1YTEwIDEwIDAgMCAwIC4xNC0xLjM0N2MuMDA2LS4wOS4wMDktLjIuMDA5LS4zNCIvPgo8L3N2Zz4K) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0yMC45OTkgMTJxMC0uMjE1LS4wMTItLjQyOS0uMDA3LS4xNDctLjAyLS4yOTQtLjAwMS0uMDU2LS4wMDktLjExNGE5IDkgMCAwIDAtLjA0NC0uMzc0di0uMDJhOSA5IDAgMSAwLTEuODggNi44NDRsLTIuNzYtMS45NjdjLTEuMTM1IDEuMzI1LTIuNjUzIDEuOTc5LTQuMjcgMS45NzlBNS42MDcgNS42MDcgMCAwIDEgNi4zNzYgMTIgNS42IDUuNiAwIDAgMSAxMiA2LjM3NmE1LjYxIDUuNjEgMCAwIDEgNS4zNjYgMy45MzdoLTUuMzYybC0xLjQzNyAzLjM3NUgyMC44NWExMCAxMCAwIDAgMCAuMTQ5LTEuNjg3Ii8+Cjwvc3ZnPgo=) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNFREdFX19hKSI+CiAgICAgICAgPHBhdGggZmlsbD0iIzBFQ0M1RiIgZD0iTTI0IDBIMHYyNGgyNHoiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTkuOTk5IDEycTAtLjE5MS0uMDEtLjM4MS0uMDA3LS4xMzEtLjAxOS0uMjYxLS4wMDEtLjA1MS0uMDA3LS4xMDJhOCA4IDAgMCAwLS4wNC0uMzMzdi0uMDE4YTggOCAwIDEgMC0xLjY3IDYuMDg0bC0yLjQ1NS0xLjc0OEMxNC43OTEgMTYuNDE5IDEzLjQ0MSAxNyAxMi4wMDQgMTdBNC45ODYgNC45ODYgMCAwIDEgNyAxMmE0Ljk4IDQuOTggMCAwIDEgNS00Ljk5OCA0Ljk5IDQuOTkgMCAwIDEgNC43NyAzLjVoLTQuNzY2bC0xLjI3NyAzaDkuMTRjLjA2OC0uMzc5LjExLS44MTQuMTIzLTEuMTk4LjAwNi0uMDguMDA5LS4xNzguMDA5LS4zMDMiLz4KICAgIDwvZz4KICAgIDxkZWZzPgogICAgICAgIDxjbGlwUGF0aCBpZD0iRURHRV9fYSI+CiAgICAgICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0wIDBoMjR2MjRIMHoiLz4KICAgICAgICA8L2NsaXBQYXRoPgogICAgPC9kZWZzPgo8L3N2Zz4K)
 * @see https://web3icons.io/tokens/EDGE
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenEDGE = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenEDGE', __iconNode);
;
}),
]);

//# sourceMappingURL=1qqr_%40web3icons_react_dist_1u1exdx._.js.map