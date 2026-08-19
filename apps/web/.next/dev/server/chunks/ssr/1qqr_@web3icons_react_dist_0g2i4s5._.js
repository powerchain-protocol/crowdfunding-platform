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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenPROS.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenPROS
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-ssr] (ecmascript)");
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
                fill: '#333',
                d: 'M3 3h18v18H3z'
            }
        ],
        [
            'path',
            {
                fill: '#5901F6',
                d: 'M21 3 3 21V3z'
            }
        ],
        [
            'path',
            {
                fill: 'url(#PROS__a)',
                d: 'm9.31 14.713-.036-.034c-2.4-2.402-3.137-5.558-1.645-7.05s4.648-.756 7.049 1.645l.02.022-.867.872-.023-.024c-1.91-1.91-4.28-2.64-5.291-1.627-1.012 1.012-.283 3.381 1.627 5.292l.033.033z',
                fillRule: 'evenodd',
                clipRule: 'evenodd'
            }
        ],
        [
            'path',
            {
                fill: 'url(#PROS__b)',
                d: 'm14.69 9.286.036.034c2.4 2.402 3.137 5.558 1.645 7.05s-4.648.755-7.049-1.646l-.02-.021.867-.872.023.024c1.91 1.91 4.28 2.639 5.29 1.627 1.013-1.012.284-3.381-1.626-5.292l-.033-.033z',
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
                        id: 'PROS__a',
                        x1: '16.175',
                        x2: '10.401',
                        y1: '10.109',
                        y2: '15.851',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#FBFCFA'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '.817',
                                stopColor: '#9359FD',
                                stopOpacity: '.07'
                            }
                        ]
                    ]
                ],
                [
                    'linearGradient',
                    {
                        id: 'PROS__b',
                        x1: '9.84',
                        x2: '14.306',
                        y1: '14.649',
                        y2: '10.948',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#01FDFE'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#01FDFE',
                                stopOpacity: '.06'
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
                clipPath: 'url(#PROS__a)'
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
                        fill: '#5901F6',
                        d: 'M24 0 0 24V0z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#333',
                        d: 'M11.921 11.921 20 4v16H4z'
                    }
                ],
                [
                    'path',
                    {
                        fill: 'url(#PROS__b)',
                        d: 'm9.21 14.814-.037-.036c-2.49-2.49-3.253-5.764-1.706-7.31 1.547-1.549 4.82-.785 7.31 1.705l.021.023-.9.904-.024-.024c-1.98-1.982-4.437-2.738-5.486-1.688-1.05 1.05-.294 3.507 1.687 5.488l.034.034z',
                        fillRule: 'evenodd',
                        clipRule: 'evenodd'
                    }
                ],
                [
                    'path',
                    {
                        fill: 'url(#PROS__c)',
                        d: 'm14.79 9.186.036.036c2.49 2.49 3.254 5.763 1.707 7.31-1.548 1.548-4.82.784-7.31-1.706l-.022-.022.9-.905.024.025c1.981 1.982 4.438 2.737 5.487 1.688s.294-3.507-1.687-5.488l-.035-.034z',
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
                        id: 'PROS__b',
                        x1: '16.329',
                        x2: '10.341',
                        y1: '10.039',
                        y2: '15.994',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#FBFCFA'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '.817',
                                stopColor: '#9359FD',
                                stopOpacity: '.07'
                            }
                        ]
                    ]
                ],
                [
                    'linearGradient',
                    {
                        id: 'PROS__c',
                        x1: '9.759',
                        x2: '14.391',
                        y1: '14.748',
                        y2: '10.909',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#01FDFE'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#01FDFE',
                                stopOpacity: '.06'
                            }
                        ]
                    ]
                ],
                [
                    'clipPath',
                    {
                        id: 'PROS__a'
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
 * @component @name TokenPROS
 * @description Web3Icon for TokenPROS
 *
 * @preview (branded, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0yMSAzSDN2MThoMTh6Ii8+CiAgICA8cGF0aCBmaWxsPSIjMzMzIiBkPSJNMyAzaDE4djE4SDN6Ii8+CiAgICA8cGF0aCBmaWxsPSIjNTkwMUY2IiBkPSJNMjEgMyAzIDIxVjN6Ii8+CiAgICA8cGF0aCBmaWxsPSJ1cmwoI1BST1NfX2EpIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Im05LjMxIDE0LjcxMy0uMDM2LS4wMzRjLTIuNC0yLjQwMi0zLjEzNy01LjU1OC0xLjY0NS03LjA1czQuNjQ4LS43NTYgNy4wNDkgMS42NDVsLjAyLjAyMi0uODY3Ljg3Mi0uMDIzLS4wMjRjLTEuOTEtMS45MS00LjI4LTIuNjQtNS4yOTEtMS42MjctMS4wMTIgMS4wMTItLjI4MyAzLjM4MSAxLjYyNyA1LjI5MmwuMDMzLjAzM3oiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgogICAgPHBhdGggZmlsbD0idXJsKCNQUk9TX19iKSIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJtMTQuNjkgOS4yODYuMDM2LjAzNGMyLjQgMi40MDIgMy4xMzcgNS41NTggMS42NDUgNy4wNXMtNC42NDguNzU1LTcuMDQ5LTEuNjQ2bC0uMDItLjAyMS44NjctLjg3Mi4wMjMuMDI0YzEuOTEgMS45MSA0LjI4IDIuNjM5IDUuMjkgMS42MjcgMS4wMTMtMS4wMTIuMjg0LTMuMzgxLTEuNjI2LTUuMjkybC0uMDMzLS4wMzN6IiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KICAgIDxkZWZzPgogICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iUFJPU19fYSIgeDE9IjE2LjE3NSIgeDI9IjEwLjQwMSIgeTE9IjEwLjEwOSIgeTI9IjE1Ljg1MSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjRkJGQ0ZBIi8+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iLjgxNyIgc3RvcC1jb2xvcj0iIzkzNTlGRCIgc3RvcC1vcGFjaXR5PSIuMDciLz4KICAgICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iUFJPU19fYiIgeDE9IjkuODQiIHgyPSIxNC4zMDYiIHkxPSIxNC42NDkiIHkyPSIxMC45NDgiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iIzAxRkRGRSIvPgogICAgICAgICAgICA8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMwMUZERkUiIHN0b3Atb3BhY2l0eT0iLjA2Ii8+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgIDwvZGVmcz4KPC9zdmc+Cg==) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNQUk9TX19hKSI+CiAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTI0IDBIMHYyNGgyNHoiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjNTkwMUY2IiBkPSJNMjQgMCAwIDI0VjB6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0iIzMzMyIgZD0iTTExLjkyMSAxMS45MjEgMjAgNHYxNkg0eiIvPgogICAgICAgIDxwYXRoIGZpbGw9InVybCgjUFJPU19fYikiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0ibTkuMjEgMTQuODE0LS4wMzctLjAzNmMtMi40OS0yLjQ5LTMuMjUzLTUuNzY0LTEuNzA2LTcuMzEgMS41NDctMS41NDkgNC44Mi0uNzg1IDcuMzEgMS43MDVsLjAyMS4wMjMtLjkuOTA0LS4wMjQtLjAyNGMtMS45OC0xLjk4Mi00LjQzNy0yLjczOC01LjQ4Ni0xLjY4OC0xLjA1IDEuMDUtLjI5NCAzLjUwNyAxLjY4NyA1LjQ4OGwuMDM0LjAzNHoiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgogICAgICAgIDxwYXRoIGZpbGw9InVybCgjUFJPU19fYykiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0ibTE0Ljc5IDkuMTg2LjAzNi4wMzZjMi40OSAyLjQ5IDMuMjU0IDUuNzYzIDEuNzA3IDcuMzEtMS41NDggMS41NDgtNC44Mi43ODQtNy4zMS0xLjcwNmwtLjAyMi0uMDIyLjktLjkwNS4wMjQuMDI1YzEuOTgxIDEuOTgyIDQuNDM4IDIuNzM3IDUuNDg3IDEuNjg4cy4yOTQtMy41MDctMS42ODctNS40ODhsLS4wMzUtLjAzNHoiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgogICAgPC9nPgogICAgPGRlZnM+CiAgICAgICAgPGxpbmVhckdyYWRpZW50IGlkPSJQUk9TX19iIiB4MT0iMTYuMzI5IiB4Mj0iMTAuMzQxIiB5MT0iMTAuMDM5IiB5Mj0iMTUuOTk0IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiNGQkZDRkEiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIuODE3IiBzdG9wLWNvbG9yPSIjOTM1OUZEIiBzdG9wLW9wYWNpdHk9Ii4wNyIvPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICAgICAgPGxpbmVhckdyYWRpZW50IGlkPSJQUk9TX19jIiB4MT0iOS43NTkiIHgyPSIxNC4zOTEiIHkxPSIxNC43NDgiIHkyPSIxMC45MDkiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iIzAxRkRGRSIvPgogICAgICAgICAgICA8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMwMUZERkUiIHN0b3Atb3BhY2l0eT0iLjA2Ii8+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgICAgICA8Y2xpcFBhdGggaWQ9IlBST1NfX2EiPgogICAgICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMCAwaDI0djI0SDB6Ii8+CiAgICAgICAgPC9jbGlwUGF0aD4KICAgIDwvZGVmcz4KPC9zdmc+Cg==)
 * @see https://web3icons.io/tokens/PROS
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenPROS = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenPROS', __iconNode);
;
}),
];

//# sourceMappingURL=1qqr_%40web3icons_react_dist_0g2i4s5._.js.map