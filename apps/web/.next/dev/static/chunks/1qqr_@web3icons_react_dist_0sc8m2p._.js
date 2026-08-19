(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createWeb3Icon",
    ()=>createWeb3Icon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$types$2b$node$40$24$2e$13$2e$3_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.1_@types+node@24.13.3_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$BaseIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/BaseIcon.js [app-client] (ecmascript)");
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
    const Component = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$types$2b$node$40$24$2e$13$2e$3_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(({ variant = defaultVariant, fallback, ...props }, ref)=>{
        const iconData = variants[variant];
        if (!iconData) {
            console.warn(`Icon "${name}" does not have variant "${variant}". ` + `Available variants: ${availableVariants.join(', ')}`);
            return null;
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$types$2b$node$40$24$2e$13$2e$3_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$BaseIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseIcon"], {
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
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$types$2b$node$40$24$2e$13$2e$3_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(element, elementProps, childElements);
    });
}
;
}),
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/networks/NetworkShimmerEvm.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>NetworkShimmerEvm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-client] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#00E0CA',
                d: 'M18.486 5.427c-2.97-3.175-7.852-3.244-10.904-.153s-3.117 8.171-.146 11.347l1.952-1.978c-1.915-2.06-1.87-5.347.106-7.348a4.864 4.864 0 0 1 7.062.088zM5.514 18.573c2.97 3.175 7.852 3.244 10.904.153s3.117-8.171.146-11.347l-1.952 1.978c1.915 2.06 1.87 5.347-.106 7.348s-5.134 1.96-7.062-.088z'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M18.486 5.427c-2.97-3.175-7.852-3.244-10.904-.153s-3.117 8.171-.146 11.347l1.952-1.978c-1.915-2.06-1.87-5.347.106-7.348a4.864 4.864 0 0 1 7.062.088zM5.514 18.573c2.97 3.175 7.852 3.244 10.904.153s3.117-8.171.146-11.347l-1.952 1.978c1.915 2.06 1.87 5.347-.106 7.348s-5.134 1.96-7.062-.088z'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#shimmer-evm__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#00E0CA',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M17.766 6.157c-2.64-2.822-6.98-2.883-9.693-.135-2.712 2.747-2.77 7.263-.13 10.086l1.736-1.759c-1.703-1.831-1.662-4.752.094-6.531a4.324 4.324 0 0 1 6.277.078zM6.234 17.843c2.64 2.822 6.98 2.883 9.693.135 2.712-2.747 2.77-7.263.13-10.086l-1.735 1.759c1.702 1.831 1.661 4.752-.095 6.531a4.324 4.324 0 0 1-6.276-.078z'
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
                        id: 'shimmer-evm__a'
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
 * @component @name NetworkShimmerEvm
 * @description Web3Icon for NetworkShimmerEvm
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiMwMEUwQ0EiIGQ9Ik0xOC40ODYgNS40MjdjLTIuOTctMy4xNzUtNy44NTItMy4yNDQtMTAuOTA0LS4xNTNzLTMuMTE3IDguMTcxLS4xNDYgMTEuMzQ3bDEuOTUyLTEuOTc4Yy0xLjkxNS0yLjA2LTEuODctNS4zNDcuMTA2LTcuMzQ4YTQuODY0IDQuODY0IDAgMCAxIDcuMDYyLjA4OHpNNS41MTQgMTguNTczYzIuOTcgMy4xNzUgNy44NTIgMy4yNDQgMTAuOTA0LjE1M3MzLjExNy04LjE3MS4xNDYtMTEuMzQ3bC0xLjk1MiAxLjk3OGMxLjkxNSAyLjA2IDEuODcgNS4zNDctLjEwNiA3LjM0OHMtNS4xMzQgMS45Ni03LjA2Mi0uMDg4eiIvPgo8L3N2Zz4K) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xOC40ODYgNS40MjdjLTIuOTctMy4xNzUtNy44NTItMy4yNDQtMTAuOTA0LS4xNTNzLTMuMTE3IDguMTcxLS4xNDYgMTEuMzQ3bDEuOTUyLTEuOTc4Yy0xLjkxNS0yLjA2LTEuODctNS4zNDcuMTA2LTcuMzQ4YTQuODY0IDQuODY0IDAgMCAxIDcuMDYyLjA4OHpNNS41MTQgMTguNTczYzIuOTcgMy4xNzUgNy44NTIgMy4yNDQgMTAuOTA0LjE1M3MzLjExNy04LjE3MS4xNDYtMTEuMzQ3bC0xLjk1MiAxLjk3OGMxLjkxNSAyLjA2IDEuODcgNS4zNDctLjEwNiA3LjM0OHMtNS4xMzQgMS45Ni03LjA2Mi0uMDg4eiIvPgo8L3N2Zz4K) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNzaGltbWVyLWV2bV9fYSkiPgogICAgICAgIDxwYXRoIGZpbGw9IiMwMEUwQ0EiIGQ9Ik0yNCAwSDB2MjRoMjR6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTE3Ljc2NiA2LjE1N2MtMi42NC0yLjgyMi02Ljk4LTIuODgzLTkuNjkzLS4xMzUtMi43MTIgMi43NDctMi43NyA3LjI2My0uMTMgMTAuMDg2bDEuNzM2LTEuNzU5Yy0xLjcwMy0xLjgzMS0xLjY2Mi00Ljc1Mi4wOTQtNi41MzFhNC4zMjQgNC4zMjQgMCAwIDEgNi4yNzcuMDc4ek02LjIzNCAxNy44NDNjMi42NCAyLjgyMiA2Ljk4IDIuODgzIDkuNjkzLjEzNSAyLjcxMi0yLjc0NyAyLjc3LTcuMjYzLjEzLTEwLjA4NmwtMS43MzUgMS43NTljMS43MDIgMS44MzEgMS42NjEgNC43NTItLjA5NSA2LjUzMWE0LjMyNCA0LjMyNCAwIDAgMS02LjI3Ni0uMDc4eiIvPgogICAgPC9nPgogICAgPGRlZnM+CiAgICAgICAgPGNsaXBQYXRoIGlkPSJzaGltbWVyLWV2bV9fYSI+CiAgICAgICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0wIDBoMjR2MjRIMHoiLz4KICAgICAgICA8L2NsaXBQYXRoPgogICAgPC9kZWZzPgo8L3N2Zz4K)
 * @see https://web3icons.io/networks/shimmer-evm
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const NetworkShimmerEvm = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWeb3Icon"])('NetworkShimmerEvm', __iconNode);
;
}),
]);

//# sourceMappingURL=1qqr_%40web3icons_react_dist_0sc8m2p._.js.map