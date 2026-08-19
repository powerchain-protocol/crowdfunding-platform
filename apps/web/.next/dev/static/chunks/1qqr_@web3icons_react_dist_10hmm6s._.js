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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenCRU.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenCRU
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-client] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#fff',
                d: 'm18.495 18.187-4.845 2.7c-.27.15-.61.15-.88 0l-7.33-4.08a.85.85 0 0 1-.44-.735v-3.375l4-2.2v3.4c0 .3.15.585.425.735l3.345 1.93c.27.15.61.15.88 0l2.07-1.15c.525-.225.96-.165 1.24.01l.76.74.866.835c.45.435.26.93-.09 1.19'
            }
        ],
        [
            'path',
            {
                fill: '#F98A16',
                d: 'M12.77 3.113c.27-.15.61-.15.88 0l4.61 2.56c.02.02.05.035.09.06.87.495.7.855.435 1.1a38 38 0 0 0-1.5 1.575l-.35.375c-.22.235-.54.16-.825.02l-.3-.17-.24-.14v.005l-1.92-1.07a.92.92 0 0 0-.88 0c-2.62 1.455-5.15 2.95-7.77 4.42v-3.93c0-.3.17-.585.44-.735l7.33-4.075z'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'm18.495 18.187-4.845 2.7c-.27.15-.61.15-.88 0l-7.33-4.08a.85.85 0 0 1-.44-.735v-3.375l4-2.2v3.4c0 .3.15.585.425.735l3.345 1.93c.27.15.61.15.88 0l2.07-1.15c.525-.225.96-.165 1.24.01l.76.74.866.835c.45.435.26.93-.09 1.19'
            }
        ],
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M12.77 3.113c.27-.15.61-.15.88 0l4.61 2.56c.02.02.05.035.09.06.87.495.7.855.435 1.1a38 38 0 0 0-1.5 1.575l-.35.375c-.22.235-.54.16-.825.02l-.3-.17-.24-.14v.005l-1.92-1.07a.92.92 0 0 0-.88 0c-2.62 1.455-5.15 2.95-7.77 4.42v-3.93c0-.3.17-.585.44-.735l7.33-4.075z'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#CRU__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#F98A16',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'm17.774 17.5-4.307 2.4a.82.82 0 0 1-.782 0l-6.516-3.627a.76.76 0 0 1-.391-.653v-3l3.555-1.956v3.022c0 .267.134.52.378.654l2.974 1.715a.81.81 0 0 0 .782 0l1.84-1.022c.467-.2.853-.147 1.102.009l.676.658.769.742c.4.387.23.827-.08 1.058'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M12.685 4.1a.82.82 0 0 1 .782 0l4.098 2.276c.018.017.044.03.08.053.773.44.622.76.387.978q-.687.68-1.334 1.4l-.31.333c-.197.21-.48.142-.734.018l-.267-.151-.213-.125v.005l-1.707-.951a.82.82 0 0 0-.782 0c-2.33 1.293-4.578 2.622-6.907 3.929V8.37c0-.266.15-.52.39-.653l6.517-3.622z'
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
                        id: 'CRU__a'
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
 * @component @name TokenCRU
 * @description Web3Icon for TokenCRU
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Im0xOC40OTUgMTguMTg3LTQuODQ1IDIuN2MtLjI3LjE1LS42MS4xNS0uODggMGwtNy4zMy00LjA4YS44NS44NSAwIDAgMS0uNDQtLjczNXYtMy4zNzVsNC0yLjJ2My40YzAgLjMuMTUuNTg1LjQyNS43MzVsMy4zNDUgMS45M2MuMjcuMTUuNjEuMTUuODggMGwyLjA3LTEuMTVjLjUyNS0uMjI1Ljk2LS4xNjUgMS4yNC4wMWwuNzYuNzQuODY2LjgzNWMuNDUuNDM1LjI2LjkzLS4wOSAxLjE5Ii8+CiAgICA8cGF0aCBmaWxsPSIjRjk4QTE2IiBkPSJNMTIuNzcgMy4xMTNjLjI3LS4xNS42MS0uMTUuODggMGw0LjYxIDIuNTZjLjAyLjAyLjA1LjAzNS4wOS4wNi44Ny40OTUuNy44NTUuNDM1IDEuMWEzOCAzOCAwIDAgMC0xLjUgMS41NzVsLS4zNS4zNzVjLS4yMi4yMzUtLjU0LjE2LS44MjUuMDJsLS4zLS4xNy0uMjQtLjE0di4wMDVsLTEuOTItMS4wN2EuOTIuOTIgMCAwIDAtLjg4IDBjLTIuNjIgMS40NTUtNS4xNSAyLjk1LTcuNzcgNC40MnYtMy45M2MwLS4zLjE3LS41ODUuNDQtLjczNWw3LjMzLTQuMDc1eiIvPgo8L3N2Zz4K) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Im0xOC40OTUgMTguMTg3LTQuODQ1IDIuN2MtLjI3LjE1LS42MS4xNS0uODggMGwtNy4zMy00LjA4YS44NS44NSAwIDAgMS0uNDQtLjczNXYtMy4zNzVsNC0yLjJ2My40YzAgLjMuMTUuNTg1LjQyNS43MzVsMy4zNDUgMS45M2MuMjcuMTUuNjEuMTUuODggMGwyLjA3LTEuMTVjLjUyNS0uMjI1Ljk2LS4xNjUgMS4yNC4wMWwuNzYuNzQuODY2LjgzNWMuNDUuNDM1LjI2LjkzLS4wOSAxLjE5Ii8+CiAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTIuNzcgMy4xMTNjLjI3LS4xNS42MS0uMTUuODggMGw0LjYxIDIuNTZjLjAyLjAyLjA1LjAzNS4wOS4wNi44Ny40OTUuNy44NTUuNDM1IDEuMWEzOCAzOCAwIDAgMC0xLjUgMS41NzVsLS4zNS4zNzVjLS4yMi4yMzUtLjU0LjE2LS44MjUuMDJsLS4zLS4xNy0uMjQtLjE0di4wMDVsLTEuOTItMS4wN2EuOTIuOTIgMCAwIDAtLjg4IDBjLTIuNjIgMS40NTUtNS4xNSAyLjk1LTcuNzcgNC40MnYtMy45M2MwLS4zLjE3LS41ODUuNDQtLjczNWw3LjMzLTQuMDc1eiIvPgo8L3N2Zz4K) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNDUlVfX2EpIj4KICAgICAgICA8cGF0aCBmaWxsPSIjRjk4QTE2IiBkPSJNMjQgMEgwdjI0aDI0eiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Im0xNy43NzQgMTcuNS00LjMwNyAyLjRhLjgyLjgyIDAgMCAxLS43ODIgMGwtNi41MTYtMy42MjdhLjc2Ljc2IDAgMCAxLS4zOTEtLjY1M3YtM2wzLjU1NS0xLjk1NnYzLjAyMmMwIC4yNjcuMTM0LjUyLjM3OC42NTRsMi45NzQgMS43MTVhLjgxLjgxIDAgMCAwIC43ODIgMGwxLjg0LTEuMDIyYy40NjctLjIuODUzLS4xNDcgMS4xMDIuMDA5bC42NzYuNjU4Ljc2OS43NDJjLjQuMzg3LjIzLjgyNy0uMDggMS4wNTgiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTIuNjg1IDQuMWEuODIuODIgMCAwIDEgLjc4MiAwbDQuMDk4IDIuMjc2Yy4wMTguMDE3LjA0NC4wMy4wOC4wNTMuNzczLjQ0LjYyMi43Ni4zODcuOTc4cS0uNjg3LjY4LTEuMzM0IDEuNGwtLjMxLjMzM2MtLjE5Ny4yMS0uNDguMTQyLS43MzQuMDE4bC0uMjY3LS4xNTEtLjIxMy0uMTI1di4wMDVsLTEuNzA3LS45NTFhLjgyLjgyIDAgMCAwLS43ODIgMGMtMi4zMyAxLjI5My00LjU3OCAyLjYyMi02LjkwNyAzLjkyOVY4LjM3YzAtLjI2Ni4xNS0uNTIuMzktLjY1M2w2LjUxNy0zLjYyMnoiLz4KICAgIDwvZz4KICAgIDxkZWZzPgogICAgICAgIDxjbGlwUGF0aCBpZD0iQ1JVX19hIj4KICAgICAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTAgMGgyNHYyNEgweiIvPgogICAgICAgIDwvY2xpcFBhdGg+CiAgICA8L2RlZnM+Cjwvc3ZnPgo=)
 * @see https://web3icons.io/tokens/CRU
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenCRU = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenCRU', __iconNode);
;
}),
]);

//# sourceMappingURL=1qqr_%40web3icons_react_dist_10hmm6s._.js.map