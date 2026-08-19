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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/networks/NetworkZircuit.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>NetworkZircuit
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-client] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: 'url(#zircuit__a)',
                d: 'M3 12a9 9 0 1 1 15.817 5.876l-6.805-6.806-5.853 5.852-.966.966A8.95 8.95 0 0 1 3 12m15.589 3.507.082-.164c.517-1.03.79-2.186.79-3.343 0-4.113-3.347-7.46-7.46-7.46-4.115 0-7.46 3.347-7.46 7.46 0 1.163.275 2.324.796 3.358l.083.164 6.592-6.592zM12 21c2.24 0 4.29-.819 5.866-2.174l-5.854-5.854-5.865 5.865A8.95 8.95 0 0 0 12 21',
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
                        id: 'zircuit__a',
                        x1: '12',
                        x2: '12.027',
                        y1: '3',
                        y2: '21',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#169E00'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '.49',
                                stopColor: '#00C537'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#00B1C9'
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
                d: 'M3 12a9 9 0 1 1 15.817 5.876l-6.805-6.806-5.853 5.852-.966.966A8.95 8.95 0 0 1 3 12m15.589 3.507.082-.164c.517-1.03.79-2.186.79-3.343 0-4.113-3.347-7.46-7.46-7.46-4.115 0-7.46 3.347-7.46 7.46 0 1.163.275 2.324.796 3.358l.083.164 6.592-6.592zM12 21c2.24 0 4.29-.819 5.866-2.174l-5.854-5.854-5.865 5.865A8.95 8.95 0 0 0 12 21',
                fillRule: 'evenodd',
                clipRule: 'evenodd'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#zircuit__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#092306',
                        d: 'M0 0h24v24H0z'
                    }
                ],
                [
                    'path',
                    {
                        fill: 'url(#zircuit__b)',
                        d: 'M4 12a8 8 0 1 1 14.06 5.223l-6.05-6.05-5.202 5.202-.858.859A7.96 7.96 0 0 1 4 12m13.857 3.118.073-.147a6.7 6.7 0 0 0 .702-2.97A6.64 6.64 0 0 0 12 5.368 6.64 6.64 0 0 0 5.37 12c0 1.034.245 2.066.708 2.985l.074.146 5.86-5.86zM12 20a7.97 7.97 0 0 0 5.214-1.932l-5.203-5.204-5.214 5.213A7.96 7.96 0 0 0 12 20',
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
                        id: 'zircuit__b',
                        x1: '12',
                        x2: '12.024',
                        y1: '4',
                        y2: '20',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#169E00'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '.49',
                                stopColor: '#00C537'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#00B1C9'
                            }
                        ]
                    ]
                ],
                [
                    'clipPath',
                    {
                        id: 'zircuit__a'
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
 * @component @name NetworkZircuit
 * @description Web3Icon for NetworkZircuit
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9InVybCgjemlyY3VpdF9fYSkiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTMgMTJhOSA5IDAgMSAxIDE1LjgxNyA1Ljg3NmwtNi44MDUtNi44MDYtNS44NTMgNS44NTItLjk2Ni45NjZBOC45NSA4Ljk1IDAgMCAxIDMgMTJtMTUuNTg5IDMuNTA3LjA4Mi0uMTY0Yy41MTctMS4wMy43OS0yLjE4Ni43OS0zLjM0MyAwLTQuMTEzLTMuMzQ3LTcuNDYtNy40Ni03LjQ2LTQuMTE1IDAtNy40NiAzLjM0Ny03LjQ2IDcuNDYgMCAxLjE2My4yNzUgMi4zMjQuNzk2IDMuMzU4bC4wODMuMTY0IDYuNTkyLTYuNTkyek0xMiAyMWMyLjI0IDAgNC4yOS0uODE5IDUuODY2LTIuMTc0bC01Ljg1NC01Ljg1NC01Ljg2NSA1Ljg2NUE4Ljk1IDguOTUgMCAwIDAgMTIgMjEiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgogICAgPGRlZnM+CiAgICAgICAgPGxpbmVhckdyYWRpZW50IGlkPSJ6aXJjdWl0X19hIiB4MT0iMTIiIHgyPSIxMi4wMjciIHkxPSIzIiB5Mj0iMjEiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iIzE2OUUwMCIvPgogICAgICAgICAgICA8c3RvcCBvZmZzZXQ9Ii40OSIgc3RvcC1jb2xvcj0iIzAwQzUzNyIvPgogICAgICAgICAgICA8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMwMEIxQzkiLz4KICAgICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgPC9kZWZzPgo8L3N2Zz4K) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTMgMTJhOSA5IDAgMSAxIDE1LjgxNyA1Ljg3NmwtNi44MDUtNi44MDYtNS44NTMgNS44NTItLjk2Ni45NjZBOC45NSA4Ljk1IDAgMCAxIDMgMTJtMTUuNTg5IDMuNTA3LjA4Mi0uMTY0Yy41MTctMS4wMy43OS0yLjE4Ni43OS0zLjM0MyAwLTQuMTEzLTMuMzQ3LTcuNDYtNy40Ni03LjQ2LTQuMTE1IDAtNy40NiAzLjM0Ny03LjQ2IDcuNDYgMCAxLjE2My4yNzUgMi4zMjQuNzk2IDMuMzU4bC4wODMuMTY0IDYuNTkyLTYuNTkyek0xMiAyMWMyLjI0IDAgNC4yOS0uODE5IDUuODY2LTIuMTc0bC01Ljg1NC01Ljg1NC01Ljg2NSA1Ljg2NUE4Ljk1IDguOTUgMCAwIDAgMTIgMjEiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4K) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCN6aXJjdWl0X19hKSI+CiAgICAgICAgPHBhdGggZmlsbD0iIzA5MjMwNiIgZD0iTTAgMGgyNHYyNEgweiIvPgogICAgICAgIDxwYXRoIGZpbGw9InVybCgjemlyY3VpdF9fYikiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTQgMTJhOCA4IDAgMSAxIDE0LjA2IDUuMjIzbC02LjA1LTYuMDUtNS4yMDIgNS4yMDItLjg1OC44NTlBNy45NiA3Ljk2IDAgMCAxIDQgMTJtMTMuODU3IDMuMTE4LjA3My0uMTQ3YTYuNyA2LjcgMCAwIDAgLjcwMi0yLjk3QTYuNjQgNi42NCAwIDAgMCAxMiA1LjM2OCA2LjY0IDYuNjQgMCAwIDAgNS4zNyAxMmMwIDEuMDM0LjI0NSAyLjA2Ni43MDggMi45ODVsLjA3NC4xNDYgNS44Ni01Ljg2ek0xMiAyMGE3Ljk3IDcuOTcgMCAwIDAgNS4yMTQtMS45MzJsLTUuMjAzLTUuMjA0LTUuMjE0IDUuMjEzQTcuOTYgNy45NiAwIDAgMCAxMiAyMCIgY2xpcC1ydWxlPSJldmVub2RkIi8+CiAgICA8L2c+CiAgICA8ZGVmcz4KICAgICAgICA8bGluZWFyR3JhZGllbnQgaWQ9InppcmN1aXRfX2IiIHgxPSIxMiIgeDI9IjEyLjAyNCIgeTE9IjQiIHkyPSIyMCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjMTY5RTAwIi8+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iLjQ5IiBzdG9wLWNvbG9yPSIjMDBDNTM3Ii8+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzAwQjFDOSIvPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICAgICAgPGNsaXBQYXRoIGlkPSJ6aXJjdWl0X19hIj4KICAgICAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTAgMGgyNHYyNEgweiIvPgogICAgICAgIDwvY2xpcFBhdGg+CiAgICA8L2RlZnM+Cjwvc3ZnPgo=)
 * @see https://web3icons.io/networks/zircuit
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const NetworkZircuit = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWeb3Icon"])('NetworkZircuit', __iconNode);
;
}),
]);

//# sourceMappingURL=1qqr_%40web3icons_react_dist_1-z897e._.js.map