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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenJURIS.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenJURIS
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-client] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#fff',
                d: 'M19.713 9.713a2578 2578 0 0 1-4.505 8H8.782L5.574 12l3.218-5.713h5.139L15.218 4H7.505L3 12c1.09 1.941 3.396 6.038 4.495 8h9L21 12z',
                fillRule: 'evenodd',
                clipRule: 'evenodd'
            }
        ],
        [
            'path',
            {
                fill: '#CC051C',
                d: 'M11.357 13.139c-.159-.285-.486-.854-.644-1.139a618 618 0 0 1 1.93-3.425H10.07L8.14 12l1.93 3.426h3.852c1.396-2.49 3.099-5.51 4.505-8L17.14 5.139a5534 5534 0 0 1-4.505 8h-1.287z',
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
                d: 'M19.713 9.713a2578 2578 0 0 1-4.505 8H8.782L5.574 12l3.218-5.713h5.139L15.218 4H7.505L3 12c1.09 1.941 3.396 6.038 4.495 8h9L21 12z',
                fillRule: 'evenodd',
                clipRule: 'evenodd'
            }
        ],
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M11.357 13.139c-.159-.285-.486-.854-.644-1.139a618 618 0 0 1 1.93-3.425H10.07L8.14 12l1.93 3.426h3.852c1.396-2.49 3.099-5.51 4.505-8L17.14 5.139a5534 5534 0 0 1-4.505 8h-1.287z',
                fillRule: 'evenodd',
                clipRule: 'evenodd'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#juris__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#132452',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M18.856 10.142a2320 2320 0 0 1-4.005 7.2H9.14L6.288 12.2l2.86-5.142h4.568L14.86 5H8.004L4 12.2c.968 1.747 3.019 5.434 3.996 7.2h8L20 12.2z',
                        fillRule: 'evenodd',
                        clipRule: 'evenodd'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#CC051C',
                        d: 'M11.428 13.224c-.141-.256-.432-.768-.572-1.024.422-.769 1.285-2.315 1.716-3.083h-2.288L8.567 12.2l1.717 3.083h3.423c1.241-2.242 2.755-4.959 4.005-7.2l-1.145-2.059c-1.258 2.27-2.745 4.94-4.004 7.2h-1.144z',
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
                        id: 'juris__a'
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
 * @component @name TokenJURIS
 * @description Web3Icon for TokenJURIS
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTE5LjcxMyA5LjcxM2EyNTc4IDI1NzggMCAwIDEtNC41MDUgOEg4Ljc4Mkw1LjU3NCAxMmwzLjIxOC01LjcxM2g1LjEzOUwxNS4yMTggNEg3LjUwNUwzIDEyYzEuMDkgMS45NDEgMy4zOTYgNi4wMzggNC40OTUgOGg5TDIxIDEyeiIgY2xpcC1ydWxlPSJldmVub2RkIi8+CiAgICA8cGF0aCBmaWxsPSIjQ0MwNTFDIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMS4zNTcgMTMuMTM5Yy0uMTU5LS4yODUtLjQ4Ni0uODU0LS42NDQtMS4xMzlhNjE4IDYxOCAwIDAgMSAxLjkzLTMuNDI1SDEwLjA3TDguMTQgMTJsMS45MyAzLjQyNmgzLjg1MmMxLjM5Ni0yLjQ5IDMuMDk5LTUuNTEgNC41MDUtOEwxNy4xNCA1LjEzOWE1NTM0IDU1MzQgMCAwIDEtNC41MDUgOGgtMS4yODd6IiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+Cg==) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTE5LjcxMyA5LjcxM2EyNTc4IDI1NzggMCAwIDEtNC41MDUgOEg4Ljc4Mkw1LjU3NCAxMmwzLjIxOC01LjcxM2g1LjEzOUwxNS4yMTggNEg3LjUwNUwzIDEyYzEuMDkgMS45NDEgMy4zOTYgNi4wMzggNC40OTUgOGg5TDIxIDEyeiIgY2xpcC1ydWxlPSJldmVub2RkIi8+CiAgICA8cGF0aCBmaWxsPSIjZmZmIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMS4zNTcgMTMuMTM5Yy0uMTU5LS4yODUtLjQ4Ni0uODU0LS42NDQtMS4xMzlhNjE4IDYxOCAwIDAgMSAxLjkzLTMuNDI1SDEwLjA3TDguMTQgMTJsMS45MyAzLjQyNmgzLjg1MmMxLjM5Ni0yLjQ5IDMuMDk5LTUuNTEgNC41MDUtOEwxNy4xNCA1LjEzOWE1NTM0IDU1MzQgMCAwIDEtNC41MDUgOGgtMS4yODd6IiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+Cg==) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNqdXJpc19fYSkiPgogICAgICAgIDxwYXRoIGZpbGw9IiMxMzI0NTIiIGQ9Ik0yNCAwSDB2MjRoMjR6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTguODU2IDEwLjE0MmEyMzIwIDIzMjAgMCAwIDEtNC4wMDUgNy4ySDkuMTRMNi4yODggMTIuMmwyLjg2LTUuMTQyaDQuNTY4TDE0Ljg2IDVIOC4wMDRMNCAxMi4yYy45NjggMS43NDcgMy4wMTkgNS40MzQgMy45OTYgNy4yaDhMMjAgMTIuMnoiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNDQzA1MUMiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTExLjQyOCAxMy4yMjRjLS4xNDEtLjI1Ni0uNDMyLS43NjgtLjU3Mi0xLjAyNC40MjItLjc2OSAxLjI4NS0yLjMxNSAxLjcxNi0zLjA4M2gtMi4yODhMOC41NjcgMTIuMmwxLjcxNyAzLjA4M2gzLjQyM2MxLjI0MS0yLjI0MiAyLjc1NS00Ljk1OSA0LjAwNS03LjJsLTEuMTQ1LTIuMDU5Yy0xLjI1OCAyLjI3LTIuNzQ1IDQuOTQtNC4wMDQgNy4yaC0xLjE0NHoiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgogICAgPC9nPgogICAgPGRlZnM+CiAgICAgICAgPGNsaXBQYXRoIGlkPSJqdXJpc19fYSI+CiAgICAgICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0wIDBoMjR2MjRIMHoiLz4KICAgICAgICA8L2NsaXBQYXRoPgogICAgPC9kZWZzPgo8L3N2Zz4K)
 * @see https://web3icons.io/tokens/JURIS
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenJURIS = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenJURIS', __iconNode);
;
}),
]);

//# sourceMappingURL=1qqr_%40web3icons_react_dist_0_g0eku._.js.map