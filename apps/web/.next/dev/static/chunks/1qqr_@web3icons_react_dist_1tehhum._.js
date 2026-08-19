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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenALPH.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenALPH
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-client] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#080515',
                d: 'M10.294 4.36a.68.68 0 0 0-.683-.353l-3.161.534c-.267.042-.384.266-.272.506l6.995 14.593a.685.685 0 0 0 .688.352l3.156-.533c.267-.043.384-.267.272-.507zM9.867 14.9c0-.229-.192-.389-.432-.352l-2.863.459a.52.52 0 0 0-.437.49v5.146c0 .229.197.389.437.352l2.863-.459a.52.52 0 0 0 .432-.49z'
            }
        ],
        [
            'path',
            {
                fill: '#E95B4D',
                d: 'M17.865 3.363c0-.235-.192-.395-.432-.358l-2.868.459a.52.52 0 0 0-.432.49V9.1c0 .229.192.389.432.352l2.868-.459a.52.52 0 0 0 .432-.49V3.357z'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M10.294 4.36a.68.68 0 0 0-.683-.353l-3.161.534c-.267.042-.384.266-.272.506l6.995 14.593a.685.685 0 0 0 .688.352l3.156-.533c.267-.043.384-.267.273-.506zM9.867 14.9c0-.229-.191-.389-.431-.352l-2.864.459a.52.52 0 0 0-.437.49v5.146c0 .229.197.389.437.352l2.864-.459a.52.52 0 0 0 .431-.49zm7.998-11.537c0-.235-.192-.395-.432-.358l-2.869.459a.52.52 0 0 0-.431.49V9.1c0 .229.192.389.431.352l2.869-.459a.52.52 0 0 0 .432-.49V3.357z'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#ALPH__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#E95B4D',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M10.483 5.208a.6.6 0 0 0-.606-.313l-2.81.474c-.238.038-.342.237-.242.45l6.218 12.972a.61.61 0 0 0 .611.313l2.806-.474c.237-.038.341-.237.242-.45zm-.379 9.37c0-.204-.17-.346-.384-.313l-2.545.408a.464.464 0 0 0-.388.436v4.574c0 .203.175.345.388.312l2.545-.407a.465.465 0 0 0 .384-.436zm7.109-10.256c0-.208-.17-.35-.384-.317l-2.55.407a.464.464 0 0 0-.383.436v4.574c0 .204.17.346.384.313l2.55-.408a.464.464 0 0 0 .383-.436V4.318z'
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
                        id: 'ALPH__a'
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
 * @component @name TokenALPH
 * @description Web3Icon for TokenALPH
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiMwODA1MTUiIGQ9Ik0xMC4yOTQgNC4zNmEuNjguNjggMCAwIDAtLjY4My0uMzUzbC0zLjE2MS41MzRjLS4yNjcuMDQyLS4zODQuMjY2LS4yNzIuNTA2bDYuOTk1IDE0LjU5M2EuNjg1LjY4NSAwIDAgMCAuNjg4LjM1MmwzLjE1Ni0uNTMzYy4yNjctLjA0My4zODQtLjI2Ny4yNzItLjUwN3pNOS44NjcgMTQuOWMwLS4yMjktLjE5Mi0uMzg5LS40MzItLjM1MmwtMi44NjMuNDU5YS41Mi41MiAwIDAgMC0uNDM3LjQ5djUuMTQ2YzAgLjIyOS4xOTcuMzg5LjQzNy4zNTJsMi44NjMtLjQ1OWEuNTIuNTIgMCAwIDAgLjQzMi0uNDl6Ii8+CiAgICA8cGF0aCBmaWxsPSIjRTk1QjREIiBkPSJNMTcuODY1IDMuMzYzYzAtLjIzNS0uMTkyLS4zOTUtLjQzMi0uMzU4bC0yLjg2OC40NTlhLjUyLjUyIDAgMCAwLS40MzIuNDlWOS4xYzAgLjIyOS4xOTIuMzg5LjQzMi4zNTJsMi44NjgtLjQ1OWEuNTIuNTIgMCAwIDAgLjQzMi0uNDlWMy4zNTd6Ii8+Cjwvc3ZnPgo=) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xMC4yOTQgNC4zNmEuNjguNjggMCAwIDAtLjY4My0uMzUzbC0zLjE2MS41MzRjLS4yNjcuMDQyLS4zODQuMjY2LS4yNzIuNTA2bDYuOTk1IDE0LjU5M2EuNjg1LjY4NSAwIDAgMCAuNjg4LjM1MmwzLjE1Ni0uNTMzYy4yNjctLjA0My4zODQtLjI2Ny4yNzMtLjUwNnpNOS44NjcgMTQuOWMwLS4yMjktLjE5MS0uMzg5LS40MzEtLjM1MmwtMi44NjQuNDU5YS41Mi41MiAwIDAgMC0uNDM3LjQ5djUuMTQ2YzAgLjIyOS4xOTcuMzg5LjQzNy4zNTJsMi44NjQtLjQ1OWEuNTIuNTIgMCAwIDAgLjQzMS0uNDl6bTcuOTk4LTExLjUzN2MwLS4yMzUtLjE5Mi0uMzk1LS40MzItLjM1OGwtMi44NjkuNDU5YS41Mi41MiAwIDAgMC0uNDMxLjQ5VjkuMWMwIC4yMjkuMTkyLjM4OS40MzEuMzUybDIuODY5LS40NTlhLjUyLjUyIDAgMCAwIC40MzItLjQ5VjMuMzU3eiIvPgo8L3N2Zz4K) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNBTFBIX19hKSI+CiAgICAgICAgPHBhdGggZmlsbD0iI0U5NUI0RCIgZD0iTTI0IDBIMHYyNGgyNHoiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTAuNDgzIDUuMjA4YS42LjYgMCAwIDAtLjYwNi0uMzEzbC0yLjgxLjQ3NGMtLjIzOC4wMzgtLjM0Mi4yMzctLjI0Mi40NWw2LjIxOCAxMi45NzJhLjYxLjYxIDAgMCAwIC42MTEuMzEzbDIuODA2LS40NzRjLjIzNy0uMDM4LjM0MS0uMjM3LjI0Mi0uNDV6bS0uMzc5IDkuMzdjMC0uMjA0LS4xNy0uMzQ2LS4zODQtLjMxM2wtMi41NDUuNDA4YS40NjQuNDY0IDAgMCAwLS4zODguNDM2djQuNTc0YzAgLjIwMy4xNzUuMzQ1LjM4OC4zMTJsMi41NDUtLjQwN2EuNDY1LjQ2NSAwIDAgMCAuMzg0LS40MzZ6bTcuMTA5LTEwLjI1NmMwLS4yMDgtLjE3LS4zNS0uMzg0LS4zMTdsLTIuNTUuNDA3YS40NjQuNDY0IDAgMCAwLS4zODMuNDM2djQuNTc0YzAgLjIwNC4xNy4zNDYuMzg0LjMxM2wyLjU1LS40MDhhLjQ2NC40NjQgMCAwIDAgLjM4My0uNDM2VjQuMzE4eiIvPgogICAgPC9nPgogICAgPGRlZnM+CiAgICAgICAgPGNsaXBQYXRoIGlkPSJBTFBIX19hIj4KICAgICAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTAgMGgyNHYyNEgweiIvPgogICAgICAgIDwvY2xpcFBhdGg+CiAgICA8L2RlZnM+Cjwvc3ZnPgo=)
 * @see https://web3icons.io/tokens/ALPH
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenALPH = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenALPH', __iconNode);
;
}),
]);

//# sourceMappingURL=1qqr_%40web3icons_react_dist_1tehhum._.js.map