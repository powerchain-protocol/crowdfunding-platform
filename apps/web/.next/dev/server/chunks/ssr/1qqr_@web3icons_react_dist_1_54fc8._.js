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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenMAP.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenMAP
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-ssr] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                stroke: '#E1CA7D',
                d: 'M10.185 4.969c.806-1.399 2.823-1.399 3.63 0l6.902 11.969c.805 1.396-.203 3.142-1.816 3.142H5.1c-1.613 0-2.621-1.746-1.816-3.142z'
            }
        ],
        [
            'path',
            {
                stroke: '#E1CA7D',
                d: 'M10.911 6.915c.929-1.32 2.939-1.138 3.616.327l4.289 9.276c.677 1.463-.484 3.11-2.09 2.965l-10.168-.916c-1.606-.145-2.453-1.973-1.526-3.293z'
            }
        ],
        [
            'path',
            {
                stroke: '#E1CA7D',
                d: 'M11.88 7.996a1.497 1.497 0 0 1 2.55.472l2.944 8.329a1.496 1.496 0 0 1-1.684 1.97l-8.677-1.608a1.497 1.497 0 0 1-.867-2.442z'
            }
        ],
        [
            'path',
            {
                stroke: '#E1CA7D',
                d: 'M12.671 9.089a.898.898 0 0 1 1.496.43l1.85 7.461a.9.9 0 0 1-1.12 1.08l-7.38-2.123a.9.9 0 0 1-.376-1.509z'
            }
        ],
        [
            'path',
            {
                stroke: '#E1CA7D',
                d: 'M13.028 10.579a.6.6 0 0 1 .943.431l.53 5.568a.597.597 0 0 1-.844.602l-5.084-2.32a.6.6 0 0 1-.1-1.032z'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#MAP__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        stroke: '#E1CA7D',
                        d: 'M10.386 5.75c.717-1.242 2.51-1.242 3.227 0l6.135 10.64c.716 1.241-.18 2.793-1.614 2.793H5.865c-1.433 0-2.33-1.552-1.613-2.793z'
                    }
                ],
                [
                    'path',
                    {
                        stroke: '#E1CA7D',
                        d: 'M11.032 7.48c.825-1.173 2.613-1.012 3.214.29l3.813 8.246c.601 1.3-.43 2.765-1.858 2.636l-9.038-.815c-1.428-.128-2.181-1.754-1.357-2.926z'
                    }
                ],
                [
                    'path',
                    {
                        stroke: '#E1CA7D',
                        d: 'M11.893 8.441a1.33 1.33 0 0 1 2.266.42l2.617 7.403a1.33 1.33 0 0 1-1.496 1.752l-7.713-1.43a1.33 1.33 0 0 1-.77-2.17z'
                    }
                ],
                [
                    'path',
                    {
                        stroke: '#E1CA7D',
                        d: 'M12.597 9.413a.798.798 0 0 1 1.329.382l1.644 6.632a.8.8 0 0 1-.995.96l-6.56-1.888a.8.8 0 0 1-.334-1.34z'
                    }
                ],
                [
                    'path',
                    {
                        stroke: '#E1CA7D',
                        d: 'M12.913 10.738a.534.534 0 0 1 .743.124.53.53 0 0 1 .096.259l.472 4.95a.532.532 0 0 1-.751.534l-4.52-2.062a.532.532 0 0 1-.088-.917z'
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
                        id: 'MAP__a'
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
 * @component @name TokenMAP
 * @description Web3Icon for TokenMAP
 *
 * @preview (branded, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIHN0cm9rZT0iI0UxQ0E3RCIgZD0iTTEwLjE4NSA0Ljk2OWMuODA2LTEuMzk5IDIuODIzLTEuMzk5IDMuNjMgMGw2LjkwMiAxMS45NjljLjgwNSAxLjM5Ni0uMjAzIDMuMTQyLTEuODE2IDMuMTQySDUuMWMtMS42MTMgMC0yLjYyMS0xLjc0Ni0xLjgxNi0zLjE0MnoiLz4KICAgIDxwYXRoIHN0cm9rZT0iI0UxQ0E3RCIgZD0iTTEwLjkxMSA2LjkxNWMuOTI5LTEuMzIgMi45MzktMS4xMzggMy42MTYuMzI3bDQuMjg5IDkuMjc2Yy42NzcgMS40NjMtLjQ4NCAzLjExLTIuMDkgMi45NjVsLTEwLjE2OC0uOTE2Yy0xLjYwNi0uMTQ1LTIuNDUzLTEuOTczLTEuNTI2LTMuMjkzeiIvPgogICAgPHBhdGggc3Ryb2tlPSIjRTFDQTdEIiBkPSJNMTEuODggNy45OTZhMS40OTcgMS40OTcgMCAwIDEgMi41NS40NzJsMi45NDQgOC4zMjlhMS40OTYgMS40OTYgMCAwIDEtMS42ODQgMS45N2wtOC42NzctMS42MDhhMS40OTcgMS40OTcgMCAwIDEtLjg2Ny0yLjQ0MnoiLz4KICAgIDxwYXRoIHN0cm9rZT0iI0UxQ0E3RCIgZD0iTTEyLjY3MSA5LjA4OWEuODk4Ljg5OCAwIDAgMSAxLjQ5Ni40M2wxLjg1IDcuNDYxYS45LjkgMCAwIDEtMS4xMiAxLjA4bC03LjM4LTIuMTIzYS45LjkgMCAwIDEtLjM3Ni0xLjUwOXoiLz4KICAgIDxwYXRoIHN0cm9rZT0iI0UxQ0E3RCIgZD0iTTEzLjAyOCAxMC41NzlhLjYuNiAwIDAgMSAuOTQzLjQzMWwuNTMgNS41NjhhLjU5Ny41OTcgMCAwIDEtLjg0NC42MDJsLTUuMDg0LTIuMzJhLjYuNiAwIDAgMS0uMS0xLjAzMnoiLz4KPC9zdmc+Cg==) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNNQVBfX2EpIj4KICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMjQgMEgwdjI0aDI0eiIvPgogICAgICAgIDxwYXRoIHN0cm9rZT0iI0UxQ0E3RCIgZD0iTTEwLjM4NiA1Ljc1Yy43MTctMS4yNDIgMi41MS0xLjI0MiAzLjIyNyAwbDYuMTM1IDEwLjY0Yy43MTYgMS4yNDEtLjE4IDIuNzkzLTEuNjE0IDIuNzkzSDUuODY1Yy0xLjQzMyAwLTIuMzMtMS41NTItMS42MTMtMi43OTN6Ii8+CiAgICAgICAgPHBhdGggc3Ryb2tlPSIjRTFDQTdEIiBkPSJNMTEuMDMyIDcuNDhjLjgyNS0xLjE3MyAyLjYxMy0xLjAxMiAzLjIxNC4yOWwzLjgxMyA4LjI0NmMuNjAxIDEuMy0uNDMgMi43NjUtMS44NTggMi42MzZsLTkuMDM4LS44MTVjLTEuNDI4LS4xMjgtMi4xODEtMS43NTQtMS4zNTctMi45MjZ6Ii8+CiAgICAgICAgPHBhdGggc3Ryb2tlPSIjRTFDQTdEIiBkPSJNMTEuODkzIDguNDQxYTEuMzMgMS4zMyAwIDAgMSAyLjI2Ni40MmwyLjYxNyA3LjQwM2ExLjMzIDEuMzMgMCAwIDEtMS40OTYgMS43NTJsLTcuNzEzLTEuNDNhMS4zMyAxLjMzIDAgMCAxLS43Ny0yLjE3eiIvPgogICAgICAgIDxwYXRoIHN0cm9rZT0iI0UxQ0E3RCIgZD0iTTEyLjU5NyA5LjQxM2EuNzk4Ljc5OCAwIDAgMSAxLjMyOS4zODJsMS42NDQgNi42MzJhLjguOCAwIDAgMS0uOTk1Ljk2bC02LjU2LTEuODg4YS44LjggMCAwIDEtLjMzNC0xLjM0eiIvPgogICAgICAgIDxwYXRoIHN0cm9rZT0iI0UxQ0E3RCIgZD0iTTEyLjkxMyAxMC43MzhhLjUzNC41MzQgMCAwIDEgLjc0My4xMjQuNTMuNTMgMCAwIDEgLjA5Ni4yNTlsLjQ3MiA0Ljk1YS41MzIuNTMyIDAgMCAxLS43NTEuNTM0bC00LjUyLTIuMDYyYS41MzIuNTMyIDAgMCAxLS4wODgtLjkxN3oiLz4KICAgIDwvZz4KICAgIDxkZWZzPgogICAgICAgIDxjbGlwUGF0aCBpZD0iTUFQX19hIj4KICAgICAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTAgMGgyNHYyNEgweiIvPgogICAgICAgIDwvY2xpcFBhdGg+CiAgICA8L2RlZnM+Cjwvc3ZnPgo=)
 * @see https://web3icons.io/tokens/MAP
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenMAP = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenMAP', __iconNode);
;
}),
];

//# sourceMappingURL=1qqr_%40web3icons_react_dist_1_54fc8._.js.map