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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenUSN.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenUSN
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-client] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#fff',
                d: 'M21 3H3v18h18z'
            }
        ],
        [
            'path',
            {
                fill: '#000',
                d: 'M21 12a9 9 0 1 0-18 0 9 9 0 0 0 18 0'
            }
        ],
        [
            'path',
            {
                fill: '#fff',
                d: 'M10.028 8.049a.8.8 0 0 0-.874-.277.76.76 0 0 0-.541.716v1.505H6.789v1.504h1.824v1.004H6.789v1.504h1.824v2.257h1.563V10.82l3.795 5.071a.8.8 0 0 0 .874.276c.323-.1.541-.39.541-.716v-1.446h1.824V12.5h-1.824v-1.003h1.824V9.993h-1.824V7.736h-1.563v5.384z'
            }
        ]
    ],
    mono: [
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M21 3H3v18h18z'
            }
        ],
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M12 3a9 9 0 1 1 0 18 9 9 0 0 1 0-18M9.155 7.773c.323-.1.676.012.874.277l3.795 5.07V7.738h1.563v2.257h1.823v1.504h-1.823v1.004h1.823v1.504h-1.823v1.446a.755.755 0 0 1-.542.716.8.8 0 0 1-.874-.276l-3.795-5.071v5.442H8.613v-2.257H6.79v-1.504h1.824v-1.004H6.79V9.994h1.824V8.489c0-.326.219-.616.542-.716',
                fillRule: 'evenodd',
                clipRule: 'evenodd'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#USN__a)'
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
                        d: 'M20 4H4v16h16z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M12 4a8 8 0 1 1 0 16 8 8 0 0 1 0-16M9.47 8.243a.71.71 0 0 1 .778.245l3.373 4.508V8.211h1.39v2.006h1.62v1.337h-1.62v.892h1.62v1.337h-1.62v1.286c0 .29-.195.547-.482.636a.71.71 0 0 1-.777-.245l-3.373-4.508v4.837h-1.39v-2.006H7.37v-1.337h1.62v-.892H7.37v-1.337h1.62V8.879c0-.29.195-.547.482-.636',
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
                        id: 'USN__a'
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
 * @component @name TokenUSN
 * @description Web3Icon for TokenUSN
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0yMSAzSDN2MThoMTh6Ii8+CiAgICA8cGF0aCBmaWxsPSIjMDAwIiBkPSJNMjEgMTJhOSA5IDAgMSAwLTE4IDAgOSA5IDAgMCAwIDE4IDAiLz4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xMC4wMjggOC4wNDlhLjguOCAwIDAgMC0uODc0LS4yNzcuNzYuNzYgMCAwIDAtLjU0MS43MTZ2MS41MDVINi43ODl2MS41MDRoMS44MjR2MS4wMDRINi43ODl2MS41MDRoMS44MjR2Mi4yNTdoMS41NjNWMTAuODJsMy43OTUgNS4wNzFhLjguOCAwIDAgMCAuODc0LjI3NmMuMzIzLS4xLjU0MS0uMzkuNTQxLS43MTZ2LTEuNDQ2aDEuODI0VjEyLjVoLTEuODI0di0xLjAwM2gxLjgyNFY5Ljk5M2gtMS44MjRWNy43MzZoLTEuNTYzdjUuMzg0eiIvPgo8L3N2Zz4K) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0yMSAzSDN2MThoMTh6Ii8+CiAgICA8cGF0aCBmaWxsPSIjZmZmIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMiAzYTkgOSAwIDEgMSAwIDE4IDkgOSAwIDAgMSAwLTE4TTkuMTU1IDcuNzczYy4zMjMtLjEuNjc2LjAxMi44NzQuMjc3bDMuNzk1IDUuMDdWNy43MzhoMS41NjN2Mi4yNTdoMS44MjN2MS41MDRoLTEuODIzdjEuMDA0aDEuODIzdjEuNTA0aC0xLjgyM3YxLjQ0NmEuNzU1Ljc1NSAwIDAgMS0uNTQyLjcxNi44LjggMCAwIDEtLjg3NC0uMjc2bC0zLjc5NS01LjA3MXY1LjQ0Mkg4LjYxM3YtMi4yNTdINi43OXYtMS41MDRoMS44MjR2LTEuMDA0SDYuNzlWOS45OTRoMS44MjRWOC40ODljMC0uMzI2LjIxOS0uNjE2LjU0Mi0uNzE2IiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+Cg==) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNVU05fX2EpIj4KICAgICAgICA8cGF0aCBmaWxsPSIjMDAwIiBkPSJNMjQgMEgwdjI0aDI0eiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0yMCA0SDR2MTZoMTZ6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTIgNGE4IDggMCAxIDEgMCAxNiA4IDggMCAwIDEgMC0xNk05LjQ3IDguMjQzYS43MS43MSAwIDAgMSAuNzc4LjI0NWwzLjM3MyA0LjUwOFY4LjIxMWgxLjM5djIuMDA2aDEuNjJ2MS4zMzdoLTEuNjJ2Ljg5MmgxLjYydjEuMzM3aC0xLjYydjEuMjg2YzAgLjI5LS4xOTUuNTQ3LS40ODIuNjM2YS43MS43MSAwIDAgMS0uNzc3LS4yNDVsLTMuMzczLTQuNTA4djQuODM3aC0xLjM5di0yLjAwNkg3LjM3di0xLjMzN2gxLjYydi0uODkySDcuMzd2LTEuMzM3aDEuNjJWOC44NzljMC0uMjkuMTk1LS41NDcuNDgyLS42MzYiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgogICAgPC9nPgogICAgPGRlZnM+CiAgICAgICAgPGNsaXBQYXRoIGlkPSJVU05fX2EiPgogICAgICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMCAwaDI0djI0SDB6Ii8+CiAgICAgICAgPC9jbGlwUGF0aD4KICAgIDwvZGVmcz4KPC9zdmc+Cg==)
 * @see https://web3icons.io/tokens/USN
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenUSN = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenUSN', __iconNode);
;
}),
]);

//# sourceMappingURL=1qqr_%40web3icons_react_dist_0aruh52._.js.map