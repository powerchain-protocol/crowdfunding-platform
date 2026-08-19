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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenAXL.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenAXL
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-client] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#000',
                d: 'm13.046 10.577 5.496-5.49L16.46 3 12 7.455 7.55 3 5.47 5.081l5.49 5.496a1.466 1.466 0 0 0 2.086 0M21 16.449l-4.45-4.455 4.444-4.449-2.08-2.081-5.49 5.49a1.47 1.47 0 0 0-.321 1.604c.074.178.183.34.32.477l5.49 5.496zm-9 .096L16.444 21l2.087-2.081-5.49-5.496a1.473 1.473 0 0 0-2.087 0l-5.496 5.49L7.54 21zm-1.423-3.499a1.47 1.47 0 0 0 0-2.081l-5.49-5.496L3 7.551l4.455 4.455L3 16.455l2.081 2.081z'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'm13.046 10.577 5.496-5.49L16.46 3 12 7.455 7.55 3 5.47 5.081l5.49 5.496a1.467 1.467 0 0 0 2.086 0M21 16.449l-4.45-4.455 4.444-4.449-2.08-2.081-5.49 5.49a1.47 1.47 0 0 0-.321 1.604c.074.178.183.34.32.477l5.49 5.496zm-9 .096L16.444 21l2.087-2.081-5.49-5.496a1.47 1.47 0 0 0-1.609-.32 1.5 1.5 0 0 0-.478.32l-5.496 5.49L7.54 21zm-1.423-3.499a1.47 1.47 0 0 0 .32-1.604 1.5 1.5 0 0 0-.32-.477l-5.49-5.496L3 7.551l4.455 4.455L3 16.455l2.081 2.081z'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#AXL__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#000',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'm12.93 10.735 4.885-4.88L15.965 4 12 7.96 8.045 4l-1.85 1.85 4.88 4.885a1.304 1.304 0 0 0 1.855 0m7.07 5.22-3.955-3.96 3.95-3.955-1.85-1.85-4.88 4.88a1.31 1.31 0 0 0-.285 1.426c.066.158.163.303.285.424l4.88 4.885zm-8 .085L15.95 20l1.855-1.85-4.88-4.885a1.31 1.31 0 0 0-1.43-.285q-.24.1-.425.285l-4.885 4.88L8.035 20zm-1.265-3.11a1.31 1.31 0 0 0 0-1.85l-4.88-4.885L4 8.045l3.96 3.96L4 15.96l1.85 1.85z'
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
                        id: 'AXL__a'
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
 * @component @name TokenAXL
 * @description Web3Icon for TokenAXL
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiMwMDAiIGQ9Im0xMy4wNDYgMTAuNTc3IDUuNDk2LTUuNDlMMTYuNDYgMyAxMiA3LjQ1NSA3LjU1IDMgNS40NyA1LjA4MWw1LjQ5IDUuNDk2YTEuNDY2IDEuNDY2IDAgMCAwIDIuMDg2IDBNMjEgMTYuNDQ5bC00LjQ1LTQuNDU1IDQuNDQ0LTQuNDQ5LTIuMDgtMi4wODEtNS40OSA1LjQ5YTEuNDcgMS40NyAwIDAgMC0uMzIxIDEuNjA0Yy4wNzQuMTc4LjE4My4zNC4zMi40NzdsNS40OSA1LjQ5NnptLTkgLjA5NkwxNi40NDQgMjFsMi4wODctMi4wODEtNS40OS01LjQ5NmExLjQ3MyAxLjQ3MyAwIDAgMC0yLjA4NyAwbC01LjQ5NiA1LjQ5TDcuNTQgMjF6bS0xLjQyMy0zLjQ5OWExLjQ3IDEuNDcgMCAwIDAgMC0yLjA4MWwtNS40OS01LjQ5NkwzIDcuNTUxbDQuNDU1IDQuNDU1TDMgMTYuNDU1bDIuMDgxIDIuMDgxeiIvPgo8L3N2Zz4K) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Im0xMy4wNDYgMTAuNTc3IDUuNDk2LTUuNDlMMTYuNDYgMyAxMiA3LjQ1NSA3LjU1IDMgNS40NyA1LjA4MWw1LjQ5IDUuNDk2YTEuNDY3IDEuNDY3IDAgMCAwIDIuMDg2IDBNMjEgMTYuNDQ5bC00LjQ1LTQuNDU1IDQuNDQ0LTQuNDQ5LTIuMDgtMi4wODEtNS40OSA1LjQ5YTEuNDcgMS40NyAwIDAgMC0uMzIxIDEuNjA0Yy4wNzQuMTc4LjE4My4zNC4zMi40NzdsNS40OSA1LjQ5NnptLTkgLjA5NkwxNi40NDQgMjFsMi4wODctMi4wODEtNS40OS01LjQ5NmExLjQ3IDEuNDcgMCAwIDAtMS42MDktLjMyIDEuNSAxLjUgMCAwIDAtLjQ3OC4zMmwtNS40OTYgNS40OUw3LjU0IDIxem0tMS40MjMtMy40OTlhMS40NyAxLjQ3IDAgMCAwIC4zMi0xLjYwNCAxLjUgMS41IDAgMCAwLS4zMi0uNDc3bC01LjQ5LTUuNDk2TDMgNy41NTFsNC40NTUgNC40NTVMMyAxNi40NTVsMi4wODEgMi4wODF6Ii8+Cjwvc3ZnPgo=) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNBWExfX2EpIj4KICAgICAgICA8cGF0aCBmaWxsPSIjMDAwIiBkPSJNMjQgMEgwdjI0aDI0eiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Im0xMi45MyAxMC43MzUgNC44ODUtNC44OEwxNS45NjUgNCAxMiA3Ljk2IDguMDQ1IDRsLTEuODUgMS44NSA0Ljg4IDQuODg1YTEuMzA0IDEuMzA0IDAgMCAwIDEuODU1IDBtNy4wNyA1LjIyLTMuOTU1LTMuOTYgMy45NS0zLjk1NS0xLjg1LTEuODUtNC44OCA0Ljg4YTEuMzEgMS4zMSAwIDAgMC0uMjg1IDEuNDI2Yy4wNjYuMTU4LjE2My4zMDMuMjg1LjQyNGw0Ljg4IDQuODg1em0tOCAuMDg1TDE1Ljk1IDIwbDEuODU1LTEuODUtNC44OC00Ljg4NWExLjMxIDEuMzEgMCAwIDAtMS40My0uMjg1cS0uMjQuMS0uNDI1LjI4NWwtNC44ODUgNC44OEw4LjAzNSAyMHptLTEuMjY1LTMuMTFhMS4zMSAxLjMxIDAgMCAwIDAtMS44NWwtNC44OC00Ljg4NUw0IDguMDQ1bDMuOTYgMy45Nkw0IDE1Ljk2bDEuODUgMS44NXoiLz4KICAgIDwvZz4KICAgIDxkZWZzPgogICAgICAgIDxjbGlwUGF0aCBpZD0iQVhMX19hIj4KICAgICAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTAgMGgyNHYyNEgweiIvPgogICAgICAgIDwvY2xpcFBhdGg+CiAgICA8L2RlZnM+Cjwvc3ZnPgo=)
 * @see https://web3icons.io/tokens/AXL
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenAXL = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenAXL', __iconNode);
;
}),
]);

//# sourceMappingURL=1qqr_%40web3icons_react_dist_0scsjdy._.js.map