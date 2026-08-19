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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenEUL.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenEUL
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-client] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#37BEC1',
                d: 'M3.45 9.86a1.794 1.794 0 0 1 .822-2.369l8.9-4.32a1.72 1.72 0 0 1 2.317.844 1.794 1.794 0 0 1-.821 2.362l-8.9 4.327a1.723 1.723 0 0 1-2.317-.844'
            }
        ],
        [
            'path',
            {
                fill: '#FAB244',
                d: 'M4.019 15.98a1.93 1.93 0 0 1 .855-2.514l5.963-2.97c.9-.45 1.969-.05 2.396.894a1.93 1.93 0 0 1-.855 2.515l-5.963 2.97c-.9.45-1.969.05-2.396-.894'
            }
        ],
        [
            'path',
            {
                fill: '#E5615D',
                d: 'M8.513 19.985a1.794 1.794 0 0 1 .821-2.368l8.9-4.32a1.72 1.72 0 0 1 2.317.843 1.795 1.795 0 0 1-.82 2.363l-8.9 4.326a1.72 1.72 0 0 1-2.318-.844'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M3.45 9.86a1.795 1.795 0 0 1 .821-2.368l8.9-4.321a1.72 1.72 0 0 1 2.318.844 1.794 1.794 0 0 1-.822 2.363l-8.9 4.326A1.723 1.723 0 0 1 3.45 9.86m.569 6.12a1.93 1.93 0 0 1 .855-2.514l5.963-2.97c.9-.45 1.969-.05 2.396.894a1.93 1.93 0 0 1-.855 2.515l-5.963 2.97c-.9.45-1.969.05-2.396-.894m4.494 4.004a1.795 1.795 0 0 1 .822-2.368l8.9-4.32a1.72 1.72 0 0 1 2.317.843 1.795 1.795 0 0 1-.821 2.363l-8.9 4.326a1.72 1.72 0 0 1-1.92-.29 1.7 1.7 0 0 1-.398-.554'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#EUL__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#37BEC1',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M4.4 10.098a1.595 1.595 0 0 1 .73-2.106l7.91-3.84a1.53 1.53 0 0 1 2.061.75 1.595 1.595 0 0 1-.73 2.1L6.46 10.848a1.53 1.53 0 0 1-2.06-.75m.505 5.441a1.715 1.715 0 0 1 .76-2.236l5.301-2.64c.8-.4 1.75-.045 2.13.795a1.715 1.715 0 0 1-.76 2.235l-5.3 2.64c-.8.4-1.75.046-2.13-.794M8.9 19.098a1.595 1.595 0 0 1 .73-2.105l7.912-3.84a1.53 1.53 0 0 1 2.06.75 1.595 1.595 0 0 1-.73 2.1l-7.911 3.845a1.53 1.53 0 0 1-1.706-.257q-.226-.212-.354-.493'
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
                        id: 'EUL__a'
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
 * @component @name TokenEUL
 * @description Web3Icon for TokenEUL
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiMzN0JFQzEiIGQ9Ik0zLjQ1IDkuODZhMS43OTQgMS43OTQgMCAwIDEgLjgyMi0yLjM2OWw4LjktNC4zMmExLjcyIDEuNzIgMCAwIDEgMi4zMTcuODQ0IDEuNzk0IDEuNzk0IDAgMCAxLS44MjEgMi4zNjJsLTguOSA0LjMyN2ExLjcyMyAxLjcyMyAwIDAgMS0yLjMxNy0uODQ0Ii8+CiAgICA8cGF0aCBmaWxsPSIjRkFCMjQ0IiBkPSJNNC4wMTkgMTUuOThhMS45MyAxLjkzIDAgMCAxIC44NTUtMi41MTRsNS45NjMtMi45N2MuOS0uNDUgMS45NjktLjA1IDIuMzk2Ljg5NGExLjkzIDEuOTMgMCAwIDEtLjg1NSAyLjUxNWwtNS45NjMgMi45N2MtLjkuNDUtMS45NjkuMDUtMi4zOTYtLjg5NCIvPgogICAgPHBhdGggZmlsbD0iI0U1NjE1RCIgZD0iTTguNTEzIDE5Ljk4NWExLjc5NCAxLjc5NCAwIDAgMSAuODIxLTIuMzY4bDguOS00LjMyYTEuNzIgMS43MiAwIDAgMSAyLjMxNy44NDMgMS43OTUgMS43OTUgMCAwIDEtLjgyIDIuMzYzbC04LjkgNC4zMjZhMS43MiAxLjcyIDAgMCAxLTIuMzE4LS44NDQiLz4KPC9zdmc+Cg==) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0zLjQ1IDkuODZhMS43OTUgMS43OTUgMCAwIDEgLjgyMS0yLjM2OGw4LjktNC4zMjFhMS43MiAxLjcyIDAgMCAxIDIuMzE4Ljg0NCAxLjc5NCAxLjc5NCAwIDAgMS0uODIyIDIuMzYzbC04LjkgNC4zMjZBMS43MjMgMS43MjMgMCAwIDEgMy40NSA5Ljg2bS41NjkgNi4xMmExLjkzIDEuOTMgMCAwIDEgLjg1NS0yLjUxNGw1Ljk2My0yLjk3Yy45LS40NSAxLjk2OS0uMDUgMi4zOTYuODk0YTEuOTMgMS45MyAwIDAgMS0uODU1IDIuNTE1bC01Ljk2MyAyLjk3Yy0uOS40NS0xLjk2OS4wNS0yLjM5Ni0uODk0bTQuNDk0IDQuMDA0YTEuNzk1IDEuNzk1IDAgMCAxIC44MjItMi4zNjhsOC45LTQuMzJhMS43MiAxLjcyIDAgMCAxIDIuMzE3Ljg0MyAxLjc5NSAxLjc5NSAwIDAgMS0uODIxIDIuMzYzbC04LjkgNC4zMjZhMS43MiAxLjcyIDAgMCAxLTEuOTItLjI5IDEuNyAxLjcgMCAwIDEtLjM5OC0uNTU0Ii8+Cjwvc3ZnPgo=) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNFVUxfX2EpIj4KICAgICAgICA8cGF0aCBmaWxsPSIjMzdCRUMxIiBkPSJNMjQgMEgwdjI0aDI0eiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik00LjQgMTAuMDk4YTEuNTk1IDEuNTk1IDAgMCAxIC43My0yLjEwNmw3LjkxLTMuODRhMS41MyAxLjUzIDAgMCAxIDIuMDYxLjc1IDEuNTk1IDEuNTk1IDAgMCAxLS43MyAyLjFMNi40NiAxMC44NDhhMS41MyAxLjUzIDAgMCAxLTIuMDYtLjc1bS41MDUgNS40NDFhMS43MTUgMS43MTUgMCAwIDEgLjc2LTIuMjM2bDUuMzAxLTIuNjRjLjgtLjQgMS43NS0uMDQ1IDIuMTMuNzk1YTEuNzE1IDEuNzE1IDAgMCAxLS43NiAyLjIzNWwtNS4zIDIuNjRjLS44LjQtMS43NS4wNDYtMi4xMy0uNzk0TTguOSAxOS4wOThhMS41OTUgMS41OTUgMCAwIDEgLjczLTIuMTA1bDcuOTEyLTMuODRhMS41MyAxLjUzIDAgMCAxIDIuMDYuNzUgMS41OTUgMS41OTUgMCAwIDEtLjczIDIuMWwtNy45MTEgMy44NDVhMS41MyAxLjUzIDAgMCAxLTEuNzA2LS4yNTdxLS4yMjYtLjIxMi0uMzU0LS40OTMiLz4KICAgIDwvZz4KICAgIDxkZWZzPgogICAgICAgIDxjbGlwUGF0aCBpZD0iRVVMX19hIj4KICAgICAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTAgMGgyNHYyNEgweiIvPgogICAgICAgIDwvY2xpcFBhdGg+CiAgICA8L2RlZnM+Cjwvc3ZnPgo=)
 * @see https://web3icons.io/tokens/EUL
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenEUL = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenEUL', __iconNode);
;
}),
]);

//# sourceMappingURL=1qqr_%40web3icons_react_dist_12kxoem._.js.map