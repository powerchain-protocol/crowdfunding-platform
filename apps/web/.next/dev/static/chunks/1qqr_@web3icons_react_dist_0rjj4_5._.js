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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/networks/NetworkFlow.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>NetworkFlow
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-client] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#00EF8B',
                d: 'M20.593 6.937h-4.05c-.872 0-1.575.884-1.575 1.733v.517h-4.5V8.67c0-3.128 2.61-5.67 5.833-5.67h4.292zm-10.125 8.157c0 .883-.523 1.609-1.407 1.609-1.125 0-1.608-.726-1.608-1.61 0-.882.725-1.406 1.608-1.406h1.407zm4.5-1.407v1.148c0 3.262-2.644 6.165-5.907 6.165a5.912 5.912 0 0 1 0-11.813h1.407v4.5zm0 0v-4.5h4.5v4.5z',
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
                d: 'M20.593 6.937h-4.05c-.872 0-1.575.884-1.575 1.733v.517h-4.5V8.67c0-3.128 2.61-5.67 5.833-5.67h4.292zm-10.125 8.157c0 .883-.523 1.609-1.407 1.609-1.125 0-1.608-.726-1.608-1.61 0-.882.725-1.406 1.608-1.406h1.407zm4.5-1.407v1.148c0 3.262-2.644 6.165-5.907 6.165a5.912 5.912 0 0 1 0-11.813h1.407v4.5zm0 0v-4.5h4.5v4.5z',
                fillRule: 'evenodd',
                clipRule: 'evenodd'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#FLOW__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#00EF8B',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#000',
                        d: 'M19.638 7.5h-3.6c-.775 0-1.4.785-1.4 1.54v.46h-4v-.46c0-2.78 2.32-5.04 5.185-5.04h3.815zm-9 7.25c0 .785-.465 1.43-1.25 1.43-1 0-1.43-.645-1.43-1.43s.645-1.25 1.43-1.25h1.25zm4-1.25v1.02c0 2.9-2.35 5.48-5.25 5.48a5.255 5.255 0 0 1 0-10.5h1.25v4zm0 0v-4h4v4z',
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
                        id: 'FLOW__a'
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
 * @component @name NetworkFlow
 * @description Web3Icon for NetworkFlow
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiMwMEVGOEIiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTIwLjU5MyA2LjkzN2gtNC4wNWMtLjg3MiAwLTEuNTc1Ljg4NC0xLjU3NSAxLjczM3YuNTE3aC00LjVWOC42N2MwLTMuMTI4IDIuNjEtNS42NyA1LjgzMy01LjY3aDQuMjkyem0tMTAuMTI1IDguMTU3YzAgLjg4My0uNTIzIDEuNjA5LTEuNDA3IDEuNjA5LTEuMTI1IDAtMS42MDgtLjcyNi0xLjYwOC0xLjYxIDAtLjg4Mi43MjUtMS40MDYgMS42MDgtMS40MDZoMS40MDd6bTQuNS0xLjQwN3YxLjE0OGMwIDMuMjYyLTIuNjQ0IDYuMTY1LTUuOTA3IDYuMTY1YTUuOTEyIDUuOTEyIDAgMCAxIDAtMTEuODEzaDEuNDA3djQuNXptMCAwdi00LjVoNC41djQuNXoiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4K) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTIwLjU5MyA2LjkzN2gtNC4wNWMtLjg3MiAwLTEuNTc1Ljg4NC0xLjU3NSAxLjczM3YuNTE3aC00LjVWOC42N2MwLTMuMTI4IDIuNjEtNS42NyA1LjgzMy01LjY3aDQuMjkyem0tMTAuMTI1IDguMTU3YzAgLjg4My0uNTIzIDEuNjA5LTEuNDA3IDEuNjA5LTEuMTI1IDAtMS42MDgtLjcyNi0xLjYwOC0xLjYxIDAtLjg4Mi43MjUtMS40MDYgMS42MDgtMS40MDZoMS40MDd6bTQuNS0xLjQwN3YxLjE0OGMwIDMuMjYyLTIuNjQ0IDYuMTY1LTUuOTA3IDYuMTY1YTUuOTEyIDUuOTEyIDAgMCAxIDAtMTEuODEzaDEuNDA3djQuNXptMCAwdi00LjVoNC41djQuNXoiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4K) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNGTE9XX19hKSI+CiAgICAgICAgPHBhdGggZmlsbD0iIzAwRUY4QiIgZD0iTTI0IDBIMHYyNGgyNHoiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjMDAwIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xOS42MzggNy41aC0zLjZjLS43NzUgMC0xLjQuNzg1LTEuNCAxLjU0di40NmgtNHYtLjQ2YzAtMi43OCAyLjMyLTUuMDQgNS4xODUtNS4wNGgzLjgxNXptLTkgNy4yNWMwIC43ODUtLjQ2NSAxLjQzLTEuMjUgMS40My0xIDAtMS40My0uNjQ1LTEuNDMtMS40M3MuNjQ1LTEuMjUgMS40My0xLjI1aDEuMjV6bTQtMS4yNXYxLjAyYzAgMi45LTIuMzUgNS40OC01LjI1IDUuNDhhNS4yNTUgNS4yNTUgMCAwIDEgMC0xMC41aDEuMjV2NHptMCAwdi00aDR2NHoiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgogICAgPC9nPgogICAgPGRlZnM+CiAgICAgICAgPGNsaXBQYXRoIGlkPSJGTE9XX19hIj4KICAgICAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTAgMGgyNHYyNEgweiIvPgogICAgICAgIDwvY2xpcFBhdGg+CiAgICA8L2RlZnM+Cjwvc3ZnPgo=)
 * @see https://web3icons.io/networks/flow
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const NetworkFlow = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWeb3Icon"])('NetworkFlow', __iconNode);
;
}),
]);

//# sourceMappingURL=1qqr_%40web3icons_react_dist_0rjj4_5._.js.map