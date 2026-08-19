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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/networks/NetworkEnuls.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>NetworkEnuls
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-client] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#00E789',
                d: 'm10.525 14.767 1.477 2.048V21L6.6 18.688V7.791c0-.394.156-.773.432-1.052a1.47 1.47 0 0 1 1.044-.436l5.204 7.22 2.647 1.626v-8.98L13.478 5.12v6.148l-1.476-2.05V3L17.4 5.315v10.106c0 .394-.155.773-.432 1.052a1.47 1.47 0 0 1-1.044.437l-3.755-2.397-4.09-5.677v8.996l2.446 1.046z'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'm10.525 14.767 1.477 2.048V21L6.6 18.688V7.791c0-.394.156-.773.432-1.052a1.47 1.47 0 0 1 1.044-.436l5.204 7.22 2.647 1.626v-8.98L13.478 5.12v6.148l-1.476-2.05V3L17.4 5.315v10.106c0 .394-.155.773-.432 1.052a1.47 1.47 0 0 1-1.044.437l-3.755-2.397-4.09-5.677v8.996l2.446 1.046z'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#enuls__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#00E789',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#000',
                        d: 'm10.689 14.46 1.313 1.82V20L7.2 17.945V8.26c0-.351.138-.687.384-.935.246-.249.58-.388.928-.388l4.625 6.418 2.354 1.445V6.816l-2.177-.931v5.464l-1.312-1.822V4L16.8 6.058v8.983c0 .35-.138.687-.384.935s-.58.388-.928.388l-3.338-2.13-3.636-5.047v7.997l2.175.93z'
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
                        id: 'enuls__a'
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
 * @component @name NetworkEnuls
 * @description Web3Icon for NetworkEnuls
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiMwMEU3ODkiIGQ9Im0xMC41MjUgMTQuNzY3IDEuNDc3IDIuMDQ4VjIxTDYuNiAxOC42ODhWNy43OTFjMC0uMzk0LjE1Ni0uNzczLjQzMi0xLjA1MmExLjQ3IDEuNDcgMCAwIDEgMS4wNDQtLjQzNmw1LjIwNCA3LjIyIDIuNjQ3IDEuNjI2di04Ljk4TDEzLjQ3OCA1LjEydjYuMTQ4bC0xLjQ3Ni0yLjA1VjNMMTcuNCA1LjMxNXYxMC4xMDZjMCAuMzk0LS4xNTUuNzczLS40MzIgMS4wNTJhMS40NyAxLjQ3IDAgMCAxLTEuMDQ0LjQzN2wtMy43NTUtMi4zOTctNC4wOS01LjY3N3Y4Ljk5NmwyLjQ0NiAxLjA0NnoiLz4KPC9zdmc+Cg==) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Im0xMC41MjUgMTQuNzY3IDEuNDc3IDIuMDQ4VjIxTDYuNiAxOC42ODhWNy43OTFjMC0uMzk0LjE1Ni0uNzczLjQzMi0xLjA1MmExLjQ3IDEuNDcgMCAwIDEgMS4wNDQtLjQzNmw1LjIwNCA3LjIyIDIuNjQ3IDEuNjI2di04Ljk4TDEzLjQ3OCA1LjEydjYuMTQ4bC0xLjQ3Ni0yLjA1VjNMMTcuNCA1LjMxNXYxMC4xMDZjMCAuMzk0LS4xNTUuNzczLS40MzIgMS4wNTJhMS40NyAxLjQ3IDAgMCAxLTEuMDQ0LjQzN2wtMy43NTUtMi4zOTctNC4wOS01LjY3N3Y4Ljk5NmwyLjQ0NiAxLjA0NnoiLz4KPC9zdmc+Cg==) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNlbnVsc19fYSkiPgogICAgICAgIDxwYXRoIGZpbGw9IiMwMEU3ODkiIGQ9Ik0yNCAwSDB2MjRoMjR6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0iIzAwMCIgZD0ibTEwLjY4OSAxNC40NiAxLjMxMyAxLjgyVjIwTDcuMiAxNy45NDVWOC4yNmMwLS4zNTEuMTM4LS42ODcuMzg0LS45MzUuMjQ2LS4yNDkuNTgtLjM4OC45MjgtLjM4OGw0LjYyNSA2LjQxOCAyLjM1NCAxLjQ0NVY2LjgxNmwtMi4xNzctLjkzMXY1LjQ2NGwtMS4zMTItMS44MjJWNEwxNi44IDYuMDU4djguOTgzYzAgLjM1LS4xMzguNjg3LS4zODQuOTM1cy0uNTguMzg4LS45MjguMzg4bC0zLjMzOC0yLjEzLTMuNjM2LTUuMDQ3djcuOTk3bDIuMTc1LjkzeiIvPgogICAgPC9nPgogICAgPGRlZnM+CiAgICAgICAgPGNsaXBQYXRoIGlkPSJlbnVsc19fYSI+CiAgICAgICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0wIDBoMjR2MjRIMHoiLz4KICAgICAgICA8L2NsaXBQYXRoPgogICAgPC9kZWZzPgo8L3N2Zz4K)
 * @see https://web3icons.io/networks/enuls
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const NetworkEnuls = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWeb3Icon"])('NetworkEnuls', __iconNode);
;
}),
]);

//# sourceMappingURL=1qqr_%40web3icons_react_dist_1mabqqe._.js.map