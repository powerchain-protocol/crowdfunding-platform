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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenNSBT.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenNSBT
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-client] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#6A53F3',
                d: 'm21 12-9-9-9 9 9 9zM9.5 16h-1v-3.5h-2v-1h2V8h1l5 6.28V8h1v3.5h2v1h-2V16h-1l-5-6.245z',
                fillRule: 'evenodd',
                clipRule: 'evenodd'
            }
        ],
        [
            'path',
            {
                fill: '#5428DB',
                d: 'M9.5 16h-1v-3.5h-2v-1h2v-.894a4.3 4.3 0 0 0-.895-.106C5.355 10.5 3 12 3 12l9 9 8.975-8.97c-.3.17-2.045.97-4.645.97q-.406-.001-.83-.062v3.061h-1l-3.707-4.63a24 24 0 0 0-1.293-.483z'
            }
        ],
        [
            'path',
            {
                fill: '#5428DB',
                d: 'm12.832 12.183 1.67 2.096V12.73a17 17 0 0 1-1.67-.547'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'm21 12-9-9-9 9 9 9zM9.5 16h-1v-3.5h-2v-1h2V8h1l5 6.28V8h1v3.5h2v1h-2V16h-1l-5-6.245z',
                fillRule: 'evenodd',
                clipRule: 'evenodd'
            }
        ],
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M9.5 16h-1v-3.5h-2v-1h2v-.894a4.3 4.3 0 0 0-.895-.106C5.355 10.5 3 12 3 12l9 9 8.975-8.97c-.3.17-2.045.97-4.645.97q-.406-.001-.83-.062v3.061h-1l-3.707-4.63a24 24 0 0 0-1.293-.483z'
            }
        ],
        [
            'path',
            {
                fill: 'currentColor',
                d: 'm12.831 12.183 1.67 2.096V12.73a17 17 0 0 1-1.67-.547'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#NSBT__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#6A53F3',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'm20 12-8-8-8 8 8 8zM9.778 15.555h-.89v-3.11H7.112v-.89H8.89v-3.11h.889l4.444 5.582V8.445h.889v3.11h1.778v.89h-1.78v3.11h-.889l-4.444-5.55z',
                        fillRule: 'evenodd',
                        clipRule: 'evenodd'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M9.778 15.555h-.89v-3.11H7.112v-.89H8.89v-.794a4 4 0 0 0-.796-.094C6.093 10.667 4 12 4 12l8 8 7.978-7.973c-.267.15-1.818.862-4.13.862q-.36-.001-.737-.055v2.721h-.889l-3.295-4.116c-.396-.158-.78-.306-1.15-.429z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'm12.739 12.162 1.483 1.864v-1.377c-.489-.129-.987-.3-1.483-.487'
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
                        id: 'NSBT__a'
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
 * @component @name TokenNSBT
 * @description Web3Icon for TokenNSBT
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiM2QTUzRjMiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0ibTIxIDEyLTktOS05IDkgOSA5ek05LjUgMTZoLTF2LTMuNWgtMnYtMWgyVjhoMWw1IDYuMjhWOGgxdjMuNWgydjFoLTJWMTZoLTFsLTUtNi4yNDV6IiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KICAgIDxwYXRoIGZpbGw9IiM1NDI4REIiIGQ9Ik05LjUgMTZoLTF2LTMuNWgtMnYtMWgydi0uODk0YTQuMyA0LjMgMCAwIDAtLjg5NS0uMTA2QzUuMzU1IDEwLjUgMyAxMiAzIDEybDkgOSA4Ljk3NS04Ljk3Yy0uMy4xNy0yLjA0NS45Ny00LjY0NS45N3EtLjQwNi0uMDAxLS44My0uMDYydjMuMDYxaC0xbC0zLjcwNy00LjYzYTI0IDI0IDAgMCAwLTEuMjkzLS40ODN6Ii8+CiAgICA8cGF0aCBmaWxsPSIjNTQyOERCIiBkPSJtMTIuODMyIDEyLjE4MyAxLjY3IDIuMDk2VjEyLjczYTE3IDE3IDAgMCAxLTEuNjctLjU0NyIvPgo8L3N2Zz4K) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0ibTIxIDEyLTktOS05IDkgOSA5ek05LjUgMTZoLTF2LTMuNWgtMnYtMWgyVjhoMWw1IDYuMjhWOGgxdjMuNWgydjFoLTJWMTZoLTFsLTUtNi4yNDV6IiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik05LjUgMTZoLTF2LTMuNWgtMnYtMWgydi0uODk0YTQuMyA0LjMgMCAwIDAtLjg5NS0uMTA2QzUuMzU1IDEwLjUgMyAxMiAzIDEybDkgOSA4Ljk3NS04Ljk3Yy0uMy4xNy0yLjA0NS45Ny00LjY0NS45N3EtLjQwNi0uMDAxLS44My0uMDYydjMuMDYxaC0xbC0zLjcwNy00LjYzYTI0IDI0IDAgMCAwLTEuMjkzLS40ODN6Ii8+CiAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJtMTIuODMxIDEyLjE4MyAxLjY3IDIuMDk2VjEyLjczYTE3IDE3IDAgMCAxLTEuNjctLjU0NyIvPgo8L3N2Zz4K) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNOU0JUX19hKSI+CiAgICAgICAgPHBhdGggZmlsbD0iIzZBNTNGMyIgZD0iTTI0IDBIMHYyNGgyNHoiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Im0yMCAxMi04LTgtOCA4IDggOHpNOS43NzggMTUuNTU1aC0uODl2LTMuMTFINy4xMTJ2LS44OUg4Ljg5di0zLjExaC44ODlsNC40NDQgNS41ODJWOC40NDVoLjg4OXYzLjExaDEuNzc4di44OWgtMS43OHYzLjExaC0uODg5bC00LjQ0NC01LjU1eiIgY2xpcC1ydWxlPSJldmVub2RkIi8+CiAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTkuNzc4IDE1LjU1NWgtLjg5di0zLjExSDcuMTEydi0uODlIOC44OXYtLjc5NGE0IDQgMCAwIDAtLjc5Ni0uMDk0QzYuMDkzIDEwLjY2NyA0IDEyIDQgMTJsOCA4IDcuOTc4LTcuOTczYy0uMjY3LjE1LTEuODE4Ljg2Mi00LjEzLjg2MnEtLjM2LS4wMDEtLjczNy0uMDU1djIuNzIxaC0uODg5bC0zLjI5NS00LjExNmMtLjM5Ni0uMTU4LS43OC0uMzA2LTEuMTUtLjQyOXoiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJtMTIuNzM5IDEyLjE2MiAxLjQ4MyAxLjg2NHYtMS4zNzdjLS40ODktLjEyOS0uOTg3LS4zLTEuNDgzLS40ODciLz4KICAgIDwvZz4KICAgIDxkZWZzPgogICAgICAgIDxjbGlwUGF0aCBpZD0iTlNCVF9fYSI+CiAgICAgICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0wIDBoMjR2MjRIMHoiLz4KICAgICAgICA8L2NsaXBQYXRoPgogICAgPC9kZWZzPgo8L3N2Zz4K)
 * @see https://web3icons.io/tokens/NSBT
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenNSBT = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenNSBT', __iconNode);
;
}),
]);

//# sourceMappingURL=1qqr_%40web3icons_react_dist_0589_cp._.js.map