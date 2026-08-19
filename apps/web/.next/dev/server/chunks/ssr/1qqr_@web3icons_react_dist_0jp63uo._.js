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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/exchanges/ExchangeKraken.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>ExchangeKraken
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-ssr] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#5741D9',
                d: 'M11.999 4.927C7.029 4.927 3 8.958 3 13.93v3.858a1.288 1.288 0 0 0 2.573 0V13.93a1.283 1.283 0 1 1 2.57 0v3.858a1.285 1.285 0 1 0 2.571 0V13.93a1.287 1.287 0 1 1 2.573 0v3.858a1.284 1.284 0 1 0 2.569 0V13.93a1.285 1.285 0 1 1 2.573 0v3.858a1.285 1.285 0 0 0 2.571 0V13.93a9 9 0 0 0-9.001-9.003'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M11.999 4.927C7.029 4.927 3 8.958 3 13.93v3.858a1.288 1.288 0 0 0 2.573 0V13.93a1.283 1.283 0 1 1 2.57 0v3.858a1.285 1.285 0 1 0 2.571 0V13.93a1.287 1.287 0 1 1 2.573 0v3.858a1.284 1.284 0 1 0 2.569 0V13.93a1.285 1.285 0 1 1 2.573 0v3.858a1.285 1.285 0 0 0 2.571 0V13.93a9 9 0 0 0-9.001-9.003'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#kraken__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#5741D9',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M11.999 5.713A8 8 0 0 0 4 13.715v3.43a1.145 1.145 0 0 0 2.287 0v-3.43a1.14 1.14 0 1 1 2.284 0v3.43a1.142 1.142 0 1 0 2.285 0v-3.43a1.144 1.144 0 0 1 2.287 0v3.43a1.142 1.142 0 1 0 2.284 0v-3.43a1.143 1.143 0 1 1 2.288 0v3.43a1.142 1.142 0 0 0 2.285 0v-3.43a8 8 0 0 0-8.001-8.002'
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
                        id: 'kraken__a'
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
 * @component @name ExchangeKraken
 * @description Web3Icon for ExchangeKraken
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiM1NzQxRDkiIGQ9Ik0xMS45OTkgNC45MjdDNy4wMjkgNC45MjcgMyA4Ljk1OCAzIDEzLjkzdjMuODU4YTEuMjg4IDEuMjg4IDAgMCAwIDIuNTczIDBWMTMuOTNhMS4yODMgMS4yODMgMCAxIDEgMi41NyAwdjMuODU4YTEuMjg1IDEuMjg1IDAgMSAwIDIuNTcxIDBWMTMuOTNhMS4yODcgMS4yODcgMCAxIDEgMi41NzMgMHYzLjg1OGExLjI4NCAxLjI4NCAwIDEgMCAyLjU2OSAwVjEzLjkzYTEuMjg1IDEuMjg1IDAgMSAxIDIuNTczIDB2My44NThhMS4yODUgMS4yODUgMCAwIDAgMi41NzEgMFYxMy45M2E5IDkgMCAwIDAtOS4wMDEtOS4wMDMiLz4KPC9zdmc+Cg==) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xMS45OTkgNC45MjdDNy4wMjkgNC45MjcgMyA4Ljk1OCAzIDEzLjkzdjMuODU4YTEuMjg4IDEuMjg4IDAgMCAwIDIuNTczIDBWMTMuOTNhMS4yODMgMS4yODMgMCAxIDEgMi41NyAwdjMuODU4YTEuMjg1IDEuMjg1IDAgMSAwIDIuNTcxIDBWMTMuOTNhMS4yODcgMS4yODcgMCAxIDEgMi41NzMgMHYzLjg1OGExLjI4NCAxLjI4NCAwIDEgMCAyLjU2OSAwVjEzLjkzYTEuMjg1IDEuMjg1IDAgMSAxIDIuNTczIDB2My44NThhMS4yODUgMS4yODUgMCAwIDAgMi41NzEgMFYxMy45M2E5IDkgMCAwIDAtOS4wMDEtOS4wMDMiLz4KPC9zdmc+Cg==) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNrcmFrZW5fX2EpIj4KICAgICAgICA8cGF0aCBmaWxsPSIjNTc0MUQ5IiBkPSJNMjQgMEgwdjI0aDI0eiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xMS45OTkgNS43MTNBOCA4IDAgMCAwIDQgMTMuNzE1djMuNDNhMS4xNDUgMS4xNDUgMCAwIDAgMi4yODcgMHYtMy40M2ExLjE0IDEuMTQgMCAxIDEgMi4yODQgMHYzLjQzYTEuMTQyIDEuMTQyIDAgMSAwIDIuMjg1IDB2LTMuNDNhMS4xNDQgMS4xNDQgMCAwIDEgMi4yODcgMHYzLjQzYTEuMTQyIDEuMTQyIDAgMSAwIDIuMjg0IDB2LTMuNDNhMS4xNDMgMS4xNDMgMCAxIDEgMi4yODggMHYzLjQzYTEuMTQyIDEuMTQyIDAgMCAwIDIuMjg1IDB2LTMuNDNhOCA4IDAgMCAwLTguMDAxLTguMDAyIi8+CiAgICA8L2c+CiAgICA8ZGVmcz4KICAgICAgICA8Y2xpcFBhdGggaWQ9ImtyYWtlbl9fYSI+CiAgICAgICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0wIDBoMjR2MjRIMHoiLz4KICAgICAgICA8L2NsaXBQYXRoPgogICAgPC9kZWZzPgo8L3N2Zz4K)
 * @see https://web3icons.io/exchanges/kraken
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const ExchangeKraken = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createWeb3Icon"])('ExchangeKraken', __iconNode);
;
}),
];

//# sourceMappingURL=1qqr_%40web3icons_react_dist_0jp63uo._.js.map