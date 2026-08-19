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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/networks/NetworkBeam.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>NetworkBeam
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-ssr] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: '#0B76FF',
                d: 'M12 16.05h3.734L12 9.752v-4.05L19.65 18.3H12z'
            }
        ],
        [
            'path',
            {
                fill: '#24C1FF',
                d: 'M12 16.05H8.246l3.752-6.299v-4.05L4.35 18.3H12z'
            }
        ],
        [
            'path',
            {
                fill: '#39FFF2',
                d: 'M12 11.551v3.6H9.75z'
            }
        ],
        [
            'path',
            {
                fill: '#00E2C2',
                d: 'M12 11.551v3.6h2.25z'
            }
        ],
        [
            'path',
            {
                fill: 'url(#beam__a)',
                d: 'm3 9.643 8.99 4.158v.436L3 12.27z'
            }
        ],
        [
            'path',
            {
                fill: 'url(#beam__b)',
                d: 'm21 8.433-9.009 5.373v.148L21 10.169z'
            }
        ],
        [
            'path',
            {
                fill: 'url(#beam__c)',
                d: 'm21 13.638-9.009.604v-.145L21 11.903z'
            }
        ],
        [
            'path',
            {
                fill: 'url(#beam__d)',
                d: 'm21 10.169-9.009 3.78v.148L21 11.902z'
            }
        ],
        [
            'defs',
            {},
            [
                [
                    'linearGradient',
                    {
                        id: 'beam__a',
                        x1: '3.008',
                        x2: '12.864',
                        y1: '12.032',
                        y2: '12.032',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#fff',
                                stopOpacity: '0'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#fff'
                            }
                        ]
                    ]
                ],
                [
                    'linearGradient',
                    {
                        id: 'beam__b',
                        x1: '20.892',
                        x2: '9.446',
                        y1: '11.975',
                        y2: '11.975',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#FD76FD',
                                stopOpacity: '0'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#FF51FF'
                            }
                        ]
                    ]
                ],
                [
                    'linearGradient',
                    {
                        id: 'beam__c',
                        x1: '21.081',
                        x2: '11.811',
                        y1: '12.024',
                        y2: '12.024',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#9D6EFF',
                                stopOpacity: '0'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#A18CFF'
                            }
                        ]
                    ]
                ],
                [
                    'linearGradient',
                    {
                        id: 'beam__d',
                        x1: '20.991',
                        x2: '15.689',
                        y1: '12.139',
                        y2: '12.139',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#AE60D6',
                                stopOpacity: '0'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#AB38E6'
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
                d: 'M12 16.05h3.734l-3.735-6.299v-4.05L19.65 18.3H12zm0 0H8.246l3.752-6.299v-4.05L4.35 18.3H12z'
            }
        ],
        [
            'path',
            {
                fill: 'currentColor',
                d: 'M12 11.551v3.6H9.75zm0 0v3.6h2.25z'
            }
        ],
        [
            'path',
            {
                fill: 'currentColor',
                d: 'm3 9.643 8.99 4.158v.436L3 12.27zm18-1.21-9.009 5.373v.148L21 10.169zm0 5.206-9.009.603v-.145L21 11.903z'
            }
        ],
        [
            'path',
            {
                fill: 'currentColor',
                d: 'm21 10.169-9.009 3.78v.148L21 11.902z'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#beam__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#0B76FF',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M12 15.6h3.319l-3.32-5.6V6.4l6.8 11.2H12zm0 0H8.663l3.335-5.6V6.4L5.2 17.6H12z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'M12 11.601v3.2h-2zm0 0v3.2h2z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'm4 9.905 7.992 3.696v.387L4 12.241zM20 8.83l-8.008 4.775v.131L20 10.374zm0 4.627-8.008.536v-.129L20 11.914z'
                    }
                ],
                [
                    'path',
                    {
                        fill: '#fff',
                        d: 'm20 10.372-8.008 3.36v.132L20 11.913z'
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
                        id: 'beam__a'
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
 * @component @name NetworkBeam
 * @description Web3Icon for NetworkBeam
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiMwQjc2RkYiIGQ9Ik0xMiAxNi4wNWgzLjczNEwxMiA5Ljc1MnYtNC4wNUwxOS42NSAxOC4zSDEyeiIvPgogICAgPHBhdGggZmlsbD0iIzI0QzFGRiIgZD0iTTEyIDE2LjA1SDguMjQ2bDMuNzUyLTYuMjk5di00LjA1TDQuMzUgMTguM0gxMnoiLz4KICAgIDxwYXRoIGZpbGw9IiMzOUZGRjIiIGQ9Ik0xMiAxMS41NTF2My42SDkuNzV6Ii8+CiAgICA8cGF0aCBmaWxsPSIjMDBFMkMyIiBkPSJNMTIgMTEuNTUxdjMuNmgyLjI1eiIvPgogICAgPHBhdGggZmlsbD0idXJsKCNiZWFtX19hKSIgZD0ibTMgOS42NDMgOC45OSA0LjE1OHYuNDM2TDMgMTIuMjd6Ii8+CiAgICA8cGF0aCBmaWxsPSJ1cmwoI2JlYW1fX2IpIiBkPSJtMjEgOC40MzMtOS4wMDkgNS4zNzN2LjE0OEwyMSAxMC4xNjl6Ii8+CiAgICA8cGF0aCBmaWxsPSJ1cmwoI2JlYW1fX2MpIiBkPSJtMjEgMTMuNjM4LTkuMDA5LjYwNHYtLjE0NUwyMSAxMS45MDN6Ii8+CiAgICA8cGF0aCBmaWxsPSJ1cmwoI2JlYW1fX2QpIiBkPSJtMjEgMTAuMTY5LTkuMDA5IDMuNzh2LjE0OEwyMSAxMS45MDJ6Ii8+CiAgICA8ZGVmcz4KICAgICAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImJlYW1fX2EiIHgxPSIzLjAwOCIgeDI9IjEyLjg2NCIgeTE9IjEyLjAzMiIgeTI9IjEyLjAzMiIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjZmZmIiBzdG9wLW9wYWNpdHk9IjAiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjZmZmIi8+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgICAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImJlYW1fX2IiIHgxPSIyMC44OTIiIHgyPSI5LjQ0NiIgeTE9IjExLjk3NSIgeTI9IjExLjk3NSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjRkQ3NkZEIiBzdG9wLW9wYWNpdHk9IjAiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjRkY1MUZGIi8+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgICAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImJlYW1fX2MiIHgxPSIyMS4wODEiIHgyPSIxMS44MTEiIHkxPSIxMi4wMjQiIHkyPSIxMi4wMjQiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iIzlENkVGRiIgc3RvcC1vcGFjaXR5PSIwIi8+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI0ExOENGRiIvPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICAgICAgPGxpbmVhckdyYWRpZW50IGlkPSJiZWFtX19kIiB4MT0iMjAuOTkxIiB4Mj0iMTUuNjg5IiB5MT0iMTIuMTM5IiB5Mj0iMTIuMTM5IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiNBRTYwRDYiIHN0b3Atb3BhY2l0eT0iMCIvPgogICAgICAgICAgICA8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNBQjM4RTYiLz4KICAgICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgPC9kZWZzPgo8L3N2Zz4K) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xMiAxNi4wNWgzLjczNGwtMy43MzUtNi4yOTl2LTQuMDVMMTkuNjUgMTguM0gxMnptMCAwSDguMjQ2bDMuNzUyLTYuMjk5di00LjA1TDQuMzUgMTguM0gxMnoiLz4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xMiAxMS41NTF2My42SDkuNzV6bTAgMHYzLjZoMi4yNXoiLz4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Im0zIDkuNjQzIDguOTkgNC4xNTh2LjQzNkwzIDEyLjI3em0xOC0xLjIxLTkuMDA5IDUuMzczdi4xNDhMMjEgMTAuMTY5em0wIDUuMjA2LTkuMDA5LjYwM3YtLjE0NUwyMSAxMS45MDN6Ii8+CiAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJtMjEgMTAuMTY5LTkuMDA5IDMuNzh2LjE0OEwyMSAxMS45MDJ6Ii8+Cjwvc3ZnPgo=) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNiZWFtX19hKSI+CiAgICAgICAgPHBhdGggZmlsbD0iIzBCNzZGRiIgZD0iTTI0IDBIMHYyNGgyNHoiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTIgMTUuNmgzLjMxOWwtMy4zMi01LjZWNi40bDYuOCAxMS4ySDEyem0wIDBIOC42NjNsMy4zMzUtNS42VjYuNEw1LjIgMTcuNkgxMnoiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTIgMTEuNjAxdjMuMmgtMnptMCAwdjMuMmgyeiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Im00IDkuOTA1IDcuOTkyIDMuNjk2di4zODdMNCAxMi4yNDF6TTIwIDguODNsLTguMDA4IDQuNzc1di4xMzFMMjAgMTAuMzc0em0wIDQuNjI3LTguMDA4LjUzNnYtLjEyOUwyMCAxMS45MTR6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0ibTIwIDEwLjM3Mi04LjAwOCAzLjM2di4xMzJMMjAgMTEuOTEzeiIvPgogICAgPC9nPgogICAgPGRlZnM+CiAgICAgICAgPGNsaXBQYXRoIGlkPSJiZWFtX19hIj4KICAgICAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTAgMGgyNHYyNEgweiIvPgogICAgICAgIDwvY2xpcFBhdGg+CiAgICA8L2RlZnM+Cjwvc3ZnPgo=)
 * @see https://web3icons.io/networks/beam
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const NetworkBeam = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createWeb3Icon"])('NetworkBeam', __iconNode);
;
}),
];

//# sourceMappingURL=1qqr_%40web3icons_react_dist_1-7wmgm._.js.map