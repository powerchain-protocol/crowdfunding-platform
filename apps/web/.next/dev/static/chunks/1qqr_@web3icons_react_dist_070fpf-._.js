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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenTRU.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenTRU
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-client] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#1A5AFF',
                d: 'M13.333 9.606H10.46l-4.547 7.99L3 15.94l4.754-8.355a2.63 2.63 0 0 1 2.288-1.33h3.29zM7.116 6.255h-3.83v3.83a3.83 3.83 0 0 0 3.83-3.83M15.2 7.588a2.63 2.63 0 0 1 2.29-1.333H21v3.351h-3.092l-3.864 6.806a2.63 2.63 0 0 1-2.29 1.333H8.073v-3.351h3.264zm3.885 8.242a1.915 1.915 0 1 0 0-3.83 1.915 1.915 0 0 0 0 3.83',
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
                d: 'M13.333 9.606H10.46l-4.547 7.991L3 15.939l4.754-8.354a2.63 2.63 0 0 1 2.288-1.33h3.29zM7.116 6.255h-3.83v3.83a3.83 3.83 0 0 0 3.83-3.83M15.2 7.588a2.63 2.63 0 0 1 2.29-1.333H21v3.351h-3.092l-3.864 6.806a2.63 2.63 0 0 1-2.29 1.333H8.073v-3.351h3.264zm3.885 8.242a1.915 1.915 0 1 0 0-3.83 1.915 1.915 0 0 0 0 3.83',
                fillRule: 'evenodd',
                clipRule: 'evenodd'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#TRU__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#1A5AFF',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M13.185 9.872H10.63l-4.042 7.103L4 15.502l4.226-7.426a2.34 2.34 0 0 1 2.033-1.183h2.925zM7.659 6.893H4.254v3.404A3.404 3.404 0 0 0 7.66 6.893m7.186 1.185a2.34 2.34 0 0 1 2.036-1.185H20v2.979h-2.748l-3.435 6.05a2.34 2.34 0 0 1-2.035 1.185H8.509v-2.98h2.901zm3.453 7.326a1.702 1.702 0 1 0 0-3.403 1.702 1.702 0 0 0 0 3.403',
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
                        id: 'TRU__a'
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
 * @component @name TokenTRU
 * @description Web3Icon for TokenTRU
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiMxQTVBRkYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTEzLjMzMyA5LjYwNkgxMC40NmwtNC41NDcgNy45OUwzIDE1Ljk0bDQuNzU0LTguMzU1YTIuNjMgMi42MyAwIDAgMSAyLjI4OC0xLjMzaDMuMjl6TTcuMTE2IDYuMjU1aC0zLjgzdjMuODNhMy44MyAzLjgzIDAgMCAwIDMuODMtMy44M00xNS4yIDcuNTg4YTIuNjMgMi42MyAwIDAgMSAyLjI5LTEuMzMzSDIxdjMuMzUxaC0zLjA5MmwtMy44NjQgNi44MDZhMi42MyAyLjYzIDAgMCAxLTIuMjkgMS4zMzNIOC4wNzN2LTMuMzUxaDMuMjY0em0zLjg4NSA4LjI0MmExLjkxNSAxLjkxNSAwIDEgMCAwLTMuODMgMS45MTUgMS45MTUgMCAwIDAgMCAzLjgzIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+Cg==) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTEzLjMzMyA5LjYwNkgxMC40NmwtNC41NDcgNy45OTFMMyAxNS45MzlsNC43NTQtOC4zNTRhMi42MyAyLjYzIDAgMCAxIDIuMjg4LTEuMzNoMy4yOXpNNy4xMTYgNi4yNTVoLTMuODN2My44M2EzLjgzIDMuODMgMCAwIDAgMy44My0zLjgzTTE1LjIgNy41ODhhMi42MyAyLjYzIDAgMCAxIDIuMjktMS4zMzNIMjF2My4zNTFoLTMuMDkybC0zLjg2NCA2LjgwNmEyLjYzIDIuNjMgMCAwIDEtMi4yOSAxLjMzM0g4LjA3M3YtMy4zNTFoMy4yNjR6bTMuODg1IDguMjQyYTEuOTE1IDEuOTE1IDAgMSAwIDAtMy44MyAxLjkxNSAxLjkxNSAwIDAgMCAwIDMuODMiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4K) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNUUlVfX2EpIj4KICAgICAgICA8cGF0aCBmaWxsPSIjMUE1QUZGIiBkPSJNMjQgMEgwdjI0aDI0eiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTEzLjE4NSA5Ljg3MkgxMC42M2wtNC4wNDIgNy4xMDNMNCAxNS41MDJsNC4yMjYtNy40MjZhMi4zNCAyLjM0IDAgMCAxIDIuMDMzLTEuMTgzaDIuOTI1ek03LjY1OSA2Ljg5M0g0LjI1NHYzLjQwNEEzLjQwNCAzLjQwNCAwIDAgMCA3LjY2IDYuODkzbTcuMTg2IDEuMTg1YTIuMzQgMi4zNCAwIDAgMSAyLjAzNi0xLjE4NUgyMHYyLjk3OWgtMi43NDhsLTMuNDM1IDYuMDVhMi4zNCAyLjM0IDAgMCAxLTIuMDM1IDEuMTg1SDguNTA5di0yLjk4aDIuOTAxem0zLjQ1MyA3LjMyNmExLjcwMiAxLjcwMiAwIDEgMCAwLTMuNDAzIDEuNzAyIDEuNzAyIDAgMCAwIDAgMy40MDMiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgogICAgPC9nPgogICAgPGRlZnM+CiAgICAgICAgPGNsaXBQYXRoIGlkPSJUUlVfX2EiPgogICAgICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMCAwaDI0djI0SDB6Ii8+CiAgICAgICAgPC9jbGlwUGF0aD4KICAgIDwvZGVmcz4KPC9zdmc+Cg==)
 * @see https://web3icons.io/tokens/TRU
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenTRU = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenTRU', __iconNode);
;
}),
]);

//# sourceMappingURL=1qqr_%40web3icons_react_dist_070fpf-._.js.map