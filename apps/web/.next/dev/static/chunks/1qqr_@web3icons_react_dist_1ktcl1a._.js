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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenGUSD.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenGUSD
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-client] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#24DDF9',
                d: 'M14.764 3c-3.166 0-5.8 2.49-6.139 5.625C5.489 8.964 3 11.597 3 14.763A6.24 6.24 0 0 0 9.236 21c3.166 0 5.812-2.49 6.139-5.625C18.51 15.036 21 12.403 21 9.237A6.24 6.24 0 0 0 14.764 3m5.11 6.75c-.31 2.039-2.457 4.189-4.5 4.5v-4.5zm-15.749 4.5c.307-2.05 2.451-4.187 4.5-4.5v4.5zm10.125 1.125c-.343 2.329-2.663 4.502-5.014 4.5-2.365.002-4.767-2.166-5.111-4.5zm0-5.625v4.5h-4.5v-4.5zm5.625-1.125H9.75c.345-2.338 2.65-4.502 5.014-4.5 2.363-.002 4.766 2.162 5.11 4.5'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M14.764 3c-3.166 0-5.8 2.49-6.139 5.625C5.489 8.964 3 11.597 3 14.763A6.24 6.24 0 0 0 9.236 21c3.166 0 5.812-2.49 6.139-5.625C18.51 15.036 21 12.403 21 9.237A6.24 6.24 0 0 0 14.764 3m5.11 6.75c-.31 2.039-2.457 4.189-4.5 4.5v-4.5zm-15.749 4.5c.307-2.05 2.451-4.187 4.5-4.5v4.5zm10.125 1.125c-.343 2.329-2.663 4.502-5.014 4.5-2.365.002-4.767-2.166-5.111-4.5zm0-5.625v4.5h-4.5v-4.5zm5.625-1.125H9.75c.345-2.338 2.65-4.502 5.014-4.5 2.363-.002 4.766 2.162 5.11 4.5'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#GUSD__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#24DDF9',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#000',
                        d: 'M14.457 4C11.642 4 9.3 6.214 9 9c-2.787.301-5 2.642-5 5.456A5.546 5.546 0 0 0 9.543 20c2.814 0 5.166-2.214 5.457-5 2.787-.301 5-2.642 5-5.456A5.547 5.547 0 0 0 14.457 4M19 10c-.276 1.812-2.185 3.723-4 4v-4zM5 14c.273-1.822 2.179-3.722 4-4v4zm9 1c-.305 2.07-2.367 4.002-4.457 4-2.103.002-4.237-1.925-4.543-4zm0-5v4h-4v-4zm5-1h-9c.306-2.079 2.356-4.002 4.457-4 2.1-.002 4.236 1.922 4.543 4'
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
                        id: 'GUSD__a'
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
 * @component @name TokenGUSD
 * @description Web3Icon for TokenGUSD
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiMyNERERjkiIGQ9Ik0xNC43NjQgM2MtMy4xNjYgMC01LjggMi40OS02LjEzOSA1LjYyNUM1LjQ4OSA4Ljk2NCAzIDExLjU5NyAzIDE0Ljc2M0E2LjI0IDYuMjQgMCAwIDAgOS4yMzYgMjFjMy4xNjYgMCA1LjgxMi0yLjQ5IDYuMTM5LTUuNjI1QzE4LjUxIDE1LjAzNiAyMSAxMi40MDMgMjEgOS4yMzdBNi4yNCA2LjI0IDAgMCAwIDE0Ljc2NCAzbTUuMTEgNi43NWMtLjMxIDIuMDM5LTIuNDU3IDQuMTg5LTQuNSA0LjV2LTQuNXptLTE1Ljc0OSA0LjVjLjMwNy0yLjA1IDIuNDUxLTQuMTg3IDQuNS00LjV2NC41em0xMC4xMjUgMS4xMjVjLS4zNDMgMi4zMjktMi42NjMgNC41MDItNS4wMTQgNC41LTIuMzY1LjAwMi00Ljc2Ny0yLjE2Ni01LjExMS00LjV6bTAtNS42MjV2NC41aC00LjV2LTQuNXptNS42MjUtMS4xMjVIOS43NWMuMzQ1LTIuMzM4IDIuNjUtNC41MDIgNS4wMTQtNC41IDIuMzYzLS4wMDIgNC43NjYgMi4xNjIgNS4xMSA0LjUiLz4KPC9zdmc+Cg==) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xNC43NjQgM2MtMy4xNjYgMC01LjggMi40OS02LjEzOSA1LjYyNUM1LjQ4OSA4Ljk2NCAzIDExLjU5NyAzIDE0Ljc2M0E2LjI0IDYuMjQgMCAwIDAgOS4yMzYgMjFjMy4xNjYgMCA1LjgxMi0yLjQ5IDYuMTM5LTUuNjI1QzE4LjUxIDE1LjAzNiAyMSAxMi40MDMgMjEgOS4yMzdBNi4yNCA2LjI0IDAgMCAwIDE0Ljc2NCAzbTUuMTEgNi43NWMtLjMxIDIuMDM5LTIuNDU3IDQuMTg5LTQuNSA0LjV2LTQuNXptLTE1Ljc0OSA0LjVjLjMwNy0yLjA1IDIuNDUxLTQuMTg3IDQuNS00LjV2NC41em0xMC4xMjUgMS4xMjVjLS4zNDMgMi4zMjktMi42NjMgNC41MDItNS4wMTQgNC41LTIuMzY1LjAwMi00Ljc2Ny0yLjE2Ni01LjExMS00LjV6bTAtNS42MjV2NC41aC00LjV2LTQuNXptNS42MjUtMS4xMjVIOS43NWMuMzQ1LTIuMzM4IDIuNjUtNC41MDIgNS4wMTQtNC41IDIuMzYzLS4wMDIgNC43NjYgMi4xNjIgNS4xMSA0LjUiLz4KPC9zdmc+Cg==) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNHVVNEX19hKSI+CiAgICAgICAgPHBhdGggZmlsbD0iIzI0RERGOSIgZD0iTTI0IDBIMHYyNGgyNHoiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjMDAwIiBkPSJNMTQuNDU3IDRDMTEuNjQyIDQgOS4zIDYuMjE0IDkgOWMtMi43ODcuMzAxLTUgMi42NDItNSA1LjQ1NkE1LjU0NiA1LjU0NiAwIDAgMCA5LjU0MyAyMGMyLjgxNCAwIDUuMTY2LTIuMjE0IDUuNDU3LTUgMi43ODctLjMwMSA1LTIuNjQyIDUtNS40NTZBNS41NDcgNS41NDcgMCAwIDAgMTQuNDU3IDRNMTkgMTBjLS4yNzYgMS44MTItMi4xODUgMy43MjMtNCA0di00ek01IDE0Yy4yNzMtMS44MjIgMi4xNzktMy43MjIgNC00djR6bTkgMWMtLjMwNSAyLjA3LTIuMzY3IDQuMDAyLTQuNDU3IDQtMi4xMDMuMDAyLTQuMjM3LTEuOTI1LTQuNTQzLTR6bTAtNXY0aC00di00em01LTFoLTljLjMwNi0yLjA3OSAyLjM1Ni00LjAwMiA0LjQ1Ny00IDIuMS0uMDAyIDQuMjM2IDEuOTIyIDQuNTQzIDQiLz4KICAgIDwvZz4KICAgIDxkZWZzPgogICAgICAgIDxjbGlwUGF0aCBpZD0iR1VTRF9fYSI+CiAgICAgICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0wIDBoMjR2MjRIMHoiLz4KICAgICAgICA8L2NsaXBQYXRoPgogICAgPC9kZWZzPgo8L3N2Zz4K)
 * @see https://web3icons.io/tokens/GUSD
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenGUSD = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenGUSD', __iconNode);
;
}),
]);

//# sourceMappingURL=1qqr_%40web3icons_react_dist_1ktcl1a._.js.map