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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenPRQ.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenPRQ
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-ssr] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#005CC7',
                d: 'M3.017 11.437A9 9 0 0 1 12 3v4.5h3.375v-.563h1.687v1.688h-1.687v-.563H12V12h3.937v3.375h-.562v.562h-6.75v-.562h-.563v-6.75h.563V6.937H6.937v1.688H7.5v2.812z'
            }
        ],
        [
            'path',
            {
                fill: '#005CC7',
                d: 'M15.375 17.063V16.5h-2.812v4.483A9 9 0 0 0 21 12h-4.5v3.375h.563v1.688zm-8.438-1.688H7.5V12H3a9 9 0 0 0 9 9v-4.5H8.625v.563H6.937z'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M3.017 11.438A9 9 0 0 1 12 3v4.5h3.375v-.563h1.688v1.688h-1.688v-.563H12V12h3.938v3.375h-.563v.563h-6.75v-.563h-.562v-6.75h.562V6.937H6.938v1.688H7.5v2.813z'
            }
        ],
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M15.375 17.062V16.5h-2.812v4.483A9 9 0 0 0 21 12h-4.5v3.375h.563v1.687zm-8.438-1.687H7.5V12H3a9 9 0 0 0 9 9v-4.5H8.625v.562H6.937z'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#PRQ__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#005CC7',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M4.015 11.5A8 8 0 0 1 12 4v4h3v-.5h1.5V9H15v-.5h-3V12h3.5v3H15v.5H9V15h-.5V9H9V7.5H7.5V9H8v2.5z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M15 16.5V16h-2.5v3.985A8 8 0 0 0 20 12h-4v3h.5v1.5zM7.5 15H8v-3H4a8 8 0 0 0 8 8v-4H9v.5H7.5z'
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
                        id: 'PRQ__a'
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
 * @component @name TokenPRQ
 * @description Web3Icon for TokenPRQ
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiMwMDVDQzciIGQ9Ik0zLjAxNyAxMS40MzdBOSA5IDAgMCAxIDEyIDN2NC41aDMuMzc1di0uNTYzaDEuNjg3djEuNjg4aC0xLjY4N3YtLjU2M0gxMlYxMmgzLjkzN3YzLjM3NWgtLjU2MnYuNTYyaC02Ljc1di0uNTYyaC0uNTYzdi02Ljc1aC41NjNWNi45MzdINi45Mzd2MS42ODhINy41djIuODEyeiIvPgogICAgPHBhdGggZmlsbD0iIzAwNUNDNyIgZD0iTTE1LjM3NSAxNy4wNjNWMTYuNWgtMi44MTJ2NC40ODNBOSA5IDAgMCAwIDIxIDEyaC00LjV2My4zNzVoLjU2M3YxLjY4OHptLTguNDM4LTEuNjg4SDcuNVYxMkgzYTkgOSAwIDAgMCA5IDl2LTQuNUg4LjYyNXYuNTYzSDYuOTM3eiIvPgo8L3N2Zz4K) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0zLjAxNyAxMS40MzhBOSA5IDAgMCAxIDEyIDN2NC41aDMuMzc1di0uNTYzaDEuNjg4djEuNjg4aC0xLjY4OHYtLjU2M0gxMlYxMmgzLjkzOHYzLjM3NWgtLjU2M3YuNTYzaC02Ljc1di0uNTYzaC0uNTYydi02Ljc1aC41NjJWNi45MzdINi45Mzh2MS42ODhINy41djIuODEzeiIvPgogICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTE1LjM3NSAxNy4wNjJWMTYuNWgtMi44MTJ2NC40ODNBOSA5IDAgMCAwIDIxIDEyaC00LjV2My4zNzVoLjU2M3YxLjY4N3ptLTguNDM4LTEuNjg3SDcuNVYxMkgzYTkgOSAwIDAgMCA5IDl2LTQuNUg4LjYyNXYuNTYySDYuOTM3eiIvPgo8L3N2Zz4K) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNQUlFfX2EpIj4KICAgICAgICA8cGF0aCBmaWxsPSIjMDA1Q0M3IiBkPSJNMjQgMEgwdjI0aDI0eiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik00LjAxNSAxMS41QTggOCAwIDAgMSAxMiA0djRoM3YtLjVoMS41VjlIMTV2LS41aC0zVjEyaDMuNXYzSDE1di41SDlWMTVoLS41VjlIOVY3LjVINy41VjlIOHYyLjV6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTE1IDE2LjVWMTZoLTIuNXYzLjk4NUE4IDggMCAwIDAgMjAgMTJoLTR2M2guNXYxLjV6TTcuNSAxNUg4di0zSDRhOCA4IDAgMCAwIDggOHYtNEg5di41SDcuNXoiLz4KICAgIDwvZz4KICAgIDxkZWZzPgogICAgICAgIDxjbGlwUGF0aCBpZD0iUFJRX19hIj4KICAgICAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTAgMGgyNHYyNEgweiIvPgogICAgICAgIDwvY2xpcFBhdGg+CiAgICA8L2RlZnM+Cjwvc3ZnPgo=)
 * @see https://web3icons.io/tokens/PRQ
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenPRQ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenPRQ', __iconNode);
;
}),
];

//# sourceMappingURL=1qqr_%40web3icons_react_dist_16r5a8v._.js.map