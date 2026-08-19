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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenBTM.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenBTM
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-client] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#6C5A5A',
                d: 'm7.347 11.442-1.575 3.33.729 2.727 1.863.495 2.304 2.304-.693.702-5.5-1.476L3 14.024l5.912-5.912zl-1.575 3.33 4.896-4.905-1.756-1.755zm2.52 1.89 4.895 4.896 2.737-.729.495-1.863 2.304-2.304.702.693-1.476 5.5-5.5 1.475-5.912-5.913zm4.266-2.664L9.237 5.772l-2.736.729-.495 1.863-2.304 2.304L3 9.975l1.476-5.5L9.976 3l5.911 5.912zm1.503-4.662-2.304-2.304.693-.702 5.5 1.476L21 9.976l-5.913 5.912-1.755-1.755 4.896-4.905-.729-2.727z'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'm7.347 11.442-1.575 3.33.729 2.727 1.863.495 2.304 2.304-.693.702-5.5-1.476L3 14.024l5.913-5.912zl-1.575 3.33 4.896-4.905-1.755-1.755zm2.52 1.89 4.895 4.896 2.737-.729.495-1.863 2.304-2.304.702.693-1.476 5.5-5.5 1.475-5.912-5.913zm4.266-2.664L9.237 5.772l-2.736.729-.495 1.863-2.304 2.304L3 9.975l1.476-5.5L9.976 3l5.911 5.913zm1.503-4.662-2.304-2.304.693-.702 5.5 1.476L21 9.976l-5.913 5.912-1.755-1.755 4.896-4.905-.729-2.727z'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#BTM__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#6C5A5A',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'm7.864 11.504-1.4 2.96.648 2.424 1.656.44 2.048 2.048L10.2 20l-4.888-1.312L4 13.8l5.256-5.256zl-1.4 2.96 4.352-4.36-1.56-1.56zm2.24 1.68 4.352 4.352 2.432-.648.44-1.656 2.048-2.048.624.616-1.312 4.888L13.8 20l-5.256-5.256zm3.792-2.368L9.544 6.464l-2.432.648-.44 1.656-2.048 2.048L4 10.2l1.312-4.888L10.2 4l5.256 5.256zm1.336-4.144-2.048-2.048L13.8 4l4.888 1.312L20 10.2l-5.256 5.256-1.56-1.56 4.352-4.36-.648-2.424z'
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
                        id: 'BTM__a'
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
 * @component @name TokenBTM
 * @description Web3Icon for TokenBTM
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiM2QzVBNUEiIGQ9Im03LjM0NyAxMS40NDItMS41NzUgMy4zMy43MjkgMi43MjcgMS44NjMuNDk1IDIuMzA0IDIuMzA0LS42OTMuNzAyLTUuNS0xLjQ3NkwzIDE0LjAyNGw1LjkxMi01LjkxMnpsLTEuNTc1IDMuMzMgNC44OTYtNC45MDUtMS43NTYtMS43NTV6bTIuNTIgMS44OSA0Ljg5NSA0Ljg5NiAyLjczNy0uNzI5LjQ5NS0xLjg2MyAyLjMwNC0yLjMwNC43MDIuNjkzLTEuNDc2IDUuNS01LjUgMS40NzUtNS45MTItNS45MTN6bTQuMjY2LTIuNjY0TDkuMjM3IDUuNzcybC0yLjczNi43MjktLjQ5NSAxLjg2My0yLjMwNCAyLjMwNEwzIDkuOTc1bDEuNDc2LTUuNUw5Ljk3NiAzbDUuOTExIDUuOTEyem0xLjUwMy00LjY2Mi0yLjMwNC0yLjMwNC42OTMtLjcwMiA1LjUgMS40NzZMMjEgOS45NzZsLTUuOTEzIDUuOTEyLTEuNzU1LTEuNzU1IDQuODk2LTQuOTA1LS43MjktMi43Mjd6Ii8+Cjwvc3ZnPgo=) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Im03LjM0NyAxMS40NDItMS41NzUgMy4zMy43MjkgMi43MjcgMS44NjMuNDk1IDIuMzA0IDIuMzA0LS42OTMuNzAyLTUuNS0xLjQ3NkwzIDE0LjAyNGw1LjkxMy01LjkxMnpsLTEuNTc1IDMuMzMgNC44OTYtNC45MDUtMS43NTUtMS43NTV6bTIuNTIgMS44OSA0Ljg5NSA0Ljg5NiAyLjczNy0uNzI5LjQ5NS0xLjg2MyAyLjMwNC0yLjMwNC43MDIuNjkzLTEuNDc2IDUuNS01LjUgMS40NzUtNS45MTItNS45MTN6bTQuMjY2LTIuNjY0TDkuMjM3IDUuNzcybC0yLjczNi43MjktLjQ5NSAxLjg2My0yLjMwNCAyLjMwNEwzIDkuOTc1bDEuNDc2LTUuNUw5Ljk3NiAzbDUuOTExIDUuOTEzem0xLjUwMy00LjY2Mi0yLjMwNC0yLjMwNC42OTMtLjcwMiA1LjUgMS40NzZMMjEgOS45NzZsLTUuOTEzIDUuOTEyLTEuNzU1LTEuNzU1IDQuODk2LTQuOTA1LS43MjktMi43Mjd6Ii8+Cjwvc3ZnPgo=) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNCVE1fX2EpIj4KICAgICAgICA8cGF0aCBmaWxsPSIjNkM1QTVBIiBkPSJNMjQgMEgwdjI0aDI0eiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Im03Ljg2NCAxMS41MDQtMS40IDIuOTYuNjQ4IDIuNDI0IDEuNjU2LjQ0IDIuMDQ4IDIuMDQ4TDEwLjIgMjBsLTQuODg4LTEuMzEyTDQgMTMuOGw1LjI1Ni01LjI1NnpsLTEuNCAyLjk2IDQuMzUyLTQuMzYtMS41Ni0xLjU2em0yLjI0IDEuNjggNC4zNTIgNC4zNTIgMi40MzItLjY0OC40NC0xLjY1NiAyLjA0OC0yLjA0OC42MjQuNjE2LTEuMzEyIDQuODg4TDEzLjggMjBsLTUuMjU2LTUuMjU2em0zLjc5Mi0yLjM2OEw5LjU0NCA2LjQ2NGwtMi40MzIuNjQ4LS40NCAxLjY1Ni0yLjA0OCAyLjA0OEw0IDEwLjJsMS4zMTItNC44ODhMMTAuMiA0bDUuMjU2IDUuMjU2em0xLjMzNi00LjE0NC0yLjA0OC0yLjA0OEwxMy44IDRsNC44ODggMS4zMTJMMjAgMTAuMmwtNS4yNTYgNS4yNTYtMS41Ni0xLjU2IDQuMzUyLTQuMzYtLjY0OC0yLjQyNHoiLz4KICAgIDwvZz4KICAgIDxkZWZzPgogICAgICAgIDxjbGlwUGF0aCBpZD0iQlRNX19hIj4KICAgICAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTAgMGgyNHYyNEgweiIvPgogICAgICAgIDwvY2xpcFBhdGg+CiAgICA8L2RlZnM+Cjwvc3ZnPgo=)
 * @see https://web3icons.io/tokens/BTM
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenBTM = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenBTM', __iconNode);
;
}),
]);

//# sourceMappingURL=1qqr_%40web3icons_react_dist_1zxeb3a._.js.map