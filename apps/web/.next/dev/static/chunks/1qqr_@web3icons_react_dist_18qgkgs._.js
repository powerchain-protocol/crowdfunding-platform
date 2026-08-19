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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/wallets/WalletZerion.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>WalletZerion
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-client] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#2461ED',
                d: 'M14.42 11.57C11.122 9.856 7.11 7.635 4.09 5.825 3.201 5.21 3.653 3.9 4.73 3.9h14.94c.833 0 1.39.893.973 1.569-1.004 1.666-2.47 3.782-3.694 5.46-.657.9-1.728 1.054-2.529.64m-4.81.555c3.189 1.633 7.656 4.117 10.83 5.996.984.581.59 1.977-.555 1.977l-7.951.001-7.8.001c-.916 0-1.386-.913-.997-1.55 1.315-2.153 2.792-4.326 4.02-5.948.546-.723 1.657-.886 2.454-.477',
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
                d: 'M14.42 11.57C11.122 9.856 7.11 7.635 4.09 5.825 3.201 5.21 3.653 3.9 4.73 3.9h14.94c.833 0 1.39.893.973 1.569-1.004 1.666-2.47 3.782-3.694 5.46-.657.9-1.728 1.054-2.529.64m-4.81.555c3.189 1.633 7.656 4.117 10.83 5.996.984.581.59 1.977-.555 1.977l-7.951.001-7.8.001c-.916 0-1.386-.913-.997-1.55 1.315-2.153 2.792-4.326 4.02-5.948.546-.723 1.657-.886 2.454-.477',
                fillRule: 'evenodd',
                clipRule: 'evenodd'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#zerion__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#2461ED',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M14.15 11.617c-2.93-1.522-6.496-3.496-9.18-5.105-.792-.548-.39-1.712.567-1.712h13.28c.74 0 1.236.794.865 1.395-.893 1.48-2.195 3.361-3.283 4.852-.585.8-1.537.938-2.248.57m-4.274.494c2.834 1.452 6.805 3.66 9.627 5.33.874.517.524 1.758-.494 1.758L5.008 19.2c-.814 0-1.232-.812-.886-1.378 1.168-1.913 2.481-3.845 3.573-5.287.485-.643 1.473-.787 2.181-.424',
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
                        id: 'zerion__a'
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
 * @component @name WalletZerion
 * @description Web3Icon for WalletZerion
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiMyNDYxRUQiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTE0LjQyIDExLjU3QzExLjEyMiA5Ljg1NiA3LjExIDcuNjM1IDQuMDkgNS44MjUgMy4yMDEgNS4yMSAzLjY1MyAzLjkgNC43MyAzLjloMTQuOTRjLjgzMyAwIDEuMzkuODkzLjk3MyAxLjU2OS0xLjAwNCAxLjY2Ni0yLjQ3IDMuNzgyLTMuNjk0IDUuNDYtLjY1Ny45LTEuNzI4IDEuMDU0LTIuNTI5LjY0bS00LjgxLjU1NWMzLjE4OSAxLjYzMyA3LjY1NiA0LjExNyAxMC44MyA1Ljk5Ni45ODQuNTgxLjU5IDEuOTc3LS41NTUgMS45NzdsLTcuOTUxLjAwMS03LjguMDAxYy0uOTE2IDAtMS4zODYtLjkxMy0uOTk3LTEuNTUgMS4zMTUtMi4xNTMgMi43OTItNC4zMjYgNC4wMi01Ljk0OC41NDYtLjcyMyAxLjY1Ny0uODg2IDIuNDU0LS40NzciIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4K) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTE0LjQyIDExLjU3QzExLjEyMiA5Ljg1NiA3LjExIDcuNjM1IDQuMDkgNS44MjUgMy4yMDEgNS4yMSAzLjY1MyAzLjkgNC43MyAzLjloMTQuOTRjLjgzMyAwIDEuMzkuODkzLjk3MyAxLjU2OS0xLjAwNCAxLjY2Ni0yLjQ3IDMuNzgyLTMuNjk0IDUuNDYtLjY1Ny45LTEuNzI4IDEuMDU0LTIuNTI5LjY0bS00LjgxLjU1NWMzLjE4OSAxLjYzMyA3LjY1NiA0LjExNyAxMC44MyA1Ljk5Ni45ODQuNTgxLjU5IDEuOTc3LS41NTUgMS45NzdsLTcuOTUxLjAwMS03LjguMDAxYy0uOTE2IDAtMS4zODYtLjkxMy0uOTk3LTEuNTUgMS4zMTUtMi4xNTMgMi43OTItNC4zMjYgNC4wMi01Ljk0OC41NDYtLjcyMyAxLjY1Ny0uODg2IDIuNDU0LS40NzciIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4K) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCN6ZXJpb25fX2EpIj4KICAgICAgICA8cGF0aCBmaWxsPSIjMjQ2MUVEIiBkPSJNMjQgMEgwdjI0aDI0eiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTE0LjE1IDExLjYxN2MtMi45My0xLjUyMi02LjQ5Ni0zLjQ5Ni05LjE4LTUuMTA1LS43OTItLjU0OC0uMzktMS43MTIuNTY3LTEuNzEyaDEzLjI4Yy43NCAwIDEuMjM2Ljc5NC44NjUgMS4zOTUtLjg5MyAxLjQ4LTIuMTk1IDMuMzYxLTMuMjgzIDQuODUyLS41ODUuOC0xLjUzNy45MzgtMi4yNDguNTdtLTQuMjc0LjQ5NGMyLjgzNCAxLjQ1MiA2LjgwNSAzLjY2IDkuNjI3IDUuMzMuODc0LjUxNy41MjQgMS43NTgtLjQ5NCAxLjc1OEw1LjAwOCAxOS4yYy0uODE0IDAtMS4yMzItLjgxMi0uODg2LTEuMzc4IDEuMTY4LTEuOTEzIDIuNDgxLTMuODQ1IDMuNTczLTUuMjg3LjQ4NS0uNjQzIDEuNDczLS43ODcgMi4xODEtLjQyNCIgY2xpcC1ydWxlPSJldmVub2RkIi8+CiAgICA8L2c+CiAgICA8ZGVmcz4KICAgICAgICA8Y2xpcFBhdGggaWQ9Inplcmlvbl9fYSI+CiAgICAgICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0wIDBoMjR2MjRIMHoiLz4KICAgICAgICA8L2NsaXBQYXRoPgogICAgPC9kZWZzPgo8L3N2Zz4K)
 * @see https://web3icons.io/wallets/zerion
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const WalletZerion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWeb3Icon"])('WalletZerion', __iconNode);
;
}),
]);

//# sourceMappingURL=1qqr_%40web3icons_react_dist_18qgkgs._.js.map