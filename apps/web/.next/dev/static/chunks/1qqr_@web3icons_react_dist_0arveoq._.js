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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenFOR.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenFOR
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-client] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#49C5AB',
                d: 'M7.114 19.611v-8.964C7.114 6.425 10.576 3 14.84 3h.633a1.41 1.41 0 0 1 1.414 1.404c0 .771-.633 1.167-1.414 1.167h-.854c-2.597 0-4.932 2.315-4.932 4.886v.771h5.858a1.317 1.317 0 0 1 1.342 1.286c0 .71-.602 1.286-1.342 1.286H9.686v5.811C9.686 20.383 9.17 21 8.4 21s-1.286-.617-1.286-1.389'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M7.114 19.611v-8.964C7.114 6.425 10.576 3 14.84 3h.633a1.41 1.41 0 0 1 1.414 1.404c0 .771-.633 1.167-1.414 1.167h-.854c-2.597 0-4.932 2.315-4.932 4.886v.771h5.858a1.317 1.317 0 0 1 1.342 1.286c0 .71-.602 1.286-1.342 1.286H9.686v5.811C9.686 20.383 9.17 21 8.4 21s-1.286-.617-1.286-1.389'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#FOR__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#49C5AB',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M7.657 18.766v-7.968C7.657 7.045 10.734 4 14.523 4h.563a1.253 1.253 0 0 1 1.257 1.248c0 .686-.562 1.038-1.257 1.038h-.76c-2.308 0-4.383 2.057-4.383 4.343v.685h5.207a1.17 1.17 0 0 1 1.193 1.143c0 .631-.535 1.143-1.193 1.143H9.943v5.166C9.943 19.45 9.486 20 8.8 20s-1.143-.549-1.143-1.234'
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
                        id: 'FOR__a'
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
 * @component @name TokenFOR
 * @description Web3Icon for TokenFOR
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiM0OUM1QUIiIGQ9Ik03LjExNCAxOS42MTF2LTguOTY0QzcuMTE0IDYuNDI1IDEwLjU3NiAzIDE0Ljg0IDNoLjYzM2ExLjQxIDEuNDEgMCAwIDEgMS40MTQgMS40MDRjMCAuNzcxLS42MzMgMS4xNjctMS40MTQgMS4xNjdoLS44NTRjLTIuNTk3IDAtNC45MzIgMi4zMTUtNC45MzIgNC44ODZ2Ljc3MWg1Ljg1OGExLjMxNyAxLjMxNyAwIDAgMSAxLjM0MiAxLjI4NmMwIC43MS0uNjAyIDEuMjg2LTEuMzQyIDEuMjg2SDkuNjg2djUuODExQzkuNjg2IDIwLjM4MyA5LjE3IDIxIDguNCAyMXMtMS4yODYtLjYxNy0xLjI4Ni0xLjM4OSIvPgo8L3N2Zz4K) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik03LjExNCAxOS42MTF2LTguOTY0QzcuMTE0IDYuNDI1IDEwLjU3NiAzIDE0Ljg0IDNoLjYzM2ExLjQxIDEuNDEgMCAwIDEgMS40MTQgMS40MDRjMCAuNzcxLS42MzMgMS4xNjctMS40MTQgMS4xNjdoLS44NTRjLTIuNTk3IDAtNC45MzIgMi4zMTUtNC45MzIgNC44ODZ2Ljc3MWg1Ljg1OGExLjMxNyAxLjMxNyAwIDAgMSAxLjM0MiAxLjI4NmMwIC43MS0uNjAyIDEuMjg2LTEuMzQyIDEuMjg2SDkuNjg2djUuODExQzkuNjg2IDIwLjM4MyA5LjE3IDIxIDguNCAyMXMtMS4yODYtLjYxNy0xLjI4Ni0xLjM4OSIvPgo8L3N2Zz4K) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNGT1JfX2EpIj4KICAgICAgICA8cGF0aCBmaWxsPSIjNDlDNUFCIiBkPSJNMjQgMEgwdjI0aDI0eiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik03LjY1NyAxOC43NjZ2LTcuOTY4QzcuNjU3IDcuMDQ1IDEwLjczNCA0IDE0LjUyMyA0aC41NjNhMS4yNTMgMS4yNTMgMCAwIDEgMS4yNTcgMS4yNDhjMCAuNjg2LS41NjIgMS4wMzgtMS4yNTcgMS4wMzhoLS43NmMtMi4zMDggMC00LjM4MyAyLjA1Ny00LjM4MyA0LjM0M3YuNjg1aDUuMjA3YTEuMTcgMS4xNyAwIDAgMSAxLjE5MyAxLjE0M2MwIC42MzEtLjUzNSAxLjE0My0xLjE5MyAxLjE0M0g5Ljk0M3Y1LjE2NkM5Ljk0MyAxOS40NSA5LjQ4NiAyMCA4LjggMjBzLTEuMTQzLS41NDktMS4xNDMtMS4yMzQiLz4KICAgIDwvZz4KICAgIDxkZWZzPgogICAgICAgIDxjbGlwUGF0aCBpZD0iRk9SX19hIj4KICAgICAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTAgMGgyNHYyNEgweiIvPgogICAgICAgIDwvY2xpcFBhdGg+CiAgICA8L2RlZnM+Cjwvc3ZnPgo=)
 * @see https://web3icons.io/tokens/FOR
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenFOR = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenFOR', __iconNode);
;
}),
]);

//# sourceMappingURL=1qqr_%40web3icons_react_dist_0arveoq._.js.map