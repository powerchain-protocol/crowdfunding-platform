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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/networks/NetworkSoneium.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>NetworkSoneium
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-client] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#000',
                d: 'M13.153 16.867a4.99 4.99 0 0 1-4.69-1.32 4.845 4.845 0 0 1-.784-6.031 8.4 8.4 0 0 1 1.359-1.677c1.66-1.655 4.707-4.667 4.707-4.667A9 9 0 0 0 7.177 4.4a9.013 9.013 0 0 0-3.003 12.05 9 9 0 0 0 5.22 4.175z'
            }
        ],
        [
            'path',
            {
                fill: '#000',
                d: 'M10.839 7.136a4.98 4.98 0 0 1 4.69 1.321c1.644 1.647 1.965 4.09.778 6.022a8.5 8.5 0 0 1-1.36 1.68c-1.66 1.652-4.707 4.666-4.707 4.666a9 9 0 0 0 6.578-1.221 9.01 9.01 0 0 0 3.005-12.062A9 9 0 0 0 14.59 3.37z'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M13.153 16.867a4.99 4.99 0 0 1-4.69-1.32 4.845 4.845 0 0 1-.784-6.031 8.4 8.4 0 0 1 1.359-1.677c1.66-1.655 4.707-4.667 4.707-4.667A9 9 0 0 0 7.177 4.4a9.013 9.013 0 0 0-3.003 12.05 9 9 0 0 0 5.22 4.175z'
            }
        ],
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M10.839 7.136a4.98 4.98 0 0 1 4.69 1.321c1.644 1.647 1.965 4.09.778 6.022a8.5 8.5 0 0 1-1.36 1.68c-1.66 1.652-4.707 4.666-4.707 4.666a9 9 0 0 0 6.578-1.221 9.01 9.01 0 0 0 3.005-12.062A9 9 0 0 0 14.59 3.37z'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#soneium__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#000',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M13.025 16.327a4.43 4.43 0 0 1-4.169-1.175 4.306 4.306 0 0 1-.697-5.36A7.5 7.5 0 0 1 9.367 8.3c1.475-1.471 4.184-4.148 4.184-4.148a8 8 0 0 0-5.838 1.092 8.01 8.01 0 0 0-2.67 10.71 8 8 0 0 0 4.64 3.711z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M10.968 7.677a4.43 4.43 0 0 1 4.168 1.174c1.462 1.463 1.747 3.635.692 5.352a7.6 7.6 0 0 1-1.208 1.494 2502 2502 0 0 1-4.184 4.147 8 8 0 0 0 5.846-1.085 8.01 8.01 0 0 0 2.67-10.722 8 8 0 0 0-4.65-3.708z'
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
                        id: 'soneium__a'
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
 * @component @name NetworkSoneium
 * @description Web3Icon for NetworkSoneium
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiMwMDAiIGQ9Ik0xMy4xNTMgMTYuODY3YTQuOTkgNC45OSAwIDAgMS00LjY5LTEuMzIgNC44NDUgNC44NDUgMCAwIDEtLjc4NC02LjAzMSA4LjQgOC40IDAgMCAxIDEuMzU5LTEuNjc3YzEuNjYtMS42NTUgNC43MDctNC42NjcgNC43MDctNC42NjdBOSA5IDAgMCAwIDcuMTc3IDQuNGE5LjAxMyA5LjAxMyAwIDAgMC0zLjAwMyAxMi4wNSA5IDkgMCAwIDAgNS4yMiA0LjE3NXoiLz4KICAgIDxwYXRoIGZpbGw9IiMwMDAiIGQ9Ik0xMC44MzkgNy4xMzZhNC45OCA0Ljk4IDAgMCAxIDQuNjkgMS4zMjFjMS42NDQgMS42NDcgMS45NjUgNC4wOS43NzggNi4wMjJhOC41IDguNSAwIDAgMS0xLjM2IDEuNjhjLTEuNjYgMS42NTItNC43MDcgNC42NjYtNC43MDcgNC42NjZhOSA5IDAgMCAwIDYuNTc4LTEuMjIxIDkuMDEgOS4wMSAwIDAgMCAzLjAwNS0xMi4wNjJBOSA5IDAgMCAwIDE0LjU5IDMuMzd6Ii8+Cjwvc3ZnPgo=) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xMy4xNTMgMTYuODY3YTQuOTkgNC45OSAwIDAgMS00LjY5LTEuMzIgNC44NDUgNC44NDUgMCAwIDEtLjc4NC02LjAzMSA4LjQgOC40IDAgMCAxIDEuMzU5LTEuNjc3YzEuNjYtMS42NTUgNC43MDctNC42NjcgNC43MDctNC42NjdBOSA5IDAgMCAwIDcuMTc3IDQuNGE5LjAxMyA5LjAxMyAwIDAgMC0zLjAwMyAxMi4wNSA5IDkgMCAwIDAgNS4yMiA0LjE3NXoiLz4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xMC44MzkgNy4xMzZhNC45OCA0Ljk4IDAgMCAxIDQuNjkgMS4zMjFjMS42NDQgMS42NDcgMS45NjUgNC4wOS43NzggNi4wMjJhOC41IDguNSAwIDAgMS0xLjM2IDEuNjhjLTEuNjYgMS42NTItNC43MDcgNC42NjYtNC43MDcgNC42NjZhOSA5IDAgMCAwIDYuNTc4LTEuMjIxIDkuMDEgOS4wMSAwIDAgMCAzLjAwNS0xMi4wNjJBOSA5IDAgMCAwIDE0LjU5IDMuMzd6Ii8+Cjwvc3ZnPgo=) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNzb25laXVtX19hKSI+CiAgICAgICAgPHBhdGggZmlsbD0iIzAwMCIgZD0iTTI0IDBIMHYyNGgyNHoiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTMuMDI1IDE2LjMyN2E0LjQzIDQuNDMgMCAwIDEtNC4xNjktMS4xNzUgNC4zMDYgNC4zMDYgMCAwIDEtLjY5Ny01LjM2QTcuNSA3LjUgMCAwIDEgOS4zNjcgOC4zYzEuNDc1LTEuNDcxIDQuMTg0LTQuMTQ4IDQuMTg0LTQuMTQ4YTggOCAwIDAgMC01LjgzOCAxLjA5MiA4LjAxIDguMDEgMCAwIDAtMi42NyAxMC43MSA4IDggMCAwIDAgNC42NCAzLjcxMXoiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTAuOTY4IDcuNjc3YTQuNDMgNC40MyAwIDAgMSA0LjE2OCAxLjE3NGMxLjQ2MiAxLjQ2MyAxLjc0NyAzLjYzNS42OTIgNS4zNTJhNy42IDcuNiAwIDAgMS0xLjIwOCAxLjQ5NCAyNTAyIDI1MDIgMCAwIDEtNC4xODQgNC4xNDcgOCA4IDAgMCAwIDUuODQ2LTEuMDg1IDguMDEgOC4wMSAwIDAgMCAyLjY3LTEwLjcyMiA4IDggMCAwIDAtNC42NS0zLjcwOHoiLz4KICAgIDwvZz4KICAgIDxkZWZzPgogICAgICAgIDxjbGlwUGF0aCBpZD0ic29uZWl1bV9fYSI+CiAgICAgICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0wIDBoMjR2MjRIMHoiLz4KICAgICAgICA8L2NsaXBQYXRoPgogICAgPC9kZWZzPgo8L3N2Zz4K)
 * @see https://web3icons.io/networks/soneium
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const NetworkSoneium = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWeb3Icon"])('NetworkSoneium', __iconNode);
;
}),
]);

//# sourceMappingURL=1qqr_%40web3icons_react_dist_15ren1y._.js.map