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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/networks/NetworkAurora.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>NetworkAurora
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-client] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: 'url(#aurora__a)',
                d: 'M13.88 5.677a2.101 2.101 0 0 0-3.769 0L4.423 16.46a2.1 2.1 0 0 0 1.884 3.04h11.377a2.1 2.1 0 0 0 1.884-3.042zm-4.843-.54a3.3 3.3 0 0 1 5.917 0l5.694 10.783a3.3 3.3 0 0 1-2.964 4.781H6.307a3.313 3.313 0 0 1-2.964-4.781L9.037 5.144z'
            }
        ],
        [
            'defs',
            {},
            [
                [
                    'linearGradient',
                    {
                        id: 'aurora__a',
                        x1: '17.589',
                        x2: '6.929',
                        y1: '5.195',
                        y2: '19.354',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#95E141'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '.59',
                                stopColor: '#63B836'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#409C2D'
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
                d: 'M13.88 5.677a2.1 2.1 0 0 0-3.769 0L4.423 16.46a2.1 2.1 0 0 0 1.884 3.04h11.377a2.1 2.1 0 0 0 2.106-2.006 2.1 2.1 0 0 0-.221-1.036zm-4.843-.54a3.3 3.3 0 0 1 5.917 0l5.694 10.783a3.3 3.3 0 0 1-2.964 4.781H6.307a3.314 3.314 0 0 1-2.964-4.781L9.037 5.144z'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#aurora__a)'
            },
            [
                [
                    'path',
                    {
                        fill: 'url(#aurora__b)',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M13.671 6.38a1.866 1.866 0 0 0-3.35 0l-5.056 9.584a1.867 1.867 0 0 0 1.675 2.704h10.112a1.867 1.867 0 0 0 1.676-2.704zM9.367 5.9a2.933 2.933 0 0 1 5.259 0l5.061 9.584a2.932 2.932 0 0 1-2.635 4.25H6.94a2.946 2.946 0 0 1-2.635-4.25l5.062-9.579z'
                    }
                ]
            ]
        ],
        [
            'defs',
            {},
            [
                [
                    'linearGradient',
                    {
                        id: 'aurora__b',
                        x1: '16.968',
                        x2: '7.492',
                        y1: '5.952',
                        y2: '18.537',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#95E141'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '.59',
                                stopColor: '#63B836'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#409C2D'
                            }
                        ]
                    ]
                ],
                [
                    'clipPath',
                    {
                        id: 'aurora__a'
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
 * @component @name NetworkAurora
 * @description Web3Icon for NetworkAurora
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9InVybCgjYXVyb3JhX19hKSIgZD0iTTEzLjg4IDUuNjc3YTIuMTAxIDIuMTAxIDAgMCAwLTMuNzY5IDBMNC40MjMgMTYuNDZhMi4xIDIuMSAwIDAgMCAxLjg4NCAzLjA0aDExLjM3N2EyLjEgMi4xIDAgMCAwIDEuODg0LTMuMDQyem0tNC44NDMtLjU0YTMuMyAzLjMgMCAwIDEgNS45MTcgMGw1LjY5NCAxMC43ODNhMy4zIDMuMyAwIDAgMS0yLjk2NCA0Ljc4MUg2LjMwN2EzLjMxMyAzLjMxMyAwIDAgMS0yLjk2NC00Ljc4MUw5LjAzNyA1LjE0NHoiLz4KICAgIDxkZWZzPgogICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iYXVyb3JhX19hIiB4MT0iMTcuNTg5IiB4Mj0iNi45MjkiIHkxPSI1LjE5NSIgeTI9IjE5LjM1NCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjOTVFMTQxIi8+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iLjU5IiBzdG9wLWNvbG9yPSIjNjNCODM2Ii8+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzQwOUMyRCIvPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICA8L2RlZnM+Cjwvc3ZnPgo=) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xMy44OCA1LjY3N2EyLjEgMi4xIDAgMCAwLTMuNzY5IDBMNC40MjMgMTYuNDZhMi4xIDIuMSAwIDAgMCAxLjg4NCAzLjA0aDExLjM3N2EyLjEgMi4xIDAgMCAwIDIuMTA2LTIuMDA2IDIuMSAyLjEgMCAwIDAtLjIyMS0xLjAzNnptLTQuODQzLS41NGEzLjMgMy4zIDAgMCAxIDUuOTE3IDBsNS42OTQgMTAuNzgzYTMuMyAzLjMgMCAwIDEtMi45NjQgNC43ODFINi4zMDdhMy4zMTQgMy4zMTQgMCAwIDEtMi45NjQtNC43ODFMOS4wMzcgNS4xNDR6Ii8+Cjwvc3ZnPgo=) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNhdXJvcmFfX2EpIj4KICAgICAgICA8cGF0aCBmaWxsPSJ1cmwoI2F1cm9yYV9fYikiIGQ9Ik0yNCAwSDB2MjRoMjR6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTEzLjY3MSA2LjM4YTEuODY2IDEuODY2IDAgMCAwLTMuMzUgMGwtNS4wNTYgOS41ODRhMS44NjcgMS44NjcgMCAwIDAgMS42NzUgMi43MDRoMTAuMTEyYTEuODY3IDEuODY3IDAgMCAwIDEuNjc2LTIuNzA0ek05LjM2NyA1LjlhMi45MzMgMi45MzMgMCAwIDEgNS4yNTkgMGw1LjA2MSA5LjU4NGEyLjkzMiAyLjkzMiAwIDAgMS0yLjYzNSA0LjI1SDYuOTRhMi45NDYgMi45NDYgMCAwIDEtMi42MzUtNC4yNWw1LjA2Mi05LjU3OXoiLz4KICAgIDwvZz4KICAgIDxkZWZzPgogICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iYXVyb3JhX19iIiB4MT0iMTYuOTY4IiB4Mj0iNy40OTIiIHkxPSI1Ljk1MiIgeTI9IjE4LjUzNyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjOTVFMTQxIi8+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iLjU5IiBzdG9wLWNvbG9yPSIjNjNCODM2Ii8+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzQwOUMyRCIvPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICAgICAgPGNsaXBQYXRoIGlkPSJhdXJvcmFfX2EiPgogICAgICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMCAwaDI0djI0SDB6Ii8+CiAgICAgICAgPC9jbGlwUGF0aD4KICAgIDwvZGVmcz4KPC9zdmc+Cg==)
 * @see https://web3icons.io/networks/aurora
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const NetworkAurora = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWeb3Icon"])('NetworkAurora', __iconNode);
;
}),
]);

//# sourceMappingURL=1qqr_%40web3icons_react_dist_07mvsck._.js.map