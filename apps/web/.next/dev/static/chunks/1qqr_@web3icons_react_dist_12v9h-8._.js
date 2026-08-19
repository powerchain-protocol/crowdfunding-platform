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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenBITCI.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenBITCI
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-client] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#FF4802',
                d: 'M6.939 3H9.75v.563h1.688V3h2.812v.574a4.219 4.219 0 0 1 2.127 7.672 4.781 4.781 0 0 1-1.845 9.192h-.282V21h-2.81v-.562H9.75V21H6.94v-.562H4.69L8.064 16.5H6.376v-9h1.688L4.689 3.563h2.25zM9.75 6.938h2.813a1.688 1.688 0 0 1 0 3.375H9.75zm0 6.187h4.219a1.97 1.97 0 0 1 0 3.938H9.751z',
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
                d: 'M6.939 3H9.75v.563h1.688V3h2.812v.574a4.219 4.219 0 0 1 2.127 7.672 4.781 4.781 0 0 1-1.845 9.192h-.282V21h-2.81v-.562H9.75V21H6.94v-.562H4.69L8.064 16.5H6.376v-9h1.688L4.689 3.563h2.25zM9.75 6.938h2.813a1.688 1.688 0 0 1 0 3.375H9.75zm0 6.187h4.219a1.97 1.97 0 0 1 0 3.938H9.751z',
                fillRule: 'evenodd',
                clipRule: 'evenodd'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#BITCI__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#FF4802',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M7.501 4h2.5v.5h1.5V4h2.5v.51a3.75 3.75 0 0 1 1.89 6.82 4.25 4.25 0 0 1-1.64 8.17h-.25v.5h-2.5v-.5h-1.5v.5h-2.5v-.5h-2l3-3.5h-1.5V8h1.5l-3-3.5h2zm2.5 3.5h2.5a1.5 1.5 0 0 1 0 3h-2.5zm0 5.5h3.75a1.75 1.75 0 1 1 0 3.5h-3.75z',
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
                        id: 'BITCI__a'
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
 * @component @name TokenBITCI
 * @description Web3Icon for TokenBITCI
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNGRjQ4MDIiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTYuOTM5IDNIOS43NXYuNTYzaDEuNjg4VjNoMi44MTJ2LjU3NGE0LjIxOSA0LjIxOSAwIDAgMSAyLjEyNyA3LjY3MiA0Ljc4MSA0Ljc4MSAwIDAgMS0xLjg0NSA5LjE5MmgtLjI4MlYyMWgtMi44MXYtLjU2Mkg5Ljc1VjIxSDYuOTR2LS41NjJINC42OUw4LjA2NCAxNi41SDYuMzc2di05aDEuNjg4TDQuNjg5IDMuNTYzaDIuMjV6TTkuNzUgNi45MzhoMi44MTNhMS42ODggMS42ODggMCAwIDEgMCAzLjM3NUg5Ljc1em0wIDYuMTg3aDQuMjE5YTEuOTcgMS45NyAwIDAgMSAwIDMuOTM4SDkuNzUxeiIgY2xpcC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo=) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTYuOTM5IDNIOS43NXYuNTYzaDEuNjg4VjNoMi44MTJ2LjU3NGE0LjIxOSA0LjIxOSAwIDAgMSAyLjEyNyA3LjY3MiA0Ljc4MSA0Ljc4MSAwIDAgMS0xLjg0NSA5LjE5MmgtLjI4MlYyMWgtMi44MXYtLjU2Mkg5Ljc1VjIxSDYuOTR2LS41NjJINC42OUw4LjA2NCAxNi41SDYuMzc2di05aDEuNjg4TDQuNjg5IDMuNTYzaDIuMjV6TTkuNzUgNi45MzhoMi44MTNhMS42ODggMS42ODggMCAwIDEgMCAzLjM3NUg5Ljc1em0wIDYuMTg3aDQuMjE5YTEuOTcgMS45NyAwIDAgMSAwIDMuOTM4SDkuNzUxeiIgY2xpcC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo=) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNCSVRDSV9fYSkiPgogICAgICAgIDxwYXRoIGZpbGw9IiNGRjQ4MDIiIGQ9Ik0yNCAwSDB2MjRoMjR6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNNy41MDEgNGgyLjV2LjVoMS41VjRoMi41di41MWEzLjc1IDMuNzUgMCAwIDEgMS44OSA2LjgyIDQuMjUgNC4yNSAwIDAgMS0xLjY0IDguMTdoLS4yNXYuNWgtMi41di0uNWgtMS41di41aC0yLjV2LS41aC0ybDMtMy41aC0xLjVWOGgxLjVsLTMtMy41aDJ6bTIuNSAzLjVoMi41YTEuNSAxLjUgMCAwIDEgMCAzaC0yLjV6bTAgNS41aDMuNzVhMS43NSAxLjc1IDAgMSAxIDAgMy41aC0zLjc1eiIgY2xpcC1ydWxlPSJldmVub2RkIi8+CiAgICA8L2c+CiAgICA8ZGVmcz4KICAgICAgICA8Y2xpcFBhdGggaWQ9IkJJVENJX19hIj4KICAgICAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTAgMGgyNHYyNEgweiIvPgogICAgICAgIDwvY2xpcFBhdGg+CiAgICA8L2RlZnM+Cjwvc3ZnPgo=)
 * @see https://web3icons.io/tokens/BITCI
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenBITCI = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenBITCI', __iconNode);
;
}),
]);

//# sourceMappingURL=1qqr_%40web3icons_react_dist_12v9h-8._.js.map