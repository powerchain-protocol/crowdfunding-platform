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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenDUSK.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenDUSK
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-client] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#523B97',
                d: 'M5.315 3.05a10.07 10.07 0 0 1 7.793 2.586 8.56 8.56 0 0 1 0 12.723 10.08 10.08 0 0 1-7.793 2.592.07.07 0 0 1-.062-.062c0-.034.029-.062.062-.067 2.193-.203 4.498-1.097 6.05-2.541 1.799-1.676 2.884-3.92 2.884-6.28 0-2.362-1.085-4.589-2.884-6.264-1.552-1.445-3.863-2.361-6.05-2.564a.056.056 0 0 1-.062-.056c0-.034.029-.067.062-.067'
            }
        ],
        [
            'path',
            {
                fill: '#523B97',
                d: 'M18.41 9.752H7.238c-.084 0-.281.208-.298.528-.011.32.18.596.298.596H18.41c.123 0 .337-.242.337-.596s-.191-.528-.337-.528m0 3.373H7.238c-.084 0-.281.208-.298.529-.011.32.18.596.298.596H18.41c.123 0 .337-.242.337-.596 0-.355-.191-.529-.337-.529'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M5.315 3.05a10.07 10.07 0 0 1 7.793 2.586 8.56 8.56 0 0 1 0 12.723 10.08 10.08 0 0 1-7.793 2.592.07.07 0 0 1-.062-.062c0-.034.029-.062.062-.067 2.193-.203 4.498-1.097 6.05-2.541 1.799-1.676 2.884-3.92 2.884-6.28 0-2.362-1.085-4.589-2.884-6.264-1.552-1.445-3.863-2.361-6.05-2.564a.056.056 0 0 1-.062-.056c0-.034.029-.067.062-.067'
            }
        ],
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M18.41 9.752H7.237c-.084 0-.281.208-.298.528-.011.32.18.596.298.596h11.171c.124 0 .338-.242.338-.596s-.191-.528-.338-.528m0 3.373H7.237c-.084 0-.281.208-.298.529-.011.32.18.596.298.596h11.171c.124 0 .338-.242.338-.596s-.191-.529-.338-.529'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#DUSK__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#523B97',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M6.058 4.044a8.96 8.96 0 0 1 6.927 2.299 7.61 7.61 0 0 1 0 11.31 8.95 8.95 0 0 1-6.927 2.303.06.06 0 0 1-.055-.055c0-.03.025-.055.055-.06 1.949-.18 3.998-.974 5.377-2.258C13.035 16.093 14 14.099 14 12s-.965-4.078-2.564-5.567c-1.379-1.284-3.433-2.1-5.377-2.279a.05.05 0 0 1-.055-.05c0-.03.025-.06.055-.06'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M17.697 10.002h-9.93c-.075 0-.25.185-.265.47-.01.284.16.53.265.53h9.93c.11 0 .3-.216.3-.53s-.17-.47-.3-.47m0 2.998h-9.93c-.075 0-.25.185-.265.47-.01.285.16.53.265.53h9.93c.11 0 .3-.215.3-.53s-.17-.47-.3-.47'
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
                        id: 'DUSK__a'
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
 * @component @name TokenDUSK
 * @description Web3Icon for TokenDUSK
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiM1MjNCOTciIGQ9Ik01LjMxNSAzLjA1YTEwLjA3IDEwLjA3IDAgMCAxIDcuNzkzIDIuNTg2IDguNTYgOC41NiAwIDAgMSAwIDEyLjcyMyAxMC4wOCAxMC4wOCAwIDAgMS03Ljc5MyAyLjU5Mi4wNy4wNyAwIDAgMS0uMDYyLS4wNjJjMC0uMDM0LjAyOS0uMDYyLjA2Mi0uMDY3IDIuMTkzLS4yMDMgNC40OTgtMS4wOTcgNi4wNS0yLjU0MSAxLjc5OS0xLjY3NiAyLjg4NC0zLjkyIDIuODg0LTYuMjggMC0yLjM2Mi0xLjA4NS00LjU4OS0yLjg4NC02LjI2NC0xLjU1Mi0xLjQ0NS0zLjg2My0yLjM2MS02LjA1LTIuNTY0YS4wNTYuMDU2IDAgMCAxLS4wNjItLjA1NmMwLS4wMzQuMDI5LS4wNjcuMDYyLS4wNjciLz4KICAgIDxwYXRoIGZpbGw9IiM1MjNCOTciIGQ9Ik0xOC40MSA5Ljc1Mkg3LjIzOGMtLjA4NCAwLS4yODEuMjA4LS4yOTguNTI4LS4wMTEuMzIuMTguNTk2LjI5OC41OTZIMTguNDFjLjEyMyAwIC4zMzctLjI0Mi4zMzctLjU5NnMtLjE5MS0uNTI4LS4zMzctLjUyOG0wIDMuMzczSDcuMjM4Yy0uMDg0IDAtLjI4MS4yMDgtLjI5OC41MjktLjAxMS4zMi4xOC41OTYuMjk4LjU5NkgxOC40MWMuMTIzIDAgLjMzNy0uMjQyLjMzNy0uNTk2IDAtLjM1NS0uMTkxLS41MjktLjMzNy0uNTI5Ii8+Cjwvc3ZnPgo=) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik01LjMxNSAzLjA1YTEwLjA3IDEwLjA3IDAgMCAxIDcuNzkzIDIuNTg2IDguNTYgOC41NiAwIDAgMSAwIDEyLjcyMyAxMC4wOCAxMC4wOCAwIDAgMS03Ljc5MyAyLjU5Mi4wNy4wNyAwIDAgMS0uMDYyLS4wNjJjMC0uMDM0LjAyOS0uMDYyLjA2Mi0uMDY3IDIuMTkzLS4yMDMgNC40OTgtMS4wOTcgNi4wNS0yLjU0MSAxLjc5OS0xLjY3NiAyLjg4NC0zLjkyIDIuODg0LTYuMjggMC0yLjM2Mi0xLjA4NS00LjU4OS0yLjg4NC02LjI2NC0xLjU1Mi0xLjQ0NS0zLjg2My0yLjM2MS02LjA1LTIuNTY0YS4wNTYuMDU2IDAgMCAxLS4wNjItLjA1NmMwLS4wMzQuMDI5LS4wNjcuMDYyLS4wNjciLz4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xOC40MSA5Ljc1Mkg3LjIzN2MtLjA4NCAwLS4yODEuMjA4LS4yOTguNTI4LS4wMTEuMzIuMTguNTk2LjI5OC41OTZoMTEuMTcxYy4xMjQgMCAuMzM4LS4yNDIuMzM4LS41OTZzLS4xOTEtLjUyOC0uMzM4LS41MjhtMCAzLjM3M0g3LjIzN2MtLjA4NCAwLS4yODEuMjA4LS4yOTguNTI5LS4wMTEuMzIuMTguNTk2LjI5OC41OTZoMTEuMTcxYy4xMjQgMCAuMzM4LS4yNDIuMzM4LS41OTZzLS4xOTEtLjUyOS0uMzM4LS41MjkiLz4KPC9zdmc+Cg==) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNEVVNLX19hKSI+CiAgICAgICAgPHBhdGggZmlsbD0iIzUyM0I5NyIgZD0iTTI0IDBIMHYyNGgyNHoiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNNi4wNTggNC4wNDRhOC45NiA4Ljk2IDAgMCAxIDYuOTI3IDIuMjk5IDcuNjEgNy42MSAwIDAgMSAwIDExLjMxIDguOTUgOC45NSAwIDAgMS02LjkyNyAyLjMwMy4wNi4wNiAwIDAgMS0uMDU1LS4wNTVjMC0uMDMuMDI1LS4wNTUuMDU1LS4wNiAxLjk0OS0uMTggMy45OTgtLjk3NCA1LjM3Ny0yLjI1OEMxMy4wMzUgMTYuMDkzIDE0IDE0LjA5OSAxNCAxMnMtLjk2NS00LjA3OC0yLjU2NC01LjU2N2MtMS4zNzktMS4yODQtMy40MzMtMi4xLTUuMzc3LTIuMjc5YS4wNS4wNSAwIDAgMS0uMDU1LS4wNWMwLS4wMy4wMjUtLjA2LjA1NS0uMDYiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTcuNjk3IDEwLjAwMmgtOS45M2MtLjA3NSAwLS4yNS4xODUtLjI2NS40Ny0uMDEuMjg0LjE2LjUzLjI2NS41M2g5LjkzYy4xMSAwIC4zLS4yMTYuMy0uNTNzLS4xNy0uNDctLjMtLjQ3bTAgMi45OThoLTkuOTNjLS4wNzUgMC0uMjUuMTg1LS4yNjUuNDctLjAxLjI4NS4xNi41My4yNjUuNTNoOS45M2MuMTEgMCAuMy0uMjE1LjMtLjUzcy0uMTctLjQ3LS4zLS40NyIvPgogICAgPC9nPgogICAgPGRlZnM+CiAgICAgICAgPGNsaXBQYXRoIGlkPSJEVVNLX19hIj4KICAgICAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTAgMGgyNHYyNEgweiIvPgogICAgICAgIDwvY2xpcFBhdGg+CiAgICA8L2RlZnM+Cjwvc3ZnPgo=)
 * @see https://web3icons.io/tokens/DUSK
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenDUSK = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenDUSK', __iconNode);
;
}),
]);

//# sourceMappingURL=1qqr_%40web3icons_react_dist_14ginrx._.js.map