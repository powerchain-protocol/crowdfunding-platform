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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenCGT.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenCGT
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-client] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#F7B600',
                d: 'M12.67 20.218V15.4a3.36 3.36 0 0 1-3.19-4.162 3.316 3.316 0 0 1 3.066-2.553 3.36 3.36 0 0 1 3.558 3.24H21c0-1.625-.556-3.14-1.46-4.491A8.218 8.218 0 0 0 4.92 9.38H3v5.095h1.872a8.22 8.22 0 0 0 3.27 4.358 8.1 8.1 0 0 0 4.529 1.385'
            }
        ],
        [
            'path',
            {
                fill: '#F7B600',
                d: 'M19.288 19.662a3.054 3.054 0 1 1 1.044-4.296l-1.33.76a1.527 1.527 0 1 0-.103 1.908h-.629v-1.018h2.545v3.054h-1.527z'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M12.67 20.218V15.4a3.363 3.363 0 0 1-3.19-4.163 3.316 3.316 0 0 1 3.066-2.553 3.36 3.36 0 0 1 3.558 3.24H21c0-1.625-.556-3.14-1.46-4.491A8.218 8.218 0 0 0 4.92 9.38H3v5.095h1.872a8.22 8.22 0 0 0 3.27 4.358 8.1 8.1 0 0 0 4.529 1.385'
            }
        ],
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M19.287 19.662a3.054 3.054 0 1 1 1.044-4.296l-1.33.76a1.526 1.526 0 1 0-.103 1.908h-.629v-1.018h2.545v3.054h-1.527z'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#CGT__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#F7B600',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M12.596 19.305v-4.282a2.987 2.987 0 0 1-2.836-3.7 2.95 2.95 0 0 1 2.725-2.27 2.987 2.987 0 0 1 3.163 2.88H20c0-1.444-.494-2.791-1.297-3.992a7.305 7.305 0 0 0-12.997 1.73H4V14.2h1.664a7.3 7.3 0 0 0 2.907 3.873 7.2 7.2 0 0 0 4.025 1.232'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M18.477 18.81a2.714 2.714 0 1 1 .928-3.818l-1.182.675a1.356 1.356 0 0 0-2.458.72 1.358 1.358 0 0 0 2.367.977h-.56v-.905h2.263v2.715h-1.358z'
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
                        id: 'CGT__a'
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
 * @component @name TokenCGT
 * @description Web3Icon for TokenCGT
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNGN0I2MDAiIGQ9Ik0xMi42NyAyMC4yMThWMTUuNGEzLjM2IDMuMzYgMCAwIDEtMy4xOS00LjE2MiAzLjMxNiAzLjMxNiAwIDAgMSAzLjA2Ni0yLjU1MyAzLjM2IDMuMzYgMCAwIDEgMy41NTggMy4yNEgyMWMwLTEuNjI1LS41NTYtMy4xNC0xLjQ2LTQuNDkxQTguMjE4IDguMjE4IDAgMCAwIDQuOTIgOS4zOEgzdjUuMDk1aDEuODcyYTguMjIgOC4yMiAwIDAgMCAzLjI3IDQuMzU4IDguMSA4LjEgMCAwIDAgNC41MjkgMS4zODUiLz4KICAgIDxwYXRoIGZpbGw9IiNGN0I2MDAiIGQ9Ik0xOS4yODggMTkuNjYyYTMuMDU0IDMuMDU0IDAgMSAxIDEuMDQ0LTQuMjk2bC0xLjMzLjc2YTEuNTI3IDEuNTI3IDAgMSAwLS4xMDMgMS45MDhoLS42Mjl2LTEuMDE4aDIuNTQ1djMuMDU0aC0xLjUyN3oiLz4KPC9zdmc+Cg==) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xMi42NyAyMC4yMThWMTUuNGEzLjM2MyAzLjM2MyAwIDAgMS0zLjE5LTQuMTYzIDMuMzE2IDMuMzE2IDAgMCAxIDMuMDY2LTIuNTUzIDMuMzYgMy4zNiAwIDAgMSAzLjU1OCAzLjI0SDIxYzAtMS42MjUtLjU1Ni0zLjE0LTEuNDYtNC40OTFBOC4yMTggOC4yMTggMCAwIDAgNC45MiA5LjM4SDN2NS4wOTVoMS44NzJhOC4yMiA4LjIyIDAgMCAwIDMuMjcgNC4zNTggOC4xIDguMSAwIDAgMCA0LjUyOSAxLjM4NSIvPgogICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTE5LjI4NyAxOS42NjJhMy4wNTQgMy4wNTQgMCAxIDEgMS4wNDQtNC4yOTZsLTEuMzMuNzZhMS41MjYgMS41MjYgMCAxIDAtLjEwMyAxLjkwOGgtLjYyOXYtMS4wMThoMi41NDV2My4wNTRoLTEuNTI3eiIvPgo8L3N2Zz4K) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNDR1RfX2EpIj4KICAgICAgICA8cGF0aCBmaWxsPSIjRjdCNjAwIiBkPSJNMjQgMEgwdjI0aDI0eiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xMi41OTYgMTkuMzA1di00LjI4MmEyLjk4NyAyLjk4NyAwIDAgMS0yLjgzNi0zLjcgMi45NSAyLjk1IDAgMCAxIDIuNzI1LTIuMjcgMi45ODcgMi45ODcgMCAwIDEgMy4xNjMgMi44OEgyMGMwLTEuNDQ0LS40OTQtMi43OTEtMS4yOTctMy45OTJhNy4zMDUgNy4zMDUgMCAwIDAtMTIuOTk3IDEuNzNINFYxNC4yaDEuNjY0YTcuMyA3LjMgMCAwIDAgMi45MDcgMy44NzMgNy4yIDcuMiAwIDAgMCA0LjAyNSAxLjIzMiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xOC40NzcgMTguODFhMi43MTQgMi43MTQgMCAxIDEgLjkyOC0zLjgxOGwtMS4xODIuNjc1YTEuMzU2IDEuMzU2IDAgMCAwLTIuNDU4LjcyIDEuMzU4IDEuMzU4IDAgMCAwIDIuMzY3Ljk3N2gtLjU2di0uOTA1aDIuMjYzdjIuNzE1aC0xLjM1OHoiLz4KICAgIDwvZz4KICAgIDxkZWZzPgogICAgICAgIDxjbGlwUGF0aCBpZD0iQ0dUX19hIj4KICAgICAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTAgMGgyNHYyNEgweiIvPgogICAgICAgIDwvY2xpcFBhdGg+CiAgICA8L2RlZnM+Cjwvc3ZnPgo=)
 * @see https://web3icons.io/tokens/CGT
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenCGT = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenCGT', __iconNode);
;
}),
]);

//# sourceMappingURL=1qqr_%40web3icons_react_dist_20s6ijn._.js.map