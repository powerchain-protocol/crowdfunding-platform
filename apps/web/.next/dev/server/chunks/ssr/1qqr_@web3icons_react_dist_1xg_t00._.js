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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/networks/NetworkBinanceSmartChainTestnet.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>NetworkBinanceSmartChainTestnet
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-ssr] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#F0B90B',
                d: 'M7.09 5.755 12 3l4.91 2.755-1.8 1.02L12 5.035l-3.105 1.74zm9.82 3.48-1.8-1.02L12 9.955l-3.105-1.74-1.805 1.02v2.035l3.1 1.74v3.475l1.81 1.02 1.805-1.02V13.01l3.105-1.74zm0 5.515v-2.04l-1.8 1.02v2.035zm1.285.72-3.105 1.735v2.04l4.91-2.76v-5.51l-1.805 1.015zM16.39 7.495l1.8 1.02v2.035L20 9.535v-2.04l-1.805-1.02L16.39 7.5zm-6.2 10.45v2.035L12 21l1.805-1.02v-2.03L12 18.965l-1.805-1.02zm-3.1-3.2 1.8 1.02V13.73l-1.8-1.02v2.04zm3.1-7.25L12 8.515l1.805-1.02L12 6.475 10.195 7.5zm-4.385 1.02 1.805-1.02-1.8-1.02L4 7.5v2.04l1.805 1.015zm0 3.475L4 10.975v5.51l4.91 2.76V17.2l-3.1-1.735v-3.48z'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M7.09 5.755 12 3l4.91 2.755-1.8 1.02L12 5.035l-3.105 1.74zm9.82 3.48-1.8-1.02L12 9.955l-3.105-1.74-1.805 1.02v2.035l3.1 1.74v3.475l1.81 1.02 1.805-1.02V13.01l3.105-1.74zm0 5.515v-2.04l-1.8 1.02v2.035zm1.285.72-3.105 1.735v2.04l4.91-2.76v-5.51l-1.805 1.015zM16.39 7.495l1.8 1.02v2.035L20 9.535v-2.04l-1.805-1.02L16.39 7.5zm-6.2 10.45v2.035L12 21l1.805-1.02v-2.03L12 18.965l-1.805-1.02zm-3.1-3.2 1.8 1.02V13.73l-1.8-1.02v2.04zm3.1-7.25L12 8.515l1.805-1.02L12 6.475 10.195 7.5zm-4.385 1.02 1.805-1.02-1.8-1.02L4 7.5v2.04l1.805 1.015zm0 3.475L4 10.975v5.51l4.91 2.76V17.2l-3.1-1.735v-3.48z'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#binance-smart-chain__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#F0B90B',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M7.635 6.449 12 4l4.364 2.449-1.6.907L12 5.809 9.24 7.356zm8.73 3.093-1.6-.906L12 10.182 9.24 8.636l-1.605.906v1.81l2.756 1.546v3.089l1.609.906 1.604-.906v-3.09l2.76-1.546zm0 4.903V12.63l-1.6.907v1.809zm1.141.64-2.76 1.542v1.813l4.365-2.453v-4.898l-1.605.902zm-1.604-7.09 1.6.907v1.81l1.609-.903V7.996l-1.605-.907L15.902 8zm-5.511 9.29v1.808L12 20l1.604-.907V17.29l-1.604.9-1.605-.907zM7.635 14.44l1.6.907v-1.81l-1.6-.906v1.813zm2.756-6.444L12 8.902l1.604-.906L12 7.089 10.395 8zm-3.898.906 1.605-.906-1.6-.907L4.888 8v1.813l1.605.903zm0 3.09-1.604-.903v4.898l4.364 2.453v-1.818L6.498 15.08v-3.093z'
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
                        id: 'binance-smart-chain__a'
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
 * @component @name NetworkBinanceSmartChainTestnet
 * @description Web3Icon for NetworkBinanceSmartChainTestnet
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNGMEI5MEIiIGQ9Ik03LjA5IDUuNzU1IDEyIDNsNC45MSAyLjc1NS0xLjggMS4wMkwxMiA1LjAzNWwtMy4xMDUgMS43NHptOS44MiAzLjQ4LTEuOC0xLjAyTDEyIDkuOTU1bC0zLjEwNS0xLjc0LTEuODA1IDEuMDJ2Mi4wMzVsMy4xIDEuNzR2My40NzVsMS44MSAxLjAyIDEuODA1LTEuMDJWMTMuMDFsMy4xMDUtMS43NHptMCA1LjUxNXYtMi4wNGwtMS44IDEuMDJ2Mi4wMzV6bTEuMjg1LjcyLTMuMTA1IDEuNzM1djIuMDRsNC45MS0yLjc2di01LjUxbC0xLjgwNSAxLjAxNXpNMTYuMzkgNy40OTVsMS44IDEuMDJ2Mi4wMzVMMjAgOS41MzV2LTIuMDRsLTEuODA1LTEuMDJMMTYuMzkgNy41em0tNi4yIDEwLjQ1djIuMDM1TDEyIDIxbDEuODA1LTEuMDJ2LTIuMDNMMTIgMTguOTY1bC0xLjgwNS0xLjAyem0tMy4xLTMuMiAxLjggMS4wMlYxMy43M2wtMS44LTEuMDJ2Mi4wNHptMy4xLTcuMjVMMTIgOC41MTVsMS44MDUtMS4wMkwxMiA2LjQ3NSAxMC4xOTUgNy41em0tNC4zODUgMS4wMiAxLjgwNS0xLjAyLTEuOC0xLjAyTDQgNy41djIuMDRsMS44MDUgMS4wMTV6bTAgMy40NzVMNCAxMC45NzV2NS41MWw0LjkxIDIuNzZWMTcuMmwtMy4xLTEuNzM1di0zLjQ4eiIvPgo8L3N2Zz4K) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik03LjA5IDUuNzU1IDEyIDNsNC45MSAyLjc1NS0xLjggMS4wMkwxMiA1LjAzNWwtMy4xMDUgMS43NHptOS44MiAzLjQ4LTEuOC0xLjAyTDEyIDkuOTU1bC0zLjEwNS0xLjc0LTEuODA1IDEuMDJ2Mi4wMzVsMy4xIDEuNzR2My40NzVsMS44MSAxLjAyIDEuODA1LTEuMDJWMTMuMDFsMy4xMDUtMS43NHptMCA1LjUxNXYtMi4wNGwtMS44IDEuMDJ2Mi4wMzV6bTEuMjg1LjcyLTMuMTA1IDEuNzM1djIuMDRsNC45MS0yLjc2di01LjUxbC0xLjgwNSAxLjAxNXpNMTYuMzkgNy40OTVsMS44IDEuMDJ2Mi4wMzVMMjAgOS41MzV2LTIuMDRsLTEuODA1LTEuMDJMMTYuMzkgNy41em0tNi4yIDEwLjQ1djIuMDM1TDEyIDIxbDEuODA1LTEuMDJ2LTIuMDNMMTIgMTguOTY1bC0xLjgwNS0xLjAyem0tMy4xLTMuMiAxLjggMS4wMlYxMy43M2wtMS44LTEuMDJ2Mi4wNHptMy4xLTcuMjVMMTIgOC41MTVsMS44MDUtMS4wMkwxMiA2LjQ3NSAxMC4xOTUgNy41em0tNC4zODUgMS4wMiAxLjgwNS0xLjAyLTEuOC0xLjAyTDQgNy41djIuMDRsMS44MDUgMS4wMTV6bTAgMy40NzVMNCAxMC45NzV2NS41MWw0LjkxIDIuNzZWMTcuMmwtMy4xLTEuNzM1di0zLjQ4eiIvPgo8L3N2Zz4K) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNiaW5hbmNlLXNtYXJ0LWNoYWluX19hKSI+CiAgICAgICAgPHBhdGggZmlsbD0iI0YwQjkwQiIgZD0iTTI0IDBIMHYyNGgyNHoiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNNy42MzUgNi40NDkgMTIgNGw0LjM2NCAyLjQ0OS0xLjYuOTA3TDEyIDUuODA5IDkuMjQgNy4zNTZ6bTguNzMgMy4wOTMtMS42LS45MDZMMTIgMTAuMTgyIDkuMjQgOC42MzZsLTEuNjA1LjkwNnYxLjgxbDIuNzU2IDEuNTQ2djMuMDg5bDEuNjA5LjkwNiAxLjYwNC0uOTA2di0zLjA5bDIuNzYtMS41NDZ6bTAgNC45MDNWMTIuNjNsLTEuNi45MDd2MS44MDl6bTEuMTQxLjY0LTIuNzYgMS41NDJ2MS44MTNsNC4zNjUtMi40NTN2LTQuODk4bC0xLjYwNS45MDJ6bS0xLjYwNC03LjA5IDEuNi45MDd2MS44MWwxLjYwOS0uOTAzVjcuOTk2bC0xLjYwNS0uOTA3TDE1LjkwMiA4em0tNS41MTEgOS4yOXYxLjgwOEwxMiAyMGwxLjYwNC0uOTA3VjE3LjI5bC0xLjYwNC45LTEuNjA1LS45MDd6TTcuNjM1IDE0LjQ0bDEuNi45MDd2LTEuODFsLTEuNi0uOTA2djEuODEzem0yLjc1Ni02LjQ0NEwxMiA4LjkwMmwxLjYwNC0uOTA2TDEyIDcuMDg5IDEwLjM5NSA4em0tMy44OTguOTA2IDEuNjA1LS45MDYtMS42LS45MDdMNC44ODggOHYxLjgxM2wxLjYwNS45MDN6bTAgMy4wOS0xLjYwNC0uOTAzdjQuODk4bDQuMzY0IDIuNDUzdi0xLjgxOEw2LjQ5OCAxNS4wOHYtMy4wOTN6Ii8+CiAgICA8L2c+CiAgICA8ZGVmcz4KICAgICAgICA8Y2xpcFBhdGggaWQ9ImJpbmFuY2Utc21hcnQtY2hhaW5fX2EiPgogICAgICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMCAwaDI0djI0SDB6Ii8+CiAgICAgICAgPC9jbGlwUGF0aD4KICAgIDwvZGVmcz4KPC9zdmc+Cg==)
 * @see https://web3icons.io/networks/binance-smart-chain-testnet
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const NetworkBinanceSmartChainTestnet = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createWeb3Icon"])('NetworkBinanceSmartChainTestnet', __iconNode);
;
}),
];

//# sourceMappingURL=1qqr_%40web3icons_react_dist_1xg_t00._.js.map