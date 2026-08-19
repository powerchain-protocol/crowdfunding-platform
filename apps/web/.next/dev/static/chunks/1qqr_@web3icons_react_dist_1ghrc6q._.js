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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenBCT.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenBCT
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-client] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#FEFEFE',
                d: 'M11.643 3.146a.51.51 0 0 1 .716 0l3.613 3.613a.515.515 0 0 1 0 .727l-3.608 3.608a.51.51 0 0 1-.726 0L8.03 7.486a.51.51 0 0 1 0-.727z'
            }
        ],
        [
            'path',
            {
                fill: '#00A0E1',
                d: 'M16.514 8.03a.51.51 0 0 1 .726 0l3.608 3.607a.52.52 0 0 1 .152.364.5.5 0 0 1-.152.363l-3.608 3.608a.51.51 0 0 1-.726 0l-3.608-3.608a.514.514 0 0 1 0-.727zm-4.872 4.876a.51.51 0 0 1 .716 0l3.613 3.608a.513.513 0 0 1 0 .727l-3.608 3.608a.51.51 0 0 1-.726 0L8.029 17.24a.51.51 0 0 1 0-.727l3.608-3.608zM6.76 8.03a.51.51 0 0 1 .726 0l3.608 3.608a.52.52 0 0 1 .112.56.5.5 0 0 1-.112.167l-3.608 3.608a.51.51 0 0 1-.726 0l-3.608-3.608a.513.513 0 0 1 0-.727z'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M11.643 3.146a.51.51 0 0 1 .716 0l3.613 3.613a.513.513 0 0 1 0 .727l-3.608 3.608a.514.514 0 0 1-.726 0L8.03 7.486a.51.51 0 0 1 0-.727zm4.871 4.884a.51.51 0 0 1 .726 0l3.608 3.607a.52.52 0 0 1 .112.56.5.5 0 0 1-.112.167l-3.608 3.608a.51.51 0 0 1-.726 0l-3.608-3.608a.513.513 0 0 1 0-.727zm-4.872 4.876a.51.51 0 0 1 .716 0l3.613 3.608a.513.513 0 0 1 0 .727l-3.608 3.608a.51.51 0 0 1-.726 0L8.029 17.24a.51.51 0 0 1 0-.727l3.608-3.608zM6.76 8.03a.51.51 0 0 1 .726 0l3.608 3.608a.52.52 0 0 1 .152.364.5.5 0 0 1-.152.363l-3.608 3.608a.51.51 0 0 1-.726 0l-3.608-3.608a.51.51 0 0 1 0-.727z'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#BCT__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#00A0E1',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M11.683 4.13a.455.455 0 0 1 .636 0l3.212 3.212a.456.456 0 0 1 0 .645l-3.207 3.207a.46.46 0 0 1-.498.1.5.5 0 0 1-.148-.1L8.471 7.988a.455.455 0 0 1 0-.645zm4.329 4.34a.454.454 0 0 1 .646 0l3.207 3.207a.46.46 0 0 1 .1.498.5.5 0 0 1-.1.148l-3.207 3.207a.456.456 0 0 1-.646 0l-3.207-3.207a.455.455 0 0 1 0-.646zm-4.33 4.336a.456.456 0 0 1 .636 0l3.212 3.207a.457.457 0 0 1 0 .645l-3.207 3.207a.454.454 0 0 1-.646 0L8.47 16.66a.455.455 0 0 1 0-.646l3.207-3.208zM7.342 8.47a.455.455 0 0 1 .646 0l3.207 3.207a.46.46 0 0 1 .134.323.46.46 0 0 1-.134.323L7.988 15.53a.456.456 0 0 1-.646 0l-3.207-3.207a.453.453 0 0 1 0-.646z'
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
                        id: 'BCT__a'
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
 * @component @name TokenBCT
 * @description Web3Icon for TokenBCT
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNGRUZFRkUiIGQ9Ik0xMS42NDMgMy4xNDZhLjUxLjUxIDAgMCAxIC43MTYgMGwzLjYxMyAzLjYxM2EuNTE1LjUxNSAwIDAgMSAwIC43MjdsLTMuNjA4IDMuNjA4YS41MS41MSAwIDAgMS0uNzI2IDBMOC4wMyA3LjQ4NmEuNTEuNTEgMCAwIDEgMC0uNzI3eiIvPgogICAgPHBhdGggZmlsbD0iIzAwQTBFMSIgZD0iTTE2LjUxNCA4LjAzYS41MS41MSAwIDAgMSAuNzI2IDBsMy42MDggMy42MDdhLjUyLjUyIDAgMCAxIC4xNTIuMzY0LjUuNSAwIDAgMS0uMTUyLjM2M2wtMy42MDggMy42MDhhLjUxLjUxIDAgMCAxLS43MjYgMGwtMy42MDgtMy42MDhhLjUxNC41MTQgMCAwIDEgMC0uNzI3em0tNC44NzIgNC44NzZhLjUxLjUxIDAgMCAxIC43MTYgMGwzLjYxMyAzLjYwOGEuNTEzLjUxMyAwIDAgMSAwIC43MjdsLTMuNjA4IDMuNjA4YS41MS41MSAwIDAgMS0uNzI2IDBMOC4wMjkgMTcuMjRhLjUxLjUxIDAgMCAxIDAtLjcyN2wzLjYwOC0zLjYwOHpNNi43NiA4LjAzYS41MS41MSAwIDAgMSAuNzI2IDBsMy42MDggMy42MDhhLjUyLjUyIDAgMCAxIC4xMTIuNTYuNS41IDAgMCAxLS4xMTIuMTY3bC0zLjYwOCAzLjYwOGEuNTEuNTEgMCAwIDEtLjcyNiAwbC0zLjYwOC0zLjYwOGEuNTEzLjUxMyAwIDAgMSAwLS43Mjd6Ii8+Cjwvc3ZnPgo=) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xMS42NDMgMy4xNDZhLjUxLjUxIDAgMCAxIC43MTYgMGwzLjYxMyAzLjYxM2EuNTEzLjUxMyAwIDAgMSAwIC43MjdsLTMuNjA4IDMuNjA4YS41MTQuNTE0IDAgMCAxLS43MjYgMEw4LjAzIDcuNDg2YS41MS41MSAwIDAgMSAwLS43Mjd6bTQuODcxIDQuODg0YS41MS41MSAwIDAgMSAuNzI2IDBsMy42MDggMy42MDdhLjUyLjUyIDAgMCAxIC4xMTIuNTYuNS41IDAgMCAxLS4xMTIuMTY3bC0zLjYwOCAzLjYwOGEuNTEuNTEgMCAwIDEtLjcyNiAwbC0zLjYwOC0zLjYwOGEuNTEzLjUxMyAwIDAgMSAwLS43Mjd6bS00Ljg3MiA0Ljg3NmEuNTEuNTEgMCAwIDEgLjcxNiAwbDMuNjEzIDMuNjA4YS41MTMuNTEzIDAgMCAxIDAgLjcyN2wtMy42MDggMy42MDhhLjUxLjUxIDAgMCAxLS43MjYgMEw4LjAyOSAxNy4yNGEuNTEuNTEgMCAwIDEgMC0uNzI3bDMuNjA4LTMuNjA4ek02Ljc2IDguMDNhLjUxLjUxIDAgMCAxIC43MjYgMGwzLjYwOCAzLjYwOGEuNTIuNTIgMCAwIDEgLjE1Mi4zNjQuNS41IDAgMCAxLS4xNTIuMzYzbC0zLjYwOCAzLjYwOGEuNTEuNTEgMCAwIDEtLjcyNiAwbC0zLjYwOC0zLjYwOGEuNTEuNTEgMCAwIDEgMC0uNzI3eiIvPgo8L3N2Zz4K) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNCQ1RfX2EpIj4KICAgICAgICA8cGF0aCBmaWxsPSIjMDBBMEUxIiBkPSJNMjQgMEgwdjI0aDI0eiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xMS42ODMgNC4xM2EuNDU1LjQ1NSAwIDAgMSAuNjM2IDBsMy4yMTIgMy4yMTJhLjQ1Ni40NTYgMCAwIDEgMCAuNjQ1bC0zLjIwNyAzLjIwN2EuNDYuNDYgMCAwIDEtLjQ5OC4xLjUuNSAwIDAgMS0uMTQ4LS4xTDguNDcxIDcuOTg4YS40NTUuNDU1IDAgMCAxIDAtLjY0NXptNC4zMjkgNC4zNGEuNDU0LjQ1NCAwIDAgMSAuNjQ2IDBsMy4yMDcgMy4yMDdhLjQ2LjQ2IDAgMCAxIC4xLjQ5OC41LjUgMCAwIDEtLjEuMTQ4bC0zLjIwNyAzLjIwN2EuNDU2LjQ1NiAwIDAgMS0uNjQ2IDBsLTMuMjA3LTMuMjA3YS40NTUuNDU1IDAgMCAxIDAtLjY0NnptLTQuMzMgNC4zMzZhLjQ1Ni40NTYgMCAwIDEgLjYzNiAwbDMuMjEyIDMuMjA3YS40NTcuNDU3IDAgMCAxIDAgLjY0NWwtMy4yMDcgMy4yMDdhLjQ1NC40NTQgMCAwIDEtLjY0NiAwTDguNDcgMTYuNjZhLjQ1NS40NTUgMCAwIDEgMC0uNjQ2bDMuMjA3LTMuMjA4ek03LjM0MiA4LjQ3YS40NTUuNDU1IDAgMCAxIC42NDYgMGwzLjIwNyAzLjIwN2EuNDYuNDYgMCAwIDEgLjEzNC4zMjMuNDYuNDYgMCAwIDEtLjEzNC4zMjNMNy45ODggMTUuNTNhLjQ1Ni40NTYgMCAwIDEtLjY0NiAwbC0zLjIwNy0zLjIwN2EuNDUzLjQ1MyAwIDAgMSAwLS42NDZ6Ii8+CiAgICA8L2c+CiAgICA8ZGVmcz4KICAgICAgICA8Y2xpcFBhdGggaWQ9IkJDVF9fYSI+CiAgICAgICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0wIDBoMjR2MjRIMHoiLz4KICAgICAgICA8L2NsaXBQYXRoPgogICAgPC9kZWZzPgo8L3N2Zz4K)
 * @see https://web3icons.io/tokens/BCT
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenBCT = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenBCT', __iconNode);
;
}),
]);

//# sourceMappingURL=1qqr_%40web3icons_react_dist_1ghrc6q._.js.map