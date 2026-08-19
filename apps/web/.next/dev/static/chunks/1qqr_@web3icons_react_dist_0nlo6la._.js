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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenRIF.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenRIF
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-client] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#149DD9',
                d: 'M12.5 4.5H14V10h-1.5zM15 7h1.5v4.5H15zm2.5 3H19v1.5h-1.5zm2 0H21v1.5h-1.5zm0 2.5V14H14v-1.5zM17 15v1.5h-4.5V15zm-3 2.5V19h-1.5v-1.5zm0 2V21h-1.5v-1.5zm-2.5 0H10V14h1.5zM9 17H7.5v-4.5H9zm-2.5-3H5v-1.5h1.5zm-2 0H3v-1.5h1.5zm0-2.5V10H10v1.5zM7 9V7.5h4.5V9zm3-2.5V5h1.5v1.5zm0-2V3h1.5v1.5z'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M12.5 4.5H14V10h-1.5zM15 7h1.5v4.5H15zm2.5 3H19v1.5h-1.5zm2 0H21v1.5h-1.5zm0 2.5V14H14v-1.5zM17 15v1.5h-4.5V15zm-3 2.5V19h-1.5v-1.5zm0 2V21h-1.5v-1.5zm-2.5 0H10V14h1.5zM9 17H7.5v-4.5H9zm-2.5-3H5v-1.5h1.5zm-2 0H3v-1.5h1.5zm0-2.5V10H10v1.5zM7 9V7.5h4.5V9zm3-2.5V5h1.5v1.5zm0-2V3h1.5v1.5z'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#RIF__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#149DD9',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M12.445 5.333h1.333v4.89h-1.334zm2.222 2.223H16v4h-1.333zm2.222 2.666h1.333v1.334H16.89zm1.778 0H20v1.334h-1.333zm0 2.223v1.333h-4.89v-1.334zm-2.223 2.222V16h-4v-1.333zm-2.666 2.222v1.333h-1.334V16.89zm0 1.778V20h-1.334v-1.333zm-2.222 0h-1.334v-4.89h1.334zm-2.223-2.223H8v-4h1.333zm-2.222-2.666H5.778v-1.334H7.11zm-1.778 0H4v-1.334h1.333zm0-2.222v-1.334h4.89v1.334zm2.223-2.223V8h4v1.333zm2.666-2.222V5.778h1.334V7.11zm0-1.778V4h1.334v1.333z'
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
                        id: 'RIF__a'
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
 * @component @name TokenRIF
 * @description Web3Icon for TokenRIF
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiMxNDlERDkiIGQ9Ik0xMi41IDQuNUgxNFYxMGgtMS41ek0xNSA3aDEuNXY0LjVIMTV6bTIuNSAzSDE5djEuNWgtMS41em0yIDBIMjF2MS41aC0xLjV6bTAgMi41VjE0SDE0di0xLjV6TTE3IDE1djEuNWgtNC41VjE1em0tMyAyLjVWMTloLTEuNXYtMS41em0wIDJWMjFoLTEuNXYtMS41em0tMi41IDBIMTBWMTRoMS41ek05IDE3SDcuNXYtNC41SDl6bS0yLjUtM0g1di0xLjVoMS41em0tMiAwSDN2LTEuNWgxLjV6bTAtMi41VjEwSDEwdjEuNXpNNyA5VjcuNWg0LjVWOXptMy0yLjVWNWgxLjV2MS41em0wLTJWM2gxLjV2MS41eiIvPgo8L3N2Zz4K) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xMi41IDQuNUgxNFYxMGgtMS41ek0xNSA3aDEuNXY0LjVIMTV6bTIuNSAzSDE5djEuNWgtMS41em0yIDBIMjF2MS41aC0xLjV6bTAgMi41VjE0SDE0di0xLjV6TTE3IDE1djEuNWgtNC41VjE1em0tMyAyLjVWMTloLTEuNXYtMS41em0wIDJWMjFoLTEuNXYtMS41em0tMi41IDBIMTBWMTRoMS41ek05IDE3SDcuNXYtNC41SDl6bS0yLjUtM0g1di0xLjVoMS41em0tMiAwSDN2LTEuNWgxLjV6bTAtMi41VjEwSDEwdjEuNXpNNyA5VjcuNWg0LjVWOXptMy0yLjVWNWgxLjV2MS41em0wLTJWM2gxLjV2MS41eiIvPgo8L3N2Zz4K) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNSSUZfX2EpIj4KICAgICAgICA8cGF0aCBmaWxsPSIjMTQ5REQ5IiBkPSJNMjQgMEgwdjI0aDI0eiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xMi40NDUgNS4zMzNoMS4zMzN2NC44OWgtMS4zMzR6bTIuMjIyIDIuMjIzSDE2djRoLTEuMzMzem0yLjIyMiAyLjY2NmgxLjMzM3YxLjMzNEgxNi44OXptMS43NzggMEgyMHYxLjMzNGgtMS4zMzN6bTAgMi4yMjN2MS4zMzNoLTQuODl2LTEuMzM0em0tMi4yMjMgMi4yMjJWMTZoLTR2LTEuMzMzem0tMi42NjYgMi4yMjJ2MS4zMzNoLTEuMzM0VjE2Ljg5em0wIDEuNzc4VjIwaC0xLjMzNHYtMS4zMzN6bS0yLjIyMiAwaC0xLjMzNHYtNC44OWgxLjMzNHptLTIuMjIzLTIuMjIzSDh2LTRoMS4zMzN6bS0yLjIyMi0yLjY2Nkg1Ljc3OHYtMS4zMzRINy4xMXptLTEuNzc4IDBINHYtMS4zMzRoMS4zMzN6bTAtMi4yMjJ2LTEuMzM0aDQuODl2MS4zMzR6bTIuMjIzLTIuMjIzVjhoNHYxLjMzM3ptMi42NjYtMi4yMjJWNS43NzhoMS4zMzRWNy4xMXptMC0xLjc3OFY0aDEuMzM0djEuMzMzeiIvPgogICAgPC9nPgogICAgPGRlZnM+CiAgICAgICAgPGNsaXBQYXRoIGlkPSJSSUZfX2EiPgogICAgICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMCAwaDI0djI0SDB6Ii8+CiAgICAgICAgPC9jbGlwUGF0aD4KICAgIDwvZGVmcz4KPC9zdmc+Cg==)
 * @see https://web3icons.io/tokens/RIF
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenRIF = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenRIF', __iconNode);
;
}),
]);

//# sourceMappingURL=1qqr_%40web3icons_react_dist_0nlo6la._.js.map