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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenACT.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenACT
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-ssr] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#767DFF',
                d: 'M14.007 3.563c.139 0 .276.037.395.11.12.072.22.177.289.302l6.209 11.55a.84.84 0 0 1 0 .797l-1.98 3.703a.8.8 0 0 1-.288.302.76.76 0 0 1-.396.11H5.764a.76.76 0 0 1-.396-.11.8.8 0 0 1-.288-.302L3.1 16.322a.84.84 0 0 1 0-.797l6.2-11.55a.8.8 0 0 1 .289-.302.76.76 0 0 1 .395-.11zM12 8.157l-4.185 7.78h8.37z'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M9.993 3.563h4.014c.139 0 .276.037.395.11.12.072.22.177.289.302l6.209 11.55a.84.84 0 0 1 0 .797l-1.98 3.703a.8.8 0 0 1-.288.302.76.76 0 0 1-.396.11H5.764a.76.76 0 0 1-.396-.11.8.8 0 0 1-.288-.302L3.1 16.322a.84.84 0 0 1 0-.797l6.2-11.55a.8.8 0 0 1 .289-.302.76.76 0 0 1 .395-.11zM12 8.157l-4.185 7.78h8.37z'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#ACT__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#767DFF',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M10.216 4.5h3.568c.123 0 .245.033.351.098a.7.7 0 0 1 .257.269l5.52 10.266a.75.75 0 0 1 0 .708l-1.76 3.292a.7.7 0 0 1-.257.27.7.7 0 0 1-.352.097H6.457a.7.7 0 0 1-.352-.098.7.7 0 0 1-.256-.269l-1.76-3.292a.75.75 0 0 1 0-.707L9.6 4.867a.7.7 0 0 1 .257-.269.7.7 0 0 1 .351-.098zM12 8.584 8.28 15.5h7.44z'
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
                        id: 'ACT__a'
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
 * @component @name TokenACT
 * @description Web3Icon for TokenACT
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiM3NjdERkYiIGQ9Ik0xNC4wMDcgMy41NjNjLjEzOSAwIC4yNzYuMDM3LjM5NS4xMS4xMi4wNzIuMjIuMTc3LjI4OS4zMDJsNi4yMDkgMTEuNTVhLjg0Ljg0IDAgMCAxIDAgLjc5N2wtMS45OCAzLjcwM2EuOC44IDAgMCAxLS4yODguMzAyLjc2Ljc2IDAgMCAxLS4zOTYuMTFINS43NjRhLjc2Ljc2IDAgMCAxLS4zOTYtLjExLjguOCAwIDAgMS0uMjg4LS4zMDJMMy4xIDE2LjMyMmEuODQuODQgMCAwIDEgMC0uNzk3bDYuMi0xMS41NWEuOC44IDAgMCAxIC4yODktLjMwMi43Ni43NiAwIDAgMSAuMzk1LS4xMXpNMTIgOC4xNTdsLTQuMTg1IDcuNzhoOC4zN3oiLz4KPC9zdmc+Cg==) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik05Ljk5MyAzLjU2M2g0LjAxNGMuMTM5IDAgLjI3Ni4wMzcuMzk1LjExLjEyLjA3Mi4yMi4xNzcuMjg5LjMwMmw2LjIwOSAxMS41NWEuODQuODQgMCAwIDEgMCAuNzk3bC0xLjk4IDMuNzAzYS44LjggMCAwIDEtLjI4OC4zMDIuNzYuNzYgMCAwIDEtLjM5Ni4xMUg1Ljc2NGEuNzYuNzYgMCAwIDEtLjM5Ni0uMTEuOC44IDAgMCAxLS4yODgtLjMwMkwzLjEgMTYuMzIyYS44NC44NCAwIDAgMSAwLS43OTdsNi4yLTExLjU1YS44LjggMCAwIDEgLjI4OS0uMzAyLjc2Ljc2IDAgMCAxIC4zOTUtLjExek0xMiA4LjE1N2wtNC4xODUgNy43OGg4LjM3eiIvPgo8L3N2Zz4K) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNBQ1RfX2EpIj4KICAgICAgICA8cGF0aCBmaWxsPSIjNzY3REZGIiBkPSJNMjQgMEgwdjI0aDI0eiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xMC4yMTYgNC41aDMuNTY4Yy4xMjMgMCAuMjQ1LjAzMy4zNTEuMDk4YS43LjcgMCAwIDEgLjI1Ny4yNjlsNS41MiAxMC4yNjZhLjc1Ljc1IDAgMCAxIDAgLjcwOGwtMS43NiAzLjI5MmEuNy43IDAgMCAxLS4yNTcuMjcuNy43IDAgMCAxLS4zNTIuMDk3SDYuNDU3YS43LjcgMCAwIDEtLjM1Mi0uMDk4LjcuNyAwIDAgMS0uMjU2LS4yNjlsLTEuNzYtMy4yOTJhLjc1Ljc1IDAgMCAxIDAtLjcwN0w5LjYgNC44NjdhLjcuNyAwIDAgMSAuMjU3LS4yNjkuNy43IDAgMCAxIC4zNTEtLjA5OHpNMTIgOC41ODQgOC4yOCAxNS41aDcuNDR6Ii8+CiAgICA8L2c+CiAgICA8ZGVmcz4KICAgICAgICA8Y2xpcFBhdGggaWQ9IkFDVF9fYSI+CiAgICAgICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0wIDBoMjR2MjRIMHoiLz4KICAgICAgICA8L2NsaXBQYXRoPgogICAgPC9kZWZzPgo8L3N2Zz4K)
 * @see https://web3icons.io/tokens/ACT
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenACT = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenACT', __iconNode);
;
}),
];

//# sourceMappingURL=1qqr_%40web3icons_react_dist_0v_khj9._.js.map