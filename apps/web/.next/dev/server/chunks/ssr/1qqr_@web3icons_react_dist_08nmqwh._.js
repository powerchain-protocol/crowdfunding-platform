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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenFET.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenFET
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-ssr] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: 'url(#FET__a)',
                d: 'M3 3h2.25v2.25H3zm5.625 0h2.25v2.25h-2.25zm0 5.625h2.25v2.25h-2.25zM14.25 3h2.25v2.25h-2.25zm5.625.563H21v1.124h-1.125zm0 5.624H21v1.126h-1.125zm-5.062 0h1.124v1.126h-1.124zm0 5.625h1.124v1.126h-1.124zm-5.626 0h1.126v1.126H9.187zm-5.624 5.063h1.124V21H3.562zm5.624 0h1.126V21H9.187zm5.626 0h1.124V21h-1.124zm5.062 0H21V21h-1.125zm0-5.063H21v1.126h-1.125zM3 8.625h2.25v2.25H3zm0 5.625h2.25v2.25H3z'
            }
        ],
        [
            'defs',
            {},
            [
                [
                    'linearGradient',
                    {
                        id: 'FET__a',
                        x1: '6.349',
                        x2: '24.905',
                        y1: '6.121',
                        y2: '27.435',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#1A1E21'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#06060A'
                            }
                        ]
                    ]
                ]
            ]
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M3 3h2.25v2.25H3zm5.625 0h2.25v2.25h-2.25zm0 5.625h2.25v2.25h-2.25zM14.25 3h2.25v2.25h-2.25zm5.625.563H21v1.124h-1.125zm0 5.624H21v1.126h-1.125zm-5.062 0h1.124v1.126h-1.124zm0 5.625h1.124v1.126h-1.124zm-5.626 0h1.126v1.126H9.187zm-5.624 5.063h1.124V21H3.562zm5.624 0h1.126V21H9.187zm5.626 0h1.124V21h-1.124zm5.062 0H21V21h-1.125zm0-5.063H21v1.126h-1.125zM3 8.625h2.25v2.25H3zm0 5.625h2.25v2.25H3z'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#FET__a)'
            },
            [
                [
                    'path',
                    {
                        fill: 'url(#FET__b)',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M4 4h2v2H4zm5 0h2v2H9zm0 5h2v2H9zm5-5h2v2h-2zm5 .5h1v1h-1zm0 5h1v1h-1zm-4.5 0h1v1h-1zm0 5h1v1h-1zm-5 0h1v1h-1zm-5 4.5h1v1h-1zm5 0h1v1h-1zm5 0h1v1h-1zm4.5 0h1v1h-1zm0-4.5h1v1h-1zM4 9h2v2H4zm0 5h2v2H4z'
                    }
                ]
            ]
        ],
        [
            'defs',
            {},
            [
                [
                    'linearGradient',
                    {
                        id: 'FET__b',
                        x1: '6.977',
                        x2: '23.471',
                        y1: '6.774',
                        y2: '25.72',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#1A1E21'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#06060A'
                            }
                        ]
                    ]
                ],
                [
                    'clipPath',
                    {
                        id: 'FET__a'
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
 * @component @name TokenFET
 * @description Web3Icon for TokenFET
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9InVybCgjRkVUX19hKSIgZD0iTTMgM2gyLjI1djIuMjVIM3ptNS42MjUgMGgyLjI1djIuMjVoLTIuMjV6bTAgNS42MjVoMi4yNXYyLjI1aC0yLjI1ek0xNC4yNSAzaDIuMjV2Mi4yNWgtMi4yNXptNS42MjUuNTYzSDIxdjEuMTI0aC0xLjEyNXptMCA1LjYyNEgyMXYxLjEyNmgtMS4xMjV6bS01LjA2MiAwaDEuMTI0djEuMTI2aC0xLjEyNHptMCA1LjYyNWgxLjEyNHYxLjEyNmgtMS4xMjR6bS01LjYyNiAwaDEuMTI2djEuMTI2SDkuMTg3em0tNS42MjQgNS4wNjNoMS4xMjRWMjFIMy41NjJ6bTUuNjI0IDBoMS4xMjZWMjFIOS4xODd6bTUuNjI2IDBoMS4xMjRWMjFoLTEuMTI0em01LjA2MiAwSDIxVjIxaC0xLjEyNXptMC01LjA2M0gyMXYxLjEyNmgtMS4xMjV6TTMgOC42MjVoMi4yNXYyLjI1SDN6bTAgNS42MjVoMi4yNXYyLjI1SDN6Ii8+CiAgICA8ZGVmcz4KICAgICAgICA8bGluZWFyR3JhZGllbnQgaWQ9IkZFVF9fYSIgeDE9IjYuMzQ5IiB4Mj0iMjQuOTA1IiB5MT0iNi4xMjEiIHkyPSIyNy40MzUiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iIzFBMUUyMSIvPgogICAgICAgICAgICA8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMwNjA2MEEiLz4KICAgICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgPC9kZWZzPgo8L3N2Zz4K) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0zIDNoMi4yNXYyLjI1SDN6bTUuNjI1IDBoMi4yNXYyLjI1aC0yLjI1em0wIDUuNjI1aDIuMjV2Mi4yNWgtMi4yNXpNMTQuMjUgM2gyLjI1djIuMjVoLTIuMjV6bTUuNjI1LjU2M0gyMXYxLjEyNGgtMS4xMjV6bTAgNS42MjRIMjF2MS4xMjZoLTEuMTI1em0tNS4wNjIgMGgxLjEyNHYxLjEyNmgtMS4xMjR6bTAgNS42MjVoMS4xMjR2MS4xMjZoLTEuMTI0em0tNS42MjYgMGgxLjEyNnYxLjEyNkg5LjE4N3ptLTUuNjI0IDUuMDYzaDEuMTI0VjIxSDMuNTYyem01LjYyNCAwaDEuMTI2VjIxSDkuMTg3em01LjYyNiAwaDEuMTI0VjIxaC0xLjEyNHptNS4wNjIgMEgyMVYyMWgtMS4xMjV6bTAtNS4wNjNIMjF2MS4xMjZoLTEuMTI1ek0zIDguNjI1aDIuMjV2Mi4yNUgzem0wIDUuNjI1aDIuMjV2Mi4yNUgzeiIvPgo8L3N2Zz4K) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNGRVRfX2EpIj4KICAgICAgICA8cGF0aCBmaWxsPSJ1cmwoI0ZFVF9fYikiIGQ9Ik0yNCAwSDB2MjRoMjR6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTQgNGgydjJINHptNSAwaDJ2Mkg5em0wIDVoMnYySDl6bTUtNWgydjJoLTJ6bTUgLjVoMXYxaC0xem0wIDVoMXYxaC0xem0tNC41IDBoMXYxaC0xem0wIDVoMXYxaC0xem0tNSAwaDF2MWgtMXptLTUgNC41aDF2MWgtMXptNSAwaDF2MWgtMXptNSAwaDF2MWgtMXptNC41IDBoMXYxaC0xem0wLTQuNWgxdjFoLTF6TTQgOWgydjJINHptMCA1aDJ2Mkg0eiIvPgogICAgPC9nPgogICAgPGRlZnM+CiAgICAgICAgPGxpbmVhckdyYWRpZW50IGlkPSJGRVRfX2IiIHgxPSI2Ljk3NyIgeDI9IjIzLjQ3MSIgeTE9IjYuNzc0IiB5Mj0iMjUuNzIiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iIzFBMUUyMSIvPgogICAgICAgICAgICA8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMwNjA2MEEiLz4KICAgICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgICAgIDxjbGlwUGF0aCBpZD0iRkVUX19hIj4KICAgICAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTAgMGgyNHYyNEgweiIvPgogICAgICAgIDwvY2xpcFBhdGg+CiAgICA8L2RlZnM+Cjwvc3ZnPgo=)
 * @see https://web3icons.io/tokens/FET
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenFET = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenFET', __iconNode);
;
}),
];

//# sourceMappingURL=1qqr_%40web3icons_react_dist_08nmqwh._.js.map