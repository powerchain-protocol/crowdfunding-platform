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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenSBTC.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenSBTC
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-client] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#F08619',
                d: 'M12 16.5a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9'
            }
        ],
        [
            'path',
            {
                fill: '#fff',
                d: 'M9.75 14.25v-4.5h3.26c.793 0 1.24.748 1.24 1.346 0 .479-.207.782-.31.873.248.25.31.702.31.897.02.858-.707 1.384-1.104 1.384z'
            }
        ],
        [
            'path',
            {
                fill: '#4E4294',
                d: 'M12 21a9 9 0 0 0 7.796-13.5h-4.42a5.61 5.61 0 0 1 2.249 4.499 5.624 5.624 0 0 1-5.616 5.624l.004.002h-7.04A8.98 8.98 0 0 0 12 21m-7.796-4.5A8.96 8.96 0 0 1 3 12a9 9 0 0 1 16.026-5.625H12A5.624 5.624 0 0 0 8.627 16.5z'
            }
        ],
        [
            'path',
            {
                fill: '#F08619',
                d: 'M12.972 10.875h-2.097v.562h2.097c.05-.016.153-.093.153-.271s-.102-.269-.153-.291m0 1.688h-2.097v.562h2.097c.05-.016.153-.093.153-.272 0-.178-.102-.268-.153-.29'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M12 21a9 9 0 0 0 7.796-13.5h-4.42a5.61 5.61 0 0 1 2.249 4.499 5.624 5.624 0 0 1-5.616 5.624l.004.002h-7.04A8.98 8.98 0 0 0 12 21m-7.796-4.5A8.96 8.96 0 0 1 3 12a9 9 0 0 1 16.026-5.625H12A5.624 5.624 0 0 0 8.627 16.5z'
            }
        ],
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M12.972 10.875h-2.097v.563h2.097c.05-.017.153-.094.153-.272s-.102-.269-.153-.291m0 1.688h-2.097v.562h2.097c.05-.016.153-.093.153-.272 0-.178-.102-.268-.153-.29'
            }
        ],
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0m-6.75 2.25v-4.5h3.26c.793 0 1.24.748 1.24 1.346 0 .479-.207.782-.31.873.248.25.31.702.31.897.02.858-.707 1.384-1.104 1.384z',
                fillRule: 'evenodd',
                clipRule: 'evenodd'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#SBTC__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#4E4294',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M12 20a8 8 0 0 0 6.93-12h-3.929A4.99 4.99 0 0 1 17 11.999a5 5 0 0 1-4.992 4.999l.004.002H5.755A7.99 7.99 0 0 0 12 20m-6.93-4a8 8 0 0 1 13.175-9H12a5 5 0 0 0-2.998 9z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M12.864 11H11v.5h1.864c.045-.015.136-.083.136-.241 0-.159-.091-.24-.136-.259m0 1.5H11v.5h1.864c.045-.014.136-.083.136-.241 0-.159-.091-.239-.136-.259'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0m-6 2v-4h2.898c.705 0 1.101.665 1.101 1.197 0 .425-.183.695-.274.776.22.221.274.624.274.797.019.763-.628 1.23-.98 1.23z',
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
                        id: 'SBTC__a'
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
 * @component @name TokenSBTC
 * @description Web3Icon for TokenSBTC
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNGMDg2MTkiIGQ9Ik0xMiAxNi41YTQuNSA0LjUgMCAxIDAgMC05IDQuNSA0LjUgMCAwIDAgMCA5Ii8+CiAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNOS43NSAxNC4yNXYtNC41aDMuMjZjLjc5MyAwIDEuMjQuNzQ4IDEuMjQgMS4zNDYgMCAuNDc5LS4yMDcuNzgyLS4zMS44NzMuMjQ4LjI1LjMxLjcwMi4zMS44OTcuMDIuODU4LS43MDcgMS4zODQtMS4xMDQgMS4zODR6Ii8+CiAgICA8cGF0aCBmaWxsPSIjNEU0Mjk0IiBkPSJNMTIgMjFhOSA5IDAgMCAwIDcuNzk2LTEzLjVoLTQuNDJhNS42MSA1LjYxIDAgMCAxIDIuMjQ5IDQuNDk5IDUuNjI0IDUuNjI0IDAgMCAxLTUuNjE2IDUuNjI0bC4wMDQuMDAyaC03LjA0QTguOTggOC45OCAwIDAgMCAxMiAyMW0tNy43OTYtNC41QTguOTYgOC45NiAwIDAgMSAzIDEyYTkgOSAwIDAgMSAxNi4wMjYtNS42MjVIMTJBNS42MjQgNS42MjQgMCAwIDAgOC42MjcgMTYuNXoiLz4KICAgIDxwYXRoIGZpbGw9IiNGMDg2MTkiIGQ9Ik0xMi45NzIgMTAuODc1aC0yLjA5N3YuNTYyaDIuMDk3Yy4wNS0uMDE2LjE1My0uMDkzLjE1My0uMjcxcy0uMTAyLS4yNjktLjE1My0uMjkxbTAgMS42ODhoLTIuMDk3di41NjJoMi4wOTdjLjA1LS4wMTYuMTUzLS4wOTMuMTUzLS4yNzIgMC0uMTc4LS4xMDItLjI2OC0uMTUzLS4yOSIvPgo8L3N2Zz4K) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xMiAyMWE5IDkgMCAwIDAgNy43OTYtMTMuNWgtNC40MmE1LjYxIDUuNjEgMCAwIDEgMi4yNDkgNC40OTkgNS42MjQgNS42MjQgMCAwIDEtNS42MTYgNS42MjRsLjAwNC4wMDJoLTcuMDRBOC45OCA4Ljk4IDAgMCAwIDEyIDIxbS03Ljc5Ni00LjVBOC45NiA4Ljk2IDAgMCAxIDMgMTJhOSA5IDAgMCAxIDE2LjAyNi01LjYyNUgxMkE1LjYyNCA1LjYyNCAwIDAgMCA4LjYyNyAxNi41eiIvPgogICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTEyLjk3MiAxMC44NzVoLTIuMDk3di41NjNoMi4wOTdjLjA1LS4wMTcuMTUzLS4wOTQuMTUzLS4yNzJzLS4xMDItLjI2OS0uMTUzLS4yOTFtMCAxLjY4OGgtMi4wOTd2LjU2MmgyLjA5N2MuMDUtLjAxNi4xNTMtLjA5My4xNTMtLjI3MiAwLS4xNzgtLjEwMi0uMjY4LS4xNTMtLjI5Ii8+CiAgICA8cGF0aCBmaWxsPSIjZmZmIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNi41IDEyYTQuNSA0LjUgMCAxIDEtOSAwIDQuNSA0LjUgMCAwIDEgOSAwbS02Ljc1IDIuMjV2LTQuNWgzLjI2Yy43OTMgMCAxLjI0Ljc0OCAxLjI0IDEuMzQ2IDAgLjQ3OS0uMjA3Ljc4Mi0uMzEuODczLjI0OC4yNS4zMS43MDIuMzEuODk3LjAyLjg1OC0uNzA3IDEuMzg0LTEuMTA0IDEuMzg0eiIgY2xpcC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo=) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNTQlRDX19hKSI+CiAgICAgICAgPHBhdGggZmlsbD0iIzRFNDI5NCIgZD0iTTI0IDBIMHYyNGgyNHoiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTIgMjBhOCA4IDAgMCAwIDYuOTMtMTJoLTMuOTI5QTQuOTkgNC45OSAwIDAgMSAxNyAxMS45OTlhNSA1IDAgMCAxLTQuOTkyIDQuOTk5bC4wMDQuMDAySDUuNzU1QTcuOTkgNy45OSAwIDAgMCAxMiAyMG0tNi45My00YTggOCAwIDAgMSAxMy4xNzUtOUgxMmE1IDUgMCAwIDAtMi45OTggOXoiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTIuODY0IDExSDExdi41aDEuODY0Yy4wNDUtLjAxNS4xMzYtLjA4My4xMzYtLjI0MSAwLS4xNTktLjA5MS0uMjQtLjEzNi0uMjU5bTAgMS41SDExdi41aDEuODY0Yy4wNDUtLjAxNC4xMzYtLjA4My4xMzYtLjI0MSAwLS4xNTktLjA5MS0uMjM5LS4xMzYtLjI1OSIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTE2IDEyYTQgNCAwIDEgMS04IDAgNCA0IDAgMCAxIDggMG0tNiAydi00aDIuODk4Yy43MDUgMCAxLjEwMS42NjUgMS4xMDEgMS4xOTcgMCAuNDI1LS4xODMuNjk1LS4yNzQuNzc2LjIyLjIyMS4yNzQuNjI0LjI3NC43OTcuMDE5Ljc2My0uNjI4IDEuMjMtLjk4IDEuMjN6IiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KICAgIDwvZz4KICAgIDxkZWZzPgogICAgICAgIDxjbGlwUGF0aCBpZD0iU0JUQ19fYSI+CiAgICAgICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0wIDBoMjR2MjRIMHoiLz4KICAgICAgICA8L2NsaXBQYXRoPgogICAgPC9kZWZzPgo8L3N2Zz4K)
 * @see https://web3icons.io/tokens/SBTC
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenSBTC = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenSBTC', __iconNode);
;
}),
]);

//# sourceMappingURL=1qqr_%40web3icons_react_dist_0z8w2ui._.js.map