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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenTPAD.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenTPAD
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-ssr] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: 'url(#TPAD__a)',
                d: 'm11.875 21 .01-18L4.5 6.43l2.015 1.185 3.985-1.82v14.4c.225.14.455.27.685.4zm1.625-.8-1.38.8V3l7.38 3.43-1.99 1.205L13.5 5.75zm-9-13.04c.32.19.66.38 1 .57s.68.38 1 .57v7.19l3.5 2.08v2.25l-5.5-3.205zm14 .57c.34-.19.68-.38 1-.57v9.455c-.915.535-1.835 1.08-2.75 1.63L14 19.87v-2.3c.6-.35 1.175-.695 1.75-1.04a81 81 0 0 1 1.75-1.04V8.3c.32-.19.66-.38 1-.57'
            }
        ],
        [
            'defs',
            {},
            [
                [
                    'linearGradient',
                    {
                        id: 'TPAD__a',
                        x1: '11.415',
                        x2: '22.82',
                        y1: '18.81',
                        y2: '14.225',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#FC01C2'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#6D138E'
                            }
                        ]
                    ]
                ]
            ]
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'm11.875 21 .01-18L4.5 6.43l2.015 1.185 3.985-1.82v14.4c.225.14.455.27.685.4zm1.625-.8-1.38.8V3l7.38 3.43-1.99 1.205L13.5 5.75zm-9-13.04c.32.19.66.38 1 .57s.68.38 1 .57v7.19l3.5 2.08v2.25l-5.5-3.205zm14 .57c.34-.19.68-.38 1-.57v9.455c-.915.535-1.835 1.08-2.75 1.63L14 19.87v-2.3c.6-.35 1.175-.695 1.75-1.04a81 81 0 0 1 1.75-1.04V8.3c.32-.19.66-.38 1-.57'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#TPAD__a)'
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
                        fill: 'url(#TPAD__b)',
                        d: 'm11.889 20 .009-16-6.565 3.049 1.791 1.053 3.543-1.618v12.8c.2.125.404.24.608.356zm1.444-.711L12.107 20V4l6.56 3.049-1.77 1.071-3.564-1.676zm-8-11.591c.285.169.587.338.89.506.301.17.604.338.888.507v6.391l3.111 1.85v2l-4.889-2.85zm12.445.506c.302-.168.604-.337.889-.506v8.404q-1.223.715-2.445 1.45l-2.444 1.444V16.95c.533-.311 1.044-.618 1.555-.924a73 73 0 0 1 1.556-.925v-6.39c.284-.17.587-.339.889-.508'
                    }
                ]
            ]
        ],
        [
            'defs',
            {},
            [
                [
                    'linearGradient',
                    {
                        id: 'TPAD__b',
                        x1: '11.711',
                        x2: '17.593',
                        y1: '16.036',
                        y2: '14.065',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#FC01C2'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#6D138E'
                            }
                        ]
                    ]
                ],
                [
                    'clipPath',
                    {
                        id: 'TPAD__a'
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
 * @component @name TokenTPAD
 * @description Web3Icon for TokenTPAD
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9InVybCgjVFBBRF9fYSkiIGQ9Im0xMS44NzUgMjEgLjAxLTE4TDQuNSA2LjQzbDIuMDE1IDEuMTg1IDMuOTg1LTEuODJ2MTQuNGMuMjI1LjE0LjQ1NS4yNy42ODUuNHptMS42MjUtLjgtMS4zOC44VjNsNy4zOCAzLjQzLTEuOTkgMS4yMDVMMTMuNSA1Ljc1em0tOS0xMy4wNGMuMzIuMTkuNjYuMzggMSAuNTdzLjY4LjM4IDEgLjU3djcuMTlsMy41IDIuMDh2Mi4yNWwtNS41LTMuMjA1em0xNCAuNTdjLjM0LS4xOS42OC0uMzggMS0uNTd2OS40NTVjLS45MTUuNTM1LTEuODM1IDEuMDgtMi43NSAxLjYzTDE0IDE5Ljg3di0yLjNjLjYtLjM1IDEuMTc1LS42OTUgMS43NS0xLjA0YTgxIDgxIDAgMCAxIDEuNzUtMS4wNFY4LjNjLjMyLS4xOS42Ni0uMzggMS0uNTciLz4KICAgIDxkZWZzPgogICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iVFBBRF9fYSIgeDE9IjExLjQxNSIgeDI9IjIyLjgyIiB5MT0iMTguODEiIHkyPSIxNC4yMjUiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iI0ZDMDFDMiIvPgogICAgICAgICAgICA8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiM2RDEzOEUiLz4KICAgICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgPC9kZWZzPgo8L3N2Zz4K) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Im0xMS44NzUgMjEgLjAxLTE4TDQuNSA2LjQzbDIuMDE1IDEuMTg1IDMuOTg1LTEuODJ2MTQuNGMuMjI1LjE0LjQ1NS4yNy42ODUuNHptMS42MjUtLjgtMS4zOC44VjNsNy4zOCAzLjQzLTEuOTkgMS4yMDVMMTMuNSA1Ljc1em0tOS0xMy4wNGMuMzIuMTkuNjYuMzggMSAuNTdzLjY4LjM4IDEgLjU3djcuMTlsMy41IDIuMDh2Mi4yNWwtNS41LTMuMjA1em0xNCAuNTdjLjM0LS4xOS42OC0uMzggMS0uNTd2OS40NTVjLS45MTUuNTM1LTEuODM1IDEuMDgtMi43NSAxLjYzTDE0IDE5Ljg3di0yLjNjLjYtLjM1IDEuMTc1LS42OTUgMS43NS0xLjA0YTgxIDgxIDAgMCAxIDEuNzUtMS4wNFY4LjNjLjMyLS4xOS42Ni0uMzggMS0uNTciLz4KPC9zdmc+Cg==) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNUUEFEX19hKSI+CiAgICAgICAgPHBhdGggZmlsbD0iIzAwMCIgZD0iTTI0IDBIMHYyNGgyNHoiLz4KICAgICAgICA8cGF0aCBmaWxsPSJ1cmwoI1RQQURfX2IpIiBkPSJtMTEuODg5IDIwIC4wMDktMTYtNi41NjUgMy4wNDkgMS43OTEgMS4wNTMgMy41NDMtMS42MTh2MTIuOGMuMi4xMjUuNDA0LjI0LjYwOC4zNTZ6bTEuNDQ0LS43MTFMMTIuMTA3IDIwVjRsNi41NiAzLjA0OS0xLjc3IDEuMDcxLTMuNTY0LTEuNjc2em0tOC0xMS41OTFjLjI4NS4xNjkuNTg3LjMzOC44OS41MDYuMzAxLjE3LjYwNC4zMzguODg4LjUwN3Y2LjM5MWwzLjExMSAxLjg1djJsLTQuODg5LTIuODV6bTEyLjQ0NS41MDZjLjMwMi0uMTY4LjYwNC0uMzM3Ljg4OS0uNTA2djguNDA0cS0xLjIyMy43MTUtMi40NDUgMS40NWwtMi40NDQgMS40NDRWMTYuOTVjLjUzMy0uMzExIDEuMDQ0LS42MTggMS41NTUtLjkyNGE3MyA3MyAwIDAgMSAxLjU1Ni0uOTI1di02LjM5Yy4yODQtLjE3LjU4Ny0uMzM5Ljg4OS0uNTA4Ii8+CiAgICA8L2c+CiAgICA8ZGVmcz4KICAgICAgICA8bGluZWFyR3JhZGllbnQgaWQ9IlRQQURfX2IiIHgxPSIxMS43MTEiIHgyPSIxNy41OTMiIHkxPSIxNi4wMzYiIHkyPSIxNC4wNjUiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iI0ZDMDFDMiIvPgogICAgICAgICAgICA8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiM2RDEzOEUiLz4KICAgICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgICAgIDxjbGlwUGF0aCBpZD0iVFBBRF9fYSI+CiAgICAgICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0wIDBoMjR2MjRIMHoiLz4KICAgICAgICA8L2NsaXBQYXRoPgogICAgPC9kZWZzPgo8L3N2Zz4K)
 * @see https://web3icons.io/tokens/TPAD
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenTPAD = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenTPAD', __iconNode);
;
}),
];

//# sourceMappingURL=1qqr_%40web3icons_react_dist_13w9qew._.js.map