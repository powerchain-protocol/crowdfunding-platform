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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenPWR.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenPWR
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-client] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: 'url(#PWR__a)',
                d: 'M11.998 20.999A9.004 9.004 0 0 0 20.65 9.515q.068.388.068.793c0 3.601-3.562 4.501-5.345 4.501H8.622l-.563 2.814H4.964a9 9 0 0 0 7.034 3.376'
            }
        ],
        [
            'path',
            {
                fill: 'url(#PWR__b)',
                d: 'M4.74 17.324A9.003 9.003 0 1 1 20.27 8.44c-.518-.872-1.56-1.508-3.49-1.508H8.623L5.81 9.745h9.565V8.62l3.376 2.25-3.376 2.251v-1.125H5.81z'
            }
        ],
        [
            'defs',
            {},
            [
                [
                    'linearGradient',
                    {
                        id: 'PWR__a',
                        x1: '5.842',
                        x2: '21.373',
                        y1: '17.471',
                        y2: '13.118',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#4D4D4D'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#1A1A1A'
                            }
                        ]
                    ]
                ],
                [
                    'linearGradient',
                    {
                        id: 'PWR__b',
                        x1: '4.402',
                        x2: '19.594',
                        y1: '6.651',
                        y2: '6.932',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#008CC4'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#00A8F8'
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
                d: 'M11.998 20.998a9.004 9.004 0 0 0 8.653-11.483q.068.388.068.793c0 3.6-3.562 4.5-5.345 4.5H8.622l-.562 2.814H4.965a9 9 0 0 0 7.033 3.376'
            }
        ],
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M4.74 17.323A9.002 9.002 0 1 1 20.268 8.44c-.518-.872-1.558-1.507-3.488-1.507H8.622L5.809 9.745h9.564V8.62l3.376 2.25-3.376 2.25v-1.125H5.81z'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#PWR__a)'
            },
            [
                [
                    'path',
                    {
                        fill: 'url(#PWR__b)',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M11.998 19.998a8.004 8.004 0 0 0 7.868-6.543 8 8 0 0 0-.176-3.664q.06.345.06.705c0 3.2-3.166 4.001-4.75 4.001H8.997l-.5 2.5h-2.75a8 8 0 0 0 6.25 3.001'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M5.547 16.732a8 8 0 1 1 13.802-7.897c-.46-.775-1.385-1.34-3.1-1.34H8.997l-2.5 2.5h8.502v-1l3 2-3 2.001v-1H6.496z'
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
                        id: 'PWR__b',
                        x1: '6.526',
                        x2: '20.331',
                        y1: '16.863',
                        y2: '12.994',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#4D4D4D'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#1A1A1A'
                            }
                        ]
                    ]
                ],
                [
                    'clipPath',
                    {
                        id: 'PWR__a'
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
 * @component @name TokenPWR
 * @description Web3Icon for TokenPWR
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9InVybCgjUFdSX19hKSIgZD0iTTExLjk5OCAyMC45OTlBOS4wMDQgOS4wMDQgMCAwIDAgMjAuNjUgOS41MTVxLjA2OC4zODguMDY4Ljc5M2MwIDMuNjAxLTMuNTYyIDQuNTAxLTUuMzQ1IDQuNTAxSDguNjIybC0uNTYzIDIuODE0SDQuOTY0YTkgOSAwIDAgMCA3LjAzNCAzLjM3NiIvPgogICAgPHBhdGggZmlsbD0idXJsKCNQV1JfX2IpIiBkPSJNNC43NCAxNy4zMjRBOS4wMDMgOS4wMDMgMCAxIDEgMjAuMjcgOC40NGMtLjUxOC0uODcyLTEuNTYtMS41MDgtMy40OS0xLjUwOEg4LjYyM0w1LjgxIDkuNzQ1aDkuNTY1VjguNjJsMy4zNzYgMi4yNS0zLjM3NiAyLjI1MXYtMS4xMjVINS44MXoiLz4KICAgIDxkZWZzPgogICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iUFdSX19hIiB4MT0iNS44NDIiIHgyPSIyMS4zNzMiIHkxPSIxNy40NzEiIHkyPSIxMy4xMTgiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iIzRENEQ0RCIvPgogICAgICAgICAgICA8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMxQTFBMUEiLz4KICAgICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iUFdSX19iIiB4MT0iNC40MDIiIHgyPSIxOS41OTQiIHkxPSI2LjY1MSIgeTI9IjYuOTMyIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiMwMDhDQzQiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMDBBOEY4Ii8+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgIDwvZGVmcz4KPC9zdmc+Cg==) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xMS45OTggMjAuOTk4YTkuMDA0IDkuMDA0IDAgMCAwIDguNjUzLTExLjQ4M3EuMDY4LjM4OC4wNjguNzkzYzAgMy42LTMuNTYyIDQuNS01LjM0NSA0LjVIOC42MjJsLS41NjIgMi44MTRINC45NjVhOSA5IDAgMCAwIDcuMDMzIDMuMzc2Ii8+CiAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNNC43NCAxNy4zMjNBOS4wMDIgOS4wMDIgMCAxIDEgMjAuMjY4IDguNDRjLS41MTgtLjg3Mi0xLjU1OC0xLjUwNy0zLjQ4OC0xLjUwN0g4LjYyMkw1LjgwOSA5Ljc0NWg5LjU2NFY4LjYybDMuMzc2IDIuMjUtMy4zNzYgMi4yNXYtMS4xMjVINS44MXoiLz4KPC9zdmc+Cg==) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNQV1JfX2EpIj4KICAgICAgICA8cGF0aCBmaWxsPSJ1cmwoI1BXUl9fYikiIGQ9Ik0yNCAwSDB2MjRoMjR6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTExLjk5OCAxOS45OThhOC4wMDQgOC4wMDQgMCAwIDAgNy44NjgtNi41NDMgOCA4IDAgMCAwLS4xNzYtMy42NjRxLjA2LjM0NS4wNi43MDVjMCAzLjItMy4xNjYgNC4wMDEtNC43NSA0LjAwMUg4Ljk5N2wtLjUgMi41aC0yLjc1YTggOCAwIDAgMCA2LjI1IDMuMDAxIi8+CiAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTUuNTQ3IDE2LjczMmE4IDggMCAxIDEgMTMuODAyLTcuODk3Yy0uNDYtLjc3NS0xLjM4NS0xLjM0LTMuMS0xLjM0SDguOTk3bC0yLjUgMi41aDguNTAydi0xbDMgMi0zIDIuMDAxdi0xSDYuNDk2eiIvPgogICAgPC9nPgogICAgPGRlZnM+CiAgICAgICAgPGxpbmVhckdyYWRpZW50IGlkPSJQV1JfX2IiIHgxPSI2LjUyNiIgeDI9IjIwLjMzMSIgeTE9IjE2Ljg2MyIgeTI9IjEyLjk5NCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjNEQ0RDREIi8+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzFBMUExQSIvPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICAgICAgPGNsaXBQYXRoIGlkPSJQV1JfX2EiPgogICAgICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMCAwaDI0djI0SDB6Ii8+CiAgICAgICAgPC9jbGlwUGF0aD4KICAgIDwvZGVmcz4KPC9zdmc+Cg==)
 * @see https://web3icons.io/tokens/PWR
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenPWR = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenPWR', __iconNode);
;
}),
]);

//# sourceMappingURL=1qqr_%40web3icons_react_dist_1yrykyy._.js.map