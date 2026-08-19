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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenGRT.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenGRT
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-client] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#6F4CFF',
                d: 'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18M8.063 10.875a3.38 3.38 0 0 0 3.374 3.375 3.38 3.38 0 0 0 3.376-3.375A3.38 3.38 0 0 0 11.437 7.5a3.38 3.38 0 0 0-3.374 3.375m1.124 0a2.25 2.25 0 0 1 2.25-2.25 2.25 2.25 0 0 1 2.25 2.25 2.25 2.25 0 0 1-2.25 2.25 2.25 2.25 0 0 1-2.25-2.25m5.46 4.335-2.25 2.25a.56.56 0 0 1-.795 0 .563.563 0 0 1 0-.795l2.25-2.25a.563.563 0 0 1 .796.795m.053-7.148c0-.37.304-.675.675-.675s.675.304.675.675a.677.677 0 0 1-.675.675.677.677 0 0 1-.675-.675',
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
                d: 'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18M8.25 10.875a3.38 3.38 0 0 0 3.375 3.375A3.38 3.38 0 0 0 15 10.875 3.38 3.38 0 0 0 11.625 7.5a3.38 3.38 0 0 0-3.375 3.375m1.125 0a2.25 2.25 0 0 1 2.25-2.25 2.25 2.25 0 0 1 2.25 2.25 2.25 2.25 0 0 1-2.25 2.25 2.25 2.25 0 0 1-2.25-2.25m5.46 4.335-2.25 2.25a.56.56 0 0 1-.795 0 .56.56 0 0 1 0-.795l2.25-2.25a.563.563 0 0 1 .795.795m.052-7.148c0-.37.304-.675.675-.675s.676.304.676.675a.677.677 0 0 1-.675.675.677.677 0 0 1-.676-.675',
                fillRule: 'evenodd',
                clipRule: 'evenodd'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#GRT__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#6F4CFF',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16m-3.333-9c0 1.655 1.346 3 3 3s3-1.345 3-3-1.347-3-3-3-3 1.345-3 3m1 0c0-1.103.896-2 2-2 1.103 0 2 .897 2 2s-.897 2-2 2c-1.104 0-2-.897-2-2m4.853 3.853-2 2a.496.496 0 0 1-.707 0 .5.5 0 0 1 0-.706l2-2a.5.5 0 0 1 .707.706m.047-6.353c0-.33.27-.6.6-.6s.6.27.6.6-.27.6-.6.6-.6-.27-.6-.6',
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
                        id: 'GRT__a'
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
 * @component @name TokenGRT
 * @description Web3Icon for TokenGRT
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiM2RjRDRkYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTEyIDIxYTkgOSAwIDEgMCAwLTE4IDkgOSAwIDAgMCAwIDE4TTguMDYzIDEwLjg3NWEzLjM4IDMuMzggMCAwIDAgMy4zNzQgMy4zNzUgMy4zOCAzLjM4IDAgMCAwIDMuMzc2LTMuMzc1QTMuMzggMy4zOCAwIDAgMCAxMS40MzcgNy41YTMuMzggMy4zOCAwIDAgMC0zLjM3NCAzLjM3NW0xLjEyNCAwYTIuMjUgMi4yNSAwIDAgMSAyLjI1LTIuMjUgMi4yNSAyLjI1IDAgMCAxIDIuMjUgMi4yNSAyLjI1IDIuMjUgMCAwIDEtMi4yNSAyLjI1IDIuMjUgMi4yNSAwIDAgMS0yLjI1LTIuMjVtNS40NiA0LjMzNS0yLjI1IDIuMjVhLjU2LjU2IDAgMCAxLS43OTUgMCAuNTYzLjU2MyAwIDAgMSAwLS43OTVsMi4yNS0yLjI1YS41NjMuNTYzIDAgMCAxIC43OTYuNzk1bS4wNTMtNy4xNDhjMC0uMzcuMzA0LS42NzUuNjc1LS42NzVzLjY3NS4zMDQuNjc1LjY3NWEuNjc3LjY3NyAwIDAgMS0uNjc1LjY3NS42NzcuNjc3IDAgMCAxLS42NzUtLjY3NSIgY2xpcC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo=) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTEyIDIxYTkgOSAwIDEgMCAwLTE4IDkgOSAwIDAgMCAwIDE4TTguMjUgMTAuODc1YTMuMzggMy4zOCAwIDAgMCAzLjM3NSAzLjM3NUEzLjM4IDMuMzggMCAwIDAgMTUgMTAuODc1IDMuMzggMy4zOCAwIDAgMCAxMS42MjUgNy41YTMuMzggMy4zOCAwIDAgMC0zLjM3NSAzLjM3NW0xLjEyNSAwYTIuMjUgMi4yNSAwIDAgMSAyLjI1LTIuMjUgMi4yNSAyLjI1IDAgMCAxIDIuMjUgMi4yNSAyLjI1IDIuMjUgMCAwIDEtMi4yNSAyLjI1IDIuMjUgMi4yNSAwIDAgMS0yLjI1LTIuMjVtNS40NiA0LjMzNS0yLjI1IDIuMjVhLjU2LjU2IDAgMCAxLS43OTUgMCAuNTYuNTYgMCAwIDEgMC0uNzk1bDIuMjUtMi4yNWEuNTYzLjU2MyAwIDAgMSAuNzk1Ljc5NW0uMDUyLTcuMTQ4YzAtLjM3LjMwNC0uNjc1LjY3NS0uNjc1cy42NzYuMzA0LjY3Ni42NzVhLjY3Ny42NzcgMCAwIDEtLjY3NS42NzUuNjc3LjY3NyAwIDAgMS0uNjc2LS42NzUiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4K) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNHUlRfX2EpIj4KICAgICAgICA8cGF0aCBmaWxsPSIjNkY0Q0ZGIiBkPSJNMjQgMEgwdjI0aDI0eiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTEyIDIwYTggOCAwIDEgMCAwLTE2IDggOCAwIDAgMCAwIDE2bS0zLjMzMy05YzAgMS42NTUgMS4zNDYgMyAzIDNzMy0xLjM0NSAzLTMtMS4zNDctMy0zLTMtMyAxLjM0NS0zIDNtMSAwYzAtMS4xMDMuODk2LTIgMi0yIDEuMTAzIDAgMiAuODk3IDIgMnMtLjg5NyAyLTIgMmMtMS4xMDQgMC0yLS44OTctMi0ybTQuODUzIDMuODUzLTIgMmEuNDk2LjQ5NiAwIDAgMS0uNzA3IDAgLjUuNSAwIDAgMSAwLS43MDZsMi0yYS41LjUgMCAwIDEgLjcwNy43MDZtLjA0Ny02LjM1M2MwLS4zMy4yNy0uNi42LS42cy42LjI3LjYuNi0uMjcuNi0uNi42LS42LS4yNy0uNi0uNiIgY2xpcC1ydWxlPSJldmVub2RkIi8+CiAgICA8L2c+CiAgICA8ZGVmcz4KICAgICAgICA8Y2xpcFBhdGggaWQ9IkdSVF9fYSI+CiAgICAgICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0wIDBoMjR2MjRIMHoiLz4KICAgICAgICA8L2NsaXBQYXRoPgogICAgPC9kZWZzPgo8L3N2Zz4K)
 * @see https://web3icons.io/tokens/GRT
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenGRT = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenGRT', __iconNode);
;
}),
]);

//# sourceMappingURL=1qqr_%40web3icons_react_dist_0d7in33._.js.map