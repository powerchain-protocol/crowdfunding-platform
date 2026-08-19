module.exports = [
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createWeb3Icon",
    ()=>createWeb3Icon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$types$2b$node$40$24$2e$13$2e$3_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.1_@types+node@24.13.3_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$BaseIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/BaseIcon.js [app-ssr] (ecmascript)");
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
    const Component = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$types$2b$node$40$24$2e$13$2e$3_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ variant = defaultVariant, fallback, ...props }, ref)=>{
        const iconData = variants[variant];
        if (!iconData) {
            console.warn(`Icon "${name}" does not have variant "${variant}". ` + `Available variants: ${availableVariants.join(', ')}`);
            return null;
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$types$2b$node$40$24$2e$13$2e$3_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$BaseIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseIcon"], {
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
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$types$2b$node$40$24$2e$13$2e$3_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])(element, elementProps, childElements);
    });
}
;
}),
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenLUNA.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenLUNA
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-ssr] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#F2E373',
                d: 'M11.5 21a8 8 0 1 0 0-16 8 8 0 0 0 0 16'
            }
        ],
        [
            'path',
            {
                fill: 'url(#LUNA__a)',
                d: 'M14 3c-.67 1-1.964 1.695-2.86 2.005a8 8 0 0 0-7.54 9.26c.72 2.2 2.216 3.7 4.276 3.815 2.15.125 4.244-.645 5.225-3.01.79-1.9 2.18-2.455 2.774-2.57H20.5l-1.125-.8c-1.665-1.425-4.24-1.265-4.92-.675a3.7 3.7 0 0 1-2.09.88c-2.554 0-2.78-1.935-2.78-2.39v-.05c-.004-.52-.014-2.015 2.386-2.82a3.1 3.1 0 0 0 1.77-1.33h-.006c.51-.79.4-1.9.266-2.315'
            }
        ],
        [
            'path',
            {
                fill: 'url(#LUNA__b)',
                d: 'M18.04 17.61a8 8 0 0 1-14.41-3.184c.485 1.42 1.925 3.704 4.61 3.654 2.915-.05 4.36-1.87 4.75-2.88.395-1 1.375-2.34 2.875-2.7-.615.38-1.735 1.425-1.62 2.7.135 1.555 1.39 2.585 3.795 2.41'
            }
        ],
        [
            'defs',
            {},
            [
                [
                    'linearGradient',
                    {
                        id: 'LUNA__a',
                        x1: '7.101',
                        x2: '16.812',
                        y1: '5.898',
                        y2: '14.155',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#F5C859'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#DE3633'
                            }
                        ]
                    ]
                ],
                [
                    'linearGradient',
                    {
                        id: 'LUNA__b',
                        x1: '8.69',
                        x2: '11.525',
                        y1: '16.09',
                        y2: '21.045',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#F3BE56'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#E04437'
                            }
                        ]
                    ]
                ]
            ]
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#LUNA__a)'
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
                        fill: '#F2E373',
                        d: 'M11.556 20a7.111 7.111 0 1 0 0-14.222 7.111 7.111 0 0 0 0 14.222'
                    }
                ],
                [
                    'path',
                    {
                        fill: 'url(#LUNA__b)',
                        d: 'M13.778 4c-.596.889-1.747 1.507-2.542 1.782a7.11 7.11 0 0 0-6.702 8.231c.64 1.956 1.969 3.289 3.8 3.391 1.91.111 3.773-.573 4.644-2.675.702-1.69 1.938-2.182 2.467-2.285h4.11l-1-.71c-1.48-1.267-3.768-1.125-4.373-.6a3.3 3.3 0 0 1-1.857.781c-2.271 0-2.471-1.72-2.471-2.124v-.044c-.005-.463-.014-1.791 2.12-2.507a2.75 2.75 0 0 0 1.573-1.182h-.005c.454-.702.356-1.69.236-2.058'
                    }
                ],
                [
                    'path',
                    {
                        fill: 'url(#LUNA__c)',
                        d: 'M17.37 16.987a7.11 7.11 0 0 1-12.81-2.831c.432 1.262 1.712 3.293 4.098 3.249 2.591-.045 3.876-1.662 4.223-2.56.35-.89 1.222-2.08 2.555-2.4-.547.338-1.542 1.266-1.44 2.4.12 1.382 1.236 2.297 3.373 2.142'
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
                        id: 'LUNA__b',
                        x1: '7.645',
                        x2: '16.277',
                        y1: '6.576',
                        y2: '13.915',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#F5C859'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#DE3633'
                            }
                        ]
                    ]
                ],
                [
                    'linearGradient',
                    {
                        id: 'LUNA__c',
                        x1: '9.058',
                        x2: '11.578',
                        y1: '15.636',
                        y2: '20.04',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#F3BE56'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#E04437'
                            }
                        ]
                    ]
                ],
                [
                    'clipPath',
                    {
                        id: 'LUNA__a'
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
 * @component @name TokenLUNA
 * @description Web3Icon for TokenLUNA
 *
 * @preview (branded, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNGMkUzNzMiIGQ9Ik0xMS41IDIxYTggOCAwIDEgMCAwLTE2IDggOCAwIDAgMCAwIDE2Ii8+CiAgICA8cGF0aCBmaWxsPSJ1cmwoI0xVTkFfX2EpIiBkPSJNMTQgM2MtLjY3IDEtMS45NjQgMS42OTUtMi44NiAyLjAwNWE4IDggMCAwIDAtNy41NCA5LjI2Yy43MiAyLjIgMi4yMTYgMy43IDQuMjc2IDMuODE1IDIuMTUuMTI1IDQuMjQ0LS42NDUgNS4yMjUtMy4wMS43OS0xLjkgMi4xOC0yLjQ1NSAyLjc3NC0yLjU3SDIwLjVsLTEuMTI1LS44Yy0xLjY2NS0xLjQyNS00LjI0LTEuMjY1LTQuOTItLjY3NWEzLjcgMy43IDAgMCAxLTIuMDkuODhjLTIuNTU0IDAtMi43OC0xLjkzNS0yLjc4LTIuMzl2LS4wNWMtLjAwNC0uNTItLjAxNC0yLjAxNSAyLjM4Ni0yLjgyYTMuMSAzLjEgMCAwIDAgMS43Ny0xLjMzaC0uMDA2Yy41MS0uNzkuNC0xLjkuMjY2LTIuMzE1Ii8+CiAgICA8cGF0aCBmaWxsPSJ1cmwoI0xVTkFfX2IpIiBkPSJNMTguMDQgMTcuNjFhOCA4IDAgMCAxLTE0LjQxLTMuMTg0Yy40ODUgMS40MiAxLjkyNSAzLjcwNCA0LjYxIDMuNjU0IDIuOTE1LS4wNSA0LjM2LTEuODcgNC43NS0yLjg4LjM5NS0xIDEuMzc1LTIuMzQgMi44NzUtMi43LS42MTUuMzgtMS43MzUgMS40MjUtMS42MiAyLjcuMTM1IDEuNTU1IDEuMzkgMi41ODUgMy43OTUgMi40MSIvPgogICAgPGRlZnM+CiAgICAgICAgPGxpbmVhckdyYWRpZW50IGlkPSJMVU5BX19hIiB4MT0iNy4xMDEiIHgyPSIxNi44MTIiIHkxPSI1Ljg5OCIgeTI9IjE0LjE1NSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjRjVDODU5Ii8+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI0RFMzYzMyIvPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICAgICAgPGxpbmVhckdyYWRpZW50IGlkPSJMVU5BX19iIiB4MT0iOC42OSIgeDI9IjExLjUyNSIgeTE9IjE2LjA5IiB5Mj0iMjEuMDQ1IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiNGM0JFNTYiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjRTA0NDM3Ii8+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgIDwvZGVmcz4KPC9zdmc+Cg==) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNMVU5BX19hKSI+CiAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTI0IDBIMHYyNGgyNHoiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjRjJFMzczIiBkPSJNMTEuNTU2IDIwYTcuMTExIDcuMTExIDAgMSAwIDAtMTQuMjIyIDcuMTExIDcuMTExIDAgMCAwIDAgMTQuMjIyIi8+CiAgICAgICAgPHBhdGggZmlsbD0idXJsKCNMVU5BX19iKSIgZD0iTTEzLjc3OCA0Yy0uNTk2Ljg4OS0xLjc0NyAxLjUwNy0yLjU0MiAxLjc4MmE3LjExIDcuMTEgMCAwIDAtNi43MDIgOC4yMzFjLjY0IDEuOTU2IDEuOTY5IDMuMjg5IDMuOCAzLjM5MSAxLjkxLjExMSAzLjc3My0uNTczIDQuNjQ0LTIuNjc1LjcwMi0xLjY5IDEuOTM4LTIuMTgyIDIuNDY3LTIuMjg1aDQuMTFsLTEtLjcxYy0xLjQ4LTEuMjY3LTMuNzY4LTEuMTI1LTQuMzczLS42YTMuMyAzLjMgMCAwIDEtMS44NTcuNzgxYy0yLjI3MSAwLTIuNDcxLTEuNzItMi40NzEtMi4xMjR2LS4wNDRjLS4wMDUtLjQ2My0uMDE0LTEuNzkxIDIuMTItMi41MDdhMi43NSAyLjc1IDAgMCAwIDEuNTczLTEuMTgyaC0uMDA1Yy40NTQtLjcwMi4zNTYtMS42OS4yMzYtMi4wNTgiLz4KICAgICAgICA8cGF0aCBmaWxsPSJ1cmwoI0xVTkFfX2MpIiBkPSJNMTcuMzcgMTYuOTg3YTcuMTEgNy4xMSAwIDAgMS0xMi44MS0yLjgzMWMuNDMyIDEuMjYyIDEuNzEyIDMuMjkzIDQuMDk4IDMuMjQ5IDIuNTkxLS4wNDUgMy44NzYtMS42NjIgNC4yMjMtMi41Ni4zNS0uODkgMS4yMjItMi4wOCAyLjU1NS0yLjQtLjU0Ny4zMzgtMS41NDIgMS4yNjYtMS40NCAyLjQuMTIgMS4zODIgMS4yMzYgMi4yOTcgMy4zNzMgMi4xNDIiLz4KICAgIDwvZz4KICAgIDxkZWZzPgogICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iTFVOQV9fYiIgeDE9IjcuNjQ1IiB4Mj0iMTYuMjc3IiB5MT0iNi41NzYiIHkyPSIxMy45MTUiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iI0Y1Qzg1OSIvPgogICAgICAgICAgICA8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNERTM2MzMiLz4KICAgICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iTFVOQV9fYyIgeDE9IjkuMDU4IiB4Mj0iMTEuNTc4IiB5MT0iMTUuNjM2IiB5Mj0iMjAuMDQiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iI0YzQkU1NiIvPgogICAgICAgICAgICA8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNFMDQ0MzciLz4KICAgICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgICAgIDxjbGlwUGF0aCBpZD0iTFVOQV9fYSI+CiAgICAgICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0wIDBoMjR2MjRIMHoiLz4KICAgICAgICA8L2NsaXBQYXRoPgogICAgPC9kZWZzPgo8L3N2Zz4K)
 * @see https://web3icons.io/tokens/LUNA
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenLUNA = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenLUNA', __iconNode);
;
}),
];

//# sourceMappingURL=1qqr_%40web3icons_react_dist_0bgv8tz._.js.map