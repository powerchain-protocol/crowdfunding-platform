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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenIXO.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenIXO
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-client] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#00D2FF',
                d: 'M4.385 9.462a1.385 1.385 0 1 0 0-2.77 1.385 1.385 0 0 0 0 2.77m1.384.461H3v7.385h2.77zm.462 1.902V9.923h1.823l1.869 1.855 1.846-1.855h1.846v1.851l-1.837 1.85 1.837 1.828v1.856h-1.869l-1.818-1.81-1.796 1.81H6.231v-1.819l1.832-1.841zM21 13.615a3.692 3.692 0 1 1-7.384 0 3.692 3.692 0 0 1 7.384 0m-2.308 0a1.385 1.385 0 1 1-2.769 0 1.385 1.385 0 0 1 2.77 0',
                fillRule: 'evenodd',
                clipRule: 'evenodd'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M4.385 9.462a1.385 1.385 0 1 0 0-2.77 1.385 1.385 0 0 0 0 2.77m1.384.461H3v7.385h2.77zm.462 1.902V9.923h1.823l1.869 1.856 1.846-1.856h1.846v1.85l-1.837 1.852 1.837 1.827v1.856h-1.869l-1.818-1.81-1.796 1.81H6.231v-1.819l1.832-1.841zM21 13.615a3.692 3.692 0 1 1-7.384 0 3.692 3.692 0 0 1 7.384 0m-2.308 0a1.385 1.385 0 1 1-2.769 0 1.385 1.385 0 0 1 2.77 0',
                fillRule: 'evenodd',
                clipRule: 'evenodd'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#IXO__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#00D2FF',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#000',
                        d: 'M5.23 9.744a1.23 1.23 0 1 0 0-2.462 1.23 1.23 0 0 0 0 2.462m1.232.41H4v6.564h2.462zm.41 1.69v-1.69h1.62l1.662 1.65 1.64-1.65h1.642v1.645l-1.633 1.645 1.633 1.625v1.65h-1.662l-1.616-1.61-1.596 1.61h-1.69v-1.617L8.5 13.465zM20 13.436a3.282 3.282 0 1 1-6.564 0 3.282 3.282 0 0 1 6.564 0m-2.051 0a1.23 1.23 0 1 1-2.462 0 1.23 1.23 0 0 1 2.462 0',
                        fillRule: 'evenodd',
                        clipRule: 'evenodd'
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
                        id: 'IXO__a'
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
 * @component @name TokenIXO
 * @description Web3Icon for TokenIXO
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiMwMEQyRkYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTQuMzg1IDkuNDYyYTEuMzg1IDEuMzg1IDAgMSAwIDAtMi43NyAxLjM4NSAxLjM4NSAwIDAgMCAwIDIuNzdtMS4zODQuNDYxSDN2Ny4zODVoMi43N3ptLjQ2MiAxLjkwMlY5LjkyM2gxLjgyM2wxLjg2OSAxLjg1NSAxLjg0Ni0xLjg1NWgxLjg0NnYxLjg1MWwtMS44MzcgMS44NSAxLjgzNyAxLjgyOHYxLjg1NmgtMS44NjlsLTEuODE4LTEuODEtMS43OTYgMS44MUg2LjIzMXYtMS44MTlsMS44MzItMS44NDF6TTIxIDEzLjYxNWEzLjY5MiAzLjY5MiAwIDEgMS03LjM4NCAwIDMuNjkyIDMuNjkyIDAgMCAxIDcuMzg0IDBtLTIuMzA4IDBhMS4zODUgMS4zODUgMCAxIDEtMi43NjkgMCAxLjM4NSAxLjM4NSAwIDAgMSAyLjc3IDAiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4K) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTQuMzg1IDkuNDYyYTEuMzg1IDEuMzg1IDAgMSAwIDAtMi43NyAxLjM4NSAxLjM4NSAwIDAgMCAwIDIuNzdtMS4zODQuNDYxSDN2Ny4zODVoMi43N3ptLjQ2MiAxLjkwMlY5LjkyM2gxLjgyM2wxLjg2OSAxLjg1NiAxLjg0Ni0xLjg1NmgxLjg0NnYxLjg1bC0xLjgzNyAxLjg1MiAxLjgzNyAxLjgyN3YxLjg1NmgtMS44NjlsLTEuODE4LTEuODEtMS43OTYgMS44MUg2LjIzMXYtMS44MTlsMS44MzItMS44NDF6TTIxIDEzLjYxNWEzLjY5MiAzLjY5MiAwIDEgMS03LjM4NCAwIDMuNjkyIDMuNjkyIDAgMCAxIDcuMzg0IDBtLTIuMzA4IDBhMS4zODUgMS4zODUgMCAxIDEtMi43NjkgMCAxLjM4NSAxLjM4NSAwIDAgMSAyLjc3IDAiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4K) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNJWE9fX2EpIj4KICAgICAgICA8cGF0aCBmaWxsPSIjMDBEMkZGIiBkPSJNMjQgMEgwdjI0aDI0eiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiMwMDAiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTUuMjMgOS43NDRhMS4yMyAxLjIzIDAgMSAwIDAtMi40NjIgMS4yMyAxLjIzIDAgMCAwIDAgMi40NjJtMS4yMzIuNDFINHY2LjU2NGgyLjQ2MnptLjQxIDEuNjl2LTEuNjloMS42MmwxLjY2MiAxLjY1IDEuNjQtMS42NWgxLjY0MnYxLjY0NWwtMS42MzMgMS42NDUgMS42MzMgMS42MjV2MS42NWgtMS42NjJsLTEuNjE2LTEuNjEtMS41OTYgMS42MWgtMS42OXYtMS42MTdMOC41IDEzLjQ2NXpNMjAgMTMuNDM2YTMuMjgyIDMuMjgyIDAgMSAxLTYuNTY0IDAgMy4yODIgMy4yODIgMCAwIDEgNi41NjQgMG0tMi4wNTEgMGExLjIzIDEuMjMgMCAxIDEtMi40NjIgMCAxLjIzIDEuMjMgMCAwIDEgMi40NjIgMCIgY2xpcC1ydWxlPSJldmVub2RkIi8+CiAgICA8L2c+CiAgICA8ZGVmcz4KICAgICAgICA8Y2xpcFBhdGggaWQ9IklYT19fYSI+CiAgICAgICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0wIDBoMjR2MjRIMHoiLz4KICAgICAgICA8L2NsaXBQYXRoPgogICAgPC9kZWZzPgo8L3N2Zz4K)
 * @see https://web3icons.io/tokens/IXO
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenIXO = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenIXO', __iconNode);
;
}),
]);

//# sourceMappingURL=1qqr_%40web3icons_react_dist_0a34gwn._.js.map