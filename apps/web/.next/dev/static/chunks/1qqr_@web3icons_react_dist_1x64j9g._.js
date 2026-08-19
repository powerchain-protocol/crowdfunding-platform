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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenPERC.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenPERC
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-client] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#009BA0',
                d: 'M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0m-1.588 0a7.412 7.412 0 1 1-14.824 0 7.412 7.412 0 0 1 14.824 0m-5.824 3.007v-8.83l1.589.873v8.698zm-4.764.027V6.198l1.588.873v8.698l-1.588-.74zm-2.118-3.918v3.14l1.588.698v-3.007l-1.588-.826zm9 0v3.14l1.588.698v-3.007l-1.588-.826zm-4.5-2.864v8.83l1.588.741V9.125z',
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
                d: 'M21 12a9 9 0 1 1-17.999 0A9 9 0 0 1 21 12m-1.588 0a7.412 7.412 0 1 1-14.824 0 7.412 7.412 0 0 1 14.824 0m-5.824 3.007v-8.83l1.589.873v8.698zm-4.764.027V6.198l1.588.873v8.698l-1.588-.74zm-2.118-3.918v3.14l1.588.698v-3.007l-1.588-.826zm9 0v3.14l1.588.698v-3.007l-1.588-.826zm-4.5-2.864v8.83l1.588.741V9.125z',
                fillRule: 'evenodd',
                clipRule: 'evenodd'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#PERC__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#009BA0',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M20 12a8 8 0 1 1-16 0 8 8 0 0 1 16 0m-1.412 0a6.588 6.588 0 1 1-13.176 0 6.588 6.588 0 0 1 13.176 0m-5.176 2.673v-7.85l1.411.777v7.732zm-4.236.024V6.842l1.412.777v7.732l-1.412-.66zm-1.882-3.483v2.79l1.412.622v-2.673l-1.412-.734zm8 0v2.79l1.412.622v-2.673l-1.412-.734zm-4-2.546v7.85l1.412.659V9.445z',
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
                        id: 'PERC__a'
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
 * @component @name TokenPERC
 * @description Web3Icon for TokenPERC
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiMwMDlCQTAiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTIxIDEyYTkgOSAwIDEgMS0xOCAwIDkgOSAwIDAgMSAxOCAwbS0xLjU4OCAwYTcuNDEyIDcuNDEyIDAgMSAxLTE0LjgyNCAwIDcuNDEyIDcuNDEyIDAgMCAxIDE0LjgyNCAwbS01LjgyNCAzLjAwN3YtOC44M2wxLjU4OS44NzN2OC42OTh6bS00Ljc2NC4wMjdWNi4xOThsMS41ODguODczdjguNjk4bC0xLjU4OC0uNzR6bS0yLjExOC0zLjkxOHYzLjE0bDEuNTg4LjY5OHYtMy4wMDdsLTEuNTg4LS44MjZ6bTkgMHYzLjE0bDEuNTg4LjY5OHYtMy4wMDdsLTEuNTg4LS44MjZ6bS00LjUtMi44NjR2OC44M2wxLjU4OC43NDFWOS4xMjV6IiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+Cg==) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTIxIDEyYTkgOSAwIDEgMS0xNy45OTkgMEE5IDkgMCAwIDEgMjEgMTJtLTEuNTg4IDBhNy40MTIgNy40MTIgMCAxIDEtMTQuODI0IDAgNy40MTIgNy40MTIgMCAwIDEgMTQuODI0IDBtLTUuODI0IDMuMDA3di04LjgzbDEuNTg5Ljg3M3Y4LjY5OHptLTQuNzY0LjAyN1Y2LjE5OGwxLjU4OC44NzN2OC42OThsLTEuNTg4LS43NHptLTIuMTE4LTMuOTE4djMuMTRsMS41ODguNjk4di0zLjAwN2wtMS41ODgtLjgyNnptOSAwdjMuMTRsMS41ODguNjk4di0zLjAwN2wtMS41ODgtLjgyNnptLTQuNS0yLjg2NHY4LjgzbDEuNTg4Ljc0MVY5LjEyNXoiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4K) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNQRVJDX19hKSI+CiAgICAgICAgPHBhdGggZmlsbD0iIzAwOUJBMCIgZD0iTTI0IDBIMHYyNGgyNHoiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yMCAxMmE4IDggMCAxIDEtMTYgMCA4IDggMCAwIDEgMTYgMG0tMS40MTIgMGE2LjU4OCA2LjU4OCAwIDEgMS0xMy4xNzYgMCA2LjU4OCA2LjU4OCAwIDAgMSAxMy4xNzYgMG0tNS4xNzYgMi42NzN2LTcuODVsMS40MTEuNzc3djcuNzMyem0tNC4yMzYuMDI0VjYuODQybDEuNDEyLjc3N3Y3LjczMmwtMS40MTItLjY2em0tMS44ODItMy40ODN2Mi43OWwxLjQxMi42MjJ2LTIuNjczbC0xLjQxMi0uNzM0em04IDB2Mi43OWwxLjQxMi42MjJ2LTIuNjczbC0xLjQxMi0uNzM0em0tNC0yLjU0NnY3Ljg1bDEuNDEyLjY1OVY5LjQ0NXoiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgogICAgPC9nPgogICAgPGRlZnM+CiAgICAgICAgPGNsaXBQYXRoIGlkPSJQRVJDX19hIj4KICAgICAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTAgMGgyNHYyNEgweiIvPgogICAgICAgIDwvY2xpcFBhdGg+CiAgICA8L2RlZnM+Cjwvc3ZnPgo=)
 * @see https://web3icons.io/tokens/PERC
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenPERC = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenPERC', __iconNode);
;
}),
]);

//# sourceMappingURL=1qqr_%40web3icons_react_dist_1x64j9g._.js.map