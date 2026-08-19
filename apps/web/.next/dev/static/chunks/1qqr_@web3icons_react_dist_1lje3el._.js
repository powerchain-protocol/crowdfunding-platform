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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenPROTEO.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenPROTEO
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-client] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#D7A012',
                d: 'm10.096 5.861-3.78 5.665L12 21l5.684-9.474-3.78-5.665 1.118 5.665h1.331l-3.88 7.106v-7.106h1.218L12.02 3.024 12 3l-.019.024-1.672 8.502h1.217v7.106l-3.884-7.106h1.336z'
            }
        ],
        [
            'path',
            {
                fill: 'url(#PROTEO__a)',
                d: 'm10.096 5.861-3.78 5.665L12 21l5.684-9.474-3.78-5.665 1.118 5.665h1.331l-3.88 7.106v-7.106h1.218L12.02 3.024 12 3l-.019.024-1.672 8.502h1.217v7.106l-3.884-7.106h1.336z',
                fillOpacity: '.3'
            }
        ],
        [
            'defs',
            {},
            [
                [
                    'linearGradient',
                    {
                        id: 'PROTEO__a',
                        x1: '12',
                        x2: '12',
                        y1: '7.026',
                        y2: '18.869',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#fff'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '.68',
                                stopColor: '#fff',
                                stopOpacity: '0'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#fff',
                                stopOpacity: '.5'
                            }
                        ]
                    ]
                ]
            ]
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'm10.096 5.861-3.78 5.665L12 21l5.684-9.474-3.78-5.665 1.118 5.665h1.331l-3.88 7.106v-7.106h1.218L12.02 3.024 12 3l-.019.024-1.672 8.502h1.218v7.106l-3.885-7.106h1.336z'
            }
        ],
        [
            'path',
            {
                fill: 'currentColor',
                d: 'm10.096 5.861-3.78 5.665L12 21l5.684-9.474-3.78-5.665 1.118 5.665h1.331l-3.88 7.106v-7.106h1.218L12.02 3.024 12 3l-.019.024-1.672 8.502h1.218v7.106l-3.885-7.106h1.336z'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#PROTEO__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#D7A012',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'm10.307 6.543-3.36 5.036L12 20l5.052-8.421-3.36-5.036.994 5.036h1.184l-3.449 6.316v-6.316h1.082l-1.486-7.558L12 4l-.017.021-1.486 7.558h1.082v6.316l-3.453-6.316h1.188z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'm10.307 6.543-3.36 5.036L12 20l5.052-8.421-3.36-5.036.994 5.036h1.184l-3.449 6.316v-6.316h1.082l-1.486-7.558L12 4l-.017.021-1.486 7.558h1.082v6.316l-3.453-6.316h1.188z'
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
                        id: 'PROTEO__a'
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
 * @component @name TokenPROTEO
 * @description Web3Icon for TokenPROTEO
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNEN0EwMTIiIGQ9Im0xMC4wOTYgNS44NjEtMy43OCA1LjY2NUwxMiAyMWw1LjY4NC05LjQ3NC0zLjc4LTUuNjY1IDEuMTE4IDUuNjY1aDEuMzMxbC0zLjg4IDcuMTA2di03LjEwNmgxLjIxOEwxMi4wMiAzLjAyNCAxMiAzbC0uMDE5LjAyNC0xLjY3MiA4LjUwMmgxLjIxN3Y3LjEwNmwtMy44ODQtNy4xMDZoMS4zMzZ6Ii8+CiAgICA8cGF0aCBmaWxsPSJ1cmwoI1BST1RFT19fYSkiIGZpbGwtb3BhY2l0eT0iLjMiIGQ9Im0xMC4wOTYgNS44NjEtMy43OCA1LjY2NUwxMiAyMWw1LjY4NC05LjQ3NC0zLjc4LTUuNjY1IDEuMTE4IDUuNjY1aDEuMzMxbC0zLjg4IDcuMTA2di03LjEwNmgxLjIxOEwxMi4wMiAzLjAyNCAxMiAzbC0uMDE5LjAyNC0xLjY3MiA4LjUwMmgxLjIxN3Y3LjEwNmwtMy44ODQtNy4xMDZoMS4zMzZ6Ii8+CiAgICA8ZGVmcz4KICAgICAgICA8bGluZWFyR3JhZGllbnQgaWQ9IlBST1RFT19fYSIgeDE9IjEyIiB4Mj0iMTIiIHkxPSI3LjAyNiIgeTI9IjE4Ljg2OSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjZmZmIi8+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iLjY4IiBzdG9wLWNvbG9yPSIjZmZmIiBzdG9wLW9wYWNpdHk9IjAiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjZmZmIiBzdG9wLW9wYWNpdHk9Ii41Ii8+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgIDwvZGVmcz4KPC9zdmc+Cg==) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Im0xMC4wOTYgNS44NjEtMy43OCA1LjY2NUwxMiAyMWw1LjY4NC05LjQ3NC0zLjc4LTUuNjY1IDEuMTE4IDUuNjY1aDEuMzMxbC0zLjg4IDcuMTA2di03LjEwNmgxLjIxOEwxMi4wMiAzLjAyNCAxMiAzbC0uMDE5LjAyNC0xLjY3MiA4LjUwMmgxLjIxOHY3LjEwNmwtMy44ODUtNy4xMDZoMS4zMzZ6Ii8+CiAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJtMTAuMDk2IDUuODYxLTMuNzggNS42NjVMMTIgMjFsNS42ODQtOS40NzQtMy43OC01LjY2NSAxLjExOCA1LjY2NWgxLjMzMWwtMy44OCA3LjEwNnYtNy4xMDZoMS4yMThMMTIuMDIgMy4wMjQgMTIgM2wtLjAxOS4wMjQtMS42NzIgOC41MDJoMS4yMTh2Ny4xMDZsLTMuODg1LTcuMTA2aDEuMzM2eiIvPgo8L3N2Zz4K) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNQUk9URU9fX2EpIj4KICAgICAgICA8cGF0aCBmaWxsPSIjRDdBMDEyIiBkPSJNMjQgMEgwdjI0aDI0eiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Im0xMC4zMDcgNi41NDMtMy4zNiA1LjAzNkwxMiAyMGw1LjA1Mi04LjQyMS0zLjM2LTUuMDM2Ljk5NCA1LjAzNmgxLjE4NGwtMy40NDkgNi4zMTZ2LTYuMzE2aDEuMDgybC0xLjQ4Ni03LjU1OEwxMiA0bC0uMDE3LjAyMS0xLjQ4NiA3LjU1OGgxLjA4MnY2LjMxNmwtMy40NTMtNi4zMTZoMS4xODh6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0ibTEwLjMwNyA2LjU0My0zLjM2IDUuMDM2TDEyIDIwbDUuMDUyLTguNDIxLTMuMzYtNS4wMzYuOTk0IDUuMDM2aDEuMTg0bC0zLjQ0OSA2LjMxNnYtNi4zMTZoMS4wODJsLTEuNDg2LTcuNTU4TDEyIDRsLS4wMTcuMDIxLTEuNDg2IDcuNTU4aDEuMDgydjYuMzE2bC0zLjQ1My02LjMxNmgxLjE4OHoiLz4KICAgIDwvZz4KICAgIDxkZWZzPgogICAgICAgIDxjbGlwUGF0aCBpZD0iUFJPVEVPX19hIj4KICAgICAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTAgMGgyNHYyNEgweiIvPgogICAgICAgIDwvY2xpcFBhdGg+CiAgICA8L2RlZnM+Cjwvc3ZnPgo=)
 * @see https://web3icons.io/tokens/PROTEO
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenPROTEO = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenPROTEO', __iconNode);
;
}),
]);

//# sourceMappingURL=1qqr_%40web3icons_react_dist_1lje3el._.js.map