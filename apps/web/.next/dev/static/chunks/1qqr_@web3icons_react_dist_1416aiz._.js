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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/networks/NetworkFuel.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>NetworkFuel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-client] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#00F58C',
                d: 'M4.197 3A1.197 1.197 0 0 0 3 4.197V21h14.893c.504 0 .988-.2 1.344-.557l1.206-1.206A1.9 1.9 0 0 0 21 17.893V3zm1.72 2.314h8.836l-5.854 5.854a.776.776 0 0 1-1.248-.216L5.383 6.156a.59.59 0 0 1 .534-.843m-.603 13.372V12.99a.55.55 0 0 1 .55-.55h5.696zm7.698-7.697a1.4 1.4 0 0 1-.982.406h-1.886L15.82 5.72a1.4 1.4 0 0 1 .981-.407h1.886z'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M4.197 3A1.197 1.197 0 0 0 3 4.197V21h14.893c.504 0 .988-.2 1.344-.557l1.206-1.206A1.9 1.9 0 0 0 21 17.893V3zm1.72 2.314h8.836l-5.854 5.854a.776.776 0 0 1-1.248-.216L5.383 6.156a.59.59 0 0 1 .534-.843m-.603 13.372V12.99a.55.55 0 0 1 .55-.55h5.696zm7.698-7.697a1.4 1.4 0 0 1-.982.406h-1.886L15.82 5.72a1.4 1.4 0 0 1 .981-.407h1.886z'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#fuel__a)'
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
                        fill: '#00F58C',
                        d: 'M4.72 4h10.574l-7.005 7.005a.928.928 0 0 1-1.493-.26L4.082 5.008A.706.706 0 0 1 4.72 4M4 20v-6.815a.66.66 0 0 1 .659-.659h6.815zm9.21-9.21a1.66 1.66 0 0 1-1.174.486H9.78l6.79-6.79A1.66 1.66 0 0 1 17.743 4H20z'
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
                        id: 'fuel__a'
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
 * @component @name NetworkFuel
 * @description Web3Icon for NetworkFuel
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiMwMEY1OEMiIGQ9Ik00LjE5NyAzQTEuMTk3IDEuMTk3IDAgMCAwIDMgNC4xOTdWMjFoMTQuODkzYy41MDQgMCAuOTg4LS4yIDEuMzQ0LS41NTdsMS4yMDYtMS4yMDZBMS45IDEuOSAwIDAgMCAyMSAxNy44OTNWM3ptMS43MiAyLjMxNGg4LjgzNmwtNS44NTQgNS44NTRhLjc3Ni43NzYgMCAwIDEtMS4yNDgtLjIxNkw1LjM4MyA2LjE1NmEuNTkuNTkgMCAwIDEgLjUzNC0uODQzbS0uNjAzIDEzLjM3MlYxMi45OWEuNTUuNTUgMCAwIDEgLjU1LS41NWg1LjY5NnptNy42OTgtNy42OTdhMS40IDEuNCAwIDAgMS0uOTgyLjQwNmgtMS44ODZMMTUuODIgNS43MmExLjQgMS40IDAgMCAxIC45ODEtLjQwN2gxLjg4NnoiLz4KPC9zdmc+Cg==) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik00LjE5NyAzQTEuMTk3IDEuMTk3IDAgMCAwIDMgNC4xOTdWMjFoMTQuODkzYy41MDQgMCAuOTg4LS4yIDEuMzQ0LS41NTdsMS4yMDYtMS4yMDZBMS45IDEuOSAwIDAgMCAyMSAxNy44OTNWM3ptMS43MiAyLjMxNGg4LjgzNmwtNS44NTQgNS44NTRhLjc3Ni43NzYgMCAwIDEtMS4yNDgtLjIxNkw1LjM4MyA2LjE1NmEuNTkuNTkgMCAwIDEgLjUzNC0uODQzbS0uNjAzIDEzLjM3MlYxMi45OWEuNTUuNTUgMCAwIDEgLjU1LS41NWg1LjY5NnptNy42OTgtNy42OTdhMS40IDEuNCAwIDAgMS0uOTgyLjQwNmgtMS44ODZMMTUuODIgNS43MmExLjQgMS40IDAgMCAxIC45ODEtLjQwN2gxLjg4NnoiLz4KPC9zdmc+Cg==) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNmdWVsX19hKSI+CiAgICAgICAgPHBhdGggZmlsbD0iIzAwMCIgZD0iTTI0IDBIMHYyNGgyNHoiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjMDBGNThDIiBkPSJNNC43MiA0aDEwLjU3NGwtNy4wMDUgNy4wMDVhLjkyOC45MjggMCAwIDEtMS40OTMtLjI2TDQuMDgyIDUuMDA4QS43MDYuNzA2IDAgMCAxIDQuNzIgNE00IDIwdi02LjgxNWEuNjYuNjYgMCAwIDEgLjY1OS0uNjU5aDYuODE1em05LjIxLTkuMjFhMS42NiAxLjY2IDAgMCAxLTEuMTc0LjQ4Nkg5Ljc4bDYuNzktNi43OUExLjY2IDEuNjYgMCAwIDEgMTcuNzQzIDRIMjB6Ii8+CiAgICA8L2c+CiAgICA8ZGVmcz4KICAgICAgICA8Y2xpcFBhdGggaWQ9ImZ1ZWxfX2EiPgogICAgICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMCAwaDI0djI0SDB6Ii8+CiAgICAgICAgPC9jbGlwUGF0aD4KICAgIDwvZGVmcz4KPC9zdmc+Cg==)
 * @see https://web3icons.io/networks/fuel
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const NetworkFuel = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWeb3Icon"])('NetworkFuel', __iconNode);
;
}),
]);

//# sourceMappingURL=1qqr_%40web3icons_react_dist_1416aiz._.js.map