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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenMOBILE.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenMOBILE
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-client] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#009FF9',
                d: 'M3 6.594a1.5 1.5 0 0 1 3 0v10.812a1.5 1.5 0 0 1-3 0zm15 0a1.5 1.5 0 0 1 3 0v10.812a1.5 1.5 0 1 1-3 0zM8.1 9.3a1.506 1.506 0 0 0-1.5 1.518v6.564c0 .84.672 1.518 1.5 1.518s1.5-.678 1.5-1.518v-6.564c0-.84-.672-1.518-1.5-1.518m6.3 1.518c0-.84.672-1.518 1.5-1.518s1.5.678 1.5 1.518v6.564c0 .84-.672 1.518-1.5 1.518a1.505 1.505 0 0 1-1.5-1.518zM12 13.53a1.5 1.5 0 0 0-1.5 1.494v2.382a1.5 1.5 0 1 0 3 0v-2.382a1.5 1.5 0 0 0-1.5-1.5z'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M3 6.594a1.5 1.5 0 0 1 3 0v10.812a1.5 1.5 0 0 1-3 0zm15 0a1.5 1.5 0 0 1 3 0v10.812a1.5 1.5 0 1 1-3 0zM8.1 9.3a1.506 1.506 0 0 0-1.5 1.518v6.564c0 .84.672 1.518 1.5 1.518s1.5-.678 1.5-1.518v-6.564c0-.84-.672-1.518-1.5-1.518m6.3 1.518c0-.84.672-1.518 1.5-1.518s1.5.678 1.5 1.518v6.564c0 .84-.672 1.518-1.5 1.518a1.505 1.505 0 0 1-1.5-1.518zM12 13.53a1.5 1.5 0 0 0-1.5 1.494v2.382a1.5 1.5 0 1 0 3 0v-2.382a1.5 1.5 0 0 0-1.5-1.5z'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#MOBILE__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#009FF9',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M4 7.195a1.333 1.333 0 0 1 2.667 0v9.61a1.334 1.334 0 1 1-2.667 0zm13.333 0a1.334 1.334 0 0 1 2.667 0v9.61a1.334 1.334 0 0 1-2.667 0zM8.533 9.6A1.34 1.34 0 0 0 7.2 10.95v5.834c0 .747.597 1.35 1.333 1.35a1.34 1.34 0 0 0 1.334-1.35v-5.835A1.34 1.34 0 0 0 8.533 9.6m5.6 1.35c0-.747.598-1.35 1.334-1.35a1.34 1.34 0 0 1 1.333 1.35v5.834a1.34 1.34 0 0 1-1.333 1.35 1.34 1.34 0 0 1-1.334-1.35zM12 13.36a1.333 1.333 0 0 0-1.333 1.328v2.117a1.334 1.334 0 0 0 2.666 0v-2.117A1.333 1.333 0 0 0 12 13.355z'
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
                        id: 'MOBILE__a'
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
 * @component @name TokenMOBILE
 * @description Web3Icon for TokenMOBILE
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiMwMDlGRjkiIGQ9Ik0zIDYuNTk0YTEuNSAxLjUgMCAwIDEgMyAwdjEwLjgxMmExLjUgMS41IDAgMCAxLTMgMHptMTUgMGExLjUgMS41IDAgMCAxIDMgMHYxMC44MTJhMS41IDEuNSAwIDEgMS0zIDB6TTguMSA5LjNhMS41MDYgMS41MDYgMCAwIDAtMS41IDEuNTE4djYuNTY0YzAgLjg0LjY3MiAxLjUxOCAxLjUgMS41MThzMS41LS42NzggMS41LTEuNTE4di02LjU2NGMwLS44NC0uNjcyLTEuNTE4LTEuNS0xLjUxOG02LjMgMS41MThjMC0uODQuNjcyLTEuNTE4IDEuNS0xLjUxOHMxLjUuNjc4IDEuNSAxLjUxOHY2LjU2NGMwIC44NC0uNjcyIDEuNTE4LTEuNSAxLjUxOGExLjUwNSAxLjUwNSAwIDAgMS0xLjUtMS41MTh6TTEyIDEzLjUzYTEuNSAxLjUgMCAwIDAtMS41IDEuNDk0djIuMzgyYTEuNSAxLjUgMCAxIDAgMyAwdi0yLjM4MmExLjUgMS41IDAgMCAwLTEuNS0xLjV6Ii8+Cjwvc3ZnPgo=) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0zIDYuNTk0YTEuNSAxLjUgMCAwIDEgMyAwdjEwLjgxMmExLjUgMS41IDAgMCAxLTMgMHptMTUgMGExLjUgMS41IDAgMCAxIDMgMHYxMC44MTJhMS41IDEuNSAwIDEgMS0zIDB6TTguMSA5LjNhMS41MDYgMS41MDYgMCAwIDAtMS41IDEuNTE4djYuNTY0YzAgLjg0LjY3MiAxLjUxOCAxLjUgMS41MThzMS41LS42NzggMS41LTEuNTE4di02LjU2NGMwLS44NC0uNjcyLTEuNTE4LTEuNS0xLjUxOG02LjMgMS41MThjMC0uODQuNjcyLTEuNTE4IDEuNS0xLjUxOHMxLjUuNjc4IDEuNSAxLjUxOHY2LjU2NGMwIC44NC0uNjcyIDEuNTE4LTEuNSAxLjUxOGExLjUwNSAxLjUwNSAwIDAgMS0xLjUtMS41MTh6TTEyIDEzLjUzYTEuNSAxLjUgMCAwIDAtMS41IDEuNDk0djIuMzgyYTEuNSAxLjUgMCAxIDAgMyAwdi0yLjM4MmExLjUgMS41IDAgMCAwLTEuNS0xLjV6Ii8+Cjwvc3ZnPgo=) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNNT0JJTEVfX2EpIj4KICAgICAgICA8cGF0aCBmaWxsPSIjMDA5RkY5IiBkPSJNMjQgMEgwdjI0aDI0eiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik00IDcuMTk1YTEuMzMzIDEuMzMzIDAgMCAxIDIuNjY3IDB2OS42MWExLjMzNCAxLjMzNCAwIDEgMS0yLjY2NyAwem0xMy4zMzMgMGExLjMzNCAxLjMzNCAwIDAgMSAyLjY2NyAwdjkuNjFhMS4zMzQgMS4zMzQgMCAwIDEtMi42NjcgMHpNOC41MzMgOS42QTEuMzQgMS4zNCAwIDAgMCA3LjIgMTAuOTV2NS44MzRjMCAuNzQ3LjU5NyAxLjM1IDEuMzMzIDEuMzVhMS4zNCAxLjM0IDAgMCAwIDEuMzM0LTEuMzV2LTUuODM1QTEuMzQgMS4zNCAwIDAgMCA4LjUzMyA5LjZtNS42IDEuMzVjMC0uNzQ3LjU5OC0xLjM1IDEuMzM0LTEuMzVhMS4zNCAxLjM0IDAgMCAxIDEuMzMzIDEuMzV2NS44MzRhMS4zNCAxLjM0IDAgMCAxLTEuMzMzIDEuMzUgMS4zNCAxLjM0IDAgMCAxLTEuMzM0LTEuMzV6TTEyIDEzLjM2YTEuMzMzIDEuMzMzIDAgMCAwLTEuMzMzIDEuMzI4djIuMTE3YTEuMzM0IDEuMzM0IDAgMCAwIDIuNjY2IDB2LTIuMTE3QTEuMzMzIDEuMzMzIDAgMCAwIDEyIDEzLjM1NXoiLz4KICAgIDwvZz4KICAgIDxkZWZzPgogICAgICAgIDxjbGlwUGF0aCBpZD0iTU9CSUxFX19hIj4KICAgICAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTAgMGgyNHYyNEgweiIvPgogICAgICAgIDwvY2xpcFBhdGg+CiAgICA8L2RlZnM+Cjwvc3ZnPgo=)
 * @see https://web3icons.io/tokens/MOBILE
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenMOBILE = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenMOBILE', __iconNode);
;
}),
]);

//# sourceMappingURL=1qqr_%40web3icons_react_dist_098fupr._.js.map