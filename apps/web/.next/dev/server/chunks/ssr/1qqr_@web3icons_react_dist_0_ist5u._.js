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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenSHROOM.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenSHROOM
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-ssr] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#A1F931',
                d: 'm8.409 14.437 2.532-9.678c-1.22-.257-3.863.026-5.012 3.45-1.055 3.149 1.086 5.783 2.48 6.228m7.182-4.874-2.532 9.678c1.22.257 3.863-.026 5.012-3.45 1.055-3.149-1.086-5.783-2.48-6.228m4.307-.375H10.94c.91-3.728 3.296-4.552 4.375-4.498H21zm-6.84 5.625H4.104L3 19.31h5.684c1.08.054 3.465-.77 4.375-4.497',
                fillRule: 'evenodd',
                clipRule: 'evenodd'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'm8.409 14.437 2.532-9.678c-1.22-.257-3.863.026-5.012 3.45-1.055 3.149 1.086 5.783 2.48 6.228m7.182-4.874-2.532 9.678c1.22.257 3.863-.026 5.012-3.45 1.055-3.149-1.086-5.783-2.48-6.228m4.307-.375H10.94c.91-3.728 3.296-4.552 4.375-4.498H21zm-6.84 5.625H4.104L3 19.31h5.684c1.08.054 3.465-.77 4.375-4.497',
                fillRule: 'evenodd',
                clipRule: 'evenodd'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#SHROOM__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#A1F931',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#000',
                        d: 'm8.808 14.167 2.251-8.603c-1.084-.229-3.434.023-4.455 3.066-.938 2.799.965 5.14 2.204 5.537m6.384-4.333-2.251 8.603c1.084.228 3.434-.024 4.455-3.067.938-2.799-.965-5.14-2.204-5.536M19.02 9.5h-7.961c.808-3.313 2.93-4.045 3.888-3.998H20zm-6.079 5H4.98L4 18.498h5.052c.96.048 3.08-.685 3.889-3.998',
                        fillRule: 'evenodd',
                        clipRule: 'evenodd'
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
                        id: 'SHROOM__a'
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
 * @component @name TokenSHROOM
 * @description Web3Icon for TokenSHROOM
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNBMUY5MzEiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0ibTguNDA5IDE0LjQzNyAyLjUzMi05LjY3OGMtMS4yMi0uMjU3LTMuODYzLjAyNi01LjAxMiAzLjQ1LTEuMDU1IDMuMTQ5IDEuMDg2IDUuNzgzIDIuNDggNi4yMjhtNy4xODItNC44NzQtMi41MzIgOS42NzhjMS4yMi4yNTcgMy44NjMtLjAyNiA1LjAxMi0zLjQ1IDEuMDU1LTMuMTQ5LTEuMDg2LTUuNzgzLTIuNDgtNi4yMjhtNC4zMDctLjM3NUgxMC45NGMuOTEtMy43MjggMy4yOTYtNC41NTIgNC4zNzUtNC40OThIMjF6bS02Ljg0IDUuNjI1SDQuMTA0TDMgMTkuMzFoNS42ODRjMS4wOC4wNTQgMy40NjUtLjc3IDQuMzc1LTQuNDk3IiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+Cg==) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0ibTguNDA5IDE0LjQzNyAyLjUzMi05LjY3OGMtMS4yMi0uMjU3LTMuODYzLjAyNi01LjAxMiAzLjQ1LTEuMDU1IDMuMTQ5IDEuMDg2IDUuNzgzIDIuNDggNi4yMjhtNy4xODItNC44NzQtMi41MzIgOS42NzhjMS4yMi4yNTcgMy44NjMtLjAyNiA1LjAxMi0zLjQ1IDEuMDU1LTMuMTQ5LTEuMDg2LTUuNzgzLTIuNDgtNi4yMjhtNC4zMDctLjM3NUgxMC45NGMuOTEtMy43MjggMy4yOTYtNC41NTIgNC4zNzUtNC40OThIMjF6bS02Ljg0IDUuNjI1SDQuMTA0TDMgMTkuMzFoNS42ODRjMS4wOC4wNTQgMy40NjUtLjc3IDQuMzc1LTQuNDk3IiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+Cg==) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNTSFJPT01fX2EpIj4KICAgICAgICA8cGF0aCBmaWxsPSIjQTFGOTMxIiBkPSJNMjQgMEgwdjI0aDI0eiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiMwMDAiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0ibTguODA4IDE0LjE2NyAyLjI1MS04LjYwM2MtMS4wODQtLjIyOS0zLjQzNC4wMjMtNC40NTUgMy4wNjYtLjkzOCAyLjc5OS45NjUgNS4xNCAyLjIwNCA1LjUzN202LjM4NC00LjMzMy0yLjI1MSA4LjYwM2MxLjA4NC4yMjggMy40MzQtLjAyNCA0LjQ1NS0zLjA2Ny45MzgtMi43OTktLjk2NS01LjE0LTIuMjA0LTUuNTM2TTE5LjAyIDkuNWgtNy45NjFjLjgwOC0zLjMxMyAyLjkzLTQuMDQ1IDMuODg4LTMuOTk4SDIwem0tNi4wNzkgNUg0Ljk4TDQgMTguNDk4aDUuMDUyYy45Ni4wNDggMy4wOC0uNjg1IDMuODg5LTMuOTk4IiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KICAgIDwvZz4KICAgIDxkZWZzPgogICAgICAgIDxjbGlwUGF0aCBpZD0iU0hST09NX19hIj4KICAgICAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTAgMGgyNHYyNEgweiIvPgogICAgICAgIDwvY2xpcFBhdGg+CiAgICA8L2RlZnM+Cjwvc3ZnPgo=)
 * @see https://web3icons.io/tokens/SHROOM
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenSHROOM = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenSHROOM', __iconNode);
;
}),
];

//# sourceMappingURL=1qqr_%40web3icons_react_dist_0_ist5u._.js.map