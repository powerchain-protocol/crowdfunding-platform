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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/networks/NetworkMeter.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>NetworkMeter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-client] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#010E35',
                d: 'M20.02 11.028q.057.477.058.972c0 4.473-3.616 8.1-8.078 8.1a8.08 8.08 0 0 1-7.333-4.696l1.293-.652A6.63 6.63 0 0 0 12 18.65c3.662 0 6.632-2.977 6.632-6.65l-.003-.204zM12 3.9c3.402 0 6.314 2.11 7.504 5.096l-1.382.441a6.63 6.63 0 0 0-6.123-4.087c-3.662 0-6.632 2.977-6.632 6.65l.002.136-1.353 1.11A8 8 0 0 1 3.92 12c0-4.474 3.617-8.1 8.078-8.1',
                fillRule: 'evenodd',
                clipRule: 'evenodd'
            }
        ],
        [
            'path',
            {
                fill: '#010E35',
                d: 'm3 15.239 7.901-6.48-.328 2.694 4.612-2.62-.234 2.559L21 9.46l-8.204 4.53.613-2.577-4.74 2.785.313-1.978z',
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
                d: 'M20.02 11.028q.057.477.058.972c0 4.473-3.616 8.1-8.078 8.1a8.08 8.08 0 0 1-7.333-4.696l1.293-.652A6.63 6.63 0 0 0 12 18.65c3.662 0 6.632-2.977 6.632-6.65l-.003-.204zM12 3.9c3.402 0 6.314 2.11 7.504 5.096l-1.382.441a6.63 6.63 0 0 0-6.123-4.087c-3.662 0-6.632 2.977-6.632 6.65l.002.136-1.353 1.11A8 8 0 0 1 3.92 12c0-4.474 3.617-8.1 8.078-8.1',
                fillRule: 'evenodd',
                clipRule: 'evenodd'
            }
        ],
        [
            'path',
            {
                fill: 'currentColor',
                d: 'm3 15.239 7.901-6.48-.328 2.694 4.612-2.62-.234 2.559L21 9.46l-8.204 4.53.613-2.577-4.74 2.785.313-1.978z',
                fillRule: 'evenodd',
                clipRule: 'evenodd'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#meter__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#010E35',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M19.129 11.136q.05.424.051.864c0 3.976-3.214 7.2-7.18 7.2a7.18 7.18 0 0 1-6.518-4.174l1.149-.58a5.9 5.9 0 0 0 5.368 3.465c3.256 0 5.896-2.646 5.896-5.911q0-.09-.003-.181zM11.999 4.8a7.18 7.18 0 0 1 6.671 4.53l-1.229.392A5.9 5.9 0 0 0 12 6.09c-3.255 0-5.895 2.646-5.895 5.911l.002.121-1.203.986A7 7 0 0 1 4.818 12C4.82 8.023 8.034 4.8 12 4.8',
                        fillRule: 'evenodd',
                        clipRule: 'evenodd'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'm4 14.879 7.023-5.76-.291 2.395 4.099-2.329-.208 2.274L20 9.742l-7.293 4.028.545-2.292-4.213 2.476.279-1.758z',
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
                        id: 'meter__a'
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
 * @component @name NetworkMeter
 * @description Web3Icon for NetworkMeter
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiMwMTBFMzUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTIwLjAyIDExLjAyOHEuMDU3LjQ3Ny4wNTguOTcyYzAgNC40NzMtMy42MTYgOC4xLTguMDc4IDguMWE4LjA4IDguMDggMCAwIDEtNy4zMzMtNC42OTZsMS4yOTMtLjY1MkE2LjYzIDYuNjMgMCAwIDAgMTIgMTguNjVjMy42NjIgMCA2LjYzMi0yLjk3NyA2LjYzMi02LjY1bC0uMDAzLS4yMDR6TTEyIDMuOWMzLjQwMiAwIDYuMzE0IDIuMTEgNy41MDQgNS4wOTZsLTEuMzgyLjQ0MWE2LjYzIDYuNjMgMCAwIDAtNi4xMjMtNC4wODdjLTMuNjYyIDAtNi42MzIgMi45NzctNi42MzIgNi42NWwuMDAyLjEzNi0xLjM1MyAxLjExQTggOCAwIDAgMSAzLjkyIDEyYzAtNC40NzQgMy42MTctOC4xIDguMDc4LTguMSIgY2xpcC1ydWxlPSJldmVub2RkIi8+CiAgICA8cGF0aCBmaWxsPSIjMDEwRTM1IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Im0zIDE1LjIzOSA3LjkwMS02LjQ4LS4zMjggMi42OTQgNC42MTItMi42Mi0uMjM0IDIuNTU5TDIxIDkuNDZsLTguMjA0IDQuNTMuNjEzLTIuNTc3LTQuNzQgMi43ODUuMzEzLTEuOTc4eiIgY2xpcC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo=) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTIwLjAyIDExLjAyOHEuMDU3LjQ3Ny4wNTguOTcyYzAgNC40NzMtMy42MTYgOC4xLTguMDc4IDguMWE4LjA4IDguMDggMCAwIDEtNy4zMzMtNC42OTZsMS4yOTMtLjY1MkE2LjYzIDYuNjMgMCAwIDAgMTIgMTguNjVjMy42NjIgMCA2LjYzMi0yLjk3NyA2LjYzMi02LjY1bC0uMDAzLS4yMDR6TTEyIDMuOWMzLjQwMiAwIDYuMzE0IDIuMTEgNy41MDQgNS4wOTZsLTEuMzgyLjQ0MWE2LjYzIDYuNjMgMCAwIDAtNi4xMjMtNC4wODdjLTMuNjYyIDAtNi42MzIgMi45NzctNi42MzIgNi42NWwuMDAyLjEzNi0xLjM1MyAxLjExQTggOCAwIDAgMSAzLjkyIDEyYzAtNC40NzQgMy42MTctOC4xIDguMDc4LTguMSIgY2xpcC1ydWxlPSJldmVub2RkIi8+CiAgICA8cGF0aCBmaWxsPSIjZmZmIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Im0zIDE1LjIzOSA3LjkwMS02LjQ4LS4zMjggMi42OTQgNC42MTItMi42Mi0uMjM0IDIuNTU5TDIxIDkuNDZsLTguMjA0IDQuNTMuNjEzLTIuNTc3LTQuNzQgMi43ODUuMzEzLTEuOTc4eiIgY2xpcC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo=) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNtZXRlcl9fYSkiPgogICAgICAgIDxwYXRoIGZpbGw9IiMwMTBFMzUiIGQ9Ik0yNCAwSDB2MjRoMjR6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTkuMTI5IDExLjEzNnEuMDUuNDI0LjA1MS44NjRjMCAzLjk3Ni0zLjIxNCA3LjItNy4xOCA3LjJhNy4xOCA3LjE4IDAgMCAxLTYuNTE4LTQuMTc0bDEuMTQ5LS41OGE1LjkgNS45IDAgMCAwIDUuMzY4IDMuNDY1YzMuMjU2IDAgNS44OTYtMi42NDYgNS44OTYtNS45MTFxMC0uMDktLjAwMy0uMTgxek0xMS45OTkgNC44YTcuMTggNy4xOCAwIDAgMSA2LjY3MSA0LjUzbC0xLjIyOS4zOTJBNS45IDUuOSAwIDAgMCAxMiA2LjA5Yy0zLjI1NSAwLTUuODk1IDIuNjQ2LTUuODk1IDUuOTExbC4wMDIuMTIxLTEuMjAzLjk4NkE3IDcgMCAwIDEgNC44MTggMTJDNC44MiA4LjAyMyA4LjAzNCA0LjggMTIgNC44IiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Im00IDE0Ljg3OSA3LjAyMy01Ljc2LS4yOTEgMi4zOTUgNC4wOTktMi4zMjktLjIwOCAyLjI3NEwyMCA5Ljc0MmwtNy4yOTMgNC4wMjguNTQ1LTIuMjkyLTQuMjEzIDIuNDc2LjI3OS0xLjc1OHoiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgogICAgPC9nPgogICAgPGRlZnM+CiAgICAgICAgPGNsaXBQYXRoIGlkPSJtZXRlcl9fYSI+CiAgICAgICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0wIDBoMjR2MjRIMHoiLz4KICAgICAgICA8L2NsaXBQYXRoPgogICAgPC9kZWZzPgo8L3N2Zz4K)
 * @see https://web3icons.io/networks/meter
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const NetworkMeter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWeb3Icon"])('NetworkMeter', __iconNode);
;
}),
]);

//# sourceMappingURL=1qqr_%40web3icons_react_dist_0-e_w2e._.js.map