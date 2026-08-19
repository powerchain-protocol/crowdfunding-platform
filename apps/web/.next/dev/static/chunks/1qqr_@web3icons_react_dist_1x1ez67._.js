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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenBEAN.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenBEAN
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-client] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#B31F39',
                d: 'M13.9 3.379c-3.528-1.295-6.28.9-7.709 4-1.773 3.822-2.026 9.736 1.998 12.313a9.09 9.09 0 0 0 8.024.676 5.26 5.26 0 0 0 2.06-1.328c1.35-1.463.653-3.225-.169-4.716l-.354-.608c-.546-.928-1.109-1.874-1.092-3 0-.399.107-.843.214-1.288.073-.304.146-.619.186-.912.337-2.538-.9-4.31-3.158-5.137M9.805 9.214c.518 0 .94-.422.94-.945a.943.943 0 0 0-.94-.946.94.94 0 0 0-.934.946c0 .523.422.945.934.945m3.77 1.384c.524 0 .94-.427.94-.945a.94.94 0 0 0-.934-.945.946.946 0 0 0 0 1.89z',
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
                d: 'M13.9 3.379c-3.528-1.295-6.28.9-7.709 4-1.773 3.822-2.026 9.736 1.998 12.313a9.09 9.09 0 0 0 8.024.676 5.26 5.26 0 0 0 2.06-1.328c1.35-1.463.653-3.225-.169-4.716l-.354-.608c-.546-.928-1.109-1.874-1.092-3 0-.399.107-.843.214-1.288.073-.304.146-.619.186-.912.337-2.538-.9-4.31-3.158-5.137M9.805 9.214c.518 0 .94-.422.94-.945a.943.943 0 0 0-.94-.946.94.94 0 0 0-.934.946c0 .523.422.945.934.945m3.77 1.384c.524 0 .94-.427.94-.945a.94.94 0 0 0-.934-.945.946.946 0 0 0 0 1.89z',
                fillRule: 'evenodd',
                clipRule: 'evenodd'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#BEAN__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#B31F39',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M13.689 4.337c-3.136-1.151-5.582.8-6.853 3.556-1.576 3.397-1.8 8.654 1.776 10.945a8.08 8.08 0 0 0 7.133.6 4.7 4.7 0 0 0 1.83-1.18c1.201-1.301.58-2.867-.15-4.192l-.315-.54c-.485-.826-.985-1.666-.97-2.667 0-.355.095-.75.19-1.145.065-.27.13-.55.165-.81.3-2.257-.8-3.832-2.806-4.567m-3.642 5.187c.46 0 .836-.375.836-.84a.84.84 0 0 0-.836-.841.837.837 0 0 0-.83.84c0 .466.375.84.83.84m3.352 1.23c.465 0 .835-.38.835-.84 0-.465-.37-.84-.83-.84a.841.841 0 0 0 0 1.68z',
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
                        id: 'BEAN__a'
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
 * @component @name TokenBEAN
 * @description Web3Icon for TokenBEAN
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNCMzFGMzkiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTEzLjkgMy4zNzljLTMuNTI4LTEuMjk1LTYuMjguOS03LjcwOSA0LTEuNzczIDMuODIyLTIuMDI2IDkuNzM2IDEuOTk4IDEyLjMxM2E5LjA5IDkuMDkgMCAwIDAgOC4wMjQuNjc2IDUuMjYgNS4yNiAwIDAgMCAyLjA2LTEuMzI4YzEuMzUtMS40NjMuNjUzLTMuMjI1LS4xNjktNC43MTZsLS4zNTQtLjYwOGMtLjU0Ni0uOTI4LTEuMTA5LTEuODc0LTEuMDkyLTMgMC0uMzk5LjEwNy0uODQzLjIxNC0xLjI4OC4wNzMtLjMwNC4xNDYtLjYxOS4xODYtLjkxMi4zMzctMi41MzgtLjktNC4zMS0zLjE1OC01LjEzN005LjgwNSA5LjIxNGMuNTE4IDAgLjk0LS40MjIuOTQtLjk0NWEuOTQzLjk0MyAwIDAgMC0uOTQtLjk0Ni45NC45NCAwIDAgMC0uOTM0Ljk0NmMwIC41MjMuNDIyLjk0NS45MzQuOTQ1bTMuNzcgMS4zODRjLjUyNCAwIC45NC0uNDI3Ljk0LS45NDVhLjk0Ljk0IDAgMCAwLS45MzQtLjk0NS45NDYuOTQ2IDAgMCAwIDAgMS44OXoiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4K) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTEzLjkgMy4zNzljLTMuNTI4LTEuMjk1LTYuMjguOS03LjcwOSA0LTEuNzczIDMuODIyLTIuMDI2IDkuNzM2IDEuOTk4IDEyLjMxM2E5LjA5IDkuMDkgMCAwIDAgOC4wMjQuNjc2IDUuMjYgNS4yNiAwIDAgMCAyLjA2LTEuMzI4YzEuMzUtMS40NjMuNjUzLTMuMjI1LS4xNjktNC43MTZsLS4zNTQtLjYwOGMtLjU0Ni0uOTI4LTEuMTA5LTEuODc0LTEuMDkyLTMgMC0uMzk5LjEwNy0uODQzLjIxNC0xLjI4OC4wNzMtLjMwNC4xNDYtLjYxOS4xODYtLjkxMi4zMzctMi41MzgtLjktNC4zMS0zLjE1OC01LjEzN005LjgwNSA5LjIxNGMuNTE4IDAgLjk0LS40MjIuOTQtLjk0NWEuOTQzLjk0MyAwIDAgMC0uOTQtLjk0Ni45NC45NCAwIDAgMC0uOTM0Ljk0NmMwIC41MjMuNDIyLjk0NS45MzQuOTQ1bTMuNzcgMS4zODRjLjUyNCAwIC45NC0uNDI3Ljk0LS45NDVhLjk0Ljk0IDAgMCAwLS45MzQtLjk0NS45NDYuOTQ2IDAgMCAwIDAgMS44OXoiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4K) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNCRUFOX19hKSI+CiAgICAgICAgPHBhdGggZmlsbD0iI0IzMUYzOSIgZD0iTTI0IDBIMHYyNGgyNHoiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMy42ODkgNC4zMzdjLTMuMTM2LTEuMTUxLTUuNTgyLjgtNi44NTMgMy41NTYtMS41NzYgMy4zOTctMS44IDguNjU0IDEuNzc2IDEwLjk0NWE4LjA4IDguMDggMCAwIDAgNy4xMzMuNiA0LjcgNC43IDAgMCAwIDEuODMtMS4xOGMxLjIwMS0xLjMwMS41OC0yLjg2Ny0uMTUtNC4xOTJsLS4zMTUtLjU0Yy0uNDg1LS44MjYtLjk4NS0xLjY2Ni0uOTctMi42NjcgMC0uMzU1LjA5NS0uNzUuMTktMS4xNDUuMDY1LS4yNy4xMy0uNTUuMTY1LS44MS4zLTIuMjU3LS44LTMuODMyLTIuODA2LTQuNTY3bS0zLjY0MiA1LjE4N2MuNDYgMCAuODM2LS4zNzUuODM2LS44NGEuODQuODQgMCAwIDAtLjgzNi0uODQxLjgzNy44MzcgMCAwIDAtLjgzLjg0YzAgLjQ2Ni4zNzUuODQuODMuODRtMy4zNTIgMS4yM2MuNDY1IDAgLjgzNS0uMzguODM1LS44NCAwLS40NjUtLjM3LS44NC0uODMtLjg0YS44NDEuODQxIDAgMCAwIDAgMS42OHoiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgogICAgPC9nPgogICAgPGRlZnM+CiAgICAgICAgPGNsaXBQYXRoIGlkPSJCRUFOX19hIj4KICAgICAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTAgMGgyNHYyNEgweiIvPgogICAgICAgIDwvY2xpcFBhdGg+CiAgICA8L2RlZnM+Cjwvc3ZnPgo=)
 * @see https://web3icons.io/tokens/BEAN
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenBEAN = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenBEAN', __iconNode);
;
}),
]);

//# sourceMappingURL=1qqr_%40web3icons_react_dist_1x1ez67._.js.map