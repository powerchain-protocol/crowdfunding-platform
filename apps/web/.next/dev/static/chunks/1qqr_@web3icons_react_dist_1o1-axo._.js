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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenNXM.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenNXM
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-client] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#0AB682',
                d: 'M16.363 4.91a1.91 1.91 0 1 1-3.818 0 1.91 1.91 0 0 1 3.818 0M13.38 8.214a1.43 1.43 0 0 0 2.029 0l1.81-1.828a1.725 1.725 0 0 1 2.455 0 1.756 1.756 0 0 1 0 2.471l-4.227 4.255a1.45 1.45 0 0 0 0 2.045l1.756 1.768a1.757 1.757 0 0 1-.562 2.85 1.725 1.725 0 0 1-1.892-.38l-4.13-4.156a1.43 1.43 0 0 0-2.028 0L6.78 17.067a1.725 1.725 0 0 1-2.455 0 1.757 1.757 0 0 1 0-2.47l4.227-4.255a1.45 1.45 0 0 0 0-2.046L6.796 6.53a1.756 1.756 0 0 1 .562-2.85 1.72 1.72 0 0 1 1.893.38zM12 13.636a1.91 1.91 0 1 0 0-3.818 1.91 1.91 0 0 0 0 3.818m6.818 2.455a1.91 1.91 0 1 0 0-3.818 1.91 1.91 0 0 0 0 3.818m-7.364 3a1.91 1.91 0 1 1-3.818 0 1.91 1.91 0 0 1 3.818 0m-6.272-7.844a1.91 1.91 0 1 0 0-3.818 1.91 1.91 0 0 0 0 3.818'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M16.363 4.91a1.91 1.91 0 1 1-3.818-.001 1.91 1.91 0 0 1 3.818 0M13.38 8.214a1.43 1.43 0 0 0 2.029 0l1.81-1.828a1.725 1.725 0 0 1 2.455 0 1.756 1.756 0 0 1 0 2.471l-4.227 4.255a1.45 1.45 0 0 0 0 2.045l1.756 1.768a1.757 1.757 0 0 1-.562 2.85 1.72 1.72 0 0 1-1.892-.38l-4.13-4.156a1.43 1.43 0 0 0-2.028 0L6.78 17.067a1.725 1.725 0 0 1-2.455 0 1.757 1.757 0 0 1 0-2.47l4.227-4.255a1.45 1.45 0 0 0 0-2.046L6.796 6.53a1.756 1.756 0 0 1 .562-2.85 1.72 1.72 0 0 1 1.893.38zM12 13.636a1.91 1.91 0 1 0 0-3.818 1.91 1.91 0 0 0 0 3.818m6.818 2.455a1.91 1.91 0 1 0 0-3.818 1.91 1.91 0 0 0 0 3.818m-7.364 3a1.91 1.91 0 1 1-3.818 0 1.91 1.91 0 0 1 3.818 0m-6.272-7.844a1.91 1.91 0 1 0 0-3.818 1.91 1.91 0 0 0 0 3.818'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#NXM__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#0AB682',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M15.879 5.697a1.697 1.697 0 1 1-3.395 0 1.697 1.697 0 0 1 3.395 0m-2.652 2.938a1.27 1.27 0 0 0 1.803 0l1.61-1.624a1.534 1.534 0 0 1 2.182 0 1.56 1.56 0 0 1 0 2.196l-3.758 3.782a1.29 1.29 0 0 0 0 1.818l1.561 1.571a1.562 1.562 0 0 1-.5 2.534 1.53 1.53 0 0 1-1.682-.337l-3.67-3.695a1.27 1.27 0 0 0-1.804 0l-1.61 1.624a1.53 1.53 0 0 1-2.181 0 1.56 1.56 0 0 1 0-2.196l3.758-3.782a1.29 1.29 0 0 0 0-1.818L7.374 7.137a1.56 1.56 0 0 1 .5-2.534 1.53 1.53 0 0 1 1.682.338zM12 13.455a1.697 1.697 0 1 0 0-3.395 1.697 1.697 0 0 0 0 3.395m6.06 2.181a1.697 1.697 0 1 0 0-3.393 1.697 1.697 0 0 0 0 3.393m-6.545 2.667a1.697 1.697 0 1 1-3.395 0 1.697 1.697 0 0 1 3.395 0m-5.576-6.972a1.697 1.697 0 1 0 0-3.394 1.697 1.697 0 0 0 0 3.394'
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
                        id: 'NXM__a'
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
 * @component @name TokenNXM
 * @description Web3Icon for TokenNXM
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiMwQUI2ODIiIGQ9Ik0xNi4zNjMgNC45MWExLjkxIDEuOTEgMCAxIDEtMy44MTggMCAxLjkxIDEuOTEgMCAwIDEgMy44MTggME0xMy4zOCA4LjIxNGExLjQzIDEuNDMgMCAwIDAgMi4wMjkgMGwxLjgxLTEuODI4YTEuNzI1IDEuNzI1IDAgMCAxIDIuNDU1IDAgMS43NTYgMS43NTYgMCAwIDEgMCAyLjQ3MWwtNC4yMjcgNC4yNTVhMS40NSAxLjQ1IDAgMCAwIDAgMi4wNDVsMS43NTYgMS43NjhhMS43NTcgMS43NTcgMCAwIDEtLjU2MiAyLjg1IDEuNzI1IDEuNzI1IDAgMCAxLTEuODkyLS4zOGwtNC4xMy00LjE1NmExLjQzIDEuNDMgMCAwIDAtMi4wMjggMEw2Ljc4IDE3LjA2N2ExLjcyNSAxLjcyNSAwIDAgMS0yLjQ1NSAwIDEuNzU3IDEuNzU3IDAgMCAxIDAtMi40N2w0LjIyNy00LjI1NWExLjQ1IDEuNDUgMCAwIDAgMC0yLjA0Nkw2Ljc5NiA2LjUzYTEuNzU2IDEuNzU2IDAgMCAxIC41NjItMi44NSAxLjcyIDEuNzIgMCAwIDEgMS44OTMuMzh6TTEyIDEzLjYzNmExLjkxIDEuOTEgMCAxIDAgMC0zLjgxOCAxLjkxIDEuOTEgMCAwIDAgMCAzLjgxOG02LjgxOCAyLjQ1NWExLjkxIDEuOTEgMCAxIDAgMC0zLjgxOCAxLjkxIDEuOTEgMCAwIDAgMCAzLjgxOG0tNy4zNjQgM2ExLjkxIDEuOTEgMCAxIDEtMy44MTggMCAxLjkxIDEuOTEgMCAwIDEgMy44MTggMG0tNi4yNzItNy44NDRhMS45MSAxLjkxIDAgMSAwIDAtMy44MTggMS45MSAxLjkxIDAgMCAwIDAgMy44MTgiLz4KPC9zdmc+Cg==) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xNi4zNjMgNC45MWExLjkxIDEuOTEgMCAxIDEtMy44MTgtLjAwMSAxLjkxIDEuOTEgMCAwIDEgMy44MTggME0xMy4zOCA4LjIxNGExLjQzIDEuNDMgMCAwIDAgMi4wMjkgMGwxLjgxLTEuODI4YTEuNzI1IDEuNzI1IDAgMCAxIDIuNDU1IDAgMS43NTYgMS43NTYgMCAwIDEgMCAyLjQ3MWwtNC4yMjcgNC4yNTVhMS40NSAxLjQ1IDAgMCAwIDAgMi4wNDVsMS43NTYgMS43NjhhMS43NTcgMS43NTcgMCAwIDEtLjU2MiAyLjg1IDEuNzIgMS43MiAwIDAgMS0xLjg5Mi0uMzhsLTQuMTMtNC4xNTZhMS40MyAxLjQzIDAgMCAwLTIuMDI4IDBMNi43OCAxNy4wNjdhMS43MjUgMS43MjUgMCAwIDEtMi40NTUgMCAxLjc1NyAxLjc1NyAwIDAgMSAwLTIuNDdsNC4yMjctNC4yNTVhMS40NSAxLjQ1IDAgMCAwIDAtMi4wNDZMNi43OTYgNi41M2ExLjc1NiAxLjc1NiAwIDAgMSAuNTYyLTIuODUgMS43MiAxLjcyIDAgMCAxIDEuODkzLjM4ek0xMiAxMy42MzZhMS45MSAxLjkxIDAgMSAwIDAtMy44MTggMS45MSAxLjkxIDAgMCAwIDAgMy44MThtNi44MTggMi40NTVhMS45MSAxLjkxIDAgMSAwIDAtMy44MTggMS45MSAxLjkxIDAgMCAwIDAgMy44MThtLTcuMzY0IDNhMS45MSAxLjkxIDAgMSAxLTMuODE4IDAgMS45MSAxLjkxIDAgMCAxIDMuODE4IDBtLTYuMjcyLTcuODQ0YTEuOTEgMS45MSAwIDEgMCAwLTMuODE4IDEuOTEgMS45MSAwIDAgMCAwIDMuODE4Ii8+Cjwvc3ZnPgo=) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNOWE1fX2EpIj4KICAgICAgICA8cGF0aCBmaWxsPSIjMEFCNjgyIiBkPSJNMjQgMEgwdjI0aDI0eiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xNS44NzkgNS42OTdhMS42OTcgMS42OTcgMCAxIDEtMy4zOTUgMCAxLjY5NyAxLjY5NyAwIDAgMSAzLjM5NSAwbS0yLjY1MiAyLjkzOGExLjI3IDEuMjcgMCAwIDAgMS44MDMgMGwxLjYxLTEuNjI0YTEuNTM0IDEuNTM0IDAgMCAxIDIuMTgyIDAgMS41NiAxLjU2IDAgMCAxIDAgMi4xOTZsLTMuNzU4IDMuNzgyYTEuMjkgMS4yOSAwIDAgMCAwIDEuODE4bDEuNTYxIDEuNTcxYTEuNTYyIDEuNTYyIDAgMCAxLS41IDIuNTM0IDEuNTMgMS41MyAwIDAgMS0xLjY4Mi0uMzM3bC0zLjY3LTMuNjk1YTEuMjcgMS4yNyAwIDAgMC0xLjgwNCAwbC0xLjYxIDEuNjI0YTEuNTMgMS41MyAwIDAgMS0yLjE4MSAwIDEuNTYgMS41NiAwIDAgMSAwLTIuMTk2bDMuNzU4LTMuNzgyYTEuMjkgMS4yOSAwIDAgMCAwLTEuODE4TDcuMzc0IDcuMTM3YTEuNTYgMS41NiAwIDAgMSAuNS0yLjUzNCAxLjUzIDEuNTMgMCAwIDEgMS42ODIuMzM4ek0xMiAxMy40NTVhMS42OTcgMS42OTcgMCAxIDAgMC0zLjM5NSAxLjY5NyAxLjY5NyAwIDAgMCAwIDMuMzk1bTYuMDYgMi4xODFhMS42OTcgMS42OTcgMCAxIDAgMC0zLjM5MyAxLjY5NyAxLjY5NyAwIDAgMCAwIDMuMzkzbS02LjU0NSAyLjY2N2ExLjY5NyAxLjY5NyAwIDEgMS0zLjM5NSAwIDEuNjk3IDEuNjk3IDAgMCAxIDMuMzk1IDBtLTUuNTc2LTYuOTcyYTEuNjk3IDEuNjk3IDAgMSAwIDAtMy4zOTQgMS42OTcgMS42OTcgMCAwIDAgMCAzLjM5NCIvPgogICAgPC9nPgogICAgPGRlZnM+CiAgICAgICAgPGNsaXBQYXRoIGlkPSJOWE1fX2EiPgogICAgICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMCAwaDI0djI0SDB6Ii8+CiAgICAgICAgPC9jbGlwUGF0aD4KICAgIDwvZGVmcz4KPC9zdmc+Cg==)
 * @see https://web3icons.io/tokens/NXM
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenNXM = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenNXM', __iconNode);
;
}),
]);

//# sourceMappingURL=1qqr_%40web3icons_react_dist_1o1-axo._.js.map