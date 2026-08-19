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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenID.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenID
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-client] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#1AED9E',
                d: 'M8.873 3a5.355 5.355 0 0 0-5.31 5.4v7.2c0 2.981 2.373 5.4 5.31 5.4h6.255c2.936 0 5.31-2.419 5.31-5.4V8.4c0-2.981-2.374-5.4-5.31-5.4zm-.034 2.25c-1.67 0-3.026 1.446-3.026 3.234v7.032c0 1.788 1.355 3.234 3.026 3.234h6.322c1.671 0 3.027-1.446 3.027-3.234V8.484c0-1.788-1.356-3.234-3.027-3.234z',
                fillRule: 'evenodd',
                clipRule: 'evenodd'
            }
        ],
        [
            'path',
            {
                fill: '#1AED9E',
                d: 'M13.125 10.043c0-.788.636-1.418 1.418-1.418h.54c.787 0 1.417.636 1.417 1.418v.54c0 .787-.636 1.417-1.417 1.417h-.54a1.42 1.42 0 0 1-1.418-1.418zm0 5.062c0-.788.636-1.418 1.418-1.418h.54c.787 0 1.417.636 1.417 1.418v.54c0 .788-.636 1.418-1.417 1.418h-.54a1.416 1.416 0 0 1-1.418-1.418z'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M8.873 3a5.355 5.355 0 0 0-5.31 5.4v7.2c0 2.981 2.373 5.4 5.31 5.4h6.255c2.936 0 5.31-2.419 5.31-5.4V8.4c0-2.981-2.374-5.4-5.31-5.4zm-.034 2.25c-1.67 0-3.026 1.446-3.026 3.234v7.032c0 1.788 1.355 3.234 3.026 3.234h6.322c1.671 0 3.027-1.446 3.027-3.234V8.484c0-1.788-1.356-3.234-3.027-3.234z',
                fillRule: 'evenodd',
                clipRule: 'evenodd'
            }
        ],
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M13.125 10.043c0-.788.636-1.418 1.418-1.418h.54c.787 0 1.417.636 1.417 1.418v.54c0 .787-.636 1.417-1.417 1.417h-.54a1.42 1.42 0 0 1-1.418-1.418zm0 5.062c0-.788.636-1.418 1.418-1.418h.54c.787 0 1.417.636 1.417 1.418v.54c0 .788-.636 1.418-1.417 1.418h-.54a1.416 1.416 0 0 1-1.418-1.418z'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#ID__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#1AED9E',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M9.22 4A4.76 4.76 0 0 0 4.5 8.8v6.4c0 2.65 2.11 4.8 4.72 4.8h5.56c2.61 0 4.72-2.15 4.72-4.8V8.8c0-2.65-2.11-4.8-4.72-4.8zm-.03 2C7.705 6 6.5 7.285 6.5 8.875v6.25C6.5 16.715 7.705 18 9.19 18h5.62c1.485 0 2.69-1.285 2.69-2.875v-6.25C17.5 7.285 16.295 6 14.81 6z',
                        fillRule: 'evenodd',
                        clipRule: 'evenodd'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M13 10.26c0-.7.565-1.26 1.26-1.26h.48c.7 0 1.26.565 1.26 1.26v.48c0 .7-.565 1.26-1.26 1.26h-.48A1.26 1.26 0 0 1 13 10.74zm0 4.5c0-.7.565-1.26 1.26-1.26h.48c.7 0 1.26.565 1.26 1.26v.48c0 .7-.565 1.26-1.26 1.26h-.48A1.26 1.26 0 0 1 13 15.24z'
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
                        id: 'ID__a'
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
 * @component @name TokenID
 * @description Web3Icon for TokenID
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiMxQUVEOUUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTguODczIDNhNS4zNTUgNS4zNTUgMCAwIDAtNS4zMSA1LjR2Ny4yYzAgMi45ODEgMi4zNzMgNS40IDUuMzEgNS40aDYuMjU1YzIuOTM2IDAgNS4zMS0yLjQxOSA1LjMxLTUuNFY4LjRjMC0yLjk4MS0yLjM3NC01LjQtNS4zMS01LjR6bS0uMDM0IDIuMjVjLTEuNjcgMC0zLjAyNiAxLjQ0Ni0zLjAyNiAzLjIzNHY3LjAzMmMwIDEuNzg4IDEuMzU1IDMuMjM0IDMuMDI2IDMuMjM0aDYuMzIyYzEuNjcxIDAgMy4wMjctMS40NDYgMy4wMjctMy4yMzRWOC40ODRjMC0xLjc4OC0xLjM1Ni0zLjIzNC0zLjAyNy0zLjIzNHoiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgogICAgPHBhdGggZmlsbD0iIzFBRUQ5RSIgZD0iTTEzLjEyNSAxMC4wNDNjMC0uNzg4LjYzNi0xLjQxOCAxLjQxOC0xLjQxOGguNTRjLjc4NyAwIDEuNDE3LjYzNiAxLjQxNyAxLjQxOHYuNTRjMCAuNzg3LS42MzYgMS40MTctMS40MTcgMS40MTdoLS41NGExLjQyIDEuNDIgMCAwIDEtMS40MTgtMS40MTh6bTAgNS4wNjJjMC0uNzg4LjYzNi0xLjQxOCAxLjQxOC0xLjQxOGguNTRjLjc4NyAwIDEuNDE3LjYzNiAxLjQxNyAxLjQxOHYuNTRjMCAuNzg4LS42MzYgMS40MTgtMS40MTcgMS40MThoLS41NGExLjQxNiAxLjQxNiAwIDAgMS0xLjQxOC0xLjQxOHoiLz4KPC9zdmc+Cg==) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTguODczIDNhNS4zNTUgNS4zNTUgMCAwIDAtNS4zMSA1LjR2Ny4yYzAgMi45ODEgMi4zNzMgNS40IDUuMzEgNS40aDYuMjU1YzIuOTM2IDAgNS4zMS0yLjQxOSA1LjMxLTUuNFY4LjRjMC0yLjk4MS0yLjM3NC01LjQtNS4zMS01LjR6bS0uMDM0IDIuMjVjLTEuNjcgMC0zLjAyNiAxLjQ0Ni0zLjAyNiAzLjIzNHY3LjAzMmMwIDEuNzg4IDEuMzU1IDMuMjM0IDMuMDI2IDMuMjM0aDYuMzIyYzEuNjcxIDAgMy4wMjctMS40NDYgMy4wMjctMy4yMzRWOC40ODRjMC0xLjc4OC0xLjM1Ni0zLjIzNC0zLjAyNy0zLjIzNHoiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgogICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTEzLjEyNSAxMC4wNDNjMC0uNzg4LjYzNi0xLjQxOCAxLjQxOC0xLjQxOGguNTRjLjc4NyAwIDEuNDE3LjYzNiAxLjQxNyAxLjQxOHYuNTRjMCAuNzg3LS42MzYgMS40MTctMS40MTcgMS40MTdoLS41NGExLjQyIDEuNDIgMCAwIDEtMS40MTgtMS40MTh6bTAgNS4wNjJjMC0uNzg4LjYzNi0xLjQxOCAxLjQxOC0xLjQxOGguNTRjLjc4NyAwIDEuNDE3LjYzNiAxLjQxNyAxLjQxOHYuNTRjMCAuNzg4LS42MzYgMS40MTgtMS40MTcgMS40MThoLS41NGExLjQxNiAxLjQxNiAwIDAgMS0xLjQxOC0xLjQxOHoiLz4KPC9zdmc+Cg==) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNJRF9fYSkiPgogICAgICAgIDxwYXRoIGZpbGw9IiMxQUVEOUUiIGQ9Ik0yNCAwSDB2MjRoMjR6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNOS4yMiA0QTQuNzYgNC43NiAwIDAgMCA0LjUgOC44djYuNGMwIDIuNjUgMi4xMSA0LjggNC43MiA0LjhoNS41NmMyLjYxIDAgNC43Mi0yLjE1IDQuNzItNC44VjguOGMwLTIuNjUtMi4xMS00LjgtNC43Mi00Ljh6bS0uMDMgMkM3LjcwNSA2IDYuNSA3LjI4NSA2LjUgOC44NzV2Ni4yNUM2LjUgMTYuNzE1IDcuNzA1IDE4IDkuMTkgMThoNS42MmMxLjQ4NSAwIDIuNjktMS4yODUgMi42OS0yLjg3NXYtNi4yNUMxNy41IDcuMjg1IDE2LjI5NSA2IDE0LjgxIDZ6IiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTMgMTAuMjZjMC0uNy41NjUtMS4yNiAxLjI2LTEuMjZoLjQ4Yy43IDAgMS4yNi41NjUgMS4yNiAxLjI2di40OGMwIC43LS41NjUgMS4yNi0xLjI2IDEuMjZoLS40OEExLjI2IDEuMjYgMCAwIDEgMTMgMTAuNzR6bTAgNC41YzAtLjcuNTY1LTEuMjYgMS4yNi0xLjI2aC40OGMuNyAwIDEuMjYuNTY1IDEuMjYgMS4yNnYuNDhjMCAuNy0uNTY1IDEuMjYtMS4yNiAxLjI2aC0uNDhBMS4yNiAxLjI2IDAgMCAxIDEzIDE1LjI0eiIvPgogICAgPC9nPgogICAgPGRlZnM+CiAgICAgICAgPGNsaXBQYXRoIGlkPSJJRF9fYSI+CiAgICAgICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0wIDBoMjR2MjRIMHoiLz4KICAgICAgICA8L2NsaXBQYXRoPgogICAgPC9kZWZzPgo8L3N2Zz4K)
 * @see https://web3icons.io/tokens/ID
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenID = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenID', __iconNode);
;
}),
]);

//# sourceMappingURL=1qqr_%40web3icons_react_dist_049wkg8._.js.map