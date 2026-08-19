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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenZLK.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenZLK
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-client] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#000',
                d: 'M4.217 7.703c0-.175.092-.34.243-.423l7.141-4.212a.49.49 0 0 1 .486-.005l7.448 4.217a.49.49 0 0 1 .248.428v8.581a.49.49 0 0 1-.248.428l-7.452 4.218a.49.49 0 0 1-.487 0L4.46 16.717a.49.49 0 0 1-.243-.423zm2.18.91a.5.5 0 0 0-.234.418v6.09c0 .176.092.336.238.424l5.19 3.113a.49.49 0 0 0 .497 0l2.286-1.372a.496.496 0 0 0-.005-.846L9.81 13.764a.5.5 0 0 1-.243-.427V7.528a.486.486 0 0 0-.74-.418L6.396 8.618z'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M4.217 7.703c0-.175.092-.34.243-.423l7.141-4.212a.49.49 0 0 1 .486-.005l7.448 4.217a.49.49 0 0 1 .248.428v8.581a.49.49 0 0 1-.248.428l-7.452 4.218a.49.49 0 0 1-.487 0L4.46 16.717a.49.49 0 0 1-.243-.423zm2.18.91a.5.5 0 0 0-.234.418v6.09c0 .176.092.336.238.424l5.19 3.113a.49.49 0 0 0 .497 0l2.286-1.372a.496.496 0 0 0-.005-.846L9.81 13.764a.5.5 0 0 1-.243-.427V7.528a.486.486 0 0 0-.74-.418L6.396 8.618z'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#ZLK__a)'
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
                        fill: '#fff',
                        d: 'M5.082 8.18c0-.155.082-.302.216-.375l6.347-3.745a.43.43 0 0 1 .433-.004l6.62 3.749a.43.43 0 0 1 .22.38v7.628a.43.43 0 0 1-.22.38l-6.625 3.749a.43.43 0 0 1-.432 0l-6.343-3.749a.43.43 0 0 1-.216-.376zm1.937.81a.44.44 0 0 0-.208.371v5.414a.44.44 0 0 0 .212.376l4.614 2.767a.43.43 0 0 0 .44 0L14.11 16.7a.44.44 0 0 0-.004-.752l-4.052-2.378a.45.45 0 0 1-.216-.38V8.024a.432.432 0 0 0-.657-.372l-2.162 1.34z'
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
                        id: 'ZLK__a'
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
 * @component @name TokenZLK
 * @description Web3Icon for TokenZLK
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiMwMDAiIGQ9Ik00LjIxNyA3LjcwM2MwLS4xNzUuMDkyLS4zNC4yNDMtLjQyM2w3LjE0MS00LjIxMmEuNDkuNDkgMCAwIDEgLjQ4Ni0uMDA1bDcuNDQ4IDQuMjE3YS40OS40OSAwIDAgMSAuMjQ4LjQyOHY4LjU4MWEuNDkuNDkgMCAwIDEtLjI0OC40MjhsLTcuNDUyIDQuMjE4YS40OS40OSAwIDAgMS0uNDg3IDBMNC40NiAxNi43MTdhLjQ5LjQ5IDAgMCAxLS4yNDMtLjQyM3ptMi4xOC45MWEuNS41IDAgMCAwLS4yMzQuNDE4djYuMDljMCAuMTc2LjA5Mi4zMzYuMjM4LjQyNGw1LjE5IDMuMTEzYS40OS40OSAwIDAgMCAuNDk3IDBsMi4yODYtMS4zNzJhLjQ5Ni40OTYgMCAwIDAtLjAwNS0uODQ2TDkuODEgMTMuNzY0YS41LjUgMCAwIDEtLjI0My0uNDI3VjcuNTI4YS40ODYuNDg2IDAgMCAwLS43NC0uNDE4TDYuMzk2IDguNjE4eiIvPgo8L3N2Zz4K) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik00LjIxNyA3LjcwM2MwLS4xNzUuMDkyLS4zNC4yNDMtLjQyM2w3LjE0MS00LjIxMmEuNDkuNDkgMCAwIDEgLjQ4Ni0uMDA1bDcuNDQ4IDQuMjE3YS40OS40OSAwIDAgMSAuMjQ4LjQyOHY4LjU4MWEuNDkuNDkgMCAwIDEtLjI0OC40MjhsLTcuNDUyIDQuMjE4YS40OS40OSAwIDAgMS0uNDg3IDBMNC40NiAxNi43MTdhLjQ5LjQ5IDAgMCAxLS4yNDMtLjQyM3ptMi4xOC45MWEuNS41IDAgMCAwLS4yMzQuNDE4djYuMDljMCAuMTc2LjA5Mi4zMzYuMjM4LjQyNGw1LjE5IDMuMTEzYS40OS40OSAwIDAgMCAuNDk3IDBsMi4yODYtMS4zNzJhLjQ5Ni40OTYgMCAwIDAtLjAwNS0uODQ2TDkuODEgMTMuNzY0YS41LjUgMCAwIDEtLjI0My0uNDI3VjcuNTI4YS40ODYuNDg2IDAgMCAwLS43NC0uNDE4TDYuMzk2IDguNjE4eiIvPgo8L3N2Zz4K) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNaTEtfX2EpIj4KICAgICAgICA8cGF0aCBmaWxsPSIjMDAwIiBkPSJNMjQgMEgwdjI0aDI0eiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik01LjA4MiA4LjE4YzAtLjE1NS4wODItLjMwMi4yMTYtLjM3NWw2LjM0Ny0zLjc0NWEuNDMuNDMgMCAwIDEgLjQzMy0uMDA0bDYuNjIgMy43NDlhLjQzLjQzIDAgMCAxIC4yMi4zOHY3LjYyOGEuNDMuNDMgMCAwIDEtLjIyLjM4bC02LjYyNSAzLjc0OWEuNDMuNDMgMCAwIDEtLjQzMiAwbC02LjM0My0zLjc0OWEuNDMuNDMgMCAwIDEtLjIxNi0uMzc2em0xLjkzNy44MWEuNDQuNDQgMCAwIDAtLjIwOC4zNzF2NS40MTRhLjQ0LjQ0IDAgMCAwIC4yMTIuMzc2bDQuNjE0IDIuNzY3YS40My40MyAwIDAgMCAuNDQgMEwxNC4xMSAxNi43YS40NC40NCAwIDAgMC0uMDA0LS43NTJsLTQuMDUyLTIuMzc4YS40NS40NSAwIDAgMS0uMjE2LS4zOFY4LjAyNGEuNDMyLjQzMiAwIDAgMC0uNjU3LS4zNzJsLTIuMTYyIDEuMzR6Ii8+CiAgICA8L2c+CiAgICA8ZGVmcz4KICAgICAgICA8Y2xpcFBhdGggaWQ9IlpMS19fYSI+CiAgICAgICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0wIDBoMjR2MjRIMHoiLz4KICAgICAgICA8L2NsaXBQYXRoPgogICAgPC9kZWZzPgo8L3N2Zz4K)
 * @see https://web3icons.io/tokens/ZLK
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenZLK = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenZLK', __iconNode);
;
}),
]);

//# sourceMappingURL=1qqr_%40web3icons_react_dist_0mfcjak._.js.map