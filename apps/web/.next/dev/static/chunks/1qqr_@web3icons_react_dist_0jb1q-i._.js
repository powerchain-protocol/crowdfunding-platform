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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenKEY.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenKEY
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-client] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: 'url(#KEY__a)',
                d: 'M11.5 16.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2'
            }
        ],
        [
            'path',
            {
                fill: 'url(#KEY__b)',
                d: 'M12 3 4 7.485v8.99L12 21l8-4.525v-8.99zm2.045 3.5H11.54c-.19.005-.53.14-.54.615v6.448a2 2 0 1 0 1 0V9.5h1.58c.15 0 .42-.17.42-.5 0-.325-.265-.5-.42-.5H12v-1h2.05c.175 0 .45-.195.45-.5a.48.48 0 0 0-.455-.5',
                fillRule: 'evenodd',
                clipRule: 'evenodd'
            }
        ],
        [
            'defs',
            {},
            [
                [
                    'linearGradient',
                    {
                        id: 'KEY__a',
                        x1: '12.001',
                        x2: '12.001',
                        y1: '3',
                        y2: '21',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#4AB0E1'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#58B9CF'
                            }
                        ]
                    ]
                ],
                [
                    'linearGradient',
                    {
                        id: 'KEY__b',
                        x1: '12',
                        x2: '12',
                        y1: '3',
                        y2: '21',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#4AB0E1'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#58B9CF'
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
                d: 'M11.5 16.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2'
            }
        ],
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M12 3 4 7.485v8.99L12 21l8-4.525v-8.99zm2.045 3.5H11.54c-.19.005-.53.14-.54.615v6.448a2 2 0 1 0 1 0V9.5h1.58c.15 0 .42-.17.42-.5 0-.325-.265-.5-.42-.5H12v-1h2.05c.175 0 .45-.195.45-.5a.48.48 0 0 0-.455-.5',
                fillRule: 'evenodd',
                clipRule: 'evenodd'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#KEY__a)'
            },
            [
                [
                    'path',
                    {
                        fill: 'url(#KEY__b)',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M11.555 16a.889.889 0 1 0 0-1.778.889.889 0 0 0 0 1.778'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M12 4 4.889 7.987v7.99L11.999 20l7.112-4.022V7.987zm1.818 3.111H11.59c-.169.005-.471.125-.48.547v5.731a1.778 1.778 0 1 0 .889 0V9.778h1.405c.133 0 .373-.151.373-.445 0-.289-.236-.444-.373-.444H12V8h1.822c.156 0 .4-.173.4-.444a.427.427 0 0 0-.404-.445',
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
                    'linearGradient',
                    {
                        id: 'KEY__b',
                        x1: '12',
                        x2: '12',
                        y1: '4',
                        y2: '20',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#4AB0E1'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#58B9CF'
                            }
                        ]
                    ]
                ],
                [
                    'clipPath',
                    {
                        id: 'KEY__a'
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
 * @component @name TokenKEY
 * @description Web3Icon for TokenKEY
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9InVybCgjS0VZX19hKSIgZD0iTTExLjUgMTYuNWExIDEgMCAxIDAgMC0yIDEgMSAwIDAgMCAwIDIiLz4KICAgIDxwYXRoIGZpbGw9InVybCgjS0VZX19iKSIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTIgMyA0IDcuNDg1djguOTlMMTIgMjFsOC00LjUyNXYtOC45OXptMi4wNDUgMy41SDExLjU0Yy0uMTkuMDA1LS41My4xNC0uNTQuNjE1djYuNDQ4YTIgMiAwIDEgMCAxIDBWOS41aDEuNThjLjE1IDAgLjQyLS4xNy40Mi0uNSAwLS4zMjUtLjI2NS0uNS0uNDItLjVIMTJ2LTFoMi4wNWMuMTc1IDAgLjQ1LS4xOTUuNDUtLjVhLjQ4LjQ4IDAgMCAwLS40NTUtLjUiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgogICAgPGRlZnM+CiAgICAgICAgPGxpbmVhckdyYWRpZW50IGlkPSJLRVlfX2EiIHgxPSIxMi4wMDEiIHgyPSIxMi4wMDEiIHkxPSIzIiB5Mj0iMjEiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iIzRBQjBFMSIvPgogICAgICAgICAgICA8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiM1OEI5Q0YiLz4KICAgICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iS0VZX19iIiB4MT0iMTIiIHgyPSIxMiIgeTE9IjMiIHkyPSIyMSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjNEFCMEUxIi8+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzU4QjlDRiIvPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICA8L2RlZnM+Cjwvc3ZnPgo=) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xMS41IDE2LjVhMSAxIDAgMSAwIDAtMiAxIDEgMCAwIDAgMCAyIi8+CiAgICA8cGF0aCBmaWxsPSIjZmZmIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMiAzIDQgNy40ODV2OC45OUwxMiAyMWw4LTQuNTI1di04Ljk5em0yLjA0NSAzLjVIMTEuNTRjLS4xOS4wMDUtLjUzLjE0LS41NC42MTV2Ni40NDhhMiAyIDAgMSAwIDEgMFY5LjVoMS41OGMuMTUgMCAuNDItLjE3LjQyLS41IDAtLjMyNS0uMjY1LS41LS40Mi0uNUgxMnYtMWgyLjA1Yy4xNzUgMCAuNDUtLjE5NS40NS0uNWEuNDguNDggMCAwIDAtLjQ1NS0uNSIgY2xpcC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo=) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNLRVlfX2EpIj4KICAgICAgICA8cGF0aCBmaWxsPSJ1cmwoI0tFWV9fYikiIGQ9Ik0yNCAwSDB2MjRoMjR6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTExLjU1NSAxNmEuODg5Ljg4OSAwIDEgMCAwLTEuNzc4Ljg4OS44ODkgMCAwIDAgMCAxLjc3OCIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTEyIDQgNC44ODkgNy45ODd2Ny45OUwxMS45OTkgMjBsNy4xMTItNC4wMjJWNy45ODd6bTEuODE4IDMuMTExSDExLjU5Yy0uMTY5LjAwNS0uNDcxLjEyNS0uNDguNTQ3djUuNzMxYTEuNzc4IDEuNzc4IDAgMSAwIC44ODkgMFY5Ljc3OGgxLjQwNWMuMTMzIDAgLjM3My0uMTUxLjM3My0uNDQ1IDAtLjI4OS0uMjM2LS40NDQtLjM3My0uNDQ0SDEyVjhoMS44MjJjLjE1NiAwIC40LS4xNzMuNC0uNDQ0YS40MjcuNDI3IDAgMCAwLS40MDQtLjQ0NSIgY2xpcC1ydWxlPSJldmVub2RkIi8+CiAgICA8L2c+CiAgICA8ZGVmcz4KICAgICAgICA8bGluZWFyR3JhZGllbnQgaWQ9IktFWV9fYiIgeDE9IjEyIiB4Mj0iMTIiIHkxPSI0IiB5Mj0iMjAiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iIzRBQjBFMSIvPgogICAgICAgICAgICA8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiM1OEI5Q0YiLz4KICAgICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgICAgIDxjbGlwUGF0aCBpZD0iS0VZX19hIj4KICAgICAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTAgMGgyNHYyNEgweiIvPgogICAgICAgIDwvY2xpcFBhdGg+CiAgICA8L2RlZnM+Cjwvc3ZnPgo=)
 * @see https://web3icons.io/tokens/KEY
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenKEY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenKEY', __iconNode);
;
}),
]);

//# sourceMappingURL=1qqr_%40web3icons_react_dist_0jb1q-i._.js.map