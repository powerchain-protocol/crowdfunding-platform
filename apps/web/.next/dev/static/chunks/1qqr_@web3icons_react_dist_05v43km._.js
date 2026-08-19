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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenDEXE.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenDEXE
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-client] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#fff',
                d: 'm14.736 5.934-2.394 2.385a.48.48 0 0 1-.684 0l-2.39-2.385-3.424-.684 5.004 4.99c.63.64 1.76.545 2.398-.09l4.91-4.9zm-.486 10.521v-3.384c0-.256.329-.617.594-.617h3.312L21 10.65h-6.948c-.882 0-1.602.86-1.602 1.755v6.345l1.8-2.3zM9.174 12.45H5.849L3 10.65h6.822c.882 0 1.728.733 1.728 1.633v6.467l-1.8-2.304V13.07c0-.261-.315-.621-.576-.621'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'm14.736 5.934-2.394 2.385a.48.48 0 0 1-.684 0l-2.39-2.385-3.424-.684 5.004 4.99c.63.64 1.76.545 2.398-.09l4.91-4.9zm-.486 10.521v-3.384c0-.256.329-.617.594-.617h3.312L21 10.65h-6.948c-.882 0-1.602.86-1.602 1.755v6.345l1.8-2.3zM9.174 12.45H5.849L3 10.65h6.822c.882 0 1.728.733 1.728 1.633v6.467l-1.8-2.304V13.07c0-.261-.315-.621-.576-.621'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#DEXE__a)'
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
                        d: 'm14.432 6.608-2.128 2.12a.43.43 0 0 1-.608 0l-2.124-2.12L6.528 6l4.448 4.436c.56.568 1.564.484 2.132-.08L17.472 6zM14 15.96v-3.008c0-.228.292-.548.528-.548h2.944L20 10.8h-6.176c-.784 0-1.424.764-1.424 1.56V18l1.6-2.044zM9.488 12.4H6.532L4 10.8h6.064c.784 0 1.536.652 1.536 1.452V18L10 15.952v-3c0-.232-.28-.552-.512-.552'
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
                        id: 'DEXE__a'
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
 * @component @name TokenDEXE
 * @description Web3Icon for TokenDEXE
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Im0xNC43MzYgNS45MzQtMi4zOTQgMi4zODVhLjQ4LjQ4IDAgMCAxLS42ODQgMGwtMi4zOS0yLjM4NS0zLjQyNC0uNjg0IDUuMDA0IDQuOTljLjYzLjY0IDEuNzYuNTQ1IDIuMzk4LS4wOWw0LjkxLTQuOXptLS40ODYgMTAuNTIxdi0zLjM4NGMwLS4yNTYuMzI5LS42MTcuNTk0LS42MTdoMy4zMTJMMjEgMTAuNjVoLTYuOTQ4Yy0uODgyIDAtMS42MDIuODYtMS42MDIgMS43NTV2Ni4zNDVsMS44LTIuM3pNOS4xNzQgMTIuNDVINS44NDlMMyAxMC42NWg2LjgyMmMuODgyIDAgMS43MjguNzMzIDEuNzI4IDEuNjMzdjYuNDY3bC0xLjgtMi4zMDRWMTMuMDdjMC0uMjYxLS4zMTUtLjYyMS0uNTc2LS42MjEiLz4KPC9zdmc+Cg==) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Im0xNC43MzYgNS45MzQtMi4zOTQgMi4zODVhLjQ4LjQ4IDAgMCAxLS42ODQgMGwtMi4zOS0yLjM4NS0zLjQyNC0uNjg0IDUuMDA0IDQuOTljLjYzLjY0IDEuNzYuNTQ1IDIuMzk4LS4wOWw0LjkxLTQuOXptLS40ODYgMTAuNTIxdi0zLjM4NGMwLS4yNTYuMzI5LS42MTcuNTk0LS42MTdoMy4zMTJMMjEgMTAuNjVoLTYuOTQ4Yy0uODgyIDAtMS42MDIuODYtMS42MDIgMS43NTV2Ni4zNDVsMS44LTIuM3pNOS4xNzQgMTIuNDVINS44NDlMMyAxMC42NWg2LjgyMmMuODgyIDAgMS43MjguNzMzIDEuNzI4IDEuNjMzdjYuNDY3bC0xLjgtMi4zMDRWMTMuMDdjMC0uMjYxLS4zMTUtLjYyMS0uNTc2LS42MjEiLz4KPC9zdmc+Cg==) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNERVhFX19hKSI+CiAgICAgICAgPHBhdGggZmlsbD0iIzAwMCIgZD0iTTI0IDBIMHYyNGgyNHoiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJtMTQuNDMyIDYuNjA4LTIuMTI4IDIuMTJhLjQzLjQzIDAgMCAxLS42MDggMGwtMi4xMjQtMi4xMkw2LjUyOCA2bDQuNDQ4IDQuNDM2Yy41Ni41NjggMS41NjQuNDg0IDIuMTMyLS4wOEwxNy40NzIgNnpNMTQgMTUuOTZ2LTMuMDA4YzAtLjIyOC4yOTItLjU0OC41MjgtLjU0OGgyLjk0NEwyMCAxMC44aC02LjE3NmMtLjc4NCAwLTEuNDI0Ljc2NC0xLjQyNCAxLjU2VjE4bDEuNi0yLjA0NHpNOS40ODggMTIuNEg2LjUzMkw0IDEwLjhoNi4wNjRjLjc4NCAwIDEuNTM2LjY1MiAxLjUzNiAxLjQ1MlYxOEwxMCAxNS45NTJ2LTNjMC0uMjMyLS4yOC0uNTUyLS41MTItLjU1MiIvPgogICAgPC9nPgogICAgPGRlZnM+CiAgICAgICAgPGNsaXBQYXRoIGlkPSJERVhFX19hIj4KICAgICAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTAgMGgyNHYyNEgweiIvPgogICAgICAgIDwvY2xpcFBhdGg+CiAgICA8L2RlZnM+Cjwvc3ZnPgo=)
 * @see https://web3icons.io/tokens/DEXE
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenDEXE = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenDEXE', __iconNode);
;
}),
]);

//# sourceMappingURL=1qqr_%40web3icons_react_dist_05v43km._.js.map