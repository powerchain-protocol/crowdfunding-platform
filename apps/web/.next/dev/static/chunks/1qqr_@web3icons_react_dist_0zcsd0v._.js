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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/tokens/TokenAIMBOT.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TokenAIMBOT
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-client] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: 'url(#AIMBOT__a)',
                d: 'm7.95 11.843 4.032 1.957L16.05 12l-4.068-1.8'
            }
        ],
        [
            'path',
            {
                fill: 'url(#AIMBOT__b)',
                d: 'm7.95 11.843 4.032 1.957v-3.6z'
            }
        ],
        [
            'path',
            {
                fill: 'url(#AIMBOT__c)',
                d: 'M18.782 7.5H5.218L3 10.052v3.896L5.218 16.5h13.564L21 13.948v-3.896zm.112 6.03s-.729 1.17-1.107 1.17H6.213c-.378 0-1.107-1.17-1.107-1.17s-.077-.778-.077-1.521.077-1.521.077-1.521L6.213 9.3h11.574l1.107 1.188s.077.779.077 1.52c0 .744-.077 1.522-.077 1.522'
            }
        ],
        [
            'defs',
            {},
            [
                [
                    'linearGradient',
                    {
                        id: 'AIMBOT__a',
                        x1: '1075.02',
                        x2: '923.259',
                        y1: '380.606',
                        y2: '635.94',
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
                                offset: '1',
                                stopColor: '#8F9196'
                            }
                        ]
                    ]
                ],
                [
                    'linearGradient',
                    {
                        id: 'AIMBOT__b',
                        x1: '5959.19',
                        x2: '8216.67',
                        y1: '610.138',
                        y2: '7705.73',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#fff'
                            }
                        ]
                    ]
                ],
                [
                    'linearGradient',
                    {
                        id: 'AIMBOT__c',
                        x1: '36153.6',
                        x2: '36153.6',
                        y1: '609.778',
                        y2: '37794.1',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#fff'
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
                d: 'm7.95 11.843 4.032 1.957L16.05 12l-4.068-1.8'
            }
        ],
        [
            'path',
            {
                fill: 'currentColor',
                d: 'm7.95 11.843 4.032 1.957v-3.6z'
            }
        ],
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M18.782 7.5H5.218L3 10.052v3.896L5.218 16.5h13.564L21 13.948v-3.896zm.112 6.03s-.729 1.17-1.107 1.17H6.213c-.378 0-1.107-1.17-1.107-1.17s-.077-.778-.077-1.521.077-1.521.077-1.521L6.213 9.3h11.574l1.107 1.188s.077.779.077 1.52c0 .744-.077 1.522-.077 1.522'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#AIMBOT__a)'
            },
            [
                [
                    'path',
                    {
                        fill: 'url(#AIMBOT__b)',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'm8.4 11.86 3.584 1.74L15.6 12l-3.616-1.6'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'm8.4 11.86 3.584 1.74v-3.2z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M18.028 8H5.972L4 10.268v3.464L5.972 16h12.056L20 13.732v-3.464zm.1 5.36s-.648 1.04-.984 1.04H6.856c-.336 0-.984-1.04-.984-1.04s-.068-.692-.068-1.352.068-1.352.068-1.352L6.856 9.6h10.288l.984 1.056s.068.692.068 1.352-.068 1.352-.068 1.352'
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
                        id: 'AIMBOT__b',
                        x1: '956.904',
                        x2: '822.008',
                        y1: '339.65',
                        y2: '566.614',
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
                                offset: '1',
                                stopColor: '#8F9196'
                            }
                        ]
                    ]
                ],
                [
                    'clipPath',
                    {
                        id: 'AIMBOT__a'
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
 * @component @name TokenAIMBOT
 * @description Web3Icon for TokenAIMBOT
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9InVybCgjQUlNQk9UX19hKSIgZD0ibTcuOTUgMTEuODQzIDQuMDMyIDEuOTU3TDE2LjA1IDEybC00LjA2OC0xLjgiLz4KICAgIDxwYXRoIGZpbGw9InVybCgjQUlNQk9UX19iKSIgZD0ibTcuOTUgMTEuODQzIDQuMDMyIDEuOTU3di0zLjZ6Ii8+CiAgICA8cGF0aCBmaWxsPSJ1cmwoI0FJTUJPVF9fYykiIGQ9Ik0xOC43ODIgNy41SDUuMjE4TDMgMTAuMDUydjMuODk2TDUuMjE4IDE2LjVoMTMuNTY0TDIxIDEzLjk0OHYtMy44OTZ6bS4xMTIgNi4wM3MtLjcyOSAxLjE3LTEuMTA3IDEuMTdINi4yMTNjLS4zNzggMC0xLjEwNy0xLjE3LTEuMTA3LTEuMTdzLS4wNzctLjc3OC0uMDc3LTEuNTIxLjA3Ny0xLjUyMS4wNzctMS41MjFMNi4yMTMgOS4zaDExLjU3NGwxLjEwNyAxLjE4OHMuMDc3Ljc3OS4wNzcgMS41MmMwIC43NDQtLjA3NyAxLjUyMi0uMDc3IDEuNTIyIi8+CiAgICA8ZGVmcz4KICAgICAgICA8bGluZWFyR3JhZGllbnQgaWQ9IkFJTUJPVF9fYSIgeDE9IjEwNzUuMDIiIHgyPSI5MjMuMjU5IiB5MT0iMzgwLjYwNiIgeTI9IjYzNS45NCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjZmZmIi8+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzhGOTE5NiIvPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICAgICAgPGxpbmVhckdyYWRpZW50IGlkPSJBSU1CT1RfX2IiIHgxPSI1OTU5LjE5IiB4Mj0iODIxNi42NyIgeTE9IjYxMC4xMzgiIHkyPSI3NzA1LjczIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiNmZmYiLz4KICAgICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iQUlNQk9UX19jIiB4MT0iMzYxNTMuNiIgeDI9IjM2MTUzLjYiIHkxPSI2MDkuNzc4IiB5Mj0iMzc3OTQuMSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjZmZmIi8+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgIDwvZGVmcz4KPC9zdmc+Cg==) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Im03Ljk1IDExLjg0MyA0LjAzMiAxLjk1N0wxNi4wNSAxMmwtNC4wNjgtMS44Ii8+CiAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJtNy45NSAxMS44NDMgNC4wMzIgMS45NTd2LTMuNnoiLz4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xOC43ODIgNy41SDUuMjE4TDMgMTAuMDUydjMuODk2TDUuMjE4IDE2LjVoMTMuNTY0TDIxIDEzLjk0OHYtMy44OTZ6bS4xMTIgNi4wM3MtLjcyOSAxLjE3LTEuMTA3IDEuMTdINi4yMTNjLS4zNzggMC0xLjEwNy0xLjE3LTEuMTA3LTEuMTdzLS4wNzctLjc3OC0uMDc3LTEuNTIxLjA3Ny0xLjUyMS4wNzctMS41MjFMNi4yMTMgOS4zaDExLjU3NGwxLjEwNyAxLjE4OHMuMDc3Ljc3OS4wNzcgMS41MmMwIC43NDQtLjA3NyAxLjUyMi0uMDc3IDEuNTIyIi8+Cjwvc3ZnPgo=) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNBSU1CT1RfX2EpIj4KICAgICAgICA8cGF0aCBmaWxsPSJ1cmwoI0FJTUJPVF9fYikiIGQ9Ik0yNCAwSDB2MjRoMjR6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0ibTguNCAxMS44NiAzLjU4NCAxLjc0TDE1LjYgMTJsLTMuNjE2LTEuNiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Im04LjQgMTEuODYgMy41ODQgMS43NHYtMy4yeiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xOC4wMjggOEg1Ljk3Mkw0IDEwLjI2OHYzLjQ2NEw1Ljk3MiAxNmgxMi4wNTZMMjAgMTMuNzMydi0zLjQ2NHptLjEgNS4zNnMtLjY0OCAxLjA0LS45ODQgMS4wNEg2Ljg1NmMtLjMzNiAwLS45ODQtMS4wNC0uOTg0LTEuMDRzLS4wNjgtLjY5Mi0uMDY4LTEuMzUyLjA2OC0xLjM1Mi4wNjgtMS4zNTJMNi44NTYgOS42aDEwLjI4OGwuOTg0IDEuMDU2cy4wNjguNjkyLjA2OCAxLjM1Mi0uMDY4IDEuMzUyLS4wNjggMS4zNTIiLz4KICAgIDwvZz4KICAgIDxkZWZzPgogICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iQUlNQk9UX19iIiB4MT0iOTU2LjkwNCIgeDI9IjgyMi4wMDgiIHkxPSIzMzkuNjUiIHkyPSI1NjYuNjE0IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiNmZmYiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjOEY5MTk2Ii8+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgICAgICA8Y2xpcFBhdGggaWQ9IkFJTUJPVF9fYSI+CiAgICAgICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0wIDBoMjR2MjRIMHoiLz4KICAgICAgICA8L2NsaXBQYXRoPgogICAgPC9kZWZzPgo8L3N2Zz4K)
 * @see https://web3icons.io/tokens/AIMBOT
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const TokenAIMBOT = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWeb3Icon"])('TokenAIMBOT', __iconNode);
;
}),
]);

//# sourceMappingURL=1qqr_%40web3icons_react_dist_0zcsd0v._.js.map