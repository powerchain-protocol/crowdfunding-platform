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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenCTR.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenCTR
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-client] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: 'url(#CTR__a)',
                d: 'M16.701 11.469a5.373 5.373 0 0 1-4.982 7.306c-2.954 0-5.347-2.404-5.347-5.363a5.352 5.352 0 0 1 6.168-5.305l1.398-4.203A8.455 8.455 0 0 0 3 11.998c0 4.68 3.78 8.471 8.439 8.471a8.455 8.455 0 0 0 8.418-9z'
            }
        ],
        [
            'path',
            {
                fill: 'url(#CTR__b)',
                d: 'M18.088 10.41a2.912 2.912 0 1 0 0-5.823 2.912 2.912 0 0 0 0 5.824'
            }
        ],
        [
            'defs',
            {},
            [
                [
                    'linearGradient',
                    {
                        id: 'CTR__a',
                        x1: '18.604',
                        x2: '6.611',
                        y1: '8.044',
                        y2: '18.357',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#6C7AF1'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '.35',
                                stopColor: '#8958EB'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#C746A6'
                            }
                        ]
                    ]
                ],
                [
                    'linearGradient',
                    {
                        id: 'CTR__b',
                        x1: '18.088',
                        x2: '18.088',
                        y1: '4.587',
                        y2: '10.411',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#32C5FF'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#904EE8'
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
                d: 'M16.701 11.47a5.372 5.372 0 0 1-4.982 7.305c-2.954 0-5.347-2.403-5.347-5.363a5.352 5.352 0 0 1 6.168-5.305l1.398-4.203A8.455 8.455 0 0 0 3 11.999c0 4.68 3.78 8.47 8.439 8.47a8.454 8.454 0 0 0 8.418-9z'
            }
        ],
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M18.088 10.41a2.912 2.912 0 1 0 0-5.822 2.912 2.912 0 0 0 0 5.823'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#CTR__a)'
            },
            [
                [
                    'path',
                    {
                        fill: 'url(#CTR__b)',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M16.179 11.528a4.775 4.775 0 0 1-4.428 6.494 4.76 4.76 0 0 1-4.753-4.767A4.758 4.758 0 0 1 12.48 8.54l1.242-3.737A7.515 7.515 0 0 0 4 12c0 4.16 3.36 7.529 7.501 7.529a7.515 7.515 0 0 0 7.483-8z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M17.412 10.587a2.588 2.588 0 1 0 0-5.176 2.588 2.588 0 0 0 0 5.176'
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
                        id: 'CTR__b',
                        x1: '17.87',
                        x2: '7.21',
                        y1: '8.483',
                        y2: '17.651',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#6C7AF1'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '.35',
                                stopColor: '#8958EB'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#C746A6'
                            }
                        ]
                    ]
                ],
                [
                    'clipPath',
                    {
                        id: 'CTR__a'
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
 * @component @name TokenCTR
 * @description Web3Icon for TokenCTR
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9InVybCgjQ1RSX19hKSIgZD0iTTE2LjcwMSAxMS40NjlhNS4zNzMgNS4zNzMgMCAwIDEtNC45ODIgNy4zMDZjLTIuOTU0IDAtNS4zNDctMi40MDQtNS4zNDctNS4zNjNhNS4zNTIgNS4zNTIgMCAwIDEgNi4xNjgtNS4zMDVsMS4zOTgtNC4yMDNBOC40NTUgOC40NTUgMCAwIDAgMyAxMS45OThjMCA0LjY4IDMuNzggOC40NzEgOC40MzkgOC40NzFhOC40NTUgOC40NTUgMCAwIDAgOC40MTgtOXoiLz4KICAgIDxwYXRoIGZpbGw9InVybCgjQ1RSX19iKSIgZD0iTTE4LjA4OCAxMC40MWEyLjkxMiAyLjkxMiAwIDEgMCAwLTUuODIzIDIuOTEyIDIuOTEyIDAgMCAwIDAgNS44MjQiLz4KICAgIDxkZWZzPgogICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iQ1RSX19hIiB4MT0iMTguNjA0IiB4Mj0iNi42MTEiIHkxPSI4LjA0NCIgeTI9IjE4LjM1NyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjNkM3QUYxIi8+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iLjM1IiBzdG9wLWNvbG9yPSIjODk1OEVCIi8+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI0M3NDZBNiIvPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICAgICAgPGxpbmVhckdyYWRpZW50IGlkPSJDVFJfX2IiIHgxPSIxOC4wODgiIHgyPSIxOC4wODgiIHkxPSI0LjU4NyIgeTI9IjEwLjQxMSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjMzJDNUZGIi8+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzkwNEVFOCIvPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICA8L2RlZnM+Cjwvc3ZnPgo=) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xNi43MDEgMTEuNDdhNS4zNzIgNS4zNzIgMCAwIDEtNC45ODIgNy4zMDVjLTIuOTU0IDAtNS4zNDctMi40MDMtNS4zNDctNS4zNjNhNS4zNTIgNS4zNTIgMCAwIDEgNi4xNjgtNS4zMDVsMS4zOTgtNC4yMDNBOC40NTUgOC40NTUgMCAwIDAgMyAxMS45OTljMCA0LjY4IDMuNzggOC40NyA4LjQzOSA4LjQ3YTguNDU0IDguNDU0IDAgMCAwIDguNDE4LTl6Ii8+CiAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTguMDg4IDEwLjQxYTIuOTEyIDIuOTEyIDAgMSAwIDAtNS44MjIgMi45MTIgMi45MTIgMCAwIDAgMCA1LjgyMyIvPgo8L3N2Zz4K) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNDVFJfX2EpIj4KICAgICAgICA8cGF0aCBmaWxsPSJ1cmwoI0NUUl9fYikiIGQ9Ik0yNCAwSDB2MjRoMjR6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTE2LjE3OSAxMS41MjhhNC43NzUgNC43NzUgMCAwIDEtNC40MjggNi40OTQgNC43NiA0Ljc2IDAgMCAxLTQuNzUzLTQuNzY3QTQuNzU4IDQuNzU4IDAgMCAxIDEyLjQ4IDguNTRsMS4yNDItMy43MzdBNy41MTUgNy41MTUgMCAwIDAgNCAxMmMwIDQuMTYgMy4zNiA3LjUyOSA3LjUwMSA3LjUyOWE3LjUxNSA3LjUxNSAwIDAgMCA3LjQ4My04eiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xNy40MTIgMTAuNTg3YTIuNTg4IDIuNTg4IDAgMSAwIDAtNS4xNzYgMi41ODggMi41ODggMCAwIDAgMCA1LjE3NiIvPgogICAgPC9nPgogICAgPGRlZnM+CiAgICAgICAgPGxpbmVhckdyYWRpZW50IGlkPSJDVFJfX2IiIHgxPSIxNy44NyIgeDI9IjcuMjEiIHkxPSI4LjQ4MyIgeTI9IjE3LjY1MSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjNkM3QUYxIi8+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iLjM1IiBzdG9wLWNvbG9yPSIjODk1OEVCIi8+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI0M3NDZBNiIvPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICAgICAgPGNsaXBQYXRoIGlkPSJDVFJfX2EiPgogICAgICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMCAwaDI0djI0SDB6Ii8+CiAgICAgICAgPC9jbGlwUGF0aD4KICAgIDwvZGVmcz4KPC9zdmc+Cg==)
 * @see https://web3icons.io/tokens/CTR
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenCTR = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenCTR', __iconNode);
;
}),
]);

//# sourceMappingURL=1qqr_%40web3icons_react_dist_1-btatn._.js.map