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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenPASG.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenPASG
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-ssr] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#000',
                d: 'M20.439 12A8.439 8.439 0 1 1 3.56 12a8.439 8.439 0 0 1 16.878 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0m-2.35 0a6.65 6.65 0 1 1-13.3 0 6.65 6.65 0 0 1 13.3 0m1.291 0a7.941 7.941 0 1 1-15.883 0 7.941 7.941 0 0 1 15.883 0M9.088 9.353a1.324 1.324 0 0 0-1.323 1.323v2.647a1.323 1.323 0 1 0 2.647 0v-1.127h-.953l.953-1.075v-.445a1.324 1.324 0 0 0-1.324-1.323m4.5 1.323a1.324 1.324 0 0 1 2.647 0v.445l-.953 1.08h.953v1.122a1.323 1.323 0 1 1-2.647 0z',
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
                d: 'M20.439 12A8.439 8.439 0 1 1 3.56 12a8.439 8.439 0 0 1 16.878 0M21 12a9 9 0 1 1-17.999 0A9 9 0 0 1 21 12m-2.35 0a6.65 6.65 0 1 1-13.3 0 6.65 6.65 0 0 1 13.3 0m1.291 0a7.942 7.942 0 1 1-15.883 0 7.942 7.942 0 0 1 15.883 0M9.088 9.353a1.324 1.324 0 0 0-1.323 1.323v2.647a1.323 1.323 0 1 0 2.647 0v-1.127h-.953l.953-1.075v-.445a1.323 1.323 0 0 0-1.324-1.323m4.5 1.323a1.324 1.324 0 0 1 2.647 0v.445l-.953 1.08h.953v1.122a1.323 1.323 0 1 1-2.647 0z',
                fillRule: 'evenodd',
                clipRule: 'evenodd'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#PASG__a)'
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
                        fill: '#fff',
                        d: 'M19.501 12A7.5 7.5 0 1 1 4.5 12a7.5 7.5 0 0 1 15.002 0M20 12a8 8 0 1 1-16 0 8 8 0 0 1 16 0m-2.09 0a5.91 5.91 0 1 1-11.82 0 5.91 5.91 0 0 1 11.822 0m1.149 0a7.06 7.06 0 1 1-14.12 0 7.06 7.06 0 0 1 14.12 0M9.412 9.647a1.177 1.177 0 0 0-1.177 1.176v2.354a1.176 1.176 0 1 0 2.353 0v-1.003h-.847l.847-.955v-.396a1.176 1.176 0 0 0-1.176-1.176m4 1.176a1.177 1.177 0 0 1 2.353 0v.396l-.847.96h.847v.998a1.176 1.176 0 1 1-2.353 0z',
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
                        id: 'PASG__a'
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
 * @component @name TokenPASG
 * @description Web3Icon for TokenPASG
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiMwMDAiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTIwLjQzOSAxMkE4LjQzOSA4LjQzOSAwIDEgMSAzLjU2IDEyYTguNDM5IDguNDM5IDAgMCAxIDE2Ljg3OCAwTTIxIDEyYTkgOSAwIDEgMS0xOCAwIDkgOSAwIDAgMSAxOCAwbS0yLjM1IDBhNi42NSA2LjY1IDAgMSAxLTEzLjMgMCA2LjY1IDYuNjUgMCAwIDEgMTMuMyAwbTEuMjkxIDBhNy45NDEgNy45NDEgMCAxIDEtMTUuODgzIDAgNy45NDEgNy45NDEgMCAwIDEgMTUuODgzIDBNOS4wODggOS4zNTNhMS4zMjQgMS4zMjQgMCAwIDAtMS4zMjMgMS4zMjN2Mi42NDdhMS4zMjMgMS4zMjMgMCAxIDAgMi42NDcgMHYtMS4xMjdoLS45NTNsLjk1My0xLjA3NXYtLjQ0NWExLjMyNCAxLjMyNCAwIDAgMC0xLjMyNC0xLjMyM200LjUgMS4zMjNhMS4zMjQgMS4zMjQgMCAwIDEgMi42NDcgMHYuNDQ1bC0uOTUzIDEuMDhoLjk1M3YxLjEyMmExLjMyMyAxLjMyMyAwIDEgMS0yLjY0NyAweiIgY2xpcC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo=) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTIwLjQzOSAxMkE4LjQzOSA4LjQzOSAwIDEgMSAzLjU2IDEyYTguNDM5IDguNDM5IDAgMCAxIDE2Ljg3OCAwTTIxIDEyYTkgOSAwIDEgMS0xNy45OTkgMEE5IDkgMCAwIDEgMjEgMTJtLTIuMzUgMGE2LjY1IDYuNjUgMCAxIDEtMTMuMyAwIDYuNjUgNi42NSAwIDAgMSAxMy4zIDBtMS4yOTEgMGE3Ljk0MiA3Ljk0MiAwIDEgMS0xNS44ODMgMCA3Ljk0MiA3Ljk0MiAwIDAgMSAxNS44ODMgME05LjA4OCA5LjM1M2ExLjMyNCAxLjMyNCAwIDAgMC0xLjMyMyAxLjMyM3YyLjY0N2ExLjMyMyAxLjMyMyAwIDEgMCAyLjY0NyAwdi0xLjEyN2gtLjk1M2wuOTUzLTEuMDc1di0uNDQ1YTEuMzIzIDEuMzIzIDAgMCAwLTEuMzI0LTEuMzIzbTQuNSAxLjMyM2ExLjMyNCAxLjMyNCAwIDAgMSAyLjY0NyAwdi40NDVsLS45NTMgMS4wOGguOTUzdjEuMTIyYTEuMzIzIDEuMzIzIDAgMSAxLTIuNjQ3IDB6IiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+Cg==) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNQQVNHX19hKSI+CiAgICAgICAgPHBhdGggZmlsbD0iIzAwMCIgZD0iTTI0IDBIMHYyNGgyNHoiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xOS41MDEgMTJBNy41IDcuNSAwIDEgMSA0LjUgMTJhNy41IDcuNSAwIDAgMSAxNS4wMDIgME0yMCAxMmE4IDggMCAxIDEtMTYgMCA4IDggMCAwIDEgMTYgMG0tMi4wOSAwYTUuOTEgNS45MSAwIDEgMS0xMS44MiAwIDUuOTEgNS45MSAwIDAgMSAxMS44MjIgMG0xLjE0OSAwYTcuMDYgNy4wNiAwIDEgMS0xNC4xMiAwIDcuMDYgNy4wNiAwIDAgMSAxNC4xMiAwTTkuNDEyIDkuNjQ3YTEuMTc3IDEuMTc3IDAgMCAwLTEuMTc3IDEuMTc2djIuMzU0YTEuMTc2IDEuMTc2IDAgMSAwIDIuMzUzIDB2LTEuMDAzaC0uODQ3bC44NDctLjk1NXYtLjM5NmExLjE3NiAxLjE3NiAwIDAgMC0xLjE3Ni0xLjE3Nm00IDEuMTc2YTEuMTc3IDEuMTc3IDAgMCAxIDIuMzUzIDB2LjM5NmwtLjg0Ny45NmguODQ3di45OThhMS4xNzYgMS4xNzYgMCAxIDEtMi4zNTMgMHoiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgogICAgPC9nPgogICAgPGRlZnM+CiAgICAgICAgPGNsaXBQYXRoIGlkPSJQQVNHX19hIj4KICAgICAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTAgMGgyNHYyNEgweiIvPgogICAgICAgIDwvY2xpcFBhdGg+CiAgICA8L2RlZnM+Cjwvc3ZnPgo=)
 * @see https://web3icons.io/tokens/PASG
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenPASG = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenPASG', __iconNode);
;
}),
];

//# sourceMappingURL=1qqr_%40web3icons_react_dist_0fk066i._.js.map