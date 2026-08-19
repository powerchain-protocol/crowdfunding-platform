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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenSEILOR.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenSEILOR
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-ssr] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#fff',
                d: 'M16.5 7.5C16.5 5.047 14.453 3 12 3S7.5 5.047 7.5 7.5V3C5.047 3 3 5.047 3 7.5h4.5C5.047 7.5 3 9.547 3 12s2.047 4.5 4.5 4.5H3C3 18.953 5.047 21 7.5 21v-4.5c0 2.453 2.047 4.5 4.5 4.5s4.5-2.047 4.5-4.5V21c2.453 0 4.5-2.047 4.5-4.5h-4.5c2.453 0 4.5-2.047 4.5-4.5s-2.047-4.5-4.5-4.5m0 4.5v4.5H12a4.5 4.5 0 0 0 4.5-4.5m-9 0A4.5 4.5 0 0 1 12 7.5H7.5zm0 0a4.5 4.5 0 0 0 4.5 4.5H7.5zm9 0V3C18.953 3 21 5.047 21 7.5h-9a4.5 4.5 0 0 1 4.5 4.5',
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
                d: 'M16.5 7.5C16.5 5.047 14.453 3 12 3S7.5 5.047 7.5 7.5V3C5.047 3 3 5.047 3 7.5h4.5C5.047 7.5 3 9.547 3 12s2.047 4.5 4.5 4.5H3C3 18.953 5.047 21 7.5 21v-4.5c0 2.453 2.047 4.5 4.5 4.5s4.5-2.047 4.5-4.5V21c2.453 0 4.5-2.047 4.5-4.5h-4.5c2.453 0 4.5-2.047 4.5-4.5s-2.047-4.5-4.5-4.5m0 4.5v4.5H12a4.5 4.5 0 0 0 4.5-4.5m-9 0A4.5 4.5 0 0 1 12 7.5H7.5zm0 0a4.5 4.5 0 0 0 4.5 4.5H7.5zm9 0V3C18.953 3 21 5.047 21 7.5h-9a4.5 4.5 0 0 1 4.5 4.5',
                fillRule: 'evenodd',
                clipRule: 'evenodd'
            }
        ]
    ],
    background: [
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
                d: 'M16 8c0-2.18-1.82-4-4-4S8 5.82 8 8V4C5.82 4 4 5.82 4 8h4c-2.18 0-4 1.82-4 4s1.82 4 4 4H4c0 2.18 1.82 4 4 4v-4c0 2.18 1.82 4 4 4s4-1.82 4-4v4c2.18 0 4-1.82 4-4h-4c2.18 0 4-1.82 4-4s-1.82-4-4-4m0 4v4h-4a4 4 0 0 0 4-4m-8 0a4 4 0 0 1 4-4H8zm0 0a4 4 0 0 0 4 4H8zm8 0V4c2.18 0 4 1.82 4 4h-8a4 4 0 0 1 4 4',
                fillRule: 'evenodd',
                clipRule: 'evenodd'
            }
        ]
    ]
};
/**
 * @component @name TokenSEILOR
 * @description Web3Icon for TokenSEILOR
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTE2LjUgNy41QzE2LjUgNS4wNDcgMTQuNDUzIDMgMTIgM1M3LjUgNS4wNDcgNy41IDcuNVYzQzUuMDQ3IDMgMyA1LjA0NyAzIDcuNWg0LjVDNS4wNDcgNy41IDMgOS41NDcgMyAxMnMyLjA0NyA0LjUgNC41IDQuNUgzQzMgMTguOTUzIDUuMDQ3IDIxIDcuNSAyMXYtNC41YzAgMi40NTMgMi4wNDcgNC41IDQuNSA0LjVzNC41LTIuMDQ3IDQuNS00LjVWMjFjMi40NTMgMCA0LjUtMi4wNDcgNC41LTQuNWgtNC41YzIuNDUzIDAgNC41LTIuMDQ3IDQuNS00LjVzLTIuMDQ3LTQuNS00LjUtNC41bTAgNC41djQuNUgxMmE0LjUgNC41IDAgMCAwIDQuNS00LjVtLTkgMEE0LjUgNC41IDAgMCAxIDEyIDcuNUg3LjV6bTAgMGE0LjUgNC41IDAgMCAwIDQuNSA0LjVINy41em05IDBWM0MxOC45NTMgMyAyMSA1LjA0NyAyMSA3LjVoLTlhNC41IDQuNSAwIDAgMSA0LjUgNC41IiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+Cg==) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTE2LjUgNy41QzE2LjUgNS4wNDcgMTQuNDUzIDMgMTIgM1M3LjUgNS4wNDcgNy41IDcuNVYzQzUuMDQ3IDMgMyA1LjA0NyAzIDcuNWg0LjVDNS4wNDcgNy41IDMgOS41NDcgMyAxMnMyLjA0NyA0LjUgNC41IDQuNUgzQzMgMTguOTUzIDUuMDQ3IDIxIDcuNSAyMXYtNC41YzAgMi40NTMgMi4wNDcgNC41IDQuNSA0LjVzNC41LTIuMDQ3IDQuNS00LjVWMjFjMi40NTMgMCA0LjUtMi4wNDcgNC41LTQuNWgtNC41YzIuNDUzIDAgNC41LTIuMDQ3IDQuNS00LjVzLTIuMDQ3LTQuNS00LjUtNC41bTAgNC41djQuNUgxMmE0LjUgNC41IDAgMCAwIDQuNS00LjVtLTkgMEE0LjUgNC41IDAgMCAxIDEyIDcuNUg3LjV6bTAgMGE0LjUgNC41IDAgMCAwIDQuNSA0LjVINy41em05IDBWM0MxOC45NTMgMyAyMSA1LjA0NyAyMSA3LjVoLTlhNC41IDQuNSAwIDAgMSA0LjUgNC41IiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+Cg==) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiMwMDAiIGQ9Ik0yNCAwSDB2MjRoMjR6Ii8+CiAgICA8cGF0aCBmaWxsPSIjZmZmIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNiA4YzAtMi4xOC0xLjgyLTQtNC00UzggNS44MiA4IDhWNEM1LjgyIDQgNCA1LjgyIDQgOGg0Yy0yLjE4IDAtNCAxLjgyLTQgNHMxLjgyIDQgNCA0SDRjMCAyLjE4IDEuODIgNCA0IDR2LTRjMCAyLjE4IDEuODIgNCA0IDRzNC0xLjgyIDQtNHY0YzIuMTggMCA0LTEuODIgNC00aC00YzIuMTggMCA0LTEuODIgNC00cy0xLjgyLTQtNC00bTAgNHY0aC00YTQgNCAwIDAgMCA0LTRtLTggMGE0IDQgMCAwIDEgNC00SDh6bTAgMGE0IDQgMCAwIDAgNCA0SDh6bTggMFY0YzIuMTggMCA0IDEuODIgNCA0aC04YTQgNCAwIDAgMSA0IDQiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4K)
 * @see https://web3icons.io/tokens/SEILOR
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenSEILOR = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenSEILOR', __iconNode);
;
}),
];

//# sourceMappingURL=1qqr_%40web3icons_react_dist_0z-ppjk._.js.map