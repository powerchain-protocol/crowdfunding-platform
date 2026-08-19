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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenXFT.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenXFT
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-client] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#410083',
                d: 'M17.616 12.003a5.613 5.613 0 0 1-9.904 3.621c-.23.13-.46.281-.696.466a4.26 4.26 0 0 0-1.123 1.657 5 5 0 0 0-.225.628A8.984 8.984 0 0 0 19.143 6.551a3.5 3.5 0 0 1-.848 1.64 3.43 3.43 0 0 1-1.533.836c.56.892.855 1.923.854 2.976M7.072 14.698a5.614 5.614 0 0 1 8.915-6.653l.079-.011a2.7 2.7 0 0 0 1.437-.64c.326-.32.534-.882.635-1.533l.05-.376A8.983 8.983 0 0 0 4.815 17.393l.028-.079a5.35 5.35 0 0 1 1.47-2.105c.248-.202.506-.37.753-.517z'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M17.616 12.003a5.613 5.613 0 0 1-9.904 3.621c-.23.13-.46.281-.696.466a4.26 4.26 0 0 0-1.123 1.657 5 5 0 0 0-.225.628A8.984 8.984 0 0 0 19.143 6.551a3.5 3.5 0 0 1-.848 1.64 3.43 3.43 0 0 1-1.533.836c.56.892.855 1.923.854 2.976M7.072 14.698a5.614 5.614 0 0 1 8.915-6.653l.079-.011a2.7 2.7 0 0 0 1.437-.64c.326-.32.534-.882.635-1.533l.05-.376A8.983 8.983 0 0 0 4.815 17.393l.028-.079a5.35 5.35 0 0 1 1.47-2.105c.248-.202.506-.37.753-.517z'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#XFT__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#410083',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M16.992 12.003a4.991 4.991 0 0 1-8.804 3.219q-.305.17-.618.414a3.8 3.8 0 0 0-.999 1.472c-.084.194-.15.384-.2.559A7.985 7.985 0 0 0 18.35 7.157a3.1 3.1 0 0 1-.753 1.457 3.05 3.05 0 0 1-1.363.744c.497.792.76 1.709.759 2.644M7.62 14.397a4.99 4.99 0 0 1 7.925-5.914l.07-.01a2.4 2.4 0 0 0 1.278-.569c.29-.284.474-.783.564-1.362l.045-.335A7.985 7.985 0 0 0 5.613 16.795l.025-.07a4.76 4.76 0 0 1 1.308-1.872c.22-.18.449-.33.668-.459z'
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
                        id: 'XFT__a'
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
 * @component @name TokenXFT
 * @description Web3Icon for TokenXFT
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiM0MTAwODMiIGQ9Ik0xNy42MTYgMTIuMDAzYTUuNjEzIDUuNjEzIDAgMCAxLTkuOTA0IDMuNjIxYy0uMjMuMTMtLjQ2LjI4MS0uNjk2LjQ2NmE0LjI2IDQuMjYgMCAwIDAtMS4xMjMgMS42NTcgNSA1IDAgMCAwLS4yMjUuNjI4QTguOTg0IDguOTg0IDAgMCAwIDE5LjE0MyA2LjU1MWEzLjUgMy41IDAgMCAxLS44NDggMS42NCAzLjQzIDMuNDMgMCAwIDEtMS41MzMuODM2Yy41Ni44OTIuODU1IDEuOTIzLjg1NCAyLjk3Nk03LjA3MiAxNC42OThhNS42MTQgNS42MTQgMCAwIDEgOC45MTUtNi42NTNsLjA3OS0uMDExYTIuNyAyLjcgMCAwIDAgMS40MzctLjY0Yy4zMjYtLjMyLjUzNC0uODgyLjYzNS0xLjUzM2wuMDUtLjM3NkE4Ljk4MyA4Ljk4MyAwIDAgMCA0LjgxNSAxNy4zOTNsLjAyOC0uMDc5YTUuMzUgNS4zNSAwIDAgMSAxLjQ3LTIuMTA1Yy4yNDgtLjIwMi41MDYtLjM3Ljc1My0uNTE3eiIvPgo8L3N2Zz4K) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xNy42MTYgMTIuMDAzYTUuNjEzIDUuNjEzIDAgMCAxLTkuOTA0IDMuNjIxYy0uMjMuMTMtLjQ2LjI4MS0uNjk2LjQ2NmE0LjI2IDQuMjYgMCAwIDAtMS4xMjMgMS42NTcgNSA1IDAgMCAwLS4yMjUuNjI4QTguOTg0IDguOTg0IDAgMCAwIDE5LjE0MyA2LjU1MWEzLjUgMy41IDAgMCAxLS44NDggMS42NCAzLjQzIDMuNDMgMCAwIDEtMS41MzMuODM2Yy41Ni44OTIuODU1IDEuOTIzLjg1NCAyLjk3Nk03LjA3MiAxNC42OThhNS42MTQgNS42MTQgMCAwIDEgOC45MTUtNi42NTNsLjA3OS0uMDExYTIuNyAyLjcgMCAwIDAgMS40MzctLjY0Yy4zMjYtLjMyLjUzNC0uODgyLjYzNS0xLjUzM2wuMDUtLjM3NkE4Ljk4MyA4Ljk4MyAwIDAgMCA0LjgxNSAxNy4zOTNsLjAyOC0uMDc5YTUuMzUgNS4zNSAwIDAgMSAxLjQ3LTIuMTA1Yy4yNDgtLjIwMi41MDYtLjM3Ljc1My0uNTE3eiIvPgo8L3N2Zz4K) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNYRlRfX2EpIj4KICAgICAgICA8cGF0aCBmaWxsPSIjNDEwMDgzIiBkPSJNMjQgMEgwdjI0aDI0eiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xNi45OTIgMTIuMDAzYTQuOTkxIDQuOTkxIDAgMCAxLTguODA0IDMuMjE5cS0uMzA1LjE3LS42MTguNDE0YTMuOCAzLjggMCAwIDAtLjk5OSAxLjQ3MmMtLjA4NC4xOTQtLjE1LjM4NC0uMi41NTlBNy45ODUgNy45ODUgMCAwIDAgMTguMzUgNy4xNTdhMy4xIDMuMSAwIDAgMS0uNzUzIDEuNDU3IDMuMDUgMy4wNSAwIDAgMS0xLjM2My43NDRjLjQ5Ny43OTIuNzYgMS43MDkuNzU5IDIuNjQ0TTcuNjIgMTQuMzk3YTQuOTkgNC45OSAwIDAgMSA3LjkyNS01LjkxNGwuMDctLjAxYTIuNCAyLjQgMCAwIDAgMS4yNzgtLjU2OWMuMjktLjI4NC40NzQtLjc4My41NjQtMS4zNjJsLjA0NS0uMzM1QTcuOTg1IDcuOTg1IDAgMCAwIDUuNjEzIDE2Ljc5NWwuMDI1LS4wN2E0Ljc2IDQuNzYgMCAwIDEgMS4zMDgtMS44NzJjLjIyLS4xOC40NDktLjMzLjY2OC0uNDU5eiIvPgogICAgPC9nPgogICAgPGRlZnM+CiAgICAgICAgPGNsaXBQYXRoIGlkPSJYRlRfX2EiPgogICAgICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMCAwaDI0djI0SDB6Ii8+CiAgICAgICAgPC9jbGlwUGF0aD4KICAgIDwvZGVmcz4KPC9zdmc+Cg==)
 * @see https://web3icons.io/tokens/XFT
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenXFT = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenXFT', __iconNode);
;
}),
]);

//# sourceMappingURL=1qqr_%40web3icons_react_dist_0dkjtsi._.js.map