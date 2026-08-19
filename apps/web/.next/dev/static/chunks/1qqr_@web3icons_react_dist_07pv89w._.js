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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenNYM.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenNYM
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-client] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#181B1E',
                d: 'M21 12a9 9 0 1 0-18 0 9 9 0 0 0 18 0m-1.059 0a7.941 7.941 0 1 0-15.883 0 7.941 7.941 0 0 0 15.883 0',
                fillRule: 'evenodd',
                clipRule: 'evenodd'
            }
        ],
        [
            'path',
            {
                fill: '#181B1E',
                d: 'M7.235 17.289V6.722a7.2 7.2 0 0 1 1.589-1.075l6.353 9.9v-9.9a7.3 7.3 0 0 1 1.588 1.117v10.53a7.4 7.4 0 0 1-1.588 1.059L8.824 8.42v9.932a8.5 8.5 0 0 1-1.589-1.064'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M21 12a9 9 0 1 0-18 0 9 9 0 0 0 18 0m-1.059 0a7.942 7.942 0 1 0-15.883 0 7.942 7.942 0 0 0 15.883 0',
                fillRule: 'evenodd',
                clipRule: 'evenodd'
            }
        ],
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M7.235 17.289V6.722a7.2 7.2 0 0 1 1.589-1.075l6.353 9.9v-9.9a7.3 7.3 0 0 1 1.588 1.117v10.53a7.4 7.4 0 0 1-1.588 1.059L8.824 8.42v9.932a8.5 8.5 0 0 1-1.589-1.064'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#NYM__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#181B1E',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M20 12a8 8 0 1 0-16 0 8 8 0 0 0 16 0m-.941 0a7.06 7.06 0 1 0-14.12 0 7.06 7.06 0 0 0 14.12 0',
                        fillRule: 'evenodd',
                        clipRule: 'evenodd'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M7.765 16.701V7.308a6.4 6.4 0 0 1 1.411-.955l5.647 8.8v-8.8a6.5 6.5 0 0 1 1.412.993v9.36c-.428.373-.902.69-1.412.941L9.176 8.82v8.828a7.5 7.5 0 0 1-1.411-.946'
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
                        id: 'NYM__a'
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
 * @component @name TokenNYM
 * @description Web3Icon for TokenNYM
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiMxODFCMUUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTIxIDEyYTkgOSAwIDEgMC0xOCAwIDkgOSAwIDAgMCAxOCAwbS0xLjA1OSAwYTcuOTQxIDcuOTQxIDAgMSAwLTE1Ljg4MyAwIDcuOTQxIDcuOTQxIDAgMCAwIDE1Ljg4MyAwIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KICAgIDxwYXRoIGZpbGw9IiMxODFCMUUiIGQ9Ik03LjIzNSAxNy4yODlWNi43MjJhNy4yIDcuMiAwIDAgMSAxLjU4OS0xLjA3NWw2LjM1MyA5Ljl2LTkuOWE3LjMgNy4zIDAgMCAxIDEuNTg4IDEuMTE3djEwLjUzYTcuNCA3LjQgMCAwIDEtMS41ODggMS4wNTlMOC44MjQgOC40MnY5LjkzMmE4LjUgOC41IDAgMCAxLTEuNTg5LTEuMDY0Ii8+Cjwvc3ZnPgo=) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTIxIDEyYTkgOSAwIDEgMC0xOCAwIDkgOSAwIDAgMCAxOCAwbS0xLjA1OSAwYTcuOTQyIDcuOTQyIDAgMSAwLTE1Ljg4MyAwIDcuOTQyIDcuOTQyIDAgMCAwIDE1Ljg4MyAwIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik03LjIzNSAxNy4yODlWNi43MjJhNy4yIDcuMiAwIDAgMSAxLjU4OS0xLjA3NWw2LjM1MyA5Ljl2LTkuOWE3LjMgNy4zIDAgMCAxIDEuNTg4IDEuMTE3djEwLjUzYTcuNCA3LjQgMCAwIDEtMS41ODggMS4wNTlMOC44MjQgOC40MnY5LjkzMmE4LjUgOC41IDAgMCAxLTEuNTg5LTEuMDY0Ii8+Cjwvc3ZnPgo=) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNOWU1fX2EpIj4KICAgICAgICA8cGF0aCBmaWxsPSIjMTgxQjFFIiBkPSJNMjQgMEgwdjI0aDI0eiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTIwIDEyYTggOCAwIDEgMC0xNiAwIDggOCAwIDAgMCAxNiAwbS0uOTQxIDBhNy4wNiA3LjA2IDAgMSAwLTE0LjEyIDAgNy4wNiA3LjA2IDAgMCAwIDE0LjEyIDAiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik03Ljc2NSAxNi43MDFWNy4zMDhhNi40IDYuNCAwIDAgMSAxLjQxMS0uOTU1bDUuNjQ3IDguOHYtOC44YTYuNSA2LjUgMCAwIDEgMS40MTIuOTkzdjkuMzZjLS40MjguMzczLS45MDIuNjktMS40MTIuOTQxTDkuMTc2IDguODJ2OC44MjhhNy41IDcuNSAwIDAgMS0xLjQxMS0uOTQ2Ii8+CiAgICA8L2c+CiAgICA8ZGVmcz4KICAgICAgICA8Y2xpcFBhdGggaWQ9Ik5ZTV9fYSI+CiAgICAgICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0wIDBoMjR2MjRIMHoiLz4KICAgICAgICA8L2NsaXBQYXRoPgogICAgPC9kZWZzPgo8L3N2Zz4K)
 * @see https://web3icons.io/tokens/NYM
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenNYM = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenNYM', __iconNode);
;
}),
]);

//# sourceMappingURL=1qqr_%40web3icons_react_dist_07pv89w._.js.map