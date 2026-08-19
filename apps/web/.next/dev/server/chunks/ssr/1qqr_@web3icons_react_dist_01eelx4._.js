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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/networks/NetworkBob.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>NetworkBob
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-ssr] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#F25D00',
                d: 'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18'
            }
        ],
        [
            'path',
            {
                fill: '#fff',
                d: 'M8.618 10.124v2.744a.17.17 0 0 0 .171.171h2.744a.17.17 0 0 0 .171-.17v-2.745a.17.17 0 0 0-.17-.17H8.788a.17.17 0 0 0-.17.17m0 3.856v2.744a.17.17 0 0 0 .171.171h2.744a.17.17 0 0 0 .171-.17V13.98a.17.17 0 0 0-.17-.17H8.788a.17.17 0 0 0-.17.17m3.856 0v2.745c0 .094.077.17.171.17h2.744a.17.17 0 0 0 .171-.17V13.98a.17.17 0 0 0-.17-.17h-2.745a.17.17 0 0 0-.17.17m-.001-3.857v2.744a.17.17 0 0 0 .171.171h2.744a.17.17 0 0 0 .171-.17v-2.745a.17.17 0 0 0-.17-.17h-2.745a.17.17 0 0 0-.17.17m-.942-4.027H8.79a.17.17 0 0 0-.17.17v2.745a.17.17 0 0 0 .17.171h2.744a.17.17 0 0 0 .171-.17V6.266a.17.17 0 0 0-.17-.171'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0M8.79 6.096h2.744a.17.17 0 0 1 .17.17v2.745a.17.17 0 0 1-.17.171H8.789a.17.17 0 0 1-.17-.17V6.266a.17.17 0 0 1 .17-.171m3.685 4.027v2.744a.17.17 0 0 0 .17.171h2.745a.17.17 0 0 0 .17-.17v-2.745a.17.17 0 0 0-.17-.17h-2.744a.17.17 0 0 0-.171.17m-3.857.001v2.744a.17.17 0 0 0 .171.171h2.745a.17.17 0 0 0 .17-.17v-2.745a.17.17 0 0 0-.17-.17H8.789a.17.17 0 0 0-.17.17m0 3.856v2.744a.17.17 0 0 0 .171.171h2.745a.17.17 0 0 0 .17-.17V13.98a.17.17 0 0 0-.17-.17H8.789a.17.17 0 0 0-.17.17m3.857 2.745V13.98a.17.17 0 0 1 .17-.17h2.745a.17.17 0 0 1 .17.17v2.745a.17.17 0 0 1-.17.17h-2.744a.17.17 0 0 1-.171-.17',
                fillRule: 'evenodd',
                clipRule: 'evenodd'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#bob__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#F25D00',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M20 12a8 8 0 1 1-16 0 8 8 0 0 1 16 0M9.146 6.752h2.44c.083 0 .151.068.151.152v2.44a.15.15 0 0 1-.152.151H9.146a.15.15 0 0 1-.152-.152V6.904c0-.084.068-.152.152-.152m3.276 3.58v2.439c0 .084.068.152.152.152h2.44a.15.15 0 0 0 .151-.152v-2.44a.15.15 0 0 0-.152-.151h-2.44a.15.15 0 0 0-.151.152m-3.428 0v2.44c0 .084.068.152.152.152h2.44a.15.15 0 0 0 .151-.152v-2.44a.15.15 0 0 0-.152-.151H9.146a.15.15 0 0 0-.152.152m0 3.428v2.44c0 .084.068.152.152.152h2.44a.15.15 0 0 0 .151-.152v-2.44a.15.15 0 0 0-.152-.152H9.146a.15.15 0 0 0-.152.152m3.428 2.44v-2.44c0-.083.068-.152.152-.152h2.44c.083 0 .151.069.151.152v2.44a.15.15 0 0 1-.152.152h-2.44a.15.15 0 0 1-.151-.152',
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
                        id: 'bob__a'
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
 * @component @name NetworkBob
 * @description Web3Icon for NetworkBob
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNGMjVEMDAiIGQ9Ik0xMiAyMWE5IDkgMCAxIDAgMC0xOCA5IDkgMCAwIDAgMCAxOCIvPgogICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTguNjE4IDEwLjEyNHYyLjc0NGEuMTcuMTcgMCAwIDAgLjE3MS4xNzFoMi43NDRhLjE3LjE3IDAgMCAwIC4xNzEtLjE3di0yLjc0NWEuMTcuMTcgMCAwIDAtLjE3LS4xN0g4Ljc4OGEuMTcuMTcgMCAwIDAtLjE3LjE3bTAgMy44NTZ2Mi43NDRhLjE3LjE3IDAgMCAwIC4xNzEuMTcxaDIuNzQ0YS4xNy4xNyAwIDAgMCAuMTcxLS4xN1YxMy45OGEuMTcuMTcgMCAwIDAtLjE3LS4xN0g4Ljc4OGEuMTcuMTcgMCAwIDAtLjE3LjE3bTMuODU2IDB2Mi43NDVjMCAuMDk0LjA3Ny4xNy4xNzEuMTdoMi43NDRhLjE3LjE3IDAgMCAwIC4xNzEtLjE3VjEzLjk4YS4xNy4xNyAwIDAgMC0uMTctLjE3aC0yLjc0NWEuMTcuMTcgMCAwIDAtLjE3LjE3bS0uMDAxLTMuODU3djIuNzQ0YS4xNy4xNyAwIDAgMCAuMTcxLjE3MWgyLjc0NGEuMTcuMTcgMCAwIDAgLjE3MS0uMTd2LTIuNzQ1YS4xNy4xNyAwIDAgMC0uMTctLjE3aC0yLjc0NWEuMTcuMTcgMCAwIDAtLjE3LjE3bS0uOTQyLTQuMDI3SDguNzlhLjE3LjE3IDAgMCAwLS4xNy4xN3YyLjc0NWEuMTcuMTcgMCAwIDAgLjE3LjE3MWgyLjc0NGEuMTcuMTcgMCAwIDAgLjE3MS0uMTdWNi4yNjZhLjE3LjE3IDAgMCAwLS4xNy0uMTcxIi8+Cjwvc3ZnPgo=) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTIxIDEyYTkgOSAwIDEgMS0xOCAwIDkgOSAwIDAgMSAxOCAwTTguNzkgNi4wOTZoMi43NDRhLjE3LjE3IDAgMCAxIC4xNy4xN3YyLjc0NWEuMTcuMTcgMCAwIDEtLjE3LjE3MUg4Ljc4OWEuMTcuMTcgMCAwIDEtLjE3LS4xN1Y2LjI2NmEuMTcuMTcgMCAwIDEgLjE3LS4xNzFtMy42ODUgNC4wMjd2Mi43NDRhLjE3LjE3IDAgMCAwIC4xNy4xNzFoMi43NDVhLjE3LjE3IDAgMCAwIC4xNy0uMTd2LTIuNzQ1YS4xNy4xNyAwIDAgMC0uMTctLjE3aC0yLjc0NGEuMTcuMTcgMCAwIDAtLjE3MS4xN20tMy44NTcuMDAxdjIuNzQ0YS4xNy4xNyAwIDAgMCAuMTcxLjE3MWgyLjc0NWEuMTcuMTcgMCAwIDAgLjE3LS4xN3YtMi43NDVhLjE3LjE3IDAgMCAwLS4xNy0uMTdIOC43ODlhLjE3LjE3IDAgMCAwLS4xNy4xN20wIDMuODU2djIuNzQ0YS4xNy4xNyAwIDAgMCAuMTcxLjE3MWgyLjc0NWEuMTcuMTcgMCAwIDAgLjE3LS4xN1YxMy45OGEuMTcuMTcgMCAwIDAtLjE3LS4xN0g4Ljc4OWEuMTcuMTcgMCAwIDAtLjE3LjE3bTMuODU3IDIuNzQ1VjEzLjk4YS4xNy4xNyAwIDAgMSAuMTctLjE3aDIuNzQ1YS4xNy4xNyAwIDAgMSAuMTcuMTd2Mi43NDVhLjE3LjE3IDAgMCAxLS4xNy4xN2gtMi43NDRhLjE3LjE3IDAgMCAxLS4xNzEtLjE3IiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+Cg==) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNib2JfX2EpIj4KICAgICAgICA8cGF0aCBmaWxsPSIjRjI1RDAwIiBkPSJNMjQgMEgwdjI0aDI0eiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTIwIDEyYTggOCAwIDEgMS0xNiAwIDggOCAwIDAgMSAxNiAwTTkuMTQ2IDYuNzUyaDIuNDRjLjA4MyAwIC4xNTEuMDY4LjE1MS4xNTJ2Mi40NGEuMTUuMTUgMCAwIDEtLjE1Mi4xNTFIOS4xNDZhLjE1LjE1IDAgMCAxLS4xNTItLjE1MlY2LjkwNGMwLS4wODQuMDY4LS4xNTIuMTUyLS4xNTJtMy4yNzYgMy41OHYyLjQzOWMwIC4wODQuMDY4LjE1Mi4xNTIuMTUyaDIuNDRhLjE1LjE1IDAgMCAwIC4xNTEtLjE1MnYtMi40NGEuMTUuMTUgMCAwIDAtLjE1Mi0uMTUxaC0yLjQ0YS4xNS4xNSAwIDAgMC0uMTUxLjE1Mm0tMy40MjggMHYyLjQ0YzAgLjA4NC4wNjguMTUyLjE1Mi4xNTJoMi40NGEuMTUuMTUgMCAwIDAgLjE1MS0uMTUydi0yLjQ0YS4xNS4xNSAwIDAgMC0uMTUyLS4xNTFIOS4xNDZhLjE1LjE1IDAgMCAwLS4xNTIuMTUybTAgMy40Mjh2Mi40NGMwIC4wODQuMDY4LjE1Mi4xNTIuMTUyaDIuNDRhLjE1LjE1IDAgMCAwIC4xNTEtLjE1MnYtMi40NGEuMTUuMTUgMCAwIDAtLjE1Mi0uMTUySDkuMTQ2YS4xNS4xNSAwIDAgMC0uMTUyLjE1Mm0zLjQyOCAyLjQ0di0yLjQ0YzAtLjA4My4wNjgtLjE1Mi4xNTItLjE1MmgyLjQ0Yy4wODMgMCAuMTUxLjA2OS4xNTEuMTUydjIuNDRhLjE1LjE1IDAgMCAxLS4xNTIuMTUyaC0yLjQ0YS4xNS4xNSAwIDAgMS0uMTUxLS4xNTIiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgogICAgPC9nPgogICAgPGRlZnM+CiAgICAgICAgPGNsaXBQYXRoIGlkPSJib2JfX2EiPgogICAgICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMCAwaDI0djI0SDB6Ii8+CiAgICAgICAgPC9jbGlwUGF0aD4KICAgIDwvZGVmcz4KPC9zdmc+Cg==)
 * @see https://web3icons.io/networks/bob
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const NetworkBob = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createWeb3Icon"])('NetworkBob', __iconNode);
;
}),
];

//# sourceMappingURL=1qqr_%40web3icons_react_dist_01eelx4._.js.map