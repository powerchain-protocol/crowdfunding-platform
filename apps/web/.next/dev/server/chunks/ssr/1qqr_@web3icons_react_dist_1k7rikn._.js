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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenBEL.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenBEL
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-ssr] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#00B2FA',
                d: 'M6.22 3a2.323 2.323 0 0 0-2.322 2.323v6.967c0 1.283.765 2.165 2.129 2.165h.545v4.222A2.323 2.323 0 0 0 8.895 21h5.454a5.806 5.806 0 0 0 2.763-10.915A5.807 5.807 0 0 0 11.447 3zm10.892 7.085c-.477-.259-1.54-.54-2.903-.54H9.124c-1.283 0-2.552.882-2.552 2.165v2.745h4.875c2.767 0 5.082-1.779 5.665-4.37',
                fillRule: 'evenodd',
                clipRule: 'evenodd'
            }
        ],
        [
            'path',
            {
                fill: '#63CAAB',
                d: 'M3.844 5.323C3.844 4.04 4.937 3 6.22 3h5.226a5.807 5.807 0 0 1 5.664 7.088s-1.134-.543-2.902-.543h-1.559l-.084.001c-.274.004-1.858.025-3.442.011-1.452-.012-2.551.992-2.551 2.153v2.745h-.819c-1.09 0-1.909-.882-1.909-2.165z'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M6.22 3a2.323 2.323 0 0 0-2.322 2.323v6.967c0 1.283.765 2.165 2.129 2.165h.545v4.222A2.323 2.323 0 0 0 8.895 21h5.454a5.806 5.806 0 0 0 2.763-10.915A5.807 5.807 0 0 0 11.447 3zm10.892 7.085c-.477-.259-1.54-.54-2.903-.54H9.124c-1.283 0-2.552.882-2.552 2.165v2.745h4.875c2.767 0 5.082-1.779 5.665-4.37',
                fillRule: 'evenodd',
                clipRule: 'evenodd'
            }
        ],
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M3.844 5.323C3.844 4.04 4.937 3 6.22 3h5.226a5.807 5.807 0 0 1 5.664 7.088s-1.134-.543-2.902-.543h-1.559l-.084.001c-.274.004-1.858.025-3.442.011-1.452-.012-2.551.992-2.551 2.153v2.745h-.819c-1.09 0-1.909-.882-1.909-2.165z'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#BEL__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#00B2FA',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M6.863 4a2.065 2.065 0 0 0-2.065 2.064v6.194c0 1.14.68 1.924 1.893 1.924h.485v3.754A2.065 2.065 0 0 0 9.24 20h4.849a5.161 5.161 0 0 0 2.455-9.702q.124-.55.125-1.137A5.16 5.16 0 0 0 11.51 4zm9.68 6.298c-.423-.23-1.367-.48-2.58-.48h-4.52c-1.14 0-2.267.784-2.267 1.924v2.44h4.332c2.46 0 4.518-1.58 5.036-3.884',
                        fillRule: 'evenodd',
                        clipRule: 'evenodd'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M4.75 6.064C4.75 4.924 5.721 4 6.862 4h4.645a5.162 5.162 0 0 1 5.035 6.3s-1.008-.482-2.58-.482h-1.46c-.243.004-1.651.023-3.06.01-1.29-.01-2.268.882-2.268 1.914v2.44h-.727c-.97 0-1.697-.784-1.697-1.924z'
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
                        id: 'BEL__a'
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
 * @component @name TokenBEL
 * @description Web3Icon for TokenBEL
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiMwMEIyRkEiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTYuMjIgM2EyLjMyMyAyLjMyMyAwIDAgMC0yLjMyMiAyLjMyM3Y2Ljk2N2MwIDEuMjgzLjc2NSAyLjE2NSAyLjEyOSAyLjE2NWguNTQ1djQuMjIyQTIuMzIzIDIuMzIzIDAgMCAwIDguODk1IDIxaDUuNDU0YTUuODA2IDUuODA2IDAgMCAwIDIuNzYzLTEwLjkxNUE1LjgwNyA1LjgwNyAwIDAgMCAxMS40NDcgM3ptMTAuODkyIDcuMDg1Yy0uNDc3LS4yNTktMS41NC0uNTQtMi45MDMtLjU0SDkuMTI0Yy0xLjI4MyAwLTIuNTUyLjg4Mi0yLjU1MiAyLjE2NXYyLjc0NWg0Ljg3NWMyLjc2NyAwIDUuMDgyLTEuNzc5IDUuNjY1LTQuMzciIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgogICAgPHBhdGggZmlsbD0iIzYzQ0FBQiIgZD0iTTMuODQ0IDUuMzIzQzMuODQ0IDQuMDQgNC45MzcgMyA2LjIyIDNoNS4yMjZhNS44MDcgNS44MDcgMCAwIDEgNS42NjQgNy4wODhzLTEuMTM0LS41NDMtMi45MDItLjU0M2gtMS41NTlsLS4wODQuMDAxYy0uMjc0LjAwNC0xLjg1OC4wMjUtMy40NDIuMDExLTEuNDUyLS4wMTItMi41NTEuOTkyLTIuNTUxIDIuMTUzdjIuNzQ1aC0uODE5Yy0xLjA5IDAtMS45MDktLjg4Mi0xLjkwOS0yLjE2NXoiLz4KPC9zdmc+Cg==) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTYuMjIgM2EyLjMyMyAyLjMyMyAwIDAgMC0yLjMyMiAyLjMyM3Y2Ljk2N2MwIDEuMjgzLjc2NSAyLjE2NSAyLjEyOSAyLjE2NWguNTQ1djQuMjIyQTIuMzIzIDIuMzIzIDAgMCAwIDguODk1IDIxaDUuNDU0YTUuODA2IDUuODA2IDAgMCAwIDIuNzYzLTEwLjkxNUE1LjgwNyA1LjgwNyAwIDAgMCAxMS40NDcgM3ptMTAuODkyIDcuMDg1Yy0uNDc3LS4yNTktMS41NC0uNTQtMi45MDMtLjU0SDkuMTI0Yy0xLjI4MyAwLTIuNTUyLjg4Mi0yLjU1MiAyLjE2NXYyLjc0NWg0Ljg3NWMyLjc2NyAwIDUuMDgyLTEuNzc5IDUuNjY1LTQuMzciIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgogICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTMuODQ0IDUuMzIzQzMuODQ0IDQuMDQgNC45MzcgMyA2LjIyIDNoNS4yMjZhNS44MDcgNS44MDcgMCAwIDEgNS42NjQgNy4wODhzLTEuMTM0LS41NDMtMi45MDItLjU0M2gtMS41NTlsLS4wODQuMDAxYy0uMjc0LjAwNC0xLjg1OC4wMjUtMy40NDIuMDExLTEuNDUyLS4wMTItMi41NTEuOTkyLTIuNTUxIDIuMTUzdjIuNzQ1aC0uODE5Yy0xLjA5IDAtMS45MDktLjg4Mi0xLjkwOS0yLjE2NXoiLz4KPC9zdmc+Cg==) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNCRUxfX2EpIj4KICAgICAgICA8cGF0aCBmaWxsPSIjMDBCMkZBIiBkPSJNMjQgMEgwdjI0aDI0eiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTYuODYzIDRhMi4wNjUgMi4wNjUgMCAwIDAtMi4wNjUgMi4wNjR2Ni4xOTRjMCAxLjE0LjY4IDEuOTI0IDEuODkzIDEuOTI0aC40ODV2My43NTRBMi4wNjUgMi4wNjUgMCAwIDAgOS4yNCAyMGg0Ljg0OWE1LjE2MSA1LjE2MSAwIDAgMCAyLjQ1NS05LjcwMnEuMTI0LS41NS4xMjUtMS4xMzdBNS4xNiA1LjE2IDAgMCAwIDExLjUxIDR6bTkuNjggNi4yOThjLS40MjMtLjIzLTEuMzY3LS40OC0yLjU4LS40OGgtNC41MmMtMS4xNCAwLTIuMjY3Ljc4NC0yLjI2NyAxLjkyNHYyLjQ0aDQuMzMyYzIuNDYgMCA0LjUxOC0xLjU4IDUuMDM2LTMuODg0IiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNNC43NSA2LjA2NEM0Ljc1IDQuOTI0IDUuNzIxIDQgNi44NjIgNGg0LjY0NWE1LjE2MiA1LjE2MiAwIDAgMSA1LjAzNSA2LjNzLTEuMDA4LS40ODItMi41OC0uNDgyaC0xLjQ2Yy0uMjQzLjAwNC0xLjY1MS4wMjMtMy4wNi4wMS0xLjI5LS4wMS0yLjI2OC44ODItMi4yNjggMS45MTR2Mi40NGgtLjcyN2MtLjk3IDAtMS42OTctLjc4NC0xLjY5Ny0xLjkyNHoiLz4KICAgIDwvZz4KICAgIDxkZWZzPgogICAgICAgIDxjbGlwUGF0aCBpZD0iQkVMX19hIj4KICAgICAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTAgMGgyNHYyNEgweiIvPgogICAgICAgIDwvY2xpcFBhdGg+CiAgICA8L2RlZnM+Cjwvc3ZnPgo=)
 * @see https://web3icons.io/tokens/BEL
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenBEL = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenBEL', __iconNode);
;
}),
];

//# sourceMappingURL=1qqr_%40web3icons_react_dist_1k7rikn._.js.map