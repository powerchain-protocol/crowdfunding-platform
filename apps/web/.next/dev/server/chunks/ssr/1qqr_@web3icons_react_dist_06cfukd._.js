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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/networks/NetworkBitkubChain.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>NetworkBitkubChain
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-ssr] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#02D767',
                d: 'm7.89 11.164-.013.012a1.157 1.157 0 0 0-.003 1.636l.012.012c.45.452 1.183.454 1.636.003l.012-.012c.453-.45.454-1.183.003-1.636l-.012-.012a1.157 1.157 0 0 0-1.636-.003'
            }
        ],
        [
            'path',
            {
                fill: '#02D767',
                d: 'M8.761 6.238 7.522 7.472l.008.008-3.305 3.29v-.006L3 11.982l.005.005-.005.005 1.211 1.216 4.51 4.554s1.067-1.407.018-2.46l-3.3-3.317 3.303-3.292 1.667 1.678c1.422 1.43 2.436-.032 2.436-.032zm12.223 5.772.016-.015-5.702-5.727s-1.047 1.369-.055 2.365l3.367 3.381-3.296 3.283-1.542-1.547c-1.105-1.11-2.569-.105-2.569-.105l4.064 4.08 5.726-5.705z'
            }
        ],
        [
            'path',
            {
                fill: '#02D767',
                d: 'm14.482 11.164-.012.012a1.157 1.157 0 0 0-.004 1.636l.013.012c.45.452 1.183.454 1.636.003l.012-.012c.452-.45.454-1.183.003-1.636l-.012-.012a1.157 1.157 0 0 0-1.636-.003'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'm7.89 11.164-.013.012a1.157 1.157 0 0 0-.003 1.636l.012.012c.45.452 1.183.454 1.636.003l.012-.012c.453-.45.454-1.183.003-1.636l-.012-.012a1.157 1.157 0 0 0-1.636-.003'
            }
        ],
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M8.761 6.238 7.522 7.472l.008.008-3.305 3.29v-.006L3 11.982l.005.005-.005.005 1.211 1.216 4.51 4.554s1.067-1.407.018-2.46l-3.3-3.317 3.303-3.292 1.667 1.678c1.422 1.43 2.436-.032 2.436-.032zm12.223 5.772.016-.015-5.702-5.727s-1.047 1.369-.055 2.365l3.367 3.381-3.296 3.283-1.542-1.547c-1.105-1.11-2.569-.105-2.569-.105l4.064 4.08 5.726-5.705z'
            }
        ],
        [
            'path',
            {
                fill: 'currentColor',
                d: 'm14.482 11.164-.012.012a1.157 1.157 0 0 0-.004 1.636l.013.012c.45.452 1.183.454 1.636.003l.012-.012c.452-.45.454-1.183.003-1.636l-.012-.012a1.157 1.157 0 0 0-1.636-.003'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#bitkub-chain__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#02D767',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'm8.346 11.257-.01.01a1.03 1.03 0 0 0-.004 1.454l.011.011c.4.403 1.052.404 1.454.003l.011-.01a1.03 1.03 0 0 0 .003-1.455l-.01-.01a1.03 1.03 0 0 0-1.455-.003'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M9.121 6.879 8.02 7.975l.007.007-2.938 2.924v-.005L4 11.984l.004.004-.004.005 1.077 1.08 4.009 4.049s.947-1.25.016-2.187l-2.935-2.948L9.104 9.06l1.482 1.492c1.264 1.27 2.165-.028 2.165-.028zm10.865 5.13.014-.014-5.069-5.09s-.93 1.217-.049 2.102l2.993 3.006-2.93 2.918-1.37-1.375c-.982-.987-2.283-.093-2.283-.093l3.611 3.625 5.09-5.07z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'm14.207 11.257-.011.01a1.03 1.03 0 0 0-.003 1.454l.01.011a1.03 1.03 0 0 0 1.455.003l.01-.01a1.03 1.03 0 0 0 .003-1.455l-.01-.01a1.03 1.03 0 0 0-1.454-.003'
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
                        id: 'bitkub-chain__a'
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
 * @component @name NetworkBitkubChain
 * @description Web3Icon for NetworkBitkubChain
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiMwMkQ3NjciIGQ9Im03Ljg5IDExLjE2NC0uMDEzLjAxMmExLjE1NyAxLjE1NyAwIDAgMC0uMDAzIDEuNjM2bC4wMTIuMDEyYy40NS40NTIgMS4xODMuNDU0IDEuNjM2LjAwM2wuMDEyLS4wMTJjLjQ1My0uNDUuNDU0LTEuMTgzLjAwMy0xLjYzNmwtLjAxMi0uMDEyYTEuMTU3IDEuMTU3IDAgMCAwLTEuNjM2LS4wMDMiLz4KICAgIDxwYXRoIGZpbGw9IiMwMkQ3NjciIGQ9Ik04Ljc2MSA2LjIzOCA3LjUyMiA3LjQ3MmwuMDA4LjAwOC0zLjMwNSAzLjI5di0uMDA2TDMgMTEuOTgybC4wMDUuMDA1LS4wMDUuMDA1IDEuMjExIDEuMjE2IDQuNTEgNC41NTRzMS4wNjctMS40MDcuMDE4LTIuNDZsLTMuMy0zLjMxNyAzLjMwMy0zLjI5MiAxLjY2NyAxLjY3OGMxLjQyMiAxLjQzIDIuNDM2LS4wMzIgMi40MzYtLjAzMnptMTIuMjIzIDUuNzcyLjAxNi0uMDE1LTUuNzAyLTUuNzI3cy0xLjA0NyAxLjM2OS0uMDU1IDIuMzY1bDMuMzY3IDMuMzgxLTMuMjk2IDMuMjgzLTEuNTQyLTEuNTQ3Yy0xLjEwNS0xLjExLTIuNTY5LS4xMDUtMi41NjktLjEwNWw0LjA2NCA0LjA4IDUuNzI2LTUuNzA1eiIvPgogICAgPHBhdGggZmlsbD0iIzAyRDc2NyIgZD0ibTE0LjQ4MiAxMS4xNjQtLjAxMi4wMTJhMS4xNTcgMS4xNTcgMCAwIDAtLjAwNCAxLjYzNmwuMDEzLjAxMmMuNDUuNDUyIDEuMTgzLjQ1NCAxLjYzNi4wMDNsLjAxMi0uMDEyYy40NTItLjQ1LjQ1NC0xLjE4My4wMDMtMS42MzZsLS4wMTItLjAxMmExLjE1NyAxLjE1NyAwIDAgMC0xLjYzNi0uMDAzIi8+Cjwvc3ZnPgo=) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Im03Ljg5IDExLjE2NC0uMDEzLjAxMmExLjE1NyAxLjE1NyAwIDAgMC0uMDAzIDEuNjM2bC4wMTIuMDEyYy40NS40NTIgMS4xODMuNDU0IDEuNjM2LjAwM2wuMDEyLS4wMTJjLjQ1My0uNDUuNDU0LTEuMTgzLjAwMy0xLjYzNmwtLjAxMi0uMDEyYTEuMTU3IDEuMTU3IDAgMCAwLTEuNjM2LS4wMDMiLz4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik04Ljc2MSA2LjIzOCA3LjUyMiA3LjQ3MmwuMDA4LjAwOC0zLjMwNSAzLjI5di0uMDA2TDMgMTEuOTgybC4wMDUuMDA1LS4wMDUuMDA1IDEuMjExIDEuMjE2IDQuNTEgNC41NTRzMS4wNjctMS40MDcuMDE4LTIuNDZsLTMuMy0zLjMxNyAzLjMwMy0zLjI5MiAxLjY2NyAxLjY3OGMxLjQyMiAxLjQzIDIuNDM2LS4wMzIgMi40MzYtLjAzMnptMTIuMjIzIDUuNzcyLjAxNi0uMDE1LTUuNzAyLTUuNzI3cy0xLjA0NyAxLjM2OS0uMDU1IDIuMzY1bDMuMzY3IDMuMzgxLTMuMjk2IDMuMjgzLTEuNTQyLTEuNTQ3Yy0xLjEwNS0xLjExLTIuNTY5LS4xMDUtMi41NjktLjEwNWw0LjA2NCA0LjA4IDUuNzI2LTUuNzA1eiIvPgogICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0ibTE0LjQ4MiAxMS4xNjQtLjAxMi4wMTJhMS4xNTcgMS4xNTcgMCAwIDAtLjAwNCAxLjYzNmwuMDEzLjAxMmMuNDUuNDUyIDEuMTgzLjQ1NCAxLjYzNi4wMDNsLjAxMi0uMDEyYy40NTItLjQ1LjQ1NC0xLjE4My4wMDMtMS42MzZsLS4wMTItLjAxMmExLjE1NyAxLjE1NyAwIDAgMC0xLjYzNi0uMDAzIi8+Cjwvc3ZnPgo=) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNiaXRrdWItY2hhaW5fX2EpIj4KICAgICAgICA8cGF0aCBmaWxsPSIjMDJENzY3IiBkPSJNMjQgMEgwdjI0aDI0eiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Im04LjM0NiAxMS4yNTctLjAxLjAxYTEuMDMgMS4wMyAwIDAgMC0uMDA0IDEuNDU0bC4wMTEuMDExYy40LjQwMyAxLjA1Mi40MDQgMS40NTQuMDAzbC4wMTEtLjAxYTEuMDMgMS4wMyAwIDAgMCAuMDAzLTEuNDU1bC0uMDEtLjAxYTEuMDMgMS4wMyAwIDAgMC0xLjQ1NS0uMDAzIi8+CiAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTkuMTIxIDYuODc5IDguMDIgNy45NzVsLjAwNy4wMDctMi45MzggMi45MjR2LS4wMDVMNCAxMS45ODRsLjAwNC4wMDQtLjAwNC4wMDUgMS4wNzcgMS4wOCA0LjAwOSA0LjA0OXMuOTQ3LTEuMjUuMDE2LTIuMTg3bC0yLjkzNS0yLjk0OEw5LjEwNCA5LjA2bDEuNDgyIDEuNDkyYzEuMjY0IDEuMjcgMi4xNjUtLjAyOCAyLjE2NS0uMDI4em0xMC44NjUgNS4xMy4wMTQtLjAxNC01LjA2OS01LjA5cy0uOTMgMS4yMTctLjA0OSAyLjEwMmwyLjk5MyAzLjAwNi0yLjkzIDIuOTE4LTEuMzctMS4zNzVjLS45ODItLjk4Ny0yLjI4My0uMDkzLTIuMjgzLS4wOTNsMy42MTEgMy42MjUgNS4wOS01LjA3eiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Im0xNC4yMDcgMTEuMjU3LS4wMTEuMDFhMS4wMyAxLjAzIDAgMCAwLS4wMDMgMS40NTRsLjAxLjAxMWExLjAzIDEuMDMgMCAwIDAgMS40NTUuMDAzbC4wMS0uMDFhMS4wMyAxLjAzIDAgMCAwIC4wMDMtMS40NTVsLS4wMS0uMDFhMS4wMyAxLjAzIDAgMCAwLTEuNDU0LS4wMDMiLz4KICAgIDwvZz4KICAgIDxkZWZzPgogICAgICAgIDxjbGlwUGF0aCBpZD0iYml0a3ViLWNoYWluX19hIj4KICAgICAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTAgMGgyNHYyNEgweiIvPgogICAgICAgIDwvY2xpcFBhdGg+CiAgICA8L2RlZnM+Cjwvc3ZnPgo=)
 * @see https://web3icons.io/networks/bitkub-chain
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const NetworkBitkubChain = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createWeb3Icon"])('NetworkBitkubChain', __iconNode);
;
}),
];

//# sourceMappingURL=1qqr_%40web3icons_react_dist_06cfukd._.js.map