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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/Token10SET.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Token10SET
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-client] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#FD62D5',
                d: 'M15.175 11.187s.53-.487.53-.83a.58.58 0 0 0-.175-.413l-3.112-3.065a.6.6 0 0 0-.836 0L8.47 9.944a.56.56 0 0 0-.175.407c0 .35.53.836.53.836v5.34s-.53.482-.53.83c0 .154.064.303.175.408l3.112 3.064a.6.6 0 0 0 .836 0l3.112-3.064a.56.56 0 0 0 .174-.407c0-.35-.529-.83-.529-.83zm-2.117 4.927a.58.58 0 0 1-.175.413l-.883.979-.884-.979a.58.58 0 0 1-.175-.413V11.6c0-.159.064-.302.175-.413l.884-.979.883.98a.57.57 0 0 1 .175.412z'
            }
        ],
        [
            'path',
            {
                fill: '#FD62D5',
                d: 'm18.71 5.826-2.794-2.662A.6.6 0 0 0 15.503 3c-.402 0-.476.085-.772.37a.63.63 0 0 1-.413.16H9.682a.62.62 0 0 1-.413-.16C8.973 3.085 8.9 3 8.497 3a.62.62 0 0 0-.413.159L5.289 5.82a.55.55 0 0 0-.169.391c0 .149.064.286.17.392l.952.995a.6.6 0 0 0 .826 0L9.407 5.28a.6.6 0 0 1 .413-.164h4.36c.154 0 .302.058.408.159l2.344 2.328a.6.6 0 0 0 .826 0L18.71 6.6a.533.533 0 0 0 0-.778z'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M15.175 11.187s.53-.487.53-.83a.58.58 0 0 0-.175-.413l-3.112-3.065a.6.6 0 0 0-.836 0L8.47 9.944a.56.56 0 0 0-.175.407c0 .35.53.836.53.836v5.34s-.53.482-.53.83c0 .154.064.303.175.408l3.112 3.064a.6.6 0 0 0 .836 0l3.112-3.064a.56.56 0 0 0 .174-.407c0-.35-.529-.83-.529-.83zm-2.117 4.927a.58.58 0 0 1-.174.413l-.884.979-.884-.979a.6.6 0 0 1-.175-.413V11.6c0-.159.064-.301.175-.413l.884-.979.884.98c.11.105.174.259.174.412z'
            }
        ],
        [
            'path',
            {
                fill: 'currentColor',
                d: 'm18.71 5.826-2.794-2.662A.6.6 0 0 0 15.503 3c-.402 0-.476.085-.772.37a.63.63 0 0 1-.413.16H9.682a.62.62 0 0 1-.413-.16C8.973 3.085 8.9 3 8.497 3a.62.62 0 0 0-.413.159L5.289 5.82a.55.55 0 0 0-.169.391c0 .149.064.286.17.392l.952.995a.6.6 0 0 0 .826 0L9.407 5.28a.6.6 0 0 1 .413-.164h4.36c.154 0 .302.058.408.159l2.344 2.328a.6.6 0 0 0 .826 0L18.71 6.6a.533.533 0 0 0 0-.778z'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#10SET__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#FD62D5',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M14.822 11.278s.47-.433.47-.739a.5.5 0 0 0-.155-.367l-2.766-2.724a.53.53 0 0 0-.743 0l-2.766 2.724a.5.5 0 0 0-.155.362c0 .31.47.744.47.744v4.746s-.47.428-.47.739a.5.5 0 0 0 .155.362l2.766 2.724a.53.53 0 0 0 .743 0l2.766-2.724a.5.5 0 0 0 .155-.362c0-.31-.47-.739-.47-.739zm-1.881 4.38a.5.5 0 0 1-.156.366l-.785.87-.786-.87a.52.52 0 0 1-.155-.367v-4.012c0-.142.056-.269.155-.367l.786-.87.785.87c.1.094.155.23.155.367z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M17.965 6.512 15.48 4.146A.54.54 0 0 0 15.114 4c-.357 0-.423.075-.687.33a.56.56 0 0 1-.367.14H9.94a.55.55 0 0 1-.367-.14c-.264-.255-.33-.33-.687-.33a.55.55 0 0 0-.367.141L6.035 6.507a.5.5 0 0 0-.15.348c0 .132.056.254.15.349l.847.884a.53.53 0 0 0 .734 0l2.079-2.06a.54.54 0 0 1 .367-.146h3.876a.53.53 0 0 1 .362.14l2.084 2.07a.53.53 0 0 0 .734 0l.847-.893a.474.474 0 0 0 0-.692z'
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
                        id: '10SET__a'
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
 * @component @name Token10SET
 * @description Web3Icon for Token10SET
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNGRDYyRDUiIGQ9Ik0xNS4xNzUgMTEuMTg3cy41My0uNDg3LjUzLS44M2EuNTguNTggMCAwIDAtLjE3NS0uNDEzbC0zLjExMi0zLjA2NWEuNi42IDAgMCAwLS44MzYgMEw4LjQ3IDkuOTQ0YS41Ni41NiAwIDAgMC0uMTc1LjQwN2MwIC4zNS41My44MzYuNTMuODM2djUuMzRzLS41My40ODItLjUzLjgzYzAgLjE1NC4wNjQuMzAzLjE3NS40MDhsMy4xMTIgMy4wNjRhLjYuNiAwIDAgMCAuODM2IDBsMy4xMTItMy4wNjRhLjU2LjU2IDAgMCAwIC4xNzQtLjQwN2MwLS4zNS0uNTI5LS44My0uNTI5LS44M3ptLTIuMTE3IDQuOTI3YS41OC41OCAwIDAgMS0uMTc1LjQxM2wtLjg4My45NzktLjg4NC0uOTc5YS41OC41OCAwIDAgMS0uMTc1LS40MTNWMTEuNmMwLS4xNTkuMDY0LS4zMDIuMTc1LS40MTNsLjg4NC0uOTc5Ljg4My45OGEuNTcuNTcgMCAwIDEgLjE3NS40MTJ6Ii8+CiAgICA8cGF0aCBmaWxsPSIjRkQ2MkQ1IiBkPSJtMTguNzEgNS44MjYtMi43OTQtMi42NjJBLjYuNiAwIDAgMCAxNS41MDMgM2MtLjQwMiAwLS40NzYuMDg1LS43NzIuMzdhLjYzLjYzIDAgMCAxLS40MTMuMTZIOS42ODJhLjYyLjYyIDAgMCAxLS40MTMtLjE2QzguOTczIDMuMDg1IDguOSAzIDguNDk3IDNhLjYyLjYyIDAgMCAwLS40MTMuMTU5TDUuMjg5IDUuODJhLjU1LjU1IDAgMCAwLS4xNjkuMzkxYzAgLjE0OS4wNjQuMjg2LjE3LjM5MmwuOTUyLjk5NWEuNi42IDAgMCAwIC44MjYgMEw5LjQwNyA1LjI4YS42LjYgMCAwIDEgLjQxMy0uMTY0aDQuMzZjLjE1NCAwIC4zMDIuMDU4LjQwOC4xNTlsMi4zNDQgMi4zMjhhLjYuNiAwIDAgMCAuODI2IDBMMTguNzEgNi42YS41MzMuNTMzIDAgMCAwIDAtLjc3OHoiLz4KPC9zdmc+Cg==) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xNS4xNzUgMTEuMTg3cy41My0uNDg3LjUzLS44M2EuNTguNTggMCAwIDAtLjE3NS0uNDEzbC0zLjExMi0zLjA2NWEuNi42IDAgMCAwLS44MzYgMEw4LjQ3IDkuOTQ0YS41Ni41NiAwIDAgMC0uMTc1LjQwN2MwIC4zNS41My44MzYuNTMuODM2djUuMzRzLS41My40ODItLjUzLjgzYzAgLjE1NC4wNjQuMzAzLjE3NS40MDhsMy4xMTIgMy4wNjRhLjYuNiAwIDAgMCAuODM2IDBsMy4xMTItMy4wNjRhLjU2LjU2IDAgMCAwIC4xNzQtLjQwN2MwLS4zNS0uNTI5LS44My0uNTI5LS44M3ptLTIuMTE3IDQuOTI3YS41OC41OCAwIDAgMS0uMTc0LjQxM2wtLjg4NC45NzktLjg4NC0uOTc5YS42LjYgMCAwIDEtLjE3NS0uNDEzVjExLjZjMC0uMTU5LjA2NC0uMzAxLjE3NS0uNDEzbC44ODQtLjk3OS44ODQuOThjLjExLjEwNS4xNzQuMjU5LjE3NC40MTJ6Ii8+CiAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJtMTguNzEgNS44MjYtMi43OTQtMi42NjJBLjYuNiAwIDAgMCAxNS41MDMgM2MtLjQwMiAwLS40NzYuMDg1LS43NzIuMzdhLjYzLjYzIDAgMCAxLS40MTMuMTZIOS42ODJhLjYyLjYyIDAgMCAxLS40MTMtLjE2QzguOTczIDMuMDg1IDguOSAzIDguNDk3IDNhLjYyLjYyIDAgMCAwLS40MTMuMTU5TDUuMjg5IDUuODJhLjU1LjU1IDAgMCAwLS4xNjkuMzkxYzAgLjE0OS4wNjQuMjg2LjE3LjM5MmwuOTUyLjk5NWEuNi42IDAgMCAwIC44MjYgMEw5LjQwNyA1LjI4YS42LjYgMCAwIDEgLjQxMy0uMTY0aDQuMzZjLjE1NCAwIC4zMDIuMDU4LjQwOC4xNTlsMi4zNDQgMi4zMjhhLjYuNiAwIDAgMCAuODI2IDBMMTguNzEgNi42YS41MzMuNTMzIDAgMCAwIDAtLjc3OHoiLz4KPC9zdmc+Cg==) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCMxMFNFVF9fYSkiPgogICAgICAgIDxwYXRoIGZpbGw9IiNGRDYyRDUiIGQ9Ik0yNCAwSDB2MjRoMjR6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTE0LjgyMiAxMS4yNzhzLjQ3LS40MzMuNDctLjczOWEuNS41IDAgMCAwLS4xNTUtLjM2N2wtMi43NjYtMi43MjRhLjUzLjUzIDAgMCAwLS43NDMgMGwtMi43NjYgMi43MjRhLjUuNSAwIDAgMC0uMTU1LjM2MmMwIC4zMS40Ny43NDQuNDcuNzQ0djQuNzQ2cy0uNDcuNDI4LS40Ny43MzlhLjUuNSAwIDAgMCAuMTU1LjM2MmwyLjc2NiAyLjcyNGEuNTMuNTMgMCAwIDAgLjc0MyAwbDIuNzY2LTIuNzI0YS41LjUgMCAwIDAgLjE1NS0uMzYyYzAtLjMxLS40Ny0uNzM5LS40Ny0uNzM5em0tMS44ODEgNC4zOGEuNS41IDAgMCAxLS4xNTYuMzY2bC0uNzg1Ljg3LS43ODYtLjg3YS41Mi41MiAwIDAgMS0uMTU1LS4zNjd2LTQuMDEyYzAtLjE0Mi4wNTYtLjI2OS4xNTUtLjM2N2wuNzg2LS44Ny43ODUuODdjLjEuMDk0LjE1NS4yMy4xNTUuMzY3eiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xNy45NjUgNi41MTIgMTUuNDggNC4xNDZBLjU0LjU0IDAgMCAwIDE1LjExNCA0Yy0uMzU3IDAtLjQyMy4wNzUtLjY4Ny4zM2EuNTYuNTYgMCAwIDEtLjM2Ny4xNEg5Ljk0YS41NS41NSAwIDAgMS0uMzY3LS4xNGMtLjI2NC0uMjU1LS4zMy0uMzMtLjY4Ny0uMzNhLjU1LjU1IDAgMCAwLS4zNjcuMTQxTDYuMDM1IDYuNTA3YS41LjUgMCAwIDAtLjE1LjM0OGMwIC4xMzIuMDU2LjI1NC4xNS4zNDlsLjg0Ny44ODRhLjUzLjUzIDAgMCAwIC43MzQgMGwyLjA3OS0yLjA2YS41NC41NCAwIDAgMSAuMzY3LS4xNDZoMy44NzZhLjUzLjUzIDAgMCAxIC4zNjIuMTRsMi4wODQgMi4wN2EuNTMuNTMgMCAwIDAgLjczNCAwbC44NDctLjg5M2EuNDc0LjQ3NCAwIDAgMCAwLS42OTJ6Ii8+CiAgICA8L2c+CiAgICA8ZGVmcz4KICAgICAgICA8Y2xpcFBhdGggaWQ9IjEwU0VUX19hIj4KICAgICAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTAgMGgyNHYyNEgweiIvPgogICAgICAgIDwvY2xpcFBhdGg+CiAgICA8L2RlZnM+Cjwvc3ZnPgo=)
 * @see https://web3icons.io/tokens/10SET
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const Token10SET = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWeb3Icon"])('Token10SET', __iconNode);
;
}),
]);

//# sourceMappingURL=1qqr_%40web3icons_react_dist_1_8wwfl._.js.map