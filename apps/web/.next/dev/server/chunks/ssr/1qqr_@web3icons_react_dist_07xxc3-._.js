module.exports = [
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createWeb3Icon",
    ()=>createWeb3Icon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$types$2b$node$40$24$2e$13$2e$3_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.1_@types+node@24.13.3_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$BaseIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/BaseIcon.js [app-ssr] (ecmascript)");
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
    const Component = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$types$2b$node$40$24$2e$13$2e$3_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ variant = defaultVariant, fallback, ...props }, ref)=>{
        const iconData = variants[variant];
        if (!iconData) {
            console.warn(`Icon "${name}" does not have variant "${variant}". ` + `Available variants: ${availableVariants.join(', ')}`);
            return null;
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$types$2b$node$40$24$2e$13$2e$3_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$BaseIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseIcon"], {
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
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$types$2b$node$40$24$2e$13$2e$3_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])(element, elementProps, childElements);
    });
}
;
}),
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenAIRI.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenAIRI
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-ssr] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#000',
                d: 'M5.197 13.059a6.89 6.89 0 0 0 5.744 5.755V21A9.064 9.064 0 0 1 3 13.059zm5.744-7.873a6.89 6.89 0 0 0-5.744 5.755H3A9.064 9.064 0 0 1 10.941 3zm7.862 5.755a6.89 6.89 0 0 0-5.744-5.755V3A9.064 9.064 0 0 1 21 10.941zm-5.744 7.873a6.89 6.89 0 0 0 5.744-5.755H21A9.06 9.06 0 0 1 13.059 21zM10.4 15.177H7.188L8.797 12h3.012l-1.402-2.451L12 6.706l4.818 8.47h-3.193l-1.715-2.99z'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M5.197 13.059a6.89 6.89 0 0 0 5.744 5.755V21A9.064 9.064 0 0 1 3 13.059zm5.744-7.873a6.89 6.89 0 0 0-5.744 5.755H3A9.064 9.064 0 0 1 10.941 3zm7.862 5.755a6.89 6.89 0 0 0-5.744-5.755V3A9.06 9.06 0 0 1 21 10.941zm-5.744 7.873a6.89 6.89 0 0 0 5.744-5.755H21A9.06 9.06 0 0 1 13.059 21zM10.4 15.177H7.188L8.797 12h3.012l-1.402-2.451L12 6.706l4.818 8.47h-3.193l-1.715-2.99z'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#AIRI__a)'
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
                        d: 'M5.953 12.941a6.13 6.13 0 0 0 5.106 5.115V20A8.056 8.056 0 0 1 4 12.941zm5.106-6.997a6.13 6.13 0 0 0-5.106 5.115H4A8.056 8.056 0 0 1 11.059 4zm6.988 5.115a6.12 6.12 0 0 0-5.106-5.115V4A8.056 8.056 0 0 1 20 11.059zm-5.106 6.998a6.13 6.13 0 0 0 5.106-5.116H20A8.056 8.056 0 0 1 12.941 20zm-2.362-3.233H7.722L9.152 12h2.679l-1.247-2.179L12 7.294l4.282 7.53h-2.837l-1.525-2.66z'
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
                        id: 'AIRI__a'
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
 * @component @name TokenAIRI
 * @description Web3Icon for TokenAIRI
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiMwMDAiIGQ9Ik01LjE5NyAxMy4wNTlhNi44OSA2Ljg5IDAgMCAwIDUuNzQ0IDUuNzU1VjIxQTkuMDY0IDkuMDY0IDAgMCAxIDMgMTMuMDU5em01Ljc0NC03Ljg3M2E2Ljg5IDYuODkgMCAwIDAtNS43NDQgNS43NTVIM0E5LjA2NCA5LjA2NCAwIDAgMSAxMC45NDEgM3ptNy44NjIgNS43NTVhNi44OSA2Ljg5IDAgMCAwLTUuNzQ0LTUuNzU1VjNBOS4wNjQgOS4wNjQgMCAwIDEgMjEgMTAuOTQxem0tNS43NDQgNy44NzNhNi44OSA2Ljg5IDAgMCAwIDUuNzQ0LTUuNzU1SDIxQTkuMDYgOS4wNiAwIDAgMSAxMy4wNTkgMjF6TTEwLjQgMTUuMTc3SDcuMTg4TDguNzk3IDEyaDMuMDEybC0xLjQwMi0yLjQ1MUwxMiA2LjcwNmw0LjgxOCA4LjQ3aC0zLjE5M2wtMS43MTUtMi45OXoiLz4KPC9zdmc+Cg==) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik01LjE5NyAxMy4wNTlhNi44OSA2Ljg5IDAgMCAwIDUuNzQ0IDUuNzU1VjIxQTkuMDY0IDkuMDY0IDAgMCAxIDMgMTMuMDU5em01Ljc0NC03Ljg3M2E2Ljg5IDYuODkgMCAwIDAtNS43NDQgNS43NTVIM0E5LjA2NCA5LjA2NCAwIDAgMSAxMC45NDEgM3ptNy44NjIgNS43NTVhNi44OSA2Ljg5IDAgMCAwLTUuNzQ0LTUuNzU1VjNBOS4wNiA5LjA2IDAgMCAxIDIxIDEwLjk0MXptLTUuNzQ0IDcuODczYTYuODkgNi44OSAwIDAgMCA1Ljc0NC01Ljc1NUgyMUE5LjA2IDkuMDYgMCAwIDEgMTMuMDU5IDIxek0xMC40IDE1LjE3N0g3LjE4OEw4Ljc5NyAxMmgzLjAxMmwtMS40MDItMi40NTFMMTIgNi43MDZsNC44MTggOC40N2gtMy4xOTNsLTEuNzE1LTIuOTl6Ii8+Cjwvc3ZnPgo=) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNBSVJJX19hKSI+CiAgICAgICAgPHBhdGggZmlsbD0iIzAwMCIgZD0iTTI0IDBIMHYyNGgyNHoiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNNS45NTMgMTIuOTQxYTYuMTMgNi4xMyAwIDAgMCA1LjEwNiA1LjExNVYyMEE4LjA1NiA4LjA1NiAwIDAgMSA0IDEyLjk0MXptNS4xMDYtNi45OTdhNi4xMyA2LjEzIDAgMCAwLTUuMTA2IDUuMTE1SDRBOC4wNTYgOC4wNTYgMCAwIDEgMTEuMDU5IDR6bTYuOTg4IDUuMTE1YTYuMTIgNi4xMiAwIDAgMC01LjEwNi01LjExNVY0QTguMDU2IDguMDU2IDAgMCAxIDIwIDExLjA1OXptLTUuMTA2IDYuOTk4YTYuMTMgNi4xMyAwIDAgMCA1LjEwNi01LjExNkgyMEE4LjA1NiA4LjA1NiAwIDAgMSAxMi45NDEgMjB6bS0yLjM2Mi0zLjIzM0g3LjcyMkw5LjE1MiAxMmgyLjY3OWwtMS4yNDctMi4xNzlMMTIgNy4yOTRsNC4yODIgNy41M2gtMi44MzdsLTEuNTI1LTIuNjZ6Ii8+CiAgICA8L2c+CiAgICA8ZGVmcz4KICAgICAgICA8Y2xpcFBhdGggaWQ9IkFJUklfX2EiPgogICAgICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMCAwaDI0djI0SDB6Ii8+CiAgICAgICAgPC9jbGlwUGF0aD4KICAgIDwvZGVmcz4KPC9zdmc+Cg==)
 * @see https://web3icons.io/tokens/AIRI
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenAIRI = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenAIRI', __iconNode);
;
}),
];

//# sourceMappingURL=1qqr_%40web3icons_react_dist_07xxc3-._.js.map