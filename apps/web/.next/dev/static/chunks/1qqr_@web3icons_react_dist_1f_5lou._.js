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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenUSDX.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenUSDX
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-client] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#FA9B00',
                d: 'M11.237 6.938c2.903 0 5.263 2.453 5.263 5.47 0 3.015-2.36 5.217-5.263 5.217h-.921v-2.25h.921c1.663 0 3.016-1.233 3.016-2.968s-1.353-3.22-3.015-3.22H5.813v9.563h-2.25V6.938z',
                fillRule: 'evenodd',
                clipRule: 'evenodd'
            }
        ],
        [
            'path',
            {
                fill: '#242A47',
                d: 'M11.677 3c4.83 0 8.76 4.037 8.76 9 0 4.962-3.93 9-8.76 9h-4.74V10.313h2.25v8.437h2.49c3.604 0 6.51-3.04 6.51-6.75s-2.907-6.75-6.51-6.75H6.375V3z',
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
                d: 'M11.237 6.938c2.902 0 5.263 2.453 5.263 5.47 0 3.015-2.36 5.217-5.263 5.217h-.922v-2.25h.922c1.662 0 3.015-1.233 3.015-2.968s-1.353-3.22-3.015-3.22H5.813v9.563h-2.25V6.938z',
                fillRule: 'evenodd',
                clipRule: 'evenodd'
            }
        ],
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M11.677 3c4.83 0 8.76 4.037 8.76 9 0 4.962-3.93 9-8.76 9h-4.74V10.313h2.25v8.437h2.49c3.604 0 6.51-3.04 6.51-6.75s-2.906-6.75-6.51-6.75H6.375V3z',
                fillRule: 'evenodd',
                clipRule: 'evenodd'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#USDX__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#FA9B00',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M11.322 7.5C13.902 7.5 16 9.681 16 12.362S13.9 17 11.322 17h-.82v-2h.82c1.478 0 2.68-1.096 2.68-2.638 0-1.543-1.203-2.862-2.68-2.862H6.5V18h-2V7.5z',
                        fillRule: 'evenodd',
                        clipRule: 'evenodd'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M11.713 4c4.294 0 7.787 3.588 7.787 8 0 4.411-3.493 8-7.787 8H7.5v-9.5h2V18h2.213c3.203 0 5.787-2.702 5.787-6s-2.584-6-5.787-6H7V4z',
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
                        id: 'USDX__a'
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
 * @component @name TokenUSDX
 * @description Web3Icon for TokenUSDX
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNGQTlCMDAiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTExLjIzNyA2LjkzOGMyLjkwMyAwIDUuMjYzIDIuNDUzIDUuMjYzIDUuNDcgMCAzLjAxNS0yLjM2IDUuMjE3LTUuMjYzIDUuMjE3aC0uOTIxdi0yLjI1aC45MjFjMS42NjMgMCAzLjAxNi0xLjIzMyAzLjAxNi0yLjk2OHMtMS4zNTMtMy4yMi0zLjAxNS0zLjIySDUuODEzdjkuNTYzaC0yLjI1VjYuOTM4eiIgY2xpcC1ydWxlPSJldmVub2RkIi8+CiAgICA8cGF0aCBmaWxsPSIjMjQyQTQ3IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMS42NzcgM2M0LjgzIDAgOC43NiA0LjAzNyA4Ljc2IDkgMCA0Ljk2Mi0zLjkzIDktOC43NiA5aC00Ljc0VjEwLjMxM2gyLjI1djguNDM3aDIuNDljMy42MDQgMCA2LjUxLTMuMDQgNi41MS02Ljc1cy0yLjkwNy02Ljc1LTYuNTEtNi43NUg2LjM3NVYzeiIgY2xpcC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo=) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTExLjIzNyA2LjkzOGMyLjkwMiAwIDUuMjYzIDIuNDUzIDUuMjYzIDUuNDcgMCAzLjAxNS0yLjM2IDUuMjE3LTUuMjYzIDUuMjE3aC0uOTIydi0yLjI1aC45MjJjMS42NjIgMCAzLjAxNS0xLjIzMyAzLjAxNS0yLjk2OHMtMS4zNTMtMy4yMi0zLjAxNS0zLjIySDUuODEzdjkuNTYzaC0yLjI1VjYuOTM4eiIgY2xpcC1ydWxlPSJldmVub2RkIi8+CiAgICA8cGF0aCBmaWxsPSIjZmZmIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMS42NzcgM2M0LjgzIDAgOC43NiA0LjAzNyA4Ljc2IDkgMCA0Ljk2Mi0zLjkzIDktOC43NiA5aC00Ljc0VjEwLjMxM2gyLjI1djguNDM3aDIuNDljMy42MDQgMCA2LjUxLTMuMDQgNi41MS02Ljc1cy0yLjkwNi02Ljc1LTYuNTEtNi43NUg2LjM3NVYzeiIgY2xpcC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo=) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNVU0RYX19hKSI+CiAgICAgICAgPHBhdGggZmlsbD0iI0ZBOUIwMCIgZD0iTTI0IDBIMHYyNGgyNHoiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMS4zMjIgNy41QzEzLjkwMiA3LjUgMTYgOS42ODEgMTYgMTIuMzYyUzEzLjkgMTcgMTEuMzIyIDE3aC0uODJ2LTJoLjgyYzEuNDc4IDAgMi42OC0xLjA5NiAyLjY4LTIuNjM4IDAtMS41NDMtMS4yMDMtMi44NjItMi42OC0yLjg2Mkg2LjVWMThoLTJWNy41eiIgY2xpcC1ydWxlPSJldmVub2RkIi8+CiAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTEuNzEzIDRjNC4yOTQgMCA3Ljc4NyAzLjU4OCA3Ljc4NyA4IDAgNC40MTEtMy40OTMgOC03Ljc4NyA4SDcuNXYtOS41aDJWMThoMi4yMTNjMy4yMDMgMCA1Ljc4Ny0yLjcwMiA1Ljc4Ny02cy0yLjU4NC02LTUuNzg3LTZIN1Y0eiIgY2xpcC1ydWxlPSJldmVub2RkIi8+CiAgICA8L2c+CiAgICA8ZGVmcz4KICAgICAgICA8Y2xpcFBhdGggaWQ9IlVTRFhfX2EiPgogICAgICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMCAwaDI0djI0SDB6Ii8+CiAgICAgICAgPC9jbGlwUGF0aD4KICAgIDwvZGVmcz4KPC9zdmc+Cg==)
 * @see https://web3icons.io/tokens/USDX
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenUSDX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenUSDX', __iconNode);
;
}),
]);

//# sourceMappingURL=1qqr_%40web3icons_react_dist_1f_5lou._.js.map