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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/networks/NetworkFlare.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>NetworkFlare
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-ssr] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#E62058',
                d: 'M16.378 9.761h-8.88A4.487 4.487 0 0 0 3 14.141c0 .063.05.118.118.118h8.88c2.438.01 4.435-1.94 4.498-4.385a.12.12 0 0 0-.117-.118zM20.877 3H7.5a4.484 4.484 0 0 0-4.494 4.384c0 .064.049.118.113.118H16.5c2.438.01 4.435-1.938 4.499-4.384A.12.12 0 0 0 20.882 3zM5.252 21a2.255 2.255 0 0 0 2.252-2.259 2.255 2.255 0 0 0-2.252-2.258A2.255 2.255 0 0 0 3 18.74 2.255 2.255 0 0 0 5.252 21'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M16.378 9.761h-8.88A4.487 4.487 0 0 0 3 14.141c0 .063.05.118.118.118h8.88c2.438.01 4.435-1.94 4.498-4.385a.12.12 0 0 0-.117-.118zM20.877 3H7.5a4.484 4.484 0 0 0-4.494 4.384c0 .064.049.118.113.118H16.5c2.438.01 4.435-1.938 4.499-4.384A.12.12 0 0 0 20.882 3zM5.252 21a2.255 2.255 0 0 0 2.252-2.259 2.255 2.255 0 0 0-2.252-2.258A2.255 2.255 0 0 0 3 18.74 2.255 2.255 0 0 0 5.252 21'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#flare__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#E62058',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M15.892 10.01H7.999A3.99 3.99 0 0 0 4 13.903c0 .057.044.105.105.105h7.893a3.99 3.99 0 0 0 3.999-3.897.106.106 0 0 0-.105-.105zM19.891 4H8a3.986 3.986 0 0 0-3.995 3.897c0 .057.044.105.1.105h11.897a3.99 3.99 0 0 0 4-3.897.106.106 0 0 0-.106-.105zM6.002 20a2.005 2.005 0 0 0 2.001-2.008 2.005 2.005 0 0 0-2.001-2.007A2.005 2.005 0 0 0 4 17.992C4 19.102 4.896 20 6.002 20'
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
                        id: 'flare__a'
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
 * @component @name NetworkFlare
 * @description Web3Icon for NetworkFlare
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNFNjIwNTgiIGQ9Ik0xNi4zNzggOS43NjFoLTguODhBNC40ODcgNC40ODcgMCAwIDAgMyAxNC4xNDFjMCAuMDYzLjA1LjExOC4xMTguMTE4aDguODhjMi40MzguMDEgNC40MzUtMS45NCA0LjQ5OC00LjM4NWEuMTIuMTIgMCAwIDAtLjExNy0uMTE4ek0yMC44NzcgM0g3LjVhNC40ODQgNC40ODQgMCAwIDAtNC40OTQgNC4zODRjMCAuMDY0LjA0OS4xMTguMTEzLjExOEgxNi41YzIuNDM4LjAxIDQuNDM1LTEuOTM4IDQuNDk5LTQuMzg0QS4xMi4xMiAwIDAgMCAyMC44ODIgM3pNNS4yNTIgMjFhMi4yNTUgMi4yNTUgMCAwIDAgMi4yNTItMi4yNTkgMi4yNTUgMi4yNTUgMCAwIDAtMi4yNTItMi4yNThBMi4yNTUgMi4yNTUgMCAwIDAgMyAxOC43NCAyLjI1NSAyLjI1NSAwIDAgMCA1LjI1MiAyMSIvPgo8L3N2Zz4K) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xNi4zNzggOS43NjFoLTguODhBNC40ODcgNC40ODcgMCAwIDAgMyAxNC4xNDFjMCAuMDYzLjA1LjExOC4xMTguMTE4aDguODhjMi40MzguMDEgNC40MzUtMS45NCA0LjQ5OC00LjM4NWEuMTIuMTIgMCAwIDAtLjExNy0uMTE4ek0yMC44NzcgM0g3LjVhNC40ODQgNC40ODQgMCAwIDAtNC40OTQgNC4zODRjMCAuMDY0LjA0OS4xMTguMTEzLjExOEgxNi41YzIuNDM4LjAxIDQuNDM1LTEuOTM4IDQuNDk5LTQuMzg0QS4xMi4xMiAwIDAgMCAyMC44ODIgM3pNNS4yNTIgMjFhMi4yNTUgMi4yNTUgMCAwIDAgMi4yNTItMi4yNTkgMi4yNTUgMi4yNTUgMCAwIDAtMi4yNTItMi4yNThBMi4yNTUgMi4yNTUgMCAwIDAgMyAxOC43NCAyLjI1NSAyLjI1NSAwIDAgMCA1LjI1MiAyMSIvPgo8L3N2Zz4K) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNmbGFyZV9fYSkiPgogICAgICAgIDxwYXRoIGZpbGw9IiNFNjIwNTgiIGQ9Ik0yNCAwSDB2MjRoMjR6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTE1Ljg5MiAxMC4wMUg3Ljk5OUEzLjk5IDMuOTkgMCAwIDAgNCAxMy45MDNjMCAuMDU3LjA0NC4xMDUuMTA1LjEwNWg3Ljg5M2EzLjk5IDMuOTkgMCAwIDAgMy45OTktMy44OTcuMTA2LjEwNiAwIDAgMC0uMTA1LS4xMDV6TTE5Ljg5MSA0SDhhMy45ODYgMy45ODYgMCAwIDAtMy45OTUgMy44OTdjMCAuMDU3LjA0NC4xMDUuMS4xMDVoMTEuODk3YTMuOTkgMy45OSAwIDAgMCA0LTMuODk3LjEwNi4xMDYgMCAwIDAtLjEwNi0uMTA1ek02LjAwMiAyMGEyLjAwNSAyLjAwNSAwIDAgMCAyLjAwMS0yLjAwOCAyLjAwNSAyLjAwNSAwIDAgMC0yLjAwMS0yLjAwN0EyLjAwNSAyLjAwNSAwIDAgMCA0IDE3Ljk5MkM0IDE5LjEwMiA0Ljg5NiAyMCA2LjAwMiAyMCIvPgogICAgPC9nPgogICAgPGRlZnM+CiAgICAgICAgPGNsaXBQYXRoIGlkPSJmbGFyZV9fYSI+CiAgICAgICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0wIDBoMjR2MjRIMHoiLz4KICAgICAgICA8L2NsaXBQYXRoPgogICAgPC9kZWZzPgo8L3N2Zz4K)
 * @see https://web3icons.io/networks/flare
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const NetworkFlare = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createWeb3Icon"])('NetworkFlare', __iconNode);
;
}),
];

//# sourceMappingURL=1qqr_%40web3icons_react_dist_0k4ag0e._.js.map