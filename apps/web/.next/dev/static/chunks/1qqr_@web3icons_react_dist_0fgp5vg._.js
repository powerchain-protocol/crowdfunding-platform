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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/wallets/WalletBackpack.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>WalletBackpack
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-client] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#E33E3F',
                d: 'M13.194 4.415c.666 0 1.29.088 1.87.25C14.496 3.37 13.32 3 12.011 3c-1.312 0-2.49.37-3.055 1.673a6.6 6.6 0 0 1 1.86-.258zm-2.529 1.302c-3.163 0-4.965 2.444-4.965 5.459v3.097c0 .301.256.54.573.54h11.454c.317 0 .573-.239.573-.54v-3.097c0-3.015-2.096-5.459-5.259-5.459zm1.33 5.486c1.108 0 2.005-.882 2.005-1.97 0-1.087-.897-1.968-2.005-1.968-1.106 0-2.004.881-2.004 1.969 0 1.087.898 1.969 2.005 1.969M5.7 16.633a.56.56 0 0 1 .573-.546h11.454a.56.56 0 0 1 .573.546v3.275c0 .603-.513 1.092-1.145 1.092H6.845c-.632 0-1.145-.489-1.145-1.092z',
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
                d: 'M13.194 4.415c.666 0 1.29.088 1.87.25C14.496 3.37 13.32 3 12.011 3c-1.312 0-2.49.37-3.055 1.673a6.6 6.6 0 0 1 1.86-.258zm-2.529 1.302c-3.163 0-4.965 2.444-4.965 5.459v3.097c0 .301.256.54.573.54h11.454c.317 0 .573-.239.573-.54v-3.097c0-3.015-2.096-5.459-5.259-5.459zm1.33 5.486c1.108 0 2.005-.882 2.005-1.97 0-1.087-.897-1.968-2.005-1.968-1.106 0-2.004.881-2.004 1.969 0 1.087.898 1.969 2.005 1.969M5.7 16.633a.56.56 0 0 1 .573-.546h11.454a.56.56 0 0 1 .573.546v3.275c0 .603-.513 1.092-1.145 1.092H6.845c-.632 0-1.145-.489-1.145-1.092z',
                fillRule: 'evenodd',
                clipRule: 'evenodd'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#backpack__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#E33E3F',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M13.061 5.258c.592 0 1.148.078 1.662.223C14.219 4.328 13.174 4 12.01 4c-1.166 0-2.213.33-2.716 1.487a6 6 0 0 1 1.654-.229zm-2.247 1.157c-2.812 0-4.414 2.172-4.414 4.852v2.753c0 .268.228.48.51.48h10.18c.282 0 .51-.212.51-.48v-2.753c0-2.68-1.863-4.852-4.675-4.852zm1.182 4.876c.984 0 1.782-.783 1.782-1.75 0-.966-.798-1.75-1.782-1.75s-1.782.784-1.782 1.75c0 .967.798 1.75 1.782 1.75M6.4 16.118c0-.268.228-.485.51-.485h10.18c.282 0 .51.217.51.485v2.912c0 .535-.456.97-1.018.97H7.418c-.562 0-1.018-.434-1.018-.97z',
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
                        id: 'backpack__a'
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
 * @component @name WalletBackpack
 * @description Web3Icon for WalletBackpack
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNFMzNFM0YiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTEzLjE5NCA0LjQxNWMuNjY2IDAgMS4yOS4wODggMS44Ny4yNUMxNC40OTYgMy4zNyAxMy4zMiAzIDEyLjAxMSAzYy0xLjMxMiAwLTIuNDkuMzctMy4wNTUgMS42NzNhNi42IDYuNiAwIDAgMSAxLjg2LS4yNTh6bS0yLjUyOSAxLjMwMmMtMy4xNjMgMC00Ljk2NSAyLjQ0NC00Ljk2NSA1LjQ1OXYzLjA5N2MwIC4zMDEuMjU2LjU0LjU3My41NGgxMS40NTRjLjMxNyAwIC41NzMtLjIzOS41NzMtLjU0di0zLjA5N2MwLTMuMDE1LTIuMDk2LTUuNDU5LTUuMjU5LTUuNDU5em0xLjMzIDUuNDg2YzEuMTA4IDAgMi4wMDUtLjg4MiAyLjAwNS0xLjk3IDAtMS4wODctLjg5Ny0xLjk2OC0yLjAwNS0xLjk2OC0xLjEwNiAwLTIuMDA0Ljg4MS0yLjAwNCAxLjk2OSAwIDEuMDg3Ljg5OCAxLjk2OSAyLjAwNSAxLjk2OU01LjcgMTYuNjMzYS41Ni41NiAwIDAgMSAuNTczLS41NDZoMTEuNDU0YS41Ni41NiAwIDAgMSAuNTczLjU0NnYzLjI3NWMwIC42MDMtLjUxMyAxLjA5Mi0xLjE0NSAxLjA5Mkg2Ljg0NWMtLjYzMiAwLTEuMTQ1LS40ODktMS4xNDUtMS4wOTJ6IiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+Cg==) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTEzLjE5NCA0LjQxNWMuNjY2IDAgMS4yOS4wODggMS44Ny4yNUMxNC40OTYgMy4zNyAxMy4zMiAzIDEyLjAxMSAzYy0xLjMxMiAwLTIuNDkuMzctMy4wNTUgMS42NzNhNi42IDYuNiAwIDAgMSAxLjg2LS4yNTh6bS0yLjUyOSAxLjMwMmMtMy4xNjMgMC00Ljk2NSAyLjQ0NC00Ljk2NSA1LjQ1OXYzLjA5N2MwIC4zMDEuMjU2LjU0LjU3My41NGgxMS40NTRjLjMxNyAwIC41NzMtLjIzOS41NzMtLjU0di0zLjA5N2MwLTMuMDE1LTIuMDk2LTUuNDU5LTUuMjU5LTUuNDU5em0xLjMzIDUuNDg2YzEuMTA4IDAgMi4wMDUtLjg4MiAyLjAwNS0xLjk3IDAtMS4wODctLjg5Ny0xLjk2OC0yLjAwNS0xLjk2OC0xLjEwNiAwLTIuMDA0Ljg4MS0yLjAwNCAxLjk2OSAwIDEuMDg3Ljg5OCAxLjk2OSAyLjAwNSAxLjk2OU01LjcgMTYuNjMzYS41Ni41NiAwIDAgMSAuNTczLS41NDZoMTEuNDU0YS41Ni41NiAwIDAgMSAuNTczLjU0NnYzLjI3NWMwIC42MDMtLjUxMyAxLjA5Mi0xLjE0NSAxLjA5Mkg2Ljg0NWMtLjYzMiAwLTEuMTQ1LS40ODktMS4xNDUtMS4wOTJ6IiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+Cg==) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNiYWNrcGFja19fYSkiPgogICAgICAgIDxwYXRoIGZpbGw9IiNFMzNFM0YiIGQ9Ik0yNCAwSDB2MjRoMjR6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTMuMDYxIDUuMjU4Yy41OTIgMCAxLjE0OC4wNzggMS42NjIuMjIzQzE0LjIxOSA0LjMyOCAxMy4xNzQgNCAxMi4wMSA0Yy0xLjE2NiAwLTIuMjEzLjMzLTIuNzE2IDEuNDg3YTYgNiAwIDAgMSAxLjY1NC0uMjI5em0tMi4yNDcgMS4xNTdjLTIuODEyIDAtNC40MTQgMi4xNzItNC40MTQgNC44NTJ2Mi43NTNjMCAuMjY4LjIyOC40OC41MS40OGgxMC4xOGMuMjgyIDAgLjUxLS4yMTIuNTEtLjQ4di0yLjc1M2MwLTIuNjgtMS44NjMtNC44NTItNC42NzUtNC44NTJ6bTEuMTgyIDQuODc2Yy45ODQgMCAxLjc4Mi0uNzgzIDEuNzgyLTEuNzUgMC0uOTY2LS43OTgtMS43NS0xLjc4Mi0xLjc1cy0xLjc4Mi43ODQtMS43ODIgMS43NWMwIC45NjcuNzk4IDEuNzUgMS43ODIgMS43NU02LjQgMTYuMTE4YzAtLjI2OC4yMjgtLjQ4NS41MS0uNDg1aDEwLjE4Yy4yODIgMCAuNTEuMjE3LjUxLjQ4NXYyLjkxMmMwIC41MzUtLjQ1Ni45Ny0xLjAxOC45N0g3LjQxOGMtLjU2MiAwLTEuMDE4LS40MzQtMS4wMTgtLjk3eiIgY2xpcC1ydWxlPSJldmVub2RkIi8+CiAgICA8L2c+CiAgICA8ZGVmcz4KICAgICAgICA8Y2xpcFBhdGggaWQ9ImJhY2twYWNrX19hIj4KICAgICAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTAgMGgyNHYyNEgweiIvPgogICAgICAgIDwvY2xpcFBhdGg+CiAgICA8L2RlZnM+Cjwvc3ZnPgo=)
 * @see https://web3icons.io/wallets/backpack
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const WalletBackpack = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWeb3Icon"])('WalletBackpack', __iconNode);
;
}),
]);

//# sourceMappingURL=1qqr_%40web3icons_react_dist_0fgp5vg._.js.map