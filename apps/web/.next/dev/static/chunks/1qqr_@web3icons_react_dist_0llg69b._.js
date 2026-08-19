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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenINV.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenINV
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-client] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#8799E0',
                d: 'M3 7.224c0-.73.506-2.036 1.125-2.536v14.625H3z'
            }
        ],
        [
            'path',
            {
                fill: '#5A86E7',
                d: 'M13.125 4.688h1.125v13.471a6.36 6.36 0 0 0 4.016-1.912c1.035-1.125 1.609-2.604 1.609-3.684v-6.75h-2.25v6.468c0 .731-.506 2.03-1.125 2.531V4.688H21v7.875c0 1.428-.692 3.11-1.89 4.42a7 7 0 0 1-4.86 2.307v.023h-1.125V5.835c-1.631.146-2.981.922-3.938 1.924C8.124 8.884 7.5 10.357 7.5 11.437v6.75h2.25V11.72c0-.731.506-2.03 1.125-2.532v10.126h-4.5v-7.875c0-1.435.709-3.111 1.946-4.422 1.26-1.327 3.15-2.328 4.804-2.328'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M3 7.224c0-.73.506-2.036 1.125-2.536v14.625H3zm10.125-2.536h1.125v13.471a6.36 6.36 0 0 0 4.016-1.912c1.035-1.125 1.609-2.604 1.609-3.685v-6.75h-2.25v6.47c0 .73-.506 2.03-1.125 2.53V4.688H21v7.874c0 1.43-.692 3.111-1.89 4.422a7 7 0 0 1-4.86 2.306v.023h-1.125V5.835c-1.631.146-2.981.922-3.938 1.924C8.124 8.884 7.5 10.357 7.5 11.437v6.75h2.25V11.72c0-.732.506-2.03 1.125-2.532v10.126h-4.5v-7.875c0-1.435.709-3.111 1.946-4.422 1.26-1.327 3.15-2.328 4.804-2.328'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#INV__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#5A86E7',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M4 7.755c0-.65.45-1.81 1-2.255v13H4zM13 5.5h1v11.975a5.65 5.65 0 0 0 3.57-1.7c.92-1 1.43-2.315 1.43-3.275v-6h-2v5.75c0 .65-.45 1.805-1 2.25v-9h4v7c0 1.27-.615 2.765-1.68 3.93A6.23 6.23 0 0 1 14 18.48v.02h-1V6.52c-1.45.13-2.65.82-3.5 1.71-.945 1-1.5 2.31-1.5 3.27v6h2v-5.75c0-.65.45-1.805 1-2.25v9H7v-7c0-1.275.63-2.765 1.73-3.93C9.85 6.39 11.53 5.5 13 5.5'
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
                        id: 'INV__a'
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
 * @component @name TokenINV
 * @description Web3Icon for TokenINV
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiM4Nzk5RTAiIGQ9Ik0zIDcuMjI0YzAtLjczLjUwNi0yLjAzNiAxLjEyNS0yLjUzNnYxNC42MjVIM3oiLz4KICAgIDxwYXRoIGZpbGw9IiM1QTg2RTciIGQ9Ik0xMy4xMjUgNC42ODhoMS4xMjV2MTMuNDcxYTYuMzYgNi4zNiAwIDAgMCA0LjAxNi0xLjkxMmMxLjAzNS0xLjEyNSAxLjYwOS0yLjYwNCAxLjYwOS0zLjY4NHYtNi43NWgtMi4yNXY2LjQ2OGMwIC43MzEtLjUwNiAyLjAzLTEuMTI1IDIuNTMxVjQuNjg4SDIxdjcuODc1YzAgMS40MjgtLjY5MiAzLjExLTEuODkgNC40MmE3IDcgMCAwIDEtNC44NiAyLjMwN3YuMDIzaC0xLjEyNVY1LjgzNWMtMS42MzEuMTQ2LTIuOTgxLjkyMi0zLjkzOCAxLjkyNEM4LjEyNCA4Ljg4NCA3LjUgMTAuMzU3IDcuNSAxMS40Mzd2Ni43NWgyLjI1VjExLjcyYzAtLjczMS41MDYtMi4wMyAxLjEyNS0yLjUzMnYxMC4xMjZoLTQuNXYtNy44NzVjMC0xLjQzNS43MDktMy4xMTEgMS45NDYtNC40MjIgMS4yNi0xLjMyNyAzLjE1LTIuMzI4IDQuODA0LTIuMzI4Ii8+Cjwvc3ZnPgo=) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0zIDcuMjI0YzAtLjczLjUwNi0yLjAzNiAxLjEyNS0yLjUzNnYxNC42MjVIM3ptMTAuMTI1LTIuNTM2aDEuMTI1djEzLjQ3MWE2LjM2IDYuMzYgMCAwIDAgNC4wMTYtMS45MTJjMS4wMzUtMS4xMjUgMS42MDktMi42MDQgMS42MDktMy42ODV2LTYuNzVoLTIuMjV2Ni40N2MwIC43My0uNTA2IDIuMDMtMS4xMjUgMi41M1Y0LjY4OEgyMXY3Ljg3NGMwIDEuNDMtLjY5MiAzLjExMS0xLjg5IDQuNDIyYTcgNyAwIDAgMS00Ljg2IDIuMzA2di4wMjNoLTEuMTI1VjUuODM1Yy0xLjYzMS4xNDYtMi45ODEuOTIyLTMuOTM4IDEuOTI0QzguMTI0IDguODg0IDcuNSAxMC4zNTcgNy41IDExLjQzN3Y2Ljc1aDIuMjVWMTEuNzJjMC0uNzMyLjUwNi0yLjAzIDEuMTI1LTIuNTMydjEwLjEyNmgtNC41di03Ljg3NWMwLTEuNDM1LjcwOS0zLjExMSAxLjk0Ni00LjQyMiAxLjI2LTEuMzI3IDMuMTUtMi4zMjggNC44MDQtMi4zMjgiLz4KPC9zdmc+Cg==) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNJTlZfX2EpIj4KICAgICAgICA8cGF0aCBmaWxsPSIjNUE4NkU3IiBkPSJNMjQgMEgwdjI0aDI0eiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik00IDcuNzU1YzAtLjY1LjQ1LTEuODEgMS0yLjI1NXYxM0g0ek0xMyA1LjVoMXYxMS45NzVhNS42NSA1LjY1IDAgMCAwIDMuNTctMS43Yy45Mi0xIDEuNDMtMi4zMTUgMS40My0zLjI3NXYtNmgtMnY1Ljc1YzAgLjY1LS40NSAxLjgwNS0xIDIuMjV2LTloNHY3YzAgMS4yNy0uNjE1IDIuNzY1LTEuNjggMy45M0E2LjIzIDYuMjMgMCAwIDEgMTQgMTguNDh2LjAyaC0xVjYuNTJjLTEuNDUuMTMtMi42NS44Mi0zLjUgMS43MS0uOTQ1IDEtMS41IDIuMzEtMS41IDMuMjd2Nmgydi01Ljc1YzAtLjY1LjQ1LTEuODA1IDEtMi4yNXY5SDd2LTdjMC0xLjI3NS42My0yLjc2NSAxLjczLTMuOTNDOS44NSA2LjM5IDExLjUzIDUuNSAxMyA1LjUiLz4KICAgIDwvZz4KICAgIDxkZWZzPgogICAgICAgIDxjbGlwUGF0aCBpZD0iSU5WX19hIj4KICAgICAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTAgMGgyNHYyNEgweiIvPgogICAgICAgIDwvY2xpcFBhdGg+CiAgICA8L2RlZnM+Cjwvc3ZnPgo=)
 * @see https://web3icons.io/tokens/INV
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenINV = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenINV', __iconNode);
;
}),
]);

//# sourceMappingURL=1qqr_%40web3icons_react_dist_0llg69b._.js.map