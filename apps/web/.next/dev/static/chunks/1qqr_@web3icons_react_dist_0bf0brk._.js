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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenDIKO.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenDIKO
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-client] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#212937',
                d: 'M8.709 5.703a.8.8 0 0 1 .731-.455h3.444a.8.8 0 0 1 .686.382l7.315 11.934a.76.76 0 0 1 .01.788.8.8 0 0 1-.697.393h-3.6a.77.77 0 0 1-.57-.225 9.45 9.45 0 0 0-4.849-2.419c-2.037-.32-4.445.118-6.808 2.42a.816.816 0 0 1-1.03.09.78.78 0 0 1-.27-.968L8.703 5.698zm2.166 1.233 6.19 10.127h1.715L12.422 6.936zm3.23 8.434-4.58-7.647-3.657 7.748a8.86 8.86 0 0 1 5.57-.917c.956.152 1.857.45 2.667.81z'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M8.709 5.703a.8.8 0 0 1 .731-.455h3.444a.8.8 0 0 1 .686.382l7.315 11.934a.76.76 0 0 1 .01.788.8.8 0 0 1-.697.394h-3.6a.77.77 0 0 1-.57-.226 9.45 9.45 0 0 0-4.849-2.419c-2.037-.32-4.445.118-6.808 2.42a.816.816 0 0 1-1.03.09.78.78 0 0 1-.27-.968L8.703 5.698zm2.166 1.233 6.19 10.127h1.715L12.422 6.936zm3.23 8.434-4.58-7.647-3.657 7.748a8.86 8.86 0 0 1 5.57-.917c.956.152 1.857.45 2.667.81z'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#DIKO__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#212937',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M9.075 6.403a.71.71 0 0 1 .65-.405h3.06c.25 0 .486.13.61.34l6.502 10.608c.136.22.136.485.01.7a.71.71 0 0 1-.62.35h-3.2a.68.68 0 0 1-.506-.2 8.4 8.4 0 0 0-4.31-2.15c-1.811-.286-3.952.104-6.052 2.15a.726.726 0 0 1-.916.08.69.69 0 0 1-.24-.86L9.07 6.398zM11 7.498l5.502 9.003h1.525l-5.652-9.003zm2.87 7.497L9.8 8.198l-3.251 6.887a7.87 7.87 0 0 1 4.951-.815c.85.135 1.65.4 2.37.72z'
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
                        id: 'DIKO__a'
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
 * @component @name TokenDIKO
 * @description Web3Icon for TokenDIKO
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiMyMTI5MzciIGQ9Ik04LjcwOSA1LjcwM2EuOC44IDAgMCAxIC43MzEtLjQ1NWgzLjQ0NGEuOC44IDAgMCAxIC42ODYuMzgybDcuMzE1IDExLjkzNGEuNzYuNzYgMCAwIDEgLjAxLjc4OC44LjggMCAwIDEtLjY5Ny4zOTNoLTMuNmEuNzcuNzcgMCAwIDEtLjU3LS4yMjUgOS40NSA5LjQ1IDAgMCAwLTQuODQ5LTIuNDE5Yy0yLjAzNy0uMzItNC40NDUuMTE4LTYuODA4IDIuNDJhLjgxNi44MTYgMCAwIDEtMS4wMy4wOS43OC43OCAwIDAgMS0uMjctLjk2OEw4LjcwMyA1LjY5OHptMi4xNjYgMS4yMzMgNi4xOSAxMC4xMjdoMS43MTVMMTIuNDIyIDYuOTM2em0zLjIzIDguNDM0LTQuNTgtNy42NDctMy42NTcgNy43NDhhOC44NiA4Ljg2IDAgMCAxIDUuNTctLjkxN2MuOTU2LjE1MiAxLjg1Ny40NSAyLjY2Ny44MXoiLz4KPC9zdmc+Cg==) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik04LjcwOSA1LjcwM2EuOC44IDAgMCAxIC43MzEtLjQ1NWgzLjQ0NGEuOC44IDAgMCAxIC42ODYuMzgybDcuMzE1IDExLjkzNGEuNzYuNzYgMCAwIDEgLjAxLjc4OC44LjggMCAwIDEtLjY5Ny4zOTRoLTMuNmEuNzcuNzcgMCAwIDEtLjU3LS4yMjYgOS40NSA5LjQ1IDAgMCAwLTQuODQ5LTIuNDE5Yy0yLjAzNy0uMzItNC40NDUuMTE4LTYuODA4IDIuNDJhLjgxNi44MTYgMCAwIDEtMS4wMy4wOS43OC43OCAwIDAgMS0uMjctLjk2OEw4LjcwMyA1LjY5OHptMi4xNjYgMS4yMzMgNi4xOSAxMC4xMjdoMS43MTVMMTIuNDIyIDYuOTM2em0zLjIzIDguNDM0LTQuNTgtNy42NDctMy42NTcgNy43NDhhOC44NiA4Ljg2IDAgMCAxIDUuNTctLjkxN2MuOTU2LjE1MiAxLjg1Ny40NSAyLjY2Ny44MXoiLz4KPC9zdmc+Cg==) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNESUtPX19hKSI+CiAgICAgICAgPHBhdGggZmlsbD0iIzIxMjkzNyIgZD0iTTI0IDBIMHYyNGgyNHoiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNOS4wNzUgNi40MDNhLjcxLjcxIDAgMCAxIC42NS0uNDA1aDMuMDZjLjI1IDAgLjQ4Ni4xMy42MS4zNGw2LjUwMiAxMC42MDhjLjEzNi4yMi4xMzYuNDg1LjAxLjdhLjcxLjcxIDAgMCAxLS42Mi4zNWgtMy4yYS42OC42OCAwIDAgMS0uNTA2LS4yIDguNCA4LjQgMCAwIDAtNC4zMS0yLjE1Yy0xLjgxMS0uMjg2LTMuOTUyLjEwNC02LjA1MiAyLjE1YS43MjYuNzI2IDAgMCAxLS45MTYuMDguNjkuNjkgMCAwIDEtLjI0LS44Nkw5LjA3IDYuMzk4ek0xMSA3LjQ5OGw1LjUwMiA5LjAwM2gxLjUyNWwtNS42NTItOS4wMDN6bTIuODcgNy40OTdMOS44IDguMTk4bC0zLjI1MSA2Ljg4N2E3Ljg3IDcuODcgMCAwIDEgNC45NTEtLjgxNWMuODUuMTM1IDEuNjUuNCAyLjM3LjcyeiIvPgogICAgPC9nPgogICAgPGRlZnM+CiAgICAgICAgPGNsaXBQYXRoIGlkPSJESUtPX19hIj4KICAgICAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTAgMGgyNHYyNEgweiIvPgogICAgICAgIDwvY2xpcFBhdGg+CiAgICA8L2RlZnM+Cjwvc3ZnPgo=)
 * @see https://web3icons.io/tokens/DIKO
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenDIKO = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenDIKO', __iconNode);
;
}),
]);

//# sourceMappingURL=1qqr_%40web3icons_react_dist_0bf0brk._.js.map