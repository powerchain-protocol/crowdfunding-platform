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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenHAI.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenHAI
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-ssr] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#45E2BA',
                d: 'M3 3.643h1.286v7.714h.643V3.643h1.285v7.714h13.5v-.643H6.857v-7.07h1.286v5.785h11.571v-.643H8.786V3.643h1.286V7.5h3.857V3.643h1.285V7.5h.643V3.643h1.286V7.5h.643V3.643h1.285V7.5h.643V3.643H21v16.714h-1.286v-7.714h-.642v7.714h-1.286v-7.714h-13.5v.643h12.857v7.071h-1.286v-5.785H4.286v.643h10.928v5.142h-1.286V16.5h-3.857v3.857H8.787V16.5h-.643v3.857H6.857V16.5h-.643v3.857H4.93V16.5h-.643v3.857H3z'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M3 3.643h1.286v7.714h.643V3.643h1.285v7.714h13.5v-.643H6.857v-7.07h1.286v5.785h11.571v-.643H8.786V3.643h1.286V7.5h3.857V3.643h1.285V7.5h.643V3.643h1.286V7.5h.643V3.643h1.285V7.5h.643V3.643H21v16.714h-1.286v-7.714h-.642v7.714h-1.286v-7.714h-13.5v.643h12.857v7.071h-1.286v-5.785H4.286v.643h10.928v5.142h-1.286V16.5h-3.857v3.857H8.787V16.5h-.643v3.857H6.857V16.5h-.643v3.857H4.93V16.5h-.643v3.857H3z'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#HAI__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#45E2BA',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M4 4.571h1.143v6.858h.571V4.57h1.143v6.858h12v-.572H7.43V4.571h1.14v5.143h10.286v-.571H9.143V4.57h1.143V8h3.428V4.57h1.143V8h.572V4.57h1.142V8h.572V4.57h1.143V8h.571V4.57H20v14.857h-1.143V12.57h-.571v6.858h-1.143V12.57h-12v.572H16.57v6.285h-1.14v-5.142H5.143v.571h9.714v4.572h-1.143v-3.43h-3.428v3.43H9.143v-3.43H8.57v3.43H7.43v-3.43h-.572v3.43H5.714v-3.43h-.571v3.43H4z'
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
                        id: 'HAI__a'
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
 * @component @name TokenHAI
 * @description Web3Icon for TokenHAI
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiM0NUUyQkEiIGQ9Ik0zIDMuNjQzaDEuMjg2djcuNzE0aC42NDNWMy42NDNoMS4yODV2Ny43MTRoMTMuNXYtLjY0M0g2Ljg1N3YtNy4wN2gxLjI4NnY1Ljc4NWgxMS41NzF2LS42NDNIOC43ODZWMy42NDNoMS4yODZWNy41aDMuODU3VjMuNjQzaDEuMjg1VjcuNWguNjQzVjMuNjQzaDEuMjg2VjcuNWguNjQzVjMuNjQzaDEuMjg1VjcuNWguNjQzVjMuNjQzSDIxdjE2LjcxNGgtMS4yODZ2LTcuNzE0aC0uNjQydjcuNzE0aC0xLjI4NnYtNy43MTRoLTEzLjV2LjY0M2gxMi44NTd2Ny4wNzFoLTEuMjg2di01Ljc4NUg0LjI4NnYuNjQzaDEwLjkyOHY1LjE0MmgtMS4yODZWMTYuNWgtMy44NTd2My44NTdIOC43ODdWMTYuNWgtLjY0M3YzLjg1N0g2Ljg1N1YxNi41aC0uNjQzdjMuODU3SDQuOTNWMTYuNWgtLjY0M3YzLjg1N0gzeiIvPgo8L3N2Zz4K) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0zIDMuNjQzaDEuMjg2djcuNzE0aC42NDNWMy42NDNoMS4yODV2Ny43MTRoMTMuNXYtLjY0M0g2Ljg1N3YtNy4wN2gxLjI4NnY1Ljc4NWgxMS41NzF2LS42NDNIOC43ODZWMy42NDNoMS4yODZWNy41aDMuODU3VjMuNjQzaDEuMjg1VjcuNWguNjQzVjMuNjQzaDEuMjg2VjcuNWguNjQzVjMuNjQzaDEuMjg1VjcuNWguNjQzVjMuNjQzSDIxdjE2LjcxNGgtMS4yODZ2LTcuNzE0aC0uNjQydjcuNzE0aC0xLjI4NnYtNy43MTRoLTEzLjV2LjY0M2gxMi44NTd2Ny4wNzFoLTEuMjg2di01Ljc4NUg0LjI4NnYuNjQzaDEwLjkyOHY1LjE0MmgtMS4yODZWMTYuNWgtMy44NTd2My44NTdIOC43ODdWMTYuNWgtLjY0M3YzLjg1N0g2Ljg1N1YxNi41aC0uNjQzdjMuODU3SDQuOTNWMTYuNWgtLjY0M3YzLjg1N0gzeiIvPgo8L3N2Zz4K) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNIQUlfX2EpIj4KICAgICAgICA8cGF0aCBmaWxsPSIjNDVFMkJBIiBkPSJNMjQgMEgwdjI0aDI0eiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik00IDQuNTcxaDEuMTQzdjYuODU4aC41NzFWNC41N2gxLjE0M3Y2Ljg1OGgxMnYtLjU3Mkg3LjQzVjQuNTcxaDEuMTR2NS4xNDNoMTAuMjg2di0uNTcxSDkuMTQzVjQuNTdoMS4xNDNWOGgzLjQyOFY0LjU3aDEuMTQzVjhoLjU3MlY0LjU3aDEuMTQyVjhoLjU3MlY0LjU3aDEuMTQzVjhoLjU3MVY0LjU3SDIwdjE0Ljg1N2gtMS4xNDNWMTIuNTdoLS41NzF2Ni44NThoLTEuMTQzVjEyLjU3aC0xMnYuNTcySDE2LjU3djYuMjg1aC0xLjE0di01LjE0Mkg1LjE0M3YuNTcxaDkuNzE0djQuNTcyaC0xLjE0M3YtMy40M2gtMy40Mjh2My40M0g5LjE0M3YtMy40M0g4LjU3djMuNDNINy40M3YtMy40M2gtLjU3MnYzLjQzSDUuNzE0di0zLjQzaC0uNTcxdjMuNDNINHoiLz4KICAgIDwvZz4KICAgIDxkZWZzPgogICAgICAgIDxjbGlwUGF0aCBpZD0iSEFJX19hIj4KICAgICAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTAgMGgyNHYyNEgweiIvPgogICAgICAgIDwvY2xpcFBhdGg+CiAgICA8L2RlZnM+Cjwvc3ZnPgo=)
 * @see https://web3icons.io/tokens/HAI
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenHAI = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenHAI', __iconNode);
;
}),
];

//# sourceMappingURL=1qqr_%40web3icons_react_dist_085qsjs._.js.map