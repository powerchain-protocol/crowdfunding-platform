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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenDSLA.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenDSLA
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-ssr] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#FFE1A5',
                d: 'm4.84 6.979-.774 1.324A7.955 7.955 0 0 0 6.979 19.17l1.324.764a7.955 7.955 0 0 0 10.867-2.913l.764-1.324A7.95 7.95 0 0 0 17.022 4.83l-1.325-.764A7.954 7.954 0 0 0 4.83 6.979z'
            }
        ],
        [
            'path',
            {
                fill: '#F69D88',
                d: 'M13.13 3.613h-2.252a7.254 7.254 0 0 0-7.26 7.264v2.253a7.25 7.25 0 0 0 7.255 7.254h2.253a7.25 7.25 0 0 0 7.254-7.254v-2.253a7.25 7.25 0 0 0-7.254-7.254z'
            }
        ],
        [
            'path',
            {
                fill: '#2196F3',
                d: 'M12.005 20.218a8.217 8.217 0 1 0 0-16.434 8.217 8.217 0 0 0 0 16.434'
            }
        ],
        [
            'path',
            {
                fill: '#F0F3FA',
                d: 'm15.478 6.047-2.53 4.326 2.486 1.499-6.902 6.083 2.5-4.351-2.5-1.454z'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#DSLA__a)'
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
                        fill: '#FFE1A5',
                        d: 'm5.636 7.536-.689 1.178a7.07 7.07 0 0 0 2.59 9.66l1.177.679a7.07 7.07 0 0 0 9.66-2.59l.679-1.177a7.07 7.07 0 0 0-.515-7.84 7.1 7.1 0 0 0-2.074-1.82l-1.178-.679a7.07 7.07 0 0 0-9.66 2.59z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#F69D88',
                        d: 'M13.005 4.545h-2.002a6.45 6.45 0 0 0-6.453 6.457v2.002a6.445 6.445 0 0 0 6.448 6.449h2.003a6.445 6.445 0 0 0 6.448-6.448v-2.003A6.445 6.445 0 0 0 13 4.554z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#2196F3',
                        d: 'M12.005 19.305a7.304 7.304 0 1 0 0-14.609 7.304 7.304 0 0 0 0 14.61'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#F0F3FA',
                        d: 'm15.092 6.708-2.25 3.846 2.21 1.332-6.135 5.408 2.223-3.869-2.223-1.292z'
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
                        id: 'DSLA__a'
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
 * @component @name TokenDSLA
 * @description Web3Icon for TokenDSLA
 *
 * @preview (branded, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNGRkUxQTUiIGQ9Im00Ljg0IDYuOTc5LS43NzQgMS4zMjRBNy45NTUgNy45NTUgMCAwIDAgNi45NzkgMTkuMTdsMS4zMjQuNzY0YTcuOTU1IDcuOTU1IDAgMCAwIDEwLjg2Ny0yLjkxM2wuNzY0LTEuMzI0QTcuOTUgNy45NSAwIDAgMCAxNy4wMjIgNC44M2wtMS4zMjUtLjc2NEE3Ljk1NCA3Ljk1NCAwIDAgMCA0LjgzIDYuOTc5eiIvPgogICAgPHBhdGggZmlsbD0iI0Y2OUQ4OCIgZD0iTTEzLjEzIDMuNjEzaC0yLjI1MmE3LjI1NCA3LjI1NCAwIDAgMC03LjI2IDcuMjY0djIuMjUzYTcuMjUgNy4yNSAwIDAgMCA3LjI1NSA3LjI1NGgyLjI1M2E3LjI1IDcuMjUgMCAwIDAgNy4yNTQtNy4yNTR2LTIuMjUzYTcuMjUgNy4yNSAwIDAgMC03LjI1NC03LjI1NHoiLz4KICAgIDxwYXRoIGZpbGw9IiMyMTk2RjMiIGQ9Ik0xMi4wMDUgMjAuMjE4YTguMjE3IDguMjE3IDAgMSAwIDAtMTYuNDM0IDguMjE3IDguMjE3IDAgMCAwIDAgMTYuNDM0Ii8+CiAgICA8cGF0aCBmaWxsPSIjRjBGM0ZBIiBkPSJtMTUuNDc4IDYuMDQ3LTIuNTMgNC4zMjYgMi40ODYgMS40OTktNi45MDIgNi4wODMgMi41LTQuMzUxLTIuNS0xLjQ1NHoiLz4KPC9zdmc+Cg==) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNEU0xBX19hKSI+CiAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTI0IDBIMHYyNGgyNHoiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjRkZFMUE1IiBkPSJtNS42MzYgNy41MzYtLjY4OSAxLjE3OGE3LjA3IDcuMDcgMCAwIDAgMi41OSA5LjY2bDEuMTc3LjY3OWE3LjA3IDcuMDcgMCAwIDAgOS42Ni0yLjU5bC42NzktMS4xNzdhNy4wNyA3LjA3IDAgMCAwLS41MTUtNy44NCA3LjEgNy4xIDAgMCAwLTIuMDc0LTEuODJsLTEuMTc4LS42NzlhNy4wNyA3LjA3IDAgMCAwLTkuNjYgMi41OXoiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjRjY5RDg4IiBkPSJNMTMuMDA1IDQuNTQ1aC0yLjAwMmE2LjQ1IDYuNDUgMCAwIDAtNi40NTMgNi40NTd2Mi4wMDJhNi40NDUgNi40NDUgMCAwIDAgNi40NDggNi40NDloMi4wMDNhNi40NDUgNi40NDUgMCAwIDAgNi40NDgtNi40NDh2LTIuMDAzQTYuNDQ1IDYuNDQ1IDAgMCAwIDEzIDQuNTU0eiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiMyMTk2RjMiIGQ9Ik0xMi4wMDUgMTkuMzA1YTcuMzA0IDcuMzA0IDAgMSAwIDAtMTQuNjA5IDcuMzA0IDcuMzA0IDAgMCAwIDAgMTQuNjEiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjRjBGM0ZBIiBkPSJtMTUuMDkyIDYuNzA4LTIuMjUgMy44NDYgMi4yMSAxLjMzMi02LjEzNSA1LjQwOCAyLjIyMy0zLjg2OS0yLjIyMy0xLjI5MnoiLz4KICAgIDwvZz4KICAgIDxkZWZzPgogICAgICAgIDxjbGlwUGF0aCBpZD0iRFNMQV9fYSI+CiAgICAgICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0wIDBoMjR2MjRIMHoiLz4KICAgICAgICA8L2NsaXBQYXRoPgogICAgPC9kZWZzPgo8L3N2Zz4K)
 * @see https://web3icons.io/tokens/DSLA
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenDSLA = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenDSLA', __iconNode);
;
}),
];

//# sourceMappingURL=1qqr_%40web3icons_react_dist_1iymoj1._.js.map