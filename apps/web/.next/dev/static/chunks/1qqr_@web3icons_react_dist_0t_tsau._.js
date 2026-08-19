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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenMNTL.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenMNTL
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-client] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#0D0A03',
                d: 'M15.5 17.501a1.5 1.5 0 1 0 0-3.001 1.5 1.5 0 0 0 0 3.001'
            }
        ],
        [
            'path',
            {
                fill: '#FCBE33',
                d: 'M21 7.8v8.4a1.815 1.815 0 0 1-1.63 1.79c-1.11.106-1.86-.734-1.87-1.79v-1.37c0-.38-.22-.75-.45-1.05a1.798 1.798 0 0 0-2.9.02l-.935 1.31-1.505 2.116A1.8 1.8 0 0 1 8.8 15.12l5.99-8.4A1.8 1.8 0 0 1 16.21 6h2.995A1.8 1.8 0 0 1 21 7.8'
            }
        ],
        [
            'path',
            {
                fill: '#0D0A03',
                d: 'M4.8 6h6a1.8 1.8 0 0 1 1.465 2.845l-6 8.4A1.8 1.8 0 0 1 3 16.206V7.802A1.8 1.8 0 0 1 4.8 6m.95 4.5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M15.5 17.5a1.5 1.5 0 1 0 0-3.002 1.5 1.5 0 0 0 0 3.002'
            }
        ],
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M21 7.8v8.4a1.815 1.815 0 0 1-1.63 1.79c-1.11.106-1.86-.734-1.87-1.79v-1.37c0-.38-.22-.75-.45-1.05a1.8 1.8 0 0 0-2.9.02l-.935 1.31-1.505 2.116A1.8 1.8 0 0 1 8.8 15.12l5.99-8.4A1.8 1.8 0 0 1 16.21 6h2.995A1.8 1.8 0 0 1 21 7.8M4.8 6h6a1.8 1.8 0 0 1 1.465 2.845l-6 8.4A1.8 1.8 0 0 1 3 16.206V7.802A1.8 1.8 0 0 1 4.8 6m.95 4.5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#MNTL__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#0D0A03',
                        d: 'M15.111 16.89a1.334 1.334 0 1 0 0-2.667 1.334 1.334 0 0 0 0 2.667'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#FCBE33',
                        d: 'M20 8.267v7.467a1.613 1.613 0 0 1-1.449 1.59c-.987.094-1.653-.653-1.662-1.59v-1.218c0-.338-.196-.667-.4-.934a1.6 1.6 0 0 0-2.578.018l-.831 1.165-1.338 1.88a1.6 1.6 0 0 1-2.587-1.871l5.325-7.467a1.6 1.6 0 0 1 1.262-.64h2.662A1.6 1.6 0 0 1 20 8.267'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#0D0A03',
                        d: 'M5.6 6.667h5.333a1.6 1.6 0 0 1 1.303 2.529l-5.334 7.467A1.6 1.6 0 0 1 4 15.738V8.267a1.6 1.6 0 0 1 1.6-1.6m.844 4a1.11 1.11 0 1 0 0-2.222 1.11 1.11 0 0 0 0 2.222'
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
                        id: 'MNTL__a'
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
 * @component @name TokenMNTL
 * @description Web3Icon for TokenMNTL
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiMwRDBBMDMiIGQ9Ik0xNS41IDE3LjUwMWExLjUgMS41IDAgMSAwIDAtMy4wMDEgMS41IDEuNSAwIDAgMCAwIDMuMDAxIi8+CiAgICA8cGF0aCBmaWxsPSIjRkNCRTMzIiBkPSJNMjEgNy44djguNGExLjgxNSAxLjgxNSAwIDAgMS0xLjYzIDEuNzljLTEuMTEuMTA2LTEuODYtLjczNC0xLjg3LTEuNzl2LTEuMzdjMC0uMzgtLjIyLS43NS0uNDUtMS4wNWExLjc5OCAxLjc5OCAwIDAgMC0yLjkuMDJsLS45MzUgMS4zMS0xLjUwNSAyLjExNkExLjggMS44IDAgMCAxIDguOCAxNS4xMmw1Ljk5LTguNEExLjggMS44IDAgMCAxIDE2LjIxIDZoMi45OTVBMS44IDEuOCAwIDAgMSAyMSA3LjgiLz4KICAgIDxwYXRoIGZpbGw9IiMwRDBBMDMiIGQ9Ik00LjggNmg2YTEuOCAxLjggMCAwIDEgMS40NjUgMi44NDVsLTYgOC40QTEuOCAxLjggMCAwIDEgMyAxNi4yMDZWNy44MDJBMS44IDEuOCAwIDAgMSA0LjggNm0uOTUgNC41YTEuMjUgMS4yNSAwIDEgMCAwLTIuNSAxLjI1IDEuMjUgMCAwIDAgMCAyLjUiLz4KPC9zdmc+Cg==) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xNS41IDE3LjVhMS41IDEuNSAwIDEgMCAwLTMuMDAyIDEuNSAxLjUgMCAwIDAgMCAzLjAwMiIvPgogICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTIxIDcuOHY4LjRhMS44MTUgMS44MTUgMCAwIDEtMS42MyAxLjc5Yy0xLjExLjEwNi0xLjg2LS43MzQtMS44Ny0xLjc5di0xLjM3YzAtLjM4LS4yMi0uNzUtLjQ1LTEuMDVhMS44IDEuOCAwIDAgMC0yLjkuMDJsLS45MzUgMS4zMS0xLjUwNSAyLjExNkExLjggMS44IDAgMCAxIDguOCAxNS4xMmw1Ljk5LTguNEExLjggMS44IDAgMCAxIDE2LjIxIDZoMi45OTVBMS44IDEuOCAwIDAgMSAyMSA3LjhNNC44IDZoNmExLjggMS44IDAgMCAxIDEuNDY1IDIuODQ1bC02IDguNEExLjggMS44IDAgMCAxIDMgMTYuMjA2VjcuODAyQTEuOCAxLjggMCAwIDEgNC44IDZtLjk1IDQuNWExLjI1IDEuMjUgMCAxIDAgMC0yLjUgMS4yNSAxLjI1IDAgMCAwIDAgMi41Ii8+Cjwvc3ZnPgo=) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNNTlRMX19hKSI+CiAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTI0IDBIMHYyNGgyNHoiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjMEQwQTAzIiBkPSJNMTUuMTExIDE2Ljg5YTEuMzM0IDEuMzM0IDAgMSAwIDAtMi42NjcgMS4zMzQgMS4zMzQgMCAwIDAgMCAyLjY2NyIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNGQ0JFMzMiIGQ9Ik0yMCA4LjI2N3Y3LjQ2N2ExLjYxMyAxLjYxMyAwIDAgMS0xLjQ0OSAxLjU5Yy0uOTg3LjA5NC0xLjY1My0uNjUzLTEuNjYyLTEuNTl2LTEuMjE4YzAtLjMzOC0uMTk2LS42NjctLjQtLjkzNGExLjYgMS42IDAgMCAwLTIuNTc4LjAxOGwtLjgzMSAxLjE2NS0xLjMzOCAxLjg4YTEuNiAxLjYgMCAwIDEtMi41ODctMS44NzFsNS4zMjUtNy40NjdhMS42IDEuNiAwIDAgMSAxLjI2Mi0uNjRoMi42NjJBMS42IDEuNiAwIDAgMSAyMCA4LjI2NyIvPgogICAgICAgIDxwYXRoIGZpbGw9IiMwRDBBMDMiIGQ9Ik01LjYgNi42NjdoNS4zMzNhMS42IDEuNiAwIDAgMSAxLjMwMyAyLjUyOWwtNS4zMzQgNy40NjdBMS42IDEuNiAwIDAgMSA0IDE1LjczOFY4LjI2N2ExLjYgMS42IDAgMCAxIDEuNi0xLjZtLjg0NCA0YTEuMTEgMS4xMSAwIDEgMCAwLTIuMjIyIDEuMTEgMS4xMSAwIDAgMCAwIDIuMjIyIi8+CiAgICA8L2c+CiAgICA8ZGVmcz4KICAgICAgICA8Y2xpcFBhdGggaWQ9Ik1OVExfX2EiPgogICAgICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMCAwaDI0djI0SDB6Ii8+CiAgICAgICAgPC9jbGlwUGF0aD4KICAgIDwvZGVmcz4KPC9zdmc+Cg==)
 * @see https://web3icons.io/tokens/MNTL
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenMNTL = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenMNTL', __iconNode);
;
}),
]);

//# sourceMappingURL=1qqr_%40web3icons_react_dist_0t_tsau._.js.map