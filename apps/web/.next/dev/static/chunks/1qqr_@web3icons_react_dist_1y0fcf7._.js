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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenGALA.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenGALA
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-client] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#000',
                d: 'm4.688 6.937 7.335 4.506 2.812-1.676-1.148-.58-1.563 1.007-5.288-3.257 5.085-2.716 6.334 3.498 1.125-.669L12.023 3zm.562 1.418-1.125-.714v8.634L11.438 21v-8.927l-2.813-1.76v1.355l1.688 1.091v6.064L5.25 15.577zm7.313 11.216v1.423l7.312-4.69V7.668l-7.312 4.404v3.42l1.124-.726v-1.98L18.75 9.75v5.861l-6.187 3.966z'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'm4.688 6.937 7.335 4.506 2.812-1.676-1.148-.58-1.563 1.007-5.288-3.257 5.085-2.716 6.334 3.498 1.125-.669L12.023 3zm.562 1.418-1.125-.714v8.634L11.438 21v-8.927l-2.813-1.76v1.355l1.688 1.091v6.064L5.25 15.577zm7.313 11.216v1.423l7.312-4.69V7.668l-7.312 4.404v3.42l1.124-.726v-1.98L18.75 9.75v5.861l-6.187 3.966z'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#GALA__a)'
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
                        d: 'm5.5 7.5 6.52 4.005 2.5-1.49L13.5 9.5l-1.39.895L7.41 7.5l4.52-2.415 5.63 3.11 1-.595L12.02 4zM6 8.76l-1-.635V15.8l6.5 4.2v-7.935L9 10.5v1.205l1.5.97v5.39L6 15.18zm6.5 9.97v1.265l6.5-4.17V8.15l-6.5 3.915v3.04l1-.645V12.7L18 10v5.21l-5.5 3.525z'
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
                        id: 'GALA__a'
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
 * @component @name TokenGALA
 * @description Web3Icon for TokenGALA
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiMwMDAiIGQ9Im00LjY4OCA2LjkzNyA3LjMzNSA0LjUwNiAyLjgxMi0xLjY3Ni0xLjE0OC0uNTgtMS41NjMgMS4wMDctNS4yODgtMy4yNTcgNS4wODUtMi43MTYgNi4zMzQgMy40OTggMS4xMjUtLjY2OUwxMi4wMjMgM3ptLjU2MiAxLjQxOC0xLjEyNS0uNzE0djguNjM0TDExLjQzOCAyMXYtOC45MjdsLTIuODEzLTEuNzZ2MS4zNTVsMS42ODggMS4wOTF2Ni4wNjRMNS4yNSAxNS41Nzd6bTcuMzEzIDExLjIxNnYxLjQyM2w3LjMxMi00LjY5VjcuNjY4bC03LjMxMiA0LjQwNHYzLjQybDEuMTI0LS43MjZ2LTEuOThMMTguNzUgOS43NXY1Ljg2MWwtNi4xODcgMy45NjZ6Ii8+Cjwvc3ZnPgo=) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Im00LjY4OCA2LjkzNyA3LjMzNSA0LjUwNiAyLjgxMi0xLjY3Ni0xLjE0OC0uNTgtMS41NjMgMS4wMDctNS4yODgtMy4yNTcgNS4wODUtMi43MTYgNi4zMzQgMy40OTggMS4xMjUtLjY2OUwxMi4wMjMgM3ptLjU2MiAxLjQxOC0xLjEyNS0uNzE0djguNjM0TDExLjQzOCAyMXYtOC45MjdsLTIuODEzLTEuNzZ2MS4zNTVsMS42ODggMS4wOTF2Ni4wNjRMNS4yNSAxNS41Nzd6bTcuMzEzIDExLjIxNnYxLjQyM2w3LjMxMi00LjY5VjcuNjY4bC03LjMxMiA0LjQwNHYzLjQybDEuMTI0LS43MjZ2LTEuOThMMTguNzUgOS43NXY1Ljg2MWwtNi4xODcgMy45NjZ6Ii8+Cjwvc3ZnPgo=) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNHQUxBX19hKSI+CiAgICAgICAgPHBhdGggZmlsbD0iIzAwMCIgZD0iTTI0IDBIMHYyNGgyNHoiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJtNS41IDcuNSA2LjUyIDQuMDA1IDIuNS0xLjQ5TDEzLjUgOS41bC0xLjM5Ljg5NUw3LjQxIDcuNWw0LjUyLTIuNDE1IDUuNjMgMy4xMSAxLS41OTVMMTIuMDIgNHpNNiA4Ljc2bC0xLS42MzVWMTUuOGw2LjUgNC4ydi03LjkzNUw5IDEwLjV2MS4yMDVsMS41Ljk3djUuMzlMNiAxNS4xOHptNi41IDkuOTd2MS4yNjVsNi41LTQuMTdWOC4xNWwtNi41IDMuOTE1djMuMDRsMS0uNjQ1VjEyLjdMMTggMTB2NS4yMWwtNS41IDMuNTI1eiIvPgogICAgPC9nPgogICAgPGRlZnM+CiAgICAgICAgPGNsaXBQYXRoIGlkPSJHQUxBX19hIj4KICAgICAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTAgMGgyNHYyNEgweiIvPgogICAgICAgIDwvY2xpcFBhdGg+CiAgICA8L2RlZnM+Cjwvc3ZnPgo=)
 * @see https://web3icons.io/tokens/GALA
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenGALA = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenGALA', __iconNode);
;
}),
]);

//# sourceMappingURL=1qqr_%40web3icons_react_dist_1y0fcf7._.js.map