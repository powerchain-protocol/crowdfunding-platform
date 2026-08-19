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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenNALS.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenNALS
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-client] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#FEFEFE',
                d: 'M6.075 5H9.5v2h-3v4.58l-.5.35v.55l.5.325V17h3v2H6.075L4.5 17v-4H3v-2h1.5V7zm11.85 0H14.5v2h3v4.58l.5.35v.55l-.5.325V17h-3v2h3.425l1.575-2v-4H21v-2h-1.5V7zM11.5 9.97c.24-.225.55-.47 1.16-.47 1.065 0 1.84.985 1.84 2.01v2.99H13v-3.105c-.04-.29-.175-.895-.67-.895-.355 0-.83.5-.83.79v3.21H10v-5h1.5z'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M6.075 5H9.5v2h-3v4.58l-.5.35v.55l.5.325V17h3v2H6.075L4.5 17v-4H3v-2h1.5V7zm11.85 0H14.5v2h3v4.58l.5.35v.55l-.5.325V17h-3v2h3.425l1.575-2v-4H21v-2h-1.5V7zM11.5 9.97c.24-.225.55-.47 1.16-.47 1.065 0 1.84.985 1.84 2.01v2.99H13v-3.105c-.04-.29-.175-.895-.67-.895-.355 0-.83.5-.83.79v3.21H10v-5h1.5z'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#NALS__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#FEFEFE',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M6.733 5.777h3.045v1.778H7.11v4.071l-.444.311v.49l.444.288v3.729h2.667v1.778H6.733l-1.4-1.778v-3.556H4v-1.777h1.333V7.555zm10.534 0h-3.045v1.778h2.667v4.071l.444.311v.49l-.444.288v3.729h-2.667v1.778h3.045l1.4-1.778v-3.556H20v-1.777h-1.333V7.555zm-5.711 4.418c.213-.2.489-.418 1.03-.418.947 0 1.636.876 1.636 1.787v2.658H12.89v-2.76c-.036-.258-.156-.796-.596-.796-.315 0-.737.445-.737.702v2.854h-1.334V9.777h1.334z'
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
                        id: 'NALS__a'
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
 * @component @name TokenNALS
 * @description Web3Icon for TokenNALS
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNGRUZFRkUiIGQ9Ik02LjA3NSA1SDkuNXYyaC0zdjQuNThsLS41LjM1di41NWwuNS4zMjVWMTdoM3YySDYuMDc1TDQuNSAxN3YtNEgzdi0yaDEuNVY3em0xMS44NSAwSDE0LjV2MmgzdjQuNThsLjUuMzV2LjU1bC0uNS4zMjVWMTdoLTN2MmgzLjQyNWwxLjU3NS0ydi00SDIxdi0yaC0xLjVWN3pNMTEuNSA5Ljk3Yy4yNC0uMjI1LjU1LS40NyAxLjE2LS40NyAxLjA2NSAwIDEuODQuOTg1IDEuODQgMi4wMXYyLjk5SDEzdi0zLjEwNWMtLjA0LS4yOS0uMTc1LS44OTUtLjY3LS44OTUtLjM1NSAwLS44My41LS44My43OXYzLjIxSDEwdi01aDEuNXoiLz4KPC9zdmc+Cg==) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik02LjA3NSA1SDkuNXYyaC0zdjQuNThsLS41LjM1di41NWwuNS4zMjVWMTdoM3YySDYuMDc1TDQuNSAxN3YtNEgzdi0yaDEuNVY3em0xMS44NSAwSDE0LjV2MmgzdjQuNThsLjUuMzV2LjU1bC0uNS4zMjVWMTdoLTN2MmgzLjQyNWwxLjU3NS0ydi00SDIxdi0yaC0xLjVWN3pNMTEuNSA5Ljk3Yy4yNC0uMjI1LjU1LS40NyAxLjE2LS40NyAxLjA2NSAwIDEuODQuOTg1IDEuODQgMi4wMXYyLjk5SDEzdi0zLjEwNWMtLjA0LS4yOS0uMTc1LS44OTUtLjY3LS44OTUtLjM1NSAwLS44My41LS44My43OXYzLjIxSDEwdi01aDEuNXoiLz4KPC9zdmc+Cg==) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNOQUxTX19hKSI+CiAgICAgICAgPHBhdGggZmlsbD0iI0ZFRkVGRSIgZD0iTTI0IDBIMHYyNGgyNHoiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNNi43MzMgNS43NzdoMy4wNDV2MS43NzhINy4xMXY0LjA3MWwtLjQ0NC4zMTF2LjQ5bC40NDQuMjg4djMuNzI5aDIuNjY3djEuNzc4SDYuNzMzbC0xLjQtMS43Nzh2LTMuNTU2SDR2LTEuNzc3aDEuMzMzVjcuNTU1em0xMC41MzQgMGgtMy4wNDV2MS43NzhoMi42Njd2NC4wNzFsLjQ0NC4zMTF2LjQ5bC0uNDQ0LjI4OHYzLjcyOWgtMi42Njd2MS43NzhoMy4wNDVsMS40LTEuNzc4di0zLjU1NkgyMHYtMS43NzdoLTEuMzMzVjcuNTU1em0tNS43MTEgNC40MThjLjIxMy0uMi40ODktLjQxOCAxLjAzLS40MTguOTQ3IDAgMS42MzYuODc2IDEuNjM2IDEuNzg3djIuNjU4SDEyLjg5di0yLjc2Yy0uMDM2LS4yNTgtLjE1Ni0uNzk2LS41OTYtLjc5Ni0uMzE1IDAtLjczNy40NDUtLjczNy43MDJ2Mi44NTRoLTEuMzM0VjkuNzc3aDEuMzM0eiIvPgogICAgPC9nPgogICAgPGRlZnM+CiAgICAgICAgPGNsaXBQYXRoIGlkPSJOQUxTX19hIj4KICAgICAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTAgMGgyNHYyNEgweiIvPgogICAgICAgIDwvY2xpcFBhdGg+CiAgICA8L2RlZnM+Cjwvc3ZnPgo=)
 * @see https://web3icons.io/tokens/NALS
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenNALS = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenNALS', __iconNode);
;
}),
]);

//# sourceMappingURL=1qqr_%40web3icons_react_dist_1ggz45j._.js.map