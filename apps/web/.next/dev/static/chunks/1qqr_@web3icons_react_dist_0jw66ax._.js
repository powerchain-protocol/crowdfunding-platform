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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenD3D.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenD3D
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-client] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#46B5E0',
                d: 'm3.29 9.284.506 5.335 2.75 4.712 1.707-2.11-2.198-6.868z'
            }
        ],
        [
            'path',
            {
                fill: '#0196DA',
                d: 'm20.689 9.284-.502 5.335-2.749 4.712-1.729-2.127 2.22-6.85z'
            }
        ],
        [
            'path',
            {
                fill: '#87C9EB',
                d: 'M15.633 17.291H8.44l-1.697 2.122L12.093 21l5.182-1.587z'
            }
        ],
        [
            'path',
            {
                fill: '#E3F4FC',
                d: 'm6.038 10.14-2.765-.998L6.96 5.105 11.924 3v3l-5.891 4.14z'
            }
        ],
        [
            'path',
            {
                fill: '#82CEF0',
                d: 'm17.961 10.14 2.766-.998-3.688-4.037L12.076 3v3l5.89 4.14z'
            }
        ],
        [
            'path',
            {
                fill: '#B9E2FE',
                d: 'm17.814 10.44-5.803-4.167-5.804 4.168 2.215 6.741H15.6l2.22-6.741zM7.582 13.72l4.429 3.25 4.429-3.25-1.691-5.264H9.272z',
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
                d: 'm3.29 9.284.507 5.335 2.749 4.712 1.707-2.11-2.198-6.868zm17.399 0-.502 5.335-2.749 4.712-1.729-2.127 2.22-6.85zm-5.056 8.007H8.439l-1.697 2.122L12.093 21l5.182-1.587zM6.038 10.14l-2.765-.998L6.96 5.105 11.924 3v3l-5.891 4.14zm11.924 0 2.765-.998-3.687-4.037L12.076 3v3l5.891 4.14z'
            }
        ],
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M17.815 10.44 12.01 6.273 6.208 10.44l2.214 6.742H15.6l2.22-6.742zM7.582 13.72l4.43 3.25 4.428-3.25-1.69-5.264H9.272z',
                fillRule: 'evenodd',
                clipRule: 'evenodd'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#D3D__a)'
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
                        fill: '#46B5E0',
                        d: 'm4.257 9.586.451 4.742 2.444 4.189 1.517-1.877-1.954-6.104z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#0196DA',
                        d: 'm19.724 9.586-.447 4.742-2.443 4.189-1.537-1.891 1.973-6.09z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#87C9EB',
                        d: 'M15.23 16.703H8.835L7.327 18.59 12.083 20l4.606-1.41z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#E3F4FC',
                        d: 'm6.7 10.347-2.457-.888L7.52 5.871 11.932 4v2.667l-5.236 3.68z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#82CEF0',
                        d: 'm17.299 10.347 2.458-.888-3.277-3.588L12.067 4v2.667l5.237 3.68z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#B9E2FE',
                        d: 'm17.169 10.614-5.16-3.705-5.158 3.705 1.969 5.992h6.38l1.973-5.992zm-9.096 2.914 3.937 2.89 3.937-2.89-1.503-4.68H9.576z',
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
                        id: 'D3D__a'
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
 * @component @name TokenD3D
 * @description Web3Icon for TokenD3D
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiM0NkI1RTAiIGQ9Im0zLjI5IDkuMjg0LjUwNiA1LjMzNSAyLjc1IDQuNzEyIDEuNzA3LTIuMTEtMi4xOTgtNi44Njh6Ii8+CiAgICA8cGF0aCBmaWxsPSIjMDE5NkRBIiBkPSJtMjAuNjg5IDkuMjg0LS41MDIgNS4zMzUtMi43NDkgNC43MTItMS43MjktMi4xMjcgMi4yMi02Ljg1eiIvPgogICAgPHBhdGggZmlsbD0iIzg3QzlFQiIgZD0iTTE1LjYzMyAxNy4yOTFIOC40NGwtMS42OTcgMi4xMjJMMTIuMDkzIDIxbDUuMTgyLTEuNTg3eiIvPgogICAgPHBhdGggZmlsbD0iI0UzRjRGQyIgZD0ibTYuMDM4IDEwLjE0LTIuNzY1LS45OThMNi45NiA1LjEwNSAxMS45MjQgM3YzbC01Ljg5MSA0LjE0eiIvPgogICAgPHBhdGggZmlsbD0iIzgyQ0VGMCIgZD0ibTE3Ljk2MSAxMC4xNCAyLjc2Ni0uOTk4LTMuNjg4LTQuMDM3TDEyLjA3NiAzdjNsNS44OSA0LjE0eiIvPgogICAgPHBhdGggZmlsbD0iI0I5RTJGRSIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJtMTcuODE0IDEwLjQ0LTUuODAzLTQuMTY3LTUuODA0IDQuMTY4IDIuMjE1IDYuNzQxSDE1LjZsMi4yMi02Ljc0MXpNNy41ODIgMTMuNzJsNC40MjkgMy4yNSA0LjQyOS0zLjI1LTEuNjkxLTUuMjY0SDkuMjcyeiIgY2xpcC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo=) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Im0zLjI5IDkuMjg0LjUwNyA1LjMzNSAyLjc0OSA0LjcxMiAxLjcwNy0yLjExLTIuMTk4LTYuODY4em0xNy4zOTkgMC0uNTAyIDUuMzM1LTIuNzQ5IDQuNzEyLTEuNzI5LTIuMTI3IDIuMjItNi44NXptLTUuMDU2IDguMDA3SDguNDM5bC0xLjY5NyAyLjEyMkwxMi4wOTMgMjFsNS4xODItMS41ODd6TTYuMDM4IDEwLjE0bC0yLjc2NS0uOTk4TDYuOTYgNS4xMDUgMTEuOTI0IDN2M2wtNS44OTEgNC4xNHptMTEuOTI0IDAgMi43NjUtLjk5OC0zLjY4Ny00LjAzN0wxMi4wNzYgM3YzbDUuODkxIDQuMTR6Ii8+CiAgICA8cGF0aCBmaWxsPSIjZmZmIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNy44MTUgMTAuNDQgMTIuMDEgNi4yNzMgNi4yMDggMTAuNDRsMi4yMTQgNi43NDJIMTUuNmwyLjIyLTYuNzQyek03LjU4MiAxMy43Mmw0LjQzIDMuMjUgNC40MjgtMy4yNS0xLjY5LTUuMjY0SDkuMjcyeiIgY2xpcC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo=) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNEM0RfX2EpIj4KICAgICAgICA8cGF0aCBmaWxsPSIjMDAwIiBkPSJNMjQgMEgwdjI0aDI0eiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiM0NkI1RTAiIGQ9Im00LjI1NyA5LjU4Ni40NTEgNC43NDIgMi40NDQgNC4xODkgMS41MTctMS44NzctMS45NTQtNi4xMDR6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0iIzAxOTZEQSIgZD0ibTE5LjcyNCA5LjU4Ni0uNDQ3IDQuNzQyLTIuNDQzIDQuMTg5LTEuNTM3LTEuODkxIDEuOTczLTYuMDl6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0iIzg3QzlFQiIgZD0iTTE1LjIzIDE2LjcwM0g4LjgzNUw3LjMyNyAxOC41OSAxMi4wODMgMjBsNC42MDYtMS40MXoiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjRTNGNEZDIiBkPSJtNi43IDEwLjM0Ny0yLjQ1Ny0uODg4TDcuNTIgNS44NzEgMTEuOTMyIDR2Mi42NjdsLTUuMjM2IDMuNjh6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0iIzgyQ0VGMCIgZD0ibTE3LjI5OSAxMC4zNDcgMi40NTgtLjg4OC0zLjI3Ny0zLjU4OEwxMi4wNjcgNHYyLjY2N2w1LjIzNyAzLjY4eiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNCOUUyRkUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0ibTE3LjE2OSAxMC42MTQtNS4xNi0zLjcwNS01LjE1OCAzLjcwNSAxLjk2OSA1Ljk5Mmg2LjM4bDEuOTczLTUuOTkyem0tOS4wOTYgMi45MTQgMy45MzcgMi44OSAzLjkzNy0yLjg5LTEuNTAzLTQuNjhIOS41NzZ6IiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KICAgIDwvZz4KICAgIDxkZWZzPgogICAgICAgIDxjbGlwUGF0aCBpZD0iRDNEX19hIj4KICAgICAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTAgMGgyNHYyNEgweiIvPgogICAgICAgIDwvY2xpcFBhdGg+CiAgICA8L2RlZnM+Cjwvc3ZnPgo=)
 * @see https://web3icons.io/tokens/D3D
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenD3D = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenD3D', __iconNode);
;
}),
]);

//# sourceMappingURL=1qqr_%40web3icons_react_dist_0jw66ax._.js.map