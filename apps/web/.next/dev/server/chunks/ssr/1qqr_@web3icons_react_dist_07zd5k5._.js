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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/exchanges/ExchangeCoinex.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>ExchangeCoinex
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-ssr] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#0EAD98',
                d: 'M12.267 21C7.157 21 3 16.96 3 12s4.157-9 9.267-9c3.55 0 6.831 2.012 8.364 5.12l.369.746-2.591 2.515-1.726-1.652L18.03 8.42c-1.247-1.89-3.424-3.076-5.762-3.076-3.765 0-6.83 2.986-6.83 6.65 0 3.663 3.065 6.65 6.83 6.65 2.338 0 4.515-1.187 5.762-3.077l-4.725-4.595a1.47 1.47 0 0 0-1.037-.418c-.391 0-.755.148-1.036.418a1.407 1.407 0 0 0 0 2.033c.276.27.645.418 1.036.418.392 0 .756-.148 1.037-.418l.419-.413 1.73 1.652-.424.413a3.93 3.93 0 0 1-2.762 1.111 3.95 3.95 0 0 1-2.762-1.111 3.705 3.705 0 0 1 0-5.342 3.94 3.94 0 0 1 2.762-1.112 3.95 3.95 0 0 1 2.762 1.112L21 15.118l-.37.747C19.099 18.988 15.813 21 12.268 21'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M12.267 21C7.157 21 3 16.96 3 12s4.157-9 9.267-9c3.55 0 6.831 2.012 8.364 5.12l.369.746-2.591 2.515-1.726-1.652L18.03 8.42c-1.247-1.89-3.424-3.076-5.762-3.076-3.765 0-6.83 2.986-6.83 6.65 0 3.663 3.065 6.65 6.83 6.65 2.338 0 4.515-1.187 5.762-3.077l-4.725-4.595a1.47 1.47 0 0 0-1.037-.418c-.391 0-.755.148-1.036.418a1.407 1.407 0 0 0 0 2.033c.276.27.645.418 1.036.418.392 0 .756-.148 1.037-.418l.419-.413 1.73 1.652-.424.413a3.93 3.93 0 0 1-2.762 1.111 3.95 3.95 0 0 1-2.762-1.111 3.705 3.705 0 0 1 0-5.342 3.94 3.94 0 0 1 2.762-1.112 3.95 3.95 0 0 1 2.762 1.112L21 15.118l-.37.747C19.099 18.988 15.813 21 12.268 21'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#coinex__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#0EAD98',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M12.238 20C7.695 20 4 16.41 4 12s3.695-8 8.238-8c3.156 0 6.071 1.788 7.434 4.55l.328.664-2.303 2.235-1.534-1.468 1.196-1.162c-1.108-1.68-3.044-2.734-5.121-2.734-3.347 0-6.072 2.654-6.072 5.91s2.725 5.91 6.072 5.91c2.078 0 4.013-1.053 5.12-2.733l-4.199-4.085a1.3 1.3 0 0 0-.921-.372 1.32 1.32 0 0 0-.922.372 1.25 1.25 0 0 0 0 1.807c.245.24.574.372.922.372s.671-.132.921-.372l.372-.367 1.54 1.468-.378.367a3.5 3.5 0 0 1-2.455.989 3.5 3.5 0 0 1-2.455-.989 3.294 3.294 0 0 1 0-4.748 3.5 3.5 0 0 1 2.455-.988c.926 0 1.798.353 2.455.988L20 14.772l-.328.663C18.309 18.212 15.389 20 12.238 20'
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
                        id: 'coinex__a'
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
 * @component @name ExchangeCoinex
 * @description Web3Icon for ExchangeCoinex
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiMwRUFEOTgiIGQ9Ik0xMi4yNjcgMjFDNy4xNTcgMjEgMyAxNi45NiAzIDEyczQuMTU3LTkgOS4yNjctOWMzLjU1IDAgNi44MzEgMi4wMTIgOC4zNjQgNS4xMmwuMzY5Ljc0Ni0yLjU5MSAyLjUxNS0xLjcyNi0xLjY1MkwxOC4wMyA4LjQyYy0xLjI0Ny0xLjg5LTMuNDI0LTMuMDc2LTUuNzYyLTMuMDc2LTMuNzY1IDAtNi44MyAyLjk4Ni02LjgzIDYuNjUgMCAzLjY2MyAzLjA2NSA2LjY1IDYuODMgNi42NSAyLjMzOCAwIDQuNTE1LTEuMTg3IDUuNzYyLTMuMDc3bC00LjcyNS00LjU5NWExLjQ3IDEuNDcgMCAwIDAtMS4wMzctLjQxOGMtLjM5MSAwLS43NTUuMTQ4LTEuMDM2LjQxOGExLjQwNyAxLjQwNyAwIDAgMCAwIDIuMDMzYy4yNzYuMjcuNjQ1LjQxOCAxLjAzNi40MTguMzkyIDAgLjc1Ni0uMTQ4IDEuMDM3LS40MThsLjQxOS0uNDEzIDEuNzMgMS42NTItLjQyNC40MTNhMy45MyAzLjkzIDAgMCAxLTIuNzYyIDEuMTExIDMuOTUgMy45NSAwIDAgMS0yLjc2Mi0xLjExMSAzLjcwNSAzLjcwNSAwIDAgMSAwLTUuMzQyIDMuOTQgMy45NCAwIDAgMSAyLjc2Mi0xLjExMiAzLjk1IDMuOTUgMCAwIDEgMi43NjIgMS4xMTJMMjEgMTUuMTE4bC0uMzcuNzQ3QzE5LjA5OSAxOC45ODggMTUuODEzIDIxIDEyLjI2OCAyMSIvPgo8L3N2Zz4K) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xMi4yNjcgMjFDNy4xNTcgMjEgMyAxNi45NiAzIDEyczQuMTU3LTkgOS4yNjctOWMzLjU1IDAgNi44MzEgMi4wMTIgOC4zNjQgNS4xMmwuMzY5Ljc0Ni0yLjU5MSAyLjUxNS0xLjcyNi0xLjY1MkwxOC4wMyA4LjQyYy0xLjI0Ny0xLjg5LTMuNDI0LTMuMDc2LTUuNzYyLTMuMDc2LTMuNzY1IDAtNi44MyAyLjk4Ni02LjgzIDYuNjUgMCAzLjY2MyAzLjA2NSA2LjY1IDYuODMgNi42NSAyLjMzOCAwIDQuNTE1LTEuMTg3IDUuNzYyLTMuMDc3bC00LjcyNS00LjU5NWExLjQ3IDEuNDcgMCAwIDAtMS4wMzctLjQxOGMtLjM5MSAwLS43NTUuMTQ4LTEuMDM2LjQxOGExLjQwNyAxLjQwNyAwIDAgMCAwIDIuMDMzYy4yNzYuMjcuNjQ1LjQxOCAxLjAzNi40MTguMzkyIDAgLjc1Ni0uMTQ4IDEuMDM3LS40MThsLjQxOS0uNDEzIDEuNzMgMS42NTItLjQyNC40MTNhMy45MyAzLjkzIDAgMCAxLTIuNzYyIDEuMTExIDMuOTUgMy45NSAwIDAgMS0yLjc2Mi0xLjExMSAzLjcwNSAzLjcwNSAwIDAgMSAwLTUuMzQyIDMuOTQgMy45NCAwIDAgMSAyLjc2Mi0xLjExMiAzLjk1IDMuOTUgMCAwIDEgMi43NjIgMS4xMTJMMjEgMTUuMTE4bC0uMzcuNzQ3QzE5LjA5OSAxOC45ODggMTUuODEzIDIxIDEyLjI2OCAyMSIvPgo8L3N2Zz4K) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNjb2luZXhfX2EpIj4KICAgICAgICA8cGF0aCBmaWxsPSIjMEVBRDk4IiBkPSJNMjQgMEgwdjI0aDI0eiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xMi4yMzggMjBDNy42OTUgMjAgNCAxNi40MSA0IDEyczMuNjk1LTggOC4yMzgtOGMzLjE1NiAwIDYuMDcxIDEuNzg4IDcuNDM0IDQuNTVsLjMyOC42NjQtMi4zMDMgMi4yMzUtMS41MzQtMS40NjggMS4xOTYtMS4xNjJjLTEuMTA4LTEuNjgtMy4wNDQtMi43MzQtNS4xMjEtMi43MzQtMy4zNDcgMC02LjA3MiAyLjY1NC02LjA3MiA1LjkxczIuNzI1IDUuOTEgNi4wNzIgNS45MWMyLjA3OCAwIDQuMDEzLTEuMDUzIDUuMTItMi43MzNsLTQuMTk5LTQuMDg1YTEuMyAxLjMgMCAwIDAtLjkyMS0uMzcyIDEuMzIgMS4zMiAwIDAgMC0uOTIyLjM3MiAxLjI1IDEuMjUgMCAwIDAgMCAxLjgwN2MuMjQ1LjI0LjU3NC4zNzIuOTIyLjM3MnMuNjcxLS4xMzIuOTIxLS4zNzJsLjM3Mi0uMzY3IDEuNTQgMS40NjgtLjM3OC4zNjdhMy41IDMuNSAwIDAgMS0yLjQ1NS45ODkgMy41IDMuNSAwIDAgMS0yLjQ1NS0uOTg5IDMuMjk0IDMuMjk0IDAgMCAxIDAtNC43NDggMy41IDMuNSAwIDAgMSAyLjQ1NS0uOTg4Yy45MjYgMCAxLjc5OC4zNTMgMi40NTUuOTg4TDIwIDE0Ljc3MmwtLjMyOC42NjNDMTguMzA5IDE4LjIxMiAxNS4zODkgMjAgMTIuMjM4IDIwIi8+CiAgICA8L2c+CiAgICA8ZGVmcz4KICAgICAgICA8Y2xpcFBhdGggaWQ9ImNvaW5leF9fYSI+CiAgICAgICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0wIDBoMjR2MjRIMHoiLz4KICAgICAgICA8L2NsaXBQYXRoPgogICAgPC9kZWZzPgo8L3N2Zz4K)
 * @see https://web3icons.io/exchanges/coinex
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const ExchangeCoinex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createWeb3Icon"])('ExchangeCoinex', __iconNode);
;
}),
];

//# sourceMappingURL=1qqr_%40web3icons_react_dist_07zd5k5._.js.map