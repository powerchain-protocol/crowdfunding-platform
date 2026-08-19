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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenXCFX.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenXCFX
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-client] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#FF914C',
                d: 'M19.641 7.717a.27.27 0 0 0-.127.37 8.47 8.47 0 1 1-5.093-4.203.27.27 0 0 0 .354-.251.26.26 0 0 0-.185-.252 9 9 0 1 0 5.384 4.447.26.26 0 0 0-.333-.111m-7.64 9.053a4.764 4.764 0 1 0 .001-9.528 4.764 4.764 0 0 0 0 9.528m0 .529a5.294 5.294 0 1 0 0-10.589 5.294 5.294 0 0 0 0 10.589m6.883-12.176a1.588 1.588 0 1 1-3.177 0 1.588 1.588 0 0 1 3.177 0m.53 0a2.118 2.118 0 1 1-4.236 0 2.118 2.118 0 0 1 4.235 0',
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
                d: 'M19.641 7.717a.27.27 0 0 0-.127.37 8.47 8.47 0 1 1-5.093-4.203.27.27 0 0 0 .354-.251.26.26 0 0 0-.185-.252 9 9 0 1 0 5.384 4.447.26.26 0 0 0-.333-.111m-7.64 9.053a4.764 4.764 0 1 0 .001-9.528 4.764 4.764 0 0 0 0 9.528m0 .529a5.294 5.294 0 1 0 0-10.589 5.294 5.294 0 0 0 0 10.589m6.883-12.176a1.588 1.588 0 1 1-3.177 0 1.588 1.588 0 0 1 3.177 0m.53 0a2.118 2.118 0 1 1-4.236 0 2.118 2.118 0 0 1 4.235 0',
                fillRule: 'evenodd',
                clipRule: 'evenodd'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#XCFX__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#FF914C',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M18.792 8.193a.24.24 0 0 0-.14.236.24.24 0 0 0 .027.093 7.53 7.53 0 1 1-4.527-3.736.24.24 0 0 0 .314-.223.23.23 0 0 0-.163-.224 8 8 0 1 0 4.785 3.952.23.23 0 0 0-.296-.098m-6.79 8.047a4.234 4.234 0 1 0 0-8.469 4.234 4.234 0 0 0 0 8.469m0 .47a4.706 4.706 0 1 0 0-9.412 4.706 4.706 0 0 0 0 9.412m6.117-10.823a1.412 1.412 0 1 1-2.824 0 1.412 1.412 0 0 1 2.824 0m.47 0a1.882 1.882 0 1 1-3.764 0 1.882 1.882 0 0 1 3.765 0',
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
                        id: 'XCFX__a'
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
 * @component @name TokenXCFX
 * @description Web3Icon for TokenXCFX
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNGRjkxNEMiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTE5LjY0MSA3LjcxN2EuMjcuMjcgMCAwIDAtLjEyNy4zNyA4LjQ3IDguNDcgMCAxIDEtNS4wOTMtNC4yMDMuMjcuMjcgMCAwIDAgLjM1NC0uMjUxLjI2LjI2IDAgMCAwLS4xODUtLjI1MiA5IDkgMCAxIDAgNS4zODQgNC40NDcuMjYuMjYgMCAwIDAtLjMzMy0uMTExbS03LjY0IDkuMDUzYTQuNzY0IDQuNzY0IDAgMSAwIC4wMDEtOS41MjggNC43NjQgNC43NjQgMCAwIDAgMCA5LjUyOG0wIC41MjlhNS4yOTQgNS4yOTQgMCAxIDAgMC0xMC41ODkgNS4yOTQgNS4yOTQgMCAwIDAgMCAxMC41ODltNi44ODMtMTIuMTc2YTEuNTg4IDEuNTg4IDAgMSAxLTMuMTc3IDAgMS41ODggMS41ODggMCAwIDEgMy4xNzcgMG0uNTMgMGEyLjExOCAyLjExOCAwIDEgMS00LjIzNiAwIDIuMTE4IDIuMTE4IDAgMCAxIDQuMjM1IDAiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4K) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTE5LjY0MSA3LjcxN2EuMjcuMjcgMCAwIDAtLjEyNy4zNyA4LjQ3IDguNDcgMCAxIDEtNS4wOTMtNC4yMDMuMjcuMjcgMCAwIDAgLjM1NC0uMjUxLjI2LjI2IDAgMCAwLS4xODUtLjI1MiA5IDkgMCAxIDAgNS4zODQgNC40NDcuMjYuMjYgMCAwIDAtLjMzMy0uMTExbS03LjY0IDkuMDUzYTQuNzY0IDQuNzY0IDAgMSAwIC4wMDEtOS41MjggNC43NjQgNC43NjQgMCAwIDAgMCA5LjUyOG0wIC41MjlhNS4yOTQgNS4yOTQgMCAxIDAgMC0xMC41ODkgNS4yOTQgNS4yOTQgMCAwIDAgMCAxMC41ODltNi44ODMtMTIuMTc2YTEuNTg4IDEuNTg4IDAgMSAxLTMuMTc3IDAgMS41ODggMS41ODggMCAwIDEgMy4xNzcgMG0uNTMgMGEyLjExOCAyLjExOCAwIDEgMS00LjIzNiAwIDIuMTE4IDIuMTE4IDAgMCAxIDQuMjM1IDAiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4K) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNYQ0ZYX19hKSI+CiAgICAgICAgPHBhdGggZmlsbD0iI0ZGOTE0QyIgZD0iTTI0IDBIMHYyNGgyNHoiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xOC43OTIgOC4xOTNhLjI0LjI0IDAgMCAwLS4xNC4yMzYuMjQuMjQgMCAwIDAgLjAyNy4wOTMgNy41MyA3LjUzIDAgMSAxLTQuNTI3LTMuNzM2LjI0LjI0IDAgMCAwIC4zMTQtLjIyMy4yMy4yMyAwIDAgMC0uMTYzLS4yMjQgOCA4IDAgMSAwIDQuNzg1IDMuOTUyLjIzLjIzIDAgMCAwLS4yOTYtLjA5OG0tNi43OSA4LjA0N2E0LjIzNCA0LjIzNCAwIDEgMCAwLTguNDY5IDQuMjM0IDQuMjM0IDAgMCAwIDAgOC40NjltMCAuNDdhNC43MDYgNC43MDYgMCAxIDAgMC05LjQxMiA0LjcwNiA0LjcwNiAwIDAgMCAwIDkuNDEybTYuMTE3LTEwLjgyM2ExLjQxMiAxLjQxMiAwIDEgMS0yLjgyNCAwIDEuNDEyIDEuNDEyIDAgMCAxIDIuODI0IDBtLjQ3IDBhMS44ODIgMS44ODIgMCAxIDEtMy43NjQgMCAxLjg4MiAxLjg4MiAwIDAgMSAzLjc2NSAwIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KICAgIDwvZz4KICAgIDxkZWZzPgogICAgICAgIDxjbGlwUGF0aCBpZD0iWENGWF9fYSI+CiAgICAgICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0wIDBoMjR2MjRIMHoiLz4KICAgICAgICA8L2NsaXBQYXRoPgogICAgPC9kZWZzPgo8L3N2Zz4K)
 * @see https://web3icons.io/tokens/XCFX
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenXCFX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenXCFX', __iconNode);
;
}),
]);

//# sourceMappingURL=1qqr_%40web3icons_react_dist_02n7r0q._.js.map