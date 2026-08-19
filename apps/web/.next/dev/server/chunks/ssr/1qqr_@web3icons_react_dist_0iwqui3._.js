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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenRAMP.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenRAMP
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-ssr] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#00B5D1',
                d: 'M14.368 13.455 12 14.905l-2.369-1.45v-2.906L12 9.092l2.368 1.457z'
            }
        ],
        [
            'path',
            {
                fill: '#0D285A',
                d: 'M12 3 4.42 7.503v8.994L12 21l7.579-4.503V7.503zM8.21 14.18V9.797L12 7.641l3.79 2.156v4.384l-3.818 2.186zm0 2.527v-1.522l5.056 2.964-1.266.756zm9.474-1.255L14.11 17.65l-1.31-.784 3.937-2.197v-5.36L12 6.672 7.263 9.309v6.77l-.947-.688V8.608L12 5.218l5.684 3.33z'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M14.368 13.455 12 14.905l-2.369-1.45v-2.907L12 9.092l2.368 1.456z'
            }
        ],
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M12 3 4.42 7.503v8.994L12 21l7.579-4.503V7.503zM8.21 14.18V9.797L12 7.641l3.79 2.156v4.384l-3.818 2.186zm0 2.527v-1.522l5.056 2.964-1.266.756zm9.474-1.255L14.11 17.65l-1.31-.784 3.937-2.197v-5.36L12 6.672 7.263 9.309v6.77l-.947-.688V8.608L12 5.218l5.684 3.33z'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#RAMP__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#0D285A',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M14.105 13.294 12 14.583l-2.105-1.29V10.71L12 9.416l2.105 1.294z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M12 4 5.263 8.003v7.994L12 20l6.737-4.003V8.003zm-3.368 9.938v-3.896L12 8.125l3.368 1.917v3.897l-3.393 1.943zm0 2.246v-1.352l4.493 2.634-1.125.672zm8.42-1.115-3.177 1.953-1.164-.696 3.5-1.954V9.608L12 7.264 7.79 9.608v6.018l-.843-.612V8.985L12 5.971l5.053 2.96z'
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
                        id: 'RAMP__a'
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
 * @component @name TokenRAMP
 * @description Web3Icon for TokenRAMP
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiMwMEI1RDEiIGQ9Ik0xNC4zNjggMTMuNDU1IDEyIDE0LjkwNWwtMi4zNjktMS40NXYtMi45MDZMMTIgOS4wOTJsMi4zNjggMS40NTd6Ii8+CiAgICA8cGF0aCBmaWxsPSIjMEQyODVBIiBkPSJNMTIgMyA0LjQyIDcuNTAzdjguOTk0TDEyIDIxbDcuNTc5LTQuNTAzVjcuNTAzek04LjIxIDE0LjE4VjkuNzk3TDEyIDcuNjQxbDMuNzkgMi4xNTZ2NC4zODRsLTMuODE4IDIuMTg2em0wIDIuNTI3di0xLjUyMmw1LjA1NiAyLjk2NC0xLjI2Ni43NTZ6bTkuNDc0LTEuMjU1TDE0LjExIDE3LjY1bC0xLjMxLS43ODQgMy45MzctMi4xOTd2LTUuMzZMMTIgNi42NzIgNy4yNjMgOS4zMDl2Ni43N2wtLjk0Ny0uNjg4VjguNjA4TDEyIDUuMjE4bDUuNjg0IDMuMzN6Ii8+Cjwvc3ZnPgo=) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xNC4zNjggMTMuNDU1IDEyIDE0LjkwNWwtMi4zNjktMS40NXYtMi45MDdMMTIgOS4wOTJsMi4zNjggMS40NTZ6Ii8+CiAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTIgMyA0LjQyIDcuNTAzdjguOTk0TDEyIDIxbDcuNTc5LTQuNTAzVjcuNTAzek04LjIxIDE0LjE4VjkuNzk3TDEyIDcuNjQxbDMuNzkgMi4xNTZ2NC4zODRsLTMuODE4IDIuMTg2em0wIDIuNTI3di0xLjUyMmw1LjA1NiAyLjk2NC0xLjI2Ni43NTZ6bTkuNDc0LTEuMjU1TDE0LjExIDE3LjY1bC0xLjMxLS43ODQgMy45MzctMi4xOTd2LTUuMzZMMTIgNi42NzIgNy4yNjMgOS4zMDl2Ni43N2wtLjk0Ny0uNjg4VjguNjA4TDEyIDUuMjE4bDUuNjg0IDMuMzN6Ii8+Cjwvc3ZnPgo=) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNSQU1QX19hKSI+CiAgICAgICAgPHBhdGggZmlsbD0iIzBEMjg1QSIgZD0iTTI0IDBIMHYyNGgyNHoiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTQuMTA1IDEzLjI5NCAxMiAxNC41ODNsLTIuMTA1LTEuMjlWMTAuNzFMMTIgOS40MTZsMi4xMDUgMS4yOTR6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTEyIDQgNS4yNjMgOC4wMDN2Ny45OTRMMTIgMjBsNi43MzctNC4wMDNWOC4wMDN6bS0zLjM2OCA5LjkzOHYtMy44OTZMMTIgOC4xMjVsMy4zNjggMS45MTd2My44OTdsLTMuMzkzIDEuOTQzem0wIDIuMjQ2di0xLjM1Mmw0LjQ5MyAyLjYzNC0xLjEyNS42NzJ6bTguNDItMS4xMTUtMy4xNzcgMS45NTMtMS4xNjQtLjY5NiAzLjUtMS45NTRWOS42MDhMMTIgNy4yNjQgNy43OSA5LjYwOHY2LjAxOGwtLjg0My0uNjEyVjguOTg1TDEyIDUuOTcxbDUuMDUzIDIuOTZ6Ii8+CiAgICA8L2c+CiAgICA8ZGVmcz4KICAgICAgICA8Y2xpcFBhdGggaWQ9IlJBTVBfX2EiPgogICAgICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMCAwaDI0djI0SDB6Ii8+CiAgICAgICAgPC9jbGlwUGF0aD4KICAgIDwvZGVmcz4KPC9zdmc+Cg==)
 * @see https://web3icons.io/tokens/RAMP
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenRAMP = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenRAMP', __iconNode);
;
}),
];

//# sourceMappingURL=1qqr_%40web3icons_react_dist_0iwqui3._.js.map