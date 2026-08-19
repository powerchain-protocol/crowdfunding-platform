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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenCCD.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenCCD
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-client] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#000',
                d: 'M12 15.712a3.704 3.704 0 1 0-.001-7.409 3.704 3.704 0 0 0 0 7.409'
            }
        ],
        [
            'path',
            {
                fill: '#000',
                d: 'M14.644 6.218a6.366 6.366 0 0 0-8.996 5.763c0 3.519 2.895 6.376 6.403 6.376.926 0 1.8-.206 2.593-.56v2.825a9.056 9.056 0 0 1-11.642-8.641 9.012 9.012 0 0 1 11.642-8.589zm5.557 9.478h-3.043a6.35 6.35 0 0 0 0-7.43h3.037a9 9 0 0 1 0 7.43z'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M12 15.712a3.704 3.704 0 1 0-.001-7.409 3.704 3.704 0 0 0 0 7.409'
            }
        ],
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M14.644 6.218a6.366 6.366 0 0 0-8.996 5.763c0 3.519 2.895 6.376 6.403 6.376.926 0 1.8-.206 2.593-.56v2.825a9.056 9.056 0 0 1-11.642-8.641 9.012 9.012 0 0 1 11.642-8.589zm5.557 9.478h-3.043a6.35 6.35 0 0 0 0-7.43h3.037a9 9 0 0 1 0 7.43z'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#CCD__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#000',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M12 15.3a3.293 3.293 0 1 0 0-6.586 3.293 3.293 0 0 0 0 6.585'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M14.35 6.86a5.658 5.658 0 0 0-7.996 5.123c0 3.128 2.573 5.668 5.692 5.668.823 0 1.6-.183 2.305-.498v2.511a8.048 8.048 0 0 1-10.349-7.681 8.01 8.01 0 0 1 10.349-7.634zm4.94 8.425h-2.705a5.64 5.64 0 0 0 0-6.604h2.7a8 8 0 0 1 0 6.604z'
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
                        id: 'CCD__a'
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
 * @component @name TokenCCD
 * @description Web3Icon for TokenCCD
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiMwMDAiIGQ9Ik0xMiAxNS43MTJhMy43MDQgMy43MDQgMCAxIDAtLjAwMS03LjQwOSAzLjcwNCAzLjcwNCAwIDAgMCAwIDcuNDA5Ii8+CiAgICA8cGF0aCBmaWxsPSIjMDAwIiBkPSJNMTQuNjQ0IDYuMjE4YTYuMzY2IDYuMzY2IDAgMCAwLTguOTk2IDUuNzYzYzAgMy41MTkgMi44OTUgNi4zNzYgNi40MDMgNi4zNzYuOTI2IDAgMS44LS4yMDYgMi41OTMtLjU2djIuODI1YTkuMDU2IDkuMDU2IDAgMCAxLTExLjY0Mi04LjY0MSA5LjAxMiA5LjAxMiAwIDAgMSAxMS42NDItOC41ODl6bTUuNTU3IDkuNDc4aC0zLjA0M2E2LjM1IDYuMzUgMCAwIDAgMC03LjQzaDMuMDM3YTkgOSAwIDAgMSAwIDcuNDN6Ii8+Cjwvc3ZnPgo=) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xMiAxNS43MTJhMy43MDQgMy43MDQgMCAxIDAtLjAwMS03LjQwOSAzLjcwNCAzLjcwNCAwIDAgMCAwIDcuNDA5Ii8+CiAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTQuNjQ0IDYuMjE4YTYuMzY2IDYuMzY2IDAgMCAwLTguOTk2IDUuNzYzYzAgMy41MTkgMi44OTUgNi4zNzYgNi40MDMgNi4zNzYuOTI2IDAgMS44LS4yMDYgMi41OTMtLjU2djIuODI1YTkuMDU2IDkuMDU2IDAgMCAxLTExLjY0Mi04LjY0MSA5LjAxMiA5LjAxMiAwIDAgMSAxMS42NDItOC41ODl6bTUuNTU3IDkuNDc4aC0zLjA0M2E2LjM1IDYuMzUgMCAwIDAgMC03LjQzaDMuMDM3YTkgOSAwIDAgMSAwIDcuNDN6Ii8+Cjwvc3ZnPgo=) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNDQ0RfX2EpIj4KICAgICAgICA8cGF0aCBmaWxsPSIjMDAwIiBkPSJNMjQgMEgwdjI0aDI0eiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xMiAxNS4zYTMuMjkzIDMuMjkzIDAgMSAwIDAtNi41ODYgMy4yOTMgMy4yOTMgMCAwIDAgMCA2LjU4NSIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xNC4zNSA2Ljg2YTUuNjU4IDUuNjU4IDAgMCAwLTcuOTk2IDUuMTIzYzAgMy4xMjggMi41NzMgNS42NjggNS42OTIgNS42NjguODIzIDAgMS42LS4xODMgMi4zMDUtLjQ5OHYyLjUxMWE4LjA0OCA4LjA0OCAwIDAgMS0xMC4zNDktNy42ODEgOC4wMSA4LjAxIDAgMCAxIDEwLjM0OS03LjYzNHptNC45NCA4LjQyNWgtMi43MDVhNS42NCA1LjY0IDAgMCAwIDAtNi42MDRoMi43YTggOCAwIDAgMSAwIDYuNjA0eiIvPgogICAgPC9nPgogICAgPGRlZnM+CiAgICAgICAgPGNsaXBQYXRoIGlkPSJDQ0RfX2EiPgogICAgICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMCAwaDI0djI0SDB6Ii8+CiAgICAgICAgPC9jbGlwUGF0aD4KICAgIDwvZGVmcz4KPC9zdmc+Cg==)
 * @see https://web3icons.io/tokens/CCD
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenCCD = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenCCD', __iconNode);
;
}),
]);

//# sourceMappingURL=1qqr_%40web3icons_react_dist_16njy4n._.js.map