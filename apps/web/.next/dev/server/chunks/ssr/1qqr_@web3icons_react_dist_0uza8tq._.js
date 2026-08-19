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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/networks/NetworkHashkey.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>NetworkHashkey
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-ssr] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#1B2126',
                d: 'm8.65 4.023-4.5-1.02a.122.122 0 0 0-.15.118v17.758c0 .076.07.135.145.118l4.502-.927a.12.12 0 0 0 .097-.118V4.138a.115.115 0 0 0-.093-.115m7.699 0 4.501-1.02a.122.122 0 0 1 .149.118v17.758a.12.12 0 0 1-.145.118l-4.502-.927a.12.12 0 0 1-.097-.118V4.138c0-.056.038-.104.093-.115'
            }
        ],
        [
            'path',
            {
                fill: '#0080FF',
                d: 'M10.128 9.572h4.744l-4.744 4.742z'
            }
        ],
        [
            'path',
            {
                fill: '#0072E5',
                d: 'M14.872 14.314h-4.744l4.744-4.742z'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'm8.65 4.023-4.5-1.02a.122.122 0 0 0-.15.118v17.758c0 .076.07.135.145.118l4.502-.927a.12.12 0 0 0 .097-.118V4.138a.115.115 0 0 0-.093-.115m7.699 0 4.501-1.02a.122.122 0 0 1 .149.118v17.758a.12.12 0 0 1-.145.118l-4.502-.927a.12.12 0 0 1-.097-.118V4.138c0-.056.038-.104.093-.115m-6.221 5.549h4.744l-4.744 4.742zm4.744 4.742h-4.744l4.744-4.742z'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#hashkey__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#0072E5',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#1B2126',
                        d: 'm8.584 4.91-4.002-.907a.11.11 0 0 0-.132.104v15.786c0 .067.062.12.13.104l4-.824a.11.11 0 0 0 .087-.104V5.01a.1.1 0 0 0-.083-.101m6.843.001 4.002-.907a.11.11 0 0 1 .132.104v15.786c0 .067-.061.12-.13.104l-4-.824a.11.11 0 0 1-.087-.104V5.01c0-.049.034-.092.083-.101'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M9.897 9.842h4.217l-4.217 4.215z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M14.114 14.057H9.897l4.217-4.215z'
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
                        id: 'hashkey__a'
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
 * @component @name NetworkHashkey
 * @description Web3Icon for NetworkHashkey
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiMxQjIxMjYiIGQ9Im04LjY1IDQuMDIzLTQuNS0xLjAyYS4xMjIuMTIyIDAgMCAwLS4xNS4xMTh2MTcuNzU4YzAgLjA3Ni4wNy4xMzUuMTQ1LjExOGw0LjUwMi0uOTI3YS4xMi4xMiAwIDAgMCAuMDk3LS4xMThWNC4xMzhhLjExNS4xMTUgMCAwIDAtLjA5My0uMTE1bTcuNjk5IDAgNC41MDEtMS4wMmEuMTIyLjEyMiAwIDAgMSAuMTQ5LjExOHYxNy43NThhLjEyLjEyIDAgMCAxLS4xNDUuMTE4bC00LjUwMi0uOTI3YS4xMi4xMiAwIDAgMS0uMDk3LS4xMThWNC4xMzhjMC0uMDU2LjAzOC0uMTA0LjA5My0uMTE1Ii8+CiAgICA8cGF0aCBmaWxsPSIjMDA4MEZGIiBkPSJNMTAuMTI4IDkuNTcyaDQuNzQ0bC00Ljc0NCA0Ljc0MnoiLz4KICAgIDxwYXRoIGZpbGw9IiMwMDcyRTUiIGQ9Ik0xNC44NzIgMTQuMzE0aC00Ljc0NGw0Ljc0NC00Ljc0MnoiLz4KPC9zdmc+Cg==) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Im04LjY1IDQuMDIzLTQuNS0xLjAyYS4xMjIuMTIyIDAgMCAwLS4xNS4xMTh2MTcuNzU4YzAgLjA3Ni4wNy4xMzUuMTQ1LjExOGw0LjUwMi0uOTI3YS4xMi4xMiAwIDAgMCAuMDk3LS4xMThWNC4xMzhhLjExNS4xMTUgMCAwIDAtLjA5My0uMTE1bTcuNjk5IDAgNC41MDEtMS4wMmEuMTIyLjEyMiAwIDAgMSAuMTQ5LjExOHYxNy43NThhLjEyLjEyIDAgMCAxLS4xNDUuMTE4bC00LjUwMi0uOTI3YS4xMi4xMiAwIDAgMS0uMDk3LS4xMThWNC4xMzhjMC0uMDU2LjAzOC0uMTA0LjA5My0uMTE1bS02LjIyMSA1LjU0OWg0Ljc0NGwtNC43NDQgNC43NDJ6bTQuNzQ0IDQuNzQyaC00Ljc0NGw0Ljc0NC00Ljc0MnoiLz4KPC9zdmc+Cg==) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNoYXNoa2V5X19hKSI+CiAgICAgICAgPHBhdGggZmlsbD0iIzAwNzJFNSIgZD0iTTI0IDBIMHYyNGgyNHoiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjMUIyMTI2IiBkPSJtOC41ODQgNC45MS00LjAwMi0uOTA3YS4xMS4xMSAwIDAgMC0uMTMyLjEwNHYxNS43ODZjMCAuMDY3LjA2Mi4xMi4xMy4xMDRsNC0uODI0YS4xMS4xMSAwIDAgMCAuMDg3LS4xMDRWNS4wMWEuMS4xIDAgMCAwLS4wODMtLjEwMW02Ljg0My4wMDEgNC4wMDItLjkwN2EuMTEuMTEgMCAwIDEgLjEzMi4xMDR2MTUuNzg2YzAgLjA2Ny0uMDYxLjEyLS4xMy4xMDRsLTQtLjgyNGEuMTEuMTEgMCAwIDEtLjA4Ny0uMTA0VjUuMDFjMC0uMDQ5LjAzNC0uMDkyLjA4My0uMTAxIi8+CiAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTkuODk3IDkuODQyaDQuMjE3bC00LjIxNyA0LjIxNXoiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTQuMTE0IDE0LjA1N0g5Ljg5N2w0LjIxNy00LjIxNXoiLz4KICAgIDwvZz4KICAgIDxkZWZzPgogICAgICAgIDxjbGlwUGF0aCBpZD0iaGFzaGtleV9fYSI+CiAgICAgICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0wIDBoMjR2MjRIMHoiLz4KICAgICAgICA8L2NsaXBQYXRoPgogICAgPC9kZWZzPgo8L3N2Zz4K)
 * @see https://web3icons.io/networks/hashkey
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const NetworkHashkey = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createWeb3Icon"])('NetworkHashkey', __iconNode);
;
}),
];

//# sourceMappingURL=1qqr_%40web3icons_react_dist_0uza8tq._.js.map