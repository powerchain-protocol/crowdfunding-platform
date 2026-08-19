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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenJOY.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenJOY
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-ssr] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#FFFFFD',
                d: 'M3 18.186V20.7h18v-2.514c0-.6-.468-1.086-1.044-1.086H4.044C3.468 17.1 3 17.586 3 18.186m7.6-7.486h2.8v5.6h-2.8z'
            }
        ],
        [
            'path',
            {
                fill: '#EBC5FE',
                d: 'M7.8 15.769V17.1h8.4v-1.332a.48.48 0 0 0-.486-.468H8.28a.48.48 0 0 0-.486.468z'
            }
        ],
        [
            'path',
            {
                fill: '#E85754',
                d: 'M12 11.7a4.2 4.2 0 1 0 0-8.4 4.2 4.2 0 0 0 0 8.4'
            }
        ],
        [
            'path',
            {
                fill: '#FAEADD',
                d: 'M14.292 4.65a3 3 0 0 0-1.597-.546c-.276.018-.822.157-.822.546 0 .492.48.972.78 1.236.294.265 1.002.738 1.782.738s.864-.467.864-.6-.083-.78-1.008-1.374'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M3 18.186V20.7h18v-2.514c0-.6-.468-1.086-1.044-1.086H4.044C3.468 17.1 3 17.586 3 18.186m7.6-7.486h2.8v5.6h-2.8z'
            }
        ],
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M7.8 15.769V17.1h8.4v-1.332a.48.48 0 0 0-.486-.468H8.28a.48.48 0 0 0-.486.468zM12 11.7a4.2 4.2 0 1 0 0-8.4 4.2 4.2 0 0 0 0 8.4'
            }
        ],
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M14.292 4.65a3 3 0 0 0-1.597-.546c-.276.018-.822.157-.822.546 0 .492.48.972.78 1.236.294.264 1.002.738 1.782.738s.864-.467.864-.6-.083-.78-1.008-1.374'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#JOY__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#FFFFFD',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M4 17.499v2.234h16V17.5c0-.534-.416-.966-.928-.966H4.928c-.512 0-.928.432-.928.966m6.755-6.655h2.49v4.977h-2.49z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M8.267 15.35v1.185h7.466V15.35a.43.43 0 0 0-.432-.416H8.693a.427.427 0 0 0-.432.416zM12 11.733a3.734 3.734 0 1 0 0-7.467 3.734 3.734 0 0 0 0 7.467'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M14.037 5.468a2.7 2.7 0 0 0-1.419-.486c-.245.016-.73.14-.73.486 0 .437.426.864.693 1.098.261.235.89.656 1.584.656.693 0 .768-.416.768-.533s-.075-.693-.896-1.221'
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
                        id: 'JOY__a'
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
 * @component @name TokenJOY
 * @description Web3Icon for TokenJOY
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNGRkZGRkQiIGQ9Ik0zIDE4LjE4NlYyMC43aDE4di0yLjUxNGMwLS42LS40NjgtMS4wODYtMS4wNDQtMS4wODZINC4wNDRDMy40NjggMTcuMSAzIDE3LjU4NiAzIDE4LjE4Nm03LjYtNy40ODZoMi44djUuNmgtMi44eiIvPgogICAgPHBhdGggZmlsbD0iI0VCQzVGRSIgZD0iTTcuOCAxNS43NjlWMTcuMWg4LjR2LTEuMzMyYS40OC40OCAwIDAgMC0uNDg2LS40NjhIOC4yOGEuNDguNDggMCAwIDAtLjQ4Ni40Njh6Ii8+CiAgICA8cGF0aCBmaWxsPSIjRTg1NzU0IiBkPSJNMTIgMTEuN2E0LjIgNC4yIDAgMSAwIDAtOC40IDQuMiA0LjIgMCAwIDAgMCA4LjQiLz4KICAgIDxwYXRoIGZpbGw9IiNGQUVBREQiIGQ9Ik0xNC4yOTIgNC42NWEzIDMgMCAwIDAtMS41OTctLjU0NmMtLjI3Ni4wMTgtLjgyMi4xNTctLjgyMi41NDYgMCAuNDkyLjQ4Ljk3Mi43OCAxLjIzNi4yOTQuMjY1IDEuMDAyLjczOCAxLjc4Mi43MzhzLjg2NC0uNDY3Ljg2NC0uNi0uMDgzLS43OC0xLjAwOC0xLjM3NCIvPgo8L3N2Zz4K) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0zIDE4LjE4NlYyMC43aDE4di0yLjUxNGMwLS42LS40NjgtMS4wODYtMS4wNDQtMS4wODZINC4wNDRDMy40NjggMTcuMSAzIDE3LjU4NiAzIDE4LjE4Nm03LjYtNy40ODZoMi44djUuNmgtMi44eiIvPgogICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTcuOCAxNS43NjlWMTcuMWg4LjR2LTEuMzMyYS40OC40OCAwIDAgMC0uNDg2LS40NjhIOC4yOGEuNDguNDggMCAwIDAtLjQ4Ni40Njh6TTEyIDExLjdhNC4yIDQuMiAwIDEgMCAwLTguNCA0LjIgNC4yIDAgMCAwIDAgOC40Ii8+CiAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTQuMjkyIDQuNjVhMyAzIDAgMCAwLTEuNTk3LS41NDZjLS4yNzYuMDE4LS44MjIuMTU3LS44MjIuNTQ2IDAgLjQ5Mi40OC45NzIuNzggMS4yMzYuMjk0LjI2NCAxLjAwMi43MzggMS43ODIuNzM4cy44NjQtLjQ2Ny44NjQtLjYtLjA4My0uNzgtMS4wMDgtMS4zNzQiLz4KPC9zdmc+Cg==) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNKT1lfX2EpIj4KICAgICAgICA8cGF0aCBmaWxsPSIjRkZGRkZEIiBkPSJNMjQgMEgwdjI0aDI0eiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik00IDE3LjQ5OXYyLjIzNGgxNlYxNy41YzAtLjUzNC0uNDE2LS45NjYtLjkyOC0uOTY2SDQuOTI4Yy0uNTEyIDAtLjkyOC40MzItLjkyOC45NjZtNi43NTUtNi42NTVoMi40OXY0Ljk3N2gtMi40OXoiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNOC4yNjcgMTUuMzV2MS4xODVoNy40NjZWMTUuMzVhLjQzLjQzIDAgMCAwLS40MzItLjQxNkg4LjY5M2EuNDI3LjQyNyAwIDAgMC0uNDMyLjQxNnpNMTIgMTEuNzMzYTMuNzM0IDMuNzM0IDAgMSAwIDAtNy40NjcgMy43MzQgMy43MzQgMCAwIDAgMCA3LjQ2NyIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xNC4wMzcgNS40NjhhMi43IDIuNyAwIDAgMC0xLjQxOS0uNDg2Yy0uMjQ1LjAxNi0uNzMuMTQtLjczLjQ4NiAwIC40MzcuNDI2Ljg2NC42OTMgMS4wOTguMjYxLjIzNS44OS42NTYgMS41ODQuNjU2LjY5MyAwIC43NjgtLjQxNi43NjgtLjUzM3MtLjA3NS0uNjkzLS44OTYtMS4yMjEiLz4KICAgIDwvZz4KICAgIDxkZWZzPgogICAgICAgIDxjbGlwUGF0aCBpZD0iSk9ZX19hIj4KICAgICAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTAgMGgyNHYyNEgweiIvPgogICAgICAgIDwvY2xpcFBhdGg+CiAgICA8L2RlZnM+Cjwvc3ZnPgo=)
 * @see https://web3icons.io/tokens/JOY
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenJOY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenJOY', __iconNode);
;
}),
];

//# sourceMappingURL=1qqr_%40web3icons_react_dist_0qhj69w._.js.map