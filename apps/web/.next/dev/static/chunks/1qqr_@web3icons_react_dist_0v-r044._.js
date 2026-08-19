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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenSTATOM.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenSTATOM
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-client] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#E91179',
                d: 'm18.414 7.669-3.162 1.097a.385.385 0 0 1-.472-.231 3.28 3.28 0 0 0-2.953-2.16c-1.34 0-2.515.742-2.515 1.693 0 1.468 2.83 2.036 4.247 2.138 4.759.669 5.81 3.622 5.743 5.011.13 1.93-1.04 5.783-6.8 5.783-5.457 0-7.425-3.341-7.808-5.276a.35.35 0 0 1 .253-.4l3.195-.877c.203-.056.41.084.461.298.563 2.441 2.819 2.88 3.899 2.88.928 0 2.784-.45 2.784-1.94 0-1.88-3.257-1.902-6.199-2.785-2.936-.883-3.797-2.869-3.797-4.54 0-1.664.602-5.36 6.542-5.36 4.444 0 6.323 2.655 6.807 4.241a.346.346 0 0 1-.22.428z'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'm18.414 7.669-3.162 1.097a.385.385 0 0 1-.472-.231 3.28 3.28 0 0 0-2.953-2.16c-1.34 0-2.515.742-2.515 1.693 0 1.468 2.83 2.036 4.247 2.138 4.759.669 5.81 3.622 5.743 5.011.13 1.93-1.04 5.783-6.8 5.783-5.457 0-7.425-3.341-7.808-5.276a.35.35 0 0 1 .253-.4l3.195-.877c.203-.056.41.084.461.298.563 2.441 2.819 2.88 3.899 2.88.928 0 2.784-.45 2.784-1.94 0-1.88-3.257-1.902-6.199-2.785-2.936-.883-3.797-2.869-3.797-4.54 0-1.664.602-5.36 6.542-5.36 4.444 0 6.323 2.655 6.806 4.241a.346.346 0 0 1-.219.428z'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#STATOM__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#E91179',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'm17.701 8.15-2.81.975a.34.34 0 0 1-.42-.205A2.91 2.91 0 0 0 11.846 7c-1.19 0-2.235.66-2.235 1.505 0 1.305 2.515 1.81 3.775 1.9 4.23.595 5.165 3.22 5.105 4.455.115 1.715-.925 5.14-6.045 5.14-4.85 0-6.6-2.97-6.94-4.69a.31.31 0 0 1 .225-.355l2.84-.78c.18-.05.365.075.41.265.5 2.17 2.505 2.56 3.465 2.56.825 0 2.475-.4 2.475-1.725 0-1.67-2.895-1.69-5.51-2.475-2.61-.785-3.375-2.55-3.375-4.035 0-1.48.535-4.765 5.815-4.765 3.95 0 5.62 2.36 6.05 3.77.05.16-.04.325-.195.38z'
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
                        id: 'STATOM__a'
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
 * @component @name TokenSTATOM
 * @description Web3Icon for TokenSTATOM
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNFOTExNzkiIGQ9Im0xOC40MTQgNy42NjktMy4xNjIgMS4wOTdhLjM4NS4zODUgMCAwIDEtLjQ3Mi0uMjMxIDMuMjggMy4yOCAwIDAgMC0yLjk1My0yLjE2Yy0xLjM0IDAtMi41MTUuNzQyLTIuNTE1IDEuNjkzIDAgMS40NjggMi44MyAyLjAzNiA0LjI0NyAyLjEzOCA0Ljc1OS42NjkgNS44MSAzLjYyMiA1Ljc0MyA1LjAxMS4xMyAxLjkzLTEuMDQgNS43ODMtNi44IDUuNzgzLTUuNDU3IDAtNy40MjUtMy4zNDEtNy44MDgtNS4yNzZhLjM1LjM1IDAgMCAxIC4yNTMtLjRsMy4xOTUtLjg3N2MuMjAzLS4wNTYuNDEuMDg0LjQ2MS4yOTguNTYzIDIuNDQxIDIuODE5IDIuODggMy44OTkgMi44OC45MjggMCAyLjc4NC0uNDUgMi43ODQtMS45NCAwLTEuODgtMy4yNTctMS45MDItNi4xOTktMi43ODUtMi45MzYtLjg4My0zLjc5Ny0yLjg2OS0zLjc5Ny00LjU0IDAtMS42NjQuNjAyLTUuMzYgNi41NDItNS4zNiA0LjQ0NCAwIDYuMzIzIDIuNjU1IDYuODA3IDQuMjQxYS4zNDYuMzQ2IDAgMCAxLS4yMi40Mjh6Ii8+Cjwvc3ZnPgo=) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Im0xOC40MTQgNy42NjktMy4xNjIgMS4wOTdhLjM4NS4zODUgMCAwIDEtLjQ3Mi0uMjMxIDMuMjggMy4yOCAwIDAgMC0yLjk1My0yLjE2Yy0xLjM0IDAtMi41MTUuNzQyLTIuNTE1IDEuNjkzIDAgMS40NjggMi44MyAyLjAzNiA0LjI0NyAyLjEzOCA0Ljc1OS42NjkgNS44MSAzLjYyMiA1Ljc0MyA1LjAxMS4xMyAxLjkzLTEuMDQgNS43ODMtNi44IDUuNzgzLTUuNDU3IDAtNy40MjUtMy4zNDEtNy44MDgtNS4yNzZhLjM1LjM1IDAgMCAxIC4yNTMtLjRsMy4xOTUtLjg3N2MuMjAzLS4wNTYuNDEuMDg0LjQ2MS4yOTguNTYzIDIuNDQxIDIuODE5IDIuODggMy44OTkgMi44OC45MjggMCAyLjc4NC0uNDUgMi43ODQtMS45NCAwLTEuODgtMy4yNTctMS45MDItNi4xOTktMi43ODUtMi45MzYtLjg4My0zLjc5Ny0yLjg2OS0zLjc5Ny00LjU0IDAtMS42NjQuNjAyLTUuMzYgNi41NDItNS4zNiA0LjQ0NCAwIDYuMzIzIDIuNjU1IDYuODA2IDQuMjQxYS4zNDYuMzQ2IDAgMCAxLS4yMTkuNDI4eiIvPgo8L3N2Zz4K) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNTVEFUT01fX2EpIj4KICAgICAgICA8cGF0aCBmaWxsPSIjRTkxMTc5IiBkPSJNMjQgMEgwdjI0aDI0eiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Im0xNy43MDEgOC4xNS0yLjgxLjk3NWEuMzQuMzQgMCAwIDEtLjQyLS4yMDVBMi45MSAyLjkxIDAgMCAwIDExLjg0NiA3Yy0xLjE5IDAtMi4yMzUuNjYtMi4yMzUgMS41MDUgMCAxLjMwNSAyLjUxNSAxLjgxIDMuNzc1IDEuOSA0LjIzLjU5NSA1LjE2NSAzLjIyIDUuMTA1IDQuNDU1LjExNSAxLjcxNS0uOTI1IDUuMTQtNi4wNDUgNS4xNC00Ljg1IDAtNi42LTIuOTctNi45NC00LjY5YS4zMS4zMSAwIDAgMSAuMjI1LS4zNTVsMi44NC0uNzhjLjE4LS4wNS4zNjUuMDc1LjQxLjI2NS41IDIuMTcgMi41MDUgMi41NiAzLjQ2NSAyLjU2LjgyNSAwIDIuNDc1LS40IDIuNDc1LTEuNzI1IDAtMS42Ny0yLjg5NS0xLjY5LTUuNTEtMi40NzUtMi42MS0uNzg1LTMuMzc1LTIuNTUtMy4zNzUtNC4wMzUgMC0xLjQ4LjUzNS00Ljc2NSA1LjgxNS00Ljc2NSAzLjk1IDAgNS42MiAyLjM2IDYuMDUgMy43Ny4wNS4xNi0uMDQuMzI1LS4xOTUuMzh6Ii8+CiAgICA8L2c+CiAgICA8ZGVmcz4KICAgICAgICA8Y2xpcFBhdGggaWQ9IlNUQVRPTV9fYSI+CiAgICAgICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0wIDBoMjR2MjRIMHoiLz4KICAgICAgICA8L2NsaXBQYXRoPgogICAgPC9kZWZzPgo8L3N2Zz4K)
 * @see https://web3icons.io/tokens/STATOM
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenSTATOM = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenSTATOM', __iconNode);
;
}),
]);

//# sourceMappingURL=1qqr_%40web3icons_react_dist_0v-r044._.js.map