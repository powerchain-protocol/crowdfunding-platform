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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenGALEON.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenGALEON
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-client] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#0091CC',
                d: 'M17.4 12c0 2.568-1.8 5.61-4.2 6.402V19.8h6.6l1.2-3h-1.2c-.3.6-1.08 1.8-1.8 1.8h-1.842a7.8 7.8 0 1 0-8.316 0H6c-.72 0-1.5-1.2-1.8-1.8H3l1.2 3h6.6v-1.398C8.4 17.61 6.6 14.568 6.6 12c0-2.982 2.418-6.6 5.4-6.6s5.4 3.618 5.4 6.6'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M17.4 12c0 2.568-1.8 5.61-4.2 6.402V19.8h6.6l1.2-3h-1.2c-.3.6-1.08 1.8-1.8 1.8h-1.842a7.801 7.801 0 1 0-8.316 0H6c-.72 0-1.5-1.2-1.8-1.8H3l1.2 3h6.6v-1.398C8.4 17.61 6.6 14.568 6.6 12c0-2.982 2.418-6.6 5.4-6.6s5.4 3.618 5.4 6.6'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#GALEON__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#0091CC',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M16.8 12c0 2.282-1.6 4.986-3.733 5.69v1.243h5.866L20 16.266h-1.067c-.266.534-.96 1.6-1.6 1.6h-1.637A6.935 6.935 0 0 0 12 5.066a6.933 6.933 0 0 0-3.696 12.8H6.667c-.64 0-1.334-1.066-1.6-1.6H4l1.067 2.667h5.866V17.69C8.8 16.986 7.2 14.282 7.2 12c0-2.651 2.15-5.867 4.8-5.867s4.8 3.216 4.8 5.866'
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
                        id: 'GALEON__a'
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
 * @component @name TokenGALEON
 * @description Web3Icon for TokenGALEON
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiMwMDkxQ0MiIGQ9Ik0xNy40IDEyYzAgMi41NjgtMS44IDUuNjEtNC4yIDYuNDAyVjE5LjhoNi42bDEuMi0zaC0xLjJjLS4zLjYtMS4wOCAxLjgtMS44IDEuOGgtMS44NDJhNy44IDcuOCAwIDEgMC04LjMxNiAwSDZjLS43MiAwLTEuNS0xLjItMS44LTEuOEgzbDEuMiAzaDYuNnYtMS4zOThDOC40IDE3LjYxIDYuNiAxNC41NjggNi42IDEyYzAtMi45ODIgMi40MTgtNi42IDUuNC02LjZzNS40IDMuNjE4IDUuNCA2LjYiLz4KPC9zdmc+Cg==) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xNy40IDEyYzAgMi41NjgtMS44IDUuNjEtNC4yIDYuNDAyVjE5LjhoNi42bDEuMi0zaC0xLjJjLS4zLjYtMS4wOCAxLjgtMS44IDEuOGgtMS44NDJhNy44MDEgNy44MDEgMCAxIDAtOC4zMTYgMEg2Yy0uNzIgMC0xLjUtMS4yLTEuOC0xLjhIM2wxLjIgM2g2LjZ2LTEuMzk4QzguNCAxNy42MSA2LjYgMTQuNTY4IDYuNiAxMmMwLTIuOTgyIDIuNDE4LTYuNiA1LjQtNi42czUuNCAzLjYxOCA1LjQgNi42Ii8+Cjwvc3ZnPgo=) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNHQUxFT05fX2EpIj4KICAgICAgICA8cGF0aCBmaWxsPSIjMDA5MUNDIiBkPSJNMjQgMEgwdjI0aDI0eiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xNi44IDEyYzAgMi4yODItMS42IDQuOTg2LTMuNzMzIDUuNjl2MS4yNDNoNS44NjZMMjAgMTYuMjY2aC0xLjA2N2MtLjI2Ni41MzQtLjk2IDEuNi0xLjYgMS42aC0xLjYzN0E2LjkzNSA2LjkzNSAwIDAgMCAxMiA1LjA2NmE2LjkzMyA2LjkzMyAwIDAgMC0zLjY5NiAxMi44SDYuNjY3Yy0uNjQgMC0xLjMzNC0xLjA2Ni0xLjYtMS42SDRsMS4wNjcgMi42NjdoNS44NjZWMTcuNjlDOC44IDE2Ljk4NiA3LjIgMTQuMjgyIDcuMiAxMmMwLTIuNjUxIDIuMTUtNS44NjcgNC44LTUuODY3czQuOCAzLjIxNiA0LjggNS44NjYiLz4KICAgIDwvZz4KICAgIDxkZWZzPgogICAgICAgIDxjbGlwUGF0aCBpZD0iR0FMRU9OX19hIj4KICAgICAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTAgMGgyNHYyNEgweiIvPgogICAgICAgIDwvY2xpcFBhdGg+CiAgICA8L2RlZnM+Cjwvc3ZnPgo=)
 * @see https://web3icons.io/tokens/GALEON
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenGALEON = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenGALEON', __iconNode);
;
}),
]);

//# sourceMappingURL=1qqr_%40web3icons_react_dist_0zrxweh._.js.map