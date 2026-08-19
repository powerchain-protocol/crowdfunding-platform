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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenPLA.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenPLA
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-ssr] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#0079F0',
                d: 'M10.314 5.533a1.874 1.874 0 0 1 3.372 0l6.308 13.097a.62.62 0 0 1-.261.815.6.6 0 0 1-.3.078H4.567a.625.625 0 0 1-.562-.893z'
            }
        ],
        [
            'path',
            {
                fill: '#fff',
                d: 'M9.47 5.126a2.81 2.81 0 0 1 5.06 0l6.314 13.091a1.56 1.56 0 0 1-1.405 2.242H4.56a1.56 1.56 0 0 1-1.405-2.242l6.308-13.09zm3.373.812a.936.936 0 0 0-1.686 0L5.06 18.586h13.872L12.837 5.945z'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M10.315 5.533a1.874 1.874 0 0 1 3.372 0l6.308 13.097a.625.625 0 0 1-.562.893H4.57a.624.624 0 0 1-.562-.893z'
            }
        ],
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M9.47 5.126a2.81 2.81 0 0 1 5.06 0l6.314 13.091a1.56 1.56 0 0 1-1.405 2.242H4.56a1.562 1.562 0 0 1-1.405-2.242l6.308-13.09zm3.373.812a.936.936 0 0 0-1.686 0L5.06 18.586h13.872L12.837 5.945z'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#PLA__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#0079F0',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M10.502 6.251a1.666 1.666 0 0 1 2.998 0l5.607 11.642a.555.555 0 0 1-.5.794H5.394a.556.556 0 0 1-.5-.794z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M9.752 5.89a2.498 2.498 0 0 1 4.496 0l5.613 11.636a1.387 1.387 0 0 1-1.249 1.993H5.388a1.387 1.387 0 0 1-1.25-1.993L9.747 5.89zm2.997.721a.83.83 0 0 0-1.191-.342.83.83 0 0 0-.307.342L5.832 17.854h12.33L12.744 6.617z'
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
                        id: 'PLA__a'
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
 * @component @name TokenPLA
 * @description Web3Icon for TokenPLA
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiMwMDc5RjAiIGQ9Ik0xMC4zMTQgNS41MzNhMS44NzQgMS44NzQgMCAwIDEgMy4zNzIgMGw2LjMwOCAxMy4wOTdhLjYyLjYyIDAgMCAxLS4yNjEuODE1LjYuNiAwIDAgMS0uMy4wNzhINC41NjdhLjYyNS42MjUgMCAwIDEtLjU2Mi0uODkzeiIvPgogICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTkuNDcgNS4xMjZhMi44MSAyLjgxIDAgMCAxIDUuMDYgMGw2LjMxNCAxMy4wOTFhMS41NiAxLjU2IDAgMCAxLTEuNDA1IDIuMjQySDQuNTZhMS41NiAxLjU2IDAgMCAxLTEuNDA1LTIuMjQybDYuMzA4LTEzLjA5em0zLjM3My44MTJhLjkzNi45MzYgMCAwIDAtMS42ODYgMEw1LjA2IDE4LjU4NmgxMy44NzJMMTIuODM3IDUuOTQ1eiIvPgo8L3N2Zz4K) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xMC4zMTUgNS41MzNhMS44NzQgMS44NzQgMCAwIDEgMy4zNzIgMGw2LjMwOCAxMy4wOTdhLjYyNS42MjUgMCAwIDEtLjU2Mi44OTNINC41N2EuNjI0LjYyNCAwIDAgMS0uNTYyLS44OTN6Ii8+CiAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNOS40NyA1LjEyNmEyLjgxIDIuODEgMCAwIDEgNS4wNiAwbDYuMzE0IDEzLjA5MWExLjU2IDEuNTYgMCAwIDEtMS40MDUgMi4yNDJINC41NmExLjU2MiAxLjU2MiAwIDAgMS0xLjQwNS0yLjI0Mmw2LjMwOC0xMy4wOXptMy4zNzMuODEyYS45MzYuOTM2IDAgMCAwLTEuNjg2IDBMNS4wNiAxOC41ODZoMTMuODcyTDEyLjgzNyA1Ljk0NXoiLz4KPC9zdmc+Cg==) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNQTEFfX2EpIj4KICAgICAgICA8cGF0aCBmaWxsPSIjMDA3OUYwIiBkPSJNMjQgMEgwdjI0aDI0eiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xMC41MDIgNi4yNTFhMS42NjYgMS42NjYgMCAwIDEgMi45OTggMGw1LjYwNyAxMS42NDJhLjU1NS41NTUgMCAwIDEtLjUuNzk0SDUuMzk0YS41NTYuNTU2IDAgMCAxLS41LS43OTR6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTkuNzUyIDUuODlhMi40OTggMi40OTggMCAwIDEgNC40OTYgMGw1LjYxMyAxMS42MzZhMS4zODcgMS4zODcgMCAwIDEtMS4yNDkgMS45OTNINS4zODhhMS4zODcgMS4zODcgMCAwIDEtMS4yNS0xLjk5M0w5Ljc0NyA1Ljg5em0yLjk5Ny43MjFhLjgzLjgzIDAgMCAwLTEuMTkxLS4zNDIuODMuODMgMCAwIDAtLjMwNy4zNDJMNS44MzIgMTcuODU0aDEyLjMzTDEyLjc0NCA2LjYxN3oiLz4KICAgIDwvZz4KICAgIDxkZWZzPgogICAgICAgIDxjbGlwUGF0aCBpZD0iUExBX19hIj4KICAgICAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTAgMGgyNHYyNEgweiIvPgogICAgICAgIDwvY2xpcFBhdGg+CiAgICA8L2RlZnM+Cjwvc3ZnPgo=)
 * @see https://web3icons.io/tokens/PLA
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenPLA = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenPLA', __iconNode);
;
}),
];

//# sourceMappingURL=1qqr_%40web3icons_react_dist_01cr0__._.js.map