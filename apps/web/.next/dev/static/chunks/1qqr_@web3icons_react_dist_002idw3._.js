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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenGLC.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenGLC
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-client] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#FFCA3B',
                d: 'M5.726 15.873a8.231 8.231 0 0 0 15.272-1.981L21 11.996a.52.52 0 0 0-.509-.508h-5.667a.52.52 0 0 0-.508.508v1.56c0 .273.227.497.5.501h3.152c-.403.994-1.106 2.08-2.01 2.657a5.17 5.17 0 0 1-2.793.813v.007a5.6 5.6 0 0 1-4.638-2.448h.902a.773.773 0 0 0 0-1.543H7.793a5.54 5.54 0 0 1-.139-2.571H9.43a.772.772 0 0 0 0-1.543H8.18l.003-.006h-.01a5.583 5.583 0 0 1 7.4-2.473 5.56 5.56 0 0 1 1.942 1.566.462.462 0 0 0 .717.036l1.145-1.22a.49.49 0 0 0 .029-.65c-1.517-1.817-3.865-2.91-6.417-2.91a8.23 8.23 0 0 0-7.82 5.657H3.772a.772.772 0 0 0 0 1.543H4.83q-.042.396-.052.794a8.5 8.5 0 0 0 .119 1.67h-.012l.02.107H3.77a.772.772 0 0 0 0 1.543h1.59q.162.404.365.787'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M5.726 15.873a8.231 8.231 0 0 0 15.272-1.981L21 11.996a.52.52 0 0 0-.509-.508h-5.667a.52.52 0 0 0-.508.508v1.56c0 .273.227.497.5.501h3.152c-.403.994-1.106 2.08-2.01 2.658a5.17 5.17 0 0 1-2.793.812v.007a5.6 5.6 0 0 1-4.638-2.448h.902a.772.772 0 0 0 0-1.543H7.793a5.55 5.55 0 0 1-.139-2.571H9.43a.772.772 0 0 0 0-1.543H8.18l.003-.005h-.01a5.583 5.583 0 0 1 7.4-2.474 5.56 5.56 0 0 1 1.942 1.566.462.462 0 0 0 .717.036l1.145-1.22a.49.49 0 0 0 .029-.65c-1.517-1.817-3.865-2.91-6.417-2.91a8.23 8.23 0 0 0-7.82 5.657H3.772a.772.772 0 1 0 0 1.543H4.83q-.042.396-.052.794-.022.842.119 1.67h-.012l.02.107H3.77a.772.772 0 0 0 0 1.543h1.59q.162.404.365.787'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#GLC__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#FFCA3B',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M6.423 15.442a7.317 7.317 0 0 0 13.575-1.76L20 11.995a.46.46 0 0 0-.452-.451H14.51a.46.46 0 0 0-.452.451v1.387c0 .243.201.441.443.446h2.803c-.359.883-.983 1.848-1.787 2.361a4.6 4.6 0 0 1-2.482.723v.006a4.98 4.98 0 0 1-4.124-2.176h.802a.686.686 0 1 0 0-1.372H8.26a4.9 4.9 0 0 1-.123-2.285h1.577a.686.686 0 0 0 0-1.372h-1.11l.002-.004h-.008a4.96 4.96 0 0 1 6.576-2.2 4.94 4.94 0 0 1 1.727 1.393.41.41 0 0 0 .638.032l1.018-1.084a.44.44 0 0 0 .025-.579c-1.349-1.615-3.435-2.586-5.704-2.586a7.32 7.32 0 0 0-6.95 5.028H4.686a.686.686 0 1 0 0 1.372h.94a9 9 0 0 0-.046.706q-.021.747.105 1.485h-.01l.017.094H4.686a.686.686 0 0 0 0 1.372h1.412q.144.359.325.7'
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
                        id: 'GLC__a'
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
 * @component @name TokenGLC
 * @description Web3Icon for TokenGLC
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNGRkNBM0IiIGQ9Ik01LjcyNiAxNS44NzNhOC4yMzEgOC4yMzEgMCAwIDAgMTUuMjcyLTEuOTgxTDIxIDExLjk5NmEuNTIuNTIgMCAwIDAtLjUwOS0uNTA4aC01LjY2N2EuNTIuNTIgMCAwIDAtLjUwOC41MDh2MS41NmMwIC4yNzMuMjI3LjQ5Ny41LjUwMWgzLjE1MmMtLjQwMy45OTQtMS4xMDYgMi4wOC0yLjAxIDIuNjU3YTUuMTcgNS4xNyAwIDAgMS0yLjc5My44MTN2LjAwN2E1LjYgNS42IDAgMCAxLTQuNjM4LTIuNDQ4aC45MDJhLjc3My43NzMgMCAwIDAgMC0xLjU0M0g3Ljc5M2E1LjU0IDUuNTQgMCAwIDEtLjEzOS0yLjU3MUg5LjQzYS43NzIuNzcyIDAgMCAwIDAtMS41NDNIOC4xOGwuMDAzLS4wMDZoLS4wMWE1LjU4MyA1LjU4MyAwIDAgMSA3LjQtMi40NzMgNS41NiA1LjU2IDAgMCAxIDEuOTQyIDEuNTY2LjQ2Mi40NjIgMCAwIDAgLjcxNy4wMzZsMS4xNDUtMS4yMmEuNDkuNDkgMCAwIDAgLjAyOS0uNjVjLTEuNTE3LTEuODE3LTMuODY1LTIuOTEtNi40MTctMi45MWE4LjIzIDguMjMgMCAwIDAtNy44MiA1LjY1N0gzLjc3MmEuNzcyLjc3MiAwIDAgMCAwIDEuNTQzSDQuODNxLS4wNDIuMzk2LS4wNTIuNzk0YTguNSA4LjUgMCAwIDAgLjExOSAxLjY3aC0uMDEybC4wMi4xMDdIMy43N2EuNzcyLjc3MiAwIDAgMCAwIDEuNTQzaDEuNTlxLjE2Mi40MDQuMzY1Ljc4NyIvPgo8L3N2Zz4K) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik01LjcyNiAxNS44NzNhOC4yMzEgOC4yMzEgMCAwIDAgMTUuMjcyLTEuOTgxTDIxIDExLjk5NmEuNTIuNTIgMCAwIDAtLjUwOS0uNTA4aC01LjY2N2EuNTIuNTIgMCAwIDAtLjUwOC41MDh2MS41NmMwIC4yNzMuMjI3LjQ5Ny41LjUwMWgzLjE1MmMtLjQwMy45OTQtMS4xMDYgMi4wOC0yLjAxIDIuNjU4YTUuMTcgNS4xNyAwIDAgMS0yLjc5My44MTJ2LjAwN2E1LjYgNS42IDAgMCAxLTQuNjM4LTIuNDQ4aC45MDJhLjc3Mi43NzIgMCAwIDAgMC0xLjU0M0g3Ljc5M2E1LjU1IDUuNTUgMCAwIDEtLjEzOS0yLjU3MUg5LjQzYS43NzIuNzcyIDAgMCAwIDAtMS41NDNIOC4xOGwuMDAzLS4wMDVoLS4wMWE1LjU4MyA1LjU4MyAwIDAgMSA3LjQtMi40NzQgNS41NiA1LjU2IDAgMCAxIDEuOTQyIDEuNTY2LjQ2Mi40NjIgMCAwIDAgLjcxNy4wMzZsMS4xNDUtMS4yMmEuNDkuNDkgMCAwIDAgLjAyOS0uNjVjLTEuNTE3LTEuODE3LTMuODY1LTIuOTEtNi40MTctMi45MWE4LjIzIDguMjMgMCAwIDAtNy44MiA1LjY1N0gzLjc3MmEuNzcyLjc3MiAwIDEgMCAwIDEuNTQzSDQuODNxLS4wNDIuMzk2LS4wNTIuNzk0LS4wMjIuODQyLjExOSAxLjY3aC0uMDEybC4wMi4xMDdIMy43N2EuNzcyLjc3MiAwIDAgMCAwIDEuNTQzaDEuNTlxLjE2Mi40MDQuMzY1Ljc4NyIvPgo8L3N2Zz4K) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNHTENfX2EpIj4KICAgICAgICA8cGF0aCBmaWxsPSIjRkZDQTNCIiBkPSJNMjQgMEgwdjI0aDI0eiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik02LjQyMyAxNS40NDJhNy4zMTcgNy4zMTcgMCAwIDAgMTMuNTc1LTEuNzZMMjAgMTEuOTk1YS40Ni40NiAwIDAgMC0uNDUyLS40NTFIMTQuNTFhLjQ2LjQ2IDAgMCAwLS40NTIuNDUxdjEuMzg3YzAgLjI0My4yMDEuNDQxLjQ0My40NDZoMi44MDNjLS4zNTkuODgzLS45ODMgMS44NDgtMS43ODcgMi4zNjFhNC42IDQuNiAwIDAgMS0yLjQ4Mi43MjN2LjAwNmE0Ljk4IDQuOTggMCAwIDEtNC4xMjQtMi4xNzZoLjgwMmEuNjg2LjY4NiAwIDEgMCAwLTEuMzcySDguMjZhNC45IDQuOSAwIDAgMS0uMTIzLTIuMjg1aDEuNTc3YS42ODYuNjg2IDAgMCAwIDAtMS4zNzJoLTEuMTFsLjAwMi0uMDA0aC0uMDA4YTQuOTYgNC45NiAwIDAgMSA2LjU3Ni0yLjIgNC45NCA0Ljk0IDAgMCAxIDEuNzI3IDEuMzkzLjQxLjQxIDAgMCAwIC42MzguMDMybDEuMDE4LTEuMDg0YS40NC40NCAwIDAgMCAuMDI1LS41NzljLTEuMzQ5LTEuNjE1LTMuNDM1LTIuNTg2LTUuNzA0LTIuNTg2YTcuMzIgNy4zMiAwIDAgMC02Ljk1IDUuMDI4SDQuNjg2YS42ODYuNjg2IDAgMSAwIDAgMS4zNzJoLjk0YTkgOSAwIDAgMC0uMDQ2LjcwNnEtLjAyMS43NDcuMTA1IDEuNDg1aC0uMDFsLjAxNy4wOTRINC42ODZhLjY4Ni42ODYgMCAwIDAgMCAxLjM3MmgxLjQxMnEuMTQ0LjM1OS4zMjUuNyIvPgogICAgPC9nPgogICAgPGRlZnM+CiAgICAgICAgPGNsaXBQYXRoIGlkPSJHTENfX2EiPgogICAgICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMCAwaDI0djI0SDB6Ii8+CiAgICAgICAgPC9jbGlwUGF0aD4KICAgIDwvZGVmcz4KPC9zdmc+Cg==)
 * @see https://web3icons.io/tokens/GLC
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenGLC = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenGLC', __iconNode);
;
}),
]);

//# sourceMappingURL=1qqr_%40web3icons_react_dist_002idw3._.js.map