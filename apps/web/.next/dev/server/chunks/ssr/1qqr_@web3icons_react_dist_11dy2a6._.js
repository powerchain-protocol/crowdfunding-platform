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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenINT.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenINT
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-ssr] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#DA1B28',
                d: 'M12 3 6.938 5.503 12 8.063l5.063-2.56zM9.187 7.303v5.411L7.5 14.33l1.687 1.592V21h5.626v-5.08l1.687-1.59-1.687-1.367v-5.66L12 10.06zm5.063 9.107v4.072h-4.5zm0-7.718L8.4 14.29h-.006l.535.602v-.405l.821-.703v5.923l5.878-5.417-.596-.59v.444l-.782.675zm-4.5.04v3.515l1.693-1.648zM12 3.552 8.051 5.496l3.95 1.992 3.953-1.992z',
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
                d: 'M12 3 6.938 5.503 12 8.063l5.063-2.56zM9.187 7.303v5.411L7.5 14.33l1.687 1.592V21h5.626v-5.08l1.687-1.59-1.687-1.367v-5.66L12 10.06zm5.063 9.107v4.072h-4.5zm0-7.718L8.4 14.29h-.006l.535.602v-.405l.821-.703v5.923l5.878-5.417-.596-.59v.444l-.782.675zm-4.5.04v3.515l1.693-1.648zM12 3.552 8.051 5.496l3.95 1.992 3.953-1.992z',
                fillRule: 'evenodd',
                clipRule: 'evenodd'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#INT__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#DA1B28',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M12 4 7.5 6.225 12 8.5l4.5-2.275zM9.5 7.825v4.81L8 14.07l1.5 1.415V20h5v-4.515L16 14.07l-1.5-1.215v-5.03l-2.5 2.45zM14 15.92v3.62h-4zm0-6.86-5.2 4.975h-.005l.475.535v-.36l.73-.625v5.265l5.225-4.815-.53-.525v.395l-.695.6zm-4 .035v3.125l1.505-1.465zm2-4.605L8.49 6.22 12 7.99l3.515-1.77z',
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
                        id: 'INT__a'
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
 * @component @name TokenINT
 * @description Web3Icon for TokenINT
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNEQTFCMjgiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTEyIDMgNi45MzggNS41MDMgMTIgOC4wNjNsNS4wNjMtMi41NnpNOS4xODcgNy4zMDN2NS40MTFMNy41IDE0LjMzbDEuNjg3IDEuNTkyVjIxaDUuNjI2di01LjA4bDEuNjg3LTEuNTktMS42ODctMS4zNjd2LTUuNjZMMTIgMTAuMDZ6bTUuMDYzIDkuMTA3djQuMDcyaC00LjV6bTAtNy43MThMOC40IDE0LjI5aC0uMDA2bC41MzUuNjAydi0uNDA1bC44MjEtLjcwM3Y1LjkyM2w1Ljg3OC01LjQxNy0uNTk2LS41OXYuNDQ0bC0uNzgyLjY3NXptLTQuNS4wNHYzLjUxNWwxLjY5My0xLjY0OHpNMTIgMy41NTIgOC4wNTEgNS40OTZsMy45NSAxLjk5MiAzLjk1My0xLjk5MnoiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4K) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTEyIDMgNi45MzggNS41MDMgMTIgOC4wNjNsNS4wNjMtMi41NnpNOS4xODcgNy4zMDN2NS40MTFMNy41IDE0LjMzbDEuNjg3IDEuNTkyVjIxaDUuNjI2di01LjA4bDEuNjg3LTEuNTktMS42ODctMS4zNjd2LTUuNjZMMTIgMTAuMDZ6bTUuMDYzIDkuMTA3djQuMDcyaC00LjV6bTAtNy43MThMOC40IDE0LjI5aC0uMDA2bC41MzUuNjAydi0uNDA1bC44MjEtLjcwM3Y1LjkyM2w1Ljg3OC01LjQxNy0uNTk2LS41OXYuNDQ0bC0uNzgyLjY3NXptLTQuNS4wNHYzLjUxNWwxLjY5My0xLjY0OHpNMTIgMy41NTIgOC4wNTEgNS40OTZsMy45NSAxLjk5MiAzLjk1My0xLjk5MnoiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4K) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNJTlRfX2EpIj4KICAgICAgICA8cGF0aCBmaWxsPSIjREExQjI4IiBkPSJNMjQgMEgwdjI0aDI0eiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTEyIDQgNy41IDYuMjI1IDEyIDguNWw0LjUtMi4yNzV6TTkuNSA3LjgyNXY0LjgxTDggMTQuMDdsMS41IDEuNDE1VjIwaDV2LTQuNTE1TDE2IDE0LjA3bC0xLjUtMS4yMTV2LTUuMDNsLTIuNSAyLjQ1ek0xNCAxNS45MnYzLjYyaC00em0wLTYuODYtNS4yIDQuOTc1aC0uMDA1bC40NzUuNTM1di0uMzZsLjczLS42MjV2NS4yNjVsNS4yMjUtNC44MTUtLjUzLS41MjV2LjM5NWwtLjY5NS42em0tNCAuMDM1djMuMTI1bDEuNTA1LTEuNDY1em0yLTQuNjA1TDguNDkgNi4yMiAxMiA3Ljk5bDMuNTE1LTEuNzd6IiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KICAgIDwvZz4KICAgIDxkZWZzPgogICAgICAgIDxjbGlwUGF0aCBpZD0iSU5UX19hIj4KICAgICAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTAgMGgyNHYyNEgweiIvPgogICAgICAgIDwvY2xpcFBhdGg+CiAgICA8L2RlZnM+Cjwvc3ZnPgo=)
 * @see https://web3icons.io/tokens/INT
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenINT = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenINT', __iconNode);
;
}),
];

//# sourceMappingURL=1qqr_%40web3icons_react_dist_11dy2a6._.js.map