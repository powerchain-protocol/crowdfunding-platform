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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenNORD.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenNORD
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-client] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#00DD9A',
                d: 'M20.773 12.402a.72.72 0 0 0 0-1.049l-8.228-7.878a.8.8 0 0 0-1.095 0l-8.223 7.878a.72.72 0 0 0 0 1.05l1.183 1.13a.8.8 0 0 0 1.095 0l5.945-5.697a.8.8 0 0 1 1.1 0l5.955 5.687a.79.79 0 0 0 1.096 0z'
            }
        ],
        [
            'path',
            {
                fill: '#172683',
                d: 'M7.08 16.135a.756.756 0 0 1 0-1.07l4.386-4.386a.754.754 0 0 1 1.07 0l4.386 4.386a.76.76 0 0 1 0 1.07l-4.387 4.387a.76.76 0 0 1-1.07 0z'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M20.773 12.402a.72.72 0 0 0 0-1.049l-8.228-7.878a.8.8 0 0 0-1.095 0l-8.223 7.878a.72.72 0 0 0 0 1.05l1.183 1.13a.803.803 0 0 0 1.095 0l5.945-5.697a.8.8 0 0 1 1.1 0l5.955 5.687a.79.79 0 0 0 1.096 0z'
            }
        ],
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M7.08 16.135a.756.756 0 0 1 0-1.07l4.386-4.386a.754.754 0 0 1 1.07 0l4.386 4.386a.76.76 0 0 1 0 1.07l-4.387 4.387a.76.76 0 0 1-1.07 0z'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#NORD__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#00DD9A',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M19.798 12.357a.64.64 0 0 0 0-.932l-7.313-7.003a.713.713 0 0 0-.974 0L4.2 11.425a.64.64 0 0 0 0 .932l1.052 1.006a.713.713 0 0 0 .974 0l5.284-5.065a.713.713 0 0 1 .978 0l5.294 5.056c.27.26.703.26.973 0z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M7.626 15.675a.67.67 0 0 1 0-.95l3.899-3.9a.67.67 0 0 1 .95 0l3.9 3.9c.26.26.26.685 0 .95l-3.9 3.9a.676.676 0 0 1-.95 0z'
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
                        id: 'NORD__a'
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
 * @component @name TokenNORD
 * @description Web3Icon for TokenNORD
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiMwMEREOUEiIGQ9Ik0yMC43NzMgMTIuNDAyYS43Mi43MiAwIDAgMCAwLTEuMDQ5bC04LjIyOC03Ljg3OGEuOC44IDAgMCAwLTEuMDk1IDBsLTguMjIzIDcuODc4YS43Mi43MiAwIDAgMCAwIDEuMDVsMS4xODMgMS4xM2EuOC44IDAgMCAwIDEuMDk1IDBsNS45NDUtNS42OTdhLjguOCAwIDAgMSAxLjEgMGw1Ljk1NSA1LjY4N2EuNzkuNzkgMCAwIDAgMS4wOTYgMHoiLz4KICAgIDxwYXRoIGZpbGw9IiMxNzI2ODMiIGQ9Ik03LjA4IDE2LjEzNWEuNzU2Ljc1NiAwIDAgMSAwLTEuMDdsNC4zODYtNC4zODZhLjc1NC43NTQgMCAwIDEgMS4wNyAwbDQuMzg2IDQuMzg2YS43Ni43NiAwIDAgMSAwIDEuMDdsLTQuMzg3IDQuMzg3YS43Ni43NiAwIDAgMS0xLjA3IDB6Ii8+Cjwvc3ZnPgo=) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0yMC43NzMgMTIuNDAyYS43Mi43MiAwIDAgMCAwLTEuMDQ5bC04LjIyOC03Ljg3OGEuOC44IDAgMCAwLTEuMDk1IDBsLTguMjIzIDcuODc4YS43Mi43MiAwIDAgMCAwIDEuMDVsMS4xODMgMS4xM2EuODAzLjgwMyAwIDAgMCAxLjA5NSAwbDUuOTQ1LTUuNjk3YS44LjggMCAwIDEgMS4xIDBsNS45NTUgNS42ODdhLjc5Ljc5IDAgMCAwIDEuMDk2IDB6Ii8+CiAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNNy4wOCAxNi4xMzVhLjc1Ni43NTYgMCAwIDEgMC0xLjA3bDQuMzg2LTQuMzg2YS43NTQuNzU0IDAgMCAxIDEuMDcgMGw0LjM4NiA0LjM4NmEuNzYuNzYgMCAwIDEgMCAxLjA3bC00LjM4NyA0LjM4N2EuNzYuNzYgMCAwIDEtMS4wNyAweiIvPgo8L3N2Zz4K) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNOT1JEX19hKSI+CiAgICAgICAgPHBhdGggZmlsbD0iIzAwREQ5QSIgZD0iTTI0IDBIMHYyNGgyNHoiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTkuNzk4IDEyLjM1N2EuNjQuNjQgMCAwIDAgMC0uOTMybC03LjMxMy03LjAwM2EuNzEzLjcxMyAwIDAgMC0uOTc0IDBMNC4yIDExLjQyNWEuNjQuNjQgMCAwIDAgMCAuOTMybDEuMDUyIDEuMDA2YS43MTMuNzEzIDAgMCAwIC45NzQgMGw1LjI4NC01LjA2NWEuNzEzLjcxMyAwIDAgMSAuOTc4IDBsNS4yOTQgNS4wNTZjLjI3LjI2LjcwMy4yNi45NzMgMHoiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNNy42MjYgMTUuNjc1YS42Ny42NyAwIDAgMSAwLS45NWwzLjg5OS0zLjlhLjY3LjY3IDAgMCAxIC45NSAwbDMuOSAzLjljLjI2LjI2LjI2LjY4NSAwIC45NWwtMy45IDMuOWEuNjc2LjY3NiAwIDAgMS0uOTUgMHoiLz4KICAgIDwvZz4KICAgIDxkZWZzPgogICAgICAgIDxjbGlwUGF0aCBpZD0iTk9SRF9fYSI+CiAgICAgICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0wIDBoMjR2MjRIMHoiLz4KICAgICAgICA8L2NsaXBQYXRoPgogICAgPC9kZWZzPgo8L3N2Zz4K)
 * @see https://web3icons.io/tokens/NORD
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenNORD = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenNORD', __iconNode);
;
}),
]);

//# sourceMappingURL=1qqr_%40web3icons_react_dist_0qp4bse._.js.map