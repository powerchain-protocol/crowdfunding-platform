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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenDAI.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenDAI
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-client] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#FDC134',
                d: 'M11.675 3.871H4.742v5.226H3v2.323h1.742v1.16H3v2.323h1.742v5.226h6.933a8.17 8.17 0 0 0 7.63-5.226H21v-2.322h-1.185a8 8 0 0 0 0-1.162H21V9.098h-1.695a8.18 8.18 0 0 0-7.63-5.226m5.806 8.71q.06-.58 0-1.162H7.065v1.162h10.422zM7.065 14.904v2.903h4.482c2.207 0 4.14-1.167 5.168-2.903zm0-5.807h9.656a6 6 0 0 0-5.168-2.903H7.065z',
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
                d: 'M11.675 3.87H4.742v5.227H3v2.322h1.742v1.162H3v2.322h1.742v5.226h6.933a8.17 8.17 0 0 0 7.63-5.226H21v-2.322h-1.185a8 8 0 0 0 0-1.162H21V9.097h-1.695a8.18 8.18 0 0 0-7.63-5.226m5.806 8.71q.06-.58 0-1.16H7.065v1.16h10.422zM7.065 14.904v2.903h4.482c2.207 0 4.14-1.167 5.168-2.903zm0-5.806h9.656a6 6 0 0 0-5.168-2.904H7.065z',
                fillRule: 'evenodd',
                clipRule: 'evenodd'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#DAI__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#FDC134',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M11.711 4.774H5.548V9.42H4v2.065h1.548v1.032H4v2.065h1.548v4.645h6.163a7.265 7.265 0 0 0 6.782-4.645H20v-2.065h-1.053a7 7 0 0 0 0-1.032H20V9.419h-1.507a7.27 7.27 0 0 0-6.782-4.645m5.161 7.742a5 5 0 0 0 0-1.032h-9.26v1.032h9.266zm-9.26 2.065v2.58h3.985c1.962 0 3.68-1.037 4.594-2.58zm0-5.162h8.584a5.33 5.33 0 0 0-4.593-2.58h-3.99z',
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
                        id: 'DAI__a'
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
 * @component @name TokenDAI
 * @description Web3Icon for TokenDAI
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNGREMxMzQiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTExLjY3NSAzLjg3MUg0Ljc0MnY1LjIyNkgzdjIuMzIzaDEuNzQydjEuMTZIM3YyLjMyM2gxLjc0MnY1LjIyNmg2LjkzM2E4LjE3IDguMTcgMCAwIDAgNy42My01LjIyNkgyMXYtMi4zMjJoLTEuMTg1YTggOCAwIDAgMCAwLTEuMTYySDIxVjkuMDk4aC0xLjY5NWE4LjE4IDguMTggMCAwIDAtNy42My01LjIyNm01LjgwNiA4LjcxcS4wNi0uNTggMC0xLjE2Mkg3LjA2NXYxLjE2MmgxMC40MjJ6TTcuMDY1IDE0LjkwNHYyLjkwM2g0LjQ4MmMyLjIwNyAwIDQuMTQtMS4xNjcgNS4xNjgtMi45MDN6bTAtNS44MDdoOS42NTZhNiA2IDAgMCAwLTUuMTY4LTIuOTAzSDcuMDY1eiIgY2xpcC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo=) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTExLjY3NSAzLjg3SDQuNzQydjUuMjI3SDN2Mi4zMjJoMS43NDJ2MS4xNjJIM3YyLjMyMmgxLjc0MnY1LjIyNmg2LjkzM2E4LjE3IDguMTcgMCAwIDAgNy42My01LjIyNkgyMXYtMi4zMjJoLTEuMTg1YTggOCAwIDAgMCAwLTEuMTYySDIxVjkuMDk3aC0xLjY5NWE4LjE4IDguMTggMCAwIDAtNy42My01LjIyNm01LjgwNiA4LjcxcS4wNi0uNTggMC0xLjE2SDcuMDY1djEuMTZoMTAuNDIyek03LjA2NSAxNC45MDR2Mi45MDNoNC40ODJjMi4yMDcgMCA0LjE0LTEuMTY3IDUuMTY4LTIuOTAzem0wLTUuODA2aDkuNjU2YTYgNiAwIDAgMC01LjE2OC0yLjkwNEg3LjA2NXoiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4K) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNEQUlfX2EpIj4KICAgICAgICA8cGF0aCBmaWxsPSIjRkRDMTM0IiBkPSJNMjQgMEgwdjI0aDI0eiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTExLjcxMSA0Ljc3NEg1LjU0OFY5LjQySDR2Mi4wNjVoMS41NDh2MS4wMzJINHYyLjA2NWgxLjU0OHY0LjY0NWg2LjE2M2E3LjI2NSA3LjI2NSAwIDAgMCA2Ljc4Mi00LjY0NUgyMHYtMi4wNjVoLTEuMDUzYTcgNyAwIDAgMCAwLTEuMDMySDIwVjkuNDE5aC0xLjUwN2E3LjI3IDcuMjcgMCAwIDAtNi43ODItNC42NDVtNS4xNjEgNy43NDJhNSA1IDAgMCAwIDAtMS4wMzJoLTkuMjZ2MS4wMzJoOS4yNjZ6bS05LjI2IDIuMDY1djIuNThoMy45ODVjMS45NjIgMCAzLjY4LTEuMDM3IDQuNTk0LTIuNTh6bTAtNS4xNjJoOC41ODRhNS4zMyA1LjMzIDAgMCAwLTQuNTkzLTIuNThoLTMuOTl6IiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KICAgIDwvZz4KICAgIDxkZWZzPgogICAgICAgIDxjbGlwUGF0aCBpZD0iREFJX19hIj4KICAgICAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTAgMGgyNHYyNEgweiIvPgogICAgICAgIDwvY2xpcFBhdGg+CiAgICA8L2RlZnM+Cjwvc3ZnPgo=)
 * @see https://web3icons.io/tokens/DAI
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenDAI = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenDAI', __iconNode);
;
}),
]);

//# sourceMappingURL=1qqr_%40web3icons_react_dist_1c38qxs._.js.map