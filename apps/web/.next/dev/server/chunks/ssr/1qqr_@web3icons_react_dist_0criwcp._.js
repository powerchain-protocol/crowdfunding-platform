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
"[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/icons/wallets/WalletCypherock.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>WalletCypherock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@web3icons+react@4.1.20_react@19.2.8/node_modules/@web3icons/react/dist/createWeb3Icon.js [app-ssr] (ecmascript)");
;
const __iconNode = {
    branded: [
        [
            'path',
            {
                fill: 'url(#cypherock__a)',
                d: 'M12.834 18.947 14.177 21l5.323-7.794h-5.174l-3.884 5.68-3.663-5.164 2.32-.018 1.952 2.735.68-1.022-1.969-2.77H4.5l5.915 8.327 4.582-6.71h2.313l-3.178 4.596-.61-.927z'
            }
        ],
        [
            'path',
            {
                fill: 'url(#cypherock__b)',
                d: 'm10.442 5.115 3.884 5.679H19.5L14.177 3l-1.343 2.053.688 1.014.61-.926 3.178 4.596h-2.313l-4.582-6.71L4.5 11.352h5.262l1.97-2.77-.68-1.022L9.1 10.296l-2.321-.018z'
            }
        ],
        [
            'defs',
            {},
            [
                [
                    'linearGradient',
                    {
                        id: 'cypherock__a',
                        x1: '4.137',
                        x2: '19.855',
                        y1: '16.748',
                        y2: '16.748',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#FBC926'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '.006',
                                stopColor: '#FBC926'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '.253',
                                stopColor: '#FFFBCC'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '.298',
                                stopColor: '#F8EBB9'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '.388',
                                stopColor: '#E7D08F'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '.512',
                                stopColor: '#D1AA55'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '.596',
                                stopColor: '#C3922E'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '.823',
                                stopColor: '#E4C878'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '.871',
                                stopColor: '#EED688'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#FFFBCC'
                            }
                        ]
                    ]
                ],
                [
                    'linearGradient',
                    {
                        id: 'cypherock__b',
                        x1: '4.137',
                        x2: '19.855',
                        y1: '7.101',
                        y2: '7.101',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#FBC926'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '.006',
                                stopColor: '#FBC926'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '.253',
                                stopColor: '#FFFBCC'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '.298',
                                stopColor: '#F8EBB9'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '.388',
                                stopColor: '#E7D08F'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '.512',
                                stopColor: '#D1AA55'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '.596',
                                stopColor: '#C3922E'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '.823',
                                stopColor: '#E4C878'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '.871',
                                stopColor: '#EED688'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#FFFBCC'
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
                d: 'M12.834 18.947 14.177 21l5.323-7.794h-5.174l-3.884 5.68-3.663-5.164 2.32-.018 1.952 2.735.68-1.022-1.969-2.77H4.5l5.915 8.327 4.582-6.71h2.313l-3.178 4.596-.61-.927zM10.442 5.115l3.884 5.679H19.5L14.177 3l-1.343 2.053.688 1.014.61-.926 3.178 4.596h-2.313l-4.582-6.71L4.5 11.352h5.262l1.97-2.77-.68-1.022L9.1 10.296l-2.321-.018z'
            }
        ]
    ],
    background: [
        [
            'g',
            {
                clipPath: 'url(#cypherock__a)'
            },
            [
                [
                    'path',
                    {
                        fill: '#181611',
                        d: 'M24 0H0v24h24z'
                    }
                ],
                [
                    'path',
                    {
                        fill: 'url(#cypherock__b)',
                        d: 'M12.723 18.175 13.886 20l4.614-6.928h-4.484l-3.366 5.049-3.175-4.59 2.011-.016 1.692 2.431.59-.909-1.708-2.462H5.5l5.126 7.402 3.971-5.965h2.005l-2.755 4.085-.527-.823z'
                    }
                ],
                [
                    'path',
                    {
                        fill: 'url(#cypherock__c)',
                        d: 'm10.65 5.88 3.366 5.048H18.5L13.886 4l-1.163 1.825.596.901.528-.823 2.755 4.085h-2.005l-3.97-5.965L5.5 11.425h4.56l1.707-2.462-.59-.909-1.69 2.431-2.012-.015z'
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
                        id: 'cypherock__b',
                        x1: '5.185',
                        x2: '18.808',
                        y1: '16.22',
                        y2: '16.22',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#FBC926'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '.006',
                                stopColor: '#FBC926'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '.253',
                                stopColor: '#FFFBCC'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '.298',
                                stopColor: '#F8EBB9'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '.388',
                                stopColor: '#E7D08F'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '.512',
                                stopColor: '#D1AA55'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '.596',
                                stopColor: '#C3922E'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '.823',
                                stopColor: '#E4C878'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '.871',
                                stopColor: '#EED688'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#FFFBCC'
                            }
                        ]
                    ]
                ],
                [
                    'linearGradient',
                    {
                        id: 'cypherock__c',
                        x1: '5.185',
                        x2: '18.808',
                        y1: '7.645',
                        y2: '7.645',
                        gradientUnits: 'userSpaceOnUse'
                    },
                    [
                        [
                            'stop',
                            {
                                stopColor: '#FBC926'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '.006',
                                stopColor: '#FBC926'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '.253',
                                stopColor: '#FFFBCC'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '.298',
                                stopColor: '#F8EBB9'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '.388',
                                stopColor: '#E7D08F'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '.512',
                                stopColor: '#D1AA55'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '.596',
                                stopColor: '#C3922E'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '.823',
                                stopColor: '#E4C878'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '.871',
                                stopColor: '#EED688'
                            }
                        ],
                        [
                            'stop',
                            {
                                offset: '1',
                                stopColor: '#FFFBCC'
                            }
                        ]
                    ]
                ],
                [
                    'clipPath',
                    {
                        id: 'cypherock__a'
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
 * @component @name WalletCypherock
 * @description Web3Icon for WalletCypherock
 *
 * @preview (branded, mono, background)
 * @preview ![branded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9InVybCgjY3lwaGVyb2NrX19hKSIgZD0iTTEyLjgzNCAxOC45NDcgMTQuMTc3IDIxbDUuMzIzLTcuNzk0aC01LjE3NGwtMy44ODQgNS42OC0zLjY2My01LjE2NCAyLjMyLS4wMTggMS45NTIgMi43MzUuNjgtMS4wMjItMS45NjktMi43N0g0LjVsNS45MTUgOC4zMjcgNC41ODItNi43MWgyLjMxM2wtMy4xNzggNC41OTYtLjYxLS45Mjd6Ii8+CiAgICA8cGF0aCBmaWxsPSJ1cmwoI2N5cGhlcm9ja19fYikiIGQ9Im0xMC40NDIgNS4xMTUgMy44ODQgNS42NzlIMTkuNUwxNC4xNzcgM2wtMS4zNDMgMi4wNTMuNjg4IDEuMDE0LjYxLS45MjYgMy4xNzggNC41OTZoLTIuMzEzbC00LjU4Mi02LjcxTDQuNSAxMS4zNTJoNS4yNjJsMS45Ny0yLjc3LS42OC0xLjAyMkw5LjEgMTAuMjk2bC0yLjMyMS0uMDE4eiIvPgogICAgPGRlZnM+CiAgICAgICAgPGxpbmVhckdyYWRpZW50IGlkPSJjeXBoZXJvY2tfX2EiIHgxPSI0LjEzNyIgeDI9IjE5Ljg1NSIgeTE9IjE2Ljc0OCIgeTI9IjE2Ljc0OCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjRkJDOTI2Ii8+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iLjAwNiIgc3RvcC1jb2xvcj0iI0ZCQzkyNiIvPgogICAgICAgICAgICA8c3RvcCBvZmZzZXQ9Ii4yNTMiIHN0b3AtY29sb3I9IiNGRkZCQ0MiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIuMjk4IiBzdG9wLWNvbG9yPSIjRjhFQkI5Ii8+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iLjM4OCIgc3RvcC1jb2xvcj0iI0U3RDA4RiIvPgogICAgICAgICAgICA8c3RvcCBvZmZzZXQ9Ii41MTIiIHN0b3AtY29sb3I9IiNEMUFBNTUiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIuNTk2IiBzdG9wLWNvbG9yPSIjQzM5MjJFIi8+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iLjgyMyIgc3RvcC1jb2xvcj0iI0U0Qzg3OCIvPgogICAgICAgICAgICA8c3RvcCBvZmZzZXQ9Ii44NzEiIHN0b3AtY29sb3I9IiNFRUQ2ODgiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjRkZGQkNDIi8+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgICAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImN5cGhlcm9ja19fYiIgeDE9IjQuMTM3IiB4Mj0iMTkuODU1IiB5MT0iNy4xMDEiIHkyPSI3LjEwMSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjRkJDOTI2Ii8+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iLjAwNiIgc3RvcC1jb2xvcj0iI0ZCQzkyNiIvPgogICAgICAgICAgICA8c3RvcCBvZmZzZXQ9Ii4yNTMiIHN0b3AtY29sb3I9IiNGRkZCQ0MiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIuMjk4IiBzdG9wLWNvbG9yPSIjRjhFQkI5Ii8+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iLjM4OCIgc3RvcC1jb2xvcj0iI0U3RDA4RiIvPgogICAgICAgICAgICA8c3RvcCBvZmZzZXQ9Ii41MTIiIHN0b3AtY29sb3I9IiNEMUFBNTUiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIuNTk2IiBzdG9wLWNvbG9yPSIjQzM5MjJFIi8+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iLjgyMyIgc3RvcC1jb2xvcj0iI0U0Qzg3OCIvPgogICAgICAgICAgICA8c3RvcCBvZmZzZXQ9Ii44NzEiIHN0b3AtY29sb3I9IiNFRUQ2ODgiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjRkZGQkNDIi8+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgIDwvZGVmcz4KPC9zdmc+Cg==) ![mono](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xMi44MzQgMTguOTQ3IDE0LjE3NyAyMWw1LjMyMy03Ljc5NGgtNS4xNzRsLTMuODg0IDUuNjgtMy42NjMtNS4xNjQgMi4zMi0uMDE4IDEuOTUyIDIuNzM1LjY4LTEuMDIyLTEuOTY5LTIuNzdINC41bDUuOTE1IDguMzI3IDQuNTgyLTYuNzFoMi4zMTNsLTMuMTc4IDQuNTk2LS42MS0uOTI3ek0xMC40NDIgNS4xMTVsMy44ODQgNS42NzlIMTkuNUwxNC4xNzcgM2wtMS4zNDMgMi4wNTMuNjg4IDEuMDE0LjYxLS45MjYgMy4xNzggNC41OTZoLTIuMzEzbC00LjU4Mi02LjcxTDQuNSAxMS4zNTJoNS4yNjJsMS45Ny0yLjc3LS42OC0xLjAyMkw5LjEgMTAuMjk2bC0yLjMyMS0uMDE4eiIvPgo8L3N2Zz4K) ![background](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0id2ViM2ljb25zIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNjeXBoZXJvY2tfX2EpIj4KICAgICAgICA8cGF0aCBmaWxsPSIjMTgxNjExIiBkPSJNMjQgMEgwdjI0aDI0eiIvPgogICAgICAgIDxwYXRoIGZpbGw9InVybCgjY3lwaGVyb2NrX19iKSIgZD0iTTEyLjcyMyAxOC4xNzUgMTMuODg2IDIwbDQuNjE0LTYuOTI4aC00LjQ4NGwtMy4zNjYgNS4wNDktMy4xNzUtNC41OSAyLjAxMS0uMDE2IDEuNjkyIDIuNDMxLjU5LS45MDktMS43MDgtMi40NjJINS41bDUuMTI2IDcuNDAyIDMuOTcxLTUuOTY1aDIuMDA1bC0yLjc1NSA0LjA4NS0uNTI3LS44MjN6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0idXJsKCNjeXBoZXJvY2tfX2MpIiBkPSJtMTAuNjUgNS44OCAzLjM2NiA1LjA0OEgxOC41TDEzLjg4NiA0bC0xLjE2MyAxLjgyNS41OTYuOTAxLjUyOC0uODIzIDIuNzU1IDQuMDg1aC0yLjAwNWwtMy45Ny01Ljk2NUw1LjUgMTEuNDI1aDQuNTZsMS43MDctMi40NjItLjU5LS45MDktMS42OSAyLjQzMS0yLjAxMi0uMDE1eiIvPgogICAgPC9nPgogICAgPGRlZnM+CiAgICAgICAgPGxpbmVhckdyYWRpZW50IGlkPSJjeXBoZXJvY2tfX2IiIHgxPSI1LjE4NSIgeDI9IjE4LjgwOCIgeTE9IjE2LjIyIiB5Mj0iMTYuMjIiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iI0ZCQzkyNiIvPgogICAgICAgICAgICA8c3RvcCBvZmZzZXQ9Ii4wMDYiIHN0b3AtY29sb3I9IiNGQkM5MjYiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIuMjUzIiBzdG9wLWNvbG9yPSIjRkZGQkNDIi8+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iLjI5OCIgc3RvcC1jb2xvcj0iI0Y4RUJCOSIvPgogICAgICAgICAgICA8c3RvcCBvZmZzZXQ9Ii4zODgiIHN0b3AtY29sb3I9IiNFN0QwOEYiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIuNTEyIiBzdG9wLWNvbG9yPSIjRDFBQTU1Ii8+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iLjU5NiIgc3RvcC1jb2xvcj0iI0MzOTIyRSIvPgogICAgICAgICAgICA8c3RvcCBvZmZzZXQ9Ii44MjMiIHN0b3AtY29sb3I9IiNFNEM4NzgiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIuODcxIiBzdG9wLWNvbG9yPSIjRUVENjg4Ii8+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI0ZGRkJDQyIvPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICAgICAgPGxpbmVhckdyYWRpZW50IGlkPSJjeXBoZXJvY2tfX2MiIHgxPSI1LjE4NSIgeDI9IjE4LjgwOCIgeTE9IjcuNjQ1IiB5Mj0iNy42NDUiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iI0ZCQzkyNiIvPgogICAgICAgICAgICA8c3RvcCBvZmZzZXQ9Ii4wMDYiIHN0b3AtY29sb3I9IiNGQkM5MjYiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIuMjUzIiBzdG9wLWNvbG9yPSIjRkZGQkNDIi8+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iLjI5OCIgc3RvcC1jb2xvcj0iI0Y4RUJCOSIvPgogICAgICAgICAgICA8c3RvcCBvZmZzZXQ9Ii4zODgiIHN0b3AtY29sb3I9IiNFN0QwOEYiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIuNTEyIiBzdG9wLWNvbG9yPSIjRDFBQTU1Ii8+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iLjU5NiIgc3RvcC1jb2xvcj0iI0MzOTIyRSIvPgogICAgICAgICAgICA8c3RvcCBvZmZzZXQ9Ii44MjMiIHN0b3AtY29sb3I9IiNFNEM4NzgiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIuODcxIiBzdG9wLWNvbG9yPSIjRUVENjg4Ii8+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI0ZGRkJDQyIvPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICAgICAgPGNsaXBQYXRoIGlkPSJjeXBoZXJvY2tfX2EiPgogICAgICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMCAwaDI0djI0SDB6Ii8+CiAgICAgICAgPC9jbGlwUGF0aD4KICAgIDwvZGVmcz4KPC9zdmc+Cg==)
 * @see https://web3icons.io/wallets/cypherock
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 *
 */ const WalletCypherock = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$web3icons$2b$react$40$4$2e$1$2e$20_react$40$19$2e$2$2e$8$2f$node_modules$2f40$web3icons$2f$react$2f$dist$2f$createWeb3Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createWeb3Icon"])('WalletCypherock', __iconNode);
;
}),
];

//# sourceMappingURL=1qqr_%40web3icons_react_dist_0criwcp._.js.map